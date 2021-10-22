import { FC, useContext, useState } from "react";
import styled from "styled-components";
import { JokeModel } from "../models/joke";
import { InputField } from "../presenters/InputField";
import { Joke } from "../presenters/Joke";
import { SearchButton } from "../presenters/SearchButton";
import { ApiSvcContext } from "../providers/ApiServiceProvider";
import { getJokeByQueryAction } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectError, selectQueriedJokes } from "../redux/selectors";
import { Error } from "../presenters/Error";
import { SettingsContainer } from "./SettingsContainer";

const JokesList = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SearchJokeContainer: FC = () => {
    const [query, setQuery] = useState<string>("");
    const dispatch = useAppDispatch();
    const { apiSvc } = useContext(ApiSvcContext);
    const queriedJokes: JokeModel[] = useAppSelector(selectQueriedJokes);
    const error = useAppSelector(selectError);

    const onButtonClick = () => {
        dispatch(getJokeByQueryAction({ apiSvc, query }));
    };

    const onSelectChange = (e: React.ChangeEvent<{ value: string }>) =>
        setQuery(e.target.value.trim());

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && query.length) onButtonClick();
    };

    return (
        <>
            <SettingsContainer>
                <InputField
                    type="text"
                    placeholder="Search for a word..."
                    value={query}
                    onChange={onSelectChange}
                    onKeyDown={onKeyDown}
                />
                <SearchButton onClick={onButtonClick} disabled={!query.length}>
                    Search
                </SearchButton>
            </SettingsContainer>
            {!!error ? (
                <Error error={error} />
            ) : (
                <JokesList>
                    {queriedJokes.map(joke => (
                        <Joke key={joke.id} joke={joke} />
                    ))}
                </JokesList>
            )}
        </>
    );
};
