import React from 'react';
import {Image} from 'react-native';
import {
  HistoryItemContainer,
  HistoryItemBodyContainer,
  HistoryItemThumbContainer,
  styles,
  MovieTitle,
  MovieActors,
  MovieGenre,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../navigation/types';

interface Props {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: Array<string>;
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
}

export default function HistoryItem(props: Props) {
  const navigation =
    useNavigation<RootStackScreenProps<'Home'>['navigation']>();

  return (
    <HistoryItemContainer
      onPress={() => navigation.navigate('Details', {movie: {...props}})}>
      <HistoryItemThumbContainer>
        {Boolean(props.posterUrl.length) ? (
          <Image source={{uri: props.posterUrl}} style={styles.movieImage} />
        ) : (
          <Image
            source={require('../../assets/images/movie-poster.png')}
            style={styles.movieImage}
          />
        )}
      </HistoryItemThumbContainer>
      <HistoryItemBodyContainer>
        <MovieTitle>{props.title}</MovieTitle>
        <MovieActors>{props.actors}</MovieActors>
        <MovieGenre>{props.genres.join(', ')}</MovieGenre>
      </HistoryItemBodyContainer>
    </HistoryItemContainer>
  );
}
