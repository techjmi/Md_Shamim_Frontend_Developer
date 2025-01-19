import NavBar from "./NavBar";
import grad from '../assets/gradient.png';

export default function HeroSection() {
  return (
    <div className="">
       <div
      className="text-white bg-none md:bg-cover lg:bg-[url('./assets/gradient.png')]" 
    >
         <NavBar />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            When Innovation <br /> Meets <span className="text-cyan-500">Investment</span>
          </h1>
          <p className="mt-4 text-center text-lg">
            Empowering Trading Through Advanced Technology
          </p>
          <div className="flex justify-center mt-6">
            <button className="buttons px-6 py-2 text-white focus:outline-none buttons rounded-[12px]">
              Open dApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
