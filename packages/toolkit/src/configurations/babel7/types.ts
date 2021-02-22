export interface BabelConfigurationOptions {
  // Overrides default env preset options
  envPresetOptions?: Record<string, unknown>;
  // custom configuration extension
  extension?: Record<string, unknown>;
}
