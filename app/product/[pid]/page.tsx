import ColorSwatch from '@/components/ui/product/colorSwatch';
import Gallery from '@/components/ui/product/gallery';
import Price from '@/components/ui/product/price';
import Rating from '@/components/ui/product/rating';
import SizeSelection from '@/components/ui/product/sizeSelection';
import { fetchProduct } from '@/lib/actions';

async function Page({
    params,
    searchParams,
}: {
    params: { pid: string };
    searchParams?: {
        color?: string;
    };
}) {
    const productData = await fetchProduct(params.pid);
    const currColor = searchParams?.color || productData.colors[0];
    const selectedColorImages = productData.images.filter(
        (image) => image.color === currColor
    );

    return (
        <>
            <Gallery
                images={selectedColorImages}
                productName={productData.name}
            />
            <h1 className="col-span-full pl-4 pt-12 text-3xl font-semibold drop-shadow-text">
                {productData.name}
            </h1>
            <Price inventoryItem={productData.inventory[0]} />
            <Rating rating={productData.rating} reviews={productData.reviews} />
            <ColorSwatch
                selectedColor={currColor}
                colors={productData.colors.map((color) => ({
                    color,
                    stock: 23,
                }))}
            />
            <SizeSelection
                sizesData={productData.sizes.map((size) => ({
                    size,
                    stock: 23,
                }))}
            />
        </>
    );
}

export default Page;
