import React from "react";

function Header(props) {
  console.log("Header :",props);

  return (
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
        className="cart-wrapper"
      />
    </div>
  );
}

export default Header;
