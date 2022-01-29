import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import TopNav from './components/topnav/TopNav';
import Routes from './components/Routes';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ThemeAction from './redux/actions/ThemeAction';
const App = () => {
  const themeReducer = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light');
    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light');
    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
         <div className={`app ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} />
            <div className="app__content">
              <TopNav />
              <div className="app__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};
export default App;
