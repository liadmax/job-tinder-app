import React from "react";
import { Chat, Div, Logo, Profile } from "./HeaderElements";

const Header = () => {
  return (
    <Div>
      <div>
        <Profile />
      </div>

      <div>
        <Logo />
      </div>
      <div>
        <Chat />
      </div>
    </Div>
  );
};

export default Header;
