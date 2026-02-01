import React from "react";
import Link from "next/link";
import { LayoutDashboard, PenTool, Briefcase, Share2, Settings, User } from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Create Logo", href: "/dashboard/create", icon: PenTool },
  { name: "Branding Kit", href: "/dashboard/kit", icon: Briefcase },
  { name: "Social Kit", href: "/dashboard/social", icon: Share2 },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">LogoAI</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <Link
          href="/admin"
          className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <User size={20} />
          <span>Admin Panel</span>
        </Link>
      </div>
    </div>
  );
};
