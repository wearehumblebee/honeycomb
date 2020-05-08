/** @jsx jsx */
import { Container, Flex, Grid, Heading, jsx } from 'theme-ui';
import { Paragraph } from '@humblebee/ui-react';
import { FunctionComponent } from 'react';

import ProjectCard from '../components/ProjectCard';

const HomeView: FunctionComponent = () => (
  <Container>
    <Flex as="header" py={6} sx={{ flexFlow: 'column', alignItems: 'center' }}>
      <Heading as="h1" mb={4}>
        <span role="img" aria-label="Bee">
          🐝
        </span>{' '}
        Hello World!{' '}
        <span role="img" aria-label="Bee">
          🐝
        </span>
      </Heading>
      <Paragraph>This project is a minimalist example using theme-ui and @humblebee/ui-react</Paragraph>
    </Flex>
    <Grid columns={[1, null, 3]} gap={4} sx={{ textAlign: 'center' }}>
      <ProjectCard color="rgb(51, 51, 238)" link="https://theme-ui.com" title="Theme UI" />
      <ProjectCard color="rgb(0, 0, 255)" link="https://styled-system.com" title="Styled System" />
      <ProjectCard color="rgb(211, 106, 194)" link="https://emotion.sh" title="Emotion" />
    </Grid>
  </Container>
);

export default HomeView;
