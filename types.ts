
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Entrees' | 'Pasta' | 'Desserts' | 'Takeout';
  image?: string;
}

export interface ReservationDetails {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
