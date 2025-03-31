"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-4xl font-bold text-green-600 mb-4 animate-bounce">
          ¡Bienvenido!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Has iniciado sesión correctamente como administrador.
        </p>
        <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
          <p className="text-green-700">
            Serás redirigido a la página principal en 5 segundos... o tal vez menos, no funciona el timer.
          </p>
        </div>
      </div>
    </div>
  );
}