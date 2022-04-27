import Link from "next/link";
import { ReactChild } from "react";
import styled from '@emotion/styled';

interface props{
    children?: ReactChild;
}

const StyledContainer = styled.div`
    display: flex;
    background: rgb(46, 143, 173);
    width: 100%;
`;

const StyledCardForm = styled.div`
    min-height: 30px;
    width: 130px;
`;

const StyledFooter = styled.footer`
    display: flex;
    flex: 1;
    border-top: 1px solid black;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.link`
    color: rgb(176, 203, 244);
    font-size: 25px;
    margin: 25px;
    &:hover {
        color: rgb(255, 255, 255);
      }
`; 

const MainContainer = ({children}: props) => {
    return (
        <>
        <StyledContainer>
            <StyledCardForm>
                <StyledText as="a" href="/main">
                        Main
                </StyledText>
            </StyledCardForm>
            <StyledCardForm>
                    <StyledText as="a" href="/">
                        Login
                    </StyledText>
            </StyledCardForm>
        </StyledContainer>

        <StyledFooter/>
        
        {children}
        </>
    )
}

export default MainContainer;