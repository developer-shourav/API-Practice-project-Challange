

const loadAllCountry = async(urlPart) => {
    const url = `https://restcountries.com/v3.1/${urlPart}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayAllCountry(data)
    }
    catch(error){
        console.log(error);
    }
}

const displayAllCountry = (counties) => {
    const countryQuantity = document.getElementById("country-count");
    countryQuantity.innerText = counties.length;
    const countryDataRow = document.getElementById("row");
    countryDataRow.innerHTML = "";
    counties.map( country => {
        console.log(country);
        const newItemDiv = document.createElement("div");
        newItemDiv.classList.add("col");
        newItemDiv.innerHTML = `
        <div class="card shadow h-100">
            <img  src="${country.flags.png}" class="card-img-top img-fluid h-50" alt="...">
            <div class="card-body">
            <h4 class="card-title">Name: ${country.name.common}</h4>
            <h5 class="card-title">Capital: ${country.capital[0]? country.capital[0] : "No Capital"}</h5>
            <h6 class="card-title">Region: ${country.continents[0]}</h6>
            
            </div>
      </div>
        `;

        countryDataRow.appendChild(newItemDiv)  
    })

}


loadAllCountry("all");

