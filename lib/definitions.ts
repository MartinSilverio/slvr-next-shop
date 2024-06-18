import { z } from 'zod';

const datelike = z.union([z.number(), z.string(), z.date()]);
const datelikeToDate = datelike.pipe(z.coerce.date());

const ImageSchema = z.object({
    color: z.string(),
    image_url: z.string().url(),
});

const InfoSchema = z.object({
    title: z.string(),
    description: z.array(z.string()),
});

const InventorySchema = z.object({
    sku: z.string(),
    color: z.string(),
    size: z.string(),
    list_price: z.number(),
    discount: z.number().nullable(),
    discount_percentage: z.number().nullable(),
    sale_price: z.number(),
    sold: z.number(),
    stock: z.number(),
});

const PriceRangeSchema = z.object({
    highest: z.number(),
    lowest: z.number(),
});

const CategorySchema = z.object({
    category_id: z.string(),
    name: z.string(),
    created_at: datelikeToDate,
});

const CollectionSchema = z.object({
    collection_id: z.string(),
    name: z.string(),
    description: z.string(),
    image_url: z.string().url(),
    created_at: datelikeToDate,
});

export const ProductSchema = z.object({
    product_id: z.string(),
    name: z.string(),
    description: z.string(),
    category: CategorySchema,
    collection: CollectionSchema,
    created_at: datelikeToDate,
    colors: z.array(z.string()),
    images: z.array(ImageSchema),
    info: z.array(InfoSchema),
    inventory: z.array(InventorySchema),
    priceRange: PriceRangeSchema,
    rating: z.number(),
    reviews: z.number(),
    sizes: z.array(z.string()),
    sold: z.number(),
});

export type TImage = z.infer<typeof ImageSchema>;
export type TProduct = z.infer<typeof ProductSchema>;
export type TInventory = z.infer<typeof InventorySchema>;
