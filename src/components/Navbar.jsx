import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { ImFire } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {

const [loginStatus, setLoginStatus] = useState(false)
const [name, setName] = useState('')
useEffect(() => {
let token =  localStorage.getItem('token')

if(token) {
  setLoginStatus(true)
  setName(localStorage.getItem('userName'))
} else {
  setLoginStatus(false)

}
}, [])




  return (
    <Stack
      className="navbg"
      display="flex"
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bgColor={"#0A0A23"}
      color={"white"}
      padding={"10px"}
    >
      <Box width={"sm"}>
        <InputGroup>
          <InputLeftAddon
            borderRadius={0}
            height={"30px"}
            bgColor={"#3B3B4F"}
            padding={"10px"}
            children={<FiSearch />}
          />
          <Input
            bgColor={"#3B3B4F"}
            borderRadius={0}
            height={"30px"}
            placeholder="Search 9,000+ tutorials"
          />
        </InputGroup>
      </Box>
      <Box width={"sm"} cursor={"pointer"} letterSpacing={1}>
        <Box w={"200px"}>
          <a href="/">

          <img
            src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
            alt="logo"
            />
            </a>
        </Box>
      </Box>
      <Stack
        spacing={2}
        className="onHoverBtn"
        display={"flex"}
        flexDir={"row"}
      >
        <Button
          variant={"outline"}
          colorScheme="none"
          style={{ borderRadius: "0", height: "30px" }}
        >
          <BsGlobe2 />
        </Button>
        <Button
          variant={"outline"}
          colorScheme="none"
          style={{ borderRadius: "0", height: "30px" }}
        >
          Menu
        </Button>
        <Link to="/signin">
          <Button
            style={{ borderRadius: "0", height: "30px" }}
            bgColor={"#FFB83C"}
            _hover={{
              bg: "#ffb73cf2",
              textDecoration: "none",
            }}
          >
            {loginStatus? name :'Sign in'}
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
