import React from "react";
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { BUTTON_VARIANTS } from "@/theme/components/button";
import { INPUT_VARIANTS } from "@/theme/components/input";

const ContactForm = () => {
  return (
    <Stack spacing={4}>
      <Input placeholder="Name" size="lg" variant={INPUT_VARIANTS.FILLED} />
      <Input placeholder="Email" size="lg" variant={INPUT_VARIANTS.FILLED} />
      <Input placeholder="Subject" size="lg" variant={INPUT_VARIANTS.FILLED} />
      <Textarea
        placeholder="Message"
        size="lg"
        variant={INPUT_VARIANTS.FILLED}
      />
      <Button size="lg" variant={BUTTON_VARIANTS.BRAND}>
        SEND MESSAGE
      </Button>
    </Stack>
  );
};

export default ContactForm;
