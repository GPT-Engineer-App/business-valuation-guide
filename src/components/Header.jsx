import React from "react";
import { Box, Flex, Spacer, Image, Link, Button } from "@chakra-ui/react";
import Chatbot from "./Chatbot";

const Header = () => {
  return (
    <Box bg="teal.500" py={4}>
      <Flex maxWidth="800px" margin="0 auto" alignItems="center">
        <Image src="/logo.png" alt="Logo" boxSize="50px" mr={4} />
        <Link href="/" color="white" fontWeight="bold" mr={8}>
          Home
        </Link>
        <Link href="/about" color="white" fontWeight="bold">
          About
        </Link>
        <Spacer />
        <Button colorScheme="white" variant="outline" mr={4}>
          Open Chatbot
        </Button>
        <Link href="/contact" color="white" fontWeight="bold">
          Contact
        </Link>
      </Flex>
      <Chatbot />
    </Box>
  );
};

export default Header;
