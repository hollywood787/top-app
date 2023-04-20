import { FunctionComponent } from "react";
import { Layout } from "./layout";


export const withLayout = <T extends Record<string, unknown>>(
    Component: FunctionComponent<T>
  ) => {
    return function withLayoutCompontent(props: T) {
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    };
  };
  