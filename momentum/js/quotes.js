const quotes = [
    {
        quote : "The way to get started is to quit talking and begin.",
        author : "Walt Disney",
    },
    {
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lennon",
    },
    {
        quote : "The world is a book and those who do not travel read only one page ",
        author : "Saint Augustine",
    },
    {
        quote : "In the end, it’s not the years in your life that count. It’s the life in your years.",
        author : "Abraham Lincoln",
    },
    {
        quote : "Keep your eyes on the stars and your feet on the ground.",
        author : "Theodore Roosevelt",
    },
    {
        quote : "Despite the forecast, live like it’s spring.",
        author : "Lilly Pulitzer",
    },
    {
        quote : "Love asks me no questions, and gives me endless support.",
        author : "William Shakespeare",
    },
    {
        quote : "If you would be loved, love and be lovable.",
        author : "Benjamin Franklin",
    },
    {
        quote : "The supreme happiness in life is the conviction that we are loved.",
        author : "Victor Hugo",
    },
    {
        quote : "Life is either a daring adventure or nothing at all.",
        author : "Helen Keller",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;