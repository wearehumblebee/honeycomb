import * as React from 'react';

import { render } from 'tests/utils';
import ProjectCard from 'src/components/ProjectCard';

describe('components > ProjectCard', () => {
  it('renders as expected', () => {
    const title = 'Test';
    const { getByText } = render(
      <ProjectCard color="black" link="http://localhost" title={title} />,
    );

    expect(getByText(title)).toBeVisible();
  });
});
