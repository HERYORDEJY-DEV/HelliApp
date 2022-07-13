import React from 'react';
import {StatusBar} from 'react-native';
import {ScreenContent} from './styles';
import History from '../../components/history';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
      <ScreenContent>
        <History />
      </ScreenContent>
    </SafeAreaView>
  );
}
