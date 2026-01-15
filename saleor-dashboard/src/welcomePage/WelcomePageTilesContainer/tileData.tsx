import { IntlShape } from "react-intl";

import { WelcomePageInfoTileProps } from "./WelcomePageInfoTile";

export const getTilesData = ({
  intl,
  onTileButtonClick,
}: {
  intl: IntlShape;
  onTileButtonClick: (tileId: string) => void;
}): WelcomePageInfoTileProps[] => {
  void intl;
  void onTileButtonClick;

  // White-label mode: remove promotional/external tiles.
  return [];
};
