import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.50" py={4} mt={8}>
      <Box maxWidth="800px" margin="0 auto" textAlign="center">
        <Text>&copy; 2024 Business Valuation Tool. All rights reserved.</Text>
        <Link href="/terms" color="teal.500" mr={4}>
          Terms of Service
        </Link>
        <Link href="/privacy" color="teal.500">
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
