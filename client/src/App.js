import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact'
import Home from './components/Home';
import FooterPage from './components/FooterPage';
//import Wrapper from './components/Wrapper';
//import projectsDB from "./projectsDB.json";
//import Project from './components/Project';


function App() {

  
  const [currentPage, handlePageChange] = useState(Home);



  /* const renderProjects = () => {
    return <Wrapper>
              {projectsDB.map(project => (
                <Project
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  github={project.github}
                  deploy={project.deploy}
                  technologies={project.technologies}
                />
              ))}
          </Wrapper>
  } */
  /* const renderPage = () => {

    switch(currentPage){
      case 'Start Room': return ;//start button video
      case 'Contact': return <Contact />
      case 'About': return <About /> 
      default : return <Home />
    }
  };
 */

  return (
  <> 
  <Nav
              currentPage={currentPage}
              handlePageChange= {handlePageChange}
               />
    <Router>

    
    <div>
      
      <main>
            
            <Switch>
                {/* <Route exact path="/" component={Home} /> */}
                {/* <Route exact path="/start" component={Login} />
                <Route exact path="/signup" component={Signup} /> */}
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={Home} />
            </Switch>
             <FooterPage />
   
      </main>
    </div>
    </Router>
    </> 
  );
}

export default App;
