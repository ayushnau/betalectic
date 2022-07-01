module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'lg' : ['18px','28px'],
      'xl' : ['20px','28px'],
      '4xl': ['36px', {
        lineHeight: '44px',
      }],
      '5xl' : ['48px','1']
    },
    extend: {
      colors: {
        'navbar': '#6a85a6',
        'secondry-color':'#273f5b',
        'blue':'#0082d7',
        'blue-light':'#98d5ff',
        'orange-light':'#F89101',
        'red':'#ff3133',
        'green':'#01a23c'
      },
    },
    
    fontFamily: {
      'nunito':'Nunito, sans-serif',
      'Roboto':'Roboto, sans-serif'
    },
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1200px'},

      'lg': {'max': '1000px'},

      'md': {'max': '800px'},

      'sm': {'max': '470px'}
    }
  },
  plugins: [],
}