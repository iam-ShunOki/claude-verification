import type { Book } from "../types/book";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "React入門",
    author: "山田太郎",
    genre: "技術書",
    isAvailable: true,
    publishedYear: 2023,
    description: "Reactの基礎から応用までを解説した入門書です。",
  },
  {
    id: "2",
    title: "ビジネスモデルキャンバス",
    author: "鈴木一郎",
    genre: "ビジネス",
    isAvailable: false,
    publishedYear: 2022,
    description: "ビジネスモデルの設計と実践について解説しています。",
  },
  {
    id: "3",
    title: "星の王子さま",
    author: "サン＝テグジュペリ",
    genre: "小説",
    isAvailable: true,
    publishedYear: 2021,
    description: "世界中で愛される名作小説です。",
  },
  {
    id: "4",
    title: "プログラミングTypeScript",
    author: "佐藤次郎",
    genre: "技術書",
    isAvailable: true,
    publishedYear: 2023,
    description: "TypeScriptの実践的な使い方を解説しています。",
  },
  {
    id: "5",
    title: "写真の撮り方入門",
    author: "田中花子",
    genre: "趣味",
    isAvailable: false,
    publishedYear: 2022,
    description: "初心者向けの写真撮影テクニックを紹介しています。",
  },
];
