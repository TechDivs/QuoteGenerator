document.addEventListener("DOMContentLoaded", function() {
    const quote = document.getElementById("quote_para");
    const author = document.getElementById("author_name");
    const next = document.getElementsByClassName("btn-grad")[0];

    async function change_quote() {
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const url = `https://zenquotes.io/api/random`;

        const response = await fetch(proxy+url);
        const data = await response.json();

        const nxt_q = data[0].q;
        const nxt_a = data[0].a;

        quote.textContent = nxt_q;
        author.textContent = nxt_a; 
    }
    
    next.addEventListener('click', change_quote);
});