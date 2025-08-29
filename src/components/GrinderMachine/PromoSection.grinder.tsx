import { Button } from "../ui/button";

export default function PromoSection({
  scrollToOrder,
}: {
  scrollToOrder: () => void;
}) {
  return (
    <section className="not-dark:bg-gray-900 dark:bg-secondary text-white py-16 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            নিয়মিতই গুঁড়ো করুন যেকোনো মসলা
          </h2>
          <p className="text-gray-300">
            শক্তিশালী মোটর এবং আধুনিক ডিজাইনের কারণে প্রতিদিন ব্যবহার উপযোগী।
          </p>
        </div>
        <Button onClick={scrollToOrder} size="lg">
          অর্ডার করুন
        </Button>
      </div>
    </section>
  );
}
