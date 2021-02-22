/** @jsx jsx */
import { ThemeUIStyleObject, jsx } from 'theme-ui';

import { renderWithTheme } from 'tests/utils';
import { Paragraph } from 'src';

describe('components > Paragraph', () => {
  it('renders as expected', () => {
    const content =
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    const { container } = renderWithTheme(<Paragraph>{content}</Paragraph>);

    expect(container).toHaveTextContent(content);
  });

  it('renders as a specific HTML element', () => {
    const testId = 'parent';
    const { getByTestId } = renderWithTheme(
      <Paragraph data-testid={testId} as="span">
        Lorem ipsum dolor sit amet
      </Paragraph>,
    );

    expect(getByTestId(testId)).toBeInstanceOf(HTMLSpanElement);
  });

  it('renders with a specific style based on theme variant', () => {
    const testId = 'paragraph';
    const variantName = 'custom';
    const variantStyle: ThemeUIStyleObject = {
      color: '#161616',
      textTransform: 'uppercase',
    };

    const { getByTestId } = renderWithTheme(
      <Paragraph data-testid={testId} variant={variantName}>
        Lorem ipsum dolor sit amet
      </Paragraph>,
      {
        theme: {
          text: {
            // Add a custom variant with some specific style to the theme
            [variantName]: variantStyle,
          },
        },
      },
    );

    expect(getByTestId(testId)).toHaveStyle(variantStyle);
  });
});
