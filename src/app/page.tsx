import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
import Image from "next/image";

import Title from "./components/text";

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
      <section className="relative z-10 min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Banner_Moreilandia.png"
            alt="Banner Apicultura Moreilândia"
            fill
            priority
            className="object-cover w-full h-full object-center"
          />
        </div>

        {/* Lado Direito - Conteúdo e Botão */}
        <div className="flex flex-col items-center lg:items-end gap-6 pt-100 ml-260">
          <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl shadow-xl max-w-lg text-center lg:text-left">
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
          <Title before={"Sobre a"} highlight={"cultura"} after={"do mel"} />
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className=" w-full h-full flex items-center justify-center gap-20 p-12">
            <Card className="bg-transparent border-none shadow-none p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-xl font-bold text-[#FAFBFB]">
                  <span className="w-3 h-3 bg-[#0B97E4] mr-3"></span>{" "}
                  Como surgiu
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-none shadow-none p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-xl font-bold text-[#FAFBFB]">
                  <span className="w-3 h-3 bg-[#0B97E4] mr-3"></span>{" "}
                  Comércio local
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-700 mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
              </CardContent>
            </Card>
            <Card className="bg-transparent border-none shadow-none p-6 flex flex-col justify-between">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center text-xl font-bold text-[#FAFBFB]">
                  <span className=" rounded-full w-3 h-3 bg-[#0B97E4] mr-3"></span>{" "}
                  Quando começou
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-[#742406] mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took ...
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="pt-25">
            <Button className="bg-[#742406] hover:bg-[#451706] text-[20px] p-6">
              Veja Mais
            </Button>
          </div>
        </div>
      </main>
      <div className="w-full h-full bg-[#FFFFFF] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-[#742406] mb-12 text-center">
            Benefícios <span className="text-[#f6a51e]">do Mel</span>
          </h2>
          <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
