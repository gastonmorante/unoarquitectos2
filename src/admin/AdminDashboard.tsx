import { useState } from "react";
import { motion } from "motion/react";
import { LogOut, Save, Eye, Layers, FileText, Cloud, RotateCcw, Check, Sparkles } from "lucide-react";
import { useSiteContent } from "../context/ContentContext";
import Logo from "../components/Logo";
import GalleryManager from "./GalleryManager";
import ContentManager from "./ContentManager";
import CloudStorageGuide from "./CloudStorageGuide";

interface AdminDashboardProps {
  onClose: () => void;
}

export default function AdminDashboard({ onClose }: AdminDashboardProps) {
  const { isSaving, saveChanges, logout, resetToDefaults } = useSiteContent();
  const [activeTab, setActiveTab] = useState<"gallery" | "content" | "cloud">("gallery");
  const [saveMessage, setSaveMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

  const handleSave = async () => {
    const res = await saveChanges();
    if (res.success) {
      setSaveMessage({ text: "¡Contenido sincronizado y guardado con éxito!", type: "success" });
    } else {
      setSaveMessage({ text: res.error || "Guardado en caché local", type: "error" });
    }
    setTimeout(() => setSaveMessage(null), 3000);
  };

  const handleReset = () => {
    if (confirm("¿Está seguro de restaurar todos los textos y proyectos a los valores originales de fábrica?")) {
      resetToDefaults();
      setSaveMessage({ text: "Valores restaurados a predeterminados", type: "success" });
      setTimeout(() => setSaveMessage(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#F6F5F2] text-gris-texto font-sans overflow-y-auto flex flex-col">
      {/* TOP ADMIN NAVBAR */}
      <header className="bg-white border-b border-gris-piedra sticky top-0 z-40 px-4 sm:px-8 py-3.5 shadow-2xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Logo showText={true} iconSize={30} textSize="text-base" />
          <div className="hidden sm:block h-6 w-px bg-gris-piedra" />
          <span className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold hidden sm:inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Panel Administrativo
          </span>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-2.5">
          {saveMessage && (
            <span className={`text-xs font-label-caps uppercase px-3 py-1.5 rounded-xs flex items-center gap-1.5 ${
              saveMessage.type === "success" ? "bg-teal-uno/10 text-teal-uno font-semibold" : "bg-amber-100 text-amber-800"
            }`}>
              <Check className="w-3.5 h-3.5" /> {saveMessage.text}
            </span>
          )}

          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`px-4 py-2 bg-teal-uno hover:opacity-90 text-white rounded-xs font-label-caps text-xs uppercase tracking-wider font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs ${
              isSaving ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Guardando..." : "Guardar Cambios"}
          </button>

          <button
            onClick={onClose}
            className="px-3.5 py-2 bg-gris-piedra/20 hover:bg-gris-piedra/40 text-gris-texto rounded-xs font-label-caps text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            title="Ver sitio web público"
          >
            <Eye className="w-4 h-4" /> Ver Web
          </button>

          <button
            onClick={logout}
            className="p-2 border border-gris-piedra rounded-xs hover:text-red-600 hover:border-red-200 transition-colors cursor-pointer"
            title="Cerrar sesión"
            aria-label="Cerrar sesión"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-8 py-8 flex-1 space-y-6">
        {/* TAB NAVIGATION */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gris-piedra pb-2">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-5 py-2.5 font-label-caps text-xs uppercase tracking-wider font-semibold rounded-t-xs transition-all flex items-center gap-2 border-b-2 cursor-pointer ${
                activeTab === "gallery"
                  ? "border-teal-uno text-teal-uno bg-white font-bold shadow-xs"
                  : "border-transparent text-zinc-500 hover:text-teal-uno"
              }`}
            >
              <Layers className="w-4 h-4" /> Galería & Proyectos
            </button>

            <button
              onClick={() => setActiveTab("content")}
              className={`px-5 py-2.5 font-label-caps text-xs uppercase tracking-wider font-semibold rounded-t-xs transition-all flex items-center gap-2 border-b-2 cursor-pointer ${
                activeTab === "content"
                  ? "border-teal-uno text-teal-uno bg-white font-bold shadow-xs"
                  : "border-transparent text-zinc-500 hover:text-teal-uno"
              }`}
            >
              <FileText className="w-4 h-4" /> Textos & Secciones
            </button>

            <button
              onClick={() => setActiveTab("cloud")}
              className={`px-5 py-2.5 font-label-caps text-xs uppercase tracking-wider font-semibold rounded-t-xs transition-all flex items-center gap-2 border-b-2 cursor-pointer ${
                activeTab === "cloud"
                  ? "border-teal-uno text-teal-uno bg-white font-bold shadow-xs"
                  : "border-transparent text-zinc-500 hover:text-teal-uno"
              }`}
            >
              <Cloud className="w-4 h-4" /> Almacenamiento Cloud
            </button>
          </div>

          <button
            onClick={handleReset}
            className="text-[11px] font-label-caps uppercase text-zinc-400 hover:text-amber-700 flex items-center gap-1.5 cursor-pointer py-1"
            title="Restaurar a valores predeterminados"
          >
            <RotateCcw className="w-3 h-3" /> Restaurar Originales
          </button>
        </div>

        {/* TAB PANELS */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "gallery" && <GalleryManager />}
          {activeTab === "content" && <ContentManager />}
          {activeTab === "cloud" && <CloudStorageGuide />}
        </motion.div>
      </main>

      {/* FOOTER BAR */}
      <footer className="bg-white border-t border-gris-piedra px-8 py-3 text-center text-[11px] text-zinc-400 font-label-caps uppercase tracking-wider flex items-center justify-between">
        <span>UNO Arquitectos CMS v2.2</span>
        <span>Sincronización en tiempo real activa</span>
      </footer>
    </div>
  );
}
