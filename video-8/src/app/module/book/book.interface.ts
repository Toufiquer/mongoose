export interface BOOK {
  id: number;
  name: string;
  author: {
    name: string;
    id: number;
  };
  price: number;
}

