import React, { useRef } from "react";
import { 
  Image, 
  View, 
  KeyboardAvoidingView, 
  Platform 
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core"

import Input from "../../components/input";
import Button from "../../components/Button";

import logoImg from "../../assets/logo.png"

import { Conatainer, Title, BackToSigIn, BackToSigInText } from './styles';
import { ScrollView } from "react-native-gesture-handler";

const SignUp: React.FC = () =>  {
  const formRef = useRef<FormHandles>(null);
  const navigaion = useNavigation()
    return (
        <>
        <KeyboardAvoidingView 
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
          >    
        <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}>
          <Conatainer >
              <Image source={logoImg}/>
              <View>
                <Title> Crie sua conta</Title>
              </View>
              <Form ref={formRef} onSubmit={(data) => {console.log(data)}} >
                <Input name="name" icon="user" placeholder="Nome"/>

                <Input name="email" icon="mail" placeholder="E-mail"/>

                <Input name="password"icon="lock"  placeholder="Senha"/>
              </Form>
              <Button 
              onPress={() => formRef.current?.submitForm()} 
              children="Entrar"
              />
          </Conatainer>
        </ScrollView>        
        </KeyboardAvoidingView>
          <BackToSigIn onPress={() => navigaion.goBack()}>
            <Icon name="arrow-left" size={20} color="#fff"/>
            <BackToSigInText>Voltar para login</BackToSigInText>
          </BackToSigIn>
        </>
    )
}

export default SignUp;