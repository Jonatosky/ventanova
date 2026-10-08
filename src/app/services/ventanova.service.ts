import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class VentaNovaService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'CRM Cloud Pro',
      categoria: 'Software',
      descripcion: 'Plataforma integral de gestión de relaciones con clientes basada en la nube con automatización de ventas.',
      precio: 45000,
      imagen: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
      tendencia: true
    },
    {
      id: 2,
      nombre: 'Estrategia SEO Avanzada',
      categoria: 'Marketing',
      descripcion: 'Optimización completa de motores de búsqueda para posicionar tu tienda digital en los primeros resultados.',
      precio: 30000,
      imagen: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80',
      tendencia: true
    },
    {
      id: 3,
      nombre: 'Hosting Empresarial NVMe',
      categoria: 'Cloud',
      descripcion: 'Servidores virtuales de alta velocidad con respaldo diario y protección contra ataques DDoS.',
      precio: 20000,
      imagen: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80',
      tendencia: false
    },
    {
      id: 4,
      nombre: 'Auditoría de Ciberseguridad',
      categoria: 'Seguridad',
      descripcion: 'Análisis exhaustivo de vulnerabilidades en aplicaciones web y pasarelas de pago digitales.',
      precio: 60000,
      imagen: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80',
      tendencia: true
    },
    {
      id: 5,
      nombre: 'Pasarela de Pagos Express',
      categoria: 'Software',
      descripcion: 'Módulo de pago seguro integrable para procesar tarjetas de crédito y transferencias en segundos.',
      precio: 35000,
      imagen: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=500&q=80',
      tendencia: false
    },
    {
      id: 6,
      nombre: 'Campañas Ads Automatizadas',
      categoria: 'Marketing',
      descripcion: 'Gestión profesional de anuncios publicitarios en redes sociales con enfoque en conversión y ROI.',
      precio: 40000,
      imagen: 'https://images.unsplash.com/photo-1533750349077-cdcd1ec5f70a?auto=format&fit=crop&w=500&q=80',
      tendencia: false
    }
  ];

  constructor() { }

  // Método para obtener todos los productos
  getProductos(): Producto[] {
    return this.productos;
  }
}
