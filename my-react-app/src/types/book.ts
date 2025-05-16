export type Genre = "小説" | "ビジネス" | "技術書" | "趣味" | "その他";

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: Genre;
  isAvailable: boolean;
  publishedYear: number;
  description: string;
  coverImage?: string;
}
