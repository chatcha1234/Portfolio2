import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        width: "100%",
        padding: "1rem",
        transition: "all 0.3s ease,",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="">Portfolio</a>
        <ul style={{ display: "flex", gap: "2rem" }}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
