import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { 
  Building2, 
  Plus, 
  Trash2, 
  Check, 
  Compass, 
  Hammer, 
  Camera, 
  SplitSquareVertical
} from "lucide-react";
import { ClientProject, Tour360Folder } from "../types/clientPortal";
import { defaultClientProjects } from "../data/defaultClientProjects";

export default function ClientPortalManager() {
  const [projects, setProjects] = useState<ClientProject[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("uno_client_projects_v4");
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

  const handleSaveToLocalStorage = () => {
    localStorage.setItem("uno_client_projects_v4", JSON.stringify(projects));
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleResetToDefault = () => {
    if (window.confirm("¿Seguro que deseas restablecer todos los datos a la versión de fábrica?")) {
      setProjects(defaultClientProjects);
      localStorage.removeItem("uno_client_projects_v4");
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 3000);
    }
  };

  const updateActiveProject = (updater: (prev: ClientProject) => ClientProject) => {
    setProjects((prevList) =>
      prevList.map((p) => (p.id === activeProject.id ? updater(p) : p))
    );
  };

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto font-sans">
      {/* HEADER ACTIONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-arena-calida/30 shadow-ethereal texture-overlay">
        <div>
          <h2 className="font-headline-md text-2xl font-bold text-teal-uno tracking-tight">
            Gestión de Portal de Clientes
          </h2>
          <p className="text-sm text-gris-texto mt-1">
            Administra proyectos, códigos de acceso, recorridos 360°, avances fotográficos y bitácoras de obra.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleResetToDefault}
            className="px-4 py-2.5 rounded-full border border-arena-calida/40 text-xs font-label-caps uppercase tracking-wider text-gris-texto hover:bg-surface-container-low transition cursor-pointer"
          >
            Restablecer Valores
          </button>
          <button
            onClick={handleSaveToLocalStorage}
            className="px-6 py-2.5 rounded-full bg-teal-uno hover:bg-teal-uno/90 text-white text-xs font-label-caps uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition flex items-center gap-2 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Guardar Cambios</span>
          </button>
        </div>
      </div>

      {/* TOAST */}
      <AnimatePresence>
        {saveToast && (
          <div className="bg-teal-uno text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 text-sm font-medium animate-fadeIn">
            <Check className="w-5 h-5 text-terracota-uno" />
            <span>¡Los cambios han sido guardados exitosamente en la base de datos local!</span>
          </div>
        )}
      </AnimatePresence>

      {/* PROJECT SELECTOR & TABS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* SIDEBAR: PROJECTS LIST */}
        <div className="bg-white/80 backdrop-blur-md p-5 rounded-3xl border border-arena-calida/30 shadow-ethereal space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-label-caps uppercase tracking-widest text-arena-calida font-bold">
              Proyectos Activos
            </span>
            <span className="text-xs bg-surface-container-low px-2.5 py-1 rounded-full text-teal-uno font-bold">
              {projects.length}
            </span>
          </div>

          <div className="space-y-2">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition flex items-center justify-between cursor-pointer ${
                  proj.id === activeProject.id
                    ? "bg-teal-uno text-white border-teal-uno shadow-sm"
                    : "bg-surface-container-lowest text-gris-texto border-arena-calida/20 hover:border-teal-uno/40 hover:bg-surface-container-low"
                }`}
              >
                <div>
                  <h4 className="font-bold text-sm leading-snug">{proj.propertyName}</h4>
                  <p className={`text-xs mt-0.5 ${proj.id === activeProject.id ? "text-white/80" : "text-gris-texto/70"}`}>
                    Clave: <span className="font-mono">{proj.accessCode}</span> • {proj.globalProgress}%
                  </p>
                </div>
                <Building2 className={`w-4 h-4 ${proj.id === activeProject.id ? "text-terracota-uno" : "text-arena-calida"}`} />
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              const newId = "obra-" + Date.now();
              const newProj: ClientProject = {
                ...defaultClientProjects[0],
                id: newId,
                propertyName: "Nueva Residencia de Ejemplo",
                accessCode: "uno" + Math.floor(100 + Math.random() * 900),
                clientName: "Familia Propietaria",
                globalProgress: 10,
              };
              setProjects([...projects, newProj]);
              setSelectedProjectId(newId);
            }}
            className="w-full py-3 border border-dashed border-arena-calida rounded-2xl text-xs font-label-caps uppercase tracking-wider text-teal-uno hover:bg-teal-uno/5 font-bold transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Añadir Nuevo Proyecto</span>
          </button>
        </div>

        {/* MAIN CONFIGURATION PANEL */}
        <div className="lg:col-span-3 space-y-6">
          {/* SUB-TABS */}
          <div className="flex flex-wrap gap-2 bg-white/80 backdrop-blur-md p-2 rounded-2xl border border-arena-calida/30 shadow-xs">
            {[
              { id: "general", label: "Datos Generales", icon: Building2 },
              { id: "tours", label: "Tours 360°", icon: Compass },
              { id: "phases", label: "Fases de Obra", icon: Hammer },
              { id: "photos", label: "Galería HD", icon: Camera },
              { id: "beforeAfter", label: "Antes y Después", icon: SplitSquareVertical },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-label-caps uppercase tracking-wider flex items-center gap-2 transition cursor-pointer ${
                    activeSubTab === tab.id
                      ? "bg-teal-uno text-white font-bold shadow-xs"
                      : "text-gris-texto hover:bg-surface-container-low"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: DATOS GENERALES */}
          {activeSubTab === "general" && (
            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-arena-calida/30 shadow-ethereal space-y-6">
              <h3 className="font-headline-md text-xl font-bold text-teal-uno">
                Información de {activeProject.propertyName}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-caps uppercase tracking-wider text-arena-calida font-bold mb-1">
                    Nombre del Proyecto
                  </label>
                  <input
                    type="text"
                    value={activeProject.propertyName}
                    onChange={(e) => updateActiveProject((p) => ({ ...p, propertyName: e.target.value }))}
                    className="w-full bg-surface-container-lowest border border-arena-calida/30 rounded-xl px-4 py-2.5 text-sm text-gris-texto focus:border-teal-uno outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label-caps uppercase tracking-wider text-arena-calida font-bold mb-1">
                    Código de Acceso (Contraseña de Cliente)
                  </label>
                  <input
                    type="text"
                    value={activeProject.accessCode}
                    onChange={(e) => updateActiveProject((p) => ({ ...p, accessCode: e.target.value }))}
                    className="w-full bg-surface-container-lowest border border-arena-calida/30 rounded-xl px-4 py-2.5 text-sm font-mono text-teal-uno font-bold focus:border-teal-uno outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label-caps uppercase tracking-wider text-arena-calida font-bold mb-1">
                    Nombre del Propietario / Familia
                  </label>
                  <input
                    type="text"
                    value={activeProject.clientName}
                    onChange={(e) => updateActiveProject((p) => ({ ...p, clientName: e.target.value }))}
                    className="w-full bg-surface-container-lowest border border-arena-calida/30 rounded-xl px-4 py-2.5 text-sm text-gris-texto focus:border-teal-uno outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label-caps uppercase tracking-wider text-arena-calida font-bold mb-1">
                    Ubicación del Predio
                  </label>
                  <input
                    type="text"
                    value={activeProject.location}
                    onChange={(e) => updateActiveProject((p) => ({ ...p, location: e.target.value }))}
                    className="w-full bg-surface-container-lowest border border-arena-calida/30 rounded-xl px-4 py-2.5 text-sm text-gris-texto focus:border-teal-uno outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label-caps uppercase tracking-wider text-arena-calida font-bold mb-1">
                    Superficie Construida (m²)
                  </label>
                  <input
                    type="text"
                    value={activeProject.totalArea}
                    onChange={(e) => updateActiveProject((p) => ({ ...p, totalArea: e.target.value }))}
                    className="w-full bg-surface-container-lowest border border-arena-calida/30 rounded-xl px-4 py-2.5 text-sm text-gris-texto focus:border-teal-uno outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-label-caps uppercase tracking-wider text-arena-calida font-bold mb-1">
                    Porcentaje de Avance Global (%)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={activeProject.globalProgress}
                    onChange={(e) => updateActiveProject((p) => ({ ...p, globalProgress: Number(e.target.value) }))}
                    className="w-full bg-surface-container-lowest border border-arena-calida/30 rounded-xl px-4 py-2.5 text-sm text-teal-uno font-bold focus:border-teal-uno outline-hidden"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TOURS 360 */}
          {activeSubTab === "tours" && (
            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-arena-calida/30 shadow-ethereal space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-teal-uno">
                    Recorridos 360° & Nubes Esféricas
                  </h3>
                  <p className="text-xs text-gris-texto mt-1">
                    {activeProject.cloudpanoTours.length} bitácoras inmersivas configuradas.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const newTour: Tour360Folder = {
                      id: "tour-" + Date.now(),
                      title: "Nuevo Reporte Inmersivo 360°",
                      date: "Septiembre 2026",
                      phaseName: "Supervisión",
                      progress: activeProject.globalProgress,
                      embedCode: "",
                      folderUrl: "https://drive.google.com",
                      notes: "Levantamiento esférico de obra.",
                    };
                    updateActiveProject((p) => ({ ...p, cloudpanoTours: [newTour, ...p.cloudpanoTours] }));
                  }}
                  className="px-4 py-2 rounded-full bg-teal-uno text-white text-xs font-label-caps uppercase tracking-wider font-bold hover:bg-teal-uno/90 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir Fecha</span>
                </button>
              </div>

              <div className="space-y-4">
                {activeProject.cloudpanoTours.map((tour: Tour360Folder, idx: number) => (
                  <div key={tour.id} className="p-4 rounded-2xl border border-arena-calida/30 bg-surface-container-lowest space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-teal-uno uppercase tracking-wide">
                        Reporte #{idx + 1} — {tour.title}
                      </span>
                      <button
                        onClick={() => {
                          updateActiveProject((p) => ({
                            ...p,
                            cloudpanoTours: p.cloudpanoTours.filter((t: Tour360Folder) => t.id !== tour.id),
                          }));
                        }}
                        className="text-terracota-uno hover:opacity-80 p-1 cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="text-[10px] uppercase font-bold text-arena-calida block mb-1">Título</label>
                        <input
                          type="text"
                          value={tour.title}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateActiveProject((p) => ({
                              ...p,
                              cloudpanoTours: p.cloudpanoTours.map((t: Tour360Folder) => (t.id === tour.id ? { ...t, title: val } : t)),
                            }));
                          }}
                          className="w-full text-xs p-2 rounded-lg border border-arena-calida/20 bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-bold text-arena-calida block mb-1">Fecha</label>
                        <input
                          type="text"
                          value={tour.date}
                          onChange={(e) => {
                            const val = e.target.value;
                            updateActiveProject((p) => ({
                              ...p,
                              cloudpanoTours: p.cloudpanoTours.map((t: Tour360Folder) => (t.id === tour.id ? { ...t, date: val } : t)),
                            }));
                          }}
                          className="w-full text-xs p-2 rounded-lg border border-arena-calida/20 bg-white"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-bold text-arena-calida block mb-1">Avance (%)</label>
                        <input
                          type="number"
                          value={tour.progress}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            updateActiveProject((p) => ({
                              ...p,
                              cloudpanoTours: p.cloudpanoTours.map((t: Tour360Folder) => (t.id === tour.id ? { ...t, progress: val } : t)),
                            }));
                          }}
                          className="w-full text-xs p-2 rounded-lg border border-arena-calida/20 bg-white font-bold text-teal-uno"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PHASES */}
          {activeSubTab === "phases" && (
            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-arena-calida/30 shadow-ethereal space-y-6">
              <h3 className="font-headline-md text-xl font-bold text-teal-uno">
                Fases Constructivas ({activeProject.phases.length})
              </h3>
              <div className="space-y-3">
                {activeProject.phases.map((ph) => (
                  <div key={ph.id} className="p-4 rounded-2xl border border-arena-calida/20 bg-surface-container-lowest flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-bold text-teal-uno">{ph.order}. {ph.title}</h4>
                      <p className="text-xs text-gris-texto">{ph.targetDates} • {ph.inspectedBy}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-white border border-arena-calida/30 text-teal-uno">
                        {ph.progress}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PHOTOS */}
          {activeSubTab === "photos" && (
            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-arena-calida/30 shadow-ethereal space-y-6">
              <h3 className="font-headline-md text-xl font-bold text-teal-uno">
                Galería HD ({activeProject.photoReports.length} Fotografías)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeProject.photoReports.map((pr) => (
                  <div key={pr.id} className="p-3 rounded-xl border border-arena-calida/20 bg-surface-container-lowest space-y-2">
                    <img src={pr.imageUrl} alt={pr.title} className="w-full h-28 object-cover rounded-lg" />
                    <h5 className="text-xs font-bold text-teal-uno truncate">{pr.title}</h5>
                    <p className="text-[11px] text-gris-texto truncate">{pr.location} • {pr.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: BEFORE AFTER */}
          {activeSubTab === "beforeAfter" && (
            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-arena-calida/30 shadow-ethereal space-y-6">
              <h3 className="font-headline-md text-xl font-bold text-teal-uno">
                Comparativas Antes / Después ({activeProject.beforeAfterComparisons.length})
              </h3>
              <div className="space-y-4">
                {activeProject.beforeAfterComparisons.map((ba) => (
                  <div key={ba.id} className="p-4 rounded-2xl border border-arena-calida/20 bg-surface-container-lowest space-y-2">
                    <h4 className="text-sm font-bold text-teal-uno">{ba.title} — {ba.zone}</h4>
                    <p className="text-xs text-gris-texto">{ba.description}</p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <img src={ba.beforeImage} alt="Antes" className="w-full h-24 object-cover rounded-lg" />
                      <img src={ba.afterImage} alt="Después" className="w-full h-24 object-cover rounded-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
