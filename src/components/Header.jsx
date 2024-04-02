import React from "react";
import { Box, Flex, Spacer, Image, Link } from "@chakra-ui/react";

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
        <Link href="/contact" color="white" fontWeight="bold">
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
