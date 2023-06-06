import React from "react";
import GHIcon from "../images/GitHubIcon.png";
import TwIcon from "../images/TwitterIcon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <small className="footer--text">©2023 Mendence Design</small>
      <a
        href="https://github.com/Cmendence"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GHIcon} alt="GitHub Link" />
      </a>
      <a
        href="https://twitter.com/CMendence"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={TwIcon} alt="Twitter Link" />{" "}
      </a>
    </footer>
  );
}
