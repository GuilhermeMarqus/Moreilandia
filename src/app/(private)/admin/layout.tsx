import Link from "next/link";
import Image from "next/image";
import { Menu, Search, PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen relative">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-gray-200 p-4 flex-col items-center hidden md:flex">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/abelha-2.svg"
            alt="Abelha"
            width={60}
            height={60}
            className="mb-2"
          />
          <span className="font-bold text-lg">Olá, Admin01</span>
        </div>
        <nav className="w-full">
          <Link href="/admin/produtores" passHref>
            <Button variant="ghost" className="w-full justify-start mb-2">
              Produtores
            </Button>
          </Link>
          <Link href="/admin/posts" passHref>
            <Button variant="ghost" className="w-full justify-start">
              Posts
            </Button>
          </Link>
        </nav>
      </aside>

      {/* Sidebar - Mobile */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden absolute top-4 left-4 z-50">
          <Button variant="outline" size="icon">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-gray-200 p-4 flex flex-col items-center absolute"
        >
          <SheetHeader className="p-6">
            <SheetTitle>Menu Administrativo</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/abelha-2.svg"
              alt="Abelha"
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="font-bold text-lg">Olá, Admin01</span>
          </div>
          <nav className="w-full">
            <Link href="/admin/produtores" passHref>
              <Button variant="ghost" className="w-full justify-start mb-2">
                Produtores
              </Button>
            </Link>
            <Link href="/admin/posts" passHref>
              <Button variant="ghost" className="w-full justify-start">
                Posts
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
