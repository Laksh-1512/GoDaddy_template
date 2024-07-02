import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import First_page from './First_page';
import Body from './Body';
import Templates from './Templates';
import Contact_us from './Contact_us';
import Loading from './Loading';
import { useEffect, useState } from 'react';

function App() {
  const [loadingeffect,setloadingeffect]=useState(true);
    useEffect(()=>{
        const fakedata=()=>{
            const x=setTimeout(() => {
                setloadingeffect(false);
            }, 3000);
            return ()=>clearTimeout(x);
        }
        fakedata();
    },[])

  return (
    <div className="bg-gray-200">
      {loadingeffect?<Loading></Loading>:<><Header></Header>
      <Search></Search>
      <First_page></First_page>
      <Body></Body>
      <Templates></Templates>
      <Contact_us></Contact_us></>}
    </div>
  );
}

export default App;
