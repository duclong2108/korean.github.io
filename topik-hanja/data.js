const HANJA_DATA = [
{char:"학",hanja:"學",vn:"Học",meaning:"study, learn",tier:"essential",theme:"purple",words:[
{w:"학교",m:"trường học",ex:"학교에 갑니다.|Tôi đi học."},{w:"학생",m:"học sinh"},{w:"학습",m:"học tập"},{w:"학문",m:"học vấn"},
{w:"학자",m:"học giả"},{w:"학기",m:"học kỳ"},{w:"학년",m:"học niên"},{w:"학위",m:"học vị"},
{w:"학과",m:"khoa học (ngành)"},{w:"과학",m:"khoa học"},{w:"수학",m:"toán học"},{w:"문학",m:"văn học"},
{w:"의학",m:"y học"},{w:"대학",m:"đại học"},{w:"입학",m:"nhập học"},{w:"유학",m:"du học"},
{w:"독학",m:"tự học"},{w:"철학",m:"triết học"},{w:"법학",m:"pháp học"}]},

{char:"생",hanja:"生",vn:"Sinh",meaning:"life, birth, raw",tier:"essential",theme:"green",words:[
{w:"생활",m:"sinh hoạt",ex:"생활이 편리하다.|Sinh hoạt tiện lợi."},{w:"생산",m:"sản xuất"},{w:"생명",m:"sinh mệnh"},
{w:"학생",m:"học sinh"},{w:"인생",m:"nhân sinh"},{w:"발생",m:"phát sinh"},{w:"생존",m:"sinh tồn"},
{w:"생일",m:"sinh nhật"},{w:"생물",m:"sinh vật"},{w:"선생",m:"tiên sinh (thầy giáo)"},
{w:"탄생",m:"đản sinh"},{w:"생태",m:"sinh thái"},{w:"위생",m:"vệ sinh"}]},

{char:"사",hanja:"事/社/士",vn:"Sự/Xã/Sĩ",meaning:"matter, society, person",tier:"essential",theme:"pink",words:[
{w:"사회",m:"xã hội",ex:"사회 문제가 심각하다.|Vấn đề xã hội nghiêm trọng."},{w:"사건",m:"sự kiện"},{w:"사고",m:"sự cố"},
{w:"사업",m:"sự nghiệp"},{w:"사실",m:"sự thật"},{w:"회사",m:"công ty (hội xã)"},{w:"역사",m:"lịch sử"},
{w:"사람",m:"người"},{w:"사용",m:"sử dụng"},{w:"사진",m:"ảnh (tư chân)"},{w:"사장",m:"giám đốc"},
{w:"인사",m:"nhân sự / chào hỏi"},{w:"감사",m:"cảm tạ"}]},

{char:"정",hanja:"政/定/情/正",vn:"Chính/Định/Tình/Chính",meaning:"politics, decide, emotion",tier:"essential",theme:"blue",words:[
{w:"정치",m:"chính trị",ex:"정치에 관심이 있다.|Quan tâm đến chính trị."},{w:"정부",m:"chính phủ"},{w:"정책",m:"chính sách"},
{w:"감정",m:"cảm tình"},{w:"결정",m:"quyết định"},{w:"안정",m:"an định"},{w:"정확",m:"chính xác"},
{w:"정보",m:"thông tin (tình báo)"},{w:"정리",m:"chỉnh lý"},{w:"정신",m:"tinh thần"},
{w:"정상",m:"bình thường / đỉnh"},{w:"부정",m:"phủ định / bất chính"},{w:"고정",m:"cố định"},
{w:"예정",m:"dự định"},{w:"수정",m:"sửa đổi (tu chỉnh)"}]},

{char:"경",hanja:"經/景/競",vn:"Kinh/Cảnh/Cạnh",meaning:"economy, scenery, compete",tier:"essential",theme:"orange",words:[
{w:"경제",m:"kinh tế",ex:"경제가 성장하다.|Kinh tế tăng trưởng."},{w:"경험",m:"kinh nghiệm"},{w:"경쟁",m:"cạnh tranh"},
{w:"환경",m:"hoàn cảnh/môi trường"},{w:"경우",m:"trường hợp"},{w:"경기",m:"kinh khí / thi đấu"},
{w:"경향",m:"khuynh hướng"},{w:"경고",m:"cảnh cáo"},{w:"경영",m:"kinh doanh"},
{w:"경력",m:"kinh lịch"},{w:"경비",m:"kinh phí / bảo vệ"}]},

{char:"교",hanja:"敎/交",vn:"Giáo/Giao",meaning:"teach, exchange",tier:"essential",theme:"teal",words:[
{w:"교육",m:"giáo dục",ex:"교육이 중요하다.|Giáo dục rất quan trọng."},{w:"교사",m:"giáo viên"},{w:"교통",m:"giao thông"},
{w:"교환",m:"giao hoán"},{w:"학교",m:"trường học"},{w:"교수",m:"giáo sư"},{w:"교과서",m:"giáo khoa thư"},
{w:"종교",m:"tôn giáo"},{w:"외교",m:"ngoại giao"},{w:"교류",m:"giao lưu"},{w:"교실",m:"giáo thất (lớp học)"}]},

{char:"문",hanja:"文/問/門",vn:"Văn/Vấn/Môn",meaning:"writing, question, gate",tier:"essential",theme:"indigo",words:[
{w:"문화",m:"văn hóa",ex:"한국 문화를 배우다.|Học văn hóa Hàn Quốc."},{w:"문제",m:"vấn đề"},{w:"문학",m:"văn học"},
{w:"문장",m:"văn chương"},{w:"질문",m:"chất vấn"},{w:"신문",m:"tân văn (báo)"},{w:"문서",m:"văn thư"},
{w:"논문",m:"luận văn"},{w:"문법",m:"văn pháp (ngữ pháp)"},{w:"방문",m:"phỏng vấn / thăm"}]},

{char:"인",hanja:"人/認/因",vn:"Nhân/Nhận/Nhân",meaning:"person, recognize, cause",tier:"essential",theme:"red",words:[
{w:"인간",m:"nhân gian"},{w:"인구",m:"nhân khẩu"},{w:"인생",m:"nhân sinh"},{w:"원인",m:"nguyên nhân"},
{w:"인식",m:"nhận thức"},{w:"인정",m:"nhận định / công nhận"},{w:"개인",m:"cá nhân"},
{w:"인기",m:"nhân khí (nổi tiếng)"},{w:"인상",m:"ấn tượng"},{w:"인류",m:"nhân loại"},
{w:"인물",m:"nhân vật"},{w:"인재",m:"nhân tài"}]},

{char:"국",hanja:"國",vn:"Quốc",meaning:"country, nation",tier:"essential",theme:"purple",words:[
{w:"국가",m:"quốc gia"},{w:"국민",m:"quốc dân"},{w:"국제",m:"quốc tế"},{w:"외국",m:"ngoại quốc"},
{w:"한국",m:"Hàn Quốc"},{w:"국내",m:"quốc nội"},{w:"국적",m:"quốc tịch"},{w:"국어",m:"quốc ngữ"},
{w:"국립",m:"quốc lập"},{w:"국회",m:"quốc hội"},{w:"전국",m:"toàn quốc"}]},

{char:"전",hanja:"全/前/電/戰/傳",vn:"Toàn/Tiền/Điện/Chiến/Truyền",meaning:"all, before, electric, war",tier:"common",theme:"blue",words:[
{w:"전체",m:"toàn thể"},{w:"이전",m:"dĩ tiền (trước đây)"},{w:"전기",m:"điện khí"},{w:"전쟁",m:"chiến tranh"},
{w:"전통",m:"truyền thống"},{w:"전문",m:"chuyên môn"},{w:"안전",m:"an toàn"},
{w:"전혀",m:"hoàn toàn"},{w:"전국",m:"toàn quốc"},{w:"전달",m:"truyền đạt"},
{w:"전시",m:"triển lãm / chiến thời"},{w:"전환",m:"chuyển hoán"}]},

{char:"발",hanja:"發",vn:"Phát",meaning:"emit, develop, start",tier:"common",theme:"orange",words:[
{w:"발전",m:"phát triển"},{w:"발생",m:"phát sinh"},{w:"발표",m:"phát biểu"},{w:"발견",m:"phát hiện"},
{w:"개발",m:"khai phát"},{w:"출발",m:"xuất phát"},{w:"발달",m:"phát đạt"},{w:"발명",m:"phát minh"},
{w:"폭발",m:"bạo phát (nổ)"},{w:"발휘",m:"phát huy"}]},

{char:"화",hanja:"化/話/火/和/畫",vn:"Hóa/Thoại/Hỏa/Hòa/Họa",meaning:"change, talk, fire, peace",tier:"common",theme:"pink",words:[
{w:"문화",m:"văn hóa"},{w:"변화",m:"biến hóa"},{w:"대화",m:"đối thoại"},{w:"전화",m:"điện thoại"},
{w:"화학",m:"hóa học"},{w:"영화",m:"phim (ảnh họa)"},{w:"계획",m:"kế hoạch"},{w:"평화",m:"hòa bình"},
{w:"강화",m:"cường hóa"},{w:"소화",m:"tiêu hóa"},{w:"동화",m:"đồng hóa / truyện cổ tích"}]},

{char:"관",hanja:"觀/關/官/管",vn:"Quan",meaning:"view, relation, official, manage",tier:"common",theme:"teal",words:[
{w:"관계",m:"quan hệ"},{w:"관심",m:"quan tâm"},{w:"관광",m:"quan quang (du lịch)"},{w:"관리",m:"quản lý"},
{w:"기관",m:"cơ quan"},{w:"관점",m:"quan điểm"},{w:"관련",m:"quan liên (liên quan)"},
{w:"관객",m:"quan khách"},{w:"관찰",m:"quan sát"},{w:"관습",m:"quan tập (phong tục)"}]},

{char:"대",hanja:"大/代/對",vn:"Đại/Đại/Đối",meaning:"big, era, oppose",tier:"common",theme:"green",words:[
{w:"대학",m:"đại học"},{w:"시대",m:"thời đại"},{w:"현대",m:"hiện đại"},{w:"대표",m:"đại biểu"},
{w:"대상",m:"đối tượng"},{w:"대회",m:"đại hội"},{w:"대책",m:"đối sách"},{w:"대부분",m:"đại bộ phận"},
{w:"대통령",m:"tổng thống"},{w:"대중",m:"đại chúng"},{w:"반대",m:"phản đối"},{w:"절대",m:"tuyệt đối"}]},

{char:"동",hanja:"動/東/同",vn:"Động/Đông/Đồng",meaning:"move, east, same",tier:"common",theme:"indigo",words:[
{w:"활동",m:"hoạt động"},{w:"운동",m:"vận động"},{w:"행동",m:"hành động"},{w:"자동",m:"tự động"},
{w:"동시",m:"đồng thời"},{w:"동의",m:"đồng ý"},{w:"감동",m:"cảm động"},{w:"이동",m:"di động"},
{w:"동양",m:"đông dương"},{w:"동물",m:"động vật"},{w:"공동",m:"cộng đồng"}]},

{char:"제",hanja:"制/題/第/祭/製",vn:"Chế/Đề/Đệ/Tế/Chế",meaning:"system, topic, order",tier:"common",theme:"red",words:[
{w:"제도",m:"chế độ"},{w:"문제",m:"vấn đề"},{w:"제목",m:"đề mục"},{w:"제품",m:"chế phẩm"},
{w:"경제",m:"kinh tế"},{w:"제한",m:"chế hạn"},{w:"제공",m:"cung cấp (đề cung)"},
{w:"제안",m:"đề án"},{w:"제작",m:"chế tác"},{w:"체제",m:"thể chế"}]},

{char:"시",hanja:"時/市/始/視/試",vn:"Thời/Thị/Thủy/Thị/Thí",meaning:"time, city, begin, see, test",tier:"common",theme:"purple",words:[
{w:"시간",m:"thời gian"},{w:"도시",m:"đô thị"},{w:"시작",m:"bắt đầu (thủy tác)"},{w:"시험",m:"thi nghiệm / thi"},
{w:"시대",m:"thời đại"},{w:"시장",m:"thị trường"},{w:"시설",m:"thi thiết (cơ sở)"},{w:"시민",m:"thị dân"},
{w:"시선",m:"thị tuyến (ánh mắt)"},{w:"시기",m:"thời kỳ"},{w:"시행",m:"thi hành"}]},

{char:"성",hanja:"成/性/城",vn:"Thành/Tính/Thành",meaning:"become, nature, castle",tier:"common",theme:"orange",words:[
{w:"성공",m:"thành công"},{w:"성격",m:"tính cách"},{w:"성장",m:"thành trưởng (phát triển)"},
{w:"구성",m:"cấu thành"},{w:"완성",m:"hoàn thành"},{w:"가능성",m:"khả năng tính"},
{w:"성별",m:"tính biệt (giới tính)"},{w:"성과",m:"thành quả"},{w:"성실",m:"thành thật"}]},

{char:"기",hanja:"機/氣/記/期/技/基",vn:"Cơ/Khí/Ký/Kỳ/Kỹ/Cơ",meaning:"machine, energy, record, period",tier:"common",theme:"teal",words:[
{w:"기계",m:"cơ giới (máy móc)"},{w:"기술",m:"kỹ thuật"},{w:"기록",m:"ký lục"},{w:"기간",m:"kỳ gian"},
{w:"기회",m:"cơ hội"},{w:"기본",m:"cơ bản"},{w:"기억",m:"ký ức"},{w:"기준",m:"cơ chuẩn (tiêu chuẩn)"},
{w:"기능",m:"cơ năng / kỹ năng"},{w:"기대",m:"kỳ đại (kỳ vọng)"},{w:"기업",m:"기업 (doanh nghiệp)"},
{w:"인기",m:"nhân khí"},{w:"위기",m:"nguy cơ"},{w:"동기",m:"động cơ"}]},

{char:"수",hanja:"數/水/手/受/修",vn:"Số/Thủy/Thủ/Thụ/Tu",meaning:"number, water, hand, receive",tier:"common",theme:"blue",words:[
{w:"수업",m:"thụ nghiệp (bài học)"},{w:"수학",m:"toán học (số học)"},{w:"수입",m:"thu nhập"},
{w:"수출",m:"xuất khẩu"},{w:"수준",m:"trình độ (thủy chuẩn)"},{w:"수단",m:"thủ đoạn / phương tiện"},
{w:"수요",m:"nhu cầu (thụ yếu)"},{w:"숫자",m:"số tự (con số)"},{w:"수정",m:"tu chỉnh"},
{w:"수상",m:"thủ tướng / đáng ngờ"}]},

{char:"자",hanja:"自/者/子/資",vn:"Tự/Giả/Tử/Tư",meaning:"self, person, child, resource",tier:"essential",theme:"green",words:[
{w:"자연",m:"tự nhiên"},{w:"자유",m:"tự do"},{w:"자신",m:"tự thân"},{w:"기자",m:"ký giả"},
{w:"학자",m:"học giả"},{w:"자동",m:"tự động"},{w:"자원",m:"tài nguyên (tư nguyên)"},
{w:"자격",m:"tư cách"},{w:"자료",m:"tư liệu"},{w:"자세",m:"tư thế"},
{w:"저자",m:"tác giả"},{w:"투자",m:"đầu tư"},{w:"소비자",m:"tiêu phí giả (người tiêu dùng)"}]},

{char:"의",hanja:"意/醫/衣/義",vn:"Ý/Y/Y/Nghĩa",meaning:"meaning, medical, clothes, justice",tier:"common",theme:"pink",words:[
{w:"의미",m:"ý nghĩa"},{w:"의견",m:"ý kiến"},{w:"의사",m:"y sĩ (bác sĩ)"},{w:"의무",m:"nghĩa vụ"},
{w:"의식",m:"ý thức / nghi thức"},{w:"주의",m:"chú ý"},{w:"동의",m:"đồng ý"},
{w:"의도",m:"ý đồ"},{w:"의지",m:"ý chí"},{w:"정의",m:"chính nghĩa / định nghĩa"}]},

{char:"공",hanja:"工/公/空/功/共",vn:"Công/Không",meaning:"work, public, empty, merit",tier:"common",theme:"indigo",words:[
{w:"공부",m:"công phu (học)"},{w:"공업",m:"công nghiệp"},{w:"공간",m:"không gian"},{w:"공원",m:"công viên"},
{w:"성공",m:"thành công"},{w:"공동",m:"cộng đồng"},{w:"공급",m:"cung cấp"},
{w:"공연",m:"công diễn"},{w:"공식",m:"công thức"},{w:"공장",m:"công trường (nhà máy)"},
{w:"공무원",m:"công vụ viên"},{w:"공통",m:"cộng thông (chung)"}]},

{char:"원",hanja:"原/員/院/園/源/願",vn:"Nguyên/Viên/Viện/Viên/Nguyện",meaning:"origin, member, institute",tier:"common",theme:"red",words:[
{w:"원인",m:"nguyên nhân"},{w:"회원",m:"hội viên"},{w:"병원",m:"bệnh viện"},{w:"공원",m:"công viên"},
{w:"자원",m:"tài nguyên"},{w:"원래",m:"nguyên lai (vốn dĩ)"},{w:"직원",m:"chức viên"},
{w:"원리",m:"nguyên lý"},{w:"지원",m:"chi viên (hỗ trợ)"},{w:"원칙",m:"nguyên tắc"},
{w:"소원",m:"sở nguyện (ước muốn)"},{w:"만원",m:"vạn viên / đầy"}]},

{char:"상",hanja:"上/想/像/狀/商/常/賞",vn:"Thượng/Tưởng/Tượng/Trạng/Thương/Thường/Thưởng",meaning:"up, think, state",tier:"common",theme:"purple",words:[
{w:"상황",m:"trạng huống (tình hình)"},{w:"상상",m:"tưởng tượng"},{w:"이상",m:"lý tưởng / bất thường"},
{w:"상품",m:"thương phẩm"},{w:"상대",m:"tương đối / đối phương"},{w:"정상",m:"bình thường / đỉnh"},
{w:"인상",m:"ấn tượng"},{w:"상식",m:"thường thức"},{w:"상징",m:"tượng trưng"},
{w:"향상",m:"hướng thượng (nâng cao)"}]},

{char:"력",hanja:"力/歷",vn:"Lực/Lịch",meaning:"power, history",tier:"advanced",theme:"orange",words:[
{w:"능력",m:"năng lực"},{w:"노력",m:"nỗ lực"},{w:"역사",m:"lịch sử"},{w:"경력",m:"kinh lịch"},
{w:"협력",m:"hiệp lực"},{w:"실력",m:"thực lực"},{w:"권력",m:"quyền lực"},{w:"압력",m:"áp lực"},
{w:"매력",m:"mị lực (sức hút)"},{w:"영향력",m:"ảnh hưởng lực"},{w:"잠재력",m:"tiềm tại lực"}]},

{char:"실",hanja:"室/實/失",vn:"Thất/Thực/Thất",meaning:"room, real, lose",tier:"advanced",theme:"teal",words:[
{w:"사실",m:"sự thật"},{w:"실제",m:"thực tế"},{w:"실험",m:"thực nghiệm"},{w:"실수",m:"thất thủ (sai lầm)"},
{w:"교실",m:"giáo thất"},{w:"실내",m:"thất nội"},{w:"실현",m:"thực hiện"},{w:"실시",m:"thực thi"},
{w:"실력",m:"thực lực"},{w:"실패",m:"thất bại"},{w:"충실",m:"trung thực"}]},

{char:"주",hanja:"主/住/注/州/週",vn:"Chủ/Trú/Chú/Châu/Tuần",meaning:"main, live, pour, state, week",tier:"advanced",theme:"blue",words:[
{w:"주민",m:"cư dân (trú dân)"},{w:"주장",m:"chủ trương"},{w:"주의",m:"chú ý"},
{w:"주요",m:"chủ yếu"},{w:"거주",m:"cư trú"},{w:"주인",m:"chủ nhân"},{w:"주변",m:"chu biên"},
{w:"주제",m:"chủ đề"},{w:"주목",m:"chú mục"},{w:"민주",m:"dân chủ"}]},

{char:"분",hanja:"分/粉",vn:"Phân/Phấn",meaning:"divide, part",tier:"advanced",theme:"pink",words:[
{w:"부분",m:"bộ phận"},{w:"분석",m:"phân tích"},{w:"구분",m:"khu phân (phân biệt)"},
{w:"분야",m:"phân dã (lĩnh vực)"},{w:"분위기",m:"phân vi khí (bầu không khí)"},
{w:"충분",m:"sung phân (đầy đủ)"},{w:"처분",m:"xử phân"},{w:"과분",m:"quá phân"},
{w:"분명",m:"phân minh (rõ ràng)"},{w:"분류",m:"phân loại"}]},

{char:"도",hanja:"度/道/圖/都/島",vn:"Độ/Đạo/Đồ/Đô/Đảo",meaning:"degree, way, map, capital",tier:"advanced",theme:"green",words:[
{w:"제도",m:"chế độ"},{w:"도시",m:"đô thị"},{w:"온도",m:"ôn độ"},{w:"태도",m:"thái độ"},
{w:"도로",m:"đạo lộ (đường)"},{w:"도움",m:"giúp đỡ"},{w:"정도",m:"trình độ"},
{w:"속도",m:"tốc độ"},{w:"도덕",m:"đạo đức"},{w:"도전",m:"đồ chiến (thử thách)"}]},

{char:"통",hanja:"通/統",vn:"Thông/Thống",meaning:"pass through, govern",tier:"advanced",theme:"indigo",words:[
{w:"교통",m:"giao thông"},{w:"전통",m:"truyền thống"},{w:"통일",m:"thống nhất"},{w:"통신",m:"thông tín"},
{w:"소통",m:"sơ thông (giao tiếp)"},{w:"보통",m:"phổ thông"},{w:"공통",m:"cộng thông (chung)"},
{w:"통계",m:"thống kê"},{w:"통제",m:"thống chế (kiểm soát)"},{w:"유통",m:"lưu thông"}]},

{char:"적",hanja:"的/積/敵/績",vn:"Đích/Tích/Địch/Tích",meaning:"target, accumulate, enemy",tier:"advanced",theme:"red",words:[
{w:"목적",m:"mục đích"},{w:"적극",m:"tích cực"},{w:"소극적",m:"tiêu cực"},{w:"역사적",m:"lịch sử đích"},
{w:"국적",m:"quốc tịch"},{w:"실적",m:"thực tích"},{w:"성적",m:"thành tích"},
{w:"적용",m:"áp dụng"},{w:"적절",m:"thích thiết (thích hợp)"},{w:"축적",m:"tích lũy"}]},

{char:"심",hanja:"心/深/審/尋",vn:"Tâm/Thâm/Thẩm/Tầm",meaning:"heart, deep, examine",tier:"advanced",theme:"purple",words:[
{w:"관심",m:"quan tâm"},{w:"중심",m:"trung tâm"},{w:"심각",m:"thâm khắc (nghiêm trọng)"},
{w:"심리",m:"tâm lý"},{w:"안심",m:"an tâm"},{w:"열심",m:"nhiệt tâm"},
{w:"양심",m:"lương tâm"},{w:"심사",m:"thẩm tra"},{w:"핵심",m:"hạch tâm (cốt lõi)"}]},

{char:"민",hanja:"民",vn:"Dân",meaning:"people, citizen",tier:"essential",theme:"teal",words:[
{w:"국민",m:"quốc dân"},{w:"시민",m:"thị dân"},{w:"주민",m:"cư dân"},{w:"민주",m:"dân chủ"},
{w:"민족",m:"dân tộc"},{w:"민간",m:"dân gian"},{w:"민감",m:"mẫn cảm"},
{w:"이민",m:"di dân"},{w:"난민",m:"nạn dân"},{w:"민원",m:"dân nguyện"}]},

{char:"법",hanja:"法",vn:"Pháp",meaning:"law, method",tier:"essential",theme:"red",words:[
{w:"법률",m:"pháp luật"},{w:"방법",m:"phương pháp"},{w:"문법",m:"văn pháp (ngữ pháp)"},{w:"법원",m:"pháp viện (tòa án)"},
{w:"합법",m:"hợp pháp"},{w:"불법",m:"bất hợp pháp"},{w:"법칙",m:"pháp tắc"},
{w:"헌법",m:"hiến pháp"},{w:"법학",m:"pháp học"},{w:"법적",m:"pháp đích (về mặt pháp lý)"}]},

{char:"보",hanja:"保/報/步/補",vn:"Bảo/Báo/Bộ/Bổ",meaning:"protect, report, step, supplement",tier:"common",theme:"green",words:[
{w:"보호",m:"bảo hộ"},{w:"보험",m:"bảo hiểm"},{w:"보고",m:"báo cáo"},{w:"보도",m:"báo đạo (đưa tin)"},
{w:"보장",m:"bảo chưởng (bảo đảm)"},{w:"보통",m:"phổ thông"},{w:"정보",m:"thông tin"},
{w:"보관",m:"bảo quản"},{w:"보충",m:"bổ sung"},{w:"보수",m:"bảo thủ / sửa chữa"},{w:"보존",m:"bảo tồn"}]},

{char:"건",hanja:"建/健/件",vn:"Kiến/Kiện/Kiện",meaning:"build, health, matter",tier:"common",theme:"orange",words:[
{w:"건설",m:"kiến thiết"},{w:"건강",m:"kiện khang (sức khỏe)"},{w:"건물",m:"kiến vật (tòa nhà)"},
{w:"사건",m:"sự kiện"},{w:"조건",m:"điều kiện"},{w:"건축",m:"kiến trúc"},
{w:"건의",m:"kiến nghị"},{w:"건전",m:"kiện toàn (lành mạnh)"},{w:"문건",m:"văn kiện"}]},

{char:"연",hanja:"然/硏/連/演/延",vn:"Nhiên/Nghiên/Liên/Diễn/Diên",meaning:"nature, research, connect, perform",tier:"common",theme:"blue",words:[
{w:"자연",m:"tự nhiên"},{w:"연구",m:"nghiên cứu"},{w:"연결",m:"liên kết"},{w:"연습",m:"luyện tập"},
{w:"연설",m:"diễn thuyết"},{w:"연기",m:"diễn kỹ / hoãn"},{w:"연속",m:"liên tục"},
{w:"연락",m:"liên lạc"},{w:"연장",m:"kéo dài"},{w:"관련",m:"quan liên (liên quan)"},
{w:"연료",m:"nhiên liệu"},{w:"연합",m:"liên hợp"}]},

{char:"감",hanja:"感/減/監",vn:"Cảm/Giảm/Giám",meaning:"feel, reduce, supervise",tier:"common",theme:"pink",words:[
{w:"감정",m:"cảm tình"},{w:"감동",m:"cảm động"},{w:"감사",m:"cảm tạ"},{w:"감각",m:"cảm giác"},
{w:"감소",m:"giảm thiểu"},{w:"감독",m:"giám đốc"},{w:"민감",m:"mẫn cảm"},
{w:"감상",m:"cảm thưởng (thưởng thức)"},{w:"감염",m:"cảm nhiễm (lây nhiễm)"},{w:"직감",m:"trực cảm"}]},

{char:"장",hanja:"場/長/章/裝/將/障",vn:"Trường/Trường/Chương/Trang/Tướng/Chướng",meaning:"place, long, chapter",tier:"common",theme:"indigo",words:[
{w:"시장",m:"thị trường"},{w:"공장",m:"công trường"},{w:"성장",m:"thành trưởng"},{w:"회장",m:"hội trưởng"},
{w:"사장",m:"giám đốc"},{w:"장소",m:"trường sở (nơi chốn)"},{w:"보장",m:"bảo chưởng"},
{w:"장점",m:"ưu điểm"},{w:"장래",m:"tương lai"},{w:"장면",m:"trường diện (cảnh)"},
{w:"장애",m:"chướng ngại"},{w:"장기",m:"trường kỳ (dài hạn)"}]},

{char:"활",hanja:"活",vn:"Hoạt",meaning:"live, active",tier:"common",theme:"green",words:[
{w:"생활",m:"sinh hoạt"},{w:"활동",m:"hoạt động"},{w:"활용",m:"hoạt dụng (ứng dụng)"},{w:"활발",m:"hoạt bát"},
{w:"활력",m:"hoạt lực"},{w:"활성",m:"hoạt tính"},{w:"부활",m:"phục hoạt"},
{w:"활약",m:"hoạt dược (hoạt động tích cực)"},{w:"활기",m:"hoạt khí (sức sống)"}]},

{char:"물",hanja:"物",vn:"Vật",meaning:"thing, object",tier:"common",theme:"teal",words:[
{w:"동물",m:"động vật"},{w:"식물",m:"thực vật"},{w:"인물",m:"nhân vật"},{w:"생물",m:"sinh vật"},
{w:"물질",m:"vật chất"},{w:"건물",m:"kiến vật (tòa nhà)"},{w:"물건",m:"vật kiện (đồ vật)"},
{w:"물가",m:"vật giá"},{w:"사물",m:"sự vật"},{w:"물리",m:"vật lý"},{w:"농산물",m:"nông sản vật"}]},

{char:"용",hanja:"用/容",vn:"Dụng/Dung",meaning:"use, contain",tier:"common",theme:"orange",words:[
{w:"사용",m:"sử dụng"},{w:"이용",m:"lợi dụng"},{w:"내용",m:"nội dung"},{w:"활용",m:"hoạt dụng"},
{w:"비용",m:"phí dụng"},{w:"작용",m:"tác dụng"},{w:"적용",m:"áp dụng"},
{w:"용어",m:"dụng ngữ (thuật ngữ)"},{w:"신용",m:"tín dụng"},{w:"고용",m:"cố dụng (thuê)"}]},

{char:"신",hanja:"新/身/信/神/申",vn:"Tân/Thân/Tín/Thần/Thân",meaning:"new, body, believe, god",tier:"essential",theme:"purple",words:[
{w:"신문",m:"tân văn (báo)"},{w:"신체",m:"thân thể"},{w:"자신",m:"tự thân"},{w:"신뢰",m:"tín lại"},
{w:"신경",m:"thần kinh"},{w:"신청",m:"thân thỉnh (đăng ký)"},{w:"신용",m:"tín dụng"},
{w:"정신",m:"tinh thần"},{w:"혁신",m:"cách tân"},{w:"통신",m:"thông tín"},{w:"신호",m:"tín hiệu"}]},

{char:"리",hanja:"理/利",vn:"Lý/Lợi",meaning:"reason, profit",tier:"common",theme:"red",words:[
{w:"관리",m:"quản lý"},{w:"처리",m:"xử lý"},{w:"원리",m:"nguyên lý"},{w:"심리",m:"tâm lý"},
{w:"합리",m:"hợp lý"},{w:"이익",m:"lợi ích"},{w:"편리",m:"tiện lợi"},
{w:"정리",m:"chỉnh lý"},{w:"물리",m:"vật lý"},{w:"유리",m:"hữu lợi / thủy tinh"},{w:"논리",m:"luận lý (logic)"}]},

{char:"체",hanja:"體/替",vn:"Thể/Thế",meaning:"body, system, replace",tier:"common",theme:"blue",words:[
{w:"신체",m:"thân thể"},{w:"전체",m:"toàn thể"},{w:"구체",m:"cụ thể"},{w:"단체",m:"đoàn thể"},
{w:"체계",m:"thể hệ (hệ thống)"},{w:"체험",m:"thể nghiệm"},{w:"체제",m:"thể chế"},
{w:"체력",m:"thể lực"},{w:"체육",m:"thể dục"},{w:"주체",m:"chủ thể"},{w:"물체",m:"vật thể"}]},

{char:"안",hanja:"安/案/眼",vn:"An/Án/Nhãn",meaning:"peace, plan, eye",tier:"common",theme:"green",words:[
{w:"안전",m:"an toàn"},{w:"안정",m:"an định"},{w:"안심",m:"an tâm"},{w:"제안",m:"đề án"},
{w:"방안",m:"phương án"},{w:"안내",m:"an nội (hướng dẫn)"},{w:"불안",m:"bất an"},
{w:"안경",m:"nhãn kính (kính mắt)"},{w:"치안",m:"trị an"},{w:"보안",m:"bảo an"}]},

{char:"해",hanja:"海/解/害/該",vn:"Hải/Giải/Hại/Cai",meaning:"sea, solve, harm",tier:"common",theme:"pink",words:[
{w:"해결",m:"giải quyết"},{w:"이해",m:"lý giải (hiểu)"},{w:"해석",m:"giải thích"},{w:"해외",m:"hải ngoại"},
{w:"피해",m:"bị hại"},{w:"해양",m:"hải dương"},{w:"해방",m:"giải phóng"},
{w:"오해",m:"ngộ giải (hiểu lầm)"},{w:"해당",m:"cai đương (tương ứng)"},{w:"해산",m:"giải tán"}]},

{char:"행",hanja:"行/幸",vn:"Hành/Hạnh",meaning:"go, do, luck",tier:"essential",theme:"indigo",words:[
{w:"행동",m:"hành động"},{w:"행복",m:"hạnh phúc"},{w:"행사",m:"hành sự (sự kiện)"},{w:"여행",m:"du lịch (lữ hành)"},
{w:"은행",m:"ngân hàng"},{w:"시행",m:"thi hành"},{w:"실행",m:"thực hành"},{w:"행위",m:"hành vi"},
{w:"행정",m:"hành chính"},{w:"유행",m:"lưu hành"},{w:"진행",m:"tiến hành"}]},

{char:"조",hanja:"造/條/調/組/助/早",vn:"Tạo/Điều/Điều/Tổ/Trợ/Tảo",meaning:"make, condition, investigate, group",tier:"advanced",theme:"orange",words:[
{w:"조건",m:"điều kiện"},{w:"조사",m:"điều tra"},{w:"구조",m:"cấu tạo / cứu trợ"},{w:"조직",m:"tổ chức"},
{w:"제조",m:"chế tạo"},{w:"조절",m:"điều tiết"},{w:"강조",m:"cường điệu (nhấn mạnh)"},
{w:"창조",m:"sáng tạo"},{w:"조정",m:"điều chỉnh"},{w:"협조",m:"hiệp trợ (hợp tác)"}]},

{char:"단",hanja:"團/單/短/段/斷",vn:"Đoàn/Đơn/Đoản/Đoạn/Đoạn",meaning:"group, single, short, section",tier:"advanced",theme:"teal",words:[
{w:"단체",m:"đoàn thể"},{w:"단순",m:"đơn thuần"},{w:"단계",m:"đoạn giai (giai đoạn)"},{w:"수단",m:"thủ đoạn"},
{w:"판단",m:"phán đoán"},{w:"결단",m:"quyết đoán"},{w:"단점",m:"nhược điểm"},
{w:"단기",m:"đoản kỳ"},{w:"단위",m:"đơn vị"},{w:"중단",m:"trung đoạn (gián đoạn)"}]},

{char:"일",hanja:"一/日",vn:"Nhất/Nhật",meaning:"one, day, sun",tier:"essential",theme:"purple",words:[
{w:"통일",m:"thống nhất"},{w:"일반",m:"nhất ban (nói chung)"},{w:"일정",m:"nhật trình (lịch trình)"},
{w:"일부",m:"nhất bộ (một phần)"},{w:"생일",m:"sinh nhật"},{w:"일상",m:"nhật thường"},
{w:"일시",m:"nhất thời"},{w:"동일",m:"đồng nhất"},{w:"일치",m:"nhất trí"},{w:"일자",m:"nhật tử (ngày)"}]},

{char:"식",hanja:"食/式/識/植",vn:"Thực/Thức/Thức/Thực",meaning:"eat, form, know, plant",tier:"common",theme:"red",words:[
{w:"음식",m:"ẩm thực"},{w:"식품",m:"thực phẩm"},{w:"의식",m:"ý thức"},{w:"지식",m:"tri thức"},
{w:"공식",m:"công thức"},{w:"형식",m:"hình thức"},{w:"식물",m:"thực vật"},
{w:"인식",m:"nhận thức"},{w:"방식",m:"phương thức"},{w:"식당",m:"thực đường (nhà hàng)"}]},

{char:"방",hanja:"方/放/防/房/訪",vn:"Phương/Phóng/Phòng/Phòng/Phỏng",meaning:"direction, release, prevent, room",tier:"common",theme:"indigo",words:[
{w:"방법",m:"phương pháp"},{w:"방향",m:"phương hướng"},{w:"방문",m:"phỏng vấn / thăm"},
{w:"방송",m:"phóng tống (truyền hình)"},{w:"방지",m:"phòng chỉ (ngăn chặn)"},{w:"해방",m:"giải phóng"},
{w:"방안",m:"phương án"},{w:"방식",m:"phương thức"},{w:"예방",m:"dự phòng"},{w:"개방",m:"khai phóng"}]},

{char:"평",hanja:"平/評",vn:"Bình/Bình",meaning:"flat, peace, evaluate",tier:"advanced",theme:"green",words:[
{w:"평가",m:"bình giá (đánh giá)"},{w:"평화",m:"hòa bình"},{w:"평균",m:"bình quân"},
{w:"평소",m:"bình thường (thường ngày)"},{w:"공평",m:"công bằng"},{w:"비평",m:"phê bình"},
{w:"평등",m:"bình đẳng"},{w:"수평",m:"thủy bình"},{w:"평범",m:"bình phàm (tầm thường)"}]},

{char:"특",hanja:"特",vn:"Đặc",meaning:"special, particular",tier:"advanced",theme:"orange",words:[
{w:"특별",m:"đặc biệt"},{w:"특히",m:"đặc biệt là"},{w:"특성",m:"đặc tính"},{w:"특징",m:"đặc trưng"},
{w:"특정",m:"đặc định"},{w:"독특",m:"độc đặc"},{w:"특기",m:"đặc kỹ (sở trường)"},
{w:"특색",m:"đặc sắc"},{w:"특수",m:"đặc thù"},{w:"특허",m:"đặc hứa (bằng sáng chế)"}]},

{char:"능",hanja:"能",vn:"Năng",meaning:"ability, can",tier:"advanced",theme:"teal",words:[
{w:"능력",m:"năng lực"},{w:"기능",m:"cơ năng / kỹ năng"},{w:"가능",m:"khả năng"},{w:"불가능",m:"bất khả năng"},
{w:"재능",m:"tài năng"},{w:"가능성",m:"khả năng tính"},{w:"성능",m:"tính năng"},
{w:"유능",m:"hữu năng"},{w:"만능",m:"vạn năng"},{w:"본능",m:"bản năng"}]},

{char:"요",hanja:"要/料",vn:"Yếu/Liệu",meaning:"need, important, material",tier:"advanced",theme:"pink",words:[
{w:"필요",m:"tất yếu (cần thiết)"},{w:"중요",m:"trọng yếu"},{w:"주요",m:"chủ yếu"},{w:"요인",m:"yếu nhân (yếu tố)"},
{w:"요구",m:"yêu cầu"},{w:"요리",m:"liệu lý (nấu ăn)"},{w:"수요",m:"nhu cầu"},
{w:"자료",m:"tư liệu"},{w:"연료",m:"nhiên liệu"},{w:"요약",m:"yếu ước (tóm tắt)"}]},

{char:"지",hanja:"地/知/紙/支/志",vn:"Địa/Tri/Chỉ/Chi/Chí",meaning:"ground, know, paper, support",tier:"essential",theme:"blue",words:[
{w:"지역",m:"địa vực (khu vực)"},{w:"토지",m:"thổ địa"},{w:"지식",m:"tri thức"},{w:"지원",m:"chi viên"},
{w:"지방",m:"địa phương"},{w:"의지",m:"ý chí"},{w:"지도",m:"bản đồ / chỉ đạo"},
{w:"지배",m:"chi phối"},{w:"지위",m:"địa vị"},{w:"잡지",m:"tạp chí"},{w:"지구",m:"địa cầu"}]},

{char:"비",hanja:"比/費/非/備/批",vn:"Tỷ/Phí/Phi/Bị/Phê",meaning:"compare, cost, not, prepare",tier:"advanced",theme:"red",words:[
{w:"비교",m:"so sánh (tỷ giáo)"},{w:"비용",m:"phí dụng"},{w:"비판",m:"phê phán"},{w:"준비",m:"chuẩn bị"},
{w:"비율",m:"tỷ suất"},{w:"소비",m:"tiêu phí"},{w:"비밀",m:"bí mật"},
{w:"비난",m:"phỉ báng"},{w:"설비",m:"thiết bị"},{w:"대비",m:"đối bị (chuẩn bị / so sánh)"}]}
];
