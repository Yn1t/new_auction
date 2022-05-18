import styled from "@emotion/styled";
import { Button, Card, CardMedia, TextField } from "@mui/material";
import React from "react";
import { useStore } from "../stores/storeContext";
import { Lot } from "../types/types";
import { useForm } from "react-hook-form";

type Props = {
  data: Lot;
};

const StyledPaper = styled.div`
  font-size: 20px;
  max-height: 50px;
  color: black;
  border-color: black;
  border-radius: 1px;
  border: 1px;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    padding: 1.5rem;
    color: inherit;
    border: 5px solid rgb(185, 206, 241);
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    height: max-content;
    min-width: 200px;
    min-height: 200px;
    & * {
        margin-bottom: 2.5px;
    }
`;

const LotPhoto = styled.img`
  height: 100px;
`;

const Input = styled(TextField)`
  
`;

type BetsData = {
  amount?: number;
}

const CardLot = ({ data }: Props) => {
  const { userStore } = useStore();
  console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (amount: BetsData) => {
    console.log(amount.amount, data.id);
    if (amount.amount) {
      userStore.makeBet(data.id, amount.amount);
    }
  };

  return (
    <Card sx={{
      margin: 2.5, borderRadius: 5, border: 5, borderColor: '#a1a1fa',
      background: '#b5b5e3'
    }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={`data:image/png;base64,${data.image}`}
      >
      </CardMedia>

      <StyledPaper>
        {data.name}
      </StyledPaper>
      <StyledPaper>
        Lot id : {data.id}
      </StyledPaper>
      <StyledPaper>
        Current Price : {data.startPrice}
      </StyledPaper>
      <StyledPaper>
        Description : {data.description}
      </StyledPaper>
      <StyledPaper>
        Tags : {data.tags}
      </StyledPaper>
      <StyledPaper>
        Best bet : {}
      </StyledPaper>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Input your bet"
          variant="filled"
          className={errors.amount ? "red-error" : ""}

          error={Boolean(errors.amount)}
          {...register("amount", {
            required: true,
            pattern: /[0-9]+/,
            validate: (value: number) => {
              if (!(RegExp(/[0-9]+/)))
                return "Invalid input";
            },
          })}
          helperText={
            errors &&
            errors.amount &&
            (errors.amount.type == "required"
              ? "Это поле обязательное"
              : errors.amount.message)
          }
        />

        <Button type="submit"> Make bet </Button>
      </LoginForm>
    </Card>
  );
};

export default CardLot;