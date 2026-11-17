type ProductCategory = ('hardware' | 'formation' | 'goodies');

interface Product{
    id: number,
    name: string,
    price: string,
    category: string,
    stock: number,
    icon: string
}

interface CartItem{
    product: Product,
    quantity: number
}