import type { NextPage } from 'next'
import styled from '@emotion/styled';
import MainContainer from '../components/MainContainer'
import LoginContainer from '../components/LoginContainer'

const StyledFooter = styled.footer`
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid rgb(91, 166, 216);
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.form`
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

const StyledTitle = styled.text`
  color: rgb(185, 206, 241);
  line-height: 1.15;
  font-size: 4rem;
`;

const StyledGrid = styled.form`
  color: rgb(122, 233, 31);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

const Home: NextPage = () => {
  return (
    <MainContainer>
    
      <StyledContainer>

        <StyledMain>
    
          <StyledTitle>
            Sign in
          </StyledTitle>

          <StyledGrid>
            <LoginContainer />
          </StyledGrid>

        </StyledMain>

        <StyledFooter />

      </StyledContainer>
    
    </MainContainer>
  )
}

export default Home
