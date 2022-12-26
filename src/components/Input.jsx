import React from "react";
import Attach from "./../img/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type something" />
      <div className="send">
        <img src="" alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Attach} alt="" />
        </label>
        <button>Send it</button>
      </div>
    </div>
  );
};

export default Input;
