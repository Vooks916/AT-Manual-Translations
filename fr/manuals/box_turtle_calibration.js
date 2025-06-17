export default {
    "name": "Manuel de calibration BoxTurtle",
    "subManuals": {},
    "steps": {
        "box_turtle_calibration_boxturtle_calibration_fidget": {
            "title": "Fidget de calibration BoxTurtle",
            "description": "Il s'agit d'une impression d'étalonnage pour tester vos paramètres du trancheur lors de la construction du changeur de filament automatique de la tortue et se double d'un jouet fidget cool lorsque vous avez terminé!",
            "parts": []
        },
        "box_turtle_calibration_step2": {
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
        "box_turtle_calibration_step3": {
            "title": "",
            "content": `
                <div class=info>
                    <h3>DÉNOMINATION DES FICHIERS</h3>
                    <p>Normalement, vous avez déjà dû récupérer les fichiers STL via <a href="https://www.printables.com/model/1004303-box-turtle-calibration-fidget" target="_blank">Printables</a>. Voici la convention de dénomination.</p>
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
        "box_turtle_calibration_support_removal": {
            "title": "Retrait du support",
            "description": "Assurez-vous de pouvoir facilement retirer les supports arrière et avant sur le corps ainsi que les supports sur le Turtle_Box_Retainer.",
            "parts": [
                "body.stl",
                "turtle_box_retainer.stl"
            ]
        },
        "box_turtle_calibration_test_body_assembly": {
            "title": "Assemblage du corps de test",
            "description": "Test de l'aimant, du connecteur ECAS et du roulement MR148ZZ. Les ECAS devraient être bien ajustés. Si l'aimant est un peu lâche, utilisez de la super colle.",
            "parts": [
                "1x aimant 6x3",
                "1x connecteur ECAS avec le connecteur interne retiré",
                "1x roulement MR148ZZ"
            ]
        },
        "box_turtle_calibration_trigger_assembly": {
            "title": "Assemblage du déclencheur",
            "description": "Laisser environ 3,5mm d'espace entre la gâchette et les têtes de vis.",
            "parts": [
                "trigger.stl",
                "feeder.stl",
                "1x aimant 6x3",
                "1x 50mm de tube PTFE 4ODx3ID",
                "2x M3x8mm SHCS"
            ]
        },
        "box_turtle_calibration_sub_assemblies": {
            "title": "Sous-assemblages",
            "description": "Déposez la gâchette dans les rainures supérieures du corps.",
            "parts": []
        },
        "box_turtle_calibration_turtle_box_install": {
            "title": "Installation Turtle Box",
            "description": "Insérez les deux languettes supérieures de la Turtle Box dans le corps puis appuyez pour l'enclencher.",
            "parts": [
                "[a]_turtle_box.stl"
            ]
        },
        "box_turtle_calibration_final": {
            "title": "Final",
            "description": "Vérifiez que le mouvement de la gâchette est fluide et qu'elle se ferme lorsqu'elle est relâchée.",
            "parts": [
                "[a]_turtle_box_retainer.stl"
            ]
        }
    }
}
