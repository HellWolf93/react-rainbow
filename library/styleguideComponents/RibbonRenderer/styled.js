import styled from 'styled-components';
import GithubIcon from './githubIcon';
import GlobalSearch from '../GlobalSearch';

export const StyledHeading = styled.header`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    top: 0;
    left: 0;
    height: 68px;
    background-color: #fff;
    width: 100vw;
    z-index: 3000;
    border-bottom: 1px solid #f4f6f9;
`;

export const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-right: 32px;

    @media (max-width: 800px) {
        margin-right: 24px;
    }

    @media (max-width: 600px) {
        margin-right: 8px;
    }
`;

export const StyledGitHubContianer = styled.div`
    padding-top: 7px;
    margin-right: 16px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const StyledGithubLink = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    color: #24292e;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background: rgba(1, 1, 1, 0.05);
        color: #000;
    }

    @media (max-width: 800px) {
        margin-right: 54px;
        width: 28px;
        height: 28px;
    }
`;

export const StyledGithubIcon = styled(GithubIcon)`
    width: 28px;
    height: 28px;
`;

export const StyledStackoverflowLink = styled.a`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;

    :hover {
        background: rgba(1, 1, 1, 0.05);
    }

    @media (max-width: 800px) {
        display: none;
    }
`;
