import { TopNav } from "@dashboard/components/AppLayout/TopNav";
import Link from "@dashboard/components/Link";
import { getSupportUrl } from "@dashboard/config";
import { Box, Text } from "@saleor/macaw-ui-next";

import { helpHomePath } from "../urls";

export const HelpSupport = () => {
  const supportUrl = getSupportUrl();

  return (
    <Box>
      <TopNav title="Saylor Help: Support" href={helpHomePath} />
      <Box padding={6} display="grid" gap={4}>
        <Text as="h2" size={6} fontWeight="bold">
          Support
        </Text>
        <Text color="default2" display="block">
          Add your support contact details here (email, ticketing link, chat widget).
        </Text>

        <Box>
          <Text display="block" fontWeight="medium">
            Support portal
          </Text>
          <Text color="default2" display="block">
            Configure `SUPPORT_URL` to enable the link.
          </Text>
          {supportUrl ? (
            <Link href={supportUrl} underline>
              Open support
            </Link>
          ) : (
            <Text color="default2" display="block">
              Support link is not configured.
            </Text>
          )}
        </Box>
      </Box>
    </Box>
  );
};
