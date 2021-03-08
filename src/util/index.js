import card1 from "../images/card1.jpg";
import card2 from  "../images/card2.jpg";
import card3 from  "../images/card3.jpg";
import card4 from  "../images/card4.jpg";
import card5 from  "../images/card5.jpg";
import card6 from "../images/card6.jpg";
import card7 from "../images/card7.jpg";
import card8 from "../images/card8.jpg";
import card9 from "../images/card9.jpg";

export default function initializeDeck() {
    console.log("initializeDeck")
    let id = 0;
    const cards = [
         card1,card2,card3,card4,card5,card6,card7,card8, card1,card2,card3,card4,card5,card6,card7,card8,card9,card9
       ].reduce((acc, type) => {
            acc.push({
                id: id++,
                type
            })
            return acc
        }, []);

    console.log(cards);

    //Random order cards 
    return cards.sort(()=>  Math.random() - 0.5);
}
