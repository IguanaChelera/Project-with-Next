"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Image from "next/image";

type FormData = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    if (data.username === "admin" && data.password === "1234") {
      router.push("/dashboard"); // Redirección directa
    } else {
      setError("root", { 
        type: "manual",
        message: "Credenciales incorrectas"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Imagen con Next.js Image */}
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
          <Image
            src="/enjambre-embajadores-zacatecas.jpg" // Asegúrate de tener esta imagen en /public
            alt="Login"
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h1>

        {/* Mensaje de error general */}
        {errors.root && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
            <p className="text-red-700">{errors.root.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Campo de usuario con register */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Usuario
            </label>
            <input
              {...register("username", { 
                required: "El usuario es obligatorio",
                minLength: {
                  value: 3,
                  message: "Mínimo 3 caracteres"
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                errors.username ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder=""
            />
            {errors.username && (
              <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
            )}
          </div>

          {/* Campo de contraseña con register */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 4,
                  message: "Mínimo 4 caracteres"
                }
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${
                errors.password ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder=""
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors shadow-md"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}