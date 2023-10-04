const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat':'Montserrat, sans-serif'
      },
      colors:{
        'all-color':'#231F20',
        'yellow':'#F7D22D',
        'text-color':'#0E0C0D',
        'border':'#E3ECF5',
        'pizza':'#797979',
        'text-pizza':'#686466',
        'card-text':'#473E43'
        
      },
      boxShadow:{
        'shadow':'0px 4px 24px 0px #0000000F',
      }
    },
  },
  plugins: [],
});
