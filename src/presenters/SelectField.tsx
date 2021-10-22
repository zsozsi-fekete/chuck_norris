import { FC } from "react";
import styled from "styled-components";

const Select = styled.select`
    border-radius: 5px;
`;

interface IProps {
    value: string;
    onChange: (e: React.ChangeEvent<{ value: string }>) => void;
    children: React.ReactNode;
}

export const SelectField: FC<IProps> = ({ value, onChange, children }) => {
    return (
        <Select value={value} onChange={onChange}>
            {children}
        </Select>
    );
};
