import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScreenContent,
  MovieDetailsTitle,
  MovieDetailsGenre,
  MovieDetailsActors,
  styles,
  MovieDetailsPlot,
} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {toHoursAndMinutes} from '../../utils/format-data';
import {RootStackScreenProps} from '../../navigation/types';

export default function Details() {
  const route = useRoute<RootStackScreenProps<'Details'>['route']>();
  const navigation =
    useNavigation<RootStackScreenProps<'Details'>['navigation']>();

  const {
    params: {movie},
  } = route;

  const {title, plot, posterUrl, actors, year, runtime, genres, director} =
    movie;

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <MCI
        name={'chevron-left'}
        size={30}
        color={'#000'}
        style={styles.backIcon}
        onPress={() => navigation.goBack()}
      />
      <ScreenContent
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.posterWrapper}>
          {Boolean(posterUrl.length) ? (
            <View style={styles.posterImageWrapper}>
              <Image source={{uri: posterUrl}} style={styles.posterImage} />
            </View>
          ) : (
            <View style={styles.posterImageWrapper}>
              <Image
                source={require('../../assets/images/movie-poster.png')}
                style={styles.posterImage}
              />
            </View>
          )}
        </View>
        <View style={styles.descWrapper}>
          <MovieDetailsTitle>{title}</MovieDetailsTitle>
          <MovieDetailsPlot>{plot}</MovieDetailsPlot>
          <MovieDetailsGenre>{genres.join(', ')}</MovieDetailsGenre>
        </View>
        <View style={styles.metaWrapper}>
          <MovieDetailsActors bold={true}>
            <MovieDetailsActors>Actors:</MovieDetailsActors> {actors}
          </MovieDetailsActors>
          <MovieDetailsActors bold={true}>
            <MovieDetailsActors>Director:</MovieDetailsActors> {director}
          </MovieDetailsActors>
          <MovieDetailsActors bold={true}>
            <MovieDetailsActors>Runtime:</MovieDetailsActors>{' '}
            {toHoursAndMinutes(Number(runtime))}
          </MovieDetailsActors>
          <MovieDetailsActors bold={true}>
            <MovieDetailsActors>Year:</MovieDetailsActors> {year}
          </MovieDetailsActors>
        </View>
      </ScreenContent>
    </SafeAreaView>
  );
}
