import { Box, Container, Flex } from 'theme-ui';

import InternalNavLink from './InternalNavLink';

const Nav: React.FC = () => (
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
