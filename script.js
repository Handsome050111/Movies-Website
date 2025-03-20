// Get references to the search input and all movie cards
const searchInput = document.querySelector('nav input');
const movieCards = document.querySelectorAll('.card');

// Add event listener to the search input field
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase(); // Get the input value and convert it to lowercase
    let foundMatch = false;

    movieCards.forEach(card => {
        const movieName = card.querySelector('h2').textContent.toLowerCase(); // Get the movie name in lowercase
        const cardParent = card.parentElement;  // Get the parent element (the <a> tag)

        if (movieName.includes(query)) {
            // Show the card and highlight it if it matches
            card.style.display = 'block'; // Show the card
            card.style.backgroundColor = '#4a4502'; // Highlight the card
            cardParent.style.order = -1;  // Move the card to the top
            foundMatch = true;
        } else {
            // Hide the card if it does not match
            card.style.display = 'none'; // Hide the card
            card.style.backgroundColor = ''; // Reset the background color
            cardParent.style.order = '';  // Reset the order
        }
    });

    // If no match is found, you can reset all card orders
    if (!foundMatch) {
        movieCards.forEach(card => {
            card.style.display = 'block'; // Show all cards again if nothing matches
            card.style.backgroundColor = ''; // Reset background color
            cardParent.style.order = ''; // Reset the order of all cards
        });
    }
})
