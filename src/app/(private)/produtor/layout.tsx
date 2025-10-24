import Link from "next/link";
import Image from "next/image";
import { Search, PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 p-4 flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/abelha-2.svg"
            alt="Abelha"
            width={60}
            height={60}
            className="mb-2"
          />
          <span className="font-bold text-lg">Olá, produtor</span>
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

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
}
