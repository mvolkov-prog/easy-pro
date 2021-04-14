import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import * as faker from 'faker';
import { Theme } from '@easydev-pro/ui-elements/theme';
import { Table } from '@easydev-pro/ui-elements/default-components';
import { ComponentsWrapper, ButtonsWrapper, Title } from './appStyles';

// eslint-disable-next-line no-shadow
enum AnimationStatus {
  isFetching= 'isFetching',
  killYourSelf='killYourSelf',
  default = 'default',
}

const columns = [
  {
    Header: 'Year',
    accessor: 'year',
  },
  {
    Header: 'Jan',
    accessor: 'jan',
  },
  {
    Header: 'Feb',
    accessor: 'feb',
  },
  {
    Header: 'Mar',
    accessor: 'mar',
  },
  {
    Header: 'Apr',
    accessor: 'apr',
  },
  {
    Header: 'May',
    accessor: 'may',
  },
  {
    Header: 'Jun',
    accessor: 'jun',
  },
  {
    Header: 'Jul',
    accessor: 'jul',
  },
  {
    Header: 'Aug',
    accessor: 'aug',
  },
  {
    Header: 'Sep',
    accessor: 'sep',
  },
  {
    Header: 'Oct',
    accessor: 'oct',
  },
  {
    Header: 'Nov',
    accessor: 'nov',
  },
  {
    Header: 'Dec',
    accessor: 'dec',
  },
  {
    Header: 'YTD',
    accessor: 'ytd',
  },
];

const getAnimation = (status: string): any => {
  switch (status) {
    case AnimationStatus.isFetching:
      return {
        table: {
          animate: {
            scale: [1, 0.7, 0.5, 0.3, 0.2],
          },
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 0.75, 1],
            delay: 0.5,
          },
        },
        tbody: {
          animate: {
            rotate: [0, 360],
          },
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 0.75, 1],
            delay: 1,
            loop: 'Infinity',
          },
        },
        td: () => ({
          animate: {
            scale: [1, 0.7, 0.5, 0.3, 0.2],
          },
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
            times: [0, 0.25, 0.5, 0.75, 1],
          },
        }),
      };
    case AnimationStatus.killYourSelf:
      return {
        table: {
          animate: {
            x: ['0vw', '41vw', '0vw'],
          },
          transition: {
            duration: 10,
            ease: 'easeInOut',
            times: [0, 0.2, 1],
            repeat: 7,
          },
        },

        tr: () => ({
          transition: { ease: 'easeOut', duration: 2 },
          key: Math.random(),
          layout: false,
        }),
        td: () => ({
          animate: {
            y: '100vh',
          },
          transition: {
            duration: 1,
            ease: 'easeInOut',
            delay: faker.random.arrayElement([2, 12, 22, 32, 42, 52, 62, 72]),
          },
        }),
      };
    default:
      return {};
  }
};

const generator = () => new Array(faker.datatype.number({ max: 15 }))
  .fill(0)
  .map((_, index: number) => {
    const newData: any = {};
    columns.forEach((column) => {
      if (column.accessor === 'year') {
        newData[column.accessor] = 2010 + index;
      } else {
        newData[column.accessor] = `${faker.datatype.number({
          min: 0,
          max: 100,
          precision: 0.1,
        })} %`;
      }
    });

    return newData;
  });

export const App = () => {
  const [status, setStatus] = useState('default');
  const [data, setData] = useState(generator());
  const randomData = () => {
    setData(generator());
    setStatus(AnimationStatus.isFetching);
    setTimeout(() => {
      setStatus(AnimationStatus.default);
    }, 5000);
  };

  const killYourSelf = () => {
    setStatus(AnimationStatus.killYourSelf);
  };

  const sort = () => {
    const copyData = [...data];
    const direction = new Date().getTime() % 2 === 0 ? 1 : -1;
    setData(copyData.sort((a, b) => {
      if (a.year > b.year) {
        return -1 * direction;
      }
      return 1 * direction;
    }));
  };

  return (
    <ThemeProvider theme={Theme('light')}>
      <ComponentsWrapper>
        <Title>Monthly return</Title>
        <ButtonsWrapper>
          <button onClick={randomData}>getData</button>
          <button onClick={killYourSelf}>Kill youself</button>
          <button onClick={sort}>Стрёмный рандомный sort</button>
        </ButtonsWrapper>
        <Table
          columns={columns}
          data={data}
          isLoading={status === AnimationStatus.isFetching}
          animate={getAnimation(status)}
        />
      </ComponentsWrapper>
    </ThemeProvider>
  );
};

export default App;
