import { FC, useCallback, useContext, useEffect, useState } from "react";
import { Joke } from "../presenters/Joke";
import { SearchButton } from "../presenters/SearchButton";
import { SelectField } from "../presenters/SelectField";
import { ApiSvcContext } from "../providers/ApiServiceProvider";
import { getCategoriesAction, getJokeAction } from "../redux/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectCategories, selectJoke } from "../redux/selectors";
import { SettingsContainer } from "./SettingsContainer";

export const SelectJokeContainer: FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const { apiSvc } = useContext(ApiSvcContext);
    const dispatch = useAppDispatch();

    const joke = useAppSelector(selectJoke);
    const categories = useAppSelector(selectCategories);

    const nextJoke = useCallback(() => {
        dispatch(getJokeAction({ apiSvc, category: selectedCategory }));
    }, [dispatch, apiSvc, selectedCategory]);

    useEffect(() => {
        nextJoke();
        dispatch(getCategoriesAction({ apiSvc }));
    }, [apiSvc, dispatch, nextJoke]);

    const changeCategory = (e: React.ChangeEvent<{ value: string }>) =>
        setSelectedCategory(e.target.value);

    return (
        <>
            <SettingsContainer>
                <SelectField value={selectedCategory} onChange={changeCategory}>
                    <option value="">random</option>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </SelectField>
                <SearchButton onClick={nextJoke}>Get Joke</SearchButton>
            </SettingsContainer>
            <Joke joke={joke} />
        </>
    );
};
