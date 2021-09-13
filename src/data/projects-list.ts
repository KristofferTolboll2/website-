import dediLogo from "assets/images/projects/dedi-logo.png";
import gurucasino from "assets/images/projects/guru-logo.png";
import workof from "assets/images/projects/workof.png";
import souq from "assets/images/projects/souq.png";
import gosave from "assets/images/projects/gosave.png";
import * as uuid from 'uuid'
import pwc from "assets/images/projects/pwc-logo.jpg";
export const projectsList: Project[] = [
  {
    id: 1,
    title: "Dedi App",
    logo: dediLogo,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://dedi.app/",
    desc: `Peterpitch is a tool that takes the fun in your company seriously and
     turns your meetings into real performance boosters.
     With Peterpitch, you round up the pack of employees and turn even the
     shakiest puppies into true wolves.`,
    technologies: ["NestJS", "React Native", "Postgres"],
    business: ["Social Discovery", "Social Media"]
  },
  {
    id: 2,
    title: "GuruCasinoBonus",
    link: "https://www.GuruCasinoBonus.com/",
    logo: gurucasino,
    blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
    desc: `This is a project management website for design and procurement teams. 
    It helps to collaborate and manage all of your floor plans in one place, writing specs, budgeting and timelines. 
    This project management website provides a wide variety of features like timeline tracking, spec sheet generation, integrated budget, vendor + inventory management, user usage tracking and many more.`,
    technologies: ["Node JS", "Puppeteer", "MongoDB"],
    business: ["Data Enginering", "Web Scraping", "Distributed Systems"]
  },
  {
    id: 3,
    title: "PwC Smart Invoice Reader",
    logo: pwc,
    blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
    link: "https://www.pwc.dk/da/services/consulting/digital/data-factory/smart-invoice-reader.html",
    desc: `This is an Ecommerce furniture site. It provides a single platform to multiple vendors where they can put their products on sale.`,
    technologies: ["React", "Redux", "Javascript"],
    business: ["Consulting", "Machine Learning", "Cloud"]
  },
  {
    id: 4,
    title: "PwC GDPR Compliance Scanner",
    logo: pwc,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://www.google.com/search?q=pwc+gdpr+scanner&oq=pwc+gdpr+scanner&aqs=chrome..69i57.3017j0j7&sourceid=chrome&ie=UTF-8",
    desc: `Souq of Qatar is online comparison website. This website is independent of any retailers, it displays the products of all the major stores.
    Just like when you compare prices and products while visiting physical shops and stores, online price comparison behaves in the same way. 
    It is an established method in the West for people to visit the online comparison websites first whenever they are in need to buy something. 
    This provides the benefits of convenience, choice, and price efficiency.`,
    technologies: ["React", "Java", "Spring Boot"],
    business: ["Consulting", "Machine Learning", "Cloud"]
  },
  //TODO insert HYF and other projects
];
