'use client';

import { TImage } from '@/lib/definitions';
import Image from 'next/image';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '../carousel';
import { useState } from 'react';
import { cn } from '@/lib/utils';

function Gallery({
    images,
    productName,
}: {
    images: TImage[];
    productName: string;
}) {
    const [selectedImage, setSelectedImage] = useState(0);

    function handleImagClick(ndx: number) {
        setSelectedImage(ndx);
    }

    return (
        <>
            <Image
                className="col-span-full mt-12 h-[400px] w-[311px] self-center justify-self-center rounded-lg bg-slate-500 object-cover"
                src={images[selectedImage].image_url}
                alt={`${images[selectedImage].color} ${productName}`}
                width={311}
                height={400}
                key={`gallery-image-${selectedImage}`}
                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcu3DldwAGqgLgREzYSQAAAABJRU5ErkJggg=="
                priority
            />
            <div className="col-span-full justify-self-center">
                <Carousel className="w-[311px]">
                    <CarouselContent className="w-[300px]">
                        {images.map((image, ndx) => {
                            return (
                                <CarouselItem
                                    key={image.image_url}
                                    className="basis-1/3"
                                >
                                    <button
                                        onClick={() => handleImagClick(ndx)}
                                        className="relative"
                                    >
                                        <Image
                                            className={cn(
                                                'relative rounded-lg'
                                            )}
                                            src={image.image_url}
                                            alt={`select ${image.color} ${productName} image ${ndx + 1}`}
                                            width={80}
                                            height={120}
                                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcu3DldwAGqgLgREzYSQAAAABJRU5ErkJggg=="
                                        />
                                        {ndx === selectedImage && (
                                            <div className="absolute top-0 h-[120px] w-[80px] rounded-lg border-[3px] border-indigo-600"></div>
                                        )}
                                    </button>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                </Carousel>
            </div>
        </>
    );
}

export default Gallery;
