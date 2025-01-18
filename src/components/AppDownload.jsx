import React from "react";

const AppDownload = () => {
  return (
    <div className="flex mx-auto justify-center pb-40">
   
   <div className=" flex mx-auto flex-col items-center px-[32px] py-[50px] rounded-[16px] w-[800px] shadow-[0px_1px_25px_0px_#1DCEF240_inset]  bg-[var(--color-cyan-1270,#0C2B2FB2)]">
    {/* <h1 className="text-center">Explore Our dApp</h1> */}
    <h2 className="text-white text-2xl font-semibold mb-12 text-center">
    Explore Our <span className="text-blue-400">dApp</span>
</h2>
<p className="tracking-[1px] text-center text-white font-sans">EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
<div className="">
<button className="mt-20 w-[108px] h-[40px] rounded-[12px] py-[10px] text-center bg-white text-black shadow-[0px_0px_1px_1px_#4CDDFD_inset]">
            Open dApp
          </button>
</div>

  </div>

    </div>
  );
};

export default AppDownload;
