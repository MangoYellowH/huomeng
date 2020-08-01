import React from "react";
import { Header as Base } from "@mango-solution/mango-ui";

interface HeaderType {}

const Header: React.FC<HeaderType> = ({}: HeaderType) => {
  return (
    <Base>
      <div>mock header</div>
    </Base>
  );
};

export default Header;
