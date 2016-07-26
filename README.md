# react-fuzzy-filter

ReactFuzzyFilter fuzzy filters a list of data based on the search value typed in the input field. Each matching list item is rendered via a custom render function.

## Installation

```sh
npm install -S react-fuzzy-filter
```

## Example Usage

```js
import React, {Component} from 'react';
import ReactFuzzyFilter from 'react-fuzzy-filter';

class MyComponent extends Component {
  renderItem(item, index) {
    return <div key={item.meta}>{item.name}</div>;
  }

  render() {
    const items = [
      { name: 'first', meta: 'first|123' },
      { name: 'second', meta: 'second|443' },
      { name: 'third', meta: 'third|623' },
    ];
    return (
      <div>
        <ReactFuzzyFilter
          items={items}
          renderItem={this.renderItem}
          searchKey="meta"
        />
      </div>
    );
  }
}
```

## Props

### searchKey

`searchKey` is a string representing the key on the list item containing the metadata for matching. It defaults to `searchData`.

### renderItem

`renderItem` is a required function that defines how each match is rendered. It receives the item and the index as arguments and should return a React element.

### items

`items` is an array of the objects to be rendered. It defaults to an empty array.

### defaultAllItems

`defaultAllItems` is a boolean that determines whether all items should be shown if the search value is empty. It defaults to true (meaning all items are shown by default).

### classPrefix

`classPrefix` is a string that is used to prefix the class names in the component. It defaults to `react-fuzzy-filter`. The available classes to style:

- `react-fuzzy-filter__container`: container holding entire component
- `react-fuzzy-filter__input`: the input field
- `react-fuzzy-filter__items-container`: container holding all of the matching items

### initialSearch

`initialSearch` is a string that can override the initial search state when the component is created. It defaults to `''`.
