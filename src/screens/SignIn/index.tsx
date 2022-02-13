import React, {useState} from "react";
import { Alert, KeyboardAvoidingView, Platform} from 'react-native'

import { useAuth } from "../../hooks/auth";
import brandImg from '../../assets/brand.png'

import { Button } from "../../components/Input/Button";

import { Input } from "../../components/Input";
import { Container, 
    Content,
    Title,
    Brand,
    ForgotPasswordButton,
    ForgotPasswordLabel 
} from "./styles";

export function SignIn(){
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const {signIn,isLogging }= useAuth();

    function handleSignIn(){
        
        signIn(email,password)
    }
    return (

        <Container>
          <KeyboardAvoidingView behavior={Platform.OS==='ios'?'padding': undefined}>
          <Content>

            <Brand source={brandImg} />

              <Title>Login</Title>
            <Input placeholder="E-mail"
                type="secondary"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={setEmail}
             />
            <Input placeholder="Senha"
                type="secondary"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={setPassword}
             />
            <ForgotPasswordButton>
                <ForgotPasswordLabel>
                    Esqueci minha senha
                    
                </ForgotPasswordLabel>
           
            </ForgotPasswordButton>

             <Button 
             title="Logar"
             type="secondary"
             onPress={handleSignIn}
             isLoading={isLogging}
             />
             </Content>
            </KeyboardAvoidingView>
        </Container>
    )
}