console.log('%c HI', 'color: firebrick')
// code begins here

//global scope variables
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imageContainer = document.getElementById("dog-image-container")
const breedList = document.getElementById("dog-breeds")


//invocations for console.logging in order to debug
fetchDogImages()
fetchDogBreeds()


// fetching images
function fetchDogImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => fetchImages(data.message)); // we add dot message to access the data if it returned an object

}

function fetchImages(data) {
    data.forEach(element => {
        const image = document.createElement("img")
        image.src = element
        imageContainer.appendChild(image)
    });
}


// fetching dog breeds
function fetchDogBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => fetchBreeds(Object.keys(data.message)))
}


function fetchBreeds(data) {
    data.forEach(element => {
        const li = document.createElement("li")
        li.textContent = element
        li.addEventListener("click", () => {
            li.style.color = "red"
        })
        breedList.appendChild(li)
    })
    
}

// Dropdown menu
const breedDropdown = document.getElementById("breed-dropdown");

breedDropdown.addEventListener("change", (e) => {
  const selectedLetter = e.target.value;
  filterBreeds(selectedLetter);
});

function filterBreeds(selectedLetter) {
  const breedItems = breedList.getElementsByTagName("li");

  for (let i = 0; i < breedItems.length; i++) {
    const breedName = breedItems[i].textContent;
    if (breedName.startsWith(selectedLetter)) {S
      breedItems[i].style.display = "list-item";
    } else {
      breedItems[i].style.display = "none";
    }
  }
}