import React, { Component } from 'react'
import {ButtonClose} from './Button';
import styled from"styled-components";
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";


export default class OOSModal extends Component {
  render(){
    return (
      <ProductConsumer>
        {(value) =>{
          const {OOSmodalOpen, closeOOSModal} = value;
          const {img} = value.IMGmodalProduct;

          if(!OOSmodalOpen) {
            return null;
          }
          else {
            return (<ModalContainer>
              <div className = "container">
              <div className = "row">
                <div id="modal" className = "col-8 mx-auto col-md-6 col-lg-4 text center text-capitialized p-5">                 
                <Link to='/'>
                  <ButtonClose onClick={() => closeOOSModal()}>
                  x
                  </ButtonClose>
                  </Link>
                THIS ITEM CURRENTLY IS OUT OF STOCK DUE TO HIGH DEMAND
                  
                  </div>
                  </div>
                  
                
                </div>
               
              </ModalContainer>
            );
          }
        }}

      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content: center;
#modal{
  background: var(--mainWhite);

}
`;
