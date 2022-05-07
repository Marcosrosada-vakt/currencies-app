export type Product = {
  id: number;
  name: string;
  description: string;
  picture: string;
  price: number;
  quantity: number;
  total: number;
  currency: string;
  type: string;
}

export type Currency = {
  privacy: string;
  quotes: unknown[]; //Record<string, number>;
  source: string;
  success: boolean;
  terms: string;
  timestamp: Date;
}

export type Exchange = {
  currency: string;
  exchange: number;
}