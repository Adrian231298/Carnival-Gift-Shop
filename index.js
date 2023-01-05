const input = require('sync-input');
console.log("WELCOME TO THE CARNIVAL GIFT SHOP!")
console.log("Hello friend! Thank you for visiting the carnival!")
console.log("Here's the list of gifts:")

const gifts = new Map()
gifts.set(1, {name:"Teddy Bear", cost:10})
gifts.set(2, {name: "Big Red Ball", cost: 5})
gifts.set(3, {name: "Huge Bear", cost: 50})
gifts.set(4, {name: "Candy", cost: 8})
gifts.set(5, {name: "Stuffed Tiger", cost: 15})
gifts.set(6, {name: "Stuffed Dragon", cost: 30})
gifts.set(7, {name: "Skateboard", cost: 100})
gifts.set(8, {name: "Toy Car", cost: 25})
gifts.set(9, {name: "Basketball", cost: 20})
gifts.set(10, {name:"Scary Mask", cost: 75})




const person = {
  ticketAmount: 0
}
console.log("")
for (const [key, value] of gifts) {
    console.log(`${key}- ${value.name}, Cost: ${value.cost} tickets`)
  }  
let isRunning = true

while(isRunning){
  console.log()
  console.log("What do you want to do?")
  console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop")
  const action = Number(input())
  
  switch(action) {
    case 1:
      buyGift()
      break;
    case 2:
      addTickets()
      break;
    case 3:
      checkTickets()
      break;
    case 4:
      showGifts()
      break;
    case 5:
      isRunning = false
      break;
    default:
      console.log("Please enter a valid number!")
  }  
}

console.log("Have a nice day!")


function showGifts() {
  if (gifts.size == 0) {
    console.log("Here's the list of gifts:")
    console.log()
    console.log("Wow! There are no gifts to buy.")
  } else {
    console.log("Here's the list of gifts:")
    console.log()
    for (const [key, value] of gifts) {
      console.log(`${key}- ${value.name}, Cost: ${value.cost} tickets`)
    }    
  }
  
}

function addTickets() {
  console.log("Enter the ticket amount:")
  let tickets = Number(input())
  if (!Number.isNaN(tickets) && tickets >= 0 && tickets <= 1000) {
    
    person.ticketAmount += tickets
    console.log(`Total tickets: ${person.ticketAmount}`)
  } else {
    console.log("Please enter a valid number between 0 and 1000.")
  }
  

}
/*
> 1
Enter the number of the gift you want to get: > 1
Here you go, one Teddy Bear!
Total tickets: 90
Have a nice day!
*/
function checkTickets() {
  console.log(`Total tickets: ${person.ticketAmount}`)
}
function buyGift() {
  if (gifts.size != 0) {
    console.log("Enter the number of the gift you want to get:")
    let number = Number(input())
    if (Number.isNaN(number)) {
      console.log("Please enter a valid number!")
    } else {
      if (gifts.get(number)) {
        let gift = gifts.get(number)
        if (person.ticketAmount - gift.cost < 0) {
          console.log("You don't have enough tickets to buy this gift.")
        } else {
          gifts.delete(number)
          console.log(`Here you go, one ${gift.name}!`)
          person.ticketAmount -= gift.cost
          console.log(`Total tickets: ${person.ticketAmount}`)    
        }
        
      } else {
        console.log("There is no gift with that number!")
      }  
    }    
  } else {
    
    console.log("Wow! There are no gifts to buy.")
  }
}
