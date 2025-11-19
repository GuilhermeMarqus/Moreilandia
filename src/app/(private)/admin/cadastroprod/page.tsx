"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, Upload, CheckCircle2 } from "lucide-react"; // Adicionar PenLine e Trash2 para simular edição/exclusão (opcional)
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation"; // Importar useRouter
import { v4 as uuidv4 } from "uuid"; // Importar uuid para gerar IDs únicos

interface ProdutorData {
  id?: string; // ID do produtor (opcional, gerado pelo backend)
  nome: string;
  endereco: string;
  contato_whatsapp: string; // Alterado de 'telefone'
  contato_email: string; // Alterado de 'email'
  userId: string; // ID do ADMIN que está cadastrando
  biografia: string;
  foto_perfil: string; // Alterado de 'imagem'
}

export default function CadastrarProdutorPage() {
  const [produtor, setProdutor] = useState<ProdutorData>({
    nome: "",
    endereco: "",
    contato_whatsapp: "",
    contato_email: "",
    userId: "",
    biografia: "",
    foto_perfil: "",
  });
  const [salvo, setSalvo] = useState(false);
  const [cadastradoId, setCadastradoId] = useState<string | null>(null); // Novo estado para o ID cadastrado
  const [carregando, setCarregando] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter(); // Inicializar useRouter

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setProdutor((prev) => ({ ...prev, userId: user.id }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProdutor({ ...produtor, [e.target.name]: e.target.value });
    setSalvo(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProdutor({ ...produtor, foto_perfil: imageUrl });
      setSalvo(false);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleSalvar = async () => {
    const token = localStorage.getItem("moreilandia.token");

    if (!token) {
      alert("Você precisa estar logado para cadastrar um produtor");
      setCarregando(false);
      return;
    }

    if (
      !produtor.nome ||
      !produtor.endereco ||
      !produtor.contato_whatsapp ||
      !produtor.contato_email ||
      !produtor.biografia
    ) {
      alert("Preencha todos os campos obrigatórios antes de salvar.");
      return;
    }

    const file = fileInputRef.current?.files?.[0];

    setCarregando(true);

    const formData = new FormData();
    formData.append("nome", produtor.nome);
    formData.append("endereco", produtor.endereco);
    formData.append("contato_whatsapp", produtor.contato_whatsapp);
    formData.append("email", produtor.contato_email); // Alterado para 'email'
    formData.append("biografia", produtor.biografia);
    formData.append("userId", produtor.userId);

    if (file) {
      formData.append("foto_perfil", file);
    }

    try {
      const response = await fetch(
        "https://extensao-8-semestre-si-2025-2.onrender.com/api/produtor", // URL para cadastrar produtor
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            // 'Content-Type': 'multipart/form-data', // Não defina manualmente, fetch faz isso automaticamente com FormData
          },
          body: formData,
        }
      );

      if (!response.ok) {
        console.error("Detalhes da resposta de erro:", await response.json()); // Adicionado para depuração
        throw new Error(`Erro ao cadastrar produtor: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Produtor cadastrado:", data);
      setCadastradoId(data.id); // Armazenar o ID do produtor cadastrado

      setSalvo(true);
      setProdutor({
        nome: "",
        endereco: "",
        contato_whatsapp: "",
        contato_email: "",
        userId: "",
        biografia: "",
        foto_perfil: "",
      }); // Restaurado userId
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Limpar o input de arquivo
      }
      setTimeout(() => setSalvo(false), 3000);
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar o produtor. Veja o console para mais detalhes.");
    } finally {
      setCarregando(false);
    }
  };

  const handleDescartar = () => {
    setProdutor({
      nome: "",
      endereco: "",
      contato_whatsapp: "",
      contato_email: "",
      userId: "",
      biografia: "",
      foto_perfil: "",
    }); // Restaurado userId
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
              {produtor.foto_perfil ? (
                <Image
                  src={produtor.foto_perfil}
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

            {/* Nome e ID - Ajustado para a direita da foto_perfil */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div>
                <Label
                  htmlFor="nome"
                  className="block text-sm font-medium mb-1"
                >
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  name="nome"
                  value={produtor.nome}
                  onChange={handleChange}
                  placeholder="Nome do Produtor"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              {/* O campo ID/userId foi removido da renderização, pois será gerado/obtido automaticamente */}
            </div>
          </div>

          {/* Contatos e Endereço */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label
                htmlFor="endereco"
                className="block text-sm font-medium mb-1"
              >
                Endereço
              </Label>
              <Input
                id="endereco"
                type="text"
                name="endereco"
                value={produtor.endereco}
                onChange={handleChange}
                placeholder="Endereço do Produtor"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
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
                value={produtor.contato_whatsapp}
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
                value={produtor.contato_email}
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
              value={produtor.biografia}
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
