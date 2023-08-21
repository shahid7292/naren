"use client";
import React from "react";
import Image from "next/image";
import { AspectRatio, Box, Center, SimpleGrid, Stack } from "@chakra-ui/react";
import Banner from "public/contact-banner.jpeg";
import SafeView from "@/components/safeView";
import ContactDetails from "./components/contactDetails";
import ContactForm from "./components/contactForm";

const Contact = () => {
  return (
    <SafeView>
      <Stack my={12} spacing={6}>
        <Center>
          <Box w={{ base: "full", lg: "70%" }}>
            <ContactDetails />
          </Box>
        </Center>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
          <Box w="full">
            <ContactForm />
          </Box>
          <AspectRatio position={"relative"} ratio={3 / 2}>
            <Image
              alt="Banner"
              fill
              src={Banner}
              style={{ borderRadius: "5px" }}
            />
          </AspectRatio>
        </SimpleGrid>
      </Stack>
    </SafeView>
  );
};

export default Contact;
