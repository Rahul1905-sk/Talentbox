"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Center,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigation = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, pass });

    if (!flag) {
      loginFun();
    } else {
      signupFun();
    }
  };

  const signupFun = () => {
    let obj = { name, email, pass };

    axios
      .post("https://puce-fine-moose.cyclic.app/users/register", obj)
      .then((res) => {
        alert(res.data.msg);
        loginFun()
      });
  };

  const loginFun = () => {
    let obj = { name, email, pass };

    axios
      .post("https://puce-fine-moose.cyclic.app/users/login", obj)
      .then((res) => {
        alert(res.data.msg);
        console.log(res.data);
        const token = res?.data?.token;
        if (token) {
          localStorage.setItem("token", token);
          localStorage.setItem("userName", name);
          navigation("/learn");
        }
      });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgColor={"#D0D0D5"}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={8} px={6}>
        <Box
          border={"2px solid"}
          w={"md"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack mb={8} align={"center"}>
            <img
              width="30px"
              src="https://cdn.freecodecamp.org/platform/universal/logo-512X512.png"
              alt="logo"
            />
            <Heading fontSize={"2xl"} textAlign={"center"}>
              Log in to freeCodeCamp <br /> Learn
            </Heading>
          </Stack>

          <Center p={3}>
            <Button
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Center>

          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter bg="white" px="4">
              OR
            </AbsoluteCenter>
          </Box>

          <form onSubmit={handleSubmit}>
            {flag ? (
              <Stack spacing={4}>
                <Box>
                  <FormControl id="Name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </Box>

                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      required
                      type={"password"}
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button variant={"ghost"}></Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"#FFB83C"}
                    color={"black"}
                    _hover={{
                      bg: "#ffb73cf2",
                    }}
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  {" "}
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link onClick={() => setFlag(!flag)} color={"blue.400"}>
                      Sign in
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            ) : (
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      required
                      type={"password"}
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button variant={"ghost"}></Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"#FFB83C"}
                    color={"black"}
                    _hover={{
                      bg: "#ffb73cf2",
                    }}
                    type="submit"
                  >
                    {" "}
                    Sign In
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Create a new account{" "}
                    <Link onClick={() => setFlag(!flag)} color={"blue.400"}>
                      Sign up
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            )}
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
