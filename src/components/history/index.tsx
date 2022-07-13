import React, {Fragment, useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, SectionList, View} from 'react-native';
import HistoryItem from './item';
import {
  HistorySectionHeader,
  HistorySectionTitle,
  MovieTitle,
  styles,
} from './styles';
import {groupDataBy} from '../../utils/format-data';
import {useQuery} from '@apollo/client';
import {GetMovies, GetByYear, QueryMovies} from './query';
import SearchBox from '../search-box';
import Filter from '../filter';
import {MovieProps} from '../../navigation/types';
import MI from 'react-native-vector-icons/MaterialIcons';

export default function History() {
  const {loading, error, data} = useQuery(GetMovies);
  const getByYearData = useQuery(QueryMovies, {
    variables: {year: '2013'},
  });

  console.log('getByYearData', {...getByYearData});

  const [moviesDB, setMoviesDB] = useState<Array<MovieProps>>([]);

  const [movies, setMovies] = useState([...moviesDB]);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [sorted, setSorted] = useState<{
    queried: any;
    filtered: any;
  }>({
    queried: [],
    filtered: [],
  });

  const _search = () => {
    if (!Boolean(sorted.filtered.length)) {
      return [...moviesDB].filter(({title}) =>
        title.toLowerCase().includes(query.toLowerCase()),
      );
    }
    return sorted.filtered.filter(({title}: MovieProps) =>
      title.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const _filter = (filt: string) => {
    if (!Boolean(sorted.queried.length)) {
      return [...moviesDB].filter(({genres}: MovieProps) =>
        genres.includes(filt),
      );
    }
    return sorted.queried.filter(({genres}: MovieProps) =>
      genres.includes(filt),
    );
  };

  const onSetQuery = (query: string) => {
    setQuery(query);
    if (!Boolean(query.length)) {
      setSorted(prev => ({...prev, queried: []}));
    }
  };

  const onSearch = () => {
    if (Boolean(query.length)) {
      const _ = _search();
      setMovies(_);
      setSorted(prev => ({...prev, queried: _}));
    }
  };

  const onFilter = (filt: string) => {
    if (filt === filter) {
      setFilter('');
      setSorted(prev => ({...prev, filtered: []}));
      return;
    }
    setFilter(filt);
    const _ = _filter(filt);
    setMovies(_);
    setSorted(prev => ({...prev, filtered: _}));
  };

  const onClearSorted = () => {
    if (!Boolean(query.length) && !Boolean(filter.length)) {
      setSorted({queried: [], filtered: []});
      setMovies([...moviesDB]);
    }
  };

  const groupedData = () => {
    if (!loading) {
      return [...groupDataBy({data: [...movies], title: 'year'})]
        .sort((a, b) => b.year - a.year)
        .reverse()
        .filter((_, index) => index < 5);
    }
    return [];
  };

  const renderSectionHeader = ({title}: {title: string}) => (
    <HistorySectionHeader>
      <HistorySectionTitle>{title}</HistorySectionTitle>
    </HistorySectionHeader>
  );

  const renderHeader = () => (
    <>
      <SearchBox
        onSearch={onSearch}
        onChangeText={onSetQuery}
        disableSearch={!Boolean(query.length)}
      />
      <Filter onFilterSelect={onFilter} filterSelected={filter} />
    </>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyWrapper}>
      <MovieTitle>No result, try another query</MovieTitle>
    </View>
  );

  const renderError = () => (
    <View style={styles.emptyWrapper}>
      <MI name={'error'} size={50} color={'red'} />
      <MovieTitle color={'red'}>Sorry, unable to fetch data</MovieTitle>
    </View>
  );

  const renderLoading = () => (
    <View style={[styles.emptyWrapper, {marginVertical: 0}]}>
      <ActivityIndicator size={50} />
    </View>
  );

  useEffect(() => {
    onClearSorted();
  }, [query, filter]);

  useEffect(() => {
    if (data?.movies) {
      setMoviesDB([...data.movies]);
      setMovies([...data.movies]);
    }
  }, [data]);

  if (Boolean(error)) {
    return renderError();
  }

  return (
    <Fragment>
      {renderHeader()}
      <Fragment>
        {loading ? (
          renderLoading()
        ) : (
          <SectionList
            style={styles.listContainer}
            contentContainerStyle={styles.contentContainer}
            sections={[...groupedData()]}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => (
              <HistoryItem {...item} index={index} />
            )}
            renderSectionHeader={({section: {title}}) =>
              renderSectionHeader({title})
            }
            stickySectionHeadersEnabled={true}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyList()}
          />
        )}
      </Fragment>
    </Fragment>
  );
}
