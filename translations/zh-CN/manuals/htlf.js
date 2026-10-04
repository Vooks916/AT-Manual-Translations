export default {
    name: "HTLF 手册",
    subManuals: {
        introduction: {
            name: "1. HTLF 简介"
        },
        preparation: {
            name: "2. HTLF 准备"
        },
        turtleneck: {
            name: "3. TurtleNeck"
        },
        general_assembly: {
            name: "4. 总组装"
        }
    },
    steps: {
        htlf_introduction_step1: {
            title: "简介",
            content: `
                <div class="infoL">
                    <h3>简介</h3>
                    <p>本手册将带你逐步完成 ArmoredTurtle 的 HappyTurtle LettuceFeeder (HTLF) 组装。请仔细阅读本简介，其中包含在整个组装过程中都会用到的信息。</p>
                </div>
            `,
            parts: []
        },
        htlf_introduction_step2: {
            title: "基本用法",
            description: `
                <p>本手册以 3D 空间展示组装过程的每一个步骤，帮助避免混淆，并清晰说明零件的正确朝向。</p>
                <p>页面顶部有三个选项：你可以为打印件和框架选择不同的颜色，以便更容易辨认零件。</p>
                <p>下面是一个可供你自由查看的渲染图。左键点击旋转视角，右键拖动平移，滚动滚轮缩放。</p>
            `,
            parts: []
        },
        htlf_introduction_step3: {
            title: "打印件说明",
            content: `
                <div class="infoL">
                    <h3>打印件说明</h3>
                    <p>这并不是一个 <a href="https://vorondesign.com/" target="_blank">VORON Design</a> 项目，我们强烈建议你使用专为 HTLF 制作的打印配置。不建议对 HTLF 打印件使用 Voron 零件配置，因为两者的公差预期不同。</p>
                    <p class="extra-space">具体来说，请务必针对歪斜（skew）和耗材收缩进行调校。Vector3D 的 <a href="https://vector3d.shop/products/califlower-calibration-tool-mk2" target="_blank">Califlower Mk2</a> 是一款极佳的工具（没错，14 美元花得值）。请在为 HTLF 零件打印约 0.5kg 耗材<i>之前</i>完成这一步！</p>
                </div>
            `,
            parts: []
        },
        htlf_introduction_step4: {
            title: "零件打印指南",
            content: `
                <div class="info">
                    <h3>零件打印指南</h3>
                    <p>以下是我们的推荐打印设置。遵循这些设置，能最大程度提高零件打印的成功率。注意：与金属部件过盈配合的零件公差为 0.15mm，所有打印件之间的配合面公差为 0.2mm。请据此检查你打印配置的尺寸精度。</p>
                </div>
            
                <div class="print-settings">
                    <div class="print-setting">
                        <h4>3D 打印工艺</h4>
                        <p>熔融沉积成型（FDM）</p>
                    </div>
                    <div class="print-setting">
                        <h4>材料</h4>
                        <p class='p-no-space'><strong>主色：</strong> 约 0.3kg ABS</p>
                        <p class='p-no-space'><strong>点缀色：</strong> 约 0.1kg ABS</p>
                        <p class='p-no-space'><strong>黑色：</strong> 约 3g ABS</p>
                        <p class='p-no-space'><strong>透明：</strong> 约 2g 任意材料</p>
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
                        <h4>墙层/顶层/底层</h4>
                        <p>推荐：4</p>
                    </div>
                </div>
            `,
            parts: []
        },
        htlf_introduction_step5: {
            title: "命名规则",
            content: `
                <div class=info>
                    <h3>文件命名</h3>
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
        htlf_introduction_step6: {
            title: "ECAS-04 说明",
            content: `
                <div class="infoL">
                    <h3>ECAS-04（最糟糕的部分）</h3>
                    <p><strong>HTLF 中使用的铁氟龙管接头本来就设计得很紧，如果插入时需要费点力气，说明你的公差没问题。你绝对不希望它们从打印件中脱出。</strong></p>
                    <p><strong>关于这些接头，请参考这张组装照片。通常，蓝色推杆需要插入夹头主体中。</strong></p>
                    <p><strong>需要从密封圈固定件上取下橡胶密封圈。务必把固定件留在夹头主体上。在任何 ArmoredTurtle 项目中，橡胶密封圈都不会被使用。请妥善丢弃。</strong></p>
                    <img class='ecas-preparation' src="/images/ecas-preparation.webp" alt="ECAS Preparation">
                </div>
            `,
            parts: []
        },
        htlf_introduction_step7: {
            title: "组装提示",
            content: `
                <div class="infoL">
                    <h3>组装提示</h3>
                    <p>你会注意到许多组装步骤中都渲染有箭头。它们表示需要执行的动作。</p>
                    <p>请注意颜色。</p>
                    <ul>
                        <li>红色：表示最终动作，例如将螺丝完全拧紧或安装热熔螺母</li>
                        <li>蓝色：表示暂时不紧固的组装，稍后还会再处理 </li>
                        <li>绿色：表示由最终用户自行决定的调整</li>
                    </ul>
                    <img class='arrow-example' src="/images/ArrowExample.webp" alt="Arrow Examples">
                </div>
            `,
            parts: []
        },
        htlf_introduction_step8: {
            title: "常用链接",
            content: `
                <div class="info">
                    <h3>常用链接</h3>
                    <div class="link-container">
                        <a href="https://github.com/ArmoredTurtle" target="_blank" class="link-item">
                            <img src="/images/github-logo.png" alt="GitHub" class="link-icon">
                            <span>GitHub</span>
                        </a>
                        <a href="https://discord.gg/AaVHfeYgw2" target="_blank" class="link-item">
                            <img src="/images/discord.png" alt="Discord" class="link-icon">
                            <span>Discord</span>
                        </a>
                        <a href="https://www.printables.com/model/1249234-happyturtlelettucefeeder-htlf-by-armoredturtle" target="_blank" class="link-item">
                            <img src="/images/printables.png" alt="Printables" class="link-icon">
                            <span>Printables</span>
                        </a>
                    </div>
                    <div class='info-submanual-nav-buttons'>
                        <button onclick="location.href='manual-sections.html?manual=htlf'">HTLF 菜单</button>
                        <button onclick="location.href='manual.html?manual=htlf&subManual=preparation'">下一节</button>
                    </div>
                </div>
            `,
            parts: []
        },
        htlf_preparation_step1: {
            title: "传感器接线",
            description: `
                <p>使用打印的焊接辅助工具，帮助两个微动开关之间保持合适的间距。请特别注意开关的朝向。用一根约 52mm 长的导线连接微动开关的公共引脚。在每根常开引脚上焊接一根约 12cm 长的导线，并压接一个适合你 MCU 的接头。</p>
            `,
            parts: [
                "solder_tool.stl",
                "2x D2F 微动开关"
            ]
        },
        htlf_preparation_step2: {
            title: "归位接线",
            description: `
                <p>在你的 D2F 微动开关上焊接一根约 15cm 长的导线，并压接一个适合你 MCU 的插头。</p>
            `,
            parts: [
                "1x D2F-L 微动开关"
            ]
        },
        htlf_preparation_step3: {
            title: "LED 接线",
            description: `
                <p>如图所示串联四颗 WS2812 电路板 LED。先把 LED 放入打印的 led_retainer 零件中可能会更容易操作。连接到 MCU 的导线应约为 20cm，并根据你选择的 MCU 压接合适的端子。</p>
            `,
            parts: [
                "LED_retainer.stl",
                "4x WS2812 LED"
            ]
        },
        htlf_preparation_step4: {
            title: "热熔螺母 1",
            description: `
                <p>如图所示安装 12 个热熔螺母。</p>
                <p><strong>注意：</strong>请务必选择适合你所选打印件材料的温度。小心！烫的东西很烫……</p>
            `,
            parts: [
                "frame_left.stl",
                "frame_right.stl",
                "12x M3 热熔螺母"
            ]
        },
        htlf_preparation_step5: {
            title: "热熔螺母 2",
            description: `
                <p>根据你所选 MCU，在对应的孔位安装热熔螺母。</p>
                <p><strong>注意：</strong>请务必选择适合你所选打印件材料的温度。小心！烫的东西很烫……</p>
            `,
            parts: [
                "board_mount.stl",
                "3-4x M3 热熔螺母"
            ]
        },
        htlf_preparation_step6: {
            title: "热熔螺母 3",
            description: `
                <p><strong>你需要对全部四个 e_body 零件都执行此步骤。</strong></p>
                <p>如图所示在 e_body 中安装两个热熔螺母。</p>
                <p>在 e_body 中插入两个 ECAS04 夹头。如本手册简介中所述，请务必去除 ECAS 接头上的橡胶密封圈。</p>
                <p>如图所示安装 6x3mm 磁铁；如果磁铁松动，滴一滴 CA 胶就能很好地固定它们。</p>
                <p><strong>注意：</strong>请务必选择适合你所选打印件材料的温度。小心！烫的东西很烫……</p>
                <p><strong>这是本节最后一个安装热熔螺母的步骤。在继续之前，请关闭你的烙铁并将其放在安全的地方。</strong></p>
            `,
            parts: [
                "e_body.stl",
                "8x M3 热熔螺母",
                "8x ECAS04 夹头",
                "4x 6x3mm 磁铁"
            ]
        },
        htlf_preparation_step7: {
            title: "压杆",
            description: `
                <p>将 2 个滚针轴承放入惰轮齿轮中，完成惰轮组装。</p>
                <p><strong>注意：</strong>现在是给滚针轴承加润滑油的时候了。</p>
                <p>从压杆本体上取下打印成型的支撑后，如图所示用一根 3x20mm 销轴安装 bmg 惰轮。注意朝向。此零件上的孔具有不同的间隙，以便于组装。</p>
                <p>如图所示，以与 e_body 中磁铁<strong>相斥</strong>的朝向插入一枚 6x3mm 磁铁。如有需要，可以滴一滴 CA 胶来固定这些磁铁。</p>
            `,
            parts: [
                "4x [a]_depressor_x4.stl",
                "4x BMG 惰轮",
                "8x 滚针轴承",
                "4x 2x20mm 销轴",
                "4x 6x3 磁铁"
            ]
        },
        htlf_preparation_step8: {
            title: "传感器",
            description: `
                <p>如图所示，在每个传感器槽中放入一颗 5mm 钢珠后，安装传感器组件。四个 e_body 都要这样操作。</p>
            `,
            parts: [
                "16x M2x10 STS 螺丝",
                "8x 5mm 钢珠"
            ]
        },
        htlf_preparation_step9: {
            title: "驱动皮带轮",
            description: `
                <p>使用打印的皮带轮工具，如图所示将 20t 皮带轮安装到电机上。</p>
                <p><strong>这些紧定螺丝请使用螺纹胶。</strong></p>
            `,
            parts: [
                "皮带轮工具",
                "1x 步进电机",
                "1x 20t 皮带轮"
            ]
        },
        htlf_preparation_step10: {
            title: "凸轮皮带轮",
            description: `
                <p>使用打印的皮带轮工具，如图所示将 20t 皮带轮安装到电机上。</p>
                <p><strong>这些紧定螺丝请使用螺纹胶。</strong></p>
            `,
            parts: [
                "皮带轮工具",
                "1x 步进电机",
                "1x 20t 皮带轮"
            ]
        },
        htlf_preparation_step11: {
            title: "80t 皮带轮",
            description: `
                <p>如图所示，用五颗 M3x8 BHCS 螺丝将 80t_pulley 固定到去法兰的 20t gt2 皮带轮上。</p>
                <p>请确保它在 80t 皮带轮中固定端正，否则日后你得大费周章地拆解来修正。<strong>现在就准备好这两个皮带轮</strong>，将一个放到一边备用。</p>
            `,
            parts: [
                "2x [a]_80t_pulley.stl",
                "2x 去法兰 20t gt2 x6mm 皮带轮",
                "10x M3x8 BHCS 螺丝"
            ]
        },
        htlf_preparation_step12: {
            title: "驱动轴",
            description: `
                <p>如图所示安装 80t 皮带轮，紧定螺丝上要涂<strong>螺纹胶</strong>。注意朝向。较长一侧应露出 101mm（4 英寸）的轴。</p>
            `,
            parts: [
                "1x ~125mm D 轴"
            ]
        },
        htlf_preparation_step13: {
            title: "驱动齿轮",
            description: `
                <p>如图所示，在每个 e_body 中装入一颗 MR85 轴承。如图所示，从上方放入 BMG 驱动齿轮。</p>
                <p>现在正好可以用扎带把 D2F 开关的导线捆好。</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=htlf'">HTLF 菜单</button>
                    <button onclick="location.href='manual.html?manual=htlf&subManual=turtleneck'">下一节</button>
                </div>
            `,
            parts: [
                "4x MR85 轴承",
                "4x BMG 驱动齿轮"
            ]
        },
        htlf_turtleneck_step1: {
            title: "热熔螺母",
            description: `
                <p>如图所示安装四个热熔螺母。</p>
                <p><strong>注意：</strong>请务必选择适合你所选打印件材料的温度。小心！烫的东西很烫……</p>
                <p><strong>注意：</strong>这是本节最后一个需要安装热熔螺母的步骤。请务必关闭你的烙铁并将其放在安全的地方。</p>
            `,
            parts: [
                "lid.stl",
                "4x M3 热熔螺母"
            ]
        },
        htlf_turtleneck_step2: {
            title: "ECAS 接头",
            description: `
                <p>如图所示插入 ECAS04 接头</p>
                <p><strong>注意：</strong>它们本就是紧配合的，你可以把它们平放在桌面上，再将打印件压到它们上面。</p>
            `,
            parts: [
                "[a]_slide.stl",
                "frame.stl",
                "2x ECAS04 铁氟龙管接头（已去除后部橡胶缓冲垫）"
            ]
        },
        htlf_turtleneck_step3: {
            title: "微动开关",
            description: `
                <p>注意微动开关上拨杆的朝向，如图所示用四颗 M2x10 自攻螺丝安装。请注意，这些螺丝是直接拧入塑料中的。</p>
                <p>分不清哪个开关是哪个？这里有一份 <a href="/docs/afc-klipper-add-on/installation/buffer-overview.html" target="_blank">文档</a>，帮助你了解缓冲器及其功能</p>
                <div class='tn-switches-key'>
                    <strong>图例：</strong>
                    <p class='advance'>进给</p>
                    <p class='trailing'>拖尾</p>
                </div>
            `,
            parts: [
                "4x M2x10 自攻螺丝",
                "2x D2F 微动开关"
            ]
        },
        htlf_turtleneck_step4: {
            title: "滑片",
            description: `
                <p>如图所示将滑片放入顶盖中。</p>
            `,
            parts: []
        },
        htlf_turtleneck_step5: {
            title: "夹层组装",
            description: `
                <p>用四颗 M3x8 SHCS 螺丝将框架安装到顶盖上，并确保滑片位置正确。</p>
                <p>全部固定好后，确保滑片能自由移动。</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=htlf'">HTLF 菜单</button>
                    <button onclick="location.href='manual.html?manual=htlf&subManual=general_assembly'">下一节</button>
                </div>
            `,
            parts: [
                "4x M3x8 SHCS"
            ]
        },
        htlf_general_assembly_step1: {
            title: "左侧框架",
            description: `
                <p>如图所示，如有需要滴一滴 CA 胶安装 6x3 磁铁。将一颗 MR85 轴承装入其凹槽中。</p>
                <p>如图所示，用三颗 M3x8 SHCS 螺丝安装<strong>驱动电机</strong>。注意，如简介中所述，箭头指示的含义有所不同。将那颗稍后用作调整枢轴的 M3x8 SHCS 螺丝拧到贴合即可。</p>
            `,
            parts: [
                "frame_left.stl",
                "3x M3x8 SHCS 螺丝",
                "1x 6x3 磁铁",
                "1x MR85 轴承"
            ]
        },
        htlf_general_assembly_step2: {
            title: "型材",
            description: `
                <p>将两颗 M5 滑入螺母插入型材中，并确保它们与 frame_left 上的孔对齐。</p>
                <p>将闭环皮带套在 80t 皮带轮上后，如图所示插入驱动轴组件。</p>
            `,
            parts: [
                "160mm 2020 型材",
                "2x M5 滑入螺母",
                "1x 188mm GT2 闭环皮带"
            ]
        },
        htlf_general_assembly_step3: {
            title: "左侧中板",
            description: `
                <p>如图所示，用两颗 M5x16 BHCS 将 midplate_left 固定到 frame_left 上。现在你可以如图所示拧紧两颗 M3x8 SHCS 螺丝，为驱动皮带设定基础张力。</p>
            `,
            parts: [
                "midplate_left.stl",
                "2x M5x16 BHCS 螺丝"
            ]
        },
        htlf_general_assembly_step4: {
            title: "挤出机体 1",
            description: `
                <p>将一个先前准备好的 e_body 滑到型材上，用两颗 M5x10 BHCS 螺丝固定到位。使用<strong>螺纹胶</strong>将 bmg 驱动齿轮固定到 5mm D 轴上，并确保与耗材路径对齐。</p>
            `,
            parts: [
                "2x M5x10 BHCS 螺丝",
                "2x M5 滑入螺母"
            ]
        },
        htlf_general_assembly_step5: {
            title: "压杆 1",
            description: `
                <p>用一颗 M3x20 SHCS 螺丝和一个垫片将组装好的压杆固定到 e_body 上。它需要能够自由活动，<strong>不要拧得过紧</strong>。现在要<strong>确认这些零件中的磁铁相互排斥</strong>。</p>
                <p>如图所示，用两颗 M2x10 STS 螺丝将归位传感器固定到 e_body 上。</p>
                <p>如图所示，将一颗 MR85 轴承装入其凹槽中。</p>
            `,
            parts: [
                "1x M3x20 SHCS 螺丝",
                "1x M3 垫片",
                "1x D2F-L（归位传感器）",
                "2x M2x10 STS 螺丝",
                "1x MR85 轴承"
            ]
        },
        htlf_general_assembly_step6: {
            title: "挤出机体 2",
            description: `
                <p>将一个先前准备好的 e_body 滑到型材上，用两颗 M5x10 BHCS 螺丝固定到位。使用<strong>螺纹胶</strong>将 bmg 驱动齿轮固定到 5mm D 轴上，并确保与耗材路径对齐。</p>
            `,
            parts: [
                "2x M5x10 BHCS 螺丝",
                "2x M5 滑入螺母"
            ]
        },
        htlf_general_assembly_step7: {
            title: "压杆 2",
            description: `
                <p>用一颗 M3x20 SHCS 螺丝和一个垫片将组装好的压杆固定到 e_body 上。它需要能够自由活动，<strong>不要拧得过紧</strong>。现在要<strong>确认这些零件中的磁铁相互排斥</strong>。</p>
                <p>如图所示，将一颗 MR85 轴承装入其凹槽中。</p>
            `,
            parts: [
                "1x M3x20 SHCS 螺丝",
                "1x M3 垫片",
                "1x MR85 轴承"
            ]
        },
        htlf_general_assembly_step8: {
            title: "凸轮凸角 1",
            description: `
                <p>在 lobe_1 两侧各放一个 M5 垫片，将 5mm D 轴穿过 e_body 2，直到顶到 midplate_left。<strong>注意朝向</strong>。</p>
            `,
            parts: [
                "[a]_lobe_1.stl",
                "2x M5 垫片",
                "~125mm 5mm D 轴"
            ]
        },
        htlf_general_assembly_step9: {
            title: "凸轮凸角 2",
            description: `
                <p>在 lobe_2 两侧各放一个 M5 垫片，将它套到 5mm D 轴上，直到靠住 e_body 2。<strong>注意朝向</strong>。</p>
            `,
            parts: [
                "[a]_lobe_2.stl",
                "2x M5 垫片"
            ]
        },
        htlf_general_assembly_step10: {
            title: "挤出机体 3",
            description: `
                <p>将一个先前准备好的 e_body 滑到型材上，用两颗 M5x10 BHCS 螺丝固定到位。使用<strong>螺纹胶</strong>将 bmg 驱动齿轮固定到 5mm D 轴上，并确保与耗材路径对齐。</p>
            `,
            parts: [
                "2x M5x10 BHCS 螺丝",
                "2x M5 滑入螺母"
            ]
        },
        htlf_general_assembly_step11: {
            title: "压杆 3",
            description: `
                <p>用一颗 M3x20 SHCS 螺丝和一个垫片将组装好的压杆固定到 e_body 上。它需要能够自由活动，<strong>不要拧得过紧</strong>。现在要<strong>确认这些零件中的磁铁相互排斥</strong>。</p>
                <p>如图所示，将一颗 MR85 轴承装入其凹槽中。</p>
            `,
            parts: [
                "1x M3x20 SHCS 螺丝",
                "1x M3 垫片",
                "1x MR85 轴承"
            ]
        },
        htlf_general_assembly_step12: {
            title: "凸轮凸角 3",
            description: `
                <p>在 lobe_3 两侧各放一个 M5 垫片，将它套到 5mm D 轴上，直到靠住 e_body 3。<strong>注意朝向</strong>。</p>
            `,
            parts: [
                "[a]_lobe_3.stl",
                "2x M5 垫片"
            ]
        },
        htlf_general_assembly_step13: {
            title: "挤出机体 4",
            description: `
                <p>将一个先前准备好的 e_body 滑到型材上，用两颗 M5x10 BHCS 螺丝固定到位。使用<strong>螺纹胶</strong>将 bmg 驱动齿轮固定到 5mm D 轴上，并确保与耗材路径对齐。</p>
            `,
            parts: [
                "2x M5x10 BHCS 螺丝",
                "2x M5 滑入螺母"
            ]
        },
        htlf_general_assembly_step14: {
            title: "压杆 4",
            description: `
                <p>用一颗 M3x20 SHCS 螺丝和一个垫片将组装好的压杆固定到 e_body 上。它需要能够自由活动，<strong>不要拧得过紧</strong>。现在要<strong>确认这些零件中的磁铁相互排斥</strong>。</p>
                <p>如图所示，将一颗 MR85 轴承装入其凹槽中。</p>
            `,
            parts: [
                "1x M3x20 SHCS 螺丝",
                "1x M3 垫片",
                "1x MR85 轴承"
            ]
        },
        htlf_general_assembly_step15: {
            title: "凸轮凸角 4",
            description: `
                <p>在 lobe_4 两侧各放一个 M5 垫片，将它套到 5mm D 轴上，直到靠住 e_body 4。<strong>注意朝向</strong>。</p>
            `,
            parts: [
                "[a]_lobe_4.stl",
                "2x M5 垫片"
            ]
        },
        htlf_general_assembly_step16: {
            title: "右侧中板",
            description: `
                <p><strong>图中未显示：中板侧面还有一颗额外的 MR85 轴承，用于支撑驱动轴。别忘了它！</strong></p>
                <p>将 midplate_right 滑到型材上，并插入两颗 M5 滑入螺母与孔对齐。</p>
                <p>将一颗 MR85 轴承套到 5mm D 轴上，直到它卡入 midplate_right 中的凹槽。</p>
            `,
            parts: [
                "midplate_right.stl",
                "2x MR85 轴承",
                "2x M5 滑入螺母"
            ]
        },
        htlf_general_assembly_step17: {
            title: "凸轮盘",
            description: `
                <p>如图所示，将先前准备好的 80t 皮带轮套到 5mm D 轴上。（如果先套上皮带再操作，皮带会更容易安装。）将紧定螺丝固定到 D 轴上，并使用<strong>螺纹胶</strong>。随后装上一颗 MR85 轴承。</p>
            `,
            parts: [
                "1x MR85 轴承",
                "1x 188mm GT2 闭环皮带"
            ]
        },
        htlf_general_assembly_step18: {
            title: "右侧框架",
            description: `
                <p>如图所示，用 3 颗 M3x8 SHCS 螺丝安装<strong>凸轮电机</strong>。注意，如简介中所述，箭头指示的含义有所不同。将那颗稍后用作调整枢轴的 M3x8 SHCS 螺丝拧到贴合即可。</p>
            `,
            parts: [
                "frame_right.stl",
                "3x M3x8 SHCS 螺丝"
            ]
        },
        htlf_general_assembly_step19: {
            title: "凸轮电机",
            description: `
                <p>如图所示，用两颗 M5x16 BHCS 固定 frame_left。现在你可以如图所示拧紧两颗 M3x8 SHCS 螺丝，为凸轮皮带设定基础张力。</p>
            `,
            parts: [
                "2x M5x16 BHCS 螺丝"
            ]
        },
        htlf_general_assembly_step20: {
            title: "装饰条",
            description: `
                <p>如图所示，用 M3x8 SHCS 螺丝安装 rear_brace 和装饰条。</p>
                <p><strong>注意：rear_brace 并非对称件，背面顶部一侧标有一个 T。</strong></p>
            `,
            parts: [
                "rear_brace.stl",
                "trim.stl",
                "8x M3x8 SHCS 螺丝"
            ]
        },
        htlf_general_assembly_step21: {
            title: "顶盖散光片",
            description: `
                <p>如图所示，将四个散光片装入顶盖。</p>
            `,
            parts: [
                "[a]_lid.stl",
                "[c]_diffuser_x4.stl"
            ]
        },
        htlf_general_assembly_step22: {
            title: "顶盖",
            description: `
                <p>如图所示，用 3 颗 M3x6 BHCS 螺丝安装 led_retainer。用三根 2x1mm 扎带将导线固定到顶盖上。</p>
                <p>如有需要，滴一滴 CA 胶安装一枚 6x3mm 磁铁。</p>
                <p><strong>注意：这枚磁铁应与 frame_left 上的磁铁相互吸引</strong></p>
            `,
            parts: [
                "3x M3x6 BHCS 螺丝",
                "6x3mm 磁铁"
            ]
        },
        htlf_general_assembly_step23: {
            title: "电路板",
            description: `
                <p>用 M3x10 SHCS 螺丝将你选择的 MCU 固定到 board_mount 上，底部垫上 board_spacer。</p>
            `,
            parts: [
                "3-4x board_offsets_x4.stl",
                "board_mount.stl",
                "3-4x M3x10 SHCS 螺丝"
            ]
        },
        htlf_general_assembly_step24: {
            title: "轮毂",
            description: `
                <p>如图所示，将一颗 MR63 轴承放入槽中，随后放入一个 D2HW 微动开关。用一颗 M3x10 SHCS 螺丝固定到位。<strong>不要拧得过紧，这是直接拧入塑料中的。</strong></p>
                <p>如图所示，在每个位置插入一个 ECAS04。（它们被有意设计成非常紧的配合。）</p>
            `,
            parts: [
                "hub.stl",
                "1x M3x10 SHCS",
                "1x MR63 轴承",
                "1x D2HW 微动开关",
                "5x ECAS04 夹头"
            ]
        },
        htlf_general_assembly_step25: {
            title: "完成",
            description: `
                <p>如图所示，用两颗 M3x16 SHCS 螺丝将顶盖固定在两侧。</p>
                <p>将传感器、灯和电机插入 MCU 后，如图所示用六颗 M3x8 SHCS 螺丝将电路板支架安装到 HTLF 上。</p>
            `,
            parts: [
                "2x M3x16 SHCS 螺丝",
                "6x M3x8 SHCS 螺丝"
            ]
        },
        htlf_general_assembly_step26: {
            title: "完成",
            description: `
                <p>现在你的设备已经组装完成，你可以选择参照 <a href="/docs/boxturtle/initial_startup/01-overview.html" target="_blank">BoxTurtle 的初始启动指南</a>（流程非常相似）。</p>
                <p>或者走一条属于你自己的路线。</p>
                <p>我们的两位 Discord 成员 <strong>@Mib | HTLF-011</strong> 和 <strong>@james1979 | HTLF-010</strong> 整理了一份 <a href="/docs/assets/docs/HTLF_Wiring_help.pdf" target="blank">PDF 文件</a>，帮助你为 HTLF 接线。</p>
                <p>欢迎在 <a href="https://discord.gg/AaVHfeYgw2" target="_blank">ArmoredTurtle Discord 求助社区</a> 中提问。</p>
            `,
            parts: []
        }
    },
}
