// Funktion zum Laden der gespeicherten persönlichen Informationen aus localStorage
function loadPersonalInfo() {
    // Überprüfen, ob der Browser localStorage unterstützt
    if (typeof(Storage) !== "undefined") {
        // Die gespeicherten Daten aus localStorage abrufen
        var personalInfoJSON = localStorage.getItem("personalInfo");

        // Überprüfen, ob Daten vorhanden sind
        if (personalInfoJSON) {
            // Die JSON-Daten in ein JavaScript-Objekt umwandeln
            var personalInfo = JSON.parse(personalInfoJSON);

            // Die Daten in das Ausgabediv einfügen
            var outputDiv = document.getElementById("output");
            outputDiv.innerHTML = ""; // Leeren Sie das Ausgabe-Div zuerst
            for (var key in personalInfo) {
                outputDiv.innerHTML += "<p>" + key + ": " + personalInfo[key] + "</p>";
            }
        } else {
            console.error('Keine gespeicherten Daten gefunden.');
        }
    } else {
        console.error('Ihr Browser unterstützt kein localStorage.');
    }
}

// Die Funktion zum Laden der gespeicherten Daten aufrufen, wenn die DOM-Inhalte geladen sind
document.addEventListener("DOMContentLoaded", function() {
    loadPersonalInfo();
});
