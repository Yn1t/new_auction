import { ReactChild, useEffect, useLayoutEffect } from "react";
import styled from '@emotion/styled';
import { useStore } from "../stores/storeContext";
import { observer } from "mobx-react-lite";
import AccountMenu from "./AccountContainer"
import RegistrationMenu from "./RegistrationContainer";
import { getSession } from "../utils/authService";
import { useRouter } from "next/router";
import { getAccountInfo } from "../api/authApi";
import { User } from "../types/types";
import { Player } from '@lottiefiles/react-lottie-player';
 

interface props {
    children?: ReactChild;
    authRequired?: boolean;
    user?: User;
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    background: rgb(46, 143, 173);
    width: 100%;
    & .push-right {
    margin-left: auto;
    };
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

const MainContainer = ({ children, authRequired }: props) => {
    const { userStore } = useStore(); 
    const router = useRouter();

    useLayoutEffect(() => {
        if (authRequired && !userStore.user)
        {
            router.push("/login");
        }
    }, [router, authRequired, userStore.user])

    const Menu = () => 
    {
        if (getSession()?.login == '' && getSession()?.password == '')
        {       
            return <RegistrationMenu/>;
        }
        else return <AccountMenu/>;
    }

    //console.log(userStore.isLoading);

    return (
        <>
            <StyledContainer>
                
                <StyledCardForm>
                    <StyledText as="a" href="/">
                        {userStore.user?.balance}
                        {userStore.user?.login}
                    </StyledText>
                </StyledCardForm>
                
                <StyledCardForm className="push-right">
                    <Menu/>
                </StyledCardForm>
            </StyledContainer>
            <StyledFooter />

            {!userStore.isLoading ? children : <Player
            background="blue"
            autoplay={true}
            loop={true}
            controls={true}
            src="https://assets3.lottiefiles.com/private_files/lf30_rlssnwpv.json"
            style={{ height: '300px', width: '300px' }}
          ></Player>}
        </>
    )

}

export default observer(MainContainer);