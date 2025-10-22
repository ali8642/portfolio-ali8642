import React from "react";
import "../App.css"
import Sidebar from "./Sidebar";
import BlackFireCursor from "./BlackFireCursor"


const BaseLayout = () => {
  return (
    <>
      <div>
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
