import Image from 'next/image';
import { fetchProduct } from '@/lib/actions';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Gallery from '@/components/ui/product/gallery';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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

    // console.log(selectedColorImages);

    return (
        <>
            <Gallery
                images={selectedColorImages}
                productName={productData.name}
            />
            <h1 className="drop-shadow-text col-span-full pl-4 pt-12 text-3xl font-semibold">
                {productData.name}
            </h1>
            <section className="drop-shadow-text col-span-full flex-col  space-y-2 pl-4 font-medium">
                <div>
                    <span className="mr-2 text-3xl text-neutral-600">{`$${productData.inventory[0].sale_price}`}</span>
                    <span className="text text-xl text-neutral-400 line-through">{`$${productData.inventory[0].list_price}`}</span>
                </div>
                <Badge
                    className={cn('border text-sm', {
                        ' border-amber-200 bg-amber-50  text-amber-700':
                            productData.inventory[0].discount_percentage !==
                            null,
                        ' border-green-200 bg-green-50  text-green-700':
                            productData.inventory[0].discount !== null,
                    })}
                >{`${productData.inventory[0].discount_percentage !== null ? `${productData.inventory[0].discount_percentage}%` : `$${productData.inventory[0].discount}`} OFF`}</Badge>
            </section>
        </>
    );
}

export default Page;
