export interface Game {
  id: string;
  title: string;
  year: number;
  genre: string;
  platform: string;
  thumbnail: string;
  description: string;
  controls: string[];
  romUrl: string;
  emulator: string;
  featured: boolean;
}

export interface User {
  id: string;
  email: string;
  isSubscribed: boolean;
  subscriptionExpires?: Date;
  isAdmin: boolean;
  lastPlayed?: Date;
  playtimeRemaining?: number; // in seconds for free users
}

export interface GameSession {
  gameId: string;
  startTime: Date;
  endTime?: Date;
  userId: string;
  totalTime: number;
}

export interface PaymentData {
  amount: number;
  currency: string;
  paymentMethod: 'paypal' | 'card';
  cardDetails?: {
    number: string;
    expiry: string;
    cvv: string;
    name: string;
  };
}

export interface GameCategory {
  id: string;
  name: string;
  description: string;
  games: Game[];
  icon: string;
}