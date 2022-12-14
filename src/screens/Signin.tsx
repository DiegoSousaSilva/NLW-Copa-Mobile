import { Center, Icon, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import Logo from "../assets/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function Signin() {
  const { signIn, user } = useAuth();
  console.log("Dados do usuário", user);
  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <Logo width={212} height={40} />
      <Button
        type="SECONDARY"
        title="Entrar com Google"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        mt={12}
        onPress={signIn}
      />
      <Text color="white" mt={4} fontSize={13} textAlign="center">
        Não utilizamos nenhuma informação além{"\n"}
        do seu email para criação de sua conta.
      </Text>
    </Center>
  );
}
