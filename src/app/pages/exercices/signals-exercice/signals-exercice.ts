import { Component, signal, computed, effect } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-signals-exercice',
  styleUrl: './signals-exercice.css',
  templateUrl: './signals-exercice.html',
})
export class SignalsExercice {
  title: string = "Exercice : Panier Réactif avec Signals";

  quantity = signal(1);
  unitPrice = signal(35);
  discountPercent = signal(0);
  isExpressShipping = signal(false);
  subtotal = computed(() => this.quantity() * this.unitPrice());
  discountAmount = computed(() => (this.discountPercent() * this.subtotal()) / 100);
  //Kind of cursed but I think it works?
  shippingFee = computed(() => this.quantity() <= 0? 0 : this.isExpressShipping()? 12 : this.subtotal() >= 100? 0: 5);
  temporaryTotal = computed(() => (this.subtotal() + this.shippingFee()) - this.discountAmount());
  total = computed(() => this.temporaryTotal() > 0?this.temporaryTotal():0)

  constructor() {
    effect(() => {
      localStorage.setItem("cart_demo_signals", "Etat courant du panier");
      console.log(localStorage.getItem("cart_demo_signals"));
    });
  }

  incrementQuantity(): void {
    this.quantity.update((x) => x + 1);
  }

  decrementQuantity(): void {
    if (this.quantity() >= 1) {
      this.quantity.update((x) => x - 1);
    }
  }

  setDiscount(percent: 0 | 10 | 20){
    this.discountPercent.set(percent);
  }

  toggleExpressShipping(){
    this.isExpressShipping.update((x) => !x);
  }

  resetCart(){
    this.quantity.set(1);
    this.unitPrice.set(35);
    this.discountPercent.set(0);
    this.isExpressShipping.set(false);
  }
}
