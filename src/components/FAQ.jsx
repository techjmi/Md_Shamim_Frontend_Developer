import React from "react";

const FAQ = () => {
  return (
    <div className="">
        {/* <div className=""> */}
        <div className="flex md:flex-row flex-col justify-between items-start md:w-[1200px] md:my-[64px] md:mx-[120px] md:p-[56px] w-full my-3 mx-5">
      {/* Left Section */}
      <div className="flex-1 mr-5">
        <h2 className=" text-white" style={{fontSize:'40px'}}>
          Frequently Asked Questions
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex-1 text-white mt-10 md:mt-0">
        <ul className="list-none p-0">
          <li className="flex items-center mb-3">
            <span className="inline-block w-5 h-5 mr-2 text-center font-bold text-base leading-5">
              +
            </span>
            <span>Lorem ipsum dolor sit amet?</span>
          </li>
          <li className="flex items-center mb-3">
            <span className="inline-block w-5 h-5 mr-2 text-center font-bold text-base leading-5">
              +
            </span>
            <span>Consectetur adipiscing elit?</span>
          </li>
          <li className="flex items-center mb-3">
            <span className="inline-block w-5 h-5 mr-2 text-center font-bold text-base leading-5">
              +
            </span>
            <span>Nullam malesuada enim ut velit?</span>
          </li>
          <li className="flex items-center mb-3">
            <span className="inline-block w-5 h-5 mr-2 text-center font-bold text-base leading-5">
              +
            </span>
            <span>Phasellus et ligula euismod?</span>
          </li>
          <li className="flex items-center mb-3">
            <span className="inline-block w-5 h-5 mr-2 text-center font-bold text-base leading-5">
              +
            </span>
            <span>Curabitur eget nisl tincidunt?</span>
          </li>
        </ul>
      </div>
    </div>
        {/* </div> */}
    </div>
  );
};

export default FAQ;
