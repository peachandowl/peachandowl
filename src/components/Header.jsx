import { useState } from "react";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button"; // adjust path if needed

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <img
            src="/logo.png"
            className="h-12 w-12 rounded-full  p-1"
            alt="Logo"
          />
          <span className="text-2xl font-bold">Peach & Owl</span>
        </div>

        {/* Desktop Nav */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <a
              href="#products"
              className="text-lg font-medium hover:text-lime-500 transition-colors"
            >
              Products
            </a>
            <a
              href="#features"
              className="text-lg font-medium hover:text-lime-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-lg font-medium hover:text-lime-500 transition-colors"
            >
              Contact
            </a>
          </nav>
          {/* Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col gap-4 p-4">
            <a
              href="#products"
              className="text-md font-medium hover:text-lime-500 transition-colors"
            >
              Products
            </a>
            <a
              href="#features"
              className="text-md font-medium hover:text-lime-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-md font-medium hover:text-lime-500 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
