import githubLogo from "./github-mark.png";

const Footer = () => {
  return (
    <div className="footer">
      created by annabel phu
      <a href="https://github.com/a-phu">
        <img src={githubLogo} alt="github-logo" />
      </a>
    </div>
  );
};

export default Footer;
