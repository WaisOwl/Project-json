//console.log("Test.....");

fetch("./data/data.json")
  .then((response) => response.json())
  .then ((data) => {
   //console.log(data);
    const container = document.getElementById('card-container');
    data.forEach((element)=>{
    console.log(element);
    const row = document.createElement('div');
    row.className="row d-flex justify-content-center";
    const col = document.createElement('div');
    // En móviles el elemento ocupa toda la fila (100%), en tablets  (≥768px): el elemento ocupa la mitad de la fila (50%)
    // En pantallas grandes (≥992px): el elemento ocupa un tercio de la fila (33%).
    col.className="col-12 col-md-6 col-lg-4" 
    const card = document.createElement('div');
    card.className = "card mt-3";
    const cardBody = document.createElement('div');
    cardBody.className = "card-body text-center";    
    cardBody.innerHTML=`<h2>${element.nombre}</h2><p>${element.desc}</p><img src="${element.image}">`;
    card.appendChild(cardBody);
    col.appendChild(card);
    row.appendChild(col);
    container.appendChild(row); 
   });
  })
  .catch((error) => console.error("Error loading JSON file", error));
   

