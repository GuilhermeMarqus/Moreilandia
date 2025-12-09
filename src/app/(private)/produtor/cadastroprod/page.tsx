"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Upload, CheckCircle2 } from "lucide-react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function CadastrarProdutoPage() {
  const [produto, setProduto] = useState({
    nome: "",
    descricao: "",
    imagem: "",
  });
  const [salvo, setSalvo] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [produtorId, setProdutorId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchProdutorId = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decodedToken: any = jwtDecode(token);
          const userId = decodedToken.sub;
          console.log("User ID do token:", userId); // Debug
          
          // Buscar o produtor associado ao usuário
          const response = await axios.get(
            `https://extensao-8-semestre-si-2025-2.onrender.com/api/produtor`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("Produtores encontrados:", response.data); // Debug

          // Encontrar o produtor que corresponde ao usuário autenticado
          const produtorEncontrado = response.data.find(
            (p: any) => p.userId === userId
          );

          if (produtorEncontrado) {
            console.log("Produtor encontrado:", produtorEncontrado); // Debug
            setProdutorId(produtorEncontrado.id);
          } else {
            console.warn("Produtor não encontrado para o usuário");
            // Se não encontrar por userId, usar o primeiro produtor como fallback
            if (response.data.length > 0) {
              console.log("Usando primeiro produtor como fallback:", response.data[0]);
              setProdutorId(response.data[0].id);
            }
          }
        } catch (error) {
          console.error("Erro ao buscar dados do produtor:", error);
        }
      }
    };

    fetchProdutorId();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
    setSalvo(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProduto({ ...produto, imagem: imageUrl });
      setSalvo(false);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSalvar = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert("Você precisa estar logado para criar um produto");
      setCarregando(false);
      return;
    }

    if (!produtorId) {
      alert("Erro ao obter ID do produtor. Faça login novamente.");
      return;
    }

    if (!produto.nome || !produto.descricao) {
      alert("Preencha todos os campos antes de salvar.");
      return;
    }

    const file = fileInputRef.current?.files?.[0];

    if (!file) {
      alert("Selecione uma imagem obrigatória.");
      return;
    }

    setCarregando(true);
    try {
      const formData = new FormData();
      formData.append("nome", produto.nome);
      formData.append("descricao", produto.descricao);
      formData.append("foto_produto", file);

      console.log("Enviando produto para produtor ID:", produtorId); // Debug

      const response = await axios.post(
        `https://extensao-8-semestre-si-2025-2.onrender.com/api/produtor/${produtorId}/produto`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'multipart/form-data', // Axios define isso automaticamente
          },
        }
      );

      console.log("Produto criado:", response.data);
      setSalvo(true);
      setProduto({ nome: "", descricao: "", imagem: "" });
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Limpar o input de arquivo
      }
      setTimeout(() => setSalvo(false), 3000);
    } catch (error: any) {
      console.error("Erro ao salvar produto:", error);
      console.error("Detalhes do erro:", error.response?.data);
      alert("Erro ao salvar o produto. Veja o console para mais detalhes.");
    } finally {
      setCarregando(false);
    }
  };

  const handleDescartar = () => {
    setProduto({ nome: "", descricao: "", imagem: "" });
    setSalvo(false);
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen flex justify-center items-start p-6 md:p-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-semibold mb-6">Cadastrar produto</h1>

        <div className="bg-gray-200 rounded-xl p-6 space-y-6">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium mb-2">Título</label>
            <input
              type="text"
              name="nome"
              value={produto.nome}
              onChange={handleChange}
              placeholder="Digite o título do produto"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Imagem */}
          <div>
            <label className="block text-sm font-medium mb-2">Imagem</label>
            <div className="flex items-center space-x-4">
              <div
                onClick={handleImageClick}
                className="relative w-28 h-28 bg-gray-400 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-500 transition"
              >
                {produto.imagem ? (
                  <Image
                    src={produto.imagem}
                    alt="Imagem do produto"
                    fill
                    className="object-cover rounded-xl"
                  />
                ) : (
                  <div className="flex flex-col items-center text-white">
                    <Upload className="h-8 w-8 mb-1" />
                    <Plus className="h-5 w-5" />
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Conteúdo do produto
            </label>
            <textarea
              name="descricao"
              value={produto.descricao}
              onChange={handleChange}
              placeholder="Digite o conteúdo..."
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              rows={6}
            />
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-end space-x-4 mt-6">
          <Button
            variant="outline"
            onClick={handleDescartar}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800"
          >
            Descartar
          </Button>
          <Button
            onClick={handleSalvar}
            disabled={carregando}
            className="bg-amber-500 hover:bg-amber-600 text-white"
          >
            {carregando ? "Salvando..." : "Salvar"}
          </Button>
        </div>

        {/* Confirmação */}
        {salvo && (
          <div className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-lg flex items-center space-x-2 shadow-lg animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle2 className="h-5 w-5" />
            <span>Produto cadastrado com sucesso!</span>
          </div>
        )}
      </div>
    </div>
  );
}
