"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search, PenLine, Trash2, LogOut } from "lucide-react"; // Adicione LogOut

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react"; // Importar useState e useEffect
import { useRouter } from "next/navigation"; // Importar useRouter

interface UserInfo {
  nome: string;
  // outras propriedades do usuário, se houver
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter(); // Importar useRouter
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user: UserInfo = JSON.parse(storedUser);
        setUserName(user.nome);
      } catch (error) {
        console.error(
          "Erro ao analisar informações do usuário do localStorage:",
          error
        );
        setUserName("Produtor"); // Fallback em caso de erro
      }
    } else {
      setUserName("Produtor"); // Fallback se não houver usuário no localStorage
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

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
          <Button
            variant="ghost"
            className="w-full justify-center mb-2"
            onClick={handleLogout} // Adicionar o evento onClick
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
          <span className="font-bold text-lg">Olá, {userName}</span>
        </div>
        <nav className="w-full">
          <Link href="/produtor" passHref>
            <Button variant="ghost" className="w-full justify-start mb-2">
              Produtos
            </Button>
          </Link>
          <Link href="/produtor/posts" passHref>
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
            <SheetTitle>Menu do Produtor</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center mb-6">
            <Image
              src="/abelha-2.svg"
              alt="Abelha"
              width={60}
              height={60}
              className="mb-2"
            />
            <span className="font-bold text-lg">Olá, {userName}</span>
          </div>
          <nav className="w-full">
            <Link href="/produtor" passHref>
              <Button variant="ghost" className="w-full justify-start mb-2">
                Produtos
              </Button>
            </Link>
            <Link href="/produtor/posts" passHref>
              <Button variant="ghost" className="w-full justify-start">
                Posts
              </Button>
            </Link>

            <Button
              variant="ghost"
              className="w-full justify-center mb-2"
              onClick={handleLogout} // Adicionar o evento onClick
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
