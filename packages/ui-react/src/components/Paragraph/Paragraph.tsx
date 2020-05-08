import React from 'react';
import { Text, TextProps } from 'theme-ui';

// Stick with relative imports for other packages to resolve those properly
import { Assign, ForwardRef } from '../../types';

export type ParagraphProps = Assign<React.ComponentPropsWithRef<'p'>, TextProps>;

const Paragraph: ForwardRef<HTMLParagraphElement, ParagraphProps> = React.forwardRef((props, ref) => (
  <Text as="p" {...props} ref={ref} />
));

Paragraph.displayName = 'Paragraph';

export default Paragraph;
