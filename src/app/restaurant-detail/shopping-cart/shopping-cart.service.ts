import { CartItem } from './cart-teim.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {
     items: CartItem[] = [];

    clear(){
        this. items = [];
    }

    addItem( item: MenuItem ) {
        let founditem = this. items.find((mItem) => mItem.menuttem.id === item.id);
        if ( founditem ){
            founditem.quantity = founditem.quantity + 1;
        }else {
            this. items.push(new CartItem(item));
        }
    }

    removeItem( item: CartItem ) {
        this. items.splice(this. items.indexOf(item), 1);
    }

    total(): number {
        return this. items
            .map(item => item.value())
            .reduce(( prev, value ) => prev + value, 0);
    }
}