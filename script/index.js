function loadCategory() {
  // 1- fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    // 2- convert promise to json
    .then((res) => res.json())
    // 3- send data to display
    .then((data) => displaycategories(data.categories));
}

function displaycategories(categories) {
  // get the container
  const categoryContainer = document.getElementById("category-container");

  // Loop operation on Array of object
  for (let cat of categories) {
    // console.log(cat);

    // create Element
    const categoryDiv = document.createElement("div");

    categoryDiv.innerHTML = `
    <button class="btn btn-sm bg-[#25252515] text-[#25252570] hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
    `;

    // Append the Element
    categoryContainer.append(categoryDiv);
  }
}

loadCategory();
