import { Separator } from "./components/ui/separator";
import { WSLButton } from "./components/WSLButton";
import "./main.css";
import { Power, PowerOff, RotateCcw } from "lucide-react";

export function App() {
  return (
    <div className="bg-zinc-900 h-screen w-screen text-white font-display mx-auto">
      <div className="mx-auto">
        <h1 className="mx-auto w-fit pt-12 text-3xl">WSL Tray</h1>
      </div>
      <Separator />

      <div className="mt-12 w-3/5 mx-auto ">
        <h2 className="text-3xl text-center w-full">
          Status: <span className="text-green-600 capitalize">ativo</span>
        </h2>
        <div className="mt-12 flex items-center justify-center w-fit mx-auto gap-4">
          <WSLButton className="border-green-700 hover:bg-green-700">Ligar WSL <Power /></WSLButton>
          <WSLButton className="border-yellow-600 hover:bg-yellow-600">Reiniciar WSL <RotateCcw /></WSLButton>
          <WSLButton className="border-red-500 hover:bg-red-500">Desligar WSL <PowerOff /></WSLButton>
        </div>
      </div>
    </div>
  );
}
