import { NavLink, NavLinkProps } from 'theme-ui';
import { Link } from 'react-router-dom';

interface InternalNavLinkProps extends NavLinkProps {
  to: string;
}

const InternalNavLink: React.FC<InternalNavLinkProps> = ({
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
