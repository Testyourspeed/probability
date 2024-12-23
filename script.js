const questions = [
    // Round 1
    [
        {
            question: "What is the probability of rolling a 3 on a fair six-sided die?",
            options: ["1/6", "1/2", "1/3", "1/4"],
            correct: 0,
        },
        {
            question: "If two dice are rolled, what is the probability of getting a sum of 7?",
            options: ["1/6", "1/8", "1/9", "1/12"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a heart?",
            options: ["1/4", "1/13", "1/26", "1/52"],
            correct: 0,
        },
        {
            question: "If you flip a coin, what is the probability of getting heads?",
            options: ["1/2", "1/4", "1/3", "1/5"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red card from a standard deck of cards?",
            options: ["1/2", "1/4", "1/13", "1/26"],
            correct: 0,
        },
    ],

    // Round 2
    [
        {
            question: "What is the probability of drawing a spade or a heart from a deck of 52 cards?",
            options: ["1/2", "1/4", "1/13", "1/26"],
            correct: 0,
        },
        {
            question: "If you roll two dice, what is the probability of getting a double?",
            options: ["1/6", "1/36", "1/12", "1/18"],
            correct: 0,
        },
        {
            question: "A box contains 3 red, 4 green, and 5 blue balls. What is the probability of drawing a green ball?",
            options: ["4/12", "1/3", "1/2", "5/12"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a number greater than 5 when drawing a card from a deck of 10 numbered cards (1 to 10)?",
            options: ["1/2", "1/10", "3/5", "1/5"],
            correct: 0,
        },
        {
            question: "If you flip two coins, what is the probability of getting at least one tail?",
            options: ["3/4", "1/2", "1/4", "1/3"],
            correct: 0,
        },
    ],

    // Round 3
    [
        {
            question: "In a deck of 52 cards, what is the probability of drawing a queen or a king?",
            options: ["2/13", "1/13", "1/52", "1/26"],
            correct: 0,
        },
        {
            question: "If a fair die is rolled, what is the probability of rolling a number less than 4?",
            options: ["1/2", "1/3", "1/4", "1/6"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting an even number from the set {1, 2, 3, 4, 5, 6}?",
            options: ["1/2", "1/3", "1/6", "1/4"],
            correct: 0,
        },
        {
            question: "A jar contains 10 red, 5 green, and 3 blue marbles. What is the probability of drawing a blue marble?",
            options: ["3/18", "1/6", "3/16", "1/3"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a number greater than 4 from a set of 10 numbered cards (1 to 10)?",
            options: ["1/2", "3/5", "1/5", "2/5"],
            correct: 0,
        },
    ],

    // Round 4
    [
        {
            question: "If you roll two dice, what is the probability that the sum is greater than 10?",
            options: ["3/36", "1/6", "1/12", "1/36"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a face card (jack, queen, or king) from a deck of 52 cards?",
            options: ["3/13", "1/13", "4/13", "12/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a number between 4 and 7 (inclusive) from a deck of 10 numbered cards (1 to 10)?",
            options: ["2/10", "1/10", "3/10", "4/10"],
            correct: 0,
        },
        {
            question: "A bag contains 5 red balls, 3 blue balls, and 2 green balls. What is the probability of selecting a red ball?",
            options: ["5/10", "5/15", "3/10", "5/20"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a prime number from the set {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?",
            options: ["4/10", "3/10", "1/5", "1/2"],
            correct: 0,
        },
    ],

    // Round 5
    [
        {
            question: "What is the probability of drawing a red card or a 3 from a standard deck of 52 cards?",
            options: ["28/52", "16/52", "13/52", "15/52"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a heart or a spade?",
            options: ["1/2", "1/4", "1/13", "1/26"],
            correct: 0,
        },
        {
            question: "If you flip a fair coin three times, what is the probability of getting exactly two heads?",
            options: ["3/8", "1/2", "1/3", "1/4"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is either a 5 or a 7 from a deck of 52 cards?",
            options: ["2/13", "1/13", "1/26", "2/52"],
            correct: 0,
        },
        {
            question: "If you roll two dice, what is the probability that the sum is an even number?",
            options: ["1/2", "1/3", "1/4", "1/6"],
            correct: 0,
        },
    ],
  // Round 6
    [
        {
            question: "What is the probability of drawing a red card from a deck of 52 cards, given that the card is not a face card?",
            options: ["1/2", "1/4", "1/26", "1/13"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a multiple of 3 from the set {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?",
            options: ["3/10", "2/10", "4/10", "1/10"],
            correct: 0,
        },
        {
            question: "If a coin is flipped 5 times, what is the probability of getting exactly 3 heads?",
            options: ["5/32", "10/32", "1/2", "1/8"],
            correct: 0,
        },
        {
            question: "A bag contains 4 red, 3 blue, and 2 yellow balls. What is the probability of drawing a blue ball?",
            options: ["3/9", "3/10", "4/9", "1/3"],
            correct: 0,
        },
        {
            question: "If you roll a fair die, what is the probability of rolling a number that is a multiple of 2?",
            options: ["1/2", "1/6", "2/3", "1/3"],
            correct: 0,
        },
    ],

    // Round 7
    [
        {
            question: "What is the probability of drawing a queen or a king from a deck of 52 cards?",
            options: ["2/13", "1/13", "1/26", "1/52"],
            correct: 0,
        },
        {
            question: "If two cards are drawn randomly from a deck of 52 cards, what is the probability that both cards are aces?",
            options: ["1/221", "1/169", "1/1024", "1/132"],
            correct: 0,
        },
        {
            question: "In a bag of 20 marbles, 5 are blue, 8 are red, and 7 are green. What is the probability of drawing a green marble?",
            options: ["7/20", "5/20", "8/20", "7/25"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is either a 5 or a face card from a deck of 52 cards?",
            options: ["7/52", "4/52", "3/52", "1/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is neither a king nor a queen from a deck of 52 cards?",
            options: ["11/13", "1/13", "4/13", "12/52"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "If you draw two cards from a deck of 52 cards without replacement, what is the probability that both cards are red?",
            options: ["25/102", "26/102", "26/51", "13/51"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a 4 or greater on a fair six-sided die?",
            options: ["1/2", "1/3", "2/3", "1/6"],
            correct: 0,
        },
        {
            question: "A bag contains 8 red balls, 5 blue balls, and 3 green balls. What is the probability of drawing a red ball?",
            options: ["8/16", "8/20", "3/16", "5/20"],
            correct: 0,
        },
        {
            question: "In a deck of cards, what is the probability of drawing a number greater than 7?",
            options: ["20/52", "18/52", "15/52", "25/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a 2 or 5 on a fair six-sided die?",
            options: ["2/6", "1/6", "1/3", "1/12"],
            correct: 0,
        },
    ],

    // Round 9
    [
        {
            question: "What is the probability of drawing a black card from a standard deck of 52 cards?",
            options: ["1/2", "1/4", "1/13", "1/26"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is a red number card (2 through 10) from a deck of 52 cards?",
            options: ["18/52", "10/52", "26/52", "12/52"],
            correct: 0,
        },
        {
            question: "If you flip a fair coin three times, what is the probability of getting at least one tail?",
            options: ["7/8", "3/8", "5/8", "1/2"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is not a face card from a deck of 52 cards?",
            options: ["40/52", "36/52", "45/52", "25/52"],
            correct: 0,
        },
        {
            question: "In a bag with 12 marbles, 6 are red, 3 are blue, and 3 are yellow. What is the probability of drawing a red marble?",
            options: ["6/12", "3/12", "3/6", "6/15"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "What is the probability of rolling a sum of 8 with two fair six-sided dice?",
            options: ["5/36", "1/6", "1/36", "2/36"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red or a 10 from a deck of 52 cards?",
            options: ["14/52", "16/52", "1/52", "2/52"],
            correct: 0,
        },
        {
            question: "If you roll two dice, what is the probability of getting a sum greater than 7?",
            options: ["15/36", "16/36", "18/36", "10/36"],
            correct: 0,
        },
        {
            question: "A box contains 4 red, 5 green, and 6 blue balls. What is the probability of drawing a red or green ball?",
            options: ["9/15", "4/15", "5/15", "6/15"],
            correct: 0,
        },
        {
            question: "If a coin is flipped twice, what is the probability of getting two heads?",
            options: ["1/4", "1/2", "1/3", "1/6"],
            correct: 0,
        },
    ],
  // Round 11
    [
        {
            question: "What is the probability of drawing a face card (Jack, Queen, or King) from a deck of 52 cards?",
            options: ["12/52", "3/52", "1/13", "1/4"],
            correct: 0,
        },
        {
            question: "If you draw two cards from a deck of 52 cards, what is the probability that both are hearts?",
            options: ["13/52", "1/26", "1/17", "12/51"],
            correct: 0,
        },
        {
            question: "A jar contains 5 red, 7 green, and 3 yellow marbles. What is the probability of drawing a green marble?",
            options: ["7/15", "1/3", "5/15", "7/10"],
            correct: 0,
        },
        {
            question: "In a standard deck of 52 cards, what is the probability of drawing a 10 or a Jack?",
            options: ["2/13", "1/26", "1/13", "1/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a number greater than 4 on a fair six-sided die?",
            options: ["1/3", "1/2", "1/6", "1/4"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "In a bag of 10 marbles, 6 are blue and 4 are green. What is the probability of drawing a green marble?",
            options: ["4/10", "6/10", "3/10", "5/10"],
            correct: 0,
        },
        {
            question: "If you flip two coins, what is the probability of getting exactly one tail?",
            options: ["1/2", "1/4", "1/3", "1/6"],
            correct: 0,
        },
        {
            question: "If two dice are rolled, what is the probability of getting a sum of 11?",
            options: ["2/36", "1/36", "1/18", "2/18"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a multiple of 5 from the set {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?",
            options: ["2/10", "1/10", "3/10", "4/10"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red card from a deck of 52 cards if the first card drawn is replaced?",
            options: ["1/2", "1/26", "1/13", "1/52"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "A box contains 4 red, 3 blue, and 2 yellow balls. If one ball is drawn, what is the probability that the ball is not yellow?",
            options: ["7/9", "4/9", "5/9", "8/9"],
            correct: 0,
        },
        {
            question: "What is the probability of getting a sum of 3 when rolling two six-sided dice?",
            options: ["1/18", "1/36", "2/36", "1/12"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a non-face card from a deck of 52 cards?",
            options: ["40/52", "20/52", "52/52", "12/52"],
            correct: 0,
        },
        {
            question: "In a bag of 20 marbles, 12 are red and the rest are green. What is the probability of drawing a green marble?",
            options: ["8/20", "12/20", "10/20", "1/2"],
            correct: 0,
        },
        {
            question: "If two dice are rolled, what is the probability that the sum is less than 5?",
            options: ["4/36", "1/9", "1/36", "2/36"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "What is the probability of drawing a heart or a diamond from a deck of 52 cards?",
            options: ["1/2", "1/13", "1/26", "1/4"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a number card (2-10) from a deck of 52 cards?",
            options: ["36/52", "28/52", "20/52", "24/52"],
            correct: 0,
        },
        {
            question: "What is the probability of getting two heads when flipping two coins?",
            options: ["1/2", "1/4", "1/3", "1/8"],
            correct: 0,
        },
        {
            question: "If you roll a fair die, what is the probability of rolling a number less than 4?",
            options: ["1/2", "1/6", "2/3", "3/6"],
            correct: 0,
        },
        {
            question: "If you roll a fair die, what is the probability of rolling a number greater than 3?",
            options: ["1/2", "2/3", "1/3", "1/6"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "What is the probability of drawing a 7 or 8 from a deck of 52 cards?",
            options: ["2/52", "4/52", "2/13", "1/26"],
            correct: 0,
        },
        {
            question: "In a bag with 10 marbles, 3 are yellow and the rest are blue. What is the probability of drawing a yellow marble?",
            options: ["3/10", "7/10", "1/10", "5/10"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is neither a spade nor a heart from a deck of 52 cards?",
            options: ["26/52", "13/52", "1/52", "39/52"],
            correct: 0,
        },
        {
            question: "If you flip three coins, what is the probability of getting exactly two heads?",
            options: ["3/8", "1/8", "1/4", "5/8"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a 6 or a 5 on a fair six-sided die?",
            options: ["1/3", "1/6", "2/6", "1/2"],
            correct: 0,
        },
    ],
  // Round 16
    [
        {
            question: "What is the probability of drawing a red card or a 5 from a deck of 52 cards?",
            options: ["8/52", "4/52", "1/26", "2/52"],
            correct: 0,
        },
        {
            question: "If you flip a coin three times, what is the probability of getting at least one head?",
            options: ["7/8", "1/2", "3/4", "1/4"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a face card from a deck of 52 cards?",
            options: ["12/52", "4/52", "1/26", "1/13"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is a spade or a heart from a deck of 52 cards?",
            options: ["1/2", "1/4", "1/13", "1/26"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling an even number on a fair six-sided die?",
            options: ["3/6", "2/6", "1/6", "4/6"],
            correct: 0,
        },
    ],

    // Round 17
    [
        {
            question: "If you roll two dice, what is the probability that the sum of the dice is greater than 9?",
            options: ["6/36", "8/36", "9/36", "4/36"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a number greater than 10 from a deck of 52 cards?",
            options: ["4/52", "16/52", "12/52", "20/52"],
            correct: 0,
        },
        {
            question: "A box contains 4 red, 3 blue, and 3 green balls. If one ball is drawn, what is the probability of drawing a red or blue ball?",
            options: ["7/10", "5/10", "4/10", "8/10"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a card that is a number less than 10?",
            options: ["36/52", "40/52", "32/52", "26/52"],
            correct: 0,
        },
        {
            question: "What is the probability of getting a sum of 7 when rolling two fair dice?",
            options: ["6/36", "1/36", "1/6", "2/36"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "What is the probability of drawing a red card or an Ace from a deck of 52 cards?",
            options: ["14/52", "10/52", "12/52", "15/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a club or a face card from a deck of 52 cards?",
            options: ["16/52", "1/13", "4/52", "12/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a 3 on a fair six-sided die?",
            options: ["1/6", "1/2", "1/4", "1/3"],
            correct: 0,
        },
        {
            question: "A bag contains 6 red, 3 blue, and 1 green marble. What is the probability of drawing a red or a blue marble?",
            options: ["9/10", "6/10", "5/10", "8/10"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a face card from a deck of 52 cards if two cards are drawn at once, without replacement?",
            options: ["3/52", "2/52", "12/52", "5/52"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "What is the probability of drawing a queen or a king from a deck of 52 cards?",
            options: ["2/13", "4/52", "1/26", "3/52"],
            correct: 0,
        },
        {
            question: "If you flip a coin four times, what is the probability of getting exactly two heads?",
            options: ["6/16", "2/16", "4/16", "3/16"],
            correct: 0,
        },
        {
            question: "In a standard deck of cards, what is the probability of drawing a red card or a 10?",
            options: ["18/52", "2/52", "4/52", "8/52"],
            correct: 0,
        },
        {
            question: "If you roll a fair die, what is the probability of rolling a number less than or equal to 3?",
            options: ["1/2", "1/3", "1/6", "1/4"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red or a black card from a deck of 52 cards?",
            options: ["1", "1/2", "1/4", "1/13"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "What is the probability of drawing an Ace or a King from a deck of 52 cards?",
            options: ["8/52", "1/13", "2/52", "3/52"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a prime number from the set {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?",
            options: ["4/10", "2/10", "3/10", "5/10"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling an odd number on a fair six-sided die?",
            options: ["3/6", "1/2", "1/3", "2/3"],
            correct: 0,
        },
        {
            question: "A box contains 10 red, 6 blue, and 4 green balls. What is the probability of drawing a blue or green ball?",
            options: ["10/20", "6/20", "10/20", "14/20"],
            correct: 0,
        },
        {
            question: "What is the probability of getting a sum of 5 when rolling two six-sided dice?",
            options: ["4/36", "2/36", "1/36", "5/36"],
            correct: 0,
        },
    ],
  // Round 21
    [
        {
            question: "What is the probability of drawing a card that is either a heart or a queen from a deck of 52 cards?",
            options: ["14/52", "16/52", "4/52", "8/52"],
            correct: 0,
        },
        {
            question: "If you flip a coin three times, what is the probability of getting exactly one tail?",
            options: ["3/8", "2/8", "4/8", "1/8"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a 10 or a King from a deck of 52 cards?",
            options: ["8/52", "4/52", "2/52", "1/26"],
            correct: 0,
        },
        {
            question: "If you roll a fair die, what is the probability of rolling a number greater than 4?",
            options: ["1/3", "2/3", "1/2", "1/6"],
            correct: 0,
        },
        {
            question: "In a bag of 10 marbles, 7 are red, and 3 are green. What is the probability of drawing a red or green marble?",
            options: ["1", "7/10", "3/10", "7/3"],
            correct: 0,
        },
    ],

    // Round 22
    [
        {
            question: "What is the probability of drawing a card that is a spade or a 7 from a deck of 52 cards?",
            options: ["14/52", "6/52", "1/52", "13/52"],
            correct: 0,
        },
        {
            question: "In a jar containing 8 red, 5 blue, and 3 green balls, what is the probability of drawing a green ball?",
            options: ["3/16", "1/5", "3/16", "1/4"],
            correct: 0,
        },
        {
            question: "What is the probability of flipping two coins and getting exactly one head?",
            options: ["1/2", "1/4", "1/3", "1/8"],
            correct: 0,
        },
        {
            question: "If you roll a fair die, what is the probability of getting a number divisible by 3?",
            options: ["1/3", "1/2", "1/6", "1/5"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a red card or a Jack?",
            options: ["14/52", "26/52", "3/52", "1/13"],
            correct: 0,
        },
    ],

    // Round 23
    [
        {
            question: "What is the probability of drawing an Ace or a red card from a deck of 52 cards?",
            options: ["28/52", "4/52", "16/52", "1/13"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a number less than 5 on a fair six-sided die?",
            options: ["2/6", "3/6", "4/6", "1/6"],
            correct: 0,
        },
        {
            question: "A box contains 5 red, 3 blue, and 2 green balls. What is the probability of drawing a red or blue ball?",
            options: ["8/10", "7/10", "5/10", "6/10"],
            correct: 0,
        },
        {
            question: "If you draw one card from a deck of 52 cards, what is the probability of drawing a card that is not a spade?",
            options: ["39/52", "13/52", "1/4", "26/52"],
            correct: 0,
        },
        {
            question: "If you flip two coins, what is the probability of getting two heads?",
            options: ["1/4", "1/2", "1/3", "1/6"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "What is the probability of rolling a sum greater than 8 on two six-sided dice?",
            options: ["10/36", "6/36", "5/36", "1/36"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a queen or a heart from a deck of 52 cards?",
            options: ["5/52", "4/52", "10/52", "3/52"],
            correct: 0,
        },
        {
            question: "If you roll a fair die, what is the probability of rolling a number less than or equal to 4?",
            options: ["2/3", "1/2", "1/6", "4/6"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a card that is not a club?",
            options: ["39/52", "13/52", "26/52", "52/52"],
            correct: 0,
        },
        {
            question: "If you draw one card from a deck of 52 cards, what is the probability of drawing a number card (2-10)?",
            options: ["36/52", "28/52", "16/52", "12/52"],
            correct: 0,
        },
    ],

    // Round 25
    [
        {
            question: "What is the probability of drawing a 7 or a face card from a deck of 52 cards?",
            options: ["16/52", "12/52", "8/52", "4/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is a heart or a face card from a deck of 52 cards?",
            options: ["19/52", "26/52", "18/52", "16/52"],
            correct: 0,
        },
        {
            question: "If you flip three coins, what is the probability of getting at least one tail?",
            options: ["7/8", "3/4", "1/2", "1/8"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a 4 or a 5 on a fair six-sided die?",
            options: ["1/3", "1/6", "2/6", "1/2"],
            correct: 0,
        },
        {
            question: "If a jar contains 4 red, 3 blue, and 5 green marbles, what is the probability of drawing a green or blue marble?",
            options: ["8/12", "7/12", "3/12", "5/12"],
            correct: 0,
        },
    ],
  // Round 26
    [
        {
            question: "What is the probability of drawing a red card or a 2 from a deck of 52 cards?",
            options: ["14/52", "1/13", "4/52", "3/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a diamond or a king from a deck of 52 cards?",
            options: ["10/52", "12/52", "8/52", "6/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling an even number on a fair six-sided die?",
            options: ["3/6", "2/6", "1/6", "4/6"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a number card (2-10) from a deck of 52 cards?",
            options: ["36/52", "28/52", "16/52", "12/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a face card from a deck of 52 cards if two cards are drawn at once, without replacement?",
            options: ["12/52", "10/52", "15/52", "16/52"],
            correct: 0,
        },
    ],

    // Round 27
    [
        {
            question: "If you flip two coins, what is the probability of getting exactly one head?",
            options: ["2/4", "1/2", "3/4", "1/4"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a sum of 8 when rolling two fair dice?",
            options: ["5/36", "7/36", "8/36", "6/36"],
            correct: 0,
        },
        {
            question: "A box contains 6 red balls and 4 blue balls. What is the probability of drawing a red ball?",
            options: ["6/10", "4/10", "5/10", "1/2"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a queen or a spade from a deck of 52 cards?",
            options: ["5/52", "13/52", "1/26", "6/52"],
            correct: 0,
        },
        {
            question: "If you roll a fair die, what is the probability of rolling a number greater than 3?",
            options: ["1/2", "2/3", "3/6", "1/3"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "If you flip a coin four times, what is the probability of getting exactly two heads?",
            options: ["6/16", "1/4", "2/16", "3/16"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is a number greater than 10 from a deck of 52 cards?",
            options: ["4/52", "12/52", "16/52", "3/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a black card (spades or clubs) from a deck of 52 cards?",
            options: ["26/52", "1/2", "13/52", "3/52"],
            correct: 0,
        },
        {
            question: "If you roll two dice, what is the probability of getting a sum less than 4?",
            options: ["3/36", "2/36", "1/36", "4/36"],
            correct: 0,
        },
        {
            question: "A bag contains 7 red marbles, 5 blue marbles, and 2 green marbles. What is the probability of drawing a green marble?",
            options: ["2/14", "5/14", "7/14", "1/7"],
            correct: 0,
        },
    ],

    // Round 29
    [
        {
            question: "If you flip a fair coin, what is the probability of getting two heads when flipped twice?",
            options: ["1/4", "1/2", "1/3", "1/6"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a number that is a multiple of 2 or 3 on a fair six-sided die?",
            options: ["4/6", "3/6", "5/6", "2/6"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a non-red marble from a box of 10 marbles (7 red, 3 green)?",
            options: ["3/10", "7/10", "1/2", "1/3"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a sum of 6 when rolling two fair dice?",
            options: ["5/36", "6/36", "7/36", "3/36"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a red or a blue ball from a box containing 4 red, 5 blue, and 1 green ball?",
            options: ["9/10", "8/10", "4/10", "5/10"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the probability of drawing a face card or a heart from a deck of 52 cards?",
            options: ["16/52", "10/52", "1/13", "12/52"],
            correct: 0,
        },
        {
            question: "In a standard deck of cards, what is the probability of drawing a red card or an Ace?",
            options: ["28/52", "14/52", "8/52", "4/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a sum of 9 when rolling two fair dice?",
            options: ["4/36", "1/36", "6/36", "5/36"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is either a diamond or a queen from a deck of 52 cards?",
            options: ["10/52", "12/52", "15/52", "16/52"],
            correct: 0,
        },
        {
            question: "What is the probability of flipping a coin four times and getting at least one tail?",
            options: ["15/16", "1/2", "1/4", "1/16"],
            correct: 0,
        },
    ],
  // Round 31
    [
        {
            question: "What is the probability of drawing a card that is either a spade or a 10 from a deck of 52 cards?",
            options: ["5/52", "16/52", "4/52", "3/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a sum greater than 10 with two six-sided dice?",
            options: ["3/36", "4/36", "2/36", "5/36"],
            correct: 0,
        },
        {
            question: "In a bag of 12 marbles, 6 are red and 6 are blue. What is the probability of drawing a red marble?",
            options: ["1/2", "1/3", "3/5", "6/12"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a heart or a diamond from a deck of 52 cards?",
            options: ["26/52", "13/52", "4/52", "10/52"],
            correct: 0,
        },
        {
            question: "In a jar containing 8 red, 5 blue, and 3 green balls, what is the probability of drawing a blue or green ball?",
            options: ["8/16", "7/16", "5/16", "9/16"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "What is the probability of rolling an odd number on a fair six-sided die?",
            options: ["3/6", "2/6", "1/6", "4/6"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a king or a face card from a deck of 52 cards?",
            options: ["16/52", "12/52", "13/52", "8/52"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a card that is either a red card or a 3?",
            options: ["14/52", "18/52", "16/52", "20/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is not a diamond from a deck of 52 cards?",
            options: ["39/52", "13/52", "26/52", "15/52"],
            correct: 0,
        },
        {
            question: "In a bag with 8 red marbles and 4 green marbles, what is the probability of drawing a red or green marble?",
            options: ["1", "3/4", "2/3", "1/2"],
            correct: 0,
        },
    ],

    // Round 33
    [
        {
            question: "What is the probability of rolling a sum less than 4 with two fair dice?",
            options: ["3/36", "2/36", "1/36", "4/36"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a queen or a red card from a deck of 52 cards?",
            options: ["18/52", "12/52", "16/52", "26/52"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a club or a 7?",
            options: ["15/52", "10/52", "13/52", "12/52"],
            correct: 0,
        },
        {
            question: "If you flip two coins, what is the probability of getting two tails?",
            options: ["1/4", "1/2", "3/4", "1/3"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a number greater than or equal to 4 on a fair six-sided die?",
            options: ["3/6", "2/6", "4/6", "5/6"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "What is the probability of drawing a red or a face card from a deck of 52 cards?",
            options: ["28/52", "13/52", "14/52", "20/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling an even number or a 3 on a fair six-sided die?",
            options: ["4/6", "3/6", "5/6", "2/6"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a marble that is not green from a jar with 5 green, 3 red, and 2 blue marbles?",
            options: ["8/10", "7/10", "6/10", "3/10"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a red card or a 10?",
            options: ["14/52", "16/52", "4/52", "8/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is a spade or an Ace from a deck of 52 cards?",
            options: ["14/52", "13/52", "5/52", "10/52"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "What is the probability of drawing a red card or a face card from a deck of 52 cards?",
            options: ["26/52", "20/52", "16/52", "18/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red or a diamond card from a deck of 52 cards?",
            options: ["26/52", "12/52", "13/52", "20/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a number that is a multiple of 2 or 3 on a fair six-sided die?",
            options: ["4/6", "5/6", "2/6", "3/6"],
            correct: 0,
        },
        {
            question: "If a bag contains 6 red, 5 green, and 4 blue marbles, what is the probability of drawing a green marble?",
            options: ["5/15", "1/3", "4/15", "6/15"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is either a heart or a 9 from a deck of 52 cards?",
            options: ["14/52", "16/52", "5/52", "6/52"],
            correct: 0,
        },
    ],
  // Round 36
    [
        {
            question: "What is the probability of rolling a sum of 7 or 11 with two fair dice?",
            options: ["8/36", "6/36", "4/36", "3/36"],
            correct: 0,
        },
        {
            question: "In a deck of 52 cards, what is the probability of drawing a spade or a queen?",
            options: ["14/52", "12/52", "8/52", "10/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a number card (2-10) from a deck of 52 cards?",
            options: ["36/52", "28/52", "32/52", "24/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red card or a 6 from a deck of 52 cards?",
            options: ["14/52", "10/52", "16/52", "12/52"],
            correct: 0,
        },
        {
            question: "If you roll two dice, what is the probability of rolling a sum less than 5?",
            options: ["4/36", "3/36", "2/36", "1/36"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "What is the probability of rolling a multiple of 2 or 5 on a fair six-sided die?",
            options: ["4/6", "5/6", "2/6", "1/3"],
            correct: 0,
        },
        {
            question: "In a box with 4 red, 6 blue, and 2 green marbles, what is the probability of drawing a blue marble?",
            options: ["6/12", "3/12", "2/12", "1/2"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing an Ace or a King from a deck of 52 cards?",
            options: ["8/52", "4/52", "12/52", "16/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a face card or a club from a deck of 52 cards?",
            options: ["20/52", "12/52", "16/52", "10/52"],
            correct: 0,
        },
        {
            question: "What is the probability of selecting a marble that is either red or blue from a jar containing 5 red, 3 blue, and 2 green marbles?",
            options: ["8/10", "7/10", "9/10", "6/10"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "What is the probability of drawing a black card or a 10 from a deck of 52 cards?",
            options: ["14/52", "18/52", "12/52", "20/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a sum of 5 or 10 with two fair dice?",
            options: ["8/36", "7/36", "6/36", "5/36"],
            correct: 0,
        },
        {
            question: "If you flip a coin twice, what is the probability of getting exactly one head?",
            options: ["2/4", "3/4", "1/4", "1/2"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red or a black card from a deck of 52 cards?",
            options: ["26/52", "13/52", "28/52", "15/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a marble that is either green or blue from a jar of 3 red, 4 blue, and 5 green marbles?",
            options: ["9/12", "7/12", "5/12", "6/12"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "What is the probability of drawing a queen or a spade from a deck of 52 cards?",
            options: ["8/52", "10/52", "13/52", "14/52"],
            correct: 0,
        },
        {
            question: "If you flip a coin three times, what is the probability of getting at least one tail?",
            options: ["7/8", "1/8", "1/4", "3/8"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red card or an Ace from a deck of 52 cards?",
            options: ["26/52", "13/52", "1/52", "28/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a face card or a heart from a deck of 52 cards?",
            options: ["26/52", "16/52", "14/52", "18/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling a number that is not a 3 on a fair six-sided die?",
            options: ["5/6", "1/6", "4/6", "3/6"],
            correct: 0,
        },
    ],

    // Round 40
    [
        {
            question: "What is the probability of drawing a red or a diamond card from a deck of 52 cards?",
            options: ["26/52", "14/52", "20/52", "16/52"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a card that is either a face card or a heart from a deck of 52 cards?",
            options: ["20/52", "12/52", "10/52", "18/52"],
            correct: 0,
        },
        {
            question: "What is the probability of rolling an odd number or a 2 on a fair six-sided die?",
            options: ["4/6", "5/6", "3/6", "2/6"],
            correct: 0,
        },
        {
            question: "What is the probability of drawing a red or a 10 from a deck of 52 cards?",
            options: ["14/52", "18/52", "12/52", "16/52"],
            correct: 0,
        },
        {
            question: "If you roll two dice, what is the probability of rolling a sum greater than 9?",
            options: ["6/36", "7/36", "4/36", "5/36"],
            correct: 0,
        },
    ],
];



  
// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
