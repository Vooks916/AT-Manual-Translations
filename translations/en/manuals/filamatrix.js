export default {
    "name": "FilamATrix Manual",
    "subManuals": {},
    "steps": {
        "filamatrix_step1": {
            "title": "",
            "content": `
                <div class="infoL">
                    <h3>INTRODUCTION</h3>
                    <p class='extra-space'>This manual is designed to provide additional information and context specific to the FilamATrix modification for the Stealthburner. It serves as a supplementary resource to the official <a href="https://github.com/VoronDesign/Voron-Stealthburner/blob/main/Manual/Assembly_Manual_SB.pdf" target="_blank">Voron Stealthburner manual</a> and is intended to be used alongside it. While following the same general assembly procedure outlined in the official manual, this guide highlights the key differences and unique considerations for incorporating the FilamATrix modification into your build.</p>
                </div>
            `,
            "parts": []
        },
        "filamatrix_step2": {
            "title": "",
            "content": `
                <div class="info">
                    <h3>PART PRINTING GUIDELINES</h3>
                    <p>These are the recommended print settings in order to have the best chance at success with your parts.</p>
                </div>

                <div class="voron-print-settings">
                    <div class="print-setting">
                        <h4>3D PRINTING PROCESS</h4>
                        <p>Fused Deposition Modeling (FDM)</p>
                    </div>
                    <div class="print-setting">
                        <h4>INFILL TYPE</h4>
                        <p>Grid, Gyroid, Honeycomb, Triangle, or Cubic</p>
                    </div>
                    <div class="print-setting">
                        <h4>MATERIAL</h4>
                        <p>ABS</p>
                    </div>
                    <div class="print-setting">
                        <h4>INFILL PERCENTAGE</h4>
                        <p>Recommended: 40%</p>
                    </div>
                    <div class="print-setting">
                        <h4>LAYER HEIGHT</h4>
                        <p>Recommended: 0.2mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>WALL COUNT</h4>
                        <p>Recommended: 4</p>
                    </div>
                    <div class="print-setting">
                        <h4>EXTRUSION WIDTH</h4>
                        <p>Recommended: Forced 0.4mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>SOLID TOP/BOTTOM LAYERS</h4>
                        <p>Recommended: 5</p>
                    </div>
                </div>
            `,
            "parts": []
        },
        "filamatrix_step3": {
            "title": "",
            "content": `
                <div class=info>
                    <h3>FILE NAMING</h3>
                    <p>By this time you should have already downloaded the STL files from <a href="https://github.com/thunderkeys/FilamATrix" target="_blank">GitHub</a>. This is how to use the naming convention.</p>
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
            "parts": []
        },
        "filamatrix_heatsets": {
            "title": "Heatsets",
            "description": `
                <p>Install five heatset inserts as shown. This will be the last time your heatset tool will be used during the hotend assembly. Now is the time to turn it off and set it somewhere safe.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            "parts": [
                "revo_voron_front.stl",
                "5x M3 Heatset insert"
            ]
        },
        "filamatrix_guidler_1": {
            "title": "Guidler 1",
            "description": `
                <p>Install guidler_b onto guidler_a, securing with a single M3x16 SHCS as shown.</p>
            `,
            "parts": [
                "[a]_guidler_b.stl",
                "1x M3x16 SHCS"
            ]
        },
        "filamatrix_guidler_2": {
            "title": "Guidler 2",
            "description": `
                <p>Install the BMG idler assembly as shown. If not already done, now is the time to lubricate the needle bearings in the idler assembly.</p>
            `,
            "parts": [
                "BMG Idler assembly"
            ]
        },
        "filamatrix_guidler_3": {
            "title": "Guidler 3",
            "description": `
                <p>Secure the latch shuttle onto the guidler with a BMG tension assembly as shown.</p>
            `,
            "parts": [
                "BMG Tension assembly"
            ]
        },
        "filamatrix_step10": {
            "title": "",
            "content": `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>STOP!</h3>
                    <p>The next step installs a microswitch into the extruder body. The wires are not pre soldered, as the length and connector is highly dependent on a multitude of factors.</p>
                    <p>If your switches have levers, remove them prior to installation. Now is the time to solder your wires to the two OUTER pins of the switch, and cover with heatshrink.</p>
                    <p><strong>Note:</strong> If using a toolhead board, you may have to bend the connectors on the switch to avoid any interference.</p>
                    <p>If you have not soldered before, <a href="https://www.youtube.com/watch?v=rK38rpUy568" target="_blank">here</a> is an excellent video guide to get you started. (It’s really not hard 😊)</p>
                </div>
            `,
            "parts": []
        },
        "filamatrix_sensor": {
            "title": "Sensor",
            "description": `
                <p>Drop a 5.5mm ball bearing into the slot and follow with a D2F microswitch as shown. Secure in place with two M2x10 self-tapping screws. Be careful not to strip the holes as these are threaded directly into plastic.</p>
                <p>After assembling the sensor, now is a good time to ensure its operational. You can do this by inserting a piece of filament through the extruder body and listening for an audible click as the sensor is triggered.</p>
            `,
            "parts": [
                "D2F microswitch",
                "5.5mm ball bearing",
                "2x M2x10 Self-tapping screws"
            ]
        },
        "filamatrix_bearings": {
            "title": "Bearings",
            "description": `
                <p>Install the two MR85 bearings and secure the anti-squish screw (M3x6 FHCS) as shown.</p>
            `,
            "parts": [
                "1x M3x6 FHCS",
                "2x MR85 bearings"
            ]
        },
        "filamatrix_drive_gear": {
            "title": "Drive Gear",
            "description": `
                <p>Slide the drive gear onto the shaft of the 50t spur as shown minding the orientation.</p>
            `,
            "parts": [
                "50t Spur gear",
                "BMG Drive Gear"
            ]
        },
        "filamatrix_sandwich": {
            "title": "Sandwich",
            "description": `
                <p>Install the rear hotend shroud with two M3x16 SHCS screws as shown.</p>
            `,
            "parts": [
                "revo_voron_rear.stl",
                "2x M3x16 SHCS"
            ]
        },
        "filamatrix_screws": {
            "title": "Screws",
            "description": `
                <p>Install two M3x25 SHCS screws in the holes shown. Do not overtighten unless you like re-printing parts.</p>
            `,
            "parts": [
                "2x M3x25 SHCS"
            ]
        },
        "filamatrix_drive_gear_alignment": {
            "title": "Drive Gear Alignment",
            "description": `
                <p>Use a piece of filament to check the alignment of the extruder gear. Now is the time to secure it in place with the provided grub screw. Do not forget to use Loctite on this if it’s not pre applied. </p>
            `,
            "parts": []
        },
        "filamatrix_ecas": {
            "title": "ECAS",
            "description": `
                <p>Install the ECAS 04 fitting into the top of the extruder as shown.</p>
            `,
            "parts": [
                "ECAS 04 Fitting (remove rubber seal)"
            ]
        },
        "filamatrix_guidler_installation": {
            "title": "Guidler Installation",
            "description": `
                <p>Insert the guidler assembly into the extruder body as show. Secure with an M3x25 SHCS.</p>
                <p>Be sure not to overtighten this. The guidler should move freely.</p>
            `,
            "parts": [
                "1x M3x25 SHCS"
            ]
        },
        "filamatrix_latch": {
            "title": "Latch",
            "description": `
                <p>Install the latch and secure it with an M3x25 SHCS. It should move freely the same as the guidler. A cutout is shown to give reference how the guidler and latch interface with each other.</p>
                <p><strong>Note:</strong> Now is a good time to set the base tension on your extruder assembly. <a href="https://www.youtube.com/watch?v=L1gxBCiE0pk" target="_blank">Here</a> Is an excellent video by Dr. Dave demonstrating how to do so.</p>
            `,
            "parts": [
                "[a]_latch_ecas",
                "1x M3x25 SHCS"
            ]
        },
        "filamatrix_motor": {
            "title": "Motor",
            "description": `
                <p>Secure the stepper motor to the extruder assembly loosely with the M3x30 SHCS screw. Use an M3x8 SHCS screw paired with a washer to set the backlash on the gearset before fully tightening the M3x30 SHCS screw. </p>
                <p><strong>Note:</strong> Having a proper backlash between the stepper motor and the 50t spur gear is essential to consistent operation. <a href="https://www.youtube.com/watch?v=ly22qmB3NxE" target="_blank">Here</a> Is an excellent video by Dr. Dave demonstrating how to do so.</p>
            `,
            "parts": [
                "1x M3x30 SHCS",
                "1x M3x8 SHCS",
                "1x M3 Washer"
            ]
        },
        "filamatrix_step21": {
            "title": "",
            "content": `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/SkittlesTurtle.png" alt="Skittles Turtle">
                    <h3>BREAK!</h3>
                    <p>Have some skittles or something... whatever you like 😊</p>
                </div>
            `,
            "parts": []
        },
        "filamatrix_bowden": {
            "title": "Bowden",
            "description": `
                <p>Install the bowden tube that is of appropriate length for your chosen hotend. Cutting jigs for various hotends can be found <a href="https://github.com/thunderkeys/FilamATrix/tree/main/STLs/cutting_jigs" target="_blank">here</a> For Revo Voron hotends the appropriate length is ~15.8mm.</p>
                <p><strong>Note:</strong> It is STRONGLY recommended that the end of the PTFE bowden tube facing the extruder part of the toolhead at the very least be beveled on the inner diameter. Be certain that there is no remaining PTFE inside the tube before installation.</p>
                <p>There are many methods for beveling bowden tube, common methods are:</p>
                <ul>
                    <li>Using a ~6mm drill bit by hand</li>
                    <li>Spinning a hobby knife in the bowden tube ends</li>
                    <li>Using a debur tool in the ends of the bowden tube</li>
                </ul>
            `,
            "parts": [
                "2mm ID Bowden tube ~16mm"
            ]
        },
        "filamatrix_hotend": {
            "title": "Hotend",
            "description": `
                <p>Secure the hotend to the front shroud with four M3x8 SHCS screws as shown.</p>
                <p><strong>Note:</strong> If you forgotten that little piece of PTFE… You’re going to have a bad time later.</p>
            `,
            "parts": [
                "4x M3x8 SHCS"
            ]
        },
        "filamatrix_step26": {
            "title": "",
            "content": `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step 5 Razor Cut.png" alt="Razor Trimming Guide">
                    <p>We recommend a safety cap be installed over the cutting edge before handling the #4 hobby-knife. Displayed is a diagram of how the razor should be trimmed to 26mm in length, measured from the cutting edge.</p> 
                    <p>You can find blade snapping jigs to assist you <a href="https://github.com/thunderkeys/FilamATrix/tree/main/STLs/cutting_jigs" target="_blank">here</a>. To use it, install the heatset inserts, then screw the two halves together with the sharp end of the blade fully inserted. Use pliers to snap off the excess blade protruding from the jig.</p>
                </div>
            `,
            "parts": []
        },
        "filamatrix_razor_holder": {
            "title": "Razor Holder",
            "description": `
                <p>CAREFULLY insert the razor into the knife holder as shown. There is a witness hole in the printed part, the razor should be installed to a depth that it covers half of this hole.</p>
                <p><strong>Note:</strong> If your blade only has a bevel on one side, ensure the flat side is facing down.</p>
                <p><strong>Other Note:</strong> If your blade is a little loose, it can be secured with a small drop of CA glue.</p>
            `,
            "parts": [
                "[a]_knife_holder.stl",
                "#4 Hobby-knife trimmed to 26mm"
            ]
        },
        "filamatrix_cutting_arm": {
            "title": "Cutting arm",
            "description": `
                <p>Install the knife holder into the cutting arm and retain with an M2.5x16 SHCS as shown. Orientation is very important here, do not install it upside down. The knife holder should move freely, do not over tighten this screw.</p>
            `,
            "parts": [
                "[a]_cutting_arm_clockwork2.stl",
                "M2.5x16 SHCS"
            ]
        },
        "filamatrix_spring": {
            "title": "Spring",
            "description": `
                <p>Install the coil spring into the cut arm as shown.</p>
            `,
            "parts": [
                "0.5x4x25mm Coil Spring"
            ]
        },
        "filamatrix_cutter_installation": {
            "title": "Cutter Installation",
            "description": `
                <p>Insert the cut arm assembly into the hotend shroud as shown. Retain with an M3x18 FHCS as shown. Be sure not to over-tighten this, it is meant to move freely.</p>
            `,
            "parts": [
                "1x M3x18 FHCS"
            ]
        },
        "filamatrix_cutter_retainer": {
            "title": "Cutter Retainer",
            "description": `
                <p>Install an M3x8 SHCS screw as shown. Do not fully tighten this screw, it is in place to limit the outward travel of the cut arm, it should not interfere with it otherwise.</p>
                <p><strong>Note:</strong> Now is a ““safe”r” time to remove the safety cap from the razor.</p>
            `,
            "parts": [
                "1x M3x8 SHCS"
            ]
        },
        "filamatrix_cutter_showcase": {
            "title": "Cutter Showcase",
            "description": `
                <p>Shown is the extruder and hotend as they would be on your chosen carriage. The cut arm should move freely and not obstruct the filament path when fully released.</p>
            `,
            "parts": []
        },
        "filamatrix_faceplate_installation": {
            "title": "Faceplate Installation",
            "description": `
                <p><strong>Note:</strong> When installing the StealthBurner mainbody on FilamATrix, make sure to use an M3x20 SHCS, not the stock M3x25 SHCS.</p>
            `,
            "parts": [
                "1x M3x20 SHCS"
            ]
        },
        "filamatrix_beefy_depressor_heatsets": {
            "title": "Beefy Depressor Heatsets",
            "description": `
                <p>Install 2 heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            "parts": [
                "beefy_depressor.stl",
                "2x M3 Heatset inserts"
            ]
        },
        "filamatrix_gantry_mount": {
            "title": "Gantry Mount",
            "description": `
                <p>Attatch the beefy_depressor_mount to the <strong>LEFT</strong> side of your gantry using M3 screws and washers.</p>
                <p>Shown here is the depressor mounted at the front of the printer. Some setups may find it more advantageous to mount it at the rear.</p>
                <p><strong>Note:</strong> The length of the screw will depend on your specific printer. M3x10 - no backers, M3x12 - titanium backers, M3x16 - MGN9H rails.</p>
            `,
            "parts": [
                "beefy_depressor_mount.stl",
                "2x M3 SHCS (see above for length)",
                "2x M3 Washers"
            ]
        },
        "filamatrix_attatch_pin": {
            "title": "Attatch Pin",
            "description": `
                <p>Thread an M3 hexnut onto an M3x16 BHCS. Install on the side facing into the printer.</p>
            `,
            "parts": [
                "1x M3x16 BHCS",
                "1x M3 Hexnut"
            ]
        },
        "filamatrix_adjustments": {
            "title": "Adjustments",
            "description": `
                <p>Now is the time to adjust the height of the pin on the mount and the depth of the screw so it will depress the cutting arm when the toolhead pushes against it (going from right to left).</p>
                <p>Use the hexnut to 'lock' the screw into position.</p>
                <p><strong>Note:</strong> You may wish to use the Loctite or VC-3 on this screw. Be careful not to get Loctite on any ABS/ASA printed parts!</p>
            `,
            "parts": []
        }
    }
}
