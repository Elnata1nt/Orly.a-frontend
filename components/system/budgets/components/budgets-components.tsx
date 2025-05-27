import { CreditCard, BarChart2, Upload, ShoppingBag, Film } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function BudgetsComponents() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Transfer Cards */}
        <Card className="p-6 bg-white rounded-3xl shadow-sm">
          <div className="flex flex-col gap-2">
            <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center">
              <CreditCard className="text-indigo-500 h-5 w-5" />
            </div>
            <p className="text-gray-500 text-sm">
              Transferência via Número do Cartão
            </p>
            <p className="text-2xl font-bold">$0</p>
          </div>
        </Card>

        <Card className="p-6 bg-white rounded-3xl shadow-sm">
          <div className="flex flex-col gap-2">
            <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center">
              <BarChart2 className="text-indigo-500 h-5 w-5" />
            </div>
            <p className="text-gray-500 text-sm">
              Transferência para outro Banco
            </p>
            <p className="text-2xl font-bold">$0</p>
          </div>
        </Card>

        <Card className="p-6 bg-white rounded-3xl shadow-sm">
          <div className="flex flex-col gap-2">
            <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center">
              <Upload className="text-indigo-500 h-5 w-5" />
            </div>
            <p className="text-gray-500 text-sm">Transferência mesmo Banco</p>
            <p className="text-2xl font-bold">$0</p>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Financial Goals Card */}
        <Card className="p-6 bg-white rounded-3xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                Alcance metas financeiras mais rápido
              </h2>
              <p className="text-gray-500 text-sm">
                Use seu cartão em todo o mundo sem taxas ocultas. Guarde,
                transfira e gaste dinheiro.
              </p>
              <button className="bg-indigo-500 text-white px-6 py-2 rounded-full text-sm">
                Saiba Mais
              </button>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-indigo-400 p-4 rounded-xl w-64 h-40 flex flex-col justify-between">
                <div className="text-white text-sm">Cartão Universal</div>
                <div className="text-white">•••• •••• •••• ••••</div>
                <div className="flex justify-between">
                  <div className="text-white text-xs">Nome</div>
                  <div className="text-white text-xs">00/00</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Savings Chart */}
        <Card className="p-6 bg-white rounded-3xl shadow-sm">
          <div className="space-y-4">
            <p className="text-gray-500 text-sm">Economizado Este Mês</p>
            <p className="text-4xl font-bold">$0.0</p>
            <div className="flex gap-4 text-sm">
              <button className="text-gray-400">Dia</button>
              <button className="text-gray-400">Semana</button>
              <button className="font-medium">Mês</button>
              <button className="text-gray-400">Ano</button>
            </div>
            <div className="h-40 w-full relative">
              {/* Placeholder for chart */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gray-200 relative">
                  <div
                    className="absolute h-20 w-full"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='none' stroke='%23172554' strokeWidth='8' d='M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,128C672,96,768,96,864,122.7C960,149,1056,203,1152,208C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Jan</span>
              <span>Feb</span>
              <span className="text-indigo-500 font-medium">Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Transactions */}
        <Card className="p-6 bg-white rounded-3xl shadow-sm">
          <h3 className="font-bold mb-4">Suas Transações</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <ShoppingBag className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">Compras</p>
                  <p className="text-xs text-gray-400">Hoje, 00:00</p>
                </div>
              </div>
              <span className="text-red-500">-$0</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <Film className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-medium">Cinema</p>
                  <p className="text-xs text-gray-400">Hoje, 00:00</p>
                </div>
              </div>
              <span className="text-red-500">-$0</span>
            </div>
          </div>
        </Card>

        {/* Transfers */}
        <Card className="p-6 bg-white rounded-3xl shadow-sm">
          <h3 className="font-bold mb-4">Suas Transferências</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <div className="bg-gray-300 w-full h-full rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Pessoa 1</p>
                  <p className="text-xs text-gray-400">Hoje, 00:00</p>
                </div>
              </div>
              <span className="text-green-500">+$0</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <div className="bg-gray-300 w-full h-full rounded-full"></div>
                </div>
                <div>
                  <p className="font-medium">Pessoa 2</p>
                  <p className="text-xs text-gray-400">Hoje, 00:00</p>
                </div>
              </div>
              <span className="text-red-500">-$0</span>
            </div>
          </div>
        </Card>

        {/* Goal Completion */}
        <Card className="p-6 bg-indigo-900 rounded-3xl shadow-sm text-white">
          <div className="h-full flex flex-col justify-center items-center space-y-4">
            <p className="text-indigo-200">Plano para 2023</p>
            <h2 className="text-3xl font-bold">Concluído</h2>
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-8 border-indigo-700"></div>
              <div className="absolute inset-0 rounded-full border-8 border-indigo-400 border-l-transparent border-r-transparent border-b-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">100%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
