import expect from 'expect';
import {shallow, mount} from 'enzyme';
import React, {PropTypes} from 'react';
import ReactFuzzyFilter from '../src';

function WrapperComponent({children, value}) {
  return (
    <div className="wrapper">
      <span className="wrapper__val">{value}</span>
      {children}
    </div>
  );
};

WrapperComponent.propTypes = {
  children: PropTypes.any,
  value: PropTypes.string
};

const items = [
  { name: 'one', searchData: 'hello' },
  { name: 'two', searchData: 'hello' },
  { name: 'three', searchData: 'goodbye' },
  { name: 'four', searchData: 'bonjour' }
];

function defaultRender({name}, index) {
  return <div key={name} className="my-item">{name}: {index}</div>;
}
defaultRender.propTypes = {
  name: PropTypes.string.isRequired
};

describe('ReactFuzzyFilter', () => {
  describe('defaults', () => {
    it('items is an empty array', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} />);
      expect(wrapper.instance().props.items).toEqual([]);
    });

    it('uses "react-fuzzy-filter" class prefix', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} />);
      expect(wrapper.find('.react-fuzzy-filter__container').length).toEqual(1);
      expect(wrapper.find('.react-fuzzy-filter__input').length).toEqual(1);
      expect(wrapper.find('.react-fuzzy-filter__items-container').length).toEqual(1);
    });

    it('renders all items if search value is empty', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} items={items} />);
      expect(wrapper.find('.my-item').length).toEqual(items.length);
    });
  });

  describe('rendering items', () => {
    it('is renders each item with renderItem function', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} items={items} />);
      expect(wrapper.find('.my-item').length).toEqual(items.length);
      expect(wrapper.find('.my-item').at(0).text()).toEqual('one: 0');
    });

    it('renders no items with empty search if defaultAllItems is false', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} items={items} defaultAllItems={false} />);
      expect(wrapper.find('.my-item').length).toEqual(0);
    });

    it('uses classPrefix if defined', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} classPrefix="my-custom" />);
      expect(wrapper.find('.my-custom__container').length).toEqual(1);
      expect(wrapper.find('.my-custom__input').length).toEqual(1);
      expect(wrapper.find('.my-custom__items-container').length).toEqual(1);
    });

    it('allows input props', () => {
      const inputProps = {
        placeholder: 'Filter'
      };
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} inputProps={inputProps} />);
      expect(wrapper.find('.react-fuzzy-filter__input').html()).toEqual('<input class="react-fuzzy-filter__input" placeholder="Filter"/>');
    });

    it('allows input wrapper and input wrapper props', () => {
      const extraProps = {
        value: 'hello'
      };
      const wrapper = mount(<ReactFuzzyFilter renderItem={defaultRender} inputWrapper={WrapperComponent} inputWrapperProps={extraProps} />);
      expect(wrapper.find('.wrapper').length).toEqual(1);
      expect(wrapper.find('.wrapper').find('.react-fuzzy-filter__input').length).toEqual(1);
      expect(wrapper.find('.wrapper').find('.wrapper__val').text()).toEqual('hello');
    });

    it('allows results wrapper and result wrapper props', () => {
      const extraProps = {
        value: 'hello'
      };
      const wrapper = mount(<ReactFuzzyFilter renderItem={defaultRender} resultsWrapper={WrapperComponent} resultsWrapperProps={extraProps} items={items} />);
      expect(wrapper.find('.wrapper').length).toEqual(1);
      expect(wrapper.find('.wrapper').find('.my-item').length).toEqual(4);
      expect(wrapper.find('.wrapper').find('.wrapper__val').text()).toEqual('hello');
    });
  });

  describe('filtering items', () => {
    it('fuzzy filters items by search state', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} items={items} />);
      wrapper.setState({search: 'hllo'});
      expect(wrapper.find('.my-item').length).toEqual(2);
      expect(wrapper.find('.my-item').at(0).text()).toEqual('one: 0');

      wrapper.setState({search: 'godby'});
      expect(wrapper.find('.my-item').length).toEqual(1);
      expect(wrapper.find('.my-item').at(0).text()).toEqual('three: 0');
    });

    it('fuzzy filters based on the searchKey', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} items={items} searchKey="name" />);
      wrapper.setState({search: 'hllo'});
      expect(wrapper.find('.my-item').length).toEqual(0);

      wrapper.setState({search: 'ne'});
      expect(wrapper.find('.my-item').length).toEqual(1);
      expect(wrapper.find('.my-item').at(0).text()).toEqual('one: 0');
    });

    it('can override the initial search value with initialSearch prop', () => {
      const wrapper = shallow(<ReactFuzzyFilter renderItem={defaultRender} items={items} initialSearch="hello" />);
      expect(wrapper.find('.my-item').length).toEqual(2);
    });
  });
});
