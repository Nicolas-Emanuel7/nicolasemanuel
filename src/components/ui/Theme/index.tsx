"use client"
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../Button/button";

export default function Theme() {
  const { theme, setTheme } = useTheme();

 
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="my-3">
      <Button 
        onClick={toggleTheme} 
        className="p-2 bg-transparent border-none  hover:bg-third flex items-center rounded-full"
      >
        
        {theme === 'dark' ? (
          <Moon className="w-6 h-6 text-td"/>
        ) : (
          <Sun className="w-6 h-6 text-td"/>
        )}
      </Button>
    </div>
  );
}

