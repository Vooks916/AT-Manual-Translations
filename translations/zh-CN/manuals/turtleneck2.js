export default {
    name: "TurtleNeck 2.0 手册",
    subManuals: {},
    steps: {
        turtleneck2_step1: {
            sectionName: "简介",
            title: "TurtleNeck 2.0",
            description: `
                <p>TurtleNeck 2.0 (TN2) 是一款用于 Klipper 打印机的挤出头缓冲器，专为配合 <a href="https://github.com/ArmoredTurtle/AFC-Klipper-Add-On" target="_blank">AFC Klipper 附加组件</a> 而设计。它通过 usb-c 接入的 STM32G0B1 MCU 工作，因此只需一根线缆就能为你的 Klipper 机器增加这一功能。</p>
                <p>TN2 使用两个霍尔效应传感器，在缓冲器于任一方向撞上硬限位之前检测其移动。此外，电路板上还有五个 JST-PH 限位端口，可用于耗材汇流器或“轮毂”。</p>
                <p>像 TN2 这样的挤出头缓冲器，其作用是补偿挤出头挤出机与直驱式 AFC（你要是喜欢这么叫，也可以叫“type 2 MMU”）之间不匹配的旋转距离。</p>
            `,
            parts: []
        },
        turtleneck2_step2: {
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
        turtleneck2_step3: {
            title: "命名规则",
            content: `
                <div class=info>
                    <h3>文件命名</h3>
                    <p>此时你应该已经从 <a href="https://github.com/ArmoredTurtle/TurtleNeck2.0" target="_blank">GitHub</a> 下载了 STL 文件。下面说明我们的命名规则该如何理解。</p>
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
        turtleneck2_step4: {
            sectionName: "组装",
            title: "零件准备",
            description: `
                <p>如图所示安装四个热熔螺母。</p>
                <p><strong>注意：</strong>务必根据你所选打印件材料选择合适的温度。小心！烫的东西真的很烫……</p>
                <p><strong>注意：</strong>这是本分节中最后一个需要安装热熔螺母的步骤。务必关闭电烙铁，并将其放在安全的地方。</p>
            `,
            parts: [
                "[a]_baseplate.stl",
                "4x M3 热熔螺母"
            ]
        },
        turtleneck2_step5: {
            title: "滑块准备",
            description: "如图所示安装磁铁，并在滑片/滑块两侧贴上毛毡垫贴片，注意避开卡扣。",
            parts: [
                "carriage.stl",
                "slide.stl",
                "1x 3x2 磁铁（极性无所谓）",
                "1mm 毛毡垫（可选但推荐）"
            ]
        },
        turtleneck2_step6: {
            title: "安装滑块",
            description: `
                <p>将滑片穿过电路板上的槽口。然后从上方扣入滑块，用一颗 M2.5x10 内六角沉头螺丝 (FHCS) 固定到位。</p>
                <p>拧紧后，确认滑块仍能顺畅滑动。</p>
                <p><strong>注意：</strong>检查滑片的方向，磁铁应当位于电路板上霍尔效应传感器的下方。</p>
            `,
            parts: [
                "1x M2.5x10 内六角沉头螺丝 (FHCS)"
            ]
        },
        turtleneck2_step7: {
            title: "刷写主板",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>自检！</h3>
                    <p>你是否已经 <a href="https://github.com/ArmoredTurtle/TurtleNeck2.0/tree/main/Flashing" target="_blank">刷写了主板</a> 并确认能连接到打印机？如果还没有，现在正是时候！</p>
                </div>
            `,
            parts: []
        },
        turtleneck2_step8: {
            title: "主体",
            description: `
                <p>把装有滑块的电路板放到底板上。再将主体盖在上面，如图所示用 4 颗 M3x8 内六角圆柱头螺丝 (SHCS) 固定。</p>
            `,
            parts: [
                "main_body.stl",
                "[a]_baseplate.stl",
                "4x M3x8 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        turtleneck2_step9: {
            title: "最痛苦的一步……",
            description: `
                <p>如图所示插入 ECAS04 接头</p>
                <p><strong>可选：</strong>如图所示，将一颗 WS2812 电路板灯珠（neopixel）卡入进料口的卡槽中。</p>
                <p><strong>注意：</strong>这些接头本来就是紧配合，你可以把它们平放在桌面上，再将打印件压到上面。</p>
            `,
            parts: [
                "single_inlet.stl",
                "[a]_tube.stl",
                "2x ECAS04 铁氟龙管接头（已去除后部橡胶缓冲垫）"
            ]
        },
        turtleneck2_step10: {
            title: "盖子",
            description: `
                <p>掰掉一体打印卡扣上的支撑。</p>
                <p>如果没有用多色打印，你也可以选择单独打印嵌件，再如图所示把它压入盖子中。</p>
                <p>如图所示，将 2 颗 M3x10 内六角沉头螺丝 (FHCS) 拧入盖子。</p>
                <p><strong>注意：</strong>这些螺丝是直接拧入塑料的，拧到紧固即可，但不要拧到滑牙、弄坏打印件。</p>
            `,
            parts: [
                "[a]_lid.stl",
                "2x M3x10 内六角沉头螺丝 (FHCS)"
            ]
        },
        turtleneck2_step11: {
            title: "耗材路径",
            description: `
                <p>先如图所示把进料口卡入。然后就可以把管子经主体推入滑块中。</p>
                <p><strong>注意：</strong>管子上的凹槽应当位于滑块的中央。</p>
            `,
            parts: []
        },
        turtleneck2_step12: {
            title: "卡扣",
            description: `
                <p>如图所示把管子卡到位。第一次装会比较紧。</p>
                <p>如果选装了灯珠（neopixel），现在正是插上它的时候。</p>
            `,
            parts: [
                "clip.stl"
            ]
        },
        turtleneck2_step13: {
            title: "自检",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>自检！</h3>
                    <p>在合上盖子之前，你可以先往管子里插入一小段废弃的铁氟龙管。检查耗材能否顺畅地穿过整个 TN2。</p>
                    <p>现在可以合上盖子了。</p>
                </div>
            `,
            parts: []
        },
        turtleneck2_step14: {
            title: "合上它！",
            description: `
                <p>盖子先卡入锁孔中，然后由卡扣将其固定到位。</p>
            `,
            parts: []
        },
        turtleneck2_step15: {
            title: "铁氟龙管检查",
            description: `
                <p>安装到打印机后，将来自 AFC 的铁氟龙管一直穿过整个 TN2</p>
                <p><strong>注意：</strong>它应当恰好停在将“管件”推出主体的位置之前。</p>
            `,
            parts: []
        }
    },
}
