# Protokoll-Spezifikation

In diesem Dokument wird die Kommunikation zwischen der Web-Applikation und dem Node-Red Backend dokumentiert. Es werden die verschickten Nachrichtentypen und deren Datenstrukturen definiert und erläutert.

## Generelles

Zwischen der Web-App und dem Node-Red-Server besteht eine Websocket-Verbindung, die für den gesamten Datenaustausch zuständig ist. Alle werden im JSON-Format codiert um ein einfaches Verarbeiten der Daten möglich zu machen.

## Ein-Weg-Nachrichten

Ein-Weg-Nachrichten erwarten keine Antwort/Bestätigung.

### Web-App &rarr; Backend

#### Control

Die Control-Nachricht wird versendet, wenn der IOT-Bot über die Web-Oberfläche manuell gesteuert wird. Die Nachricht enthält Informationen darüber, welche Aktion ausgeführt werden soll.

Damit im Fehlerfall/beim Verbindungsabbruch der Roboter nicht einfach weiterfährt, muss für eine andauernde Aktion, die entsprechende Nachricht in festgelegten Zeitabständen regelmäßig versendet werden.

Die Aktion "" steht für keine Aktion.

##### Beispiel-Nachricht:

```
{
  "msg": "control",
  "action": "forward-left",
  "throttle": 0.72
}
```

| Datenfeld | Erklärung             | Mögliche Werte |
|-----------|-----------------------|----------------|
| "action"  | Name der Aktion die ausgeführt werden soll | "forward-left", "forward", "forward-right", "left", "right", "back-left", "back", "back-right", "turn-left", "turn-right", "" |
| "throttle"| Aktuell festgelegte Geschwindigkeit für die auszuführende Aktion |

### Backend &rarr; Web-App

#### Status

Mit der Status-Nachricht versendet das Backend regelmäßig aktualisierte Daten über den Status des IOT-Bots zur Web-App, welches diese Daten, für den Nutzer in Diagrammen aufgearbeitet, anzeigt.

##### Beispiel-Nachricht

```
{
  "msg": "status",
  "data": {...}
}
```

Für das Format der Status-Daten [siehe Spezifikation](#status-daten-spezifikation).

## Zwei-Weg-Nachrichten

Zwei-Weg-Nachrichten veranlassen immer eine Reaktion. Dies kann eine speziell festgelegte Antwort-Nachricht oder auch das Veranlassen einer Einweg-Nachricht als Antwort sein.

### Web-App &rarr; Backend

#### Get-Status

Mit der Get-Status-Nachricht fordert die Web-App das Backend dazu auf, die vollständigen Status-Daten zu versenden. Dies wird benötigt, wenn die Verbindung erst neu aufgebaut wurde, und die Web-App einmalig den aktuellen Zustand laden muss.

##### Anfrage

```
{
  "msg": "get-status"
}
```

##### Antwort
Eine [Status-Nachricht](#status), die sämtliche Status-Daten enthält.

# Status-Daten Spezifikation

```
{
  "power": {
    "battery": {
      "voltage": 19.4,  # Batteriespannung in Volt
      "current": 1.2    # Batteriestrom in Ampere
    },
    "charging": {
      "status": "disconnected", # Aktueller Ladezustand ("disconnected", "charging" oder "charged")
      "voltage": 21.1,          # Ladespannung in Volt
      "current": 2.0            # Ladestrom in Ampere
    },
    "rails": {
      "5v": {
        "active": true,   # Ob 5V-Schiene aktiviert ist
        "voltage": 5.06   # Spannung auf der 5V-Schiene
      },
      "24v": {
        "active": true,   # Ob 24V-Schiene aktiviert ist
        "voltage": 23.78  # Spannung auf der 24V-Schiene
      },
      "adj": {
        "active": true,   # Ob die Wahl-Schiene aktiviert ist
        "voltage": 3.29   # Spannung auf der Wahl-Schiene
      }
    }
  },
  "temperature": {
    "interior": 42.6,   # Temperatur innerhalb des Gehäuses
    "exterior": 23.4    # Außentemperatur
  }
}
```
