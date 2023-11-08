


function xyz(a) {
    const td1val = document.createElement("td");
    td1val.id = "td1";
    td1val.innerHTML = a.emoji;
    const td2val = document.createElement("td");
    td2val.id = "td2";
    td2val.innerHTML = a.aliases.join(", ");
    const td3val = document.createElement("td");
    td3val.id = "td3";
    td3val.innerHTML = a.description;

    const troww = document.createElement("tr");
    troww.id = "trow";
    troww.append(td1val, td2val, td3val);

    document.getElementById("tab").append(troww);
}


emojiList.forEach(element => {
    xyz(element);
});

document.getElementById("main").addEventListener("keyup", abc);

function abc() {
    document.getElementById("tab").innerHTML = "";

    const filtu = emojiList.filter((emoji) =>
        emoji
            .description
            .toLowerCase()
            .includes(
                document
                .getElementById("main").value.toLowerCase()));

    // console.log(filtu);
    filtu.forEach(element => {
        xyz(element);
    });

}

// //document.getElementById("tab").append()







