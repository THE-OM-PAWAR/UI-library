import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@repo/components";

export default function CarouselLoop() {
  const slides = [1, 2, 3, 4];

  return (
    <Carousel
      opts={{ align: "center", loop: true }}
      className="w-full max-w-md"
    >
      <CarouselContent>
        {slides.map((item) => (
          <CarouselItem key={item}>
            <div className="rounded-md bg-primary/10 p-6 text-center">
              Loop Slide {item}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}