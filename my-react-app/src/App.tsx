import { useState, useEffect } from "react";
import "./App.css";
import { BookList } from "./components/BookList";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { mockBooks } from "./data/mockBooks";
import type { Book, Genre } from "./types/book";

function App() {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<Genre | "">("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let filtered = mockBooks;

    if (searchKeyword) {
      const lowerKeyword = searchKeyword.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerKeyword) ||
          book.author.toLowerCase().includes(lowerKeyword)
      );
    }

    if (selectedGenre) {
      filtered = filtered.filter((book) => book.genre === selectedGenre);
    }

    if (isAvailable !== null) {
      filtered = filtered.filter((book) => book.isAvailable === isAvailable);
    }

    setFilteredBooks(filtered);
  }, [searchKeyword, selectedGenre, isAvailable]);

  const handleSearch = (
    keyword: string,
    genre: Genre | "",
    available: boolean | null
  ) => {
    setSearchKeyword(keyword);
    setSelectedGenre(genre);
    setIsAvailable(available);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <SearchBar onSearch={handleSearch} />
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
}

export default App;
