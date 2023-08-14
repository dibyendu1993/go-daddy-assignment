
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import App from "../App";
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";

test('basic test', async () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const repoList = await screen.findByTestId("RepoList")
    expect(repoList).toBeInTheDocument();
})