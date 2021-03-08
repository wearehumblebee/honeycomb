/** @jsx jsx */
import { AspectRatio, Card, Flex, Heading, Link, jsx } from 'theme-ui';
import { FunctionComponent } from 'react';

interface ProjectCardProps {
  color: string;
  link: string;
  title: string;
}

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  color,
  link,
  title,
}: ProjectCardProps) => (
  <Card variant="primary">
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ display: 'block', color: 'inherit' }}
    >
      <AspectRatio ratio={16 / 9} sx={{ mb: 3 }}>
        <Flex
          sx={{
            flexFlow: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: color,
          }}
        >
          <Heading as="h3">{title}</Heading>
        </Flex>
      </AspectRatio>
    </Link>
  </Card>
);

export default ProjectCard;
