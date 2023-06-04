export default function getNavHeight() {
  let height = 60;
  if (typeof document !== "undefined") {
    const navbar = document.querySelector(`header nav`) as HTMLElement;
    if (navbar) return (height = navbar.offsetHeight);
  }

  return height;
}
