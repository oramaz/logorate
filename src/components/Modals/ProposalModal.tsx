import React, {useState} from "react"
import "../../assets/styles/App.css";

import {Modal} from "react-bootstrap";
import {Title} from "../General/Title";
import {Link} from "react-router-dom";

export const ProposalModal: React.FC = () => {
   const [isLoginModal, setIsLoginModal] = useState(false)
   return (
      <React.Fragment>
         <Modal show={isLoginModal} onHide={() => setIsLoginModal(false)}
                centered scrollable dialogClassName="modal-600w">
            <Modal.Body className="mx-auto" style={{padding: "40px 0"}}>
               <div className="text-center">
                  <Title text="Still paying for every logo?" style={{marginBottom: "30px"}}/>
                  <div className="d-flex justify-content-center" style={{marginBottom: "50px"}}>
                     <div style={{marginRight: "7px"}} className="content-text">Fix it for just</div>
                     <div className="content-text gradient-text">5$</div>
                  </div>
                  <button type="button" className="content-btn" style={{marginBottom: "50px"}}>Subscribe</button>
                  <div className="content-text-small d-flex justify-content-center" >
                     <div>You can discover the</div>
                     <Link to="#" className="gradient-text" style={{marginLeft: "7px"}}>benefits of a subscription</Link>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </React.Fragment>
   )
}