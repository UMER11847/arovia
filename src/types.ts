export interface Treatment {
  id: string;
  name: string;
  category: 'injectables' | 'skin-health' | 'rejuvenation';
  categoryLabel: string;
  tagline: string;
  description: string;
  fullDetails: string;
  duration: string;
  downtime: string;
  longevity: string;
  sensation: string;
  targetAreas: string[];
  image: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  treatmentName: string;
  category: string;
  image: string;
  focus: string;
  description: string;
  downtime: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  treatment: string;
  verified: boolean;
  date: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  aspect: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  treatmentId: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

export interface BookingConfirmation extends BookingFormData {
  referenceNumber: string;
  timestamp: string;
  treatmentName: string;
}
