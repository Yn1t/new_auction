import styled from "@emotion/styled";
import { Button, Card, Paper } from "@mui/material";
import React from "react";
import { Lot } from "../types/types";

type Props = {
  data: Lot;
};

const LotPhoto = styled.img`
  height: 100px;
`;

const CardLot = ({ data }: Props) => {
  return (
    <Card>
      <Paper variant="outlined" square>
        {data.name}
      </Paper>
      <Paper variant="outlined" square>
        {data.id}
      </Paper>
      <Paper variant="outlined" square>
        {data.startPrice}
      </Paper>
      <Paper variant="outlined" square>
        {data.description}
      </Paper>
      <Paper variant="outlined" square>
        {data.tags}
      </Paper>
      <LotPhoto src={`data:image/png;base64,${data.image}`} />

      <Button onClick={() => alert(data.name)}>Купить</Button>
    </Card>
  );
};

export default CardLot;