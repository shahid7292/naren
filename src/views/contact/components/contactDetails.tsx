import React from "react";
import Link from "next/link";
import {
  Center,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HEADING_VARIANTS } from "@/theme/components/heading";
import { CONTACT_LIST } from "../contact.constants";

const ContactDetails = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4}>
      {CONTACT_LIST.map((contact, index) => {
        return (
          <VStack key={index} spacing={3}>
            <Center h="60px" w="60px" borderRadius={"full"} bg="brand.100">
              <Icon as={contact.icon} color="black" fontSize={"24px"} />
            </Center>
            <VStack>
              <Heading color="brand.100" variant={HEADING_VARIANTS.SUBTITLE3}>
                {contact.Title}
              </Heading>
              <Link href={contact.path} target="_blank">
                <Text textAlign="center">{contact.content}</Text>
              </Link>
            </VStack>
          </VStack>
        );
      })}
    </SimpleGrid>
  );
};

export default ContactDetails;
