import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ThemeProvider } from "styled-components";
import Floating from "../../components/Floating";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useGlobalContext } from "../../contexts/GlobalContext";
import GlobalStyle from "../../styles/global";
import { darkTheme, lightTheme } from "../../styles/theme";
import { StyledContent, StyledLogin, StyledTitle } from "./styles";

const schema = yup.object({
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),
});

const Login = () => {
    const { theme } = useGlobalContext();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyle />
            <Header />
            <Floating />
            <StyledLogin>
                <StyledContent>
                    <StyledTitle>
                        <h1>Log in to your Linktree</h1>
                        <form></form>
                    </StyledTitle>
                </StyledContent>
            </StyledLogin>
            <Footer />
        </ThemeProvider>
    );
};

export default Login;
