import { keyframes, css } from "styled-components";

export const colors = {
  primaryColor: "#000",
  primaryColorHover: "#000",
  primaryTextHover: "#fff",
  mainWhite: "#fff",
  offWhite: "#EDEDED",
  mainBlack: "#1c1c1c",
  mainBlack2: "#393939",
  mainYellow: "#d2aa5c",
  mainYellow2: "#F2AF29",
  mainRed: "#FF0000",
  mainGrey: "#474747",
  mainGrey2: "#3A3A3A",
  mainBlue: "#1a9cfc",
  darkGrey: "#afafaf",
  lightGrey: "#ddd",
  mainGreen: "#66ff66",
  successColor: "#4caf50",
  warningColor: "#ff9800",
  dangerColor: "#f44336",
  overlayColor: "rgba(0,0,0,0.4)"
};

export const codeColorer = {
  codeColorerBackground: "#F1F1F1",
  codeColorerBorder: "1px solid #9F9F9F"
};

export const shadows = {
  lightShadow: "4px 10px 6px 0px rgba(0, 0, 0, 0.5)",
  darkShadow: "8px 20px 10px 0px rgba(0, 0, 0, 0.5)",
  boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
  infoBoxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)",
  successBoxShadow:
    "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)",
  warningBoxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)",
  dangerBoxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};
export const textSlanted = "font-family:'Open Sans', sans-serif;";

export const transDefault = "transition:all 0.5s ease-in-out";
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => `transition:${property} ${time} ${type}`;
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out"
}) => `transition: ${property} ${time} ${type}`;
export const transBezier = "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)";

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out"
}) => `transition: ${property} ${time} ${type}`;

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white"
}) => `border:${width} ${type} ${color}`;

export const boxShadow =
  "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)";

export const letterSpacing = ({ spacing = "0.1rem" }) =>
  `letter-spacing:${spacing}`;

export const boxColors = {
  primaryBoxShadow: {
    boxShadow:
      "0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"
  },
  infoBoxShadow: {
    boxShadow:
      "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
  },
  successBoxShadow: {
    boxShadow:
      "0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"
  },
  warningBoxShadow: {
    boxShadow:
      "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
  },
  dangerBoxShadow: {
    boxShadow:
      "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
  }
};

export const animations = {
  pulse: keyframes`
            0%, 100% {
              transform: scale(1)
            }
            50% {
              transform: scale(1.2);
            }`,
  slideIn: keyframes`
    0% {
      -webkit-transform: translateZ(80px);
              transform: translateZ(80px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateZ(0);
              transform: translateZ(0);
      opacity: 1;
    }
  `,
  bounceIn: keyframes`
    0% {
      -webkit-transform: translateY(-500px);
              transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
              transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
              transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
              transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
  `,
  puffIn: keyframes`
     0% {
      -webkit-transform: scale(2);
              transform: scale(2);
      -webkit-filter: blur(4px);
              filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-filter: blur(0px);
              filter: blur(0px);
      opacity: 1;
    }
  `,
  rotate: keyframes`
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
     transform: rotate(360deg);
    }
  `,
  fromLeft: keyframes`
    0% { transform: translateX(-300px);}
    100% { transform: translateX(0);}
  `
};

export const ScrollbarCss = css`
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: ${colors.mainBlack};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${colors.mainBlack};
  }
`;

export const defaultBox = css`
  border: 1px solid ${colors.mainBlack};
  border-radius: 3px;
  ${boxColors.primaryBoxShadow};
  padding: 1rem;
`;


export const drawerWidth = 200