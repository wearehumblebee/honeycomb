import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';

import { getDevelopmentConfiguration, DevelopmentConfigurationOptions } from './development';
import { getProductionConfiguration, ProductionConfigurationOptions } from './production';

export type ConfigurationMode = 'development' | 'production';

const getConfiguration = (
  mode: ConfigurationMode,
  options: DevelopmentConfigurationOptions | ProductionConfigurationOptions,
  extension?: Configuration,
): Configuration => {
  let configuration: Configuration;

  switch (mode) {
    case 'development':
      configuration = getDevelopmentConfiguration(options as DevelopmentConfigurationOptions);
      break;
    case 'production':
    default:
      configuration = getProductionConfiguration(options as ProductionConfigurationOptions);
      break;
  }

  return extension ? merge(configuration, extension) : configuration;
};

export default getConfiguration;
