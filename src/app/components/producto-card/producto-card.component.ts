import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition flex flex-col justify-between">
      <div>
        <div class="relative h-48 overflow-hidden bg-slate-100">
          <img [src]="producto.imagen" [alt]="producto.nombre" class="w-full h-full object-cover hover:scale-105 transition duration-300">
          @if (producto.tendencia) {
            <span class="absolute top-3 right-3 bg-cyan-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase shadow">Tendencia</span>
          }
        </div>
        <div class="p-6 space-y-3">
          <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">{{ producto.categoria }}</span>
          <h3 class="text-xl font-bold text-slate-900">{{ producto.nombre }}</h3>
          <p class="text-slate-600 text-sm line-clamp-2">{{ producto.descripcion }}</p>
        </div>
      </div>
      <div class="p-6 pt-0 flex items-center justify-between mt-4">
        <span class="text-2xl font-black text-slate-900">$ {{ producto.precio | number }}</span>
        <button (click)="onSolicitar()" class="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-cyan-500 hover:text-slate-950 transition">
          Solicitar Info
        </button>
      </div>
    </div>
  `
})
export class ProductoCardComponent {
  // @Input para recibir los datos del producto desde el componente padre (Catálogo)
  @Input({ required: true }) producto!: Producto;

  // @Output para comunicar la acción al componente padre
  @Output() solicitar = new EventEmitter<Producto>();

  onSolicitar() {
    this.solicitar.emit(this.producto);
  }
}
