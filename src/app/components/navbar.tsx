"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react"; // Importar o ícone Menu
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"; // Importar componentes Sheet
import { Button } from "@/components/ui/button"; // Importar componente Button

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center relative z-50">
      {/* Navbar para Desktop */}
      <nav className="fixed z-50 top-2 bg-white/90 backdrop-blur-md rounded-2xl px-8 py-3 hidden md:flex items-center gap-8 shadow-md">
        <div className="flex items-center gap-10">
          <Link href="/#home">
            <Image
              src="/logo.svg"
              alt="Logomarca"
              width={55}
              height={55}
              onClick={() => router.push("/home")}
              className="cursor-pointer"
            ></Image>
          </Link>

          <div className="flex gap-8 text-black font-medium">
            <Link href="/historia" className="hover:text-amber-600 transition">
              História
            </Link>
            <Link
              href="/#beneficios"
              className="hover:text-amber-600 transition"
              onClick={() => router.push("./beneficios")}
            >
              Benefícios
            </Link>
            <Link href="./lista-produtos" className="hover:text-amber-600 transition">
              Produtos
            </Link>
            <Link
              href="/produtores"
              className="hover:text-amber-600 transition"
            >
              Produtores
            </Link>
          </div>
        </div>
      </nav>

      {/* Navbar para Mobile com Sheet */}
      <div className="md:hidden fixed top-2 left-2 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 bg-white p-4 flex flex-col items-center">
            <SheetHeader className="mb-6">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <Link href="/#home" className="mb-4">
              <Image
                src="/logo.svg"
                alt="Logomarca"
                width={50}
                height={50}
                onClick={() => router.push("/home")}
                className="cursor-pointer"
              ></Image>
            </Link>
            <nav className="flex flex-col space-y-4 w-full text-black font-medium">
              <Link href="/historia" className="hover:text-amber-600 transition text-center">
                História
              </Link>
              <Link
                href="/#beneficios"
                className="hover:text-amber-600 transition text-center"
                onClick={() => router.push("./beneficios")}
              >
                Benefícios
              </Link>
              <Link href="/lista-produtos" className="hover:text-amber-600 transition text-center">
                Produtos
              </Link>
              <Link
                href="/produtores"
                className="hover:text-amber-600 transition text-center"
              >
                Produtores
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
