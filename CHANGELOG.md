# Changelog

## 2.0.0 (2016-8-2)

Changed:

- Removed `initialSearch` prop from `FilterResults`. It now syncs with `initialSearch` prop from `InputFilter`. [commit](../../commit/eb200b5)
- `onChange` callback for `InputFilter` now can optionally return a string (instead of a boolean). The string overrides the search value passed to `FilterResults`. [commit](../../commit/eb200b5)

## 1.1.0 (2016-8-1)

Added:

- Optional prop, `renderContainer` added to `FilterResults` component. This is an alternative to using `wrapper`/`wrapperProps` and provides more fine grained control over what is ultimately rendered from `FilterResults`. [commit](../../commit/b2d5866)

## 1.0.0 (2016-7-29)

Initial release
