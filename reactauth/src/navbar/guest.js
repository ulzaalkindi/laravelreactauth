import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'

function Guest() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </>
    )
}

export default Guest;