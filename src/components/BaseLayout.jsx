import React from "react";
import "../App.css"
import Sidebar from "./Sidebar";
import BlackFireCursor from "./BlackFireCursor"


const BaseLayout = () => {
  return (
    <>
      <div className="flex flex-column flex-wrap w-[100%] h-[100%] justify-between z-10">
        <section className="blobMain">
          <div className="container">
            <div className="blob"></div>
          </div>
        </section>
      </div>

      <Sidebar />
      <BlackFireCursor />
    </>
  );
};

export default BaseLayout;
