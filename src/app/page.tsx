"use client";

import Navbar from "@/app/components/navbar";
import Image from "next/image";

import Title from "./components/text";
import Cartao from "./components/cartao";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveDown } from "lucide-react";
import { useRouter } from "next/navigation";
import Footer from "./components/footer";
import PostList from "./(rotas)/posts/components/post_list";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Banner Principal - Tela Cheia */}
      <section
        id="home"
        className="relative z-10 min-h-screen w-full flex items-center justify-center lg:items-end"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Banner Apicultura.png"
            alt="Banner Apicultura Moreilândia"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full h-full flex justify-center">
          <Image
            src="/LOGO COM NOME.png"
            alt="Logo com nome"
            height={450}
            width={450}
            className="mb-[450] z-1"
          />
        </div>

        {/* Apicultor e Logo - Visível apenas em desktop ou telas maiores */}
        <div className="hidden lg:flex w-full h-full absolute inset-0 items-end justify-between px-20">
          <Image
            src="/Apicultor png.png"
            alt="Apicultor"
            height={250}
            width={400}
            className="items-top"
          />
          <Image
            src="/LOGO COM NOME.png"
            alt="Logo com nome"
            height={350}
            width={350}
            className="ml-auto mb-20 lg:hidden"
          />
        </div>

        {/* Apicultor e Logo - Visível apenas em mobile e telas médias */}
        <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center space-y-4 pt-20 pb-40">
          <Image
            src="/Apicultor png.png"
            alt="Apicultor"
            height={150}
            width={250}
            className="mt-30"
          />
          <Image
            src="/LOGO COM NOME.png"
            alt="Logo com nome"
            height={150}
            width={150}
            className="hidden"
          />
        </div>

        {/* Lado Direito - Conteúdo e Botão */}
        <div className="absolute inset-0 flex items-end justify-center px-4 py-10 lg:justify-end lg:pl-32 lg:px-40 lg:py-20">
          <div className="bg-[#FAFBFB]/90 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-xl max-w-lg text-center lg:text-left">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
              Conheça, Apoie e Descubra a Cultura do Mel na Região
            </h2>

            <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6">
              Descubra os segredos da apicultura tradicional e os benefícios
              únicos do mel de Moreilândia.
            </p>

            <Button
              className="bg-[#f6a51e] hover:bg-[#a36600] text-white z-100 px-4 md:px-8 py-2 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              onClick={() => router.push("#cultura-do-mel")}
            >
              Veja mais
              <MoveDown className="ml-2 text-lg" />
            </Button>
          </div>
        </div>
      </section>
      <div id="#postagens" className=" rounded-2xl w-full h-auto flex flex-col items-center py-8 px-4" >
        <div className="mt-2 md:mt-2">
          <Title
            before={""}
            highlight={"Postagens"}
            after={""}
            yellow={""}
          />
        </div>
        <div className="flex md:flex-row items-center md:justify-center gap-8 md:gap-40 pt-3 md:pt-35">
         <PostList/>
        </div>
        <div className="pt-6 md:pt-35">
          <Button
            className="bg-[#742406] hover:bg-[#451706] text-[18px] p-4"
            onClick={() => router.push("./posts")}
          >
            Veja Mais
          </Button>
        </div>
      </div>
      <main
        id="cultura-do-mel"
        className="bg-[#F6A721] rounded-2xl w-full h-auto flex flex-col items-center py-8 px-4"
      >
        <div className="mt-4 md:mt-4">
          <Title
            before={"Sobre a"}
            highlight={"cultura"}
            after={"do mel"}
            yellow={""}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-8 md:gap-40 pt-6 md:pt-35">
          <Cartao
            title={"Lorem ips un dolor"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."
            }
            titleColor="#fafbfb"
            descriptionColor="#742406"
          />
          <Cartao
            title={"Lorem ips un dolor"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."
            }
            titleColor="#fafbfb"
            descriptionColor="#742406"
          />
          <Cartao
            title={"Lorem ips un dolor"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."
            }
            titleColor="#fafbfb"
            descriptionColor="#742406"
          />
        </div>
        <div className="pt-6 md:pt-35">
          <Button
            className="bg-[#742406] hover:bg-[#451706] text-[18px] p-4"
            onClick={() => router.push("./historia")}
          >
            Veja Mais
          </Button>
        </div>
      </main>
      <div id="beneficios" className="w-full h-full bg-[#FFFFFF]">
        <div className="container mx-auto p-4 md:p-6">
          <Title
            before={""}
            highlight={"Beneficios do"}
            after={""}
            yellow={"mel"}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 md:p-6 gap-4 md:gap-8">
            <Card className="border-[#f6a51e] shadow-lg rounded-2xl p-4 md:p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-2 md:mb-4">
                <CardTitle className="flex items-center text-lg md:text-xl font-bold text-[#f6a51e]">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-[#0B97E4] rounded-full mr-2 md:mr-3"></span>{" "}
                  Saúde
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm md:text-base text-[#742406] mb-2 md:mb-4 flex-grow">
                  O mel ajuda a suavizar a mucosa e reduzir a irritação, sendo usado em xaropes e chás, 
                  combate bactérias que podem causar infecções respiratórias,
                  pode auxiliar no equilíbrio da flora intestinal e reduzir sintomas de indigestão...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2 text-sm md:text-base">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        Benefícios do Mel para a saúde respiratória e digestiva
                      </DialogTitle>
                      <DialogDescription className="text-[#742406]">
                        O mel ajuda a suavizar a mucosa e reduzir a irritação, sendo usado em xaropes e chás, 
                        combate bactérias que podem causar infecções respiratórias,
                        pode auxiliar no equilíbrio da flora intestinal e reduzir sintomas de indigestão e 
                        estimula o crescimento de bactérias benéficas no intestino.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="border-[#f6a51e] shadow-lg rounded-2xl p-4 md:p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-2 md:mb-4">
                <CardTitle className="flex items-center text-lg md:text-xl font-bold text-[#f6a51e]">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-[#0B97E4] rounded-full mr-2 md:mr-3"></span>{" "}
                  Beleza e Bem-Estar
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm md:text-base text-[#742406] mb-2 md:mb-4 flex-grow">
                  O mel podendo ser usado para hidratação da pele como em máscaras faciais,
                  ajuda a manter a pele macia e saudável...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2 text-sm md:text-base">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        Beleza e Bem-Estar
                      </DialogTitle>
                      <DialogDescription className="text-[#742406]">
                        Para a hidratação da pele, pode ser usado em máscaras faciais, 
                        ajudando a manter a pele macia e saudável, e também para o controle de glicemia,
                        Embora seja doce, estudos indicam que pode ter efeito mais equilibrado no açúcar 
                        no sangue em comparação ao açúcar refinado.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="border-[#f6a51e] shadow-lg rounded-2xl p-4 md:p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-2 md:mb-4">
                <CardTitle className="flex items-center text-lg md:text-xl font-bold text-[#f6a51e]">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-[#0B97E4] rounded-full mr-2 md:mr-3"></span>{" "}
                  Cicatrização e Imunidade
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm md:text-base text-[#742406] mb-2 md:mb-4 flex-grow">
                  Para o tratamento de feridas e queimaduras leves aplicado topicamente, 
                  acelera a cicatrização devido às suas propriedades antibacterianas...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2 text-sm md:text-base">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        O tratamento de feridas através do mel
                      </DialogTitle>
                      <DialogDescription className="text-[#742406]">
                        Favorecendo o tratamento de feridas e queimaduras leves aplicado topicamente,
                        acelera a cicatrização devido às suas propriedades antibacterianas, e para o
                        fortalecimento do sistema imunológico sendo rico em enzimas e nutrientes que 
                        ajudam na defesa contra doenças.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="border-[#f6a51e] shadow-lg rounded-2xl p-4 md:p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-2 md:mb-4">
                <CardTitle className="flex items-center text-lg md:text-xl font-bold text-[#f6a51e]">
                  <span className="w-2 h-2 md:w-3 md:h-3 bg-[#0B97E4] rounded-full mr-2 md:mr-3"></span>{" "}
                  Energia e Nutrição
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm md:text-base text-[#742406] mb-2 md:mb-4 flex-grow">
                  Por ser rico em açúcares naturais, é ideal para atletas ou pessoas
                  que precisam de energia imediata...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2 text-sm md:text-base">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        Energia para seu corpo, nutrição para sua saúde
                      </DialogTitle>
                      <DialogDescription className="text-[#742406]">
                        Com uma fonte de energia rápida é rico em açúcares naturais e ideal para atletas ou pessoas que precisam de 
                        energia imediata, também com seus nutrientes essenciais lele contém vitaminas, minerais e 
                        aminoácidos que contribuem para uma dieta equilibrada.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
