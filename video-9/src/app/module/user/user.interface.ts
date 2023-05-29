import { BOOK } from "../book/book.interface";

export interface USER {
  id: number;
  name: string;
  roll: number;
  className: number;
  subject: BOOK[];
  regular: boolean;
  gender: string;
}
