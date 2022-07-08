import _ from 'lodash';

export const groupDataBy = ({data, title}: {data: []; title: string}) => {
  // data it's an array of objects
  // groupBy to extract section headers
  let dataSource: any = _.groupBy(data, (o: any) => o[title]);
  // reduce to generate new array
  dataSource = _?.reduce(
    dataSource,
    (
      acc: Array<{title: string; data: []}>,
      next: [],
      index: number | string,
    ) => {
      acc.push({
        title: `${index}`,
        data: next,
      });
      return acc;
    },
    [],
  );

  return dataSource;
};
