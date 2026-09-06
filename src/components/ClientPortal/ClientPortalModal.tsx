import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  KeyRound, 
  Building2, 
  Lock, 
  X, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Eye,
  EyeOff
} from "lucide-react";
import { ClientProject } from "../../types/clientPortal";
import Logo from "../Logo";

interface ClientPortalModalProps {
  projects: ClientProject[];
  onLoginSuccess: (project: ClientProject) => void;
  onClose: () => void;
}

export default function ClientPortalModal({
  projects,
  onLoginSuccess,
  onClose,
}: ClientPortalModalProps) {
  const [selectedProperty, setSelectedProperty] = useState<string>(projects[0]?.propertyName || "");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      const normalizedProp = selectedProperty.trim().toLowerCase();
      const matchedProject = projects.find(
        (p) =>
          p.propertyName.toLowerCase() === normalizedProp ||
          p.id.toLowerCase() === normalizedProp ||
          p.propertyName.toLowerCase().includes(normalizedProp)
      );

      if (!matchedProject) {
        setError("Propiedad no encontrada en el padrón de obras activas.");
        setIsLoading(false);
        return;
      }

      const cleanPass = password.trim();
      const isMasterKey = cleanPass === "unoarq" || cleanPass === "UnoArq@2026!" || cleanPass === "uno2026";
      const isProjectKey = matchedProject.accessCode && cleanPass === matchedProject.accessCode;

      if (isMasterKey || isProjectKey) {
        if (rememberMe && typeof window !== "undefined") {
          localStorage.setItem(
            "uno_client_portal_session",
            JSON.stringify({
              projectId: matchedProject.id,
              propertyName: matchedProject.propertyName,
              timestamp: Date.now(),
            })
          );
        }
        setIsLoading(false);
        onLoginSuccess(matchedProject);
      } else {
        setError("Clave de acceso incorrecta. Utilice la clave maestra institucional o solicite acceso a su director de obra.");
        setIsLoading(false);
      }
    }, 400);
  };

  const handleSelectQuickProject = (project: ClientProject) => {
    setSelectedProperty(project.propertyName);
    setPassword("unoarq");
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl font-sans text-left">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-[#141418] border border-[#c2a275]/40 rounded-xs max-w-lg w-full shadow-2xl overflow-hidden relative"
      >
        {/* TOP ACCENT LINE */}
        <div className="w-full h-1 bg-gradient-to-r from-teal-uno via-[#c2a275] to-teal-uno" />

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-xs transition-colors cursor-pointer"
          title="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6">
          {/* LOGO & TITLE */}
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#c2a275] text-xs font-label-caps uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-teal-uno" />
              <span>Plataforma Privada de Clientes</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">
              Supervisión de Obra Exclusiva
            </h3>
            <p className="text-xs sm:text-sm text-[#e4ded5]/70 leading-relaxed">
              Ingrese el nombre de su propiedad y clave confidencial asignada para acceder al avance en tiempo real, recorridos 360° y bitácora técnica.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* PROPERTY SELECTION */}
            <div>
              <label className="block text-[11px] font-label-caps uppercase text-[#c2a275] tracking-wider mb-1.5 font-semibold">
                Nombre de la Propiedad / Obra
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={selectedProperty}
                  onChange={(e) => setSelectedProperty(e.target.value)}
                  placeholder="Ej. Arrecifes, Casa Tzalam, Residencia Mayakoba"
                  required
                  list="properties-list"
                  className="w-full bg-black/60 border border-[#c2a275]/30 px-3.5 py-2.5 rounded-xs text-xs text-white placeholder-zinc-500 focus:border-teal-uno focus:outline-none focus:ring-1 focus:ring-teal-uno"
                />
                <datalist id="properties-list">
                  {projects.map((p) => (
                    <option key={p.id} value={p.propertyName}>
                      {p.location}
                    </option>
                  ))}
                </datalist>
                <Building2 className="w-4 h-4 text-[#c2a275]/60 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-label-caps uppercase text-[#c2a275] tracking-wider font-semibold">
                  Clave Confidencial de Acceso
                </label>
                <span className="text-[10px] text-zinc-400 font-mono">
                  Clave Maestra: <strong className="text-teal-uno font-normal">unoarq</strong>
                </span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingrese clave (ej. unoarq)"
                  required
                  className="w-full bg-black/60 border border-[#c2a275]/30 px-3.5 py-2.5 rounded-xs text-xs text-white placeholder-zinc-500 focus:border-teal-uno focus:outline-none focus:ring-1 focus:ring-teal-uno font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-1 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* REMEMBER ME CHECKBOX */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-[#e4ded5]/70 hover:text-white">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 rounded-xs accent-teal-uno"
                />
                <span className="text-[11px]">Recordar sesión en este dispositivo</span>
              </label>
            </div>

            {/* ERROR ALERT */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/15 border border-red-500/40 text-red-200 text-xs rounded-xs"
              >
                {error}
              </motion.div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-teal-uno hover:bg-[#008f8f] text-white rounded-xs font-label-caps text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer active:scale-98 disabled:opacity-50"
            >
              {isLoading ? (
                <span>Validando credenciales...</span>
              ) : (
                <>
                  <span>Ingresar a la Plataforma Privada</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* QUICK ACCESS CHIPS FOR DEMO */}
          <div className="border-t border-white/10 pt-4 space-y-2">
            <span className="text-[10px] font-label-caps uppercase text-zinc-400 tracking-wider block">
              Acceso Rápido a Obras en Supervisión:
            </span>
            <div className="flex flex-wrap gap-2">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectQuickProject(p)}
                  className="px-2.5 py-1.5 bg-[#1f1f28] hover:bg-[#282834] text-[#c2a275] border border-[#c2a275]/25 rounded-xs text-[11px] font-serif transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>{p.propertyName}</span>
                  <span className="text-[9px] font-mono text-teal-uno">({p.globalProgress}%)</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BADGE */}
        <div className="px-6 py-3 bg-black/40 border-t border-[#c2a275]/15 text-center text-[10px] text-zinc-500 font-label-caps uppercase tracking-wider flex items-center justify-between">
          <span>UNO Arquitectos Security Layer v2.2</span>
          <span>Encriptación SSL 256-bit</span>
        </div>
      </motion.div>
    </div>
  );
}

