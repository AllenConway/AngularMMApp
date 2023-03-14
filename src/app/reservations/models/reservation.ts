export interface Reservation {
    id: number;
    firstName: string;
    lastName: string;
    checkinDate: Date;
    checkoutDate: Date;
    cabinId: number;
    occupancy: number;
    additonalNotes?: string;
  }