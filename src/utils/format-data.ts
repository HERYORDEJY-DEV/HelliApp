import _ from 'lodash';

export const groupDataBy = ({
  data,
  title,
}: {
  data: Array<any>;
  title: string;
}) => {
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

export function toHoursAndMinutes(totalMinutes: number) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${padTo2Digits(hours)}h:${padTo2Digits(minutes)}m`;
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}
