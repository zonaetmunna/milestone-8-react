const loadCountrys = () => {
     const url = `https://restcountries.eu/rest/v2/all`;
     fetch(url)
          .then(res => res.json())
          .then(data => displayCountry(data))
}

const displayCountry = (countrys) => {
     const country = countrys.map((pd) => pd);
     console.log(country);
     country.forEach(element => {
          const div = document.createElement("div");
          div.innerHTML = '

          '

     });
}

loadCountrys();
