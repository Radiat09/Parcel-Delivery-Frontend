const features = [
  {
    title: "রিটার্ন পলিসি",
    desc: "৭ দিনের মধ্যে সহজ রিটার্ন ও রিপ্লেসমেন্ট সুবিধা।",
    icon: "📦",
  },
  {
    title: "১০০% অরিজিনাল প্রোডাক্ট",
    desc: "আমরা সরাসরি কোম্পানি থেকে প্রোডাক্ট সরবরাহ করি।",
    icon: "✅",
  },
  {
    title: "ফ্রি ডেলিভারি",
    desc: "ঢাকার মধ্যে ফ্রি হোম ডেলিভারি।",
    icon: "🚚",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-6 lg:px-20">
      <h2 className="text-2xl lg:text-3xl font-bold text-center text-primary mb-10">
        কেন আমাদের থেকে কিনবেন?
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
