# react-pager-view

**react-pager-view** is a simple React component for pagination, allowing users to navigate through a series of pages with ease.

## Installation

You can install `react-pager-view` via npm:

```bash
npm install react-pager-view
```

Or via yarn:

```bash
yarn add react-pager-view
```

## Usage

```javascript
import React from 'react';
import ImagePagination from 'react-pager-view';

const pages = [
  { src: 'image1.jpg', text: 'Page 1' },
  { src: 'image2.jpg', text: 'Page 2' },
];

const App = () => {
  return (
    <div>
      <ImagePagination 
        pages={pages} 
        dotDisplay={false}
        isInfinite={true}
      />
    </div>
  );
};

export default App;
```

## Props

- `pages`: An array of objects representing each page. Each object should have a `src` property for the image source and an optional `text` property for additional text.
- `dotDisplay`: (Optional) Boolean indicating whether to display dots for each page. Default is `false`.
- `isInfinite`: (Optional) Boolean indicating whether to enable infinite scrolling. Default is `true`.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Yongjun Lee** - [sobabear](https://www.sobabear.com)

## Repository

- [GitHub Repository](https://github.com/sobabear/ReactPager)
