const { transform } = require('windicss/helpers')

export default {
    theme: {
      /* ... */
    },
    shortcuts: {
      'btn': {
        'color': 'white',
        '@apply': 'py-2 px-4 font-semibold rounded-lg',
        '&:hover': {
          '@apply': 'bg-emerald-700',
          'color': 'black',
        },
      },
      'btn-green': 'text-white bg-teal-700 hover:bg-teal-400',
    },
  }
  