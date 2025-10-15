import { Button } from "@/components/ui/button";
import Navbar from "../components/navbar";
import Image from "next/image";

import Title from "../components/text";
import Cartao from "../components/cartao";
import HoneyCard from "../components/honeycard";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <div className="bg-[#f6a51e] w-full flex items-center flex-col" >
            <div className="flex mx-auto gap-30">
            <div className="w-[500] pt-20">
                <div className="text-left">
                <Title 
                before={"Sobre a"} 
                highlight={"cultura"} 
                after={"do mel"} 
                yellow={""}>
                </Title>
                </div>
                <p className="text-[#742406] p-3 text-[24px] font-medium">O mel que nasce da nossa terra</p>
                <p className="text-[white] p-3 text-[24px] font-medium">Parte da nossa identidade. Cada colmeia reflete o cuidado dos apicultores locais,
                                            que mantêm viva a tradição de produzir um mel puro, saudável e sustentável.
                                            Ao consumir nosso mel, você apoia famílias, 
                                            fortalece a economia da cidade e contribui 
                                            para a preservação da natureza.</p>
            </div>
            <HoneyCard 
            imageSrc={"/abelha-2.svg"} 
            text={"Em Moreilândia, a produção de mel é muito mais do que um ofício"}/>
        </div>
        <div className="pb-15">
          <Button className="bg-[white] hover:bg-[#AEAEAE] text-[#0B97E4] text-[20px] p-6">Veja Mais</Button>
          </div>
        </div>
        <main className="mx-auto">
            <div className="flex p-10 items-center gap-40">
                        <Cartao 
                        title={"Lorem ips un dolor"} 
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."} 
                        titleColor="#fafbfb" 
                        descriptionColor="#742406"/>
                        <Cartao 
                        title={"Lorem ips un dolor"} 
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."} 
                        titleColor="#fafbfb" 
                        descriptionColor="#742406"/>
                        <Cartao 
                        title={"Lorem ips un dolor"} 
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took ..."} 
                        titleColor="#fafbfb" 
                        descriptionColor="#742406"/>
            </div>            
        </main>
    </div>
  );
}
