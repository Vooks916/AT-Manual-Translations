export default {
    name: "TurtleNeck 2.0 Manual",
    subManuals: {},
    steps: {
        turtleneck2_step1: {
            title: "TurtleNeck 2.0",
            description: `
                <p>TurtleNeck 2.0 (TN2) is a toolhead buffer for klipper printers designed to work with the <a href="https://github.com/ArmoredTurtle/AFC-Klipper-Add-On" target="_blank">AFC Klipper Add-on</a>. It utilizes an STM32G0B1 MCU over usb-c to operate. Making it a single cable addition to your klipper machine.</p>
                <p>TN2 utilizes two hall effect sensors to detect movement of the buffer before hitting a hard stop in either direction. Additionally on the PCB are five JST-PH endstop ports that can be utilized for filament combiners or "hubs".</p>
                <p>The purpose of a toolhead buffer such as TN2 is to compensate for mismatched rotation distances between a toolhead extruder and a direct drive AFC ("type 2 MMU" if you like calling them that...)</p>
            `,
            parts: []
        },
        turtleneck2_step2: {
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
        turtleneck2_step3: {
            title: "",
            content: `
                <div class=info>
                    <h3>FILE NAMING</h3>
                    <p>By this time you should have already downloaded the STL files from <a href="https://github.com/ArmoredTurtle/TurtleNeck2.0" target="_blank">GitHub</a>. This is how to use our naming convention.</p>
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
        turtleneck2_step4: {
            title: "Part Preparation",
            description: `
                <p>Install four heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
                <p><strong>Note:</strong> This is the last step of this section that will require installing heatsets. Be sure to turn off your soldering iron and set it somewhere safe.</p>
            `,
            parts: [
                "[a]_baseplate.stl",
                "4x M3 Heatset Inserts"
            ]
        },
        turtleneck2_step5: {
            title: "Carriage Prep",
            description: "Install the magnet as shown and apply felt pad stickers clear of the clip on both sides of the slide/carriage.",
            parts: [
                "carriage.stl",
                "slide.stl",
                "1x 3x2 Magnet (polarity does not matter)",
                "1mm Felt Pads (optional but recommended)"
            ]
        },
        turtleneck2_step6: {
            title: "Install Carriage",
            description: `
                <p>Place the slide through the slot of the PCB.Clip the carriage in from the top and secure in place with a single M2.5x10 FHCS.</p>
                <p>Ensure the carriage slides smoothly once it is screwed together.</p>
                <p><strong>Note:</strong> Check the orientation of the slide, the magnet should be under the hall effect sensors on the PCB.</p>
            `,
            parts: [
                "1x M2.5x10 FHCS"
            ]
        },
        turtleneck2_step7: {
            title: "",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>SANITY CHECK!</h3>
                    <p>Did you <a href="https://github.com/ArmoredTurtle/TurtleNeck2.0/tree/main/Flashing" target="_blank">flash your board</a> and confirm connection to your printer? If not, now is the time!</p>
                </div>
            `,
            parts: []
        },
        turtleneck2_step8: {
            title: "Main Body",
            description: `
                <p>Place the PCB with the installed carriage on the baseplate. Place the main body on top and secure with 4 M3x8 SHCS as shown.</p>
            `,
            parts: [
                "main_body.stl",
                "[a]_baseplate.stl",
                "4x M3x8 SHCS"
            ]
        },
        turtleneck2_step9: {
            title: "The Worst Part...",
            description: `
                <p>Insert the ECAS04 Fittings as shown</p>
                <p><strong>Optional:</strong> Insert a WS2812 PCB neopixel as shown into the catch on the inlet.</p>
                <p><strong>Note:</strong> These are meant to be tight, you can lay them flat on the table and press the printed parts onto them.</p>
            `,
            parts: [
                "single_inlet.stl",
                "[a]_tube.stl",
                "2x ECAS04 Bowden Couplers with rear rubber bumper removed"
            ]
        },
        turtleneck2_step10: {
            title: "Lid",
            description: `
                <p>Break away the support from the print in place latch.</p>
                <p>If not printed in multicolor, you can opt to print the inlay by itself and press it into the lid as shown.</p>
                <p>Thread 2 M3x10 FHCS screws into the lid as shown.</p>
                <p><strong>Note:</strong> The screws are threaded into plastic, they should be snug but you don't want to strip the printed part.</p>
            `,
            parts: [
                "[a]_lid.stl",
                "2x M3x10 FHCS"
            ]
        },
        turtleneck2_step11: {
            title: "Filament Path",
            description: `
                <p>Slot the inlet in as shown first. Then you can slide the tube into the carriage through the main body.</p>
                <p><strong>Note:</strong> The groove on the tube should be centered in the carriage.</p>
            `,
            parts: []
        },
        turtleneck2_step12: {
            title: "Clip",
            description: `
                <p>Clip the tube into place as shown. This will be tight the first time.</p>
                <p>If using the optional neopixel, now is the time to plug it in.</p>
            `,
            parts: [
                "clip.stl"
            ]
        },
        turtleneck2_step13: {
            title: "",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>SANITY CHECK!</h3>
                    <p>Before you close the lid, you may want to insert a small piece of scrap bowden tube into the tube. Check that filament passes easily all the way through the TN2.</p>
                    <p>Now you can close the lid.</p>
                </div>
            `,
            parts: []
        },
        turtleneck2_step14: {
            title: "Close it up!",
            description: `
                <p>The lid slots into the key holes and then the latch secures it in place.</p>
            `,
            parts: []
        },
        turtleneck2_step15: {
            title: "Bowden Tube Check",
            description: `
                <p>Once mounted to your printer, insert the bowden tube from your AFC all the way through your TN2</p>
                <p><strong>Note:</strong> it should stop just short of pushing the "Tube" outwards from the main body.</p>
            `,
            parts: []
        }
    },
}
