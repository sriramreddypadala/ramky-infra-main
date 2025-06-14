import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type PlotData = {
  sno: string;
  phases: string;
  plotNumber: string;
  plotSqYards: string;
  facing: string;
  mortgage: string;
  vacantPlot: string;
};

type PhaseData = {
  [key: string]: PlotData[];
};

const PlotInfo = () => {
  const [plotData, setPlotData] = useState<PhaseData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlotData = async () => {
      try {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbynhQ1SBqf1xFNWQs7mq6To5moiJVj4EAcpzfFtoUg-3HfK6e0Kc0pDvJCgMUOar_T0Yw/exec';
        const response = await fetch(`${scriptUrl}?action=getData`);
        const data = await response.json();
        
        const phases: PhaseData = {
          'Phase-I': [],
          'Phase-II': [],
          'Phase-III': []
        };

        data.forEach((plot: PlotData) => {
          if (plot.phases && phases[plot.phases]) {
            phases[plot.phases].push(plot);
          }
        });

        setPlotData(phases);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching plot data:', err);
        setError('Failed to load plot information. Please try again later.');
        setLoading(false);
      }
    };

    fetchPlotData();
  }, []);

  const handlePlotClick = (plotId: string) => {
    setActiveTooltip(activeTooltip === plotId ? null : plotId);
  };

  if (loading) {
    return <div className="text-center py-8">Loading plot information...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col items-center w-full px-4">
      <Card className="w-full max-w-7xl mt-8 border-luxury-gold/30 bg-luxury-cream/10">
        <CardContent className="p-6">
          <h2 className="text-3xl font-playfair font-semibold mb-8 text-center text-luxury-navy">Plot Availability</h2>
          
          <div className="w-full">
            {Object.entries(plotData).map(([phase, plots]) => (
              <div key={phase} className="mb-12">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-center text-luxury-gold border-b border-luxury-gold/30 pb-2 inline-block px-8">
                  {phase}
                </h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full">
                    {plots.map((plot, index) => {
                      const plotId = `${phase}-${plot.plotNumber}`;
                      const isAvailable = plot.vacantPlot === "Yes";
                      const isMortgaged = plot.mortgage === "Yes";
                      
                      let bgColor = isAvailable 
                        ? 'bg-green-100 hover:bg-green-200' 
                        : 'bg-red-100 hover:bg-red-200';
                      if (isMortgaged) bgColor = 'bg-blue-100 hover:bg-blue-200';
                      
                      return (
                        <div 
                          key={index}
                          className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-110 hover:z-10 ${bgColor} 
                            rounded-xl p-3 h-24 flex flex-col items-center justify-center shadow-sm hover:shadow-xl border border-luxury-gold/20`}
                          onClick={() => handlePlotClick(plotId)}
                        >
                          <div className="text-center transform group-hover:-translate-y-1 transition-transform duration-300">
                            <div className="font-bold text-lg text-luxury-navy">{plot.plotNumber}</div>
                            <div className="text-sm text-luxury-navy/80">{plot.plotSqYards} sq.yds</div>
                          </div>
                          
                          {/* Animated border on hover */}
                          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-luxury-gold/50 transition-all duration-300 pointer-events-none"></div>
                          
                          {/* Tooltip */}
                          <div className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-2 
                            bg-white text-luxury-navy text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 
                            transition-all duration-300 pointer-events-none z-20 whitespace-nowrap border border-luxury-gold/20
                            ${activeTooltip === plotId ? 'opacity-100' : ''}`}>
                            <div className="font-medium">
                              Plot {plot.plotNumber}
                            </div>
                            <div className="text-xs">
                              {isAvailable ? 'Available' : 'Sold'}{isMortgaged ? ' (Mortgaged)' : ''}
                            </div>
                            <div className="text-xs">Facing: {plot.facing}</div>
                            <div className="text-xs">Area: {plot.plotSqYards} sq.yds</div>
                            
                            {/* Tooltip arrow */}
                            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 
                              bg-white rotate-45 border-r border-b border-luxury-gold/20"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-green-100 rounded-full border-2 border-green-300 mr-2"></div>
              <span className="text-sm font-medium text-luxury-navy">Available</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-red-100 rounded-full border-2 border-red-300 mr-2"></div>
              <span className="text-sm font-medium text-luxury-navy">Sold</span>
            </div>
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-100 rounded-full border-2 border-blue-300 mr-2"></div>
              <span className="text-sm font-medium text-luxury-navy">Mortgaged</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlotInfo;
