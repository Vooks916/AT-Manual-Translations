export default {
    "name": "BoxTurtle Manuals",
    "subManuals": {
        "introduction": {
            "name": "1. BoxTurtle Introduction"
        },
        "frame": {
            "name": "2. BoxTurtle-Rahmen"
        },
        "extruders": {
            "name": "3. BoxTurtle Extruder"
        },
        "respoolers": {
            "name": "4. Respooler"
        },
        "turtleneck": {
            "name": "5. TurtleNeck"
        },
        "general_assembly": {
            "name": "6. Zusammenbau"
        },
        "final": {
            "name": "7. Finale"
        }
    },
    "steps": {
        "boxturtle_introduction_step1": {
            "title": "",
            "content": `
                <div class="infoL">
                    <h3>INTRODUCTION</h3>
                    <p>This manual will walk you through the process of preparing for and assembling a BoxTurtle AFC by Armored Turtle. The introduction provides an overview of how to use this manual, along with guidance on the key decisions you'll need to make before printing your parts.</p>
                    <p class='extra-space'>Before beginning, please take note of a few <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/ERRATA.md" target="_blank">minor issues</a> that we were unable to correct in time for the v1.0 release.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_introduction_basic_use": {
            "title": "Basic Use",
            "description": `
                <p>This manual presents each step of the assembly process in 3D space to help avoid confusion and clearly illustrate the correct part orientations.</p>
                <p>At the top of the page, you'll find three options: you can select different colors for your printed parts and frame to make part identification easier.</p>
                <p>Here is a render for you to explore. Left-click to rotate the view, right-click to pan, and use the scroll wheel to zoom in and out.</p>
            `,
            "parts": []
        },
        "boxturtle_introduction_note_boxturtle_enclosure": {
            "title": "Note: BoxTurtle Enclosure",
            "description": `
                <p>If you plan to integrate the optional BoxTurtle Enclosure into your build, it is highly recommended that you first assemble the BoxTurtle unit in its standard configuration and confirm that it is fully operational before proceeding with the enclosure installation.</p>
                <p>During this initial build phase, you will need to install the printed corner components, as they provide essential structural support in the absence of the enclosure. However, please note that these printed corners will ultimately be removed and replaced by enclosure-specific components during the enclosure installation process. For this reason, you should avoid installing any associated cosmetic trim pieces for the corners at this time, as they will not be compatible with the final enclosed configuration and may interfere with subsequent steps.</p>
            `,
            "parts": []
        },
        "boxturtle_introduction_step4": {
            "title": "",
            "content": `
                <div class="infoL">
                    <h3>PART SELECTION</h3>
                    <p><strong>Note:</strong> Any part labeled "D2F" is legacy, if you purchased a kit the correct choice is D2HW sensor parts. </p>
                    <p>BoxTurtle is a modular system with optional parts that allow you to customize your build. This section will outline the available options and explain how each choice affects your assembly process.</p>
                    <p>Here is an <a href="/stl-configurator.html" target="_blank">STL zip generator</a> that will organize all the required STLs for you.</p> 
                    <h3>TRAYS</h3>
                    <p>The first decision you'll need to make is which variant of the tray to print: the No_Hardware tray or the W_Hardware tray. The key factor here is the size of your build plate. If your printer has a build plate of 235mm or larger, select the No_Hardware folder.</p>
                    <p>Second, you will need to make a choice of tray type. There are four: </p>
                    <ul>
                        <li>tray_desiccant (Use this one if you plan on adding the optional enclosure to your BoxTurtle)</li>
                        <li>tray_inlay (this is a standard tray with the BoxTurtle logo embossed on it)</li>
                        <li>tray_multicolor (this model is set up for for printing the BoxTurtle logo in multiple colors)</li>
                        <li>tray_plain (the boring one)</li>
                    </ul>
                    <h3>SKIRTS</h3>
                    <p>You'll see options for either "pass through" or "hub" rear skirts. If this is your first AFC build, it is recommended to choose the "hub" option.</p>
                    <p>The second decision regarding the skirts is whether to print monolithic skirts. These can be printed on a 300mm build plate, but it’s not recommended to print them on a machine smaller than 350mm.</p>
                    <h3>CORNERS</h3>
                    <p>When building from a kit, you'll need to select the printed corners option, unless you're using the optional enclosure. The choice comes down to whether you want to add RGB strips to the corners for aesthetic purposes, as there is no functional difference.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_introduction_step5": {
            "title": "",
            "content": `
                <div class="infoL">
                    <h3>PRINTED PARTS NOTE</h3>
                    <p>This is NOT a <a href="https://vorondesign.com/" target="_blank">VORON Design</a> project, we strongly recommend that you run a profile that is specific to BoxTurtle. Voron parts profiles are not recommended for BoxTurtle printed parts, as the tolerance expectations are different.</p>
                    <p class="extra-space">Specifically, make sure you are tuning for skew and filament shrinkage. An excellent tool for this is Vector3D's <a href="https://vector3d.shop/products/califlower-calibration-tool-mk2" target="_blank">Califlower Mk2</a> (yes, it's worth the $14). Do this <i>before</i> you print 1.5-2kg worth of filament for BoxTurtle parts!</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_introduction_step6": {
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
                        <h4>MATERIALIEN</h4>
                        <p class='p-no-space'><strong>Primärfarbe:</strong> ~1,4 kg ABS/PLA</p>
                        <p class='p-no-space'><strong>Akzentfarbe:</strong> ~0,3 kg ABS/PLA</p>
                        <p class='p-no-space'><strong>TPU:</strong> ~60g ~95A Härte</p>
                        <p class='p-no-space'><strong>Durchsichtig:</strong> ~12 g, jedes Material</p>
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
        "boxturtle_introduction_step7": {
            "title": "",
            "content": `
                <div class=info>
                    <h3>DATEINAMEN</h3>
                    <p>Mittlerweile sollten Sie die <a href="/stl-configurator.html" target="_blank">STL-Dateien</a> von <a href="https://github.com/ArmoredTurtle/BoxTurtle" target="_blank">GitHub</a>heruntergeladen haben. Die Dateien werden nach folgenden Richtlinien benannt.</p>
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
        "boxturtle_introduction_step8": {
            "title": "",
            "content": `
                <div class="infoL">
                    <h3>ECAS-04 (the worst part)</h3>
                    <p>The bowden couplers used in BoxTurtle are meant to be tight, your tolerances aren’t bad if they take some persuasion to insert. You do NOT want these coming out of the printed parts.</p>
                    <p>Reference this assembly photo for these. Typically, the blue plunger will need to be inserted into the collet body.</p>
                    <p>The rubber seal will need to be removed from the seal retainer. Be sure that the retainer is left on the collet body. At no time, in any Armored Turtle project, will the rubber seal be utilized. Discard these appropriately.</p>
                    <img class='ecas-preparation' src="/images/ecas-preparation.webp" alt="ECAS Preparation">
                </div>
            `,
            "parts": []
        },
        "boxturtle_introduction_step9": {
            "title": "",
            "content": `
                <div class="infoL">
                    <h3>ASSEMBLY CUES</h3>
                    <p>You will notice arrows rendered in many assembly steps. These signify an action to take.</p>
                    <p>Note the colors.</p>
                    <ul>
                        <li>Red: a final action being taken such as fully securing a screw or setting a heat set insert</li>
                        <li>Blue: loose assembly that will be revisited later </li>
                        <li>Green: an adjustment that is up to the end user’s discretion</li>
                    </ul>
                    <img class='arrow-example' src="/images/ArrowExample.webp" alt="Arrow Examples">
                </div>
            `,
            "parts": []
        },
        "boxturtle_introduction_step10": {
            "title": "",
            "content": `
                <div class="info">
                    <h3>COMMON LINKS</h3>
                    <div class="link-container">
                        <a href="https://github.com/ArmoredTurtle/BoxTurtle/tree/main" target="_blank" class="link-item">
                            <img src="/images/github-logo.png" alt="GitHub" class="link-icon">
                            <span>GitHub</span>
                        </a>
                        <a href="https://discord.gg/AaVHfeYgw2" target="_blank" class="link-item">
                            <img src="/images/discord.png" alt="Discord" class="link-icon">
                            <span>Discord</span>
                        </a>
                        <a href="/stl-configurator.html" target="_blank" class="link-item">
                            <img src="/images/android-chrome-512x512.png" alt="STL Generator" class="link-icon">
                            <span>STL Generator</span>
                        </a>
                    </div>
                    <div class='info-submanual-nav-buttons'>
                        <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                        <button onclick="location.href='manual.html?manual=boxturtle&subManual=frame'">Next Section</button>
                    </div>
                </div>
            `,
            "parts": []
        },
        "boxturtle_frame_heatset_insert": {
            "title": "Heatset-Einsatz",
            "description": `
                <p>Installieren Sie einen Heatset-Einsatz wie gezeigt.</p>
                <p><strong>Notiz:</strong> Stellen Sie sicher, dass Sie eine Temperatur wählen, die für das Material Ihrer Druckteile geeignet ist. Seien Sie vorsichtig! Heiße Dinge sind heiß...</p>
            `,
            "parts": [
                "rear_skirt_center_hub.stl",
                "1x M3 Heatset-Einsatz"
            ]
        },
        "boxturtle_frame_precursor": {
            "title": "Vorläufer",
            "description": `
                <p>Beachten Sie die verschiedenen Ausrichtungen, in denen die Extruderbaugruppen an der Unterseite der Tabletts installiert werden können.</p>
                <p>Wenn Sie No_Hardware-Fächer verwenden, verfügen Sie über genügend Heatset-Einsätze, um alle vier Montagelöcher in jedem Fach zu bestücken.</p>
                <p>Der Einfachheit halber wird im Handbuch die Installation der Extruder parallel zu den sich vorwärts bewegenden Schalen beschrieben.</p>
            `,
            "parts": []
        },
        "boxturtle_frame_more_heatset_inserts": {
            "title": "Weitere Heatset-Einsätze",
            "description": `
                <p>Installieren Sie die Heatset-Einsätze wie gezeigt.</p>
                <p><strong>Notiz</strong> Dies ist der letzte Schritt dieses Abschnitts, der die Installation von Heatsets erfordert. Schalten Sie Ihr Bügeleisen unbedingt aus und stellen Sie es an einen sicheren Ort.</p>
                <p><strong>Wenn Sie No_Hardware-Fächer verwenden,</strong> fahren Sie mit der Seite fort 5 nach der Installation von Heatsets auf der Unterseite Ihrer Tabletts.</p>
            `,
            "parts": [
                "4 Tabletts Ihrer Wahl.",
                "28x M3 Heatset-Einsatz (12, wenn Sie No_Hardware-Fächer verwenden)"
            ]
        },
        "boxturtle_frame_attach_the_bars": {
            "title": "Befestigen Sie die „bars“",
            "description": `
                <p>Befestigen Sie die „bars“ wie abgebildet mit M3x8-SHCS-Schrauben an den Tabletts.</p>
            `,
            "parts": [
                "4x bar_long.stl",
                "8x bar_short.stl",
                "16x M3x8 SHCS"
            ]
        },
        "boxturtle_frame_install_d2hw_switch": {
            "title": "D2HW-Switch installieren",
            "description": `
                <p>Setzen Sie ein MR63ZZ-Lager ein und setzen Sie anschließend wie gezeigt einen D2HW-Mikroschalter ein. Mit einer M3x10 SHCS-Schraube befestigen.</p>
                <p>Achten Sie darauf, diese Schraube nicht zu fest anzuziehen, sie ist in Kunststoff eingeschraubt.</p>
                <p>Ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2HW-C201H.png" target="_blank">switch is wired</a> before installation. Refer to the <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/BoxTurtle_Wiring.md" target="_blank">wiring guide</a> to determine which lengths to use.</p>
                <p><strong>Notiz:</strong> Jetzt ist es an der Zeit, SICHER zu sein, dass Ihre Filamentwege frei und frei sind. Möglicherweise stellen Sie fest, dass ein 2-mm-Bohrer <i>von Hand</i> Problembereiche reinigen kann, wenn Sie einen haben.</p>
            `,
            "parts": [
                "[a]_hub.stl",
                "1x D2HW C201H Microswitch",
                "1x MR63ZZ Lager",
                "1x M3x10 SHCS"
            ]
        },
        "boxturtle_frame_ecas04_couplers": {
            "title": "ECAS04 Couplers",
            "description": `
                <p>Insert 4 ECAS04 couplers as shown.</p>
                <p><strong>Note:</strong> They are meant to be tight! Pressing against a table with the hub_tool_step2 may help secure them. Using a persuasion tool (hammer) gently, is also a viable option.</p>
            `,
            "parts": [
                "hub_tool_step2.stl",
                "4x ECAS04 bowden couplers with rear rubber bumper removed"
            ]
        },
        "boxturtle_frame_support_removal": {
            "title": "Unterstützung Entfernen",
            "description": `
                <p>Entfernen Sie die eingebauten Stützen wie gezeigt. Sie können einen kleinen Schlitzschraubendreher verwenden, um hinter sie zu gelangen und sie nach außen zu hebeln.</p>
            `,
            "parts": [
                "4x corner_printed.stl"
            ]
        },
        "boxturtle_frame_fan_installation": {
            "title": "Lüfterinstallation",
            "description": `
                <p>Installieren Sie den Lüfter und stellen Sie sicher, dass die Luft in die BoxTurtle strömt. Mit 4 M3x16 BHCS-Schrauben befestigen.</p>
                <p>Sie schrauben direkt in Kunststoff, nicht zu fest anziehen.</p>
                <p><strong>Note: </strong>The original 3010 fan on the BOM was mistakenly specified as a 12K RPM fan, and can be quite loud. The controller  fan is 100% optional and can be omitted from installation, or replaced with an alternative, slower fan.</p>
            `,
            "parts": [
                "1x 3010 5V fan",
                "4x M3x16 BHCS"
            ]
        },
        "boxturtle_frame_rear_extrusion_assembly": {
            "title": "Hintere Profilbaugruppe",
            "description": `
                <p>Stecken Sie die Nabe in die Schürze und befestigen Sie sie wie abgebildet mit einer M3x10 SHCS-Schraube.</p>
            `,
            "parts": [
                "[a]_hub_(type).stl",
                "1x M3x10 SHCS"
            ]
        },
        "boxturtle_frame_front_extrusion_assembly": {
            "title": "Vordere Profilbaugruppe",
            "description": `
                <p>Schrauben Sie zwei M5x16 BHCS-Schrauben wie abgebildet durch die bedruckte Ecke in die 360-mm-Profile.</p>
                <p>Jetzt können Sie alle vier Schrauben wie abgebildet fest anziehen.</p>
            `,
            "parts": [
                "corner_printed.stl",
                "2x M5x16 BHCS"
            ]
        },
        "boxturtle_frame_side_extrusion_assembly": {
            "title": "Seitliche Profilbaugruppe",
            "description": `
                <p>Stecken Sie die Seitenschürze wie abgebildet in die Profile.</p>
            `,
            "parts": [
                "4x side_skirt.stl"
            ]
        },
        "boxturtle_frame_trays": {
            "title": "Tabletts",
            "description": `
                <p>Setzen Sie die Tabletts wie gezeigt in das hintere Profil ein und achten Sie dabei auf die Ausrichtung.</p>
                <p><strong>Notiz:</strong> Möglicherweise ist es für Sie am einfachsten, diese verkehrt herum auf den Tisch zu legen, bis Sie sie im folgenden Schritt befestigen.</p>
            `,
            "parts": [
                "4x Tabletts"
            ]
        },
        "boxturtle_frame_putting_it_all_together": {
            "title": "Alles Zusammenfügen",
            "description": `
                <p>Befestigen Sie die Frontplatte wie abgebildet mit vier M5x16 BHCS-Schrauben am Rest des Rahmens.</p>
                <p>Stellen Sie sicher, dass die Tabletts in die vorderen und hinteren oberen Profile eingepasst sind.</p>
                <p><strong>Notiz:</strong> Denken Sie daran, wie in der Einleitung erwähnt, dass blaue Pfeile bedeuten, dass Sie diese Schrauben noch nicht vollständig festziehen möchten.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=extruders'">Next Section</button>
                </div>
            `,
            "parts": [
                "4x M5x16 BHCS"
            ]
        },
        "boxturtle_extruders_before_you_start": {
            "title": "Bevor Sie beginnen...",
            "description": `
                <p>Für die BoxTrutle werden insgesamt <strong>vier Extruder</strong> benötigt. Sie können einen nach dem anderen bauen oder alle vier auf einmal. Stellen Sie jedoch sicher, dass Sie vier Extruder haben, bevor Sie fortfahren! Wir werden Sie am Ende dieses Abschnitts noch einmal daran erinnern.</p>
            `,
            "parts": []
        },
        "boxturtle_extruders_heatset_inserts": {
            "title": "Gewindeeinsätze",
            "description": `
                <p>Schmelzen Sie die sechs Gewindeeinsätze ein, wie hier dargestellt.</p>
                <p><strong>Hinweis:</strong> Achten Sie darauf, dass die eingestellte Temperatur für das Druckmaterial geeignet ist. Vorsicht! Heiße Gegenstände sind heiß... heißt es.</p>
                <p><strong>Notiz</strong> Dies ist der letzte Schritt dieses Abschnitts, der die Installation von Heatsets erfordert. Schalten Sie Ihr Bügeleisen unbedingt aus und stellen Sie es an einen sicheren Ort.</p>
            `,
            "parts": [
                "motor_plate_x4.stl",
                "extruder_housing_x4.stl",
                "6x M3 Gewindeeinsätze"
            ]
        },
        "boxturtle_extruders_d2hw_microswitch": {
            "title": "D2HW Mikroschalter",
            "description": `
                <p>Setzen Sie das Lager in die Öffnung ein und achten Sie darauf, dass es frei beweglich ist. Drücken Sie den Mikroschalter anschließend vorsichtig dahinter.</p>
                <p>Ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2HW-C201H.png" target="_blank">switches are wired</a> before installation. Refer to the <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/BoxTurtle_Wiring.md" target="_blank">wiring guide</a> to determine which lengths to use.</p>
                <p><strong>Note:</strong> Now is the time to be SURE that your filament pathways are clear and unobstructed. You may find that a 2mm drill bit <i>by hand</i> can clean up trouble areas if you have them.</p>
            `,
            "parts": [
                "MR63ZZ Lager",
                "D2HW-C201H Mikroschalter"
            ]
        },
        "boxturtle_extruders_drive_gear_assembly": {
            "title": "Antriebszahnrad-Montage",
            "description": `
                <p>Bauen Sie das Antriebszahnrad zusammen wie dargestellt.</p>
                <p><strong>Hinweis:</strong> Richten Sie die Madenschraube zur flachen Seite der Welle aus, aber ziehen Sie sie noch nicht vollständig an.</p>
            `,
            "parts": [
                "2x MR85 Lager",
                "50t Zahnrad",
                "Antriebszahnrad"
            ]
        },
        "boxturtle_extruders_drive_gear_insertion": {
            "title": "Einsetzen des Antriebszahnrads",
            "description": `
                <p>Setzen Sie das Antriebszahnrad in das Extruder-Gehäuse ein.</p>
            `,
            "parts": []
        },
        "boxturtle_extruders_motor_plate": {
            "title": "Motorplatte",
            "description": `
                <p>Verschrauben Sie die Motorplatte am Extruder-Gehäuse mit 3 M3x8 Zylinderschrauben (SHCS).</p>
                <p>Schrauben Sie die M3x8 Zylinderschraube seitlich am Gehäuse vollständig ein.</p>
            `,
            "parts": [
                "4x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_extruders_drive_gear_alignment": {
            "title": "Ausrichten des Antriebszahnrads",
            "description": `
                <p>Führen Sie ein Stück Filament ein und achten Sie auf die korrekte Ausrichtung des Antriebszahnrads. Ziehen Sie die Madenschraube fest.</p>
                <p><strong>Hinweis:</strong> Falls noch keine Schraubensicherung (Loctite) auf die Madenschraube aufgetragen wurde, ist jetzt der richtige Zeitpunkt dafür.</p>
                <p>Beim Filamentsensor sollte ein Klickgeräusch hörbar sein, wenn das Filament durchgeführt wird.</p>
            `,
            "parts": [
                "Kurzes Stück Filament"
            ]
        },
        "boxturtle_extruders_ecas_coupler": {
            "title": "ECAS Kupplungen",
            "description": `
                <p>Setzen Sie die ECAS04-Kupplungen ein.</p>
                <p><strong>Hinweis:</strong> Diese Teile sollen fest sitzen. Sie können sie flach auf den Tisch legen und die gedruckten Teile darauf pressen.</p>
            `,
            "parts": [
                "2x ECAS04 Bowdenkupplungen (hinterer Gummi-Ring entfernt)"
            ]
        },
        "boxturtle_extruders_support_removal": {
            "title": "Stützstruktur entfernen",
            "description": `
                <p>Entfernen Sie die Stützstruktur.</p>
            `,
            "parts": [
                "[a]_guidler_x4.stl"
            ]
        },
        "boxturtle_extruders_guidler_idler": {
            "title": "Führungszahnrad (Guidler)",
            "description": `
                <p>Setzen Sie die Führungsrolle zusammen, indem Sie die 2 Nadellager in das Führungszahnrad einsetzen und den 20mm Stift durchschieben.</p>
                <p><strong>Hinweis:</strong> Jetzt ist der Zeitpunkt, die Nadellager zu schmieren.</p>
                <p>Drücken Sie die Führungsrollen-Baugruppe fest in die Halterung (Guidler). Achten Sie dabei auf die Ausrichtung!</p>
            `,
            "parts": [
                "2x Nadellager",
                "20mm Stift",
                "Führungszahnrad"
            ]
        },
        "boxturtle_extruders_guidler_installation": {
            "title": "Einbau der Führungsrolle (Guidler)",
            "description": `
                <p>Bauen Sie die Führungsrolle (Guidler) ein und befestigen Sie sie mit einer M3x30 Linsenkopfschraube (BHCS). Ziehen Sie die Schraube nicht zu fest an, die Führungsrolle sollte noch frei schwenkbar sein.</p>
            `,
            "parts": [
                "1x M3x30 Linsenkopfschraube (BHCS)"
            ]
        },
        "boxturtle_extruders_tensioner": {
            "title": "Spannschraube (Tensioner)",
            "description": `
                <p>Schrauben Sie die Spannschraube durch die Führungsrolle (Guidler), bis die Unterlegscheibe vollständig aufliegt. Drehen Sie dann noch zweieinhalb Umdrehungen weiter.</p>
            `,
            "parts": [
                "Spannschraube (mit Feder und Unterlegscheibe)"
            ]
        },
        "boxturtle_extruders_anti_squish": {
            "title": "Anti-Quetsch",
            "description": `
                <p>Führen Sie ein Stück Filament durch den Extruder und justieren Sie den Gripp, indem Sie die Anti-Quetsch-Schraube herausdrehen.</p>
                <p>Hier ist ein hilfreiches <a href="https://www.youtube.com/watch?v=L1gxBCiE0pk" target="_blank">Video von Dr. Dave</a>, das zeit wie man Anti-Squish richtig einstellt.</p>
                <p><strong>Hinweis:</strong> Die Extruder-Zahnräder sollten gut in das Filament greifen, und alles sollte sich gleichmäßig drehen, während Sie das Filament hindurchziehen. Die Anti-Squish-Schraube MUSS eingestellt werden, da dieser Extruder das Filament sonst quetschen kann.</p>
                <p>Jetzt ist der richtige Zeitpunkt, um sicherzustellen, dass alles richtig eingestellt ist und der Extruder reibungslos funktioniert.</p>
            `,
            "parts": [
                "Kurzes Stück Filament"
            ]
        },
        "boxturtle_extruders_stepper_motor": {
            "title": "Schrittmotor",
            "description": `
                <p>Setzen Sie den Schrittmotor auf das Extruder-Gehäuse. Befestigen Sie ihn mit zwei M3x8 Zylinderschrauben (SHCS). Vergessen Sie dabei nicht die M3-Unterlegscheibe auf der einstellbaren Seite (Langloch), wie gezeigt.</p>
                <p>Refer to the <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/BoxTurtle_Wiring.md" target="_blank">wiring guide</a> to determine which lengths to use. The relative lengths of the stepper motor wires should match those of your microswitch.</p>
                <p><strong>Hinweis:</strong> Der blaue Pfeil bedeutet, dass diese Schraube noch nicht vollständig angezogen werden soll, wie in der Einleitung erwähnt.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)",
                "1x M3-Unterlegscheibe",
                "Nema 14 36mm Pancake-Motor"
            ]
        },
        "boxturtle_extruders_backlash_adjustment": {
            "title": "Spiel der Zahnräder einstellen",
            "description": `
                <p>Das Ritzel des Motors und das 50t-Zahnrad sollten leichtes Spiel haben. Ziehen Sie die Schraube beim Langloch fest.</p>
                <p>Hier ist ein weiteres hilfreiches <a href="https://www.youtube.com/watch?v=ly22qmB3NxE" target="_blank">Video von Dr. Dave</a>, das zeit wie man das Spiel richtig einstellt.</p>
                <p>Befestigen Sie das Kabel des Motors mit einem Kabelbinder am Extruder-Gehäuse.</p>
            `,
            "parts": [
                "Kabelbinder"
            ]
        },
        "boxturtle_extruders_friendly_reminder": {
            "title": "Erinnerung!",
            "description": `
                <p>Sie benötigen insgesamt <strong>vier Extruder</strong>, um Ihre BoxTurtle zusammenzubauen. Bevor Sie mit dem nächsten Abschnitt fortfahren, stellen Sie sicher, dass Sie vier Extruder-Einheiten haben.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menü</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=respoolers'">Nächster Abschnitt</button>
                </div>
            `,
            "parts": []
        },
        "boxturtle_respoolers_step1": {
            "title": "",
            "content": `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>ZWISCHEN-CHECK!</h3>
                    <p>Überprüfen Sie, ob die MR148zz Lager gut auf die 80-mm-Welle passen. Falls die Passung zu eng ist, verwenden Sie einen Akkuschrauber und Schleifpapier.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_respoolers_before_you_start": {
            "title": "Bevor Sie beginnen...",
            "description": `
                <p>Sie benötigen insgesamt <strong>vier Respooler</strong>, um Ihre BoxTurtle zusammenzubauen. Sie können einen nach dem anderen bauen oder alle vier auf einmal. Am Ende solten Sie vier haben, bevor Sie fortfahren! Wir erinnern Sie am Ende dieses Abschnitts noch einmal daran.</p>
            `,
            "parts": []
        },
        "boxturtle_respoolers_support_removal": {
            "title": "Sützstrukturen entfernen",
            "description": `
                <p>Entfernen Sie die Stützstrukturen.</p>
            `,
            "parts": [
                "frame_right_x4.stl",
                "frame_left_x4.stl",
                "motor_mount_x4.stl"
            ]
        },
        "boxturtle_respoolers_heatset_inserts": {
            "title": "Gewindeeinsätze",
            "description": `
                <p>Setzen Sie die fünf Gewindeeinsätze ein, wie hier dargestellt.</p>
                <p>Hinweis: Achten Sie darauf, dass die eingestellte Temperatur für das Druckmaterial geeignet ist. Vorsicht! Heiße Gegenstände sind heiß... heißt es.</p>
            `,
            "parts": [
                "frame_right_x4.stl",
                "frame_left_x4.stl",
                "motor_mount_x4.stl",
                "gearbox_cover_x4.stl",
                "5x M3 Gewindeeinsätze"
            ]
        },
        "boxturtle_respoolers_heatset_inserts_pt_2": {
            "title": "Gewindeeinsätze Teil 2",
            "description": `
                <p>Setzen Sie die vier Gewindeeinsätze ein, wie hier dargestellt.</p>
                <p>Hinweis: Achten Sie darauf, dass die eingestellte Temperatur für das Druckmaterial geeignet ist. Vorsicht! Heiße Gegenstände sind heiß... heißt es.</p>
                <p><strong>Notiz</strong> Dies ist der letzte Schritt dieses Abschnitts, der die Installation von Heatsets erfordert. Schalten Sie Ihr Bügeleisen unbedingt aus und stellen Sie es an einen sicheren Ort.</p>
            `,
            "parts": [
                "[a]_wheel_drive_x8.stl",
                "4x M3 Heatset inserts"
            ]
        },
        "boxturtle_respoolers_ecas04_coupler": {
            "title": "ECAS Kupplungen",
            "description": `
                <p>Setzen Sie die ECAS04-Kupplung ein.</p>
                <p><strong>Hinweis:</strong> Diese Teile sollen fest sitzen. Sie können sie flach auf den Tisch legen und die gedruckten Teile darauf pressen.</p>
            `,
            "parts": [
                "motor_mount_x4.stl",
                "motor_mount_helper.stl",
                "ECAS04 Bowdenkupplungen (hinterer Gummi-Ring entfernt)"
            ]
        },
        "boxturtle_respoolers_magnets": {
            "title": "Magnete",
            "description": `
                <p>Setzen Sie die Magnete ein. Beachten Sie dabei, dass sie sich gegenseitig anziehen müssen.</p>
                <p><strong>Hinweis:</strong> Wenn die Magnete locker sitzen, können Sie sie mit einem Tropfen Sekundenkleber fixieren.</p>
            `,
            "parts": [
                "motor_mount_x4.stl",
                "trigger_x4.stl",
                "2x 6x3 Magnete"
            ]
        },
        "boxturtle_respoolers_mr63_bearing": {
            "title": "MR63 Lager",
            "description": `
                <p>Setzen Sie das MR63 Lager ein, und fixieren Sie es mit einer M3x8 Zylinderschraube.</p>
                <p><strong>Hinweis:</strong> Schrauben Sie die Schraube fest, aber ziehen Sie sie nicht zu fest an, da dies das Gewinde im Druckteil beschädigen könnte.</p>
            `,
            "parts": [
                "1x M3x8 Zylinderschraube (SHCS)",
                "1x MR63 Lager"
            ]
        },
        "boxturtle_respoolers_trigger_preparation": {
            "title": "Hebel (Trigger) vorbereiten",
            "description": `
                <p>Schrauben Sie die M3x8 Zylinderschrauben in beide Seiten des Hebels. Lassen Sie etwa 3,5 mm Abstand zwischen dem Hebel und dem Schraubenkopf.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_respoolers_30t_gear_assembly": {
            "title": "30t-Zahnrad Montage",
            "description": `
                <p>Setzen Sie das Zahnrad wie gezeigt in das 30t-Werkzeug ein, wobei die Lippe nach unten zeigt. Schieben Sie die 80-mm-Welle vorsichtig in das Zahnrad, bis sie den Boden des Werkzeugs erreicht.</p>
                <P>The gear <strong>MUST</strong> be a tight fit on the shaft and should not easily move.</p>
                <p><strong>LDO gears in batch 1 and 2 are too loose.</strong> You may either secure them with glue, or use the FDM printed versions.</P>
                <p><strong>Hinweis:</strong> Achten Sie darauf, die Welle beim Einführen senkrecht zu halten. Das Werkzeug führt die Welle gerade, sobald sie das Zahnrad passiert hat.</p>
            `,
            "parts": [
                "30t Montagewerkzeug",
                "helical_gear_30t_x4.stl",
                "80-mm-Welle"
            ]
        },
        "boxturtle_respoolers_spacer": {
            "title": "Abstandshalter",
            "description": `
                <p>Schieben Sie den Abstandshalter über die lange Seite der Welle, bis er das 30t Zahnrad berührt.</p>
            `,
            "parts": [
                "gear_30_spacer_x4.stl"
            ]
        },
        "boxturtle_respoolers_n20_motor_setup": {
            "title": "N20 Motor vorbereiten",
            "description": `
                <p>Bevor Sie die N20-Motoren installieren, stellen Sie sicher, dass die <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/N20_6V_500RPM.png" target="_blank">Kabel die richtige Länge haben</a>.</p>
                <p>Setzen Sie den N20-Motor in das Werkzeug ein. Richten Sie die D-Form mit der Motorwelle aus und drücken Sie, bis das Zahnrad die Vorderseite des Werkzeugs erreicht.</p>
                <p>The 15T installation tool is an intentionally firm fit around the N20 motor and gearbox to support it while you install the 15t herringbone gear.</p>
                <p><strong>Hinweis:</strong> Das Zahnrad sollte fest sitzen, aber es sollte nicht viel Kraft benötigt werden, um es einzusetzen. Zu viel Kraft kann das Getriebe des N20-Motors beschädigen.</p>
                <p><strong>WICHTIG:</strong> Stellen Sie sicher, dass keine Rückstände aus dem Herstellungsprozess im N20-Getriebe sind. Dazu können Sie das Getriebe mit Isopropanol (IPA) oder einem ähnlichen Lösungsmittel zu spülen.</p>
            `,
            "parts": [
                "15t Montagewerkzeug",
                "helical_gear_15t_x4.stl",
                "N20 Motor"
            ]
        },
        "boxturtle_respoolers_alignment_check": {
            "title": "Alignment Check",
            "description": `
                <p>Ensure that the N20 motor's gearbox is slotted into the groove as shown.</p>
                <p><strong>This alignment is critical to the reliable operation of  the respooler.</strong></p>
            `,
            "parts": []
        },
        "boxturtle_respoolers_neopixel_installation": {
            "title": "Neopixel Installation",
            "description": `
                <p>Drücken Sie den LED-Halter an die vorgesehene Stelle in der Lightbox.</p>
            `,
            "parts": []
        },
        "boxturtle_respoolers_n20_motor_installation": {
            "title": "N20 Motor Installation",
            "description": `
                <p>Schieben Sie den N20-Motor in die Nut des Motorhalters. Achten Sie darauf, dass die Kabel nach oben zeigen, wenn der Motor eingesetzt ist.</p>
                <p><strong>Hinweis:</strong> Wir empfehlen, das Getriebe des N20-Motors zu reinigen und zu schmieren. Super Lube ist hierfür eine gute Option, aber auch andere Schmiermittel können verwendet werden. Das Schmiermittel sollte aber für die Kunststoffteile geeignet sein.</p>
                <p><strong>IMPORTANT:</strong> Please ensure that there are no debris from the manufacturing process in the N20 gearbox before you lubricate it. You may want to flush it with IPA or a similar solvent.</p>
            `,
            "parts": [
                "motor_mount_x4.stl"
            ]
        },
        "boxturtle_respoolers_gearbox_cover": {
            "title": "Getriebeabdeckung",
            "description": `
                <p>Legen Sie die Kabel über den Motor, wie gezeigt, und befestigen Sie sie mit Kabelbindern an den Ausnehmungen im Druckteil. Achten Sie darauf, dass der Kabelbinder fest sitzt und bündig abgeschnitten ist.</p>
                <p>Setzen Sie die Getriebeabdeckung ein und sichern Sie sie mit der M3x10 Zylinderschraube.</p>
            `,
            "parts": [
                "gearbox_cover_x4.stl",
                "M3x10 Zylinderschrauben (SHCS)",
                "2x Kabelbinder"
            ]
        },
        "boxturtle_respoolers_frame_bearings": {
            "title": "Lager",
            "description": `
                <p>Setzen Sie die Lager ein. Die Lager sollten bündig an der Außenseite der Teile sitzen.</p>
            `,
            "parts": [
                "frame_left_x4.stl",
                "frame_right_x4.stl",
                "2x MR148ZZ Lager"
            ]
        },
        "boxturtle_respoolers_left_frame_installation": {
            "title": "Linkes Gehäuseteil",
            "description": `
                <p>Befestigen Sie das linken Gehäuseteil mit einer M3x8 Zylinderschraube, aber lassen Sie die Schraube locker für den nächsten Schritt. Achten Sie darauf, dass die Kabel oben auf dem N20-Motor liegen und nicht vom Druckteil eingequetscht werden.</p>
            `,
            "parts": [
                "frame_left_x4.stl",
                "M3x8 Zylinderschraibe (SHCS)"
            ]
        },
        "boxturtle_respoolers_add_the_30t_gear_shaft": {
            "title": "Welle mit 30t Zahnrad einsetzen",
            "description": `
                <p>Schieben Sie die Welle mit dem 30t Zahnrad in das Lager.</p>
                <p>Wenn Sie die Schraube im letzten Schritt locker gelassen haben, sollten Sie in der Lage sein, die Welle und das Zahnrad leicht zu kippen, bis beide Zahnräder ineinandergreifen.</p>
                <p>Nun können Sie die Schraube am linken Gehäuseteil vollständig anziehen.</p>
                <p><strong>Hinweis:</strong> Achten Sie darauf, die beide Gehäuseteile an der unteren Fläche bündig ausgerichtet sind. Es gibt Vorsprünge und Einkerbungen, die beim Ausrichten helfen, aber es gibt trotzdem etwas Spiel in der Passung.</p>
            `,
            "parts": [
                "gear_30_spacer_x4.stl",
                "80-mm-Welle mit 30t Zahnrad"
            ]
        },
        "boxturtle_respoolers_closing_up_the_sides": {
            "title": "Seiten schließen",
            "description": `
                <p>Schieben Sie das rechte Gehäuseteil über die Welle. Während es noch locker ist, führen Sie die Kabel für die Lichtbox-LED durch den Kanal.</p>
                <p>Achten Sie darauf, dass die Kabel frei beweglich sind und nichts eingeklemmt wird. Befestigen Sie das Gehäuseteil mit einer M3x8 Zylinderschraube.</p>
                <p><strong>Hinweis:</strong> Wie im vorherigen Schritt, achten Sie auf die Ausrichtung der Teile an der Unterseite.</p>
            `,
            "parts": [
                "frame_right_x4.stl",
                "LED-Baugruppe",
                "M3x8 Zylinderschraube (SHCS)"
            ]
        },
        "boxturtle_respoolers_step24": {
            "title": "",
            "content": `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>ZWISCHEN-CHECK!</h3>
                    <p>Stellen Sie sicher, dass sich die Welle ohne großen Widerstand drehen lässt und die Zahnräder nicht klemmen, bevor Sie fortfahren.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_respoolers_insert_the_trigger": {
            "title": "Hebel einsetzen",
            "description": `
                <p>Setzen Sie den Hebel in den Respooler ein. Achten Sie darauf, dass die Schrauben nicht an den Seiten reiben und der Hebel frei beweglich ist.</p>
            `,
            "parts": []
        },
        "boxturtle_respoolers_attach_the_lightbox": {
            "title": "Lichtbox anbringen",
            "description": `
                <p>Setzen Sie die Lichtbox von oben in das Gehäuse ein und drücken Sie dann nach unten, um sie einzurasten.</p>
            `,
            "parts": []
        },
        "boxturtle_respoolers_step27": {
            "title": "",
            "content": `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>ZWISCHEN-CHECK!</h3>
                    <p>Der Hebel sollte sich frei hin und her bewegen lassen und nicht hängen bleiben.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_respoolers_wheel_drives": {
            "title": "Räder montieren",
            "description": `
                <p>Schieben Sie die Abstandhalter auf die Welle, gefolgt von den inneren Rädern. Diese sollten bündig an den Lagern anliegen.</p>
            `,
            "parts": [
                "[a]_wheel_drive_x8.stl",
                "[a]_bearing_spacer_x8.stl"
            ]
        },
        "boxturtle_respoolers_securing_the_wheel_drives": {
            "title": "Räder montieren",
            "description": `
                <p>Sichern Sie die Räder mit M3x6 Zylinderschrauben an der 8x80 Welle.</p>
                <p><strong>LDO KITS:</strong> Use M3x6 BHCS instead.</p>
            `,
            "parts": [
                "4x M3x6 Zylinderschrauben (SHCS) (BHCS for LDO Kits)"
            ]
        },
        "boxturtle_respoolers_wheels": {
            "title": "Räder montieren",
            "description": `
                <p>Schieben Sie die TPU-Teile auf die Räder. Achten Sie darauf, dass die TPU-Teile richtig herum gedreht sind, sodass die Nut in das Rad einrastet.</p>
                <p><strong>Hinweis:</strong> Wenn es schwierig ist, die TPU-Teile aufzuziehen, kann es helfen, sie ein wenig zu erwärmen.</p>
            `,
            "parts": [
                "[a]_wheel_x8.stl",
                "tpu_tire_x8.stl"
            ]
        },
        "boxturtle_respoolers_attaching_the_wheels": {
            "title": "Räder montieren",
            "description": `
                <p>Schrauben Sie die äußeren Räder auf die inneren Räder, sodass sie einrasten.</p>
            `,
            "parts": [
                "[a]_wheel_x8.stl",
                "tpu_tire_x8.stl"
            ]
        },
        "boxturtle_respoolers_friendly_reminder": {
            "title": "Erinnerung!",
            "description": `
                <p>Sie benötigen insgesamt <strong>vier Respooler</strong>, um Ihre BoxTurtle zusammenzubauen. Stellen Sie sicher, dass Sie vier Einheiten gebaut haben, bevor Sie mit dem nächsten Abschnitt fortfahren.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menü</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=turtleneck'">Nächster Abschnitt</button>
                </div>
            `,
            "parts": []
        },
        "boxturtle_turtleneck_heatset_inserts": {
            "title": "Heatset Inserts",
            "description": `
                <p>Install four heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
                <p><strong>Notiz</strong> Dies ist der letzte Schritt dieses Abschnitts, der die Installation von Heatsets erfordert. Schalten Sie Ihr Bügeleisen unbedingt aus und stellen Sie es an einen sicheren Ort.</p>
            `,
            "parts": [
                "lid.stl",
                "4x M3 heatset inserts"
            ]
        },
        "boxturtle_turtleneck_ecas_fittings": {
            "title": "ECAS Fittings",
            "description": `
                <p>Insert the ECAS04 fittings as shown</p>
                <p><strong>Note:</strong> These are meant to be tight, you can lay them flat on the table and press the printed parts onto them.</p>
            `,
            "parts": [
                "[a]_slide.stl",
                "frame.stl",
                "2x ECAS04 bowden couplers with rear rubber bumper removed"
            ]
        },
        "boxturtle_turtleneck_microswitches": {
            "title": "Microswitches",
            "description": `
                <p>Minding orientation of the levers on the microswitches, install with four M2x10 self tapping screws as shown. Be mindful these are threaded directly into plastic.</p>
                <p>Confused which switch is which? Here is a <a href="https://github.com/ArmoredTurtle/AFC-Klipper-Add-On/blob/main/docs/AFC_buffer.md" target="_blank">document</a> to help you understand the buffer and it’s functions</p>
                <div class='tn-switches-key'>
                    <strong>KEY:</strong>
                    <p class='advance'>Advance</p>
                    <p class='trailing'>Trailing</p>
                </div>
            `,
            "parts": [
                "4x M2x10 self tapping screws",
                "2x D2F microswitches"
            ]
        },
        "boxturtle_turtleneck_slide": {
            "title": "Slide",
            "description": `
                <p>Place the slide into the lid as shown.</p>
            `,
            "parts": []
        },
        "boxturtle_turtleneck_sandwich": {
            "title": "Sandwich",
            "description": `
                <p>Install the frame to the lid with the slide correctly positioned with four M3x8 SHCS screws.</p>
                <p>Make sure the slide moves freely after everything is secured.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=general_assembly'">Next Section</button>
                </div>
            `,
            "parts": [
                "4x M3x8 SHCS"
            ]
        },
        "boxturtle_general_assembly_step1": {
            "title": "",
            "content": `
                <div class="infoL">
                    <h3>BEVOR WIR FORTFAHREN...</h3>
                    <p>Dieser Abschnitt endet mit einer BoxTurtle, der bereit für die erste Überprüfung und Einrichtung ist. Der nächste Abschnitt behandelt die Fertigstellung der Verkleidungsteile.</p>
                    <p>In diesem Abschnitt wird jede Bahn einzeln zusammengebaut, beginnend mit Bahn 4 (ganz rechts) und dann rückwärts bis Bahn 1 (ganz links).</p>
                    <p>Ziel ist es, die geplante Kabelverlegung für die BoxTurtle darzustellen.</p>
                    <p class='extra-space'>Wenn Sie sich sicher in Ihren Fähigkeiten fühlen, können Sie alle 4 Bahnen eines jeden Schrittes auf einmal zusammenbauen. Andernfalls wird dieser Abschnitt Sie von einem Haufen Module zu einer funktionierenden BoxTurtle führen, auch wenn es etwas umständlich ist.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_trigger_retainers": {
            "title": "Hebel-Retainer",
            "description": `
                <p>Bauen Sie jeden D2F-Mikroschalter mit Hebel (vorbereitet) mit 2 M2x10-Selbstschneidschrauben ein, wie abgebildet.</p>
                <p><a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2F_W-Lever.png" target="_blank">Die Schalter sollten vor dem Einbau verkabelt sein.</a></p>
                <p>Sie benötigen vier davon.</p>
            `,
            "parts": [
                "[a]_feed_trigger_retainer_x4.stl",
                "8x M2x10-Selbstschneidschrauben",
                "4x D2F-L Mikroschalter (verkabelt)"
            ]
        },
        "boxturtle_general_assembly_remove_extrusion": {
            "title": "Extrusion Entfernen",
            "description": `
                <p>Entfernen Sie die beiden M5x16 Linsenkopfschrauben. Entfernen Sie die 220mm 2020-Extrusion aus dem Rahmen. Das AFC-Lite Board wird an dieser Extrusion befestigt, und es ist später einfacher, die Verkabelung vorzunehmen, wenn die Extrusion entfernt ist.</p>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_roll_nuts": {
            "title": "Nutensteine",
            "description": `
                <p>Schieben Sie die Nutensteine in die zuvor entfernte 220mm 2020-Extrusion. Die Ausrichtung spielt hier keine Rolle, achten Sie nur darauf, dass die Nutensteine im gleichen Kanal platziert werden. Der Abstand zwischen den Gewindelöchern beträgt 88 mm.</p>
            `,
            "parts": [
                "2x M3 Nutensteine"
            ]
        },
        "boxturtle_general_assembly_afc_mount": {
            "title": "AFC-Montage",
            "description": `
                <p>Stellen Sie sicher, dass die Schrittmotortreiber richtig eingesteckt sind. Je nach Revision der AFC-Lite-Platine, die Sie haben, könnten die Pins des Eingangsstromwahlschalters lang genug sein, um mit der gedruckten Halterung zu kollidieren. Sollten Sie die Pins mit einem Seitenschneider kürzen müssen, achten Sie darauf, die Lötstellen nicht zu beschädigen.</p>
                <p>Befestigen Sie die AFC-Lite-Platine mit 2 M3x8 Zylinderschrauben an der gedruckten Halterung. Diese werden in Plastik geschraubt. Achten Sie daher darauf, sie nicht zu fest anzuziehen.</p>
            `,
            "parts": [
                "afc_mount.stl",
                "2x M3x8 Zylinderschrauben (SHCS)",
                "1x AFC-Lite-Platine"
            ]
        },
        "boxturtle_general_assembly_step6": {
            "title": "",
            "content": `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>STOPP!</h3>
                    <p>Wenn Sie Ihre AFC-Lite noch nicht geflasht haben, ist jetzt der richtige Zeitpunkt dafür!</p>
                    <p>Sie sollten auch Ihre CANBUS- oder USB-+Stromkabel vorbereitet haben, um Ihre BoxTurtle mit Ihrem Drucker zu verbinden.</p>
                    <p>Nützliche Ressourcen, die Ihnen bei diesem Schritt helfen können, sind: das <a href="https://github.com/xbst/AFC-Lite/blob/master/Docs/AFC-Lite_Manual.pdf" target="_blank">AFC-Lite-Handbuch</a>, der <a href="https://canbus.esoterical.online/toolhead_flashing/common_hardware/AFC-Lite/README.html" target="_blank">Esoterical CAN Bus-Leitfaden</a>, der <a href="https://usb.esoterical.online/hardware_config/STM32/AFC_Lite.html" target="_blank">Esoterical USB-Leitfaden</a>, und <a href="https://github.com/EricZimmerman/VoronTools/blob/main/EBB_CAN.md" target="_blank">weitere Informationen zu CAN Bus</a>.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_afc_mounting": {
            "title": "AFC-Montage",
            "description": `
                <p><strong>Sie können diesen Schritt auch später durchführen.</strong></p>
                <p>Befestigen Sie die AFC-Lite mit zwei M3x10 Zylinderschrauben an der Extrusion. Der Abstand zwischen Profil-Ende und Board sollte ca. 34mm betragen.</p>
            `,
            "parts": [
                "2x M3x10 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_lane_4_spooler": {
            "title": "Lane 4 Spooler",
            "description": `
                <p>Suchen Sie den Spooler mit dem Lane 4 N20-Kabel (~515 mm) und setzen Sie ihn in das Fach der Lane 4. Es gibt Laschen an der Vorderseite des Spoolers, die in die Extrusion passen. Setzen Sie diese ein und schwenken Sie dann den Spooler in das Fach.</p>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_secure_lane_4_spooler": {
            "title": "Lane 4 Spooler Befestigen",
            "description": `
                <p>Sichern Sie den Spooler mit 2 M3x8 Zylinderschrauben.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_trigger_retainer_installation": {
            "title": "Hebel-Retainer Einbau",
            "description": `
                <p>Montieren Sie den Prep-Schalter für Lane 1 (155 mm Kabel) mit einer M3x8 Zylinderschraube und einer M3-Unterlegscheibe.</p>
                <p>Sichern Sie ihn an der Stelle, wo der Schalter ausgelöst ist, ohne den Hebel auf dem Spooler nach vorne zu drücken. Im Normal-Zustand sollte der Prep-Sensor geschlossen sein.</p>
            `,
            "parts": [
                "M3x8 Zylinderschraube (SHCS)",
                "M3 Unterlegscheibe"
            ]
        },
        "boxturtle_general_assembly_lane_4_extruder": {
            "title": "Lane 4 Extruder",
            "description": `
                <p><strong>HINWEIS:</strong> Einige Benutzer finden es einfacher, den Bowdenschauch (80mm; 3mm ID)  in den Extruder/Spooler einzubauen, bevor der Extruder an der Unterseite des Fachs befestigt wird. Dies wird ab hier nicht mehr erwähnt.</p>
                <p>Suchen Sie den Extruder für Lane 4 (Load-Sonsor Lane 4: 510mm Kabel, Motor Lane 4: 520mm Kabel).</p>
                <p>Sichern Sie den Lane 4 Extruder mit zwei M3x8 Zylinderschrauben. Achten Sie auf die Ausrichtung des Extruders.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_wire_route": {
            "title": "Kabelweg",
            "description": `
                <p>Hier wird die Verkabelung für Lane 2 dargestellt.</p>
                <p>Es gibt viele Kabelbinderpunkte an der Unterseite der Fächer. Die Kabel sollten aber erst am Ende gesichert werden. Sie können die Kabel für Lane 2 vorerst locker fixieren. Auf der nächsten Seite wird genau gezeigt, wo alle Kabel von Lane 2 in die AFC-Lite eingesteckt werden, um die Standard-AFC-Klipper-Konfiguration für eine schnelle Einrichtung zu verwenden.</p>
                <div class='wiring-key'>
                    <strong>LEGENDE:</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Stepper</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_step13": {
            "title": "",
            "content": `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_10_Lane_4_Wiring.jpg" alt="Wiring Guide">
                    <p>Dieses Bild zeigt die Anschlüsse, in die die Module von Lane 4 eingesteckt werden müssen, um der Standard-AFC-Klipper-Konfiguration für die BoxTurtle zu entsprechen.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_lane_3_spooler": {
            "title": "Lane 3 Spooler",
            "description": `
                <p>Suchen Sie den Spooler mit dem Lane 3 N20-Kabel (~415 mm) und setzen Sie ihn in das Fach der Lane 3. Es gibt Laschen an der Vorderseite des Spoolers, die in die Extrusion passen. Setzen Sie diese ein und schwenken Sie dann den Spooler in das Fach.</p>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_secure_lane_3_spooler": {
            "title": "Lane 3 Spooler Befestigen",
            "description": `
                <p>Sichern Sie den Spooler mit 2 M3x8 Zylinderschrauben.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_lane_3_extruder": {
            "title": "Lane 3 Extruder",
            "description": `
                <p>Suchen Sie den Extruder für Lane 3 (Load-Sonsor Lane 3: 410mm Kabel, Motor Lane 3: 420mm Kabel).</p>
                <p>Sichern Sie den Lane 3 Extruder mit zwei M3x8 Zylinderschrauben. Achten Sie auf die Ausrichtung des Extruders.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_step19": {
            "title": "",
            "content": `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_15_Lane_3_Wiring.jpg" alt="Wiring Guide">
                    <p>Dieses Bild zeigt die Anschlüsse, in die die Module von Lane 3 eingesteckt werden müssen, um der Standard-AFC-Klipper-Konfiguration für die BoxTurtle zu entsprechen.</p> 
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_hub_wiring": {
            "title": "Hub Kabelweg",
            "description": `
                <p>Hier wird die Verkabelung für das Hub dargestellt.</p>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_step21": {
            "title": "",
            "content": `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_17_Hub_Wiring.jpg" alt="Wiring Guide">
                    <p>Dieses Bild zeigt den Port, in den der Hub-Stecker eingesteckt werden muss, um der Standard-AFC Klipper-Addon-Konfiguration für die BoxTurtle zu entsprechen.</p> 
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_lane_2_spooler": {
            "title": "Lane 2 Spooler",
            "description": `
                <p>Suchen Sie den Spooler mit dem Lane 2 N20-Kabel (~315 mm) und setzen Sie ihn in das Fach der Lane 2. Es gibt Laschen an der Vorderseite des Spoolers, die in die Extrusion passen. Setzen Sie diese ein und schwenken Sie dann den Spooler in das Fach.</p>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_secure_lane_2_spooler": {
            "title": "Lane 2 Spooler Befestigen",
            "description": `
                <p>Sichern Sie den Spooler mit 2 M3x8 Zylinderschrauben.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_lane_2_extruder": {
            "title": "Lane 2 Extruder",
            "description": `
                <p>Suchen Sie den Extruder für Lane 2 (Load-Sonsor Lane 2: 310mm Kabel, Motor Lane 2: 320mm Kabel).</p>
                <p>Sichern Sie den Lane 2 Extruder mit zwei M3x8 Zylinderschrauben. Achten Sie auf die Ausrichtung des Extruders.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_step27": {
            "title": "",
            "content": `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_22_Lane_2_Wiring.jpg" alt="Wiring Guide">
                    <p>Dieses Bild zeigt die Anschlüsse, in die die Module von Lane 2 eingesteckt werden müssen, um der Standard-AFC-Klipper-Konfiguration für die BoxTurtle zu entsprechen.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_lane_1_spooler": {
            "title": "Lane 1 Spooler ",
            "description": `
                <p>Suchen Sie den Spooler mit dem Lane 1 N20-Kabel (~205 mm) und setzen Sie ihn in das Fach der Lane 1. Es gibt Laschen an der Vorderseite des Spoolers, die in die Extrusion passen. Setzen Sie diese ein und schwenken Sie dann den Spooler in das Fach.</p>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_secure_lane_1_spooler": {
            "title": "Lane 1 Spooler Befestigen",
            "description": `
                <p>Sichern Sie den Spooler mit 2 M3x8 Zylinderschrauben.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_lane_1_extruder": {
            "title": "Lane 1 Extruder",
            "description": `
                <p>Suchen Sie den Extruder für Lane 1 (Load-Sonsor Lane 1: 200mm Kabel, Motor Lane 1: 210mm Kabel).</p>
                <p>Sichern Sie den Lane 1 Extruder mit zwei M3x8 Zylinderschrauben. Achten Sie auf die Ausrichtung des Extruders.</p>
            `,
            "parts": [
                "2x M3x8 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_general_assembly_step32": {
            "title": "",
            "content": `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_26_Lane_1_Wiring.jpg" alt="Wiring Guide">
                    <p>Dieses Bild zeigt die Anschlüsse, in die die Module von Lane 1 eingesteckt werden müssen, um der Standard-AFC-Klipper-Konfiguration für die BoxTurtle zu entsprechen.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_step33": {
            "title": "",
            "content": `
                  <div class=wiring-guide>
                      <img class=wiring-guide-image src="/images/Step_27_TN_Wiring.jpg" alt="Wiring Guide">
                      <p>Dieses Bild zeigt die Anschlüsse, in die die Schalter des Buffers eingesteckt werden müssen, um der Standard-AFC-Klipper-Konfiguration für die BoxTurtle zu entsprechen. Die Kabel für den Puffer können durch das untere Loch im rechten hinteren Skirt geführt werden, wenn sie nicht mit dem Board des Druckers verbunden werden.</p>
                      <p>Sind Sie unsicher, welcher Stecker wofür ist? Hier ist ein <a href="https://github.com/ArmoredTurtle/AFC-Klipper-Add-On/blob/main/docs/AFC_buffer.md" target="_blank">Dokument</a> das Ihnen hilft, den Buffer und seine Funktionen zu verstehen.</p>
                  </div>
              `,
            "parts": []
        },
        "boxturtle_general_assembly_step34": {
            "title": "",
            "content": `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_28_RGB.jpg" alt="Wiring Guide">
                    <p>Dieses Bild zeigt die Anschlüsse, in die die Status-LEDs eingesteckt werden müssen, um der Standard-AFC-Klipper-Konfiguration für die BoxTurtle zu entsprechen. Nur das Kabel der Status-LED der Lane 1 wird am Board angesteckt.</p>
                </div>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_board_install": {
            "title": "Board Installation",
            "description": `
                <p>Bauen Sie die 220 mm 2020 Extrusion mit dem darauf montierten AFC-Lite wieder ein, und verwenden Sie dabei zwei M5x16 BHCS-Schrauben.</p>
                <p>Die Anzeige-LEDs der Lanes 2 bis 4 sind mit der LED in Lane 1 in Serie verkabelt. Die LED der Lane 1 wurde im vorigen Schritt mit dem Baord verbunden. Der LED von Lane 4 hat einen zusätzlichen Stecker. Sie können ihn mit einem Kabelbinder am Boden des Fachs der Lane 4 befestigen.</p>
            `,
            "parts": [
                "2 M5x16 BHCS"
            ]
        },
        "boxturtle_general_assembly_bowden_tubes": {
            "title": "Bowdenschläuche",
            "description": `
                <p><strong>ES GIBT ZWEI VERSCHIEDENE INNENDURCHMESSER FÜR DEN BOWDENSCHLAUCH, DIE IN DER BOXTURTLE VERWENDET WERDEN. EIN 3MM INNENDURCHMESSER BOWDENSCHLAUCH MUSS VOR DEM EXTRUDER (Spooler - Extruder) VERWENDET WERDEN. EIN 2MM BOWDENSCHLAUCH MUSS NACH DEM EXTRUDER VERWENDET WERDEN.</strong></p>
                <p>Falls dies nicht während der Extruder-Installation gemacht wurde, setzen Sie einen 3mm ID x 80mm Bowdenschlauch in die Spooler-ECAS-Kupplung ein und biegen Sie ihn vorsichtig, um ihn in die Extruder-ECAS-Kupplung einzuführen. Achten Sie darauf, dass der Bowdenschlauch gut in beiden Kupplungen sitzt.</p>
                <p>Für den 2mm ID Bowdenschlauch wird DRINGEND EMPFOHLEN, die Enden um den Innendurchmesser zu fasen. Installieren Sie die 2mm ID Bowdenschlauchlängen wie unten beschrieben.</p>
                <p>Es gibt verschiedene Möglichkeiten, um den Bowden-Schlauch anzufasen. Zu den gängigen Methoden gehören:</p>
                <ul>
                    <li>Händisch mit einem ~6-mm-Bohrer</li>
                    <li>Drehen eines Bastelmessers im Bowdenschlauch</li>
                    <li>Verwenden eines Entgratwerkzeugs</li>
                </ul>
                <p><strong>VERGEWISSERN SIE SICH VOR DEM EINSETZEN, DASS SICH KEINE PTFE-RESTE MEHR IM SCHLAUCH BEFINDEN.</strong></p>
                <p><strong>NOTE:</strong> The PTFE lengths between the extruder and hub are suggested starting lengths - you may need to trim a little bit off in order for it to have a smooth bend. The filament path should be a smooth curve without tight corners or kinks.</p>
            `,
            "parts": [
                "4x 80mm 3mm ID Bowdenschlauch",
                "2x ~101mm 2mm ID Bowdenschlauch - Innere Lanes",
                "2x ~171mm 2mm ID Bowdenschlauch - Äußere Lanes"
            ]
        },
        "boxturtle_general_assembly_tn": {
            "title": "TN",
            "description": `
                <p>Verwenden Sie ein Stück 2mm ID Bowdenschlauch, um den Hub der BoxTurtle mit dem TN-Buffer zu verbinden. Denken Sie daran, dass der 2mm ID Bowdenschlauch für einen reibungslosen Betrieb gefast werden sollte.</p>
                <p>Die Länge des Schlauchs hängt davon ab, wie Sie Ihre BoxTurtle mit Ihrem Drucker einrichten möchten. Falls Sie sich unsicher sind: Für den Anfang sollte von einer Länge von etwa 250 mm ausgegangen werden.</p>
                <p>Die Pfeile auf dem TN zeigen zum Werkzeugkopf. Der Innendurchmesser des Bowdenschlauchs vom TN-Buffer zum Werkzeugkopf spielt keine Rolle. Meistens wird ein 2,5mm ID Schlauch verwendet.</p>
                <p>Hier ist ein <a href="https://github.com/ArmoredTurtle/TurtleNeck/blob/main/STLs/TN_horizontal%20mount.stl" target="_blank">Druckteil</a>, mit dem Sie den Buffer an einer 2020-Extrusion befestigen können.</p>
            `,
            "parts": [
                "2mm ID Bowdenschlauch"
            ]
        },
        "boxturtle_general_assembly_tn_bowden_tube": {
            "title": "TN Bowdenschlauch",
            "description": `
                <p>Führen Sie den Bowden-Schlauch von Ihrem AFC vollständig durch den TN.</p>
                <p><strong>Hinweis:</strong> Der Schlauch sollte gerade noch so lang sein, den Schlitten aus dem Gehäuse nicht herauszudrücken.</p>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_idlers": {
            "title": "Idler",
            "description": `
                <p>Setzen Sie die Lager auf die Enden der Idler. Diese sollten durch Reibung halten.</p>
            `,
            "parts": [
                "8x MR148zz Lager"
            ]
        },
        "boxturtle_general_assembly_idler_installation": {
            "title": "Idler-Einbau",
            "description": `
                <p>Setzen Sie die Idler in die Fächer. Die hinterste Position ist für die meisten 200mm Filamentspulen geeignet.</p>
            `,
            "parts": []
        },
        "boxturtle_general_assembly_step42": {
            "title": "",
            "content": `
                <div class="infoL">
                    <h3>*PANIK*</h3>
                    <p>Bevor die letzten Verkleidungen an der BoxTurtle installiert werden, sollten Sie sie mit dem Drucker verbinden und die Funktionalität aller Komponenten überprüfen.</p>
                    <p class='extra-space'>Die Anleitung für die Erstinbetriebnahme, die alles enthält, was Sie wissen müssen, um Ihre BoxTurtle zum Laufen zu bringen, finden Sie <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/Initial_Startup.md" target="_blank">hier</a>.</p>
                    <div class='info-submanual-nav-buttons'>
                        <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menü</button>
                        <button onclick="location.href='manual.html?manual=boxturtle&subManual=final'">Nächster Abschnitt</button>
                    </div>
                </div>
            `,
            "parts": []
        },
        "boxturtle_final_heatset_inserts": {
            "title": "Gewindeeinsätze",
            "description": `
                <p>Sie benötigen 4 Gewindeeinsätze, um die Montage abzuschließen.</p>
                <p>Setzen Sie den Gewindeeinsatz wie dargestellt ein. Dies ist der einzige Schritt in diesem Abschnitt, in dem Gewindeeinsätze benötigt werden.</p>
            `,
            "parts": [
                "4x solid_corner_cover_x4.stl",
                "4x M3 Gewindeeinsatz"
            ]
        },
        "boxturtle_final_feet": {
            "title": "Füße",
            "description": `
                <p>Der hier dargestellte Montage-Schritt ist bei allen vier Ecken gleich. Legen Sie eine M5 Mutter in die gedruckte Ecke ein, und schrauben Sie den TPU-Fuß und den [a]_foot Druckteil mit einer M5x16 Linsenkopfschraube und einer M5 Unterlegscheibe fest.</p>
            `,
            "parts": [
                "4x [a]_foot_x4.stl",
                "4x foot_tpu_x4.stl",
                "4x M5x16 Linsenkopfschrauben (BHCS)",
                "4x M5-Unterlegscheiben",
                "4x M5-Sechskantmuttern"
            ]
        },
        "boxturtle_final_corner_covers": {
            "title": "Eckabdeckungen",
            "description": `
                <p>Der hier dargestellte Montage-Schritt ist bei allen vier Ecken gleich.</p>
                <p>Befestigen Sie die Eckabdeckung mit einer M3x6 Zylinderschraube.</p>
            `,
            "parts": [
                "4x M3x6 Zylinderschrauben (SHCS)"
            ]
        },
        "boxturtle_final_inlets": {
            "title": "Einlässe",
            "description": `
                <p>Sie benötigen 4 davon, um die Montage abzuschließen. Setzen Sie den Feeder auf den Bowden-Schlauch.</p>
                <p><strong>Hinweis:</strong> Es wird empfohlen, diese vom BoxTurtle zu entfernen, wann immer es für Wartungsarbeiten auf die Oberseite gedreht werden muss.</p>
            `,
            "parts": [
                "4x [a]_feeder_x4.stl",
                "4x 3 mm ID x 50 mm Bowdenschlauch"
            ]
        },
        "boxturtle_final_inlet_bowden": {
            "title": "Filament-Einlass",
            "description": `
                <p>Der hier dargestellte Montage-Schritt ist bei allen vier Spoolern gleich.</p>
                <p>Setzen Sie den Bowden-Einlass in den Spooler ein.</p>
            `,
            "parts": []
        },
        "boxturtle_final_step6": {
            "title": "",
            "content": `
                <div class="info">
                    <h3>Sie sind fertig!!!</h3>
                    <p><strong>Das war’s! 😊 Na los! Drucken Sie irgendwas cooles!</strong></p>
                </div>
                <div class="infoL">
                    <p class='extra-space'><i>In case you missed it, the initial startup guide containing everything you need to know to get your BoxTurtle up and running can be found <a href="https://www.armoredturtle.xyz/docs/boxturtle/initial_startup/01-overview.html" target="_blank">here</a>.</i></p>
                </div>
            `,
            "parts": []
        }
    }
}
