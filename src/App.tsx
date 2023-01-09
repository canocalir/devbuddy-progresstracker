
import Layout from './Layout/Layout';
import AppRouter from './routes/AppRouter';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Layout>
      <AppRouter/>
      </Layout>
    </>
  );
}

export default App;
