import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VentaNovaService } from '../../services/ventanova.service';
import { ProductoCardComponent } from '../../components/producto-card/producto-card.component';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductoCardComponent],
  template: `
    <div class="space-y-8 max-w-7xl mx-auto">
      <!-- Encabezado -->
      <div class="bg-slate-900 text-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 class="text-3xl font-black tracking-tight">Catálogo de <span class="text-cyan-400">Soluciones Digitales</span></h2>
          <p class="text-slate-300 mt-1">Explora nuestros servicios y herramientas tecnológicas orientadas al rendimiento.</p>
        </div>
        <div class="bg-indigo-950/60 border border-indigo-500/30 px-4 py-2 rounded-xl text-sm text-cyan-300">
          Total disponibles: <span class="font-bold text-white">{{ productosFiltrados().length }}</span>
        </div>
      </div>

      <!-- Barra de Búsqueda y Filtros con Signals -->
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between">
        <!-- Buscador por texto -->
        <div class="w-full md:w-1/2 relative">
          <input
            type="text"
            [ngModel]="busqueda()"
            (ngModelChange)="busqueda.set($event)"
            placeholder="Buscar por nombre o descripción..."
            class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 transition">
        </div>

        <!-- Filtros por categoría -->
        <div class="flex flex-wrap gap-2 w-full md:w-auto">
          <button
            (click)="categoriaSeleccionada.set('Todas')"
            [class]="categoriaSeleccionada() === 'Todas' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-sm transition">
            Todas
          </button>
          <button
            (click)="categoriaSeleccionada.set('Software')"
            [class]="categoriaSeleccionada() === 'Software' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-sm transition">
            Software
          </button>
          <button
            (click)="categoriaSeleccionada.set('Marketing')"
            [class]="categoriaSeleccionada() === 'Marketing' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-sm transition">
            Marketing
          </button>
          <button
            (click)="categoriaSeleccionada.set('Cloud')"
            [class]="categoriaSeleccionada() === 'Cloud' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-sm transition">
            Cloud
          </button>
          <button
            (click)="categoriaSeleccionada.set('Seguridad')"
            [class]="categoriaSeleccionada() === 'Seguridad' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'"
            class="px-4 py-2 rounded-xl text-sm transition">
            Seguridad
          </button>
        </div>
      </div>

      <!-- Cuadrícula de Productos usando @for y @if condicional -->
      @if (productosFiltrados().length > 0) {
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (prod of productosFiltrados(); track prod.id) {
            <app-producto-card [producto]="prod" (solicitar)="manejarSolicitud($event)"></app-producto-card>
          }
        </div>
      } @else {
        <div class="bg-white p-12 rounded-2xl text-center border border-slate-100 space-y-3">
          <p class="text-xl font-bold text-slate-700">No se encontraron resultados</p>
          <p class="text-slate-500 text-sm">Intenta ajustar tu término de búsqueda o categoría seleccionada.</p>
        </div>
      }
    </div>
  `
})
export class CatalogoComponent {
  private service = inject(VentaNovaService);

  // Obtener productos desde el servicio centralizado
  private listaProductos: Producto[] = this.service.getProductos();

  // Signals para manejar el estado reactivo de búsqueda y categoría
  busqueda = signal<string>('');
  categoriaSeleccionada = signal<string>('Todas');

  // Computed para filtrar automáticamente los resultados en tiempo real
  productosFiltrados = computed(() => {
    const texto = this.busqueda().toLowerCase().trim();
    const cat = this.categoriaSeleccionada();

    return this.listaProductos.filter(p => {
      const coincideTexto = p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto);
      const coincideCat = cat === 'Todas' || p.categoria === cat;
      return coincideTexto && coincideCat;
    });
  });

  manejarSolicitud(producto: Producto) {
    alert(`¡Has solicitado información sobre el servicio: ${producto.nombre}! Nos pondremos en contacto contigo.`);
  }
}
