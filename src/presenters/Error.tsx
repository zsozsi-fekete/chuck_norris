import { FC } from "react";
import styled from "styled-components";
import { ErrorResponse } from "../models/error";

const ErrorMessage = styled.p`
    font-weight: 600;
    margin: 5px 0px;
`;

const ErrorContainer = styled.div`
    background-color: #d63031;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 3px 4px 5px 0px #636e72;
    margin-top: 20px;
`;

interface IProps {
    error: ErrorResponse;
}

export const Error: FC<IProps> = ({ error }) => {
    return (
        <ErrorContainer>
            <ErrorMessage>Status code: {error.status}</ErrorMessage>
            <ErrorMessage>Error: {error.error}</ErrorMessage>
            <ErrorMessage>Message: {error.message}</ErrorMessage>
        </ErrorContainer>
    );
};
