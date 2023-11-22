# PowerPulse FrontEnd

Dies React App ist das abschließende Studentenprojekt, das im Rahmen des
gemeinsamen PowerPulse-Anwendungsprojekts erstellt wurde. Die
[Backend-Komponente befindet sich hier](https://github.com/kostarusin/power-pulse-back-end-node-js).
Diese Anwendung ermöglicht es Benutzern, ihr Gewicht, ihr Aktivitätsniveau, ihre
Kalorienaufnahme und mehr zu überwachen.

Dieses Projekt wurde unter Verwendung von [Create Vite](https://vitejs.dev/)
erstellt. Weitere Informationen und Anpassungsoptionen finden Sie in der
[Dokumentation](https://vitejs.dev/guide/).

Grundlegende Technologien und/oder Bibliotheken, die bei der Erstellung der
Anwendung verwendet wurden:

- reduxjs/toolkit
- react-redux
- redux-persist
- react-toastify
- react-datepicker
- react-infinite-scroll-component
- react-responsive
- react-router-dom
- axios
- formik
- yup
- lodash
- nanoid
- mui/material

## Erste Schritte

Diese Anweisungen helfen Ihnen bei der Einrichtung und Ausführung des Projekts
auf Ihrem lokalen Computer.

1. Stellen Sie sicher, dass die LTS-Version von Node.js auf Ihrem Computer
   installiert ist.
   [Laden Sie es herunter und installieren Sie es](https://nodejs.org/en/), wenn
   erforderlich.
2. Installieren Sie die Projektabhängigkeiten, indem Sie den Befehl
   `npm install` ausführen.
3. Starten Sie den Entwicklungsmodus, indem Sie den Befehl `npm run dev`
   ausführen.
4. Öffnen Sie die im Terminal angegebene Adresse in Ihrem Browser.

### Bereitstellung

Die Produktionsversion des Projekts wird automatisch in den `gh-pages`-Zweig
erstellt und bereitgestellt, sobald der `main`-Zweig aktualisiert wird. Zum
Beispiel nach einem direkten Push oder einem gemergten Pull Request. Um dies zu
erreichen, bearbeiten Sie das Feld `base` in der Datei `vite.config.js`,
ersetzen Sie `react_vite` durch Ihren Repositoriumsnamen `"/your_repo_name"` und
pushen Sie die Änderungen auf GitHub.

Gehen Sie dann zu den Einstellungen des GitHub-Repositorys (`Einstellungen` >
`Seiten`) und richten Sie die Bereitstellung der Produktionsversion aus den
Dateien im `/root`-Ordner des `gh-pages`-Zweigs ein, wenn dies nicht automatisch
erfolgt ist.

![GitHub Pages Einstellungen](./src/assets/repo-settings.png)

#### Backend-Bereich

Der Backend-Teil der PowerPulse-Anwendung befindet sich
[hier](https://github.com/kostarusin/power-pulse-back-end-node-js).

API-Dokumentation: https://power-pulse-fx29.onrender.com/api-docs/

##### Autoren:

- Artem Bortianyi - Teamleiter Frontend und Gesamtprojekt
- Nikita Reva - Teamleiter Backend
- Andrii Postelnyk - Entwickler
- Anna Vynnychenko - Entwickler
- Liliia Sviatenko - Entwickler
- Maxim Lahutin - Entwickler
- Olena Butsneva - Entwickler
- Viktoriia Vorobiova - Entwickler
- Vlad Kovalynskyi - Entwickler
- Henadii Bublyk - Entwickler
- Olga Hresko - Entwickler
- Kostiantyn Tarusin - Entwickler
