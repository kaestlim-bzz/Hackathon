// Funktion zum Einfügen der gespeicherten Daten in ein Formular
function insertSavedDataIntoForm(form) {
    // Laden der gespeicherten Daten aus localStorage
    var personalInfoJSON = localStorage.getItem("personalInfo");

    // Überprüfen, ob Daten vorhanden sind
    if (personalInfoJSON) {
        // Die JSON-Daten in ein JavaScript-Objekt umwandeln
        var personalInfo = JSON.parse(personalInfoJSON);

        // Einfügen der geladenen Daten in die entsprechenden Eingabefelder des Formulars
        var formFields = form.querySelectorAll('input');
        formFields.forEach(function(field) {
            if (personalInfo[field.name]) {
                field.value = personalInfo[field.name];
            }
        });

        console.log('Gespeicherte Daten erfolgreich in das Formular eingefügt.');
    } else {
        console.error('Keine gespeicherten Daten gefunden.');
    }
}

// Funktion zum automatischen Ausführen beim vollständigen Laden des DOM
document.addEventListener('DOMContentLoaded', function() {
    // Alle Formulare auf der Seite auswählen
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        // Überprüfen, ob das Formular bereits mit Daten gefüllt ist
        var isFilled = false;
        var formFields = form.querySelectorAll('input');
        formFields.forEach(function(field) {
            if (field.value !== '') {
                isFilled = true;
            }
        });

        // Wenn das Formular leer ist, die gespeicherten Daten einfügen
        if (!isFilled) {
            insertSavedDataIntoForm(form);
        }
    });
});
