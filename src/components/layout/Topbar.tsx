"use client";

import React from "react";
import { Bell, Search, Sparkles, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useSession } from "next-auth/react";

export const Topbar = () => {
  const { data: session } = useSession();

  return (
    <header className="h-20 bg-card/50 backdrop-blur-xl border-b border-border flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center bg-muted/50 px-4 py-2.5 rounded-2xl w-96 border border-border focus-within:border-primary/50 transition-all group">
        <Search size={18} className="text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          placeholder="Search your brands, logos, kits..."
          className="bg-transparent border-none focus:outline-none ml-3 w-full text-sm text-foreground placeholder:text-muted-foreground/50"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10 mr-4">
            <Sparkles size={14} className="text-primary mr-2 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Pro Status</span>
        </div>

        <ThemeToggle />

        <button className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-muted text-muted-foreground hover:text-primary transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-[8px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-lg">
            2
          </span>
        </button>

        <div className="h-8 w-px bg-border mx-2" />

        <div className="flex items-center space-x-3 pl-2">
          <div className="flex flex-col items-end hidden sm:flex">
            <p className="text-xs font-black text-foreground uppercase tracking-tight">{session?.user?.name || "User"}</p>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Free Account</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 p-[1px]">
              <div className="w-full h-full rounded-[11px] bg-card flex items-center justify-center text-primary overflow-hidden">
                {session?.user?.image ? (
                    <img src={session.user.image} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                    <User size={20} />
                )}
              </div>
          </div>
        </div>
      </div>
    </header>
  );
};
