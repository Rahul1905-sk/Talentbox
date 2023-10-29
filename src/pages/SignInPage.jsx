import React from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import { BsGlobe2 } from "react-icons/bs";
import { ImFire } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import LoginCard from "../components/LoginCard";

const SignInPage = () => {
  return (
    <>
      <Stack
        className="navbg"
        textAlign={"center"}
        bgColor={"#0A0A23"}
        color={"white"}
        padding={"10px"}
      >
        <Box w={"200px"} m={"auto"}>
          <img
            src="https://cdn.freecodecamp.org/platform/universal/fcc_primary.svg"
            alt="logo"
          />
        </Box>
      </Stack>
      <LoginCard />
    </>
  );
};

export default SignInPage;
