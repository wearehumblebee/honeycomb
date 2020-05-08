/** @jsx jsx */
import { Container, Flex, Heading, jsx } from 'theme-ui';
import { Paragraph } from '@humblebee/ui-react';
import { FunctionComponent } from 'react';

const NotFoundView: FunctionComponent = () => (
  <Container>
    <Flex as="header" py={6} sx={{ flexFlow: 'column', alignItems: 'center' }}>
      <Heading as="h1">404 Not Found</Heading>
      <Paragraph>The page you are looking for does not exists</Paragraph>
    </Flex>
  </Container>
);

export default NotFoundView;
