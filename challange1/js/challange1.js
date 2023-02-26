const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

  /* ===============================================
                  Using Map method 
  ======================================================*/

  const loadPerson = () => {
        const personCount = document.getElementById("person-count");
        personCount.innerText = `${person.result.length}`;
        person.result.map(person => {
        const personDataRow = document.getElementById("row");
        const inforCard = document.createElement('div');
        inforCard.classList.add("col-sm-6");
        inforCard.innerHTML = ` 
        <div class="card">
                
                <div class="card-body">
                  <h6 class="card-title">Person Name: ${person.name.common}</h6>
                  <hr>
                  <p class="card-text">age:${person.age}</p>
                  <p class="card-text">street:${person.address.street}</p>
                </div>
              </div>`;

              personDataRow.appendChild(inforCard);
    })
   
  }

  loadPerson();


    /* ===============================================
               Using Simple distructing method 
  ======================================================*/

  /* const personCount = document.getElementById("person-count");
  personCount.innerText = `${person.result.length}`;
  const personDataRow = document.getElementById("row");
  personDataRow.innerHTML = ` 
  
    <div class ="col-sm-6">
              <div class="card-body">
                  <h6 class="card-title">Person Name: ${person.result[0].name.common}</h6>
                  <hr>
                  <p class="card-text">age:${person.result[0].age}</p>
                  <p class="card-text">street:${person.result[0].address.street}</p>
             </div>
    </div>

    <div class ="col-sm-6">
    <div class="card-body">
        <h6 class="card-title">Person Name: ${person.result[1].name.common}</h6>
        <hr>
        <p class="card-text">age:${person.result[1].age}</p>
        <p class="card-text">street:${person.result[1].address.street}</p>
   </div>
</div>
   
  
  `;
 */
