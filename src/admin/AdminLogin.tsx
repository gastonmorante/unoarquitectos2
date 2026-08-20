import React, { useState } from "react";
import { motion } from "motion/react";
import { Lock, Eye, EyeOff, ShieldCheck, ArrowRight, X } from "lucide-react";
import { useSiteContent } from "../context/ContentContext";
import Logo from "../components/Logo";

interface AdminLoginProps {
  onClose?: () => void;
}

export default function AdminLogin({ onClose }: AdminLoginProps) {
  const { login } = useSiteContent();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const success = await login(password);
      if (!success) {
        setErrorMessage("Contraseña incorrecta. Por favor intente de nuevo.");
      }
    } catch {
      setErrorMessage("Error de conexión al validar credenciales.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative bg-white border border-gris-piedra rounded-xs shadow-2xl w-full max-w-md p-6 sm:p-8 text-gris-texto text-left overflow-hidden"
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-teal-uno transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-teal-uno/10 flex items-center justify-center text-teal-uno">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <Logo showText={false} iconSize={26} />
            <h2 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold mt-1">
              Panel Administrativo
            </h2>
          </div>
        </div>

        <p className="font-body-md text-xs text-gris-texto/80 mb-6 leading-relaxed">
          Ingrese la clave de administrador para gestionar las galerías fotográficas, obras, textos y métricas de <strong>UNO Arquitectos</strong>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-label-caps text-[10px] uppercase tracking-wider text-teal-uno font-semibold mb-1.5">
              Contraseña de Acceso
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full bg-gris-piedra/15 border border-gris-piedra rounded-xs px-3.5 py-2.5 text-xs text-gris-texto focus:outline-none focus:border-teal-uno focus:bg-white transition-all pr-10 min-h-[44px]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-teal-uno cursor-pointer"
                aria-label={showPassword ? "Ocultar contraseña" : "Ver contraseña"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-50 border border-red-200 rounded-xs text-[11px] text-red-700 font-body-md"
            >
              {errorMessage}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !password.trim()}
            className={`w-full py-3 px-4 bg-teal-uno hover:opacity-90 text-white rounded-xs font-label-caps text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[46px] ${
              isSubmitting || !password.trim() ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <span className="inline-block animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <>
                Ingresar al Dashboard <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gris-piedra flex items-center justify-between text-[10px] text-zinc-400 font-label-caps uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-uno" /> Sesión Cifrada
          </span>
          <span>v2.2 CMS</span>
        </div>
      </motion.div>
    </div>
  );
}
