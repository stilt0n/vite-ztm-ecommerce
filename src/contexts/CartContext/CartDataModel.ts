import { InventoryItemWithQuantity, InventoryItem } from '../../utils/typeUtil';
import { CartData } from './types';
// this is pretty obviously overkill, but I've always wanted to implement an iterable
export class CartDataModel implements Iterable<InventoryItemWithQuantity> {
  private cartData: CartData = {};
  private ids: number[] = [];

  public constructor(items?: InventoryItem[]) {
    const initList = items ?? [];
    for (const item of initList) {
      this.addItemToCart(item);
    }
  }

  public addItemToCart(item: InventoryItem) {
    if (this.cartData[item.id]) {
      this.cartData[item.id].quantity += 1;
    } else {
      this.cartData[item.id] = { ...item, quantity: 1 };
      this.ids.push(item.id);
    }
  }

  public get(id: number) {
    return this.cartData[id];
  }

  public decrementItem(id: number) {
    if (this.cartData[id]) {
      this.cartData[id].quantity -= 1;
      if (this.cartData[id].quantity === 0) {
        delete this.cartData[id];
        this.ids.splice(this.ids.indexOf(id));
      }
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
