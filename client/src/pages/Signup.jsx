import { Button ,Input} from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Head=styled.div`
    font-size: 25px;
    color: #0d52bd;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const Box=styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding: 60px;
`;

const SignUp=styled.div`
    display: flex;
    gap: 5px;
`;
const Links=styled(Link)`
    text-decoration: none;
    color:#0d52bd ;
    &:hover{
        color: #1035ac;
    }
`;
export default function Signup() {
  return (
    <Container>
        <Head>
            SIGNUP
        </Head>
        <Box>
            <Input fullWidth placeholder='Username' type='text'/>
            <Input fullWidth placeholder='Password' type='password'/>
            <Button fullWidth variant='contained'>Submit</Button>
            <SignUp>Already have an account ? <Links to="/login">Login </Links> here </SignUp>
        </Box>
    </Container>
  )
}
