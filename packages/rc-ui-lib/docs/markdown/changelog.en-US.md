# Changelog

### Introduction

rc-ui-lib follows the [Semver](https://semver.org/) semantic versioning specification.

### Notice

This document is the changelog for rc-ui-lib

**Release Rhythm**

- Patch version: Released weekly, includes new features and bug fixes.
- Minor version: Released every one to two months, includes new features and larger functional updates, backward compatible.
- Major version: No fixed release time, includes incompatible updates and major functional updates.

## Updates

### [2.1.3](https://github.com/rancui/rc-ui-lib/compare/v2.1.2...v2.1.3)

`2024-09-19`

**Bug Fixes**

- Fixed DatetimePicker component date not linked, maximum date limit issue (#76) [#76](https://github.com/rancui/rc-ui-lib/issues/76) [#77](https://github.com/rancui/rc-ui-lib/issues/77)

### [2.1.2](https://github.com/rancui/rc-ui-lib/compare/v2.1.1...v2.1.2)

`2024-01-04`

- Fixed incorrect style file import path after build (#75) [#75](https://github.com/rancui/rc-ui-lib/issues/75)

### [2.1.1](https://github.com/rancui/rc-ui-lib/compare/v2.1.0...v2.1.1)

`2023-12-14`

**Bug Fixes**

- Floating bubble component test case modification [#72](https://github.com/rancui/rc-ui-lib/issues/72)
- TimePicker circular reference [#74](https://github.com/rancui/rc-ui-lib/issues/74)

**Chore**

- Support react 18 [#71](https://github.com/rancui/rc-ui-lib/issues/71)

**Feature**

- Added floating bubble component [#70](https://github.com/rancui/rc-ui-lib/issues/70)

### [2.1.0](https://github.com/rancui/rc-ui-lib/compare/v2.0.6...v2.1.0)

`2023-08-16`

**Bug Fixes**

- Fixed circular reference [#68](https://github.com/rancui/rc-ui-lib/issues/68)

**Feature**

- Badge: Added position property to Badge component [#65](https://github.com/rancui/rc-ui-lib/issues/65)
- RollingText: Added RollingText component [#64](https://github.com/rancui/rc-ui-lib/issues/64)
- Watermark: Added watermark component [#67](https://github.com/rancui/rc-ui-lib/issues/67)

### [2.0.6](https://github.com/rancui/rc-ui-lib/compare/v2.0.5...v2.0.6)

`2023-08-10`

**Feature**

- ActionBar: Added placeholder property [#62](https://github.com/rancui/rc-ui-lib/issues/62)

### [2.0.5](https://github.com/rancui/rc-ui-lib/compare/v2.0.4...v2.0.5)

`2023-08-04`

**Bug Fixes**

- PasswordInput: Fixed component preventing default event issue
- DateTimePicker: Fixed issue where latest value could not be obtained when confirming in DateTimePicker

### [2.0.4](https://github.com/rancui/rc-ui-lib/compare/v2.0.3...v2.0.4)

`2023-07-28`

**Bug Fixes**

- DateTimePicker: Adjusted useRefState hook judgment logic and fixed issue where setting value was invalid

**Features**

- DateTimePicker: Added clear input ref function

### [2.0.3](https://github.com/rancui/rc-ui-lib/compare/v2.0.2...v2.0.3)

`2023-06-20` **Features**

- PasswordInput: Added ref function to clear input content ([24a5331](https://github.com/rancui/rc-ui-lib/commit/24a53317f5000accf65854284ec01f5492b28540))

### [2.0.2](https://github.com/rancui/rc-ui-lib/compare/v2.0.1...v2.0.2)

`2023-06-14` **Features**

- DateTimePicker: Added nested functionality, added stopPropagation property([4dd65dd](https://github.com/rancui/rc-ui-lib/commit/4dd65dd73de8eaaa61c42f569279bb82e8a331ec))

### [2.0.1](https://github.com/rancui/rc-ui-lib/compare/v1.3.6...v2.0.0)

`2023-04-25` **Bug Fixes**

- DateTimePicker: Fixed issue where cascading selection options were not refreshed

### [2.0.0](https://github.com/rancui/rc-ui-lib/compare/v1.3.6...v2.0.0)

`2023-03-08` **Features**

- Added TextEllipsis component

### [1.3.6](https://github.com/rancui/rc-ui-lib/compare/v1.3.5...v1.3.6)

`2022-11-23` **Bug Fixes**

- Form: Fixed issue where onChange event could not be triggered in Field component

### [1.3.5](https://github.com/rancui/rc-ui-lib/compare/v1.3.4...v1.3.5)

`2022-11-22`

- Added CountDown countdown component([831e59f](https://github.com/rancui/rc-ui-lib/commit/831e59f1062f6d591bd7d3e690b9b6315b0b4770))

- Added Progress progress bar component([41ca9f4](https://github.com/rancui/rc-ui-lib/commit/41ca9f483a4a9b707a263dc63e4b70073b91f9c9))

### [1.3.4](https://github.com/rancui/rc-ui-lib/compare/v1.3.3...v1.3.4)

`2022-06-27`

**Bug Fixes**

- Explicitly added children property, fixed errors in some scenarios([829569d](https://github.com/rancui/rc-ui-lib/commit/829569df7479b7b6967b55b8d4e557424d69fece))

### [1.3.3](https://github.com/rancui/rc-ui-lib/compare/v1.3.1...v1.3.3)

`2022-06-13`

**Bug Fixes**

- Swiper: Fixed display issue caused by height ([28b1906](https://github.com/rancui/rc-ui-lib/commit/28b1906f6bb054156acfd4e6a4d5072c979c692a))

- Collapse: Made children optional ([34afa91](https://github.com/rancui/rc-ui-lib/commit/34afa91792ccddb94f1ddc14df8e49ebe0c3305f))

### [v1.3.1](https://github.com/rancui/rc-ui-lib/compare/v1.3.0...v1.3.1)

`2022-02-20`

**Features**

- DateTimePicker: Custom indicator color ([da1277a](https://github.com/rancui/rc-ui-lib/commit/64f424b37b96cedcb3c17bd25e9d603c5da1277a))

### [v1.3.0](https://github.com/rancui/rc-ui-lib/compare/v1.2.0...v1.3.0)

`2022-02-20`

**Features**

- Added DateTimePicker component ([d643ff2](https://github.com/rancui/rc-ui-lib/commit/1be03ab3d06c008a137824a6e21c31acdd643ff2))

### [v1.2.0](https://github.com/rancui/rc-ui-lib/compare/v1.1.0...v1.2.0)

`2022-01-29`

**Bug Fixes**

- Popup: Modified whether to prevent onMouseDown event ([#36](https://github.com/rancui/rc-ui-lib/issues/36))

**Features**

- Added Calendar component ([b6a256c](https://github.com/rancui/rc-ui-lib/commit/b6a256cb457291220850761292bd21c34912f1d0))
- Added Lazyload component ([6426d1c](https://github.com/rancui/rc-ui-lib/commit/6426d1ce03a86b608f7a4c5d5dc0e7a8dadcfe0c))
- Added Picker component ([0ed372c](https://github.com/rancui/rc-ui-lib/commit/0ed372ca08e0bcbccd9b98d26be38f4e50771fef))
- Added Popover component ([34739bf](https://github.com/rancui/rc-ui-lib/commit/34739bf705347270ce8e2463a9d71f45fac6060d))

### [v1.1.0](https://github.com/rancui/rc-ui-lib/compare/v1.0.1...v1.1.0)

`2022-01-11`

**Features**

- Popup: Added onMouseDown event to prevent onBlur event bubbling ([5647f3f](https://github.com/rancui/rc-ui-lib/commit/5647f3faa583045e75d717ed58aec95407c30167))
- Added Sidebar component ([e19838e](https://github.com/rancui/rc-ui-lib/commit/e19838ee23d998f4b0e81ba627047c892fa806a4))
- Added SwipeCell component ([845b25d](https://github.com/rancui/rc-ui-lib/commit/845b25d81b24c0d25a8c3f7aff735e7256dcbf65))
- Added NumberKeyboard component ([cc3eb5d](https://github.com/rancui/rc-ui-lib/commit/cc3eb5ddce1062ca72ee1adbf5212c5aa606c263))
- Added PasswordInput component ([f89d842](https://github.com/rancui/rc-ui-lib/commit/f89d842de239f4f35a963a6239d1ddf9087ed6cc))

### [v1.0.0](https://github.com/rancui/rc-ui-lib/compare/v0.3.0...v1.0.0)

`2021-12-27`

**Bug Fixes**

- List: Fixed bug where error reload did not trigger ([9644a30](https://github.com/rancui/rc-ui-lib/commit/9644a30050963b83091f97663420920bcd7fdffb))
- Cascader: Fixed issue where setData was still called after component destruction ([feafcfe](https://github.com/rancui/rc-ui-lib/commit/feafcfe8ab6ba593ef569a0195db9a454a48b0b9))
- StepsItem: Fixed font color bug of title in non-active state ([55e587f](https://github.com/rancui/rc-ui-lib/commit/55e587fc942ea2cf6d26ccf94d6ed7798fe347c2))
- imagePreview: Fixed component close error bug ([059f6a1](https://github.com/rancui/rc-ui-lib/commit/059f6a1d90890540acfccffb5cd76a564982ec4d))

**Feature**

- Completed gap filling and unit testing for all 42 component functions, with test coverage exceeding 96%.

