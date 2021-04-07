import nextBtn from "./assets/next.png";

const NextButton = (props) => {
  const { getNextText } = props;

  return (
    <div>
      <img
        src={nextBtn}
        style={{
          width: "90px",
          position: "fixed",
          bottom: "100px",
          right: "100px"
        }}
        onClick={() => getNextText()}
        alt="next arrow"
      />
    </div>
  );
};

export default NextButton;