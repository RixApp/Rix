import React from "react";

import styles from "./styles.less";

interface CardProps {
  title: string;
  description: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: (title: string) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  active = false,
  disabled = false,
  onClick = () => undefined
}) => (
  <div data-active={active} data-disabled={disabled} className={styles.card} onClick={() => onClick(title)}>
    <div className={styles.title}>{title}</div>
    <div className={styles.description}>{description}</div>
  </div>
);

export default Card;
