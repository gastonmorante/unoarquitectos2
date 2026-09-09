import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class PortalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("PortalErrorBoundary caught an unhandled error:", error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.removeItem("uno_client_portal_session");
      localStorage.removeItem("uno_client_projects_v4");
    } catch {}
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  private handleGoHome = () => {
    try {
      localStorage.removeItem("uno_client_portal_session");
      localStorage.removeItem("uno_client_projects_v4");
    } catch {}
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full bg-background text-gris-texto font-sans flex flex-col justify-between p-6 sm:p-12 texture-overlay selection:bg-teal-uno selection:text-white">
          {/* TOP BAR */}
          <header className="flex items-center justify-between border-b border-arena-calida/20 pb-4">
            <Logo showText={true} iconSize={32} theme="adaptive" textSize="text-sm font-semibold tracking-wider" />
            <span className="px-3 py-1 rounded-full bg-arena-calida/15 text-arena-calida text-[10px] font-label-caps uppercase tracking-widest font-semibold border border-arena-calida/30">
              Área de Clientes
            </span>
          </header>

          {/* MAIN ERROR CARD */}
          <main className="flex-1 flex items-center justify-center my-8">
            <div className="bg-white/90 backdrop-blur-xl border border-arena-calida/40 rounded-3xl p-8 sm:p-10 max-w-lg w-full text-center shadow-2xl space-y-6">
              <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
                <AlertTriangle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-label-caps uppercase tracking-widest text-arena-calida font-bold flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-uno" />
                  Sistema de Recuperación Automática
                </span>
                <h2 className="font-headline-md text-xl sm:text-2xl uppercase text-teal-uno font-bold">
                  {this.props.fallbackTitle || "Restableciendo Portal de Clientes"}
                </h2>
                <p className="font-body-md text-xs sm:text-sm text-gris-texto leading-relaxed">
                  Se ha detectado una incompatibilidad gráfica o de sesión temporal. Puede recargar la vista o restablecer los datos de demostración de manera segura.
                </p>
              </div>

              {this.state.error && (
                <div className="p-3 bg-surface-variant/40 rounded-xl text-[10px] font-mono text-gris-texto/70 text-left overflow-x-auto max-h-24 border border-arena-calida/20">
                  {this.state.error.message || "Error detectado en componente"}
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={this.handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-teal-uno hover:bg-arena-calida text-white rounded-full text-xs font-label-caps uppercase tracking-wider font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Recargar Portal</span>
                </button>

                <button
                  onClick={this.handleGoHome}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-surface-variant text-gris-texto border border-arena-calida/40 rounded-full text-xs font-label-caps uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Home className="w-3.5 h-3.5 text-teal-uno" />
                  <span>Volver al Inicio</span>
                </button>
              </div>
            </div>
          </main>

          {/* FOOTER */}
          <footer className="text-center text-[10px] font-label-caps uppercase tracking-wider text-arena-calida border-t border-arena-calida/20 pt-4">
            UNO Arquitectos • Soporte Técnico de Supervisión de Obra
          </footer>
        </div>
      );
    }

    return this.props.children;
  }
}
