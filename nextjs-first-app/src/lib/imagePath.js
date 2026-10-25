const basePath =
  process.env.NODE_ENV === "production"
    ? "/nextjs-mini-projects"
    : "";

export function getImagePath(path) {
  return `${basePath}${path}`;
}