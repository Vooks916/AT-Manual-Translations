export default {
    name: "FilamATrix Manual",
    subManuals: {},
    steps: {
        filamatrix_step1: {
            title: "Introduction",
            content: `
                <div class="infoL">
                    <h3>EINLEITUNG</h3>
                    <p class='extra-space'>Dieses Handbuch beinhaltet zusätzliche Informationen und spezifischen Kontext zur FilamATrix-Modifikation für den Stealthburner. Es dient als ergänzende Ressource zum offiziellen <a href="https://github.com/VoronDesign/Voron-Stealthburner/blob/main/Manual/Assembly_Manual_SB.pdf" target="_blank">Voron-Stealthburner-Handbuch</a> und ist zur gemeinsamen Verwendung mit diesem vorgesehen. Während die allgemeine Montageanleitung des offiziellen Handbuchs beibehalten wird, hebt dieser Leitfaden die wesentlichen Unterschiede und besonderen Überlegungen hervor, die bei der Integration der FilamATrix-Modifikation in Ihren Aufbau zu beachten sind.</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step2: {
            title: "Part Printing Guidelines",
            content: `
                <div class="info">
                    <h3>RICHTLINIEN FÜR GEDRUCKTE BAUTEILE</h3>
                    <p>Folgende Druckeinstellungen werden empfohlen, um die Erfolgschancen für Ihre gedruckten Teile zu maximieren.</p>
                </div>
    
                <div class="voron-print-settings">
                    <div class="print-setting">
                        <h4>3D-DRUCKVERFAHREN</h4>
                        <p>Fused Deposition Modeling (FDM)</p>
                    </div>
                    <div class="print-setting">
                        <h4>INFILL-TYP</h4>
                        <p>Grid, Gyroid, Bienenwabe, Dreiecke oder Würfel</p>
                    </div>
                    <div class="print-setting">
                        <h4>MATERIAL</h4>
                        <p>ABS</p>
                    </div>
                    <div class="print-setting">
                        <h4>INFILL ANTEIL</h4>
                        <p>Empfohlen: 40 %</p>
                    </div>
                    <div class="print-setting">
                        <h4>SCHICHTHÖHE</h4>
                        <p>Empfohlen: 0,2 mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>ANZAHL DER WÄNDE</h4>
                        <p>Empfohlen: 4</p>
                    </div>
                    <div class="print-setting">
                        <h4>EXTRUSIONSBREITE</h4>
                        <p>Empfohlen: Fixiert auf 0,4 mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>OBERE UND UNTERE DECKSCHICHTEN</h4>
                        <p>Empfohlen: 5</p>
                    </div>
                </div>
            `,
            parts: []
        },
        filamatrix_step3: {
            title: "Naming Conventions",
            content: `
                <div class=info>
                    <h3>DATEINAMEN</h3>
                    <p>Mittlerweile sollten Sie die STL-Dateien von <a href="https://github.com/thunderkeys/FilamATrix" target="_blank">GitHub</a>heruntergeladen haben. Die Dateien werden nach folgenden Richtlinien benannt.</p>
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
        filamatrix_step4: {
            title: "Gewindeeinsätze",
            description: `
                <p>Schmelzen Sie die fünf Gewindeeinsätze ein, wie hier dargestellt.</p>
                <p><strong>Hinweis:</strong> Achten Sie darauf, dass die eingestellte Temperatur für das Druckmaterial geeignet ist. Vorsicht! Heiße Gegenstände sind heiß... heißt es.</p>
            `,
            parts: [
                "main_body_clockwork2_single_switch.stl",
                "5x M3 Gewindeeinsätze"
            ]
        },
        filamatrix_step5: {
            title: "Gewindeeinsätze",
            description: `
                <p>Schmelzen Sie die sieben Gewindeeinsätze ein, wie hier dargestellt. Die beiden Gewindeeinsätze, die durch gelbe Pfeile markiert sind, müssen unterhalb der Oberfläche des gedruckten Teils eingesetzt werden.</p>
                <p><strong>Hinweis:</strong> Achten Sie darauf, dass die eingestellte Temperatur für das Druckmaterial geeignet ist. Vorsicht! Heiße Gegenstände sind heiß... heißt es.</p>
            `,
            parts: [
                "motor_plate.stl",
                "7x M3 Gewindeeinsätze"
            ]
        },
        filamatrix_step6: {
            title: "Gewindeeinsätze",
            description: `
                <p>Schmelzen Sie zwei Gewindeeinsätze ein, wie dargestellt. Die nächsten Gewindeeinsätze werden in einem späteren Abschnitt eingesetzt. Schalten Sie den Lötkolben aus, und legen Sie ihn an einen sicheren Ort.</p>
                <p><strong>Hinweis:</strong> Achten Sie darauf, dass die eingestellte Temperatur für das Druckmaterial geeignet ist. Vorsicht! Heiße Gegenstände sind heiß... heißt es.</p>
            `,
            parts: [
                "[a]_guidler_a.stl",
                "[a]_latch_shuttle.stl",
                "2x M3 Gewindeeinsätze"
            ]
        },
        filamatrix_step7: {
            title: "Guidler 1",
            description: `
                <p>Setzen Sie die Druckteile guidler_a und guidler_b zusammen, und verschrauben Sie die Teile mit einer M3x16 Zylinderschraube, wie dargestellt.</p>
            `,
            parts: [
                "[a]_guidler_b.stl",
                "1x M3x16 Zylinderschraube (SHCS)"
            ]
        },
        filamatrix_step8: {
            title: "Guidler 2",
            description: `
                <p>Setzen Sie die BMG Idler-Baugruppe ein. Die Nadellager sollten zuvor geschmiert werden.</p>
            `,
            parts: [
                "BMG Idler-Baugruppe"
            ]
        },
        filamatrix_step9: {
            title: "Guidler 3",
            description: `
                <p>Befestigen Sie den Latch Shuttle am Guidler mit einer BMG Tension-Baugruppe (Spannschraube), wie dargestellt.</p>
            `,
            parts: [
                "BMG Tension-Baugruppe"
            ]
        },
        filamatrix_step10: {
            title: "Microswitch Note",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>STOPP!</h3>
                    <p>Im nächsten Schritt wird ein Mikroschalter in das Extrudergehäuse eingebaut. Die Kabel sind nicht verlötet, da Länge und Stecker von meheren Faktoren abhängen.</p>
                    <p>If your switches have levers, remove them prior to installation. Jetzt ist der richtige Zeitpunkt, die Kabel an die beiden äußeren Pins des Schalters zu löten und diese mit Schrumpfschlauch zu isolieren.</p>
                    <p><strong>Hinweis:</strong> Falls Sie ein Toolhead-Board verwenden, müssen Sie möglicherweise die Anschlüsse des Schalters verbiegen, um mögliche Störungen zu vermeiden.</p>
                    <p>Wenn Sie noch nie gelötet haben, finden Sie hier ein ausgezeichnetes <a href="https://www.youtube.com/watch?v=rK38rpUy568" target="_blank">Video-Tutorial</a>, das Ihnen den Einstieg erleichtert. (Es ist wirklich nicht schwer 😊)</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step11: {
            title: "Sensor",
            description: `
                <p>Setzen Sie eine 5,5mm-Kugel und einen D2F Mikroschalter in die vorgesehene Öffnung ein. Befestigen Sie den Schalter mit zwei selbstschneidenden M2x10 Schrauben. Achten Sie darauf, die Gewinde nicht zu beschädigen, da diese direkt in den Kunststoff geschnitten sind.</p>
                <p>Nach dem Zusammenbau des Sensors sollten Sie dessen Funktion überprüfen. Führen Sie dazu ein Stück Filament durch den Extruder und achten Sie auf ein hörbares Klicken, wenn der Sensor ausgelöst wird.</p>
            `,
            parts: [
                "D2F microswitch",
                "5,5-mm-Kugellagerkugel",
                "2x M2x10 selbstschneidende Schrauben"
            ]
        },
        filamatrix_step12: {
            title: "Lager",
            description: `
                <p>Setzen Sie die beiden MR85 Lager ein und schrauben Sie die Anti-Quetsch-Schraube (M3x6 Senkschraube) ein.</p>
            `,
            parts: [
                "1x M3x6 Senkschraube (FHCS)",
                "2x MR85 Lager"
            ]
        },
        filamatrix_step13: {
            title: "Antriebsrad",
            description: `
                <p>Schieben Sie das Antriebsrad auf die Welle des 50-Zahn-Stirnrads (50t Spur Gear), wie dargestellt, und achten Sie dabei auf die Ausrichtung.</p>
            `,
            parts: [
                "50t Spur Gear (50-Zahn-Stirnrad)",
                "BMG Drive Gear (BMG-Antriebsrad)"
            ]
        },
        filamatrix_step14: {
            title: "Sandwich",
            description: `
                <p>Setzen Sie die beiden Teile des Extruders zusammen, mit der Antriebsrad-Baugruppe dazwischen.</p>
            `,
            parts: []
        },
        filamatrix_step15: {
            title: "Schrauben",
            description: `
                <p>Schrauben Sie das Extrudergehäuse mit zwei M3x25 Zylinderschrauben zusammen. Ziehen Sie die Schrauben nicht zu fest an, es sei denn, Sie möchten die Teile neu drucken.</p>
            `,
            parts: [
                "2x M3x25 Zylinderschrauben (SHCS)"
            ]
        },
        filamatrix_step16: {
            title: "Ausrichtung des Antriebsrads",
            description: `
                <p>Überprüfen Sie die Ausrichtung des Extruderzahnrads mit einem Stück Filament, und fixieren sie das Extruderzahnrad mit einer Madenschraube. Vergessen Sie nicht, Loctite aufzutragen, falls es noch nicht aufgetragen ist.</p>
            `,
            parts: []
        },
        filamatrix_step17: {
            title: "ECAS",
            description: `
                <p>Setzen sie die ECAS 04 Kupplung oben in den Extruder ein.</p>
            `,
            parts: [
                "ECAS04 Kupplung (hinterer Gummi-Ring entfernt)"
            ]
        },
        filamatrix_step18: {
            title: "Guidler-Einbau",
            description: `
                <p>Setzen Sie die Guidler-Baugruppe in den Extruder ein. Befestigen Sie sie mit einer M3x25 Zylinderschraube.</p>
                <p><strong>Hinweis:</strong> Ziehen Sie die Schraube nicht zu fest an. Der Guidler sollte frei beweglich bleiben.</p>
            `,
            parts: [
                "1x M3x25 Zylinderschraube (SHCS)"
            ]
        },
        filamatrix_step19: {
            title: "Verriegelung",
            description: `
                <p>Montieren Sie die Verriegelung (Latch) und schrauben Sie sie mit einer M3x25 Zylinderschraube fest. Sie sollte ebenso frei beweglich sein wie der Guidler. Die Schnitt-Darstellung zeigt, wie Guidler und Latch ineinander greifen.</p>
                <p><strong>Hinweis:</strong> Jetzt sollte die Vorspannung des Extruders eingestellt werden. Hier ist ein ausgezeichnetes <a href="https://www.youtube.com/watch?v=L1gxBCiE0pk" target="_blank">Video</a> von Dr. Dave, das zeigt wie dies gemacht wird.</p>
            `,
            parts: [
                "[a]_latch_ecas",
                "1x M3x25 Zylinderschraube (SHCS)"
            ]
        },
        filamatrix_step20: {
            title: "Motor",
            description: `
                <p>Befestigen Sie den Schrittmotor lose am Extrudergehäuse mit einer M3x30 Zylinderschraube. Verwenden Sie eine M3x8 Zylinderschraube mit einer M3-Unterlegscheibe, um das Spiel zwischen Ritzel und 50t-Zahnrad einzustellen, bevor Sie beide Schrauben vollständig anziehen.</p>
                <p><strong>Hinweis:</strong> Ein korrektes Spiel zwischen dem Schrittmotor und dem 50-Zahn-Stirnrad ist für den zuverlässigen Betrieb unerlässlich. Hier ist ein ausgezeichnetes <a href="https://www.youtube.com/watch?v=ly22qmB3NxE" target="_blank">Video</a> von Dr. Dave, das zeigt wie dies eingestellt wird.</p>
            `,
            parts: [
                "1x M3x30 Zylinderschraube (SHCS)",
                "1x M3x8 Zylinderschraube (SHCS)",
                "1x M3 Unterlegscheibe"
            ]
        },
        filamatrix_step21: {
            title: "Skittles Break",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/SkittlesTurtle.png" alt="Skittles Turtle">
                    <h3>PAUSE!</h3>
                    <p>Gönnen Sie sich ein paar Skittles... oder was auch immer Sie mögen 😊</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step22: {
            title: "Gewindeeinsätze",
            description: `
                <p>Schmelzen Sie fünf Gewindeeinsätze ein, wie dargestellt. Ab hier werden keine Gewindeeinsätze mehr benötigt. Schalten Sie den Lötkolben aus, und legen Sie ihn an einen sicheren Ort.</p>
                <p><strong>Hinweis:</strong> Achten Sie darauf, dass die eingestellte Temperatur für das Druckmaterial geeignet ist. Vorsicht! Heiße Gegenstände sind heiß... heißt es.</p>
            `,
            parts: [
                "revo_voron_front.stl",
                "5x M3 Gewindeeinsätze"
            ]
        },
        filamatrix_step23: {
            title: "Bowden",
            description: `
                <p>Setzen Sie den Bowden-Schlauch ein, in der für Ihr Hotend passenden Länge. Schneidhilfen für verschiedene Hotends finden Sie <a href="https://github.com/thunderkeys/FilamATrix/tree/main/STLs/cutting_jigs" target="_blank">hier</a>. Für Revo Voron-Hotends beträgt die geeignete Länge etwa 15,8 mm.</p>
                <p><strong>Hinweis:</strong> Wir empfehlen DRINGEND Ende des PTFE-Bowden-Schlauchs, das zum Extruder zeigt anzufasen. Vergewissern Sie Sich vor dem Einsetzen, dass sich keine PTFE-Reste mehr im Schlauch befinden.</p>
                <p>Es gibt verschiedene Möglichkeiten, um den Bowden-Schlauch anzufasen. Zu den gängigen Methoden gehören:</p>
                <ul>
                    <li>Händisch mit einem ~6-mm-Bohrer</li>
                    <li>Drehen eines Bastelmessers im Bowdenschlauch</li>
                    <li>Verwenden eines Entgratwerkzeugs</li>
                </ul>
            `,
            parts: [
                "Bowden-Schlauch mit 2 mm Innendurchmesser, ca. 16 mm Länge"
            ]
        },
        filamatrix_step24: {
            title: "Hotend",
            description: `
                <p>Befestigen Sie das Hotend mit vier M3x8 Zylinderschrauben an den vorderen Teil der Hotend-Halterung.</p>
                <p><strong>Note:</strong> Wenn Sie das kleine Stück PTFE vergessen haben, wird das später zu Schwierigkeiten führen.</p>
            `,
            parts: [
                "4x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        filamatrix_step25: {
            title: "Sandwich",
            description: `
                <p>Befestigen Sie den hinteren Teil Hotend-Halterung mit zwei M3x16 Zylinderschrauben.</p>
            `,
            parts: [
                "revo_voron_rear.stl",
                "2x M3x16 Zylinderschrauben (SHCS)"
            ]
        },
        filamatrix_step26: {
            title: "Blade Trimming",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step 5 Razor Cut.png" alt="Razor Trimming Guide">
                    <p>Wir empfehlen, eine Sicherheitskappe über die Schneide des #4 Bastelmessers zu setzen, bevor damit hantiert wird. In dieser Darstellung sehen Sie, wie die Klinge auf eine Länge von 26 mm, gemessen von der Schneide, gekürzt werden sollte.</p> 
                    <p>You can find blade snapping jigs to assist you <a href="https://github.com/thunderkeys/FilamATrix/tree/main/STLs/cutting_jigs" target="_blank">here</a>. To use it, install the heatset inserts, then screw the two halves together with the sharp end of the blade fully inserted. Use pliers to snap off the excess blade protruding from the jig.</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step27: {
            title: "Klingenhalter",
            description: `
                <p>Setzen Sie die Klinge VORSICHTIG in die Halterung ein. Es gibt ein Sichtloch im gedruckten Teil. Die Klinge sollte nach dem Einsetzen das Loch zur Hälfte abdecken.</p>
                <p><strong>Hinweis:</strong> Wenn die Klinge nur auf einer Seite eine Fase hat, sollte die flache Seite nach unten zeigen.</p>
                <p><strong>Zusätzlicher Hinweis:</strong> Falls die Klinge etwas locker sitzt, kann sie mit einem kleinen Tropfen Sekundenkleber fixiert werden.</p>
            `,
            parts: [
                "[a]_knife_holder.stl",
                "#4 Bastelmesser auf 26 mm gekürzt"
            ]
        },
        filamatrix_step28: {
            title: "Hebel",
            description: `
                <p>Setzen Sie den Klingenhalter in den Hebel ein und sichern Sie ihn mit einer M2,5x16 Zylinderschraube. Die Ausrichtung ist hier sehr wichtig, montieren Sie ihn nicht verkehrt herum. Der Klingenhalter sollte frei beweglich sein. Ziehen Sie diese Schraube nicht zu fest an.</p>
            `,
            parts: [
                "[a]_cutting_arm_clockwork2.stl",
                "M2,5x16 Zylinderschraube (SHCS)"
            ]
        },
        filamatrix_step29: {
            title: "Feder",
            description: `
                <p>Setzen Sie die Feder in den Hebel ein.</p>
            `,
            parts: [
                "0,5x4x25mm Feder"
            ]
        },
        filamatrix_step30: {
            title: "Montage des Schneidehebels",
            description: `
                <p>Setzen Sie die Schneidearm-Baugruppe in die Hotend-Halterung ein. Sichern Sie sie mit einer M3x18 Senkschraube. Die Schraube sollte nicht zu fest angezogen werden, da der Schneidearm frei beweglich bleiben soll.</p>
            `,
            parts: [
                "1x M3x18 Senkschraube (FHCS)"
            ]
        },
        filamatrix_step31: {
            title: "Hebel Begrenzung",
            description: `
                <p>Setzen Sie eine M3x8 Zylinderschraube am unteren Ende des Hebels ein. Ziehen Sie diese Schraube nicht vollständig an. Sie dient nur dazu, die Bewegung des Schneidearms nach außen zu begrenzen, sollte ihn jedoch ansonsten nicht behindern.</p>
                <p><strong>Hinweis:</strong> Jetzt ist ein „sicherer“ Zeitpunkt, die Sicherheitskappe von der Klinge zu entfernen.</p>
            `,
            parts: [
                "1x M3x8 Zylinderschraube (SHCS)"
            ]
        },
        filamatrix_step32: {
            title: "Cutter Showcase",
            description: `
                <p>In dieser Darstellung sehen Sie den montierten Extruder und den Hotendhalter. Der Schneidearm sollte frei beweglich sein und den Filamentweg nicht blockieren, wenn er vollständig ausgefahren ist.</p>
            `,
            parts: []
        },
        filamatrix_step33: {
            title: "Montage der Stealthburner-Front",
            description: `
                <p><strong>Hinweis:</strong> Bei der Montage der Stealthburner-Front sollte oben links eine M3x20 Zylinderschraube verbaut werden, nicht die standardmäßige M3x25 Zylinderschraube.</p>
            `,
            parts: [
                "1x M3x20 Zylinderschraube (SHCS)"
            ]
        },
        filamatrix_step34: {
            title: "Beefy Depressor Heatsets",
            description: `
                <p>Install 2 heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            parts: [
                "beefy_depressor.stl",
                "2x M3 Heatset inserts"
            ]
        },
        filamatrix_step35: {
            title: "Gantry Mount",
            description: `
                <p>Attatch the beefy_depressor_mount to the <strong>LEFT</strong> side of your gantry using M3 screws and washers.</p>
                <p>Shown here is the depressor mounted at the front of the printer. Some setups may find it more advantageous to mount it at the rear.</p>
                <p><strong>Note:</strong> The length of the screw will depend on your specific printer. M3x10 - no backers, M3x12 - titanium backers, M3x16 - MGN9H rails.</p>
            `,
            parts: [
                "beefy_depressor_mount.stl",
                "2x M3 SHCS (see above for length)",
                "2x M3 Washers"
            ]
        },
        filamatrix_step36: {
            title: "Attatch Pin",
            description: `
                <p>Attach the pin to the mount using an M3x16 FHCS.</p>
                <p>You will adjust the height of this pin soon.</p>
            `,
            parts: [
                "1x M3x16 FHCS"
            ]
        },
        filamatrix_step37: {
            title: "Attatch Pin",
            description: `
                <p>Thread an M3 hexnut onto an M3x16 BHCS. Install on the side facing into the printer.</p>
            `,
            parts: [
                "1x M3x16 BHCS",
                "1x M3 Hexnut"
            ]
        },
        filamatrix_step38: {
            title: "Adjustments",
            description: `
                <p>Now is the time to adjust the height of the pin on the mount and the depth of the screw so it will depress the cutting arm when the toolhead pushes against it (going from right to left).</p>
                <p>Use the hexnut to 'lock' the screw into position.</p>
                <p><strong>Note:</strong> You may wish to use the Loctite or VC-3 on this screw. Be careful not to get Loctite on any ABS/ASA printed parts!</p>
            `,
            parts: []
        }
    },
}
