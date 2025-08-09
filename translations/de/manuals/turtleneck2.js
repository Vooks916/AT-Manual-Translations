export default {
    name: "TurtleNeck 2.0 Anleitung",
    subManuals: {},
    steps: {
        turtleneck2_step1: {
            sectionName: "Introduction",
            title: "TurtleNeck 2.0",
            description: `
                <p>TurtleNeck 2.0 (TN2) ist ein Werkzeugkopf-Puffer für Klipper-Drucker, der für die Verwendung mit dem <a href="https://github.com/ArmoredTurtle/AFC-Klipper-Add-On" target="_blank">AFC Klipper Add-on</a> entwickelt wurde. Er nutzt ein STM32G0B1 MCU über USB-C zur Steuerung, was ihn zu einer Ein-Kabel-Erweiterung für Ihre Klipper-Maschine macht.</p>
                <p>TN2 verwendet zwei Hall-Effekt-Sensoren, um die Bewegung des Puffers zu erkennen, bevor dieser auf einen Anschlag an den Enden trifft. Auf der Leiterplatte befinden sich außerdem fünf JST-PH-Endstopp-Anschlüsse, die für Filament-Trichter oder „Hubs“ genutzt werden können.</p>
                <p>Der Zweck eines Werkzeugkopf-Puffers wie TN2 ist es, für einen Abgleich der Drehbewegungen zwischen einem Werkzeugkopf-Extruder und einem Direktantriebs-AFC zu sorgen (ein sogenannter „Typ 2 MMU“).</p>
            `,
            parts: []
        },
        turtleneck2_step2: {
            title: "Part Printing Guidelines",
            content: `
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
            parts: []
        },
        turtleneck2_step3: {
            title: "Naming Conventions",
            content: `
                <div class=info>
                    <h3>DATEINAMEN</h3>
                    <p>Mittlerweile sollten Sie die STL-Dateien von <a href="https://github.com/ArmoredTurtle/TurtleNeck2.0" target="_blank">GitHub</a> heruntergeladen haben. Die Dateien werden nach folgenden Richtlinien benannt.</p>
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
            parts: []
        },
        turtleneck2_step4: {
            sectionName: "Assembly",
            title: "Bauteile vorbereiten",
            description: `
                <p>Schmelzen Sie die Gewindeeinsätze ein, wie hier dargestellt.</p>
                <p><strong>Hinweis:</strong> Achten Sie darauf, dass die eingestellte Temperatur für das Druckmaterial geeignet ist. Vorsicht! Heiße Gegenstände sind heiß... heißt es.</p>
                <p><strong>Notiz</strong> Dies ist der letzte Schritt dieses Abschnitts, der die Installation von Heatsets erfordert. Schalten Sie Ihr Bügeleisen unbedingt aus und stellen Sie es an einen sicheren Ort.</p>
            `,
            parts: [
                "[a]_baseplate.stl",
                "4x M3 Gewindeeinsetz"
            ]
        },
        turtleneck2_step5: {
            title: "Bauteile vorbereiten",
            description: "Setzen Sie den Magneten ein und bringen Sie die Filzpad-Sticker auf beiden Seiten des Schlittens/Wagens an, dabei den Clip frei lassen.",
            parts: [
                "carriage.stl",
                "slide.stl",
                "1x 3x2 Magnet (Polarität spielt keine Rolle)",
                "1 mm Filzpad (optional, aber empfohlen)"
            ]
        },
        turtleneck2_step6: {
            title: "Wagen montieren",
            description: `
                <p>Führen Sie den Schlitten durch den Schlitz der Leiterplatte. Clippen Sie den Wagen von oben ein und sichern Sie ihn mit einer M2.5x10 Senkschraube (FHCS).</p>
                <p>Achten Sie darauf, dass der Wagen nach dem Verschrauben reibungslos gleitet.</p>
                <p><strong>Hinweis:</strong> Überprüfen Sie die Ausrichtung des Schlittens, der Magnet sollte sich unterhalb der Hall-Effekt-Sensoren auf der Leiterplatte befinden.</p>
            `,
            parts: [
                "1x M2.5x10 Senkschrauben (FHCS)"
            ]
        },
        turtleneck2_step7: {
            title: "Board Flashing",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>ZWISCHEN-CHECK!</h3>
                    <p>Haben Sie <a href="https://github.com/ArmoredTurtle/TurtleNeck2.0/tree/main/Flashing" target="_blank">die Platine geflasht</a> und die Verbindung zu Ihrem Drucker überprüft? Falls nicht, wäre jetzt der Moment dafür!</p>
                </div>
            `,
            parts: []
        },
        turtleneck2_step8: {
            title: "Gehäuse",
            description: `
                <p>Legen Sie die Leiterplatte mit dem montierten Wagen auf die Grundplatte. Setzen Sie das Gehäuse auf und verschrauben Sie es mit 4 M3x8 Zylinderschrauben (SHCS).</p>
            `,
            parts: [
                "main_body.stl",
                "[a]_baseplate.stl",
                "4x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        turtleneck2_step9: {
            title: "Der schlimmste Teil...",
            description: `
                <p>Setzen Sie die ECAS04-Kupplungen ein.</p>
                <p><strong>Optional:</strong> Setzen Sie einen WS2812 PCB Neopixel in die Halterung am Einlass ein.</p>
                <p><strong>Hinweis:</strong> Diese Teile sollen fest sitzen. Sie können sie flach auf den Tisch legen und die gedruckten Teile darauf pressen.</p>
            `,
            parts: [
                "single_inlet.stl",
                "[a]_tube.stl",
                "2x ECAS04 Bowdenkupplungen mit entferntem hinteren Gummipuffer"
            ]
        },
        turtleneck2_step10: {
            title: "Deckel",
            description: `
                <p>Entfernen Sie die Stützstruktur vom Druckteil.</p>
                <p>Falls der Deckel nicht mehrfarbig gedruckt wurde, können Sie das Logo separat drucken und es wie abgebildet in den Deckel drücken.</p>
                <p>Schrauben Sie 2 M3x10 Senkschrauben (FHCS) in den Deckel.</p>
                <p><strong>Hinweis:</strong> Die Schrauben werden in Kunststoff eingeschraubt. Sie sollten fest sitzen, aber achten Sie darauf, das gedruckte Teil nicht zu beschädigen.</p>
            `,
            parts: [
                "[a]_lid.stl",
                "2x M3x10 Senkschrauben (FHCS)"
            ]
        },
        turtleneck2_step11: {
            title: "Filamentpfad",
            description: `
                <p>Setzen Sie zunächst den Einlass wie abgebildet ein. Danach können Sie das Rohr durch das Gehäuse in den Wagen schieben.</p>
                <p><strong>Hinweis:</strong> Die Nut im Rohr sollte mittig im Wagen liegen.</p>
            `,
            parts: []
        },
        turtleneck2_step12: {
            title: "Clip",
            description: `
                <p>Sichern Sie das Rohr. Es wird zunächst etwas schwergängig sein.</p>
                <p>Falls Sie das optionale Neopixel verwenden, sollten Sie es jetzt anschließen.</p>
            `,
            parts: [
                "clip.stl"
            ]
        },
        turtleneck2_step13: {
            title: "Sanity Check",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>ZWISCHEN-CHECK!</h3>
                    <p>Bevor Sie den Deckel schließen, stecken Sie ein kurzes Stück Bowden-Schlauch in das Rohr. Überprüfen Sie, ob das Filament problemlos durch den gesamten TN2 durchläuft.</p>
                    <p>Nun können Sie den Deckel schließen.</p>
                </div>
            `,
            parts: []
        },
        turtleneck2_step14: {
            title: "Deckel schließen",
            description: `
                <p>Setzen Sie die Schrauben des Deckels in die Löcher, und rasten Sie die Lasche ein.</p>
            `,
            parts: []
        },
        turtleneck2_step15: {
            title: "Bowden-Schlauch-Check",
            description: `
                <p>Sobald der TN2 an Ihrem Drucker montiert ist, führen Sie den Bowden-Schlauch von Ihrem AFC vollständig durch den TN2.</p>
                <p><strong>Hinweis:</strong> Der Schlauch sollte gerade noch so lang sein, das Rohr aus dem Hauptgehäuse nicht herauszudrücken.</p>
            `,
            parts: []
        }
    },
}
