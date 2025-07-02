import React, { useState, useEffect } from 'react';
import { ChevronDown, User, Users, Target, Lightbulb } from 'lucide-react';
import Gallerysection from './components/Gallerysection'; // Assuming these components exist
import Testimonial from './components/Testimonial'; // Assuming these components exist
import Footer from './components/Footer'; // Assuming this component exists
import MarqueeBanner from './components/MarqueeBanner';
import WhatYouWillLearn from './components/WhatYouWillLearn'; // Assuming this component exists

function GallerySection() {
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515378791036-0648a814c963?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  ];

  return (
    <div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
        Workshop Gallery
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <img
              src={src}
              alt={`Workshop moment ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 58
  });

  const [expandedFAQ, setExpandedFAQ] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "01. Who is this workshop best suited for?",
      answer: "Anyone who wants to start earning online without prior experience."
    },
    {
      question: "02. Will I learn how to work from home?",
      answer: "Yes, the workshop focuses on remote work and online income methods."
    },
    {
      question: "03. Can I join if I've never earned online before?",
      answer: "Yes, it's designed for complete beginners."
    },
    {
      question: "04. Will this workshop help me become financially independent?",
      answer: "Yes, it's a great first step toward self-dependence."
    },
    {
      question: "05. How soon can I start earning after the workshop?",
      answer: "Some people earn within a week, others take a month depends on action."
    },
    {
      question: "06. Will I be guided step-by-step?",
      answer: "Absolutely! We provide comprehensive step-by-step guidance throughout your journey."
    }
  ];

  const learningPoints = [
    {
      icon: <Users className="w-8 h-8 text-pink-400" />, 
      title: "Training",
      description: "Trained 1,000+ people to earn money through practical skills, mentorship, and real opportunities empowering financial freedom and long-term growth."
    }, 

    {
      icon: <User className="w-8 h-8 text-pink-400" />, 
      title: "Webinar",
      description: "You will get to know how  you can make money using social media and learn high paying skills as well."
    },
    {
      icon: <Target className="w-8 h-8 text-pink-400" />,
      title: "Work from Home",
      description: "IDigitalPreneur offers work from home opportunities to learn skills and earn using social media."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="backdrop-blur-md bg-gray-900/95 py-4 shadow-lg border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
          <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
             Work From Home Strategies
          </div>

          <nav className="hidden lg:flex space-x-6 items-center">
           
             <a href="#mentor" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"> {/* Changed to cyan-400 */}
              About
            </a>
             <a href="#what-you-will-learn" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"> {/* Changed to cyan-400 */}
              What You'll Learn
            </a>
           
             <a href="#achievements" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"> {/* Changed to cyan-400 */}
              Achievements
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"> {/* Changed to cyan-400 */}
              Testimonials
            </a>
            <a href="#faqs" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              FAQs
            </a>
            <a href="https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 px-6 py-2 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                WhatsApp Now
              </button>
            </a>
          </nav>

          <a href="https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!" target="_blank" rel="noopener noreferrer" className="lg:hidden">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-300">
              Register
            </button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* ✅ Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/20">
    <MarqueeBanner />
  </div>

  {/* ✅ Floating Animated Blobs */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  {/* ✅ Main Content */}
  <div className="relative z-10 container mx-auto px-4 max-w-7xl">
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
      
      {/* ✅ Left Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Unlock Your Potential with Our{" "}
          <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            Exclusive Webinar
          </span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
          Join industry experts for an immersive experience designed to elevate your skills and transform your career trajectory.
        </p>

        {/* ✅ CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              WhatsApp Now
            </button>
          </a>

          <button
            onClick={() =>
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }
            className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* ✅ Right Image Block */}
      <div className="flex-1 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <div className="relative flex items-center justify-center">
          {/* Background Glow */}
          <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-radial from-pink-500 via-purple-500 to-transparent blur-2xl opacity-70 z-0"></div>
          {/* Image */}
          <img
            src="https://iaakash.com/roohiitkansal/wp-content/uploads/2025/06/Untitled-design-11.png"
            alt="Webinar Illustration"
            className="relative w-full h-auto rounded-2xl z-10"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Countdown Timer */}
      <section className="py-12 relative bg-gray-800 border-y border-gray-700 overflow-hidden">
  {/* Bright radial glow using inline style */}
  <div
    className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 z-0 pointer-events-none"
    style={{
      background: 'radial-gradient(circle, rgba(236,72,153,0.6), rgba(168,85,247,0.3), transparent)',
    }}
  ></div>

  {/* Background tint layer (unchanged) */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 z-0"></div>

  <div className="container mx-auto px-4 relative z-10 max-w-7xl">
    <div className="text-center mb-8">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">Registration Close In</h3>
      <p className="text-gray-400">Don't miss your chance to transform your career!</p>
    </div>

    <div className="flex justify-center items-center gap-4 sm:gap-8">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Seconds", value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 sm:p-6 min-w-[80px] sm:min-w-[100px] shadow-xl border border-gray-700">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
              {String(item.value).padStart(2, '0')}
            </div>
          </div>
          <div className="text-gray-400 mt-2 text-sm font-medium">{item.label}</div>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-8">
      <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold text-sm animate-pulse">
        🔥 Only 25 Seats Left
      </span>
    </div>
  </div>
</section>
 <section id="about" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-4">
              About the Webinar
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the key areas we'll cover to transform your remote work journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPoints.map((point, index) => (
              <div key={index} className="relative group">
                {/* Consistent gradient for hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>

                <div className="relative z-10 bg-gray-800 rounded-xl p-6 h-full border border-gray-700 group-hover:border-pink-500 transition-colors duration-300"> {/* Changed to cyan-500 border on hover */}
                  <div className="mb-4 p-3 bg-gray-700 rounded-lg w-fit">
                    {point.icon}
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-3">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
           {/* suitable for */}

<section className="relative py-20 bg-gray-950 overflow-hidden">
  {/* Gradient Glow */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-pink-500 via-purple-500 to-transparent blur-3xl opacity-30 pointer-events-none"></div>

  <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
    <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-10">
      💬 Suitable For?
    </h2>

    {/* Tags */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {["Students", "Working Professionals", "Freelancers", "Housewife", "Dreamers"].map((item, idx) => (
        <span
          key={idx}
          className="px-6 py-2 border border-purple-500 text-purple-300 rounded-full text-base sm:text-lg font-medium bg-white/5 backdrop-blur-md hover:bg-purple-600/20 transition duration-300"
        >
          {item}
        </span>
      ))}
    </div>

   
  </div>
</section>
 <div id='what-you-will-learn'><WhatYouWillLearn /></div>


      {/* Video Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 to-pink-900/10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-4">
            Our Exclusive Webinar Demo
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your journey from dreams to reality starts here! Come now and reshape your future with the strategies that pay.
          </p>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1">
                 
                  </div>
                </div>
                <p className="text-gray-400">Video Preview Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a href="https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!" target="_blank" rel="noopener noreferrer">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                WhatsApp Now!
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
     

      {/* Gallery */}
     <section id="gallery" className="py-16 bg-gray-800 relative overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10 max-w-7xl">
    <Gallerysection />
  </div>
</section>


      {/* About the Mentor */}
     <section id="mentor" className="py-20 bg-black relative overflow-hidden">
  {/* Ambient radial glows */}
  <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#9333ea,_transparent)] blur-[100px] opacity-30 z-0 animate-pulse"></div>
  <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-[radial-gradient(circle,_#ff00cc,_transparent)] blur-[100px] opacity-30 z-0 animate-pulse"></div>

  <div className="relative z-10 container mx-auto px-4 max-w-7xl">
    {/* Section Title */}
    <div className="text-center lg:text-left mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          The Mind Behind The Strategies
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-300 font-medium">
        Learn from someone who's lived it  not just read about it.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center gap-10">
      {/* Image with grid + glow effect */}
      <div className="relative group w-80 h-96">
        {/* Grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#6b21a8_0%,transparent_70%)] rounded-2xl blur-[2px] opacity-25 z-[-1] animate-fadeIn"></div>

        {/* Animated blob glow */}
        <div className="absolute -top-10 -left-10 w-[180px] h-[180px] bg-gradient-to-br from-purple-500 via-pink-500 to-transparent rounded-full blur-3xl opacity-40 z-[-1] animate-pulse"></div>

        {/* Image */}
        <img
          src="/workshop2.jpeg"
          alt="Aman Baisla"
          className="relative w-full h-full object-cover rounded-2xl shadow-[0_20px_60px_rgba(255,255,255,0.1)] border border-white/10"
        />
      </div>

      {/* Mentor Details */}
      <div className="flex-1 text-center lg:text-left">
        <h3 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text">
            Divyanshu Verma
          </span>
        </h3>

        <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
          <span className="font-semibold text-white"> Divyanshu Verma</span> is an internet personality and <span className="font-semibold text-white">entrepreneur</span>, known for building multiple successful income streams <span className="font-semibold text-white"> and generating consistent 6-figure monthly earnings by the age of 22.
</span>  <span className="font-semibold text-white">By this age,</span> he had already empowered over <span className="font-semibold text-white">1,000 </span> students to start earning online and take control of their financial future.
        </p>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-4">
           In just 10 months he generated <span className="font-semibold text-white"> ₹3 million in revenue, with ₹2.5 million in profit</span>  all by sharing real, <span className="text-cyan-300 font-semibold">practical skills that deliver results</span>.
        </p>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
          This is not about theories or empty promises. <span className="text-white font-semibold">It’s about raw experience, proven strategies, and results that speak for themselves.</span> That’s what Divyanshu delivers  raw, real, and truly effective.
        </p>

        {/* Badges */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
          <span className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
           Earn 2.5 Million in 10 Months
          </span>
          <span className="bg-pink-600/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium">
            100+ Lives Impacted
          </span>
          <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
            Remote Work Expert
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Achievements */}

<section id="achievements" className="py-12 relative bg-gray-800 border-y border-gray-700 overflow-hidden">
  {/* Radial glow background */}
  <div
    className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 z-0 pointer-events-none"
    style={{
      background:
        'radial-gradient(circle, rgba(236,72,153,0.6), rgba(168,85,247,0.3), transparent)',
    }}
  ></div>

  {/* Tint gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-blue-500/5 z-0"></div>

  <div className="container mx-auto px-4 relative z-10 max-w-7xl">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text mb-4">My Achievements</h2>
      <p className="text-gray-300 mt-2 max-w-xl mx-auto">
        Celebrating milestones and the incredible journey we’ve had so far.
      </p>
    </div>

    {/* Achievement Cards */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
      {/* Image 1 + Text */}
      <div className="bg-gray-900/40 p-6 rounded-2xl text-center shadow-lg max-w-sm">
        <img
          src="/achievement1.jpg"
          alt="Achievement 1"
          className="mx-auto mb-4 rounded-xl"
        />
        <h3 className="text-xl text-white font-semibold mb-2">Achieved ₹5 lakh Milestone</h3>
        <p className="text-gray-400 text-sm">
 Successfully earned ₹5 lakh with IDigitalPreneur by leveraging affiliate marketing.
        </p>
      </div>

      {/* Image 2 + Text */}
      <div className="bg-gray-900/40 p-6 rounded-2xl text-center shadow-lg max-w-sm">
        <img
          src="/achievement2.jpg"
          alt="Achievement 2"
          className="mx-auto mb-4 rounded-xl"
        />
        <h3 className="text-xl text-white font-semibold mb-2">Crossed ₹10 Lakh & Earned Awards</h3>
        <p className="text-gray-400 text-sm">
          Also Achieved 1 million+ revenue through IDigitalPreneur using affiliate marketing  in just 6 months!
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400">
              See what our participants are saying
            </p>
          </div>

          <Testimonial /> {/* Ensure Testimonial component aligns with this palette */}
        </div>
      </section>

 

      {/* FAQs */}
      <section id="faqs" className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Consistent use of main palette colors for background blurs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text  mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about the webinar
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors duration-300 overflow-hidden" 
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-700 transition-colors duration-300"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <span className="font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 flex-shrink-0  ${expandedFAQ === index ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedFAQ === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="registration" className="py-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl  font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let this opportunity slip away. Join thousands who have already transformed their lives through remote work mastery.
          </p>

          <a href="https://wa.me/917007882824?text=Hi!%20I'm%20interested%20in%20the%20Skill%20Growth%20%26%20Earn%20from%20Home.%20Please%20share%20more%20details%20about%20the%20webinar.%20Thanks!" target="_blank" rel="noopener noreferrer">
            <button className="group relative px-12 py-6 text-white font-bold text-xl rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-pink-500/25">
              <span className="relative z-10">Register Now on WhatsApp</span>
              {/* This hover effect is good, consistent with primary gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>

          <div className="mt-6 flex justify-center items-center gap-4 text-sm text-gray-400">
            <span>✅ Free Registration</span>
            <span>✅ Instant Access</span>
            <span>✅ Limited Seats</span>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
}
