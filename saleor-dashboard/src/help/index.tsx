import { Route } from "@dashboard/components/Router";
import { WindowTitle } from "@dashboard/components/WindowTitle";
import { Switch } from "react-router-dom";

import { HelpApi } from "./views/HelpApi";
import { HelpExtensions } from "./views/HelpExtensions";
import { HelpHome } from "./views/HelpHome";
import { HelpSupport } from "./views/HelpSupport";
import { helpApiPath, helpExtensionsPath, helpHomePath, helpSupportPath } from "./urls";

export const HelpSection = () => {
  return (
    <>
      <WindowTitle title="Saylor Help" />
      <Switch>
        <Route exact path={helpHomePath} component={HelpHome} />
        <Route exact path={helpApiPath} component={HelpApi} />
        <Route exact path={helpExtensionsPath} component={HelpExtensions} />
        <Route exact path={helpSupportPath} component={HelpSupport} />
      </Switch>
    </>
  );
};

export default HelpSection;
