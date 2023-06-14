import { Helmet, HelmetProvider } from "react-helmet-async";

const PageTitle = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{children}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default PageTitle;
