import styled from 'styled-components';


export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: transparent;
border:0.05rem solid var(--mainMaroon);
color: var(--mainMaroon);
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2 rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainMaroon);   
    color:var(--mainWhite);
}
&:focus{
    outline: none,
}
`;

export const ButtonNav = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: transparent;
border:0.05rem solid var(--mainWhite);
color:var(--mainWhite);
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2 rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainWhite);   
    color:var(--mainMaroon);
}
&:focus{
    outline: none,
}
`;

export const ButtonClose = styled.button`
text-transform:capitalize;
font-size: 0.7 rem;
background: transparent;
border:0.05rem solid var(--mainMaroon);
color:var(--mainMaroon);
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2 rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainMaroon);   
    color:var(--mainWhite);
}
&:focus{
    outline: none,
}
`;