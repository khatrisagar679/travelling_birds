// toggle itinerary paragraph

window.onload = function() {
    const words = document.querySelectorAll('.word');
    
    words.forEach(word => {
      word.addEventListener('click', () => {
        const paragraph = word.nextElementSibling;
        if (paragraph.style.display === 'block') {
          paragraph.style.display = 'none';
        } else {
          paragraph.style.display = 'block';
        }
      });
    });
  }



  // change price in form

  function updatePrice() {
    var selectElement = document.getElementById("people");
    var priceElement = document.getElementById("price");

    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var numOfPeople = parseInt(selectedOption.value);

    var pricePerPerson = 1000;  // Change this to your desired price
    var totalPrice = pricePerPerson * numOfPeople;

    priceElement.textContent = "$" + totalPrice;
}