const sectionTAg = document.querySelector("#sectionTag");

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")

    .then(response => response.json())

    .then(data => {
      // Limit to only the first 9 items
      const firstNine = data.slice(0, 9);

    
      console.log(firstNine);


      firstNine.forEach(each => {
        sectionTAg.innerHTML += `
          <div>
            <h2>${each.email}</h2>
            <h3>${each.name}</h3>
            <button class="btn">Read More</button>
          </div>
        `;
      });
    });
};

fetchData();


