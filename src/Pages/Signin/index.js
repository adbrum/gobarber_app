import React from "react";
import { Text } from "react-native";

// import { Container } from './styles';
import Input from "~/components/Input";
import Button from "~/components/Button";
import Background from "~/components/Background";

function Signin() {
  return (
    <Background>
      <Text>SignIn</Text>
      <Input
        style={{ marginTop: 30 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Entrar</Button>
    </Background>
  );
}
export default Signin;
