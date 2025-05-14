import type { Book } from "../types/book";

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-lg">書籍が見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
        >
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-blue-900">
                {book.title}
              </h3>
              <span
                className={`px-2 py-1 text-sm rounded-full ${
                  book.isAvailable
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {book.isAvailable ? "貸出可能" : "貸出中"}
              </span>
            </div>
            <p className="text-blue-700 mt-1">{book.author}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {book.genre}
              </span>
              <span className="text-sm text-blue-600">
                {book.publishedYear}年
              </span>
            </div>
            <p className="mt-3 text-gray-600 text-sm line-clamp-2">
              {book.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
