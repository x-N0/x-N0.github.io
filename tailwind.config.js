const plugin = require('tailwindcss/plugin')
// Sepia Mode Thanks To: https://github.com/jnd0/tailwindcss-sepia-mode
module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    sepiaSelector: '.sepia-mode',
    extend: {
      colors: {
        'verde-100': '#008f68',
        'verde-200': '#6DB65B',
        'verde-300': '#4AAE9B',
        'amarelo-100': '#FAE042',
        'amarelo-200': '#EFBB35',
        'amarelo-300': '#DFA612',
        white: '#FAFAFA',
        'white-100': '#eeeeee',
        'gray-1000': '555555',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      maxHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
    },
  },
  // variants: {
  //   backgroundColor: [
  //     'dark',
  //     'dark-hover',
  //     'dark-group-hover',
  //     'dark-even',
  //     'dark-odd',
  //     'sepia',
  //     'sepia-hover',
  //     'sepia-group-hover',
  //     'sepia-even',
  //     'sepia-odd',
  //   ],
  //   borderColor: [
  //     'dark',
  //     'dark-focus',
  //     'dark-focus-within',
  //     'sepia',
  //     'sepia-focus',
  //     'sepia-focus-within',
  //   ],
  //   textColor: [
  //     'dark',
  //     'dark-hover',
  //     'dark-active',
  //     'sepia',
  //     'sepia-hover',
  //     'sepia-active',
  //     'sepia-placeholder',
  //   ],
  // },
  // plugins: [
  //   require('tailwindcss-dark-mode')(),
  //   plugin(function ({ addVariant, theme, e }) {
  //     const sepiaSelector = theme('sepiaSelector', '.sepia-mode')
  //     addVariant('sepia', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(`sepia${separator}${className}`)}`
  //       })
  //     })
  //
  //     addVariant('sepia-hover', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(
  //           `sepia-hover${separator}${className}`
  //         )}:hover`
  //       })
  //     })
  //
  //     addVariant('sepia-focus', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(
  //           `sepia-focus${separator}${className}`
  //         )}:focus`
  //       })
  //     })
  //
  //     addVariant('sepia-active', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(
  //           `sepia-active${separator}${className}`
  //         )}:active`
  //       })
  //     })
  //
  //     addVariant('sepia-disabled', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(
  //           `sepia-disabled${separator}${className}`
  //         )}:disabled`
  //       })
  //     })
  //
  //     addVariant('sepia-group-hover', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .group:hover .${e(
  //           `sepia-group-hover${separator}${className}`
  //         )}`
  //       })
  //     })
  //
  //     addVariant('sepia-focus-within', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(
  //           `sepia-focus-within${separator}${className}`
  //         )}:focus-within`
  //       })
  //     })
  //
  //     addVariant('sepia-even', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(
  //           `sepia-even${separator}${className}`
  //         )}:nth-child(even)`
  //       })
  //     })
  //
  //     addVariant('sepia-odd', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(
  //           `sepia-odd${separator}${className}`
  //         )}:nth-child(odd)`
  //       })
  //     })
  //
  //     addVariant('sepia-placeholder', ({ modifySelectors, separator }) => {
  //       modifySelectors(({ className }) => {
  //         return `${sepiaSelector} .${e(
  //           `sepia-placeholder${separator}${className}`
  //         )}::placeholder`
  //       })
  //     })
  //   }),
  // ],
}
