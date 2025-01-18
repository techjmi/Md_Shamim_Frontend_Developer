import NavBar from "./NavBar";
export default function HeroSection() {
    return (
    //     
    <div className=" bg-black">
      {/* Gradient Background Effect */}
      

      {/* Content */}
      <div className="relative z-10">
<NavBar />
<div className="relative bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          When Innovation <br /> Meets <span className="text-cyan-500">Investment</span>
        </h1>
        <p className="mt-4 text-center text-lg">
          Empowering Trading Through Advanced Technology
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
       
      </div>
    </div>
      
    );
  }
  