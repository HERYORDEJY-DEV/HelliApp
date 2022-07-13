import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {FilterContainer} from './styles';
import FilterTag from './tag';
import DB from '../../utils/db.json';

const {genres} = DB;

interface Props {
  onFilterSelect: (e: string) => void;
  filterSelected: string;
}

export default function Filter(props: Props) {
  return (
    <FilterContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        bounces={false}
        bouncesZoom={false}
        horizontal={true}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={genres}
          renderItem={({item, index}) => (
            <FilterTag
              title={`${item}`}
              onPress={props.onFilterSelect}
              selected={props.filterSelected === `${item}`}
              isLast={
                genres.length === index + 1 ||
                Math.floor(genres.length / 2) === index
              }
            />
          )}
          keyExtractor={(item, index) => `${index}`}
          scrollEnabled={false}
          contentContainerStyle={{
            alignSelf: 'flex-start',
          }}
          numColumns={Math.ceil(genres.length / 2)}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </FilterContainer>
  );
}
