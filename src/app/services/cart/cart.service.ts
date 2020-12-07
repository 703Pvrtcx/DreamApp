import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Food',
      expanded: true,
      products: [
        { id: 0, name: 'Cake', price: '8' },
        { id: 1, name: 'Sundays', price: '5' },
        { id: 2, name: 'Tuna', price: '9' },
        { id: 3, name: 'Hawai', price: '7' }
      ]
    },
    {
      category: 'Drinks',
      products: [
        { id: 4, name: 'Mac & Cheese', price: '8' },
        { id: 5, name: 'Bolognese', price: '6' },
        { id: 6, name: 'Ham & Egg', price: '8' },
        { id: 7, name: 'Basic', price: '5' },
        { id: 8, name: 'Ceaser', price: '9' },
        { id: 9, name: 'Ham & Egg', price: '8' },
        { id: 10, name: 'Basic', price: '5' },
        { id: 11, name: 'Ceaser', price: '9' }
      ]
    },
    {
      category: 'Goodies',
      products: [
        { id: 12, name: 'Ham & Egg', price: '8' },
        { id: 13, name: 'Basic', price: '5' },
        { id: 14, name: 'Ceaser', price: '9' },
        { id: 15, name: 'Ham & Egg', price: '8' },
        { id: 16, name: 'Basic', price: '5' },
        { id: 17, name: 'Ceaser', price: '9' }
      ]
    }
  ];
 
  private cart = [];
  cartList = [];

  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
  // Zano
  addToCart(item){
    this.cartList.push({name: item.name, colour: item.colour, age: item.age});
  }
  removeFromCart(item){
 
    var index = this.cartList.indexOf(item);
    if(index !== -1){
      this.cartList.splice(index,1);
    }
    return this.cartList;
  }
  getCartList() {
    return this.cartList;
  }
 setCart(cartlist){
  this.cartList = cartlist;
 }

}