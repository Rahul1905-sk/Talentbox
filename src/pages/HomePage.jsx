import React from "react";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import google from "../svg/google.svg";
import apple from "../svg/apple.svg";
import microsoft from "../svg/microsoft.svg";
import spotify from "../svg/spotify.svg";
import amazon from "../svg/amazon.svg";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Stack w={"4xl"} m={"auto"} padding={"90px"}>
        <Heading size={"2xl"}> Learn to code — for free.</Heading> <br />
        <Heading size={"2xl"}>Build projects.</Heading> <br />
        <Heading size={"2xl"}>Earn certifications.</Heading> <br />
        <Heading mt={3} as={"p"} size={"md"}>
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </Heading>
        <Stack
          mt={2}
          display={"flex"}
          flexDir={"row"}
          justifyContent={"space-between"}
        >
          <img width={"35px"} src={apple} alt="google" />

          <img width={"100px"} src={google} alt="google" />

          <img width={"100px"} src={microsoft} alt="google" />
          <img width={"100px"} src={spotify} alt="google" />
          <img width={"100px"} src={amazon} alt="google" />
        </Stack>
        <Link to="/signin" style={{ margin: "auto" }}>
          <Button
            w={"md"}
            mt={5}
            py={"25px"}
            style={{ borderRadius: "0", height: "30px" }}
            fontSize={"xl"}
            bgColor={"#FFB83C"}
            _hover={{
              bg: "#ffb73cf2",
            }}
          >
            Get started (it's free)
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default HomePage;
