import MainContainer from "../src/components/MainContainer"
import styled from "@emotion/styled";
import { useLayoutEffect, useState } from "react";
import { Lot } from "../src/types/types";
import CardLot from "../src/components/LotContainer";
import { getLots } from "../src/api/lotsApi";

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

const StyledGrid = styled.div`
  color: rgb(122, 233, 31);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 40px;
  max-width: 800px;
`;


const Lots = () => {
  const [lots, setLots] = useState<ReadonlyArray<Lot>>([]);

  useLayoutEffect(() => {
    getLots().then((data) => {
      setLots(data.data);
      console.log(data.data);
    });
  }, []);

  return (<MainContainer>
    <StyledContainer>

      <StyledMain>
        <StyledGrid>
          {lots.map((lot) => (
            <CardLot key={lot.name} data={lot} />
          ))}   
        </StyledGrid>

      </StyledMain>

      <StyledFooter />

    </StyledContainer>
  </MainContainer>)
}

export default Lots