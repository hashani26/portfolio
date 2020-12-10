import React from 'react';
import { CustomButton } from '../components/CustomButton';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Button } from 'antd';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CustomButton></CustomButton>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<CustomButton>To Do</CustomButton>);
  expect(getByTestId('button')).toHaveTextContent('To Do');
});

it('matches snapshot 1', () => {
  const tree = renderer.create(<Button>Add Task</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot 2', () => {
  const tree = renderer.create(<Button>To Do</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
