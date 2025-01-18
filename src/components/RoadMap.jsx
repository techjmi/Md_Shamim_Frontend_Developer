export default function RoadMap() {
  const items = [
    "Launch of EthAi: Officially",
    "Development of Core AI Agents",
    "User Onboarding Campaign",
    "Community Engagement Initiatives",
  ];
  const items2 = [
    "Introduction of Advanced AI Agents",
    "Strategic Partnerships",
    "User Interface Optimization",
    "Comprehensive Marketing Campaign",
  ];
  const url =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fnature-background&psig=AOvVaw3eBn0abbCJXAQSFGa2wy1s&ust=1737266558871000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPimx7PM_ooDFQAAAAAdAAAAABAJ";
  return (
    <div className="bg-[#00161D] text-white pt-16 hidden md:flex">
      <h1 className="font-mono text-center font-extrabold text-xl">Roadmap</h1>
      <div className="box1">
        <div className="w-[1200px] my-[64px] mx-[120px] box1sub flex flex-row justify-between p-[56px]">
          <div className="relative w-[50%] flex flex-col gap-[16px]">
            {/* <span className="bg-white text-black px-[12px] self-start py-[6px]"><span>Phase 1</span></span> */}
            <div className="bg-white px-3 py-1 rounded-sm text-black inline-block mb-6 text-s self-start">
              PHASE 1
            </div>
            {/* <h1 className="font-extrabold font-mono">Kicking off</h1> */}
            <h2 className="text-white text-2xl font-semibold mb-12">
              Kicking off
            </h2>
            <div className="flex flex-col items-start space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full border-white border-[1px]  text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  {/* List item text */}
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className=" relative w-[50%]">
            <div
              className="w-full h-[412px] bg-cover bg-center"
              style={{
                backgroundImage: `
      url('${url}'), 
      linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
      linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
      linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)
    `,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="box2 h-[640px]">
        <div className="w-[1200px] my-[64px] mr-[120px] ml-[20px] flex flex-row gap-[25px]">
          {/* Left side with PREVIEW text and particles */}
          <div
            style={{
              position: "relative",
              width: "50%",
              overflow: "hidden",
            }}
          >
            {/* PREVIEW text */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "100px",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.05)",
                letterSpacing: "20px",
                fontFamily: "Arial, sans-serif",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              PREVIEW
            </div>

            {/* Particles only on left side */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "2px",
                  height: "2px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  opacity: 0.2,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Right side content */}
          <div
            style={{
              width: "50%",
              padding: "0 80px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              {/* Phase tag */}
              <div className="bg-white px-3 py-1 rounded text-black inline-block mb-6 text-s">
                PHASE 2
              </div>
              {/* Title */}
              <h2 className="text-white text-2xl font-semibold mb-12">
                Bigger Insights
              </h2>
              {/* List items */}
              <div className="flex flex-col items-start space-y-4">
                {items2.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center rounded-full border-white border-[1px]  text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    {/* List item text */}
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* box3 start */}
      <div className="h-[640px]">
        <div className="w-[1200px] my-[64px] mx-[120px] flex flex-row gap-[25px] justify-between px-[56px]">
          <div className="flex flex-col items-start space-y-4">
            <div className="bg-white px-3 py-1 rounded-sm text-black inline-block mb-6 text-s">
              PHASE 3
            </div>
            <h2 className="text-white text-2xl font-semibold mb-12">
              Bigger Insights
            </h2>

            {items2.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center rounded-full border-white border-[1px]  text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {/* List item text */}
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              position: "relative",
              width: "50%",
              overflow: "hidden",
            }}
          >
            {/* PREVIEW text */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "100px",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.05)",
                letterSpacing: "20px",
                fontFamily: "Arial, sans-serif",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              PREVIEW
            </div>

            {/* Particles only on left side */}
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "2px",
                  height: "2px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  opacity: 0.2,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
