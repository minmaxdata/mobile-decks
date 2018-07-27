import { AsyncStorage } from 'react-native';
const DECKS_STORAGE_KEY = 'FlashCards:decks';
let data = {};
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
    return results === null ? initialData() : JSON.parse(results);
  });
}

export function initialData() {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
  return data;
}

/*
`AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => alert(result))`?
*/
export const getDeck = deckId => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
    const decks = JSON.parse(result);
    console.log('getDeck ', decks);
    return decks[deckId];
  });
};
export function addDeck(deck) {
  console.log('addDeck', deck);
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}
export function addCardToDeck(title, card) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [title]: card
    })
  );
}
export function clearStorage() {
  console.log('clearStorage');
  AsyncStorage.removeItem(DECKS_STORAGE_KEY);
}
/*
getDecks: return all of the decks along with their titles, questions, and answers.
getDeck: take in a single id argument and return the deck associated with that id.
saveDeckTitle: take in a single title argument and add it to the decks.
addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
*/
