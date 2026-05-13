import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@shery-ui/components";

export default function CarouselDragFree() {
    const slides = [1, 2, 3, 4, 5, 6];

    return (
        <Carousel opts={{ dragFree: true }} className="w-full max-w-lg">
            <CarouselContent>
                {slides.map((item) => (
                    <CarouselItem key={item} className="basis-1/3">
                        <div className="rounded-md border p-4 text-center">
                            Tag {item}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
