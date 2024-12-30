import React from "react";
import Bras from "../components/Collections/Bras";

const Collections: React.FC = () => {
  return (
    <div>
      <div className="h-[500px] bg-blue-400">
        <img src="" alt="" />
      </div>
      <div className="flex ">
        <div className="w-[400px] bg-slate-600 ">sidebar</div>
        <div className="flex-1 bg-red-500">
          <Bras />
        </div>
      </div>
    </div>
  );
};

export default Collections;
