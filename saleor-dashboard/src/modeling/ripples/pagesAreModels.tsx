import { Ripple } from "@dashboard/ripples/types";
import { Paragraph } from "@saleor/macaw-ui-next";

export const ripplePagesAreModels: Ripple = {
  ID: "pages-are-models",
  TTL_seconds: 60 * 60 * 24 * 2, // 2 days
  content: {
    oneLiner: "Pages are now called Models",
    contextual: "Pages are now called Models",
    global: (
      <>
        <Paragraph>
          We have renamed Pages to Models. API still uses the old naming, but it will change in the
          future.
        </Paragraph>
      </>
    ),
  },
  // Approx June it was changed in the dashboard
  dateAdded: new Date(2025, 5, 1),
};
