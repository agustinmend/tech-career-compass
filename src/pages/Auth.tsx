import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Auth = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  return (
    <div className="container-page py-20 max-w-md">
      <div className="surface-card p-8">
        <div className="flex gap-2 mb-6 p-1 rounded-xl bg-accent">
          {(["login","register"] as const).map(m => (
            <button key={m} onClick={() => setMode(m)} className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${mode === m ? "bg-background shadow-soft text-primary" : "text-muted-foreground"}`}>
              {m === "login" ? "Iniciar sesión" : "Registrarse"}
            </button>
          ))}
        </div>
        <form onSubmit={e => { e.preventDefault(); toast.success(mode === "login" ? "Bienvenido" : "Cuenta creada"); }} className="space-y-4">
          {mode === "register" && <div><Label htmlFor="nombre">Nombre</Label><Input id="nombre" required /></div>}
          <div><Label htmlFor="email">Correo</Label><Input id="email" type="email" required /></div>
          <div><Label htmlFor="password">Contraseña</Label><Input id="password" type="password" required /></div>
          <Button type="submit" className="w-full bg-brand-navy text-primary-foreground hover:bg-brand-navy/90">{mode === "login" ? "Entrar" : "Crear cuenta"}</Button>
        </form>
        <p className="mt-6 text-xs text-center text-muted-foreground">Al continuar aceptas los <Link to="/" className="text-primary-glow hover:underline">términos</Link>.</p>
      </div>
    </div>
  );
};
export default Auth;
