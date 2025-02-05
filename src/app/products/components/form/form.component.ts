import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  product: Product = {
    id: 0,
    name: "",
    description: "",
    price: 0,
  }

  /* 
  - @Output(): Es un decorador de Angular que permite que un componente envíe eventos a su componente padre.

  - newProductEvent: Es una variable pública del componente que almacena un EventEmitter.
  Su propósito es emitir eventos personalizados con datos asociados.

  - new EventEmitter() | EventEmitter es una clase de Angular utilizada para emitir eventos personalizados.
  En este caso, newProductEvent se inicializa como una instancia de EventEmitter, lo que permite al componente 
  emitir eventos cuando sea necesario.
  */
  @Output() newProductEvent = new EventEmitter();

  // recibe los datos del formulario
  onSubmit(): void {
    // Llama al método emit() de EventEmitter, enviando el valor de this.product al padre
    this.newProductEvent.emit(this.product);
    console.log(this.product);
  }
}
