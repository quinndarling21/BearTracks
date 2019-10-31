import React from 'react';
import './App.css';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Planner from '../Components/PlannerComponent/Planner'
import { Navbar, Nav } from 'react-bootstrap'
import NavLink from 'react-bootstrap/NavLink';



class App extends React.Component {
  render() {
    return(
      <DndProvider backend = {HTML5Backend}>
        <div className = "Website">
          <Navbar variant = "light" className = "BearTracksHeader" fixed = 'top'>
            <Navbar.Brand className = 'Brand'>
              <img className = 'Logo' src={require("../Images/HeaderLogo.png")} height="40" width="240"/>
            </Navbar.Brand>
            <Navbar.Collapse className = 'HeaderNavBar'>
              <Nav>
                <NavLink href = 'https://docs.google.com/forms/d/e/1FAIpQLSf02AMP-kJG6S1XTxAGFmMseDLgiTGmlZsk8HO7BHKqkvQRhg/viewform?usp=sf_link' target = '_blank'>Report Bug</NavLink>
                {/* <NavLink>My Profile</NavLink>
                <NavLink>Explore Degrees</NavLink>
                <NavLink>About BearTracks</NavLink> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Planner />
          <Navbar variant = 'light' className = "Footer">
            © BearTracks 2019
          </Navbar>
        </div>
      </DndProvider>
    );
  }
}



export default App;
