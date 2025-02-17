# Angular Application

## 📌 Projektbeschreibung
Dies ist eine Angular-Anwendung, die den Mitarbeitern des Museums die Möglichkeit bietet, die thematischen Welten auf der Besucher-Webseite zu verwalten. Sie bietet Funktionen wie das Hinzufügen, Bearbeiten und Löschen von Szenarien und alten Karten.

## 📖 Inhalt
- [Installation](#installation)
- [Anwendung ausführen](#anwendung-ausfüehren)
- [Projektstruktur](#projektstruktur)

## ⚙️ Installation
1. Stellen Sie sicher, dass Node.js installiert ist
   Besuchen Sie Node.js Download-Seite und laden Sie die aktuelle LTS-Version herunter.
2. Repository klonen
   Klonen Sie das Repository in Ihr Projektverzeichnis:
   ```sh
   git clone https://github.com/GP-Alternativweltgeschichten/EmployeeFE.git
   cd VisitorFE
   ```
3. Abhängigkeiten installieren
   Stellen Sie sicher, dass alle erforderlichen Pakete installiert werden:
   ```sh
   npm install
   ```
4. Angular CLI installieren
   Vergewissern Sie sich, dass Angular CLI auf Ihrem System installiert ist:
   ```sh
   npm install -g @angular/cli
   ```

## 🚀 Anwendung ausführen
Starten Sie den Entwicklungsserver:
```sh
ng serve
```
Die Anwendung wird standardmäßig unter http://localhost:4201/ ausgeführt.

## 📂 Projektstruktur
```
src/
  app/                  # Hauptverzeichnis der Angular-Anwendungsdateien. Enthält verschiedene Module für verschiedene Funktionen
    error/              # Bearbeitet Fehler, die durch ungültige URLs oder fehlerhafte Anfragen entstehen.
    home/               # Startseite der Anwendung.
    nav-bar/            # Navigationsleiste, um zwischen den Seiten der Anwendung zu wechseln.
    old-map-dialog/     # Dialogkomponente zum Hinzufügen und Bearbeiten von alten Karten.
    old-maps/           # Übersichtsseite, die alte Karten anzeigt.
    scenario-dialog/    # Dialogkomponente zum Hinzufügen und Bearbeiten von Szenarien.
    scenarios/          # Übersichtsseite, die Szenarien anzeigt.
    services/           # Beinhaltet die Dienste, die in der Anwendung verwendet werden (z. B. API-Aufrufe oder Authentifizierung).
    top-bar/            # Der obere Bereich der Anwendung, der allgemeine Informationen bietet (z. B. Anwendungsname, Benutzermenu).
  assets/               # Enthält statische Assets wie Bilder, Schriftarten und andere Ressourcen.
angular.json            # Die Konfigurationsdatei für das Angular-Projekt.
package.json            # Listet die Abhängigkeiten und Skripte, die im Projekt verwendet werden.
README.md               # Dokumentation und Hinweise für das Projekt.
```

## ...

---

Happy Coding! 🚀

