/* eslint-disable function-paren-newline */
import React from 'react';
import * as renderer from 'react-test-renderer';
import Button from './index';

describe('Button component', () => {
  test('should render default with values', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(tree.type).toBe('button');
    expect(tree.children).toContain('default button');
    expect(tree.props.type).toBe('button');
  //  TODO: test for default className;
  });

  test('should render with given props', () => {
    const element = (
      <Button
        type="submit"
        className="test__className"
        otherProps="otherProps"
        anotherProps={[1, 2, 3]}
      >
        childrenText
      </Button>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(tree.children).toContain('childrenText');
    expect(tree.props.type).toBe('submit');
    expect(tree.props.className).toBe('test__className');
    expect(tree.props.otherProps).toBeTruthy();
    expect(tree.props.otherProps).toBe('otherProps');
    expect(tree.props.anotherProps).toEqual([1, 2, 3]);
  });
});

