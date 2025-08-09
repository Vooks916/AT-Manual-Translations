export default {
    name: "FilamATrix Manual",
    subManuals: {},
    steps: {
        filamatrix_step1: {
            title: "Introduction",
            content: `
                <div class="infoL">
                    <h3>INTRODUCTION</h3>
                    <p class='extra-space'>Ce manuel fournit des informations supplémentaires et un contexte spécifique à la modification FilamATrix pour un Stealthburner. Il sert de ressource additionnelle au <a href="https://github.com/VoronDesign/Voron-Stealthburner/blob/main/Manual/Assembly_Manual_SB.pdf" target="_blank">manuel officiel de Voron Stealthburner</a> et est destiné à être utilisé parallèlement à celui-ci. Tout en suivant la même procédure d'assemblage général décrite dans le manuel officiel, ce guide met en évidence les principales différences et les considérations uniques pour l'intégration de la modification FilamATrix dans votre construction.</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step2: {
            title: "Part Printing Guidelines",
            content: `
                <div class="info">
                    <h3>DIRECTIVES D'IMPRESSION DES PIÈCES</h3>
                    <p>Ce sont les paramètres d'impression recommandés afin d'avoir les meilleures chances de réussite de vos pièces.</p>
                </div>
    
                <div class="voron-print-settings">
                    <div class="print-setting">
                        <h4>PROCESSUS D'IMPRESSION 3D</h4>
                        <p>Depôt de filament fondu (FDM)</p>
                    </div>
                    <div class="print-setting">
                        <h4>TYPE DE REMPLISSAGE</h4>
                        <p>Grille, Gyroïde, Nid d'abeille, Triangle, ou Cubique</p>
                    </div>
                    <div class="print-setting">
                        <h4>MATERIAU</h4>
                        <p>ABS</p>
                    </div>
                    <div class="print-setting">
                        <h4>POURCENTAGE DE REMPLISSAGE</h4>
                        <p>Recommandé: 40%</p>
                    </div>
                    <div class="print-setting">
                        <h4>HAUTEUR DE COUCHE</h4>
                        <p>Recommandé: 0,2 mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>NOMBRE DE PAROIS</h4>
                        <p>Recommandé: 4</p>
                    </div>
                    <div class="print-setting">
                        <h4>LARGEUR D'EXTRUSION</h4>
                        <p>Recommandé: Forcé à 0,4 mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>NOMBRE DE COUCHES SOLIDES HAUT/BAS</h4>
                        <p>Recommandé: 5</p>
                    </div>
                </div>
            `,
            parts: []
        },
        filamatrix_step3: {
            title: "Naming Conventions",
            content: `
                <div class=info>
                    <h3>CONVENTION DE NOMMAGE</h3>
                    <p>Actuellement, vous devriez avoir déjà téléchargé les fichiers STL à partir de <a href="https://github.com/thunderkeys/FilamATrix" target="_blank">GitHub</a>. Voici comment utiliser la convention de nommage.</p>
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
        filamatrix_step4: {
            title: "Inserts filetés",
            description: `
                <p>Installez cinq inserts comme indiqué.</p>
                <p><strong>Remarque:</strong> veillez à choisir une température appropriée au matériau des pièces imprimées. Soyez prudent! Les choses chaudes sont chaudes...</p>
            `,
            parts: [
                "main_body_clockwork2_single_switch.stl",
                "5x Inserts filetés M3"
            ]
        },
        filamatrix_step5: {
            title: "Inserts filetés",
            description: `
                <p>Installez sept inserts comme indiqué. Les deux inserts indiqués avec des flèches jaunes doivent être installés sous la surface de la pièce imprimée.</p>
                <p><strong>Remarque:</strong> veillez à choisir une température appropriée au matériau des pièces imprimées. Soyez prudent! Les choses chaudes sont chaudes ...</p>
            `,
            parts: [
                "motor_plate.stl",
                "7x Inserts filetés M3"
            ]
        },
        filamatrix_step6: {
            title: "Inserts filetés",
            description: `
                <p>Installez deux inserts comme indiqué. Ce sera la dernière fois que votre fer à souder sera utilisé pendant l'assemblage de l'extrudeur. Il est maintenant temps de l'éteindre et de le mettre dans un endroit sûr.</p>
                <p><strong>Remarque:</strong> veillez à choisir une température appropriée au matériau des pièces imprimées. Soyez prudent! Les choses chaudes sont chaudes ...</p>
            `,
            parts: [
                "[a]_guidler_a.stl",
                "[a]_latch_shuttle.stl",
                "2x Inserts filetés M3"
            ]
        },
        filamatrix_step7: {
            title: "Guide 1",
            description: `
                <p>Installez Guidler_B sur Guidler_A, en sécurisant avec une seule vis M3X16 SHCS comme indiqué.</p>
            `,
            parts: [
                "[a]_guidler_b.stl",
                "1x M3x16 SHCS"
            ]
        },
        filamatrix_step8: {
            title: "Guide 2",
            description: `
                <p>Installez la roue libre de l'engrenage BMG avec son axe comme indiqué. Si ce n'est pas déjà fait, il est maintenant temps de lubrifier les roulements à aiguilles dans l'assemblage.</p>
            `,
            parts: [
                "Ensemble roue libre de l'engrenage BMG"
            ]
        },
        filamatrix_step9: {
            title: "Guide 3",
            description: `
                <p>Sécurisez la navette de verrouillage sur le guide avec l'assemblage de tension BMG comme indiqué.</p>
            `,
            parts: [
                "Assemblage de tension BMG"
            ]
        },
        filamatrix_step10: {
            title: "Microswitch Note",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>STOP!</h3>
                    <p>L'étape suivante installe un micro-interrupteur dans le corps de l'extrudeur. Les câbles ne sont pas pré-soudés, car la longueur et le connecteur dépendent d'une multitude de facteurs.</p>
                    <p>If your switches have levers, remove them prior to installation. Il est maintenant temps de souder vos fils aux deux broches externes de l'interrupteur et d'isoler avec des gaines thermos.</p>
                    <p><strong>Remarque:</strong> Si vous utilisez une carte Toolhead, vous devrez peut-être plier les connecteurs de l'interrupteur pour éviter toute interférence.</p>
                    <p>Si vous n'avez jamais soudé auparavant, <a href="https://www.youtube.com/watch?v=rK38rpUy568" target="_blank">voici</a> un excellent guide vidéo pour vous aider à démarrer. (Ce n'est vraiment pas dur 😊)</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step11: {
            title: "Senseur",
            description: `
                <p>Déposez un roulement à billes de 5,5 mm dans la fente suivi d'un micro-interrupteur D2F comme indiqué. Fixez en place avec deux vis autotaraudeuses M2x10. Attention à ne pas détériorer les trous car ceux-ci sont directement filetés dans le plastique.</p>
                <p>Après avoir assemblé le capteur, c’est le moment de s’assurer de son fonctionnement. Vous pouvez le faire en insérant un morceau de filament dans le corps de l'extrudeur et en entendant un clic audible lorsque le capteur se déclenche.</p>
            `,
            parts: [
                "Micro-interrupteur D2F",
                "Roulement à billes de 5,5 mm",
                "2x Vis autotaraudeuses M2x10"
            ]
        },
        filamatrix_step12: {
            title: "Roulement à billes",
            description: `
                <p>Installez les deux roulements MR85 et fixez la vis anti-écrasement (M3X6 FHC) comme indiqué.</p>
            `,
            parts: [
                "1x Vis M3x6 FHCS",
                "2x Roulement à billes MR85"
            ]
        },
        filamatrix_step13: {
            title: "Engrenage d'entraînement",
            description: `
                <p>Faites glisser le pignon d'entraînement sur l'arbre de l'engrenage de 50 dents comme indiqué en tenant compte de l'orientation.</p>
            `,
            parts: [
                "Engrenage de 50 dents",
                "Engrenage d'entrainement BMG"
            ]
        },
        filamatrix_step14: {
            title: "Sandwich",
            description: `
                <p>Fermez les deux moitiés de l'extrudeur autour de l'ensemble d'entraînement comme indiqué.</p>
            `,
            parts: []
        },
        filamatrix_step15: {
            title: "Vis",
            description: `
                <p>Installez deux vis SHCS M3X25 dans les trous indiqués. Ne serrez pas trop, sauf si vous aimez réimprimer des pièces.</p>
            `,
            parts: [
                "2x Vis M3x25 SHCS"
            ]
        },
        filamatrix_step16: {
            title: "Alignement du train d'entrainement",
            description: `
                <p>Utilisez un morceau de filament pour vérifier l'alignement du train d'entrainement. Il est maintenant temps de le sécuriser avec la vis sans tête de l'engrenage BMG. N'oubliez pas d'utiliser de la Loctite si ce n'est pas pré-appliqué.</p>
            `,
            parts: []
        },
        filamatrix_step17: {
            title: "ECAS",
            description: `
                <p>Installez le raccord ECAS 04 dans le haut de l'extrudeur comme indiqué.</p>
            `,
            parts: [
                "Raccord ECAS 04 (Retirer la bague en caoutchouc)"
            ]
        },
        filamatrix_step18: {
            title: "Installation du guide",
            description: `
                <p>Insérez l'assemblage du guide dans le corps de l'extrudeur comme montré. Sécurisez avec une vis M3X25 SHCS.</p>
                <p>Assurez-vous de ne pas serrer trop. Le guide doit se déplacer librement.</p>
            `,
            parts: [
                "1x Vis M3x25 SHCS"
            ]
        },
        filamatrix_step19: {
            title: "Verrou",
            description: `
                <p>Installez le verrou et fixez-le avec une vis M3x25 SHCS. Il devrait se mouvoir librement de la même manière que le guide. Un coupe montre la façon dont le guide et l'interface de verrouillage fonctionnent.</p>
                <p><strong>Remarque:</strong> C'est le moment de régler la tension de base de votre extrudeur. <a href="https://www.youtube.com/watch?v=L1gxBCiE0pk" target="_blank">Voici</a> une excellente vidéo du Dr Dave montrant comment procéder.</p>
            `,
            parts: [
                "[a]_latch_ecas",
                "1x Vis M3x25 SHCS"
            ]
        },
        filamatrix_step20: {
            title: "Moteur",
            description: `
                <p>Fixez le moteur pas à pas sur l'assemblage de l'extrudeur de façon lâche avec la vis M3X30 SHCS. Utilisez une vis M3X8 SHCS associée à une rondelle pour régler les saccades sur le train d'entrainement avant de serrer complètement la vis M3X30 SHCS.</p>
                <p><strong>Remarque:</strong> Le fait d'avoir une réaction parfaite entre le moteur pas à pas et le train d'entrainement 50 dents est essentiel à un fonctionnement cohérent. <a href="https://www.youtube.com/watch?v=ly22qmB3NxE" target="_blank">Voici</a> une excellente vidéo du Dr Dave démontrant comment le faire.</p>
            `,
            parts: [
                "1x Vis M3x30 SHCS",
                "1x Vis M3x8 SHCS",
                "1x Rondelle M3"
            ]
        },
        filamatrix_step21: {
            title: "Skittles Break",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/SkittlesTurtle.png" alt="Skittles Turtle">
                    <h3>PAUSE!</h3>
                    <p>Prenez quelques smarties ou autre chose ... tout ce que vous aimez 😊</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step22: {
            title: "Inserts filetés",
            description: `
                <p>Installez cinq inserts comme indiqué. Ce sera la dernière fois que votre fer à souder sera utilisé pendant l'assemblage de la tête d'extrusion. Vous pouvez maintenant l'éteindre et le mettre dans un endroit sûr.</p>
                <p><strong>Remarque:</strong> assurez-vous de choisir une température appropriée au matériau des pièces imprimées. Soyez prudent! Les choses chaudes sont chaudes ...</p>
            `,
            parts: [
                "revo_voron_front.stl",
                "5x M3 Heatset insert"
            ]
        },
        filamatrix_step23: {
            title: "Tube PTFE",
            description: `
                <p>Installez le tube PTFE de longueur appropriée à l'hôte choisi. Les gabarits de coupe pour divers habillages peuvent être trouvés <a href="https://github.com/thunderkeys/FilamATrix/tree/main/STLs/cutting_jigs" target="_blank">ici</a>. Pour les têtes Revo Voron, la longueur appropriée est de 15,8 mm.</p>
                <p><strong>Remarque:</strong> Il est FORTEMENT recommandé que l'extrémité du tube Bowden en PTFE faisant face à la partie extrudeur de la tête d'impression soit au minimum chanfreinée sur le diamètre intérieur. Assurez-vous qu'il ne reste plus de PTFE à l'intérieur du tube avant l'installation.</p>
                <p>Il existe de nombreuses méthodes pour chanfreiner le tube PTFE, les méthodes courantes sont:</p>
                <ul>
                    <li>Utiliser manuellement un foret d'environ 6 mm</li>
                    <li>Faire tourner un couteau affuté dans les extrémités du tube PTFE</li>
                    <li>Utiliser un outil d'ébavurage aux extrémités du tube PTFE</li>
                </ul>
            `,
            parts: [
                "Tube PTFE ID 2 mm de ~16 mm"
            ]
        },
        filamatrix_step24: {
            title: "Tête d'impression",
            description: `
                <p>Fixez la tête d'impressione sur le carénage avant avec quatre vis M3x8 SHCS comme indiqué.</p>
                <p><strong>Remarque:</strong> si vous avez oublié le petit morceau de PTFE… vous allez déchanter plus tard.</p>
            `,
            parts: [
                "4x Vis M3x8 SHCS"
            ]
        },
        filamatrix_step25: {
            title: "Sandwich",
            description: `
                <p>Installez le carénage arrière de la tête avec deux vis SHCS M3x16, comme indiqué.</p>
            `,
            parts: [
                "revo_voron_rear.stl",
                "2x Vis M3x16 SHCS"
            ]
        },
        filamatrix_step26: {
            title: "Blade Trimming",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step 5 Razor Cut.png" alt="Razor Trimming Guide">
                    <p>Nous vous recommandons d'installer un capuchon de sécurité sur le tranchant avant de manipuler la lame n°4. Le dessin affiché montre comment la lame doit être coupée à 26 mm de longueur, mesuré à partir du bord de coupe.</p> 
                    <p>You can find blade snapping jigs to assist you <a href="https://github.com/thunderkeys/FilamATrix/tree/main/STLs/cutting_jigs" target="_blank">here</a>. To use it, install the heatset inserts, then screw the two halves together with the sharp end of the blade fully inserted. Use pliers to snap off the excess blade protruding from the jig.</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step27: {
            title: "Porte lame",
            description: `
                <p>Insérez DÉLICATEMENT la lame coupante dans le porte-lame comme indiqué. Il y a un trou témoin dans la partie imprimée, la lame doit être installée à une profondeur qui couvre la moitié de ce trou.</p>
                <p><strong>Remarque:</strong> Si votre lame n'a qu'un biseau d'un côté, assurez-vous que le côté plat est orienté vers le bas.</p>
                <p><strong>Autre remarque:</strong> si votre lame est un peu lâche, elle peut être fixée avec une petite goutte de colle cyanocrylate.</p>
            `,
            parts: [
                "[a]_knife_holder.stl",
                "Lame de cutter #4 réduite à 26 mm"
            ]
        },
        filamatrix_step28: {
            title: "Bras de coupe",
            description: `
                <p>Installez le porte-lame dans le bras de coupe et maintenez avec une vis M2.5x16 SHC comme indiqué. L'orientation est très importante ici, ne l'installez pas à l'envers. Le porte-lame doit se déplacer librement, ne pas trop serrer cette vis.</p>
            `,
            parts: [
                "[a]_cutting_arm_clockwork2.stl",
                "M2.5x16 SHCS"
            ]
        },
        filamatrix_step29: {
            title: "Ressort",
            description: `
                <p>Installez le ressort hélicoïdal dans le bras de coupe comme illustré.</p>
            `,
            parts: [
                "Ressort 0.5x4x25mm"
            ]
        },
        filamatrix_step30: {
            title: "Installation du coupe filament",
            description: `
                <p>Insérez l'ensemble de bras de coupe dans le carénage de la tête comme indiqué. Fixez-le avec une vis FHCS M3x18 comme indiqué. Assurez-vous de ne pas trop le serrer, il est censé pouvoir bouger librement.</p>
            `,
            parts: [
                "1x Vis M3x18 FHCS"
            ]
        },
        filamatrix_step31: {
            title: "Maintien du coupe filament",
            description: `
                <p>Installez une vis M3X8 SHCS comme indiqué. Ne serrez pas complètement cette vis, elle est en place pour limiter le déplacement vers l'extérieur du bras de coupe et ne devrait pas interférer avec lui.</p>
                <p><strong>Remarque:</strong> c'est maintenant le moment de retirer le capuchon de sécurité de la lame.</p>
            `,
            parts: [
                "1x Vis M3x8 SHCS"
            ]
        },
        filamatrix_step32: {
            title: "Illustration de la coupe de filament",
            description: `
                <p>L'extrudeur et la tête d'impression sont illustrés tels qu'ils le seraient sur le chariot que vous avez choisi. Le bras de coupe doit bouger librement et ne pas obstruer le chemin du filament lorsqu'il est complètement relâché.</p>
            `,
            parts: []
        },
        filamatrix_step33: {
            title: "Installation de la façade",
            description: `
                <p><strong>Remarque:</strong> Lors de l'installation du corps principal du StealthBurner sur FilAmatrTix, assurez-vous d'utiliser une vis M3X20 SHCS, pas une des M3X25 SHCS en stock.</p>
            `,
            parts: [
                "1x Vis M3x20 SHCS"
            ]
        },
        filamatrix_step34: {
            title: "Beefy Depressor Heatsets",
            description: `
                <p>Install 2 heatset inserts as shown.</p>
                <p><strong>Note:</strong> Be sure to choose a temperature appropriate for your selected printed parts material. Be careful! Hot things are hot...</p>
            `,
            parts: [
                "beefy_depressor.stl",
                "2x M3 Heatset inserts"
            ]
        },
        filamatrix_step35: {
            title: "Gantry Mount",
            description: `
                <p>Attatch the beefy_depressor_mount to the <strong>LEFT</strong> side of your gantry using M3 screws and washers.</p>
                <p>Shown here is the depressor mounted at the front of the printer. Some setups may find it more advantageous to mount it at the rear.</p>
                <p><strong>Note:</strong> The length of the screw will depend on your specific printer. M3x10 - no backers, M3x12 - titanium backers, M3x16 - MGN9H rails.</p>
            `,
            parts: [
                "beefy_depressor_mount.stl",
                "2x M3 SHCS (see above for length)",
                "2x M3 Washers"
            ]
        },
        filamatrix_step36: {
            title: "Attatch Pin",
            description: `
                <p>Attach the pin to the mount using an M3x16 FHCS.</p>
                <p>You will adjust the height of this pin soon.</p>
            `,
            parts: [
                "1x M3x16 FHCS"
            ]
        },
        filamatrix_step37: {
            title: "Attatch Pin",
            description: `
                <p>Thread an M3 hexnut onto an M3x16 BHCS. Install on the side facing into the printer.</p>
            `,
            parts: [
                "1x M3x16 BHCS",
                "1x M3 Hexnut"
            ]
        },
        filamatrix_step38: {
            title: "Adjustments",
            description: `
                <p>Now is the time to adjust the height of the pin on the mount and the depth of the screw so it will depress the cutting arm when the toolhead pushes against it (going from right to left).</p>
                <p>Use the hexnut to 'lock' the screw into position.</p>
                <p><strong>Note:</strong> You may wish to use the Loctite or VC-3 on this screw. Be careful not to get Loctite on any ABS/ASA printed parts!</p>
            `,
            parts: []
        }
    },
}
