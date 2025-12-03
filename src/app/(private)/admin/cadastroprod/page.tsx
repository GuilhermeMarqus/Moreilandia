"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Upload, CheckCircle2 } from "lucide-react"; // Adicionar PenLine e Trash2 para simular edição/exclusão (opcional)
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation"; // Importar useRouter
import axios from "axios"; // Importar axios

interface NewUserData {
  nome: string;
  email: string;
  senha: string;
  papel: "PRODUTOR";
}

interface ProdutorData {
  id?: string; // ID do produtor (opcional, gerado pelo backend)
  contato_whatsapp: string;
  contato_email: string;
  userId: string; // ID do usuário que é o produtor (não opcional)
  biografia: string;
  foto_perfil: string;
}

export default function CadastrarProdutorPage() {
  const [newProducerData, setNewProducerData] = useState<
    NewUserData & ProdutorData
  >({
    nome: "",
    email: "",
    senha: "",
    papel: "PRODUTOR", // Define o papel como PRODUTOR por padrão
    contato_whatsapp: "",
    contato_email: "",
    userId: "", // Será preenchido após a criação do usuário
    biografia: "",
    foto_perfil: "",
  });
  const [salvo, setSalvo] = useState(false);
  const [cadastradoId, setCadastradoId] = useState<string | null>(null); // Novo estado para o ID cadastrado
  const [carregando, setCarregando] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter(); // Inicializar useRouter

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewProducerData({ ...newProducerData, [e.target.name]: e.target.value });
    setSalvo(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewProducerData({ ...newProducerData, foto_perfil: imageUrl });
      setSalvo(false);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSalvar = async () => {
    const token = localStorage.getItem("moreilandia.token");

    if (!token) {
      alert("Você precisa estar logado para cadastrar um produtor.");
      setCarregando(false);
      return;
    }

    if (
      !newProducerData.nome ||
      !newProducerData.email ||
      !newProducerData.senha ||
      !newProducerData.contato_whatsapp ||
      !newProducerData.contato_email ||
      !newProducerData.biografia
    ) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const file = fileInputRef.current?.files?.[0];

    if (!file) {
      alert("Por favor, selecione uma imagem de perfil para o produtor.");
      setCarregando(false);
      return;
    }

    setCarregando(true);

    try {
      // 1. Criar o usuário PRODUTOR
      const userResponse = await axios.post(
        "https://extensao-8-semestre-si-2025-2.onrender.com/api/usuario",
        {
          nome: newProducerData.nome,
          email: newProducerData.email,
          senha: newProducerData.senha,
          papel: "PRODUTOR",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const userId = userResponse.data.id; // Supondo que o ID do usuário criado seja retornado como 'id'
      console.log("UserID obtido da criação do usuário (para produtor):", userId); // Log para depuração

      // 2. Criar o perfil do produtor, vinculando ao userId recém-criado
      const formData = new FormData();
      formData.append("biografia", newProducerData.biografia);
      formData.append("contato_whatsapp", newProducerData.contato_whatsapp);
      formData.append("contato_email", newProducerData.contato_email);
      if (file) {
        formData.append("foto_perfil", file);
      }

      console.log("Conteúdo do FormData para o perfil do produtor:"); // Log para depuração
      for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      const produtorResponse = await axios.post(
        `https://extensao-8-semestre-si-2025-2.onrender.com/api/usuario/${userId}/produtor`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (
        !produtorResponse.status ||
        produtorResponse.status < 200 ||
        produtorResponse.status >= 300
      ) {
        let errorData: any = produtorResponse.data;
        throw new Error(
          `Erro ao cadastrar perfil do produtor: ${
            produtorResponse.status || "N/A"
          } - ${
            typeof errorData === "object" ? JSON.stringify(errorData) : errorData
          }`
        );
      }

      setSalvo(true);
      setNewProducerData({
        nome: "",
        email: "",
        senha: "",
        papel: "PRODUTOR",
        contato_whatsapp: "",
        contato_email: "",
        userId: "",
        biografia: "",
        foto_perfil: "",
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Limpar o input de arquivo
      }
      setTimeout(() => setSalvo(false), 3000);
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Erro da API (Axios):", error.response.data);
        console.error("Status do erro (Axios):", error.response.status);
        const errorMessage = typeof error.response.data === 'object' && error.response.data !== null
          ? JSON.stringify(error.response.data)
          : error.response.data || error.message;
        alert(`Erro: ${error.response.status} - ${errorMessage}`);
      } else {
        console.error("Erro desconhecido:", error);
        alert(error.message || "Erro ao salvar o produtor.");
      }
    } finally {
      setCarregando(false);
    }
  };

  const handleDescartar = () => {
    setNewProducerData({
      nome: "",
      email: "",
      senha: "",
      papel: "PRODUTOR",
      contato_whatsapp: "",
      contato_email: "",
      userId: "",
      biografia: "",
      foto_perfil: "",
    });
    setSalvo(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Limpar o input de arquivo
    }
  };

  return (
    <div className="flex-1 bg-gray-100 min-h-screen flex justify-center items-start p-6 md:p-10">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow p-8">
        <h1 className="text-2xl font-semibold mb-6">Cadastrar Produtor</h1>

        <div className="bg-gray-200 rounded-xl p-6 space-y-6">
          {/* Área da foto_perfil e ID */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* foto_perfil */}
            <div
              onClick={handleImageClick}
              className="relative w-32 h-32 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors flex-shrink-0"
            >
              {newProducerData.foto_perfil ? (
                <Image
                  src={newProducerData.foto_perfil}
                  alt="foto_perfil do Produtor"
                  fill
                  className="object-cover rounded-full"
                />
              ) : (
                <div className="flex flex-col items-center text-white">
                  <Upload className="h-10 w-10 mb-1" />
                  <Plus className="h-6 w-6" />
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

            {/* Campos de Nome, Email e Senha */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div>
                <Label htmlFor="nome" className="block text-sm font-medium mb-1">
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  name="nome"
                  value={newProducerData.nome}
                  onChange={handleChange}
                  placeholder="Nome Completo"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={newProducerData.email}
                  onChange={handleChange}
                  placeholder="email@exemplo.com"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <Label htmlFor="senha" className="block text-sm font-medium mb-1">
                  Senha
                </Label>
                <Input
                  id="senha"
                  type="password"
                  name="senha"
                  value={newProducerData.senha}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Contatos e Endereço */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="contato_whatsapp"
                className="block text-sm font-medium mb-1"
              >
                WhatsApp
              </Label>
              <Input
                id="contato_whatsapp"
                type="text"
                name="contato_whatsapp"
                value={newProducerData.contato_whatsapp}
                onChange={handleChange}
                placeholder="Numero do WhatsApp"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <Label
                htmlFor="contato_email"
                className="block text-sm font-medium mb-1"
              >
                Email
              </Label>
              <Input
                id="contato_email"
                type="email"
                name="contato_email"
                value={newProducerData.contato_email}
                onChange={handleChange}
                placeholder="Email para Contato"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Biografia */}
          <div>
            <Label
              htmlFor="biografia"
              className="block text-sm font-medium mb-1"
            >
              Biografia
            </Label>
            <textarea
              id="biografia"
              name="biografia"
              value={newProducerData.biografia}
              onChange={handleChange}
              placeholder="Escreva a biografia do produtor..."
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
            {carregando ? "Salvando..." : "Cadastrar Produtor"}
          </Button>
        </div>

        {/* Confirmação */}
        {salvo && (
          <div className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-lg flex items-center space-x-2 shadow-lg animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle2 className="h-5 w-5" />
            <span>Produtor cadastrado com sucesso! ID: {cadastradoId}</span>
          </div>
        )}
      </div>
    </div>
  );
}
