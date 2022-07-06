import styled from "@emotion/styled";
import { Card } from "@mui/material";
import React from "react";
import { Bet } from "../types/types";

type Props = {
  data: Bet;
};

const StyledPaper = styled.div`
  font-size: 20px;
  max-height: 50px;
  color: black;
  border-color: black;
  border-radius: 1px;
  border: 1px;
`;

const StyledLink = styled.link`
  
`

const CardBet = ({ data }: Props) => {

  return (
    <Card sx={{
      margin: 2.5, borderRadius: 5, border: 5, borderColor: '#a1a1fa',
      background: '#b5b5e3'
    }}>

      <StyledPaper>
        Id: {data.id}
      </StyledPaper>
      <StyledPaper>
        Amount: {data.amount}
      </StyledPaper>
      <StyledPaper>
        Create date: {data.createDate}
      </StyledPaper>

      <StyledPaper>
        <StyledLink as="a" href={"/lot?id=" + data.ownLotId}> Lot id: {data.ownLotId} </StyledLink>
      </StyledPaper>
    </Card>
  );
};

export default CardBet;