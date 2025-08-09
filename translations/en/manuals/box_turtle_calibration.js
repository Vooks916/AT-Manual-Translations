export default {
    name: "BoxTurtle Calibration Manual",
    subManuals: {},
    steps: {
        box_turtle_calibration_step1: {
            sectionName: "Introduction",
            title: "BoxTurtle Calibration Fidget",
            description: "This is a calibration print to test your slicer settings when building the BoxTurtle Automated Filament Controller and doubles as a cool fidget toy when you're done!",
            parts: []
        },
        box_turtle_calibration_step2: {
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
        box_turtle_calibration_step3: {
            title: "Naming Conventions",
            content: `
                <div class=info>
                    <h3>FILE NAMING</h3>
                    <p>By this time you should have already downloaded the STL files from <a href="https://www.printables.com/model/1004303-box-turtle-calibration-fidget" target="_blank">Printables</a>. This is how to use our naming convention.</p>
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
        box_turtle_calibration_step4: {
            sectionName: "Assembly",
            title: "Support Removal",
            description: "Make sure you can easily remove the rear and front supports on the body as well as the supports on the turtle_box_retainer.",
            parts: [
                "body.stl",
                "turtle_box_retainer.stl"
            ]
        },
        box_turtle_calibration_step5: {
            title: "Test Body Assembly",
            description: "Test fit the magnet, ECAS connector, and MR148ZZ bearing. The ECAS should be a tight fit. If the magnet is a little loose use some super glue.",
            parts: [
                "1x 6x3 magnet",
                "1x ECAS connector with rear rubber bumper removed",
                "1x MR148ZZ bearing"
            ]
        },
        box_turtle_calibration_step6: {
            title: "Trigger Assembly",
            description: "Leave about 3.5mm of space between the trigger and the screw heads.",
            parts: [
                "trigger.stl",
                "feeder.stl",
                "1x 6x3 magnet",
                "1x 50mm 4ODx3ID Bowden Tube",
                "2x M3x8mm SHCS"
            ]
        },
        box_turtle_calibration_step7: {
            title: "Sub Assemblies",
            description: "Drop the trigger into the top grooves on the body.",
            parts: []
        },
        box_turtle_calibration_step8: {
            title: "Turtle Box Install",
            description: "Insert the two upper tabs of the turtle box into the body then press down to snap it in.",
            parts: [
                "[a]_turtle_box.stl"
            ]
        },
        box_turtle_calibration_step9: {
            title: "Final",
            description: "Check that you have a smooth movement of the trigger and it snaps shut when it's released.",
            parts: [
                "[a]_turtle_box_retainer.stl"
            ]
        }
    },
}
