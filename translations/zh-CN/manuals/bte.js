export default {
    name: "BoxTurtle 机箱手册",
    subManuals: {
        preparation: {
            name: "1. BTE 准备"
        },
        frame: {
            name: "2. 框架"
        },
        assembly: {
            name: "3. 组装"
        }
    },
    steps: {
        bte_preparation_step1: {
            title: "简介",
            description: `
                <p>本手册的前提是你的 BoxTurtle 已完全组装完毕，且所有组件均已测试并确认工作正常。在使用本手册之前，我们假定组装流程已全部完成，且系统已通过所有初始功能检查。关于继续操作前所需的完成度与验证要求，请参阅 <a href="/manual.html?manual=boxturtle&subManual=introduction">BoxTurtle 简介</a> 章节的第 3 页。</p>
            `,
            parts: []
        },
        bte_preparation_step2: {
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
                        <p class='p-no-space'><strong>主色：</strong>约 0.5kg ABS/PLA</p>
                        <p class='p-no-space'><strong>点缀色：</strong>约 25g ABS/PLA</p>
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
        bte_preparation_step3: {
            title: "命名规则",
            content: `
                <div class=info>
                    <h3>文件命名</h3>
                    <p>此时你应该已经从 <a href="https://github.com/ArmoredTurtle/BoxTurtle-Enclosure" target="_blank">GitHub</a> 下载了 STL 文件。下面说明如何使用我们的命名规则。</p>
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
        bte_preparation_step4: {
            title: "左开门说明",
            content: `
                <div class="infoL">
                    <h3>左开门说明</h3>
                    <p class='extra-space'>BoxTurtle 机箱在设计时充分考虑了灵活性，可根据用户偏好或空间限制，配置为左开门或右开门。为了本手册行文的一致与简洁，所有组装说明均默认以左开门配置为例。但请注意：组装右开门所涉及的步骤在功能上完全相同——只是镜像过来而已。选择右开门配置的用户可照用同样的说明，只需将相关朝向反过来即可。</p>
                </div>
            `,
            parts: []
        },
        bte_preparation_step5: {
            title: "热熔螺母 1",
            description: `
                <p>按图示安装热熔螺母。</p>
                <p><strong>注意：</strong>请务必根据你所选打印件的材料选择合适的温度。小心！热的东西很烫……</p>
            `,
            parts: [
                "hex_front_L.stl",
                "hex_front_R.stl",
                "6x M3 热熔螺母"
            ]
        },
        bte_preparation_step6: {
            title: "热熔螺母 2",
            description: `
                <p>按图示安装热熔螺母。六个 top_bracket_polydryer 零件都需要这样操作。</p>
            `,
            parts: [
                "6x top_bracket_polydryer_x6",
                "24x M3 热熔螺母"
            ]
        },
        bte_preparation_step7: {
            title: "热熔螺母 3",
            description: `
                <p>按图示安装热熔螺母。</p>
                <p><strong>注意：</strong>这是机箱手册中最后一个需要安装热熔螺母的步骤。务必关闭你的烙铁并将其放在安全的地方。</p>
            `,
            parts: [
                "part_a.stl",
                "1x M3 热熔螺母"
            ]
        },
        bte_preparation_step8: {
            title: "支撑",
            description: `
                <p>按图示移除所有顶层板卡扣上的一体打印支撑。</p>
            `,
            parts: []
        },
        bte_preparation_step9: {
            title: "铰链五金件",
            description: `
                <p>按图示安装 4x30mm 销钉和 4x6x6 衬套。</p>
                <p><strong>注意：</strong>铰链五金件是特意按紧公差配合设计的，因为它仅依靠摩擦力就能在正常工作期间牢固固定。这种紧密配合是有意为之，目的是免去额外的紧固件或胶水，仅靠机械摩擦就让五金件保持牢固。安装时用户可能会感到需要用力，这属于正常现象，也有助于铰链组件的长期稳定。</p>
            `,
            parts: [
                "corner_cover_front.stl",
                "upper_hinge_frame.stl",
                "upper hinge_door.stl",
                "lower_hinge_door.stl",
                "4x 4x6x6 无油衬套",
                "2x 4x30mm 销钉"
            ]
        },
        bte_preparation_step10: {
            title: "下前侧盖板",
            description: `
                <p>按图示用 M5x16 BHCS 螺丝和 M5 螺母将底座脚固定到下前角盖板上。</p>
                <p><strong>注意：</strong>这些打印件没有对位特征，而是依靠后续步骤中加装的五金件来保持对位。</p>
            `,
            parts: [
                "[a]_lower_cover_foot.stl",
                "[a]_lower_hinge_foot.stl",
                "lower_cover.stl",
                "lower_hinge.stl",
                "2x foot_tpu.stl",
                "2x M5x16 BHCS",
                "2x M5 螺母"
            ]
        },
        bte_preparation_step11: {
            title: "面板卡扣五金件",
            description: `
                <p>在此处所示的所有面板卡扣上安装 M3x12 BHCS 螺丝，并用 M3 锤头螺母固定。现在只拧入约 2-3 圈即可。</p>
            `,
            parts: [
                "12x M3x12 BHCS",
                "12x M3 锤头螺母"
            ]
        },
        bte_preparation_step12: {
            title: "裙边 1",
            description: `
                <p>按图示用两颗 M3x18 BHCS 螺丝安装裙边中央固定座。如果不使用一体式前裙边，则用两颗 M3x8 BHCS 螺丝安装裙边卡扣（这些是拧入塑料的，不要拧得过紧）。</p>
            `,
            parts: [
                "skirt_mount_center.stl",
                "skirt_clip.stl",
                "2x M3x8 BHCS",
                "2x M3x18 BHCS"
            ]
        },
        bte_preparation_step13: {
            title: "裙边 2",
            description: `
                <p>按图示用四颗 M3x8 BHCS 螺丝安装两个填充件（这些是拧入塑料的，不要拧得过紧）。</p>
            `,
            parts: [
                "filler_L.stl",
                "filler_R.stl",
                "4x M3x8 BHCS"
            ]
        },
        bte_preparation_step14: {
            title: "裙边 3",
            description: `
                <p>按图示用四颗 M3x18 BHCS 螺丝将前裙边固定座连同其垫块一起安装。</p>
                <p><strong>注意：</strong>本步骤中所有零件都有特定的朝向，请留意。垫块底面上有两个圆点，这两个圆点要朝向裙边的倒角边。</p>
            `,
            parts: [
                "2x spacer.stl",
                "skirt_mount_side_L.stl",
                "skirt_mount_side_R.stl",
                "4X M3x18 BHCS"
            ]
        },
        bte_preparation_step15: {
            title: "裙边 4",
            description: `
                <p>按图示将六颗 M3x8 BHCS 螺丝安装到裙边固定座中，并用 M3 锤头螺母固定。现在只拧入约 2-3 圈即可。</p>
            `,
            parts: [
                "6x M3x8 BHCS",
                "6x M3 锤头螺母"
            ]
        },
        bte_preparation_step16: {
            title: "顶部 1",
            description: `
                <p>按图示各用四颗 M3x8 BHCS 螺丝，将所有通风口固定到顶板上，确保它们朝向一致。</p>
            `,
            parts: [
                "6x bottom_bracket.stl",
                "6x top bracket.stl",
                "24x M3x8 BHCS"
            ]
        },
        bte_preparation_step17: {
            title: "顶部 2",
            description: `
                <p>注意朝向，按图示将 3mm 泡棉胶带（裁剪至合适长度）贴到顶板上。</p>
            `,
            parts: []
        },
        bte_preparation_step18: {
            title: "锁扣",
            description: `
                <p>将一颗 M3X50 SHCS 螺丝装入锁扣。不要拧得过紧，因为它是拧入塑料的，仅作为打印件的加强。按图示用一颗 M3x12 BHCS 螺丝将锁扣夹在零件 A 和 B 之间。</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=bte'">BTE 菜单</button>
                    <button onclick="location.href='manual.html?manual=bte&subManual=frame'">下一章节</button>
                </div>
            `,
            parts: [
                "part_a.stl",
                "part_b.stl",
                "latch.stl",
                "1x M3x12 BHCS",
                "1x M3x50 SHCS"
            ]
        },
        bte_frame_step1: {
            title: "角件 1",
            description: `
                <p>从你的 BoxTurtle 上取下一个打印角件，按图示把 M5x16 BHCS 重新装回型材中。</p>
            `,
            parts: []
        },
        bte_frame_step2: {
            title: "前部",
            description: `
                <p>按图示取下前裙边和前下方的 360mm 型材。这根 360mm 型材稍后会在机箱框架中重新使用。</p>
            `,
            parts: []
        },
        bte_frame_step3: {
            title: "立柱 1",
            description: `
                <p>按图示安装交叉钻孔的 360mm 型材，以替换先前取下的打印角件。</p>
            `,
            parts: []
        },
        bte_frame_step4: {
            title: "立柱 2",
            description: `
                <p>用交叉钻孔的 360mm 型材替换剩余的打印角件。</p>
            `,
            parts: []
        },
        bte_frame_step5: {
            title: "型材",
            description: `
                <p>在所有剩余的 220mm 和 360mm 型材中安装 M5x16 BHCS 螺丝。留出约 3-4mm 的螺纹外露，因为它们都要用在盲孔连接中。</p>
                <p><strong>注意：</strong>两根 280mm 型材不装螺丝。</p>
            `,
            parts: []
        },
        bte_frame_step6: {
            title: "侧板",
            description: `
                <p>按图示将两块侧板和一块背板嵌入型材的槽中。</p>
            `,
            parts: []
        },
        bte_frame_step7: {
            title: "顶部型材",
            description: `
                <p>按图示将两根 220mm 和两根 360mm 型材安装到顶部一侧，通过立柱上的交叉钻孔通道把它们拧紧。</p>
            `,
            parts: []
        },
        bte_frame_step8: {
            title: "密封条",
            description: `
                <p>按图示安装橡胶密封条。这些需要裁剪到合适长度。</p>
                <p>如果你不熟悉这种橡胶密封条，这里有一部由 <a href="https://youtu.be/zCHkJ4GP2vg?si=tUG9c85K0GeBjMP5&t=267" target="_blank">LeeMeerie3D 制作的视频</a>，详细讲解了它们的安装方法。</p>
                <p><strong>注意：</strong>装在机箱内侧还是外侧主要取决于个人偏好。装在内侧可以略微减少空气进入机箱的位置，但机箱本身并非设计为气密。你喜欢装哪里就装哪里。</p>
            `,
            parts: []
        },
        bte_frame_step9: {
            title: "门 1",
            description: `
                <p>按图示用盲孔连接将两根 280mm 型材固定到一根 360mm 型材上。</p>
            `,
            parts: []
        },
        bte_frame_step10: {
            title: "门 2",
            description: `
                <p>按图示嵌入相应的面板，并用一根 360mm 型材通过盲孔连接将其锁定到位。</p>
            `,
            parts: []
        },
        bte_frame_step11: {
            title: "门 3",
            description: `
                <p>按图示沿型材内侧四周贴上 3mm 泡棉胶带。这些需要裁剪到合适长度。</p>
            `,
            parts: []
        },
        bte_frame_step12: {
            title: "门 4",
            description: `
                <p>按图示安装橡胶密封条。这些需要裁剪到合适长度。</p>
            `,
            parts: []
        },
        bte_frame_step13: {
            title: "门 5",
            description: `
                <p>按图示在大概位置安装四颗 M3 滚入式螺母。</p>
            `,
            parts: [
                "4x M3 滚入式螺母"
            ]
        },
        bte_frame_step14: {
            title: "门 6",
            description: `
                <p>按图示用两颗 M3x8 BHCS 螺丝安装铰链。再用两颗 M3x12 BHCS 螺丝固定上铰链和盖板。</p>
                <p>先用两颗 M3x18 BHCS 螺丝松松地装上之前组装好的锁扣，稍后需要调整。</p>
                <div class='submanual-nav-buttons'>
                    <button onclick="location.href='manual-sections.html?manual=bte'">BTE 菜单</button>
                    <button onclick="location.href='manual.html?manual=bte&subManual=assembly'">下一章节</button>
                </div>
            `,
            parts: [
                "2x M3x8 BHCS",
                "2x M3x12 BHCS",
                "2x M3x18 BHCS"
            ]
        },
        bte_assembly_step1: {
            title: "滚入式螺母",
            description: `
                <p>按图示在大概位置安装四颗滚入式螺母。</p>
            `,
            parts: [
                "4x M3 滚入式螺母"
            ]
        },
        bte_assembly_step2: {
            title: "裙边",
            description: `
                <p>按图示固定前裙边组件。</p>
            `,
            parts: []
        },
        bte_assembly_step3: {
            title: "下前侧盖板",
            description: `
                <p>按图示用 M5x16 BHCS 螺丝固定下前侧盖板。顶部用一颗 M3x8 BHCS 螺丝固定铰链侧。</p>
            `,
            parts: [
                "2x M5x16 BHCS",
                "1x M3x8 BHCS"
            ]
        },
        bte_assembly_step4: {
            title: "后盖板",
            description: `
                <p>按图示用 M5x16 BHCS 螺丝安装后盖板和底座脚。</p>
                <p><strong>注意：</strong>如果你想使用底板，现在就是装入它的时机，因为它由角盖板固定。</p>
                <p><i><strong>*建议先确认 BoxTurtle 功能正常，再安装底板*</strong></i></p>
            `,
            parts: [
                "2x M5x16 BHCS"
            ]
        },
        bte_assembly_step5: {
            title: "顶板",
            description: `
                <p>按图示用相应的面板卡扣固定顶板。</p>
            `,
            parts: []
        },
        bte_assembly_step6: {
            title: "门准备",
            description: `
                <p>按图示用一颗 M3x8 BHCS 螺丝安装上铰链。</p>
                <p>先用两颗 M3x18 BHCS 螺丝松松地装上零件 c 和 d，稍后需要调整。</p>
            `,
            parts: [
                "1x M3x8 BHCS",
                "2x M3x18 BHCS"
            ]
        },
        bte_assembly_step7: {
            title: "锁扣调整",
            description: `
                <p>将门套到销钉上，把锁扣调整到合适位置，调好后彻底拧紧。为方便进行后续步骤，先取下门。</p>
            `,
            parts: []
        },
        bte_assembly_step8: {
            title: "螺丝盖",
            description: `
                <p>按图示安装螺丝盖。</p>
            `,
            parts: [
                "2x screw_cover_x2.stl",
                "2x [a]_screw_cover_top_x2.stl",
                "2x [a]_screw_cover_logo_x2.stl",
                "1x [a]_top_front_screw_cover_R.stl",
                "1x [a]_top_front_screw_cover_L.stl",
                "1x frame_cover.stl"
            ]
        },
        bte_assembly_step9: {
            title: "PD 密封件",
            description: `
                <p>按图示安装通风口密封件。</p>
                <p>如果你的套件没有附带通风口密封件，或者你是自行采购机箱的，就需要自己做。可以用激光切割机从泡棉板上切出，也可以小心地把泡棉胶带贴在通风口顶部四周。</p>
            `,
            parts: []
        },
        bte_assembly_step10: {
            title: "门 7",
            description: `
                <p>按图示将螺丝盖安装到门组件上。</p>
                <p>将门重新装回机箱上。</p>
            `,
            parts: [
                "lower_cover_door_R.stl"
            ]
        },
        bte_assembly_step11: {
            title: "完成",
            description: `
                <p>通风口盖无需五金件即可在需要处卡入，需要时也很容易取下。</p>
            `,
            parts: []
        }
    },
}
