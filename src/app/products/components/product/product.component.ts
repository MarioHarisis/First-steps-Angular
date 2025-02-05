import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormComponent], // importar el formulario
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  title: string = 'Lista de productos';
  products: Product[] = [];

  /* es lo mismo que definir el atributo fuera de constructor
   y luego inyectarlo 
   
   private service: ProductService;*/
  constructor(private service: ProductService){}

  ngOnInit(): void {
    /* 
    - Asincronía: Los datos no se obtienen de inmediato, por ejemplo, si estamos haciendo una llamada a una API, 
    debemos esperar a que se reciban los datos. La suscripción es cómo le decimos al Observable que ejecute 
    una acción CUANDO LOS DATOS ESTEN LISTOS.

    - Múltiples valores: Un Observable puede emitir múltiples valores a lo largo del tiempo, 
    y suscribirse a un Observable significa que estamos apuntando a recibir los datos que el Observable emitirá.

    - Una vez suscritos, el Observable empieza a emitir los valores, y cada vez que eso ocurre, se ejecuta 
    la función de callback que proporcionamos en la suscripción.

    En ngOnInit() asignamos los productos que llegarían desde una API hasta el service, y después aquí
    pasamos ese observable a la lista de Productos[] 'products' suscribiéndonos 
    */
    this.service.findAll().subscribe(products => this.products = products);
  }

  addProduct(product: Product) {
    product.id = this.products.length + 1;
    this.products.push(product);
    /* 
    Otra opcion:
    this.products = [... this.products, {... product}] 
    modificar la lista existente añadiendo los productos que ya existían más el que recibe el método
    */
  }
}
