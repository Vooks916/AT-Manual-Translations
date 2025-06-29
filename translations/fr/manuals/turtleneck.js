export default {
    name: "Manuel TurtleNeck",
    subManuals: {},
    steps: {
        turtleneck_step1: {
            title: "TurtleNeck",
            description: `
                <p>TurtleNeck est un tampon de tête d'impression simple utilisé pour synchroniser deux moteurs d'extrudeur ensemble. Il comporte un interrupteur de fin de course à chaque butée de déplacement (avance et fuite). Ces capteurs se déclenchent 2,5 mm avant l'arrêt matériel du tampon avec une course de 25 mm entre les deux.</p>
            `,
            parts: []
        },
        turtleneck_step2: {
            title: "",
            content: `
                <div class="info">
                    <h3>RECOMMANDATION D'IMPRESSION DES PIECES</h3>
                    <p>Paramètres d'impression que nous vous recommandons de suivre afin d'obtenir les meilleures chances de réussite des pièces.</p>
                </div>

                <div class="print-settings">
                    <div class="print-setting">
                        <h4>PROCÉDÉ D'IMPRESSION 3D</h4>
                        <p>Dépôt de filament fondu (FDM)</p>
                    </div>
                    <div class="print-setting">
                        <h4>MATÉRIEL</h4>
                        <p>ABS est le meiux, mais le PLA fonctionne aussi</p>
                    </div>
                    <div class="print-setting">
                        <h4>HAUTEUR DE COUCHE</h4>
                        <p>Recommandé: 0.2mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>TYPE DE REMPLISSAGE</h4>
                        <p>Recommandé: Gyroïde</p>
                    </div>
                    <div class="print-setting">
                        <h4>POURCENTAGE DU REMPLISSAGE</h4>
                        <p>Recommandé: 20%</p>
                    </div>
                    <div class="print-setting">
                        <h4>COUCHES PÉRIMÈTRES/DESSUS/DESSOUS</h4>
                        <p>Recommandé: 4</p>
                    </div>
                </div>
            `,
            parts: []
        },
        turtleneck_step3: {
            title: "",
            content: `
                <div class=info>
                    <h3>DÉNOMINATION DES FICHIERS</h3>
                    <p>Normalement, vous avez déjà dû récupérer les fichiers STL via <a href="https://github.com/ArmoredTurtle/TurtleNeck" target="_blank">GitHub</a>. Voici la convention de dénomination.</p>
                </div>
                <div class="naming-conventions">
                    <div class="naming-convention">
                        <h4>COULEUR PRIMAIRE</h4>
                        <h6>Exemple: body.stl</h6>
                        <p>Ces fichiers n'ont rien de particulier au début du nom de fichier.</p>
                    </div>
                    <div class="naming-convention">
                        <h4>COULEUR ACCENT</h4>
                        <h6>Exemple: [a]_turtle_box.stl</h6>
                        <p>“[a]” a été ajouté au début de tout fichier STL qui doit être imprimé avec la couleur d'accent.</p>
                    </div>
                    <div class="naming-convention">
                        <h4>CLEAR PART</h4>
                        <h6>Example: [c]_led_diffuser.stl</h6>
                        <p>We have added “[c]” to the front of any STL file that is intended to be printed with clear filament.</p>
                    </div>
                    <div class="naming-convention">
                        <h4>QUANTITÉ REQUISE</h4>
                        <h6>Exemple: extruder_housing_x4.stl</h6>
                        <p>Tout fichier se terminant par “_x#”, indique la quantité de pièces nécessaires à la construction de la machine.</p>
                    </div>
                </div>
                <div class=info>
                    <h3>COMMENT OBTENIR DE L'AIDE</h3>
                    <p>Si vous avez besoin d'aide pour votre construction, nous sommes là pour vous aider. Rendez-vous sur notre <a href="https://discord.gg/AaVHfeYgw2" target="_blank">Discord Server</a> et postez y vos questions. C'est le principal moyen pour obtenir de l'aide: l'excellente communauté pourra vous aider si vous êtes coincé.</p>
                </div>
            `,
            parts: []
        },
        turtleneck_step4: {
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
        turtleneck_step5: {
            title: "Raccords ECAS",
            description: `
                <p>Insérez les raccords ECAS04 comme illustré.</p>
                <p><strong>Note:</strong> Ceux-ci sont censés être serrés, vous pouvez les poser à plat sur la table et y appuyer les pièces imprimées.</p>
            `,
            parts: [
                "[a]_slide.stl",
                "frame.stl",
                "2x Coupleurs Bowden ECAS04 avec le connecteur interne retiré"
            ]
        },
        turtleneck_step6: {
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
        turtleneck_step7: {
            title: "Glissière",
            description: `
                <p>Placez la glissière dans le couvercle comme indiqué.</p>
            `,
            parts: []
        },
        turtleneck_step8: {
            title: "Sandwich",
            description: `
                <p>Installez le cadre, le couvercle et la glissière correctement positionnée à l'aide de quatre vis SHCS M3x8.</p>
                <p>Assurez-vous que la glissière se déplace sans contrainte une fois que tout est sécurisé.</p>
            `,
            parts: [
                "4x vis M3x8 SHCS"
            ]
        },
        turtleneck_step9: {
            title: "Tube Bowden",
            description: `
                <p>Insérez le tube PTFE provenant de votre AFC jusqu'au fond de votre TN comme indiqué.</p>
                <p><strong>Note:</strong> l'arrêter juste avant qu'il ne pousse la « glissière » en dehors du corps principal.</p>
            `,
            parts: []
        }
    },
}
