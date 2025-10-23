import { Button } from "@/components/ui/button";

import Title from "../../components/text";
import Cartao from "../../components/cartao";
import HoneyCard from "../../components/honeycard";
import Link from "next/link";

import { MoveDown } from "lucide-react";

export default function Historia() {
  return (
    <div className="flex-col">
      <div className="bg-[#f6a51e] w-full flex items-center flex-col py-8 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 h-auto pb-6 lg:pb-0">
          <div className="w-full max-w-lg text-center lg:text-left">
            <div className="text-center lg:text-left">
              <Title
                before={"Sobre a"}
                highlight={"cultura"}
                after={"do mel"}
                yellow={""}
              ></Title>
            </div>
            <p className="text-[#742406] px-2 py-2 text-base sm:text-lg lg:text-xl font-medium">
              O mel que nasce da nossa terra
            </p>
            <p className="text-[white] px-4 py-2 text-base sm:text-lg lg:text-xl font-medium">
              Parte da nossa identidade. Cada colmeia reflete o cuidado dos
              apicultores locais, que mantêm viva a tradição de produzir um mel
              puro, saudável e sustentável. Ao consumir nosso mel, você apoia
              famílias, fortalece a economia da cidade e contribui para a
              preservação da natureza.
            </p>
          </div>
          <HoneyCard
            imageSrc={"/abelha-2.svg"}
            text={
              "Em Moreilândia, a produção de mel é muito mais do que um ofício"
            }
          />
        </div>
        <div className="pb-6 sm:pb-15">
          <Link href="#cards-historia">
            <Button className="bg-[white] hover:bg-[#0B97E4] rounded-[20px] text-[#0B97E4] hover:text-white text-base sm:text-[20px] px-6 py-3 sm:p-6">
              Veja Mais
              <MoveDown />
            </Button>
          </Link>
        </div>
      </div>
      <main id="cards-historia" className="mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 sm:p-30">
          <Cartao
            title={"Lorem ips un dolor"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."
            }
            titleColor="#742406"
            descriptionColor="#742406"
          />
          <Cartao
            title={"Lorem ips un dolor"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."
            }
            titleColor="#742406"
            descriptionColor="#742406"
          />
          <Cartao
            title={"Lorem ips un dolor"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."
            }
            titleColor="#742406"
            descriptionColor="#742406"
          />
        </div>
      </main>
    </div>
  );
}
