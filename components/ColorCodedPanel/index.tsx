import React from "react";

import styles from "./styles.less";
import { Button } from "antd";

type ColorCodedPanelType =
  | "GENERAL_OBJECTIVE"
  | "IMPACT_INDICATOR"
  | "SPECIFIC_OBJECTIVE"
  | "SPECIFIC_OBJECTIVE_BUTTON"
  | "GOAL"
  | "GOAL_BUTTON"
  | "ACTIVITY"
  | "ACTIVITY_BUTTON";

interface ColorCodedPanelProps {
  id?: string;
  type: ColorCodedPanelType;
  onClick?: () => void;
}

const titles: { [key in ColorCodedPanelType]: string | JSX.Element } = {
  GENERAL_OBJECTIVE: "Objetivo general",
  IMPACT_INDICATOR: "Indicador de impacto",
  SPECIFIC_OBJECTIVE: "Objectivo específico",
  SPECIFIC_OBJECTIVE_BUTTON: <Button type="link" icon="plus">Nuevo objectivo específico</Button>,
  GOAL: "Meta",
  GOAL_BUTTON: <Button type="link" icon="plus">Nueva meta</Button>,
  ACTIVITY: "Actividad",
  ACTIVITY_BUTTON: <Button type="link" icon="plus">Nueva actividad</Button>
};

const typeStyles: { [key in ColorCodedPanelType]: string } = {
  GENERAL_OBJECTIVE: styles.generalObjective,
  IMPACT_INDICATOR: styles.impactIndicator,
  SPECIFIC_OBJECTIVE: styles.specificObjective,
  GOAL: styles.goal,
  ACTIVITY: styles.activity,

  SPECIFIC_OBJECTIVE_BUTTON: styles.button,
  GOAL_BUTTON: styles.button,
  ACTIVITY_BUTTON: styles.button
};

const ColorCodedPanel: React.FC<ColorCodedPanelProps> = ({ id, type, onClick, children }) => {
  const style = [styles.panel, typeStyles[type]].join(" ");
  return (
    <div className={style} onClick={onClick}>
      <div className={styles.title} id={id}>{titles[type]}</div>
      {children && <span>{children}</span>}
    </div>
  );
};

export default ColorCodedPanel;
