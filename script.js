
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                navy: {
                    900: '#0f172a',
                    800: '#1e293b',
                    700: '#334155',
                },
                primary: {
                    DEFAULT: '#1d4e8b',
                    600: '#1a456e',
                    700: '#153a5e',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        }
    }
}

let current1 = 1;
setInterval(() => {
  current1 = current1 === 1 ? 2 : 1;
  document.getElementById("c1s" + current1).checked = true;
}, 3000);

let current2 = 1;
setInterval(() => {
  current2 = current2 === 1 ? 2 : 1;
  document.getElementById("c2s" + current2).checked = true;
}, 3000);