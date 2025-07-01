import {
  Rocket,
  Code2,
  TrendingUp,
  Users,
  Lightbulb,
  Share2,
} from "lucide-react";



export default function WhatYouWillLearn() {
  return (
   <section className="py-20 bg-gray-950 relative overflow-hidden">
  {/* 💡 Bright Gradient Glow */}
  <div
    className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[120px] opacity-40 z-0 pointer-events-none"
    style={{
      background:
        "radial-gradient(circle, rgba(236,72,153,0.5), rgba(168,85,247,0.4), transparent)",
    }}
  ></div>

  {/* 🌟 Section Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-4">
    <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text  text-center mb-12">
      What Will You Learn?
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          icon: "🚀",
          title: "Work From Home",
          desc: "iDigitalPreneur offers work from home opportunities to learn skills and earn using social media.",
        },
        {
          icon: "💻",
          title: "Financial Stability",
          desc: "Financial stability means steady income and secure savings to manage expenses and future needs.",
        },
        {
          icon: "📈",
          title: "Flexible Schedule",
          desc: "Flexible Schedule means you can choose your own working hours, allowing better work-life balance and freedom.",
        },
        {
          icon: "🤝",
          title: "Personal Growth",
          desc: "Personal Growth means improving your skills, mindset, and confidence to become the best version of yourself.",
        },
        {
          icon: "💡",
          title: "Communicate with Customers",
          desc: "My webinar helps you connect, engage, and communicate better with customers.",
        },
        {
          icon: "📲",
          title: "Explore New Opportunities",
          desc: "Explore New Opportunities means discovering new paths to grow, earn, and succeed in your personal or professional life.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 border border-gray-700 rounded-xl p-5 bg-gray-900/30 backdrop-blur-sm hover:shadow-lg hover:border-pink-500/50 transition-all duration-300"
        >
          <div className="text-2xl">{item.icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
