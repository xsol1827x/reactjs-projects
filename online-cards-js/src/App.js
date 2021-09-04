import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { CreateCard } from './pages/CreateCard';
import { Intro } from './pages/Intro';
import { Auth } from './pages/Auth';
import { Layout } from './UI/Layout';
import { ViewCard } from './pages/ViewCard';

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
              <Intro />
            </Route>

            <Route path="/login" exact>
              <Auth />
            </Route>

            <Route path="/create-card" exact>
              <CreateCard />
            </Route>

            <Route path="/my-card" exact>
              <ViewCard />
            </Route>

          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
