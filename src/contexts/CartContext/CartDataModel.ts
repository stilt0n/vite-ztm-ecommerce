import { InventoryItemWithQuantity, InventoryItem } from '../../utils/typeUtil';
import { CartData } from './types';
// this is pretty obviously overkill, but I've always wanted to implement an iterable
export class CartDataModel implements Iterable<InventoryItemWithQuantity> {
  private cartData: CartData = {};
  private ids: number[] = [];
  private cartItemCount = 0;

  public constructor(items?: InventoryItem[]) {
    const initList = items ?? [];
    for (const item of initList) {
      this.addItem(item);
    }
  }

  public addItem(item: InventoryItem) {
    if (this.cartData[item.id]) {
      this.cartData[item.id].quantity += 1;
    } else {
      this.cartData[item.id] = { ...item, quantity: 1 };
      this.ids.push(item.id);
    }
    this.cartItemCount += 1;
  }

  public getItemCount() {
    return this.cartItemCount;
  }

  public removeItem(id: number) {
    if (!this.cartData[id]) return;
    this.cartItemCount -= this.cartData[id].quantity;
    delete this.cartData[id];
    this.ids.splice(this.ids.indexOf(id), 1);
  }

  public decrementItem(id: number) {
    if (this.cartData[id]) {
      this.cartData[id].quantity -= 1;
      if (this.cartData[id].quantity === 0) {
        delete this.cartData[id];
        this.ids.splice(this.ids.indexOf(id), 1);
      }
      this.cartItemCount -= 1;
      return true;
    }
    return false;
  }

  public *[Symbol.iterator]() {
    let counter = 0;
    while (counter < this.ids.length) {
      yield this.cartData[this.ids[counter]];
      counter++;
    }
  }
}
