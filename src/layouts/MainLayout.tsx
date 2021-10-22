import { FC } from "react";
import styled from "styled-components";
import logo from "../assets/imgs/chucknorris_logo.png";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    min-height: 100%;
    background-color: #fdcb6e;
`;

const SubContainer = styled.div`
    width: 60%;
    min-width: 500px;
    background-color: #ffeaa7;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 3px 4px 5px 0px #636e72;
    margin: 20px 0px;
`;

const Logo = styled.img`
    width: 200px;
    height: auto;
    margin-top: 20px;
`;

interface IProps {
    children: {
        selectJoke: JSX.Element;
        searchJoke: JSX.Element;
    };
}

export const MainLayout: FC<IProps> = ({ children }) => {
    const { selectJoke, searchJoke } = children;
    return (
        <MainContainer>
            <Logo src={logo} alt="Chuck Norris logo" />
            <SubContainer>{selectJoke}</SubContainer>
            <SubContainer>{searchJoke}</SubContainer>
        </MainContainer>
    );
};
