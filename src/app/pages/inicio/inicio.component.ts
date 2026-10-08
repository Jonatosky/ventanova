import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="max-w-6xl mx-auto space-y-12">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between">
        <div class="space-y-6 md:w-1/2">
          <span class="bg-cyan-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Innovación Digital 2026</span>
          <h1 class="text-4xl md:text-5xl font-black tracking-tight leading-tight">Impulsa tu negocio con <span class="text-cyan-400">VentaNova Digital</span></h1>
          <p class="text-slate-300 text-lg">Soluciones tecnológicas avanzadas, estrategias de marketing y ciberseguridad para transformar tu presencia en el mercado digital.</p>
          <div class="flex space-x-4">
            <a routerLink="/catalogo" class="bg-cyan-500 text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-cyan-400 transition shadow-lg">Explorar Catálogo</a>
            <a routerLink="/contacto" class="border border-slate-600 px-6 py-3 rounded-xl hover:bg-slate-800 transition font-medium">Contáctanos</a>
          </div>
        </div>
        <div class="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div class="bg-indigo-900/40 p-8 rounded-3xl border border-indigo-500/30 text-center space-y-4 backdrop-blur-md shadow-2xl">
            <h3 class="text-xl font-bold text-cyan-300">Interacción Reactiva (Signals)</h3>
            <p class="text-sm text-slate-300">Haz clic para simular visitas a productos destacados en tiempo real:</p>
            <div class="text-4xl font-black text-white">{{ visitas() }} visitas registradas</div>
            <button (click)="incrementarVisitas()" class="bg-cyan-400 text-slate-950 px-4 py-2 rounded-lg font-bold hover:bg-cyan-300 transition">
              Simular Visita (+)
            </button>
            <p class="text-xs text-cyan-200 font-semibold pt-2">{{ mensajeEstado() }}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class InicioComponent {
  // Signal para administrar estado reactivo (Requerimiento de la guía)
  visitas = signal<number>(120);

  // Computed para derivar información automáticamente en base al signal
  mensajeEstado = computed(() => {
    const v = this.visitas();
    if (v > 130) {
      return '¡Alta demanda de interés digital detectada hoy!';
    }
    return 'Explora nuestras soluciones para potenciar este indicador.';
  });

  incrementarVisitas() {
    this.visitas.update(val => val + 5);
  }
}
