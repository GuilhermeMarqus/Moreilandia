"use client"

import Image from "next/image";
import { PenLine, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { useState } from "react";

const produtos = [
  {
    id: 1,
    imageSrc: "/foto-produto.svg", // Substitua com o caminho real da imagem
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 2,
    imageSrc: "/ImageIcon.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 3,
    imageSrc: "/ImageIcon.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 4,
    imageSrc: "/ImageIcon.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 5,
    imageSrc: "/ImageIcon.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 6,
    imageSrc: "/ImageIcon.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 7,
    imageSrc: "/ImageIcon.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
  {
    id: 8,
    imageSrc: "/ImageIcon.svg",
    title: "Cilindro alveolador doméstico",
    description:
      "Cilindro alveolador de cera de abelhas manual doméstico em resina de poliéster (a mesma usada na fabricação de lanchas) com alta resistência.",
    status: "Estado de novo",
  },
];

export default function ProdutoPage({ params }: { params: { id: string } }) {
  const produtoEncontrado  = produtos.find((p) => p.id === Number(p.id));
  if (!produtoEncontrado) return notFound(); 

  
  const [isEditing, setIsEditing] = useState(false);
  const [produto, setProduto] = useState(produtoEncontrado);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  // Manipula upload de imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // Mostra o preview
      setProduto((prev) => ({ ...prev, imageSrc: imageURL }));
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      console.log("Salvando dados atualizados:", produto);
      
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-end space-x-4 mb-6">
          <Button variant={isEditing ? "default" : "outline"}
            onClick={handleEditToggle}>{isEditing ? "Salvar" : "Editar"}</Button>
          <Button variant="destructive">Excluir</Button>
        </div>

        <Card className="mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center p-4">
              <Image
                src={produto.imageSrc} // Usando a imagem do apicultor
                alt="Produto"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
              />
              {isEditing && (
                  <>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="absolute flex items-center justify-center bg-black/40 opacity-60 w-34 h-34 group-hover:opacity-100 transition-opacity cursor-pointer rounded-xl"
                    >
                      <Plus className="text-white w-12 h-12" />
                    </label>
                  </>
                )}
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">Nome</h2>
                {isEditing ? (
                  <>
                    <input
                      name="title"
                      value={produto.title}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full mb-2"
                    />
                  </>
                ) : (
                  <>
                    <p>{produto.title}</p>
                  </>
                )}
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">ID</h2>
                <p>{produto.id}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Descrição</h2>
            {isEditing ? (
              <textarea
                name="description"
                value={produto.description}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                rows={5}
              />
            ) : (
              <p>{produto.description}</p>
            )}
          </div>
        </Card>
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
