import React from "react";

import styles from "./styles.less";

type FooterProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Footer: React.FC<FooterProps> = ({ children, ...props }) =>
  <div className={styles.footer} {...props}>{children}</div>;

export default Footer;
