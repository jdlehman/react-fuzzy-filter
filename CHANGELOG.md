# Changelog

## 2.2.0 (2016-8-26)

Added:

- Added `prefilters` prop to `FilterResults`. Enables prefiltering the items on matching regular expressions. The return of the callback is the list of items to fuzzy search on. This enables "commands" that toggle state or change what is being fuzzy searched on. [bb7d688](../../commit)

## 2.1.0 (2016-8-3)

Added:

- `renderContainer` callback function on `FilterResults` receives a second argument with the raw filtered items. [commit](../../4f7552f)

## 2.0.0 (2016-8-2)

Changed:

- Removed `initialSearch` prop from `FilterResults`. It now syncs with `initialSearch` prop from `InputFilter`. [commit](../../commit/eb200b5)
- `onChange` callback for `InputFilter` now can optionally return a string (instead of a boolean). The string overrides the search value passed to `FilterResults`. [commit](../../commit/eb200b5)

## 1.1.0 (2016-8-1)

Added:

- Optional prop, `renderContainer` added to `FilterResults` component. This is an alternative to using `wrapper`/`wrapperProps` and provides more fine grained control over what is ultimately rendered from `FilterResults`. [commit](../../commit/b2d5866)

## 1.0.0 (2016-7-29)

Initial release