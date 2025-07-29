export type Role = "professor" | "aluno";

type User = {
  email: string;
  name: string;
  role: Role;
};

const mockUsers: Record<string, { password: string; user: User }> = {
  "prof@padel.com": {
    password: "123456",
    user: { email: "prof@padel.com", name: "Professor Padel", role: "professor" },
  },
  "aluno@padel.com": {
    password: "123456",
    user: { email: "aluno@padel.com", name: "Aluno Padel", role: "aluno" },
  },
};

export async function login(email: string, password: string): Promise<User | null> {
  const record = mockUsers[email];
  if (record && record.password === password) {
    localStorage.setItem("user", JSON.stringify(record.user));
    return record.user;
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
