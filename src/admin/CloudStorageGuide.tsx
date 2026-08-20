import { useState } from "react";
import { Cloud, ExternalLink, Key, ShieldAlert } from "lucide-react";

export default function CloudStorageGuide() {
  const [selectedProvider, setSelectedProvider] = useState<"cloudinary" | "supabase">("cloudinary");
  const [copied, setCopied] = useState(false);

  const copyEnvSnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-gris-piedra p-6 rounded-xs text-left font-sans space-y-6">
      <div className="flex items-center justify-between border-b border-gris-piedra pb-4">
        <div>
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold flex items-center gap-2">
            <Cloud className="w-4 h-4" /> Integración de Almacenamiento en la Nube (Opcional)
          </h3>
          <p className="font-body-md text-xs text-zinc-500 mt-1">
            Por defecto, el sistema guarda imágenes localmente en <code className="bg-gris-piedra/20 px-1 py-0.5 rounded-xs">/public/uploads</code>. Si deseas alojar fotos en un CDN externo de alta velocidad, sigue estos pasos.
          </p>
        </div>
      </div>

      {/* Provider Selector */}
      <div className="flex gap-3">
        <button
          onClick={() => setSelectedProvider("cloudinary")}
          className={`px-4 py-2.5 rounded-xs border text-xs font-label-caps uppercase tracking-wider font-semibold cursor-pointer transition-all ${
            selectedProvider === "cloudinary"
              ? "bg-teal-uno text-white border-teal-uno shadow-sm"
              : "bg-white border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          Cloudinary (Recomendado para Imágenes)
        </button>

        <button
          onClick={() => setSelectedProvider("supabase")}
          className={`px-4 py-2.5 rounded-xs border text-xs font-label-caps uppercase tracking-wider font-semibold cursor-pointer transition-all ${
            selectedProvider === "supabase"
              ? "bg-teal-uno text-white border-teal-uno shadow-sm"
              : "bg-white border-gris-piedra text-gris-texto hover:bg-gris-piedra/10"
          }`}
        >
          Supabase Storage
        </button>
      </div>

      {/* CLOUDINARY INSTRUCTIONS */}
      {selectedProvider === "cloudinary" && (
        <div className="space-y-4 font-body-md text-xs leading-relaxed text-gris-texto">
          <div className="p-4 bg-teal-uno/5 border border-teal-uno/20 rounded-xs space-y-2">
            <h4 className="font-label-caps text-xs uppercase font-semibold text-teal-uno">
              Paso 1: Obtener Llaves de API de Cloudinary
            </h4>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Crea una cuenta gratuita en <a href="https://cloudinary.com/users/register_free" target="_blank" rel="noopener noreferrer" className="text-teal-uno font-semibold underline inline-flex items-center gap-1">Cloudinary.com <ExternalLink className="w-3 h-3" /></a>.</li>
              <li>En el <strong>Dashboard</strong> principal, copia tu <em>Cloud Name</em>, <em>API Key</em> y <em>API Secret</em>.</li>
            </ol>
          </div>

          <div className="p-4 bg-gris-piedra/15 border border-gris-piedra rounded-xs space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-label-caps text-xs uppercase font-semibold text-gris-texto flex items-center gap-2">
                <Key className="w-3.5 h-3.5 text-teal-uno" /> Paso 2: Agregar Variables al Archivo .env
              </h4>
              <button
                onClick={() => copyEnvSnippet("CLOUDINARY_CLOUD_NAME=tu_cloud_name\nCLOUDINARY_API_KEY=tu_api_key\nCLOUDINARY_API_SECRET=tu_api_secret")}
                className="text-[10px] font-label-caps uppercase px-2.5 py-1 bg-white border border-gris-piedra rounded-xs hover:border-teal-uno text-teal-uno font-semibold cursor-pointer"
              >
                {copied ? "Copiado ✓" : "Copiar Variables"}
              </button>
            </div>

            <pre className="bg-zinc-900 text-zinc-100 p-3 rounded-xs text-[11px] overflow-x-auto font-mono">
{`CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret`}
            </pre>
          </div>
        </div>
      )}

      {/* SUPABASE INSTRUCTIONS */}
      {selectedProvider === "supabase" && (
        <div className="space-y-4 font-body-md text-xs leading-relaxed text-gris-texto">
          <div className="p-4 bg-teal-uno/5 border border-teal-uno/20 rounded-xs space-y-2">
            <h4 className="font-label-caps text-xs uppercase font-semibold text-teal-uno">
              Paso 1: Configurar Bucket en Supabase
            </h4>
            <ol className="list-decimal pl-5 space-y-1.5">
              <li>Crea un proyecto en <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-teal-uno font-semibold underline inline-flex items-center gap-1">Supabase.com <ExternalLink className="w-3 h-3" /></a>.</li>
              <li>Ve a la sección <strong>Storage</strong> y crea un nuevo Bucket público llamado <code className="bg-white px-1 py-0.5 rounded-xs font-mono">uno-projects</code> con acceso público.</li>
              <li>En <strong>Project Settings &gt; API</strong>, copia tu <em>Project URL</em> y tu llave <em>anon/public key</em>.</li>
            </ol>
          </div>

          <div className="p-4 bg-gris-piedra/15 border border-gris-piedra rounded-xs space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-label-caps text-xs uppercase font-semibold text-gris-texto flex items-center gap-2">
                <Key className="w-3.5 h-3.5 text-teal-uno" /> Paso 2: Agregar Variables al Archivo .env
              </h4>
              <button
                onClick={() => copyEnvSnippet("SUPABASE_URL=https://tu-proyecto.supabase.co\nSUPABASE_ANON_KEY=tu_anon_key\nSUPABASE_BUCKET=uno-projects")}
                className="text-[10px] font-label-caps uppercase px-2.5 py-1 bg-white border border-gris-piedra rounded-xs hover:border-teal-uno text-teal-uno font-semibold cursor-pointer"
              >
                {copied ? "Copiado ✓" : "Copiar Variables"}
              </button>
            </div>

            <pre className="bg-zinc-900 text-zinc-100 p-3 rounded-xs text-[11px] overflow-x-auto font-mono">
{`SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_ANON_KEY=tu_anon_key
SUPABASE_BUCKET=uno-projects`}
            </pre>
          </div>
        </div>
      )}

      <div className="p-4 bg-arena-calida/15 border border-arena-calida/30 rounded-xs flex items-start gap-3 text-xs font-body-md text-gris-texto">
        <ShieldAlert className="w-4 h-4 text-arena-calida flex-shrink-0 mt-0.5" />
        <p>
          Las imágenes subidas en modo local se guardan directamente en tu repositorio y se compilan automáticamente para producción con <strong>HostGator</strong> y <strong>GitHub Actions</strong>.
        </p>
      </div>
    </div>
  );
}
