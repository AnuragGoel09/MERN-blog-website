import React from 'react'
import styled from 'styled-components'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SearchIcon from '@mui/icons-material/Search';

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

// const Center=styled.div``;

const Right=styled.div``;

// const NavItems=styled.div``;

const Login=styled.div`
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
            {/* <Center>
                <NavItems>Home</NavItems>
                <NavItems>About</NavItems>
                <NavItems>Policy</NavItems>
                <NavItems>Home</NavItems>
            </Center>     */}
        <Right>
            <Login>
                Login <ArrowRightAltIcon/>
            </Login>
        </Right>
    </Container>
  )
}
