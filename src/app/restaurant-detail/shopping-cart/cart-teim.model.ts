import { MenuItem } from '../menu-item/menu-item.model';

export class CartItem {
    constructor( public menuttem: MenuItem,
                 public quantity = 1) {
                 }
    value(): number {
        return this.menuttem.price * this.quantity;
    }
}
