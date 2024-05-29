import React from "react";
// import { menu } from "../Data";

const Menu = () => {
  var menu=['curry','paneer','naan','chicken'];

  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our menu
        </h1>

        <div className="box-container">
          {menu.map((elem,ind) => (
            <div className="box">
              <h3>Item {ind}</h3>
              <div className="price">
                100 Rs
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;