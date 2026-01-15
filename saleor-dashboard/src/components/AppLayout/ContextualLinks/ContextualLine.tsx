import { Box, Paragraph, TextProps } from "@saleor/macaw-ui-next";
import * as React from "react";

import Link from "@dashboard/components/Link";
import { isExternalURL } from "@dashboard/utils/urls";

const Root = ({ children, ...rest }: TextProps) => (
  <Paragraph
    width="100%"
    color="default2"
    fontWeight="medium"
    fontSize={2}
    paddingBottom={2}
    paddingTop={1}
    {...rest}
  >
    {children}
  </Paragraph>
);

const ContextualLineLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <Box textDecoration="underline">
    <Link
      href={href}
      target={isExternalURL(href) ? "_blank" : undefined}
      rel={isExternalURL(href) ? "noopener noreferrer" : undefined}
      onClick={onClick}
      underline
    >
      {children}
    </Link>
  </Box>
);

export const ContextualLine = Object.assign(Root, {
  Link: ContextualLineLink,
});
