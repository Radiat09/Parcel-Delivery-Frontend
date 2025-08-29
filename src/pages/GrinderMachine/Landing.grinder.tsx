import HeroSection from "@/components/GrinderMachine/Hero.grinder";
import OrderForm from "@/components/GrinderMachine/OrderForm.grinder";
import ProductDetails from "@/components/GrinderMachine/ProductDetails.grinder";
import PromoSection from "@/components/GrinderMachine/PromoSection.grinder";
import { Testimonial } from "@/components/GrinderMachine/Testimonial.grinder";
import WhyChooseUs from "@/components/GrinderMachine/WhyChooseUs.grinder";
import WhyNeedIt from "@/components/GrinderMachine/WhyNeedIt.ggrinder";
import { useRef } from "react";

export default function LandingPage() {
  const orderRef = useRef<HTMLDivElement>(null);

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="overflow-y-auto scroll-smooth">
      <HeroSection scrollToOrder={scrollToOrder} />
      <ProductDetails scrollToOrder={scrollToOrder} />
      <Testimonial />
      <WhyChooseUs />
      <PromoSection scrollToOrder={scrollToOrder} />
      <WhyNeedIt />
      <OrderForm orderRef={orderRef} />
    </div>
  );
}
