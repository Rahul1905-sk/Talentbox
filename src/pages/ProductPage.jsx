import React from "react";
import Navbar from "../components/Navbar";
import { Heading, Stack, Text } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
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
          <ProductCard
            data={"(New) Responsive Web Design Certification (300 hours)"}
          />
          <ProductCard
            data={"Legacy Responsive Web Design Certification (300 hours)"}
          />
          <ProductCard
            data={
              "Javascript Algorithms and Data Structures Certification (300 hours)"
            }
          />
          <ProductCard
            data={"Front End Development Libraries Certification (300 hours)"}
          />
          <ProductCard
            data={"Back End Development and APIs Certification (300 hours)"}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ProductPage;
