export default {
    name: "ArmoredTurtle 毛刷手册",
    subManuals: {},
    steps: {
        at_brush_step1: {
            title: "ArmoredTurtle 毛刷",
            description: "这是适用于使用 2020 型材搭建的打印机的 AT 喷嘴刷。",
            parts: []
        },
        at_brush_step2: {
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
        at_brush_step3: {
            title: "命名规则",
            content: `
                <div class=info>
                    <h3>文件命名</h3>
                    <p>此时你应该已经从 <a href="https://github.com/ArmoredTurtle/AFC-Accessories/tree/main/AT_Brush" target="_blank">GitHub</a> 下载了 STL 文件。下面说明我们的命名规则该如何理解。</p>
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
        at_brush_step4: {
            title: "热熔螺母",
            description: `
                <p>按图示安装热熔螺母。</p>
                <p><strong>注意：</strong>请务必根据所选打印件的材料选择合适的温度。小心！热的东西很烫……</p>
                <p><strong>注意：</strong>这是本节最后一个需要安装热熔螺母的步骤。请务必关闭电烙铁，并将其放在安全的地方。</p>
            `,
            parts: [
                "mount_upper.stl",
                "可选：metal_brush_mount.stl",
                "2-3x M3 热熔螺母"
            ]
        },
        at_brush_step5: {
            title: "后部螺丝",
            description: `
                <p>将 M3 垫片套到 M3x35 内六角圆柱头螺丝 (SHCS) 上，然后按图示插入 mount_upper 的槽中。</p>
            `,
            parts: [
                "M3x35 内六角圆柱头螺丝 (SHCS)",
                "M3 垫片"
            ]
        },
        at_brush_step6: {
            title: "后部安装座下件",
            description: `
                <p>按图示使用两颗 M3x8 内六角圆柱头螺丝 (SHCS) 将 mount_lower 安装到 mount_upper 上。</p>
            `,
            parts: [
                "mount_lower.stl",
                "2x M3x8 内六角圆柱头螺丝 (SHCS)"
            ]
        },
        at_brush_step7: {
            title: "前臂防松螺母",
            description: `
                <p>按图示将两颗 M3 防松螺母插入 front_arm_base。</p>
                <p><strong>注意：</strong>它们应当配合较紧，可能需要借助工具末端才能完全压入。注意方向。</p>
            `,
            parts: [
                "[a]_front_arm_base.stl",
                "2x M3 防松螺母"
            ]
        },
        at_brush_step8: {
            title: "安装前臂底座",
            description: `
                <p>按图示将 front_arm_base 卡入 mount_upper</p>
            `,
            parts: []
        },
        at_brush_step9: {
            title: "前臂螺丝",
            description: `
                <p>将 M3 垫片套到 M3x35 内六角圆柱头螺丝 (SHCS) 上，然后按图示插入 front_arm_slide 的槽中。</p>
            `,
            parts: [
                "[a]_front_arm_slide.stl",
                "M3x35 内六角圆柱头螺丝 (SHCS)",
                "M3 垫片"
            ]
        },
        at_brush_step10: {
            title: "安装前臂滑块",
            description: `
                <p>按图示将 front_arm_slide 卡入 front_arm_base</p>
            `,
            parts: []
        },
        at_brush_step11: {
            title: "毛刷",
            description: `
                <p>将你选用的毛刷安装到对应的打印件中。</p>
                <p class="extra-space"><strong>注意：</strong>如果使用黄铜丝刷（需裁剪到位），你需要一颗 M3x8 内六角圆柱头螺丝 (SHCS) 将其固定到位。后续调整毛刷位置的步骤需要反复拆装毛刷组件（免工具），以便接触到调节螺丝。</p>
            `,
            parts: []
        },
        at_brush_step12: {
            title: "毛刷安装座",
            description: `
                <p>按图示将毛刷卡入 front_arm_slide。</p>
            `,
            parts: []
        },
        at_brush_step13: {
            title: "滚入式螺母",
            description: `
                <p>按图示将两颗 M5 滚入式螺母安装到龙门架最后方的型材中。</p>
                <p>参考第 18 页估算安装位置。</p>
            `,
            parts: []
        },
        at_brush_step14: {
            title: "框架安装",
            description: `
                <p>按图示安装 AT 毛刷组件。此处会配合较紧（很牢固）。拆下打印机后部面板以便更好地发力，可能会有所帮助。 </p>
            `,
            parts: []
        },
        at_brush_step15: {
            title: "最终安装",
            description: `
                <p>使用两颗 M5x10 内六角圆头螺丝 (BHCS)，按图示固定 AT 毛刷组件。 </p>
            `,
            parts: [
                "2x M5x10 内六角圆头螺丝 (BHCS)"
            ]
        },
        at_brush_step16: {
            title: "垂直调节",
            description: `
                <p>使用 mount_upper 中的 M3x35 内六角圆柱头螺丝 (SHCS) 将毛刷高度调节到与你的喷嘴匹配。</p>
                <p>你的喷嘴应嵌入毛刷内约 1mm 深。</p>
            `,
            parts: []
        },
        at_brush_step17: {
            title: "水平调节",
            description: `
                <p>使用 front_arm 中的 M3x35 内六角圆柱头螺丝 (SHCS) 将毛刷调节到与喷嘴对中。</p>
                <p>理想情况下，在你的龙门架撞到硬限位之前，仍应留有约 3mm 的 Y 轴行程。</p>
                <p>确保你的毛刷不会与打印床发生干涉。</p>
            `,
            parts: []
        },
        at_brush_step18: {
            title: "最终参考",
            description: `
                <p>图中展示了毛刷理想调节效果的示例。</p>
                <p>打印愉快！</p>
            `,
            parts: []
        }
    },
}
