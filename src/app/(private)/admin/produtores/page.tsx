import Image from "next/image";
import { Search, PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProdutoresPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Todos os produtores</h1>

      <div className="relative mb-6 w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input placeholder="Buscar" className="pl-10 w-full" />
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700">
            <div>Nome</div>
            <div>ID</div>
            <div></div> {/* Ação */}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 items-center py-2 px-4 rounded-md bg-gray-100 mb-2">
            <div>Firmino José de Jesus</div>
            <div>001</div>
            <div className="flex justify-end space-x-2">
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

      <div className="flex justify-center space-x-4">
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
