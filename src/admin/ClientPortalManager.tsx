import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Plus, 
  Trash2, 
  Check, 
  Save, 
  Compass, 
  Hammer, 
  Camera, 
  SplitSquareVertical, 
  Code2, 
  ExternalLink,
  FolderOpen,
  Calendar,
  Layers
} from "lucide-react";
import { ClientProject, Tour360Folder, ConstructionPhase, PhotoReport, BeforeAfterItem } from "../types/clientPortal";
import { defaultClientProjects } from "../data/defaultClientProjects";

export default function ClientPortalManager() {
  const [projects, setProjects] = useState<ClientProject[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("uno_client_projects_v2");
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch {}
      }
    }
    return defaultClientProjects;
  });

  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0]?.id || "arrecifes");
  const [activeSubTab, setActiveSubTab] = useState<"general" | "tours" | "phases" | "photos" | "beforeAfter">("general");
  const [saveToast, setSaveToast] = useState(false);

  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  const triggerToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const saveProjects = (updated: ClientProject[]) => {
    setProjects(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("uno_client_projects_v2", JSON.stringify(updated));
    }
    triggerToast();
  };

  const updateCurrentProject = (partial: Partial<ClientProject>) => {
    if (!activeProject) return;
    const updated = projects.map((p) =>
      p.id === activeProject.id ? { ...p, ...partial } : p
    );
    saveProjects(updated);
  };

  // Add a new 360 Tour by Date
  const handleAddTour = () => {
    if (!activeProject) return;
    const newTour: Tour360Folder = {
      id: `tour-${Date.now()}`,
      date: "Octubre 2026",
      title: "Nuevo Levantamiento 360°",
      phaseName: activeProject.currentPhaseName,
      progress: activeProject.globalProgress,
      embedCode: '<iframe src="https://app.cloudpano.com/tours/demo-tour-uno" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>',
      notes: "Levantamiento de supervisión técnica de obra.",
    };

    updateCurrentProject({
      cloudpanoTours: [newTour, ...activeProject.cloudpanoTours],
    });
  };

  const handleRemoveTour = (tourId: string) => {
    if (!activeProject) return;
    updateCurrentProject({
      cloudpanoTours: activeProject.cloudpanoTours.filter((t) => t.id !== tourId),
    });
  };

  return (
    <div className="space-y-6 text-left font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {saveToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 right-6 z-50 bg-teal-uno text-white px-4 py-2.5 rounded-xs shadow-lg text-xs font-label-caps uppercase tracking-wider flex items-center gap-2"
          >
            <Check className="w-4 h-4" /> Proyecto de Cliente Actualizado
          </motion.div>
        )}
      </AnimatePresence>

      {/* PROJECT SELECTOR & TOP CONTROLS */}
      <div className="bg-white border border-gris-piedra p-4 rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-teal-uno" />
          <div>
            <label className="block text-[10px] font-label-caps uppercase text-zinc-500">
              Obra Activa en Edición
            </label>
            <select
              value={selectedProjectId}
              onChange={(e) => setSelectedProjectId(e.target.value)}
              className="font-serif text-sm font-semibold text-zinc-900 bg-transparent border-0 focus:outline-none cursor-pointer"
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.propertyName} ({p.location}) - {p.globalProgress}%
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500 font-label-caps uppercase">
            Clave Acceso: <strong className="text-teal-uno">{activeProject?.accessCode}</strong>
          </span>
        </div>
      </div>

      {/* SUB-TABS */}
      <div className="flex flex-wrap gap-2 border-b border-gris-piedra pb-3">
        <button
          onClick={() => setActiveSubTab("general")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "general"
              ? "bg-teal-uno text-white font-semibold"
              : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <Building2 className="w-3.5 h-3.5" /> Datos Generales & Director
        </button>

        <button
          onClick={() => setActiveSubTab("tours")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "tours"
              ? "bg-teal-uno text-white font-semibold"
              : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <Compass className="w-3.5 h-3.5" /> Tours 360° CloudPano ({activeProject?.cloudpanoTours.length || 0})
        </button>

        <button
          onClick={() => setActiveSubTab("phases")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "phases"
              ? "bg-teal-uno text-white font-semibold"
              : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <Hammer className="w-3.5 h-3.5" /> 8 Fases Constructivas
        </button>

        <button
          onClick={() => setActiveSubTab("photos")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "photos"
              ? "bg-teal-uno text-white font-semibold"
              : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <Camera className="w-3.5 h-3.5" /> Bitácora Fotográfica ({activeProject?.photoReports.length || 0})
        </button>

        <button
          onClick={() => setActiveSubTab("beforeAfter")}
          className={`px-3.5 py-2 rounded-xs font-label-caps text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
            activeSubTab === "beforeAfter"
              ? "bg-teal-uno text-white font-semibold"
              : "bg-white border border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          <SplitSquareVertical className="w-3.5 h-3.5" /> Antes / Después
        </button>
      </div>

      {/* 1. GENERAL TAB */}
      {activeSubTab === "general" && activeProject && (
        <div className="bg-white border border-gris-piedra p-5 sm:p-6 rounded-xs space-y-4">
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
            Ficha Técnica de la Obra
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Nombre de la Propiedad</label>
              <input
                type="text"
                value={activeProject.propertyName}
                onChange={(e) => updateCurrentProject({ propertyName: e.target.value })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Propietario / Cliente</label>
              <input
                type="text"
                value={activeProject.clientName}
                onChange={(e) => updateCurrentProject({ clientName: e.target.value })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Ubicación Geográfica</label>
              <input
                type="text"
                value={activeProject.location}
                onChange={(e) => updateCurrentProject({ location: e.target.value })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Tipología Arquitectónica</label>
              <input
                type="text"
                value={activeProject.typology}
                onChange={(e) => updateCurrentProject({ typology: e.target.value })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Superficie Total (m²)</label>
              <input
                type="text"
                value={activeProject.totalArea}
                onChange={(e) => updateCurrentProject({ totalArea: e.target.value })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Porcentaje Avance Global (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                value={activeProject.globalProgress}
                onChange={(e) => updateCurrentProject({ globalProgress: parseInt(e.target.value) || 0 })}
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none font-bold text-teal-uno"
              />
            </div>
          </div>

          <h4 className="font-label-caps text-xs uppercase tracking-widest text-zinc-600 font-semibold pt-4 border-t border-gris-piedra">
            Contacto del Director de Obra Asignado
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Director Responsable</label>
              <input
                type="text"
                value={activeProject.director.name}
                onChange={(e) =>
                  updateCurrentProject({
                    director: { ...activeProject.director, name: e.target.value },
                  })
                }
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Número de WhatsApp (Sin +)</label>
              <input
                type="text"
                value={activeProject.director.whatsapp}
                onChange={(e) =>
                  updateCurrentProject({
                    director: { ...activeProject.director, whatsapp: e.target.value },
                  })
                }
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Correo Institucional</label>
              <input
                type="email"
                value={activeProject.director.email}
                onChange={(e) =>
                  updateCurrentProject({
                    director: { ...activeProject.director, email: e.target.value },
                  })
                }
                className="w-full bg-gris-piedra/10 border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* 2. TOURS 360 TAB */}
      {activeSubTab === "tours" && activeProject && (
        <div className="bg-white border border-gris-piedra p-5 sm:p-6 rounded-xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
              Carpetas de Recorridos 360° CloudPano por Fecha
            </h3>
            <button
              onClick={handleAddTour}
              className="px-3.5 py-1.5 bg-teal-uno hover:bg-arena-calida text-white rounded-xs text-xs font-label-caps uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" /> Agregar Fecha / Tour
            </button>
          </div>

          <div className="space-y-4">
            {activeProject.cloudpanoTours.map((tour, idx) => (
              <div
                key={tour.id}
                className="p-4 bg-gris-piedra/15 border border-gris-piedra rounded-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-gris-piedra/30 pb-2">
                  <span className="font-label-caps text-xs uppercase font-bold text-teal-uno">
                    #{idx + 1} • {tour.date} ({tour.progress}% Avance)
                  </span>
                  <button
                    onClick={() => handleRemoveTour(tour.id)}
                    className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                    title="Eliminar recorrido"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">
                      Fecha del Levantamiento
                    </label>
                    <input
                      type="text"
                      value={tour.date}
                      onChange={(e) => {
                        const updated = activeProject.cloudpanoTours.map((t) =>
                          t.id === tour.id ? { ...t, date: e.target.value } : t
                        );
                        updateCurrentProject({ cloudpanoTours: updated });
                      }}
                      className="w-full bg-white border border-gris-piedra px-2.5 py-1.5 rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">
                      Título de la Entrega
                    </label>
                    <input
                      type="text"
                      value={tour.title}
                      onChange={(e) => {
                        const updated = activeProject.cloudpanoTours.map((t) =>
                          t.id === tour.id ? { ...t, title: e.target.value } : t
                        );
                        updateCurrentProject({ cloudpanoTours: updated });
                      }}
                      className="w-full bg-white border border-gris-piedra px-2.5 py-1.5 rounded-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">
                      Enlace Carpeta Drive / Cloud
                    </label>
                    <input
                      type="url"
                      value={tour.folderUrl || ""}
                      onChange={(e) => {
                        const updated = activeProject.cloudpanoTours.map((t) =>
                          t.id === tour.id ? { ...t, folderUrl: e.target.value } : t
                        );
                        updateCurrentProject({ cloudpanoTours: updated });
                      }}
                      placeholder="https://drive.google.com/drive/folders/..."
                      className="w-full bg-white border border-gris-piedra px-2.5 py-1.5 rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">
                    Código de Inserción CloudPano (iframe / URL)
                  </label>
                  <textarea
                    rows={2}
                    value={tour.embedCode}
                    onChange={(e) => {
                      const updated = activeProject.cloudpanoTours.map((t) =>
                        t.id === tour.id ? { ...t, embedCode: e.target.value } : t
                      );
                      updateCurrentProject({ cloudpanoTours: updated });
                    }}
                    className="w-full bg-white border border-gris-piedra p-2 rounded-xs font-mono text-[11px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. PHASES TAB */}
      {activeSubTab === "phases" && activeProject && (
        <div className="bg-white border border-gris-piedra p-5 sm:p-6 rounded-xs space-y-4">
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
            Supervisión de las 8 Fases Constructivas
          </h3>

          <div className="space-y-3">
            {activeProject.phases.map((phase) => (
              <div
                key={phase.id}
                className="p-3.5 bg-gris-piedra/15 border border-gris-piedra rounded-xs grid grid-cols-1 sm:grid-cols-12 gap-3 items-center text-xs"
              >
                <div className="sm:col-span-4 space-y-0.5">
                  <span className="font-bold text-zinc-900 block">{phase.title}</span>
                  <span className="text-[10px] text-zinc-500">{phase.targetDates}</span>
                </div>

                <div className="sm:col-span-2">
                  <select
                    value={phase.status}
                    onChange={(e) => {
                      const updated = activeProject.phases.map((p) =>
                        p.id === phase.id
                          ? { ...p, status: e.target.value as any, progress: e.target.value === "completed" ? 100 : p.progress }
                          : p
                      );
                      updateCurrentProject({ phases: updated });
                    }}
                    className="w-full bg-white border border-gris-piedra p-1.5 rounded-xs font-label-caps text-[11px] uppercase font-semibold"
                  >
                    <option value="completed">Completado (100%)</option>
                    <option value="in_progress">En Ejecución</option>
                    <option value="scheduled">Programado</option>
                  </select>
                </div>

                <div className="sm:col-span-2 flex items-center gap-1">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={phase.progress}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 0;
                      const updated = activeProject.phases.map((p) =>
                        p.id === phase.id ? { ...p, progress: val } : p
                      );
                      updateCurrentProject({ phases: updated });
                    }}
                    className="w-16 bg-white border border-gris-piedra p-1.5 rounded-xs font-mono font-bold text-center"
                  />
                  <span className="text-zinc-500">%</span>
                </div>

                <div className="sm:col-span-4">
                  <input
                    type="text"
                    value={phase.supervisionNotes}
                    onChange={(e) => {
                      const updated = activeProject.phases.map((p) =>
                        p.id === phase.id ? { ...p, supervisionNotes: e.target.value } : p
                      );
                      updateCurrentProject({ phases: updated });
                    }}
                    placeholder="Dictamen de supervisión..."
                    className="w-full bg-white border border-gris-piedra p-1.5 rounded-xs text-[11px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

