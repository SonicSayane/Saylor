import {
  API_GUIDE_DOCS,
  API_REFERENCE_DOCS,
  EXTENDING_WITH_WEBHOOKS_DOCS_URL,
  EXTENSIONS_DOCS_URL,
  GIFT_CARD_PRODUCT_DOCS_URL,
  ORDER_MANAGEMENT_DOCS_URL,
  PRODUCT_CONFIGURATION_DOCS_URL,
  USER_PERMISSIONS_DOCS_URL,
} from "@dashboard/links";
import { useIntl } from "react-intl";

import { ContextualLine } from "./ContextualLine";
import { contextualLinks } from "./messages";

type SubtitleType =
  | "extending_saleor"
  | "product_list"
  | "order_list"
  | "dev_panel"
  | "gift_cards"
  | "staff_members"
  | "extensions";

export const useContextualLink = (type: SubtitleType) => {
  const intl = useIntl();

  switch (type) {
    case "staff_members":
      return intl.formatMessage(contextualLinks.staffMembers, {
        userPermissions: (
          <ContextualLine.Link href={USER_PERMISSIONS_DOCS_URL}>
            {intl.formatMessage(contextualLinks.userPermissions)}
          </ContextualLine.Link>
        ),
      });
    case "extending_saleor":
      return intl.formatMessage(contextualLinks.webhooks, {
        extendingSaleor: (
          <ContextualLine.Link href={EXTENDING_WITH_WEBHOOKS_DOCS_URL}>
            {intl.formatMessage(contextualLinks.extendingSaleor)}
          </ContextualLine.Link>
        ),
      });
    case "dev_panel":
      return intl.formatMessage(contextualLinks.devModePanel, {
        apiReference: (
          <ContextualLine.Link href={API_REFERENCE_DOCS}>
            {intl.formatMessage(contextualLinks.apiReference)}
          </ContextualLine.Link>
        ),
        apiGuide: (
          <ContextualLine.Link href={API_GUIDE_DOCS}>
            {intl.formatMessage(contextualLinks.apiGuide)}
          </ContextualLine.Link>
        ),
      });
    case "order_list":
      return intl.formatMessage(contextualLinks.orders, {
        orderManagement: (
          <ContextualLine.Link href={ORDER_MANAGEMENT_DOCS_URL}>
            {intl.formatMessage(contextualLinks.orderManagement)}
          </ContextualLine.Link>
        ),
      });
    case "product_list":
      return intl.formatMessage(contextualLinks.products, {
        productConfigurations: (
          <ContextualLine.Link href={PRODUCT_CONFIGURATION_DOCS_URL}>
            {intl.formatMessage(contextualLinks.productConfigurations)}
          </ContextualLine.Link>
        ),
      });
    case "gift_cards":
      return intl.formatMessage(contextualLinks.giftCards, {
        giftCards: (
          <ContextualLine.Link href={GIFT_CARD_PRODUCT_DOCS_URL}>
            {intl.formatMessage(contextualLinks.giftCardsDocs)}
          </ContextualLine.Link>
        ),
      });
    case "extensions":
      return intl.formatMessage(contextualLinks.extensions, {
        extensions: (
          <ContextualLine.Link href={EXTENSIONS_DOCS_URL}>
            {intl.formatMessage(contextualLinks.extensionsDocs)}
          </ContextualLine.Link>
        ),
      });
    default:
      return null;
  }
};
