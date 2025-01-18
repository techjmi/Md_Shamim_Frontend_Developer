import { data } from "../assets/data";
import Donut from "./Donut";
export default function TokeSection() {
  return (
    <div className=" text-white md:py-16 py-[8px]">
       <h1 className="font-mono text-center font-extrabold text-xl">Tokenomics</h1>
      <div className="md:w-[1200px] w-full my-[32px] md:my-[64px] md:mx-[120px] mx-[12px] flex md:flex-row flex-col gap-[25px]">
        <div className="md:flex md:justify-center md:items-center hidden">
          <Donut data={data} width={600} height={600} />
        </div>
        <div className="md:w-[512px] w-full flex flex-col gap-6 mx-0">
          <div className="boxToken md:w-[538px] w-full">
          <div className="flex flex-col gap-4">
  <div className="flex mb-2">
    <span className="font-semibold text-white w-1/2">Name</span>
    <span className="text-white w-1/2">: EthAI</span>
  </div>
  <div className="flex mb-2">
    <span className="font-semibold text-white w-1/2">Token</span>
    <span className="text-white w-1/2">:$EthAI </span>
  </div>
  <div className="flex mb-2">
    <span className="font-semibold text-white w-1/2">Token Standard</span>
    <span className="text-white w-1/2">: ERC20</span>
  </div>
  <div className="flex">
    <span className="font-semibold text-white w-1/2">Blockchain</span>
    <span className="text-white w-1/2">: Ethereum</span>
  </div>
  <div className="flex">
    <span className="font-semibold text-white w-1/2">Total Supply</span>
    <span className="text-white w-1/2">: 100 Million</span>
  </div>
  <div className="flex">
    <span className="font-semibold text-white w-1/2">Tax</span>
    <span className="text-white w-1/2">: 5%/5%</span>
  </div>
</div>

          </div>
          <div className="boxToken items-start">
          {data.map((item, index) => (
        <div className="flex" key={index}>
          <span className="font-semibold text-white w-1/2">{item.name}</span>
          <span className="text-white w-1/2">: {item.value}</span>
        </div>
      ))}
          </div>
        </div>
       
      </div>
    </div>
  );
}
