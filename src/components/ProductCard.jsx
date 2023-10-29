import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import lappy from "../svg/lappy.svg";

const ProductCard = ({data}) => {
const {title, duration} = data
  return (
    <Stack display={"flex"} w={'45vw'} flexDir={'row'}  border={'2px solid'} m={'auto'} p={'15px 30px'}   justifyContent={'left'} bgColor={'#D0D0D5'} alignItems={'center'} >
      <Box w={"45px"}  >
        <img  src={lappy} alt="icon" />
      </Box>
      <Text pl={'20px'} fontSize={'xl'}> {title}+ {duration} </Text>
    </Stack>
  );
};

export default ProductCard;
