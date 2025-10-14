import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Banner Principal - Tela Cheia */}
      <section className="relative z-10 min-h-screen w-full flex">
        {/* Background Image */}
        <div className="flex">
          <div className="absolute inset-0">
            <Image
              src="/Banner Apicultura.png"
              alt="Banner Apicultura Moreilândia"
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full h-full flex items-end pl-50">
            <Image
              src="/Apicultor png.png"
              alt="Apicultor"
              height={280}
              width={500}
              className="absolute items-top"
            />
          </div>
          {/** Imagem da logomarga do banner **/}
          <div className="flex justify-center items-center w-full h-full">
            <Image
              src="/LOGO COM NOME.png"
              alt="Logo com nome"
              height={700}
              width={700}
              className="ml-350 mb-50 absolute flex items-center"
            />
          </div>
        </div>

        {/* Lado Direito - Conteúdo e Botão */}
        <div className="absolute left-180 top-100 items-center justify-center w-full h-full mb-50 lg:items-end">
          <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl shadow-xl max-w-lg text-center lg:text-left w-120 h-60">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Conheça, Apoie e Descubra a Cultura do Mel na Região
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Descubra os segredos da apicultura tradicional e os benefícios
              únicos do mel de Moreilandia.
            </p>
            <Button className="bg-[#f6a51e] hover:bg-[#a36600] text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105">
              Veja Mais
            </Button>
          </div>
        </div>
      </section>
      <main className="bg-[#F6A721] rounded-2xl w-full h-[880] flex flex-col items-center">
        <div className="p-6">
          <Title 
            before={"Sobre a"}
            highlight={"cultura"}
            after={"do mel"} 
            yellow={""}          />
          </div>
          <div className="flex flex-col items-center justify-between">
          <div className="flex items-center gap-40">
            <Cartao 
            title={"Lorem ips un dolor"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."} 
            titleColor="#fafbfb" 
            descriptionColor="742406"/>
            <Cartao 
            title={"Lorem ips un dolor"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."} 
            titleColor="#fafbfb" 
            descriptionColor="742406"/>
            <Cartao 
            title={"Lorem ips un dolor"} 
            description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."} 
            titleColor="#fafbfb" 
            descriptionColor="#742406"/>
          </div>
          <div className="pt-35">
          <Button className="bg-[#742406] hover:bg-[#451706] text-[20px] p-6">Veja Mais</Button>
          </div>
          </div>
      </main>
      <div className="w-full h-full bg-[#FFFFFF]">
        <div className="container mx-auto p-6">
          <Title 
          before={""} 
          highlight={"Beneficios do"} 
          after={""}
          yellow={"mel"}
          />
          <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 gap-8">
            <Card className="border-[#f6a51e] shadow-lg rounded-2xl p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-xl font-bold text-[#f6a51e]">
                  <span className="w-3 h-3 bg-[#0B97E4] rounded-full mr-3"></span>{" "}
                  Saúde
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[#742406] mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2">
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

            <Card className="border-[#f6a51e] shadow-lg rounded-2xl p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-xl font-bold text-[#f6a51e]">
                  <span className="w-3 h-3 bg-[#0B97E4] rounded-full mr-3"></span>{" "}
                  Sabor
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        O Sabor Único do Mel de Moreilandia
                      </DialogTitle>
                      <DialogDescription className="text-gray-700">
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

            <Card className="border-[#f6a51e] shadow-lg rounded-2xl p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-xl font-bold text-[#f6a51e]">
                  <span className="w-3 h-3 bg-[#0B97E4] rounded-full mr-3"></span>{" "}
                  Flora
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        A Rica Flora de Moreilandia
                      </DialogTitle>
                      <DialogDescription className="text-gray-700">
                        Conteúdo expandido sobre a rica flora de Moreilandia que
                        contribui para a qualidade do mel. Detalhes sobre as
                        flores e plantas nativas que as abelhas visitam.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            <Card className="border-[#f6a51e] shadow-lg rounded-2xl p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-xl font-bold text-[#f6a51e]">
                  <span className="w-3 h-3 bg-[#0B97E4] rounded-full mr-3"></span>{" "}
                  Fauna
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
                <Dialog>
                  <DialogTrigger className="text-[#f6a51e] hover:underline p-0 pb-2">
                    Ver mais...
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-[#742406]">
                        A Fauna e a Apicultura em Moreilandia
                      </DialogTitle>
                      <DialogDescription className="text-gray-700">
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
