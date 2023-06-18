import { InventoryItemWithQuantity, InventoryItem } from '../../utils/typeUtil';
import { CartContextState, CartData } from './types';

// this is pretty obviously overkill, but I've always wanted to implement an iterable
export class CartDataModel implements Iterable<InventoryItemWithQuantity> {
  private cartData: CartData = {};
  private cartItemCount = 0;
  private cartTotal = 0;

  public constructor(initData?: {
    cartData: CartData;
    cartItemCount: number;
    cartTotal: number;
  }) {
    if (initData) {
      this.cartData = initData.cartData;
      this.cartItemCount = initData.cartItemCount;
      this.cartTotal = initData.cartTotal;
    }
  }

  /**
   * @returns a deep copy of the current CartDataModel
   */
  public copy() {
    return new CartDataModel({
      cartData: structuredClone(this.cartData),
      cartItemCount: this.cartItemCount,
      cartTotal: this.cartTotal,
    });
  }

  public addItem(item: InventoryItem) {
    if (this.cartData[item.id]) {
      this.cartData[item.id].quantity += 1;
    } else {
      this.cartData[item.id] = { ...item, quantity: 1 };
    }
    this.cartItemCount += 1;
    this.cartTotal += item.price;
  }

  public getItemCount() {
    return this.cartItemCount;
  }

  public getTotal() {
    return this.cartTotal;
  }

  public removeItem(id: number) {
    if (!this.cartData[id]) return;
    const { quantity, price } = this.cartData[id];
    this.cartItemCount -= quantity;
    this.cartTotal -= price * quantity;
    delete this.cartData[id];
  }

  public decrementItem(id: number) {
    if (this.cartData[id]) {
      this.cartData[id].quantity -= 1;
      this.cartTotal -= this.cartData[id].price;
      if (this.cartData[id].quantity === 0) {
        delete this.cartData[id];
      }
      this.cartItemCount -= 1;
    }
  }

  public incrementItem(id: number) {
    if (this.cartData[id]) {
      this.cartData[id].quantity += 1;
      this.cartItemCount += 1;
      this.cartTotal += this.cartData[id].price;
      return;
    }
    throw new Error(
      'Cannot increment item: it does not exist. Did you mean to use addItem instead?'
    );
  }

  public *[Symbol.iterator]() {
    let counter = 0;
    const ids = Object.keys(this.cartData).map(Number);
    while (counter < ids.length) {
      yield this.cartData[ids[counter]];
      counter++;
    }
  }
}

/**
 * @internal
 * Allows the reducer to keep track of the cart without exposing it externally.
 * @remarks
 * This is a bit of a hack to allow this class to be compatible with useReducer's pure function requirement.
 */
export interface CartReducerState
  extends Omit<CartContextState, 'cartDispatch'> {
  cart: CartDataModel;
}
