import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@shery-ui/components";

export default function CarouselDemo() {
    const slides = [1, 2, 3, 4];

    return (
        <Carousel opts={{ align: "start" }} className="w-full max-w-md">
            <CarouselContent>
                {slides.map((item) => (
                    <CarouselItem key={item} className="basis-1/2">
                        <div className="rounded-md border p-6 text-center">
                            Slide {item}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
