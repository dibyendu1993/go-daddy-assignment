import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarHeader, DefaultBranch, DefaultBranchHeader, ListHeader, ListHolder, OwnerType, OwnerTypeHeader, RepoListContainer, RepoName, RepoNameHeader, SingleList } from "./style";

import { fetchList } from "../../api/list";

type RepoDetailsObject = {
    id: string
    name: string;
    description: string;
    url: string;
    language: string;
    forks: string;
    open_issues: string;
    watchers: string;
    default_branch: string;
    owner: {
        avatar_url: string;
        type: string;
    }
}

function RepoList() {
    const navigate = useNavigate();
    const [data, setData] = useState<RepoDetailsObject[]>([])
    useEffect(() => {
        fetchList().then((res) => { setData(res?.data) })
    }, [])
    const handleClick = (repoData: RepoDetailsObject) => {
        sessionStorage.setItem("repoDetails", JSON.stringify({
            name: repoData?.name,
            description: repoData?.description,
            url: repoData?.url,
            language: repoData?.language,
            forks: repoData?.forks,
            open_issues: repoData?.open_issues,
            watchers: repoData?.watchers,
        }));
        navigate('/repoDetails')
    }
    return <RepoListContainer data-testid='RepoList'>
        <ListHeader>
            <AvatarHeader>logo</AvatarHeader>
            <RepoNameHeader>Repo name</RepoNameHeader>
            <OwnerTypeHeader>Owner type</OwnerTypeHeader>
            <DefaultBranchHeader>Default branch</DefaultBranchHeader>
        </ListHeader>
        <ListHolder>
            {data?.map((el) => <SingleList onClick={() => handleClick(el)} key={el.id} data-testid='singleRepo'>
                <Avatar src={el?.owner?.avatar_url} />
                <RepoName>{el.name}</RepoName>
                <OwnerType>{el?.owner?.type}</OwnerType>
                <DefaultBranch>{el?.default_branch}</DefaultBranch>
            </SingleList>)}
        </ListHolder>
    </RepoListContainer>
}

export default RepoList;