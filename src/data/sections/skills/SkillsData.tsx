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
      <FaReact key={"react"} size={32} />,
      <TbBrandTypescript key={"ts"} size={32} />,
      <RiNextjsLine key={"next"} size={36} />,
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: [
      <FaNode key={"node"} size={40} />,
      <SiExpress key={"express"} size={32} />,
      <SiRedux key={"redux"} size={24} />,
      <TbBrandMongodb key={"mongo"} size={28} />,
    ],
  },
  {
    id: 3,
    title: "Design",
    icon: [
      <FaFigma key={"figma"} size={24} />,
      <TbBrandAdobePhotoshop key={"psd"} size={32} />,
      <TbBrandAdobeIllustrator key={"ai"} size={32} />,
      <TbBrandAdobeIndesign key={"id"} size={32} />,
    ],
  },
];
