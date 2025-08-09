export default {
    name: "BoxTurtle Manuals",
    subManuals: {
        introduction: {
            name: "1. BoxTurtle Introduction"
        },
        frame: {
            name: "2. BoxTurtle Frame"
        },
        extruders: {
            name: "3. BoxTurtle Extruders"
        },
        respoolers: {
            name: "4. Respoolers"
        },
        turtleneck: {
            name: "5. TurtleNeck"
        },
        general_assembly: {
            name: "6. General Assembly"
        },
        final: {
            name: "7. Final"
        }
    },
    steps: {
        boxturtle_introduction_step1: {
            title: "Introduction",
            content: `
                <div class="infoL">
                    <h3>INTRODUCTION</h3>
                    <p>This manual will walk you through the process of preparing for and assembling a BoxTurtle AFC by Armored Turtle. The introduction provides an overview of how to use this manual, along with guidance on the key decisions you'll need to make before printing your parts.</p>
                    <p class='extra-space'>Before beginning, please take note of a few <a href="/docs/afc-klipper-add-on/installation/buffer-overview.html" target="_blank">minor issues</a> that we were unable to correct in time for the v1.0 release.</p>
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
            title: "Part Selection",
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
            title: "Printed Parts Note",
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
            title: "Part Printing Guidelines",
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
            title: "Naming Conventions",
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
            title: "ECAS-04 Note",
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
        boxturtle_introduction_step10: {
            title: "Common Links",
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
            title: "Heatset Insert",
            description: `
                <p>Install one heatset insert as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            parts: [
                "rear_skirt_center_hub.stl",
                "1x M3 heatset insert"
            ]
        },
        boxturtle_frame_step2: {
            title: "Precursor",
            description: `
                <p>Make note of the multiple orientations the extruder assemblies can be installed on the under side of the trays.</p>
                <p>If you are using No_Hardware trays you will have enough heatset inserts to populate all four mounting holes on each tray.</p>
                <p>For simplicity the manual will cover installing the extruders parallel to the trays moving forward.</p>
            `,
            parts: []
        },
        boxturtle_frame_step3: {
            title: "More Heatset Inserts",
            description: `
                <p>Install heatset inserts as shown.</p>
                <p><strong>Note:</strong> This is the last step of this section that will require installing heatsets. Be sure to turn off your soldering iron and set it somewhere safe.</p>
                <p><strong>If using No_Hardware trays,</strong> skip to page 5 after installing the heatsets on the underside of your trays.</p>
            `,
            parts: [
                "4 Trays of your choosing",
                "28x M3 heatset inserts (12 if using No_Hardware trays)"
            ]
        },
        boxturtle_frame_step4: {
            title: "Attach the \"bars\"",
            description: `
                <p>Secure "bars" to trays using M3x8 SHCS screws as shown.</p>
            `,
            parts: [
                "4x bar_long.stl",
                "8x bar_short.stl",
                "16x M3x8 SHCS"
            ]
        },
        boxturtle_frame_step5: {
            title: "Install D2HW Switch",
            description: `
                <p>Insert an MR63ZZ bearing and follow with a D2HW microswitch as shown. Secure with an M3x10 SHCS screw.</p>
                <p>Be careful to not over tighten this screw, it is threaded into plastic.</p>
                <p>Ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2HW-C201H.png" target="_blank">switch is wired</a> before installation. Refer to the <a href="/docs/boxturtle/wiring-guide.html" target="_blank">wiring guide</a> to determine which lengths to use.</p>
                <p><strong>Note:</strong> Now is the time to be SURE that your filament pathways are clear and unobstructed. You may find that a 2mm drill bit <i>by hand</i> can clean up trouble areas if you have them.</p>
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
            title: "Support Removal",
            description: `
                <p>Remove supports as shown and discard appropriately.</p>
            `,
            parts: [
                "right_rear_skirt.stl"
            ]
        },
        boxturtle_frame_step9: {
            title: "Fan Installation",
            description: `
                <p>Install the fan ensuring that it will be flowing air inside the BoxTurtle. Secure with 4 M3x16 BHCS screws.</p>
                <p>You are screwing directly into plastic, do not over tighten.</p>
                <p><strong>Note: </strong>The original 3010 fan on the BOM was mistakenly specified as a 12K RPM fan, and can be quite loud. The controller  fan is 100% optional and can be omitted from installation, or replaced with an alternative, slower fan.</p>
            `,
            parts: [
                "1x 3010 5V fan",
                "4x M3x16 BHCS"
            ]
        },
        boxturtle_frame_step10: {
            title: "Support Removal",
            description: `
                <p>Remove the built in supports as shown, a small flathead screwdriver may be used to get behind them and pry outwards.</p>
            `,
            parts: [
                "4x corner_printed.stl"
            ]
        },
        boxturtle_frame_step11: {
            title: "Rear Extrusion Assembly",
            description: `
                <p>Thread two M5x16 BHCS screws through the printed corner into the 360mm extrusions as shown.</p>
                <p><strong>Remember:</strong> As stated in the introduction, blue arrows signify that you do not want to fully tighten these screws yet.</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x M5x16 BHCS",
                "2x 360mm 2020 extrusions"
            ]
        },
        boxturtle_frame_step12: {
            title: "Rear Extrusion Assembly",
            description: `
                <p>Be mindful of orientation as you slot the rear panel skirts into the extrusions as shown.</p>
            `,
            parts: [
                "right_rear_skirt.stl",
                "rear_skirt_center_hub.stl",
                "left_rear_skirt.stl"
            ]
        },
        boxturtle_frame_step13: {
            title: "Rear Extrusion Assembly",
            description: `
                <p>Thread two M5x16 BHCS screws through the printed corner into the 360mm extrusions as shown.</p>
                <p>You may now fully tighten all four screws as shown.</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x M5x16 BHCS"
            ]
        },
        boxturtle_frame_step14: {
            title: "Rear Extrusion Assembly",
            description: `
                <p>Slot the hub into the skirt and secure with an M3x10 SHCS screw as shown.</p>
            `,
            parts: [
                "[a]_hub_(type).stl",
                "1x M3x10 SHCS"
            ]
        },
        boxturtle_frame_step15: {
            title: "Front Extrusion Assembly",
            description: `
                <p>Thread two M5x16 BHCS screws through the printed corner into the 360mm extrusions as shown.</p>
                <p><strong>Remember:</strong> As stated in the introduction, blue arrows signify that you do not want to fully tighten these screws yet.</p>
            `,
            parts: [
                "corner_printed.stl",
                "2 M5x16 BHCS",
                "2x 360mm 2020 extrusions"
            ]
        },
        boxturtle_frame_step16: {
            title: "Front Extrusion Assembly",
            description: `
                <p>Be mindful of orientation as you slot the front panel skirts into the extrusions as shown.</p>
            `,
            parts: [
                "2x front_skirt.stl"
            ]
        },
        boxturtle_frame_step17: {
            title: "Front Extrusion Assembly",
            description: `
                <p>Thread two M5x16 BHCS screws through the printed corner into the 360mm extrusions as shown.</p>
                <p>You may now fully tighten all four screws as shown.</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x M5x16 BHCS"
            ]
        },
        boxturtle_frame_step18: {
            title: "Side Extrusion Assembly",
            description: `
                <p>Thread four M5x16 BHCS screws through the printed corner into the 220mm extrusions as shown.</p>
            `,
            parts: [
                "4x 220mm 2020 extrusions",
                "4x M5x16 BHCS"
            ]
        },
        boxturtle_frame_step19: {
            title: "Side Extrusion Assembly",
            description: `
                <p>Slot the side skirt panels into the extrusions as shown.</p>
            `,
            parts: [
                "4x side_skirt.stl"
            ]
        },
        boxturtle_frame_step20: {
            title: "Trays",
            description: `
                <p>Slot the trays into the rear extrusion as shown being mindful of orientation.</p>
                <p><strong>Note:</strong> You may find it easiest to lay these upside down on the table until you secure them in the following step.</p>
            `,
            parts: [
                "4x trays"
            ]
        },
        boxturtle_frame_step21: {
            title: "Putting it all Together",
            description: `
                <p>Secure the front panel to the rest of the frame with four M5x16 BHCS screws as shown.</p>
                <p>Ensure that the trays are slotted into the front and rear top extrusions.</p>
                <p><strong>Remember:</strong> As stated in the introduction, blue arrows signify that you do not want to fully tighten these screws yet.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=extruders'">Next Section</button>
                </div>
            `,
            parts: [
                "4x M5x16 BHCS"
            ]
        },
        boxturtle_extruders_step1: {
            title: "Before You Start...",
            description: `
                <p>You will need <strong>four extruders</strong> in total to assemble your BoxTurtle. You can build one at a time, or all four at once, just make sure you have four before you move on! We will remind you again at the end of this section.</p>
            `,
            parts: []
        },
        boxturtle_extruders_step2: {
            title: "Heatset Inserts",
            description: `
                <p>Install 6 heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
                <p><strong>Note:</strong> This is the last step of this section that will require installing heatsets. Be sure to turn off your soldering iron and set it somewhere safe.</p>
            `,
            parts: [
                "motor_plate_x4.stl",
                "extruder_housing_x4.stl",
                "6x M3 heatset inserts"
            ]
        },
        boxturtle_extruders_step3: {
            title: "D2HW Microswitch",
            description: `
                <p>Drop the bearing into it's slot making sure that it slides freely. Firmly press the microswitch in behind it.</p>
                <p>Ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2HW-C201H.png" target="_blank">switches are wired</a> before installation. Refer to the <a href="/docs/boxturtle/wiring-guide.html" target="_blank">wiring guide</a> to determine which lengths to use.</p>
                <p><strong>Note:</strong> Now is the time to be SURE that your filament pathways are clear and unobstructed. You may find that a 2mm drill bit <i>by hand</i> can clean up trouble areas if you have them.</p>
            `,
            parts: [
                "MR63ZZ bearing",
                "D2HW-C201H microswitch"
            ]
        },
        boxturtle_extruders_step4: {
            title: "Drive Gear Assembly",
            description: `
                <p>Assemble the drive gear as shown.</p>
                <p><strong>Note:</strong> Align the grub screw with the flat side of the D-shaft, but not tighten it fully at this time.</p>
            `,
            parts: [
                "2x MR85 Bearings",
                "50t spindle",
                "Drive gear"
            ]
        },
        boxturtle_extruders_step5: {
            title: "Drive Gear Insertion",
            description: `
                <p>Press the extruder drive gear into the extruder housing as shown.</p>
            `,
            parts: []
        },
        boxturtle_extruders_step6: {
            title: "Motor Plate",
            description: `
                <p>Install the motor plate to the extruder housing as shown with 3 M3x8 SHCS screws.</p>
                <p>Thread in an M3x8 SHCS on the side until it bottoms out.</p>
            `,
            parts: [
                "4x M3x8 SHCS"
            ]
        },
        boxturtle_extruders_step7: {
            title: "Drive Gear Alignment",
            description: `
                <p>Insert a piece of filament and ensure that the drive gear is aligned appropriately. Secure the grub screw.</p>
                <p><strong>Note:</strong> This is the time to use loctite if it was not pre applied to the grub screw.</p>
                <p>Check that the filament sensor makes an audible click sound as filament is inserted through it.</p>
            `,
            parts: [
                "Small piece of filament"
            ]
        },
        boxturtle_extruders_step8: {
            title: "ECAS Coupler",
            description: `
                <p>Install an ECAS bowden coupler on each end of the extruder as shown.</p>
                <p><strong>Note:</strong> These are meant to be tight, you can lay them flat on the table and press the printed parts onto them.</p>
            `,
            parts: [
                "2x ECAS04 with rear rubber bumper removed"
            ]
        },
        boxturtle_extruders_step9: {
            title: "Support Removal",
            description: `
                <p>Remove the print in place support as shown.</p>
            `,
            parts: [
                "[a]_guidler_x4.stl"
            ]
        },
        boxturtle_extruders_step10: {
            title: "Guidler Idler",
            description: `
                <p>Assemble the idler by placing the 2 needle bearings in the idler gear and slide the 20mm pin inside the assembly.</p>
                <p><strong>Note:</strong> Now is the time to lubricate the needle bearings.</p>
                <p>Firmly press the idler assembly into the guidler as shown. Mind the orientation!</p>
            `,
            parts: [
                "2x needle bearings",
                "20mm pin",
                "Idler gear"
            ]
        },
        boxturtle_extruders_step11: {
            title: "Guidler Installation",
            description: `
                <p>Install the guidler and secure with an M3x30 BHCS screw as shown. Do not over tighten this screw, the guidler should still be free swinging.</p>
            `,
            parts: [
                "M3x30 BHCS"
            ]
        },
        boxturtle_extruders_step12: {
            title: "Tensioner",
            description: `
                <p>Thread the tensioner through the guidler until the spring engages fully. Turn two and one half turns further.</p>
            `,
            parts: [
                "Tensioner set"
            ]
        },
        boxturtle_extruders_step13: {
            title: "Anti-Squish",
            description: `
                <p>Insert a piece of filament through the extruder and adjust the grip by backing out the anti-squish screw.</p>
                <p>Here is a <a href="https://www.youtube.com/watch?v=L1gxBCiE0pk" target="_blank">helpful video by Dr. Dave</a> on setting anti-squish appropriately.</p>
                <p><strong>Note:</strong> The extruder gears should have good bite into the filament and everything should spin smoothly as you pull filament through. The anti squish screw NEEDS to be set because this extruder absolutely can crush filament.</p>
                <p>Now is the time to make sure everything is adjusted properly for smooth operation.</p>
            `,
            parts: [
                "Small filament piece"
            ]
        },
        boxturtle_extruders_step14: {
            title: "Stepper Motor",
            description: `
                <p>Place the stepper motor onto the extruder housing. Secure with M3x8 SHCS screws. Don't forget the M3 washer on the adjustable side as shown.</p>
                <p>Refer to the <a href="/docs/boxturtle/wiring-guide.html" target="_blank">wiring guide</a> to determine which lengths to use. The relative lengths of the stepper motor wires should match those of your microswitch.</p>
                <p><strong>Note:</strong> The blue arrow indicates that you will not fully tighten this screw at this time as stated in the introduction.</p>
            `,
            parts: [
                "2x M3x8 SHCS",
                "1x M3 washer",
                "Nema 14 36 pancake motor"
            ]
        },
        boxturtle_extruders_step15: {
            title: "Backlash Adjustment",
            description: `
                <p>Ensure the backlash between the stepper gear and 50t is set appropriately. Secure the adjustment screw as shown.</p>
                <p>Here is a <a href="https://www.youtube.com/watch?v=ly22qmB3NxE" target="_blank">helpful video by Dr. Dave</a> on setting backlash appropriately.</p>
                <p>Zip tie the motor wires to the extruder body as shown.</p>
            `,
            parts: [
                "Zip tie"
            ]
        },
        boxturtle_extruders_step16: {
            title: "Friendly Reminder!",
            description: `
                <p>You need <strong>four extruders</strong> in total to assemble your BoxTurtle. Before you move on to the next section, ensure you have four extruder units.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=respoolers'">Next Section</button>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step1: {
            title: "Sanity Check",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>SANITY CHECK!</h3>
                    <p>Check the fit of the MR148zz bearings on the 80mm shaft and use a drill and sandpaper if the fit is too tight.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step2: {
            title: "Before You Start...",
            description: `
                <p>You will need <strong>four respoolers</strong> in total to assemble your BoxTurtle. You can build one at a time, or all four at once, just make sure you have four before you move on! We will remind you again at the end of this section.</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step3: {
            title: "Support Removal",
            description: `
                <p>Break away the supports.</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "frame_left_x4.stl",
                "motor_mount_x4.stl"
            ]
        },
        boxturtle_respoolers_step4: {
            title: "Heatset Inserts",
            description: `
                <p>Install five heatset inserts as shown.</p>
                <p>Note: Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "frame_left_x4.stl",
                "motor_mount_x4.stl",
                "gearbox_cover_x4.stl",
                "5x M3 Heatset inserts"
            ]
        },
        boxturtle_respoolers_step5: {
            title: "Heatset Inserts Pt. 2",
            description: `
                <p>Install four heatset inserts as shown.</p>
                <p>Note: Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
                <p><strong>Note:</strong> This is the last step of this section that will require installing heatsets. Be sure to turn off your soldering iron and set it somewhere safe.</p>
            `,
            parts: [
                "[a]_wheel_drive_x8.stl",
                "4x M3 Heatset inserts"
            ]
        },
        boxturtle_respoolers_step6: {
            title: "ECAS04 Coupler",
            description: `
                <p>Insert the ECAS04 fitting as shown. </p>
                <p><strong>Note:</strong> These are meant to be tight, you can lay them flat on the table and press the printed parts onto them using the motor_mount_helper tool.</p>
            `,
            parts: [
                "motor_mount_x4.stl",
                "motor_mount_helper.stl",
                "ECAS04 bowden coupler with rear rubber bumper removed"
            ]
        },
        boxturtle_respoolers_step7: {
            title: "Magnets",
            description: `
                <p>Install the magnets, making sure they attract each other.</p>
                <p><strong>Note:</strong> If the magnet fit is loose a drop of superglue can be used to hold them in.</p>
            `,
            parts: [
                "motor_mount_x4.stl",
                "trigger_x4.stl",
                "2x 6x3 magnets"
            ]
        },
        boxturtle_respoolers_step8: {
            title: "MR63 Bearing",
            description: `
                <p>Slide the MR63 bearing into place as Shown. Secure the bearing with an M3x10 SHCS.</p>
                <p><strong>Note:</strong> Screw down until snug but do not overtighten as it could strip the plastic.</p>
            `,
            parts: [
                "1x M3x10 SHCS",
                "1x MR63 Bearing"
            ]
        },
        boxturtle_respoolers_step9: {
            title: "MR63 Bearing",
            description: `
                <p>Slide the MR63 bearing into place as Shown. Secure the bearing with an M3x8 SHCS.</p>
                <p><strong>Note:</strong> Screw down until snug but do not overtighten as it could strip the plastic.</p>
            `,
            parts: [
                "1x M3x8 SHCS",
                "1x MR63 Bearings"
            ]
        },
        boxturtle_respoolers_step10: {
            title: "Trigger Preparation",
            description: `
                <p>Screw the M3x8 screws into each side of the trigger as shown. Leave about 3.5mm of space between the trigger body and the screw head.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step11: {
            title: "30t Gear Assembly",
            description: `
                <p>Place gear in 30t tool as shown with lip facing down. Gently drive 80mm shaft into the gear until in reaches the bottom of the tool.</p>
                <P>The gear <strong>MUST</strong> be a tight fit on the shaft and should not easily move.</p>
                <p><strong>LDO gears in batch 1 and 2 are too loose.</strong> You may either secure them with glue, or use the FDM printed versions.</P>
                <p><strong>Note:</strong> Make sure to keep the shaft vertical when starting to drive it down. The jig will guide it straight once it is past the gear.</p>
            `,
            parts: [
                "30t assembly tool",
                "helical_gear_30t_x4.stl",
                "80mm shaft"
            ]
        },
        boxturtle_respoolers_step12: {
            title: "Spacer",
            description: `
                <p>Slide the spacer over the long side of the shaft until it contacts the 30t gear.</p>
            `,
            parts: [
                "gear_30_spacer_x4.stl"
            ]
        },
        boxturtle_respoolers_step13: {
            title: "N20 Motor Setup",
            description: `
                <p>Before installing your n20 motors, ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/N20_6V_500RPM.png" target="_blank">wires are the correct length</a>.</p>
                <p>Place the n20 motor into the jig as shown. Align the D-Cutout with the motor shaft and push until the gear reaches the face of the jig.</p>
                <p>The 15T installation tool is an intentionally firm fit around the N20 motor and gearbox to support it while you install the 15t herringbone gear.</p>
                <p><strong>DO NOT FORCE THE 15t GEAR ONTO THE MOTOR WITH TOOLS.</strong> You may cause damage to the gearbox. If it does not fit, reprint the gears with adjusted settings.</p>
                <p><strong>IMPORTANT:</strong> Please ensure that there are no debris from the manufacturing process in the N20 gearbox. You may want to flush it with IPA or a similar solvent.</p>
            `,
            parts: [
                "15t Assembly Tool",
                "helical_gear_15t_x4.stl",
                "N20 motor"
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
            title: "Neopixel Installation",
            description: `
                <p>Before installing your LEDs, ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/WS2812_PCB.png" target="_blank">wiring harness is the correct length</a>.</p>
                <p>Press the diffuser into the lightbox. Orient the neopixel in the led_retainer.</p>
            `,
            parts: [
                "[a]_lightbox_x4.stl",
                "[a]_led_retainer_x4.stl",
                "[c]_led_diffuser_x4.stl",
                "RGB harness"
            ]
        },
        boxturtle_respoolers_step16: {
            title: "Neopixel Installation",
            description: `
                <p>Press the led_retainer into place in the lightbox.</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step17: {
            title: "N20 Motor Installation",
            description: `
                <p>Slide the n20 motor into the groove on the motor_mount. Make sure the wires are facing up when the motor is in place.</p>
                <p><strong>Note:</strong> We recommend you lube the gearbox of the n20 motor. Super Lube is a good option, but other lubricants are fine so long as they are safe around your plastic parts.</p>
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
            title: "Gearbox Cover",
            description: `
                <p>Fold the wires over the top of the motor as shown and attach using the supplied zip tie mounts. Make sure the zip tie is tight and the tab is cut flush with the connector.</p>
                <p>Slide the gearbox cover into place and secure with the M3x10 SHCS.</p>
            `,
            parts: [
                "gearbox_cover_x4.stl",
                "M3x10 SHCS",
                "2x zip ties"
            ]
        },
        boxturtle_respoolers_step20: {
            title: "Frame Bearings",
            description: `
                <p>Install the bearings into the parts as shown. Make sure the bearing is flush with the outside face of the parts.</p>
            `,
            parts: [
                "frame_left_x4.stl",
                "frame_right_x4.stl",
                "2x MR148ZZ Bearings"
            ]
        },
        boxturtle_respoolers_step21: {
            title: "Left_Frame Installation",
            description: `
                <p>Slide the frame_left into place. Make sure the wires are on top of the n20 motor and don't get pinched by the frame. Secure with an M3x8 SHCS but leave it loose for the next step.</p>
            `,
            parts: [
                "frame_left_x4.stl",
                "M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step22: {
            title: "Add the 30t Gear Shaft",
            description: `
                <p>Slide the gear_30_spacer over the longer side of the 80mm shaft until it is against the 30t gear. Then, slide the shaft with the 30t gear into the bearing in frame_left.</p>
                <p>If you left the screw loose in the last step, you should be able to slightly pivot the shaft and gear to mesh the teeth with the 15t gear on the n20 motor.</p>
                <p>Once it's in place you can fully tighten the screw on the left frame.</p>
                <p><strong>Note:</strong> Make sure the bottom of the left_frame is flush with the bottom of the motor_body. There are index tabs to help line them up but there is still some play in the fit.</p>
            `,
            parts: [
                "gear_30_spacer_x4.stl",
                "80mm shaft w/ 30t gear"
            ]
        },
        boxturtle_respoolers_step23: {
            title: "Closing up the Sides",
            description: `
                <p>Slide the frame_right over the shaft as shown. While it is still loose, run the wires for the lightbox LED through the supplied channel.</p>
                <p>As you close it up, make sure the wires move freely and nothing is pinched. Secure using an M3x8 SHCS</p>
                <p><strong>Note:</strong> Just like the previous step, make sure the bottom is flush with the main_body.</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "Lightbox assembly",
                "M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step24: {
            title: "Sanity Check",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>SANITY CHECK!</h3>
                    <p>Make sure your shaft rotates smoothly, with no binding of the gears before you continue.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step25: {
            title: "Insert the Trigger",
            description: `
                <p>Drop the trigger into the re-spooler as shown. Ensure the screws are not rubbing the sides and the trigger is able to move back and forth freely.</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step26: {
            title: "Attach the Lightbox",
            description: `
                <p>Insert the two upper tabs of the lightbox into the motor_mount then press down to snap it into place.</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step27: {
            title: "Sanity Check",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>SANITY CHECK!</h3>
                    <p>Make sure the trigger moves freely back and forth and doesn't get stuck.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step28: {
            title: "Wheel Drives",
            description: `
                <p>Slide the bearing spacers on to the axle followed by the wheel drives. These should seat flush against the the bearings in the frame sides.</p>
            `,
            parts: [
                "[a]_wheel_drive_x8.stl",
                "[a]_bearing_spacer_x8.stl"
            ]
        },
        boxturtle_respoolers_step29: {
            title: "Securing the Wheel Drives",
            description: `
                <p>Secure the wheel drives to the 8x80 axle with M3x6 SHCS screws as shown.</p>
                <p><strong>LDO KITS:</strong> Use M3x6 BHCS instead.</p>
            `,
            parts: [
                "4x M3x6 SHCS (BHCS for LDO Kits)"
            ]
        },
        boxturtle_respoolers_step30: {
            title: "Wheels",
            description: `
                <p>Slide the tires onto the wheels as shown. Make sure the tire is in the correct orientation so the groove will lock into the wheel.</p>
                <p><strong>Note:</strong> If you are having trouble getting the TPU tires on, it may help to heat them up a little bit.</p>
            `,
            parts: [
                "[a]_wheel_x8.stl",
                "tpu_tire_x8.stl"
            ]
        },
        boxturtle_respoolers_step31: {
            title: "Attaching the Wheels",
            description: `
                <p>Twist the wheels onto the axel until they firmly click and lock into place.</p>
            `,
            parts: [
                "[a]_wheel_x8.stl",
                "tpu_tire_x8.stl"
            ]
        },
        boxturtle_respoolers_step32: {
            title: "Friendly Reminder!",
            description: `
                <p>You need <strong>four respoolers</strong> in total to assemble your BoxTurtle. Before you move on to the next section, ensure you have four units built.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=turtleneck'">Next Section</button>
                </div>
            `,
            parts: []
        },
        boxturtle_turtleneck_step1: {
            title: "Heatset Inserts",
            description: `
                <p>Install four heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
                <p><strong>Note:</strong> This is the last step of this section that will require installing heatsets. Be sure to turn off your soldering iron and set it somewhere safe.</p>
            `,
            parts: [
                "lid.stl",
                "4x M3 heatset inserts"
            ]
        },
        boxturtle_turtleneck_step2: {
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
        boxturtle_turtleneck_step3: {
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
        boxturtle_turtleneck_step4: {
            title: "Slide",
            description: `
                <p>Place the slide into the lid as shown.</p>
            `,
            parts: []
        },
        boxturtle_turtleneck_step5: {
            title: "Sandwich",
            description: `
                <p>Install the frame to the lid with the slide correctly positioned with four M3x8 SHCS screws.</p>
                <p>Make sure the slide moves freely after everything is secured.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=general_assembly'">Next Section</button>
                </div>
            `,
            parts: [
                "4x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step1: {
            title: "Initial Note",
            content: `
                <div class="infoL">
                    <h3>BEFORE WE CONTINUE...</h3>
                    <p>This section will end with a BoxTurtle that is ready for initial validation and setup. The next section will cover finishing trim pieces.</p>
                    <p>In this section, each lane will be assembled one at a time starting from lane 4 (far right) and working back to lane 1 (far left).</p>
                    <p>The intent is to demonstrate intended wire routing for BoxTurtle.</p>
                    <p class='extra-space'>If you are confident in your abilities, you may do all 4 lanes of each step in one go. Otherwise; while awkward, this section will take you from a pile of modules to a functioning BoxTurtle.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step2: {
            title: "Trigger Retainers",
            description: `
                <p>Install each D2F microswitch with lever (prep) with 2 M2x10 self-tapping screws as shown.</p>
                <p>Ensure your <a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2F_W-Lever.png" target="_blank">switches are wired</a> before installation.</p>
                <p>You will need four of these.</p>
            `,
            parts: [
                "[a]_feed_trigger_retainer_x4.stl",
                "8x M2x10 self-tapping screws",
                "4x D2F-L microswitch (prep)"
            ]
        },
        boxturtle_general_assembly_step3: {
            title: "Remove Extrusion",
            description: `
                <p>Remove the two M5x16 BHCS screws as shown. Remove the 220mm 2020 extrusion from the frame. The AFC-Lite control board will mount to this extrusion, and it will be easier to wire later when it is removed from the BoxTurtle.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step4: {
            title: "Roll NUts",
            description: `
                <p>Slot the roll nuts into the previously removed 220mm 2020 extrusion. Orientation doesn’t matter here, just ensure that the roll nuts are placed in the same channel. The appropriate distance from threaded hole to threaded hole is 88mm.</p>
            `,
            parts: [
                "2x M3 roll in nuts"
            ]
        },
        boxturtle_general_assembly_step5: {
            title: "AFC Mount",
            description: `
                <p>Ensure that the stepper drivers are properly installed at this time. Depending on the revision of AFC-Lite board you have, the input power selection switch leads may be long enough to interfere with the printed mount. You may want to snip these short with a pair of flush cutters being careful of the solder joints.</p>
                <p>Mount the AFC-Lite board to the printed mount as shown using 2 M3x8 SHCS screws. These are threaded into plastic so be mindful to not overtighten.</p>
            `,
            parts: [
                "afc_mount.stl",
                "2x M3x8 SHCS",
                "AFC-Lite board"
            ]
        },
        boxturtle_general_assembly_step6: {
            title: "Flashing AFC-Lite",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>STOP!</h3>
                    <p>If you have not yet flashed your AFC-Lite and paired it with your printer, now is the time to do so!</p>
                    <p>Now is also the time to make sure you have your CANBUS or USB + Power Cables made to connect  your BoxTurtle to your printer.</p>
                    <p>Some useful resources to guide you in this step include: the <a href="https://github.com/xbst/AFC-Lite/blob/master/Docs/AFC-Lite_Manual.pdf" target="_blank">AFC-Lite Manual</a>, <a href="https://canbus.esoterical.online/toolhead_flashing/common_hardware/AFC-Lite/README.html" target="_blank">Esoterical Can Bus Guide</a>, <a href="https://usb.esoterical.online/hardware_config/STM32/AFC_Lite.html" target="_blank">Esoterical USB Guide</a>, and <a href="https://github.com/EricZimmerman/VoronTools/blob/main/EBB_CAN.md" target="_blank">additional Can Bus info</a>.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step7: {
            title: "AFC Mounting",
            description: `
                <p><strong>Depending on your workspace you may want to skip this step and come back to it near the end of this section.</strong></p>
                <p>Mount the AFC-Lite to the extrusion with two M3x10 SHCS. The appropriate location to fully secure it is approximately 34mm from the front edge of the extrusion.</p>
            `,
            parts: [
                "2x M3x10 SHCS"
            ]
        },
        boxturtle_general_assembly_step8: {
            sectionName: "Lane 4",
            title: "Lane 4 Spooler",
            description: `
                <p>Identify the spooler with the lane 4 N20 lead (~515mm) and slot it into the lane 4 tray as shown. There are tabs protruding from the front of the spooler that slot into the extrusion. Insert those and then rock the spooler into the tray.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step9: {
            title: "Secure Lane 4 Spooler",
            description: `
                <p>Secure the spooler in place with 2 M3x8 SHCS screws as shown.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step10: {
            title: "Trigger Retainer Installation",
            description: `
                <p>Install the prep switch for lane 4 (prep, 435mm lead) with an M3x8 SHCS screw and an M3 washer.</p>
                <p>Secure it in place where the switch is collapsed without forcing the trigger on the spooler forward. The default state of the prep sensor should be fully closed.</p>
            `,
            parts: [
                "M3x8 SHCS",
                "M3 Washer"
            ]
        },
        boxturtle_general_assembly_step11: {
            title: "Lane 4 Extruder",
            description: `
                <p><strong>NOTE:</strong> Some users find it easier to install the 80mm 3mm ID bowden tube into the extruder/spooler before securing the extruder to the underside of the tray. This will not be mentioned again.</p>
                <p>Identify the extruder for lane 4 (Load 4 510mm lead, Motor 4 520mm lead).</p>
                <p>Secure lane 4 extruder with two M3x8 SHCS screws as shown. Be mindful of the orientation of the extruder.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step12: {
            title: "Wire Route",
            description: `
                <p>The intended wire routing for lane 4 is shown here.</p>
                <p>There are many zip tie points on the underside of the trays, however now is not the time to tightly secure them in place. You may loosely secure the wires for lane 4 in place at this time. The next page will show exactly where to plug all of lane 4 into the AFC-Lite to match the default AFC Klipper add on config for quick set up.</p>
                <div class='wiring-key'>
                    <strong>KEY:</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Stepper</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step13: {
            title: "Lane 4 Wiring Guide",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_10_Lane_4_Wiring.jpg" alt="Wiring Guide">
                    <p>The image shows the ports to install each lane 4 module plug into to match the default AFC Klipper add on config for BoxTurtle.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step14: {
            sectionName: "Lane 3",
            title: "Lane 3 Spooler",
            description: `
                <p>Identify the spooler with the lane 3 N20 lead (~415mm) and slot it into the lane 3 tray as shown. There are tabs protruding from the front of the spooler that slot into the extrusion. Insert those and then rock the spooler into the tray.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step15: {
            title: "Secure Lane 3 Spooler",
            description: `
                <p>Secure the spooler in place with two M3x8 SHCS screws as shown.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step16: {
            title: "Trigger Retainer Installation",
            description: `
                <p>Install the prep switch for lane 3 (prep, 335mm lead) with an M3x8 SHCS screw and an M3 washer.</p>
                <p>Secure it in place where the switch is collapsed without forcing the trigger on the spooler forward. The default state of the prep sensor should be fully closed.</p>
            `,
            parts: [
                "M3x8 SHCS",
                "M3 Washer"
            ]
        },
        boxturtle_general_assembly_step17: {
            title: "Lane 3 Extruder",
            description: `
                <p>Identify the extruder for lane 3 (Load 3 410mm lead, Motor 3 420mm lead).</p>
                <p>Secure lane 3 extruder with 2 M3x8 SHCS screws as shown. Be mindful of the orientation of the extruder.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step18: {
            title: "Wire Route",
            description: `
                <p>The intended wire routing for lane 3 is shown here.</p>
                <p>There are many zip tie points on the underside of the trays, however now is not the time to tightly secure them in place. You may loosely secure the wires for lane 3 in place at this time. The next page will show exactly where to plug all of lane 3 into the AFC-Lite to match the default AFC Klipper add on config for quick set up.</p>
                <div class='wiring-key'>
                    <strong>KEY:</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Stepper</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step19: {
            title: "Lane 3 Wiring Guide",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_15_Lane_3_Wiring.jpg" alt="Wiring Guide">
                    <p>The image shows the ports to install each lane 3 module plug into to match the default AFC Klipper add on config for BoxTurtle.</p> 
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step20: {
            title: "Hub Wiring",
            description: `
                <p>The intended routing for the hub wiring is shown.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step21: {
            title: "Hub Wiring Guide",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_17_Hub_Wiring.jpg" alt="Wiring Guide">
                    <p>The image shows the port to install the hub plug into to match the default AFC Klipper add on config for BoxTurtle.</p> 
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step22: {
            sectionName: "Lane 2",
            title: "Lane 2 Spooler",
            description: `
                <p>Identify the spooler with the lane 2 N20 lead (~315mm) and slot it into the lane 2 tray as shown. There are tabs protruding from the front of the spooler that slot into the extrusion. Insert those and then rock the spooler into the tray.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step23: {
            title: "Secure Lane 2 Spooler",
            description: `
                <p>Secure the spooler in place with two M3x8 SHCS screws as shown.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step24: {
            title: "Trigger Retainer Installation",
            description: `
                <p>Install the prep switch for lane 2 (prep, 235mm lead) with an M3x8 SHCS screw and an M3 washer.</p>
                <p>Secure it in place where the switch is collapsed without forcing the trigger on the spooler forward. The default state of the prep sensor should be fully closed.</p>
            `,
            parts: [
                "M3x8 SHCS",
                "M3 Washer"
            ]
        },
        boxturtle_general_assembly_step25: {
            title: "Lane 2 Extruder",
            description: `
                <p>Identify the extruder for lane 2 (Load 2 310mm lead, Motor 2 320mm lead).</p>
                <p>Secure lane 2 extruder with 2 M3x8 SHCS screws as shown. Be mindful of the orientation of the extruder.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step26: {
            title: "Wire Route",
            description: `
                <p>The intended wire routing for lane 2 is shown here.</p>
                <p>There are many zip tie points on the underside of the trays however now is not the time to tightly secure them in place. You may loosely secure the wires for lane 2 in place at this time. The next page will show exactly where to plug all of lane 2 into the AFC-Lite to match the default AFC Klipper add on config for quick set up.</p>
                <div class='wiring-key'>
                    <strong>KEY:</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Stepper</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step27: {
            title: "Lane 2 Wiring Guide",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_22_Lane_2_Wiring.jpg" alt="Wiring Guide">
                    <p>The image shows the ports to install each lane 2 module plug into to match the default AFC Klipper add on config for BoxTurtle.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step28: {
            sectionName: "Lane 1",
            title: "Lane 1 Spooler ",
            description: `
                <p>Identify the spooler with the lane 1 N20 lead (~205mm) and slot it into the lane 1 tray as shown. There are tabs protruding from the front of the spooler that slot into the extrusion. Insert those and then rock the spooler into the tray.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step29: {
            title: "Secure Lane 1 Spooler",
            description: `
                <p>Secure the spooler in place with two M3x8 SHCS screws as shown.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step30: {
            title: "Trigger Retainer Installation",
            description: `
                <p>Install the prep switch for lane 1 (prep, 155mm lead) with an M3x8 SHCS screw and an M3 washer.</p>
                <p>Secure it in place where the switch is collapsed without forcing the trigger on the spooler forward. The default state of the prep sensor should be fully closed.</p>
            `,
            parts: [
                "M3x8 SHCS",
                "M3 Washer"
            ]
        },
        boxturtle_general_assembly_step31: {
            title: "Lane 1 Extruder",
            description: `
                <p>Identify the extruder for lane 1 (Load 1 200mm lead, Motor 1 210mm lead).</p>
                <p>Secure lane 1 extruder with two M3x8 SHCS screws as shown. Be mindful the orientation of the extruder.</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step32: {
            title: "Lane 1 Wiring Guide",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_26_Lane_1_Wiring.jpg" alt="Wiring Guide">
                    <p>The image shows the ports to install each lane 1 module plug into to match the default AFC Klipper add on config for BoxTurtle.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step33: {
            title: "TN Wiring Guide",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_27_TN_Wiring.jpg" alt="Wiring Guide">
                    <p>Shown is the connections to be made for the TN buffer to match the AFC Klipper addon default config.  The wires for the buffer may be passed through the lower hole in the right rear skirt if not opting to connect them to the printer’s main board.</p>
                    <p>Confused which plug is which? Here is a <a href="/docs/afc-klipper-add-on/installation/buffer-overview.html" target="_blank">document</a> to help you understand the buffer and it’s functions</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step34: {
            title: "LED Wiring Guide",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_28_RGB.jpg" alt="Wiring Guide">
                    <p>Shown is the connection to be made for the indicator LEDs to match the default AFC Klipper add on configuration. The 80mm jumper will plug into the board at this time.</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step35: {
            title: "Board Install",
            description: `
                <p>Reinstall the 220mm 202 extrusion with the AFC-Lite mounted to it as shown using two M5x16 BHCS screws.</p>
                <p>The LED Indicators on the spoolers daisy chain from the jumper plug installed in the previous step. Connect these now. The last spooler will have an extra plug, you may zip tie it to the bottom of the lane 4 tray.</p>
            `,
            parts: [
                "2 M5x16  BHCS"
            ]
        },
        boxturtle_general_assembly_step36: {
            title: "Bowden Tubes",
            description: `
                <p><strong>THERE ARE TWO DIFFERENT INTERNAL DIAMETERS FOR BOWDEN TUBE USED IN BOXTURTLE. 3MM ID BOWDEN MUST BE USED PRE-EXTRUDER (spooler – extruder). 2MM BOWDEN MUST BE USED POST EXTRUDER.</strong></p>
                <p>If not done during extruder installation, insert a 3mm ID x80mm bowden tube into the spooler ECAS fitting and gently bend and insert it into the extruders ECAS fitting making certain the bowden is well secured.</p>
                <p>For the 2mm ID bowden it is HIGHLY advised that the ends be beveled around the ID. Install the 2mm ID Bowden lengths as shown.</p>
                <p><strong>Note:</strong> there are many methods for beveling bowden tube, common methods are:</p>
                <ul>
                    <li>Using a ~6mm drill bit by hand</li>
                    <li>Spinning a hobby knife in the bowden tube ends</li>
                    <li>Using a debur tool in the ends of the bowden tube</li>
                </ul>
                <p><strong>IT IS VERY IMPORTANT THAT NO PTFE DEBRIS REMAINS INSIDE THE BOWDEN TUBE BEFORE INSTALLATION.</strong></p>
                <p><strong>NOTE:</strong> The PTFE lengths between the extruder and hub are suggested starting lengths - you may need to trim a little bit off in order for it to have a smooth bend. The filament path should be a smooth curve without tight corners or kinks.</p>
            `,
            parts: [
                "4x 80mm 3mm ID Bowden tube",
                "2x ~101mm 2mm ID Bowden tube - Inner lanes",
                "2x ~171mm 2mm ID Bowden tube - Outer lanes"
            ]
        },
        boxturtle_general_assembly_step37: {
            title: "TN",
            description: `
                <p>Use a piece of 2mm ID bowden to connect the BoxTurtle’s hub to the TN Buffer. Remember that the 2mm ID bowden should be beveled for smooth operation.</p>
                <p>The length of this will depend on how you intend to setup your BoxTurtle with your printer, ~250mm length is appropriate for the time being if you are unsure.</p>
                <p>Note that the arrows on the TN point to the toolhead. The ID of the bowden from the TN buffer to your toolhead does not matter, most are using 2.5mm ID.</p>
                <p>Here is a <a href="https://github.com/ArmoredTurtle/TurtleNeck/blob/main/STLs/TN_horizontal%20mount.stl" target="_blank">hard mount</a> for the buffer that will allow you to bolt the buffer to a 2020 extrusion</p>
            `,
            parts: [
                "2mm ID bowden tube"
            ]
        },
        boxturtle_general_assembly_step38: {
            title: "TN Bowden Tube",
            description: `
                <p>Insert the bowden tube from your AFC all the way through your TN as shown.</p>
                <p><strong>Note:</strong> it should stop just short of pushing the "Slide" outwards from the main body.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step39: {
            title: "Idlers",
            description: `
                <p>Thread the two haves of the idler onto the threaded joint as shown. Four of these will be needed.</p>
            `,
            parts: [
                "8x [a]_idler_roller_x8.stl",
                "4x Idler_threaded_joint_x4.stl"
            ]
        },
        boxturtle_general_assembly_step40: {
            title: "Idlers",
            description: `
                <p>Install the bearings on the endcaps of the idlers as shown, this should be a friction fit.</p>
            `,
            parts: [
                "8x MR148zz bearing"
            ]
        },
        boxturtle_general_assembly_step41: {
            title: "Idler Installation",
            description: `
                <p>Slot the idlers into the trays as shown, the rear most position is appropriate for most 200mm OD spools of filament.</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step42: {
            title: "Initial Startup",
            content: `
                <div class="infoL">
                    <h3>*PANIK*</h3>
                    <p>Before installing the final trim on the BoxTurtle, now is a good time to connect it to the printer and verify functionality of all the components.</p>
                    <p class='extra-space'>The initial startup guide containing everything you need to know to get your BoxTurtle up and running can be found <a href="/docs/boxturtle/initial_startup/01-overview.html" target="_blank">here</a>.</p>
                    <div class='info-submanual-nav-buttons'>
                        <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle Menu</button>
                        <button onclick="location.href='manual.html?manual=boxturtle&subManual=final'">Next Section</button>
                    </div>
                </div>
            `,
            parts: []
        },
        boxturtle_final_step1: {
            title: "Heatset Inserts",
            description: `
                <p>You will need 4 of these to complete the assembly.</p>
                <p>Install the heatset insert as shown. This is the only step in this section that uses heatsets.</p>
            `,
            parts: [
                "4x solid_corner_cover_x4.stl",
                "4x M3 heatset instert"
            ]
        },
        boxturtle_final_step2: {
            title: "Feet",
            description: `
                <p>Shown is the assembly for one corner, you will need to do this to each of the four corners. Install an M5x16 BHCS screw through an M5 washer, foot_tpu and a [a]_foot. Secure through the printed corner with an M5 hex nut.</p>
            `,
            parts: [
                "4x [a]_foot_x4.stl",
                "4x foot_tpu_x4.stl",
                "4x M5x16 BHCS",
                "4x M5 washer",
                "4x M5 hex nut"
            ]
        },
        boxturtle_final_step3: {
            title: "Corner Covers",
            description: `
                <p>Shown is the assembly for one corner, you will need to do this to each of the four corners.</p>
                <p>Secure the corner cover as shown with an M3x6 SHCS screw as shown.</p>
            `,
            parts: [
                "4x M3x6 SHCS"
            ]
        },
        boxturtle_final_step4: {
            title: "Inlets",
            description: `
                <p>You will need 4 of these to complete the assembly. Install the feeder onto a 50mm length of 3mm ID bowden tube as shown.</p>
                <p><strong>Note:</strong> It is advised that these be removed from the BoxTurtle any time that it needs to be set on its back for service.</p>
            `,
            parts: [
                "4x [a]_feeder_x4.stl",
                "4x 3mm ID x 50mm bowden"
            ]
        },
        boxturtle_final_step5: {
            title: "Inlet Bowden",
            description: `
                <p>Shown is final assembly of one spooler, repeat for all four.</p>
                <p>Insert the inlet bowden into the spooler as shown.</p>
            `,
            parts: []
        },
        boxturtle_final_step6: {
            title: "The End",
            content: `
                <div class="info">
                    <h3>You're Finished!!!</h3>
                    <p><strong>That’s it! 😊 Go print something fun!</strong></p>
                </div>
                <div class="infoL">
                    <p class='extra-space'><i>In case you missed it, the initial startup guide containing everything you need to know to get your BoxTurtle up and running can be found <a href="https://www.armoredturtle.xyz/docs/boxturtle/initial_startup/01-overview.html" target="_blank">here</a>.</i></p>
                </div>
            `,
            parts: []
        }
    },
}
