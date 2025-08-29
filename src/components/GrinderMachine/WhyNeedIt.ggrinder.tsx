import whiGrinder from "../../assets/images/grinder/grinder-wni.png";

export default function WhyNeedIt() {
  return (
    <section className="not-dark:bg-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <img src={whiGrinder} />
        </div>
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-chart-1 mb-10">
            কেন আপনার মিনি গ্রাইন্ডারটি কেনা উচিত?
          </h2>
          <ul className="space-y-4 text-secondary700">
            <li>
              <span className="text-xl font-semibold">
                শক্তিশালী পারফরম্যান্স:
              </span>{" "}
              উচ্চ ক্ষমতার মোটর যা সহজেই কফি বিন, মসলা ও শুকনা ফল গুঁড়ো করে।
            </li>
            <li>
              <span className="text-xl font-semibold">বহুমুখী ব্যবহার:</span> এক
              মেশিনে মসলা, কফি, বাদাম ও শুকনা উপকরণ গুঁড়ো করুন।
            </li>
            <li>
              <span className="text-xl font-semibold">সহজ পরিষ্কার:</span>{" "}
              ডিজাইনের কারণে সহজে পরিষ্কার করা যায়।
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
