import React from "react";
import { Box, FormControl, FormLabel, Input, Button, Textarea, Select } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box maxWidth="400px" margin="0 auto">
      <form>
        <FormControl marginBottom="4">
          <FormLabel>Name</FormLabel>
          <Input type="text" required />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Email</FormLabel>
          <Input type="email" required />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Phone Number</FormLabel>
          <Input type="tel" required />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Preferred Contact Time</FormLabel>
          <Select placeholder="Select time">
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="teal" width="100%">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
