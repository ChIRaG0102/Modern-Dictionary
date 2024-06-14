// Ganpati Bappa Morya
var btn = document.querySelector("#btn");
var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
var cardLower = document.querySelector(".lower")

btn.addEventListener("click", function () {
    fetchu();
});

async function fetchu() {
    try {
        var inputValue = document.querySelector("#inputVal").value;
        if (inputValue == "") {
            alert("Enter the Word First.")
        }
        else {

            var clutter = "";
            var response = await fetch(`${url}${inputValue}`);
            var data = await response.json();
            // console.log(data[0].meanings[0]);
            document.querySelector("#inputVal").value = "";

            clutter += ` <div class="word">
                            <h1>${data[0].word}</h1>
                        </div>
                        <div class="noun">
                            <h2>${data[0].meanings[0].partOfSpeech}</h2>
                            <h4>${data[0].phonetic || ""}</h4>
                        </div>
                        <div class="synomy">
                            <h3>${data[0].meanings[0].synonyms[0] || ""}</h3>
                            <h3>,</h3>
                            <h3>${data[0].meanings[0].synonyms[1] || ""}</h3>
                            <h3>,</h3>
                            <h3>${data[0].meanings[0].synonyms[2] || ""}</h3>
                        </div>
                        <div class="defi">
                            <div class="bar">
                            </div>
                            <p>${data[0].meanings[0].definitions[0].definition}</p>
                        </div>`;

            if (!response.ok) {
                console.log("Not Found");
            }
            else {
                cardLower.innerHTML = clutter;
            }

        }

    } catch (error) {
        console.log(error);
        // cardLower.style.opacity = 0;
    }
}


