import styled from 'styled-components'

export const SharedStyle_P = styled.p`
text-align: left;
`

export const DetailsContainer = styled.section`
display:flex;
width: max-content;
margin: 100px auto 0px auto;
justify-content: center;
gap: 20px;
padding: 18px 40px 40px 40px;
box-shadow: 2px 3px 11px -4px rgba(0,0,0,0.75);
border-radius: 10px;
`

export const LeftHandComponent = styled.aside`
`

export const RightHandComponent = styled.main`
`

export const BackIcon = styled.img`
width: 20px;
height: 20px;
margin-top: 25px;
cursor: pointer
`

export const Title = styled.strong``

export const Name = styled(SharedStyle_P)``

export const Description = styled(SharedStyle_P)``

export const Language = styled(SharedStyle_P)``

export const Forks = styled(SharedStyle_P)``

export const OpenIssues = styled(SharedStyle_P)``

export const Watcher = styled(SharedStyle_P)``

export const RepoLink = styled.a`
display: block;
text-align: left;
text-decoration: none;
color: #412e57
`
