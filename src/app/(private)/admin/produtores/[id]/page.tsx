"use client";

import Image from "next/image";
import { PenLine, Trash2 } from "lucide-react";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";

interface ProdutorData {
  id?: string; // ID do produtor (opcional, gerado pelo backend)
  nome: string;
  endereco: string;
  contato_whatsapp: string; // Alterado de 'telefone'
  contato_email: string; // Alterado de 'email'
  userId: string; // ID do ADMIN que está cadastrando
  biografia: string;
  foto_perfil_url?: string,
  foto_perfil: string; // Alterado de 'imagem'
}

interface ProdutorCardItemProps {
  produtor: ProdutorData;
}

export default function ProdutorPage() {
  const routeParams = useParams();
  const { id } = routeParams;

  const [produtorData, setProdutorData] = useState<ProdutorData | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProdutor = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token de autenticação não encontrado.");
        }

        console.log("ID do produtor recebido:", id);
        console.log("Objeto routeParams completo:", routeParams);

        const apiUrl = `https://extensao-8-semestre-si-2025-2.onrender.com/api/produtor/${id}`;
        console.log("URL da API construída:", apiUrl);

        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            `Erro ao buscar produtor: ${response.statusText}. ID usado: ${id}`
          );
        }

        const data: ProdutorData = await response.json();
        if (!data || Object.keys(data).length === 0 || !data.id) {
          setProdutorData(null);
        } else {
          setProdutorData(data);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setCarregando(false);
      }
    };

    if (id) {
      console.log("Chamando fetchProdutor com ID:", id, "Tipo:", typeof id);
      fetchProdutor();
    }
  }, [id]);

  if (carregando) {
    return <div className="flex-1 p-6 bg-gray-100">Carregando produtor...</div>;
  }

  if (error) {
    return (
      <div className="flex-1 p-6 bg-gray-100 text-red-600">Erro: {error}</div>
    );
  }

  if (!produtorData) {
    return notFound();
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProdutorData({ ...produtorData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    if (isEditing) {
      console.log("Salvando dados atualizados:", produtorData);
      // Aqui você enviaria os dados 'produtor' para a sua API de atualização.
      // Ex: axios.put(`/api/produtores/${produtor.id}`, produtor);
    }
    setIsEditing(!isEditing);
  };

  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-end space-x-4 mb-6">
          <Button
            variant={isEditing ? "default" : "outline"}
            onClick={handleEditToggle}
          >
            {isEditing ? "Salvar" : "Editar"}
          </Button>
          <Button variant="destructive">Excluir</Button>
        </div>

        <Card className="mb-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center justify-center p-4">
              <Image
                src={imageError ? "/UserIcon.svg" : encodeURI(produtorData.foto_perfil_url || "/UserIcon.svg")}
                alt="Produtor"
                width={150}
                height={150}
                className="rounded-full object-cover mb-4"
                onError={() => setImageError(true)}
              />
            </div>
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">Nome</h2>
                {isEditing ? (
                  <>
                    <input
                      name="nome"
                      value={produtorData.nome}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full mb-2"
                    />
                    <input
                      name="endereco"
                      value={produtorData.endereco}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full"
                    />
                  </>
                ) : (
                  <>
                    <p>{produtorData.nome}</p>
                    <p>{produtorData.endereco}</p>
                  </>
                )}
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">Contatos</h2>
                {isEditing ? (
                  <>
                    <input
                      name="contato_whatsapp"
                      value={produtorData.contato_whatsapp}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full mb-2"
                    />
                    <input
                      name="contato_email"
                      value={produtorData.contato_email}
                      onChange={handleChange}
                      className="border rounded-md p-2 w-full"
                    />
                  </>
                ) : (
                  <>
                    <p>{produtorData.contato_whatsapp}</p>
                    <p>{produtorData.contato_email}</p>
                  </>
                )}
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold">ID</h2>
                <p>{produtorData.id}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Biografia</h2>
            {isEditing ? (
              <textarea
                name="biografia"
                value={produtorData.biografia}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                rows={5}
              />
            ) : (
              <p>{produtorData.biografia}</p>
            )}
          </div>
        </Card>

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
    </>
  );
}
