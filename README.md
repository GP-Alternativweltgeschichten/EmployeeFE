# Mitarbeiter-Frontend

## 📌 Beschreibung
Dies ist eine Angular-Anwendung, die den Mitarbeitern des Museums die Möglichkeit bietet, die thematischen Welten auf der Besucher-Webseite zu verwalten. Sie bietet Funktionen wie das Hinzufügen, Bearbeiten und Löschen von Szenarien und alten Karten. Zudem kann das in der Besucheransicht verfügbare KI-Modell durch die Mitarbeiter angepasst werden.

## 📖 Inhalt
- [Installation](#%EF%B8%8F-installation)
- [Anwendung ausführen](#-anwendung-ausführen)
- [Projektstruktur](#-projektstruktur)
- [Aufbau](#-aufbau)
- [Feature-Übersicht](#-feature-übersicht)
- [Zukünftige Erweiterungen](#-zukünftige-erweiterungen)

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

## 🧩 Aufbau
**Startseite**: Analog zum Besucher-Frontend verfügt auch das Mitarbeiter-Frontend über eine Startseite, die als Einstiegspunkt für die Mitarbeitenden des Museums dient. Sie präsentiert das Logo der Stadt Olpe und bietet eine Sprachwahl zwischen Deutsch und Englisch. Ergänzt wird die Seite durch einen kurzen Einführungstext, der den Zweck der Anwendung sowie die wichtigsten Funktionen erläutert. Über einen Button gelangen die Mitarbeitenden zur Hauptseite der Anwendung.

**Hauptseite**: Die Hauptseite bildet die zentrale Interaktionsseite des Mitarbeiter-Frontends. Hier können die Themenwelten von Olpe, die in Szenarien (bearbeitete, alternative Karten von Olpe basierend auf bestimmten Gedankenspielen) und alte Karten (historische, unbearbeitete Karten von Olpe) unterteilt sind, verwaltet werden. Für beide Kategorien existieren separate Tabs, die eine übersichtliche Darstellung aller in der Datenbank hinterlegten Elemente bieten. Neben einer Auflistung der wichtigsten Attribute – darunter Sichtbarkeit, Bearbeitbarkeit, Name, Beschreibung und ein Vorschaubild – ermöglichen diese Tabs folgende Verwaltungsfunktionen: Das Filtern nach Namen und Beschreibungen, das Bearbeiten und Löschen vorhandener Einträge sowie das Hinzufügen neuer Szenarien und Karten. Ein zusätzlicher Tab "Künstliche Intelligenz" erlaubt die Auswahl des KI-Modells, das auf der Besucher-Webseite für die Bildgenerierung eingesetzt wird.
Insgesamt ist die Hauptseite des Mitarbeiter-Frontends so konzipiert, dass sie den Mitarbeitenden eine strukturierte und vereinfachte Verwaltung der Themenwelten sowie eine einfache Steuerung des eingesetzten KI-Modells zur Vermeidung zusätzlicher Kosten ermöglicht.

![grafik](https://github.com/user-attachments/assets/74bcccbe-f1f0-4cec-ab78-d15575ec25a0)
In der Szenarien-Übersicht können alle in der Datenbank gespeicherten Szenarien eingesehen, gefiltert, bearbeitet oder gelöscht werden. Über das "+"-Symbol lassen sich neue Szenarien hinzufügen.
![grafik](https://github.com/user-attachments/assets/992214bf-3915-4cd6-892b-c6e0d8d62ae3)
Im Dialog zum Hinzufügen neuer Szenarien können Name, Beschreibung, Sichtbarkeit, Bearbeitbarkeit und ein Bild für das Szenario definiert werden.
![grafik](https://github.com/user-attachments/assets/945d7cc5-4f1e-434c-9549-a355cfd602c9)
Im Bereich "Künstliche Intelligenz" kann das aktuell verwendete KI-Modell (eigenes KI-Modell oder Dall-E von OpenAI) für die Besucher-Anwendung ausgewählt werden.

## 📋 Feature-Übersicht

## 📈 Zukünftige Erweiterungen

---

Happy Coding! 🚀

