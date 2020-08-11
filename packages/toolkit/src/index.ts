import {
  getFrontendBabelConfiguration,
  FrontendBabelConfigurationOptions,
  getNodeBabelConfiguration,
  NodeBabelConfigurationOptions,
} from './configurations/babel';
import { DevelopmentConfiguration, ProductionConfiguration, getWebpackConfiguration } from './configurations/webpack';

export {
  // babel
  getFrontendBabelConfiguration,
  FrontendBabelConfigurationOptions,
  getNodeBabelConfiguration,
  NodeBabelConfigurationOptions,
  // webpack
  DevelopmentConfiguration,
  ProductionConfiguration,
  getWebpackConfiguration,
};
