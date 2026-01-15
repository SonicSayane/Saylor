import Link from "@dashboard/components/Link";
import { Box, Text } from "@saleor/macaw-ui-next";

import { helpApiPath, helpExtensionsPath, helpSupportPath } from "../urls";

export const HelpHome = () => {
  return (
    <Box padding={6} display="grid" gap={4}>
      <Box>
        <Text as="h1" size={8} fontWeight="bold">
          Saylor Help
        </Text>
        <Text color="default2" display="block">
          Internal help center for Saylor.
        </Text>
      </Box>

      <Box display="grid" gap={2}>
        <Link href={helpApiPath} underline>
          API
        </Link>
        <Link href={helpExtensionsPath} underline>
          Extensions
        </Link>
        <Link href={helpSupportPath} underline>
          Support
        </Link>
      </Box>

      <Text color="default2" display="block">
        This page is a placeholder. Add your onboarding guides, internal docs, and support contact
        details here.
      </Text>
    </Box>
  );
};
