"use client";
import React from "react";
import Image from "next/image";
import { AspectRatio, Box, SimpleGrid, Text } from "@chakra-ui/react";
import Banner from "public/contact-banner.jpeg";
import SafeView from "@/components/safeView";
import ContactForm from "./components/contactForm";

const Contact = () => {
  return (
    <SafeView>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        my={12}
        spacing={{ base: 6, md: 8 }}
      >
        <Box w="full">
          <ContactForm />
        </Box>
        <Box w="full">
          <AspectRatio position={"relative"} ratio={3 / 2}>
            <Image
              alt="Banner"
              fill
              src={Banner}
              style={{ borderRadius: "5px" }}
            />
          </AspectRatio>
        </Box>
      </SimpleGrid>
    </SafeView>
  );
};

export default Contact;
