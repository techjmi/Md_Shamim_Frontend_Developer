import graph from '../assets/graph.png';
import tech from '../assets/tech.png';
import tools from '../assets/Tools.png';
import wallet from '../assets/wallet.png';

export default function AboutSection() {
  return (
    <div className="text-white pt-[72px] md:h-[auto]">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-[var(--fontsize40)] tracking-[var(--letterspacing-08)] text-center underline-from-font">
          About EthAI
        </h2>

        <p className="text-gray-400 mb-8 pt-[48px] md:text-center">
          At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools <br />
          that help traders keep up with all new market trends, track top traders’ movements.
        </p>
        <div className="flex mx-auto text-center justify-center">
        <button className="w-[108px] h-[40px] rounded-[12px] py-[10px] bg-white text-black shadow-[0px_0px_1px_1px_#4CDDFD_inset]">
          Learn More
        </button>
        </div>
      
      </div>
      <div className="mt-[60px]">
        <div className="rounded-[20px] mx-4 md:mx-auto max-w-[744px] py-[24px] md:py-[48px] px-[20px] md:px-[60px] bg-[#08252A]">
          <div className="flex flex-col gap-[30px]">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-[36px]">
              <div className="flex-1 md:text-left">
                <img src={graph} alt="Stay Ahead" className="md:mx-0" />
                <h1 className="font-medium text-lg font-mono mt-4">Stay Ahead</h1>
                <p className="text-slate-500 mt-2">
                  No more guesswork—get clear, trustable insights.
                </p>
              </div>
              <div className="flex-1 md:text-left">
                <img src={wallet} alt="Know Your Assets" className="md:mx-0" />
                <h1 className="font-medium text-lg font-mono mt-4">Know Your Assets</h1>
                <p className="text-slate-500 mt-2">
                  Always stay on top of how your investments are performing.
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-[36px]">
              <div className="flex-1 md:text-left">
                <img src={tools} alt="Simple Not Overwhelming" className="md:mx-0" />
                <h1 className="font-medium text-lg font-mono mt-4">Simple Not Overwhelming</h1>
                <p className="text-slate-500 mt-2">
                  Our tools are designed to make complex market analysis easy to understand and act on.
                </p>
              </div>
              <div className="flex-1 md:text-left">
                <img src={tech} alt="Constantly Improving" className="md:mx-0" />
                <h1 className="font-medium text-lg font-mono mt-4">Constantly Improving</h1>
                <p className="text-slate-500 mt-2">
                  We’re constantly improving, adding new features to help you make the most informed decisions possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
