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
      <main
        id="cultura-do-mel"
        className="bg-[#F6A721] rounded-2xl w-full h-auto flex flex-col items-center py-8 px-4"
      >
        <div className="p-6">
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2 text-sm md:text-base">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        Benefícios do Mel para a Saúde
                      </DialogTitle>
                      <DialogDescription className="text-[#742406]">
                        Este é o conteúdo expandido sobre os benefícios do mel
                        para a saúde. Inclui informações detalhadas sobre
                        propriedades antibacterianas, antioxidantes e
                        anti-inflamatórias.
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
                  Sabor
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm md:text-base text-[#742406] mb-2 md:mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2 text-sm md:text-base">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        O Sabor Único do Mel de Moreilandia
                      </DialogTitle>
                      <DialogDescription className="text-[#742406]">
                        Aqui está o conteúdo expandido sobre o sabor único do
                        mel de Moreilandia. Explore as notas de floração, a
                        doçura e as características regionais que tornam este
                        mel especial.
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
                  Flora
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm md:text-base text-[#742406] mb-2 md:mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2 text-sm md:text-base">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        A Rica Flora de Moreilandia
                      </DialogTitle>
                      <DialogDescription className="text-[#742406]">
                        Conteúdo expandido sobre a rica flora de Moreilandia que
                        contribui para a qualidade do mel. Detalhes sobre as
                        flores e plantas nativas que as abelhas visitam.
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
                  Fauna
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-sm md:text-base text-[#742406] mb-2 md:mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2 text-sm md:text-base">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        A Fauna e a Apicultura em Moreilandia
                      </DialogTitle>
                      <DialogDescription className="text-[#742406]">
                        Informações expandidas sobre a fauna local e seu papel
                        no ecossistema da apicultura em Moreilandia. A
                        importância das abelhas e outros polinizadores.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
