import styled from 'styled-components'

export const RepoListContainer = styled.section`
width: max-content;
margin: 0px auto;
box-shadow: 2px 3px 11px -4px rgba(0,0,0,0.75);
border-radius: 15px;
margin-bottom: 30px;
min-width: 785px;
min-height: 100vh;
`

export const SharedStyle_P = styled.p`
margin: 0;
`

export const ListHeader = styled.header`
display: flex;
gap: 20px;
padding: 0px 15px;
position: fixed;
background: whitesmoke;
border-bottom: solid 1px #0000002e;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
`

export const AvatarHeader = styled.p`

`

export const RepoNameHeader = styled.p`
width: 360px;
`

export const OwnerTypeHeader = styled.p`
width: 115px;
`

export const DefaultBranchHeader = styled.p`
width:180px
`

export const ListHolder = styled.ul`
list-style-type: none;
padding: 0px;
width: max-content;
margin: 0px auto;
padding-top: 67px;
`

export const SingleList = styled.li`
display: flex;
gap: 20px;
padding: 15px 15px;
border-top: #00000026 solid 1px;
cursor:pointer;
&:hover {
    background: aliceblue;
}
`

export const Avatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`

export const RepoName = styled(SharedStyle_P)`
width: 360px;
overflow: hidden;
text-overflow: ellipsis;
`


export const DefaultBranch = styled(SharedStyle_P)`
width:180px;
overflow: hidden;
text-overflow: ellipsis;
`

export const OwnerType = styled(SharedStyle_P)`
width:115px;
overflow: hidden;
text-overflow: ellipsis;
`