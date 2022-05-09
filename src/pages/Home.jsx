import React from 'react';
import Cover from '../components/Cover'
import About from '../components/AboutComponent'
import Clients from '../components/ClientsComponent'
import Projects from '../components/ProjectsComponent'
import Hireme from '../components/HiremeComponent'
import Footer from '../components/Footer'



const Home = () => {
    return (
        
        <div>
            <Cover/>
            <About/>
            <Clients/>
            <Projects/>
            <Hireme/>
            <Footer/>
            
        </div>
       
    );
};

export default Home;