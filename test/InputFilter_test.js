import expect from 'expect';
import {shallow} from 'enzyme';
import React from 'react';
import {Subject} from 'rxjs/Subject';
import inputFilterFactory from '../src/InputFilter';

describe('InputFilter', () => {
  let InputFilter;
  let store;
  beforeEach(() => {
    store = new Subject();
    InputFilter = inputFilterFactory(store);
  });

  describe('#render', () => {
    it('renders with defaults', () => {
      const component = shallow(<InputFilter />);
      expect(component.find('.react-fuzzy-filter__input').length).toEqual(1);
    });

    it('sets classPrefix', () => {
      const component = shallow(<InputFilter classPrefix="my-prefix" />);
      expect(component.find('.my-prefix__input').length).toEqual(1);
    });

    it('sets inputProps', () => {
      const inputProps = {placeholder: 'Search'};
      const component = shallow(<InputFilter inputProps={inputProps} />);
      expect(component.find('.react-fuzzy-filter__input').html()).toEqual('<input class="react-fuzzy-filter__input" placeholder="Search"/>');
    });

    it('sets initialSearch', () => {
      const component = shallow(<InputFilter initialSearch="first search" />);
      expect(component.find('input').html()).toEqual('<input class="react-fuzzy-filter__input" value="first search"/>');
    });
  });

  describe('#onChange', () => {
    let component;
    let spy;
    beforeEach(() => {
      spy = expect.createSpy();
      component = shallow(<InputFilter onChange={spy} />);
    });

    it('calls callback if defined', () => {
      component.find('input').simulate('change', {
        target: {value: 'my string'}
      });
      expect(spy).toHaveBeenCalledWith('my string');
    });

    it('passes the value to the store', (done) => {
      store.subscribe(data => {
        expect(data).toEqual('some input');
        done();
      });

      component.find('input').simulate('change', {
        target: {value: 'some input'}
      });
    });

    it('overrides search value with any return value to onChange', (done) => {
      store.subscribe(data => {
        expect(data).toEqual('hello');
        done();
      });
      component = shallow(<InputFilter onChange={() => 'hello'} />);
      component.find('input').simulate('change', {
        target: {value: 'some input'}
      });
    });
  });
});
