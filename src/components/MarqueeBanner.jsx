export default function MarqueeBanner() {
  return (
    <div className="mt-8 flex  justify-center">
      <div className="relative w-[300px] h-10 overflow-hidden rounded-full bg-purple-600/20">
        <div className="absolute flex animate-marquee whitespace-nowrap">
          <span className="text-white text-sm font-medium pt-2 ml-2">
            🚀 1000+ People Already Registered ❤️ 
          </span>
          
          <span className="text-white text-sm font-medium pt-2 ml-2">
            🚀 1000+ People Already Registered ❤️
          </span>
        </div>
      </div>
    </div>
  );
}
