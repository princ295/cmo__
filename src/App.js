import React, { createRef } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./styles/index.css";
import RouterOutLate from "./router/index";
import ScrollToBottom from './components/ScrollToBottom';

const App = () => {

  const scroll = createRef(null);
  console.log(process.env.NODE_ENV)

  return (
    <div ref={scroll}>
      <RouterOutLate />
      <ScrollToBottom scroll={scroll}/>
    </div>
  );
}
 
export default App;