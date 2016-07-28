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
      const component = shallow(<FilterResults items={items} renderItem={defaultRender} />);
      expect(component.find('.react-fuzzy-filter__results-container').length).toEqual(1);
      expect(component.find('.my-item').length).toEqual(4);
    });

    it('sets classPrefix', () => {
      const component = shallow(
        <FilterResults
          items={items}
          renderItem={defaultRender}
          classPrefix="my-prefix"
        />
      );
      expect(component.find('.my-prefix__results-container').length).toEqual(1);
    });

    it('is renders each item with renderItem function', () => {
      const component = shallow(<FilterResults items={items} renderItem={defaultRender} />);
      expect(component.find('.my-item').length).toEqual(items.length);
      expect(component.find('.my-item').at(0).text()).toEqual('one: 0');
    });

    it('renders no items with empty search if defaultAllItems is false', () => {
      const component = shallow(
        <FilterResults
          items={items}
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
  });

  describe('#renderItems', () => {
    it('fuzzy filters items by search state', () => {
      const component = shallow(<FilterResults items={items} renderItem={defaultRender} />);
      component.setState({search: 'hllo'});
      expect(component.find('.my-item').length).toEqual(2);
      expect(component.find('.my-item').at(0).text()).toEqual('one: 0');

      component.setState({search: 'godby'});
      expect(component.find('.my-item').length).toEqual(1);
      expect(component.find('.my-item').at(0).text()).toEqual('three: 0');
    });

    it('fuzzy filters based on the searchKey', () => {
      const component = shallow(
        <FilterResults
          items={items}
          renderItem={defaultRender}
          searchKey="name"
        />
      );
      component.setState({search: 'hllo'});
      expect(component.find('.my-item').length).toEqual(0);

      component.setState({search: 'ne'});
      expect(component.find('.my-item').length).toEqual(1);
      expect(component.find('.my-item').at(0).text()).toEqual('one: 0');
    });

    it('can override the initial search value with initialSearch prop', () => {
      const component = shallow(
        <FilterResults
          items={items}
          renderItem={defaultRender}
          initialSearch="hello"
        />
      );
      expect(component.find('.my-item').length).toEqual(2);
    });
  });
});
