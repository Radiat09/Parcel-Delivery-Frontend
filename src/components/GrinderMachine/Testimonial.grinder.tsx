import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonial() {
  return (
    <section className="py-10 my-10">
      <h2 className="text-3xl text-center font-bold text-primary mb-8">
        টেস্টিমনিয়ালস
      </h2>
      <Carousel className="w-full max-w-7xl mx-auto ">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-secondary-foreground italic leading-relaxed">
                  “আলহামদুলিল্লাহ, অনেক ভালো মানের মেশিন। সহজেই ব্যবহার করা যায়
                  এবং পারফরম্যান্স দারুণ। আমি ব্যক্তিগতভাবে রান্নাঘরে ব্যবহার
                  করছি এবং ডিজাইনটাও একেবারে আধুনিক। ধন্যবাদ!”
                </p>
                <h4 className="mt-6 font-semibold text-primary">SHIFA AKTER</h4>
                <span className="text-sm text-gray-500">গ্রাহক</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
