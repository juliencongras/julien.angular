import { computed, Service, signal } from '@angular/core';
import { CartItem, Product } from '../../models/shop.model';

@Service()
export class Cart {
    private readonly _items = signal<CartItem[]>([]);
    readonly items = this._items.asReadonly();

    //Placeholders
    totalQuantity = computed(() => (1));
    subtotal = computed(() => (1));

    //Implémentez les méthodes addProduct(product: Product) (sans dépasser product.stock), 
    //updateQuantity(productId: number, delta: number), removeProduct(productId: number) et clearCart().
    addProduct(product: Product): void{

    }

    updateQuantity(productId: number, delta: number): void{
        
    }

    removeProduct(productId: number): void{

    }

    clearCart(): void{
        this._items.set([]);
    }
}
