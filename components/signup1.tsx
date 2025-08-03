import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Link, Navigate, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface Signup1Props {
  heading?: string;
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Signup1 = ({
  heading = "Cadastro",
  buttonText = "Criar conta",
  signupText = "Já tem uma conta?",
  signupUrl = "/login",
}: Signup1Props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios") || "[]");

    const novoUsuario = {
      id: crypto.randomUUID(),
      ...form,
    };

    localStorage.setItem("usuarios", JSON.stringify([...usuariosSalvos, novoUsuario]));

    navigate({ to: "/" });
  };


  return (
    <section className="bg-muted h-screen">
      <form onSubmit={handleSubmit} className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <div className="min-w-sm border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
            {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              className="text-sm"
              required
              value={form.name}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="text-sm"
              required
              value={form.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="text-sm"
              required
              value={form.password}
              onChange={handleChange}
            />
            <Select required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Você é..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professor">Professor</SelectItem>
                <SelectItem value="aluno">Aluno</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full">
              {buttonText}
            </Button>
          </div>
          <div className="text-muted-foreground flex justify-center gap-1 text-sm">
            <p>{signupText}</p>
            <Link
              to={signupUrl}
              className="text-primary font-medium hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export { Signup1 };
