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
