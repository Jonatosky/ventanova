export interface Producto {
  id: number;
  nombre: string;
  categoria: 'Software' | 'Marketing' | 'Cloud' | 'Seguridad';
  descripcion: string;
  precio: number;
  imagen: string;
  tendencia: boolean;
}
