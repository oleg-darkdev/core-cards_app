
import { redCards, yellowCards, blueCards, greenCards, orangeCards } from './cards';


const timeline = [
  {
    title: 'Pre-alfa v_',
    items: [].concat(redCards.cards, greenCards.cards[3], greenCards.cards[4])
  },
  {
    title: 'Alfa - 0_1_1',
    items: [].concat(orangeCards.cards[0], orangeCards.cards[1])
  },
  {
    title: 'Beta - 1_2_2',
    items: [].concat(yellowCards.cards[0],greenCards.cards[0], greenCards.cards[1], greenCards.cards[2],  orangeCards.cards[2], )
  },
  {
    title: 'Beta - 1_3_1',
    items: [].concat(blueCards.cards[0], blueCards.cards[1], blueCards.cards[2], blueCards.cards[3], yellowCards.cards[1], yellowCards.cards[2], )
  },
    {
    title: 'Beta - 1_4_2',
    items: [].concat(blueCards.cards[4], blueCards.cards[5], blueCards.cards[6], yellowCards.cards[3], yellowCards.cards[4],)
  },
    {
    title: 'Beta - 1_5_1',
    items: [].concat(blueCards.cards[7], yellowCards.cards[5], yellowCards.cards[6], )
  },

]


export default timeline;
