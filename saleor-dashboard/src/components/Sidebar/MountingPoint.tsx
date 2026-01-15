import sideBarDefaultLogoDarkMode from "@assets/images/saleor-logo-white.svg";
import sideBarDefaultLogo from "@assets/images/saleor-logo.svg";
import { useLegacyThemeHandler } from "@dashboard/components/Sidebar/user/Controls";
import { Avatar, Box, Text } from "@saleor/macaw-ui-next";

export const MountingPoint = () => {
  const { theme } = useLegacyThemeHandler();
  const logo = theme === "defaultLight" ? sideBarDefaultLogo : sideBarDefaultLogoDarkMode;

  return (
    <Box
      display="flex"
      gap={3}
      paddingX={4}
      paddingY={5}
      alignItems="center"
    >
      <Avatar.Store src={logo} scheme="accent1" size="small" />
      <Text size={3} fontWeight="bold" __flex="1">
        Saylor Dashboard
      </Text>
    </Box>
  );
};
