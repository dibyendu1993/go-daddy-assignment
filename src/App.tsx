import React, { lazy, Suspense } from 'react';
import './App.css';
import {
  Routes, Route
} from "react-router-dom";

const RepoList = lazy(() => import('./components/RepoList'))
const RepoDetails = lazy(() => import('./components/RepoDetails'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={"loading..."}>
        <Routes>
          <Route path="/" element={<RepoList />} />
          <Route path="repoDetails" element={<RepoDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
