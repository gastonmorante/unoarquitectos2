import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { UnoIsotype } from "./Logo";

export default function Hero() {
  const { language, t } = useLanguage();
  const glContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let renderer: any = null;
    let geometry: any = null;
    let material: any = null;
    let animationFrameId: number | null = null;

    const initShader = () => {
      try {
        const THREE = (window as any).THREE;
        const container = glContainerRef.current;
        if (!THREE || !container) return;

        container.innerHTML = "";

        const width = container.clientWidth || window.innerWidth || 1200;
        const height = container.clientHeight || window.innerHeight || 800;

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        geometry = new THREE.PlaneGeometry(2, 2);

        const fragmentShader = `
          precision highp float;
          uniform float u_time;
          uniform vec2 u_resolution;

          void main() {
              vec2 uv = gl_FragCoord.xy / u_resolution.xy;
              
              float wave = sin(uv.x * 3.0 + u_time * 0.4) * 0.08;
              float wave2 = cos(uv.y * 2.0 - u_time * 0.25) * 0.08;
              
              vec3 color1 = vec3(0.78, 0.72, 0.60); // Arena Calida #C8B89A
              vec3 color2 = vec3(0.99, 0.988, 0.976); // Warm Off-White #FDFCF9
              
              float noise = sin(uv.x * 5.0 + u_time * 0.15) * cos(uv.y * 4.0 - u_time * 0.12);
              float mask = smoothstep(-0.5, 0.5, noise + uv.y - 0.5 + wave + wave2);
              
              vec3 finalColor = mix(color2, color1, mask * 0.2);
              
              float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
              finalColor -= grain * 0.02;
              
              gl_FragColor = vec4(finalColor, 1.0);
          }
        `;

        const vertexShader = `
          void main() {
              gl_Position = vec4(position, 1.0);
          }
        `;

        const uniforms = {
          u_time: { value: 1.0 },
          u_resolution: { value: new THREE.Vector2(width, height) }
        };

        material = new THREE.ShaderMaterial({
          uniforms,
          vertexShader,
          fragmentShader,
          transparent: true
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const onWindowResize = () => {
          if (!container || !renderer) return;
          const newW = container.clientWidth || window.innerWidth;
          const newH = container.clientHeight || window.innerHeight;
          renderer.setSize(newW, newH);
          uniforms.u_resolution.value.x = newW;
          uniforms.u_resolution.value.y = newH;
        };

        window.addEventListener("resize", onWindowResize);

        const animate = (timestamp: number) => {
          animationFrameId = requestAnimationFrame(animate);
          uniforms.u_time.value = timestamp * 0.001;
          renderer.render(scene, camera);
        };

        animate(0);
      } catch (e) {
        console.warn("WebGL shader fallback:", e);
      }
    };

    if ((window as any).THREE) {
      initShader();
    } else {
      const timer = setTimeout(initShader, 300);
      return () => clearTimeout(timer);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (renderer) {
        try { renderer.dispose(); } catch {}
      }
      if (geometry) {
        try { geometry.dispose(); } catch {}
      }
      if (material) {
        try { material.dispose(); } catch {}
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const btn1 = language === "es" ? "Iniciar Diálogo" : language === "en" ? "Start Dialogue" : language === "it" ? "Inizia Dialogo" : "Commencer Dialogue";
  const btn2 = language === "es" ? "Sentir los Espacios" : language === "en" ? "Experience Spaces" : language === "it" ? "Sentire gli Spazi" : "Ressentir les Espaces";

  return (
    <header
      id="inicio"
      className="relative w-full min-h-[92vh] md:min-h-[720px] flex items-center justify-center overflow-hidden bg-background py-20 px-4 sm:px-6 md:px-margin-desktop"
    >
      {/* WebGL Animated Background */}
      <div ref={glContainerRef} className="absolute inset-0 z-0" id="gl-container"></div>

      {/* Boho-Chic Luxury Architecture Photo Overlay */}
      <div className="absolute inset-0 z-[1] opacity-60 mix-blend-overlay">
        <img
          alt="High-end architectural photography of a boho-chic luxury villa at sunset"
          className="w-full h-full object-cover object-center scale-105 transform origin-center animate-[pulse_30s_ease-in-out_infinite_alternate]"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=95"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Warm Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(rgba(200, 184, 154, 0.2) 0%, rgba(200, 184, 154, 0.4) 100%)" }}
      ></div>

      {/* Glassmorphism Central Card */}
      <div className="relative z-10 text-center w-full max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-24 p-6 sm:p-10 md:p-16 lg:p-20 bg-white/55 backdrop-blur-md rounded-3xl border border-white/50 shadow-ethereal reveal-on-scroll is-visible overflow-hidden">
        
        {/* Architectural Watermark Logo - Centered at 80% of card */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <UnoIsotype
            size="100%"
            color="#00A3A3"
            cubeColor="#FFFFFF"
            strokeColor="#00A3A3"
            className="w-[80%] max-w-[540px] aspect-square opacity-[0.09]"
          />
        </div>

        <div className="relative z-10">
          <span className="font-label-caps text-[11px] sm:text-xs md:text-label-caps text-arena-calida uppercase tracking-[0.2em] sm:tracking-[0.25em] block mb-3 sm:mb-4 font-semibold">
            {t("hero.tagline") || "Arquitectura que pertenece. Espacios que perduran."}
          </span>

          <h1 
            className="font-headline-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-teal-uno mb-4 sm:mb-6 tracking-tight font-semibold"
            style={{ textShadow: "rgba(0, 0, 0, 0.05) 0px 2px 4px" }}
          >
            UNO ARQUITECTOS
          </h1>

          <p className="font-body-md sm:font-body-lg text-sm sm:text-base md:text-body-lg text-gris-texto mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subheading") || "Servicios integrales de diseño y construcción llave en mano en Riviera Maya desde 2017. Nos especializamos en obra nueva y remodelaciones comerciales, residenciales, hospitalarios y proyectos off the grid."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <button
              onClick={() => scrollToSection("contacto")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 bg-teal-uno text-white font-label-caps text-xs sm:text-label-caps uppercase hover:bg-arena-calida transition-all duration-500 rounded-full shadow-ethereal cursor-pointer"
            >
              {btn1}
            </button>

            <button
              onClick={() => scrollToSection("proyectos")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 border border-teal-uno text-teal-uno font-label-caps text-xs sm:text-label-caps uppercase hover:bg-teal-uno hover:text-white transition-all duration-500 rounded-full cursor-pointer"
            >
              {btn2}
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_downward</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
