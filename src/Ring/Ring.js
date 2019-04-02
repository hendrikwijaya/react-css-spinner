import React from 'react';
import styles from './styles.css';

const CssStyles = JSON.stringify(styles);
const Ring = () => (
  <>
    <style>{CssStyles}</style>
    <div className="lds-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </>
);

export default Ring;
