import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Encabezado -->
      <div class="bg-slate-900 text-white p-8 rounded-2xl shadow-lg text-center space-y-2">
        <h2 class="text-3xl font-black tracking-tight">Centro de <span class="text-cyan-400">Contacto y Soporte</span></h2>
        <p class="text-slate-300">Completa el formulario para solicitar asesoría personalizada con nuestro equipo técnico.</p>
      </div>

      <!-- Formulario -->
      <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        @if (enviado()) {
          <div class="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
            <h3 class="text-2xl font-bold text-emerald-800">¡Mensaje Enviado con Éxito!</h3>
            <p class="text-emerald-700">Gracias, <strong>{{ nombre() }}</strong>. Hemos registrado tu solicitud de servicio en la categoría <strong>{{ categoria() }}</strong>. Te contactaremos pronto al correo <strong>{{ email() }}</strong>.</p>
            <button (click)="reiniciarFormulario()" class="bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-700 transition shadow">
              Enviar otra consulta
            </button>
          </div>
        } @else {
          <form (submit)="enviarFormulario($event)" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Nombre -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-slate-700">Nombre Completo</label>
                <input
                  type="text"
                  [(ngModel)]="nombre"
                  name="nombre"
                  required
                  placeholder="Ej. Carlos Mendoza"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 transition">
              </div>

              <!-- Correo -->
              <div class="space-y-2">
                <label class="text-sm font-bold text-slate-700">Correo Electrónico</label>
                <input
                  type="email"
                  [(ngModel)]="email"
                  name="email"
                  required
                  placeholder="correoventanova.com"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 transition">
              </div>
            </div>

            <!-- Categoría de Interés -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-slate-700">Área de Interés</label>
              <select
                [(ngModel)]="categoria"
                name="categoria"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 transition">
                <option value="Software">Desarrollo de Software</option>
                <option value="Marketing">Estrategia de Marketing Digital</option>
                <option value="Cloud">Infraestructura Cloud</option>
                <option value="Seguridad">Ciberseguridad y Auditoría</option>
              </select>
            </div>

            <!-- Mensaje -->
            <div class="space-y-2">
              <label class="text-sm font-bold text-slate-700">Detalles de la Solicitud</label>
              <textarea
                [(ngModel)]="mensaje"
                name="mensaje"
                rows="4"
                required
                placeholder="Cuéntanos sobre los requerimientos de tu proyecto..."
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:border-cyan-500 transition"></textarea>
            </div>

            <!-- Botón Enviar -->
            <button type="submit" class="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-cyan-500 hover:text-slate-950 transition shadow-lg text-lg">
              Registrar Solicitud
            </button>
          </form>
        }
      </div>
    </div>
  `
})
export class ContactoComponent {
  // Signals para manejar la reactividad del formulario
  nombre = signal<string>('');
  email = signal<string>('');
  categoria = signal<string>('Software');
  mensaje = signal<string>('');
  enviado = signal<boolean>(false);

  enviarFormulario(event: Event) {
    event.preventDefault();
    if (!this.nombre() || !this.email() || !this.mensaje()) {
      alert('Por favor completa todos los campos obligatorios.');
      return;
    }
    this.enviado.set(true);
  }

  reiniciarFormulario() {
    this.nombre.set('');
    this.email.set('');
    this.mensaje.set('');
    this.enviado.set(false);
  }
}
