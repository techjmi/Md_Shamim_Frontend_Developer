import roadImg from "../assets/road.png";
import preview from "../assets/preview.png";
import preview2 from '../assets/prview2.png'

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

  return (
    <div className="bg-[#00161D] text-white pt-16 flex flex-col">
      <h1 className="font-mono text-center font-extrabold text-xl md:text-2xl">
        Roadmap
      </h1>
      <div className="box1">
        <div className="w-full max-w-[1200px] mx-auto my-16 px-4 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="relative w-full md:w-1/2 flex flex-col gap-4">
            <div className="bg-white px-3 py-1 rounded-sm text-black inline-block mb-6 text-s self-start">
              PHASE 1
            </div>
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">
              Kicking off
            </h2>
            <div className="flex flex-col items-start space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full border-white border-[1px] text-white">
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
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <div
              className="w-full h-[300px] md:h-[412px] bg-cover bg-center"
              style={{
                backgroundImage: `
                  linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%),
                  linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%),
                  linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%),
                  url('${roadImg}')
                `,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="box2 h-auto">
        <div className="w-full max-w-[1200px] mx-auto my-16 px-4 flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/2">
                <div
              className="w-full h-[300px] md:h-[412px] bg-cover bg-center"
              style={{
                backgroundImage: `
                  linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%),
                  linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%),
                  linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%),
                  url('${preview2}')
                `,
              }}
            ></div>

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
          <div className="w-full md:w-1/2 px-4 flex flex-col items-start">
            <div className="bg-white px-3 py-1 rounded text-black inline-block mb-6 text-s">
              PHASE 2
            </div>
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">
              Bigger Insights
            </h2>
            <div className="flex flex-col items-start space-y-4">
              {items2.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full border-white border-[1px] text-white">
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
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="box3 h-auto">
        <div className="w-full max-w-[1200px] mx-auto my-16 px-4 flex flex-col md:flex-row gap-8 justify-between">
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-4">
            <div className="bg-white px-3 py-1 rounded-sm text-black inline-block mb-6 text-s">
              PHASE 3
            </div>
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-6">
              Bigger Insights
            </h2>
            {items2.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center rounded-full border-white border-[1px] text-white">
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
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="relative w-full md:w-1/2">
            <div
              className="w-full h-[300px] md:h-[412px] bg-cover bg-center"
              style={{
                backgroundImage: `
                  linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%),
                  linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%),
                  linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%),
                  url('${preview}')
                `,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
