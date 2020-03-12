import React from "react";

import styles from "./styles.less";

type ContentProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Content: React.FC<ContentProps> = (props) => (
  <div {...props} className={styles.content} />
);

export default Content;
