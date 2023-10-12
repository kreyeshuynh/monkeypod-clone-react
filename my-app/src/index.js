import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Container id="topMenu" fluid className="container-fluid px-0 justify-content-center pb-2">
    <Navbar expand="lg">
      <Container>
        <Nav className="justify-content-start">
          <Nav.Link href="#" className="nav-item">ABOUT</Nav.Link>
          <Nav.Link href="#" className="nav-item">CAREERS</Nav.Link>
          <Nav.Link href="#" className="nav-item">LOCATIONS</Nav.Link>
        </Nav>
        <Image className="mx-auto d-block" src="https://monkeypodkitchen.com/img/general/monkeypod-kitchen-logo.png" width={200}/>
        <Nav className="justify-content-end">
          <Nav.Link href="#" className="nav-item">SHOP</Nav.Link>
          <Nav.Link href="#" className="nav-item"><Facebook></Facebook></Nav.Link>
          <Nav.Link href="#" className="nav-item"><Twitter></Twitter></Nav.Link>
          <Nav.Link href="#" className="nav-item"><Instagram></Instagram></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </Container>
);

const CenterImage = () => (
  <Image src="https://monkeypodkitchen.com/img/monk/home/1-Feast.jpg" alt="full-size-image" class="img-fluid"/>
);

const CenterText = () => (
  <Container id="centerText" fluid className="container-fluid px-0 justify-content-center">
    <Container className="col-8 text-center text-align" height="1000px">
      <h3 className="pt-5">LUCKY LIVE HAWAII</h3>
      <h5 className="mt-2">Monkeypod Kitchen by Merriman is a place where foodies, beer lovers, and families escape the stresses of their day-to-day lives by enjoying an ice-cold beer and a great meal while surrounded by people who consider them honored guests and friends.</h5>
    </Container>
  </Container>
);

const MailingList = () => (
  <Container fluid className="container-fluid px-0 justify-content-center" id="mailing">
    <Container className="col-8 text-center pt-5" height="1000px">
      <h3 >JOIN OUR MAILING LIST</h3>
      <label>
        <input type="text" placeholder="Email Address"/>
        <Container className="btn btn-light">Subscribe</Container>
      </label>
    </Container>
  </Container>
);

const BottomMenu = () => (
  <footer className="mt-auto p-5" id="bottomMenu">
    <Container className="container">
      <Container className="row">
        <Container className="col">
          MENU
          <hr/>
          About<br/>
          Careers<br/>
          Shop
        </Container>
        <Container className="col">
          <Image src="https://monkeypodkitchen.com/img/general/luckylive.png" alt="hawaii" width="300px" className="img-fluid rounded"/>
        </Container>
        <Container className="col">
          FOLLOW US
          <hr/>
          <ul className="navbar-nav">
            <li className="nav-item"><i className="bi bi-facebook p-1"></i></li>
            <li className="nav-item"><i className="bi bi-twitter p-1"></i></li>
            <li className="nav-item"><i className="bi bi-instagram p-1"></i></li>
          </ul>
          <br/>
          ALSO VISIT
          <hr/>
          <Image src="https://monkeypodkitchen.com/img/general/visitmoku_active.png" alt="hawaii" width="100px" className="img-fluid rounded"/>
        </Container>
      </Container>
    </Container>
  </footer>
);

const Monkeypod = () => (
  <div className="d-flex flex-column min-vh-100">
    <TopMenu />
    <CenterImage/>
    <CenterText/>
    <MailingList/>
    <BottomMenu/>
  </div>
);

ReactDOM.render(<Monkeypod />, document.getElementById('root'));