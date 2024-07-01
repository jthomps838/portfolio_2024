// frontend
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

// backend
import { DiPython } from "react-icons/di";
import { TbBrandDjango } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";
import { TbBrandGolang } from "react-icons/tb";

// other
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

// Change out icons if needed
export const skillConfig = {
  frontend: [
    {
      name: "HTML5",
      icon: TbBrandHtml5,
    },
    {
      name: "CSS3",
      icon: TbBrandCss3,
    },
    {
      name: "Javascript",
      icon: RiJavascriptFill,
    },
    {
      name: "TypeScript",
      icon: BiLogoTypescript,
    },
    {
      name: "React",
      icon: FaReact,
    },
  ],
  backend: [
    {
      name: "Python",
      icon: DiPython,
    },
    {
      name: "Django",
      icon: TbBrandDjango,
    },
    {
      name: "Node",
      icon: IoLogoNodejs,
    },
    {
      name: "Go",
      icon: TbBrandGolang,
    },
  ],
  other: [
    {
      name: "Git",
      icon: FaGitAlt,
    },
    {
      name: "AWS",
      icon: FaAws,
    },
    {
      name: "Terraform",
      icon: SiTerraform,
    },
    {
      name: "Docker",
      icon: FaDocker,
    },
  ],
};
