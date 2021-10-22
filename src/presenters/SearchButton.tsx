import styled from "styled-components";

export const SearchButton = styled.button`
    background-color: #e17055;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    border-radius: 5px;
    &:disabled {
        background-color: grey;
        cursor: not-allowed;
    }
`;
