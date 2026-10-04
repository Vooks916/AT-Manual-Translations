export default {
    name: "TurtleNeck 手册",
    subManuals: {},
    steps: {
        turtleneck_step1: {
            sectionName: "简介",
            title: "TurtleNeck",
            description: `
                <p>TurtleNeck 是一个简单的挤出头缓冲器，用于让两个挤出机电机同步运转。它在行程的两端（前进端和拖尾端）各有一个限位开关。这些传感器会在缓冲器硬限位前 2.5mm 处触发，两端之间有 25mm 的行程。</p>
            `,
            parts: []
        },
        turtleneck_step2: {
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
        turtleneck_step3: {
            title: "命名规则",
            content: `
                <div class=info>
                    <h3>文件命名</h3>
                    <p>此时你应该已经从 <a href="https://github.com/ArmoredTurtle/TurtleNeck" target="_blank">GitHub</a> 下载了 STL 文件。下面说明我们的命名规则该如何理解。</p>
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
        turtleneck_step4: {
            sectionName: "组装",
            title: "热熔螺母",
            description: `
                <p>如图所示安装四个热熔螺母。</p>
                <p><strong>注意：</strong>务必根据你所选打印件材料选择合适的温度。小心！烫的东西真的很烫……</p>
                <p><strong>注意：</strong>这是本分节中最后一个需要安装热熔螺母的步骤。务必关闭电烙铁，并将其放在安全的地方。</p>
            `,
            parts: [
                "lid.stl",
                "4x M3 热熔螺母"
            ]
        },
        turtleneck_step5: {
            title: "ECAS 接头",
            description: `
                <p>如图所示装入 ECAS04 接头</p>
                <p><strong>注意：</strong>这些接头本来就是紧配合，你可以把它们平放在桌面上，再将打印件压到上面。</p>
            `,
            parts: [
                "[a]_slide.stl",
                "frame.stl",
                "2x ECAS04 铁氟龙管接头（已去除后部橡胶缓冲垫）"
            ]
        },
        turtleneck_step6: {
            title: "微动开关",
            description: `
                <p>注意微动开关上拨杆的朝向，如图所示用四颗 M2x10 自攻螺丝安装。请注意，这些螺丝是直接攻入塑料的。</p>
                <p>分不清哪个开关是哪个？这里有一份 <a href="/docs/afc-klipper-add-on/installation/buffer-overview.html" target="_blank">文档</a> 帮你了解缓冲器及其功能</p>
                <div class='tn-switches-key'>
                    <strong>图例：</strong>
                    <p class='advance'>前进</p>
                    <p class='trailing'>拖尾</p>
                </div>
            `,
            parts: [
                "4x M2x10 自攻螺丝",
                "2x D2F 微动开关"
            ]
        },
        turtleneck_step7: {
            title: "滑块",
            description: `
                <p>如图所示，将滑块放入盖板中。</p>
            `,
            parts: []
        },
        turtleneck_step8: {
            title: "夹层组装",
            description: `
                <p>在滑块正确就位的情况下，用四颗 M3x8 内六角圆柱头螺丝 (SHCS) 将框架安装到盖板上。</p>
                <p>确认所有部件固定好后，滑块仍能自由移动。</p>
            `,
            parts: [
                "4x M3x8 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        turtleneck_step9: {
            title: "铁氟龙管",
            description: `
                <p>如图所示，把 AFC 过来的铁氟龙管一直穿过 TN。</p>
                <p><strong>注意：</strong>它应当恰好停在将“滑块”推出主体的位置之前。</p>
            `,
            parts: []
        }
    },
}
