import { useTheme } from "../ThemeContext";
import { string, elementType } from "prop-types";

import { light, dark } from "./SkillListStyles.module.css";

function SkillList({ src: Icon, skill }) {
  const theme = useTheme();
  return (
    <span>
      <Icon className={theme !== "light" ? light : dark} />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;

SkillList.propTypes = {
  src: elementType,
  skill: string,
};
