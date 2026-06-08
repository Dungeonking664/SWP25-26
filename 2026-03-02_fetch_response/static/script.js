// 1. .json() als Promise
function fetchJSON() {
    const resultDiv = document.getElementById("json-result");
    resultDiv.innerHTML = '<div class="result">Lädt...</div>';

    // Simuliert einen JSON-Endpoint
    fetch("/api/data.json")
        .then(response => {
            console.log("Response-Objekt:", response);
            return response.json(); // .json() gibt ein Promise zurück
        })
        .then(data => {
            resultDiv.innerHTML = `<div class="result">JSON erfolgreich geladen:\n${JSON.stringify(data, null, 2)}</div>`;
        })
        .catch(error => {
            resultDiv.innerHTML = `<div class="error">Fehler: ${error.message}</div>`;
        });
}

// 2. .text() als Promise
function fetchText() {
    const resultDiv = document.getElementById("text-result");
    resultDiv.innerHTML = '<div class="result">Lädt...</div>';

    fetch("/api/data.txt")
        .then(response => {
            console.log("Response-Status:", response.status);
            return response.text(); // .text() gibt ein Promise zurück
        })
        .then(text => {
            resultDiv.innerHTML = `<div class="result">Text erfolgreich geladen:\n${text}</div>`;
        })
        .catch(error => {
            resultDiv.innerHTML = `<div class="error">Fehler: ${error.message}</div>`;
        });
}

// 3. Response-Objekt Properties inspizieren
function inspectResponse() {
    const resultDiv = document.getElementById("response-result");
    resultDiv.innerHTML = '<div class="result">Inspiziert...</div>';

    fetch("/api/data.json")
        .then(response => {
            // Wichtige Properties des Response-Objekts:
            const responseInfo = {
                status: response.status,
                statusText: response.statusText,
                ok: response.ok,
                url: response.url,
                headers: {
                    "Content-Type": response.headers.get("Content-Type"),
                    "Content-Length": response.headers.get("Content-Length")
                },
                type: response.type,
                redirected: response.redirected
            };

            return response.json().then(data => ({
                responseInfo,
                data
            }));
        })
        .then(({ responseInfo, data }) => {
            let html = '<div class="result">Response-Eigenschaften:\n';
            html += JSON.stringify(responseInfo, null, 2);
            html += '\n\nDaten:\n';
            html += JSON.stringify(data, null, 2);
            html += '</div>';
            resultDiv.innerHTML = html;
        })
        .catch(error => {
            resultDiv.innerHTML = `<div class="error">Fehler: ${error.message}</div>`;
        });
}

// 4. Fehlerbehandlung mit .text()
function fetchWithError() {
    const resultDiv = document.getElementById("error-result");
    resultDiv.innerHTML = '<div class="result">Versucht zu laden...</div>';

    fetch("/api/nonexistent")
        .then(response => {
            // Auch bei Fehlern (404, 500) gibt fetch kein Promise-Fehler!
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(text => {
            resultDiv.innerHTML = `<div class="result">Geladen:\n${text}</div>`;
        })
        .catch(error => {
            resultDiv.innerHTML = `<div class="error">Fehlerbehandlung funktioniert:\n${error.message}\n\nWichtig: fetch() lehnt nur bei Netzwerkfehlern ab, nicht bei HTTP-Fehlern!</div>`;
        });
}

// Demo-Daten initialisieren
document.addEventListener("DOMContentLoaded", () => {
    console.log("HÜ2: Fetch & Response-Objekt - Arbeiten mit .json() und .text() als Promises");
});
