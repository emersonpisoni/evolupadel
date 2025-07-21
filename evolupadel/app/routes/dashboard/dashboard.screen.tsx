
import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Bem-vindo, Professor!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <p className="text-gray-500">Alunos ativos</p>
            <h2 className="text-3xl font-bold">12</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-gray-500">Avaliações pendentes</p>
            <h2 className="text-3xl font-bold">4</h2>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <p className="text-gray-500">Relatórios gerados</p>
            <h2 className="text-3xl font-bold">27</h2>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
