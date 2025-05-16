import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { Genre } from "../types/book";

interface SearchBarProps {
  onSearch: (
    keyword: string,
    genre: Genre | "",
    isAvailable: boolean | null
  ) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const genres: Genre[] = ["小説", "ビジネス", "技術書", "趣味", "その他"];

  return (
    <div className="p-4 bg-white border-b border-blue-100">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="書籍名、著者名で検索"
            className="w-full pl-10 pr-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onSearch(e.target.value, "", null)}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 w-5 h-5 text-blue-400" />
        </div>

        <select
          className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onSearch("", e.target.value as Genre, null)}
        >
          <option value="">ジャンルを選択</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select
          className="px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => {
            const value =
              e.target.value === "" ? null : e.target.value === "true";
            onSearch("", "", value);
          }}
        >
          <option value="">貸出状況</option>
          <option value="true">貸出可能</option>
          <option value="false">貸出中</option>
        </select>
      </div>
    </div>
  );
};
