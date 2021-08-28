import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'
import InputContextProvider from './Contexts/InputContext';
import { Layout } from './UI/Layout';
import { WriteBlogPost } from './Components/WriteBlogPost';
import { AllBlogs } from './pages/AllBlogs';
import { BlogDetail } from './pages/BlogDetail';

function App() {
  return (
    <InputContextProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/blogs" />
            </Route>

            <Route path="/new-blog" exact>
              <WriteBlogPost />
            </Route>

            <Route path="/blogs" exact>
              <AllBlogs />
            </Route>

            <Route path="/blogs/:blogId">
              <BlogDetail />
            </Route>

          </Switch>
        </Layout>
      </BrowserRouter>
    </InputContextProvider>
  );
}

export default App;
