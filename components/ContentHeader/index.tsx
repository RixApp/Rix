import React from "react";

import styles from "./styles.less";

interface ContentHeaderProps {
  title: string;
  subtitle?: string;
  renderRight?: React.ReactElement;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ title, subtitle, renderRight }) => (
  <div className={styles.contentHeader}>
    <div>
      <div className={styles.title}>{title}</div>
      {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
    </div>
    {renderRight && (
      <div className={styles.rightArea}>
        {renderRight}
      </div>
    )}
  </div>
);

export default ContentHeader;
