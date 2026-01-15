import { TopNav } from "@dashboard/components/AppLayout/TopNav";
import { Box, Text } from "@saleor/macaw-ui-next";

import { helpHomePath } from "../urls";

export const HelpExtensions = () => {
  return (
    <Box>
      <TopNav title="Saylor Help: Extensions" href={helpHomePath} />
      <Box padding={6} display="grid" gap={4}>
        <Text as="h2" size={6} fontWeight="bold">
          Extensions
        </Text>
        <Text color="default2" display="block">
          Put your internal guide for installing/configuring extensions here.
        </Text>
      </Box>
    </Box>
  );
};
