
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
  category: 'aerial' | 'site' | 'amenities' | 'landscape';
  thumbnail?: string;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [playingVideos, setPlayingVideos] = useState<{[key: string]: boolean}>({});
  const videoRefs = useRef<{[key: string]: HTMLVideoElement | null}>({});
  const videoPlaybackStates = useRef<{[key: string]: boolean}>({});
  
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
  const [galleryMedia, setGalleryMedia] = useState<MediaItem[]>([]);
  const [loadingVideos, setLoadingVideos] = useState<{[key: string]: boolean}>({});
  const [videoErrors, setVideoErrors] = useState<{[key: string]: boolean}>({});

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'aerial', name: 'Aerial Views' },
    { id: 'site', name: 'Site Progress' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'amenities', name: 'Amenities' }
  ];

  // Initialize gallery media
  useEffect(() => {
    const loadMedia = () => {
      const loadedImages = imageFiles.map((file, index) => {
        const filename = file.split('/').pop() || '';
        return {
          id: `img-${index}`,
          type: 'image' as const,
          src: file,
          title: filename.replace(/\.[^/.]+$/, '').replace(/[-_()\d]/g, ' ').trim(),
          description: `Image ${index + 1} of our project gallery`,
          category: ['aerial', 'site', 'landscape'][index % 3] as 'aerial' | 'site' | 'landscape'
        };
      });

      const loadedVideos = videoFiles.map((file, index) => {
        const filename = file.split('/').pop() || '';
        const videoId = `vid-${index}`;
        return {
          id: videoId,
          type: 'video' as const,
          src: file,
          title: filename.replace(/\.[^/.]+$/, '').replace(/[-_()\d]/g, ' ').trim(),
          description: `Video ${index + 1} showcasing our project`,
          category: ['aerial', 'site', 'landscape', 'amenities'][index % 4] as 'aerial' | 'site' | 'landscape' | 'amenities',
          thumbnail: loadedImages[index % loadedImages.length]?.src // Use an image as thumbnail
        };
      });

      setGalleryMedia([...loadedImages, ...loadedVideos]);
    };

    loadMedia();
  }, []);

  const filteredMedia = selectedCategory === 'all' 
    ? galleryMedia 
    : galleryMedia.filter(media => media.category === selectedCategory);

  const openMedia = (media: MediaItem) => {
    setSelectedMedia(media);
    document.body.style.overflow = 'hidden';
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
    
    // Pause all videos when closing
    videoRefs.current.forEach(video => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedMedia) return;
    
    const currentIndex = filteredMedia.findIndex(media => media.id === selectedMedia.id);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredMedia.length;
    } else {
      newIndex = (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    }
    
    setSelectedMedia(filteredMedia[newIndex]);
  };

  // Handle keyboard navigation
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

  // Close media viewer
  const closeMedia = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle video playback
  const handleVideoPlay = async (media: MediaItem) => {
    const video = videoRefs.current[media.id];
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
        setPlayingVideos(prev => ({ ...prev, [media.id]: true }));
      } else {
        video.pause();
        setPlayingVideos(prev => ({ ...prev, [media.id]: false }));
      }
    } catch (error) {
      console.error('Error controlling video:', error);
      setVideoErrors(prev => ({ ...prev, [media.id]: true }));
    }
  };

  // Handle video ended
  const handleVideoEnded = (mediaId: string) => {
    setPlayingVideos(prev => ({ ...prev, [mediaId]: false }));
  };

  // Handle video click
  const handleVideoClick = (media: MediaItem, e: React.MouseEvent) => {
    e.stopPropagation();
    handleVideoPlay(media);
  };

  // Handle video hover
  const handleVideoHover = (media: MediaItem, isHovered: boolean) => {
    setHoveredVideo(isHovered ? media.id : null);
  };

  // Handle modal navigation
  const navigateMedia = (direction: 'prev' | 'next') => {
    if (!selectedMedia) return;
    
    const currentIndex = filteredMedia.findIndex(m => m.id === selectedMedia.id);
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredMedia.length
      : (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    
    setSelectedMedia(filteredMedia[newIndex]);
  };

  // Handle keyboard navigation
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

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-luxury-navy text-luxury-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Project Gallery
            </h1>
            <p className="text-lg md:text-xl text-luxury-champagne max-w-3xl mx-auto">
              Explore our premium residential project through stunning visuals and videos
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 md:py-12 bg-luxury-cream/30 sticky top-16 z-10 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-luxury-gold text-luxury-navy shadow-md'
                      : 'bg-white text-luxury-navy hover:bg-luxury-gold/80 hover:text-luxury-navy shadow-sm'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredMedia.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-luxury-charcoal/70 text-lg">No media found in this category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMedia.map((media, index) => (
                  <div 
                    key={media.id}
                    className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-64 md:h-80"
                    onClick={() => openMedia(media)}
                  >
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={media.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="relative w-full h-full">
                        {media.thumbnail ? (
                          <img
                            src={media.thumbnail}
                            alt={`${media.title} thumbnail`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="relative w-full h-full">
                            {videoErrors[media.id] ? (
                              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-500">Video failed to load</span>
                              </div>
                            ) : (
                              <>
                                {loadingVideos[media.id] && (
                                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-luxury-gold"></div>
                                  </div>
                                )}
                                <video
                                  ref={el => {
                                    if (el) {
                                      videoRefs.current[media.id] = el;
                                      // Preload metadata for faster playback
                                      el.load();
                                    }
                                  }}
                                  src={media.src}
                                  className={`w-full h-full object-cover ${loadingVideos[media.id] ? 'opacity-50' : 'opacity-100'}`}
                                  loop
                                  muted
                                  playsInline
                                  preload="metadata"
                                  poster={media.thumbnail}
                                  onPlay={() => {
                                    videoPlaybackStates.current[media.id] = true;
                                    setPlayingVideos(prev => ({...prev, [media.id]: true}));
                                    setLoadingVideos(prev => ({...prev, [media.id]: false}));
                                  }}
                                  onPause={() => {
                                    videoPlaybackStates.current[media.id] = false;
                                    setPlayingVideos(prev => ({...prev, [media.id]: false}));
                                  }}
                                  onError={() => {
                                    setVideoErrors(prev => ({...prev, [media.id]: true}));
                                    setLoadingVideos(prev => ({...prev, [media.id]: false}));
                                  }}
                                  onLoadedMetadata={() => {
                                    setLoadingVideos(prev => ({...prev, [media.id]: false}));
                                  }}
                                  onMouseEnter={() => setHoveredVideo(media.id)}
                                  onMouseLeave={() => setHoveredVideo(null)}
                                  onClick={(e) => handleVideoClick(media, e)}
                                />
                              </>
                            )}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-luxury-gold/80 p-3 rounded-full">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <h3 className="font-semibold text-lg">{media.title}</h3>
                      <p className="text-sm text-luxury-champagne line-clamp-1">{media.description}</p>
                    </div>
                    {media.type === 'video' && (
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Media Viewer Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeMedia}
              className="absolute top-4 right-4 text-white hover:text-luxury-gold transition-colors"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('prev');
              }}
              className="absolute left-4 md:left-8 p-2 text-white hover:text-luxury-gold transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            
            <div className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center">
              {selectedMedia.type === 'image' ? (
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.title}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  ref={el => {
                    if (el) {
                      videoRefs.current[selectedMedia.id] = el;
                      el.play();
                    }
                  }}
                  src={selectedMedia.src}
                  className="max-w-full max-h-[80vh]"
                  controls
                  autoPlay
                  playsInline
                />
              )}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 p-2 rounded">
                <h3 className="text-lg font-semibold">{selectedMedia.title}</h3>
                <p className="text-sm text-luxury-champagne">{selectedMedia.description}</p>
              </div>
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateMedia('next');
              }}
              className="absolute right-4 md:right-8 p-2 text-white hover:text-luxury-gold transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
