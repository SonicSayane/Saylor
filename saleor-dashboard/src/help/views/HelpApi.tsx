import Link from "@dashboard/components/Link";
import { TopNav } from "@dashboard/components/AppLayout/TopNav";
import { Box, Text } from "@saleor/macaw-ui-next";

import { helpHomePath } from "../urls";

export const HelpApi = () => {
  return (
    <Box>
      <TopNav title="Saylor Help: API" href={helpHomePath} />
      <Box padding={6} display="grid" gap={4}>
        <Text as="h2" size={6} fontWeight="bold">
          API documentation
        </Text>
        <Text color="default2" display="block">
          Add your internal API reference links here (GraphQL, webhooks, auth, etc.).
        </Text>
        <Text display="block">
          Example: <Link href="/graphql/" underline>GraphQL endpoint</Link>
        </Text>
      </Box>
    </Box>
  );
};
