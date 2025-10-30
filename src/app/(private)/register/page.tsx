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
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Register = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const handleRegister = async (data: any) => {
    try {
      const response = await axios.post("https://extensao-8-semestre-si-2025-2.onrender.com/api/usuario", {
        nome: data.name,
        email: data.email,
        senha: data.password,
        papel: data.role, // Adiciona o campo ADMIN ou PRODUTOR
      });

      // Se o registro for bem-sucedido, você pode querer logar o usuário
      // ou redirecioná-lo para a página de login
      alert("Registro realizado com sucesso! Faça login para continuar.");
      router.push("/login");
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        setError("email", { message: "Erro no registro. Tente novamente." });
        setError("password", { message: "Erro no registro. Tente novamente." });
        console.error("Falha no registro:", error.response.data);
        alert(
          error.response.data.message ||
            "Falha no registro. Verifique seus dados."
        );
      } else {
        alert("Falha no registro. Verifique seus dados.");
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
            <CardTitle className="text-slate-800">Crie sua conta</CardTitle>
            <CardDescription>
              Preencha seus dados para criar uma nova conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    {...register("name", { required: "Nome é obrigatório" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message as string}</p>}
                </div>
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
                {/* Novo campo para seleção de Papel */}
                <div className="grid gap-2">
                  <Label htmlFor="role">Papel</Label>
                  <Select onValueChange={(value: string) => register("role").onChange({ target: { value } })}> 
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione um papel" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PRODUTOR">Produtor</SelectItem>
                      <SelectItem value="ADMIN">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.role && <p className="text-red-500 text-sm">{errors.role.message as string}</p>}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button type="submit" className="w-auto bg-slate-600" onClick={handleSubmit(handleRegister)}>
              Registrar
            </Button>
            <Link href="/login" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
              Já tem uma conta? Faça login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Register;
