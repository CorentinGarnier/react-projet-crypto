import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import store from "./store/Store.js"
import { Provider } from 'react-redux'
import DarkThemeProvider from './DarkThemeProvider';
import Card from './components/Card';
import Home from './components/Home';


function App() {
  return (
    <Provider store={store}>
      <DarkThemeProvider>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paire" element={<Card />} />
          </Routes>
        </main>
      </Router>
    </DarkThemeProvider>
    </Provider>
  );
}

export default App;
