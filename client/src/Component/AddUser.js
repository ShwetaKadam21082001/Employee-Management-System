import styled from '@emotion/styled'
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { addUser } from '../Service/app';
import {useNavigate} from "react-router-dom";

const Container = styled(FormGroup)`
   width: 500px;
   margin: 5% auto 0 auto;
   & > div{
     margin-top: 20px
   }
`;

const defaultValue = {
    name:"",
    email:"",
    phone:"",
    address:""
}


const AddUser = () => {
   
    const [user, setuser] = useState({defaultValue});

    const navigate = useNavigate();

    const onValueChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value});
    }

  const addUserDetails = async () => {
     await addUser(user);
     navigate('/all');
  }

  return (
    
        <Container>
            <Typography  variant='h4' >Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="address"/>
            </FormControl>
            <FormControl>
               <Button variant='contained' onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    
  )
}

export default AddUser