import React from "react";
import { Header as Base } from "@mango-solution/mango-ui";

interface HeaderType {}

const Header: React.FC<HeaderType> = ({}: HeaderType) => {
  return (
    <Base>
      <div className="header-label">伙盟</div>
    </Base>
  );
};

export default Header;
