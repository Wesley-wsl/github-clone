import React from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Topside,
    Botside,
    ForkIcon,
    RepoIcon,
    StarIcon,
} from "./styles";

interface Props {
    username: String;
    reponame: String;
    description?: String;
    language?: String;
    stars: Number;
    forks: Number;
}

const RepoCard: React.FC<Props> = ({
    username,
    reponame,
    description,
    language,
    stars,
    forks,
}) => {
    const languageClass = language ? language.toLowerCase() : "other";

    return (
        <Container>
            <Topside>
                <header>
                    <RepoIcon />
                    <Link to={`/${username}/${reponame}`}>{reponame}</Link>
                </header>
                <p>{description}</p>
            </Topside>
            <Botside>
                <ul>
                    <li>
                        <div className={`language ${languageClass}`} />
                            <span>{language}</span>
                    </li>
                    <li>
                        <StarIcon />
                        <span>{stars}</span>
                    </li>
                    <li>
                        <ForkIcon />
                        <span>{forks}</span>
                    </li>
                </ul>
            </Botside>
        </Container>
    );
};

export default RepoCard;
