
export type SlideType = 
  | 'title' 
  | 'list' 
  | 'interactive-password' 
  | 'interactive-phishing' 
  | 'danger-grid' 
  | 'takeaways' 
  | 'conclusion';

export interface SlideContent {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string;
  items?: string[];
  icon?: string;
  accentColor: string;
}

export interface PresentationData {
  slides: SlideContent[];
}
