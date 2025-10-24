"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Pencil, Trash2 } from "lucide-react";

const postsData = [
  {
    id: 1,
    nome: "Post 1",
    descricao: "Descrição breve do post 1.",
    imagem: "/ImageIcon.svg",
  },
  {
    id: 2,
    nome: "Post 2",
    descricao: "Descrição breve do post 2.",
    imagem: "/ImageIcon.svg",
  },
  {
    id: 3,
    nome: "Post 3",
    descricao: "Descrição breve do post 3.",
    imagem: "/ImageIcon.svg",
  },
  {
    id: 4,
    nome: "Post 4",
    descricao: "Descrição breve do post 4.",
    imagem: "/ImageIcon.svg",
  },
];

export default function PostsPage() {
  const [search, setSearch] = useState("");

  const filteredPosts = postsData.filter((post) =>
    post.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">Todos os posts</h1>

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

      {/* Cards dos posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-100 w-64 h-80 rounded-xl shadow-md flex flex-col items-center justify-between p-4 relative hover:shadow-lg transition"
          >
            {/* Imagem */}
            <div className="relative w-32 h-32 mb-3">
              <Image
                src={post.imagem}
                alt={post.nome}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Conteúdo */}
            <div className="text-center">
              <h2 className="font-semibold">{post.nome}</h2>
              <p className="text-sm text-gray-700 mt-1">{post.descricao}</p>
            </div>

            {/* Ações */}
            <div className="flex space-x-4 mt-3">
              <Link href={`/admin/posts/${post.id}`}>
                <Pencil className="w-5 h-5 text-gray-700 hover:text-yellow-600 cursor-pointer" />
              </Link>
              <Trash2 className="w-5 h-5 text-gray-700 hover:text-red-600 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Botões inferiores */}
      <div className="flex justify-center mt-10 space-x-4">
        <Button variant="outline">Cadastrar</Button>
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
    </div>
  );
}