import { useState, useRef, useEffect } from 'react';
import { Play, Pause, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Image and video files from the public directory
const imageFiles = [
  '/gallery/images/DJI_0176.JPG',
  '/gallery/images/DJI_0178 (1).JPG',
  '/gallery/images/DJI_0203.JPG'
];

const videoFiles = [
  '/gallery/videos/Dji 0714.mp4',
  '/gallery/videos/Dji 0718.mp4',
  '/gallery/videos/Dji 0731.mp4',
  '/gallery/videos/Dji 0741 (1).mp4'
];

type MediaItem = {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  description: string;
  thumbnail?: string;
};

const categories = [
  { id: 'all', name: 'All' },
  { id: 'videos', name: 'Videos' },
  { id: 'images', name: 'Images' }
];

const Gallery = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [playingVideos, setPlayingVideos] = useState<{[key: string]: boolean}>({});
  const [loadingVideos, setLoadingVideos] = useState<{[key: string]: boolean}>({});
  const [videoErrors, setVideoErrors] = useState<{[key: string]: boolean}>({});
  const [galleryMedia, setGalleryMedia] = useState<MediaItem[]>([]);
  
  // Refs
  const videoRefs = useRef<{[key: string]: HTMLVideoElement | null}>({});

  // Initialize gallery media
  useEffect(() => {
    const loadMedia = () => {
      const loadedImages = imageFiles.map((file, index) => ({
        id: `img-${index}`,
        type: 'image' as const,
        src: file,
        title: '',
        description: ''
      }));

      const loadedVideos = videoFiles.map((file, index) => {
        const filename = file.split('/').pop() || '';
        const videoId = `vid-${index}`;
        return {
          id: videoId,
          type: 'video' as const,
          src: file,
          title: '',
          description: '',

          thumbnail: loadedImages[index % loadedImages.length]?.src
        };
      });

      setGalleryMedia([...loadedImages, ...loadedVideos]);
    };

    loadMedia();
  }, []);

  // Filter media by selected category
  const filteredMedia = selectedCategory === 'all'
    ? galleryMedia
    : selectedCategory === 'videos'
    ? galleryMedia.filter(media => media.type === 'video')
    : galleryMedia.filter(media => media.type === 'image');

  // Video control functions
  const playVideo = async (video: HTMLVideoElement | null, mediaId: string) => {
    if (!video) return false;
    try {
      setLoadingVideos(prev => ({...prev, [mediaId]: true}));
      await video.play();
      setPlayingVideos(prev => ({...prev, [mediaId]: true}));
      setVideoErrors(prev => ({...prev, [mediaId]: false}));
      return true;
    } catch (error) {
      console.error('Error playing video:', error);
      setVideoErrors(prev => ({...prev, [mediaId]: true}));
      return false;
    } finally {
      setLoadingVideos(prev => ({...prev, [mediaId]: false}));
    }
  };
  
  const pauseVideo = (video: HTMLVideoElement | null, mediaId: string) => {
    if (!video) return;
    try {
      video.pause();
      setPlayingVideos(prev => ({...prev, [mediaId]: false}));
      setVideoErrors(prev => ({...prev, [mediaId]: false}));
    } catch (error) {
      console.error('Error pausing video:', error);
      setVideoErrors(prev => ({...prev, [mediaId]: true}));
    }
  };

  // Event handlers
  const handleVideoClick = async (media: MediaItem, e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRefs.current[media.id];
    if (!video) return;
    
    if (video.paused) {
      await playVideo(video, media.id);
    } else {
      pauseVideo(video, media.id);
    }
  };

  const openMedia = (media: MediaItem) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedMedia) return;
    
    const currentIndex = filteredMedia.findIndex(m => m.id === selectedMedia.id);
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredMedia.length
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    
    setSelectedMedia(filteredMedia[newIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;
      
      switch (e.key) {
        case 'Escape':
          closeMedia();
          break;
        case 'ArrowRight':
          navigateMedia('next');
          break;
        case 'ArrowLeft':
          navigateMedia('prev');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMedia]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Project Gallery</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map(media => (
            <div
              key={media.id}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
              onClick={() => openMedia(media)}
              onMouseEnter={() => media.type === 'video' && setHoveredVideo(media.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              {media.type === 'image' ? (
                <img
                  src={media.src}
                  alt={media.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative">
                  <video
                    ref={el => videoRefs.current[media.id] = el}
                    src={media.src}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loop
                    muted
                    playsInline
                    poster={media.thumbnail}
                    onClick={(e) => handleVideoClick(media, e)}
                  />
                  {loadingVideos[media.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                    </div>
                  )}
                  {!playingVideos[media.id] && !loadingVideos[media.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white bg-opacity-90 rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
                        <Play className="h-8 w-8 text-gray-800" />
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </main>

      {/* Media Viewer Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeMedia}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="max-h-[80vh] mx-auto object-contain"
              />
            ) : (
              <video
                ref={el => videoRefs.current[selectedMedia.id] = el}
                src={selectedMedia.src}
                className="max-h-[80vh] mx-auto"
                controls
                autoPlay
                loop
              />
            )}
            
            <div className="mt-2"></div>
            
            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('prev');
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 hover:bg-opacity-75 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('next');
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 hover:bg-opacity-75 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Gallery;
