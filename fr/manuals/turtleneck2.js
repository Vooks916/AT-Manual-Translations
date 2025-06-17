export default {
    "name": "Manuel TurtleNeck 2.0",
    "subManuals": {},
    "steps": {
        "turtleneck2_turtleneck_2_0": {
            "title": "TurtleNeck 2.0",
            "description": `
                <p>TurtleNeck 2.0 (TN2) Est un tampon pour la tête d'impression d'une imprimante klipper conçu pour fonctionner avec le <a href="https://github.com/ArmoredTurtle/AFC-Klipper-Add-On" target="_blank">module complémentaire AFC Klipper</a>. Il utilise un MCU STM32G0B1 sur USB-C pour son fonctionnement. Ce qui n'ajoute qu'un câble supplémentaire à votre machine Klipper.</p>
                <p>Le TN2 utilise deux capteurs à effet Hall qui permettent de détecter le mouvement du tampon et autorisent son arrêt dans l'une ou l'autre direction. De plus, le PCB possède cinq prises pour interrupteurs de fin de course JST-PH utilisables pour les combineurs de filaments ou « hubs ».</p>
                <p>Le but d'un tampon de tête d'outil tel que TN2 est de compenser le décalage des distances de rotation entre l'extrudeur de la tête et un AFC à entraînement direct (« type 2 MMU » si vous aimez les appeler ainsi...)</p>
            `,
            "parts": []
        },
        "turtleneck2_step2": {
            "title": "",
            "content": `
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
            "parts": []
        },
        "turtleneck2_step3": {
            "title": "",
            "content": `
                <div class=info>
                    <h3>DÉNOMINATION DES FICHIERS</h3>
                    <p>Normalement, vous avez déjà dû récupérer les fichiers STL via <a href="https://github.com/ArmoredTurtle/TurtleNeck2.0" target="_blank">GitHub</a>. Voici la convention de dénomination.</p>
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
            "parts": []
        },
        "turtleneck2_part_preparation": {
            "title": "Préparation des pièces",
            "description": `
                <p>Installez quatre inserts comme indiqué.</p>
                <p><strong>Note:</strong> Assurez-vous de choisir une température adaptée au matériau utilisé pour les pièces imprimées, soyez prudent ! Les choses chaudes sont chaudes...</p>
                <p><strong>Note:</strong> Ceci est la dernière fois que cette section nécessite l'installation d'inserts filetés. Assurez-vous d'éteindre votre fer à souder et de le ranger dans un endroit sûr.</p>
            `,
            "parts": [
                "[a]_baseplate.stl",
                "4x Inserts M3"
            ]
        },
        "turtleneck2_carriage_prep": {
            "title": "Préparation du chariot",
            "description": "Installez l'aimant comme indiqué puis appliquez des autocollants en feutre des deux côtés de la glissière/du chariot.",
            "parts": [
                "carriage.stl",
                "slide.stl",
                "1x Aimant 3x2 (la polarité n'a pas d'importance)",
                "Coussinet en feutrede 1mm (optionnel mais recommandé)"
            ]
        },
        "turtleneck2_install_carriage": {
            "title": "Installation du chariot",
            "description": `
                <p>Placez la glissière dans la fente du PCB. Clipsez le chariot par le haut et fixez-le en place avec une seule vis M2,5x10 FHCS.</p>
                <p>Assurez-vous que le chariot glisse en douceur une fois vissé.</p>
                <p><strong>Note:</strong> Vérifiez l'orientation de la glissière, l'aimant doit être sous les capteurs d'effet Hall sur le PCB.</p>
            `,
            "parts": [
                "1x vis M2,5x10 FHCS"
            ]
        },
        "turtleneck2_step7": {
            "title": "",
            "content": `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>VÉRIFICATION DE SÉCURITÉ!</h3>
                    <p>Avez-vous <a href="https://github.com/ArmoredTurtle/TurtleNeck2.0/tree/main/Flashing" target="_blank">flashé votre carte</a> et confirmé la connexion à votre imprimante? Sinon, c'est le moment de le faire!</p>
                </div>
            `,
            "parts": []
        },
        "turtleneck2_main_body": {
            "title": "Corps principal",
            "description": `
                <p>Placez le PCB avec le chariot installé sur la plaque de base. Placez le corps principal sur le dessus et fixez avec 4 vis M3x8 SHCS comme indiqué.</p>
            `,
            "parts": [
                "main_body.stl",
                "[a]_baseplate.stl",
                "4x vis M3x8 SHCS"
            ]
        },
        "turtleneck2_the_worst_part": {
            "title": "Partie la plus pénible...",
            "description": `
                <p>Insérez les pièces ECAS04 comme indiqué</p>
                <p><strong>Optionnel:</strong> Insérez une LED néopixel WS2812 comme indiqué dans le loquet de l'entrée.</p>
                <p><strong>Note:</strong> Ceux-ci sont censés être serrés, vous pouvez les poser à plat sur la table et presser les pièces imprimées dessus.</p>
            `,
            "parts": [
                "single_inlet.stl",
                "[a]_tube.stl",
                "2x Coupleurs Bowden ECAS04 avec le connecteur interne retiré"
            ]
        },
        "turtleneck2_lid": {
            "title": "Couvercle",
            "description": `
                <p>Retirez le support du loquet d'impression en place.</p>
                <p>S'il n'est pas imprimé en multicouleur, vous pouvez choisir d'imprimer l'incrustation seule et de l'enfoncer dans le couvercle comme indiqué.</p>
                <p>Vissez 2 vis FHCS M3x10 dans le couvercle comme indiqué.</p>
                <p><strong>Note:</strong> Les vis étant filetées dans du plastique, elles doivent être bien ajustées mais vous ne voulez pas détériorer la partie imprimée.</p>
            `,
            "parts": [
                "[a]_lid.stl",
                "2x vis M3x10 FHCS"
            ]
        },
        "turtleneck2_filament_path": {
            "title": "Cheminement du filament",
            "description": `
                <p>Incorporer l'entrée comme indiqué en premier. Ensuite, vous pouvez glisser le tube dans le chariot à travers le corps principal.</p>
                <p><strong>Note:</strong> La rainure sur le tube doit être centrée dans le chariot.</p>
            `,
            "parts": []
        },
        "turtleneck2_clip": {
            "title": "Clip",
            "description": `
                <p>Clipsez le tube en place comme indiqué. Ce sera serré la première fois.</p>
                <p>Si vous utilisez le néopixel en option, il est maintenant temps de le brancher.</p>
            `,
            "parts": [
                "clip.stl"
            ]
        },
        "turtleneck2_step13": {
            "title": "",
            "content": `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>VÉRIFICATION DE SÉCURITÉ!</h3>
                    <p>Avant de refermer le couvercle, vous voudrez peut-être insérer un petit morceau de tube PTFE dans le tube. Vérifiez que le filament glisse facilement tout au long du TN2.</p>
                    <p>Vous pouvez maintenant fermer le couvercle.</p>
                </div>
            `,
            "parts": []
        },
        "turtleneck2_close_it_up": {
            "title": "Fermez-le!",
            "description": `
                <p>Le couvercle s'insère dans les trous de serrure, puis le loquet le maintient en place.</p>
            `,
            "parts": []
        },
        "turtleneck2_bowden_tube_check": {
            "title": "Contrôle du tube Bowden",
            "description": `
                <p>Une fois monté sur votre imprimante, insérez le tube PTFE de votre AFC jusqu'au bout de votre TN2.</p>
                <p><strong>Note:</strong> il devrait s'arrêter juste avant de pousser le «tube» vers l'extérieur du corps principal.</p>
            `,
            "parts": []
        }
    }
}
