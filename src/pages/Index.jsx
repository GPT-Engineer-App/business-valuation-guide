import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Text, UnorderedList, ListItem, Code, Image, Select, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Card, CardBody, Flex, Spacer } from "@chakra-ui/react";
import { FaFileExport, FaShareAlt } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Index = () => {
  return (
    <>
      <Header />
      <Box maxWidth="800px" margin="0 auto" padding="20px">
        {}
        <Box marginTop="12">
          <Heading as="h2" size="xl" textAlign="center" marginBottom="6">
            Request a Consultation
          </Heading>
          <Text fontSize="lg" textAlign="center" marginBottom="8">
            Fill out the form below to get in touch with one of our business valuation experts.
          </Text>
          <ContactForm />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Index;
