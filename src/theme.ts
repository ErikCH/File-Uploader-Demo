import { Theme } from "@aws-amplify/ui-react";

export const theme: Theme = {
  name: "UploaderTheme",
  tokens: {
    components: {
      heading: {
        2: {
          fontWeight: { value: "{fontWeights.bold" },
          fontSize: { value: "{fontSizes.medium}" }
        }
      }
    }
  }
};
