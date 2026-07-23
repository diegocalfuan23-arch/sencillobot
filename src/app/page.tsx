import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-black">
      <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
        SencilloBot
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Deploy automático funcionando (repo público) 🚀
      </p>
      <Button>Empezar</Button>
    </div>
  );
}
