import MainContainer from "../src/components/MainContainer"
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useLayoutEffect, useState } from "react";
import { User } from "../src/types/types";
import { getOtherUser } from "../src/api/userApi";

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
  font-size: 4rem;
`;

const StyledGrid = styled.div`
  color: rgb(122, 233, 31);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
`;

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User>();

  useLayoutEffect(() => {
    console.log(id);
    console.log("Hi");
    if (id != undefined)
      getOtherUser(id?.toString()).then((data) => {
        setUser(data.data);
        console.log(data.data);
      });
  }, [id]);

  return (
    <MainContainer authRequired={false}>
      <StyledContainer>

        <StyledMain>

          <StyledTitle>
            Nickname : {user?.login}
          </StyledTitle>

          <StyledGrid>
          </StyledGrid>

        </StyledMain>

        <StyledFooter />

      </StyledContainer>
    </MainContainer>
  )
}

export default User;
