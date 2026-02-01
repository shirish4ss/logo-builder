import React from "react";
import { Bell, Search, LogOut } from "lucide-react";

export const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-96">
        <Search size={18} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search your logos..."
          className="bg-transparent border-none focus:outline-none ml-2 w-full text-sm text-gray-700"
        />
      </div>
      <div className="flex items-center space-x-6">
        <button className="relative text-gray-500 hover:text-blue-600">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </button>
        <div className="flex items-center space-x-3 border-l border-gray-200 pl-6">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            JD
          </div>
          <div className="text-sm">
            <p className="font-medium text-gray-900">John Doe</p>
            <p className="text-gray-500 text-xs">Free Plan</p>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};
