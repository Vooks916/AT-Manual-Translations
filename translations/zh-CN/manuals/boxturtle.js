export default {
    name: "BoxTurtle 手册",
    subManuals: {
        introduction: {
            name: "1. BoxTurtle 简介"
        },
        frame: {
            name: "2. BoxTurtle 框架"
        },
        extruders: {
            name: "3. BoxTurtle 挤出机"
        },
        respoolers: {
            name: "4. 绕线器"
        },
        turtleneck: {
            name: "5. TurtleNeck"
        },
        general_assembly: {
            name: "6. 总组装"
        },
        final: {
            name: "7. 收尾"
        }
    },
    steps: {
        boxturtle_introduction_step1: {
            title: "简介",
            content: `
                <div class="infoL">
                    <h3>简介</h3>
                    <p>本手册将带你完成 ArmoredTurtle 出品的 BoxTurtle 自动换料控制器（AFC）的准备工作与组装流程。简介部分概述了如何使用本手册，并就你在打印零件前需要做出的关键决定给出指引。</p>
                    <p class='extra-space'>开始之前，请先留意几个我们在 v1.0 发布前未能及时修正的<a href="/docs/boxturtle/errata.html" target="_blank">小问题</a>。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step2: {
            title: "基本使用",
            description: `
                <p>本手册以 3D 形式呈现组装流程的每一个步骤，帮助你避免混淆，并清晰展示零件的正确朝向。</p>
                <p>页面顶部有三个选项：你可以为打印件和框架选择不同的颜色，以便更容易辨认零件。</p>
                <p>下面是一个可供你自由查看的渲染图。左键拖动旋转视角，右键拖动平移，滚轮放大缩小。</p>
            `,
            parts: []
        },
        boxturtle_introduction_step3: {
            title: "注意：BoxTurtle 外壳",
            description: `
                <p>如果你计划将可选的 BoxTurtle 外壳集成到你的机器中，强烈建议你先按标准配置组装好 BoxTurtle 单元，确认它能完整正常运行后，再进行外壳的安装。</p>
                <p>在这个初始组装阶段，你需要安装打印的角件，因为在外壳缺席时，它们提供必要的结构支撑。但请注意，这些打印角件最终会在安装外壳的过程中被拆除，并替换为外壳专用部件。因此，现阶段不要安装任何相关的装饰性角件饰条，它们与最终的外壳配置不兼容，并可能干扰后续步骤。</p>
            `,
            parts: []
        },
        boxturtle_introduction_step4: {
            title: "零件选择",
            content: `
                <div class="infoL">
                    <h3>零件选择</h3>
                    <p><strong>注意：</strong>任何标有 "D2F" 的零件都是旧版本，如果你购买的是套件，正确的选择是 D2HW 传感器零件。 </p>
                    <p>BoxTurtle 是一个模块化系统，带有多种可选零件，让你可以自定义自己的机器。本节将列出可用的选项，并说明每种选择如何影响你的组装流程。</p>
                    <p>这里有一个<a href="/stl-configurator.html" target="_blank">STL 压缩包生成器</a>，可以为你整理好所有需要的 STL 文件。</p> 
                    <h3>料盘</h3>
                    <p>你需要做的第一个决定是打印哪种料盘变体：No_Hardware 料盘还是 W_Hardware 料盘。关键因素是你的打印板尺寸。如果你的打印机打印板为 235mm 或更大，请选择 No_Hardware 文件夹。</p>
                    <p>其次，你需要选择料盘类型。共有四种：</p>
                    <ul>
                        <li>tray_desiccant（如果你计划为 BoxTurtle 加装可选外壳，就选这个）</li>
                        <li>tray_inlay（标准料盘，表面压印有 BoxTurtle 标志）</li>
                        <li>tray_multicolor（该模型为多色打印 BoxTurtle 标志而设计）</li>
                        <li>tray_plain（最朴素的那个）</li>
                    </ul>
                    <h3>裙板</h3>
                    <p>你会看到后部裙板有 "pass through"（贯穿式）和 "hub"（轮毂式）两种选项。如果这是你第一次组装 AFC，推荐选择 "hub" 选项。</p>
                    <p>关于裙板的第二个决定是是否打印一体式裙板。这些可以在 300mm 打印板上打印，但不建议在小于 350mm 的机器上打印。</p>
                    <h3>角件</h3>
                    <p>使用套件组装时，你需要选择打印角件选项，除非你使用可选外壳。这个选择归结为一点：你是否想为美观在角件上加装 RGB 灯带，因为两者在功能上没有区别。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step5: {
            title: "打印件注意事项",
            content: `
                <div class="infoL">
                    <h3>打印件注意事项</h3>
                    <p>这并非一个 <a href="https://vorondesign.com/" target="_blank">VORON Design</a> 项目，我们强烈建议你使用专门针对 BoxTurtle 的打印配置。不推荐把 Voron 零件配置用于 BoxTurtle 打印件，因为公差预期不同。</p>
                    <p class="extra-space">具体来说，务必针对扭曲（skew）和耗材收缩进行调校。Vector3D 出品的<a href="https://vector3d.shop/products/califlower-calibration-tool-mk2" target="_blank">Califlower Mk2</a> 是一款极佳的工具（没错，值那 14 美元）。请<i>在</i>为 BoxTurtle 零件打印 1.5–2kg 耗材之前完成这项工作！</p>
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step6: {
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
                        <p class='p-no-space'><strong>主色：</strong>约 1.4kg ABS/PLA</p>
                        <p class='p-no-space'><strong>点缀色：</strong>约 0.3kg ABS/PLA</p>
                        <p class='p-no-space'><strong>TPU：</strong>约 60g 95A 或更软</p>
                        <p class='p-no-space'><strong>透明：</strong>约 12g 任意材料</p>
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
        boxturtle_introduction_step7: {
            title: "命名规则",
            content: `
                <div class=info>
                    <h3>文件命名</h3>
                    <p>此时你应该已经从<a href="/stl-configurator.html" target="_blank">STL 配置器</a>或 <a href="https://github.com/ArmoredTurtle/BoxTurtle" target="_blank">GitHub</a> 下载了 STL 文件。下面说明我们的命名规则该如何理解。</p>
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
        boxturtle_introduction_step8: {
            title: "ECAS-04 注意",
            content: `
                <div class="infoL">
                    <h3>ECAS-04（最糟糕的零件）</h3>
                    <p>BoxTurtle 中使用的铁氟龙管接头本来就设计得很紧，如果插入时需要费点力气，说明你的公差没问题。你绝对不希望它们从打印件中脱出。</p>
                    <p>关于这些接头，请参考这张组装照片。通常，蓝色推杆需要插入夹头主体中。</p>
                    <p>需要从密封圈固定件上取下橡胶密封圈。务必把固定件留在夹头主体上。在任何 ArmoredTurtle 项目中，橡胶密封圈都不会被使用。请妥善丢弃。</p>
                    <img class='ecas-preparation' src="/images/ecas-preparation.webp" alt="ECAS Preparation">
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step9: {
            title: "组装提示",
            content: `
                <div class="infoL">
                    <h3>组装提示</h3>
                    <p>你会注意到许多组装步骤中渲染了箭头。它们表示需要执行的操作。</p>
                    <p>请注意颜色。</p>
                    <ul>
                        <li>红色：最终操作，例如完全拧紧螺丝或压入热熔螺母</li>
                        <li>蓝色：临时组装，后续还会再处理</li>
                        <li>绿色：由最终用户自行决定的调整</li>
                    </ul>
                    <img class='arrow-example' src="/images/ArrowExample.webp" alt="Arrow Examples">
                </div>
            `,
            parts: []
        },
        boxturtle_introduction_step10: {
            title: "常用链接",
            content: `
                <div class="info">
                    <h3>常用链接</h3>
                    <div class="link-container">
                        <a href="https://github.com/ArmoredTurtle/BoxTurtle/tree/main" target="_blank" class="link-item">
                            <img src="/images/github-logo.png" alt="GitHub" class="link-icon">
                            <span>GitHub</span>
                        </a>
                        <a href="https://discord.gg/AaVHfeYgw2" target="_blank" class="link-item">
                            <img src="/images/discord.png" alt="Discord" class="link-icon">
                            <span>Discord</span>
                        </a>
                        <a href="/stl-configurator.html" target="_blank" class="link-item">
                            <img src="/images/android-chrome-512x512.png" alt="STL Generator" class="link-icon">
                            <span>STL 生成器</span>
                        </a>
                    </div>
                    <div class='info-submanual-nav-buttons'>
                        <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle 菜单</button>
                        <button onclick="location.href='manual.html?manual=boxturtle&subManual=frame'">下一节</button>
                    </div>
                </div>
            `,
            parts: []
        },
        boxturtle_frame_step1: {
            title: "热熔螺母",
            description: `
                <p>如图所示安装一个热熔螺母。</p>
                <p><strong>注意：</strong>务必选择与你所选打印件材料相匹配的温度。当心！热的东西很烫……</p>
            `,
            parts: [
                "rear_skirt_center_hub.stl",
                "1x M3 热熔螺母"
            ]
        },
        boxturtle_frame_step2: {
            title: "前置说明",
            description: `
                <p>请注意挤出机组件可以以多种朝向安装在料盘底面。</p>
                <p>如果你使用 No_Hardware 料盘，你会有足够的热熔螺母来填满每个料盘上的全部四个安装孔。</p>
                <p>为简便起见，本手册后续将介绍以与料盘平行的方式安装挤出机。</p>
            `,
            parts: []
        },
        boxturtle_frame_step3: {
            title: "更多热熔螺母",
            description: `
                <p>如图所示安装热熔螺母。</p>
                <p><strong>注意：</strong>这是本节最后一个需要安装热熔螺母的步骤。务必关闭你的电烙铁，并把它放在安全的地方。</p>
                <p><strong>如果使用 No_Hardware 料盘，</strong>在料盘底面装好热熔螺母后，跳转到第 5 页。</p>
            `,
            parts: [
                "任选 4 个料盘",
                "28x M3 热熔螺母（若使用 No_Hardware 料盘则为 12 个）"
            ]
        },
        boxturtle_frame_step4: {
            title: "安装\"横杆\"",
            description: `
                <p>使用 M3x8 SHCS 螺丝如图所示把“横杆”固定到料盘上。</p>
            `,
            parts: [
                "4x bar_long.stl",
                "8x bar_short.stl",
                "16x M3x8 SHCS"
            ]
        },
        boxturtle_frame_step5: {
            title: "安装 D2HW 开关",
            description: `
                <p>如图所示，先装入一颗 MR63ZZ 轴承，随后装入 D2HW 微动开关。用一颗 M3x10 SHCS 螺丝固定。</p>
                <p>注意不要把这颗螺丝拧得过紧，它是拧进塑料里的。</p>
                <p>安装前请确保你的<a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2HW-C201H.png" target="_blank">开关已接线</a>。参考<a href="/docs/boxturtle/wiring-guide.html" target="_blank">接线指南</a>确定使用哪种长度。</p>
                <p><strong>注意：</strong>现在是时候确认你的耗材通道畅通无阻了。如果有问题区域，你可能会发现用 2mm 钻头<i>手动</i>清理很有用。</p>
            `,
            parts: [
                "[a]_hub.stl",
                "1x D2HW C201H 微动开关",
                "1x MR63ZZ 轴承",
                "1x M3x10 SHCS"
            ]
        },
        boxturtle_frame_step6: {
            title: "ECAS04 接头",
            description: `
                <p>如图所示装入 1 个 ECAS04 接头。</p>
                <p><strong>注意：</strong>它们本来就设计得很紧！借助 hub_tool_step1 顶着桌面按压可能有助于固定。轻轻地使用说服工具（锤子）也是可行的办法。</p>
            `,
            parts: [
                "hub_tool_step1.stl",
                "1x ECAS04 铁氟龙管接头（已去除后部橡胶缓冲垫）"
            ]
        },
        boxturtle_frame_step7: {
            title: "ECAS04 接头",
            description: `
                <p>如图所示装入 4 个 ECAS04 接头。</p>
                <p><strong>注意：</strong>它们本来就设计得很紧！借助 hub_tool_step2 顶着桌面按压可能有助于固定。轻轻地使用说服工具（锤子）也是可行的办法。</p>
            `,
            parts: [
                "hub_tool_step2.stl",
                "4x ECAS04 铁氟龙管接头（已去除后部橡胶缓冲垫）"
            ]
        },
        boxturtle_frame_step8: {
            title: "去除支撑",
            description: `
                <p>如图所示去除支撑并妥善丢弃。</p>
            `,
            parts: [
                "right_rear_skirt.stl"
            ]
        },
        boxturtle_frame_step9: {
            title: "风扇安装",
            description: `
                <p>安装风扇，确保它将空气吹入 BoxTurtle 内部。用 4 颗 M3x16 BHCS 螺丝固定。</p>
                <p>你是在直接拧进塑料里，不要拧得过紧。</p>
                <p><strong>注意：</strong>BOM 上原来的 3010 风扇被误标为 12K RPM 风扇，可能会非常吵。控制器风扇是完全可选的，可以不安装，或替换为更慢的替代风扇。</p>
            `,
            parts: [
                "1x 3010 5V 风扇",
                "4x M3x16 BHCS"
            ]
        },
        boxturtle_frame_step10: {
            title: "去除支撑",
            description: `
                <p>如图所示去除内置支撑，可以用一把小平头螺丝刀伸到它们后面向外撬。</p>
            `,
            parts: [
                "4x corner_printed.stl"
            ]
        },
        boxturtle_frame_step11: {
            title: "后部型材组装",
            description: `
                <p>如图所示，把两颗 M5x16 BHCS 螺丝穿过打印角件拧入 360mm 型材。</p>
                <p><strong>记住：</strong>正如简介中所述，蓝色箭头表示你此时不要完全拧紧这些螺丝。</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x M5x16 BHCS",
                "2x 360mm 2020 型材"
            ]
        },
        boxturtle_frame_step12: {
            title: "后部型材组装",
            description: `
                <p>如图所示，把后部面板裙板卡入型材时注意朝向。</p>
            `,
            parts: [
                "right_rear_skirt.stl",
                "rear_skirt_center_hub.stl",
                "left_rear_skirt.stl"
            ]
        },
        boxturtle_frame_step13: {
            title: "后部型材组装",
            description: `
                <p>如图所示，把两颗 M5x16 BHCS 螺丝穿过打印角件拧入 360mm 型材。</p>
                <p>现在你可以如图所示完全拧紧全部四颗螺丝。</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x M5x16 BHCS"
            ]
        },
        boxturtle_frame_step14: {
            title: "后部型材组装",
            description: `
                <p>如图所示，把轮毂卡入裙板，用一颗 M3x10 SHCS 螺丝固定。</p>
            `,
            parts: [
                "[a]_hub_(type).stl",
                "1x M3x10 SHCS"
            ]
        },
        boxturtle_frame_step15: {
            title: "前部型材组装",
            description: `
                <p>如图所示，把两颗 M5x16 BHCS 螺丝穿过打印角件拧入 360mm 型材。</p>
                <p><strong>记住：</strong>正如简介中所述，蓝色箭头表示你此时不要完全拧紧这些螺丝。</p>
            `,
            parts: [
                "corner_printed.stl",
                "2 M5x16 BHCS",
                "2x 360mm 2020 型材"
            ]
        },
        boxturtle_frame_step16: {
            title: "前部型材组装",
            description: `
                <p>如图所示，把前部面板裙板卡入型材时注意朝向。</p>
            `,
            parts: [
                "2x front_skirt.stl"
            ]
        },
        boxturtle_frame_step17: {
            title: "前部型材组装",
            description: `
                <p>如图所示，把两颗 M5x16 BHCS 螺丝穿过打印角件拧入 360mm 型材。</p>
                <p>现在你可以如图所示完全拧紧全部四颗螺丝。</p>
            `,
            parts: [
                "corner_printed.stl",
                "2x M5x16 BHCS"
            ]
        },
        boxturtle_frame_step18: {
            title: "侧部型材组装",
            description: `
                <p>如图所示，把四颗 M5x16 BHCS 螺丝穿过打印角件拧入 220mm 型材。</p>
            `,
            parts: [
                "4x 220mm 2020 型材",
                "4x M5x16 BHCS"
            ]
        },
        boxturtle_frame_step19: {
            title: "侧部型材组装",
            description: `
                <p>如图所示，把侧部裙板卡入型材。</p>
            `,
            parts: [
                "4x side_skirt.stl"
            ]
        },
        boxturtle_frame_step20: {
            title: "料盘",
            description: `
                <p>如图所示，把料盘卡入后部型材，注意朝向。</p>
                <p><strong>注意：</strong>你可能会发现把它们倒扣在桌面上操作最方便，直到你在下一步中固定它们。</p>
            `,
            parts: [
                "4x 料盘"
            ]
        },
        boxturtle_frame_step21: {
            title: "整体组装",
            description: `
                <p>如图所示，用四颗 M5x16 BHCS 螺丝把前面板固定到框架的其余部分。</p>
                <p>确保料盘已卡入前后顶部型材。</p>
                <p><strong>记住：</strong>正如简介中所述，蓝色箭头表示你此时不要完全拧紧这些螺丝。</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle 菜单</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=extruders'">下一节</button>
                </div>
            `,
            parts: [
                "4x M5x16 BHCS"
            ]
        },
        boxturtle_extruders_step1: {
            title: "开始之前…",
            description: `
                <p>组装你的 BoxTurtle 总共需要<strong>四台挤出机</strong>。你可以一台一台地做，也可以一次做四台，只要确保继续之前你有四台即可！本节结尾我们会再次提醒你。</p>
            `,
            parts: []
        },
        boxturtle_extruders_step2: {
            title: "热熔螺母",
            description: `
                <p>如图所示安装 6 个热熔螺母。</p>
                <p><strong>注意：</strong>务必选择与你所选打印件材料相匹配的温度。当心！热的东西很烫……</p>
                <p><strong>注意：</strong>这是本节最后一个需要安装热熔螺母的步骤。务必关闭你的电烙铁，并把它放在安全的地方。</p>
            `,
            parts: [
                "motor_plate_x4.stl",
                "extruder_housing_x4.stl",
                "6x M3 热熔螺母"
            ]
        },
        boxturtle_extruders_step3: {
            title: "D2HW 微动开关",
            description: `
                <p>把轴承落入它的槽中，确保它能自由滑动。把微动开关牢牢压入其后方。</p>
                <p>安装前请确保你的<a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2HW-C201H.png" target="_blank">开关已接线</a>。参考<a href="/docs/boxturtle/wiring-guide.html" target="_blank">接线指南</a>确定使用哪种长度。</p>
                <p><strong>注意：</strong>现在是时候确认你的耗材通道畅通无阻了。如果有问题区域，你可能会发现用 2mm 钻头<i>手动</i>清理很有用。</p>
            `,
            parts: [
                "MR63ZZ 轴承",
                "D2HW-C201H 微动开关"
            ]
        },
        boxturtle_extruders_step4: {
            title: "驱动齿轮组装",
            description: `
                <p>如图所示组装驱动齿轮。</p>
                <p><strong>注意：</strong>把紧定螺丝对准 D 形轴的平面，但此时不要完全拧紧。</p>
            `,
            parts: [
                "2x MR85 轴承",
                "50t 主轴",
                "驱动齿轮"
            ]
        },
        boxturtle_extruders_step5: {
            title: "驱动齿轮安装",
            description: `
                <p>如图所示，把挤出机驱动齿轮压入挤出机壳体。</p>
            `,
            parts: []
        },
        boxturtle_extruders_step6: {
            title: "电机板",
            description: `
                <p>如图所示，用 3 颗 M3x8 SHCS 螺丝把电机板安装到挤出机壳体上。</p>
                <p>在侧面拧入一颗 M3x8 SHCS，直到它顶到底。</p>
            `,
            parts: [
                "4x M3x8 SHCS"
            ]
        },
        boxturtle_extruders_step7: {
            title: "驱动齿轮对位",
            description: `
                <p>插入一段耗材，确保驱动齿轮对位合适。拧紧紧定螺丝。</p>
                <p><strong>注意：</strong>如果紧定螺丝没有预涂，现在是用螺纹胶的时候。</p>
                <p>检查耗材穿过耗材传感器时是否发出能听到的“咔哒”声。</p>
            `,
            parts: [
                "一小段耗材"
            ]
        },
        boxturtle_extruders_step8: {
            title: "ECAS 接头",
            description: `
                <p>如图所示，在挤出机的两端各安装一个 ECAS 铁氟龙管接头。</p>
                <p><strong>注意：</strong>它们本来就设计得很紧，你可以把它们平放在桌面上，然后把打印件压到它们上面。</p>
            `,
            parts: [
                "2x ECAS04（已去除后部橡胶缓冲垫）"
            ]
        },
        boxturtle_extruders_step9: {
            title: "去除支撑",
            description: `
                <p>如图所示去除原位打印的支撑。</p>
            `,
            parts: [
                "[a]_guidler_x4.stl"
            ]
        },
        boxturtle_extruders_step10: {
            title: "导向惰轮",
            description: `
                <p>组装惰轮：把 2 个滚针轴承放入惰轮齿轮中，把 20mm 销轴滑入组件内部。</p>
                <p><strong>注意：</strong>现在是给滚针轴承加润滑油的时候。</p>
                <p>如图所示把惰轮组件牢牢压入导向器中。注意朝向！</p>
            `,
            parts: [
                "2x 滚针轴承",
                "20mm 销轴",
                "惰轮齿轮"
            ]
        },
        boxturtle_extruders_step11: {
            title: "导向器安装",
            description: `
                <p>如图所示安装导向器，用一颗 M3x30 BHCS 螺丝固定。不要把这颗螺丝拧得过紧，导向器应当仍能自由摆动。</p>
            `,
            parts: [
                "M3x30 BHCS"
            ]
        },
        boxturtle_extruders_step12: {
            title: "张紧器",
            description: `
                <p>把张紧器穿过导向器拧入，直到弹簧完全咬合。再多转两圈半。</p>
            `,
            parts: [
                "张紧器套件"
            ]
        },
        boxturtle_extruders_step13: {
            title: "防压扁",
            description: `
                <p>把一段耗材穿过挤出机，通过旋出防压扁螺丝来调整夹持力。</p>
                <p>这里有一段 Dr. Dave 制作的<a href="https://www.youtube.com/watch?v=L1gxBCiE0pk" target="_blank">实用视频</a>，讲解如何正确设置防压扁（anti-squish）。</p>
                <p><strong>注意：</strong>挤出机齿轮应当对耗材有良好的咬合，你拉动耗材时一切应能顺畅转动。防压扁螺丝必须设置，因为这台挤出机绝对会压扁耗材。</p>
                <p>现在是时候确保一切调整到位，以便顺畅运行。</p>
            `,
            parts: [
                "一小段耗材"
            ]
        },
        boxturtle_extruders_step14: {
            title: "步进电机",
            description: `
                <p>把步进电机放到挤出机壳体上。用 M3x8 SHCS 螺丝固定。别忘了如图在可调侧加上 M3 垫片。</p>
                <p>参考<a href="/docs/boxturtle/wiring-guide.html" target="_blank">接线指南</a>确定使用哪种长度。步进电机线材的相对长度应与你的微动开关相匹配。</p>
                <p><strong>注意：</strong>正如简介中所述，蓝色箭头表示你此时不要完全拧紧这颗螺丝。</p>
            `,
            parts: [
                "2x M3x8 SHCS",
                "1x M3 垫片",
                "Nema 14 36 扁平电机"
            ]
        },
        boxturtle_extruders_step15: {
            title: "回程间隙调整",
            description: `
                <p>确保步进电机齿轮与 50t 之间的回程间隙设置合适。如图所示拧紧调节螺丝。</p>
                <p>这里有一段 Dr. Dave 制作的<a href="https://www.youtube.com/watch?v=ly22qmB3NxE" target="_blank">实用视频</a>，讲解如何正确设置回程间隙。</p>
                <p>如图所示，用扎带把电机线材固定到挤出机本体上。</p>
            `,
            parts: [
                "扎带"
            ]
        },
        boxturtle_extruders_step16: {
            title: "友情提醒！",
            description: `
                <p>组装你的 BoxTurtle 总共需要<strong>四台挤出机</strong>。在继续下一节之前，确保你有四个挤出机单元。</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle 菜单</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=respoolers'">下一节</button>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step1: {
            title: "自检",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>自检！</h3>
                    <p>检查 MR148zz 轴承在 80mm 轴上的配合情况，如果太紧，用钻头和砂纸修整一下。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step2: {
            title: "开始之前…",
            description: `
                <p>组装你的 BoxTurtle 总共需要<strong>四个绕线器</strong>。你可以一个一个地做，也可以一次做四个，只要确保继续之前你有四个即可！本节结尾我们会再次提醒你。</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step3: {
            title: "去除支撑",
            description: `
                <p>掰下支撑。</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "frame_left_x4.stl",
                "motor_mount_x4.stl"
            ]
        },
        boxturtle_respoolers_step4: {
            title: "热熔螺母",
            description: `
                <p>如图所示安装五个热熔螺母。</p>
                <p>注意：务必选择与你所选打印件材料相匹配的温度。当心！热的东西很烫……</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "frame_left_x4.stl",
                "motor_mount_x4.stl",
                "gearbox_cover_x4.stl",
                "5x M3 热熔螺母"
            ]
        },
        boxturtle_respoolers_step5: {
            title: "热熔螺母 第 2 部分",
            description: `
                <p>如图所示安装四个热熔螺母。</p>
                <p>注意：务必选择与你所选打印件材料相匹配的温度。当心！热的东西很烫……</p>
                <p><strong>注意：</strong>这是本节最后一个需要安装热熔螺母的步骤。务必关闭你的电烙铁，并把它放在安全的地方。</p>
            `,
            parts: [
                "[a]_wheel_drive_x8.stl",
                "4x M3 热熔螺母"
            ]
        },
        boxturtle_respoolers_step6: {
            title: "ECAS04 接头",
            description: `
                <p>如图所示装入 ECAS04 接头。 </p>
                <p><strong>注意：</strong>它们本来就设计得很紧，你可以把它们平放在桌面上，借助 motor_mount_helper 工具把打印件压到它们上面。</p>
            `,
            parts: [
                "motor_mount_x4.stl",
                "motor_mount_helper.stl",
                "ECAS04 铁氟龙管接头（已去除后部橡胶缓冲垫）"
            ]
        },
        boxturtle_respoolers_step7: {
            title: "磁铁",
            description: `
                <p>安装磁铁，确保它们相互吸引。</p>
                <p><strong>注意：</strong>如果磁铁配合较松，可以用一滴强力胶固定。</p>
            `,
            parts: [
                "motor_mount_x4.stl",
                "trigger_x4.stl",
                "2x 6x3 磁铁"
            ]
        },
        boxturtle_respoolers_step8: {
            title: "MR63 轴承",
            description: `
                <p>如图所示把 MR63 轴承滑入到位。用一颗 M3x10 SHCS 固定轴承。</p>
                <p><strong>注意：</strong>拧到贴合即可，不要拧得过紧，否则可能把塑料拧滑丝。</p>
            `,
            parts: [
                "1x M3x10 SHCS",
                "1x MR63 轴承"
            ]
        },
        boxturtle_respoolers_step9: {
            title: "MR63 轴承",
            description: `
                <p>如图所示把 MR63 轴承滑入到位。用一颗 M3x8 SHCS 固定轴承。</p>
                <p><strong>注意：</strong>拧到贴合即可，不要拧得过紧，否则可能把塑料拧滑丝。</p>
            `,
            parts: [
                "1x M3x8 SHCS",
                "1x MR63 轴承"
            ]
        },
        boxturtle_respoolers_step10: {
            title: "扳机准备",
            description: `
                <p>如图所示，把 M3x8 螺丝拧入扳机的每一侧。在扳机本体与螺丝头之间留出约 3.5mm 的间隙。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step11: {
            title: "30t 齿轮组装",
            description: `
                <p>如图所示，把齿轮放入 30t 工具中，凸缘朝下。轻轻把 80mm 轴打入齿轮，直到它到达工具底部。</p>
                <P>齿轮在轴上<strong>必须</strong>是紧配合，不应轻易移动。</p>
                <p><strong>第 1、2 批的 LDO 齿轮太松了。</strong>你可以用胶水固定它们，或使用 FDM 打印版本。</p>
                <p><strong>注意：</strong>开始往下打时务必保持轴竖直。一旦轴越过齿轮，夹具就会引导它走直。</p>
            `,
            parts: [
                "30t 组装工具",
                "helical_gear_30t_x4.stl",
                "80mm 轴"
            ]
        },
        boxturtle_respoolers_step12: {
            title: "垫片",
            description: `
                <p>把垫片滑到轴的长边，直到它接触 30t 齿轮。</p>
            `,
            parts: [
                "gear_30_spacer_x4.stl"
            ]
        },
        boxturtle_respoolers_step13: {
            title: "N20 电机装配",
            description: `
                <p>在安装你的 n20 电机之前，确保你的<a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/N20_6V_500RPM.png" target="_blank">线材长度正确</a>。</p>
                <p>如图所示，把 n20 电机放入夹具中。把 D 形切口对准电机轴并推入，直到齿轮到达夹具表面。</p>
                <p>15T 安装工具围绕 N20 电机和齿轮箱是刻意做紧的配合，以便在你安装 15t 人字齿轮时支撑它。</p>
                <p><strong>请勿用工具强行把 15t 齿轮压到电机上。</strong>这可能损坏齿轮箱。如果装不上，请用调整后的设置重新打印齿轮。</p>
                <p><strong>重要：</strong>请确保 N20 齿轮箱内没有制造过程中残留的碎屑。你可能需要用 IPA 或类似溶剂冲洗。</p>
            `,
            parts: [
                "15t 组装工具",
                "helical_gear_15t_x4.stl",
                "N20 电机"
            ]
        },
        boxturtle_respoolers_step14: {
            title: "对位检查",
            description: `
                <p>注意 15t 齿轮是与组装工具齐平，而不是与 N20 齿轮箱输出轴的末端齐平。</p>
                <p><strong>这个对位对绕线器的可靠运行至关重要。</strong></p>
            `,
            parts: []
        },
        boxturtle_respoolers_step15: {
            title: "Neopixel 安装",
            description: `
                <p>在安装你的 LED 之前，确保你的<a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/WS2812_PCB.png" target="_blank">线束长度正确</a>。</p>
                <p>把漫射罩压入灯箱。把 neopixel 按朝向放入 led_retainer。</p>
            `,
            parts: [
                "[a]_lightbox_x4.stl",
                "[a]_led_retainer_x4.stl",
                "[c]_led_diffuser_x4.stl",
                "RGB 线束"
            ]
        },
        boxturtle_respoolers_step16: {
            title: "Neopixel 安装",
            description: `
                <p>把 led_retainer 压入灯箱中到位。</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step17: {
            title: "N20 电机安装",
            description: `
                <p>把 n20 电机滑入 motor_mount 上的凹槽。确保电机到位时线材朝上。</p>
                <p><strong>注意：</strong>我们建议你给 n20 电机的齿轮箱加润滑油。Super Lube 是不错的选择，其他润滑剂也可以，只要对你的塑料零件安全。</p>
                <p><strong>重要：</strong>在加润滑油之前，请确保 N20 齿轮箱内没有制造过程中残留的碎屑。你可能需要用 IPA 或类似溶剂冲洗。</p>
            `,
            parts: [
                "motor_mount_x4.stl"
            ]
        },
        boxturtle_respoolers_step18: {
            title: "对位检查",
            description: `
                <p>确保 N20 电机的齿轮箱已如图所示卡入凹槽。</p>
                <p><strong>这个对位对绕线器的可靠运行至关重要。</strong></p>
            `,
            parts: []
        },
        boxturtle_respoolers_step19: {
            title: "齿轮箱盖",
            description: `
                <p>如图所示，把线材折到电机顶部，并使用随附的扎带固定座固定。确保扎带拉紧，且尾部与接头齐平剪断。</p>
                <p>把齿轮箱盖滑入到位，用 M3x10 SHCS 固定。</p>
            `,
            parts: [
                "gearbox_cover_x4.stl",
                "M3x10 SHCS",
                "2x 扎带"
            ]
        },
        boxturtle_respoolers_step20: {
            title: "框架轴承",
            description: `
                <p>如图所示把轴承装入零件。确保轴承与零件外侧面齐平。</p>
            `,
            parts: [
                "frame_left_x4.stl",
                "frame_right_x4.stl",
                "2x MR148ZZ 轴承"
            ]
        },
        boxturtle_respoolers_step21: {
            title: "左框架安装",
            description: `
                <p>把 frame_left 滑入到位。确保线材位于 n20 电机上方，不会被框架夹住。用一颗 M3x8 SHCS 固定，但留松以便下一步。</p>
            `,
            parts: [
                "frame_left_x4.stl",
                "M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step22: {
            title: "安装 30t 齿轮轴",
            description: `
                <p>把 gear_30_spacer 滑到 80mm 轴较长的一侧，直到它贴住 30t 齿轮。然后，把带 30t 齿轮的轴滑入 frame_left 中的轴承。</p>
                <p>如果你上一步把螺丝留松了，你应该能稍微转动轴和齿轮，使轮齿与 n20 电机上的 15t 齿轮啮合。</p>
                <p>到位之后，你就可以完全拧紧左侧框架上的螺丝。</p>
                <p><strong>注意：</strong>确保 left_frame 的底部与 motor_body 的底部齐平。有定位凸舌帮助对齐，但配合仍有一些余量。</p>
            `,
            parts: [
                "gear_30_spacer_x4.stl",
                "带 30t 齿轮的 80mm 轴"
            ]
        },
        boxturtle_respoolers_step23: {
            title: "合拢两侧",
            description: `
                <p>如图所示，把 frame_right 滑到轴上。趁它还松的时候，把灯箱 LED 的线材穿过预留的通道。</p>
                <p>合拢时，确保线材能自由活动，没有东西被夹住。用一颗 M3x8 SHCS 固定。</p>
                <p><strong>注意：</strong>和上一步一样，确保底部与 main_body 齐平。</p>
            `,
            parts: [
                "frame_right_x4.stl",
                "灯箱组件",
                "M3x8 SHCS"
            ]
        },
        boxturtle_respoolers_step24: {
            title: "自检",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>自检！</h3>
                    <p>继续之前，确保你的轴转动顺畅，齿轮没有卡滞。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step25: {
            title: "装入扳机",
            description: `
                <p>如图所示把扳机落入绕线器。确保螺丝没有摩擦两侧，扳机能够自由前后移动。</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step26: {
            title: "安装灯箱",
            description: `
                <p>把灯箱上部的两个卡舌插入 motor_mount，然后向下按压，使其卡合到位。</p>
            `,
            parts: []
        },
        boxturtle_respoolers_step27: {
            title: "自检",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>自检！</h3>
                    <p>确保扳机能自由前后移动，不会卡住。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_respoolers_step28: {
            title: "轮驱动组件",
            description: `
                <p>把轴承垫片滑到轴上，随后装入轮驱动组件。它们应当与框架两侧的轴承齐平贴合。</p>
            `,
            parts: [
                "[a]_wheel_drive_x8.stl",
                "[a]_bearing_spacer_x8.stl"
            ]
        },
        boxturtle_respoolers_step29: {
            title: "固定轮驱动组件",
            description: `
                <p>如图所示，用 M3x6 SHCS 螺丝把轮驱动组件固定到 8x80 轴上。</p>
                <p><strong>LDO 套件：</strong>改用 M3x6 BHCS。</p>
            `,
            parts: [
                "4x M3x6 SHCS（LDO 套件用 BHCS）"
            ]
        },
        boxturtle_respoolers_step30: {
            title: "轮子",
            description: `
                <p>如图所示把轮胎滑到轮子上。确保轮胎朝向正确，使凹槽能卡入轮子。</p>
                <p><strong>注意：</strong>如果你很难装上 TPU 轮胎，稍微加热一下可能有帮助。</p>
            `,
            parts: [
                "[a]_wheel_x8.stl",
                "tpu_tire_x8.stl"
            ]
        },
        boxturtle_respoolers_step31: {
            title: "安装轮子",
            description: `
                <p>把轮子扭到轴上，直到它们牢固地“咔哒”一声锁到位。</p>
            `,
            parts: [
                "[a]_wheel_x8.stl",
                "tpu_tire_x8.stl"
            ]
        },
        boxturtle_respoolers_step32: {
            title: "友情提醒！",
            description: `
                <p>组装你的 BoxTurtle 总共需要<strong>四个绕线器</strong>。在继续下一节之前，确保你已组装好四个单元。</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle 菜单</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=turtleneck'">下一节</button>
                </div>
            `,
            parts: []
        },
        boxturtle_turtleneck_step1: {
            title: "热熔螺母",
            description: `
                <p>如图所示安装四个热熔螺母。</p>
                <p><strong>注意：</strong>务必选择与你所选打印件材料相匹配的温度。当心！热的东西很烫……</p>
                <p><strong>注意：</strong>这是本节最后一个需要安装热熔螺母的步骤。务必关闭你的电烙铁，并把它放在安全的地方。</p>
            `,
            parts: [
                "lid.stl",
                "4x M3 热熔螺母"
            ]
        },
        boxturtle_turtleneck_step2: {
            title: "ECAS 接头",
            description: `
                <p>如图所示装入 ECAS04 接头</p>
                <p><strong>注意：</strong>它们本来就设计得很紧，你可以把它们平放在桌面上，然后把打印件压到它们上面。</p>
            `,
            parts: [
                "[a]_slide.stl",
                "frame.stl",
                "2x ECAS04 铁氟龙管接头（已去除后部橡胶缓冲垫）"
            ]
        },
        boxturtle_turtleneck_step3: {
            title: "微动开关",
            description: `
                <p>注意微动开关上拨杆的朝向，如图所示用四颗 M2x10 自攻螺丝安装。注意这些螺丝是直接拧进塑料里的。</p>
                <p>分不清哪个开关是哪个？这份<a href="/docs/afc-klipper-add-on/installation/buffer-overview.html" target="_blank">文档</a>可以帮助你理解缓冲器及其功能</p>
                <div class='tn-switches-key'>
                    <strong>图例：</strong>
                    <p class='advance'>进料</p>
                    <p class='trailing'>退料</p>
                </div>
            `,
            parts: [
                "4x M2x10 自攻螺丝",
                "2x D2F 微动开关"
            ]
        },
        boxturtle_turtleneck_step4: {
            title: "滑块",
            description: `
                <p>如图所示，把滑块放入盖子中。</p>
            `,
            parts: []
        },
        boxturtle_turtleneck_step5: {
            title: "夹层组装",
            description: `
                <p>用四颗 M3x8 SHCS 螺丝，在滑块正确就位的情况下，把框架安装到盖子上。</p>
                <p>一切固定好后，确保滑块能自由移动。</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle 菜单</button>
                    <button onclick="location.href='manual.html?manual=boxturtle&subManual=general_assembly'">下一节</button>
                </div>
            `,
            parts: [
                "4x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step1: {
            title: "初始说明",
            content: `
                <div class="infoL">
                    <h3>在我们继续之前……</h3>
                    <p>本节结束时，你将得到一台准备好进行初步验证和设置的 BoxTurtle。下一节将介绍收尾饰件的安装。</p>
                    <p>在本节中，每条通道将逐一组装，从通道 4（最右侧）开始，一路做到通道 1（最左侧）。</p>
                    <p>这样做的目的是演示 BoxTurtle 预期的走线方式。</p>
                    <p class='extra-space'>如果你对自己的能力有信心，可以一次性完成每个步骤的全部 4 条通道。否则，尽管有些别扭，本节将带你从一堆模块走到一台能正常工作的 BoxTurtle。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step2: {
            title: "扳机固定件",
            description: `
                <p>如图所示，用 2 颗 M2x10 自攻螺丝把每个带拨杆的 D2F 微动开关（预装件）安装好。</p>
                <p>安装前请确保你的<a href="https://github.com/ArmoredTurtle/BoxTurtle/blob/main/BT_Wiring/D2F_W-Lever.png" target="_blank">开关已接线</a>。</p>
                <p>你需要四个这样的组件。</p>
            `,
            parts: [
                "[a]_feed_trigger_retainer_x4.stl",
                "8x M2x10 自攻螺丝",
                "4x D2F-L 微动开关（预装）"
            ]
        },
        boxturtle_general_assembly_step3: {
            title: "拆下型材",
            description: `
                <p>如图所示拆下两颗 M5x16 BHCS 螺丝。从框架上取下 220mm 2020 型材。AFC-Lite 控制板将安装到这段型材上，把它从 BoxTurtle 上拆下来后会更容易接线。</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step4: {
            title: "滚动螺母",
            description: `
                <p>把滚动螺母卡入先前拆下的 220mm 2020 型材中。这里的朝向无所谓，只需确保滚动螺母放入同一个槽道。螺纹孔到螺纹孔的合适距离是 88mm。</p>
            `,
            parts: [
                "2x M3 滚动螺母"
            ]
        },
        boxturtle_general_assembly_step5: {
            title: "AFC 支架",
            description: `
                <p>此时请确保步进驱动已正确安装。取决于你手上的 AFC-Lite 板版本，输入电源选择开关的引脚可能长到会干扰打印支架。你可能想用一把斜口钳把它们剪短，注意不要伤到焊点。</p>
                <p>如图所示，用 2 颗 M3x8 SHCS 螺丝把 AFC-Lite 板安装到打印支架上。这些螺丝是拧进塑料里的，注意不要拧得过紧。</p>
            `,
            parts: [
                "afc_mount.stl",
                "2x M3x8 SHCS",
                "AFC-Lite 板"
            ]
        },
        boxturtle_general_assembly_step6: {
            title: "刷写 AFC-Lite",
            content: `
                <div class=sanity-check>
                    <img class=stop-turtle src="/images/StopTurtle.webp" alt="Stop Turtle">
                    <h3>停！</h3>
                    <p>如果你还没有刷写 AFC-Lite 并与打印机配对，现在就是做这件事的时候！</p>
                    <p>现在也是确保你制作好用于把 BoxTurtle 连接到打印机的 CANBUS 或 USB + 电源线缆的时候。</p>
                    <p>可以引导你完成这一步的一些有用资源包括：<a href="https://github.com/xbst/AFC-Lite/blob/master/Docs/AFC-Lite_Manual.pdf" target="_blank">AFC-Lite 手册</a>、<a href="https://canbus.esoterical.online/toolhead_flashing/common_hardware/AFC-Lite/README.html" target="_blank">Esoterical CAN Bus 指南</a>、<a href="https://usb.esoterical.online/hardware_config/STM32/AFC_Lite.html" target="_blank">Esoterical USB 指南</a>，以及<a href="https://github.com/EricZimmerman/VoronTools/blob/main/EBB_CAN.md" target="_blank">更多 CAN Bus 资料</a>。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step7: {
            title: "AFC 安装",
            description: `
                <p><strong>取决于你的工作空间，你可能想跳过这一步，在本节接近末尾时再回来做。</strong></p>
                <p>用两颗 M3x10 SHCS 把 AFC-Lite 安装到型材上。完全固定的合适位置大约是距型材前边缘 34mm 处。</p>
            `,
            parts: [
                "2x M3x10 SHCS"
            ]
        },
        boxturtle_general_assembly_step8: {
            sectionName: "通道 4",
            title: "通道 4 绕线器",
            description: `
                <p>找出带通道 4 N20 线（约 515mm）的绕线器，如图所示把它卡入通道 4 的料盘。绕线器前部有突出的卡舌，会卡入型材。先把这些卡舌插入，然后把绕线器扳入料盘。</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step9: {
            title: "固定通道 4 绕线器",
            description: `
                <p>如图所示，用 2 颗 M3x8 SHCS 螺丝把绕线器固定到位。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step10: {
            title: "扳机固定件安装",
            description: `
                <p>用一颗 M3x8 SHCS 螺丝和一颗 M3 垫片安装通道 4 的预装开关（prep，435mm 线）。</p>
                <p>在开关被压下、且不把绕线器上的扳机向前推的位置固定它。预装传感器的默认状态应当是完全闭合。</p>
            `,
            parts: [
                "M3x8 SHCS",
                "M3 垫片"
            ]
        },
        boxturtle_general_assembly_step11: {
            title: "通道 4 挤出机",
            description: `
                <p><strong>注意：</strong>有些用户觉得先把 80mm 长的 3mm ID 铁氟龙管装入挤出机/绕线器，再把挤出机固定到料盘底面会更容易。这点后面不再提及。</p>
                <p>找出通道 4 的挤出机（Load 4 465mm 线，Motor 4 520mm 线）。</p>
                <p>如图所示，用两颗 M3x8 SHCS 螺丝固定通道 4 的挤出机。注意挤出机的朝向。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step12: {
            title: "走线路径",
            description: `
                <p>通道 4 的预期走线方式如图所示。</p>
                <p>料盘底面有很多扎带固定点，但现在还不是把它们紧紧固定到位的时候。此时你可以先把通道 4 的线材松松地固定住。下一页将准确展示把通道 4 全部插入 AFC-Lite 的位置，以匹配默认的 AFC Klipper 附加组件配置，方便快速完成设置。</p>
                <div class='wiring-key'>
                    <strong>图例：</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Stepper</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step13: {
            title: "通道 4 接线指南",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_10_Lane_4_Wiring.jpg" alt="Wiring Guide">
                    <p>图中展示了把通道 4 各个模块的插头插入的端口，以匹配 BoxTurtle 默认的 AFC Klipper 附加组件配置。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step14: {
            sectionName: "通道 3",
            title: "通道 3 绕线器",
            description: `
                <p>找出带通道 3 N20 线（约 415mm）的绕线器，如图所示把它卡入通道 3 的料盘。绕线器前部有突出的卡舌，会卡入型材。先把这些卡舌插入，然后把绕线器扳入料盘。</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step15: {
            title: "固定通道 3 绕线器",
            description: `
                <p>如图所示，用两颗 M3x8 SHCS 螺丝把绕线器固定到位。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step16: {
            title: "扳机固定件安装",
            description: `
                <p>用一颗 M3x8 SHCS 螺丝和一颗 M3 垫片安装通道 3 的预装开关（prep，335mm 线）。</p>
                <p>在开关被压下、且不把绕线器上的扳机向前推的位置固定它。预装传感器的默认状态应当是完全闭合。</p>
            `,
            parts: [
                "M3x8 SHCS",
                "M3 垫片"
            ]
        },
        boxturtle_general_assembly_step17: {
            title: "通道 3 挤出机",
            description: `
                <p>找出通道 3 的挤出机（Load 3 410mm 线，Motor 3 420mm 线）。</p>
                <p>如图所示，用 2 颗 M3x8 SHCS 螺丝固定通道 3 的挤出机。注意挤出机的朝向。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step18: {
            title: "走线路径",
            description: `
                <p>通道 3 的预期走线方式如图所示。</p>
                <p>料盘底面有很多扎带固定点，但现在还不是把它们紧紧固定到位的时候。此时你可以先把通道 3 的线材松松地固定住。下一页将准确展示把通道 3 全部插入 AFC-Lite 的位置，以匹配默认的 AFC Klipper 附加组件配置，方便快速完成设置。</p>
                <div class='wiring-key'>
                    <strong>图例：</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Stepper</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step19: {
            title: "通道 3 接线指南",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_15_Lane_3_Wiring.jpg" alt="Wiring Guide">
                    <p>图中展示了把通道 3 各个模块的插头插入的端口，以匹配 BoxTurtle 默认的 AFC Klipper 附加组件配置。</p> 
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step20: {
            title: "轮毂接线",
            description: `
                <p>轮毂走线的预期方式如图所示。</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step21: {
            title: "轮毂接线指南",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_17_Hub_Wiring.jpg" alt="Wiring Guide">
                    <p>图中展示了把轮毂插头插入的端口，以匹配 BoxTurtle 默认的 AFC Klipper 附加组件配置。</p> 
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step22: {
            sectionName: "通道 2",
            title: "通道 2 绕线器",
            description: `
                <p>找出带通道 2 N20 线（约 315mm）的绕线器，如图所示把它卡入通道 2 的料盘。绕线器前部有突出的卡舌，会卡入型材。先把这些卡舌插入，然后把绕线器扳入料盘。</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step23: {
            title: "固定通道 2 绕线器",
            description: `
                <p>如图所示，用两颗 M3x8 SHCS 螺丝把绕线器固定到位。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step24: {
            title: "扳机固定件安装",
            description: `
                <p>用一颗 M3x8 SHCS 螺丝和一颗 M3 垫片安装通道 2 的预装开关（prep，235mm 线）。</p>
                <p>在开关被压下、且不把绕线器上的扳机向前推的位置固定它。预装传感器的默认状态应当是完全闭合。</p>
            `,
            parts: [
                "M3x8 SHCS",
                "M3 垫片"
            ]
        },
        boxturtle_general_assembly_step25: {
            title: "通道 2 挤出机",
            description: `
                <p>找出通道 2 的挤出机（Load 2 310mm 线，Motor 2 320mm 线）。</p>
                <p>如图所示，用 2 颗 M3x8 SHCS 螺丝固定通道 2 的挤出机。注意挤出机的朝向。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step26: {
            title: "走线路径",
            description: `
                <p>通道 2 的预期走线方式如图所示。</p>
                <p>料盘底面有很多扎带固定点，但现在还不是把它们紧紧固定到位的时候。此时你可以先把通道 2 的线材松松地固定住。下一页将准确展示把通道 2 全部插入 AFC-Lite 的位置，以匹配默认的 AFC Klipper 附加组件配置，方便快速完成设置。</p>
                <div class='wiring-key'>
                    <strong>图例：</strong>
                    <p class='prep'>Prep</p>
                    <p class='load'>Load</p>
                    <p class='n20'>N20</p>
                    <p class='stepper'>Stepper</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step27: {
            title: "通道 2 接线指南",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_22_Lane_2_Wiring.jpg" alt="Wiring Guide">
                    <p>图中展示了把通道 2 各个模块的插头插入的端口，以匹配 BoxTurtle 默认的 AFC Klipper 附加组件配置。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step28: {
            sectionName: "通道 1",
            title: "通道 1 绕线器 ",
            description: `
                <p>找出带通道 1 N20 线（约 205mm）的绕线器，如图所示把它卡入通道 1 的料盘。绕线器前部有突出的卡舌，会卡入型材。先把这些卡舌插入，然后把绕线器扳入料盘。</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step29: {
            title: "固定通道 1 绕线器",
            description: `
                <p>如图所示，用两颗 M3x8 SHCS 螺丝把绕线器固定到位。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step30: {
            title: "扳机固定件安装",
            description: `
                <p>用一颗 M3x8 SHCS 螺丝和一颗 M3 垫片安装通道 1 的预装开关（prep，155mm 线）。</p>
                <p>在开关被压下、且不把绕线器上的扳机向前推的位置固定它。预装传感器的默认状态应当是完全闭合。</p>
            `,
            parts: [
                "M3x8 SHCS",
                "M3 垫片"
            ]
        },
        boxturtle_general_assembly_step31: {
            title: "通道 1 挤出机",
            description: `
                <p>找出通道 1 的挤出机（Load 1 200mm 线，Motor 1 210mm 线）。</p>
                <p>如图所示，用两颗 M3x8 SHCS 螺丝固定通道 1 的挤出机。注意挤出机的朝向。</p>
            `,
            parts: [
                "2x M3x8 SHCS"
            ]
        },
        boxturtle_general_assembly_step32: {
            title: "通道 1 接线指南",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_26_Lane_1_Wiring.jpg" alt="Wiring Guide">
                    <p>图中展示了把通道 1 各个模块的插头插入的端口，以匹配 BoxTurtle 默认的 AFC Klipper 附加组件配置。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step33: {
            title: "TN 接线指南",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_27_TN_Wiring.jpg" alt="Wiring Guide">
                    <p>图中展示了为 TN 缓冲器所做的连接，以匹配 AFC Klipper 附加组件的默认配置。如果选择不把缓冲器的线材连接到打印机主板，可以穿过右后裙板上的下部孔洞。</p>
                    <p>分不清哪个插头是哪个？这份<a href="/docs/afc-klipper-add-on/installation/buffer-overview.html" target="_blank">文档</a>可以帮助你理解缓冲器及其功能</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step34: {
            title: "LED 接线指南",
            content: `
                <div class=wiring-guide>
                    <img class=wiring-guide-image src="/images/Step_28_RGB.jpg" alt="Wiring Guide">
                    <p>图中展示了为指示灯 LED 所做的连接，以匹配默认的 AFC Klipper 附加组件配置。此时，80mm 跳线将插入电路板。</p>
                </div>
            `,
            parts: []
        },
        boxturtle_general_assembly_step35: {
            title: "电路板安装",
            description: `
                <p>如图所示，用两颗 M5x16 BHCS 螺丝把装有 AFC-Lite 的 220mm 2020 型材重新装回。</p>
                <p>绕线器上的 LED 指示灯从上一步安装的跳线插头菊花链连接。现在把它们连接起来。最后一个绕线器会多出一个插头，你可以把它用扎带固定在通道 4 料盘底部。</p>
            `,
            parts: [
                "2x M5x16 BHCS"
            ]
        },
        boxturtle_general_assembly_step36: {
            title: "铁氟龙管",
            description: `
                <p><strong>BOXTURTLE 中使用的铁氟龙管有两种不同的内径。挤出机之前（绕线器 – 挤出机）必须使用 3MM 内径的铁氟龙管。挤出机之后必须使用 2MM 铁氟龙管。</strong></p>
                <p>如果在安装挤出机时没有做，请把一段 3mm ID x80mm 的铁氟龙管插入绕线器的 ECAS 接头，轻轻弯折并插入挤出机的 ECAS 接头，确保铁氟龙管固定牢靠。</p>
                <p>对于 2mm ID 铁氟龙管，强烈建议把端口内径处做出倒角。如图所示安装 2mm ID 铁氟龙管。</p>
                <p><strong>注意：</strong>铁氟龙管倒角的方法有很多，常见方法有：</p>
                <ul>
                    <li>用手持约 6mm 钻头</li>
                    <li>在铁氟龙管端头旋转美工刀</li>
                    <li>在铁氟龙管端头使用去毛刺工具</li>
                </ul>
                <p><strong>非常重要：安装前铁氟龙管内部不得残留任何 PTFE 碎屑。</strong></p>
                <p><strong>注意：</strong>挤出机与轮毂之间的 PTFE 长度为建议的起始长度——你可能需要修剪掉一小段，才能让它弯出顺畅的弧度。耗材路径应当是一条平滑的曲线，没有急弯或扭结。</p>
            `,
            parts: [
                "4x 80mm 3mm ID 铁氟龙管",
                "2x ~101mm 2mm ID 铁氟龙管 - 内侧通道",
                "2x ~171mm 2mm ID 铁氟龙管 - 外侧通道"
            ]
        },
        boxturtle_general_assembly_step37: {
            title: "TN",
            description: `
                <p>用一段 2mm ID 铁氟龙管把 BoxTurtle 的轮毂连接到 TN 缓冲器。记住 2mm ID 铁氟龙管应当做出倒角以保证顺畅运行。</p>
                <p>它的长度取决于你打算如何把 BoxTurtle 与打印机搭配设置，如果拿不准，暂时约 250mm 是合适的。</p>
                <p>注意 TN 上的箭头指向挤出头。从 TN 缓冲器到挤出头的铁氟龙管内径无所谓，大多数人使用 2.5mm ID。</p>
                <p>这里有一个缓冲器的<a href="https://github.com/ArmoredTurtle/TurtleNeck/blob/main/STLs/TN_horizontal%20mount.stl" target="_blank">硬质支架</a>，可以让你把缓冲器用螺栓固定到 2020 型材上</p>
            `,
            parts: [
                "2mm ID 铁氟龙管"
            ]
        },
        boxturtle_general_assembly_step38: {
            title: "TN 铁氟龙管",
            description: `
                <p>如图所示，把来自 AFC 的铁氟龙管一直穿过 TN。</p>
                <p><strong>注意：</strong>它应该停在刚好不至于把“滑块”从主体中推出的位置。</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step39: {
            title: "惰轮",
            description: `
                <p>如图所示，把惰轮的两半拧到螺纹接头上。需要四个这样的组件。</p>
            `,
            parts: [
                "8x [a]_idler_roller_x8.stl",
                "4x Idler_threaded_joint_x4.stl"
            ]
        },
        boxturtle_general_assembly_step40: {
            title: "惰轮",
            description: `
                <p>如图所示，把轴承装到惰轮的端盖上，这应当是紧配合。</p>
            `,
            parts: [
                "8x MR148zz 轴承"
            ]
        },
        boxturtle_general_assembly_step41: {
            title: "惰轮安装",
            description: `
                <p>如图所示把惰轮卡入料盘，对大多数 200mm 外径的料盘而言，最后面的位置是合适的。</p>
            `,
            parts: []
        },
        boxturtle_general_assembly_step42: {
            title: "初次启动",
            content: `
                <div class="infoL">
                    <h3>*慌*</h3>
                    <p>在给 BoxTurtle 安装最终饰件之前，现在是把它连接到打印机并验证所有部件功能的好时机。</p>
                    <p class='extra-space'>包含让 BoxTurtle 启动并运行所需一切的初次启动指南可以在<a href="/docs/boxturtle/initial_startup/01-overview.html" target="_blank">这里</a>找到。</p>
                    <div class='info-submanual-nav-buttons'>
                        <button onclick="location.href='manual-sections.html?manual=boxturtle'">BoxTurtle 菜单</button>
                        <button onclick="location.href='manual.html?manual=boxturtle&subManual=final'">下一节</button>
                    </div>
                </div>
            `,
            parts: []
        },
        boxturtle_final_step1: {
            title: "热熔螺母",
            description: `
                <p>完成组装你需要 4 个这样的组件。</p>
                <p>如图所示安装热熔螺母。这是本节唯一使用热熔螺母的步骤。</p>
            `,
            parts: [
                "4x solid_corner_cover_x4.stl",
                "4x M3 热熔螺母"
            ]
        },
        boxturtle_final_step2: {
            title: "脚垫",
            description: `
                <p>图中展示的是一个角件的组装，你需要对四个角件都这样做。把一颗 M5x16 BHCS 螺丝依次穿过 M5 垫片、foot_tpu 和一个 [a]_foot。用一颗 M5 六角螺母穿过打印角件固定。</p>
            `,
            parts: [
                "4x [a]_foot_x4.stl",
                "4x foot_tpu_x4.stl",
                "4x M5x16 BHCS",
                "4x M5 垫片",
                "4x M5 六角螺母"
            ]
        },
        boxturtle_final_step3: {
            title: "角盖",
            description: `
                <p>图中展示的是一个角件的组装，你需要对四个角件都这样做。</p>
                <p>如图所示，用一颗 M3x6 SHCS 螺丝固定角盖。</p>
            `,
            parts: [
                "4x M3x6 SHCS"
            ]
        },
        boxturtle_final_step4: {
            title: "进料口",
            description: `
                <p>完成组装你需要 4 个这样的组件。如图所示，把进料器装到一段 50mm 长的 3mm ID 铁氟龙管上。</p>
                <p><strong>注意：</strong>每当需要把 BoxTurtle 背朝下放置进行维修时，建议把这些进料器拆下来。</p>
            `,
            parts: [
                "4x [a]_feeder_x4.stl",
                "4x 3mm ID x 50mm 铁氟龙管"
            ]
        },
        boxturtle_final_step5: {
            title: "进料口铁氟龙管",
            description: `
                <p>图中展示的是一个绕线器的最终组装，对全部四个重复此操作。</p>
                <p>如图所示，把进料口铁氟龙管插入绕线器。</p>
            `,
            parts: []
        },
        boxturtle_final_step6: {
            title: "结束",
            content: `
                <div class="info">
                    <h3>你完成了！！！</h3>
                    <p><strong>就这样！😊 去打印点好玩的东西吧！</strong></p>
                </div>
                <div class="infoL">
                    <p class='extra-space'><i>万一你错过了，包含让 BoxTurtle 启动并运行所需一切的初次启动指南可以在<a href="https://www.armoredturtle.xyz/docs/boxturtle/initial_startup/01-overview.html" target="_blank">这里</a>找到。</i></p>
                </div>
            `,
            parts: []
        }
    },
}