import React from 'react';
import styles from './styles.css';

const CssStyles = JSON.stringify(styles);
const Ellipsis = () => (
  <>
    <style>{CssStyles}</style>
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
);

export default Ellipsis;
