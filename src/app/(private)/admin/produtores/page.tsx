"use client"

import Image from "next/image";
import { Search, PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState } from "react";

const adminProdutores = [
  {
    id: 1,
    nome: "Francisco Ferreira Filho Florêncio",
    cidade: "Moreilândia",
    estado: "Pernambuco",
    produtos: 1,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/Produtor 1.svg", // adicione a imagem em public/images
  },
  {
    id: 2,
    nome: "João Silva",
    cidade: "Juazeiro do Norte",
    estado: "Ceará",
    produtos: 0,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/UserIcon.svg",
  },
  {
    id: 3,
    nome: "Maria Pereira",
    cidade: "Cajazeiras",
    estado: "Pernambuco",
    produtos: 3,
    membroDesde: 2025,
    telefone: "87 9 9999-9999",
    email: "produtor@email.com",
    foto: "/UserIcon.svg",
  },
];

export default function ProdutoresPage() {
  const router = useRouter();

    const [search, setSearch] = useState("");
  
    const filteredProdutores = adminProdutores.filter((produtores) =>
      produtores.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Todos os produtores</h1>
      {/* Barra de busca */}
      <div className="flex justify-end mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-full pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>
    <div>
      {filteredProdutores.map((produtores) => (
      <><Card key={produtores.id} className="mb-6">
            <CardHeader>
              <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700">
                <div>Nome</div>
                <div>ID</div>
                <div></div> {/* Ação */}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 items-center py-2 px-4 rounded-md bg-gray-100 mb-2">
                <div>{produtores.nome}</div>
                <div>{produtores.id}</div>
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="icon"
                    className="cursor-pointer"
                    onClick={() => router.push(`/admin/produtores/${produtores.id}`)}>
                    <PenLine className="h-4 w-4 cursor-pointer" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* Mais produtores podem ser adicionados aqui */}
            </CardContent>
          </Card></>
      ))}
    </div>  

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
