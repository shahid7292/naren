import React from "react";
import Link from "next/link";
import {
  Center,
  Heading,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { HEADING_VARIANTS } from "@/theme/components/heading";
import { INPUT_VARIANTS } from "@/theme/components/input";
import { CONTACT_LIST } from "../contact.constants";

const ContactForm = () => {
  return (
    <Stack spacing={4}>
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
      <Stack spacing={3}>
        <Input placeholder="Name" size="lg" variant={INPUT_VARIANTS.FILLED} />
        <Input placeholder="Email" size="lg" variant={INPUT_VARIANTS.FILLED} />
        <Input
          placeholder="Subject"
          size="lg"
          variant={INPUT_VARIANTS.FILLED}
        />
        <Textarea placeholder="Message" variant={INPUT_VARIANTS.FILLED} />
      </Stack>
    </Stack>
  );
};

export default ContactForm;
