import React from 'react';
import styles from './styles.css';

const CssStyles = JSON.stringify(styles);
const Ripple = () => (
  <>
    <style>{CssStyles}</style>
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </>
);

export default Ripple;
