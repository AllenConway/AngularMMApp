import { Images } from './images';
export interface Cabin {
    id: number;
    name: string;
    location: string;
    occupancy: number;
    mainImageUrl?: string;
    images?: Images[];
  }
