import "./showMore.scss";
import { useState } from "react";

const ShowMore = ({ text }) => {
  const [show, setShow] = useState(false);
  const textArray = Object.values(text);
  const textList = textArray.map((line, index) => {
    return (
      <>
        {line}
        {textArray.length - 1 === index ? "" : <br />}
      </>
    );
  });

  const getShowMoreButtonClasses = (classes) => {
    return show ? `${classes} hide` : classes;
  };

  const getShowMoreTextClasses = () => (show ? "" : "hide");

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      {" "}
      <button
        className={getShowMoreButtonClasses("show-button show-more")}
        onClick={handleClick}
      >
        show more
      </button>
      {textArray.length > 1 ? <br /> : ""}
      <span className={getShowMoreTextClasses()}>
        <span>{textList}</span>{" "}
        <button className="show-button show-less" onClick={handleClick}>
          show less
        </button>
      </span>
    </>
  );
};

export default ShowMore;
