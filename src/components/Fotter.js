import React from "react";

const Fotter = () => {
  return (
    <div className="  flex flex-col absolute text-white  bg-black mt-[700px] w-full h-[165px] opacity-80">
      <div className="pl-28 pt-4" >
        <p>Questions? Call 000-800-919-1694</p>
      </div>
      <div className="flex justify-evenly pt-3">
      <div className="flex flex-col">
        <p className="pb-2">FAQ</p>
        <p>Cookie Preferences</p>
      </div>
      <div  className="flex flex-col">
        <p  className="pb-2">Help Centre</p>
        <p>Corporate Information</p>
      </div>

      <div  className="flex flex-col">
        <p  className="pb-2">Terms of Use</p>
      </div>

      <div  className="flex flex-col">
        <p  className="pb-2">Privacy</p>
        <button className="border border-white p-2 m-2 bg-red-700 rounded-lg">English</button>
      </div>
      </div>
    </div>
  );
};

export default Fotter;
