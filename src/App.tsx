import React from 'react';
import {Home} from './home';
import {Contact} from './contact';
import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
});