import { cn } from '@/lib/utils';
import { Badge } from '../badge';
import { TInventory } from '@/lib/definitions';

function Price({ inventoryItem }: { inventoryItem: TInventory }) {
    return (
        <section className="col-span-full flex-col space-y-2 pl-4 font-medium drop-shadow-text">
            <div>
                <span className="mr-2 text-3xl text-neutral-600">{`$${inventoryItem.sale_price}`}</span>
                <span className="text text-xl text-neutral-400 line-through">{`$${inventoryItem.list_price}`}</span>
            </div>
            {inventoryItem.discount ||
                (inventoryItem.discount_percentage && (
                    <Badge
                        className={cn('border text-sm', {
                            ' border-amber-200 bg-amber-50  text-amber-700':
                                inventoryItem.discount_percentage !== null,
                            ' border-green-200 bg-green-50  text-green-700':
                                inventoryItem.discount !== null,
                        })}
                    >{`${inventoryItem.discount_percentage !== null ? `${inventoryItem.discount_percentage}%` : `$${inventoryItem.discount}`} OFF`}</Badge>
                ))}
        </section>
    );
}

export default Price;
