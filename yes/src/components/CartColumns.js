import React from 'react'

export default function CartColumns(){
    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> quantity</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="textuppercase"> total</p>
                </div>

            </div>  
        </div>
    )
}