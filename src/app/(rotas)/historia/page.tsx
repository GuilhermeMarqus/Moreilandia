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
      <main id="cards-historia" className="mx-auto flex items-center justify-center">
        <div className="w-full h-auto min-lg:items-start min-lg:justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 sm:p-30">
          <Cartao
            title={"🌱 Dimensão Econômica"}
            imageSrc="/cardsHistoria/dimensao_economica.jpg"
            description={
              "A produção de mel em Moreilândia, Pernambuco, tornou-se uma atividade estratégica para o desenvolvimento local. A apicultura, além de exigir baixo investimento inicial, garante renda complementar às famílias rurais e fortalece o agronegócio regional. Os apicultores do município têm encontrado no mel uma alternativa lucrativa e sustentável, capaz de gerar empregos e movimentar a economia. Estudos apontam que a atividade contribui para a fixação das famílias no campo, reduzindo o êxodo rural e ampliando as oportunidades de negócios."
            }
            titleColor="#742406"
            descriptionColor="#742406"
          />
          <Cartao
            title={"👥 Dimensão Social"}
            imageSrc="/cardsHistoria/dimensao_social.jpg"
            description={
              "A cultura do mel em Moreilândia não se limita ao aspecto econômico: ela também fortalece os laços comunitários. A apicultura é vista como uma prática que promove cooperação entre famílias e associações locais, estimulando o capital social e a solidariedade. Muitos produtores se organizam em cooperativas, o que facilita o acesso a treinamentos, crédito e mercados consumidores. Essa união gera sentimento de pertencimento e valorização cultural, já que o mel é reconhecido como um produto identitário da região"
            }
            titleColor="#742406"
            descriptionColor="#742406"
          />
          <Cartao
            title={"🌍 Dimensão Ambiental"}
            imageSrc="/cardsHistoria/dimensao_ambiental.jpg"
            description={
              "O mel de Moreilândia é fruto de uma prática que alia produção e preservação ambiental. A apicultura contribui para a polinização das plantas nativas, fortalecendo a biodiversidade e garantindo equilíbrio ecológico. Além disso, desperta a consciência ambiental entre os produtores, que passam a valorizar a conservação das áreas de caatinga e a importância das abelhas para o ecossistema. Apesar dos desafios relacionados à falta de apoio técnico e governamental, a atividade se destaca como um exemplo de produção sustentável, capaz de unir tradição, natureza e inovação."
            }
            titleColor="#742406"
            descriptionColor="#742406"
          />
        </div>
      </main>
    </div>
  );
}
