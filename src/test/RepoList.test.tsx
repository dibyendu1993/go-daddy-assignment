import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import RepoList from '../components/RepoList';


test('renders learn react link', async () => {
    act(() => {
        render(<BrowserRouter><RepoList /></BrowserRouter>);
    })
    const RepoListID = screen.getByTestId("RepoList")
    expect(RepoListID).toBeInTheDocument();
    const SingleRepoID = await screen.findByTestId("SingleRepo-0")
    expect(SingleRepoID).toBeInTheDocument();
});
