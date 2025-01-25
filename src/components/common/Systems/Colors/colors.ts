interface Colors {
  title: string;
  subtitle?: string;
  colors?: string[] | { [key: string]: string };
}

export const colors: Colors[] = [
  {
    title: 'Defaults',
    colors: {
      white: '#fff',
      black: '#000',
    },
  },
  {
    title: 'Grey',
    colors: {
      grey100: '#f5f4f5',
      grey200: '#dcd9dd',
      grey300: '#eae9ec',
      grey400: '#948f99',
      grey500: '#6e6873',
      grey600: '#262428',
      grey700: '#2B2828',
    },
  },
  {
    title: 'Violet',
    colors: {
      violet100: '#f7effb',
      violet200: '#e6caf2',
      violet300: '#7600a8',
      violet400: '#56007a',
      violet500: '#36004d',
    },
  },
  {
    title: 'Red',
    colors: {
      red100: '#feecec',
      red200: '#fde3e3',
      red300: '#f6b4b1',
      red400: '#d42e25',
      red500: '#89221a',
    },
  },
  {
    title: 'Yellow',
    colors: {
      yellow100: '#fef7e1',
      yellow200: '#ffe9a8',
      yellow300: '#fabb00',
      yellow400: '#d19d00',
      yellow500: '#7a5c00',
    },
  },
  {
    title: 'Light Blue',
    colors: {
      blue100: '#addffb',
      blue200: '#0088d1',
      blue300: '#00497a',
    },
  },
  {
    title: 'Teal',
    colors: {
      green100: '#edfdf6',
      green200: '#c0e7da',
      green300: '#45b590',
      green400: '#3a9878',
      green500: '#225946',
    },
  },
];
