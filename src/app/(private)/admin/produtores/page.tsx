"use client";

import { Search, PenLine, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"; // Adicionar useEffect
import Image from "next/image"; // Importar Image
import ProdutorCardItem from "./components/produtor-card-item"; // Importar o novo componente
import { ProdutorData } from "./components/produtor-card-item"; // Importar a interface ProdutorData

export default function ProdutoresPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [produtores, setProdutores] = useState<ProdutorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProdutores = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Usuário não autenticado. Faça login novamente.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "https://extensao-8-semestre-si-2025-2.onrender.com/api/produtor", // Endpoint para listar usuários/produtores
          {
            method: 'GET', // Correção da sintaxe do método
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Falha ao buscar produtores.");
        }

        const data: ProdutorData[] = await response.json();
        console.log("Dados dos produtores recebidos da API:", data); // Adicionado para depuração
        // Não é mais necessário filtrar por papel, pois este endpoint retorna apenas produtores
        setProdutores(data);
      } catch (err: any) {
        setError(err.message || "Erro desconhecido ao buscar produtores.");
      } finally {
        setLoading(false);
      }
    };

    fetchProdutores();
  }, []);

  const filteredProdutores = produtores.filter((produtor) =>
    produtor.nome.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex-1 p-8 bg-gray-100 min-h-screen flex items-center justify-center">
        <p>Carregando produtores...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 p-8 bg-gray-100 min-h-screen flex items-center justify-center text-red-600">
        <p>Erro: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Todos os produtores</h1>
      
      <div className="relative mb-6 w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input 
          placeholder="Buscar" 
          className="pl-10 w-full" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredProdutores.map((produtor) => (
          <ProdutorCardItem key={produtor.id} produtor={produtor} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-6">
        <Button variant="outline" onClick={() => router.push(`/admin/cadastroprod`)}>Cadastrar</Button>
      </div>
    </div>
  );
}
