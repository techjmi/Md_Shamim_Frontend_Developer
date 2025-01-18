import graph from '../assets/graph.png'
import tech from '../assets/tech.png'
import tools from '../assets/Tools.png'
import wallet from '../assets/wallet.png'
export default function AboutSection() {
    return (
      <div className=" text-white pt-[72px] md:h-[756px]">
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
          <div className="md:w-[744px] rounded-[20px] mx-2 md:mx-[300px] md:h-[400px] md:py-[48px] md:px-[60px] px-[30px] py-[24px] bg-[#08252A]">
          <div className="flex flex-col gap-[30px] mx-auto md:w-[617px] w-full">
  <div className="top flex md:flex-row flex-col gap-[36px] md:h-[120px] w-[617px]">
    
    {/* Stay Ahead Section */}
    <div className="r1 relative w-[50%] pr-[20px]">
      <img src={graph} alt="Stay Ahead" />
      <h1 className="font-medium text-lg font-mono mt-2">Stay Ahead</h1>
      <p className="text-slate-500 mt-4">No more guesswork—get clear, trustable insights.</p>
    </div>
    
    {/* Know Your Assets Section */}
    <div className="l1 relative w-[50%] pr-[20px]">
      <img src={wallet} alt="Know Your Assets" />
      <h1 className="font-medium text-lg font-mono mt-2">Know Your Assets</h1>
      <p className="text-slate-500 mt-4">Always stay on top of how your investments are performing.</p>
    </div>
    
  </div>
  
  <div className="left flex md:flex-row flex-col relative md:h-[144px] gap-[36px]">
    
    {/* Simple Not Overwhelming Section */}
    <div className="relative md:w-[50%] pr-[20px]">
      <img src={tools} alt="Simple Not Overwhelming" />
      <h1 className="font-medium text-lg font-mono mt-2">Simple Not Overwhelming</h1>
      <p className="text-slate-500 mt-4">Our tools are designed to make complex market analysis easy to understand and act on.</p>
    </div>
    
    {/* Constantly Improving Section */}
    <div className="l2 relative md:w-[50%] pr-[20px]">
      <img src={tech} alt="Constantly Improving" />
      <h1 className="font-medium text-lg font-mono mt-2">Constantly Improving</h1>
      <p className="text-slate-500 mt-4">We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
    </div>
    
  </div>
</div>
          </div>
        </div>
        {/* <Circle /> */}
      </div>
    );
  }
  