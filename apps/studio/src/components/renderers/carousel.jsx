export function renderCarousel({
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}) {
  const slides = [1, 2, 3, 4];

  return (
    <div className="grid w-full max-w-5xl gap-4 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-4">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {slides.map((item) => (
              <CarouselItem key={`a-${item}`} className="basis-1/2 md:basis-1/3">
                <div className="rounded-md border border-border bg-background p-4 text-center text-sm font-medium">
                  Slide {item}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <Carousel opts={{ align: "center", loop: true }} className="w-full">
          <CarouselContent>
            {slides.map((item) => (
              <CarouselItem key={`b-${item}`} className="basis-full">
                <div className="rounded-md bg-primary/10 p-6 text-center text-sm font-medium text-foreground">
                  Centered card {item}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" />
          <CarouselNext variant="ghost" />
        </Carousel>
      </div>

      <div className="rounded-lg border border-border bg-card p-4 md:col-span-2">
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
          <CarouselContent>
            {slides.concat([5, 6]).map((item) => (
              <CarouselItem key={`c-${item}`} className="basis-1/2 md:basis-1/4">
                <div className="rounded-md border border-border bg-muted p-4 text-center text-sm">
                  Tag {item}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious size="icon-xs" />
          <CarouselNext size="icon-xs" />
        </Carousel>
      </div>

      <div className="rounded-lg border border-border bg-card p-4 md:col-span-2">
        <Carousel orientation="vertical" className="mx-auto h-48 max-w-xs">
          <CarouselContent className="h-full">
            {slides.map((item) => (
              <CarouselItem key={`d-${item}`} className="basis-full">
                <div className="flex h-full items-center justify-center rounded-md border border-border bg-background text-sm">
                  Vertical {item}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
