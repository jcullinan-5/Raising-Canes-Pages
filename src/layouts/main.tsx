import type { ReactNode } from "react";
import type { TemplateRenderProps, BaseProfile } from "src/types/entities";
import { AnalyticsProvider } from "@yext/sites-components";
import ErrorBoundaryWithAnalytics from "src/components/common/ErrorBoundaryWithAnalytics";
import { ConfigurationProvider } from "@yext/sites-react-components";
import { TemplateDataProvider } from "src/common/useTemplateData";
import { Header } from "src/components/common/Header";
import { Footer } from "src/components/common/Footer";
import { useExposeEnableYAFunction } from "src/common/useExposeEnableYAFunction";
import config from "src/config";
import { initi18n } from "src/i18n";
import { MobileHeader } from "src/components/common/MobileHeader";
import { MobileLocator } from "src/components/common/MobileLocator";

interface MainProps {
  data: TemplateRenderProps<BaseProfile>;
  children?: ReactNode;
}

const Main = (props: MainProps) => {
  initi18n(props.data.translations || {}, props.data.document.locale);

  return (
    <ConfigurationProvider value={config}>
      <AnalyticsProvider templateData={props.data} requireOptIn={true}>
        <MainInternal {...props} />
      </AnalyticsProvider>
    </ConfigurationProvider>
  );
};

const MainInternal = (props: MainProps) => {
  const { _site } = props.data.document;

  const { children } = props;

  // Create the global window.enableYextAnalytics function for clients that need to get user consent
  // If consent is not required, set requireOptIn on AnalyticsProvider above to false.
  useExposeEnableYAFunction();

  return (
    <TemplateDataProvider value={props.data}>
      <ErrorBoundaryWithAnalytics name="header">
        <Header />
        <MobileLocator />
        <MobileHeader />
      </ErrorBoundaryWithAnalytics>
      <div>{children}</div>
      <ErrorBoundaryWithAnalytics name="footer">
        <Footer />
      </ErrorBoundaryWithAnalytics>
    </TemplateDataProvider>
  );
};

export { Main };
