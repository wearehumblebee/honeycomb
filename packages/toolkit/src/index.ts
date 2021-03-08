import {
  getFrontendConfiguration as getBabel7FrontendConfiguration,
  getNodeConfiguration as getBabel7NodeConfiguration,
  FrontendConfigurationOptions as babel7_FrontendConfigurationOptions,
  NodeConfigurationOptions as babel7_NodeConfigurationOptions,
} from './configurations/babel7';
import {
  DevelopmentConfiguration as webpack4_DevelopmentConfiguration,
  ProductionConfiguration as webpack4_ProductionConfiguration,
  getWebpackConfiguration as getWebpack4Configuration,
} from './configurations/webpack4';

export type {
  babel7_FrontendConfigurationOptions,
  babel7_NodeConfigurationOptions,
  webpack4_DevelopmentConfiguration,
  webpack4_ProductionConfiguration,
};

export {
  // babel
  getBabel7FrontendConfiguration,
  getBabel7NodeConfiguration,
  // webpack
  getWebpack4Configuration,
};
