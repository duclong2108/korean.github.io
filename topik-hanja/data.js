const HANJA_DATA = [
{char:"학",hanja:"學",vn:"Học",meaning:"study, learn",tier:"essential",theme:"purple",words:[
{w:"학교",m:"trường học",p:"hak-gyo",en:"school",ex:"학교에 갑니다.|Tôi đi học."},{w:"학생",m:"học sinh",p:"hak-saeng",en:"student"},{w:"학습",m:"học tập",p:"hak-seup",en:"learning"},{w:"학문",m:"học vấn",p:"hang-mun",en:"study/academics"},
{w:"학자",m:"học giả",p:"hak-ja",en:"scholar"},{w:"학기",m:"học kỳ",p:"hak-gi",en:"semester"},{w:"학년",m:"học niên",p:"hang-nyeon",en:"school year/grade"},{w:"학위",m:"học vị",p:"ha-gwi",en:"academic degree"},
{w:"학과",m:"khoa học (ngành)",p:"hak-gwa",en:"department/major"},{w:"과학",m:"khoa học",p:"gwa-hak",en:"science"},{w:"수학",m:"toán học",p:"su-hak",en:"mathematics"},{w:"문학",m:"văn học",p:"mun-hak",en:"literature"},
{w:"의학",m:"y học",p:"ui-hak",en:"medicine"},{w:"대학",m:"đại học",p:"dae-hak",en:"university"},{w:"입학",m:"nhập học",p:"i-pak",en:"admission/entrance"},{w:"유학",m:"du học",p:"yu-hak",en:"study abroad"},
{w:"독학",m:"tự học",p:"do-kak",en:"self-study"},{w:"철학",m:"triết học",p:"cheol-hak",en:"philosophy"},{w:"법학",m:"pháp học",p:"beop-hak",en:"law (study)"}]},

{char:"생",hanja:"生",vn:"Sinh",meaning:"life, birth, raw",tier:"essential",theme:"green",words:[
{w:"생활",m:"sinh hoạt",p:"saeng-hwal",en:"daily life",ex:"생활이 편리하다.|Sinh hoạt tiện lợi."},{w:"생산",m:"sản xuất",p:"saeng-san",en:"production"},{w:"생명",m:"sinh mệnh",p:"saeng-myeong",en:"life/life force"},
{w:"학생",m:"học sinh",p:"hak-saeng",en:"student"},{w:"인생",m:"nhân sinh",p:"in-saeng",en:"human life"},{w:"발생",m:"phát sinh",p:"bal-saeng",en:"occurrence/outbreak"},{w:"생존",m:"sinh tồn",p:"saeng-jon",en:"survival"},
{w:"생일",m:"sinh nhật",p:"saeng-il",en:"birthday"},{w:"생물",m:"sinh vật",p:"saeng-mul",en:"biology/living thing"},{w:"선생",m:"tiên sinh (thầy giáo)",p:"seon-saeng",en:"teacher"},
{w:"탄생",m:"đản sinh",p:"tan-saeng",en:"birth"},{w:"생태",m:"sinh thái",p:"saeng-tae",en:"ecology"},{w:"위생",m:"vệ sinh",p:"wi-saeng",en:"hygiene"}]},

{char:"사",hanja:"事/社/士",vn:"Sự/Xã/Sĩ",meaning:"matter, society, person",tier:"essential",theme:"pink",words:[
{w:"사회",m:"xã hội",p:"sa-hoe",en:"society",ex:"사회 문제가 심각하다.|Vấn đề xã hội nghiêm trọng."},{w:"사건",m:"sự kiện",p:"sa-geon",en:"incident/case"},{w:"사고",m:"sự cố",p:"sa-go",en:"accident"},
{w:"사업",m:"sự nghiệp",p:"sa-eop",en:"business"},{w:"사실",m:"sự thật",p:"sa-sil",en:"fact/truth"},{w:"회사",m:"công ty (hội xã)",p:"hoe-sa",en:"company"},{w:"역사",m:"lịch sử",p:"yeok-sa",en:"history"},
{w:"사람",m:"người",p:"sa-ram",en:"person"},{w:"사용",m:"sử dụng",p:"sa-yong",en:"use"},{w:"사진",m:"ảnh (tư chân)",p:"sa-jin",en:"photo"},{w:"사장",m:"giám đốc",p:"sa-jang",en:"CEO/president"},
{w:"인사",m:"nhân sự / chào hỏi",p:"in-sa",en:"greeting/personnel"},{w:"감사",m:"cảm tạ",p:"gam-sa",en:"gratitude/appreciation"}]},

{char:"정",hanja:"政/定/情/正",vn:"Chính/Định/Tình/Chính",meaning:"politics, decide, emotion",tier:"essential",theme:"blue",words:[
{w:"정치",m:"chính trị",p:"jeong-chi",en:"politics",ex:"정치에 관심이 있다.|Quan tâm đến chính trị."},{w:"정부",m:"chính phủ",p:"jeong-bu",en:"government"},{w:"정책",m:"chính sách",p:"jeong-chaek",en:"policy"},
{w:"감정",m:"cảm tình",p:"gam-jeong",en:"emotion/feeling"},{w:"결정",m:"quyết định",p:"gyeol-jeong",en:"decision"},{w:"안정",m:"an định",p:"an-jeong",en:"stability"},{w:"정확",m:"chính xác",p:"jeong-hwak",en:"accuracy/exactness"},
{w:"정보",m:"thông tin (tình báo)",p:"jeong-bo",en:"information"},{w:"정리",m:"chỉnh lý",p:"jeong-ri",en:"arrangement/organization"},{w:"정신",m:"tinh thần",p:"jeong-sin",en:"spirit/mind"},
{w:"정상",m:"bình thường / đỉnh",p:"jeong-sang",en:"normal/peak"},{w:"부정",m:"phủ định / bất chính",p:"bu-jeong",en:"denial/injustice"},{w:"고정",m:"cố định",p:"go-jeong",en:"fixation/fixed"},
{w:"예정",m:"dự định",p:"ye-jeong",en:"schedule/plan"},{w:"수정",m:"sửa đổi (tu chỉnh)",p:"su-jeong",en:"modification/revision"}]},

{char:"경",hanja:"經/景/競",vn:"Kinh/Cảnh/Cạnh",meaning:"economy, scenery, compete",tier:"essential",theme:"orange",words:[
{w:"경제",m:"kinh tế",p:"gyeong-je",en:"economy",ex:"경제가 성장하다.|Kinh tế tăng trưởng."},{w:"경험",m:"kinh nghiệm",p:"gyeong-heom",en:"experience"},{w:"경쟁",m:"cạnh tranh",p:"gyeong-jaeng",en:"competition"},
{w:"환경",m:"hoàn cảnh/môi trường",p:"hwan-gyeong",en:"environment"},{w:"경우",m:"trường hợp",p:"gyeong-u",en:"case/scenario"},{w:"경기",m:"kinh khí / thi đấu",p:"gyeong-gi",en:"game/economy"},
{w:"경향",m:"khuynh hướng",p:"gyeong-hyang",en:"tendency/trend"},{w:"경고",m:"cảnh cáo",p:"gyeong-go",en:"warning"},{w:"경영",m:"kinh doanh",p:"gyeong-yeong",en:"management"},
{w:"경력",m:"kinh lịch",p:"gyeong-nyeok",en:"career/experience"},{w:"경비",m:"kinh phí / bảo vệ",p:"gyeong-bi",en:"expenses/guard"}]},

{char:"교",hanja:"敎/交",vn:"Giáo/Giao",meaning:"teach, exchange",tier:"essential",theme:"teal",words:[
{w:"교육",m:"giáo dục",p:"gyo-yuk",en:"education",ex:"교육이 중요하다.|Giáo dục rất quan trọng."},{w:"교사",m:"giáo viên",p:"gyo-sa",en:"teacher"},{w:"교통",m:"giao thông",p:"gyo-tong",en:"traffic/transportation"},
{w:"교환",m:"giao hoán",p:"gyo-hwan",en:"exchange"},{w:"학교",m:"trường học",p:"hak-gyo",en:"school"},{w:"교수",m:"giáo sư",p:"gyo-su",en:"professor"},{w:"교과서",m:"giáo khoa thư",p:"gyo-gwa-seo",en:"textbook"},
{w:"종교",m:"tôn giáo",p:"jong-gyo",en:"religion"},{w:"외교",m:"ngoại giao",p:"oe-gyo",en:"diplomacy"},{w:"교류",m:"giao lưu",p:"gyo-ryu",en:"exchange/interaction"},{w:"교실",m:"giáo thất (lớp học)",p:"gyo-sil",en:"classroom"}]},

{char:"문",hanja:"文/問/門",vn:"Văn/Vấn/Môn",meaning:"writing, question, gate",tier:"essential",theme:"indigo",words:[
{w:"문화",m:"văn hóa",p:"mun-hwa",en:"culture",ex:"한국 문화를 배우다.|Học văn hóa Hàn Quốc."},{w:"문제",m:"vấn đề",p:"mun-je",en:"problem/question"},{w:"문학",m:"văn học",p:"mun-hak",en:"literature"},
{w:"문장",m:"văn chương",p:"mun-jang",en:"sentence"},{w:"질문",m:"chất vấn",p:"jil-mun",en:"question"},{w:"신문",m:"tân văn (báo)",p:"sin-mun",en:"newspaper"},{w:"문서",m:"văn thư",p:"mun-seo",en:"document"},
{w:"논문",m:"luận văn",p:"non-mun",en:"thesis/paper"},{w:"문법",m:"văn pháp (ngữ pháp)",p:"mun-beop",en:"grammar"},{w:"방문",m:"phỏng vấn / thăm",p:"bang-mun",en:"visit"}]},

{char:"인",hanja:"人/認/因",vn:"Nhân/Nhận/Nhân",meaning:"person, recognize, cause",tier:"essential",theme:"red",words:[
{w:"인간",m:"nhân gian",p:"in-gan",en:"human/mankind"},{w:"인구",m:"nhân khẩu",p:"in-gu",en:"population"},{w:"인생",m:"nhân sinh",p:"in-saeng",en:"human life"},{w:"원인",m:"nguyên nhân",p:"won-in",en:"cause"},
{w:"인식",m:"nhận thức",p:"in-sik",en:"recognition/awareness"},{w:"인정",m:"nhận định / công nhận",p:"in-jeong",en:"acknowledgment/recognition"},{w:"개인",m:"cá nhân",p:"gae-in",en:"individual"},
{w:"인기",m:"nhân khí (nổi tiếng)",p:"in-gi",en:"popularity"},{w:"인상",m:"ấn tượng",p:"in-sang",en:"impression/increase"},{w:"인류",m:"nhân loại",p:"il-lyu",en:"humanity"},
{w:"인물",m:"nhân vật",p:"in-mul",en:"person/character"},{w:"인재",m:"nhân tài",p:"in-jae",en:"talented person"}]},

{char:"국",hanja:"國",vn:"Quốc",meaning:"country, nation",tier:"essential",theme:"purple",words:[
{w:"국가",m:"quốc gia",p:"guk-ga",en:"state/nation"},{w:"국민",m:"quốc dân",p:"gung-min",en:"citizen/people"},{w:"국제",m:"quốc tế",p:"guk-je",en:"international"},{w:"외국",m:"ngoại quốc",p:"oe-guk",en:"foreign country"},
{w:"한국",m:"Hàn Quốc",p:"han-guk",en:"Korea"},{w:"국내",m:"quốc nội",p:"gung-nae",en:"domestic"},{w:"국적",m:"quốc tịch",p:"guk-jeok",en:"nationality"},{w:"국어",m:"quốc ngữ",p:"gu-geo",en:"national language/Korean"},
{w:"국립",m:"quốc lập",p:"gung-nip",en:"national (institution)"},{w:"국회",m:"quốc hội",p:"gu-koe",en:"National Assembly"},{w:"전국",m:"toàn quốc",p:"jeon-guk",en:"whole country"}]},

{char:"전",hanja:"全/前/電/戰/傳",vn:"Toàn/Tiền/Điện/Chiến/Truyền",meaning:"all, before, electric, war",tier:"common",theme:"blue",words:[
{w:"전체",m:"toàn thể",p:"jeon-che",en:"the whole"},{w:"이전",m:"dĩ tiền (trước đây)",p:"i-jeon",en:"before/previous"},{w:"전기",m:"điện khí",p:"jeon-gi",en:"electricity/biography"},{w:"전쟁",m:"chiến tranh",p:"jeon-jaeng",en:"war"},
{w:"전통",m:"truyền thống",p:"jeon-tong",en:"tradition"},{w:"전문",m:"chuyên môn",p:"jeon-mun",en:"specialty"},{w:"안전",m:"an toàn",p:"an-jeon",en:"safety"},
{w:"전혀",m:"hoàn toàn",p:"jeon-hyeo",en:"not at all/completely"},{w:"전국",m:"toàn quốc",p:"jeon-guk",en:"nationwide"},{w:"전달",m:"truyền đạt",p:"jeon-dal",en:"delivery/transmission"},
{w:"전시",m:"triển lãm / chiến thời",p:"jeon-si",en:"exhibition/wartime"},{w:"전환",m:"chuyển hoán",p:"jeon-hwan",en:"conversion/transition"}]},

{char:"발",hanja:"發",vn:"Phát",meaning:"emit, develop, start",tier:"common",theme:"orange",words:[
{w:"발전",m:"phát triển",p:"bal-jeon",en:"development"},{w:"발생",m:"phát sinh",p:"bal-saeng",en:"occurrence"},{w:"발표",m:"phát biểu",p:"bal-pyo",en:"presentation/announcement"},{w:"발견",m:"phát hiện",p:"bal-gyeon",en:"discovery"},
{w:"개발",m:"khai phát",p:"gae-bal",en:"development/exploitation"},{w:"출발",m:"xuất phát",p:"chul-bal",en:"departure"},{w:"발달",m:"phát đạt",p:"bal-dal",en:"development/growth"},{w:"발명",m:"phát minh",p:"bal-myeong",en:"invention"},
{w:"폭발",m:"bạo phát (nổ)",p:"pok-bal",en:"explosion"},{w:"발휘",m:"phát huy",p:"bal-hwi",en:"display/exhibition of skill"}]},

{char:"화",hanja:"化/話/火/和/畫",vn:"Hóa/Thoại/Hỏa/Hòa/Họa",meaning:"change, talk, fire, peace",tier:"common",theme:"pink",words:[
{w:"문화",m:"văn hóa",p:"mun-hwa",en:"culture"},{w:"변화",m:"biến hóa",p:"byeon-hwa",en:"change"},{w:"대화",m:"đối thoại",p:"dae-hwa",en:"conversation"},{w:"전화",m:"điện thoại",p:"jeon-hwa",en:"phone call"},
{w:"화학",m:"hóa học",p:"hwa-hak",en:"chemistry"},{w:"영화",m:"phim (ảnh họa)",p:"yeong-hwa",en:"movie"},{w:"계획",m:"kế hoạch",p:"gye-hoek",en:"plan"},{w:"평화",m:"hòa bình",p:"pyeong-hwa",en:"peace"},
{w:"강화",m:"cường hóa",p:"gang-hwa",en:"reinforcement"},{w:"소화",m:"tiêu hóa",p:"so-hwa",en:"digestion/extinguish"},{w:"동화",m:"đồng hóa / truyện cổ tích",p:"dong-hwa",en:"assimilation/fairy tale"}]},

{char:"관",hanja:"觀/關/官/管",vn:"Quan",meaning:"view, relation, official, manage",tier:"common",theme:"teal",words:[
{w:"관계",m:"quan hệ",p:"gwan-gye",en:"relationship"},{w:"관심",m:"quan tâm",p:"gwan-sim",en:"interest"},{w:"관광",m:"quan quang (du lịch)",p:"gwan-gwang",en:"tourism"},{w:"관리",m:"quản lý",p:"gwal-li",en:"management"},
{w:"기관",m:"cơ quan",p:"gi-gwan",en:"institution/engine"},{w:"관점",m:"quan điểm",p:"gwan-jeom",en:"perspective"},{w:"관련",m:"quan liên (liên quan)",p:"gwal-lyeon",en:"relation/connection"},
{w:"관객",m:"quan khách",p:"gwan-gaek",en:"audience/spectator"},{w:"관찰",m:"quan sát",p:"gwan-chal",en:"observation"},{w:"관습",m:"quan tập (phong tục)",p:"gwan-seup",en:"custom/convention"}]},

{char:"대",hanja:"大/代/對",vn:"Đại/Đại/Đối",meaning:"big, era, oppose",tier:"common",theme:"green",words:[
{w:"대학",m:"đại học",p:"dae-hak",en:"university"},{w:"시대",m:"thời đại",p:"si-dae",en:"era/age"},{w:"현대",m:"hiện đại",p:"hyeon-dae",en:"modern times"},{w:"대표",m:"đại biểu",p:"dae-pyo",en:"representative"},
{w:"대상",m:"đối tượng",p:"dae-sang",en:"target/subject"},{w:"대회",m:"đại hội",p:"dae-hoe",en:"convention/tournament"},{w:"대책",m:"đối sách",p:"dae-chaek",en:"countermeasure"},{w:"대부분",m:"đại bộ phận",p:"dae-bu-bun",en:"mostly/majority"},
{w:"대통령",m:"tổng thống",p:"dae-tong-nyeong",en:"president"},{w:"대중",m:"đại chúng",p:"dae-jung",en:"the public/mass"},{w:"반대",m:"phản đối",p:"ban-dae",en:"opposition/opposite"},{w:"절대",m:"tuyệt đối",p:"jeol-dae",en:"absolute/never"}]},

{char:"동",hanja:"動/東/同",vn:"Động/Đông/Đồng",meaning:"move, east, same",tier:"common",theme:"indigo",words:[
{w:"활동",m:"hoạt động",p:"hwal-dong",en:"activity"},{w:"운동",m:"vận động",p:"un-dong",en:"exercise/movement"},{w:"행동",m:"hành động",p:"haeng-dong",en:"action/behavior"},{w:"자동",m:"tự động",p:"ja-dong",en:"automatic"},
{w:"동시",m:"đồng thời",p:"dong-si",en:"same time/simultaneous"},{w:"동의",m:"đồng ý",p:"dong-ui",en:"agreement"},{w:"감동",m:"cảm động",p:"gam-dong",en:"emotion/touching"},{w:"이동",m:"di động",p:"i-dong",en:"movement/migration"},
{w:"동양",m:"đông dương",p:"dong-yang",en:"the East/Orient"},{w:"동물",m:"động vật",p:"dong-mul",en:"animal"},{w:"공동",m:"cộng đồng",p:"gong-dong",en:"joint/common"}]},

{char:"제",hanja:"制/題/第/祭/製",vn:"Chế/Đề/Đệ/Tế/Chế",meaning:"system, topic, order",tier:"common",theme:"red",words:[
{w:"제도",m:"chế độ",p:"je-do",en:"system/institution"},{w:"문제",m:"vấn đề",p:"mun-je",en:"problem/question"},{w:"제목",m:"đề mục",p:"je-mok",en:"title/heading"},{w:"제품",m:"chế phẩm",p:"je-pum",en:"product"},
{w:"경제",m:"kinh tế",p:"gyeong-je",en:"economy"},{w:"제한",m:"chế hạn",p:"je-han",en:"restriction/limit"},{w:"제공",m:"cung cấp (đề cung)",p:"je-gong",en:"provision/offer"},
{w:"제안",m:"đề án",p:"je-an",en:"proposal/suggestion"},{w:"제작",m:"chế tác",p:"je-jak",en:"production/making"},{w:"체제",m:"thể chế",p:"che-je",en:"system/regime"}]},

{char:"시",hanja:"時/市/始/視/試",vn:"Thời/Thị/Thủy/Thị/Thí",meaning:"time, city, begin, see, test",tier:"common",theme:"purple",words:[
{w:"시간",m:"thời gian",p:"si-gan",en:"time"},{w:"도시",m:"đô thị",p:"do-si",en:"city"},{w:"시작",m:"bắt đầu (thủy tác)",p:"si-jak",en:"start/beginning"},{w:"시험",m:"thi nghiệm / thi",p:"si-heom",en:"exam/test"},
{w:"시대",m:"thời đại",p:"si-dae",en:"era/age"},{w:"시장",m:"thị trường",p:"si-jang",en:"market/mayor"},{w:"시설",m:"thi thiết (cơ sở)",p:"si-seol",en:"facility"},{w:"시민",m:"thị dân",p:"si-min",en:"citizen"},
{w:"시선",m:"thị tuyến (ánh mắt)",p:"si-seon",en:"one's eyes/gaze"},{w:"시기",m:"thời kỳ",p:"si-gi",en:"time/period"},{w:"시행",m:"thi hành",p:"si-haeng",en:"enforcement/implementation"}]},

{char:"성",hanja:"成/性/城",vn:"Thành/Tính/Thành",meaning:"become, nature, castle",tier:"common",theme:"orange",words:[
{w:"성공",m:"thành công",p:"seong-gong",en:"success"},{w:"성격",m:"tính cách",p:"seong-gyeok",en:"personality"},{w:"성장",m:"thành trưởng (phát triển)",p:"seong-jang",en:"growth"},
{w:"구성",m:"cấu thành",p:"gu-seong",en:"composition/formation"},{w:"완성",m:"hoàn thành",p:"wan-seong",en:"completion"},{w:"가능성",m:"khả năng tính",p:"ga-neung-seong",en:"possibility"},
{w:"성별",m:"tính biệt (giới tính)",p:"seong-byeol",en:"gender/sex"},{w:"성과",m:"thành quả",p:"seong-gwa",en:"result/outcome"},{w:"성실",m:"thành thật",p:"seong-sil",en:"sincerity/faithfulness"}]},

{char:"기",hanja:"機/氣/記/期/技/基",vn:"Cơ/Khí/Ký/Kỳ/Kỹ/Cơ",meaning:"machine, energy, record, period",tier:"common",theme:"teal",words:[
{w:"기계",m:"cơ giới (máy móc)",p:"gi-gye",en:"machine"},{w:"기술",m:"kỹ thuật",p:"gi-sul",en:"technology/skill"},{w:"기록",m:"ký lục",p:"gi-rok",en:"record"},{w:"기간",m:"kỳ gian",p:"gi-gan",en:"period of time"},
{w:"기회",m:"cơ hội",p:"gi-hoe",en:"opportunity"},{w:"기본",m:"cơ bản",p:"gi-bon",en:"basics/foundation"},{w:"기억",m:"ký ức",p:"gi-eok",en:"memory"},{w:"기준",m:"cơ chuẩn (tiêu chuẩn)",p:"gi-jun",en:"standard/criteria"},
{w:"기능",m:"cơ năng / kỹ năng",p:"gi-neung",en:"function"},{w:"기대",m:"kỳ đại (kỳ vọng)",p:"gi-dae",en:"expectation"},{w:"기업",m:"기업 (doanh nghiệp)",p:"gi-eop",en:"enterprise/company"},
{w:"인기",m:"nhân khí",p:"in-gi",en:"popularity"},{w:"위기",m:"nguy cơ",p:"wi-gi",en:"crisis"},{w:"동기",m:"động cơ",p:"dong-gi",en:"motive/motivation"}]},

{char:"수",hanja:"數/水/手/受/修",vn:"Số/Thủy/Thủ/Thụ/Tu",meaning:"number, water, hand, receive",tier:"common",theme:"blue",words:[
{w:"수업",m:"thụ nghiệp (bài học)",p:"su-eop",en:"class/lesson"},{w:"수학",m:"toán học (số học)",p:"su-hak",en:"mathematics"},{w:"수입",m:"thu nhập",p:"su-ip",en:"income/import"},
{w:"수출",m:"xuất khẩu",p:"su-chul",en:"export"},{w:"수준",m:"trình độ (thủy chuẩn)",p:"su-jun",en:"level/standard"},{w:"수단",m:"thủ đoạn / phương tiện",p:"su-dan",en:"means/method"},
{w:"수요",m:"nhu cầu (thụ yếu)",p:"su-yo",en:"demand"},{w:"숫자",m:"số tự (con số)",p:"sut-ja",en:"number"},{w:"수정",m:"tu chỉnh",p:"su-jeong",en:"revision/modification"},
{w:"수상",m:"thủ tướng / đáng ngờ",p:"su-sang",en:"prime minister/suspicious"}]},

{char:"자",hanja:"自/者/子/資",vn:"Tự/Giả/Tử/Tư",meaning:"self, person, child, resource",tier:"essential",theme:"green",words:[
{w:"자연",m:"tự nhiên",p:"ja-yeon",en:"nature"},{w:"자유",m:"tự do",p:"ja-yu",en:"freedom"},{w:"자신",m:"tự thân",p:"ja-sin",en:"oneself/confidence"},{w:"기자",m:"ký giả",p:"gi-ja",en:"reporter/journalist"},
{w:"학자",m:"học giả",p:"hak-ja",en:"scholar"},{w:"자동",m:"tự động",p:"ja-dong",en:"automatic"},{w:"자원",m:"tài nguyên (tư nguyên)",p:"ja-won",en:"resources/volunteer"},
{w:"자격",m:"tư cách",p:"ja-gyeok",en:"qualification"},{w:"자료",m:"tư liệu",p:"ja-ryo",en:"materials/data"},{w:"자세",m:"tư thế",p:"ja-se",en:"posture/attitude"},
{w:"저자",m:"tác giả",p:"jeo-ja",en:"author"},{w:"투자",m:"đầu tư",p:"tu-ja",en:"investment"},{w:"소비자",m:"tiêu phí giả (người tiêu dùng)",p:"so-bi-ja",en:"consumer"}]},

{char:"의",hanja:"意/醫/衣/義",vn:"Ý/Y/Y/Nghĩa",meaning:"meaning, medical, clothes, justice",tier:"common",theme:"pink",words:[
{w:"의미",m:"ý nghĩa",p:"ui-mi",en:"meaning"},{w:"의견",m:"ý kiến",p:"ui-gyeon",en:"opinion"},{w:"의사",m:"y sĩ (bác sĩ)",p:"ui-sa",en:"doctor/intention"},{w:"의무",m:"nghĩa vụ",p:"ui-mu",en:"duty/obligation"},
{w:"의식",m:"ý thức / nghi thức",p:"ui-sik",en:"consciousness/ceremony"},{w:"주의",m:"chú ý",p:"ju-ui",en:"caution/attention"},{w:"동의",m:"đồng ý",p:"dong-ui",en:"agreement"},
{w:"의도",m:"ý đồ",p:"ui-do",en:"intention"},{w:"의지",m:"ý chí",p:"ui-ji",en:"will/volition"},{w:"정의",m:"chính nghĩa / định nghĩa",p:"jeong-ui",en:"justice/definition"}]},

{char:"공",hanja:"工/公/空/功/共",vn:"Công/Không",meaning:"work, public, empty, merit",tier:"common",theme:"indigo",words:[
{w:"공부",m:"công phu (học)",p:"gong-bu",en:"study"},{w:"공업",m:"công nghiệp",p:"gong-eop",en:"industry"},{w:"공간",m:"không gian",p:"gong-gan",en:"space"},{w:"공원",m:"công viên",p:"gong-won",en:"park"},
{w:"성공",m:"thành công",p:"seong-gong",en:"success"},{w:"공동",m:"cộng đồng",p:"gong-dong",en:"joint/common"},{w:"공급",m:"cung cấp",p:"gong-geup",en:"supply"},
{w:"공연",m:"công diễn",p:"gong-yeon",en:"performance"},{w:"공식",m:"công thức",p:"gong-sik",en:"formula/official"},{w:"공장",m:"công trường (nhà máy)",p:"gong-jang",en:"factory"},
{w:"공무원",m:"công vụ viên",p:"gong-mu-won",en:"civil servant"},{w:"공통",m:"cộng thông (chung)",p:"gong-tong",en:"common"}]},

{char:"원",hanja:"原/員/院/園/源/願",vn:"Nguyên/Viên/Viện/Viên/Nguyện",meaning:"origin, member, institute",tier:"common",theme:"red",words:[
{w:"원인",m:"nguyên nhân",p:"won-in",en:"cause"},{w:"회원",m:"hội viên",p:"hoe-won",en:"member"},{w:"병원",m:"bệnh viện",p:"byeong-won",en:"hospital"},{w:"공원",m:"công viên",p:"gong-won",en:"park"},
{w:"자원",m:"tài nguyên",p:"ja-won",en:"resources/volunteer"},{w:"원래",m:"nguyên lai (vốn dĩ)",p:"wol-lae",en:"originally"},{w:"직원",m:"chức viên",p:"ji-gwon",en:"employee"},
{w:"원리",m:"nguyên lý",p:"wol-li",en:"principle"},{w:"지원",m:"chi viên (hỗ trợ)",p:"ji-won",en:"support/application"},{w:"원칙",m:"nguyên tắc",p:"won-chik",en:"rule/principle"},
{w:"소원",m:"sở nguyện (ước muốn)",p:"so-won",en:"wish"},{w:"만원",m:"vạn viên / đầy",p:"man-won",en:"10,000 won/full house"}]},

{char:"상",hanja:"上/想/像/狀/商/常/賞",vn:"Thượng/Tưởng/Tượng/Trạng/Thương/Thường/Thưởng",meaning:"up, think, state",tier:"common",theme:"purple",words:[
{w:"상황",m:"trạng huống (tình hình)",p:"sang-hwang",en:"situation"},{w:"상상",m:"tưởng tượng",p:"sang-sang",en:"imagination"},{w:"이상",m:"lý tưởng / bất thường",p:"i-sang",en:"ideal/abnormal"},
{w:"상품",m:"thương phẩm",p:"sang-pum",en:"product/prize"},{w:"상대",m:"tương đối / đối phương",p:"sang-dae",en:"relative/opponent"},{w:"정상",m:"bình thường / đỉnh",p:"jeong-sang",en:"normal/peak"},
{w:"인상",m:"ấn tượng",p:"in-sang",en:"impression"},{w:"상식",m:"thường thức",p:"sang-sik",en:"common sense"},{w:"상징",m:"tượng trưng",p:"sang-jing",en:"symbol"},
{w:"향상",m:"hướng thượng (nâng cao)",p:"hyang-sang",en:"improvement/progress"}]},

{char:"력",hanja:"力/歷",vn:"Lực/Lịch",meaning:"power, history",tier:"advanced",theme:"orange",words:[
{w:"능력",m:"năng lực",p:"neung-nyeok",en:"ability"},{w:"노력",m:"nỗ lực",p:"no-ryeok",en:"effort"},{w:"역사",m:"lịch sử",p:"yeok-sa",en:"history"},{w:"경력",m:"kinh lịch",p:"gyeong-nyeok",en:"career"},
{w:"협력",m:"hiệp lực",p:"hyeom-nyeok",en:"cooperation"},{w:"실력",m:"thực lực",p:"sil-lyeok",en:"skill/competence"},{w:"권력",m:"quyền lực",p:"gwol-lyeok",en:"power/authority"},{w:"압력",m:"áp lực",p:"am-nyeok",en:"pressure"},
{w:"매력",m:"mị lực (sức hút)",p:"mae-ryeok",en:"charm/attraction"},{w:"영향력",m:"ảnh hưởng lực",p:"yeong-hyang-nyeok",en:"influence"},{w:"잠재력",m:"tiềm tại lực",p:"jam-jae-ryeok",en:"potential"}]},

{char:"실",hanja:"室/實/失",vn:"Thất/Thực/Thất",meaning:"room, real, lose",tier:"advanced",theme:"teal",words:[
{w:"사실",m:"sự thật",p:"sa-sil",en:"fact"},{w:"실제",m:"thực tế",p:"sil-je",en:"reality/actual"},{w:"실험",m:"thực nghiệm",p:"sil-heom",en:"experiment"},{w:"실수",m:"thất thủ (sai lầm)",p:"sil-su",en:"mistake"},
{w:"교실",m:"giáo thất",p:"gyo-sil",en:"classroom"},{w:"실내",m:"thất nội",p:"sil-lae",en:"indoors"},{w:"실현",m:"thực hiện",p:"sil-hyeon",en:"realization"},{w:"실시",m:"thực thi",p:"sil-si",en:"implementation"},
{w:"실력",m:"thực lực",p:"sil-lyeok",en:"skill/ability"},{w:"실패",m:"thất bại",p:"sil-pae",en:"failure"},{w:"충실",m:"trung thực",p:"chung-sil",en:"faithfulness"}]},

{char:"주",hanja:"主/住/注/州/週",vn:"Chủ/Trú/Chú/Châu/Tuần",meaning:"main, live, pour, state, week",tier:"advanced",theme:"blue",words:[
{w:"주민",m:"cư dân (trú dân)",p:"ju-min",en:"resident"},{w:"주장",m:"chủ trương",p:"ju-jang",en:"assertion/claim"},{w:"주의",m:"chú ý",p:"ju-ui",en:"caution/attention"},
{w:"주요",m:"chủ yếu",p:"ju-yo",en:"major/main"},{w:"거주",m:"cư trú",p:"geo-ju",en:"residence"},{w:"주인",m:"chủ nhân",p:"ju-in",en:"owner/host"},{w:"주변",m:"chu biên",p:"ju-byeon",en:"surroundings"},
{w:"주제",m:"chủ đề",p:"ju-je",en:"topic/theme"},{w:"주목",m:"chú mục",p:"ju-mok",en:"attention/focus"},{w:"민주",m:"dân chủ",p:"min-ju",en:"democracy"}]},

{char:"분",hanja:"分/粉",vn:"Phân/Phấn",meaning:"divide, part",tier:"advanced",theme:"pink",words:[
{w:"부분",m:"bộ phận",p:"bu-bun",en:"part/portion"},{w:"분석",m:"phân tích",p:"bun-seok",en:"analysis"},{w:"구분",m:"khu phân (phân biệt)",p:"gu-bun",en:"classification/division"},
{w:"분야",m:"phân dã (lĩnh vực)",p:"bun-ya",en:"field/area"},{w:"분위기",m:"phân vi khí (bầu không khí)",p:"bu-nwi-gi",en:"atmosphere/mood"},
{w:"충분",m:"sung phân (đầy đủ)",p:"chung-bun",en:"enough/sufficient"},{w:"처분",m:"xử phân",p:"cheo-bun",en:"disposal/punishment"},{w:"과분",m:"quá phân",p:"gwa-bun",en:"undeserved/excessive"},
{w:"분명",m:"phân minh (rõ ràng)",p:"bun-myeong",en:"clear/obvious"},{w:"분류",m:"phân loại",p:"bul-lyu",en:"classification"}]},

{char:"도",hanja:"度/道/圖/都/島",vn:"Độ/Đạo/Đồ/Đô/Đảo",meaning:"degree, way, map, capital",tier:"advanced",theme:"green",words:[
{w:"제도",m:"chế độ",p:"je-do",en:"system/institution"},{w:"도시",m:"đô thị",p:"do-si",en:"city"},{w:"온도",m:"ôn độ",p:"on-do",en:"temperature"},{w:"태도",m:"thái độ",p:"tae-do",en:"attitude"},
{w:"도로",m:"đạo lộ (đường)",p:"do-ro",en:"road"},{w:"도움",m:"giúp đỡ",p:"do-um",en:"help/assistance"},{w:"정도",m:"trình độ",p:"jeong-do",en:"degree/extent"},
{w:"속도",m:"tốc độ",p:"sok-do",en:"speed"},{w:"도덕",m:"đạo đức",p:"do-deok",en:"morals/ethics"},{w:"도전",m:"đồ chiến (thử thách)",p:"do-jeon",en:"challenge"}]},

{char:"통",hanja:"通/統",vn:"Thông/Thống",meaning:"pass through, govern",tier:"advanced",theme:"indigo",words:[
{w:"교통",m:"giao thông",p:"gyo-tong",en:"traffic"},{w:"전통",m:"truyền thống",p:"jeon-tong",en:"tradition"},{w:"통일",m:"thống nhất",p:"tong-il",en:"unification"},{w:"통신",m:"thông tín",p:"tong-sin",en:"communication"},
{w:"소통",m:"sơ thông (giao tiếp)",p:"so-tong",en:"communication/interaction"},{w:"보통",m:"phổ thông",p:"bo-tong",en:"usually/ordinary"},{w:"공통",m:"cộng thông (chung)",p:"gong-tong",en:"common"},
{w:"통계",m:"thống kê",p:"tong-gye",en:"statistics"},{w:"통제",m:"thống chế (kiểm soát)",p:"tong-je",en:"control/regulation"},{w:"유통",m:"lưu thông",p:"yu-tong",en:"distribution/circulation"}]},

{char:"적",hanja:"的/積/敵/績",vn:"Đích/Tích/Địch/Tích",meaning:"target, accumulate, enemy",tier:"advanced",theme:"red",words:[
{w:"목적",m:"mục đích",p:"mok-jeok",en:"purpose/objective"},{w:"적극",m:"tích cực",p:"jeok-geuk",en:"positive/active"},{w:"소극적",m:"tiêu cực",p:"so-geuk-jeok",en:"passive"},{w:"역사적",m:"lịch sử đích",p:"yeok-sa-jeok",en:"historical"},
{w:"국적",m:"quốc tịch",p:"guk-jeok",en:"nationality"},{w:"실적",m:"thực tích",p:"sil-jeok",en:"actual results/performance"},{w:"성적",m:"thành tích",p:"seong-jeok",en:"grade/results"},
{w:"적용",m:"áp dụng",p:"jeo-gyong",en:"application"},{w:"적절",m:"thích thiết (thích hợp)",p:"jeok-jeol",en:"appropriate/proper"},{w:"축적",m:"tích lũy",p:"chuk-jeok",en:"accumulation"}]},

{char:"심",hanja:"心/深/審/尋",vn:"Tâm/Thâm/Thẩm/Tầm",meaning:"heart, deep, examine",tier:"advanced",theme:"purple",words:[
{w:"관심",m:"quan tâm",p:"gwan-sim",en:"interest"},{w:"중심",m:"trung tâm",p:"jung-sim",en:"center"},{w:"심각",m:"thâm khắc (nghiêm trọng)",p:"sim-gak",en:"serious/severe"},
{w:"심리",m:"tâm lý",p:"sim-ri",en:"psychology"},{w:"안심",m:"an tâm",p:"an-sim",en:"relief/peace of mind"},{w:"열심",m:"nhiệt tâm",p:"yeol-sim",en:"enthusiasm/hard work"},
{w:"양심",m:"lương tâm",p:"yang-sim",en:"conscience"},{w:"심사",m:"thẩm tra",p:"sim-sa",en:"evaluation/screening"},{w:"핵심",m:"hạch tâm (cốt lõi)",p:"haek-sim",en:"core/key point"}]},

{char:"민",hanja:"民",vn:"Dân",meaning:"people, citizen",tier:"essential",theme:"teal",words:[
{w:"국민",m:"quốc dân",p:"gung-min",en:"citizen/people"},{w:"시민",m:"thị dân",p:"si-min",en:"citizen"},{w:"주민",m:"cư dân",p:"ju-min",en:"resident"},{w:"민주",m:"dân chủ",p:"min-ju",en:"democracy"},
{w:"민족",m:"dân tộc",p:"min-jok",en:"nation/people"},{w:"민간",m:"dân gian",p:"min-gan",en:"civil/private"},{w:"민감",m:"mẫn cảm",p:"min-gam",en:"sensitive"},
{w:"이민",m:"di dân",p:"i-min",en:"immigration"},{w:"난민",m:"nạn dân",p:"nan-min",en:"refugee"},{w:"민원",m:"dân nguyện",p:"mi-nwon",en:"civil complaint"}]},

{char:"법",hanja:"法",vn:"Pháp",meaning:"law, method",tier:"essential",theme:"red",words:[
{w:"법률",m:"pháp luật",p:"beom-nyul",en:"law/statute"},{w:"방법",m:"phương pháp",p:"bang-beop",en:"method/way"},{w:"문법",m:"văn pháp (ngữ pháp)",p:"mun-beop",en:"grammar"},{w:"법원",m:"pháp viện (tòa án)",p:"beo-bwon",en:"court"},
{w:"합법",m:"hợp pháp",p:"hap-beop",en:"legal/lawful"},{w:"불법",m:"bất hợp pháp",p:"bul-beop",en:"illegal"},{w:"법칙",m:"pháp tắc",p:"beop-chik",en:"rule/law"},
{w:"헌법",m:"hiến pháp",p:"heon-beop",en:"constitution"},{w:"법학",m:"pháp học",p:"beop-hak",en:"law (study)"},{w:"법적",m:"pháp đích (về mặt pháp lý)",p:"beop-jeok",en:"legal"}]},

{char:"보",hanja:"保/報/步/補",vn:"Bảo/Báo/Bộ/Bổ",meaning:"protect, report, step, supplement",tier:"common",theme:"green",words:[
{w:"보호",m:"bảo hộ",p:"bo-ho",en:"protection"},{w:"보험",m:"bảo hiểm",p:"bo-heom",en:"insurance"},{w:"보고",m:"báo cáo",p:"bo-go",en:"report"},{w:"보도",m:"báo đạo (đưa tin)",p:"bo-do",en:"report/news"},
{w:"보장",m:"bảo chưởng (bảo đảm)",p:"bo-jang",en:"guarantee"},{w:"보통",m:"phổ thông",p:"bo-tong",en:"usually/ordinary"},{w:"정보",m:"thông tin",p:"jeong-bo",en:"information"},
{w:"보관",m:"bảo quản",p:"bo-gwan",en:"storage/safekeeping"},{w:"보충",m:"bổ sung",p:"bo-chung",en:"supplement/replenishment"},{w:"보수",m:"bảo thủ / sửa chữa",p:"bo-su",en:"conservative/repair"},{w:"보존",m:"bảo tồn",p:"bo-jon",en:"preservation"}]},

{char:"건",hanja:"建/健/件",vn:"Kiến/Kiện/Kiện",meaning:"build, health, matter",tier:"common",theme:"orange",words:[
{w:"건설",m:"kiến thiết",p:"geon-seol",en:"construction"},{w:"건강",m:"kiện khang (sức khỏe)",p:"geon-gang",en:"health"},{w:"건물",m:"kiến vật (tòa nhà)",p:"geon-mul",en:"building"},
{w:"사건",m:"sự kiện",p:"sa-geon",en:"incident"},{w:"조건",m:"điều kiện",p:"jo-geon",en:"condition"},{w:"건축",m:"kiến trúc",p:"geon-chuk",en:"architecture"},
{w:"건의",m:"kiến nghị",p:"geo-nui",en:"proposal/suggestion"},{w:"건전",m:"kiện toàn (lành mạnh)",p:"geon-jeon",en:"sound/healthy"},{w:"문건",m:"văn kiện",p:"mun-geon",en:"document"}]},

{char:"연",hanja:"然/硏/連/演/延",vn:"Nhiên/Nghiên/Liên/Diễn/Diên",meaning:"nature, research, connect, perform",tier:"common",theme:"blue",words:[
{w:"자연",m:"tự nhiên",p:"ja-yeon",en:"nature"},{w:"연구",m:"nghiên cứu",p:"yeon-gu",en:"research"},{w:"연결",m:"liên kết",p:"yeon-gyeol",en:"connection"},{w:"연습",m:"luyện tập",p:"yeon-seup",en:"practice"},
{w:"연설",m:"diễn thuyết",p:"yeon-seol",en:"speech"},{w:"연기",m:"diễn kỹ / hoãn",p:"yeon-gi",en:"acting/postponement"},{w:"연속",m:"liên tục",p:"yeon-sok",en:"continuous"},
{w:"연락",m:"liên lạc",p:"yeol-lak",en:"contact"},{w:"연장",m:"kéo dài",p:"yeon-jang",en:"extension"},{w:"관련",m:"quan liên (liên quan)",p:"gwal-lyeon",en:"relation/connection"},
{w:"연료",m:"nhiên liệu",p:"yeol-lyo",en:"fuel"},{w:"연합",m:"liên hợp",p:"yeon-hap",en:"alliance/union"}]},

{char:"감",hanja:"感/減/監",vn:"Cảm/Giảm/Giám",meaning:"feel, reduce, supervise",tier:"common",theme:"pink",words:[
{w:"감정",m:"cảm tình",p:"gam-jeong",en:"emotion"},{w:"감동",m:"cảm động",p:"gam-dong",en:"emotion/touching"},{w:"감사",m:"cảm tạ",p:"gam-sa",en:"gratitude"},{w:"감각",m:"cảm giác",p:"gam-gak",en:"sense/sensation"},
{w:"감소",m:"giảm thiểu",p:"gam-so",en:"decrease/reduction"},{w:"감독",m:"giám đốc",p:"gam-dok",en:"director/supervision"},{w:"민감",m:"mẫn cảm",p:"min-gam",en:"sensitive"},
{w:"감상",m:"cảm thưởng (thưởng thức)",p:"gam-sang",en:"appreciation"},{w:"감염",m:"cảm nhiễm (lây nhiễm)",p:"ga-myeom",en:"infection"},{w:"직감",m:"trực cảm",p:"jik-gam",en:"intuition"}]},

{char:"장",hanja:"場/長/章/裝/將/障",vn:"Trường/Trường/Chương/Trang/Tướng/Chướng",meaning:"place, long, chapter",tier:"common",theme:"indigo",words:[
{w:"시장",m:"thị trường",p:"si-jang",en:"market/mayor"},{w:"공장",m:"công trường",p:"gong-jang",en:"factory"},{w:"성장",m:"thành trưởng",p:"seong-jang",en:"growth"},{w:"회장",m:"hội trưởng",p:"hoe-jang",en:"chairman/president"},
{w:"사장",m:"giám đốc",p:"sa-jang",en:"CEO"},{w:"장소",m:"trường sở (nơi chốn)",p:"jang-so",en:"place/location"},{w:"보장",m:"bảo chưởng",p:"bo-jang",en:"guarantee"},
{w:"장점",m:"ưu điểm",p:"jang-jeom",en:"advantage/strength"},{w:"장래",m:"tương lai",p:"jang-nae",en:"future"},{w:"장면",m:"trường diện (cảnh)",p:"jang-myeon",en:"scene"},
{w:"장애",m:"chướng ngại",p:"jang-ae",en:"obstacle/disability"},{w:"장기",m:"trường kỳ (dài hạn)",p:"jang-gi",en:"long-term"}]},

{char:"활",hanja:"活",vn:"Hoạt",meaning:"live, active",tier:"common",theme:"green",words:[
{w:"생활",m:"sinh hoạt",p:"saeng-hwal",en:"daily life"},{w:"활동",m:"hoạt động",p:"hwal-dong",en:"activity"},{w:"활용",m:"hoạt dụng (ứng dụng)",p:"hwa-ryong",en:"application/utilization"},{w:"활발",m:"hoạt bát",p:"hwal-bal",en:"active/lively"},
{w:"활력",m:"hoạt lực",p:"hwal-lyeok",en:"vitality/energy"},{w:"활성",m:"hoạt tính",p:"hwal-seong",en:"activity"},{w:"부활",m:"phục hoạt",p:"bu-hwal",en:"resurrection"},
{w:"활약",m:"hoạt dược (hoạt động tích cực)",p:"hwa-ryak",en:"active part"},{w:"활기",m:"hoạt khí (sức sống)",p:"hwal-gi",en:"vitality"}]},

{char:"물",hanja:"物",vn:"Vật",meaning:"thing, object",tier:"common",theme:"teal",words:[
{w:"동물",m:"động vật",p:"dong-mul",en:"animal"},{w:"식물",m:"thực vật",p:"sing-mul",en:"plant"},{w:"인물",m:"nhân vật",p:"in-mul",en:"person/character"},{w:"생물",m:"sinh vật",p:"saeng-mul",en:"living thing"},
{w:"물질",m:"vật chất",p:"mul-jil",en:"matter/substance"},{w:"건물",m:"kiến vật (tòa nhà)",p:"geon-mul",en:"building"},{w:"물건",m:"vật kiện (đồ vật)",p:"mul-geon",en:"thing/object"},
{w:"물가",m:"vật giá",p:"mul-ga",en:"prices"},{w:"사물",m:"sự vật",p:"sa-mul",en:"object/thing"},{w:"물리",m:"vật lý",p:"mul-li",en:"physics"},{w:"농산물",m:"nông sản vật",p:"nong-san-mul",en:"agricultural products"}]},

{char:"용",hanja:"用/容",vn:"Dụng/Dung",meaning:"use, contain",tier:"common",theme:"orange",words:[
{w:"사용",m:"sử dụng",p:"sa-yong",en:"use"},{w:"이용",m:"lợi dụng",p:"i-yong",en:"utilization"},{w:"내용",m:"nội dung",p:"nae-yong",en:"content"},{w:"활용",m:"hoạt dụng",p:"hwa-ryong",en:"application"},
{w:"비용",m:"phí dụng",p:"bi-yong",en:"cost"},{w:"작용",m:"tác dụng",p:"ja-gyong",en:"action/effect"},{w:"적용",m:"áp dụng",p:"jeo-gyong",en:"application"},
{w:"용어",m:"dụng ngữ (thuật ngữ)",p:"yong-eo",en:"term"},{w:"신용",m:"tín dụng",p:"si-nyong",en:"credit"},{w:"고용",m:"cố dụng (thuê)",p:"go-yong",en:"employment"}]},

{char:"신",hanja:"新/身/信/神/申",vn:"Tân/Thân/Tín/Thần/Thân",meaning:"new, body, believe, god",tier:"essential",theme:"purple",words:[
{w:"신문",m:"tân văn (báo)",p:"sin-mun",en:"newspaper"},{w:"신체",m:"thân thể",p:"sin-che",en:"body"},{w:"자신",m:"tự thân",p:"ja-sin",en:"oneself/confidence"},{w:"신뢰",m:"tín lại",p:"sil-loe",en:"trust"},
{w:"신경",m:"thần kinh",p:"sin-gyeong",en:"nerve/care"},{w:"신청",m:"thân thỉnh (đăng ký)",p:"sin-cheong",en:"application"},{w:"신용",m:"tín dụng",p:"si-nyong",en:"credit"},
{w:"정신",m:"tinh thần",p:"jeong-sin",en:"spirit/mind"},{w:"혁신",m:"cách tân",p:"hyeok-sin",en:"innovation"},{w:"통신",m:"thông tín",p:"tong-sin",en:"communication"},{w:"신호",m:"tín hiệu",p:"sin-ho",en:"signal"}]},

{char:"리",hanja:"理/利",vn:"Lý/Lợi",meaning:"reason, profit",tier:"common",theme:"red",words:[
{w:"관리",m:"quản lý",p:"gwal-li",en:"management"},{w:"처리",m:"xử lý",p:"cheo-ri",en:"handling/processing"},{w:"원리",m:"nguyên lý",p:"wol-li",en:"principle"},{w:"심리",m:"tâm lý",p:"sim-ri",en:"psychology"},
{w:"합리",m:"hợp lý",p:"ham-ni",en:"rationality"},{w:"이익",m:"lợi ích",p:"i-ik",en:"profit/benefit"},{w:"편리",m:"tiện lợi",p:"pyeol-li",en:"convenience"},
{w:"정리",m:"chỉnh lý",p:"jeong-ri",en:"arrangement"},{w:"물리",m:"vật lý",p:"mul-li",en:"physics"},{w:"유리",m:"hữu lợi / thủy tinh",p:"yu-ri",en:"advantage/glass"},{w:"논리",m:"luận lý (logic)",p:"nol-li",en:"logic"}]},

{char:"체",hanja:"體/替",vn:"Thể/Thế",meaning:"body, system, replace",tier:"common",theme:"blue",words:[
{w:"신체",m:"thân thể",p:"sin-che",en:"body"},{w:"전체",m:"toàn thể",p:"jeon-che",en:"the whole"},{w:"구체",m:"cụ thể",p:"gu-che",en:"concrete"},{w:"단체",m:"đoàn thể",p:"dan-che",en:"organization"},
{w:"체계",m:"thể hệ (hệ thống)",p:"che-gye",en:"system"},{w:"체험",m:"thể nghiệm",p:"che-heom",en:"experience"},{w:"체제",m:"thể chế",p:"che-je",en:"system/regime"},
{w:"체력",m:"thể lực",p:"che-ryeok",en:"physical strength"},{w:"체육",m:"thể dục",p:"che-yuk",en:"physical education"},{w:"주체",m:"chủ thể",p:"ju-che",en:"subject/main body"},{w:"물체",m:"vật thể",p:"mul-che",en:"object"}]},

{char:"안",hanja:"安/案/眼",vn:"An/Án/Nhãn",meaning:"peace, plan, eye",tier:"common",theme:"green",words:[
{w:"안전",m:"an toàn",p:"an-jeon",en:"safety"},{w:"안정",m:"an định",p:"an-jeong",en:"stability"},{w:"안심",m:"an tâm",p:"an-sim",en:"relief/peace of mind"},{w:"제안",m:"đề án",p:"je-an",en:"proposal"},
{w:"방안",m:"phương án",p:"bang-an",en:"plan/measure"},{w:"안내",m:"an nội (hướng dẫn)",p:"an-nae",en:"guidance"},{w:"불안",m:"bất an",p:"bul-an",en:"anxiety"},
{w:"안경",m:"nhãn kính (kính mắt)",p:"an-gyeong",en:"glasses"},{w:"치안",m:"trị an",p:"chi-an",en:"public security"},{w:"보안",m:"bảo an",p:"bo-an",en:"security"}]},

{char:"해",hanja:"海/解/害/該",vn:"Hải/Giải/Hại/Cai",meaning:"sea, solve, harm",tier:"common",theme:"pink",words:[
{w:"해결",m:"giải quyết",p:"hae-gyeol",en:"solution"},{w:"이해",m:"lý giải (hiểu)",p:"i-hae",en:"understanding"},{w:"해석",m:"giải thích",p:"hae-seok",en:"interpretation"},{w:"해외",m:"hải ngoại",p:"hae-oe",en:"overseas"},
{w:"피해",m:"bị hại",p:"pi-hae",en:"damage/harm"},{w:"해양",m:"hải dương",p:"hae-yang",en:"ocean"},{w:"해방",m:"giải phóng",p:"hae-bang",en:"liberation"},
{w:"오해",m:"ngộ giải (hiểu lầm)",p:"o-hae",en:"misunderstanding"},{w:"해당",m:"cai đương (tương ứng)",p:"hae-dang",en:"relevance/applicability"},{w:"해산",m:"giải tán",p:"hae-san",en:"dissolution"}]},

{char:"행",hanja:"行/幸",vn:"Hành/Hạnh",meaning:"go, do, luck",tier:"essential",theme:"indigo",words:[
{w:"행동",m:"hành động",p:"haeng-dong",en:"action"},{w:"행복",m:"hạnh phúc",p:"haeng-bok",en:"happiness"},{w:"행사",m:"hành sự (sự kiện)",p:"haeng-sa",en:"event"},{w:"여행",m:"du lịch (lữ hành)",p:"yeo-haeng",en:"travel"},
{w:"은행",m:"ngân hàng",p:"eun-haeng",en:"bank"},{w:"시행",m:"thi hành",p:"si-haeng",en:"enforcement"},{w:"실행",m:"thực hành",p:"sil-haeng",en:"execution"},{w:"행위",m:"hành vi",p:"haeng-wi",en:"act/deed"},
{w:"행정",m:"hành chính",p:"haeng-jeong",en:"administration"},{w:"유행",m:"lưu hành",p:"yu-haeng",en:"trend"},{w:"진행",m:"tiến hành",p:"jin-haeng",en:"progress"}]},

{char:"조",hanja:"造/條/調/組/助/早",vn:"Tạo/Điều/Điều/Tổ/Trợ/Tảo",meaning:"make, condition, investigate, group",tier:"advanced",theme:"orange",words:[
{w:"조건",m:"điều kiện",p:"jo-geon",en:"condition"},{w:"조사",m:"điều tra",p:"jo-sa",en:"investigation"},{w:"구조",m:"cấu tạo / cứu trợ",p:"gu-jo",en:"structure/rescue"},{w:"조직",m:"tổ chức",p:"jo-jik",en:"organization"},
{w:"제조",m:"chế tạo",p:"je-jo",en:"manufacturing"},{w:"조절",m:"điều tiết",p:"jo-jeol",en:"regulation"},{w:"강조",m:"cường điệu (nhấn mạnh)",p:"gang-jo",en:"emphasis"},
{w:"창조",m:"sáng tạo",p:"chang-jo",en:"creation"},{w:"조정",m:"điều chỉnh",p:"jo-jeong",en:"adjustment"},{w:"협조",m:"hiệp trợ (hợp tác)",p:"hyeop-jo",en:"cooperation"}]},

{char:"단",hanja:"團/單/短/段/斷",vn:"Đoàn/Đơn/Đoản/Đoạn/Đoạn",meaning:"group, single, short, section",tier:"advanced",theme:"teal",words:[
{w:"단체",m:"đoàn thể",p:"dan-che",en:"group/organization"},{w:"단순",m:"đơn thuần",p:"dan-sun",en:"simple"},{w:"단계",m:"đoạn giai (giai đoạn)",p:"dan-gye",en:"stage/phase"},{w:"수단",m:"thủ đoạn",p:"su-dan",en:"means/method"},
{w:"판단",m:"phán đoán",p:"pan-dan",en:"judgment"},{w:"결단",m:"quyết đoán",p:"gyeol-dan",en:"determination"},{w:"단점",m:"nhược điểm",p:"dan-jeom",en:"weakness/shortcoming"},
{w:"단기",m:"đoản kỳ",p:"dan-gi",en:"short-term"},{w:"단위",m:"đơn vị",p:"da-nwi",en:"unit"},{w:"중단",m:"trung đoạn (gián đoạn)",p:"jung-dan",en:"interruption/suspension"}]},

{char:"일",hanja:"一/日",vn:"Nhất/Nhật",meaning:"one, day, sun",tier:"essential",theme:"purple",words:[
{w:"통일",m:"thống nhất",p:"tong-il",en:"unification"},{w:"일반",m:"nhất ban (nói chung)",p:"il-ban",en:"general/ordinary"},{w:"일정",m:"nhật trình (lịch trình)",p:"il-jeong",en:"schedule"},
{w:"일부",m:"nhất bộ (một phần)",p:"il-bu",en:"part/portion"},{w:"생일",m:"sinh nhật",p:"saeng-il",en:"birthday"},{w:"일상",m:"nhật thường",p:"il-sang",en:"daily life"},
{w:"일시",m:"nhất thời",p:"il-si",en:"temporary/date and time"},{w:"동일",m:"đồng nhất",p:"dong-il",en:"same/identical"},{w:"일치",m:"nhất trí",p:"il-chi",en:"agreement/coincidence"},{w:"일자",m:"nhật tử (ngày)",p:"il-ja",en:"date"}]},

{char:"식",hanja:"食/式/識/植",vn:"Thực/Thức/Thức/Thực",meaning:"eat, form, know, plant",tier:"common",theme:"red",words:[
{w:"음식",m:"ẩm thực",p:"eum-sik",en:"food"},{w:"식품",m:"thực phẩm",p:"sik-pum",en:"food/groceries"},{w:"의식",m:"ý thức",p:"ui-sik",en:"consciousness"},{w:"지식",m:"tri thức",p:"ji-sik",en:"knowledge"},
{w:"공식",m:"công thức",p:"gong-sik",en:"formula/official"},{w:"형식",m:"hình thức",p:"hyeong-sik",en:"form/format"},{w:"식물",m:"thực vật",p:"sing-mul",en:"plant"},
{w:"인식",m:"nhận thức",p:"in-sik",en:"recognition"},{w:"방식",m:"phương thức",p:"bang-sik",en:"method/way"},{w:"식당",m:"thực đường (nhà hàng)",p:"sik-dang",en:"restaurant"}]},

{char:"방",hanja:"方/放/防/房/訪",vn:"Phương/Phóng/Phòng/Phòng/Phỏng",meaning:"direction, release, prevent, room",tier:"common",theme:"indigo",words:[
{w:"방법",m:"phương pháp",p:"bang-beop",en:"method"},{w:"방향",m:"phương hướng",p:"bang-hyang",en:"direction"},{w:"방문",m:"phỏng vấn / thăm",p:"bang-mun",en:"visit"},
{w:"방송",m:"phóng tống (truyền hình)",p:"bang-song",en:"broadcasting"},{w:"방지",m:"phòng chỉ (ngăn chặn)",p:"bang-ji",en:"prevention"},{w:"해방",m:"giải phóng",p:"hae-bang",en:"liberation"},
{w:"방안",m:"phương án",p:"bang-an",en:"plan/measure"},{w:"방식",m:"phương thức",p:"bang-sik",en:"method/way"},{w:"예방",m:"dự phòng",p:"ye-bang",en:"prevention"},{w:"개방",m:"khai phóng",p:"gae-bang",en:"opening"}]},

{char:"평",hanja:"平/評",vn:"Bình/Bình",meaning:"flat, peace, evaluate",tier:"advanced",theme:"green",words:[
{w:"평가",m:"bình giá (đánh giá)",p:"pyeong-ga",en:"evaluation"},{w:"평화",m:"hòa bình",p:"pyeong-hwa",en:"peace"},{w:"평균",m:"bình quân",p:"pyeong-gyun",en:"average"},
{w:"평소",m:"bình thường (thường ngày)",p:"pyeong-so",en:"usual/ordinary times"},{w:"공평",m:"công bằng",p:"gong-pyeong",en:"fairness"},{w:"비평",m:"phê bình",p:"bi-pyeong",en:"criticism"},
{w:"평등",m:"bình đẳng",p:"pyeong-deung",en:"equality"},{w:"수평",m:"thủy bình",p:"su-pyeong",en:"horizontal/level"},{w:"평범",m:"bình phàm (tầm thường)",p:"pyeong-beom",en:"ordinary"}]},

{char:"특",hanja:"特",vn:"Đặc",meaning:"special, particular",tier:"advanced",theme:"orange",words:[
{w:"특별",m:"đặc biệt",p:"teuk-byeol",en:"special"},{w:"특히",m:"đặc biệt là",p:"teu-ki",en:"especially"},{w:"특성",m:"đặc tính",p:"teuk-seong",en:"characteristic"},{w:"특징",m:"đặc trưng",p:"teuk-jing",en:"feature"},
{w:"특정",m:"đặc định",p:"teuk-jeong",en:"specific/particular"},{w:"독특",m:"độc đặc",p:"dok-teuk",en:"unique"},{w:"특기",m:"đặc kỹ (sở trường)",p:"teuk-gi",en:"specialty"},
{w:"특색",m:"đặc sắc",p:"teuk-saek",en:"distinctive feature"},{w:"특수",m:"đặc thù",p:"teuk-su",en:"special/peculiar"},{w:"특허",m:"đặc hứa (bằng sáng chế)",p:"teu-keo",en:"patent"}]},

{char:"능",hanja:"能",vn:"Năng",meaning:"ability, can",tier:"advanced",theme:"teal",words:[
{w:"능력",m:"năng lực",p:"neung-nyeok",en:"ability"},{w:"기능",m:"cơ năng / kỹ năng",p:"gi-neung",en:"function"},{w:"가능",m:"khả năng",p:"ga-neung",en:"possible"},{w:"불가능",m:"bất khả năng",p:"bul-ga-neung",en:"impossible"},
{w:"재능",m:"tài năng",p:"jae-neung",en:"talent"},{w:"가능성",m:"khả năng tính",p:"ga-neung-seong",en:"possibility"},{w:"성능",m:"tính năng",p:"seong-neung",en:"performance"},
{w:"유능",m:"hữu năng",p:"yu-neung",en:"competence/capable"},{w:"만능",m:"vạn năng",p:"man-neung",en:"all-around"},{w:"본능",m:"bản năng",p:"bol-neung",en:"instinct"}]},

{char:"요",hanja:"要/料",vn:"Yếu/Liệu",meaning:"need, important, material",tier:"advanced",theme:"pink",words:[
{w:"필요",m:"tất yếu (cần thiết)",p:"pi-ryo",en:"necessity/need"},{w:"중요",m:"trọng yếu",p:"jung-yo",en:"importance"},{w:"주요",m:"chủ yếu",p:"ju-yo",en:"major/main"},{w:"요인",m:"yếu nhân (yếu tố)",p:"yo-in",en:"factor"},
{w:"요구",m:"yêu cầu",p:"yo-gu",en:"demand/request"},{w:"요리",m:"liệu lý (nấu ăn)",p:"yo-ri",en:"cooking"},{w:"수요",m:"nhu cầu",p:"su-yo",en:"demand"},
{w:"자료",m:"tư liệu",p:"ja-ryo",en:"materials/data"},{w:"연료",m:"nhiên liệu",p:"yeol-lyo",en:"fuel"},{w:"요약",m:"yếu ước (tóm tắt)",p:"yo-yak",en:"summary"}]},

{char:"지",hanja:"地/知/紙/支/志",vn:"Địa/Tri/Chỉ/Chi/Chí",meaning:"ground, know, paper, support",tier:"essential",theme:"blue",words:[
{w:"지역",m:"địa vực (khu vực)",p:"ji-yeok",en:"area/region"},{w:"토지",m:"thổ địa",p:"to-ji",en:"land"},{w:"지식",m:"tri thức",p:"ji-sik",en:"knowledge"},{w:"지원",m:"chi viên",p:"ji-won",en:"support/application"},
{w:"지방",m:"địa phương",p:"ji-bang",en:"local/province"},{w:"의지",m:"ý chí",p:"ui-ji",en:"will/volition"},{w:"지도",m:"bản đồ / chỉ đạo",p:"ji-do",en:"map/guidance"},
{w:"지배",m:"chi phối",p:"ji-bae",en:"rule/domination"},{w:"지위",m:"địa vị",p:"ji-wi",en:"status/position"},{w:"잡지",m:"tạp chí",p:"jap-ji",en:"magazine"},{w:"지구",m:"địa cầu",p:"ji-gu",en:"Earth"}]},

{char:"비",hanja:"比/費/非/備/批",vn:"Tỷ/Phí/Phi/Bị/Phê",meaning:"compare, cost, not, prepare",tier:"advanced",theme:"red",words:[
{w:"비교",m:"so sánh (tỷ giáo)",p:"bi-gyo",en:"comparison"},{w:"비용",m:"phí dụng",p:"bi-yong",en:"cost/expense"},{w:"비판",m:"phê phán",p:"bi-pan",en:"criticism"},{w:"준비",m:"chuẩn bị",p:"jun-bi",en:"preparation"},
{w:"비율",m:"tỷ suất",p:"bi-yul",en:"ratio"},{w:"소비",m:"tiêu phí",p:"so-bi",en:"consumption"},{w:"비밀",m:"bí mật",p:"bi-mil",en:"secret"},
{w:"비난",m:"phỉ báng",p:"bi-nan",en:"blame/criticism"},{w:"설비",m:"thiết bị",p:"seol-bi",en:"equipment/facilities"},{w:"대비",m:"đối bị (chuẩn bị / so sánh)",p:"dae-bi",en:"preparation/contrast"}]}
];
