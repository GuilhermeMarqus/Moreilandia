"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PenLine, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRef, useState } from "react";

const posts = [
  {
    id: 1,
    nome: "Post 1",
    descricao:
      "Texto completo do post 1. Aqui você pode colocar o conteúdo completo.",
    imagem: "/ImageIcon.svg",
  },
  {
    id: 2,
    nome: "Post 2",
    descricao:
      "Texto completo do post 2. Aqui você pode colocar o conteúdo completo.",
    imagem: "/ImageIcon.svg",
  },
];

export default function PostPage({ params }: { params: { id: string } }) {
  const postSelecionado = posts.find((p) => p.id === Number(p.id));
  if (!postSelecionado) return notFound();

  const [isEditing, setIsEditing] = useState(false);
  const [post, setPost] = useState(postSelecionado);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // 🔹 Atualiza campos (nome / descrição)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // 🔹 Alternar modo de edição
  const handleEditToggle = () => {
    if (isEditing) {
      console.log("Dados atualizados:", post);
    }
    setIsEditing(!isEditing);
  };

  // 🔹 Alterar imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPost({ ...post, imagem: imageUrl });
    }
  };

  // 🔹 Abrir seletor de arquivo
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-end space-x-4 mb-6">
        <Button
          variant={isEditing ? "default" : "outline"}
          onClick={handleEditToggle}
        >
          {isEditing ? "Salvar" : "Editar"}
        </Button>
        <Button variant="destructive">Excluir</Button>
      </div>
      <div className="max-w-5xl mx-auto bg-white rounded-2xl p-8 shadow">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-48 h-48 flex-shrink-0">
            <Image
              src={post.imagem}
              alt={post.nome}
              fill
              className="rounded-lg object-cover"
            />
            {isEditing && (
              <>
                <div
                  onClick={handleImageClick}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-60 group-hover:opacity-100 transition rounded-lg"
                >
                  <Plus className="w-10 h-10 text-white" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </>
            )}
          </div>

          <div>
            <div>
              <h1 className="text-2xl font-bold mb-2">Nome</h1>
              {isEditing ? (
                <input
                  type="text"
                  name="nome"
                  value={post.nome}
                  onChange={handleChange}
                  className="border rounded-md p-2 w-full"
                />
              ) : (
                <p>{post.nome}</p>
              )}
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">Descrição</p>
              {isEditing ? (
                <textarea
                  name="descricao"
                  value={post.descricao}
                  onChange={handleChange}
                  rows={5}
                  className="border rounded-md p-2 w-full"
                />
              ) : (
                <p>{post.descricao}</p>
              )}
            </div>
            <div>
              <p className="mt-4 text-sm text-gray-500">ID:</p>
              <p>{post.id}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-40">
        <h2 className="text-2xl font-bold mb-4">Produtos</h2>
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
    </div>
  );
}
