import Image from "next/image";
import { Search, PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProdutoresPage() {
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex justify-center">Todos os produtores</h1>

      <div className="relative mb-4 sm:mb-6 w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input placeholder="Buscar" className="pl-10 w-full" />
      </div>

      <Card className="mb-6">
        <CardHeader className="">
          <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700">
            <div>Nome</div>
            <div>ID</div>
            <div></div> {/* Ação */}
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-4 items-center py-3 px-4 rounded-md bg-gray-100 hover:bg-gray-200 transition m-2">
            <div className="font-semibold md:hidden">Nome:</div>
            <div>Firmino José de Jesus</div>
            <div className="font-semibold md:hidden">ID:</div>
            <div>001</div>
            <div className="flex justify-start md:justify-end space-x-2 mt-2 md:mt-0">
              <Button variant="ghost" size="icon">
                <PenLine className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Mais produtores podem ser adicionados aqui */}
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
        <Button variant="outline">Visualizar</Button>
        <Button>Cadastrar</Button>
        <Button variant="outline">Editar</Button>
        <Button variant="destructive">Excluir</Button>
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
