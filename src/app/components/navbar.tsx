"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center">
      <nav className="fixed z-50 top-2 bg-white/90 backdrop-blur-md rounded-2xl px-30 flex items-center gap-5 shadow-md">
        <div className="flex items-center gap-18">
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

          <div className="flex gap-18 text-black font-medium">
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
            <Link href="/lista-produtos" className="hover:text-amber-600 transition">
              Produtos
            </Link>
            <Link
              href="#produtores"
              className="hover:text-amber-600 transition"
            >
              Produtores
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
