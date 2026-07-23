import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const steps = [
  {
    number: "01",
    title: "Conecta tu API de IA",
    description:
      "Usa tu propia API key (OpenAI, Anthropic, o la que prefieras) para generar código con tu cuenta y tus límites.",
  },
  {
    number: "02",
    title: "Escribe lo que quieres lograr",
    description:
      '"Quiero sumar las ventas de marzo por vendedor" o "necesito unir estas dos tablas por ID de cliente" — en español simple.',
  },
  {
    number: "03",
    title: "Copia el código y listo",
    description:
      "Recibe la fórmula de Excel o la consulta SQL exacta, lista para pegar donde la necesites.",
  },
];

const features = [
  {
    title: "Excel y SQL",
    description:
      "Genera fórmulas complejas de Excel o consultas SQL completas sin memorizar sintaxis.",
  },
  {
    title: "Tu propia API key",
    description:
      "Conectas la IA que ya usas. Sin intermediarios, sin límites artificiales de mensajes.",
  },
  {
    title: "Explicación incluida",
    description:
      "Cada resultado viene con una explicación breve de qué hace el código y por qué.",
  },
  {
    title: "Historial de consultas",
    description:
      "Vuelve a encontrar y reutilizar fórmulas y queries que ya generaste antes.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <span className="text-lg font-semibold tracking-tight">
          Sencillo<span className="text-primary">Bot</span>
        </span>
        <nav className="flex items-center gap-3">
          <Button variant="ghost" render={<Link href="/login" />}>
            Iniciar sesión
          </Button>
          <Button render={<Link href="/signup" />}>Empezar gratis</Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center sm:py-28">
          <Badge>Excel + SQL con IA</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Escribe lo que necesitas.
            <br />
            Recibe el código listo.
          </h1>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground">
            SencilloBot conecta tu propia API de IA para convertir una simple
            descripción en la fórmula de Excel o la consulta SQL exacta que
            necesitas. Sin aprender sintaxis, sin buscar en foros.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/signup" />}>
              Empezar gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="#como-funciona" />}
            >
              Ver cómo funciona
            </Button>
          </div>
        </section>

        <section id="como-funciona" className="border-t bg-muted/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                Cómo funciona
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tres pasos entre tu pregunta y el código que necesitas.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {steps.map((step) => (
                <Card key={step.number}>
                  <CardHeader>
                    <span className="text-sm font-medium text-primary">
                      {step.number}
                    </span>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight">
                Todo lo que necesitas para dejar de perder tiempo
              </h2>
              <p className="mt-3 text-muted-foreground">
                Menos tiempo buscando la fórmula correcta, más tiempo usando
                los resultados.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t bg-muted/30 py-20">
          <div className="mx-auto max-w-xl px-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Prueba SencilloBot gratis
            </h2>
            <p className="mt-3 text-muted-foreground">
              Crea tu cuenta y conecta tu API en menos de dos minutos.
            </p>
            <Card className="mt-8 text-left">
              <CardContent>
                <form className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1"
                  />
                  <Button render={<Link href="/signup" />}>
                    Crear cuenta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} SencilloBot</span>
          <span>Hecho para quienes viven en Excel y SQL</span>
        </div>
      </footer>
    </div>
  );
}
