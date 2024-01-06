import React from 'react'
import styled from 'styled-components'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    padding: 20px 40px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
`;

const Left=styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
`;

const Logo=styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
`;

const Search=styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Input=styled.input`
    width: 300px;
    padding: 10px 40px;
    outline: none;
    border: none;
    background-color: rgba(0,0,0,0.06);
    border-radius: 20px;
`;


const Right=styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;
const Login=styled(Link)`
    display: flex;
    align-items: center;
    background-color: #0d52bd;
    padding:4px 14px;
    border-radius: 20px;
    color: white;
    gap: 3px;
    cursor: pointer;
    &:hover{
        background-color: #1035ac;
    }
    text-decoration: none;
`;

const Home=styled(HomeIcon)`
    color: #0d52bd;
    border: 1px solid #0d52bd;
    border-radius: 10px;
    padding: 3px;
    cursor: pointer;
    &:hover{
       color: #1035ac;
    }
`;

export default function Navbar() {
  return (
    <Container>
        <Left>
            <Logo>
                <img src="logo.jpg" alt="" style={{width:'25px'}} />
                MyBlog
            </Logo>
            <Search>
                <SearchIcon style={{position:"absolute",left:'8px'}}/>
                <Input type="text" />
            </Search>
        </Left>
        <Right>
            <Link to="/" style={{display:'flex',alignItems:'center'}}><Home/></Link>
            <Login to="/login">
                Login <ArrowRightAltIcon/>
            </Login>
        </Right>
    </Container>
  )
}
