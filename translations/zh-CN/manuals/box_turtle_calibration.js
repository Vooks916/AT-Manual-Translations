export default {
    name: "BoxTurtle 校准手册",
    subManuals: {},
    steps: {
        box_turtle_calibration_step1: {
            sectionName: "简介",
            title: "BoxTurtle 校准解压件",
            description: "这是一件校准打印件，用于在组装 BoxTurtle 自动换料控制器（AFC）时检验你的切片软件设置；打印完成后，它还是一个挺酷的解压小玩具！",
            parts: []
        },
        box_turtle_calibration_step2: {
            title: "零件打印指南",
            content: `
                <div class="info">
                    <h3>零件打印指南</h3>
                    <p>以下是我们的推荐打印设置。遵循这些设置，能最大程度提高零件打印的成功率。</p>
                </div>
    
                <div class="print-settings">
                    <div class="print-setting">
                        <h4>3D 打印工艺</h4>
                        <p>熔融沉积成型（FDM）</p>
                    </div>
                    <div class="print-setting">
                        <h4>材料</h4>
                        <p>推荐 ABS，PLA 也可以</p>
                    </div>
                    <div class="print-setting">
                        <h4>层高</h4>
                        <p>推荐：0.2mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>填充类型</h4>
                        <p>推荐：Gyroid</p>
                    </div>
                    <div class="print-setting">
                        <h4>填充率</h4>
                        <p>推荐：20%</p>
                    </div>
                    <div class="print-setting">
                        <h4>墙层数/顶层/底层</h4>
                        <p>推荐：4</p>
                    </div>
                </div>
            `,
            parts: []
        },
        box_turtle_calibration_step3: {
            title: "命名规则",
            content: `
                <div class=info>
                    <h3>文件命名</h3>
                    <p>此时你应该已经从 <a href="https://www.printables.com/model/1004303-box-turtle-calibration-fidget" target="_blank">Printables</a> 下载了 STL 文件。下面说明我们的命名规则该如何理解。</p>
                </div>
                <div class="naming-conventions">
                    <div class="naming-convention">
                        <h4>主色</h4>
                        <h6>示例：body.stl</h6>
                        <p>这类文件名开头没有任何特殊标记。</p>
                    </div>
                    <div class="naming-convention">
                        <h4>点缀色</h4>
                        <h6>示例：[a]_turtle_box.stl</h6>
                        <p>凡是需要用点缀色打印的 STL 文件，我们都在文件名前加上了“[a]”。</p>
                    </div>
                    <div class="naming-convention">
                        <h4>透明件</h4>
                        <h6>示例：[c]_led_diffuser.stl</h6>
                        <p>凡是需要用透明耗材打印的 STL 文件，我们都在文件名前加上了“[c]”。</p>
                    </div>
                    <div class="naming-convention">
                        <h4>所需数量</h4>
                        <h6>示例：extruder_housing_x4.stl</h6>
                        <p>如果文件名以“_x#”结尾，它就告诉你组装这台机器需要该零件的数量。</p>
                    </div>
                </div>
                <div class=info>
                    <h3>如何获得帮助</h3>
                    <p>如果你在组装过程中需要帮助，我们随时都在。欢迎加入我们的 <a href="https://discord.gg/AaVHfeYgw2" target="_blank">Discord 服务器</a> 提问。这是我们主要的求助渠道，社区氛围很好——卡住了会有人帮你。</p>
                </div>
            `,
            parts: []
        },
        box_turtle_calibration_step4: {
            sectionName: "组装",
            title: "去除支撑",
            description: "确保本体上前后的支撑，以及 turtle_box_retainer 上的支撑都能轻松去除。",
            parts: [
                "body.stl",
                "turtle_box_retainer.stl"
            ]
        },
        box_turtle_calibration_step5: {
            title: "本体试装",
            description: "试装磁铁、ECAS 接头和 MR148ZZ 轴承。ECAS 应当配合较紧。如果磁铁有点松，用一点强力胶固定。",
            parts: [
                "1x 6x3 磁铁",
                "1x ECAS 接头（已去除后部橡胶缓冲垫）",
                "1x MR148ZZ 轴承"
            ]
        },
        box_turtle_calibration_step6: {
            title: "扳机装配",
            description: "扳机与螺丝头之间留出约 3.5mm 的间隙。",
            parts: [
                "trigger.stl",
                "feeder.stl",
                "1x 6x3 磁铁",
                "1x 50mm 4ODx3ID 铁氟龙管",
                "2x M3x8mm 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        box_turtle_calibration_step7: {
            title: "子组件组装",
            description: "把扳机放入本体上方的凹槽中。",
            parts: []
        },
        box_turtle_calibration_step8: {
            title: "安装 Turtle Box",
            description: "把 Turtle Box 上部的两个卡舌插入本体，然后向下按压，使其卡合到位。",
            parts: [
                "[a]_turtle_box.stl"
            ]
        },
        box_turtle_calibration_step9: {
            title: "完成检查",
            description: "检查扳机动作是否顺滑，松开时能否自动卡合闭合。",
            parts: [
                "[a]_turtle_box_retainer.stl"
            ]
        }
    },
}
