/** @jsx jsx */
import { NavLink, NavLinkProps, jsx } from 'theme-ui';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface InternalNavLinkProps extends NavLinkProps {
  to: string;
}

const InternalNavLink: FunctionComponent<InternalNavLinkProps> = ({
  to,
  ...props
}: InternalNavLinkProps) => (
  <NavLink
    sx={{ px: 2, py: 3 }}
    {...props}
    as={(props: NavLinkProps): JSX.Element => <Link {...props} to={to} />}
  />
);

export default InternalNavLink;
