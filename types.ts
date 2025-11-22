
export interface ImageAsset {
  id: string;
  src: string;
  alt: string;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}

export enum AppState {
  LANDING = 'LANDING',
  GENERATOR = 'GENERATOR',
  GALLERY = 'GALLERY'
}
