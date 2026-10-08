import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparacion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="space-y-8 max-w-7xl mx-auto">
      <!-- Encabezado -->
      <div class="bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
        <h2 class="text-3xl font-black tracking-tight">Comparación de <span class="text-cyan-400">Soluciones y Mercado</span></h2>
        <p class="text-slate-300 mt-2">Analiza el impacto y rendimiento operativo de integrar nuestras herramientas frente a métodos tradicionales.</p>
      </div>

      <!-- Tabla / Cuadrícula de Comparación -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Enfoque Tradicional -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
          <div class="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Modelo Tradicional</div>
          <h3 class="text-2xl font-bold text-slate-900">Operación Manual y Aislada</h3>
          <ul class="space-y-4 text-slate-600">
            <li class="flex items-start space-x-3">
              <span class="text-rose-500 font-bold">✕</span>
              <span>Procesos manuales propensos a errores humanos y retrasos operativos.</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-rose-500 font-bold">✕</span>
              <span>Falta de visibilidad en tiempo real sobre inventarios y solicitudes de clientes.</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-rose-500 font-bold">✕</span>
              <span>Sistemas desconectados que dificultan la toma de decisiones estratégicas.</span>
            </li>
          </ul>
        </div>

        <!-- Enfoque VentaNova Digital -->
        <div class="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-8 rounded-2xl shadow-xl space-y-6 border border-indigo-500/30">
          <div class="inline-block bg-cyan-500 text-slate-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Modelo VentaNova 2026</div>
          <h3 class="text-2xl font-bold text-white">Automatización y Ciberseguridad</h3>
          <ul class="space-y-4 text-slate-300">
            <li class="flex items-start space-x-3">
              <span class="text-cyan-400 font-bold">✓</span>
              <span>Arquitectura modular basada en Angular y servicios centralizados ultrarrápidos.</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-cyan-400 font-bold">✓</span>
              <span>Gestión reactiva mediante Signals para reflejar cambios de estado instantáneos.</span>
            </li>
            <li class="flex items-start space-x-3">
              <span class="text-cyan-400 font-bold">✓</span>
              <span>Estándares de seguridad avanzados y control de accesos por roles.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
})
export class ComparacionComponent {}
