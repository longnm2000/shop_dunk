import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/Logo_ShopDunk.png";
import "./HeaderComponent.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function HeaderComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const expand = "lg";
  return (
    <Navbar expand={expand} className="header-sd">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Shop Dunk" className="header-logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-between flex-grow-1 ">
              <Nav.Link href="#action1" className="header-text">
                iPhone
              </Nav.Link>
              <Nav.Link href="#action2" className="header-text">
                iPad
              </Nav.Link>
              <Nav.Link href="#action2" className="header-text">
                Mac
              </Nav.Link>
              <Nav.Link href="#action2" className="header-text">
                Watch
              </Nav.Link>
              <Nav.Link href="#action2" className="header-text">
                Âm thanh
              </Nav.Link>
              <Nav.Link href="#action2" className="header-text">
                Phụ kiện
              </Nav.Link>
              <NavDropdown title="Dịch vụ" menuVariant="dark" align="center">
                <NavDropdown.Item href="#action3">
                  Bảo hành ủy quyền Apple
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4">Trả góp</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Thu cũ đổi mới
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Workshop</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2" className="header-text">
                Tin tức
              </Nav.Link>
              <Nav.Link href="#action2" className="header-text">
                Khuyến mại
              </Nav.Link>
              <Nav.Link
                href="#action2"
                className="header-text"
                onClick={handleShow}
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Nav.Link>
              <Nav.Link href="#action2" className="header-text">
                <i class="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
              <NavDropdown
                title="Tài khoản"
                align={"center"}
                className="header-text"
              >
                <NavDropdown.Item href="#action5">Đăng nhập</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Đăng ký</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Form.Control
            type="text"
            placeholder="Tìm kiếm"
            autoFocus
            className="me-3"
          />
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default HeaderComponent;
