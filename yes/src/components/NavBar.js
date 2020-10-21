import React, { Component } from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';
import {ButtonNav} from './Button';

export default class NavBar extends Component {
    render(){
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px">                  
                  <ul className = "navbar-nav.align-items-center" >                    
                    <Link to="/" className = "nav-link">
                        <ButtonNav >
                        products
                        </ButtonNav>
                       </Link>                    
                   </ul>  
                   <ul className = "navbar-nav.align-items-right" >    
                   <Link to="/cart" className = "nav-link">
                        <ButtonNav >
                        Cart
                        </ButtonNav>
                       </Link>   
                       </ul>           
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background:var(--mainMaroon);
    .nav-link{
        color:var(--mainWhite)!important;
        font-size:1.3rem;
        text-transform:capitalize; 
    }
`;


