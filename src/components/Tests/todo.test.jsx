import React from "react";
import { render, screen } from '@testing-library/react';
import configStore from 'redux-mock-store';
import Todo from '../todo/Todo';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';


test('should render our component', () => {
    const initialState = { state: []};
    const mockStore = configStore();

    const store = mockStore(initialState);

    render(
        <Provider store={store}>
        <Todo/>
        </Provider>
    );

    const todoElement = screen.getByTestId('todo-test');
    expect(todoElement).toBeInTheDocument();

})

test('should render our todos', () => {
    const initialState = { state: []};
    const mockStore = configStore();

    const store = mockStore(initialState);

    const todo = { data: 'This is a Task', done: true, createdAt: ''}
    render(
        <Provider store={store}>
        <Todo todo={todo}/>
        </Provider>
    );

    const todoElement = screen.getByTestId('todo-test');
    expect(todoElement).toHaveTextContent('This is a Task');
    expect(todoElement).toContainHTML('</form>');
    expect(todoElement).not.toContainHTML('<ul>');
})

test('match snapshot', () => {
    const initialState = { state: []};
    const mockStore = configStore();

    const store = mockStore(initialState);

    const todo = { data: 'This is a Task', done: true, createdAt: ''}

  const tree = renderer.create(
        <Provider store={store}>
        <Todo todo={todo} />
        </Provider>
    ).toJSON();

    console.log(tree);

    expect(tree).toMatchSnapshot();

})