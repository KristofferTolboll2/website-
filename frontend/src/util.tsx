import javascript from "./assets/images/tech-logos/javascript-logo.png";
import redux from "./assets/images/tech-logos/redux-logo.png";
import react from "./assets/images/tech-logos/react-logo.png";
import node from "./assets/images/tech-logos/node-logo.png";
import reactNative from "./assets/images/tech-logos/react-native-logo.png";
import typescript from "./assets/images/tech-logos/typescript-logo.png";
import puppeteer from "./assets/images/tech-logos/puppeteer-logo.png";
import postgresql from "./assets/images/tech-logos/postgresql-logo.png";
import java from "./assets/images/tech-logos/java-logo.png";
import mongodb from "./assets/images/tech-logos/mongo-logo.jpeg";
import spring from "./assets/images/tech-logos/spring-logo.png";
import nest from "./assets/images/tech-logos/nest-logo.png";

export const getTagColor = (type: string) => {
  type = type.toLowerCase().trim();
  switch (type) {
    case "javascript":
      return "yellow";
    case "redux":
      return "purple";
    case "puppeteer":
      return "teal";
    case "typescript":
    case "react native":
    case "react":
      return "blue";
    case "postgresql":
    case "postgres":
      return;
    case "mongodb":
    case "node js":
    case "spring boot":
      return "green";
    case "nestjs":
    case "java":
      return "red";
  }
};

export const getTechLogo = (type: string) => {
  type = type.toLowerCase().trim();
  const basePath = "./assets/images/tech-logos/";
  switch (type) {
    case "javascript":
      console.log(`${basePath}javascript-logo.png`);
      return (
        <img src={javascript} alt="javascript logo" height="30" width="20" />
      );
    case "redux":
      return <img src={redux} alt="redux logo" height="15" width="20" />;
    case "puppeteer":
      return (
        <img src={puppeteer} alt="puppeteer logo" height={15} width={20} />
      );
    case "typescript":
      return (
        <img src={typescript} alt="typescript logo" height="15" width="20" />
      );
    case "react native":
    case "react":
      return <img src={react} alt="react logo" height="20" width="25" />;
    case "postgresql":
    case "postgres":
      return (
        <img src={postgresql} alt="postgresql logo" height="15" width="20" />
      );
    case "mongodb":
      return <img src={mongodb} alt="mongodb logo" height="15" width="20" />;
    case "node js":
      return <img src={node} alt="node logo" height="15" width="20" />;
    case "spring boot":
      return <img src={spring} alt="spring logo" height="20" width="20" />;
    case "nestjs":
      return <img src={nest} alt="nest logo" height="15" width="20" />;
    case "java":
      return <img src={java} alt="java logo" height="15" width="20" />;
  }
};
