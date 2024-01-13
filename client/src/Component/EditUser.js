import styled from '@emotion/styled'
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { editUser, getUser } from '../Service/app';
import {useNavigate, useParams} from "react-router-dom";



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


const EditUser = () => {
   
    const [user, setuser] = useState({defaultValue});

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
        const response = await getUser(id);
        setuser(response.data);
    }


    const onValueChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value});
    }

  const editUserDetails = async () => {
     await editUser(user, id);
     navigate('/all');
  }

  return (
    
        <Container>
            <Typography  variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <InputLabel>Address</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name="address" value={user.address}/>
            </FormControl>
            <FormControl>
               <Button variant='contained' onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    
  )
}

export default EditUser