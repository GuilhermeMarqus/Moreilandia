import Image from "next/image";
import { PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProdutorPage = () => {
  return (
    <>
      <div className="flex-1 p-4 sm:p-6 bg-gray-100">
        <div className="flex justify-end space-x-2 sm:space-x-4 mb-4 sm:mb-6">
          <Button variant="outline">Editar</Button>
          <Button variant="destructive">Excluir</Button>
        </div>

        <Card className="mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center p-4">
              <Image
                src="/Apicultor png.png" // Usando a imagem do apicultor
                alt="Produtor"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
            </div>
            <div>
              <div className="mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Nome</h2>
                <p>Firmino José de Jesus</p>
                <p>Moreilândia - Pernambuco</p>
              </div>
              <div className="mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-bold">Contatos</h2>
                <p>87 9 9999-9999</p>
                <p>produtor@email.com</p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">ID</h2>
                <p>001</p>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-6">
            <h2 className="text-lg sm:text-xl font-bold mb-2">Biografia</h2>
            <ScrollArea className="h-32 rounded-md border p-4">
              <p className="text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </ScrollArea>
          </div>
        </Card>

        <h2 className="text-xl sm:text-2xl font-bold mb-4">Produtos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <Card key={id} className="flex flex-col items-center p-4">
              <Image
                src="/placeholder-image.svg"
                alt={`Produto ${id}`}
                width={100}
                height={100}
                className="mb-2"
              />
              <CardContent className="p-0 text-center">
                <p className="font-semibold">Produto {id}</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <Button variant="ghost" size="icon">
                    <PenLine className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        /* Oculta a Navbar */
        .fixed {
          display: none !important;
        }
        /* Oculta o Footer */
        footer {
          display: none !important;
        }
      `}</style>
    </>
  );
}

export default ProdutorPage;
