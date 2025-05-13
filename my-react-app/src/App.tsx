import { useState } from "react";
import "./App.css";
import { BookList } from "./components/BookList";
import { SearchBar } from "./components/SearchBar";
import { Sidebar } from "./components/Sidebar";
import { mockBooks } from "./data/mockBooks";
import type { Book, Genre } from "./types/book";

function App() {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(mockBooks);

  const handleSearch = (
    keyword: string,
    genre: Genre | "",
    isAvailable: boolean | null
  ) => {
    let filtered = mockBooks;

    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(lowerKeyword) ||
          book.author.toLowerCase().includes(lowerKeyword)
      );
    }

    if (genre) {
      filtered = filtered.filter((book) => book.genre === genre);
    }

    if (isAvailable !== null) {
      filtered = filtered.filter((book) => book.isAvailable === isAvailable);
    }

    setFilteredBooks(filtered);
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
