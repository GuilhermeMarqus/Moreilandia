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

const Login = () => {
  return (
    <>
      <div className="flex flex-col w-full h-200 justify-center items-center">
        <Image
        alt="Logomarca"
        src={"logo.svg"}
        width={150}
        height={150}
        />
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle
            className="text-slate-800"
            >Faça seu login</CardTitle>
            <CardDescription>
              Faça seu login para ter acesso às informações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seuemail@email.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button type="submit" className="w-auto bg-slate-600">
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
