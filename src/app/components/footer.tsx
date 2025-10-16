import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#007bff] text-white p-6 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
        {/* Colmeia e Copyright */}
        <div className="flex flex-col items-center">
          <Image
            src="/colmeia.svg"
            alt="Colmeia"
            width={120}
            height={120}
            priority
          />
        </div>

        {/* Seções de Navegação */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-16 flex-grow m-6">
          {/* História */}
          <div>
            <h3 className="font-bold text-xl mb-4">História</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#mel" className="hover:underline">
                  Mel
                </Link>
              </li>
              <li>
                <Link href="#cultura" className="hover:underline">
                  Cultura
                </Link>
              </li>
              <li>
                <Link href="#eventos" className="hover:underline">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Benefícios */}
          <div>
            <h3 className="font-bold text-xl mb-4">Benefícios</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#saude" className="hover:underline">
                  Saúde
                </Link>
              </li>
              <li>
                <Link href="#sabor" className="hover:underline">
                  Sabor
                </Link>
              </li>
              <li>
                <Link href="#fauna" className="hover:underline">
                  Fauna
                </Link>
              </li>
              <li>
                <Link href="#flora" className="hover:underline">
                  Flora
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-bold text-xl mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#vejamaisprodutos" className="hover:underline">
                  Veja mais
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtores */}
          <div>
            <h3 className="font-bold text-xl mb-4">Produtores</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#vejamaisprodutores" className="hover:underline">
                  Veja mais
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full justify-center align-bottom">
        <p className="text-sm text-center">
          © 2025 Apicultura Moreilândia - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
