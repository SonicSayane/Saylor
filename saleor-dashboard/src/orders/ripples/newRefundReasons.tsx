import { Ripple } from "@dashboard/ripples/types";
import { Paragraph } from "@saleor/macaw-ui-next";

export const rippleNewRefundReasons: Ripple = {
  ID: "new-refund-reasons",
  TTL_seconds: 60 * 60 * 24 * 2, // 2 days
  content: {
    oneLiner: "Structured refund reasons",
    contextual: "Refund reasons are now more powerful with pre-defined choices",
    global: (
      <>
        <Paragraph>
          Refund reasons are now more powerful. You can add reason to the &#34;manual refund&#34;.
          Additionally, you can configure refunds to use structured data to enforce specific reasons
          to be provided when refunds are issued.
        </Paragraph>
      </>
    ),
  },
  // Added in 3.22
  dateAdded: new Date(2025, 8, 1),
};
