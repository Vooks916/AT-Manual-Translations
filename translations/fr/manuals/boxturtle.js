export default {
    name: "BoxTurtle Manuals",
    subManuals: {
        introduction: {
            name: "1. BoxTurtle Introduction"
        },
        frame: {
            name: "2. Cadre BoxTurtle"
        },
        extruders: {
            name: "3. Extrudeurs BoxTurtle"
        },
        respoolers: {
            name: "4. Respoolers"
        },
        turtleneck: {
            name: "5. TurtleNeck"
        },
        general_assembly: {
            name: "6. Assemblage général"
        },
        final: {
            name: "7. Final"
        }
    },
    steps: {
        boxturtle_introduction_step1: {
            title: "",
            content: `
                <div class="infoL">
                    <h3>INTRODUCTION</h3>
                    <p>This manual will walk you through the process of preparing for and assembling a BoxTurtle AFC by Armored Turtle. The introduction provides an overview of how to use this manual, along with guidance on the key decisions you'll need to make before printing your parts.</p>
                    <p class='extra-space'>Before beginning, please take note of a few <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/ERRATA.md" target="_blank">minor issues</a> that we were unable to correct in time for the v1.0 release.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step2: {
            title: "Basic Use",
            description: `
                <p>This manual presents each step of the assembly process in 3D space to help avoid confusion and clearly illustrate the correct part orientations.</p>
                <p>At the top of the page, you'll find three options: you can select different colors for your printed parts and frame to make part identification easier.</p>
                <p>Here is a render for you to explore. Left-click to rotate the view, right-click to pan, and use the scroll wheel to zoom in and out.</p>
            `,
            parts: []
        },
        boxturtle_introduction_step3: {
            title: "Note: BoxTurtle Enclosure",
            description: `
                <p>If you plan to integrate the optional BoxTurtle Enclosure into your build, it is highly recommended that you first assemble the BoxTurtle unit in its standard configuration and confirm that it is fully operational before proceeding with the enclosure installation.</p>
                <p>During this initial build phase, you will need to install the printed corner components, as they provide essential structural support in the absence of the enclosure. However, please note that these printed corners will ultimately be removed and replaced by enclosure-specific components during the enclosure installation process. For this reason, you should avoid installing any associated cosmetic trim pieces for the corners at this time, as they will not be compatible with the final enclosed configuration and may interfere with subsequent steps.</p>
            `,
            parts: []
        },
        boxturtle_introduction_step4: {
            title: "",
            content: `
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
            parts: []
        },
        boxturtle_introduction_step5: {
            title: "",
            content: `
                <div class="infoL">
                    <h3>PRINTED PARTS NOTE</h3>
                    <p>This is NOT a <a href="https://vorondesign.com/" target="_blank">VORON Design</a> project, we strongly recommend that you run a profile that is specific to BoxTurtle. Voron parts profiles are not recommended for BoxTurtle printed parts, as the tolerance expectations are different.</p>
                    <p class="extra-space">Specifically, make sure you are tuning for skew and filament shrinkage. An excellent tool for this is Vector3D's <a href="https://vector3d.shop/products/califlower-calibration-tool-mk2" target="_blank">Califlower Mk2</a> (yes, it's worth the $14). Do this <i>before</i> you print 1.5-2kg worth of filament for BoxTurtle parts!</p>
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step6: {
            title: "",
            content: `
                <div class="info">
                    <h3>PART PRINTING GUIDELINES</h3>
                    <p>These are the print settings we recommend you follow in order to have the best chance at success with your parts.</p>
                </div>
            
                <div class="print-settings">
                    <div class="print-setting">
                        <h4>3D PRINTING PROCESS</h4>
                        <p>Fused Deposition Modeling (FDM)</p>
                    </div>
                    <div class="print-setting">
                        <h4>MATERIALS</h4>
                        <p class='p-no-space'><strong>Primary:</strong> ~1.4kg ABS/PLA</p>
                        <p class='p-no-space'><strong>Accent:</strong> ~0.3kg ABS/PLA</p>
                        <p class='p-no-space'><strong>TPU:</strong> ~60g 95A or softer</p>
                        <p class='p-no-space'><strong>Clear:</strong> ~12g any material</p>
                    </div>
                    <div class="print-setting">
                        <h4>LAYER HEIGHT</h4>
                        <p>Recommended: 0.2mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>INFILL TYPE</h4>
                        <p>Recommended: Gyroid</p>
                    </div>
                    <div class="print-setting">
                        <h4>INFILL PERCENTAGE</h4>
                        <p>Recommended: 20%</p>
                    </div>
                    <div class="print-setting">
                        <h4>WALLS/TOP/BOTTOM LAYERS</h4>
                        <p>Recommended: 4</p>
                    </div>
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step7: {
            title: "",
            content: `
                <div class=info>
                    <h3>FILE NAMING</h3>
                    <p>By this time you should have already downloaded the STL files from the <a href="/stl-configurator.html" target="_blank">STL Configurator</a> or <a href="https://github.com/ArmoredTurtle/BoxTurtle" target="_blank">GitHub</a>. This is how to use our naming convention.</p>
                </div>
                <div class="naming-conventions">
                    <div class="naming-convention">
                        <h4>PRIMARY COLOR</h4>
                        <h6>Example: body.stl</h6>
                        <p>These files will have nothing special at the start of the filename.</p>
                    </div>
                    <div class="naming-convention">
                        <h4>ACCENT COLOR</h4>
                        <h6>Example: [a]_turtle_box.stl</h6>
                        <p>We have added “[a]” to the front of any STL file that is intended to be printed with accent color.</p>
                    </div>
                    <div class="naming-convention">
                    <h4>CLEAR PART</h4>
                    <h6>Example: [c]_led_diffuser.stl</h6>
                    <p>We have added “[c]” to the front of any STL file that is intended to be printed with clear filament.</p>
                </div>
                    <div class="naming-convention">
                        <h4>QUANTITY REQUIRED</h4>
                        <h6>Example: extruder_housing_x4.stl</h6>
                        <p>If any file ends with “_x#”, that is telling you the quantity of that part required to build the machine.</p>
                    </div>
                </div>
                <div class=info>
                    <h3>HOW TO GET HELP</h3>
                    <p>If you need assistance with your build, we’re here to help. Head on over to our <a href="https://discord.gg/AaVHfeYgw2" target="_blank">Discord Server</a> and post your questions. This is our primary medium to get help and we have a great community that can assist you if you get stuck.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step8: {
            title: "",
            content: `
                <div class="infoL">
                    <h3>ECAS-04 (the worst part)</h3>
                    <p>The bowden couplers used in BoxTurtle are meant to be tight, your tolerances aren’t bad if they take some persuasion to insert. You do NOT want these coming out of the printed parts.</p>
                    <p>Reference this assembly photo for these. Typically, the blue plunger will need to be inserted into the collet body.</p>
                    <p>The rubber seal will need to be removed from the seal retainer. Be sure that the retainer is left on the collet body. At no time, in any Armored Turtle project, will the rubber seal be utilized. Discard these appropriately.</p>
                    <img class='ecas-preparation' src="/images/ecas-preparation.webp" alt="ECAS Preparation">
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step9: {
            title: "",
            content: `
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
            parts: []
        },
        boxturtle_introduction_step10: {
            title: "",
            content: `
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
            parts: []
        },
        boxturtle_frame_step1: {
            title: "Inserts filetés",
            description: `
                <p>Installez un insert fileté comme illustré.</p>
                <p><strong>Note:</strong> Assurez-vous de choisir une température adaptée au matériau sélectionné pour les pièces imprimées, soyez prudent ! Les choses chaudes sont chaudes...</p>
            `,
            parts: [
                "rear_skirt_center_hub.stl",
                "1x insert fileté M3"
            ]
        },
        boxturtle_frame_step2: {
            title: "Préalable",
            description: `
                <p>Notez les multiples orientations dans lesquelles les extrudeurs peuvent être installés sur la face inférieure des plateaux.</p>
                <p>Si vous utilisez des plateaux No_Hardware, vous disposerez de suffisamment d'inserts pour remplir les quatre trous de montage de chaque plateau.</p>
                <p>Pour plus de simplicité, le manuel couvrira l'installation des extrudeurs parallèlement aux plateaux pour la suite.</p>
            `,
            parts: []
        },
        boxturtle_frame_step3: {
            title: "Plus d'inserts filetés",
            description: `
                <p>Installez les inserts filetés comme illustré.</p>
                <p><strong>Note:</strong> Ceci est la dernière fois que cette section nécessite l'installation d'inserts filetés. Assurez-vous d'éteindre votre fer à souder et de le ranger dans un endroit sûr.</p>
                <p><strong>Si vous utilisez les plateaux type No_Hardware,</strong> passez directement à la page 5 après l'installation des inserts au-dessous des plateaux.</p>
            `,
            parts: [
                "4 Cassettes de votre choix",
                "28x inserts filetés M3 (12 seulement si utilisation des plateaux No_Hardware)"
            ]
        },
        boxturtle_frame_step4: {
            title: "Attachez les \"barrettes\"",
            description: `
                <p>Fixez les "barrettes" aux plateaux en utilisant des vis M3x8 SHCS comme illustré.</p>
            `,
            parts: [
                "4x bar_long.stl",
                "8x bar_short.stl",
                "16x vis M3x8 SHCS"
            ]
        },
        boxturtle_frame_step5: {
            title: "Installez l'interrupteur D2HW",
            description: `
                <p>Insérez un roulement MR63ZZ suivi du micro-interrupteur D2HW comme indiqué. Fixez avec une vis SHCS M3x10.</p>
                <p>Attention à ne pas trop serrer cette vis, elle est filetée directement dans le plastique.</p>
                <p>Ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2HW-C201H.png" target="_blank">switch is wired</a> before installation. Refer to the <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/BoxTurtle_Wiring.md" target="_blank">wiring guide</a> to determine which lengths to use.</p>
                <p><strong>Note:</strong> Il est maintenant temps de s'ASSURER que vos chemins de filaments sont fluides et dégagés. Vous constaterez qu’un foret de 2 mm utilisé <i>manuellement</i> peut nettoyer les zones à problèmes si vous en avez.</p>
            `,
            parts: [
                "[a]_hub.stl",
                "1x D2HW C201H microswitch",
                "1x MR63ZZ bearing",
                "1x M3x10 SHCS"
            ]
        },
        boxturtle_frame_step6: {
            title: "ECAS04 Couplers",
            description: `
                <p>Insert 1 ECAS04 coupler as shown.</p>
                <p><strong>Note:</strong> They are meant to be tight! Pressing against a table with the hub_tool_step1 may help secure them. Using a persuasion tool (hammer) gently, is also a viable option.</p>
            `,
            parts: [
                "hub_tool_step1.stl",
                "1x ECAS04 bowden coupler with rear rubber bumper removed"
            ]
        },
        boxturtle_frame_step7: {
            title: "ECAS04 Couplers",
            description: `
                <p>Insert 4 ECAS04 couplers as shown.</p>
                <p><strong>Note:</strong> They are meant to be tight! Pressing against a table with the hub_tool_step2 may help secure them. Using a persuasion tool (hammer) gently, is also a viable option.</p>
            `,
            parts: [
                "hub_tool_step2.stl",
                "4x ECAS04 bowden couplers with rear rubber bumper removed"
            ]
        },
        boxturtle_frame_step8: {
            title: "Retrait des supports",
            description: `
                <p>Retirez les supports comme indiqué et jeter de manière appropriée.</p>
            `,
            parts: [
                "right_rear_skirt.stl"
            ]
        },
        boxturtle_frame_step9: {
            title: "Installation du ventilateur",
            description: `
                <p>Installez le ventilateur en vous assurant qu'il fera circuler l'air à l'intérieur du BoxTurtle. Fixez avec 4 vis M3x16 BHCS.</p>
                <p>Vous vissez directement dans du plastique, ne serrez pas trop.</p>
                <p><strong>Note: </strong>The original 3010 fan on the BOM was mistakenly specified as a 12K RPM fan, and can be quite loud. The controller  fan is 100% optional and can be omitted from installation, or replaced with an alternative, slower fan.</p>
            `,
            parts: [
                "1x ventilateur 3010 5V",
                "4x vis M3x16 BHCS"
            ]
        },
        boxturtle_frame_step10: {
            title: "Retrait des supports",
            description: `
                <p>Retirez les supports imprimés comme indiqué, un petit tournevis à tête plate peut être utilisé pour passer derrière eux en faisant levier vers l'extérieur.</p>
            `,
            parts: [
                "4x corner_printed.stl"
            ]
        },
        boxturtle_frame_step11: {
            title: "Montage arrière des profilés",
            description: `
                <p>Vissez deux vis BHCS M5x16 à travers le coin imprimé dans les profilés de 360 mm, comme indiqué.</p>
                <p><strong>N'oubliez pas :</strong> comme indiqué en introduction, les flèches bleues signifient de ne pas serrer complètement ces vis immédiatement.</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x vis M5x16 BHCS",
                "2x profilés 2020 de 360 mm"
            ]
        },
        boxturtle_frame_step12: {
            title: "Montage arrière des profilés",
            description: `
                <p>Faites attention à l'orientation lorsque vous insérez les pièces du panneau arrière dans les profilés, comme illustré.</p>
            `,
            parts: [
                "right_rear_skirt.stl",
                "rear_skirt_center_hub.stl",
                "left_rear_skirt.stl"
            ]
        },
        boxturtle_frame_step13: {
            title: "Montage arrière des profilés",
            description: `
                <p>Vissez deux vis BHCS M5x16 à travers le coin imprimé dans les profilés de 360 mm, comme indiqué.</p>
                <p>Vous pouvez maintenant serrer complètement les quatre vis comme indiqué.</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x vis M5x16 BHCS"
            ]
        },
        boxturtle_frame_step14: {
            title: "Montage arrière des profilés",
            description: `
                <p>Insérez le hub dans l'emplacement prévu et fixez-le avec une vis SHCS M3x10 comme indiqué.</p>
            `,
            parts: [
                "[a]_hub_(type).stl",
                "1x vis M3x10 SHCS"
            ]
        },
        boxturtle_frame_step15: {
            title: "Montage avant des profilés",
            description: `
                <p>Vissez deux vis BHCS M5x16 à travers le coin imprimé dans les profilés de 360 mm, comme indiqué.</p>
                <p><strong>N'oubliez pas :</strong> comme indiqué en introduction, les flèches bleues signifient de ne pas serrer complètement ces vis immédiatement.</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x vis M5x16 BHCS",
                "2x profilés 2020 de 360 mm"
            ]
        },
        boxturtle_frame_step16: {
            title: "Montage avant des profilés",
            description: `
                <p>Faites attention à l'orientation lorsque vous insérez les pièces du panneau avant dans les profilés, comme illustré.</p>
            `,
            parts: [
                "2x front_skirt.stl"
            ]
        },
        boxturtle_frame_step17: {
            title: "Montage avant des profilés",
            description: `
                <p>Vissez deux vis BHCS M5x16 à travers le coin imprimé dans les profilés de 360 mm, comme indiqué.</p>
                <p>Vous pouvez maintenant serrer complètement les quatre vis comme indiqué.</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x vis M5x16 BHCS"
            ]
        },
        boxturtle_frame_step18: {
            title: "Montage des côtés des profilés",
            description: `
                <p>Vissez quatre vis BHCS M5x16 à travers le coin imprimé dans les profilés de 220 mm, comme indiqué.</p>
            `,
            parts: [
                "4x profilés 2020 de 220 mm",
                "4x vis M5x16 BHCS"
            ]
        },
        boxturtle_frame_step19: {
            title: "Montage des côtés des profilés",
            description: `
                <p>Insérez les pièces des panneaux latéraux dans les profilés comme indiqué en tenant compte de l'orientation.</p>
            `,
            parts: [
                "4x side_skirt.stl"
            ]
        },
        boxturtle_frame_step20: {
            title: "Plateaux",
            description: `
                <p>Insérez les plateaux dans le profilé arrière comme indiqué en tenant compte de l'orientation.</p>
                <p><strong>Note:</strong> Vous trouverez peut-être plus simple de les poser à l'envers sur la table jusqu'à ce que vous les sécurisiez à l'étape suivante.</p>
            `,
            parts: [
                "4x plateaux"
            ]
        },
        boxturtle_frame_step21: {
            title: "Assemblage du tout",
            description: `
                <p>Fixez le panneau avant au reste du cadre avec quatre vis M5x16 BHCS comme illustré.</p>
                <p>Assurez-vous que les plateaux sont bien insérés dans les profilés supérieurs avant et arrière.</p>
                <p><strong>N'oubliez pas :</strong> comme indiqué en introduction, les flèches bleues signifient de ne pas serrer complètement ces vis immédiatement.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">Menu BoxTurtle</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=extruders'">Section suivante</button>
                </div>
            `,
            parts: [
                "4x vis M5x16 BHCS"
            ]
        },
        boxturtle_extruders_step1: {
            title: "Avant de débuter...",
            description: `
                <p>Vous aurez besoin de <strong>quatre extrudeurs</strong> en tout pour assembler la BoxTurtle. Vous pouvez en construire un à la fois, ou les quatre en même temps, assurez-vous simplement d'en avoir quatre avant de continuer! Nous vous le rappellerons à nouveau à la fin de cette section.</p>
            `,
            parts: []
        },
        boxturtle_extruders_step2: {
            title: "Inserts filetés",
            description: `
                <p>Installez six inserts filetés comme illustré.</p>
                <p><strong>Note:</strong> Assurez-vous de choisir une température adaptée au matériau sélectionné pour les pièces imprimées, soyez prudent ! Les choses chaudes sont chaudes...</p>
                <p><strong>Note:</strong> Ceci est la dernière fois que cette section nécessite l'installation d'inserts filetés. Assurez-vous d'éteindre votre fer à souder et de le ranger dans un endroit sûr.</p>
            `,
            parts: [
                "motor_plate_x4.stl",
                "extruder_housing_x4.stl",
                "6x inserts filetés M3"
            ]
        },
        boxturtle_extruders_step3: {
            title: "Micro-interrupteur D2HW",
            description: `
                <p>Déposez le roulement dans sa fente en s'assurant qu'il glisse librement. Insérez le micro-interrupteur fermement derrière.</p>
                <p>Ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2HW-C201H.png" target="_blank">switches are wired</a> before installation.</p>
                <p><strong>Note:</strong> Now is the time to be SURE that your filament pathways are clear and unobstructed. You may find that a 2mm drill bit <i>by hand</i> can clean up trouble areas if you have them.</p>
            `,
            parts: [
                "roulement à billes MR63ZZ",
                "micro-interrupteur D2HW-C201H"
            ]
        },
        boxturtle_extruders_step4: {
            title: "Montage de pignon d'entraînement",
            description: `
                <p>Assemblez le pignon d'entraînement comme illustré.</p>
                <p><strong>Note:</strong> Ne serrez pas la vis sans tête pour le moment.</p>
            `,
            parts: [
                "2x roulements à billes MR85",
                "axe engrenage 50 dents",
                "engrenage d'entraînement"
            ]
        },
        boxturtle_extruders_step5: {
            title: "Insertion du pignon d'entraînement",
            description: `
                <p>Insérez l'engrenage d'entraînement de l'extrudeur dans le boîtier de l'extrudeur comme indiqué.</p>
            `,
            parts: []
        },
        boxturtle_extruders_step6: {
            title: "Plaque moteur",
            description: `
                <p>Installez la plaque du moteur sur le boîtier de l'extrudeur comme indiqué avec trois vis SHCS M3x8.</p>
                <p>Taraudez une vis SHCS M3x8 sur le côté jusqu'à ce qu'elle touche le fond.</p>
            `,
            parts: [
                "4x vis M3x8 SHCS"
            ]
        },
        boxturtle_extruders_step7: {
            title: "Alignement du pignon d'entraînement",
            description: `
                <p>Insérez in morceau de filament pour s'assurer que le pignon est correctement aligné. Serrez la vis sans tête.</p>
                <p><strong>Note:</strong> C'est le moment d'utiliser de la Loctite si elle n'a pas été pré-appliquée sur la vis sans tête.</p>
                <p>Vérifiez que le capteur de filament émet un clic audible lorsque le filament y est inséré.</p>
            `,
            parts: [
                "morceau de filament"
            ]
        },
        boxturtle_extruders_step8: {
            title: "Coupleur ECAS",
            description: `
                <p>Installez un coupleur Bowden ECAS à chaque extrémité de l'extrudeur comme indiqué.</p>
                <p><strong>Note:</strong> Ceux-ci sont censés être serrés, vous pouvez les poser à plat sur la table et y appuyer les pièces imprimées.</p>
            `,
            parts: [
                "2x coupleurs ECAS04 avec le connecteur interne retiré"
            ]
        },
        boxturtle_extruders_step9: {
            title: "Retrait du support",
            description: `
                <p>Retirez le support imprimé avec la pièce comme illustré.</p>
            `,
            parts: [
                "[a]_guidler_x4.stl"
            ]
        },
        boxturtle_extruders_step10: {
            title: "Roue libre",
            description: `
                <p>Assemblez la roue libre en plaçant les 2 roulements à aiguilles dans celle-ci et insérez la goupille de 20 mm à l'intérieur de l'ensemble.</p>
                <p><strong>Note:</strong> Il est maintenant temps de lubrifier les roulements à aiguilles.</p>
                <p>Enfoncez fermement l'ensemble de roue libre dans le guide, comme illustré. Attention à l'orientation !</p>
            `,
            parts: [
                "2x roulements à aiguilles",
                "goupille de 20 mm",
                "roue libre"
            ]
        },
        boxturtle_extruders_step11: {
            title: "Installation du guide roue libre",
            description: `
                <p>Installez le guide à l'aide d'une vis M3x30 BHCS comme illustré. Ne serrez pas trop cette vis, le guide devant pouvoir encore se balancer librement.</p>
            `,
            parts: [
                "vis M3x30 BHCS"
            ]
        },
        boxturtle_extruders_step12: {
            title: "Tendeur",
            description: `
                <p>Fixez le tendeur à travers le guide jusqu'à ce que le ressort s'enclenche complètement. Tournez encore deux tours et demi.</p>
            `,
            parts: [
                "ensemble tendeur"
            ]
        },
        boxturtle_extruders_step13: {
            title: "Anti-écrasement",
            description: `
                <p>Insérez un morceau de filament dans l'extrudeur et ajustez la pression en jouant avec la vis anti-écrasement.</p>
                <p>Here is a <a href="https://www.youtube.com/watch?v=L1gxBCiE0pk" target="_blank">helpful video by Dr. Dave</a> on setting anti-squish appropriately.</p>
                <p><strong>Note:</strong> Les engrenages de l'extrudeur doivent avoir une bonne morsure dans le filament, tout doit tourner en douceur lorsque vous faites passer le filament. La vis anti-écrasement DOIT être réglée car cet extrudeur peut vraiment écraser le filament.</p>
                <p>Il est maintenant temps de s’assurer que tout est correctement réglé pour un fonctionnement fluide.</p>
            `,
            parts: [
                "Morceau de filament"
            ]
        },
        boxturtle_extruders_step14: {
            title: "Moteur pas à pas",
            description: `
                <p>Placez le moteur pas à pas sur le boîtier de l'extrudeur. Fixez avec des vis SHCS M3x8. Ne pas oublier la rondelle M3 du côté réglable comme indiqué.</p>
                <p>Refer to the <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/BoxTurtle_Wiring.md" target="_blank">wiring guide</a> to determine which lengths to use. The relative lengths of the stepper motor wires should match those of your microswitch.</p>
                <p><strong>Note:</strong> La flèche bleue indique de ne pas serrer complètement cette vis à ce moment-là comme indiqué en introduction.</p>
            `,
            parts: [
                "2x vis M3x8 SHCS",
                "1x rondelle M3",
                "moteur pancake Nema 14 36"
            ]
        },
        boxturtle_extruders_step15: {
            title: "Ajustement du jeu",
            description: `
                <p>Assurez-vous que le jeu entre l'engrenage du moteur et celui de 50 dents est réglé de manière appropriée. Fixez la vis de réglage comme indiqué.</p>
                <p>Here is a <a href="https://www.youtube.com/watch?v=ly22qmB3NxE" target="_blank">helpful video by Dr. Dave</a> on setting backlash appropriately.</p>
                <p>Attachez les fils du moteur au corps de l’extrudeur comme illustré.</p>
            `,
            parts: [
                "collier de serrage"
            ]
        },
        boxturtle_extruders_step16: {
            title: "Rappel amical!",
            description: `
                <p>Vous avez besoin de <strong>quatre extrudeurs</strong> au total pour assembler votre BoxTurtle. Avant de passer à la section suivante, assurez-vous de disposer de quatre unités d'extrudeurs.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">Menu BoxTurtle</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=respoolers'">Section suivante</button>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step1: {
            title: "",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>VÉRIFICATIONS PRÉALABLES!</h3>
                    <p>Vérifiez l'ajustement des roulements MR148ZZ sur l'arbre de 80 mm et utilisez un foret et du papier de verre si l'ajustement est trop serré.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step2: {
            title: "Avant de débuter...",
            description: `
                <p>Vous aurez besoin de <strong>quatre rembobineurs</strong> au total pour assembler votre BoxTurtle. Vous pouvez en construire un à la fois, ou les quatre en même temps, assurez-vous d'en avoir quatre avant de passer à autre chose! Nous vous le rappellerons à nouveau à la fin de cette section.</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step3: {
            title: "Retrait des supports",
            description: `
                <p>Retirez les supports.</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "frame_left_x4.stl",
                "motor_mount_x4.stl"
            ]
        },
        boxturtle_respoolers_step4: {
            title: "Inserts filetés",
            description: `
                <p>Installez cinq inserts filetés comme indiqué.</p>
                <p>Remarque: assurez-vous de choisir une température appropriée pour le matériau des pièces imprimées, soyez prudent! Quand c'est chaud, c'est chaud...</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "frame_left_x4.stl",
                "motor_mount_x4.stl",
                "gearbox_cover_x4.stl",
                "5x Inserts filetés M3"
            ]
        },
        boxturtle_respoolers_step5: {
            title: "Inserts filetés Pt. 2",
            description: `
                <p>Installez quatre inserts filetés comme indiqué.</p>
                <p>Remarque: assurez-vous de choisir une température appropriée pour le matériau des pièces imprimées, soyez prudent! Quand c'est chaud, c'est chaud...</p>
                <p><strong>Note:</strong> Ceci est la dernière fois que cette section nécessite l'installation d'inserts filetés. Assurez-vous d'éteindre votre fer à souder et de le ranger dans un endroit sûr.</p>
            `,
            parts: [
                "[a]_wheel_drive_x8.stl",
                "4x Inserts filetés M3"
            ]
        },
        boxturtle_respoolers_step6: {
            title: "Raccord ECAS04",
            description: `
                <p>Insérez le raccord ECAS04 comme indiqué.</p>
                <p><strong>Remarque:</strong> Ceux-ci sont censés être serrés, vous pouvez les poser à plat sur la table et appuyer les pièces imprimées dessus.</p>
            `,
            parts: [
                "motor_mount_x4.stl",
                "motor_mount_helper.stl",
                "Coupleur Bowden ECAS04 avec la bague d'arrêt en caoutchouc retirée"
            ]
        },
        boxturtle_respoolers_step7: {
            title: "Aimants",
            description: `
                <p>Installez les aimants en s'assurant qu'ils s'attirent.</p>
                <p><strong>Remarque:</strong> Si l'ajustement de l'aimant est lâche, une goutte de superglue peut être utilisée pour les maintenir en place.</p>
            `,
            parts: [
                "motor_mount_x4.stl",
                "trigger_x4.stl",
                "2x Aimants 6x3"
            ]
        },
        boxturtle_respoolers_step8: {
            title: "Roulement à billes MR63",
            description: `
                <p>Faites glisser le roulement MR63 en place comme indiqué. Fixez le roulement avec une vis SHCS M3x10.</p>
                <p><strong>Remarque:</strong> Vissez jusqu'à ce qu'il soit bien serré, mais ne serrez pas trop au risque d'endommager le plastique.</p>
            `,
            parts: [
                "1x Vis M3x10 SHCS",
                "1x Roulement à billes MR63"
            ]
        },
        boxturtle_respoolers_step9: {
            title: "Roulement à billes MR63",
            description: `
                <p>Faites glisser le roulement MR63 en place comme indiqué. Fixez le roulement avec une vis SHCS M3x8.</p>
                <p><strong>Remarque:</strong> Vissez jusqu'à ce qu'il soit bien serré, mais ne serrez pas trop au risque d'endommager le plastique.</p>
            `,
            parts: [
                "1x Vis M3x8 SHCS",
                "1x Roulement à billes MR63"
            ]
        },
        boxturtle_respoolers_step10: {
            title: "Préparation de la gâchette",
            description: `
                <p>Vissez les vis M3x8 de chaque côté de la gâchette comme indiqué. Laissez environ 3,5 mm d'espace entre le corps de la gâchette et la tête de vis.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step11: {
            title: "Assemblage de l'engrenage 30 dents",
            description: `
                <p>Placez l'engrenage dans l'outil 30 dents comme indiqué avec le rebord vers le bas. Enfoncez doucement l'arbre de 80 mm dans l'engrenage jusqu'à ce qu'il atteigne le bas de l'outil.</p>
                <P>The gear <strong>MUST</strong> be a tight fit on the shaft and should not easily move.</p>
                <p><strong>LDO gears in batch 1 and 2 are too loose.</strong> You may either secure them with glue, or use the FDM printed versions.</P>
                <p><strong>Remarque:</strong> Assurez-vous de maintenir l'arbre vertical lorsque vous commencez à le faire descendre. Le gabarit le guidera tout droit une fois qu'il aura dépassé l'engrenage.</p>
            `,
            parts: [
                "30t assembly tool",
                "helical_gear_30t_x4.stl",
                "arbre de 80 mm"
            ]
        },
        boxturtle_respoolers_step12: {
            title: "Entretoise",
            description: `
                <p>Faites glisser l'entretoise sur le côté long de l'arbre jusqu'à ce qu'elle entre en contact avec l'engrenage de 30 dents.</p>
            `,
            parts: [
                "gear_30_spacer_x4.stl"
            ]
        },
        boxturtle_respoolers_step13: {
            title: "Assemblage du moteur N20",
            description: `
                <p>Avant d'installer vos moteurs N20, assurez-vous que vos <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/N20_6V_500RPM.png" target="_blank">câbles sont de la bonne longueur</a>.</p>
                <p>Placez le moteur N20 dans le gabarit comme indiqué. Alignez la découpe en D avec l'arbre du moteur et poussez jusqu'à ce que l'engrenage atteigne la face du gabarit.</p>
                <p>The 15T installation tool is an intentionally firm fit around the N20 motor and gearbox to support it while you install the 15t herringbone gear.</p>
                <p><strong>Remarque:</strong> Le montage de l'engrenage doit être bien ajusté sans nécessiter trop de force pour le pousser. Utiliser trop de force pourrait endommager la boîte de vitesses du moteur N20.</p>
                <p><strong>IMPORTANT:</strong> Please ensure that there are no debris from the manufacturing process in the N20 gearbox. You may want to flush it with IPA or a similar solvent.</p>
            `,
            parts: [
                "Outil d'assemblage engrenage 15 dents",
                "helical_gear_15t_x4.stl",
                "Moteur N20"
            ]
        },
        boxturtle_respoolers_step14: {
            title: "Alignment Check",
            description: `
                <p>Notice the 15t gear is seated flush with the assembly tool and not with the end of the N20 gearbox output shaft.</p>
                <p><strong>This alignment is critical to the reliable operation of the respooler.</strong></p>
            `,
            parts: []
        },
        boxturtle_respoolers_step15: {
            title: "Installation LED Neopixel",
            description: `
                <p>Avant d'installer vos LED, assurez-vous que <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/WS2812_PCB.png" target="_blank">votre faisceau de câbles est de la bonne longueur.</a>.</p>
                <p>Pressez le diffuseur dans la boite à lumiére. Orientez le néopixel dans la pièce led_retainer.</p>
            `,
            parts: [
                "[a]_lightbox_x4.stl",
                "[a]_led_retainer_x4.stl",
                "[c]_led_diffuser_x4.stl",
                "Faisceau RGB"
            ]
        },
        boxturtle_respoolers_step16: {
            title: "Installation LED Neopixel",
            description: `
                <p>Pressez le led_retainer pour le mettre en place dans la boite à lumiére.</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step17: {
            title: "Installation du moteur N20",
            description: `
                <p>Faites glisser le moteur N20 dans la rainure du motor_mount. Assurez-vous d'orienter les fils vers le haut lorsque le moteur est en place.</p>
                <p><strong>Remarque:</strong> nous vous recommandons de lubrifier la boîte de vitesses du moteur N20. Super Lube est une bonne option, mais d'autres lubrifiants conviennent à condition qu'ils soient sans danger pour les pièces en plastique.</p>
                <p><strong>IMPORTANT:</strong> Please ensure that there are no debris from the manufacturing process in the N20 gearbox before you lubricate it. You may want to flush it with IPA or a similar solvent.</p>
            `,
            parts: [
                "motor_mount_x4.stl"
            ]
        },
        boxturtle_respoolers_step18: {
            title: "Alignment Check",
            description: `
                <p>Ensure that the N20 motor's gearbox is slotted into the groove as shown.</p>
                <p><strong>This alignment is critical to the reliable operation of  the respooler.</strong></p>
            `,
            parts: []
        },
        boxturtle_respoolers_step19: {
            title: "Couvercle de boîte de vitesses",
            description: `
                <p>Pliez les fils sur le dessus du moteur comme indiqué et fixez-les à l'aide des supports d'attache zip fournis. Assurez-vous que le collier de serrage est bien serré et que la languette est coupée au ras du connecteur.</p>
                <p>Faites glisser le couvercle de la boîte de vitesses en place et fixez-le avec la vis SHCS M3x10.</p>
            `,
            parts: [
                "gearbox_cover_x4.stl",
                "M3x10 SHCS",
                "2x colliers de serrage"
            ]
        },
        boxturtle_respoolers_step20: {
            title: "Roulements des cadres",
            description: `
                <p>Installez les roulements dans les pièces comme indiqué. Assurez-vous que le roulement affleure la face extérieure des pièces.</p>
            `,
            parts: [
                "frame_left_x4.stl",
                "frame_right_x4.stl",
                "2x Roulements MR148ZZ"
            ]
        },
        boxturtle_respoolers_step21: {
            title: "Installation du cadre gauche",
            description: `
                <p>Faites glisser le frame_left en place. S'assurer que les fils sont au-dessus du moteur N20 et qu'ils ne sont pas pincés par le cadre. Fixez avec une vis SHCS M3x8 en laissant du jeu pour l'étape suivante.</p>
            `,
            parts: [
                "frame_left_x4.stl",
                "Vis M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step22: {
            title: "Ajouter l'arbre de transmission 30 dents",
            description: `
                <p>Faites glisser le gear_30_spacer sur le côté le plus long de l'arbre de 80 mm jusqu'à ce qu'il soit contre l'engrenage de 30 dents. Ensuite, faites glisser l'arbre avec l'engrenage 30 dents dans le roulement dans frame_left.</p>
                <p>Si vous avez laissé la vis desserrée lors de la dernière étape, vous devriez pouvoir faire pivoter légèrement l'arbre et l'engrenage pour engrener les dents avec l'engrenage de 15 dents du moteur N20.</p>
                <p>Une fois en place, vous pouvez serrer complètement la vis sur le cadre gauche.</p>
                <p><strong>Remarque:</strong> Assurez-vous que le bas du cadre gauche affleure le bas du corps du moteur. Il y a des onglets d'index pour aider à les aligner, mais il y a encore du jeu dans l'ajustement.</p>
            `,
            parts: [
                "gear_30_spacer_x4.stl",
                "Arbre de 80mm avec engrenage 30 dents"
            ]
        },
        boxturtle_respoolers_step23: {
            title: "Fermer les côtés",
            description: `
                <p>Faites glisser le cadre droit sur l'arbre comme indiqué. Pendant qu'il est encore lâche, faites passer les fils de la LED de la boite à lumière à travers le canal fourni.</p>
                <p>Lorsque vous le fermez, s'assurer que les fils bougent librement et que rien n'est pincé. Sécurisez à l'aide d'une vis SHCS M3x8</p>
                <p><strong>Remarque:</strong> tout comme à l'étape précédente, assurez-vous que le bas affleure le main_body.</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "Assemblage boite à lumière",
                "Vis M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step24: {
            title: "",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>VÉRIFICATION!</h3>
                    <p>Assurez-vous que l'arbre tourne en douceur, sans blocage des engrenages avant de continuer.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step25: {
            title: "Insertion de la gâchette",
            description: `
                <p>Déposez la gâchette dans le rembobineur comme indiqué. Assurez-vous que les vis ne frottent pas sur les côtés et que la gâchette peut se déplacer librement d'avant en arrière.</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step26: {
            title: "Attache de la boite à lumière",
            description: `
                <p>Insérez les deux languettes supérieures de la boite à lumière dans le motor_mount, puis pressez dessus pour l'enclencher.</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step27: {
            title: "",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>VÉRIFICATION!</h3>
                    <p>Assurez-vous que la gâchette bouge librement d'avant en arrière et ne reste pas coincée.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step28: {
            title: "Roues motrices",
            description: `
                <p>Faites glisser les entretoises de roulement sur l’essieu suivi des roues motrices. Ceux-ci doivent affleurer les roulements sur les côtés du cadre.</p>
            `,
            parts: [
                "[a]_wheel_drive_x8.stl",
                "[a]_bearing_spacer_x8.stl"
            ]
        },
        boxturtle_respoolers_step29: {
            title: "Sécurisation des roues motrices",
            description: `
                <p>Fixez les roues motrices à l'essieu 8x80 avec des vis SHCS M3x6 comme indiqué.</p>
                <p><strong>LDO KITS:</strong> Use M3x6 BHCS instead.</p>
            `,
            parts: [
                "4x Vis M3x6 SHCS (BHCS for LDO Kits)"
            ]
        },
        boxturtle_respoolers_step30: {
            title: "Roues",
            description: `
                <p>Faites glisser les pneus sur les roues comme indiqué. Assurez-vous que le pneu est dans la bonne orientation afin que la rainure se verrouille dans la roue.</p>
                <p><strong>Remarque:</strong> Si vous rencontrez des difficultés pour mettre les pneus en TPU, il peut être utile de chauffer un peu.</p>
            `,
            parts: [
                "[a]_wheel_x8.stl",
                "tpu_tire_x8.stl"
            ]
        },
        boxturtle_respoolers_step31: {
            title: "Montage des roues",
            description: `
                <p>Tournez les roues sur l'essieu jusqu'à ce qu'elles s'enclenchent fermement et se verrouillent en place.</p>
            `,
            parts: [
                "[a]_wheel_x8.stl",
                "tpu_tire_x8.stl"
            ]
        },
        boxturtle_respoolers_step32: {
            title: "Rappel amical!",
            description: `
                <p>Vous avez besoin de <strong>quatre rembobineurs</strong> au total pour l'assemblage de votre BoxTurtle. Avant de passer à la section suivante, assurez-vous d’avoir construit quatre unités.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=turtleneck'">Section suivante</button>
                </div>
            `,
            parts: []
        },
        boxturtle_turtleneck_step1: {
            title: "Inserts filetés",
            description: `
                <p>Installez quatre inserts filetés comme illustré.</p>
                <p><strong>Note:</strong> Assurez-vous de choisir une température adaptée au matériau sélectionné pour les pièces imprimées, soyez prudent ! Les choses chaudes sont chaudes...</p>
                <p><strong>Note:</strong> Ceci est la dernière fois que cette section nécessite l'installation d'inserts filetés. Assurez-vous d'éteindre votre fer à souder et de le ranger dans un endroit sûr.</p>
            `,
            parts: [
                "lid.stl",
                "4x Inserts filetés M3"
            ]
        },
        boxturtle_turtleneck_step2: {
            title: "Raccords ECAS",
            description: `
                <p>Insérez les raccords ECAS04 comme illustré.</p>
                <p><strong>Note:</strong> Ceux-ci sont censés être serrés, vous pouvez les poser à plat sur la table et y appuyer les pièces imprimées.</p>
            `,
            parts: [
                "[a]_slide.stl",
                "frame.stl",
                "2x Coupleurs Bowden ECAS04"
            ]
        },
        boxturtle_turtleneck_step3: {
            title: "Micro-interrupteurs",
            description: `
                <p>En tenant compte de l'orientation des leviers sur les micro-interrupteurs, installez-les avec quatre vis autotaraudeuses M2x10 comme illustré. N'oubliez pas qu'ils sont vissés directement dans le plastique.</p>
                <p>Confused which switch is which? Here is a <a href="https://github.com/ArmoredTurtle/AFC-Klipper-Add-On/blob/main/docs/AFC_buffer.md" target="_blank">document</a> to help you understand the buffer and it’s functions</p>
                <div class='tn-switches-key'>
                    <strong>KEY:</strong>
                    <p class='advance'>Advance</p>
                    <p class='trailing'>Trailing</p>
                </div>
            `,
            parts: [
                "4x vis autotaraudeuses M2x10",
                "2x micro-interrupteurs D2F"
            ]
        },
        boxturtle_turtleneck_step4: {
            title: "Glissière",
            description: `
                <p>Placez la glissière dans le couvercle comme indiqué.</p>
            `,
            parts: []
        },
        boxturtle_turtleneck_step5: {
            title: "Sandwich",
            description: `
                <p>Installez le cadre, le couvercle et la glissière correctement positionnée à l'aide de quatre vis SHCS M3x8.</p>
                <p>Assurez-vous que la glissière se déplace sans contrainte une fois que tout est sécurisé.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=general_assembly'">Next Section</button>
                </div>
            `,
            parts: [
                "4x vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step1: {
            title: "",
            content: `
                <div class="infoL">
                    <h3>AVANT DE CONTINUER...</h3>
                    <p>Cette section se terminera par un BoxTurtle prêt pour la validation et la configuration initiales. La section suivante couvrira la finition et l'arrangement des pièces.</p>
                    <p>Dans cette section, chaque voie sera assemblée une à la fois en commençant par la voie 4 (à l'extrême droite) et en remontant jusqu'à la voie 1 (à l'extrême gauche).</p>
                    <p>L'intention est de montrer le routage des câbles prévu pour BoxTurtle.</p>
                    <p class='extra-space'>Si vous avez confiance en vos capacités, vous pouvez assembler les 4 voies de chaque étape en une seule fois. Sinon, bien que gênante, cette section vous fera passer d'une pile de modules à un BoxTurtle fonctionnel.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step2: {
            title: "Dispositifs de retenue de la gâchette",
            description: `
                <p>Installez chaque micro-interrupteur D2F avec levier (préparés) avec 2 vis autotaraudeuses M2x10 comme indiqué.</p>
                <p>Assurez-vous que vos <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2F_W-Lever.png" target="_blank">commutateurs sont câblés</a> avant l'installation.</p>
                <p>Vous en aurez besoin de quatre.</p>
            `,
            parts: [
                "[a]_feed_trigger_retainer_x4.stl",
                "8x Vis autotaraudeuses M2x10",
                "4x Micro-interrupteur D2F-L (préparés)"
            ]
        },
        boxturtle_general_assembly_step3: {
            title: "Démonter le profilé",
            description: `
                <p>Retirez les deux vis M5x16 BHCS comme indiqué. Retirez le profilé 2020 de 220 mm du cadre. La carte de contrôle AFC-Lite sera montée sur ce profilé, et il sera plus facile de la câbler plus tard lorsqu'elle sera retirée du BoxTurtle.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step4: {
            title: "Écrous marteau",
            description: `
                <p>Insérez les écrous marteau dans le profilé 2020 de 220 mm précédemment retiré. L'orientation n'a pas d'importance ici, s'assurer simplement que les écrous sont placés dans le même canal. La distance appropriée entre chaque trou fileté est de 88 mm.</p>
            `,
            parts: [
                "2x Écrous marteau M3"
            ]
        },
        boxturtle_general_assembly_step5: {
            title: "Montage de l'AFC",
            description: `
                <p>Assurez-vous que les pilotes pas à pas sont correctement installés à ce stade. En fonction de la révision de la carte AFC-Lite dont vous disposez, les pattes du commutateur de sélection de tension d'entrée peuvent être suffisamment longs et interférer avec le support imprimé. Vous voudrez peut-être couper ces pattes avec une paire de pinces coupantes en faisant attention aux joints de soudure.</p>
                <p>Montez la carte AFC-Lite sur le support imprimé comme indiqué à l'aide de 2 vis SHCS M3x8. Celles-ci sont filetées dans du plastique, veillez donc à ne pas trop serrer.</p>
            `,
            parts: [
                "afc_mount.stl",
                "2x Vis M3x8 SHCS",
                "Carte AFC-Lite"
            ]
        },
        boxturtle_general_assembly_step6: {
            title: "",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>STOP!</h3>
                    <p>Si vous n'avez pas encore flashé votre AFC-Lite et couplé à votre imprimante, c'est le moment de le faire !</p>
                    <p>C'est également le moment de vous assurer que vos câbles CANBUS ou USB + Alimentation sont confectionnés pour connecter votre BoxTurtle à votre imprimante.</p>
                    <p>Voici quelques ressources utiles pour vous guider dans cette étape: <a href="https://github.com/xbst/AFC-Lite/blob/master/Docs/AFC-Lite_Manual.pdf" target="_blank">le manuel AFC-Lite</a>, <a href="https://canbus.esoterical.online/toolhead_flashing/common_hardware/AFC-Lite/README.html" target="_blank">le guide ésotérique du Can Bus</a>, <a href="https://usb.esoterical.online/hardware_config/STM32/AFC_Lite.html" target="_blank">le guide ésotérique du USB</a>, et <a href="https://github.com/EricZimmerman/VoronTools/blob/main/EBB_CAN.md" target="_blank">des informations supplémentaires sur le Can Bus</a>.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step7: {
            title: "Montage de l'AFC",
            description: `
                <p><strong>En fonction de votre espace de travail, vous souhaiterez peut-être ignorer cette étape et y revenir à la fin de cette section.</strong></p>
                <p>Montez l'AFC-Lite sur le profilé avec deux vis SHCS M3x10. L'emplacement approprié pour le fixer définitivement est à environ 34 mm du bord avant du profilé.</p>
            `,
            parts: [
                "2x Vis M3x10 SHCS"
            ]
        },
        boxturtle_general_assembly_step8: {
            title: "Rembobineur voie 4",
            description: `
                <p>Identifiez le rembobineur avec le fil N20 de la voie 4 (515 mm) et insérez-le dans le plateau de la voie 4 comme indiqué. Il y a des languettes dépassant de l'avant du rembobineur qui s'insèrent dans le profilé. Insérez-les, puis basculez le rembobineur dans le plateau.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step9: {
            title: "Fixer le rembobineur voie 4",
            description: `
                <p>Fixez le rembobineur en place avec 2 vis SHCS M3x8 comme indiqué.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step10: {
            title: "Installation du dispositif de retenue de la gâchette",
            description: `
                <p>Installez l'interrupteur préparé pour la voie 4 (préparation, câble de 435mm) avec une vis SHCS M3x8 et une rondelle M3.</p>
                <p>Insérez la lamelle de l'interrupteur par l'avant sans forcer sur la gâchette du rembobineur. L'état par défaut du capteur doit être complètement fermé.</p>
            `,
            parts: [
                "Vis M3x8 SHCS",
                "Rondelle M3"
            ]
        },
        boxturtle_general_assembly_step11: {
            title: "Extrudeur voie 4",
            description: `
                <p><strong>REMARQUE:</strong> Certains utilisateurs trouvent plus facile d'installer le tube Bowden de 80 mm et 3mm de diamètre intérieur dans l'extrudeur/rembobineur avant de fixer l'extrudeur sous le plateau. Cela ne sera plus mentionné.</p>
                <p>Identifiez l'extrudeur pour la voie 4 (voie 4, fil de 510 mm, moteur 4, fil de 520 mm).</p>
                <p>Fixez l’extrudeur voie 4 avec deux vis SHCS M3x8 comme illustré. Faites attention à l'orientation de l'extrudeur.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step12: {
            title: "Routage des câbles",
            description: `
                <p>Le routage des câbles prévu pour la voie 4 est illustré ici.</p>
                <p>Il y a de nombreux points prévus pour les colliers de serrage sur la face inférieure des plateaux, toutefois ne les fixer pas fermement pour le moment. Vous pouvez maintenant fixer sans serrer les fils de la voie 4. La page suivante montrera exactement où brancher toute la voie 4 dans l'AFC-Lite afin de correspondre à la configuration par défaut de l'AFC Klipper pour une configuration rapide.</p>
                <div class='wiring-key'>
                    <strong>CODE:</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Moteur</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step13: {
            title: "",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_10_Lane_4_Wiring.jpg" alt="Wiring Guide">
                    <p>L'image indique les ports sur lesquels installer chaque module de la voie 4 pour correspondre à la configuration Klipper par défaut de l'AFC pour la BoxTurtle.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step14: {
            title: "Rembobineur voie 3",
            description: `
                <p>Identifiez le rembobineur avec le fil N20 de la voie 3 (415 mm) et insérez-le dans le plateau de la voie 3 comme indiqué. Il y a des languettes dépassant de l'avant du rembobineur qui s'insèrent dans le profilé. Insérez-les, puis basculez le rembobineur dans le plateau.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step15: {
            title: "Fixer le rembobineur voie 3",
            description: `
                <p>Fixez le rembobineur en place avec 2 vis SHCS M3x8 comme indiqué.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step16: {
            title: "Installation du dispositif de retenue de la gâchette",
            description: `
                <p>Installez l'interrupteur préparé pour la voie 3 (préparation, câble de 335 mm) avec une vis SHCS M3x8 et une rondelle M3.</p>
                <p>Insérez la lamelle de l'interrupteur par l'avant sans forcer sur la gâchette du rembobineur. L'état par défaut du capteur doit être complètement fermé.</p>
            `,
            parts: [
                "Vis M3x8 SHCS",
                "Rondelle M3"
            ]
        },
        boxturtle_general_assembly_step17: {
            title: "Extrudeur voie 3",
            description: `
                <p>Identifiez l'extrudeur pour la voie 3 (voie 3, fil de 410 mm, moteur 3, fil de 420 mm).</p>
                <p>Fixez l’extrudeur voie 3 avec deux vis SHCS M3x8 comme illustré. Faites attention à l'orientation de l'extrudeur.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step18: {
            title: "Routage des câbles",
            description: `
                <p>Le routage des câbles prévu pour la voie 3 est illustré ici.</p>
                <p>Il y a de nombreux points prévus pour les colliers de serrage sur la face inférieure des plateaux, toutefois ne les fixer pas fermement pour le moment. Vous pouvez maintenant fixer sans serrer les fils de la voie 3. La page suivante montrera exactement où brancher toute la voie 3 dans l'AFC-Lite afin de correspondre à la configuration par défaut de Klipper avec l'AFC pour une configuration rapide.</p>
                <div class='wiring-key'>
                    <strong>CODE:</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Moteur</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step19: {
            title: "",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_15_Lane_3_Wiring.jpg" alt="Wiring Guide">
                    <p>L'image indique les ports sur lesquels installer chaque module de la voie 4 pour correspondre à la configuration Klipper par défaut de l'AFC pour la BoxTurtle.</p> 
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step20: {
            title: "Routage du module concentrateur",
            description: `
                <p>Le cheminement prévu pour le câblage du concentrateur est indiqué.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step21: {
            title: "",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_17_Hub_Wiring.jpg" alt="Wiring Guide">
                    <p>L'image montre le port où installer le connecteur du concentrateur pour correspondre à la configuration Klipper par défaut de l'AFC pour la BoxTurtle.</p> 
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step22: {
            title: "Rembobineur voie 2",
            description: `
                <p>Identifiez le rembobineur avec le fil N20 de la voie 2 (315 mm) et insérez-le dans le plateau de la voie 2 comme indiqué. Il y a des languettes dépassant de l'avant du rembobineur qui s'insèrent dans le profilé. Insérez-les, puis basculez le rembobineur dans le plateau.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step23: {
            title: "Fixer le rembobineur voie 2",
            description: `
                <p>Fixez le rembobineur en place avec 2 vis SHCS M3x8 comme indiqué.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step24: {
            title: "Installation du dispositif de retenue de la gâchette",
            description: `
                <p>Installez l'interrupteur préparé pour la voie 2 (préparation, câble de 235mm) avec une vis SHCS M3x8 et une rondelle M3.</p>
                <p>Insérez la lamelle de l'interrupteur par l'avant sans forcer sur la gâchette du rembobineur. L'état par défaut du capteur doit être complètement fermé.</p>
            `,
            parts: [
                "Vis M3x8 SHCS",
                "Rondelle M3"
            ]
        },
        boxturtle_general_assembly_step25: {
            title: "Extrudeur voie 2",
            description: `
                <p>Identifiez l'extrudeur pour la voie 2 (voie 2, fil de 310 mm, moteur 2, fil de 320 mm).</p>
                <p>Fixez l’extrudeur voie 2 avec deux vis SHCS M3x8 comme illustré. Faites attention à l'orientation de l'extrudeur.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step26: {
            title: "Routage des câbles",
            description: `
                <p>Le routage des câbles prévu pour la voie 2 est illustré ici.</p>
                <p>Il y a de nombreux points prévus pour les colliers de serrage sur la face inférieure des plateaux, toutefois ne les fixer pas fermement pour le moment. Vous pouvez maintenant fixer sans serrer les fils de la voie 2. La page suivante montrera exactement où brancher toute la voie 2 dans l'AFC-Lite afin de correspondre à la configuration par défaut de Klipper avec l'AFC pour une configuration rapide.</p>
                <div class='wiring-key'>
                    <strong>CODE:</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Moteur</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step27: {
            title: "",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_22_Lane_2_Wiring.jpg" alt="Wiring Guide">
                    <p>L'image indique les ports sur lesquels installer chaque module de la voie 2 pour correspondre à la configuration Klipper par défaut de l'AFC pour la BoxTurtle.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step28: {
            title: "Rembobineur voie 1",
            description: `
                <p>Identifiez le rembobineur avec le fil N20 de la voie 1 (205 mm) et insérez-le dans le plateau de la voie 1 comme indiqué. Il y a des languettes dépassant de l'avant du rembobineur qui s'insèrent dans le profilé. Insérez-les, puis basculez le rembobineur dans le plateau.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step29: {
            title: "Fixer le rembobineur voie 1",
            description: `
                <p>Fixez le rembobineur en place avec 2 vis SHCS M3x8 comme indiqué.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step30: {
            title: "Installation du dispositif de retenue de la gâchette",
            description: `
                <p>Installez l'interrupteur préparé pour la voie 1 (préparation, câble de 155 mm) avec une vis SHCS M3x8 et une rondelle M3.</p>
                <p>Insérez la lamelle de l'interrupteur par l'avant sans forcer sur la gâchette du rembobineur. L'état par défaut du capteur doit être complètement fermé.</p>
            `,
            parts: [
                "Vis M3x8 SHCS",
                "Rondelle M3"
            ]
        },
        boxturtle_general_assembly_step31: {
            title: "Extrudeur voie 1",
            description: `
                <p>Identifiez l'extrudeur pour la voie 1 (voie 1, fil de 200 mm, moteur 1, fil de 210 mm).</p>
                <p>Fixez l’extrudeur voie 1 avec deux vis SHCS M3x8 comme illustré. Faites attention à l'orientation de l'extrudeur.</p>
            `,
            parts: [
                "2x Vis M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step32: {
            title: "",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_26_Lane_1_Wiring.jpg" alt="Wiring Guide">
                    <p>L'image montre les ports sur lesquels installer chaque module de la voie 1 pour correspondre à la configuration Klipper par défaut de l' AFC pour la BoxTurtle.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step33: {
            title: "",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_27_TN_Wiring.jpg" alt="Wiring Guide">
                    <p>Les connexions à établir pour le tampon TN correspondant à la configuration Klipper par défaut du module AFC sont indiquées. Les fils du tampon peuvent être passés par le trou inférieur de la jupe arrière droite si vous choisissez de ne pas de connecter à la carte principale de l'imprimante.</p>
                    <p>Vous ne savez pas quelle prise est laquelle? Voici un <a href="https://github.com/ArmoredTurtle/AFC-Klipper-Add-On/blob/main/docs/AFC_buffer.md" target="_blank">document</a> pour vous aider à comprendre le tampon et ses fonctions.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step34: {
            title: "",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_28_RGB.jpg" alt="Wiring Guide">
                    <p>L'illustration montre la connexion à établir pour que les voyants LED correspondent à la configuration Klipper par défaut de l'AFC. Le connecteur du câble de 80 mm se branchera sur la carte ici.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step35: {
            title: "Installation de la carte",
            description: `
                <p>Réinstallez le profilé 2020 de 220 mm avec l'AFC-Lite fixé dessus comme indiqué à l'aide de deux vis BHCS M5x16.</p>
                <p>La chaine de LED des indicateurs des rembobineurs à partir du connecteur installé à l'étape précédente. Connectez-les maintenant. Le dernier rembobineur aura un connecteur supplémentaire, vous pouvez l'attacher au bas du plateau de la voie 4.</p>
            `,
            parts: [
                "2x Vis M5x16 BHCS"
            ]
        },
        boxturtle_general_assembly_step36: {
            title: "Tubes PTFE",
            description: `
                <p><strong>IL EXISTE DEUX DIAMÈTRES INTERNES DIFFÉRENTS POUR LE TUBE PTFE UTILISÉ DANS LA BOXTURTLE. LE TUBE DE 3 MM INTERNE DOIT ÊTRE UTILISÉ PRÉ-EXTRUDEUR (rembobineur – extrudeur). LE TUBE DE 2 MM INTERNE DOIT ÊTRE UTILISÉ APRÈS L'EXTRUDEUR.</strong></p>
                <p>Si cela n'a pas été fait lors de l'installation de l'extrudeur, insérez un tube PTFE de 3 mm de diamètre intérieur x 80 mm dans le raccord ECAS du rembobineur, courbez-le doucement et insérez-le dans le raccord ECAS de l'extrudeur en vous assurant que le tube est bien fixé.</p>
                <p>Pour le PTFE de 2 mm de diamètre intérieur, il est FORTEMENT conseillé que les extrémités soient chanfreinées sur le diamètre intérieur. Installez les longueurs PTFE de 2 mm de diamètre intérieur comme indiqué.</p>
                <p><strong>Remarque:</strong> il existe de nombreuses méthodes pour chanfreiner le tube PTFE, les méthodes courantes sont:</p>
                <ul>
                    <li>Utiliser un foret d'environ 6 mm manuellement</li>
                    <li>Faire tourner un couteau effilé aux extrémités du tube</li>
                    <li>Utiliser un outil d'ébavurage aux extrémités du tube</li>
                </ul>
                <p><strong>IL EST TRÈS IMPORTANT QU'AUCUN DÉBRIS DE PTFE NE RESTE À L'INTÉRIEUR DU TUBE AVANT L'INSTALLATION.</strong></p>
                <p><strong>NOTE:</strong> The PTFE lengths between the extruder and hub are suggested starting lengths - you may need to trim a little bit off in order for it to have a smooth bend. The filament path should be a smooth curve without tight corners or kinks.</p>
            `,
            parts: [
                "4x Tube PTFE de 80 mm ID de 3 mm",
                "2x Tube PTFE ~101 mm ID de 2 mm - voies intérieures",
                "2x Tube PTFE ~171mm ID de 2 mm - voies extérieures"
            ]
        },
        boxturtle_general_assembly_step37: {
            title: "TN",
            description: `
                <p>Utilisez un morceau de PTFE de diamètre interne de 2 mm pour connecter le concentrateur de la BoxTurtle au tampon TN. N'oubliez pas que le PTFE de 2 mm de diamètre intérieur doit être chanfreiné pour un fonctionnement fluide.</p>
                <p>La longueur dépendra de la façon dont vous comptez configurer votre BoxTurtle avec votre imprimante, une longueur d'environ 250 mm est appropriée pour le moment si vous n'êtes pas sûr.</p>
                <p>Notez que les flèches sur le TN pointent vers la tête d'impression. Le diamètre interne du tube PTFE du tampon TN vers votre tête d'impression n'a pas d'importance, la plupart utilisent un ID de 2,5 mm.</p>
                <p>Voici un <a href="https://github.com/ArmoredTurtle/TurtleNeck/blob/main/STLs/TN_horizontal%20mount.stl" target="_blank">support rigide</a> pour le tampon permettant de boulonner le tampon sur un profilé 2020.</p>
            `,
            parts: [
                "Tube PTFE de diamètre interne de 2 mm"
            ]
        },
        boxturtle_general_assembly_step38: {
            title: "Tube PTFE du TN",
            description: `
                <p>Insérez le tube PTFE venant de l'AFC jusqu'à l'extrémité de votre TN comme indiqué.</p>
                <p><strong>Remarque:</strong> il doit s'arrêter juste avant de pousser la « glissière » vers l'extérieur du corps principal.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step39: {
            title: "Roues libres",
            description: `
                <p>Vissez les deux côtés de la roue libre sur le raccord fileté comme indiqué. Il en faudra quatre.</p>
            `,
            parts: [
                "8x [a]_idler_roller_x8.stl",
                "4x Idler_threaded_joint_x4.stl"
            ]
        },
        boxturtle_general_assembly_step40: {
            title: "Roues libres",
            description: `
                <p>Installez les roulements sur les embouts des rouleaux comme indiqué, cela doit être un ajustement par friction.</p>
            `,
            parts: [
                "8x Roulement MR148zz"
            ]
        },
        boxturtle_general_assembly_step41: {
            title: "Installation des roues libres",
            description: `
                <p>Insérez les rouleaux dans les plateaux comme indiqué, la position la plus arrière est appropriée pour la plupart des bobines de filament de 200 mm de diamètre extérieur.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step42: {
            title: "",
            content: `
                <div class="infoL">
                    <h3>*PANIQUE*</h3>                    <p>Avant d'installer l'habillage final sur la BoxTurtle, c'est le bon moment de la connecter à l'imprimante et vérifier la fonctionnalité de tous les composants.</p>
                    <p class='extra-space'>Le module Klipper pour l'AFC ainsi que la documentation et les instructions d'installation peuvent être trouvés <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/Initial_Startup.md" target="_blank">ici</a>.</p>
                    <div class='info-submanual-nav-buttons'>
                        <button onclick="location.href='manual-sections.html?manual=boxturtle'">Menu BoxTurtle</button>
                        <button onclick="location.href='manual.html?manual=boxturtle&subManual=final'">Section suivante</button>
                    </div>
                </div>
            `,
            parts: []
        },
        boxturtle_final_step1: {
            title: "Inserts filetés",
            description: `
                <p>Vous en aurez besoin de 4 pour terminer l’assemblage.</p>
                <p>Installez l'insert fileté comme indiqué. C'est la seule étape de cette section qui utilise des inserts.</p>
            `,
            parts: [
                "4x solid_corner_cover_x4.stl",
                "4x Insert fileté M3"
            ]
        },
        boxturtle_final_step2: {
            title: "Pied",
            description: `
                <p>L'assemblage pour un coin est illustré, vous devrez le faire pour chacun des quatre coins. Installez une vis BHCS M5x16 munie d'une rondelle M5, un foot_tpu et un [a]_foot. Fixez à travers le coin imprimé avec un écrou hexagonal M5.</p>
            `,
            parts: [
                "4x [a]_foot_x4.stl",
                "4x foot_tpu_x4.stl",
                "4x Vis M5x16 BHCS",
                "4x Rondelle M5",
                "4x Écrou M5"
            ]
        },
        boxturtle_final_step3: {
            title: "Couvercles d'angle",
            description: `
                <p>L'assemblage pour un coin est illustré, vous devrez le faire pour chacun des quatre coins.</p>
                <p>Fixez le couvercle d'angle comme indiqué avec une vis SHCS M3x6 comme indiqué.</p>
            `,
            parts: [
                "4x Vis M3x6 SHCS"
            ]
        },
        boxturtle_final_step4: {
            title: "Chargeurs",
            description: `
                <p>Vous en aurez besoin de 4 pour terminer l’assemblage. Installez le chargeur sur le tube PTFE comme indiqué.</p>
                <p><strong>Remarque:</strong> Il est conseillé de les retirer de la BoxTurtle chaque fois qu'elle doit être placée sur le dos pour un entretien.</p>
            `,
            parts: [
                "4x [a]_feeder_x4.stl",
                "4x Tube PTFE de 50 mm dia-int de 3 mm"
            ]
        },
        boxturtle_final_step5: {
            title: "Tubes chargeur",
            description: `
                <p>L'assemblage final d'un rembobineur est illustré, répétez l'opération pour les quatre.</p>
                <p>Insérez l'entrée du tube PTFE dans le rembobineur comme indiqué.</p>
            `,
            parts: []
        },
        boxturtle_final_step6: {
            title: "",
            content: `
                <div class="info">
                    <h3>Vous avez terminé!!!</h3>
                    <p><strong>C'est tout! 😊 Maintenant, imprimez quelque chose d'amusant!</strong></p>
                </div>
                <div class="infoL">
                    <p class='extra-space'><i>In case you missed it, the initial startup guide containing everything you need to know to get your BoxTurtle up and running can be found <a href="https://www.armoredturtle.xyz/docs/boxturtle/initial_startup/01-overview.html" target="_blank">here</a>.</i></p>
                </div>
            `,
            parts: []
        }
    },
}
