// Define constants for the suits and the Major/Minor Arcana
const SUITS = ['cups', 'wands', 'pentacles', 'swords'];
const MINOR = [2,3,4,5,6,7,8,9,10,'Ace','Page','Knight','Queen','King'];
const MAJOR = [
  'The Emperor','The Hierophant','The Lovers','The Chariot',
  'The Fool','The Magician','The High Priestess','The Empress',
  'The Hanged Man','Death','Temperance','The Devil',
  'The Tower','The Star','The Moon','The Sun',
  'Strength','The Hermit','Wheel of Fortune','Justice',
  'Judgement','The World'
]
let DECK = [];

// Create the Minor Arcana
for(let i = 0; i < SUITS.length; i++) {
  for(let j = 0; j < MINOR.length; j++) {
    let card = {
      value: MINOR[j],
      suit: SUITS[i],
      minor: true
    }
    DECK.push(card);
  }
}

// Create the Major Arcana
for(let i = 0; i < MAJOR.length; i++) {
  let card = {
    value: i,
    suit: MAJOR[i],
    minor: false
  }
  DECK.push(card);
}

const deal = () => {
  // Shuffle the DECK!
  // Swap the location of 2 random cards
  for(let i = 0; i < 1000; i++) {
    let card1 = Math.floor(Math.random() * DECK.length);
    let card2 = Math.floor(Math.random() * DECK.length);

    let tmp = DECK[card1];
    DECK[card1] = DECK[card2];
    DECK[card2] = tmp;
  }
  
  // Is the card upright or reversed?
  let reversed = () => {
    return Math.random() > 0.7 ? true : false;
  }
  
  // Fill the HTML with the content
  for(let i = 0; i < 3; i++) {
    document.getElementById(`card_${i+1}`).style.background = "white";
    // if a card from the Minor Arcana, display the value at the top and the suit
    if(DECK[i].minor) {
      document.getElementById(`num_${i+1}`).style.opacity = "1";
      document.getElementById(`num_${i+1}`).innerHTML = DECK[i].value + " of";
    } else {
    // otherwise it's a card from the Major Arcana
      document.getElementById(`num_${i+1}`).style.opacity = "0.7";
      document.getElementById(`num_${i+1}`).innerHTML = DECK[i].value;
    }
    document.getElementById(`suit_${i+1}`).innerHTML = DECK[i].suit;
    // if the card is reversed, display that on the card
    if(reversed()) {
      document.getElementById(`picked_${i+1}`).innerHTML = "(reversed)";
      // document.getElementById(`card_${i+1}`).style.transform = "rotate(180deg)";
      // --- come back to this ---
    } else {
      document.getElementById(`picked_${i+1}`).innerHTML = "";
    }
  }
}

const stand = () => {
    document.getElementById(`title_1`).innerHTML = "Where you stand now";
    document.getElementById(`title_2`).innerHTML = "What you aspire to";
    document.getElementById(`title_3`).innerHTML = "How to get there";
}
const way = () => {
    document.getElementById(`title_1`).innerHTML = "What you aspire to";
    document.getElementById(`title_2`).innerHTML = "What is standing in your way";
    document.getElementById(`title_3`).innerHTML = "How you can overcome this";
}
const help = () => {
    document.getElementById(`title_1`).innerHTML = "What will help you";
    document.getElementById(`title_2`).innerHTML = "What will hinder you";
    document.getElementById(`title_3`).innerHTML = "What is your unrealised potential";
}
const relGeneral = () => {
    document.getElementById(`title_1`).innerHTML = "You";
    document.getElementById(`title_2`).innerHTML = "The other person";
    document.getElementById(`title_3`).innerHTML = "The relationship";
}
const relFuture = () => {
    document.getElementById(`title_1`).innerHTML = "What you want from the relationship";
    document.getElementById(`title_2`).innerHTML = "What they want from the relationship";
    document.getElementById(`title_3`).innerHTML = "Where the relationship is heading";
}
const together = () => {
    document.getElementById(`title_1`).innerHTML = "What brings you together";
    document.getElementById(`title_2`).innerHTML = "What pulls you apart";
    document.getElementById(`title_3`).innerHTML = "What needs your attention";
}
const opportunity = () => {
    document.getElementById(`title_1`).innerHTML = "Opportunities ahead";
    document.getElementById(`title_2`).innerHTML = "Challenges";
    document.getElementById(`title_3`).innerHTML = "Outcome";
}
const choice = () => {
    document.getElementById(`title_1`).innerHTML = "Choice 1";
    document.getElementById(`title_2`).innerHTML = "Choice 2";
    document.getElementById(`title_3`).innerHTML = "Choice 3";
}
const disco = () => {
    document.getElementById(`title_1`).innerHTML = "Mind";
    document.getElementById(`title_2`).innerHTML = "Body";
    document.getElementById(`title_3`).innerHTML = "Spirit";
}
const path = () => {
    document.getElementById(`title_1`).innerHTML = "You";
    document.getElementById(`title_2`).innerHTML = "Your current path";
    document.getElementById(`title_3`).innerHTML = "Your potential";
}
const general = () => {
    document.getElementById(`title_1`).innerHTML = "The true nature of your problem";
    document.getElementById(`title_2`).innerHTML = "The cause";
    document.getElementById(`title_3`).innerHTML = "The solutions";
}
