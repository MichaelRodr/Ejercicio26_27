export class Task {
  nombre = '';
  descripcion = '';
  isComplete = false

    constructor (nombre, descripcion, isComplete){
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.isComplete = isComplete;
    }
}