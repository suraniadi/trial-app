import React from 'react';
import SearchBar  from '../components/SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

export const ToStorybook = () => <SearchBar text={"Try this!"} />;

ToStorybook.story = {
  name: 'to Storybook',
};
