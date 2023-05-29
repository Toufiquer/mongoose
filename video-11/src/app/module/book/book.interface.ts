import { HydratedDocument, Model } from "mongoose";
export interface BOOK {
  id: number;
  name: string;
  author: {
    name: string;
    id: number;
  };
  price: number;
}

// instance method interface
export interface BOOK_NAME_PRICE {
  getNamePrice(): string;
}

// static method
export interface BOOK_NAME_PRICE_BOTH extends Model<BOOK, {}, BOOK_NAME_PRICE> {
  getStaticNamePrice(): Promise<HydratedDocument<BOOK, BOOK_NAME_PRICE>>;
}
