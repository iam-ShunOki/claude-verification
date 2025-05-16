import {
  BookOpenIcon,
  CogIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "ホーム", icon: HomeIcon, href: "#" },
  { name: "書籍一覧", icon: BookOpenIcon, href: "#" },
  { name: "利用者管理", icon: UserGroupIcon, href: "#" },
  { name: "設定", icon: CogIcon, href: "#" },
];

export const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-50 border-r border-blue-100">
      <div className="p-4">
        <h1 className="text-xl font-bold text-blue-800">書籍管理システム</h1>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 text-blue-700 hover:bg-blue-100"
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
};
