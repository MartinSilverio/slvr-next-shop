import { cn } from '@/lib/utils';
import { RadioGroup, RadioGroupItem } from '../radio-group';
import Image from 'next/image';
import strikeThrough from '@/public/line.svg';

function getColorClass(color: string) {
    return {
        'bg-swatch-pink': color === 'pink',
        'bg-swatch-beige': color === 'beige',
        'bg-swatch-black': color === 'black',
        'bg-swatch-blue': color === 'blue',
        'bg-swatch-brown': color === 'brown',
        'bg-swatch-yellow': color === 'yellow',
        'bg-swatch-white': color === 'white',
        'bg-swatch-red': color === 'red',
        'bg-swatch-orange': color === 'orange',
        'bg-swatch-green': color === 'green',
        'bg-swatch-purple': color === 'purple',
    };
}

function ColorSwatch({
    selectedColor,
    colors,
}: {
    selectedColor: string;
    colors: { color: string; stock: number }[];
}) {
    return (
        <section className="col-span-full pl-4">
            <p>Please select a color</p>
            <RadioGroup
                defaultValue={selectedColor}
                className="mt-2 flex flex-row"
            >
                {colors.map((colorData) => (
                    <div
                        key={colorData.color + colorData.stock}
                        className="relative"
                    >
                        <RadioGroupItem
                            className={cn(
                                'peer h-9 w-9 text-xl text-white transition-shadow  peer-data-[state=checked]:border-none ',
                                getColorClass(colorData.color),
                                'data-[state=checked]:border data-[state=checked]:border-indigo-700',
                                'data-[state=checked]:ring-2 data-[state=checked]:ring-inset data-[state=checked]:ring-white',
                                'hover:shadow-[0px_0px_0_3px_rgba(67,56,202,.3)] focus:shadow-[0px_0px_0_5px_rgba(67,56,202,.3)]'
                            )}
                            hideCheckmark={colorData.stock === 0}
                            value={colorData.color}
                            id={colorData.color}
                        />
                        {colorData.stock === 0 && (
                            <Image
                                className="pointer-events-none absolute top-0"
                                src={strikeThrough}
                                alt="strikethrough"
                            />
                        )}
                    </div>
                ))}
            </RadioGroup>
        </section>
    );
}

export default ColorSwatch;
