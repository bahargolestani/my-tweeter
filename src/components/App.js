import React from 'react';
import Layout from './layout/Layout';
import Home from '../pages/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page404 from '../pages/404/404';
import TweetByHashTag from '../pages/home/tweetByHashtag/TweetByHashTag';
import TweetByUser from '../pages/home/tweetsByUser/tweetsByUser';

const App = () => {
  return (
    <BrowserRouter>
      <Route
        path={'/'}
        render={() => {
          return (
            <Layout>
              <Switch>
                <Route exact path={'/'} component={Home} />
                <Route
                  exact
                  path={'/hashtags/:hashtag'}
                  component={TweetByHashTag}
                />
                <Route exact path={'/users/:user'} component={TweetByUser} />
                <Route component={Page404}></Route>
              </Switch>
            </Layout>
          );
        }}
      />
    </BrowserRouter>
  );
};
export default App;
