export interface CylindoImageAndVideoAlternateContent {
  // IMAGES AND VIDEOS
  description?: string;
  thumb?: string;
  muted?: boolean;
  // IMAGES
  image?: string;
  // The zoom property needs a URL to show the photo with zoom (best if has high quality)
  zoom?: string;

  // VIDEOS
  provider?: 'direct';
  // Poster it's a thumb that appears on the first load when it play the video
  // Some mobile devices shows a blank square instead of frames of video.
  poster?: string;
  sources?: [
    {
      src: string;
      type: string;
    },
  ];
  options?: {
    autoplay?: boolean; // By default 1
    currentTime?: number;
  };
}

interface SetCylindoViewerProps {
  setCylindoViewerInstance: (cylindoViewerInstance: any) => void;
  cylindoProductCode: string | undefined;
  cylindoProductFeatures: string[] | any[];
  cylindoViewerInstance: any;
  enableTooltip?: boolean;
  enableThumbs?: boolean;
  enableZoom?: boolean;
  containerId?: string;
  size?: number | null;
  ARDesktop?: boolean;
  ARQuickLook?: boolean;
  ARBtnTxt?: string;
  tooltipText?: string;
  locale?: string;
  frames?: CylindoImageAndVideoAlternateContent[];
  startFrame?: number;
  thumbAngles?: number[];
}

export const setCylindoViewer = ({
  setCylindoViewerInstance,
  cylindoProductCode = 'PRODUCT',
  cylindoProductFeatures,
  cylindoViewerInstance,
  enableTooltip = true,
  enableThumbs = true,
  enableZoom = true,
  size = null,
  containerId = 'cylindo-container',
  ARDesktop = true,
  ARQuickLook = true,
  locale,
  ARBtnTxt = locale === 'en' ? 'View in your space' : 'Voir dans votre espace',
  tooltipText = locale === 'en'
    ? 'Drag to rotate'
    : 'Faire glisser pour pivoter',
  frames = [],
  startFrame = 1,
  thumbAngles = [],
}: SetCylindoViewerProps) => {
  if (cylindoViewerInstance) {
    cylindoViewerInstance.destroy();
  }
  // if (cylindoViewerInstance) {
  //   cylindoViewerInstance.setProduct(cylindoProductCode);
  //   cylindoViewerInstance.setFeatures(cylindoProductFeatures);
  // } else {

  // the opts object should hold the start properties of the 360 HD Viewer
  const filteredFrames = frames.filter(
    obj => !obj.image?.includes('undefined'),
  );
  const opts: any = {
    accountID: 5035,
    productCode: cylindoProductCode,
    features: cylindoProductFeatures,
    containerID: `#${containerId}`,
    thumbs: enableThumbs,
    format: 'png',
    backgroundColor: null,
    zoom: enableZoom,
    size,
    // presentation: 'single',
    viewerType: 1,
    ARDesktop,
    ARQuickLook,
    ARBtnTxt,
    tooltipText,
    tooltipDragText: enableTooltip ? tooltipText : '',
    startFrame,
    alternateContent: filteredFrames,
  };

  if (thumbAngles.length > 0) {
    opts.thumbAngles = thumbAngles;
  }
  // console.log({ opts });
  // make sure the cylindo framework has been "installed"
  if (window.cylindo) {
    // do not instantiate the viewer until the framework reports ready.
    window.cylindo.on('ready', () => {
      // create the instance
      const viewerInstance = window.cylindo.viewer.create(opts);
      console.log('viewer', viewerInstance);
      setCylindoViewerInstance(viewerInstance);
    });
  }
  // }
};
