import MainContainer from "../src/components/MainContainer"
import { Button, Card, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useStore } from "../src/stores/storeContext";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { setMoney } from "../src/api/moneyApi";
import { getSession } from "../src/utils/authService";
import { observer } from "mobx-react-lite";

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

const StyledTitle = styled.div`
  color: rgb(185, 206, 241);
  line-height: 1.15;
  font-size: 4rem;
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

const Input = styled(TextField)`
  
`;

const StyledGrid = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  > * {
    margin: 30px;
  }
`;

type balance = {
  balance?: number;
}


const Money = () => {
  const { userStore } = useStore();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (balance: balance) => {
    console.log(balance.balance);
    const session = getSession();
    if (balance.balance && session) {
      setMoney(balance.balance, session?.login);
    }
    router.reload();
  };

  return (
    <MainContainer authRequired={true}>
      <StyledContainer>

        <StyledMain>

          <StyledGrid>
            <StyledTitle>
              Money: {userStore.user?.balance}
            </StyledTitle>
            <Card sx={{ backgroundColor: 'transparent' }}>
              <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                  label="Input your new balance"
                  variant="filled"
                  className={errors.balance ? "red-error" : ""}

                  error={Boolean(errors.balance)}
                  {...register("balance", {
                    required: true,
                    pattern: /[0-9]+/,
                    validate: (value: number) => {
                      if (!(RegExp(/[0-9]+/)))
                        return "Invalid input";
                    },
                  })}
                  helperText={
                    errors &&
                    errors.balance &&
                    (errors.balance.type == "required"
                      ? "Это поле обязательное"
                      : errors.balance.message)
                  }
                />

                <Button type="submit"> Input balance </Button>
              </LoginForm>
            </Card>
          </StyledGrid>

        </StyledMain>

        <StyledFooter />

      </StyledContainer>
    </MainContainer>
  )
}

export default observer(Money);