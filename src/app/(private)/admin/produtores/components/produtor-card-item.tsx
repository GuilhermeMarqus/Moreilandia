"use client";

import { useState } from "react";
import Image from "next/image";
import { PenLine, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export interface ProdutorData {
  id: string;
  nome: string;
  endereco: string;
  contato_whatsapp: string;
  contato_email: string | null;
  biografia: string;
  foto_perfil: string;
  foto_perfil_url?: string;
  userId: string;
}

interface ProdutorCardItemProps {
  produtor: ProdutorData;
}

export default function ProdutorCardItem({ produtor }: ProdutorCardItemProps) {
  const router = useRouter();
  const [imageError, setImageError] = useState(false);

  return (
    <Card key={produtor.id} className="mb-6">
      <CardHeader>
        <div className="grid grid-cols-3 gap-4 font-semibold text-gray-700">
          <div>Nome</div>
          <div>ID</div>
          <div></div> {/* Ação */}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 items-center py-2 px-4 rounded-md bg-gray-100 mb-2">
          <div className="flex items-center space-x-3">
            <Image
              src={imageError ? "/UserIcon.svg" : encodeURI(produtor.foto_perfil_url || "/UserIcon.svg")}
              alt={produtor.nome}
              width={40}
              height={40}
              className="rounded-full object-cover"
              onError={() => setImageError(true)}
            />
            <span>{produtor.nome}</span>
          </div>
          <div>{produtor.id}</div>
          <div className="flex justify-end space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              onClick={() =>
                router.push(`/admin/produtores/${produtor.id}`)
              }
            >
              <PenLine className="h-4 w-4 cursor-pointer" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
