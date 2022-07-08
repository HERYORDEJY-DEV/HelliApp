import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {FilterContainer} from './styles';
import FilterTag from './tag';

interface Props {
  //
}

const filterData = [...Array(5).keys()];

export default function Filter(props: Props) {
  const [selected, setSelected] = useState('');

  return (
    <FilterContainer>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={filterData}
        renderItem={({item, index}) => (
          <FilterTag
            onPress={setSelected}
            selected={selected === `${item}`}
            isLast={filterData.length === index + 1}
          />
        )}
        keyExtractor={(item, index) => `${index}`}
      />
    </FilterContainer>
  );
}
