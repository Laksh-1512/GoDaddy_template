import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import First_page from './First_page';
import Body from './Body';
import Templates from './Templates';
import Contact_us from './Contact_us';

function App() {
  return (
    <div className="bg-gray-200">
      <Header></Header>
      <Search></Search>
      <First_page></First_page>
      <Body></Body>
      <Templates></Templates>
      <Contact_us></Contact_us>
    </div>
  );
}

export default App;
