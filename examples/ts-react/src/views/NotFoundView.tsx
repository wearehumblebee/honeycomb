import { Container, Flex, Heading, Paragraph } from 'theme-ui';
// import { Paragraph } from '@humblebee/ui-react';
import { FunctionComponent } from 'react';

const NotFoundView: FunctionComponent = () => (
  <Container>
    <Flex as="header" sx={{ flexFlow: 'column', alignItems: 'center', py: 6 }}>
      <Heading as="h1">404 Not Found</Heading>
      <Paragraph>The page you are looking for does not exists</Paragraph>
    </Flex>
  </Container>
);

export default NotFoundView;
