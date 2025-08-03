export type Role = "professor" | "aluno";

type User = {
  email: string;
  name: string;
  password: string;
  role: Role;
};

export async function login(email: string, password: string): Promise<User | null> {
  // const record = mockUsers[email];
  const user = localStorage.getItem("usuarios");

  if (user) {
    const usuarios = JSON.parse(user);
    const foundUser = usuarios.find((u: User) => u.email === email && u.password === password);
    if (foundUser) {
      localStorage.setItem("user", JSON.stringify(foundUser));
      return foundUser;
    }
  }

  return null;
}

export function logout() {
  localStorage.removeItem("user");
}

export function getUser(): User | null {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export function isLoggedIn(): boolean {
  return !!getUser();
}
