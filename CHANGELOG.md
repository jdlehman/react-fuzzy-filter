# Changelog

## 5.0.1 (2019-4-1)

Fixed:

- Removed arrow functions from UMD builds to support older browsers. Thanks @rburak for contributing!

## 5.0.0 (2019-3-16)

Changed:

- Using react hooks internally. **Breaking:** React peer dependency is now 16.8.0
- 4.x.x branch will continue to release patches, etc. for older versions of React
- Smaller bundle!

## 4.3.0 (2019-2-22)

Added:

Add typescript definitions and rewrite library with typescript.

## 4.2.1 (2019-2-14)

Fixed:

- An internal bug was preventing subscriptions from unsubscribing due to `behaviorStore` not returning the unsubscribe function. This bug was introduced in `4.2.0`. Thanks @quietshu for the fix!

## 4.2.0 (2019-1-21)

Improved:

- Wrapped `valoo` store to store current value so that subscribers can replay the latest event (and have the current state) regardless of component render order. This will also help with async react.

## 4.1.0 (2019-1-15)

Added:

- `changeInputValue` function is now a named export from the library. This will trigger changing the `InputFilter` input value as well as affect the rendered `FilterResults`. eg. `changeInputValue("new input")`

## 4.0.0 (2018-7-24)

Changed:

- Use [valoo](https://www.npmjs.com/package/valoo) instead of [rxjs](https://github.com/ReactiveX/rxjs) for state management.

## 3.2.0 (2017-5-30)

Added:

- Added support for React ^15.5 by using `prop-types` package and prepares for deprecation of PropTypes from React.

## 3.1.0 (2017-5-23)

Added:

- Allow updating `initialSearch` prop. This provides an escape hook in situations where the `initialSearch` might not be known until right after the first render.

## 3.0.0 (2017-4-10)

Changed:

- Updated API to remove props and simplify usage. `FilterResults` now expects a function as a child, which receives the matching items as an argument. This provides more flexibility without needing to pass "configuration props".

Removed:

- Removed the following props in the API change: `classPrefix`, `wrapper`, `wrapperProps`, and `renderContainer`.

## 2.3.0 (2016-8-26)

Added:

- Added `debounceTime` prop to `InputFilter`. This specifies the time in milliseconds to debounce the `onChange` event on the input field. [196de58](../../commit/196de58)

## 2.2.0 (2016-8-26)

Added:

- Added `prefilters` prop to `FilterResults`. Enables prefiltering the items on matching regular expressions. The return of the callback is the list of items to fuzzy search on. This enables "commands" that toggle state or change what is being fuzzy searched on. [bb7d688](../../commit/bb7d688)

## 2.1.0 (2016-8-3)

Added:

- `renderContainer` callback function on `FilterResults` receives a second argument with the raw filtered items. [commit](../../commit/4f7552f)

## 2.0.0 (2016-8-2)

Changed:

- Removed `initialSearch` prop from `FilterResults`. It now syncs with `initialSearch` prop from `InputFilter`. [commit](../../commit/eb200b5)
- `onChange` callback for `InputFilter` now can optionally return a string (instead of a boolean). The string overrides the search value passed to `FilterResults`. [commit](../../commit/eb200b5)

## 1.1.0 (2016-8-1)

Added:

- Optional prop, `renderContainer` added to `FilterResults` component. This is an alternative to using `wrapper`/`wrapperProps` and provides more fine grained control over what is ultimately rendered from `FilterResults`. [commit](../../commit/b2d5866)

## 1.0.0 (2016-7-29)

Initial release
