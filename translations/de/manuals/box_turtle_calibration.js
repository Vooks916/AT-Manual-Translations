export default {
    "name": "BoxTurtle Calibration Anleitung",
    "subManuals": {},
    "steps": {
        "box_turtle_calibration_boxturtle_calibration_fidget": {
            "title": "BoxTurtle Calibration Fidget",
            "description": "Dies ist ein Kalibrierungsdruck, um Ihre Slicer-Einstellungen beim Bau des BoxTurtle Automated Filament Changers zu testen und dient gleichzeitig als cooles Fidget-Spielzeug!",
            "parts": []
        },
        "box_turtle_calibration_step2": {
            "title": "",
            "content": `
                <div class="info">
                    <h3>RICHTLINIEN FÜR GEDRUCKTE BAUTEILE</h3>
                    <p>Folgende Druckeinstellungen werden empfohlen, um die Erfolgschancen für Ihre gedruckten Teile zu maximieren.</p>
                </div>

                <div class="print-settings">
                    <div class="print-setting">
                        <h4>3D DRUCK VERFAHREN</h4>
                        <p>Fused Deposition Modeling (FDM)</p>
                    </div>
                    <div class="print-setting">
                        <h4>MATERIAL</h4>
                        <p>Am besten wäre ABS, aber PLA funktioniert auch.</p>
                    </div>
                    <div class="print-setting">
                        <h4>SCHICHTHÖHE</h4>
                        <p>Empfohlen: 0.2mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>INFILL TYP</h4>
                        <p>Empfohlen: Gyroid</p>
                    </div>
                    <div class="print-setting">
                        <h4>INFILL ANTEIL</h4>
                        <p>Empfohlen: 20%</p>
                    </div>
                    <div class="print-setting">
                        <h4>WÄNDE / OBERE UND UNTERE DECKSCHICHTEN</h4>
                        <p>Empfohlen: 4</p>
                    </div>
                </div>
            `,
            "parts": []
        },
        "box_turtle_calibration_step3": {
            "title": "",
            "content": `
                <div class=info>
                    <h3>DATEINAMEN</h3>
                    <p>Mittlerweile sollten Sie die STL-Dateien von <a href="https://www.printables.com/model/1004303-box-turtle-calibration-fidget" target="_blank">Printables</a> heruntergeladen haben. Die Dateien werden nach folgenden Richtlinien benannt.</p>
                </div>
                <div class="naming-conventions">
                    <div class="naming-convention">
                        <h4>PRIMÄRFARBE</h4>
                        <h6>Beispiel: body.stl</h6>
                        <p>Diese Dateien haben nichts Besonderes am Anfang des Dateinamens.</p>
                    </div>
                    <div class="naming-convention">
                        <h4>AKZENTFARBE</h4>
                        <h6>Beispiel: [a]_turtle_box.stl</h6>
                        <p>„[a]“ steht am Anfang jeder STL-Datei, die mit einer Akzentfarbe gedruckt werden soll.</p>
                    </div>
                    <div class="naming-convention">
                        <h4>DURCHSICHTIGE TEILE</h4>
                        <h6>Beispiel: [c]_led_diffuser.stl</h6>
                        <p>Das “[c]” am Anfang einer STL-Datei bedeutet, dass dieses Teil mit transparentem Filament gedruckt werden soll.</p>
                    </div>
                    <div class="naming-convention">
                        <h4>ERFORDERLICHE ANZAHL</h4>
                        <h6>Beispiel: extruder_housing_x4.stl</h6>
                        <p>Wenn eine Datei mit „_x#“ endet, gibt das die Anzahl der benötigten Teile an.</p>
                    </div>
                </div>
                <div class=info>
                    <h3>HILFE</h3>
                    <p>Wenn Sie Unterstützung beim Aufbau benötigen, sind wir für Sie da. Besuchen Sie unseren <a href="https://discord.gg/AaVHfeYgw2" target="_blank">Discord-Server</a> und stellen Sie Ihre Fragen. Dies ist unser Hauptkanal für Hilfe, und unsere großartige Community kann Ihnen weiterhelfen, falls Sie nicht weiterkommen.</p>
                </div>
            `,
            "parts": []
        },
        "box_turtle_calibration_support_removal": {
            "title": "Stützstrukturen entfernen",
            "description": "Achten Sie darauf, dass die vorderen und hinteren Stützen am Gehäuse sowie die Stützen am turtle_box_retainer problemlos entfernt werden können.",
            "parts": [
                "body.stl",
                "turtle_box_retainer.stl"
            ]
        },
        "box_turtle_calibration_test_body_assembly": {
            "title": "Zusammenbau",
            "description": "Testen Sie den Sitz des Magneten, der ECAS-Kupplung und des MR148ZZ-Lagers. Der ECAS sollte eng anliegen. Wenn der Magnet etwas locker ist, verwenden Sie etwas Superkleber.",
            "parts": [
                "1x 6x3mm Magnet",
                "1x ECAS-Kupplung mit entferntem hinteren Gummipuffer",
                "1x MR148ZZ Lager"
            ]
        },
        "box_turtle_calibration_trigger_assembly": {
            "title": "Trigger Montage",
            "description": "Lassen Sie etwa 3,5 mm Abstand zwischen dem Trigger und den Schraubenköpfen.",
            "parts": [
                "trigger.stl",
                "feeder.stl",
                "1x 6x3mm Magnet",
                "1x 50mm 4ODx3ID Bowden Schlauch",
                "2x M3x8mm Zylinderschraube (SHCS)"
            ]
        },
        "box_turtle_calibration_sub_assemblies": {
            "title": "Trigger einsetzen",
            "description": "Setzen Sie den Trigger in die oberen Ausnehmungen des Gehäuses ein.",
            "parts": []
        },
        "box_turtle_calibration_turtle_box_install": {
            "title": "Abdeckung einsetzen",
            "description": "Setzen Sie die beiden oberen Laschen der Abdeckung in das Gehäuse ein und drücken Sie sie dann nach unten, um die Abdeckung einzurasten.",
            "parts": [
                "[a]_turtle_box.stl"
            ]
        },
        "box_turtle_calibration_final": {
            "title": "Finale",
            "description": "Überprüfen Sie, ob der Trigger gleichmäßig bewegt werden kann und beim Loslassen einrastet.",
            "parts": [
                "[a]_turtle_box_retainer.stl"
            ]
        }
    }
}
