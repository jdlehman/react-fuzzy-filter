import expect from 'expect';
import {shallow, mount} from 'enzyme';
import React, {PropTypes} from 'react';
import {Subject} from 'rxjs/Subject';
import filterResultsFactory from '../src/FilterResults';

const items = [
  { name: 'one', searchData: 'hello' },
  { name: 'two', searchData: 'hello' },
  { name: 'three', searchData: 'goodbye' },
  { name: 'four', searchData: 'bonjour' }
];

const defaultFuseConfig = {
  keys: ['searchData']
};

function defaultRender({name}, index) {
  return <div key={name} className="my-item">{name}: {index}</div>;
}
defaultRender.propTypes = {
  name: PropTypes.string.isRequired
};

describe('FilterResults', () => {
  let FilterResults;
  const store = new Subject();
  beforeEach(() => {
    FilterResults = filterResultsFactory(store);
  });

  describe('#render', () => {
    it('renders with defaults', () => {
      const component = shallow(<FilterResults items={items} renderItem={defaultRender} fuseConfig={defaultFuseConfig} />);
      expect(component.find('.react-fuzzy-filter__results-container').length).toEqual(1);
      expect(component.find('.my-item').length).toEqual(4);
    });

    it('sets classPrefix', () => {
      const component = shallow(
        <FilterResults
          items={items}
          fuseConfig={defaultFuseConfig}
          renderItem={defaultRender}
          classPrefix="my-prefix"
        />
      );
      expect(component.find('.my-prefix__results-container').length).toEqual(1);
    });

    it('is renders each item with renderItem function', () => {
      const component = shallow(<FilterResults items={items} renderItem={defaultRender} fuseConfig={defaultFuseConfig} />);
      expect(component.find('.my-item').length).toEqual(items.length);
      expect(component.find('.my-item').at(0).text()).toEqual('one: 0');
    });

    it('renders no items with empty search if defaultAllItems is false', () => {
      const component = shallow(
        <FilterResults
          items={items}
          fuseConfig={defaultFuseConfig}
          defaultAllItems={false}
          renderItem={defaultRender}
        />
      );
      expect(component.find('.my-item').length).toEqual(0);
    });

    it('allows wrapper and wrapper props', () => {
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

      const extraProps = {
        value: 'hello'
      };
      const component = mount(
        <FilterResults
          items={items}
          fuseConfig={defaultFuseConfig}
          renderItem={defaultRender}
          wrapper={WrapperComponent}
          wrapperProps={extraProps}
        />
      );
      expect(component.find('.wrapper').length).toEqual(1);
      expect(component.find('.wrapper').find('.react-fuzzy-filter__results-container').length).toEqual(0);
      expect(component.find('.wrapper').find('.my-item').length).toEqual(4);
      expect(component.find('.wrapper').find('.wrapper__val').text()).toEqual('hello');
    });

    it('allows renderContainer function to describe how container will be rendered', () => {
      function renderContainer(items) {
        return (
          <div className="wrapper">
            <div className="wrapper-before" />
            {items}
            <div className="wrapper-after" />
          </div>
        );
      }
      const component = mount(
        <FilterResults
          items={items}
          fuseConfig={defaultFuseConfig}
          renderItem={defaultRender}
          renderContainer={renderContainer}
        />
      );
      expect(component.find('.wrapper').length).toEqual(1);
      expect(component.find('.wrapper').find('.react-fuzzy-filter__results-container').length).toEqual(0);
      expect(component.find('.wrapper').find('.my-item').length).toEqual(4);
      expect(component.find('.wrapper').find('.wrapper-before').length).toEqual(1);
      expect(component.find('.wrapper').find('.wrapper-after').length).toEqual(1);
    });
  });

  describe('#renderItems', () => {
    it('fuzzy filters items by search state', () => {
      const component = shallow(<FilterResults items={items} renderItem={defaultRender} fuseConfig={defaultFuseConfig} />);
      component.setState({search: 'hllo'});
      expect(component.find('.my-item').length).toEqual(2);
      expect(component.find('.my-item').at(0).text()).toEqual('one: 0');

      component.setState({search: 'godby'});
      expect(component.find('.my-item').length).toEqual(1);
      expect(component.find('.my-item').at(0).text()).toEqual('three: 0');
    });

    it('accepts fuse config', () => {
      function customRender(name) {
        return <div key={name} className="my-item">{name}</div>;
      }
      customRender.propTypes = {
        name: PropTypes.string.isRequired
      };
      const fuseConfig = {
        keys: ['name'],
        id: 'name'
      };
      const component = shallow(
        <FilterResults
          fuseConfig={fuseConfig}
          items={items}
          renderItem={customRender}
        />
      );
      component.setState({search: 'hllo'});
      expect(component.find('.my-item').length).toEqual(0);

      component.setState({search: 'ree'});
      expect(component.find('.my-item').length).toEqual(1);
      expect(component.find('.my-item').at(0).text()).toEqual('three');
    });

    it('can override the initial search value with initialSearch prop', () => {
      const component = shallow(
        <FilterResults
          fuseConfig={defaultFuseConfig}
          items={items}
          renderItem={defaultRender}
          initialSearch="hello"
        />
      );
      expect(component.find('.my-item').length).toEqual(2);
    });
  });
});
