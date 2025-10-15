import Image from "next/image";
import Link from "next/link";


export default function Navbar() {


  return (
    <nav className="fixed z-50 top-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl px-30 flex items-center gap-5 shadow-md">
      <div className="flex items-center gap-18">

        <Image
          src="/logo.svg"
          alt="Logomarca"
          width={55}
          height={55}
        />

        <div className="flex gap-18 text-black font-medium">
          <Link href="/historia" className="hover:text-amber-600 transition">
            História
          </Link>
          <Link href="#beneficios" className="hover:text-amber-600 transition">
            Benefícios
          </Link>
          <Link href="#produtos" className="hover:text-amber-600 transition">
            Produtos
          </Link>
          <Link href="#produtores" className="hover:text-amber-600 transition">
            Produtores
          </Link>
        </div>
      </div>
    </nav>
  );
}