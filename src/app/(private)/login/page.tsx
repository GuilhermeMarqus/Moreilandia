"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
//login de teste na pag prisma/seed.ts
const Login = () => {
  // const [email, setEmail] = useState(""); // REMOVER
  // const [password, setPassword] = useState(""); // REMOVER
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const handleLogin = async (data: any) => {
    try {
      const response = await axios.post("https://extensao-8-semestre-si-2025-2.onrender.com/api/auth/login", {
        email: data.email,
        senha: data.password,
      });

      const { token } = response.data;
      localStorage.setItem("moreilandia.token", token);
      router.push("/produtor");
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        setError("email", { message: "Credenciais inválidas" });
        setError("password", { message: "Credenciais inválidas" });
        console.error("Falha no login:", error.response.data);
        alert(
          error.response.data.message ||
            "Falha no login. Verifique suas credenciais"
        );
      } else {
        alert("Falha no login. Verifique suas credenciais.");
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-200 justify-center items-center">
        <Image alt="Logomarca" src={"logo.svg"} width={150} height={150} />
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle className="text-slate-800">Faça seu login</CardTitle>
            <CardDescription>
              Faça seu login para ter acesso às informações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seuemail@email.com"
                    {...register("email", { required: "Email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message as string}</p>}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...register("password", { required: "Senha é obrigatória", minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" } })}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message as string}</p>}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button type="submit" className="w-auto bg-slate-600" onClick={handleSubmit(handleLogin)}>
              Entrar
            </Button>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Ajuda com o login?
            </a>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Login;
