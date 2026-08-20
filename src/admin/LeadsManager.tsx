import { useState, useEffect } from "react";
import { Users, Phone, Mail, Clock, RefreshCw, MessageSquare, Download } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
  source: string;
  createdAt: string;
}

export default function LeadsManager() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const downloadCSV = () => {
    if (leads.length === 0) return;

    const headers = ["ID", "Nombre", "WhatsApp", "Email", "Origen", "Fecha", "Mensaje"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.source}"`,
      `"${new Date(l.createdAt).toLocaleString()}"`,
      `"${(l.message || "").replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `uno_arquitectos_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white border border-gris-piedra p-6 rounded-xs text-left font-sans space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gris-piedra pb-4">
        <div>
          <h3 className="font-label-caps text-xs uppercase tracking-widest text-teal-uno font-semibold flex items-center gap-2">
            <Users className="w-4 h-4" /> Prospectos & Contactos Registrados ({leads.length})
          </h3>
          <p className="font-body-md text-xs text-zinc-500 mt-1">
            Contactos recopilados automáticamente por el Asesor de Inteligencia Artificial y el formulario web.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={fetchLeads}
            disabled={loading}
            className="p-2 border border-gris-piedra rounded-xs text-gris-texto hover:text-teal-uno hover:border-teal-uno transition-colors cursor-pointer text-xs flex items-center gap-1.5 font-label-caps uppercase"
            title="Actualizar lista"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> Actualizar
          </button>

          <button
            onClick={downloadCSV}
            disabled={leads.length === 0}
            className="px-3 py-2 bg-teal-uno hover:opacity-90 text-white rounded-xs font-label-caps text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-xs disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" /> Exportar CSV
          </button>
        </div>
      </div>

      {loading ? (
        <div className="py-12 text-center font-label-caps text-xs uppercase text-zinc-400">
          Cargando prospectos...
        </div>
      ) : leads.length === 0 ? (
        <div className="py-12 text-center text-zinc-400 font-body-md text-xs space-y-2">
          <MessageSquare className="w-8 h-8 text-zinc-300 mx-auto" />
          <p>Aún no hay prospectos registrados.</p>
          <p className="text-[11px] text-zinc-400">Los nuevos usuarios que interactúen con el Asesor de IA aparecerán aquí.</p>
        </div>
      ) : (
        <div className="divide-y divide-gris-piedra/60 overflow-hidden rounded-xs border border-gris-piedra">
          {leads.map((lead) => (
            <div key={lead.id} className="p-4 hover:bg-gris-piedra/10 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-xs font-bold text-teal-uno uppercase tracking-wide">
                    {lead.name}
                  </span>
                  <span className="text-[10px] font-label-caps uppercase px-2 py-0.5 bg-teal-uno/10 text-teal-uno rounded-full">
                    {lead.source}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-body-md text-gris-texto">
                  {lead.phone && (
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^\d]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#046A38] hover:underline font-medium"
                    >
                      <Phone className="w-3 h-3" /> {lead.phone}
                    </a>
                  )}

                  {lead.email && (
                    <a
                      href={`mailto:${lead.email}`}
                      className="inline-flex items-center gap-1.5 text-teal-uno hover:underline"
                    >
                      <Mail className="w-3 h-3" /> {lead.email}
                    </a>
                  )}

                  <span className="text-zinc-400 text-[11px] inline-flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {new Date(lead.createdAt).toLocaleString()}
                  </span>
                </div>

                {lead.message && (
                  <p className="text-xs text-zinc-600 italic bg-gris-piedra/20 p-2 rounded-xs mt-1">
                    "{lead.message}"
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {lead.phone && (
                  <a
                    href={`https://wa.me/${lead.phone.replace(/[^\d]/g, "")}?text=Hola%20${encodeURIComponent(lead.name)},%20te%20escribimos%20de%20UNO%20Arquitectos%20en%20relaci%C3%B3n%20a%20tu%20consulta.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#046A38] text-white rounded-xs text-xs font-label-caps uppercase tracking-wider font-semibold hover:opacity-90 transition-opacity flex items-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3" /> WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
