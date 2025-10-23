import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#007bff] text-white p-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-10">
        {/* Colmeia e Copyright */}
        <div className="flex flex-col items-center mb-6 lg:mb-0">
          <Image
            src="/colmeia.svg"
            alt="Colmeia"
            width={100}
            height={100}
            priority
          />
        </div>

        {/* Seções de Navegação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 lg:gap-16 flex-grow m-4 md:m-6">
          {/* História */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">História</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="#mel" className="hover:underline text-sm sm:text-base">
                  Mel
                </Link>
              </li>
              <li>
                <Link href="#cultura" className="hover:underline text-sm sm:text-base">
                  Cultura
                </Link>
              </li>
              <li>
                <Link href="#eventos" className="hover:underline text-sm sm:text-base">
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Benefícios */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Benefícios</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="#saude" className="hover:underline text-sm sm:text-base">
                  Saúde
                </Link>
              </li>
              <li>
                <Link href="#sabor" className="hover:underline text-sm sm:text-base">
                  Sabor
                </Link>
              </li>
              <li>
                <Link href="#fauna" className="hover:underline text-sm sm:text-base">
                  Fauna
                </Link>
              </li>
              <li>
                <Link href="#flora" className="hover:underline text-sm sm:text-base">
                  Flora
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Produtos</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="#vejamaisprodutos" className="hover:underline text-sm sm:text-base">
                  Veja mais
                </Link>
              </li>
            </ul>
          </div>

          {/* Produtores */}
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Produtores</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link href="#vejamaisprodutores" className="hover:underline text-sm sm:text-base">
                  Veja mais
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full h-full justify-center align-bottom mt-6 md:mt-8">
        <p className="text-xs sm:text-sm text-center">
          © 2025 Apicultura Moreilândia - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
