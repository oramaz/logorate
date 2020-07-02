import React from "react";
import "../../assets/styles/Header.css";
import {Link} from "react-router-dom";

type Props = {
   relatedQueries: string[]
}

export const QueryPopover: React.FC<Props> = (props) => {
   const { relatedQueries } = props
   console.log(relatedQueries)
   return (
      <div className="queries-popover-container">
         {relatedQueries.map(query => {
            return (
               <Link to={`/search?q=${query}`}
                     className=" disableLinkStyle">
                  <div className="queries-line">
                     <div style={{padding: "2px 0 2px 20px"}} >
                        {query}
                     </div>
                  </div>

               </Link>
            )
         })}
      </div>
   );
};
