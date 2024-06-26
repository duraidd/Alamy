import React, { useEffect, useState } from 'react'
import img2 from '../Img/download.png'
import img3 from '../Img/business.png'
import img4 from '../Img/gallery.png'
import img5 from '../Img/search.png'
import img6 from '../Img/photo-camera.png'

import axios from 'axios'
import APIClient from '../Contanst/APIClient.json'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function Check() {


  const [first, setfirst] = useState([])

  useEffect(() => {


    setfirst(APIClient.photos)


    // axios.get('https://simple-pexels-proxy.onrender.com/search?query=car&per_page=5&page=5').then((res)=>{
    //   console.log("res",res)
    // }).catch((err)=>{
    //   console.log("err",err)
    // })

  }, [])

  console.log("first", first)

  return (
    <div style={{ minHeight: '100vh' }}>
      <div style={{ backgroundColor: "black", display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", flexWrap: "wrap" }}>
        <h1 style={{ padding: "10px", order: -1 }}>My Image Search</h1>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", padding: "10px" }}>
          <p style={{ cursor: "pointer" }}><img height={'12px'} width={'15px'} src={img3} style={{ cursor: "pointer" }} /> Lightboxes</p>
          <p style={{ cursor: "pointer" }} ><img height={'10px'} width={'15px'} src={img2} style={{ cursor: "pointer" }} /> Lightboxes</p>
          <button style={{ cursor: "pointer", padding: "5px" }}>SignIn</button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "black", flexWrap: "wrap", padding: "10px" }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
          <img height={"24px"} width={"24px"} src={img4} style={{ zIndex: 3, position: "absolute", left: "18px" }} /> <select style={{ padding: "10px 0px 10px 30px" }}>
            <option value="all" > All Images </option>
          </select></div>
        <div><input /><img height={"12px"} width={"12px"} src={img5} style={{ zIndex: 3, position: "absolute", right: "45%", marginTop: "8px" }} /></div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}><img height={"24px"} width={"24px"} src={img6} /><button style={{ marginLeft: "5px" }}>search by image</button></div>
      </div>
      <div style={{ display: "flex" }}><div style={{ border: "0.1px solid black", padding: "10px" }}>All</div><div style={{ border: "0.1px solid black", padding: "10px" }}>Creative</div><div style={{ border: "0.1px solid black", padding: "10px" }}>Editorial</div></div>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", padding: "10px" }} >
        {first.map((txt, i) => (
          <Card style={{ width: '20%', height: "20%" }}>
            <Card.Img variant="top" height={"240px"} width={"240px"} src={txt.src['original']} />
            <Card.Body><Card.Title>{txt.photographer}</Card.Title>

              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>

  )
}
