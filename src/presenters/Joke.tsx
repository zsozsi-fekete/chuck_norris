import { FC } from "react";
import styled from "styled-components";
import { JokeModel } from "../models/joke";

const JokeContainer = styled.div`
    display: flex;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    margin: 10px 5px;
`;

const JokeText = styled.p`
    margin: 10px 5px;
`;

interface IProps {
    joke: JokeModel;
}

export const Joke: FC<IProps> = ({ joke }) => {
    const { icon_url, url, value } = joke;
    return (
        <JokeContainer>
            {icon_url && (
                <a href={url} target="_blank" rel="noreferrer">
                    <Icon src={icon_url} />
                </a>
            )}
            <JokeText>{value}</JokeText>
        </JokeContainer>
    );
};
