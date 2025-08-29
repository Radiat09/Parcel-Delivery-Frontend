import { PhoneCall } from "lucide-react";
import grinderBgImg from "../../assets/images/grinder/grinder-hero-bg.jpg";
import grinderImg from "../../assets/images/grinder/grinder.png";
import { Button } from "../ui/button";
export default function HeroSection({
  scrollToOrder,
}: {
  scrollToOrder: () => void;
}) {
  return (
    <section className="min-h-[90svh] relative flex items-center">
      <div className="py-12 md:px-10 mx-auto w-full lg:max-w-7xl xl:max-w-[70svw] flex flex-col-reverse lg:flex-row items-center gap-10">
        <div
          style={{
            backgroundImage: `url("${grinderBgImg}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className={`absolute inset-0  bg-center opacity-20`}
        ></div>
        <div className="flex-1 text-center lg:text-left z-50">
          <h1 className="text-3xl lg:text-5xl font-bold text-primary leading-snug">
            মাল্টি ফাংশনাল স্মার্ট ইলেকট্রিক গ্রাইন্ডার মেশিন
          </h1>
          <p className="text-primary- mt-4">
            মসলার স্বাদ ঠিক থাকবে অটুট, ঝামেলাহীনভাবে গুঁড়া করুন আপনার পছন্দের
            মসলা। আধুনিক ডিজাইনের এই গ্রাইন্ডার মেশিনটি রান্নাঘরে এনে দেবে এক
            নতুন অভিজ্ঞতা।
          </p>
          <div className="mt-6 flex gap-4 justify-center lg:justify-start">
            <Button onClick={scrollToOrder} size="lg">
              অর্ডার করুন
            </Button>
            <Button
              onClick={() => (window.location.href = "tel:+800171601425")}
              variant="outline"
              size="lg"
            >
              <PhoneCall /> কল করুন
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={grinderImg}
            alt="Grinder"
            className="w-80 lg:w-[400px] z-50"
          />
        </div>
      </div>
    </section>
  );
}
