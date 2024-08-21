// Funktion zum Speichern der persönlichen Informationen im localStorage
function savePersonalInfo() {
    // Überprüfen, ob der Browser localStorage unterstützt
    if (typeof(Storage) !== "undefined") {
        // Erstellen eines Objekts mit den eingegebenen Daten
        var personalInfo = {};

        // Alle Eingabefelder im Formular durchlaufen und Daten hinzufügen
        var form = document.getElementById("personalInfoForm");
        var formFields = form.querySelectorAll('input');
        formFields.forEach(function(field) {
            personalInfo[field.name] = field.value;
        });

        // Konvertieren des Objekts in JSON
        var personalInfoJSON = JSON.stringify(personalInfo);

        // Speichern der JSON-Daten in localStorage
        localStorage.setItem("personalInfo", personalInfoJSON);

        console.log('Die Daten wurden erfolgreich gespeichert.');
    } else {
        console.error('Ihr Browser unterstützt kein localStorage.');
    }
}

// Das Formular abfangen, um die eingegebenen Daten zu speichern
document.getElementById("personalInfoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Standardformularverhalten verhindern

    // Die Funktion zum Speichern der Daten aufrufen
    savePersonalInfo();

    // Zum nächsten Seitenausgabe.html weiterleiten
    window.location.href = "output.html";
});

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

            // Die Daten in das html-Dokument einfügen
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

// Die Funktion zum Laden der gespeicherten Daten aufrufen, wenn die Seite geladen wird
window.onload = loadPersonalInfo;
