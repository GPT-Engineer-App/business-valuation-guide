import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Text, UnorderedList, ListItem, Code, Image, Select, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";

const Index = () => {
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [profitMargin, setProfitMargin] = useState("");
  const [valuation, setValuation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedValuation = ((annualRevenue * profitMargin) / 100) * 2.5;
    setValuation(calculatedValuation.toFixed(2));
  };

  return (
    <Box maxWidth="800px" margin="0 auto" padding="20px" backgroundColor="gray.50">
      <Heading as="h1" size="xl" marginBottom="20px">
        Business Valuation Tool Guide
      </Heading>

      <Heading as="h2" size="lg" marginBottom="10px">
        1. Frontend Setup:
      </Heading>
      <UnorderedList marginBottom="20px">
        <ListItem>HTML form for user inputs.</ListItem>
        <ListItem>JavaScript for handling form submission and calculation.</ListItem>
        <ListItem>CSS for styling the form and results.</ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg" marginBottom="10px">
        2. Backend Logic:
      </Heading>
      <UnorderedList marginBottom="20px">
        <ListItem>A server-side language (e.g., PHP, Node.js) for complex calculations or database interactions, if needed.</ListItem>
        <ListItem>API endpoints if the calculation is handled server-side.</ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg" marginBottom="10px">
        3. Database (Optional):
      </Heading>
      <Text marginBottom="20px">If storing user inputs or past valuations, a database like MySQL or MongoDB is needed.</Text>

      <Heading as="h2" size="lg" marginBottom="10px">
        4. Security & Compliance:
      </Heading>
      <UnorderedList marginBottom="20px">
        <ListItem>Implement HTTPS for secure data transmission.</ListItem>
        <ListItem>Validate and sanitize inputs to prevent SQL injection or XSS attacks.</ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg" marginBottom="10px">
        Detailed Guide:
      </Heading>

      <Heading as="h2" size="lg" marginBottom="10px">
        5. Additional Features:
      </Heading>
      <UnorderedList marginBottom="20px">
        <ListItem>Option to download the valuation report as a PDF.</ListItem>
        <ListItem>Integration with analytics to track usage.</ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg" marginBottom="10px">
        6. User Guidance:
      </Heading>
      <Text marginBottom="20px">Include tooltips or a help section explaining how to use the tool.</Text>

      <Heading as="h2" size="lg" marginBottom="10px">
        7. Optimization:
      </Heading>
      <UnorderedList marginBottom="20px">
        <ListItem>Optimize for performance and responsiveness.</ListItem>
        <ListItem>Regularly update the calculation logic based on market trends.</ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg" marginBottom="10px">
        8. Legal Compliance:
      </Heading>
      <Text marginBottom="20px">Ensure the tool complies with financial and data protection regulations.</Text>

      <Heading as="h2" size="lg" marginBottom="10px">
        Business Valuation Tool
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl marginBottom="4">
          <FormLabel>Industry Sector:</FormLabel>
          <Select placeholder="Select industry" required>
            <option value="tech">Technology</option>
            <option value="retail">Retail</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="energy">Energy</option>
            <option value="realestate">Real Estate</option>
            <option value="construction">Construction</option>
            <option value="hospitality">Hospitality</option>
            <option value="transportation">Transportation</option>
          </Select>
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Years in Business:</FormLabel>
          <Input type="number" required />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Number of Employees:</FormLabel>
          <Input type="number" required />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Assets:</FormLabel>
          <Input type="number" required />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Liabilities:</FormLabel>
          <Input type="number" required />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Annual Revenue:</FormLabel>
          <Input type="number" value={annualRevenue} onChange={(e) => setAnnualRevenue(e.target.value)} required />
        </FormControl>
        <FormControl marginBottom="4">
          <FormLabel>Profit Margin (%):</FormLabel>
          <Input type="number" value={profitMargin} onChange={(e) => setProfitMargin(e.target.value)} required />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Calculate
        </Button>
      </form>
      {valuation && (
        <Box marginTop="8" padding="6" backgroundColor="blue.50" borderRadius="md">
          <Text>Estimated Business Valuation: ${valuation}</Text>
        </Box>
      )}

      {valuation && (
        <Box marginTop="4">
          <Button colorScheme="blue" marginRight="4">
            Export
          </Button>
          <Button colorScheme="blue">Share</Button>
        </Box>
      )}
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">1. Frontend Setup</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>HTML form for user inputs.</ListItem>
              <ListItem>JavaScript for handling form submission and calculation.</ListItem>
              <ListItem>CSS for styling the form and results.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">2. Backend Logic</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>A server-side language (e.g., PHP, Node.js) for complex calculations or database interactions, if needed.</ListItem>
              <ListItem>API endpoints if the calculation is handled server-side.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">3. Database (Optional)</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>If storing user inputs or past valuations, a database like MySQL or MongoDB is needed.</Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">4. Security & Compliance</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Implement HTTPS for secure data transmission.</ListItem>
              <ListItem>Validate and sanitize inputs to prevent SQL injection or XSS attacks.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">5. Additional Features</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Option to download the valuation report as a PDF.</ListItem>
              <ListItem>Integration with analytics to track usage.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">6. User Guidance</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>Include tooltips or a help section explaining how to use the tool.</Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">7. Optimization</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList>
              <ListItem>Optimize for performance and responsiveness.</ListItem>
              <ListItem>Regularly update the calculation logic based on market trends.</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">8. Legal Compliance</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Text>Ensure the tool complies with financial and data protection regulations.</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Index;
