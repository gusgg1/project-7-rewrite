import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/index.css';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import RouteNotFound from './components/RouteNotFound';
import apiKey from './config';
import Gallery from './components/Gallery';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [photosData, setPhotosData] = useState([]);

  const source = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&tags=';
  const perPage = '24';
  const format = 'format=json&nojsoncallback=1';

  const getPhotos = (query, isDefined = false) => {
    const url = isDefined
      ? `${source}${query}&api_key=${apiKey}&per_page=${perPage}&${format}`
      : `${source}${query}&api_key=${apiKey}&per_page=${perPage}&${format}&content_type=1`;
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setPhotosData(result.photos.photo);
        setIsLoading(false);
      });
  };

  useEffect(() => getPhotos('rainbows'), []);

  const routes = [
    { path: '/search/:query', exact: true },
    { path: '/', exact: true },
    { path: '/cats', exact: false },
    { path: '/dogs', exact: false },
    { path: '/business', exact: false },
  ];

  return (
    <Router>
      <div className="container">
        <SearchForm onSearch={getPhotos} />
        <Nav
          getDefinedCategory={getPhotos}
          isDefined
        />

        {/* ---------- Routes -----------*/}
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              render={() => (
                <Gallery
                  photos={photosData}
                  isLoading={isLoading}
                />
              )}
            />
          ))}
          <Route component={RouteNotFound} />

        </Switch>
      </div>
    </Router>
  );
};

export default App;
