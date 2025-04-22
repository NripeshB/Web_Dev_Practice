import { Container, Logo, LogoutBtn } from '../Index'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React from 'react'

function Header(){
      const authStatus = useSelector((state) => state.auth.status)
      
}

export default Header