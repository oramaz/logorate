import React from "react"
import "../../assets/styles/App.css";

type Props = {
   text: string;
   style?: object;
   className?: string;
}

export const Title: React.FC<Props> = (props) => {
   const { text, style, className } = props
   return (
      <div className={`content-title text-center ${className}`} aria-valuetext={text} style={style}/>
   )
}