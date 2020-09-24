import React from "react";
import { Button, Header as Base } from "@mango-solution/mango-ui";
import Banner from "./banner";

interface HeaderType {}

const Header: React.FC<HeaderType> = ({}: HeaderType) => {
  const handleLoginClick = (): void => {
    console.log("click login");
  };
  return (
    <Base>
      <Banner />

      <div className="right-login">
        <Button onClick={handleLoginClick}>登录</Button>
      </div>
    </Base>
  );
};

export default Header;
