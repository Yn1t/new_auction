import styled from '@emotion/styled';
import MainContainer from '../src/components/MainContainer'
import { useStore } from '../src/stores/storeContext';
import { getSession } from '../src/utils/authService';
import { observer } from 'mobx-react-lite';

const StyledFooter = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid rgb(91, 166, 216);
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  background: linear-gradient(to bottom, rgb(84, 209, 248), rgb(22, 22, 22));
  padding: 0 2rem;
`;

const StyledMain = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.span`
  color: rgb(185, 206, 241);
  line-height: 1.15;
  font-size: 2rem;
`;

const StyledGrid = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  > * {
    margin-bottom: 50px;
  }
`;

const Profile = () => {
  const { userStore } = useStore();
  const session = getSession();

  return (
    <MainContainer authRequired={true}>
      <StyledContainer>

        <StyledMain>

          <StyledGrid>
            <StyledTitle>
              Name : {userStore.user?.login}
            </StyledTitle>
            <StyledTitle>
              Email : {session?.login}
            </StyledTitle>
            <StyledTitle>
              Balance : {userStore.user?.balance}
            </StyledTitle>
            <StyledTitle>
              Id : {userStore.user?.id}
            </StyledTitle>
          </StyledGrid>

        </StyledMain>

        <StyledFooter />

      </StyledContainer>
    </MainContainer>
  )
}

export default observer(Profile);
