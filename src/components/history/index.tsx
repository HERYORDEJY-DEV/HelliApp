import React from 'react';
import {SectionList, Text, View} from 'react-native';
import HistoryItem from './item';
import {HistorySectionHeader, HistorySectionTitle, styles} from './styles';
import {groupDataBy} from '../../utils/format-data';
import moment, {Moment} from 'moment';

interface Props {
  //
}

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto', 'Pizza', 'Burger', 'Risotto'],
    datetime: moment(),
  },
  {
    title: 'Sides',
    data: [
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
    ],
    datetime: moment().subtract(1, 'day'),
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer', 'Water', 'Coke', 'Beer'],
    datetime: moment().subtract(2, 'days'),
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream', 'Cheese Cake', 'Ice Cream'],
    datetime: moment().subtract(3, 'days'),
  },
  {
    title: 'Desserts',
    data: [
      'Cheese Cake',
      'Ice Cream',
      'Cheese Cake',
      'Ice Cream',
      'Cheese Cake',
      'Ice Cream',
      'Cheese Cake',
      'Ice Cream',
    ],
    datetime: moment().subtract(4, 'days'),
  },
];

export default function History(props: Props) {
  const renderSectionHeader = ({title}: {title: Moment}) => (
    <HistorySectionHeader>
      <HistorySectionTitle>{moment(title).format('LL')}</HistorySectionTitle>
    </HistorySectionHeader>
  );

  // const groupedData = groupDataBy({data: [...all], title: 'DateTimeGroup'});

  const renderSeperatorComponent = () => <View style={styles.itemSeperator} />;

  return (
    <SectionList
      style={styles.listContainer}
      sections={[...DATA]}
      keyExtractor={(item, index) => `${index}`}
      renderItem={({item, index}) => <HistoryItem {...item} index={index} />}
      renderSectionHeader={({section: {datetime}}) =>
        renderSectionHeader({title: datetime})
      }
      // ItemSeparatorComponent={renderSeperatorComponent}
      stickySectionHeadersEnabled={true}
      // ListEmptyComponent={<EmptyList />}
      showsVerticalScrollIndicator={false}
    />
  );
}
