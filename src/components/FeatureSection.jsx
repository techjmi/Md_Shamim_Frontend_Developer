import bgImage from '../assets/bg.png';
import glass from '../assets/Group.png'
import arrow from '../assets/arrow.png.png'
import LayeredSquare from './LayeredSquare';
export default function FeaturesSection() {
  return (
    <div className=" text-white md:py-12 md:px-[120px] md:pt-[32px] md:pb-[40px]  flex flex-col gap-[16px]">
      <h1 className='md:hidden text-center font-semibold text-2xl mb-2'>Our Features</h1>
      <div className="flex md:flex-row flex-col gap-[16px]">
        <div className="w-full mx-2px md:mx-0 md:w-[280px] md:h-[430px] bg-[var(--color-cyan-1270,#0C2B2FB2)] rounded-tl-[40px] rounded-[8px] md:px-[37px] md:pt-[10px] md:pb-[37px] flex flex-col justify-between">
          <div className="flex justify-center md:justify-start">
            <LayeredSquare />
          </div>
          <div className="">
            <h1 className='font-semibold text-lg text-center'>Trade Optimizer</h1>
            <p className='mt-3 text-center text-slate-500'>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
          </div>
        </div>
        <div className="flex flex-col gap-[16px] md:w-[608px] w-full mx-2 md:mx-0">
          <div className="mtop p-[15px] h-[150px] rounded-[16px]  bg-[var(--color-cyan-1270,#0C2B2FB2)] flex md:flex-row flex-col relative">
            <div className="w-[360px]">
            <h1 className='font-semibold text-lg'> Market Insight</h1>
            <p className='text-justify mt-4 text-slate-500'>Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
            </div>
            <div className="absolute bottom-0 right-1">
              <img src={arrow} />
            </div>
          </div>
          <div className="hidden md:flex p-[32px] rounded-[16px] h-[263px] shadow-[0px_1px_25px_0px_#1DCEF240_inset]  bg-[var(--color-cyan-1270,#0C2B2FB2)]">
          </div>
        </div>

        <div className="md:w-[280px] md:h-[430px] bg-[var(--color-cyan-1270,#0C2B2FB2)] rounded-tr-[40px] rounded-[8px] md:px-[20px] md:pt-[15px] md:pb-[37px] w-full flex md:flex-col flex-col-reverse ">
        <img src={bgImage} style={{height:"200px", width:"auto"}} className='self-center'/>
        <div className="h-[181px] p-3 mt-3">
          <h1 className='text-lg font-medium font-serif text-center'>Risk Guard</h1>
          <p className='text-center text-slate-500'>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
        </div>
        </div>
      </div>

      <div className="flex md:flex-row gap-[16px] md:h-[240px] md:w-[1200px] flex-col">
        <div className="right p-[32px] rounded-br-[40px] bg-[var(--color-cyan-1270,#0C2B2FB2)] md:w-[444px] md:h-[240px] rounded-bl-[40px] rounded-[16px]">
          <div className="md:w-[254px] w-full">
            <h1 className='text-lg font-medium font-serif'>
              Portfolio Sync
            </h1>
            <p className='text-slate-500 mt-5'>Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
          </div>
        </div>
        <div className=" p-[32px] rounded-br-[40px] rounded-[16px] bg-[var(--color-cyan-1270,#0C2B2FB2)] md:w-[695px] flex justify-between relative w-full">
          <div className="md:w-[299px]">
            <h1 className='text-lg font-medium font-serif'>Opportunity Scout</h1>
            <p className='text-slate-500 mt-5'>Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
          </div>
          <div className="z-20 md:top-0 absolute md:left-[550px] bottom-0 right-1">
            <img src={glass} />
          </div>
        </div>
      </div>
    </div>
  );
}