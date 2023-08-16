import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import RepoDetails from '../components/RepoDetails';


test('renders learn react link', async () => {
    act(() => {
        render(<BrowserRouter><RepoDetails /></BrowserRouter>);
    })
    const RepoDetailsID = await screen.findByTestId("RepoDetails")
    expect(RepoDetailsID).toBeInTheDocument();
});
