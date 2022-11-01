import React, { useCallback, useRef } from "react";
import { 
  Image, 
  View, 
  KeyboardAvoidingView, 
  Platform ,
  TextInput
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile"
import { FormHandles } from "@unform/core"

import Input from "../../components/input";
import Button from "../../components/Button";

import logoImg from "../../assets/logo.png"

import { Conatainer, Title, ForgotPassword, ForgotPasswordText, CreateAccountButton, CreateAccountButtonText } from './styles';
import { ScrollView } from "react-native-gesture-handler";

const SignIn: React.FC = () =>  {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null)
  const navigation = useNavigation();

  const handleSignIn = useCallback((data: object) => {
    console.log(data)
  },[])

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
                <Title> Faça seu login</Title>
              </View>
              <Form ref={formRef} onSubmit={handleSignIn}>
                <Input 
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email" 
                icon="mail" 
                placeholder="E-mail"
                />
                <Input
                name="password"
                icon="lock"  
                placeholder="Senha"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm()
                }}
                />
              </Form>
                <Button 
                  onPress={() => {
                    formRef.current?.submitForm()
                  }} 
                  children="Entrar"
                />
              <ForgotPassword>
                  <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPassword>
          </Conatainer>
        </ScrollView>        
        </KeyboardAvoidingView>
          <CreateAccountButton onPress={() => navigation.navigate("SignUp")}>
            <Icon name="log-in" size={20} color="#ff9000"/>
            <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
          </CreateAccountButton>
        
        </>
    )
}

export default SignIn;