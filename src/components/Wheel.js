import React from "react";
import { wheel as wheelInfo } from "../constants/settings";

// Return the proper css for the specified
const clickCSS = (id, currentId, isEntered) => {
  // Is normal
  if (id !== currentId && !isEntered) {
    return {
      opacity: 1,
      transition: "all 1s"
    };
  }
  // is Clicked
  if (id === currentId && isEntered) {
    return {
      transition: "transform 1s, transform-origin 1s",
      transform: "scale(1.5)",
      transformOrigin: "center center",
      zIndex: 1
    };
  }

  if (id !== currentId && isEntered) {
    return {
      opacity: 0.05,
      transition: "opacity 0.5s"
    };
  }
};

export default function Wheel({
  clickId,
  setClickID,
  setCategory,
  transitionTitle
}) {
  // useEffect(() => {
  //   const logMousedown = event => {
  //     console.log(event.target.parentNode);
  //   };
  //   document.addEventListener("mousedown", logMousedown);
  //   return () => document.removeEventListener("mousedown", logMousedown);
  // }, []);
  return (
    <div style={{ display: "inline-block" }}>
      <svg
        version="1.1"
        id="wheel1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0, 0, 1000, 500"
        pointerEvents="painted"
        preserveAspectRatio="xMinYMid meet"
        style={{
          textAlign: "center",
          position: "absolute"
        }}
      >
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n\t.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#69625A;}\n\t.st1{fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}\n\t.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#F5F4F1;}\n\t.st3{fill-rule:evenodd;clip-rule:evenodd;fill:#3F2F2D;}\n\t.st4{fill:#5E7B38;}\n\t.st5{font-family:'Cocogoose';}\n\t.st6{font-size:8px;}\n\t.st7{fill:#FFFFFF;}\n\t.st8{font-family:'Renogare-Regular';}\n\t.st9{font-size:12px;}\n\t.st10{fill:#69625A;}\n\t.st11{font-family:'BrixtonBook';}\n\t.st12{font-size:3.6227px;}\n\t.st13{fill:none;stroke:#69625A;stroke-width:0.25;stroke-miterlimit:10;}\n"
          }}
        />
        <g
          id="group1"
          style={clickCSS(1, clickId.id, clickId.isClicked)}
          onClick={() => {
            transitionTitle(true);
            setClickID({ id: 1, isClicked: !clickId.isClicked });
            if (!clickId.isClicked) {
              setCategory(wheelInfo.soul);
            } else {
              setCategory(wheelInfo.default);
            }
          }}
        >
          <path
            className="st0"
            style={{ fill: "#69625A" }}
            d="M301.7,220.8c16.1,0,31.8,2.1,46.7,6c1.4,0.4,2.8,0.8,4.2,1.1c2,0.5,3.3,1.6,2,4.8l-9.6,31.6
	c-13.7-4.2-28.3-6.5-43.4-6.5c-39.3,0-75,15.3-101.5,40.3l-21.4-22.8c-3.5-4.1-3.2-5.1,1.3-9.1C212.5,237.7,255.2,220.8,301.7,220.8
	z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st2"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st3"
            d="M257.9,290.7c-4.4,0-7.9,3.5-7.9,7.9s3.5,7.9,7.9,7.9s7.9-3.5,7.9-7.9C265.8,294.3,262.3,290.7,257.9,290.7z"
          />
          <path
            className="st0"
            style={{ fill: "#69625A" }}
            d="M193.1,255.9l26.2,27c-6.8,4.6-13.4,10-19.3,15.6l-20.3-21.4c-3.5-3.9-5.1-6,0.2-10.7
	C184.2,262.6,188.7,259.1,193.1,255.9z"
          />
          <text
            transform="matrix(1 0 0 1 269.3859 300.6329)"
            className="st4 st5 st6"
          >
            SOUL
          </text>
          <text
            transform="matrix(1 0 0 1 255.168 302.9678)"
            className="st7 st8 st9"
          >
            1
          </text>
        </g>
        <g
          id="group2"
          transform="rotate(60, 300.5, 400.5)"
          style={clickCSS(2, clickId.id, clickId.isClicked)}
          onClick={() => {
            setClickID({ id: 2, isClicked: !clickId.isClicked });
            if (!clickId.isClicked) {
              setCategory(wheelInfo.connection);
            } else {
              setCategory(wheelInfo.default);
            }
          }}
        >
          <path
            className="st0"
            style={{ fill: "#F7E1CE" }}
            d="M301.7,220.8c16.1,0,31.8,2.1,46.7,6c1.4,0.4,2.8,0.8,4.2,1.1c2,0.5,3.3,1.6,2,4.8l-9.6,31.6
	c-13.7-4.2-28.3-6.5-43.4-6.5c-39.3,0-75,15.3-101.5,40.3l-21.4-22.8c-3.5-4.1-3.2-5.1,1.3-9.1C212.5,237.7,255.2,220.8,301.7,220.8
	z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st2"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st3"
            d="M257.9,290.7c-4.4,0-7.9,3.5-7.9,7.9s3.5,7.9,7.9,7.9s7.9-3.5,7.9-7.9C265.8,294.3,262.3,290.7,257.9,290.7z"
          />
          <path
            className="st0"
            style={{ fill: "#F7E1CE" }}
            d="M193.1,255.9l26.2,27c-6.8,4.6-13.4,10-19.3,15.6l-20.3-21.4c-3.5-3.9-5.1-6,0.2-10.7
	C184.2,262.6,188.7,259.1,193.1,255.9z"
          />
          <text
            transform="matrix(1 0 0 1 269.3859 300.6329)"
            className="st4 st5 st6"
          >
            CONNECTION
          </text>
          <text
            transform="matrix(1 0 0 1 255.168 302.9678)"
            className="st7 st8 st9"
          >
            2
          </text>
        </g>
        <g
          id="group3"
          transform="rotate(120, 300.5, 400.5)"
          style={clickCSS(3, clickId.id, clickId.isClicked)}
          onClick={() => {
            setClickID({ id: 3, isClicked: !clickId.isClicked });
            if (!clickId.isClicked) {
              setCategory(wheelInfo.mindset);
            } else {
              setCategory(wheelInfo.default);
            }
          }}
        >
          <path
            className="st0"
            style={{ fill: "#69625A" }}
            d="M301.7,220.8c16.1,0,31.8,2.1,46.7,6c1.4,0.4,2.8,0.8,4.2,1.1c2,0.5,3.3,1.6,2,4.8l-9.6,31.6
	c-13.7-4.2-28.3-6.5-43.4-6.5c-39.3,0-75,15.3-101.5,40.3l-21.4-22.8c-3.5-4.1-3.2-5.1,1.3-9.1C212.5,237.7,255.2,220.8,301.7,220.8
	z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st2"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st3"
            d="M257.9,290.7c-4.4,0-7.9,3.5-7.9,7.9s3.5,7.9,7.9,7.9s7.9-3.5,7.9-7.9C265.8,294.3,262.3,290.7,257.9,290.7z"
          />
          <path
            className="st0"
            style={{ fill: "#69625A" }}
            d="M193.1,255.9l26.2,27c-6.8,4.6-13.4,10-19.3,15.6l-20.3-21.4c-3.5-3.9-5.1-6,0.2-10.7
	C184.2,262.6,188.7,259.1,193.1,255.9z"
          />
          <text
            transform="matrix(1 0 0 1 269.3859 300.6329)"
            className="st4 st5 st6"
          >
            MINDSET
          </text>
          <text
            transform="matrix(1 0 0 1 255.168 302.9678)"
            className="st7 st8 st9"
          >
            3
          </text>
        </g>
        <g
          id="group4"
          transform="rotate(180, 300.5, 400.5)"
          style={clickCSS(4, clickId.id, clickId.isClicked)}
          onClick={() => {
            setClickID({ id: 4, isClicked: !clickId.isClicked });
            if (!clickId.isClicked) {
              setCategory(wheelInfo.feelings);
            } else {
              setCategory(wheelInfo.default);
            }
          }}
        >
          <path
            className="st0"
            style={{ fill: "#506231" }}
            d="M301.7,220.8c16.1,0,31.8,2.1,46.7,6c1.4,0.4,2.8,0.8,4.2,1.1c2,0.5,3.3,1.6,2,4.8l-9.6,31.6
	c-13.7-4.2-28.3-6.5-43.4-6.5c-39.3,0-75,15.3-101.5,40.3l-21.4-22.8c-3.5-4.1-3.2-5.1,1.3-9.1C212.5,237.7,255.2,220.8,301.7,220.8
	z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st2"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st3"
            d="M257.9,290.7c-4.4,0-7.9,3.5-7.9,7.9s3.5,7.9,7.9,7.9s7.9-3.5,7.9-7.9C265.8,294.3,262.3,290.7,257.9,290.7z"
          />
          <path
            className="st0"
            style={{ fill: "#506231" }}
            d="M193.1,255.9l26.2,27c-6.8,4.6-13.4,10-19.3,15.6l-20.3-21.4c-3.5-3.9-5.1-6,0.2-10.7
	C184.2,262.6,188.7,259.1,193.1,255.9z"
          />
          <text
            transform="matrix(1 0 0 1 269.3859 300.6329)"
            className="st4 st5 st6"
          >
            FEELINGS
          </text>
          <text
            transform="matrix(1 0 0 1 255.168 302.9678)"
            className="st7 st8 st9"
          >
            4
          </text>
        </g>
        <g
          id="group5"
          transform="rotate(240, 300.5, 400.5)"
          style={clickCSS(5, clickId.id, clickId.isClicked)}
          onClick={() => {
            setClickID({ id: 5, isClicked: !clickId.isClicked });
            if (!clickId.isClicked) {
              setCategory(wheelInfo.movement);
            } else {
              setCategory(wheelInfo.default);
            }
          }}
        >
          <path
            className="st0"
            style={{ fill: "#3F2E2C" }}
            d="M301.7,220.8c16.1,0,31.8,2.1,46.7,6c1.4,0.4,2.8,0.8,4.2,1.1c2,0.5,3.3,1.6,2,4.8l-9.6,31.6
	c-13.7-4.2-28.3-6.5-43.4-6.5c-39.3,0-75,15.3-101.5,40.3l-21.4-22.8c-3.5-4.1-3.2-5.1,1.3-9.1C212.5,237.7,255.2,220.8,301.7,220.8
	z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st2"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st3"
            d="M257.9,290.7c-4.4,0-7.9,3.5-7.9,7.9s3.5,7.9,7.9,7.9s7.9-3.5,7.9-7.9C265.8,294.3,262.3,290.7,257.9,290.7z"
          />
          <path
            className="st0"
            style={{ fill: "#3F2E2C" }}
            d="M193.1,255.9l26.2,27c-6.8,4.6-13.4,10-19.3,15.6l-20.3-21.4c-3.5-3.9-5.1-6,0.2-10.7
	C184.2,262.6,188.7,259.1,193.1,255.9z"
          />
          <text
            transform="matrix(1 0 0 1 269.3859 300.6329)"
            className="st4 st5 st6"
          >
            MOVEMENT
          </text>
          <text
            transform="matrix(1 0 0 1 255.168 302.9678)"
            className="st7 st8 st9"
          >
            5
          </text>
        </g>
        <g
          id="group5"
          transform="rotate(300, 300.5, 400.5)"
          style={clickCSS(6, clickId.id, clickId.isClicked)}
          onClick={() => {
            setClickID({ id: 6, isClicked: !clickId.isClicked });
            if (!clickId.isClicked) {
              setCategory(wheelInfo.surroundings);
            } else {
              setCategory(wheelInfo.default);
            }
          }}
        >
          <path
            className="st0"
            style={{ fill: "#506231" }}
            d="M301.7,220.8c16.1,0,31.8,2.1,46.7,6c1.4,0.4,2.8,0.8,4.2,1.1c2,0.5,3.3,1.6,2,4.8l-9.6,31.6
	c-13.7-4.2-28.3-6.5-43.4-6.5c-39.3,0-75,15.3-101.5,40.3l-21.4-22.8c-3.5-4.1-3.2-5.1,1.3-9.1C212.5,237.7,255.2,220.8,301.7,220.8
	z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st1"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st2"
            d="M301.7,257.8c15.1,0,29.6,2.3,43.4,6.5l-43.3,142.3L200.2,298.2C226.7,273.2,262.4,257.8,301.7,257.8z"
          />
          <path
            className="st3"
            d="M257.9,290.7c-4.4,0-7.9,3.5-7.9,7.9s3.5,7.9,7.9,7.9s7.9-3.5,7.9-7.9C265.8,294.3,262.3,290.7,257.9,290.7z"
          />
          <path
            className="st0"
            style={{ fill: "#506231" }}
            d="M193.1,255.9l26.2,27c-6.8,4.6-13.4,10-19.3,15.6l-20.3-21.4c-3.5-3.9-5.1-6,0.2-10.7
	C184.2,262.6,188.7,259.1,193.1,255.9z"
          />
          <text
            transform="matrix(1 0 0 1 269.3859 300.6329)"
            className="st4 st5 st6"
          >
            SURROUNDINGS
          </text>
          <text
            transform="matrix(1 0 0 1 255.168 302.9678)"
            className="st7 st8 st9"
          >
            6
          </text>
        </g>
      </svg>
    </div>
  );
}
