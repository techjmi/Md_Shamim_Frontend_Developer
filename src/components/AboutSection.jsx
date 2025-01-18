export default function AboutSection() {
    return (
      <div className=" text-white pt-[72px] h-[756px]">
        <div className="container mx-auto px-4 text-center">
        <h2 className=" font-bold  text-[var(--fontsize40)]tracking-[var(--letterspacing-08)] text-center underline-from-font">
  About EthAI
</h2>

          <p className="text-gray-400 mb-8 text-center pt-[48px]">
          At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools <br />
          that help traders keep up with all new market trends, track top traders’ movements.
          </p>
          <button className="w-[108px] h-[40px] rounded-[12px] py-[10px] text-center bg-white text-black shadow-[0px_0px_1px_1px_#4CDDFD_inset]">
            Learn More
          </button>
        </div>
        <div className="mt-[60px]">
          <div className="w-[744px] rounded-[20px]  mx-[300px] h-[400px] py-[48px] px-[60px]">
            <div className="flex flex-col gap-[16px] mx-auto w-[617px]">
            <div className="top flex flex-row gap-[36px] h-[120px] w-[617px]">
          <div className="r1 relative w-[50%] pr-[20px]">
            <h1>image icons will </h1>
            <h1>Stay Ahead</h1>
            <p className="">No more guesswork—get clear,trustable insights.</p>
          </div>
          <div className="relative w-[50%]">
          <h1>Simple Not Overehilming</h1>
          <p className="">Our tools are designed to make complex market analysis easy to understand and act on.</p>
          </div>
         </div>
         <div className="left flex flex-row relative h-[144px] gap-[36px]">
          <div className="l1 gap-[36px] pr-[40px] relative w-[50%] ">
          <h1>Know Your Assets</h1>
          <p className="">Always stay on top of how your investments are performing.</p>
          </div>
          <div className="l2 relative w-[50%]">
            <h1></h1>
            <p>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
          </div>
         </div>
            </div>
          </div>
        </div>
        {/* <Circle /> */}
      </div>
    );
  }
  