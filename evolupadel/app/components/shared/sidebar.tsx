import { Home, Users, FileText } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <aside className="w-64 bg-white shadow-xl">
        <div className="p-6 text-xl font-bold border-b">PADEL</div>
        <nav className="p-4 space-y-4">
          <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <Home className="w-5 h-5" /> <span>Dashboard</span>
          </Link>
          <Link to="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <Users className="w-5 h-5" /> <span>Alunos</span>
          </Link>
          <Link to="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
            <FileText className="w-5 h-5" /> <span>Relatórios</span>
          </Link>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}