export default function FeaturesSection() {
  const features = [
    {
      title: "Trade Optimizer",
      description:
        "Streamline your trading strategies with AI-based optimization.",
    },
    {
      title: "Market Insight",
      description: "Stay updated with the latest trends and analytics.",
    },
    {
      title: "Risk Guard",
      description: "Secure investments with intelligent risk management.",
    },
    {
      title: "Portfolio Sync",
      description: "Integrate and monitor your portfolio seamlessly.",
    },
    {
      title: "Opportunity Scout",
      description: "Discover lucrative investment opportunities in real-time.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-[120px] pt-[32px] pb-[40px]  flex flex-col gap-[16px]">
      <div className="flex flex-row gap-[16px]">
        <div className="w-[280px] h-[415px] bg-[var(--color-cyan-1270,#0C2B2FB2)] rounded-tl-[40px] rounded-[8px] px-[37px] pt-[72px] pb-[37px]">
          right part
        </div>
        <div className="m flex flex-col gap-[16px] w-[608px]">
          <div className="mtop p-[32px] h-[108px] rounded-[16px]  bg-[var(--color-cyan-1270,#0C2B2FB2)]">
            this is top middle
          </div>
          <div className="mtbot p-[32px] rounded-[16px] h-[290px] shadow-[0px_1px_25px_0px_#1DCEF240_inset]  bg-[var(--color-cyan-1270,#0C2B2FB2)]">
    
            this top bottom
          </div>
        </div>

        <div className="w-[280px] h-[415px] bg-[var(--color-cyan-1270,#0C2B2FB2)] rounded-tr-[40px] rounded-[8px] px-[37px] pt-[72px] pb-[37px]">
          right part
        </div>
      </div>

      <div className="bottom flex flex-row gap-[16px] h-[240px] w-[1200px">
        <div className="right p-[32px] rounded-br-[40px] bg-[var(--color-cyan-1270,#0C2B2FB2)] w-[444px] h-[240px] rounded-bl-[40px] rounded-[16px]">
          this is bottom right part
        </div>
        <div className="left p-[32px] rounded-br-[40px] rounded-[16px] bg-[var(--color-cyan-1270,#0C2B2FB2)] w-[738px]">
          this is bottom left part
        </div>
      </div>
    </div>
  );
}
