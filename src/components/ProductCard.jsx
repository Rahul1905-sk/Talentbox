import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import lappy from "../svg/lappy.svg";

const ProductCard = ({data}) => {
  return (
    <Stack display={"flex"} w={'40vw'} flexDir={'row'} border={'2px solid'} m={'auto'} p={'8px 10px'}   justifyContent={'space-around'} bgColor={'#D0D0D5'} alignItems={'center'} >
      <Box w={"45px"} >
        <img  src={lappy} alt="icon" />
      </Box>
      <Text fontSize={'xl'}> {data} </Text>
    </Stack>
  );
};

export default ProductCard;
