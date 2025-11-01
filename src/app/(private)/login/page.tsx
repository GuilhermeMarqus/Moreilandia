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
import { jwtDecode } from "jwt-decode"; // Importar jwtDecode
//login de teste na pag prisma/seed.ts
const Login = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const handleLogin = async (data: any) => {
    try {
      const response = await axios.post(
        "https://extensao-8-semestre-si-2025-2.onrender.com/api/auth/login",
        {
          email: data.email,
          senha: data.password,
        }
      );

      const { token } = response.data; // A API retorna apenas o token e outros dados, o papel está dentro do token

      const decodedToken: { nome: string, email: string, papel: string, iat: number, exp: number, sub: string } = jwtDecode(token);
      const userRole = decodedToken.papel;
      const userInfo = { // Corrigido para extrair diretamente do decodedToken
        nome: decodedToken.nome,
        email: decodedToken.email,
        papel: decodedToken.papel,
        id: decodedToken.sub, // Assumindo que 'sub' é o ID do usuário
      };

      console.log("Decoded Token:", decodedToken); // Adicionado para depuração
      console.log("User Info to be stored:", userInfo); // Adicionado para depuração

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userInfo)); // Armazenar as informações do usuário do token

      // Remover logs de diagnóstico
      // console.log("Objeto de usuário após login:", usuario);
      // console.log("Papel do usuário (dentro de usuario.papel):", usuario?.papel);

      if (userRole === "PRODUTOR") {
        router.push("/produtor");
      } else if (userRole === "ADMIN") {
        router.push("/admin/produtores");
      } else {
        // Rota padrão para outros papéis ou caso de erro
        router.push("/"); // Ou outra rota padrão
      }
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
            <Button
              type="submit"
              className="w-auto bg-slate-600"
              onClick={handleSubmit(handleLogin)}
            >
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
