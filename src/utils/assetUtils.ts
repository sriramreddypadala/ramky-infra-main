/**
 * Helper function to get correct asset path in both dev and prod
 * @param path - The path to the asset (relative to public folder in production)
 * @returns The correct path to the asset based on the environment
 */
const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In development, use the path as is (handled by Vite dev server)
  if (import.meta.env.DEV) {
    return `/${cleanPath}`;
  }
  
  // In production, assets are copied to the root of the dist folder
  return `./${cleanPath}`;
};

export { getAssetPath };
