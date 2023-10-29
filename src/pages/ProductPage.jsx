import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Heading, Stack, Text } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";
import axios from 'axios'
import { useState } from "react";
const ProductPage = () => {


  const [data, setData] = useState([])

useEffect(() => {
  getData()
}, [])


  const getData = async() => {
    let res = await axios.get('https://puce-fine-moose.cyclic.app/course/')
    console.log(res)
    setData(res.data)
  }



  return (
    <>
      <Navbar />
      <Stack w={"40vw"} m={"auto"} mt={"15px"} textAlign={"center"}>
        <Text as={"b"} fontSize={"3xl"} className="myfont">
          {" "}
          Welcome to freeCodeCamp.org{" "}
        </Text>
        <br />
        <br />
        <Text className="myfont" fontSize={"xl"}>
          "I have not failed. I've just found 10,000 ways that won't work."
        </Text>
        <Text as="i" fontSize={"lg"}>
          - Thomas A. Edison
        </Text>

        <Stack my={"50px"}>
        
           {data.map((e,ind)=> <ProductCard key={e+ind}  data={e}/>)}
        </Stack>
      </Stack>
    </>
  );
};

export default ProductPage;
