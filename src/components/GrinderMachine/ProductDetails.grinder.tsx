import { CircleCheckBig } from "lucide-react";
import grinderWithMaterials from "../../assets/images/grinder/grinder-with-materials.png";
import { Button } from "../ui/button";

export default function ProductDetails({
  scrollToOrder,
}: {
  scrollToOrder: () => void;
}) {
  return (
    <section style={{}} className="py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <img src={grinderWithMaterials} alt="Product" className="w-full" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-primary mb-4">
            মাল্টি ফাংশনাল স্মার্ট ইলেকট্রিক গ্রাইন্ডার মেশিন
          </h2>
          <div className="mb-6">
            <h4 className="text-lg text-primary/90 font-bold flex gap-2 mb-1 break-words">
              প্রোডাক্ট এর বিবরণ :
            </h4>
            <ul className="text-secondary-foreground text-lg font-medium space-y-1">
              <li>Name: Multi Functional Smart Electric Grinder</li>
              <li>Number of blades: 4</li>
              <li>Body materials: Stainless Steel</li>
              <li>Rated Power: 200W TO 300W</li>
              <li>Rated Voltage: 220V</li>
              <li>Product Size: 17 x 11 cm </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-primary/90 font-bold flex gap-2 mb-1 break-words">
              <CircleCheckBig className="text-green-500" /> মিনি গ্রাইন্ডার টা
              দিয়ে যা যা করতে পারবেন :
            </h4>
            <ul className="text-secondary-foreground text-base space-y-2 mb-6">
              <li>✔ 550ml ধারণ ক্ষমতা</li>
              <li>✔ উচ্চ ক্ষমতার মোটর</li>
              <li>✔ সহজে পরিষ্কার করা যায়</li>
              <li>✔ মসৃণ ডিজাইন ও স্টাইলিশ</li>
              <li>✔ দীর্ঘস্থায়ী এবং টেকসই</li>
            </ul>
          </div>
          <p className="text-xl font-bold text-primary mb-4">
            মূল্য: <span className="line-through text-gray-400">৳৩২০০</span>{" "}
            ৳১৯৯৯
          </p>
          <Button onClick={scrollToOrder} size="lg">
            অর্ডার করুন
          </Button>
        </div>
      </div>
    </section>
  );
}
