export default {
    "name": "ArmoredTurtle Brush Manual",
    "subManuals": {},
    "steps": {
        "at_brush_armoredturtle_brush": {
            "title": "ArmoredTurtle Brush",
            "description": "This is the AT nozzle brush for printers built with 2020 extrusions.",
            "parts": []
        },
        "at_brush_step2": {
            "title": "",
            "content": `
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
                        <h4>MATERIAL</h4>
                        <p>ABS is best, but PLA will work</p>
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
            "parts": []
        },
        "at_brush_step3": {
            "title": "",
            "content": `
                <div class=info>
                    <h3>FILE NAMING</h3>
                    <p>By this time you should have already downloaded the STL files from <a href="https://github.com/ArmoredTurtle/AFC-Accessories/tree/main/AT_Brush" target="_blank">GitHub</a>. This is how to use our naming convention.</p>
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
        "at_brush_heatsets": {
            "title": "Heatsets",
            "description": `
              <p>Install the heatset inserts as shown.</p>
              <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
              <p><strong>Note:</strong> Ceci est la dernière fois que cette section nécessite l'installation d'inserts filetés. Assurez-vous d'éteindre votre fer à souder et de le ranger dans un endroit sûr.</p>
            `,
            "parts": [
                "mount_upper.stl",
                "Optional: metal_brush_mount.stl",
                "2-3x M3 heatset inserts"
            ]
        },
        "at_brush_rear_screw": {
            "title": "Rear Screw",
            "description": `
              <p>Slide an M3 washer onto the M3x35 SHCS screw and insert into the slot on mount_upper as shown.</p>
            `,
            "parts": [
                "M3x35 SHCS",
                "M3 washer"
            ]
        },
        "at_brush_rear_mount_lower": {
            "title": "Rear Mount Lower",
            "description": `
              <p>Install mount_lower to mount_upper as shown using two M3x8 SHCS screws.</p>
            `,
            "parts": [
                "mount_lower.stl",
                "2x M3x8 SHCS"
            ]
        },
        "at_brush_front_arm_nylock": {
            "title": "Front Arm Nylock",
            "description": `
              <p>Insert two M3 nylock nuts into front_arm_base as shown.</p>
              <p><strong>Note:</strong> These should be a tight fit and may need the end of a tool to press them in fully. Mind the orientation.</p>
            `,
            "parts": [
                "[a]_front_arm_base.stl",
                "2x M3 Nylock nuts"
            ]
        },
        "at_brush_attach_front_arm_base": {
            "title": "Attach Front Arm Base",
            "description": `
              <p>Slot front_arm_base into mount_upper as shown</p>
            `,
            "parts": []
        },
        "at_brush_front_arm_screw": {
            "title": "Front Arm Screw",
            "description": `
              <p>Slide an M3 washer onto the M3x35 SHCS screw and insert into the slot on front_arm_slide as shown.</p>
            `,
            "parts": [
                "[a]_front_arm_slide.stl",
                "M3x35 SHCS",
                "M3 washer"
            ]
        },
        "at_brush_attach_front_arm_slide": {
            "title": "Attach Front Arm Slide",
            "description": `
              <p>Slot front_arm_slide into front_arm_base as shown</p>
            `,
            "parts": []
        },
        "at_brush_brushes": {
            "title": "Brushes",
            "description": `
              <p>Install your chosen brush into it’s printed part.</p>
              <p class="extra-space"><strong>Note:</strong> If using a brass wire brush (cut to fit) you will need an M3x8 SHCS screw to secure it in place. Later steps to adjust your brush position will require the brush assembly (tool-less) to come on and off to access the adjustment screw.</p>
            `,
            "parts": []
        },
        "at_brush_brush_mount": {
            "title": "Brush Mount",
            "description": `
              <p>Slot your brush onto front_arm_slide as shown.</p>
            `,
            "parts": []
        },
        "at_brush_roll_nuts": {
            "title": "Roll Nuts",
            "description": `
              <p>Install two M5 roll nuts into the rear most gantry extrusion as shown.</p>
              <p>Reference page 18 to approximate the location.</p>
            `,
            "parts": []
        },
        "at_brush_frame_mount": {
            "title": "Frame Mount",
            "description": `
              <p>Install the AT Brush assembly as shown. This will be a tight fit (sturdy). Removing your printers’ rear panel to gain proper leverage may help. </p>
            `,
            "parts": []
        },
        "at_brush_final_mount": {
            "title": "Final Mount",
            "description": `
              <p>Using two M5x10 BHCS screws, secure the AT Brush assembly as shown. </p>
            `,
            "parts": [
                "2x M5x10 BHCS"
            ]
        },
        "at_brush_vertical_adjustment": {
            "title": "Vertical Adjustment",
            "description": `
              <p>Use the M3x35 SHCS in mount_upper to adjust the brush height to your nozzle.</p>
              <p>Your nozzle should sit inside the brush approximately 1mm in depth.</p>
            `,
            "parts": []
        },
        "at_brush_horizontal_adjustment": {
            "title": "Horizontal Adjustment",
            "description": `
              <p>Use the M3x35 SHCS in front_arm to adjust the brush to center on your nozzle.</p>
              <p>Ideally you would still have approximately 3mm of y travel before your gantry hits a hard stop.</p>
              <p>Be sure that your brush does not interfere with your print bed.</p>
            `,
            "parts": []
        },
        "at_brush_final_reference": {
            "title": "Final Reference",
            "description": `
              <p>Shown is an example of ideal adjustment of your brush.</p>
              <p>Happy Printing!</p>
            `,
            "parts": []
        }
    }
}
