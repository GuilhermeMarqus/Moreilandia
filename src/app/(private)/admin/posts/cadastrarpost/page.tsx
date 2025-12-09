"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Upload, CheckCircle2 } from "lucide-react";
import axios from "axios"; // Importar axios
import { jwtDecode } from "jwt-decode"; // Importar jwtDecode

export default function CadastrarProdutoPage() {
  const [produto, setProduto] = useState({
    titulo: "", // Alterado de 'nome' para 'titulo'
    conteudo: "", // Alterado de 'descricao' para 'conteudo'
    imagem: "", // Para pré-visualização da imagem
    bannerFile: null as File | null, // Para o arquivo real do banner
  });
  const [salvo, setSalvo] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
      setProduto({ ...produto, imagem: imageUrl, bannerFile: file });
      setSalvo(false);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSalvar = async () => {
    if (!produto.titulo || !produto.conteudo || !produto.bannerFile) {
      alert("Preencha todos os campos e selecione um banner antes de salvar.");
      return;
    }

    setCarregando(true);
    try {
      const formData = new FormData();
      formData.append("titulo", produto.titulo);
      formData.append("conteudo", produto.conteudo);
      
      const token = localStorage.getItem("moreilandia.token"); // Obter o token
      if (!token) {
        alert("Token de autenticação não encontrado. Faça login novamente.");
        setCarregando(false);
        return;
      }

      let autorId: string // Valor padrão caso não encontre no token
      try {
        const decodedToken: any = jwtDecode(token);
        autorId = decodedToken.id; // Supondo que o ID do usuário está no campo 'id' do token
      } catch (decodeError) {
        console.error("Erro ao decodificar o token JWT:", decodeError);
        alert("Erro ao decodificar o token. Tente fazer login novamente.");
        setCarregando(false);
        return;
      }

      if (produto.bannerFile) {
        formData.append("banner", produto.bannerFile);
      }

      const response = await axios.post(
        "https://extensao-8-semestre-si-2025-2.onrender.com/api/admin/postagem",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'multipart/form-data', // Axios define isso automaticamente
          },
        }
      );

      const data = response.data;
      console.log("Post criado:", data);

      setSalvo(true);
      setProduto({ titulo: "", conteudo: "", imagem: "", bannerFile: null });
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Limpar o input de arquivo
      }
      setTimeout(() => setSalvo(false), 3000);
    } catch (error: any) {
      console.error("Erro ao salvar o post:", error);
      console.error("Detalhes do erro:", error.response?.data); // Log detalhado do erro
      alert("Erro ao salvar o post. Veja o console para mais detalhes.");
    } finally {
      setCarregando(false);
    }
  };

  const handleDescartar = () => {
    setProduto({ titulo: "", conteudo: "", imagem: "", bannerFile: null });
    setSalvo(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Limpar o input de arquivo
    }
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen flex justify-center items-start p-6 md:p-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-semibold mb-6">Cadastrar post</h1>

        <div className="bg-gray-200 rounded-xl p-6 space-y-6">
          {/* Título */}
          <div>
            <label className="block text-sm font-medium mb-2">Título</label>
            <input
              type="text"
              name="titulo"
              value={produto.titulo}
              onChange={handleChange}
              placeholder="Digite o título do post"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Imagem */}
          <div>
            <label className="block text-sm font-medium mb-2">Banner</label>
            <div className="flex items-center space-x-4">
              <div
                onClick={handleImageClick}
                className="relative w-28 h-28 bg-gray-400 rounded-xl flex items-center justify-center cursor-pointer hover:bg-gray-500 transition"
              >
                {produto.imagem ? (
                  <Image
                    src={produto.imagem}
                    alt="Imagem do banner"
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

          {/* Conteúdo */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Conteúdo do post
            </label>
            <textarea
              name="conteudo"
              value={produto.conteudo}
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
            <span>Post cadastrado com sucesso!</span>
          </div>
        )}
      </div>
    </div>
  );
}