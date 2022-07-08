import React, {useState} from 'react';
import {Text} from 'react-native';
import SearchBox from '../../components/search-box';
import {ScreenContent} from './styles';
import Filter from '../../components/filter';
import History from '../../components/history';

export default function Home() {
  const [query, setQuery] = useState('');

  const onSearch = () => {
    //
  };

  return (
    <ScreenContent>
      <SearchBox onSearch={onSearch} onChangeText={setQuery} />
      <Filter />
      <History />
    </ScreenContent>
  );
}

/*
query { collection (slug:"office") { id, type, seo { title } meta { selectedFacets { key, value } } }
}
 */
