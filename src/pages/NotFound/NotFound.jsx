import css from "./NotFound.module.css"
import { Link } from "react-router-dom";

const NotFound = () => {
  return ( 
    <div className={ css.notFoundWrapper}>      
      <div className={ css.logoWrap} >
      
      </div>    
        <div className={ css.notFoundContent}>          
          <b className={ css.notFoundTitle}>404</b>
          <p className={ css.notFoundText}>
            Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience.
          </p>
          <Link className={ css.backHomeBtn}to={"/"}>
            Go Home
          </Link>
        </div>
      </div>
  );
};

export default NotFound;