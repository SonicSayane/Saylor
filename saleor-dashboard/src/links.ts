import { AppErrorCode } from "./graphql";

import { helpApiPath, helpExtensionsPath, helpHomePath } from "./help/urls";

export const TECHNICAL_HELP_CTA_URL =
  helpHomePath;

export const DOCS_ULRS = {
  TRANSACTIONS_AUTOMATIC_CHECKOUT_COMPLETION:
    helpApiPath,
};

export const MISSING_APPS_TYPEFORM_URL = "";

export const PRODUCT_CONFIGURATION_DOCS_URL =
  helpHomePath;
export const ORDER_MANAGEMENT_DOCS_URL = helpHomePath;
export const API_REFERENCE_DOCS = helpApiPath;
export const API_GUIDE_DOCS = helpApiPath;
export const EXTENDING_WITH_WEBHOOKS_DOCS_URL = helpHomePath;
export const USER_PERMISSIONS_DOCS_URL = helpHomePath;
export const ORDER_EVENTS_DOCS_URL = helpHomePath;
export const GIFT_CARD_PRODUCT_DOCS_URL = helpHomePath;
export const EXTENSIONS_DOCS_URL = helpExtensionsPath;
export const PLUGINS_DOCS_URL = helpExtensionsPath;
export const CUSTOM_EXTENSIONS_DOCS_URL = helpHomePath;
export const MANIFEST_FORMAT_DOCS_URL = helpHomePath;

const EXTENSION_MANIFEST_DOCS = helpExtensionsPath;

// Additional docs.saleor.io links
export const PAYMENT_APPS_DOCS_URL = helpHomePath;
export const PAYMENT_PLUGINS_DOCS_URL = helpHomePath;
export const TRANSACTION_FLOW_STRATEGY_DOCS_URL = helpApiPath;
export const APPS_OVERVIEW_DOCS_URL = helpExtensionsPath;
export const CHECKOUT_OVERVIEW_DOCS_URL = helpHomePath;
export const APP_PERMISSIONS_DOCS_URL = helpHomePath;
export const WEBHOOK_PAYLOAD_SIGNATURE_DOCS_URL = helpApiPath;
export const MANUAL_REFUND_DOCS_URL = helpHomePath;

// Welcome page links
export const SALEOR_GITHUB_URL = "";
export const SALEOR_DISCORD_URL = "";
export const DASHBOARD_DOCS_URL = "";

export const getSpecificManifestErrorDocLink = (errorCode?: AppErrorCode): string => {
  if (!errorCode) {
    return EXTENSION_MANIFEST_DOCS;
  }

  const codeToLinkMap: Record<AppErrorCode, string> = {
    [AppErrorCode.INVALID_URL_FORMAT]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeinvalid_url_format`,
    [AppErrorCode.INVALID_PERMISSION]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeinvalid_permission`,
    [AppErrorCode.OUT_OF_SCOPE_PERMISSION]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeout_of_scope_permission`,
    [AppErrorCode.MANIFEST_URL_CANT_CONNECT]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodemanifest_url_cant_connect`,
    [AppErrorCode.INVALID_MANIFEST_FORMAT]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeinvalid_manifest_format`,
    [AppErrorCode.REQUIRED]: `${EXTENSION_MANIFEST_DOCS}#apperrorcoderequired`,
    [AppErrorCode.UNIQUE]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeunique`,
    [AppErrorCode.UNSUPPORTED_SALEOR_VERSION]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeunsupported_saleor_version`,
    [AppErrorCode.INVALID_CUSTOM_HEADERS]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeinvalid_custom_headers`,
    [AppErrorCode.GRAPHQL_ERROR]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodegraphql_error`,
    [AppErrorCode.INVALID]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeinvalid`,
    [AppErrorCode.INVALID_STATUS]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodeinvalid_status`,
    [AppErrorCode.NOT_FOUND]: `${EXTENSION_MANIFEST_DOCS}#apperrorcodenot_found`,
    [AppErrorCode.FORBIDDEN]: EXTENSION_MANIFEST_DOCS, // No docs section
    [AppErrorCode.OUT_OF_SCOPE_APP]: EXTENSION_MANIFEST_DOCS, // No docs sect
  };

  return codeToLinkMap[errorCode] || "";
};
