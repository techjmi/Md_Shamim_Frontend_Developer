const LayeredSquare = () => {
    return (
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Outer glow */}
        {/* <div className="absolute w-40 h-40 bg-cyan-400 rounded-2xl opacity-20 blur-xl"></div> */}
        
        {/* Outer square */}
        {/* <div className="absolute w-36 h-36 bg-teal-600 rounded-xl"></div> */}
        
        {/* Middle square */}
        <div className="absolute w-20 h-20 bg-[#15B6C9] rounded-[16px] border-[6px] border-[#0E8B9A]"></div>
        
        {/* Inner square outline */}
        <div className="absolute w-12 h-12 border-2 border-white rounded-md"></div>
      </div>
    );
  };
  
  export default LayeredSquare;
