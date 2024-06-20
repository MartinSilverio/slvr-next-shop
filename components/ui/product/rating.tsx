import fullStar from '@/public/star.svg';
import halfStar from '@/public/half-star.svg';
import emptyStar from '@/public/empty-star.svg';
import Image from 'next/image';

function Rating({ rating, reviews }: { rating: number; reviews: number }) {
    const ratingRounded = Math.round(rating * 2) / 2; //Round to nearest half star;

    const starImages = Array.from({ length: ratingRounded }, (_, ndx) => (
        <Image key={ndx} src={fullStar} alt={`${ndx + 1} star`} />
    ));
    if (ratingRounded % 1 !== 0) {
        starImages.push(
            <Image key={ratingRounded} src={halfStar} alt={`half star`} />
        );
    }

    const emptyStarCount = 5 - starImages.length;

    for (let i = 0; i < emptyStarCount; i++) {
        starImages.push(
            <Image
                key={`empty star ${i + 1}`}
                src={emptyStar}
                alt={`empty star`}
            />
        );
    }

    //Todo: Change span to Link once review section is implemented
    return (
        <section className="col-span-full flex flex-row pl-4">
            <span className="pr-2">{rating}</span>
            {starImages}
            <span className="pl-2">
                {ratingRounded === 0
                    ? `No reviews yet. Be the first`
                    : `See all ${reviews} reviews`}
            </span>
        </section>
    );
}

export default Rating;
