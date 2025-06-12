import React from "react";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title || "안전감사팀 종합 매뉴얼"}</h1>
    </header>
  );
};

export default Header;