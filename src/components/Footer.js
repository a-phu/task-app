/*footer for app*/

import githubLogo from "./github-mark.png";

const Footer = (props) => {
  return (
    <div className={props.className}>
      created by annabel phu
      <a href="https://github.com/a-phu">
        <img src={githubLogo} alt="github-logo" />
      </a>
    </div>
  );
};

export default Footer;
