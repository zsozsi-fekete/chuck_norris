import { FC } from "react";
import styled from "styled-components";

const Input = styled.input`
    border-radius: 5px;
`;

interface IProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<{ value: string }>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputField: FC<IProps> = ({ type, placeholder, value, onChange, onKeyDown }) => {
    return (
        <Input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};
