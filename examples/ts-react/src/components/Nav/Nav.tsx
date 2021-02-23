/** @jsx jsx */
import { Box, Container, Flex, jsx } from 'theme-ui';
import { FunctionComponent } from 'react';

import InternalNavLink from './InternalNavLink';

const Nav: FunctionComponent = () => (
  <Box
    as="nav"
    sx={{
      mb: 4,
      backgroundColor: 'secondary',
      borderBottom: '1px solid',
      borderBottomColor: 'primary',
    }}
  >
    <Container>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <InternalNavLink to="/">Home</InternalNavLink>
          <InternalNavLink to="/form">Form</InternalNavLink>
        </Box>
      </Flex>
    </Container>
  </Box>
);

export default Nav;
