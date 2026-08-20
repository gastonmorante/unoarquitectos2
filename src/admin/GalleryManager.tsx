import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Trash2, ArrowUp, ArrowDown, Upload, Image as ImageIcon, Check, GripVertical, Sparkles } from "lucide-react";
import { useSiteContent } from "../context/ContentContext";
import { GalleryImage } from "../types/content";

export default function GalleryManager() {
  const { content, updateCategory, updateGallery, addGalleryImage, removeGalleryImage, uploadImage } = useSiteContent();

  const [selectedCatId, setSelectedCatId] = useState<string>(content.categories[0]?.id || "residenciales");
  const [isUploading, setIsUploading] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageTitle, setNewImageTitle] = useState("");
  const [newImageDesc, setNewImageDesc] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [saveToast, setSaveToast] = useState(false);

  // Drag and drop state
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null);

  const selectedCategory = content.categories.find((c) => c.id === selectedCatId) || content.categories[0];
  const gallery = selectedCategory?.gallery || [];

  const triggerToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const url = await uploadImage(file);
      setNewImageUrl(url);
      if (!newImageTitle) {
        setNewImageTitle(file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));
      }
    } catch (err) {
      alert("Error al procesar la imagen: " + (err as Error).message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl.trim() || !newImageTitle.trim()) return;

    const newImage: GalleryImage = {
      id: `img-${Date.now()}`,
      url: newImageUrl.trim(),
      title: newImageTitle.trim(),
      desc: newImageDesc.trim()
    };

    addGalleryImage(selectedCatId, newImage);
    setNewImageUrl("");
    setNewImageTitle("");
    setNewImageDesc("");
    setShowAddForm(false);
    triggerToast();
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= gallery.length) return;

    const updated = [...gallery];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, moved);

    updateGallery(selectedCatId, updated);
    triggerToast();
  };

  // Drag & drop handlers
  const handleDragStart = (idx: number) => {
    setDraggedIdx(idx);
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;

    const updated = [...gallery];
    const [draggedItem] = updated.splice(draggedIdx, 1);
    updated.splice(idx, 0, draggedItem);

    setDraggedIdx(idx);
    updateGallery(selectedCatId, updated);
  };

  const handleDragEnd = () => {
    setDraggedIdx(null);
    triggerToast();
  };

  const handleUpdateImageInfo = (index: number, field: "title" | "desc", value: string) => {
    const updated = gallery.map((item, idx) => (idx === index ? { ...item, [field]: value } : item));
    updateGallery(selectedCatId, updated);
  };

  return (
    <div className="space-y-8 text-left font-sans">
      {/* Toast Notification */}
      <AnimatePresence>
        {saveToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 right-6 z-50 bg-teal-uno text-white px-4 py-2.5 rounded-xs shadow-lg text-xs font-label-caps uppercase tracking-wider flex items-center gap-2"
          >
            <Check className="w-4 h-4" /> Cambios Sincronizados
          </motion.div>
        )}
      </AnimatePresence>

      {/* CATEGORY SELECTOR TABS */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
            Tipología / Colección a Gestionar
          </label>
          <span className="font-body-md text-xs text-zinc-400">
            {gallery.length} fotografías en esta galería
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {content.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCatId(cat.id);
                setShowAddForm(false);
              }}
              className={`p-3.5 rounded-xs border text-left transition-all cursor-pointer ${
                selectedCatId === cat.id
                  ? "bg-teal-uno text-white border-teal-uno shadow-md font-semibold"
                  : "bg-white border-gris-piedra text-gris-texto hover:border-teal-uno hover:bg-gris-piedra/10"
              }`}
            >
              <span className="font-label-caps text-xs block uppercase tracking-wider">
                {cat.title}
              </span>
              <span className={`text-[10px] block font-body-md mt-0.5 truncate ${
                selectedCatId === cat.id ? "text-white/80" : "text-zinc-400"
              }`}>
                {cat.badge || cat.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY METADATA QUICK EDIT */}
      {selectedCategory && (
        <div className="bg-gris-piedra/15 border border-gris-piedra p-4 sm:p-6 rounded-xs space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-label-caps text-xs uppercase tracking-wider text-teal-uno font-semibold flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Metadatos de la Tipología ({selectedCategory.title})
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-body-md text-xs">
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Badge / Proyecto Insignia</label>
              <input
                type="text"
                value={selectedCategory.badge || ""}
                onChange={(e) => updateCategory(selectedCatId, { badge: e.target.value })}
                className="w-full bg-white border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Subtítulo</label>
              <input
                type="text"
                value={selectedCategory.subtitle}
                onChange={(e) => updateCategory(selectedCatId, { subtitle: e.target.value })}
                className="w-full bg-white border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Área Construida</label>
              <input
                type="text"
                value={selectedCategory.area}
                onChange={(e) => updateCategory(selectedCatId, { area: e.target.value })}
                className="w-full bg-white border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">Descripción de la Obra</label>
            <textarea
              rows={2}
              value={selectedCategory.descEs}
              onChange={(e) => updateCategory(selectedCatId, { descEs: e.target.value })}
              className="w-full bg-white border border-gris-piedra p-2.5 rounded-xs text-xs focus:border-teal-uno focus:outline-none leading-relaxed"
            />
          </div>
        </div>
      )}

      {/* GALLERY PHOTO LIST & DRAG-AND-DROP REORDER */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold">
            Fotografías de la Galería ({gallery.length})
          </h3>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3.5 py-2 bg-teal-uno hover:opacity-90 text-white rounded-xs font-label-caps text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" /> Añadir Fotografía
          </button>
        </div>

        {/* ADD PHOTO FORM */}
        <AnimatePresence>
          {showAddForm && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleAddImage}
              className="bg-white border-2 border-dashed border-teal-uno/40 p-5 rounded-xs space-y-4 overflow-hidden"
            >
              <h4 className="font-label-caps text-xs uppercase text-teal-uno font-semibold">
                Nueva Fotografía para {selectedCategory.title}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* File Drop / Upload */}
                <div className="flex flex-col justify-center items-center border border-gris-piedra bg-gris-piedra/10 p-4 rounded-xs text-center">
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="cursor-pointer flex flex-col items-center gap-2 text-teal-uno hover:text-arena-calida transition-colors"
                  >
                    <Upload className="w-6 h-6" />
                    <span className="font-label-caps text-xs font-semibold uppercase tracking-wider">
                      {isUploading ? "Procesando Imagen..." : "Seleccionar Imagen del Ordenador"}
                    </span>
                  </label>
                  <p className="text-[10px] text-zinc-400 mt-1 font-body-md">
                    Formatos JPG, PNG, WebP recomendados
                  </p>
                </div>

                {/* Or URL input */}
                <div className="space-y-3 font-body-md text-xs">
                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">
                      O pegar URL directa de la imagen
                    </label>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/... o /projects/..."
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      required
                      className="w-full bg-white border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">
                      Título de la Fotografía *
                    </label>
                    <input
                      type="text"
                      placeholder="ej. Master Suite con vista a la selva"
                      value={newImageTitle}
                      onChange={(e) => setNewImageTitle(e.target.value)}
                      required
                      className="w-full bg-white border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-label-caps text-zinc-500 mb-1">
                  Descripción Arquitectónica / Materiales
                </label>
                <input
                  type="text"
                  placeholder="ej. Muros en Chukum natural pulido, vigas en Tzalam y cancelería marina..."
                  value={newImageDesc}
                  onChange={(e) => setNewImageDesc(e.target.value)}
                  className="w-full bg-white border border-gris-piedra px-3 py-2 rounded-xs focus:border-teal-uno focus:outline-none text-xs"
                />
              </div>

              {newImageUrl && (
                <div className="flex items-center gap-3 p-2 bg-gris-piedra/10 rounded-xs">
                  <img
                    src={newImageUrl}
                    alt="Preview"
                    className="w-16 h-12 object-cover rounded-xs border border-gris-piedra"
                  />
                  <span className="text-xs text-teal-uno font-label-caps uppercase">Vista previa cargada correctamente</span>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 bg-gris-piedra/30 text-gris-texto rounded-xs font-label-caps text-xs uppercase tracking-wider cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={!newImageUrl || !newImageTitle}
                  className={`px-5 py-2 bg-teal-uno text-white rounded-xs font-label-caps text-xs uppercase tracking-wider font-semibold cursor-pointer ${
                    !newImageUrl || !newImageTitle ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Guardar en Galería
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* IMAGE DRAG-AND-DROP ITEMS */}
        <div className="space-y-3">
          {gallery.length === 0 ? (
            <div className="p-8 border border-dashed border-gris-piedra rounded-xs text-center text-zinc-400 font-body-md text-xs">
              <ImageIcon className="w-8 h-8 mx-auto mb-2 opacity-50" />
              Esta categoría aún no tiene fotografías. Haz clic en "Añadir Fotografía" arriba para comenzar.
            </div>
          ) : (
            gallery.map((img, idx) => (
              <motion.div
                key={img.id || `${img.url}-${idx}`}
                draggable
                onDragStart={() => handleDragStart(idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDragEnd={handleDragEnd}
                className={`bg-white border rounded-xs p-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all shadow-2xs ${
                  draggedIdx === idx ? "border-teal-uno bg-teal-uno/5 opacity-70" : "border-gris-piedra hover:border-zinc-300"
                }`}
              >
                {/* Drag Handle & Index */}
                <div className="flex items-center gap-2 text-zinc-400 cursor-grab active:cursor-grabbing">
                  <GripVertical className="w-4 h-4 hover:text-teal-uno" />
                  <span className="font-label-caps text-xs font-bold w-5 text-center text-teal-uno">
                    #{idx + 1}
                  </span>
                </div>

                {/* Thumbnail */}
                <div className="w-20 h-16 sm:w-24 sm:h-18 flex-shrink-0 bg-gris-piedra/20 rounded-xs overflow-hidden border border-gris-piedra">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>

                {/* Edit in place */}
                <div className="flex-1 space-y-1.5 w-full">
                  <input
                    type="text"
                    value={img.title}
                    onChange={(e) => handleUpdateImageInfo(idx, "title", e.target.value)}
                    placeholder="Título de la foto"
                    className="w-full font-label-caps text-xs font-semibold text-gris-texto bg-transparent border-b border-transparent hover:border-gris-piedra focus:border-teal-uno focus:outline-none py-0.5"
                  />
                  <input
                    type="text"
                    value={img.desc}
                    onChange={(e) => handleUpdateImageInfo(idx, "desc", e.target.value)}
                    placeholder="Descripción arquitectónica o materiales"
                    className="w-full font-body-md text-xs text-zinc-500 bg-transparent border-b border-transparent hover:border-gris-piedra focus:border-teal-uno focus:outline-none py-0.5"
                  />
                </div>

                {/* Controls (Move Up, Move Down, Delete) */}
                <div className="flex items-center gap-1 sm:self-center ml-auto">
                  <button
                    onClick={() => handleMove(idx, "up")}
                    disabled={idx === 0}
                    className={`p-1.5 border border-gris-piedra rounded-xs hover:bg-gris-piedra/20 hover:text-teal-uno transition-colors cursor-pointer ${
                      idx === 0 ? "opacity-30 cursor-not-allowed" : ""
                    }`}
                    title="Mover arriba"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleMove(idx, "down")}
                    disabled={idx === gallery.length - 1}
                    className={`p-1.5 border border-gris-piedra rounded-xs hover:bg-gris-piedra/20 hover:text-teal-uno transition-colors cursor-pointer ${
                      idx === gallery.length - 1 ? "opacity-30 cursor-not-allowed" : ""
                    }`}
                    title="Mover abajo"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm(`¿Eliminar la imagen "${img.title}"?`)) {
                        removeGalleryImage(selectedCatId, idx);
                        triggerToast();
                      }
                    }}
                    className="p-1.5 border border-red-200 text-red-600 rounded-xs hover:bg-red-50 transition-colors cursor-pointer ml-2"
                    title="Eliminar foto"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
