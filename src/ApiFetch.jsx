import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import axios from 'axios'


function ApiFetch() {
    const [data,setData]=useState([])
    const [randomId,setRandomId]=useState(Math.floor(Math.random() * (30 )) + 1)
    useEffect(()=>{
        axios.get("https://dummyjson.com/users").then((res)=>{
           setData(res.data.users)
        })
    },[])
  return (
    <div  style={{width:'700px',height:'600px'}} className='bg-warning border rounded-5'>
        {data.filter((detail)=>detail.id==randomId).map(detail=>(<Row>
        <Col  className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <img width={250} height={250} style={{borderRadius:'125px'}} className='border border-2 ' src={detail.image} alt="" />
            <h5 className='mt-4'>{detail.firstName}_{detail.maidenName}_{detail.firstName}</h5>
            <p>{detail.gender}</p>
            <div className='row'>
                <div className='col-6 text-center mb-2'>
                        <h5>Birth Date</h5>
                        <p>{detail.birthDate}</p>
                </div>
                <div className='col-6 text-center mb-2'>
                        <h5>Age</h5>
                        <p>{detail.age}</p>
                </div>
                <div className='col-6 text-center mb-2 '>
                        <h5>Weight</h5>
                        <p>{detail.weight}</p>
                </div>
                <div className='col-6 text-center mb-2'>
                        <h5>Height</h5>
                        <p>{detail.height}</p>
                </div>
            </div>
            <Button onClick={()=>setRandomId(Math.floor(Math.random() * (30)) + 1)} variant="success">Refresh</Button>
        </Col>
        <Col className='d-flex flex-column mt-5'>
            <div className='mb-5'>
                <h5>Home Address</h5>
                <h6>{detail.address.address}</h6>
            </div>
            <div className='mb-5'>
                <h5>Mobile Phone</h5>
                <h6>{detail.phone}</h6>
            </div>
            <div className='mb-5'>
                <h5>Company</h5>
                <h6>{detail.company.name}</h6>
            </div>
            <div className='mb-5'>
                <h5>Job Title</h5>
                <h6>{detail.company.title}</h6>
            </div>
            <div className=''>
                <h5>E-mail</h5>
                <h6>{detail.email}</h6>
            </div>
        </Col>
      </Row>))}
    </div>
  )
}

export default ApiFetch