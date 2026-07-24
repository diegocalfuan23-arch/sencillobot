import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { SignOutButton } from "./sign-out-button";

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-6 py-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Hola, {session.user.name}
          </h1>
          <p className="text-muted-foreground">{session.user.email}</p>
        </div>
        <SignOutButton />
      </div>
      <p className="text-muted-foreground">
        Acá vas a poder escribir tu consulta en español y recibir la fórmula
        de Excel o el código SQL. Todavía estamos construyendo esta parte.
      </p>
    </div>
  );
}
