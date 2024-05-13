import { WebModule, ValidateManifest } from "adept-web-modules";
import moduleCommonManifest from "./manifest";

class GreenModule extends WebModule {
  constructor() {
    super(moduleCommonManifest);
  }
}

const isValid = ValidateManifest(moduleCommonManifest);

const THE_GREEN_INSTANCE = isValid
  ? new GreenModule()
  : { error: "Invalid Configuration" };

export default THE_GREEN_INSTANCE;
