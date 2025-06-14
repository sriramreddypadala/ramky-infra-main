import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, SkipForward } from 'lucide-react';

interface WelcomeProps {
  onEnter: () => void;
}

// Video path from public directory
const videoSrc = '/media/logo animated video.mp4';

const Welcome = ({ onEnter }: WelcomeProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Auto-navigate to home after video ends or 5 seconds (whichever comes first)
    const video = videoRef.current;
    let timer: NodeJS.Timeout;

    const handleVideoEnd = () => {
      if (!isVideoEnded && !isSkipped) {
        setIsVideoEnded(true);
        onEnter();
      }
    };

    // Only set up video if we're actually showing the welcome screen
    if (video && !hasError) {
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing video:', error);
          setHasError(true);
          // If video fails to play, proceed after delay
          timer = setTimeout(handleVideoEnd, 1000);
        });
      }
      
      video.addEventListener('ended', handleVideoEnd);
      
      // Fallback in case video doesn't fire ended event
      timer = setTimeout(handleVideoEnd, 10000); // 10 second max duration
    } else {
      // If no video, proceed immediately
      timer = setTimeout(handleVideoEnd, 500);
    }

    // Cleanup
    return () => {
      if (video) {
        video.pause();
        video.removeEventListener('ended', handleVideoEnd);
      }
      if (timer) clearTimeout(timer);
    };
  }, [isVideoEnded, isSkipped, onEnter, hasError]);

  // Skip button handler
  const handleSkipClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsSkipped(true);
    onEnter();
  };

  // Render the welcome screen
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative w-full h-full max-h-screen flex items-center justify-center">
        {hasError ? (
          <div className="w-full h-full flex items-center justify-center bg-luxury-navy text-luxury-gold">
            <div className="text-center p-8">
              <h1 className="text-4xl font-bold mb-4">Welcome to Ramky Infra</h1>
              <p className="text-xl mb-8">Your journey to premium living starts here</p>
              <Button 
                onClick={handleSkipClick}
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy text-lg px-8 py-6 font-semibold flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Enter Site
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="w-full max-w-4xl aspect-video">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                autoPlay
                muted
                playsInline
                onError={() => setHasError(true)}
                onCanPlay={(e) => {
                const video = e.target as HTMLVideoElement;
                video.play().catch(error => {
                  console.error('Autoplay error:', error);
                  setHasError(true);
                });
              }}
              >
                <source 
                  src={videoSrc} 
                  type="video/mp4" 
                  key="video-source"
                  onError={() => setHasError(true)}
                />
                Your browser does not support the video tag.
              </video>
              {!hasError && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse text-white text-lg">Loading...</div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Welcome;
