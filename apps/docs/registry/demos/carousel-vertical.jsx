import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@shery-ui/components";

export default function CarouselVertical() {
    const slides = [1, 2, 3, 4];

    return (
        <Carousel orientation="vertical" className="h-48 max-w-xs">
            <CarouselContent className="h-full">
                {slides.map((item) => (
                    <CarouselItem key={item}>
                        <div className="flex h-full items-center justify-center border rounded-md">
                            Vertical {item}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
