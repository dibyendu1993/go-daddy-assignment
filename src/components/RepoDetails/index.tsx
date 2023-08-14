import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BackIcon, Description, DetailsContainer, Forks, Language, LeftHandComponent, Name, OpenIssues, RepoLink, RightHandComponent, Title, Watcher } from "./style";

import backIcon from "../../assets/images/backIcon.png"

function RepoDetails() {

    const navigate = useNavigate();
    const [data, setData] = useState(() => {
        return JSON.parse(sessionStorage.getItem("repoDetails") || "0")
    })

    const hadleBackCLick = () => {
        sessionStorage.removeItem("repoDetails")
        navigate("/")
    }

    useEffect(() => {
        if (!data) {
            hadleBackCLick()
        }
    }, [])

    return <DetailsContainer>
        <LeftHandComponent><BackIcon src={backIcon} onClick={hadleBackCLick} /></LeftHandComponent>
        <RightHandComponent>
            <Name><Title>Name: </Title>{data?.name}</Name>
            <Description><Title>Description: </Title>{data?.description}</Description>
            <Language><Title>Programming Language: </Title>{data?.language}</Language>
            <Forks><Title>No. of Forks: </Title>{data?.forks}</Forks>
            <OpenIssues><Title>Open Issues: </Title>{data?.open_issues}</OpenIssues>
            <Watcher><Title>No. of Watchers: </Title>{data?.watchers}</Watcher>
            <RepoLink href={data.url}>CLick here to go to repo</RepoLink>

        </RightHandComponent>
    </DetailsContainer>;
}

export default RepoDetails;