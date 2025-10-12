export default {
    name: "HTLF Manuals",
    subManuals: {
        introduction: {
            name: "1. HTLF Introduction"
        },
        preparation: {
            name: "2. HTLF Preparation"
        },
        turtleneck: {
            name: "3. TurtleNeck"
        },
        general_assembly: {
            name: "4. General Assembly"
        }
    },
    steps: {
        htlf_introduction_step1: {
            title: "Introduction",
            content: `
                <div class="infoL">
                    <h3>INTRODUCTION</h3>
                    <p>This manual will walk you through the assembly steps of your HappyTurtle LettuceFeeder (HTLF) by ArmoredTurtle. Read this introduction carefully, it contains information that will be relevant throughout your build process.</p>
                </div>
            `,
            parts: []
        },
        htlf_introduction_step2: {
            title: "Basic Use",
            description: `
                <p>This manual presents each step of the assembly process in 3D space to help avoid confusion and clearly illustrate the correct part orientations.</p>
                <p>At the top of the page, you'll find three options: you can select different colors for your printed parts and frame to make part identification easier.</p>
                <p>Here is a render for you to explore. Left-click to rotate the view, right-click to pan, and use the scroll wheel to zoom in and out.</p>
            `,
            parts: []
        },
        htlf_introduction_step3: {
            title: "Printed Parts Note",
            content: `
                <div class="infoL">
                    <h3>PRINTED PARTS NOTE</h3>
                    <p>This is NOT a <a href="https://vorondesign.com/" target="_blank">VORON Design</a> project, we strongly recommend that you run a profile that is specific to HTLF. Voron parts profiles are not recommended for HTLF printed parts, as the tolerance expectations are different.</p>
                    <p class="extra-space">Specifically, make sure you are tuning for skew and filament shrinkage. An excellent tool for this is Vector3D's <a href="https://vector3d.shop/products/califlower-calibration-tool-mk2" target="_blank">Califlower Mk2</a> (yes, it's worth the $14). Do this <i>before</i> you print ~0.5kg worth of filament for HTLF parts!</p>
                </div>
            `,
            parts: []
        },
        htlf_introduction_step4: {
            title: "Part Printing Guidelines",
            content: `
                <div class="info">
                    <h3>PART PRINTING GUIDELINES</h3>
                    <p>These are the print settings we recommend you follow in order to have the best chance at success with your parts. Note: Parts with an interference fit on metal components have a tolerance of 0.15mm, and all printed part interfaces have a tolerance of 0.2mm. Check your profile for dimensional accuracy accordingly.</p>
                </div>
            
                <div class="print-settings">
                    <div class="print-setting">
                        <h4>3D PRINTING PROCESS</h4>
                        <p>Fused Deposition Modeling (FDM)</p>
                    </div>
                    <div class="print-setting">
                        <h4>MATERIALS</h4>
                        <p class='p-no-space'><strong>Primary:</strong> ~0.3kg ABS</p>
                        <p class='p-no-space'><strong>Accent:</strong> ~0.1kg ABS</p>
                        <p class='p-no-space'><strong>Black:</strong> ~3g ABS</p>
                        <p class='p-no-space'><strong>Clear:</strong> ~2g any material</p>
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
        htlf_introduction_step5: {
            title: "Naming Conventions",
            content: `
                <div class=info>
                    <h3>FILE NAMING</h3>
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
        htlf_introduction_step6: {
            title: "ECAS-04 Note",
            content: `
                <div class="infoL">
                    <h3>ECAS-04 (the worst part)</h3>
                    <p><strong>The bowden couplers used in HTLF are meant to be tight, your tolerances aren’t bad if they take some persuasion to insert. You do NOT want these coming out of the printed parts.</strong></p>
                    <p><strong>Reference this assembly photo for these. Typically, the blue plunger will need to be inserted into the collet body.</strong></p>
                    <p><strong>The rubber seal will need to be removed from the seal retainer. Be sure that the retainer is left on the collet body. At no time, in any Armored Turtle project, will the rubber seal be utilized. Discard these appropriately.</strong></p>
                    <img class='ecas-preparation' src="/images/ecas-preparation.webp" alt="ECAS Preparation">
                </div>
            `,
            parts: []
        },
        htlf_introduction_step7: {
            title: "Assembly Cues",
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
        htlf_introduction_step8: {
            title: "Common Links",
            content: `
                <div class="info">
                    <h3>COMMON LINKS</h3>
                    <div class="link-container">
                        <a href="https://github.com/ArmoredTurtle" target="_blank" class="link-item">
                            <img src="/images/github-logo.png" alt="GitHub" class="link-icon">
                            <span>GitHub</span>
                        </a>
                        <a href="https://discord.gg/AaVHfeYgw2" target="_blank" class="link-item">
                            <img src="/images/discord.png" alt="Discord" class="link-icon">
                            <span>Discord</span>
                        </a>
                        <a href="https://www.printables.com/model/1249234-happyturtlelettucefeeder-htlf-by-armoredturtle" target="_blank" class="link-item">
                            <img src="/images/printables.png" alt="Printables" class="link-icon">
                            <span>Printables</span>
                        </a>
                    </div>
                    <div class='info-submanual-nav-buttons'>
                        <button onclick="location.href='manual-sections.html?manual=htlf'">HTLF Menu</button>
                        <button onclick="location.href='manual.html?manual=htlf&subManual=preparation'">Next Section</button>
                    </div>
                </div>
            `,
            parts: []
        },
        htlf_preparation_step1: {
            title: "Sense Wiring",
            description: `
                <p>Use the printed solder tool to help set the microswitches an appropriate distance apart from each other. Pay careful attention to the orientation of the switches. Bridge the common pins of the microswitch with a wire ~52mm long. Solder a wire ~12cm long to each normally open pin and terminate with a connector appropriate for your MCU.</p>
            `,
            parts: [
                "solder_tool.stl",
                "2x D2F microswitch"
            ]
        },
        htlf_preparation_step2: {
            title: "Home Wiring",
            description: `
                <p>Solder a lead ~15cm to your D2F microswitch and terminate with a plug appropriate for your MCU.</p>
            `,
            parts: [
                "1x D2F-L microswitch"
            ]
        },
        htlf_preparation_step3: {
            title: "LED Wiring",
            description: `
                <p>Chain four WS2812 PCB LEDs as shown. It may be easier to do this with the LEDs in the printed led_retainer part. The lead running to the MCU should be ~20cm and terminated appropriately for your chosen MCU.</p>
            `,
            parts: [
                "LED_retainer.stl",
                "4x WS2812 LEDs"
            ]
        },
        htlf_preparation_step4: {
            title: "Heatsets 1",
            description: `
                <p>Install 12 heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            parts: [
                "frame_left.stl",
                "frame_right.stl",
                "12x M3 heatset inserts"
            ]
        },
        htlf_preparation_step5: {
            title: "Heatsets 2",
            description: `
                <p>Install heatset inserts in the appropriate holes for your chosen MCU.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            parts: [
                "board_mount.stl",
                "3-4x M3 heatset inserts"
            ]
        },
        htlf_preparation_step6: {
            title: "Heatsets 3",
            description: `
                <p><strong>YOU NEED TO COMPLETE THIS STEP FOR ALL FOUR e_body COMPONENTS.</strong></p>
                <p>Install two heatset inserts in the e_body as shown.</p>
                <p>Insert two ECAS04 collets into the e_body. As mentioned in the introduction of this manual, be sure that you remove the rubber seals from the ECAS fittings.</p>
                <p>Install the 6x3mm magnets as shown, if they are loose, a drop of CA glue goes a long way to keep them in place.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
                <p><strong>This is the last step in this section that installs heat set inserts. Turn off your iron and set it some place safe before proceeding.</strong></p>
            `,
            parts: [
                "e_body.stl",
                "8x M3 heatset inserts",
                "8x ECAS04 collets",
                "4x 6x3mm magnets"
            ]
        },
        htlf_preparation_step7: {
            title: "Depressors",
            description: `
                <p>Assemble the idler by placing 2 needle bearings in the idler gear.</p>
                <p><strong>Note:</strong> Now is the time to lubricate the needle bearings.</p>
                <p>After removing the print-in-place supports from the depressor bodies, install the bmg idler with a 3x20mm pin as shown. Mind the orientation. The holes on this part have different clearances to aid in easy assembly.</p>
                <p>Insert a 6x3mm magnet as shown in an orientation that <strong>REPELS</strong> the depressor from the e_body. A drop of CA glue may be used to retain these magnets if needed.</p>
            `,
            parts: [
                "4x [a]_depressor_x4.stl",
                "4x BMG Idler",
                "8x needle bearings",
                "4x 2x20mm pin",
                "4x 6x3 magnet"
            ]
        },
        htlf_preparation_step8: {
            title: "Sensors",
            description: `
                <p>Install the sensor assembly after inserting a 5mm ball bearing in each sensor slot as shown. Do this for each of the four e_body's.</p>
            `,
            parts: [
                "16x M2x10 STS screws",
                "8x 5mm ball bearings"
            ]
        },
        htlf_preparation_step9: {
            title: "Drive Pulley",
            description: `
                <p>Using the printed pulley tool, install a 20t pulley onto the motor as shown.</p>
                <p><strong>USE THREADLOCK ON THESE GRUB SCREWS.</strong></p>
            `,
            parts: [
                "Pulley tool",
                "1x stepper motor",
                "1x 20t pully"
            ]
        },
        htlf_preparation_step10: {
            title: "Cam Pulley",
            description: `
                <p>Using the printed pulley tool, install a 20t pulley onto the motor as shown.</p>
                <p><strong>USE THREADLOCK ON THESE GRUB SCREWS.</strong></p>
            `,
            parts: [
                "Pulley tool",
                "1x stepper motor",
                "1x 20t pully"
            ]
        },
        htlf_preparation_step11: {
            title: "80t Pulleys",
            description: `
                <p>Secure the 80t_pulley to the deflanged 20t gt2 pulley with five M3x8 BHCS screws as shown.</p>
                <p>Make sure it is secured straight in the 80t pulley, or you will be doing a lot of disassembly to fix this later. <strong>Prepare each of the two pulleys at this time</strong>, set one aside for later.</p>
            `,
            parts: [
                "2x [a]_80t_pulley.stl",
                "2x deflanged 20t gt2 x6mm pulley",
                "10x M3x8 BHCS screws"
            ]
        },
        htlf_preparation_step12: {
            title: "Drive Shaft",
            description: `
                <p>Install the 80t pulley as shown with <strong>thread lock</strong> on the grub screws. Mind the orientation. You should have 101mm (4 inches) of shaft exposed on the long side.</p>
            `,
            parts: [
                "1x ~125mm D shaft"
            ]
        },
        htlf_preparation_step13: {
            title: "Drive Gear",
            description: `
                <p>Insert a MR85 bearing in each e_body as shown. Drop in a BMG drive gear from the top as shown.</p>
                <p>Now is a good time to zip tie the wires from the D2F switches.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=htlf'">HTLF Menu</button>
                    <button onclick="location.href='manual.html?manual=htlf&subManual=turtleneck'">Next Section</button>
                </div>
            `,
            parts: [
                "4x MR85 bearings",
                "4x BMG drive gear"
            ]
        },
        htlf_turtleneck_step1: {
            title: "Heatset Inserts",
            description: `
                <p>Install four heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
                <p><strong>Note:</strong> Ceci est la dernière fois que cette section nécessite l'installation d'inserts filetés. Assurez-vous d'éteindre votre fer à souder et de le ranger dans un endroit sûr.</p>
            `,
            parts: [
                "lid.stl",
                "4x M3 heatset inserts"
            ]
        },
        htlf_turtleneck_step2: {
            title: "ECAS Fittings",
            description: `
                <p>Insert the ECAS04 fittings as shown</p>
                <p><strong>Note:</strong> These are meant to be tight, you can lay them flat on the table and press the printed parts onto them.</p>
            `,
            parts: [
                "[a]_slide.stl",
                "frame.stl",
                "2x ECAS04 bowden couplers with rear rubber bumper removed"
            ]
        },
        htlf_turtleneck_step3: {
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
        htlf_turtleneck_step4: {
            title: "Slide",
            description: `
                <p>Place the slide into the lid as shown.</p>
            `,
            parts: []
        },
        htlf_turtleneck_step5: {
            title: "Sandwich",
            description: `
                <p>Install the frame to the lid with the slide correctly positioned with four M3x8 SHCS screws.</p>
                <p>Make sure the slide moves freely after everything is secured.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=htlf'">HTLF Menu</button>
                    <button onclick="location.href='manual.html?manual=htlf&subManual=general_assembly'">Next Section</button>
                </div>
            `,
            parts: [
                "4x M3x8 SHCS"
            ]
        },
        htlf_general_assembly_step1: {
            title: "Frame Left",
            description: `
                <p>Install the 6x3 magnet with a drop of CA glue if needed as shown. Insert an MR85 Bearing into its groove.</p>
                <p>Install the <strong>DRIVE MOTOR</strong> with three M3x8 SHCS screws as shown. Note the arrow indicators are different as mentioned in the introduction. Snugly secure the one M3x8 SHCS screw that will be the pivot for adjustment later.</p>
            `,
            parts: [
                "frame_left.stl",
                "3x M3x8 SHCS screws",
                "1x 6x3 magnet",
                "1x MR85 bearing"
            ]
        },
        htlf_general_assembly_step2: {
            title: "Extrusion",
            description: `
                <p>Insert two M5 roll in nuts into the extrusion and make sure they align with the holes on frame_left.</p>
                <p>With the closed loop belt around the 80t pulley, insert the drive shaft assembly as shown.</p>
            `,
            parts: [
                "160mm 2020 extrusion",
                "2x M5 Roll in nuts",
                "1x 188mm GT2 Closed loop belt"
            ]
        },
        htlf_general_assembly_step3: {
            title: "Midplate Left",
            description: `
                <p>Secure midplate_left to frame_left with two M5x16 BHCS as shown. You can now set the base tension on the drive belt by securing the two M3x8 SHCS screws as shown.</p>
            `,
            parts: [
                "midplate_left.stl",
                "2x M5x16 BHCS screws"
            ]
        },
        htlf_general_assembly_step4: {
            title: "E-Body 1",
            description: `
                <p>Slide a previously prepared e_body onto the extrusion and secure in place with two M5x10 BHCS screws. Use <strong>THREAD LOCK</strong> to secure the bmg drive gear to the 5mm D shaft, ensuring alignment with the filament path.</p>
            `,
            parts: [
                "2x M5x10 BHCS screws",
                "2x M5 Roll in nuts"
            ]
        },
        htlf_general_assembly_step5: {
            title: "Depressor 1",
            description: `
                <p>Secure an assembled depressor to the e_body with an M3x20 SHCS and a washer. This needs to be free moving, <strong>do not overtighten</strong>. Now is the time to <strong>make certain that the magnets in these parts repel each other</strong>.</p>
                <p>Secure the homing sensor to the e_body with two M2x10 STS screws as shown.</p>
                <p>Insert an MR85 bearing into its groove as shown.</p>
            `,
            parts: [
                "1x M3x20 SHCS screw",
                "1x M3 Washer",
                "1x D2F-L (homing sensor)",
                "2x M2x10 STS screws",
                "1x MR85 bearing"
            ]
        },
        htlf_general_assembly_step6: {
            title: "E-Body 2",
            description: `
                <p>Slide a previously prepared e_body onto the extrusion and secure in place with two M5x10 BHCS screws. Use <strong>THREAD LOCK</strong> to secure the bmg drive gear to the 5mm D shaft, ensuring alignment with the filament path.</p>
            `,
            parts: [
                "2x M5x10 BHCS screws",
                "2x M5 Roll in nuts"
            ]
        },
        htlf_general_assembly_step7: {
            title: "Depressor 2",
            description: `
                <p>Secure an assembled depressor to the e_body with an M3x20 SHCS and a washer. This needs to be free moving, <strong>do not overtighten</strong>. Now is the time to <strong>make certain that the magnets in these parts repel each other</strong>.</p>
                <p>Insert an MR85 bearing into its groove as shown.</p>
            `,
            parts: [
                "1x M3x20 SHCS screw",
                "1x M3 Washer",
                "1x MR85 bearing"
            ]
        },
        htlf_general_assembly_step8: {
            title: "Cam Lobe 1",
            description: `
                <p>With an M5 washer on either side of lobe_1, slide the 5mm D shaft through e_body 2 until it hits midplate_left. <strong>MIND THE ORIENTATION</strong>.</p>
            `,
            parts: [
                "[a]_lobe_1.stl",
                "2x M5 washer",
                "~125mm 5mm D shaft"
            ]
        },
        htlf_general_assembly_step9: {
            title: "Cam Lobe 2",
            description: `
                <p>With an M5 washer on either side of lobe_2, slide it onto the 5mm D shaft until it rests against e_body 2. <strong>MIND THE ORIENTATION</strong>.</p>
            `,
            parts: [
                "[a]_lobe_2.stl",
                "2x M5 washer"
            ]
        },
        htlf_general_assembly_step10: {
            title: "E-Body 3",
            description: `
                <p>Slide a previously prepared e_body onto the extrusion and secure in place with two M5x10 BHCS screws. Use <strong>THREAD LOCK</strong> to secure the bmg drive gear to the 5mm D shaft, ensuring alignment with the filament path.</p>
            `,
            parts: [
                "2x M5x10 BHCS screws",
                "2x M5 Roll in nuts"
            ]
        },
        htlf_general_assembly_step11: {
            title: "Depressor 3",
            description: `
                <p>Secure an assembled depressor to the e_body with an M3x20 SHCS and a washer. This needs to be free moving, <strong>do not overtighten</strong>. Now is the time to <strong>make certain that the magnets in these parts repel each other</strong>.</p>
                <p>Insert an MR85 bearing into its groove as shown.</p>
            `,
            parts: [
                "1x M3x20 SHCS screw",
                "1x M3 Washer",
                "1x MR85 bearing"
            ]
        },
        htlf_general_assembly_step12: {
            title: "Cam Lobe 3",
            description: `
                <p>With an M5 washer on either side of lobe_3, slide it onto the 5mm D shaft until it rests against e_body 3. <strong>MIND THE ORIENTATION</strong>.</p>
            `,
            parts: [
                "[a]_lobe_3.stl",
                "2x M5 washer"
            ]
        },
        htlf_general_assembly_step13: {
            title: "E-Body 4",
            description: `
                <p>Slide a previously prepared e_body onto the extrusion and secure in place with two M5x10 BHCS screws. Use <strong>THREAD LOCK</strong> to secure the bmg drive gear to the 5mm D shaft, ensuring alignment with the filament path.</p>
            `,
            parts: [
                "2x M5x10 BHCS screws",
                "2x M5 Roll in nuts"
            ]
        },
        htlf_general_assembly_step14: {
            title: "Depressor 4",
            description: `
                <p>Secure an assembled depressor to the e_body with an M3x20 SHCS and a washer. This needs to be free moving, <strong>do not overtighten</strong>. Now is the time to <strong>make certain that the magnets in these parts repel each other</strong>.</p>
                <p>Insert an MR85 bearing into its groove as shown.</p>
            `,
            parts: [
                "1x M3x20 SHCS screw",
                "1x M3 Washer",
                "1x MR85 bearing"
            ]
        },
        htlf_general_assembly_step15: {
            title: "Cam Lobe 4",
            description: `
                <p>With an M5 washer on either side of lobe_4, slide it onto the 5mm D shaft until it rests against e_body 4. <strong>MIND THE ORIENTATION</strong>.</p>
            `,
            parts: [
                "[a]_lobe_4.stl",
                "2x M5 washer"
            ]
        },
        htlf_general_assembly_step16: {
            title: "Midplate Right",
            description: `
                <p><strong>NOT SHOWN: There is an additional MR85 beaing placed into the side of the midplate to support the drive shaft. Do not forget this!</strong></p>
                <p>Slide midplate_right onto the extrusion and insert two M5 roll in nuts to align with the holes.</p>
                <p>Slide an MR85 bearing on to the 5mm D shaft until it slots into its groove in midplate_right.</p>
            `,
            parts: [
                "midplate_right.stl",
                "2x MR85 bearing",
                "2x M5 roll in nuts"
            ]
        },
        htlf_general_assembly_step17: {
            title: "Cam Wheel",
            description: `
                <p>Slide the previously prepared 80t pulley onto the 5mm D shaft as shown. (The belt will be easier to install if you put it around the pulley before you do this). Secure the grub screws to the D shaft and use <strong>THREAD LOCKER</strong>. Follow with an MR85 Bearing.</p>
            `,
            parts: [
                "1x MR85 bearing",
                "1x 188mm GT2 closed loop belt"
            ]
        },
        htlf_general_assembly_step18: {
            title: "Frame Right",
            description: `
                <p>Install the <strong>CAM MOTOR</strong> with 3 M3x8 SHCS screws as shown. Note the arrow indicators are different as mentioned in the introduction. Snugly secure the one M3x8 SHCS screw that will be the pivot for adjustment later.</p>
            `,
            parts: [
                "frame_right.stl",
                "3x M3x8 SHCS screws"
            ]
        },
        htlf_general_assembly_step19: {
            title: "Cam Motor",
            description: `
                <p>Secure frame_left with two M5x16 BHCS as shown. You can now set base tension on the cam belt by securing the two M3x8 SHCS screws as shown.</p>
            `,
            parts: [
                "2x M5x16 BHCS screws"
            ]
        },
        htlf_general_assembly_step20: {
            title: "Trim",
            description: `
                <p>Install rear_brace and trim with M3x8 SHCS screws as shown.</p>
                <p><strong>Note: rear_brace is NOT symmetrical, the top side is marked with a T on the back  top side.</strong></p>
            `,
            parts: [
                "rear_brace.stl",
                "trim.stl",
                "8x M3x8 SHCS screws"
            ]
        },
        htlf_general_assembly_step21: {
            title: "Lid Diffusers",
            description: `
                <p>Insert four diffusers into the lid as shown.</p>
            `,
            parts: [
                "[a]_lid.stl",
                "[c]_diffuser_x4.stl"
            ]
        },
        htlf_general_assembly_step22: {
            title: "Lid",
            description: `
                <p>Install the led_retainer with 3 M3x6 BHCS screws as shown. Secure the wire lead to the lid with three 2x1mm zip ties.</p>
                <p>Install a 6x3mm magnet with a drop of CA glue if needed.</p>
                <p><strong>Note: This magnet should ATTRACT the magnet on frame_left</strong></p>
            `,
            parts: [
                "3x M3x6 BHCS screws",
                "6x3mm magnet"
            ]
        },
        htlf_general_assembly_step23: {
            title: "Board",
            description: `
                <p>Secure your chosen MCU to board_mount with M3x10 SHCS screws and board_spacer’s on the underside.</p>
            `,
            parts: [
                "3-4x board_offsets_x4.stl",
                "board_mount.stl",
                "3-4x M3x10 SHCS screws"
            ]
        },
        htlf_general_assembly_step24: {
            title: "Hub",
            description: `
                <p>Drop an MR63 bearing into the slot and follow with a D2HW micro switch as shown. Secure in place with an M3x10 SHCS screw. <strong>Do not over tighten this is threaded directly into plastic.</strong></p>
                <p>Insert an ECAS04 into each spot as shown. (These are intentionally a very tight fit).</p>
            `,
            parts: [
                "hub.stl",
                "1x M3x10 SHCS",
                "1x MR63 bearing",
                "1x D2HW microswitch",
                "5x ECAS04 collets"
            ]
        },
        htlf_general_assembly_step25: {
            title: "Final",
            description: `
                <p>Install the lid with a M3x16 SHCS screw on either side as shown.</p>
                <p>After plugging in your sensors, lights, and motors to your MCU, install the board mount to your HTLF with six M3x8 SHCS screws as shown.</p>
            `,
            parts: [
                "2x M3x16 SHCS screws",
                "6x M3x8 SHCS screws"
            ]
        },
        htlf_general_assembly_step26: {
            title: "Final",
            description: `
                <p>Now that your unit is built, you may choose to follow <a href="/docs/boxturtle/initial_startup/01-overview.html" target="_blank">BoxTurtle’s initial start up guide</a> (very similar process).</p>
                <p>Or choose your own adventure.</p>
                <p>Two of our discord members, <strong>@Mib | HTLF-011</strong> and <strong>@james1979 | HTLF-010</strong>, put together this <a href="/docs/assets/docs/HTLF_Wiring_help.pdf" target="blank">PDF file</a> to assist in the wiring of your HTLF.</p>
                <p>Feel free to ask questions in the <a href="https://discord.gg/AaVHfeYgw2" target="_blank">ArmoredTurtle Discord help community</a>.</p>
            `,
            parts: []
        }
    },
}
