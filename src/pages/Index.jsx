import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button, Text, UnorderedList, ListItem, Code, Image, Select } from "@chakra-ui/react";

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

      <Heading as="h3" size="md" marginBottom="10px">
        HTML Form:
      </Heading>
      <Code marginBottom="20px">
        {`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Business Valuation Tool</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form id="valuationForm">
        <label for="annualRevenue">Annual Revenue:</label>
        <input type="number" id="annualRevenue" required>

        <label for="profitMargin">Profit Margin (%):</label>
        <input type="number" id="profitMargin" required>

        <button type="submit">Calculate</button>
    </form>

    <div id="valuationResult"></div>

    <script src="script.js"></script>
</body>
</html>
        `}
      </Code>

      <Heading as="h3" size="md" marginBottom="10px">
        CSS (style.css):
      </Heading>
      <Code marginBottom="20px">
        {`
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

#valuationForm {
    margin-bottom: 20px;
}

input {
    margin-bottom: 10px;
    padding: 8px;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

#valuationResult {
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    margin-top: 20px;
}
        `}
      </Code>

      <Heading as="h3" size="md" marginBottom="10px">
        JavaScript (script.js):
      </Heading>
      <Code marginBottom="20px">
        {`
document.getElementById('valuationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const annualRevenue = document.getElementById('annualRevenue').value;
    const profitMargin = document.getElementById('profitMargin').value;

    // Example calculation - replace with your formula
    const valuation = (annualRevenue * profitMargin / 100) * 2.5;

    document.getElementById('valuationResult').innerText = \`Estimated Business Valuation: $\${valuation.toFixed(2)}\`;
});
        `}
      </Code>

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
    </Box>
  );
};

export default Index;
