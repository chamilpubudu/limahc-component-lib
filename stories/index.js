import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SimpleComponent } from '../src';

storiesOf('SimpleComponent', module)
  .add('with text', () => (
    <SimpleComponent onClick={action('clicked')}>Hello Button</SimpleComponent>
  ))
  .add('with some emoji', () => (
    <SimpleComponent onClick={action('clicked')}>😀 😎 👍 💯</SimpleComponent>
  ));
