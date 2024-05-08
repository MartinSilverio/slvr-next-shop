import Image from 'next/image';
import { fetchProduct } from '@/lib/actions';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';

async function Page({ params }: { params: { pid: string } }) {
    const productData = await fetchProduct(params.pid);
    const selectedColorImages = productData.images.filter(
        (image) => image.color === 'green'
    );

    console.log(selectedColorImages);

    return (
        <>
            <Image
                className="col-span-full mt-12 self-center justify-self-center rounded-lg"
                src={productData.images[0].image_url}
                alt={`${productData.images[0].color} ${productData.name}`}
                width={311}
                height={400}
            />
            {/* mr-16 pl-4 */}
            <div className="col-span-full justify-self-center">
                <Carousel className="w-[311px]">
                    <CarouselContent className="w-[300px]">
                        {selectedColorImages.map((image) => {
                            return (
                                <CarouselItem
                                    key={image.image_url}
                                    className="basis-1/3"
                                >
                                    <Image
                                        className="rounded-lg"
                                        src={image.image_url}
                                        alt={`${image.image_url} ${productData.name}`}
                                        width={80}
                                        height={120}
                                    />
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>
            <h1 className="col-span-full pl-4 pt-12 text-3xl font-semibold">
                {productData.name}
            </h1>
        </>
    );
}

export default Page;
