function reset() {
    document.querySelector("textarea").value = "";
}
function palindromecheck() {
    const value = document.querySelector("textarea").value;
    const cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const reversed = cleaned.split('').reverse().join('');
    const div = document.createElement("div");
    if (cleaned === reversed) {
        div.innerHTML = "It's a palindrome";
        div.className = "palindrome";
    } else {
        div.innerHTML = "Not a palindrome";
        div.className = "notpalindrome";

    }

    document.querySelector(".output").appendChild(div);
    setTimeout(() => {
        div.remove();
    }, 1000)

}