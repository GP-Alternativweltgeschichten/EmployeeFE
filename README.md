# Mitarbeiter-Frontend

## 📌 Beschreibung
Um die Inhalte und Funktionen des Besucher-Frontends flexibel und effizient verwalten zu können, wurde ein eigenständiges Angular-Frontend für Mitarbeiter entwickelt. Dieses ermöglicht es den Mitarbeitern des Stadtmuseums Olpe, die für die Besucher sichtbaren Themenwelten in Form von Szenarien und historischen Karten selbstständig zu erstellen, zu bearbeiten und wenn nötig zu löschen. Dadurch bleibt die Auswahl der Themenwelten nicht statisch, sondern kann kontinuierlich an aktuelle Entwicklungen oder besondere Ausstellungen angepasst werden. Darüber hinaus bietet das Mitarbeiter-Frontend zusätzliche Steuerungsmöglichkeiten zur Auswahl des verwendeten KI-Modells und stellt somit eine interne Schnittstelle dar, um die Besucher-Webseite inhaltlich aktuell zu halten und finanzielle Verluste durch übermäßige Nutzung des kostenpflichtigen KI-Modells Dall-E zu vermeiden. 

## 📖 Inhalt
- [Installation](#%EF%B8%8F-installation)
- [Anwendung ausführen](#-anwendung-ausführen)
- [Projektstruktur](#-projektstruktur)
- [Aufbau](#-aufbau)
- [Feature-Übersicht](#-feature-übersicht)
- [Zukünftige Erweiterungen](#-zukünftige-erweiterungen)

## ⚙️ Installation
1. Stellen Sie sicher, dass Node.js installiert ist. 
   Besuchen Sie Node.js Download-Seite und laden Sie die aktuelle LTS-Version herunter.
2. Repository klonen. 
   Klonen Sie das Repository in Ihr Projektverzeichnis:
   ```sh
   git clone https://github.com/GP-Alternativweltgeschichten/EmployeeFE.git
   cd VisitorFE
   ```
3. Abhängigkeiten installieren. 
   Stellen Sie sicher, dass alle erforderlichen Pakete installiert werden:
   ```sh
   npm install
   ```
4. Angular CLI installieren. 
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
Insgesamt ist die Hauptseite des Mitarbeiter-Frontends so konzipiert, dass sie den Mitarbeitenden eine strukturierte und vereinfachte Verwaltung der Themenwelten sowie eine einfache Steuerung des eingesetzten KI-Modells zur Vermeidung hoher Kosten ermöglicht.

![grafik](https://github.com/user-attachments/assets/74bcccbe-f1f0-4cec-ab78-d15575ec25a0)
In der Szenarien-Übersicht können alle in der Datenbank gespeicherten Szenarien eingesehen, gefiltert, bearbeitet oder gelöscht werden. Über das "+"-Symbol lassen sich neue Szenarien hinzufügen.
![grafik](https://github.com/user-attachments/assets/156b9cfe-bd7d-4096-bc6c-06d88f46470b)
Im Dialog zum Hinzufügen neuer Szenarien können Name, Beschreibung, Sichtbarkeit, Bearbeitbarkeit und ein Bild für das Szenario definiert werden.
![grafik](https://github.com/user-attachments/assets/945d7cc5-4f1e-434c-9549-a355cfd602c9)
Im Bereich "Künstliche Intelligenz" kann das aktuell verwendete KI-Modell (eigenes KI-Modell oder Dall-E von OpenAI) für die Besucher-Anwendung ausgewählt werden.

## 📋 Feature-Übersicht
| **Feature**        | **Beschreibung** |
|--------------------|------------------|
| **Themenwelten-Anzeige**              | Auflistung aller Szenarien und alten Karten (in ihren jeweiligen Tabs) mit Sichtbarkeit, Bearbeitbarkeit, Name, Beschreibung und Vorschaubild. Möglichkeit zur Beschränkung der angezeigten Einträge. |
| **Themenwelten-Verwaltung**           | Bearbeitung aller gelisteten Attribute der Szenarien und alten Karten in Dialogfenstern (in den jeweiligen Tabs). Löschung der aufgelisteten Szenarien und alten Karten. |
| **Themenwelten-Erstellung**           | Hinzufügen neuer Szenarien oder alter Karten (in ihren jeweiligen Tabs) in Dialogfenstern mit allen gelisteten Attributen (Sichtbarkeit, Bearbeitbarkeit, Name, Beschreibung und Karte). |
| **KI-Modell Auswahl**                 | Auswahl zwischen zwei KI-Modellen (OlpeAI oder DALL-E) zur Bildgenerierung in der Besucher-Ansicht. Speicherung der Auswahl im Backend. |
| **Filter- und Suchfunktion**          | Alphabetische Sortierung nach Name oder Beschreibung der Themenwelten. Suche nach enthaltenen Buchstaben in Name oder Beschreibung der Themenwelten zum schnellen Auffinden bestimmter Einträge.  |
| **Mehrsprachigkeit (Teilweise)**      | Möglichkeit, die UI zwischen Deutsch und Englisch umzustellen (Datenbankeinträge werden noch nicht übersetzt). |

## 📈 Zukünftige Erweiterungen
- **Vollständige Mehrsprachigkeit**: Erweiterung der Anwendung um eine vollständige Mehrsprachigkeit, einschließlich der dynamischen Inhalte wie Datenbankeinträge (z.B. Name und Beschreibung von Szenarien und alten Karten), mithilfe von externen Übersetzungs-APIs.
- **Bildvorschau bei Erstellung und Bearbeitung**: Möglichkeit, das beim Erstellen oder Bearbeiten eines Szenarios oder einer alten Karte hochgeladene Bild direkt als Vorschaubild anzuzeigen, um die Auswahl zu überprüfen.
- **Drag & Drop für Bilder**: Upload-Funktion durch Drag & Drop von Bilddateien direkt in den Dialog zur Erstellung oder Bearbeitung von Themenwelten.
- **Zugriffsbeschränkung und Rollenverwaltung**: Einführung eines Rollensystems, um den Zugriff auf bestimmte Funktionen zu steuern (z.B. Administratoren vs. Redakteure). Damit kann die Bearbeitung oder Sichtbarkeit von Inhalten abhängig von Nutzerrollen beschränkt werden.
- **Versionierung von Themenwelten**: Implementierung einer Versionsverwaltung, die es ermöglicht, ältere Versionen von Szenarien und alten Karten wiederherzustellen oder Änderungen nachzuverfolgen (inkl. Änderungsverlauf).

---

Happy Coding! 🚀

