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
            parts: []
        },
        turtleneck_step3: {
            title: "Naming Conventions",
            content: `
                <div class=info>
                    <h3>FILE NAMING</h3>
                    <p>By this time you should have already downloaded the STL files from <a href="https://github.com/ArmoredTurtle/TurtleNeck" target="_blank">GitHub</a>. This is how to use our naming convention.</p>
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
        turtleneck_step4: {
            sectionName: "Assembly",
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
        turtleneck_step5: {
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
                <p><strong>Note:</strong> it should stop just short of pushing the "Slide" outwards from the main body.</p>
            `,
            parts: []
        }
    },
}
