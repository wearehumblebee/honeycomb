/** @jsx jsx */
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Heading,
  Input,
  Label,
  Radio,
  Select,
  Slider,
  Styled,
  Text,
  jsx,
} from 'theme-ui';
import { Paragraph } from '@humblebee/ui-react';
import { FormEvent, FunctionComponent, useState } from 'react';

interface ApplicationFormState {
  username?: string;
  email?: string;
  password?: string;
  role: string;
  pill: string;
  acceptTheTruth: boolean;
  confidenceAboutJumpingBetweenBuildings: number;
}

const FormView: FunctionComponent = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<ApplicationFormState>({
    username: '',
    email: '',
    password: '',
    role: 'hacker',
    pill: '',
    acceptTheTruth: false,
    confidenceAboutJumpingBetweenBuildings: 5,
  });

  const onFieldChange = (key: keyof ApplicationFormState, value: string | number | boolean): void => {
    setIsFormSubmitted(false);
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsFormSubmitted(true);
    console.info("You did not think we would expose Zion's API publicly, did you?");
  };

  return (
    <Container>
      <Heading as="h1">Become a Zion ally</Heading>
      <form onSubmit={handleSubmit}>
        <Grid columns={[1, 2]}>
          <Box sx={{ my: 3 }}>
            <Label htmlFor="matrix.enrollment.username">What is your name?</Label>
            <Input
              id="matrix.enrollment.username"
              name="matrix.enrollment.username"
              type="text"
              onChange={(event): void => onFieldChange('username', event.currentTarget.value)}
              value={formData.username}
              placeholder="Neo"
              required
            />
          </Box>
          <Box sx={{ my: 3 }}>
            <Label htmlFor="matrix.enrollment.email">What is your email?</Label>
            <Input
              id="matrix.enrollment.email"
              name="matrix.enrollment.email"
              type="email"
              onChange={(event): void => onFieldChange('email', event.currentTarget.value)}
              value={formData.email}
              placeholder="neo@metacortex.biz"
              required
            />
          </Box>
        </Grid>
        <Grid columns={[1, 2]}>
          <Box sx={{ my: 3 }}>
            <Label htmlFor="matrix.enrollment.password">Want a password?</Label>
            <Input
              id="matrix.enrollment.password"
              name="matrix.enrollment.password"
              type="password"
              onChange={(event): void => onFieldChange('password', event.currentTarget.value)}
              value={formData.password}
              placeholder="i<3tr1n1ty4ever"
            />
          </Box>
          <Box sx={{ my: 3 }}>
            <Label htmlFor="matrix.enrollment.role">How would you help?</Label>
            <Select
              id="matrix.enrollment.role"
              name="matrix.enrollment.role"
              onChange={(event): void => onFieldChange('role', event.currentTarget.value)}
              value={formData.role}
              required
            >
              <option value="hacker">Hacker</option>
              <option value="operator">Operator</option>
              <option value="keymaker">Keemaker</option>
              <option value="oracle">Oracle</option>
            </Select>
          </Box>
        </Grid>
        <Box sx={{ my: 3 }}>
          <Label htmlFor="matrix.enrollment.confidenceAboutJumpingBetweenBuildings">How free is your mind?</Label>
          <Slider
            id="matrix.enrollment.confidenceAboutJumpingBetweenBuildings"
            name="matrix.enrollment.confidenceAboutJumpingBetweenBuildings"
            onChange={(event): void =>
              onFieldChange('confidenceAboutJumpingBetweenBuildings', event.currentTarget.value)
            }
            value={formData.confidenceAboutJumpingBetweenBuildings}
            min={0}
            max={10}
          />
        </Box>
        <Box sx={{ my: 3 }}>
          <Paragraph>This is your last chance. After this, there is no turning back.</Paragraph>
          <Label>
            <Radio
              id="matrix.enrollment.pill.blue"
              name="matrix.enrollment.pill"
              onChange={(event): void => onFieldChange('pill', event.currentTarget.value)}
              checked={formData.pill === 'blue'}
              value="blue"
              required
            />
            You take the&nbsp;
            <Text as="span" style={{ color: 'blue' }}>
              blue
            </Text>
            &nbsp;pill: the story ends, you wake up in your bed and believe whatever you want to believe.
          </Label>
          <Label>
            <Radio
              id="matrix.enrollment.pill.red"
              name="matrix.enrollment.pill"
              onChange={(event): void => onFieldChange('pill', event.currentTarget.value)}
              checked={formData.pill === 'red'}
              value="red"
              required
            />
            You take the&nbsp;
            <Text as="span" style={{ color: 'red' }}>
              red
            </Text>
            &nbsp;pill: you stay in Wonderland, and I show you how deep the rabbit hole goes.
          </Label>
        </Box>
        <Box sx={{ my: 3 }}>
          <Label sx={{ fontStyle: 'italic' }}>
            <Checkbox
              id="matrix.enrollment.acceptTheTruth"
              name="matrix.enrollment.acceptTheTruth"
              onChange={(event): void => onFieldChange('acceptTheTruth', !!event.currentTarget.checked)}
              checked={!!formData.acceptTheTruth}
              required
            />
            Remember: all I am offering is the&nbsp;<u>truth</u>. Nothing more.
          </Label>
        </Box>
        <Button type="submit" disabled={!!isFormSubmitted} variant={isFormSubmitted ? 'muted' : 'primary'}>
          Apply
        </Button>
      </form>
      <Divider sx={{ my: 3 }} />
      {isFormSubmitted && (
        <Alert variant="primary">
          <Paragraph>{formData.pill === 'red' ? 'Welcome to Zion!' : 'Good night then...'}</Paragraph>
        </Alert>
      )}
      <Styled.pre color={isFormSubmitted ? 'primary' : 'inherit'}>{JSON.stringify(formData, null, 2)}</Styled.pre>
    </Container>
  );
};

export default FormView;
