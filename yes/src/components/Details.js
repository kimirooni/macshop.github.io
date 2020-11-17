import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default class Details extends Component {
    render(){
        return(
            <ProductConsumer >
                {(value)=>{
                  const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className = "container py-5">
                            
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <div className = "container" onClick={() => {value.openIMGModal(id);}}>    
                                <img src={img} className="img-fluid" alt="product"  />
                                  </div>  
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h2> {title} </h2>
                                
                                <h4 className = "text-Blue">
                                    <strong>
                                        price: <span>$</span> 
                                        {price}
                                     </strong>   
                                </h4>
                                <p className="text-capitalie font-weight-bold mt-3 mb-0">
                                    Description:
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                <div>
                                    <Link to='/'>
                                        <ButtonContainer >
                                            Back
                                        </ButtonContainer>
                                    </Link>
                                    
                                    <ButtonContainer 
                                        style={{marginLeft:"1rem"}}
                                        disabled={inCart?true:false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);

                                        }}
                                        >
                                        
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer> 
                         
                                    
                                </div>
                                </div>
                            </div>    
                         </div>   
                    )
                }}
             </ProductConsumer>    
        );
    }
}