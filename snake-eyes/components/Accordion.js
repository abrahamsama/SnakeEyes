import { borderBottom } from "@mui/system";
import { useState } from "react";

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div
      style={{
        width: "100%",
        lineHeight: "15px",
        borderBottom: "1px solid black",
      }}
    >
      <button
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "LG",
          width: "100%",
          position: "relative",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
      </button>
      <div
        style={{
          display: isShowing ? "block" : "none",
          paddingBottom: "10px",
          fontSize: "18px",
        }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
