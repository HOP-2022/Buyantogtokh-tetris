import styled from 'styled-components';

// import bgImage from '../../img/bg.png';


// background: url(${bgImage}) #000;
export const StyledTetrisWrapper = styled.div`
    width:100vw;
    height:100vh;
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin:0 auto;
    max-width: 900px; 
    
    aside{
        width: 100%;
        max-width: 200px;
        dipslay: block;
        padding: 0 20px;
    }
`;