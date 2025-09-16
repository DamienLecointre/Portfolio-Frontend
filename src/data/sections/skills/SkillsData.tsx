import { ReactElement } from "react";

import { FaReact, FaNode, FaFigma } from "react-icons/fa";
import {
  TbBrandTypescript,
  TbBrandMongodb,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
  TbBrandAdobeIndesign,
} from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiRedux } from "react-icons/si";

type SkillsDataType = {
  id: number;
  title: string;
  icon: ReactElement[];
}[];

export const SkillsData: SkillsDataType = [
  {
    id: 1,
    title: "Frontend",
    icon: [
      <FaReact key={"react"} size={24} />,
      <TbBrandTypescript key={"ts"} size={24} />,
      <RiNextjsLine key={"next"} size={28} />,
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: [
      <FaNode key={"node"} size={32} />,
      <SiExpress key={"express"} size={24} />,
      <SiRedux key={"redux"} size={20} />,
      <TbBrandMongodb key={"mongo"} size={24} />,
    ],
  },
  {
    id: 3,
    title: "Design",
    icon: [
      <FaFigma key={"figma"} size={20} />,
      <TbBrandAdobePhotoshop key={"psd"} size={24} />,
      <TbBrandAdobeIllustrator key={"ai"} size={24} />,
      <TbBrandAdobeIndesign key={"id"} size={24} />,
    ],
  },
];
