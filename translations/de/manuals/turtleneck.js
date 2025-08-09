export default {
    name: "TurtleNeck Manual",
    subManuals: {},
    steps: {
        turtleneck_step1: {
            sectionName: "Introduction",
            title: "TurtleNeck",
            description: `
                <p>TurtleNeck is a simple toolhead buffer used for syncing two extruder motors together. It features an endstop at each end of travel (advance and trailing). These sensors are triggered 2.5mm before hard stopping the buffer with 25mm of travel in between.</p>
            `,
            parts: []
        },
        turtleneck_step2: {
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
        turtleneck_step3: {
            title: "Naming Conventions",
            content: `
                <div class=info>
                    <h3>DATEINAMEN</h3>
                    <p>Mittlerweile sollten Sie die STL-Dateien von <a href="https://github.com/ArmoredTurtle/TurtleNeck" target="_blank">GitHub</a> heruntergeladen haben. Die Dateien werden nach folgenden Richtlinien benannt.</p>
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
        turtleneck_step4: {
            sectionName: "Assembly",
            title: "Heatset Inserts",
            description: `
                <p>Install four heatset inserts as shown.</p>
                <p><strong>Hinweis:</strong> Be sure to choose a temperature appropriate for your selected printed parts material, be careful! Hot things are hot...</p>
                <p><strong>Notiz</strong> Dies ist der letzte Schritt dieses Abschnitts, der die Installation von Heatsets erfordert. Schalten Sie Ihr Bügeleisen unbedingt aus und stellen Sie es an einen sicheren Ort.</p>
            `,
            parts: [
                "lid.stl",
                "4x M3 heatset inserts"
            ]
        },
        turtleneck_step5: {
            title: "ECAS Fittings",
            description: `
                <p>Insert the ECAS04 fittings as shown</p>
                <p><strong>Hinweis:</strong> These are meant to be tight, you can lay them flat on the table and press the printed parts onto them.</p>
            `,
            parts: [
                "[a]_slide.stl",
                "frame.stl",
                "2x ECAS04 bowden couplers mit entferntem hinteren Gummipuffer"
            ]
        },
        turtleneck_step6: {
            title: "Microswitches",
            description: `
                <p>Minding orientation of the levers on the microswitches, install with four M2x10 self tapping screws as shown. Be mindful these are threaded directly into plastic.</p>
                <p>Confused which switch is which? Here is a <a href="/docs/afc-klipper-add-on/installation/buffer-overview.html" target="_blank">document</a> to help you understand the buffer and it’s functions</p>
                <div class='tn-switches-key'>
                    <strong>KEY:</strong>
                    <p class='advance'>Advance</p>
                    <p class='trailing'>Trailing</p>
                </div>
            `,
            parts: [
                "4x M2x10 self tapping screws",
                "2x D2F microswitches"
            ]
        },
        turtleneck_step7: {
            title: "Slide",
            description: `
                <p>Place the slide into the lid as shown.</p>
            `,
            parts: []
        },
        turtleneck_step8: {
            title: "Sandwich",
            description: `
                <p>Install the frame to the lid with the slide correctly positioned with four M3x8 SHCS screws.</p>
                <p>Make sure the slide moves freely after everything is secured.</p>
            `,
            parts: [
                "4x M3x8 SHCS"
            ]
        },
        turtleneck_step9: {
            title: "Bowden Tube",
            description: `
                <p>Insert the bowden tube from your AFC all the way through your TN as shown.</p>
                <p><strong>Hinweis:</strong> it should stop just short of pushing the "Slide" outwards from the main body.</p>
            `,
            parts: []
        }
    },
}
