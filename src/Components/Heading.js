import HeadingCSS from "./Header.module.css";
import sunny from "../img/sunny.png";
import githubSign from "../img/github-sign.png";
function Heading() {
  return (
    <div className={HeadingCSS.container}>
      <div className={HeadingCSS.head}>
        <img src={sunny} alt="" className={HeadingCSS.heading__img} />
        Weather<span className={HeadingCSS.dotSpan}>.</span>
      </div>

      <div className={HeadingCSS.githubIcon}>
        <a
          href="https://github.com/harshitcodes22"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubSign} alt="" className={HeadingCSS.githubImg} />
        </a>
      </div>
    </div>
  );
}

export default Heading;
