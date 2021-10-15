import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ThemeName } from "../../styles/themes";
import { Container, GithubLogo, SearchForm } from "./styles";

interface Props {
    themeName: ThemeName,
    setThemeName: (newName: ThemeName) => void
}


const Header: React.FC<Props> = ({
    themeName, setThemeName
}) => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    function toggleTheme() {
        setThemeName(themeName === 'light' ? 'dark' : 'light')
    }


    function handleSubmit(event: React.FormEvent) {
        event?.preventDefault()

        navigate('/' + search.toLowerCase().trim())
    }

    return (
        <Container>
            <GithubLogo onClick={toggleTheme} />
            <SearchForm onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter Username or Repo ..." value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>
            </SearchForm>
        </Container>
    );
};

export default Header;
