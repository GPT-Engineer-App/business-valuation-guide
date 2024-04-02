import React, { useState } from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";

const Chatbot = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text>Welcome to the Business Valuation Tool! How can I assist you today?</Text>
            <Button onClick={() => setStep(2)}>Get Started</Button>
          </>
        );
      case 2:
        return (
          <>
            <Text>How does the valuation process work?</Text>
            <Text>The valuation process involves analyzing your business's financial data, industry trends, and market conditions to determine an estimated value.</Text>
            <Button onClick={() => setStep(3)}>Next</Button>
          </>
        );
      case 3:
        return (
          <>
            <Text>What information do I need to provide?</Text>
            <Text>To receive a valuation, you'll need to provide information such as annual revenue, profit margin, assets, liabilities, and the number of years in business.</Text>
            <Button onClick={() => setStep(4)}>Next</Button>
          </>
        );
      case 4:
        return (
          <>
            <Text>Can I speak with a broker?</Text>
            <Text>Absolutely! Please fill out the contact form on our website, and one of our brokers will reach out to you shortly.</Text>
            <Button onClick={() => setStep(1)}>Start Over</Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box maxWidth="400px" margin="0 auto">
      <VStack spacing={4} align="stretch">
        {renderStep()}
      </VStack>
    </Box>
  );
};

export default Chatbot;
