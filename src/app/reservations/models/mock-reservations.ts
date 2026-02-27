import { Reservation } from './reservation';

const today = new Date();
const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1);
const nextWeek = new Date(today); nextWeek.setDate(today.getDate() + 7);
const lastWeek = new Date(today); lastWeek.setDate(today.getDate() - 7);

export const RESERVATIONS: Reservation[] = [
  { id: 1, firstName: 'John', lastName: 'Smith', checkinDate: today, checkoutDate: tomorrow, cabinId: 1, occupancy: 2 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', checkinDate: yesterday, checkoutDate: tomorrow, cabinId: 2, occupancy: 4 },
  { id: 3, firstName: 'Bob', lastName: 'Johnson', checkinDate: today, checkoutDate: nextWeek, cabinId: 3, occupancy: 6 },
  { id: 4, firstName: 'Alice', lastName: 'Williams', checkinDate: lastWeek, checkoutDate: yesterday, cabinId: 4, occupancy: 3 },
  { id: 5, firstName: 'Charlie', lastName: 'Brown', checkinDate: tomorrow, checkoutDate: nextWeek, cabinId: 5, occupancy: 2 }
];
