import * as React from 'react';

import { fireEvent, render } from 'tests/utils';
import FormView from 'src/views/FormView';

const formData = {
  username: 'Néo',
  email: 'neo@metacortex.biz',
  password: '1<3Tr1n1t14Ever',
  role: 'hacker',
  confidenceAboutJumpingBetweenBuildings: 2,
  acceptTheTruth: true,
};

describe('views > FormView', () => {
  const spies: jest.SpyInstance[] = [];

  beforeEach(() => {
    spies.push(jest.spyOn(console, 'info').mockImplementation());
  });

  afterEach(() => {
    spies.forEach((spy) => spy.mockRestore());
  });

  it('renders as expected', () => {
    const { getByText } = render(<FormView />);

    expect(getByText('zion ally', { exact: false })).toBeVisible();
    expect(getByText('apply', { exact: false })).toBeVisible();
  });

  it('shows a feedback when red pill is selected', () => {
    const { getByText, getByLabelText } = render(<FormView />);

    const data = {
      ...formData,
      pill: 'red',
    };

    // Simulate input change
    const usernameField = getByLabelText('your name', { exact: false });
    const emailField = getByLabelText('your email', { exact: false });
    const passwordField = getByLabelText('password', { exact: false });
    const roleField = getByLabelText('how would you help', { exact: false });
    const redPillField = getByLabelText('red pill', { exact: false });
    const bluePillField = getByLabelText('blue pill', { exact: false });
    const confidenceField = getByLabelText('free is your mind', { exact: false });
    const acceptTheTruthField = getByLabelText('truth', { exact: false });
    const submitButton = getByText('apply', { exact: false });

    fireEvent.change(usernameField, { target: { value: data.username } });
    fireEvent.change(emailField, { target: { value: data.email } });
    fireEvent.change(passwordField, { target: { value: data.password } });
    fireEvent.change(roleField, { target: { value: data.role } });
    fireEvent.click(data.pill === 'red' ? redPillField : bluePillField);
    fireEvent.change(confidenceField, {
      target: { value: data.confidenceAboutJumpingBetweenBuildings },
    });
    if (data.acceptTheTruth) {
      fireEvent.click(acceptTheTruthField);
    }

    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(getByText('welcome', { exact: false })).toBeVisible();
  });

  it('shows a different feedback when blue pill is selected', () => {
    const { getByText, getByLabelText } = render(<FormView />);

    const data = {
      ...formData,
      pill: 'blue',
    };

    // Simulate input change
    const usernameField = getByLabelText('your name', { exact: false });
    const emailField = getByLabelText('your email', { exact: false });
    const passwordField = getByLabelText('password', { exact: false });
    const roleField = getByLabelText('how would you help', { exact: false });
    const redPillField = getByLabelText('red pill', { exact: false });
    const bluePillField = getByLabelText('blue pill', { exact: false });
    const confidenceField = getByLabelText('free is your mind', { exact: false });
    const acceptTheTruthField = getByLabelText('truth', { exact: false });
    const submitButton = getByText('apply', { exact: false });

    fireEvent.change(usernameField, { target: { value: data.username } });
    fireEvent.change(emailField, { target: { value: data.email } });
    fireEvent.change(passwordField, { target: { value: data.password } });
    fireEvent.change(roleField, { target: { value: data.role } });
    fireEvent.click(data.pill === 'red' ? redPillField : bluePillField);
    fireEvent.change(confidenceField, {
      target: { value: data.confidenceAboutJumpingBetweenBuildings },
    });
    if (data.acceptTheTruth) {
      fireEvent.click(acceptTheTruthField);
    }

    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(getByText('good night', { exact: false })).toBeVisible();
  });
});
