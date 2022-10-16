import React from "react";
import { H3 ,Chat, Div, Logo, Profile , Boss } from "./HeaderElements";

const Header = () => {
  return (
    <Div>
      <div>
        
        <Profile />
        <H3>פרופיל</H3>
       
      </div>
      <div>
        <Boss />
        <H3>מעסיק</H3>
        </div>

      <div>
        
        <Logo />
        <H3>עובד</H3>
        
        
      </div>
      <div>
        
        <Chat />
        <H3>צ'אט</H3>
        
      </div>
    </Div>
  );
};

export default Header;
