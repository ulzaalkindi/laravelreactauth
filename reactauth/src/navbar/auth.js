import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import AuthUser from '../components/AuthUser'
function Auth() {
    const { token, logout } = AuthUser();
    const logoutUser = () => {
        if (token != undefined) {
            logout();
        }
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</Nav.Link>
                        <Nav.Link role="button" onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </>
    )
}

export default Auth;