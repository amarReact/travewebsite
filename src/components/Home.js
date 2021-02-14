import React from 'react';
import Footer from "./Footer";
import Header from "./Header"
import Homebanner from "./HomeComponents/Homebanner";
import Sidebar from "./HomeComponents/Sidebar";
import Tabcomponent from "./HomeComponents/Tabcomponent"

const Home = () =>{
  return(
    <>
      <Header />
        <Homebanner />
        <section className="container">
          <section className="middelDiv">
            <Tabcomponent />
            <Sidebar />
          </section>
        </section>
      <Footer/>		
    </> 
  )
}

export default Home;
