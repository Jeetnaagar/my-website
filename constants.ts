
import { MenuItem } from './types';

export const BUSINESS_INFO = {
  name: "Lucca's Fine Italian Restaurant",
  phone: "406-457-8311",
  address: "56 N Last Chance Gulch, Helena, Montana",
  hours: "Wednesday - Sunday: 5:00 PM - Close",
  takeoutHours: "Wednesday - Sunday: 5:00 PM - 8:00 PM",
  hiringEmail: "hiring@luccas.com",
  capacity: 54,
  locationDescription: "Located on the North end of the Last Chance Gulch walking mall, West side, between the Rialto and Big Dipper Ice Cream Parlor.",
  operatingDays: [0, 3, 4, 5, 6], // Sunday (0), Wednesday (3), Thursday (4), Friday (5), Saturday (6)
  timeSlots: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"]
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Spinach & Artichoke Dip',
    description: 'Creamy blend of spinach, artichoke hearts, and aged cheeses served with house-made crostini.',
    price: '$14',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1576021182211-9ea8dced3690?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '2',
    name: 'Calamari Fritti',
    description: 'Tender calamari lightly breaded and fried, served with house marinara and lemon aioli.',
    price: '$16',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Baked Fontina Cheese',
    description: 'Imported Fontina cheese baked with herbs and olive oil, served bubbly with warm baguette slices.',
    price: '$15',
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '4',
    name: 'House-Made Pappardelle',
    description: 'Wide ribbon pasta with a slow-simmered wild boar ragu and shaved pecorino.',
    price: '$28',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '5',
    name: 'Osso Buco',
    description: 'Braised veal shank served over saffron risotto with a gremolata garnish.',
    price: '$38',
    category: 'Entrees',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    name: 'Classic Tiramisu',
    description: 'Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.',
    price: '$12',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=400'
  }
];
