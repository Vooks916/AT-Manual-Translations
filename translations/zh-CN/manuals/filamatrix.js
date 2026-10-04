export default {
    name: "FilamATrix 手册",
    subManuals: {},
    steps: {
        filamatrix_step1: {
            title: "简介",
            content: `
                <div class="infoL">
                    <h3>简介</h3>
                    <p class='extra-space'>本手册旨在为 Stealthburner 的 FilamATrix 改装提供专门的补充说明与背景信息。它是官方 <a href="https://github.com/VoronDesign/Voron-Stealthburner/blob/main/Manual/Assembly_Manual_SB.pdf" target="_blank">Voron Stealthburner 手册</a> 的配套资源，需与官方手册配合使用。虽然整体装配流程与官方手册相同，但本指南会重点说明将 FilamATrix 改装融入你的组装时需要注意的关键差异与特殊事项。</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step2: {
            title: "零件打印指南",
            content: `
                <div class="info">
                    <h3>零件打印指南</h3>
                    <p>以下是推荐的打印设置，遵循它们能让你的零件获得最高的打印成功率。</p>
                </div>
    
                <div class="voron-print-settings">
                    <div class="print-setting">
                        <h4>3D 打印工艺</h4>
                        <p>熔融沉积成型 (FDM)</p>
                    </div>
                    <div class="print-setting">
                        <h4>填充类型</h4>
                        <p>Grid、Gyroid、Honeycomb、Triangle 或 Cubic</p>
                    </div>
                    <div class="print-setting">
                        <h4>材料</h4>
                        <p>ABS</p>
                    </div>
                    <div class="print-setting">
                        <h4>填充率</h4>
                        <p>推荐：40%</p>
                    </div>
                    <div class="print-setting">
                        <h4>层高</h4>
                        <p>推荐：0.2mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>墙层数</h4>
                        <p>推荐：4</p>
                    </div>
                    <div class="print-setting">
                        <h4>挤出宽度</h4>
                        <p>推荐：强制 0.4mm</p>
                    </div>
                    <div class="print-setting">
                        <h4>实心顶层/底层</h4>
                        <p>推荐：5</p>
                    </div>
                </div>
            `,
            parts: []
        },
        filamatrix_step3: {
            title: "命名规则",
            content: `
                <div class=info>
                    <h3>文件命名</h3>
                    <p>此时你应该已经从 <a href="https://github.com/thunderkeys/FilamATrix" target="_blank">GitHub</a> 下载了 STL 文件。下面说明我们的命名规则该如何理解。</p>
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
        filamatrix_step4: {
            title: "热熔螺母",
            description: `
                <p>如图所示，安装五颗热熔螺母。</p>
                <p><strong>注意：</strong>请务必根据你所选打印件的材料选择合适的温度。小心！烫的东西真的很烫……</p>
            `,
            parts: [
                "main_body_clockwork2_single_switch.stl",
                "5x M3 热熔螺母"
            ]
        },
        filamatrix_step5: {
            title: "热熔螺母",
            description: `
                <p>如图所示，安装七颗热熔螺母。图中用黄色箭头标出的两颗热熔螺母必须安装到打印件表面以下。</p>
                <p><strong>注意：</strong>请务必根据你所选打印件的材料选择合适的温度。小心！烫的东西真的很烫……</p>
            `,
            parts: [
                "motor_plate.stl",
                "7x M3 热熔螺母"
            ]
        },
        filamatrix_step6: {
            title: "热熔螺母",
            description: `
                <p>如图所示，安装两颗热熔螺母。这是挤出机组装过程中最后一次使用热熔工具了。现在请关掉它，放到安全的地方。</p>
                <p><strong>注意：</strong>请务必根据你所选打印件的材料选择合适的温度。小心！烫的东西真的很烫……</p>
            `,
            parts: [
                "[a]_guidler_a.stl",
                "[a]_latch_shuttle.stl",
                "2x M3 热熔螺母"
            ]
        },
        filamatrix_step7: {
            title: "导料器 1",
            description: `
                <p>如图所示，将 guidler_b 安装到 guidler_a 上，用一颗 M3x16 SHCS 固定。</p>
            `,
            parts: [
                "[a]_guidler_b.stl",
                "1x M3x16 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step8: {
            title: "导料器 2",
            description: `
                <p>如图所示，安装 BMG 惰轮组件。如果之前还没有做，现在正是给惰轮组件里的滚针轴承上油的时候。</p>
            `,
            parts: [
                "BMG 惰轮组件"
            ]
        },
        filamatrix_step9: {
            title: "导料器 3",
            description: `
                <p>如图所示，用 BMG 张紧组件将闩锁滑块固定到导料器上。</p>
            `,
            parts: [
                "BMG 张紧组件"
            ]
        },
        filamatrix_step10: {
            title: "微动开关提示",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>停！</h3>
                    <p>下一步需要把微动开关安装到挤出机本体中。导线没有预先焊好，因为长度和接头很大程度上取决于多种因素。</p>
                    <p>如果你的开关带有金属拨杆，请在安装前将其拆下。现在是时候把导线焊到开关的两个外侧引脚上，并套上热缩管。</p>
                    <p><strong>注意：</strong>如果使用挤出头电路板，你可能需要弯折开关上的接头，以免发生干涉。</p>
                    <p>如果你从未焊接过，<a href="https://www.youtube.com/watch?v=rK38rpUy568" target="_blank">这里</a> 有一个很棒的视频教程可以带你入门。（其实真的不难 😊）</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step11: {
            title: "传感器",
            description: `
                <p>把一颗 5.5mm 钢珠放入槽中，随后如图所示装入一个 D2F 微动开关。用两颗 M2x10 自攻螺丝固定到位。注意不要把这几个孔拧滑牙，因为它们是直接在塑料上攻丝的。</p>
                <p>传感器组装完成后，现在正好可以确认它能正常工作。方法是把一段耗材穿过挤出机本体，听传感器触发时是否发出清晰的“咔哒”声。</p>
            `,
            parts: [
                "D2F 微动开关",
                "5.5mm 钢珠",
                "2x M2x10 自攻螺丝"
            ]
        },
        filamatrix_step12: {
            title: "轴承",
            description: `
                <p>如图所示，安装两颗 MR85 轴承，并拧紧防挤压螺丝（M3x6 FHCS）。</p>
            `,
            parts: [
                "1x M3x6 内六角沉头螺丝 (FHCS)",
                "2x MR85 轴承"
            ]
        },
        filamatrix_step13: {
            title: "驱动齿轮",
            description: `
                <p>如图所示，将驱动齿轮滑入 50t 正齿轮的轴上，注意安装方向。</p>
            `,
            parts: [
                "50t 正齿轮",
                "BMG 驱动齿轮"
            ]
        },
        filamatrix_step14: {
            title: "合拢",
            description: `
                <p>如图所示，将挤出机的两半围绕驱动齿轮组件合拢。</p>
            `,
            parts: []
        },
        filamatrix_step15: {
            title: "螺丝",
            description: `
                <p>如图所示，把两颗 M3x25 SHCS 螺丝装入对应的孔中。不要拧得过紧，除非你喜欢重新打印零件。</p>
            `,
            parts: [
                "2x M3x25 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step16: {
            title: "驱动齿轮对中",
            description: `
                <p>用一段耗材检查挤出机齿轮的对中情况。现在可以用随附的紧定螺丝把它固定到位。如果紧定螺丝没有预涂螺纹胶，别忘了涂上 Loctite。</p>
            `,
            parts: []
        },
        filamatrix_step17: {
            title: "ECAS",
            description: `
                <p>如图所示，将 ECAS 04 接头安装到挤出机顶部。</p>
            `,
            parts: [
                "ECAS 04 接头（去除橡胶密封圈）"
            ]
        },
        filamatrix_step18: {
            title: "安装导料器",
            description: `
                <p>如图所示，将导料器组件插入挤出机本体，用一颗 M3x25 SHCS 固定。</p>
                <p>注意不要拧得过紧。导料器应当能自由活动。</p>
            `,
            parts: [
                "1x M3x25 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step19: {
            title: "闩锁",
            description: `
                <p>安装闩锁，用一颗 M3x25 SHCS 固定。它应当和导料器一样能自由活动。图中给出了一个剖切视图，供参考导料器与闩锁是如何相互配合的。</p>
                <p><strong>注意：</strong>现在正好可以设置挤出机组件的基础张力。<a href="https://www.youtube.com/watch?v=L1gxBCiE0pk" target="_blank">这里</a> 有 Dr. Dave 的精彩视频演示了具体做法。</p>
            `,
            parts: [
                "[a]_latch_ecas",
                "1x M3x25 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step20: {
            title: "电机",
            description: `
                <p>用 M3x30 SHCS 螺丝将步进电机松松地固定到挤出机组件上。在完全拧紧 M3x30 SHCS 螺丝之前，先用一颗 M3x8 SHCS 螺丝配合垫片来设定齿轮组的齿隙。</p>
                <p><strong>注意：</strong>步进电机与 50t 正齿轮之间保持适当的齿隙，对稳定运行至关重要。<a href="https://www.youtube.com/watch?v=ly22qmB3NxE" target="_blank">这里</a> 有 Dr. Dave 的精彩视频演示了具体做法。</p>
            `,
            parts: [
                "1x M3x30 内六角圆柱头螺丝 (SHCS)",
                "1x M3x8 内六角圆柱头螺丝 (SHCS)",
                "1x M3 垫片"
            ]
        },
        filamatrix_step21: {
            title: "吃糖休息",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/SkittlesTurtle.png" alt="Skittles Turtle">
                    <h3>休息一下！</h3>
                    <p>来点彩虹糖什么的……随便你喜欢的 😊</p>
                </div>
            `,
            parts: []
        },
        filamatrix_step22: {
            title: "热熔螺母",
            description: `
                <p>如图所示，安装五颗热熔螺母。这是热端组装过程中最后一次使用热熔工具了。现在请关掉它，放到安全的地方。</p>
                <p><strong>注意：</strong>请务必根据你所选打印件的材料选择合适的温度。小心！烫的东西真的很烫……</p>
            `,
            parts: [
                "revo_voron_front.stl",
                "5x M3 热熔螺母"
            ]
        },
        filamatrix_step23: {
            title: "铁氟龙管",
            description: `
                <p>安装与所选热端长度相匹配的铁氟龙管。各种热端的切割治具可以在 <a href="https://github.com/thunderkeys/FilamATrix/tree/main/STLs/cutting_jigs" target="_blank">这里</a> 找到。对于 Revo Voron 热端，合适的长度约为 15.8mm。</p>
                <p><strong>注意：</strong>强烈建议至少将朝向挤出头挤出机一侧的 PTFE 铁氟龙管端部的内径倒角。安装前务必确认管内没有残留的 PTFE 碎屑。</p>
                <p>铁氟龙管倒角的方法有很多，常见的做法有：</p>
                <ul>
                    <li>用手持 ~6mm 钻头倒角</li>
                    <li>把美工刀伸进铁氟龙管端部旋转倒角</li>
                    <li>用去毛刺刀在铁氟龙管端部倒角</li>
                </ul>
            `,
            parts: [
                "2mm 内径铁氟龙管 ~16mm"
            ]
        },
        filamatrix_step24: {
            title: "热端",
            description: `
                <p>如图所示，用四颗 M3x8 SHCS 螺丝将热端固定到前罩上。</p>
                <p><strong>注意：</strong>如果你忘了那小段 PTFE……后面可有你受的。</p>
            `,
            parts: [
                "4x M3x8 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step25: {
            title: "合拢",
            description: `
                <p>如图所示，用两颗 M3x16 SHCS 螺丝安装热端后罩。</p>
            `,
            parts: [
                "revo_voron_rear.stl",
                "2x M3x16 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step26: {
            title: "刀片座",
            description: `
                <p>我们建议在拿取 #4 美工刀片之前，先在刃口上套一个安全护套。</p>
                <p>如图所示，小心地把刀片插入刀座。应当能“咔哒”一声卡到位。</p>
                <p><strong>注意：</strong>如果你的刀片只有单面刃口，请确保平面朝下。</p>
            `,
            parts: [
                "[a]_knife_holder.stl",
                "#4 美工刀片"
            ]
        },
        filamatrix_step27: {
            title: "切刀臂",
            description: `
                <p>如图所示，将刀座装入切刀臂，用一颗 M2.5x16 SHCS 固定。这里的安装方向非常重要，不要装反。刀座应当能自由活动，不要把这颗螺丝拧得过紧。</p>
            `,
            parts: [
                "[a]_cutting_arm_clockwork2.stl",
                "M2.5x16 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step28: {
            title: "弹簧",
            description: `
                <p>如图所示，将螺旋弹簧装入切刀臂。</p>
            `,
            parts: [
                "0.5x4x25mm 螺旋弹簧"
            ]
        },
        filamatrix_step29: {
            title: "安装切刀",
            description: `
                <p>如图所示，将切刀臂组件插入热端罩。如图所示，用一颗 M3x18 FHCS 固定。注意不要拧得过紧，它本就应当能自由活动。</p>
            `,
            parts: [
                "1x M3x18 内六角沉头螺丝 (FHCS)"
            ]
        },
        filamatrix_step30: {
            title: "切刀限位",
            description: `
                <p>如图所示，安装一颗 M3x8 SHCS 螺丝。不要把这颗螺丝完全拧紧，它的作用是限制切刀臂向外的行程，除此之外不应与切刀臂发生干涉。</p>
                <p><strong>注意：</strong>现在是取下刀片安全护套的“安全”时机了。</p>
            `,
            parts: [
                "1x M3x8 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step31: {
            title: "切刀展示",
            description: `
                <p>图中展示的是挤出机和热端装在你所选滑车上的样子。切刀臂应当能自由活动，且在完全释放时不会阻碍耗材路径。</p>
            `,
            parts: []
        },
        filamatrix_step32: {
            title: "安装面板",
            description: `
                <p><strong>注意：</strong>在 FilamATrix 上安装 StealthBurner 本体时，请务必使用 M3x20 SHCS，而不是原装的 M3x25 SHCS。</p>
            `,
            parts: [
                "1x M3x20 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        filamatrix_step33: {
            title: "加厚压板热熔螺母",
            description: `
                <p>如图所示，安装 2 颗热熔螺母。</p>
                <p><strong>注意：</strong>请务必根据你所选打印件的材料选择合适的温度。小心！烫的东西真的很烫……</p>
            `,
            parts: [
                "beefy_depressor.stl",
                "2x M3 热熔螺母"
            ]
        },
        filamatrix_step34: {
            title: "龙门架安装座",
            description: `
                <p>用 M3 螺丝和垫片将 beefy_depressor_mount 安装到龙门架的<b>左</b>侧。</p>
                <p>图中展示的是压板安装在打印机前部的情况。某些配置下，安装在后方可能更有优势。</p>
                <p><strong>注意：</strong>螺丝长度取决于你的具体打印机。M3x10 —— 无背板，M3x12 —— 钛合金背板，M3x16 —— MGN9H 导轨。</p>
            `,
            parts: [
                "beefy_depressor_mount.stl",
                "2x M3 内六角圆柱头螺丝 (SHCS)（长度见上文）",
                "2x M3 垫片"
            ]
        },
        filamatrix_step35: {
            title: "安装销钉",
            description: `
                <p>用一颗 M3x16 FHCS 将销钉安装到安装座上。</p>
                <p>稍后你会调整这根销钉的高度。</p>
            `,
            parts: [
                "1x M3x16 内六角沉头螺丝 (FHCS)"
            ]
        },
        filamatrix_step36: {
            title: "安装销钉",
            description: `
                <p>将一颗 M3 螺母拧到一颗 M3x16 BHCS 上。安装到朝向打印机内侧的一面。</p>
            `,
            parts: [
                "1x M3x16 内六角圆头螺丝 (BHCS)",
                "1x M3 螺母"
            ]
        },
        filamatrix_step37: {
            title: "调整",
            description: `
                <p>现在需要调整销钉在安装座上的高度以及螺丝的深度，使挤出头推压它时（从右向左移动）能够压下切刀臂。</p>
                <p>用螺母将螺丝“锁定”到位。</p>
                <p><strong>注意：</strong>你可能想在这颗螺丝上使用 Loctite 或 VC-3。注意不要让 Loctite 沾到任何 ABS/ASA 打印件上！</p>
            `,
            parts: []
        }
    },
}
