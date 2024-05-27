export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    inStock: boolean,
    gift: any,
    imageURL: string,
    properties?: {
        color: string,
        capacity: string,
        style: string,
    }
}
