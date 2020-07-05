interface HeaderType {}

const Header: React.FC<HeaderType> = ({}: HeaderType) => {
  return (
    <div className="header">
      <div className="content">
        <div className="logo-area">Logo</div>
        <div className="search-area">search</div>
        <div className="right-area">right</div>
      </div>
    </div>
  );
};

export default Header;
