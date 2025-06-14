import { useEffect, useRef } from 'react';

const VideoTest = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        <h1 className="text-2xl font-bold p-4 bg-gray-800 text-white">Video Test Page</h1>
        
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Testing Video Playback</h2>
          
          <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
              onError={(e) => console.error('Video error:', e)}
              onCanPlay={() => console.log('Video can play')}
            >
              <source 
                src="/videos/logo-video.mp4" 
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Debug Information:</h3>
            <p className="text-sm text-gray-600">
              Video path: <code>/videos/logo-video.mp4</code>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Check browser console for any error messages.
            </p>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="/" 
              className="block text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Back to Home
            </a>
            <button 
              onClick={() => window.location.reload()}
              className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTest;
