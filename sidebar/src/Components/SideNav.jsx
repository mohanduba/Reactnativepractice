import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faUser,
  faPrescriptionBottle,
  faFileMedical,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function SideNav({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      Path: "/Dashboard",
      name: "Dashboard",
      icon: <FontAwesomeIcon icon={faThLarge} />,
    },
    {
      Path: "/Patient",
      name: "Patient",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      Path: "/Prescription",
      name: "Prescription",
      icon: <FontAwesomeIcon icon={faPrescriptionBottle} />,
    },
    {
      Path: "/TreatmentPlans",
      name: "Treatment Plans",
      icon: <FontAwesomeIcon icon={faFileMedical} />,
    },
    {
      Path: "/ReportsAnalytics",
      name: "Reports & Analytics",
      icon: <FontAwesomeIcon icon={faChartBar} />,
    },
  ];

  return (
    <>
      <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
        {/* Sidebar */}
        <div
          style={{ width: isOpen ? "300px" : "65px", overflowY: "auto" }}
          className="sidebar"
        >
          {/* Sidebar content */}
          <div className="top-section">
            <h1 className="logo" style={{ display: isOpen ? "block" : "none" }}>
              Logo
            </h1>
            <div
              className="bars"
              style={{ marginLeft: isOpen ? "160px" : "0px" }}
            >
              <FaBars onClick={toggleMenu} />
            </div>
          </div>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.Path}
              key={index}
              className="link"
              activeClassName="active"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              <div className="icons">{item.icon}</div>
              <div
                className="link-text"
                style={{ display: isOpen ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>

        {/* Main area */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Header */}
          <div className="header-section">
            <div className="div-slkvkdvmsd">
              <input type="text" className="form-control" />
              <div className="div-fmvsikm">
                <button className="border-0" style={{ padding: ".3rem .8rem" }}>
                  Sign in
                </button>
              </div>
            </div>

            <div className="bars-small">
              <Button
                variant="primary"
                onClick={handleShow}
                className="bars123"
              >
                <FaBars />
              </Button>
              <Offcanvas
                show={show}
                onHide={handleClose}
                className="offcanvas-dark"
              >
                <Offcanvas.Header closeButton className="btn-close-white">
                  <Offcanvas.Title>Drawer</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {menuItem.map((item, index) => (
                    <NavLink
                      to={item.Path}
                      key={index}
                      className="link-fbfbfb"
                      activeClassName="active"
                      onClick={handleClose}
                    >
                      <div className="icons">{item.icon}</div>
                      <div className="link-text">{item.name}</div>
                    </NavLink>
                  ))}
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>

          {/* Scrollable main content */}
          <main
            style={{
              overflowY: "auto",
              height: "100%",
              padding: "20px",
            }}
            className="main"
          >
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default SideNav;
