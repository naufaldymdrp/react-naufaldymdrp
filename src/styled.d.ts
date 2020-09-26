import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      main_shaded: string;
    };
    fontColors?: {
      main?: string;
    };
    size: {
      small: string;
      medium?: string;
    };
  }
}
