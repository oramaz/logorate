import React from "react"
import "../../assets/styles/App.css";
import {Link} from "react-router-dom";

type Props = {
   name: string;
   linkTo: string;
   style?: object;
}

export const Tag: React.FC<Props> = (props) => {
   const { name, linkTo, style } = props
   return (
      <Link to={linkTo} style={{textDecoration: "none"}}>
         <div className="content-tag gradient-border" style={style}>
            <span style={{padding: "5px 20px"}} aria-valuetext={name}>
            </span>
         </div>
      </Link>
   )
}