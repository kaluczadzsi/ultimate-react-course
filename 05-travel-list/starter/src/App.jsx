import Logo from './components/Logo';
import Form from './components/Form';
import Stats from './components/Stats';
import PackingList from './components/PackingList';
const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
