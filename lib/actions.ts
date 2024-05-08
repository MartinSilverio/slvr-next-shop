import { ProductSchema } from './definitions';
export async function fetchProduct(pid: string) {
    const resp = await fetch(`${process.env.API_BASE}${pid}`);

    if (!resp.ok) {
        throw new Error('Error getting product data');
    }

    const data = await resp.json();
    console.log(data);

    return ProductSchema.parse(data);
}
