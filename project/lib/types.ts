export interface Guests {
  adults: number;
  children: number;
}

export interface BookingData {
  checkIn: string;
  checkOut: string;
  rooms: number;
  guests: Guests;
}
