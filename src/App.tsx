//import logo from './logo.svg';
import * as React from 'react';
//import './App.css';

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>{children}</div>
  );
};

const Header = ({ children }: { children: JSX.Element }) => {
  return (
    <div>{children}</div>
  );
};

interface LayoutProps {
  children:React.ReactNode;
}
const Layout:React.FC<LayoutProps> =({children})=>{
 return(
  <div>{children}</div>
 );
}


function App() {
  return (
    <div className="App">
      <h1> This is just an example</h1>
      <Card><div>Hello</div></Card>
      <Header><div>dont accept string</div></Header>
      <Layout>this is children</Layout>
    </div>
  );
}

export default App;
