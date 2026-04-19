/**
 * Extract props configuration from component variants
 * This allows auto-generation of controls based on CVA config
 */

export function extractPropsFromVariants(variantsConfigRaw) {
  if (!variantsConfigRaw) {
    return [];
  }

  const props = [];
  const { variants, defaultVariants } = variantsConfigRaw;

  if (!variants) {
    return [];
  }

  Object.entries(variants).forEach(([propName, options]) => {
    props.push({
      name: propName,
      type: 'select',
      options: Object.keys(options),
      defaultValue: defaultVariants?.[propName] || Object.keys(options)[0],
      description: `${propName.charAt(0).toUpperCase() + propName.slice(1)} style variant`,
    });
  });

  return props;
}

export function getDefaultProps(propsConfig) {
  const defaults = {};
  
  propsConfig.forEach(prop => {
    if (prop.defaultValue !== undefined) {
      defaults[prop.name] = prop.defaultValue;
    }
  });

  return defaults;
}
