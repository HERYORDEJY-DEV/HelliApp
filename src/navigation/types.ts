import {StackScreenProps} from '@react-navigation/stack';

export interface MovieProps {
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

export type RootNavigationType = {
  Home: undefined;
  Details: {movie: MovieProps};
};

export type RootStackScreenProps<T extends keyof RootNavigationType> =
  StackScreenProps<RootNavigationType, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigationType {}
  }
}
