import React from 'react';
import { Text, TextProps } from 'theme-ui';

export type ParagraphProps = TextProps;

/**
 * This component was created before being added to theme-ui
 * @deprecated import Paragraph instead from theme-ui instead
 */
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>((props, ref) => (
  <Text as="p" {...props} ref={ref} />
));

Paragraph.displayName = 'Paragraph';

export default Paragraph;
