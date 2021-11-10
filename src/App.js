import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { Layout } from './UI/Layout';
import { Main } from './pages/Main';
import { Postcard } from './pages/Postcard';
import { Finder } from './pages/Finder';
import { Gallery } from './pages/Gallery';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/intro" />
            </Route>

            <Route path="/intro" exact>
              <Main />
            </Route>

            <Route path="/my-travels" exact>
              <Postcard />
            </Route>

            <Route path="/search">
              <Finder />
            </Route>

            <Route path="/gallery">
              <Gallery />
            </Route>

          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
