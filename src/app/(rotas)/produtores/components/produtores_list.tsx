import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Produtor {
  id: number;
  nome: string;
  biografia: string;
  foto_perfil: string;
  contato_whatsapp: string;
  contato_email: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  foto_perfil_url: string;
}

const ProdutoresList = () => {
  const [produtores, setProdutores] = useState<Produtor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProdutores = async () => {
      try {
        const response = await axios.get(
          "https://extensao-8-semestre-si-2025-2.onrender.com/api/produtor"
        );
        setProdutores(response.data);
      } catch (err) {
        setError("Erro ao carregar os produtores.");
        console.error("Erro ao buscar produtores:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProdutores();
  }, []);

  if (loading) {
    return <div className="text-center text-amber-600">Carregando produtores...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {produtores.map((produtor) => (
        <div
          key={produtor.id}
          className="flex flex-col md:flex-row items-center justify-between border border-yellow-200 rounded-xl p-5"
        >
          <div className="flex items-center gap-4">
            <Image
              src={produtor.foto_perfil_url}
              alt={produtor.nome}
              width={100}
              height={100}
              className="rounded-full object-cover w-24 h-24"
            />
            <div>
              <h2 className="text-xl font-bold">{produtor.nome}</h2>
              <p className="text-gray-600">{produtor.biografia}</p>
              <p className="text-sm text-gray-500">
                Membro desde {new Date(produtor.createdAt).toLocaleDateString(`month`)}
              </p>
            </div>
          </div>

          <div className="text-center md:text-right mt-4 md:mt-0">
            <h3 className="font-semibold">Contatos</h3>
            <p>{produtor.contato_whatsapp}</p>
            <p>{produtor.contato_email}</p>
            <Link
              href={`/produtores/${produtor.id}`}
              className="mt-2 inline-block bg-white text-[#0B97E4] px-4 p-1 rounded-[20px] border border-[#0B97E4] hover:bg-[#0B97E4] hover:text-white transition"
            >
              Ver mais
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProdutoresList;
