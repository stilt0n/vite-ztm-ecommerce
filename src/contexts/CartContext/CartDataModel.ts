import { InventoryItemWithQuantity, InventoryItem } from '../../utils/typeUtil';
import { CartContextState, CartData } from './types';

// this is pretty obviously overkill, but I've always wanted to implement an iterable
export class CartDataModel implements Iterable<InventoryItemWithQuantity> {
  private cartData: CartData = {};
  private ids: number[] = [];
  private cartItemCount = 0;

  public constructor(initData?: {
    cartData: CartData;
    ids: number[];
    cartItemCount: number;
  }) {
    if (initData) {
      this.cartData = initData.cartData;
      this.ids = initData.ids;
      this.cartItemCount = initData.cartItemCount;
    }
  }

  /**
   * @returns a deep copy of the current CartDataModel
   */
  public copy() {
    return new CartDataModel({
      cartData: structuredClone(this.cartData),
      ids: [...this.ids],
      cartItemCount: this.cartItemCount,
    });
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

  public incrementItem(id: number) {
    if (this.cartData[id]) {
      this.cartData[id].quantity += 1;
      this.cartItemCount += 1;
      return;
    }
    throw new Error(
      'Cannot increment item: it does not exist. Did you mean to use addItem instead?'
    );
  }

  public *[Symbol.iterator]() {
    let counter = 0;
    while (counter < this.ids.length) {
      yield this.cartData[this.ids[counter]];
      counter++;
    }
  }
}

/**
 * @internal
 * Allows the reducer to keep track of the cart without exposing it extenrally.
 * This is a bit of a hack to allow this class to compatible with useReducer's pure function requirement.
 */
export interface CartReducerState
  extends Omit<CartContextState, 'cartDispatch'> {
  cart: CartDataModel;
}
