const breakPoints = {
  mobile: 960,
};

function isMobile() {
  return window.innerWidth < breakPoints.mobile;
}

function isDesktop() {
  return !isMobile();
}

const media = {
  desktop: `(min-width: ${breakPoints.mobile}px)`,
  mobile: `(max-width: ${breakPoints.mobile - 1}px)`,
  isMobile,
  isDesktop,
}

export default media;


