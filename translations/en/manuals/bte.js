export default {
    name: "BoxTurtle Enclosure Manuals",
    subManuals: {
        preparation: {
            name: "1. BTE Preparation"
        },
        frame: {
            name: "2. Frame"
        },
        assembly: {
            name: "3. Assembly"
        }
    },
    steps: {
        bte_preparation_step1: {
            title: "Intro",
            description: `
                <p>This manual operates under the assumption that your BoxTurtle unit has been fully assembled and that all components have been tested and verified to be functioning correctly. Prior to using this manual, it is expected that the assembly process has been completed in its entirety and that the system has passed all initial functionality checks. For details regarding the expected level of completeness and verification prior to proceeding, please refer to page 3 of the <a href="/manual.html?manual=boxturtle&subManual=introduction">BoxTurtle Introduction</a> section.</p>
            `,
            parts: []
        },
        bte_preparation_step2: {
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
                        <p class='p-no-space'><strong>Primary:</strong> ~0.5kg ABS/PLA</p>
                        <p class='p-no-space'><strong>Accent:</strong> ~25g ABS/PLA</p>
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
        bte_preparation_step3: {
            title: "Naming Conventions",
            content: `
                <div class=info>
                    <h3>FILE NAMING</h3>
                    <p>By this time you should have already downloaded the STL files from <a href="https://github.com/ArmoredTurtle/BoxTurtle-Enclosure" target="_blank">GitHub</a>. This is how to use our naming convention.</p>
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
        bte_preparation_step4: {
            title: "Left-Swing Disclaimer",
            content: `
                <div class="infoL">
                    <h3>Left-Swing Disclaimer</h3>
                    <p class='extra-space'>The BoxTurtle Enclosure is designed with flexibility in mind and can be configured to feature either a left-swing or right-swing door, depending on user preference or spatial constraints. For the sake of consistency and simplicity throughout this manual, all assembly instructions will reference a left-swing door configuration as the default. However, it is important to note that the steps involved in assembling a right-swing door are functionally identical—the process is merely mirrored. Users opting for a right-swing configuration should apply the same instructions while reversing the relevant orientations accordingly.</p>
                </div>
            `,
            parts: []
        },
        bte_preparation_step5: {
            title: "Heatsets 1",
            description: `
                <p>Install heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            parts: [
                "hex_front_L.stl",
                "hex_front_R.stl",
                "6x M3 heatset insert"
            ]
        },
        bte_preparation_step6: {
            title: "Heatsets 2",
            description: `
                <p>Install heatset inserts as shown. You will need to do this to all six top_bracket_polydryer parts.</p>
            `,
            parts: [
                "6x top_bracket_polydryer_x6",
                "24x M3 heatset insert"
            ]
        },
        bte_preparation_step7: {
            title: "Heatsets 3",
            description: `
                <p>Install heatset insert as shown.</p>
                <p><strong>Note:</strong> This is the last step of the enclosure manual that will require installing heatset inserts. Be sure to turn off your iron and place it somewhere safe.</p>
            `,
            parts: [
                "part_a.stl",
                "1x M3 heatset insert"
            ]
        },
        bte_preparation_step8: {
            title: "Supports",
            description: `
                <p>Remove all print in place supports from all top panel clips as shown.</p>
            `,
            parts: []
        },
        bte_preparation_step9: {
            title: "Hinge Hardware",
            description: `
                <p>Install the 4x30mm pins and 4x6x6 bushings as shown.</p>
                <p><strong>Note:</strong> The hinge hardware has been intentionally designed with a tight-tolerance fit, as it relies solely on friction to remain securely in place during normal operation. This snug fit is a deliberate design choice to eliminate the need for additional fasteners or adhesives, ensuring that the hardware remains firmly retained through mechanical friction alone. Users may find that some force is required during installation, which is expected and contributes to the long-term stability of the hinge assembly.</p>
            `,
            parts: [
                "corner_cover_front.stl",
                "upper_hinge_frame.stl",
                "upper hinge_door.stl",
                "lower_hinge_door.stl",
                "4x 4x6x6 oilless bushing",
                "2x 4x30mm dowel"
            ]
        },
        bte_preparation_step10: {
            title: "Lower Front Covers",
            description: `
                <p>Secure the feet to the lower front corner covers as shown using M5x16 BHCS screws and M5 hexnuts.</p>
                <p><strong>Note:</strong> These printed parts do not have alignment features and instead will rely on additional hardware in later steps to maintain alignment.</p>
            `,
            parts: [
                "[a]_lower_cover_foot.stl",
                "[a]_lower_hinge_foot.stl",
                "lower_cover.stl",
                "lower_hinge.stl",
                "2x foot_tpu",
                "2x M5x16 BHCS",
                "2x M5 hexnut"
            ]
        },
        bte_preparation_step11: {
            title: "Panel Clip Hardware",
            description: `
                <p>Install M3x12 BHCS screws into all panel clips shown here. Retain with M3 hammerhead nuts. Only thread these in ~2-3 turns for now.</p>
            `,
            parts: [
                "12x M3x12 BHCS",
                "12x M3 hammerhead nut"
            ]
        },
        bte_preparation_step12: {
            title: "Skirt 1",
            description: `
                <p>Install skirt mount center with two M3x18 BHCS screws as shown. If not using a monolithic front skirt install the skirt clip with two M3x8 BHCS screws (these are threaded into plastic do not overtighten).</p>
            `,
            parts: [
                "skirt_mount_center.stl",
                "skirt_clip.stl",
                "2x M3x8 BHCS",
                "2x M3x18 BHCS"
            ]
        },
        bte_preparation_step13: {
            title: "Skirt 2",
            description: `
                <p>Install both filler pieces as shown with four M3x8 BHCS screws as shown (these are threaded into plastic do not overtighten).</p>
            `,
            parts: [
                "filler_L.stl",
                "filler_R.stl",
                "4x M3x8 BHCS"
            ]
        },
        bte_preparation_step14: {
            title: "Skirt 3",
            description: `
                <p>Install the front skirt mounts with their spacers using four M3x18 BHCS screws as shown.</p>
                <p><strong>Note:</strong> All parts in this step have a specific orientation, pay attention. The spacers will have two dots on the bottom side that go towards the chamfered edge of the skirt.</p>
            `,
            parts: [
                "2x spacer.stl",
                "skirt_mount_side_L.stl",
                "skirt_mount_side_R.stl",
                "4X M3x18 BHCS"
            ]
        },
        bte_preparation_step15: {
            title: "Skirt 4",
            description: `
                <p>Install six M3x8 BHCS screws into the skirt mounts as shown, secure in place with M3 hammerhead nuts. Only thread these in ~2-3 turns for now.</p>
            `,
            parts: [
                "6x M3x8 BHCS",
                "6x M3 hammerhead nuts"
            ]
        },
        bte_preparation_step16: {
            title: "Top 1",
            description: `
                <p>Using four M3x8 BHCS screws each, secure all vents to the top panel as shown ensuring they are all oriented in the same manner.</p>
            `,
            parts: [
                "6x bottom_bracket.stl",
                "6x top bracket.stl",
                "24x M3x8 BHCS"
            ]
        },
        bte_preparation_step17: {
            title: "Top 2",
            description: `
                <p>Minding orientation, install 3mm foam tape (cut to fit) to the top panel as shown.</p>
            `,
            parts: []
        },
        bte_preparation_step18: {
            title: "Latch",
            description: `
                <p>Install a M3X50 SHCS screw into the latch. Don’t overtighten this as it is threaded into plastic and only serves as reinforcement for the printed part. Capture the latch between parts A and B with an M3x12 BHCS as shown.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=bte'">BTE Menu</button>
                    <button onclick="location.href='manual.html?manual=bte&subManual=frame'">Next Section</button>
                </div>
            `,
            parts: [
                "part_a.stl",
                "part_b.stl",
                "latch.stl",
                "1x M3x12 BHCS",
                "1x M3x50 SHCS"
            ]
        },
        bte_frame_step1: {
            title: "Corner 1",
            description: `
                <p>Remove one printed corner from your BoxTurtle and replace the M5x16 BHCS into the extrusions as shown.</p>
            `,
            parts: []
        },
        bte_frame_step2: {
            title: "Front",
            description: `
                <p>Remove the front skirt and lower front 360mm extrusion as shown. The 360mm extrusion will be re-used for the enclosure frame later. </p>
            `,
            parts: []
        },
        bte_frame_step3: {
            title: "Upright 1",
            description: `
                <p>Install the cross drilled 360mm extrusion as shown to replace the earlier removed printed corner.</p>
            `,
            parts: []
        },
        bte_frame_step4: {
            title: "Upright 2",
            description: `
                <p>Replace the remaining printed corners with 360mm cross drilled extrusions.</p>
            `,
            parts: []
        },
        bte_frame_step5: {
            title: "Extrusions",
            description: `
                <p>Install M5x16 BHCS into all remaining 220mm and 360mm extrusions. Leave ~3-4mm of thread exposed as these will all be utilized in blind joints.</p>
                <p><strong>Note:</strong> The two 280mm extrusions will not be getting screws.</p>
            `,
            parts: []
        },
        bte_frame_step6: {
            title: "Panels",
            description: `
                <p>Slot the two side panels and the rear panel into the extrusions as shown.</p>
            `,
            parts: []
        },
        bte_frame_step7: {
            title: "Top Extrusions",
            description: `
                <p>Install two 220mm and two 360mm extrusions to the top side as shown securing tightly through the cross drilled access holes in the uprights.</p>
            `,
            parts: []
        },
        bte_frame_step8: {
            title: "Seals",
            description: `
                <p>Install the rubber seals as shown. These will have to be cut to length.</p>
                <p>If you are unfamiliar with these rubber seals here is an excellent <a href="https://youtu.be/zCHkJ4GP2vg?si=tUG9c85K0GeBjMP5&t=267" target="_blank">video by LeeMeerie3D</a> detailing their installation.</p>
                <p><strong>Note:</strong> Inside or outside the enclosure is mostly user preference. Installing on the inside slightly reduces the places where air can enter the enclosure, but the enclosure is not designed to be airtight.  Install them where you like.</p>
            `,
            parts: []
        },
        bte_frame_step9: {
            title: "Door 1",
            description: `
                <p>Secure two 280mm extrusions to a 360mm extrusion with blind joints as shown.</p>
            `,
            parts: []
        },
        bte_frame_step10: {
            title: "Door 2",
            description: `
                <p>Slot in the appropriate panel and lock in place with a 360mm extrusion using blind joints as shown.</p>
            `,
            parts: []
        },
        bte_frame_step11: {
            title: "Door 3",
            description: `
                <p>Install 3mm foam tape around the inner perimeter if the extrusions as shown. These will be cut to fit.</p>
            `,
            parts: []
        },
        bte_frame_step12: {
            title: "Door 4",
            description: `
                <p>Install the rubber seal as shown. These will be cut to fit.</p>
            `,
            parts: []
        },
        bte_frame_step13: {
            title: "Door 5",
            description: `
                <p>Install four M3 roll nuts in the approximate locations shown.</p>
            `,
            parts: [
                "4x M3 Roll nuts"
            ]
        },
        bte_frame_step14: {
            title: "Door 6",
            description: `
                <p>Install the hinges as shown with two M3x8 BHCS screws as shown. Secure the top hinge and cover with two M3x12 BHCS screws.</p>
                <p>Loosely install the previously assembled latch with two M3x18 BHCS screws. This will be adjusted later.</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=bte'">BTE Menu</button>
                    <button onclick="location.href='manual.html?manual=bte&subManual=assembly'">Next Section</button>
                </div>
            `,
            parts: [
                "2x M3x8 BHCS",
                "2x M3x12 BHCS",
                "2x M3x18 BHCS"
            ]
        },
        bte_assembly_step1: {
            title: "Roll Nuts",
            description: `
                <p>Install four roll nuts in their approximate locations as shown.</p>
            `,
            parts: [
                "4x M3 roll nuts"
            ]
        },
        bte_assembly_step2: {
            title: "Skirt",
            description: `
                <p>Secure the front skirt assembly as shown.</p>
            `,
            parts: []
        },
        bte_assembly_step3: {
            title: "Lower Front Covers",
            description: `
                <p>Secure the lower front covers with M5x16 BHCS screws as shown. Secure the hinge side with an M3x8 BHCS screw at the top.</p>
            `,
            parts: [
                "2x M5x16 BHCS",
                "1x M3x8 BHCS"
            ]
        },
        bte_assembly_step4: {
            title: "Rear Covers",
            description: `
                <p>Install the rear covers and feet with M5x16 BHCS screws as shown.</p>
                <p><strong>Note:</strong> If you wish to use the bottom panel, now is the time to insert it as it is retained by the corner covers.</p>
                <p><i><strong>*IT IS ILL-ADVISED TO INSTALL THE BOTTOM PANEL WITHOUT CONFIRMING FUNCTION OF THE BOXTURTLE FIRST*</strong></i></p>
            `,
            parts: [
                "2x M5x16 BHCS"
            ]
        },
        bte_assembly_step5: {
            title: "Top Panel",
            description: `
                <p>Secure the top panel with the appropriate panel clips as shown.</p>
            `,
            parts: []
        },
        bte_assembly_step6: {
            title: "Door Prep",
            description: `
                <p>Install the upper hinge with an M3x8 BHCS screw as shown.</p>
                <p>Loosely attach parts c and d with two M3x18 BHCS screws. This will be adjusted later.</p>
            `,
            parts: [
                "1x M3x8 BHCS",
                "2x M3x18 BHCS"
            ]
        },
        bte_assembly_step7: {
            title: "Latch Adjustment",
            description: `
                <p>Slot the door onto the dowels, adjust the latch to the appropriate locations, and tighten fully once properly set. Remove the door for ease of following the next steps.</p>
            `,
            parts: []
        },
        bte_assembly_step8: {
            title: "Screw Covers",
            description: `
                <p>Install screw covers as shown.</p>
            `,
            parts: [
                "2x screw_cover_x2.stl",
                "2x [a]_screw_cover_top_x2.stl",
                "2x [a]_screw_cover_logo_x2.stl",
                "1x [a]_top_front_screw_cover_R.stl",
                "1x [a]_top_front_screw_cover_L.stl",
                "1x frame_cover.stl"
            ]
        },
        bte_assembly_step9: {
            title: "PD Seals",
            description: `
                <p>Install the vent seals as shown.</p>
                <p>If your kit did not come with vent seals or you self sourced your enclosure, you will have to make these yourself. They can either be created from a foam sheet with a laser cutter, or by carefully placing foam tape around the tops of the vents.</p>
            `,
            parts: []
        },
        bte_assembly_step10: {
            title: "Door 7",
            description: `
                <p>Install the screw covers on the door assembly as shown.</p>
                <p>Re-install the door onto enclosure.</p>
            `,
            parts: [
                "lower_cover_door_R.stl"
            ]
        },
        bte_assembly_step11: {
            title: "Final",
            description: `
                <p>The vent covers clip in where needed without hardware and are easily removeable if needed.</p>
            `,
            parts: []
        }
    },
}
