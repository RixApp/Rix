import React from "react";

import styles from "./styles.less";

const Container: React.FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
