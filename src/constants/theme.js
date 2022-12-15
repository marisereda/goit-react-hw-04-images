export const theme = {
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],

  fontSizes: {
    input: '24px',
    button: '18px',
  },

  colors: {
    bgPrimary: '#ffffff',
    bgSearchBar: '#3f51b5',
    bgButton: '#3f51b5',
    bgButtonHover: '#303f9f',
    textPrimary: 'white',
  },

  sizes: {
    form: '600px',
    buttonIcon: '48px',
    buttonWidth: '180px',
    buttonScrollUp: '60px',
    loader: '10px',
    iconScrollUp: '30px',
    iconSearch: '20px',
    searchBar: '64px',
  },

  borders: {
    primary: `1px solid #e5eaf1`,
  },

  radii: {
    primary: '4px',
    circle: '50%',
  },

  shadows: {
    primary: '5px 6px 15px -2px rgba(0,0,0,0.52)',

    // primary:
    //   'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },

  zIndices: {
    searchBar: '1100',
    modal: '1200',
  },

  styles: {
    opacity: '0.6',
    transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
