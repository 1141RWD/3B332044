// --- 1. COMPREHENSIVE CHARACTER ROSTER ---
const players = [
    // --- KARASUNO (烏野) ---
    { 
        team: "karasuno", num: "01", name: "澤村 大地", pos: "WS", img: "照片/澤村 大地.jpg", height: "176.8cm", birthday: "12月31日", 
        food: "醬油拉麵", concern: "頻繁地被教導主任訓話",
        quote: "「不再這時候這一步，又要等到什麼時候！」",
        desc: "烏野高中的主將，有著「不動的基石」之稱。與其說是天才，不如說是用堅實的基礎支撐全隊的防守核心。性格穩重，是球隊的精神支柱，擅長在逆境中安撫隊員並鼓舞士氣。",
        stats: { power: 4, jump: 3, stamina: 3, intellect: 4, technique: 4, speed: 3 }
    },
    { 
        team: "karasuno", num: "02", name: "菅原 孝支", pos: "S", img: "照片/菅原 孝支.jpg", height: "174.3cm", birthday: "6月13日", 
        food: "超辣麻婆豆腐", concern: "很多學弟的身高都比他高",
        quote: "「我的武器是信賴感。」",
        desc: "烏野的副主將，性格溫和但內心堅韌。雖然正選位置被影山取代，但從未放棄，善於觀察場上局勢。上場時能用穩健的托球和笑容改變比賽節奏，被稱為「不屈的舉球員」。",
        stats: { power: 2, jump: 2, stamina: 2, intellect: 4, technique: 4, speed: 2 }
    },
    { 
        team: "karasuno", num: "03", name: "東峰 旭", pos: "WS", img: "照片/東峰 旭.jpg", height: "184.7cm", birthday: "1月1日", 
        food: "豚骨拉麵", concern: "即使說自己是學生，也沒人相信",
        quote: "「不管是幾次，我都要得分！」",
        desc: "烏野的王牌主攻手。外表粗曠留著鬍子，內心卻十分纖細容易緊張（玻璃心）。克服了過去被攔網的陰影后，現在能轟出威力強大的扣球，是烏野得分的重砲手。",
        stats: { power: 5, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 2 }
    },
    { 
        team: "karasuno", num: "04", name: "西谷 夕", pos: "Li", img: "照片/西谷 夕.jpg", height: "159.3cm", birthday: "10月10日", 
        food: "嘎哩嘎哩君(蘇打口味)", concern: "沒有！",
        quote: "「背後就交給我來守護！」",
        desc: "「烏野的守護神」。雖然身高最矮，但存在感極強。擁有天才般的反應神經和接球技術，性格熱血豪爽。當全隊陷入焦慮時，他的一個完美接球就能讓氣氛起死回生。",
        stats: { power: 2, jump: 4, stamina: 5, intellect: 3, technique: 4, speed: 5 }
    },
    { 
        team: "karasuno", num: "05", name: "田中 龍之介", pos: "WS", img: "照片/田中 龍之介.jpg", height: "177.2cm", birthday: "3月3日", 
        food: "菠蘿麵包", concern: "想試著叫一次迷路的女高中生「喂，那邊那位小姐」",
        quote: "「只要平凡的我還有時間仰望星空，還不如拿來跑步。」",
        desc: "烏野的特攻隊長，精神力極強的男人。無論被攔網多少次都不會折斷心智，在比賽膠著時往往能成為突破口。擅長大斜線扣球，是隊內氣氛的帶動者。",
        stats: { power: 5, jump: 3, stamina: 4, intellect: 1, technique: 2, speed: 3 }
    },
    { 
        team: "karasuno", num: "06", name: "緣下 力", pos: "WS", img: "照片/緣下 力.jpg", height: "175.4cm", birthday: "12月26日", food:"海鞘醋", concern:"就算再怎麼睏，早上也會清醒過來", quote:"「我不想逃避。」", desc: "二年級的下任主將候補。曾有逃避練習的過去，回歸後變得沉穩可靠，能冷靜地統率隊伍。", stats: { power: 3, jump: 2, stamina: 3, intellect: 4, technique: 3, speed: 2 } },
    { 
        team: "karasuno", num: "07", name: "成田 一仁", pos: "MB", img: "照片/成田 一仁.jpg", height: "180.2cm", birthday: "8月17日", food:"壽司(雞蛋)", concern:"大家是不是忘了我的名字", quote:"(默默耕耘)", desc: "二年級副攻手。雖然不起眼，但基礎紮實，在主力缺席時能穩定發揮。", stats: { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { 
        team: "karasuno", num: "08", name: "木下 久志", pos: "WS", img: "照片/木下 久志.jpg", height: "174.7cm", birthday: "2月15日", food:"紅薑天婦羅", concern:"想變得更有威嚴", quote:"「我也想戰鬥！」", desc: "二年級生，專注磨練跳躍飄球。渴望為球隊貢獻一份力量。", stats: { power: 2, jump: 2, stamina: 2, intellect: 3, technique: 3, speed: 2 } },
    { 
        team: "karasuno", num: "09", name: "影山 飛雄", pos: "S", img: "照片/影山 飛雄.jpg", height: "180.6cm", birthday: "12月22日", 
        food: "溫泉蛋拌豬肉咖哩", concern: "覺得動物好像討厭他",
        quote: "「留在球場上的，只有贏家以及強者。」",
        desc: "「球場上的王者」。擁有壓倒性的排球天賦、控球能力和對勝利的執著。雖然不擅長人際交流，但與日向相遇後學會了依賴隊友，正從「獨裁的王者」進化為「新球場上的王者」。",
        stats: { power: 4, jump: 4, stamina: 5, intellect: 5, technique: 5, speed: 4 }
    },
    { 
        team: "karasuno", num: "10", name: "日向 翔陽", pos: "MB", img: "照片/日向 翔陽.jpg", height: "162.8cm", birthday: "6月21日", 
        food: "生蛋拌飯", concern: "單手拿不住排球",
        quote: "「我雖然不高，但是… 我能跳！」",
        desc: "最強的「誘餌」。雖然身高矮小技術粗糙，但擁有驚人的速度、彈跳力和體力。依靠本能和影山的托球在場上縱橫馳騁，目標是成為像「小巨人」那樣的選手。",
        stats: { power: 1, jump: 5, stamina: 5, intellect: 1, technique: 1, speed: 5 }
    },
    { 
        team: "karasuno", num: "11", name: "月島 螢", pos: "MB", img: "照片/月島 螢.jpg", height: "188.3cm", birthday: "9月27日", 
        food: "草莓蛋糕", concern: "雖然上了高中，但還有人一直問他的名字怎麼唸",
        quote: "「只不過是擋下了一球，為什麼會這麼高興呢？」",
        desc: "烏野的理智擔當。擁有全隊最高的身高和冷靜的頭腦，擅長「リードブロック (Read Block)」。雖然看似冷淡，但在對抗白鳥澤時展現了對排球的熱情，覺醒成為烏野的防壁。",
        stats: { power: 2, jump: 3, stamina: 3, intellect: 5, technique: 3, speed: 2 }
    },
    { 
        team: "karasuno", num: "12", name: "山口 忠", pos: "MB", img: "照片/山口 忠.jpg", height: "179.5cm", birthday: "11月10日", 
        food: "軟趴趴的炸薯條", concern: "如果有可愛的女生和他說話，他會只想著如何回話而什麼都說不出來",
        quote: "「除了自尊心以外，還需要什麼理由！」",
        desc: "關鍵發球員 (Pinch Server)。雖然是一年級中唯一的非正選，但不想被拋下。苦練跳躍飄球，在關鍵時刻登場，用發球破壞對手的一傳，為烏野創造得分機會。",
        stats: { power: 2, jump: 3, stamina: 2, intellect: 3, technique: 2, speed: 2 } },

    // --- NEKOMA (音駒) ---
    { 
        team: "nekoma", num: "01", name: "黑尾 鐵朗", pos: "MB", img: "照片/黑尾 鐵朗.jpg", height: "187.7cm", birthday: "11月17日", 
        food: "鹽烤秋刀魚", concern: "擺不平睡亂的頭髮",
        quote: "「我們是血液，要順暢無礙地流動。」",
        desc: "音駒高中的主將，擅長「一人時間差」進攻和指揮攔網。性格看似輕浮實則深思熟慮，是典型的策略家。與研磨是青梅竹馬，非常照顧隊友。",
        stats: { power: 3, jump: 3, stamina: 3, intellect: 5, technique: 5, speed: 3 }
    },
    { team: "nekoma", num: "02", name: "海 信行", pos: "WS", img: "照片/海 信行.jpg", height: "176.5cm", birthday: "4月8日", food:"海葡萄", concern:"有些小事記不起來", quote:"「別在意，下一球。」", desc: "音駒的副主將，性格溫和穩重。各項技術都十分紮實，是隊伍中穩定軍心的存在。", stats: { power: 3, jump: 2, stamina: 3, intellect: 4, technique: 4, speed: 2 } },
    { team: "nekoma", num: "03", name: "夜久 衛輔", pos: "Li", img: "照片/夜久 衛輔.jpg", height: "165.2cm", birthday: "8月8日", food:"炒蔬菜", concern:"學弟們很讓人操心", quote:"「接球的話就交給我。」", desc: "音駒的防守核心，實力頂尖的自由球員。擁有極佳的接球技術和判斷力，連烏野的西谷都對他敬佩有加。", stats: { power: 2, jump: 3, stamina: 4, intellect: 4, technique: 5, speed: 4 } },
    { team: "nekoma", num: "04", name: "山本 猛虎", pos: "WS", img: "照片/山本 猛虎.jpg", height: "176.7cm", birthday: "2月22日", food:"炒麵", concern:"想跟女生說話", quote:"「毅力！！」", desc: "音駒的王牌，性格熱血直率，留著醒目的莫霍克頭。在場上充滿氣勢，重視毅力。", stats: { power: 4, jump: 3, stamina: 4, intellect: 2, technique: 3, speed: 3 } },
    { 
        team: "nekoma", num: "05", name: "孤爪 研磨", pos: "S", img: "照片/孤爪 研磨.jpg", height: "169.2cm", birthday: "10月16日", 
        food: "蘋果派", concern: "夏天太熱，冬天太冷",
        quote: "「我沒有特別想贏，但也不想輸。」",
        desc: "音駒的「大腦」。雖然體能一般且不喜歡流汗，但擁有極其敏銳的觀察力和戰術眼光。能冷靜分析對手弱點，像玩遊戲一樣攻略比賽，將對手玩弄於股掌之間。",
        stats: { power: 1, jump: 2, stamina: 1, intellect: 5, technique: 5, speed: 3 }
    },
    { team: "nekoma", num: "06", name: "福永 招平", pos: "WS", img: "照片/福永 招平.jpg", height: "178.3cm", birthday: "9月29日", food:"魷魚絲", concern:"山本太吵了", quote:"(冷笑話)", desc: "平時沉默寡言，但經常能打出路徑刁鑽的扣球得分。想法有時很獨特。", stats: { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 4, speed: 3 } },
    { team: "nekoma", num: "07", name: "犬岡 走", pos: "MB/WS", img: "照片/犬岡 走.jpg", height: "185.3cm", birthday: "11月1日", food:"炸雞", concern:"會吃太多", quote:"「嗚哇！好快！」", desc: "一年級生，性格單純充滿活力。擁有極快的速度和反應能力。", stats: { power: 3, jump: 3, stamina: 4, intellect: 2, technique: 2, speed: 5 } },
    { team: "nekoma", num: "11", name: "灰羽 列夫", pos: "MB", img: "照片/灰羽 列夫.jpg", height: "194cm", birthday: "10月30日", food:"豆皮壽司", concern:"學長們好可怕", quote:"「我是音駒的王牌！」", desc: "日俄混血的一年級新生，擁有得天獨厚的身高和手腳長度。雖然是排球新手，技術粗糙，但天賦驚人。", stats: { power: 4, jump: 4, stamina: 3, intellect: 1, technique: 1, speed: 4 } },
    { team: "nekoma", num: "12", name: "芝山 優生", pos: "Li", img: "照片/芝山 優生.jpg", height: "162.5cm", birthday: "12月16日", food:"蛋包飯", concern:"接球還不夠好", quote:"「我會努力的！」", desc: "一年級的自由球員。性格較為膽小缺乏自信，但基本功紮實。", stats: { power: 1, jump: 2, stamina: 3, intellect: 3, technique: 3, speed: 3 } },

    // --- DATEKO (伊達工) ---
    { team: "dateko", num: "01", name: "青根 高伸", pos: "MB", img: "照片/青根 高伸.jpg", height: "191.8cm", birthday: "8月13日", food:"栗金團", concern:"搭電車時沒有人敢坐在他旁邊", quote:"(無言地點頭)", desc: "伊達工「鐵壁」的核心。沉默寡言，擁有驚人的反應與力量，是所有主攻手的噩夢。新體制中背號改為1號，是隊伍的王牌。", stats: { power: 5, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 4 } },
    { team: "dateko", num: "02", name: "二口 堅治", pos: "WS", img: "照片/二口 堅治.jpg", height: "184.2cm", birthday: "11月10日", food:"酸梅軟糖", concern:"要當主將好麻煩", quote:"「敲碎他們！」", desc: "伊達工業的新主將，性格有些惡劣喜歡挑釁。繼承了「鐵壁」的意志，帶領新隊伍前進。", stats: { power: 4, jump: 3, stamina: 3, intellect: 4, technique: 3, speed: 3 } },
    { team: "dateko", num: "07", name: "黃金川 貫至", pos: "S", img: "照片/黃金川 貫至.jpg", height: "191.5cm", birthday: "7月9日", food:"豬排飯", concern:"托球好難", quote:"「我會擋下來的！」", desc: "一年級的大型新人舉球員。雖然技術粗糙，但擁有舉球員中少見的巨大身高優勢，能構築出超高的攔網牆。", stats: { power: 3, jump: 3, stamina: 3, intellect: 1, technique: 1, speed: 3 } },
    { team: "dateko", num: "03", name: "小原 豐", pos: "WS", img: "照片/小原 豐.jpg", height: "186.2cm", birthday: "12月15日", food:"照燒雞肉", concern:"雖然是二年級了，但存在感還是有點低", quote:"「我也能打！」", desc: "伊達工的二年級主攻手。雖然不像二口那樣顯眼，但基本功紮實，是支撐隊伍進攻的重要一員。", stats: { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { team: "dateko", num: "08", name: "女川 太郎", pos: "WS", img: "照片/女川 太郎.jpg", height: "175.2cm", birthday: "12月14日", food:"杯麵", concern:"媽媽最近買的T恤品味很奇怪", quote:"「好球！」", desc: "二年級主攻手。性格溫和，在場上能冷靜處理球。給了青根撒隆巴斯的那個隊友。", stats: { power: 3, jump: 2, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { team: "dateko", num: "13", name: "作並 浩輔", pos: "Li", img: "照片/作並 浩輔.jpg", height: "164cm", birthday: "8月30日", food:"柿種", concern:"太矮了", quote:"「我來！」", desc: "一年級自由球員，性格認真努力。雖然經驗尚淺，但在充滿巨人的伊達工隊伍中，以靈活的防守支援著隊伍。", stats: { power: 2, jump: 2, stamina: 3, intellect: 3, technique: 3, speed: 4 } },
    { team: "dateko", num: "01", name: "鎌先 靖志", pos: "MB", img: "照片/鎌先 靖志.jpg", height: "186.8cm", birthday: "11月8日", food:"白豆沙", concern:"肌肉練得不夠", quote:"「喝啊！」", desc: "前任三年級副攻手（已引退）。肌肉發達，性格熱血衝動。擅長利用力量進行快攻，與二口經常鬥嘴。", stats: { power: 4, jump: 3, stamina: 4, intellect: 2, technique: 2, speed: 3 } },
    { team: "dateko", num: "02", name: "茂庭 要", pos: "S", img: "照片/茂庭 要.jpg", height: "176.3cm", birthday: "9月6日", food:"栗子飯", concern:"學弟們太難管了", quote:"「交給你們了！」", desc: "前任伊達工主將（已引退）。性格溫和，經常需要安撫隊內個性強烈的學弟們。雖然技術不是頂尖，但以穩健的調度帶領隊伍。", stats: { power: 2, jump: 2, stamina: 3, intellect: 3, technique: 3, speed: 2 } },
    { team: "dateko", num: "03", name: "笹谷 武仁", pos: "WS", img: "照片/笹谷 武仁.jpg", height: "174.3cm", birthday: "2月10日", food:"笹蒲鉾(魚板)", concern:"被學弟說有「大叔」的氣質", quote:"「別慌！」", desc: "前任三年級主攻手（已引退）。技術全面且穩定的選手，在場上總是默默地支持著隊伍，是被大家信賴的前輩。", stats: { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 4, speed: 3 } },

    // --- SEIJOH (青城) ---
    { 
        team: "seijoh", num: "01", name: "及川 徹", pos: "S", img: "照片/及川 徹.jpg", height: "184.3cm", birthday: "7月20日", 
        food: "牛奶麵包", concern: "跟烏野的經理說話時被無視了",
        quote: "「才能是可以栽培開花的，球感是可以磨練的。」",
        desc: "青葉城西的主將，及川的青梅竹馬兼吐槽役。性格剛毅，深受隊友信賴。他的扣球充滿力量與決心，是在精神上支撐著青城與及川的重要支柱。",
        stats: { power: 5, jump: 3, stamina: 4, intellect: 4, technique: 5, speed: 3 }
    },
    { team: "seijoh", num: "02", name: "松川 一靜", pos: "MB", img: "照片/松川 一靜.jpg", height: "187.9cm", birthday: "3月1日", food:"起司漢堡排", concern:"不穿制服看起來像大人", quote:"「別讓他太好過。」", desc: "擅長利用身高和經驗進行「封鎖式攔網」，限制對手王牌的進攻路線。", stats: { power: 3, jump: 2, stamina: 3, intellect: 4, technique: 4, speed: 3 } },
    { team: "seijoh", num: "03", name: "花卷 貴大", pos: "WS", img: "照片/花卷 貴大.jpg", height: "184.7cm", birthday: "1月27日", food:"泡芙", concern:"臂力輸給岩泉", quote:"(比YA)", desc: "技術全面的主攻手，在隊伍中經常擔任穩定軍心的角色。也能進行高品質的托球。", stats: { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 4, speed: 3 } },
    { 
        team: "seijoh", num: "04", name: "岩泉 一", pos: "WS", img: "照片/岩泉 一.jpg", height: "179.3cm", birthday: "6月10日", 
        food: "炸豆腐", concern: "還差1cm就180cm了",
        quote: "「你就是王牌！」",
        desc: "青城的王牌，及川的青梅竹馬兼吐槽役。性格剛毅，深受隊友信賴。他的扣球充滿力量與決心，是在精神上支撐著青城與及川的重要支柱。",
        stats: { power: 5, jump: 4, stamina: 4, intellect: 3, technique: 3, speed: 3 }
    },
    { team: "seijoh", num: "06", name: "矢巾 秀", pos: "S", img: "照片/矢巾 秀.jpg", height: "181.9cm", birthday: "3月3日", food:"拉麵", concern:"前輩們畢業後怎麼辦", quote:"「把球交給我！」", desc: "二年級舉球員。在關鍵時刻能展現出前輩的擔當。", stats: { power: 2, jump: 2, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { team: "seijoh", num: "07", name: "渡 親治", pos: "Li", img: "照片/渡 親治.jpg", height: "171.2cm", birthday: "4月3日", food:"水煮蛋", concern:"想再長高一點", quote:"「我來接！」", desc: "少數能熟練進行後排托球參與進攻的自由球員，增加了青城戰術的多樣性。", stats: { power: 2, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { team: "seijoh", num: "12", name: "金田一 勇太郎", pos: "MB", img: "照片/金田一 勇太郎.jpg", height: "189.2cm", birthday: "6月6日", food:"烤玉米", concern:"班上的女生說他的頭像辣韮", quote:"「我會證明我比較強。」", desc: "擁有優秀的身高，擅長高點快攻。因為過去的經歷對影山抱有複雜的情感。", stats: { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { team: "seijoh", num: "13", name: "國見 英", pos: "WS", img: "照片/國見 英.jpg", height: "182.8cm", birthday: "3月25日", food:"鹽味焦糖", concern:"上課時保持清醒好累", quote:"「只要有效率就好。」", desc: "球風聰明冷靜，不喜歡無謂的浪費體力，常在比賽後段發揮真正的實力。", stats: { power: 3, jump: 2, stamina: 3, intellect: 5, technique: 4, speed: 3 } },
    { team: "seijoh", num: "16", name: "京谷 賢太郎", pos: "WS", img: "照片/京谷 賢太郎.jpg", height: "178.8cm", birthday: "12月7日", food:"炸雞塊", concern:"Lawson的炸雞君新口味", quote:"(低吼)", desc: "被稱為「狂犬」。性格暴躁，但擁有極強的身體素質和爆發力。擅長小斜線扣球。", stats: { power: 5, jump: 4, stamina: 4, intellect: 1, technique: 2, speed: 4 } },

    // --- SHIRATORIZAWA (白鳥澤) ---
    { 
        team: "shiratorizawa", num: "01", name: "牛島 若利", pos: "OP", img: "照片/牛島 若利.jpg", height: "189.5cm", birthday: "8月13日", 
        food: "林氏牛肉蓋飯", concern: "沒有",
        quote: "「即使再強的幼苗，若不種在肥沃的土壤也無法開花。」",
        desc: "「絕對王者」，日本青年隊代表。擁有罕見的左撇子重砲和壓倒性的體格。堅信力量與高度就是一切，他的扣球能輕易粉碎對手的防守。",
        stats: { power: 5, jump: 4, stamina: 5, intellect: 3, technique: 3, speed: 3 }
    },
    { team: "shiratorizawa", num: "03", name: "瀨見 英太", pos: "S", img: "照片/瀨見 英太.jpg", height: "179.5cm", birthday: "11月11日", food:"鐵火卷", concern:"想在比賽中多上場", quote:"「看著吧！」", desc: "擁有威力強大的跳躍發球。經常作為關鍵發球員上場。", stats: { power: 4, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { team: "shiratorizawa", num: "04", name: "大平 獅音", pos: "WS", img: "照片/大平 獅音.jpg", height: "182.7cm", birthday: "10月30日", food:"鯖魚味噌煮", concern:"被說長得像佛祖", quote:"「穩紮穩打。」", desc: "擁有極強的接發球能力，是白鳥澤防守體系中重要的一環。", stats: { power: 4, jump: 3, stamina: 3, intellect: 3, technique: 4, speed: 3 } },
    { 
        team: "shiratorizawa", num: "05", name: "天童 覺", pos: "MB", img: "照片/天童 覺.jpg", height: "187.7cm", birthday: "5月20日", 
        food: "巧克力冰淇淋", concern: "周圍的人說他不看氣氛",
        quote: "「今天我的狀態是120%！」",
        desc: "「猜測攔網的怪物 (Guess Monster)」。依靠直覺進行賭博式攔網，性格捉摸不定，喜歡用言語干擾對手。只要被他猜中，攔網就像銅牆鐵壁一般。",
        stats: { power: 2, jump: 3, stamina: 3, intellect: 4, technique: 4, speed: 4 }
    },
    { team: "shiratorizawa", num: "08", name: "五色 工", pos: "WS", img: "照片/五色 工.jpg", height: "181.5cm", birthday: "8月22日", food:"比目魚緣側", concern:"被牛島前輩誇獎了(驚)", quote:"「我才是王牌！」", desc: "一年級的王牌候補，性格單純直率。擅長直線扣球。", stats: { power: 4, jump: 3, stamina: 3, intellect: 2, technique: 4, speed: 3 } },
    { team: "shiratorizawa", num: "10", name: "白布 賢二郎", pos: "S", img: "照片/白布 賢二郎.jpg", height: "174.8cm", birthday: "5月4日", food:"吻仔魚", concern:"身高還想再長", quote:"「最華麗的托球是...」", desc: "為了能托球給牛島而考入白鳥澤。甘願隱藏自己的鋒芒，致力於為牛島提供最舒適的托球。", stats: { power: 2, jump: 2, stamina: 3, intellect: 4, technique: 4, speed: 3 } },
    { 
        team: "shiratorizawa", num: "12", name: "川西 太一", pos: "MB", img: "照片/川西 太一.jpg", height: "188.3cm", birthday: "4月15日", 
        food: "壽喜燒", concern: "好像有點花粉症", 
        quote: "「我會跟上的。」", 
        desc: "二年級副攻手。與天童的直覺攔網不同，他擅長冷靜的「リードブロック (Read Block)」。雖然不如天童顯眼，但作為穩定的防守一角，能紮實地執行攔網任務。", 
        stats: { power: 3, jump: 3, stamina: 4, intellect: 4, technique: 3, speed: 3 } 
    },
    { team: "shiratorizawa", num: "14", name: "山形 隼人", pos: "Li", img: "照片/山形 隼人.jpg", height: "174.3cm", birthday: "2月14日", food:"海膽", concern:"要留級了", quote:"「接起來了！」", desc: "性格積極充滿野性。在場上憑藉著直覺和爆發力救起各種困難的球。", stats: { power: 2, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 4 } },

    // --- INARIZAKI (稻荷崎) ---
    { team: "inarizaki", num: "01", name: "北 信介", pos: "WS", img: "照片/北 信介.jpg", height: "175.2cm", birthday: "7月5日", food:"豆腐漢堡排", concern:"祖母的腰痛", quote:"「我不做沒把握的事。」", desc: "稻荷崎高中的主將，被稱為「絕對的規律」。在場上能以極度的冷靜和正確性穩定軍心。", stats: { power: 3, jump: 2, stamina: 3, intellect: 5, technique: 4, speed: 3 } },
    { team: "inarizaki", num: "02", name: "大耳 練", pos: "MB", img: "照片/大耳 練.jpg", height: "191.5cm", birthday: "4月17日", food:"白飯", concern:"最近有點胖了", quote:"(無言)", desc: "身材高大。擁有優秀的攔網判斷能力，擅長像牆壁一樣封鎖對手。", stats: { power: 4, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { team: "inarizaki", num: "04", name: "尾白 阿蘭", pos: "WS", img: "照片/尾白 阿蘭.jpg", height: "184.7cm", birthday: "4月4日", food:"餅乾", concern:"吐槽役太累了", quote:"「別小看我們。」", desc: "稻荷崎的王牌，全國排名前五的主攻手。擁有驚人的力量和彈跳力。", stats: { power: 5, jump: 4, stamina: 4, intellect: 3, technique: 3, speed: 3 } },
    { team: "inarizaki", num: "05", name: "銀島 結", pos: "WS", img: "照片/銀島 結.jpg", height: "180.3cm", birthday: "8月21日", food:"漢堡", concern:"感冒剛好", quote:"「好球！」", desc: "擅長利用時間差進行攻擊。屬於發揮穩定、不可或缺的戰力。", stats: { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
     { 
        team: "inarizaki", num: "07", name: "宮 侑", pos: "S", img: "照片/宮 侑.jpg", height: "183.6cm", birthday: "10月5日", 
        food: "金槍魚肚", concern: "指尖稍微有點乾燥",
        quote: "「連我這個托球都打不好的傢伙就是廢物。」",
        desc: "高中最強舉球員之一，「高校NO.1 Setter」。掌握跳發與跳飄的二刀流發球。雖然性格惡劣，但對排球無比真誠，致力於為攻手提供最完美的托球。",
        stats: { power: 3, jump: 4, stamina: 4, intellect: 5, technique: 5, speed: 4 }
    },
    { team: "inarizaki", num: "10", name: "角名 倫太郎", pos: "MB", img: "照片/角名 倫太郎.jpg", height: "185.7cm", birthday: "1月25日", food:"果凍", concern:"不想動", quote:"「這球會進。」", desc: "擅長利用強大的軀幹核心力量進行廣角扣球，能繞過攔網得分。", stats: { power: 3, jump: 3, stamina: 3, intellect: 4, technique: 5, speed: 3 } },
    { 
        team: "inarizaki", num: "11", name: "宮 治", pos: "OP", img: "照片/宮 治.jpg", height: "183.8cm", birthday: "10月5日", 
        food: "飯糰", concern: "人生最後一天要吃什麼",
        quote: "「只要稍微有點空隙，我就會打過去。」",
        desc: "宮侑的雙胞胎弟弟。相較於哥哥更加冷靜穩重，攻守兼備。與哥哥有著心靈感應般的默契，能使出令人眼花繚亂的「雙子快攻」。",
        stats: { power: 4, jump: 4, stamina: 4, intellect: 4, technique: 4, speed: 4 }
    },
    { 
        team: "inarizaki", num: "14", name: "理石 平介", pos: "WS", img: "照片/理石 平介.jpg", height: "185.2cm", birthday: "10月17日",
        food: "照燒雞肉披薩", concern: "比賽前會緊張到睡不著",
        quote: "「機會！」",
        desc: "稻荷崎的一年級生。雖然在強大的前輩面前上場機會不多，但在對烏野戰中作為關鍵發球員登場，克服了緊張，發出了改變局勢的一球。",
        stats: { power: 4, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 }
    },
    { team: "inarizaki", num: "15", name: "赤木 路成", pos: "Li", img: "照片/赤木 路成.jpg", height: "174.2cm", birthday: "4月12日", food:"章魚燒", concern:"皮膚乾燥", quote:"「救起來了！」", desc: "反應速度極快。擅長在混亂中救起看似不可能的球。", stats: { power: 2, jump: 3, stamina: 4, intellect: 3, technique: 4, speed: 4 } },

    // --- FUKURODANI (梟谷) ---
    { team: "fukurodani", num: "02", name: "鷲尾 辰生", pos: "MB", img: "照片/鷲尾 辰生.jpg", height: "188cm", birthday: "8月29日", food:"烤紅薯", concern:"最近表情肌有點僵硬", quote:"「防守吧。」", desc: "性格沉穩冷靜，攔網技術紮實，是隊伍防守端可靠的基石。", stats: { power: 4, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { team: "fukurodani", num: "03", name: "猿杙 大和", pos: "WS", img: "照片/猿杙 大和.jpg", height: "181.5cm", birthday: "8月2日", food:"蘿蔔泥", concern:"想要更有特點", quote:"「笑一個嘛。」", desc: "發球和扣球能力都相當穩定，在場上總是保持著冷靜的笑容。", stats: { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 } },
    { 
        team: "fukurodani", num: "04", name: "木兔 光太郎", pos: "WS", img: "照片/木兔 光太郎.jpg", height: "185.3cm", birthday: "9月20日", 
        food: "烤肉", concern: "怎麼寫漢字的「憂鬱」？",
        quote: "「HEY HEY HEY ！」",
        desc: "全國排名前五的主攻手，梟谷的主將。性格天真爛漫，情緒起伏極大（消極模式很麻煩）。但在狀態好時無人能擋，能讓敵我都為之振奮的超級球星。",
        stats: { power: 5, jump: 4, stamina: 5, intellect: 1, technique: 3, speed: 4 }
    },
    { 
        team: "fukurodani", num: "05", name: "赤葦 京治", pos: "S", img: "照片/赤葦 京治.jpg", height: "182.3cm", birthday: "12月5日", 
        food: "油菜花辛辣涼拌", concern: "還想要再強一點的體力",
        quote: "「道就由我來開闢。」",
        desc: "梟谷的副主將，最懂木兔的舉球員。性格冷靜理智，總是能完美處理木兔的情緒問題，並在場上做出最合理的判斷，是梟谷穩定的控制塔。",
        stats: { power: 3, jump: 4, stamina: 4, intellect: 4, technique: 4, speed: 4 }
    },
    { team: "fukurodani", num: "07", name: "木葉 秋紀", pos: "WS", img: "照片/木葉 秋紀.jpg", height: "178.8cm", birthday: "9月30日", food:"天婦羅", concern:"木兔的弱點太多了", quote:"「真是的，那個單細胞。」", desc: "各項技術都十分全面的「全能型選手」。經常負責吐槽木兔。", stats: { power: 3, jump: 3, stamina: 3, intellect: 4, technique: 4, speed: 3 } },
    { team: "fukurodani", num: "11", name: "小見 春樹", pos: "Li", img: "照片/小見 春樹.jpg", height: "164.7cm", birthday: "1月23日", food:"蝦", concern:"想長高", quote:"「交給我！」", desc: "性格開朗充滿活力。在場上反應迅速，擅長救起各種險球。", stats: { power: 2, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 4 } },
    { 
        team: "fukurodani", num: "12", name: "尾長 涉", pos: "MB", img: "照片/尾長 涉.jpg", height: "191.3cm", birthday: "4月14日", 
        food: "布丁", concern: "有些擔心能不能跟上前輩們的節奏", 
        quote: "「我會努力的！」", 
        desc: "梟谷的一年級副攻手。雖然平時話不多，性格溫和，但擁有超過190公分的優越身高。在強者如雲的梟谷中，是備受期待的未來防守核心。", 
        stats: { power: 3, jump: 2, stamina: 3, intellect: 3, technique: 3, speed: 3 } 
    },

    // --- KAMOMEDAI (鷗台) ---
    { team: "kamomedai", num: "05", name: "星海 光來", pos: "WS", img: "照片/星海 光來.jpg", height: "169cm", birthday: "4月16日", food:"海苔卷", concern:"總是被當成小學生", quote:"「我就是現代的小巨人！」", desc: "被稱為「現代的小巨人」。雖然矮小，但全能無死角。跳躍力、技術、力量皆為頂尖。", stats: { power: 3, jump: 5, stamina: 5, intellect: 4, technique: 5, speed: 4 } },
    { team: "kamomedai", num: "06", name: "晝神 幸郎", pos: "MB", img: "照片/晝神 幸郎.jpg", height: "190cm", birthday: "2月3日", food:"具多麵包", concern:"被說眼睛沒笑", quote:"「別著急。」", desc: "被稱為「不動的晝神」。擁有極度冷靜的心態，實施最理性的攔網。", stats: { power: 3, jump: 3, stamina: 3, intellect: 5, technique: 5, speed: 3 } },

    // --- ITACHIYAMA (井闥山) ---
    { 
        team: "itachiyama", num: "10", name: "佐久早 聖臣", pos: "WS", img: "照片/佐久早 聖臣.jpg", height: "192.3cm", birthday: "3月20日",
        food: "梅干", concern: "討厭人多的地方",
        quote: "「我討厭半途而廢。」",
        desc: "井闥山學院的王牌，全國三大主攻手之一。擁有異常柔軟的手腕，能打出極其刁鑽的旋轉球。極度潔癖，性格消極但實力深不可測。",
        stats: { power: 5, jump: 4, stamina: 4, intellect: 4, technique: 5, speed: 3 }
    },
    { 
        team: "itachiyama", num: "13", name: "古森 元也", pos: "Li", img: "照片/古森 元也.jpg", height: "180cm", birthday: "7月30日",
        food: "不知道", concern: "沒有",
        quote: "「放鬆點。」",
        desc: "高校No.1的自由球員。擁有對於自由球員來說相當高大的身材和極高的運動能力。性格開朗，與佐久早形成鮮明對比。",
        stats: { power: 3, jump: 3, stamina: 5, intellect: 4, technique: 5, speed: 4 }
    }
];

const posData = {
    "WS-F": { title: "WS: Wing Spiker (Front)", fullname: "主攻手 (前排左)", desc: "通常是隊伍的主要得分點，負責處理調整球和進行強攻。" },
    "MB": { title: "MB: Middle Blocker", fullname: "攔中手 (前排中)", desc: "負責執行快攻吸引攔網，並作為防守第一線的核心攔網手。" },
    "S-OP": { title: "S / OP: Setter/Opposite", fullname: "舉球/舉對 (前排右)", desc: "若為S則是進攻組織者；若為OP則是右側強攻點，這位置攔網責任也重。" },
    "WS-B": { title: "WS: Wing Spiker (Back)", fullname: "主攻手 (後排左)", desc: "在後排時負責大範圍的接發球與防守，必要時進行後排進攻。" },
    "Li": { title: "Li: Libero", fullname: "自由球員 (後排中)", desc: "專職防守的球員，身穿不同球衣，負責指揮後排防守，不可發球或攻擊。" },
    "OP-S": { title: "OP / S: Serving Position", fullname: "舉對/舉球 (後排右/發球)", desc: "輪轉到此位置的球員負責發球。通常是OP或S的防守起始位置。" }
};

const schoolData = {
    karasuno: { motto: "飛べ", logo: "烏" },
    nekoma: { motto: "繋げ", logo: "貓" },
    seijoh: { motto: "コートを制す", logo: "葉" },
    fukurodani: { motto: "一球入魂", logo: "梟" },
    shiratorizawa: { motto: "強者であれ", logo: "鷲" },
    inarizaki: { motto: "思い出なんかいらん", logo: "狐" },
    itachiyama: { motto: "最強", logo: "鼬" },
    dateko: { motto: "伊達の鉄壁", logo: "壁" },
    kamomedai: { motto: "習慣は第二の天性なり", logo: "鷗" }
};

// --- 2. HERO MARQUEE (Updated) ---

function initHeroMarquee() {
    const bgContainer = document.querySelector('.hero-grid-bg');
    if (!bgContainer) return;

    bgContainer.innerHTML = '';

    // 左側柱子圖片列表 (1,2,3,4)
    const leftImages = [1, 2, 3, 4];
    // 右側柱子圖片列表 (5,6,7,8)
    const rightImages = [5, 6, 7, 8];

    // --- 1. 建立左側柱子 ---
    const leftCol = document.createElement('div');
    leftCol.className = 'marquee-column scroll-up'; // 往上跑
    
    // 重複產生圖片以確保無縫循環 (4張圖 x 4次重複)
    for (let i = 0; i < 4; i++) {
        leftImages.forEach(num => {
            const img = document.createElement('img');
            img.src = `照片/0${num}.jpg`; // --- 更新圖片路徑 ---
            img.className = 'marquee-img';
            img.alt = `Visual ${num}`;
            // FIX: Hide broken image if file missing
            img.onerror = function() { this.style.display = 'none'; };
            leftCol.appendChild(img);
        });
    }
    bgContainer.appendChild(leftCol);

    // --- 2. 建立中間固定圖片 (10.jpg) ---
    const centerBox = document.createElement('div');
    centerBox.className = 'hero-center-img-box';
    const centerImg = document.createElement('img');
    centerImg.src = '照片/10.jpg'; // --- 更新圖片路徑 ---
    centerImg.className = 'center-static-img';
    centerImg.alt = 'Center Visual';
    centerImg.onerror = function() { this.style.opacity = '0'; };
    centerBox.appendChild(centerImg);
    bgContainer.appendChild(centerBox);

    // --- 3. 建立右側柱子 ---
    const rightCol = document.createElement('div');
    // MODIFIED: Changed to 'scroll-down' for visual contrast
    rightCol.className = 'marquee-column scroll-down'; 
    
    // 重複產生圖片
    for (let i = 0; i < 4; i++) {
        rightImages.forEach(num => {
            const img = document.createElement('img');
            img.src = `照片/0${num}.jpg`; // --- 更新圖片路徑 ---
            img.className = 'marquee-img';
            img.alt = `Visual ${num}`;
            img.onerror = function() { this.style.display = 'none'; };
            rightCol.appendChild(img);
        });
    }
    bgContainer.appendChild(rightCol);
}

// 頁面載入時初始化
window.addEventListener('DOMContentLoaded', () => {
    initHeroMarquee();
    initSearch(); // NEW: Initialize search
    initScrollTop(); // NEW: Initialize scroll to top
});

// 進場動畫：整頁滑動 (Slide Up)
function enterSite() {
    const btn = document.querySelector('.enter-btn');
    if(btn) btn.disabled = true; // Prevent double clicks

    // 1. 觸發白光閃爍
    document.getElementById('impactFlash').classList.add('active');
    
    // 2. 整體封面向上滑出，露出下方內容
    document.getElementById('hero').classList.add('slide-out');
    document.getElementById('mainApp').classList.add('active');
    
    // 移除閃光
    setTimeout(() => { 
        document.getElementById('impactFlash').classList.remove('active'); 
    }, 800);
}


// --- 3. MAIN APP LOGIC (ORIGINAL FUNCTIONS) ---

function switchTab(tabName, btnEl) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    btnEl.classList.add('active');
    document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active'));
    document.getElementById('tab-' + tabName).classList.add('active');
    // FIX: Timeout ensures scroll happens after layout paint on mobile
    setTimeout(() => window.scrollTo(0, 0), 0);
    if(tabName === 'roster') backToRoster();
}

function openSongs() {
    const modal = document.getElementById('songModal');
    modal.style.display = 'flex';
    setTimeout(() => { modal.classList.add('active'); }, 10);
}

// Helper: Open URL in new tab
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}

// --- Anime Scroll Logic ---
function scrollAnime(direction) {
    const gallery = document.getElementById('animeGallery');
    const scrollAmount = 300; // Adjust scroll distance
    gallery.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}

// --- Roster Logic ---
const rosterGrid = document.getElementById('rosterGrid');
const listView = document.getElementById('roster-list-view');
const detailView = document.getElementById('roster-detail-view');
const schoolCard = document.getElementById('schoolInfoCard');
const schoolMotto = document.getElementById('schoolMotto');
const schoolLogo = document.getElementById('schoolLogo');
let savedScroll = 0;
let currentTeamFilter = 'all'; // State to track team
let currentSearchQuery = ''; // State to track search

// NEW: Search Initialization
function initSearch() {
    const tabRoster = document.getElementById('roster-list-view');
    const schoolTabs = document.querySelector('.school-tabs');
    
    if(tabRoster && schoolTabs) {
        // Create search container
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = '搜尋球員名字... (例如: 日向)';
        input.className = 'search-input';
        
        input.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.toLowerCase();
            // Reset team filter to 'all' if user starts searching to find anyone
            if(currentSearchQuery.length > 0 && currentTeamFilter !== 'all') {
                // Optional: keep team filter active? 
                // Let's allow filtering within a team.
            }
            renderRoster();
        });

        searchContainer.appendChild(input);
        
        // Insert before the school tabs
        tabRoster.insertBefore(searchContainer, schoolTabs);
    }
}

function renderRoster() {
    rosterGrid.innerHTML = '';
    
    // Filter logic: Match Team AND Match Name
    const target = players.filter(p => {
        const matchTeam = currentTeamFilter === 'all' || p.team === currentTeamFilter;
        const matchName = p.name.includes(currentSearchQuery) || p.name.includes(currentSearchQuery); // Simple substring match
        return matchTeam && matchName;
    });

    if(target.length === 0) {
        rosterGrid.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #666;">沒有找到符合的球員。</div>';
        return;
    }

    target.forEach(p => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.onclick = () => showPlayerDetail(players.indexOf(p));
        card.innerHTML = `
            <img src="${p.img}" class="pc-img" alt="${p.name}">
            <div class="manga-overlay"></div>
            <div class="pc-info"><div class="pc-num">${p.num}</div><div class="pc-name">${p.name}</div><div class="pc-pos">${p.pos}</div></div>
        `;
        rosterGrid.appendChild(card);
    });
}

function filterTeam(team, btn, color) {
    currentTeamFilter = team; // Update state
    
    document.documentElement.style.setProperty('--theme-color', color);
    document.querySelectorAll('.school-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    schoolCard.style.animation = 'none';
    schoolCard.offsetHeight; 
    schoolCard.style.animation = null; 

    if (team === 'all') schoolCard.style.display = 'none';
    else {
        schoolCard.style.display = 'block';
        if(schoolData[team]) { schoolMotto.innerText = schoolData[team].motto; schoolLogo.innerText = schoolData[team].logo; }
    }
    backToRoster();
    renderRoster(); // Use new render function
}

function showPlayerDetail(index) {
    savedScroll = window.scrollY; // Save current position
    const p = players[index];
    
    // 1. Basic Info
    document.getElementById('detailImg').src = p.img;
    document.getElementById('detailName').innerText = p.name;
    document.getElementById('detailBgName').innerText = p.name.split(' ')[0] || "HQ"; 
    const teamMap = { karasuno: "烏野", nekoma: "音駒", seijoh: "青城", fukurodani: "梟谷", shiratorizawa: "白鳥澤", inarizaki: "稻荷崎", itachiyama: "井闥山", dateko: "伊達工", kamomedai: "鷗台" };
    document.getElementById('detailTeam').innerText = teamMap[p.team] || p.team.toUpperCase();
    document.getElementById('detailNum').innerText = "#" + p.num;
    document.getElementById('detailPos').innerText = p.pos;
    document.getElementById('detailHeight').innerText = p.height;
    document.getElementById('detailBirthday').innerText = p.birthday;

    // 2. Extra Info
    document.getElementById('detailFood').innerText = p.food || "未知";
    document.getElementById('detailConcern').innerText = p.concern || "排球就是一切！";
    document.getElementById('detailQuote').innerText = p.quote || "「飛べ！」";
    document.getElementById('detailDesc').innerText = p.desc;

    // 3. Render Stats Bars
    const statContainer = document.getElementById('statContainer');
    statContainer.innerHTML = '';
    
    const s = p.stats || { power: 3, jump: 3, stamina: 3, intellect: 3, technique: 3, speed: 3 };
    const labels = { power: "力量", jump: "彈跳", stamina: "體力", intellect: "頭腦", technique: "技術", speed: "速度" };
    
    for (let key in labels) {
        const val = s[key]; // 1 to 5
        const percent = (val / 5) * 100;
        
        const row = document.createElement('div');
        row.className = 'stat-row';
        row.innerHTML = `
            <div class="stat-label">${labels[key]}</div>
            <div class="stat-bar-bg">
                <div class="stat-bar-fill" style="width: 0%"></div>
            </div>
            <div class="stat-val">${val}</div>
        `;
        statContainer.appendChild(row);

        setTimeout(() => {
            row.querySelector('.stat-bar-fill').style.width = percent + '%';
        }, 100);
    }

    listView.style.display = 'none';
    detailView.style.display = 'block';
    
    // --- FIX: Scroll to top to "center" the view ---
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function backToRoster() { 
    detailView.style.display = 'none'; 
    listView.style.display = 'block'; 
    window.scrollTo(0, savedScroll); // Restore position
}
renderRoster();

// --- 2D COURT LOGIC ---
function showPosInfo(key, element) {
    const info = posData[key];
    if(info) {
        document.getElementById('posTitle').innerText = info.title;
        document.getElementById('posFullname').innerText = info.fullname;
        document.getElementById('posDesc').innerHTML = info.desc;
        document.getElementById('posIcon').innerText = key.split('-')[0];
        
        document.querySelectorAll('.court-zone').forEach(z => z.classList.remove('active'));
        element.classList.add('active');
    }
}

// --- GAME LOGIC (WITH HIGH SCORE) ---
let gameState = 'idle';
let cursorVal = 0;
let direction = 1;
let animId;
let score = 0;
let highScore = parseInt(localStorage.getItem('hq-highscore')) || 0; // Load from LS

let gameSpeed = 2.5;
let redZoneWidth = 15;
let redZoneLeft = 42.5;

const cursor = document.getElementById('cursor');
const btn = document.getElementById('actionBtn');
const ball = document.getElementById('serveBall');
const char = document.getElementById('serveChar');
const msg = document.getElementById('gameMsg');
const scoreDisplay = document.getElementById('scoreVal');
const pbRed = document.getElementById('pbRed');
const diffBtns = document.querySelectorAll('.diff-btn');

// Inject High Score Display
function initHighScoreDisplay() {
    const gameWrapper = document.querySelector('.game-wrapper');
    if(gameWrapper) {
        const hsDiv = document.createElement('div');
        hsDiv.className = 'high-score-display';
        hsDiv.innerHTML = `HIGH SCORE: <span class="high-score-val">${highScore}</span>`;
        // Insert after score
        const scoreDiv = document.querySelector('#scoreVal').parentElement;
        scoreDiv.appendChild(hsDiv);
    }
}
// Init immediately
initHighScoreDisplay();

function setDifficulty(level) {
    diffBtns.forEach(b => b.classList.remove('active'));
    document.querySelector(`.diff-btn[data-level="${level}"]`).classList.add('active');

    if (level === 'easy') {
        gameSpeed = 1.5;
        redZoneWidth = 30; redZoneLeft = 35;
    } else if (level === 'normal') {
        gameSpeed = 2.5;
        redZoneWidth = 15; redZoneLeft = 42.5;
    } else if (level === 'hard') {
        gameSpeed = 4.5;
        redZoneWidth = 5; redZoneLeft = 47.5;
    }
    pbRed.style.width = redZoneWidth + '%';
    pbRed.style.left = redZoneLeft + '%';
}
setDifficulty('normal');

btn.addEventListener('click', () => {
    if (gameState === 'idle') {
        gameState = 'serving';
        btn.textContent = "HIT!";
        btn.style.backgroundColor = "#e74c3c";
        
        char.classList.add('jump');
        ball.style.transition = "0.5s ease-out"; 
        ball.style.transform = "translateY(-120px)"; 
        
        msg.classList.remove('show');
        runBar();
    } else if (gameState === 'serving') {
        gameState = 'result';
        cancelAnimationFrame(animId);
        btn.disabled = true;

        let points = 0;
        let text = "";
        let color = "";
        
        const winStart = redZoneLeft;
        const winEnd = redZoneLeft + redZoneWidth;
        const nearMissRange = 15; 

        if (cursorVal >= winStart && cursorVal <= winEnd) {
            text = "SERVICE ACE!!"; color = "#e74c3c"; points = 100;
            ball.style.transition = "0.2s cubic-bezier(0,1,0.5,1)";
            ball.style.transform = "translate(500px, -50px) scale(0.5)";
        } else if (cursorVal >= (winStart - nearMissRange) && cursorVal <= (winEnd + nearMissRange)) {
            text = "NICE SERVE!"; color = "#f1c40f"; points = 50;
            ball.style.transition = "0.4s ease-out";
            ball.style.transform = "translate(300px, 50px) scale(0.8)";
        } else {
            text = "OUT..."; color = "#95a5a6"; points = 0;
            ball.style.transition = "0.5s ease-out";
            ball.style.transform = "translate(100px, 150px)";
            score = 0; // Reset combo on miss? Optional. Let's keep accumulation but reset on miss.
            // Actually usually game over on miss in volleyball serve streak.
            // Let's make it strict: Miss = 0 score.
            score = 0;
        }

        if(points > 0) score += points;
        
        // Update Score UI
        scoreDisplay.textContent = score;

        // Check High Score
        if(score > highScore) {
            highScore = score;
            localStorage.setItem('hq-highscore', highScore);
            const hsVal = document.querySelector('.high-score-val');
            if(hsVal) hsVal.textContent = highScore;
        }

        msg.textContent = text;
        msg.style.color = color;
        msg.classList.add('show');

        setTimeout(resetGame, 2000);
    }
});

function runBar() {
    if(gameState !== 'serving') return;
    cursorVal += gameSpeed * direction; 
    if(cursorVal >= 100) { cursorVal = 100; direction = -1; }
    if(cursorVal <= 0) { cursorVal = 0; direction = 1; }
    cursor.style.left = cursorVal + '%';
    animId = requestAnimationFrame(runBar);
}

function resetGame() {
    cancelAnimationFrame(animId); // FIX: Ensure no zombie loops
    gameState = 'idle';
    btn.disabled = false;
    btn.textContent = "START";
    btn.style.backgroundColor = "var(--theme-color)";
    
    char.classList.remove('jump');
    ball.style.transition = 'none';
    ball.style.transform = "translate(0,0) scale(1)";
    
    msg.classList.remove('show');
    cursorVal = 0;
    direction = 1;
    cursor.style.left = '0%';
}

// --- 5. SCROLL TO TOP LOGIC ---
function initScrollTop() {
    // Create button
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.innerHTML = '&#8679;'; // Arrow up char
    document.body.appendChild(btn);

    // Show/Hide logic
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = 'flex';
        } else {
            btn.style.display = 'none';
        }
    });

    // Click logic
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- ADD TO BE CONTINUED CARD DYNAMICALLY ---
document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('animeGallery');
    if(gallery) {
        const tbcCard = document.createElement('div');
        tbcCard.className = 'anime-card tbc-card'; // Special class for styling
        
        tbcCard.innerHTML = `
            <div class="anime-card-content tbc-content">
                <div class="tbc-text">TO BE<br>CONTINUED</div>
                <div class="loading-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `;
        
        gallery.appendChild(tbcCard);
    }
});