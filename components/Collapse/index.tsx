import React from "react";
import { Collapse as AntCollapse } from "antd";
import { CollapseProps, CollapsePanelProps } from "antd/lib/collapse";

import styles from "./styles.less";

interface PanelProps {
  key: string;
  title?: string;
}

const PanelHeader: React.FC<{ title?: string }> = ({ title }) =>
  <div className={styles.panelHeader}>{title}</div>;

export const Panel: React.FC<PanelProps & Partial<CollapsePanelProps>> = ({ key, title, children, ...props }) => (
  <AntCollapse.Panel
    {...props}
    className={styles.panel}
    header={<PanelHeader title={title} />}
    showArrow={false}
    key={key}
    disabled={false}
  >
    {children}
  </AntCollapse.Panel>
);

export const Collapse: React.FC<CollapseProps> = ({ children, ...props }) => (
  <AntCollapse className={styles.collapse} {...props} bordered={false}>
    {children}
  </AntCollapse>
);
