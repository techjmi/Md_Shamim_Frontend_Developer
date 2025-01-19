import React from "react";

const AppDownload = () => {
  return (
    <div className="flex justify-center pb-10 md:pb-40 mx-auto">
      <div className="flex mx-auto flex-col items-center px-6 py-8 md:px-[32px] md:py-[50px] rounded-[16px] w-[96%] max-w-[800px] shadow-md md:shadow-[0px_1px_25px_0px_#1DCEF240_inset] bg-[var(--color-cyan-1270,#0C2B2FB2)]">
        <h2 className="text-white text-lg md:text-2xl font-semibold mb-6 md:mb-12 text-center">
          Explore Our <span className="text-blue-400">dApp</span>
        </h2>
        <p className="tracking-[0.5px] md:tracking-[1px] text-sm md:text-base text-center text-white font-sans">
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.
        </p>
        <div>
          <button className="mt-8 md:mt-20 w-[100px] md:w-[108px] h-[36px] md:h-[40px] rounded-[12px] py-2 md:py-[10px] text-center bg-white text-black shadow-sm md:shadow-[0px_0px_1px_1px_#4CDDFD_inset]">
            Open dApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
