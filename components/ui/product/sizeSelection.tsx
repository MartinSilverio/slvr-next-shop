import { ToggleGroup, ToggleGroupItem } from '../toggle-group';

function SizeSelection({
    sizesData,
}: {
    sizesData: { size: string; stock: number }[];
}) {
    return (
        <section className="col-span-full mb-20 pl-4">
            <p className="text-neutral-500 drop-shadow-text">Available Sizes</p>
            <ToggleGroup type="single" className="justify-start">
                {sizesData.map((sizeData) => (
                    <ToggleGroupItem
                        value={sizeData.size}
                        key={sizeData.size + sizeData.stock}
                        variant={'outline'}
                        className="h-12 w-16 border border-neutral-200 uppercase shadow-[0_6px_7px_-2px_rgba(0,0,0,0.3)] data-[state='on']:border-indigo-700"
                    >
                        {sizeData.size}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>
        </section>
    );
}

export default SizeSelection;
