// TOPIK II Grammar Data - Full 148 entries
const GRAMMAR_DATA = [
    {
        id: 'connectors', icon: '🔗', title: '연결어미 (Vĩ tố liên kết)',
        description: 'Các đuôi nối câu trung-cao cấp thường gặp trong TOPIK II',
        items: [
            {
                name: '-(으)ㄴ 채(로)', meaning: 'Trong trạng thái / Nguyên vẹn', level: 4,
                theory: ['<b>-(으)ㄴ 채(로)</b> = trong trạng thái, giữ nguyên trạng thái đó mà làm việc khác.', 'Gắn vào thân động từ. Nhấn mạnh trạng thái duy trì không đổi khi hành động khác xảy ra.', 'Không patchim: -ㄴ 채. Có patchim: -은 채.'],
                examples: [
                    { kr: '신발을 신<b>은 채로</b> 들어갔어요.', vi: 'Đi giày nguyên vào nhà.' },
                    { kr: '불을 켜 놓<b>은 채</b> 잠들었어요.', vi: 'Bật đèn nguyên rồi ngủ.' },
                    { kr: '눈을 감<b>은 채</b> 음악을 들었어요.', vi: 'Nhắm mắt nghe nhạc.' }
                ],
                notes: ['Nhấn mạnh trạng thái giữ nguyên không thay đổi.', 'Chỉ dùng với động từ, KHÔNG dùng với tính từ.', 'So sánh: -고 đơn thuần nối hành động, -(으)ㄴ 채(로) nhấn mạnh trạng thái DUY TRÌ.']
            },
            {
                name: '-(으)ㄴ/는 김에', meaning: 'Nhân tiện / Tiện thể', level: 4,
                theory: ['<b>-(으)ㄴ/는 김에</b> = nhân tiện, tiện thể. Khi đang làm việc A, tiện thể làm thêm việc B.', 'Động từ hiện tại: -는 김에. Quá khứ: -(으)ㄴ 김에.', 'Hành động B là phụ, không phải mục đích chính.'],
                examples: [
                    { kr: '마트에 가<b>는 김에</b> 우유도 사 왔어요.', vi: 'Nhân tiện đi siêu thị mua luôn sữa.' },
                    { kr: '청소하<b>는 김에</b> 빨래도 했어요.', vi: 'Nhân tiện dọn dẹp giặt đồ luôn.' },
                    { kr: '서울에 올라<b>온 김에</b> 친구도 만났어요.', vi: 'Nhân tiện lên Seoul gặp luôn bạn.' }
                ],
                notes: ['Hành động thêm (vế sau) là phụ, không phải lý do chính.', 'Khác -아/어서: -아/어서 là nguyên nhân, -는 김에 là "tiện thể".']
            },
            {
                name: '-(으)ㄴ/는 반면(에)', meaning: 'Ngược lại / Trái lại', level: 4,
                theory: ['<b>-(으)ㄴ/는 반면(에)</b> = ngược lại, trái lại, mặt khác. Nêu hai mặt đối lập.', 'Động từ: -는 반면. Tính từ: -(으)ㄴ 반면.'],
                examples: [
                    { kr: '형은 키가 큰 <b>반면에</b> 동생은 작아요.', vi: 'Anh thì cao, ngược lại em thì thấp.' },
                    { kr: '이 식당은 맛있는 <b>반면에</b> 비싸요.', vi: 'Nhà hàng này ngon nhưng ngược lại thì đắt.' },
                    { kr: '택시는 편리한 <b>반면에</b> 지하철보다 비싸다.', vi: 'Taxi tiện lợi nhưng ngược lại đắt hơn tàu điện.' }
                ],
                notes: ['Nhấn mạnh sự tương phản giữa hai vế — formal hơn -지만.', 'Hai vế phải cùng chủ đề nhưng khác đặc điểm.', 'Dùng nhiều trong văn viết, báo cáo.']
            },
            {
                name: '-(으)ㄴ/는 탓에', meaning: 'Tại vì / Do lỗi (tiêu cực)', level: 4,
                theory: ['<b>-(으)ㄴ/는 탓에</b> = tại vì, do lỗi. Nguyên nhân dẫn đến kết quả TIÊU CỰC, mang sắc thái đổ lỗi.', 'Động từ: -는 탓에 / -(으)ㄴ 탓에 (quá khứ). Tính từ: -(으)ㄴ 탓에.', 'Danh từ + 탓에: 날씨 탓에.'],
                examples: [
                    { kr: '비가 온 <b>탓에</b> 소풍을 못 갔어요.', vi: 'Tại trời mưa nên không đi picnic được.' },
                    { kr: '운동 안 한 <b>탓에</b> 살이 많이 쪘어요.', vi: 'Tại không tập thể dục nên tăng cân nhiều.' },
                    { kr: '늦게 일어난 <b>탓에</b> 지각했어요.', vi: 'Tại dậy muộn nên đi trễ.' }
                ],
                notes: ['Kết quả luôn TIÊU CỰC (≠ 덕분에 tích cực).', 'So sánh: 덕분에 = nhờ (tốt), 탓에 = tại (xấu), 바람에 = vì bất ngờ (xấu).', '탓을 하다 = đổ lỗi: 남의 탓을 하지 마세요 (Đừng đổ lỗi cho người khác).']
            },
            {
                name: '-(으)니까(요)', meaning: 'Vì / Bởi vì (trung tính)', level: 3,
                theory: ['<b>-(으)니까(요)</b> = vì, bởi vì. Đưa ra lý do/nguyên nhân cho vế sau.', 'Có patchim: -으니까. Không patchim: -니까.', 'Khác -아/어서: -(으)니까 dùng được với mệnh lệnh/đề nghị ở vế sau.'],
                examples: [
                    { kr: '시간이 없<b>으니까</b> 빨리 가세요.', vi: 'Vì không có thời gian nên đi nhanh đi.' },
                    { kr: '열심히 공부하<b>니까</b> 성적이 우수하다.', vi: 'Vì học chăm nên điểm cao.' },
                    { kr: '날씨가 좋<b>으니까</b> 산책할까요?', vi: 'Vì thời tiết đẹp nên đi dạo nhé?' }
                ],
                notes: ['DUY NHẤT dùng được với mệnh lệnh/đề nghị: 추우니까 문 닫으세요 (✓). 추워서 문 닫으세요 (✗).', 'Khẩu ngữ: -니까 → -니깐 (rút gọn, không chuẩn nhưng phổ biến).', 'So sánh: -아/어서 = nguyên nhân khách quan, -(으)니까 = lý do chủ quan/nhấn mạnh.']
            },
            {
                name: '-(으)니만큼', meaning: 'Vì ... nên / Đã ... thì', level: 5,
                theory: ['<b>-(으)니만큼</b> = vì đã ... nên, bởi vì ... cho nên. Nhấn mạnh lý do đã rõ ràng nên kết quả tất yếu.', 'Formal hơn -(으)니까. Thường dùng trong văn viết/phát biểu.'],
                examples: [
                    { kr: '노력하<b>니만큼</b> 결과가 기대된다.', vi: 'Vì đã cố gắng nên kết quả đáng mong đợi.' },
                    { kr: '이미 결정된 일이<b>니만큼</b> 따르겠습니다.', vi: 'Vì đã quyết rồi nên tôi sẽ tuân theo.' },
                    { kr: '약속했<b>으니만큼</b> 지켜야 합니다.', vi: 'Đã hứa rồi thì phải giữ lời.' }
                ],
                notes: ['Formal, dùng nhiều trong bài phát biểu, văn bản.', 'Nhấn mạnh: lý do là tiền đề rõ ràng → kết quả đương nhiên.']
            },
            {
                name: '-(으)ㄹ 겸 (해서)', meaning: 'Nhân tiện / Vừa ... vừa', level: 4,
                theory: ['<b>-(으)ㄹ 겸 (해서)</b> = vừa để A vừa để B; nhân tiện A, cũng B. Thường nêu 2 mục đích.', 'Cấu trúc phổ biến: A-(으)ㄹ 겸 B-(으)ㄹ 겸 해서.'],
                examples: [
                    { kr: '운동도 하<b>ㄹ 겸</b> 산책도 하<b>ㄹ 겸</b> 해서 공원에 갔어요.', vi: 'Vừa tập thể dục vừa đi dạo nên đã đến công viên.' },
                    { kr: '사과할 <b>겸 해서</b> 편지를 썼어요.', vi: 'Nhân tiện xin lỗi nên đã viết thư.' },
                    { kr: '구경도 할 <b>겸</b> 쇼핑도 할 <b>겸</b> 시내에 나갔어요.', vi: 'Vừa ngắm vừa mua sắm nên ra phố.' }
                ],
                notes: ['Thường liệt kê 2 mục đích: A 겸 B 겸 해서.', 'Khác -는 김에: -는 김에 nhấn mạnh "tiện thể", -ㄹ 겸 nhấn mạnh "kết hợp 2 mục đích".']
            },
            {
                name: '-(으)ㄹ수록', meaning: 'Càng ... càng', level: 3,
                theory: ['<b>-(으)ㄹ수록</b> = càng ... càng. Mức độ A tăng → mức độ B tăng theo.', 'Nhấn mạnh: -(으)면 -(으)ㄹ수록 (nếu càng ... thì càng).', 'Thường đi với 더: -(으)ㄹ수록 더.'],
                examples: [
                    { kr: '한국어는 공부하<b>면 할수록</b> 재미있어요.', vi: 'Tiếng Hàn càng học càng thú vị.' },
                    { kr: '생각하<b>면 할수록</b> 어려워요.', vi: 'Càng nghĩ càng thấy khó.' },
                    { kr: '<b>갈수록</b> 날씨가 추워져요.', vi: 'Ngày càng lạnh hơn.' }
                ],
                notes: ['갈수록 = thành ngữ nghĩa "ngày càng", KHÔNG phải "càng đi bộ".', 'Cấu trúc nhấn mạnh: A-(으)면 A-(으)ㄹ수록 = càng A thì càng.']
            },
            {
                name: '-(으)려다가', meaning: 'Định ... nhưng / Sắp ... thì', level: 4,
                theory: ['<b>-(으)려다가</b> = định làm A nhưng (chuyển sang B hoặc bị gián đoạn).', 'Gắn vào thân động từ. Nhấn mạnh ý định bị thay đổi hoặc gián đoạn.'],
                examples: [
                    { kr: '외출하<b>려다가</b> 비가 와서 안 갔어요.', vi: 'Định đi ra ngoài nhưng trời mưa nên không đi.' },
                    { kr: '말하<b>려다가</b> 그냥 참았어요.', vi: 'Định nói nhưng thôi nhịn.' },
                    { kr: '택시를 타<b>려다가</b> 버스로 바꿨어요.', vi: 'Định đi taxi nhưng chuyển sang xe buýt.' }
                ],
                notes: ['Vế sau thường cho thấy kết quả khác với ý định ban đầu.', 'Khác -(으)려고: -(으)려고 = mục đích (thực hiện), -(으)려다가 = ý định bị thay đổi.']
            },
            {
                name: '-(으)려면', meaning: 'Nếu muốn / Để mà', level: 3,
                theory: ['<b>-(으)려면</b> = nếu muốn, để mà. Đặt điều kiện cần thiết cho mục đích.', 'Rút gọn từ -(으)려고 하면. Vế sau thường là lời khuyên hoặc điều kiện.'],
                examples: [
                    { kr: '한국어를 잘하<b>려면</b> 매일 연습해야 해요.', vi: 'Nếu muốn giỏi tiếng Hàn thì phải luyện tập mỗi ngày.' },
                    { kr: '건강하<b>려면</b> 규칙적으로 운동하세요.', vi: 'Muốn khỏe mạnh thì hãy tập thể dục đều đặn.' },
                    { kr: '기념사진을 찍으<b>려면</b> 배경이 예뻐야 해요.', vi: 'Muốn chụp ảnh kỷ niệm thì phông nền phải đẹp.' }
                ],
                notes: ['Vế sau thường là -(으)세요, -아/어야 하다, -는 게 좋다.', '= -(으)려고 하면 (đầy đủ).']
            },
            {
                name: '-(으)며', meaning: 'Và / Đồng thời', level: 5,
                theory: ['<b>-(으)며</b> = và, đồng thời. Liệt kê hoặc nêu 2 hành động/tính chất song song.', 'Dạng formal của -고. Dùng nhiều trong văn viết, tin tức, bài phát biểu.'],
                examples: [
                    { kr: '피아노도 잘 치<b>며</b> 노래도 잘한다.', vi: 'Chơi piano giỏi đồng thời hát cũng hay.' },
                    { kr: '이 제품은 가볍<b>며</b> 튼튼합니다.', vi: 'Sản phẩm này nhẹ và bền.' },
                    { kr: '그는 학생이<b>며</b> 운동선수이다.', vi: 'Anh ấy vừa là sinh viên vừa là vận động viên.' }
                ],
                notes: ['Rất formal, tương đương -고 nhưng dùng trong văn viết.', 'Cũng viết là -(으)면서 khi nhấn mạnh hành động đồng thời.']
            },
            {
                name: '-(으)므로', meaning: 'Vì / Cho nên (formal)', level: 5,
                theory: ['<b>-(으)므로</b> = vì, cho nên. Dạng formal/văn viết của -아/어서, -(으)니까.', 'Không patchim → -므로, có patchim → -으므로.'],
                examples: [
                    { kr: '내일은 공휴일이<b>므로</b> 은행이 문을 닫습니다.', vi: 'Vì ngày mai là ngày lễ nên ngân hàng đóng cửa.' },
                    { kr: '시간이 없<b>으므로</b> 빨리 시작합시다.', vi: 'Vì không có thời gian nên hãy bắt đầu nhanh.' },
                    { kr: '안전을 위한 것이<b>므로</b> 협조 부탁드립니다.', vi: 'Vì là để đảm bảo an toàn nên xin hãy hợp tác.' }
                ],
                notes: ['Rất formal, dùng trong văn bản, thông báo, luật.', 'KHÔNG dùng trong hội thoại thân mật.', 'Tương đương: -기 때문에, -(으)니까, -아/어서.']
            },
            {
                name: '-고 나니(까)', meaning: 'Sau khi ... thì (nhận ra)', level: 4,
                theory: ['<b>-고 나니(까)</b> = sau khi làm xong thì (nhận ra, phát hiện). Kết quả: nhận thức mới sau hành động.', 'Gắn vào thân động từ. Nhấn mạnh phát hiện bất ngờ sau khi hoàn thành.'],
                examples: [
                    { kr: '푹 쉬<b>고 나니</b> 열이 내려갔어요.', vi: 'Nghỉ ngơi đầy đủ xong thì hết sốt.' },
                    { kr: '설명을 듣<b>고 나니까</b> 이해가 됐어요.', vi: 'Sau khi nghe giải thích thì hiểu được rồi.' },
                    { kr: '졸업하<b>고 나니까</b> 학교가 그리워요.', vi: 'Tốt nghiệp xong mới thấy nhớ trường.' }
                ],
                notes: ['Nhấn mạnh phát hiện/nhận thức SAU KHI hoàn thành.', 'So sánh: -고 나서 = đơn thuần sau khi (trình tự), -고 나니까 = sau khi xong thì nhận ra.']
            },
            {
                name: '-고 나면', meaning: 'Sau khi ... xong thì', level: 4,
                theory: ['<b>-고 나면</b> = sau khi làm xong thì (kết quả tự nhiên/dự đoán). Giả định: nếu hoàn thành A thì B.'],
                examples: [
                    { kr: '청소하<b>고 나면</b> 기분이 상쾌해진다.', vi: 'Dọn dẹp xong thì tâm trạng sảng khoái.' },
                    { kr: '이 책을 읽<b>고 나면</b> 생각이 바뀔 거예요.', vi: 'Đọc xong cuốn sách này thì sẽ thay đổi suy nghĩ.' },
                    { kr: '약을 먹<b>고 나면</b> 좀 나아질 거예요.', vi: 'Uống thuốc xong thì sẽ khá hơn.' }
                ],
                notes: ['Mang tính giả định — dự đoán kết quả sau khi hoàn thành.', 'So sánh: -고 나니까 = đã xảy ra (quá khứ), -고 나면 = giả định (tương lai).']
            },
            {
                name: '-고 나서', meaning: 'Sau khi (hoàn thành)', level: 3,
                theory: ['<b>-고 나서</b> = sau khi (hoàn thành hành động trước). Nhấn mạnh hoàn thành A rồi mới B.'],
                examples: [
                    { kr: '이메일 먼저 확인하<b>고 나서</b> 연락드릴게요.', vi: 'Kiểm tra email trước rồi sẽ liên lạc.' },
                    { kr: '손을 씻<b>고 나서</b> 밥을 먹으세요.', vi: 'Rửa tay xong rồi hãy ăn cơm.' },
                    { kr: '숙제를 다 하<b>고 나서</b> 놀아라.', vi: 'Làm bài tập xong rồi hãy chơi.' }
                ],
                notes: ['Nhấn mạnh HOÀN THÀNH A trước khi B. Khác -고 đơn thuần liệt kê.', 'Chủ ngữ hai vế thường giống nhau.']
            },
            {
                name: '-느라(고)', meaning: 'Vì bận / Do mải', level: 4,
                theory: ['<b>-느라(고)</b> = vì mải, do bận (làm gì). Lý do dẫn đến kết quả tiêu cực.', 'Chủ ngữ hai vế phải giống nhau. Vế sau thường là kết quả tiêu cực.'],
                examples: [
                    { kr: '일하<b>느라고</b> 못 갔어요.', vi: 'Vì mải làm việc nên không đi được.' },
                    { kr: '공부하<b>느라고</b> 밤을 새웠어요.', vi: 'Vì mải học nên đã thức trắng đêm.' },
                    { kr: '숙제하<b>느라고</b> 삼촌을 만날 시간이 없었다.', vi: 'Vì bận làm bài nên không có thời gian gặp chú.' }
                ],
                notes: ['Chỉ dùng với ĐỘNG TỪ. KHÔNG dùng với tính từ.', 'Vế sau KHÔNG dùng mệnh lệnh/đề nghị.', 'Vế trước KHÔNG chia thì (không -았/었-).']
            },
            {
                name: '-는 대신(에)', meaning: 'Thay vì / Bù lại', level: 4,
                theory: ['<b>-는 대신(에)</b> = thay vì, đổi lại, bù lại. Hai nghĩa: (1) thay thế, (2) bù đắp.'],
                examples: [
                    { kr: '술을 마시<b>는 대신에</b> 녹차를 마시자.', vi: 'Thay vì uống rượu hãy uống trà xanh.' },
                    { kr: '도와줄게. <b>대신</b> 나중에 밥 사 줘.', vi: 'Mình giúp. Bù lại sau này mua cơm cho mình nhé.' },
                    { kr: '가격이 싼 <b>대신에</b> 품질이 좋지 않다.', vi: 'Giá rẻ nhưng bù lại chất lượng không tốt.' }
                ],
                notes: ['Nghĩa 1: thay thế (A 대신 B = B thay cho A).', 'Nghĩa 2: bù đắp/đánh đổi (A nhưng bù lại B).', '명사 + 대신에 cũng dùng: 커피 대신에 주스 (nước ép thay cho cà phê).']
            },
            {
                name: '-(으)ㄴ/는 덕분에', meaning: 'Nhờ vào / Nhờ có', level: 3,
                theory: ['<b>-(으)ㄴ/는 덕분에</b> = nhờ vào, nhờ có. Nguyên nhân dẫn đến kết quả TÍCH CỰC.', 'Động từ: -는 덕분에 / -(으)ㄴ 덕분에. Danh từ: N + 덕분에.'],
                examples: [
                    { kr: '선생님 <b>덕분에</b> 합격했어요.', vi: 'Nhờ thầy/cô mà tôi đỗ.' },
                    { kr: '열심히 공부한 <b>덕분에</b> 좋은 성적을 받았어요.', vi: 'Nhờ học chăm chỉ mà đạt điểm cao.' },
                    { kr: '친구가 도와준 <b>덕분에</b> 일을 끝낼 수 있었어요.', vi: 'Nhờ bạn giúp mà hoàn thành công việc.' }
                ],
                notes: ['Kết quả luôn TÍCH CỰC (≠ 탓에 tiêu cực).', '감사하다 thường đi kèm: 덕분에 감사합니다.', 'So sánh 3 cấu trúc nguyên nhân: 덕분에 (+), 바람에 (−, bất ngờ), 탓에 (−, đổ lỗi).']
            },
            {
                name: '-는 바람에', meaning: 'Vì / Do (bất ngờ, tiêu cực)', level: 4,
                theory: ['<b>-는 바람에</b> = vì, do. Nguyên nhân BẤT NGỜ dẫn đến kết quả TIÊU CỰC.', 'Chỉ dùng với động từ. KHÔNG chia thì ở vế trước.'],
                examples: [
                    { kr: '비가 오<b>는 바람에</b> 소풍을 못 갔어요.', vi: 'Vì trời mưa nên không đi picnic được.' },
                    { kr: '늦게 일어나<b>는 바람에</b> 지각했어요.', vi: 'Vì dậy muộn nên đi trễ.' },
                    { kr: '갑자기 비가 오<b>는 바람에</b> 옷이 다 젖었어요.', vi: 'Vì trời đột nhiên mưa nên ướt hết quần áo.' }
                ],
                notes: ['Nguyên nhân phải BẤT NGỜ, không kiểm soát được.', 'Kết quả thường TIÊU CỰC.', 'So sánh: 탓에 = đổ lỗi, 바람에 = bất ngờ, 통에 = ồn ào/hỗn loạn.']
            },
            {
                name: '-다가', meaning: 'Đang làm ... thì / Giữa chừng', level: 3,
                theory: ['<b>-다가</b> = đang làm gì đó thì chuyển sang hành động khác. Nhấn mạnh gián đoạn hoặc chuyển đổi.', 'Gắn vào thân động từ. Chủ ngữ hai vế phải giống nhau.'],
                examples: [
                    { kr: '공부하<b>다가</b> 잠이 들었어요.', vi: 'Đang học thì ngủ thiếp đi.' },
                    { kr: '걸어가<b>다가</b> 넘어졌어요.', vi: 'Đang đi bộ thì bị ngã.' },
                    { kr: '밥을 먹<b>다가</b> 전화를 받았어요.', vi: 'Đang ăn cơm thì nhận điện thoại.' }
                ],
                notes: ['Chủ ngữ hai vế phải GIỐNG NHAU.', 'Khác -고: -다가 nhấn mạnh gián đoạn/chuyển đổi, -고 đơn thuần liệt kê.', 'Cũng dùng chỉ sự lặp lại: 웃다가 울다가 해요 (lúc cười lúc khóc).']
            },
            {
                name: '-더니', meaning: 'Trước đó ... nay / Rồi thì', level: 4,
                theory: ['<b>-더니</b> diễn tả sự thay đổi hoặc kết quả sau khi quan sát.', 'Ngôi 3: A-더니 B (anh ấy trước ... nay ...). Ngôi 1: chỉ quá khứ -았/었더니.'],
                examples: [
                    { kr: '아까 비가 오<b>더니</b> 지금은 맑아요.', vi: 'Lúc nãy mưa, giờ thì trời trong.' },
                    { kr: '열심히 공부하<b>더니</b> 시험에 합격했어요.', vi: 'Đã học chăm chỉ rồi đỗ kỳ thi.' },
                    { kr: '많이 먹<b>었더니</b> 배가 아파요.', vi: 'Ăn nhiều nên đau bụng.' }
                ],
                notes: ['Ngôi 3 + -더니: quan sát người khác thay đổi.', 'Ngôi 1 + -았/었더니: hành động của mình → kết quả bất ngờ.', 'Vế trước = thông tin đã biết/quan sát, vế sau = kết quả.']
            },
            {
                name: '-자마자', meaning: 'Ngay khi / Vừa ... liền', level: 3,
                theory: ['<b>-자마자</b> = ngay khi, vừa ... liền. Hành động vế sau xảy ra ngay lập tức sau vế trước.', 'Gắn trực tiếp vào thân động từ. Không chia thì.'],
                examples: [
                    { kr: '집에 도착하<b>자마자</b> 잠이 들었어요.', vi: 'Vừa đến nhà liền ngủ thiếp đi.' },
                    { kr: '수업이 끝나<b>자마자</b> 집에 갔어요.', vi: 'Vừa hết lớp liền về nhà.' },
                    { kr: '사장님은 좋은 소식을 듣<b>자마자</b> 미소 지었다.', vi: 'Sếp vừa nghe tin vui liền mỉm cười.' }
                ],
                notes: ['Chỉ dùng với ĐỘNG TỪ.', 'KHÔNG dùng mệnh lệnh/đề nghị ở vế sau.', 'Chủ ngữ hai vế có thể khác nhau.']
            }
        ]
    },
    {
        id: 'endings', icon: '📝', title: '종결어미 (Vĩ tố kết thúc câu)',
        description: 'Các đuôi câu trung-cao cấp diễn tả thái độ, cảm xúc, xác nhận',
        items: [
            {
                name: '-(으)ㄴ/는걸(요)', meaning: 'Mà / Thật ra ...', level: 4,
                theory: ['<b>-(으)ㄴ/는걸(요)</b> = mà, thật ra, đấy thôi. Bày tỏ phản bác nhẹ hoặc bổ sung thông tin bất ngờ.', 'Động từ: -는걸요. Tính từ: -(으)ㄴ걸요. Quá khứ: -았/었는걸요.'],
                examples: [
                    { kr: '아직 졸린<b>걸요</b>.', vi: 'Vẫn còn buồn ngủ mà.' },
                    { kr: '나도 할 수 있는<b>걸요</b>.', vi: 'Tôi cũng làm được mà.' },
                    { kr: '생각보다 맛있는<b>걸요</b>.', vi: 'Ngon hơn tưởng đấy.' }
                ],
                notes: ['Phản bác nhẹ nhàng hoặc bổ sung thông tin người nghe chưa biết.', 'Thân mật, hơi nũng nịu — thường dùng khi muốn thuyết phục.']
            },
            {
                name: '-(으)ㄴ/는데(요)', meaning: 'Nhưng mà / Mà ...', level: 3,
                theory: ['<b>-(으)ㄴ/는데(요)</b> = nhưng mà, mà. Rất đa chức năng: (1) nền tảng/bối cảnh, (2) chuyển ý nhẹ, (3) ngạc nhiên.', 'Động từ: -는데요. Tính từ: -(으)ㄴ데요.'],
                examples: [
                    { kr: '이 요리는 생각보다 맛있<b>는데요</b>.', vi: 'Món này ngon hơn tưởng mà.' },
                    { kr: '내일 시험인<b>데</b> 공부 안 했어요.', vi: 'Ngày mai thi mà chưa học.' },
                    { kr: '저는 학생인<b>데요</b>, 할인 돼요?', vi: 'Tôi là sinh viên, có giảm giá không ạ?' }
                ],
                notes: ['Đa chức năng nhất trong tiếng Hàn — dùng để mở đầu, chuyển ý, ngạc nhiên.', 'Khi kết thúc câu bằng -는데요 = bỏ lửng, ngầm hỏi/chờ phản hồi.', 'TOPIK hay kiểm tra: phân biệt -는데 (bối cảnh) vs -(으)니까 (nguyên nhân).']
            },
            {
                name: '-(으)ㄴ가(요)?', meaning: 'Có phải ...? / ... à?', level: 4,
                theory: ['<b>-(으)ㄴ가(요)?</b> = có phải ...?, ... à/ư? Dạng câu hỏi nhẹ nhàng, lịch sự.', 'Tính từ: -(으)ㄴ가요? Danh từ 이다: -인가요?'],
                examples: [
                    { kr: '여자 친구는 예쁜<b>가요</b>?', vi: 'Bạn gái đẹp à?' },
                    { kr: '혹시 학생인<b>가요</b>?', vi: 'Có phải bạn là sinh viên không?' },
                    { kr: '이것이 맞는 길인<b>가요</b>?', vi: 'Đây có phải đường đúng không?' }
                ],
                notes: ['Lịch sự và nhẹ nhàng hơn -아/어요? trực tiếp.', 'Thường dùng khi không chắc chắn, hỏi dò.', 'So sánh: -나요? ≈ -(으)ㄴ가요? nhưng -나요 dùng với động từ.']
            },
            {
                name: '-거든(요)', meaning: 'Vì / Bởi vì (giải thích)', level: 3,
                theory: ['<b>-거든(요)</b> = vì, bởi vì. Đưa ra lý do/giải thích mà NGƯỜI NGHE CHƯA BIẾT.', 'Gắn trực tiếp vào thân từ. Thường đứng ở câu thứ 2 sau kết quả.'],
                examples: [
                    { kr: '오늘 못 가요. 바쁘<b>거든요</b>.', vi: 'Hôm nay không đi được. Vì bận.' },
                    { kr: '한국어를 잘해요. 한국에서 살았<b>거든요</b>.', vi: 'Tôi giỏi tiếng Hàn. Vì đã từng sống ở Hàn.' },
                    { kr: '어려보여도 제가 상사<b>거든요</b>.', vi: 'Dù trông trẻ nhưng tôi là sếp đấy.' }
                ],
                notes: ['Dùng khi cung cấp THÔNG TIN MỚI cho người nghe.', 'Thường đứng ở câu 2 (sau kết quả, giải thích lý do).', 'Khác -(으)니까: -(으)니까 nối 2 vế, -거든요 là câu riêng biệt giải thích.']
            },
            {
                name: '-고 말고(요)', meaning: 'Tất nhiên / Đương nhiên rồi', level: 4,
                theory: ['<b>-고 말고(요)</b> = tất nhiên rồi, đương nhiên rồi. Khẳng định mạnh mẽ.'],
                examples: [
                    { kr: '한국여행은 재미있<b>고 말고요</b>.', vi: 'Tất nhiên du lịch Hàn Quốc vui rồi.' },
                    { kr: '도와줄 수 있<b>고 말고요</b>.', vi: 'Đương nhiên là giúp được rồi.' },
                    { kr: '맛있<b>고 말고요</b>!', vi: 'Ngon chứ lị!' }
                ],
                notes: ['Khẳng định rất mạnh, mang sắc thái "hỏi gì mà hỏi, đương nhiên rồi".', 'Thân mật, khẩu ngữ.']
            },
            {
                name: '-ㄴ/는다', meaning: 'Thể trần thuật / Kể lại', level: 3,
                theory: ['<b>-ㄴ/는다</b> = thể trần thuật (해라체). Dùng trong nhật ký, sách, tự nói.', 'Động từ không patchim: -ㄴ다 (간다). Có patchim: -는다 (먹는다). Tính từ: -다 (예쁘다).'],
                examples: [
                    { kr: '후식에 딸기를 먹<b>는다</b>.', vi: 'Ăn dâu tây làm tráng miệng.' },
                    { kr: '나는 매일 운동을 한<b>다</b>.', vi: 'Tôi tập thể dục mỗi ngày.' },
                    { kr: '오늘 날씨가 좋<b>다</b>.', vi: 'Hôm nay thời tiết đẹp.' }
                ],
                notes: ['Dùng trong: nhật ký, sách giáo khoa, tự nói với mình, viết báo.', 'KHÔNG dùng trong hội thoại lịch sự — đây là 해라체 (thể suồng sã).', 'Cơ sở cho nhiều cấu trúc gián tiếp: -ㄴ/는다고, -ㄴ/는다면...']
            },
            {
                name: '-나(요)?', meaning: 'Có ... không? / ... à?', level: 4,
                theory: ['<b>-나(요)?</b> = hỏi nhẹ nhàng, dùng với ĐỘNG TỪ. Lịch sự hơn -아/어요?', 'Chỉ dùng với động từ và 있다/없다.'],
                examples: [
                    { kr: '여기서 타면 되<b>나</b>?', vi: 'Lên xe ở đây được không?' },
                    { kr: '시간이 있<b>나요</b>?', vi: 'Có thời gian không ạ?' },
                    { kr: '이게 맞<b>나요</b>?', vi: 'Cái này đúng không ạ?' }
                ],
                notes: ['Dùng khi không chắc chắn, hỏi dò.', 'Tính từ dùng -(으)ㄴ가요? thay vì -나요?.', 'Thêm 요 để lịch sự.']
            },
            {
                name: '-는구나', meaning: 'À ra thế / Thì ra', level: 4,
                theory: ['<b>-는구나</b> = à ra thế, thì ra, ồ. Bày tỏ sự nhận ra, ngạc nhiên khi biết thông tin mới.', 'Động từ: -는구나. Tính từ: -(으)ㄴ 구나 / -구나. 이다: -이구나.'],
                examples: [
                    { kr: '이 애기는 벌써 걷<b>는구나</b>.', vi: 'Ồ, em bé đã biết đi rồi à.' },
                    { kr: '날씨가 정말 춥<b>구나</b>.', vi: 'Trời lạnh thật.' },
                    { kr: '네가 그 사람이<b>구나</b>.', vi: 'À, hóa ra bạn là người đó.' }
                ],
                notes: ['Tự nói với mình hoặc nói với người nhỏ tuổi hơn.', 'Dạng lịch sự: -는군요.', 'TOPIK hay kiểm tra: nhận diện sắc thái "mới nhận ra".']
            },
            {
                name: '-니/냐?', meaning: 'Có ... không? (suồng sã)', level: 3,
                theory: ['<b>-니?/-냐?</b> = hỏi trực tiếp, suồng sã (해라체/반말).', '-니 nhẹ nhàng hơn -냐. Dùng với cả động từ và tính từ.'],
                examples: [
                    { kr: '기분 나쁘<b>니</b>?', vi: 'Bạn khó chịu à?' },
                    { kr: '밥 먹었<b>냐</b>?', vi: 'Ăn cơm chưa?' },
                    { kr: '어디 가<b>니</b>?', vi: 'Đi đâu đấy?' }
                ],
                notes: ['해라체 — chỉ dùng với bạn bè, người nhỏ tuổi hơn.', '-니 mềm mại hơn -냐 (냐 hơi thô).', 'Liên quan gián tiếp: -냐고 하다 = hỏi rằng.']
            },
            {
                name: '-더군(요)', meaning: 'Tôi thấy / Tôi nhận ra', level: 4,
                theory: ['<b>-더군(요)</b> = tôi thấy, tôi nhận ra. Kể lại ấn tượng/quan sát cá nhân, thường có sắc thái ngạc nhiên.', 'Dựa trên trải nghiệm trực tiếp, kể lại cho người nghe.'],
                examples: [
                    { kr: '따님에게 귀여운 이름을 지었<b>더군요</b>.', vi: 'Tôi thấy bạn đã đặt tên rất dễ thương cho con gái.' },
                    { kr: '한국 음식이 정말 맛있<b>더군요</b>.', vi: 'Tôi thấy đồ ăn Hàn thật sự ngon.' },
                    { kr: '그 영화가 생각보다 재미있<b>더군요</b>.', vi: 'Tôi thấy phim đó hay hơn tưởng.' }
                ],
                notes: ['Có sắc thái ngạc nhiên/ấn tượng mạnh hơn -더라고요.', 'Thường dùng khi chia sẻ trải nghiệm lần đầu.', 'Formal hơn -더라고요.']
            },
            {
                name: '-더라', meaning: 'Tôi thấy / Nghe nói (kể lại)', level: 4,
                theory: ['<b>-더라</b> = tôi thấy, nghe nói. Kể lại điều mình đã chứng kiến/trải nghiệm. Thể 해라 (suồng sã).'],
                examples: [
                    { kr: '그 남자는 경찰에 잡혔<b>더라</b>.', vi: 'Nghe nói thằng đó bị cảnh sát bắt rồi.' },
                    { kr: '거기 음식이 맛있<b>더라</b>.', vi: 'Đồ ăn ở đó ngon lắm (tao thấy thế).' },
                    { kr: '그 사람 키가 크<b>더라</b>.', vi: 'Người đó cao lắm (tao thấy).' }
                ],
                notes: ['Thể suồng sã (해라체), dùng với bạn bè.', 'Dạng lịch sự: -더라고요.', 'Diễn tả trải nghiệm/quan sát trực tiếp của người nói.']
            },
            {
                name: '-더라고(요)', meaning: 'Tôi thấy / Tôi nhận ra', level: 4,
                theory: ['<b>-더라고(요)</b> = tôi thấy, tôi nhận ra. Kể lại trải nghiệm/quan sát CÁ NHÂN.', 'Dựa trên trải nghiệm trực tiếp của người nói.'],
                examples: [
                    { kr: '한국 음식이 맛있<b>더라고요</b>.', vi: 'Tôi thấy đồ ăn Hàn ngon.' },
                    { kr: '그 영화가 재미있<b>더라고요</b>.', vi: 'Tôi thấy bộ phim đó hay.' },
                    { kr: '서울이 생각보다 크<b>더라고요</b>.', vi: 'Tôi thấy Seoul lớn hơn tưởng tượng.' }
                ],
                notes: ['Chỉ dùng với trải nghiệm ĐÃ QUA (không phải ý kiến chung chung).', 'KHÔNG dùng về bản thân ở hiện tại: 저 예쁘더라고요 (✗).', 'So sánh: -더라고요 (trải nghiệm cá nhân) vs -대요 (nghe người khác nói).']
            },
            {
                name: '-던가(요)?', meaning: '... nhỉ? / Hình như ...', level: 4,
                theory: ['<b>-던가(요)?</b> = hỏi lại ký ức mơ hồ. "Hình như ... nhỉ?", "... đúng không nhỉ?"'],
                examples: [
                    { kr: '오늘 결혼기념일이<b>던가</b>?', vi: 'Hôm nay là ngày kỷ niệm cưới nhỉ?' },
                    { kr: '그 사람 이름이 뭐<b>던가요</b>?', vi: 'Tên người đó là gì nhỉ?' },
                    { kr: '가격이 얼마<b>던가요</b>?', vi: 'Giá bao nhiêu nhỉ?' }
                ],
                notes: ['Hỏi lại ký ức không rõ ràng — tự hỏi mình hoặc hỏi người khác.', 'Mang sắc thái "tôi quên mất rồi, là gì nhỉ?".']
            },
            {
                name: '-던데', meaning: 'Tôi thấy (mà) ...', level: 4,
                theory: ['<b>-던데</b> = tôi thấy (mà). Nêu thông tin đã quan sát làm nền tảng/bối cảnh.', 'Kết hợp -더- (trải nghiệm) + -ㄴ데 (bối cảnh).'],
                examples: [
                    { kr: '길이 막히<b>던데</b> 사고라도 났나?', vi: 'Tôi thấy tắc đường, có tai nạn không?' },
                    { kr: '그 식당 맛있<b>던데</b> 같이 갈래요?', vi: 'Tôi thấy nhà hàng đó ngon, đi cùng không?' },
                    { kr: '사람이 많<b>던데</b> 예약해야 할 것 같아요.', vi: 'Tôi thấy đông người, chắc phải đặt chỗ.' }
                ],
                notes: ['Nêu quan sát cá nhân làm nền tảng cho câu sau.', 'Vế sau thường là ý kiến, đề nghị, hoặc câu hỏi.']
            },
            {
                name: '-아/어라', meaning: 'Hãy / Đi (mệnh lệnh)', level: 3,
                theory: ['<b>-아/어라</b> = hãy, đi. Dạng mệnh lệnh 해라체 (suồng sã).', 'Dùng với người nhỏ tuổi hơn hoặc trong văn viết.'],
                examples: [
                    { kr: '공을 던져<b>라</b>.', vi: 'Ném bóng đi.' },
                    { kr: '빨리 와<b>라</b>.', vi: 'Đến nhanh đi.' },
                    { kr: '열심히 공부해<b>라</b>.', vi: 'Học chăm chỉ vào.' }
                ],
                notes: ['해라체 — chỉ dùng với người nhỏ tuổi hơn.', 'Trong văn viết (sách, biển báo): 주의하라 (hãy chú ý).', 'Dạng lịch sự: -(으)세요, -(으)십시오.']
            },
            {
                name: '-아/어야지', meaning: 'Phải ... chứ / Nên ... chứ', level: 3,
                theory: ['<b>-아/어야지</b> = phải chứ, nên chứ. Ngôi 1: tự nhủ/quyết tâm. Ngôi 2: khuyên nhủ/trách nhẹ.'],
                examples: [
                    { kr: '일찍 결혼해<b>야지</b>.', vi: 'Phải lấy vợ/chồng sớm chứ.' },
                    { kr: '내일부터 운동해<b>야지</b>.', vi: 'Từ mai phải tập thể dục mới được.' },
                    { kr: '약속은 지켜<b>야지</b>.', vi: 'Lời hứa phải giữ chứ.' }
                ],
                notes: ['Ngôi 1: tự nhủ, quyết tâm. Ngôi 2: khuyên nhủ nhẹ nhàng.', 'Mang sắc thái "đương nhiên phải thế chứ".']
            },
            {
                name: '-자', meaning: 'Nào / Đi (đề nghị)', level: 3,
                theory: ['<b>-자</b> = hãy, nào, đi. Dạng đề nghị 해라체 (suồng sã, bạn bè).', 'Gắn trực tiếp vào thân động từ.'],
                examples: [
                    { kr: '이제 문 닫<b>자</b>.', vi: 'Đóng cửa thôi.' },
                    { kr: '같이 밥 먹<b>자</b>.', vi: 'Ăn cơm cùng đi.' },
                    { kr: '내일 만나<b>자</b>.', vi: 'Ngày mai gặp nhé.' }
                ],
                notes: ['해라체 — chỉ dùng với bạn bè, người nhỏ tuổi.', 'Dạng lịch sự: -(으)ㅂ시다, -아/어요 (đề nghị).', 'Liên quan gián tiếp: -자고 하다 = rủ rằng.']
            },
            {
                name: '-잖아(요)', meaning: 'Mà / Đã nói rồi mà', level: 3,
                theory: ['<b>-잖아(요)</b> = mà, rõ ràng mà. Nhắc lại điều CẢ HAI ĐÃ BIẾT.', 'Dùng khi muốn nhắc nhở: "bạn biết rồi mà sao còn hỏi/làm vậy".'],
                examples: [
                    { kr: '제가 말했<b>잖아요</b>.', vi: 'Tôi đã nói rồi mà.' },
                    { kr: '오늘 일요일이<b>잖아요</b>.', vi: 'Hôm nay Chủ nhật mà (bạn biết rồi mà).' },
                    { kr: '내가 많이 사줬<b>잖아</b>.', vi: 'Tôi đã mua cho nhiều lần rồi mà.' }
                ],
                notes: ['CHỨC NĂNG: nhắc lại điều đã biết, hơi trách móc nhẹ "sao còn hỏi/làm vậy".', 'KHÁC HOÀN TOÀN với -지 않아요 (phủ định). Dù nguồn gốc từ -지 않아요, nhưng nghĩa và cách dùng đã hoàn toàn khác biệt.', '-잖아요 = "đã biết mà!" ≠ -지 않아요 = "không/chẳng". Đây là bẫy TOPIK phổ biến!']
            }
        ]
    },
    {
        id: 'expressions', icon: '💬', title: '표현 (Biểu hiện / Cấu trúc)',
        description: 'Các cấu trúc ngữ pháp diễn tả phỏng đoán, mức độ, khả năng',
        items: [
            {
                name: '-(으)ㄴ/는 만큼', meaning: 'Bằng chừng đó / Vì ... nên', level: 4,
                theory: ['<b>-(으)ㄴ/는 만큼</b> = bằng chừng đó, vì đã ... nên. Hai nghĩa: (1) mức độ tương đương, (2) lý do xứng đáng.', 'Động từ: -는 만큼. Tính từ: -(으)ㄴ 만큼.'],
                examples: [
                    { kr: '웃는 만큼 인생은 행복해진다.', vi: 'Cuộc sống hạnh phúc bằng chừng nào bạn cười.' },
                    { kr: '노력한 <b>만큼</b> 보상을 받을 거예요.', vi: 'Sẽ được đền đáp xứng đáng với công sức bỏ ra.' },
                    { kr: '아는 <b>만큼</b> 보인다.', vi: 'Biết bao nhiêu thì thấy bấy nhiêu.' }
                ],
                notes: ['Nghĩa 1: mức độ tương đương (bằng, ngang).', 'Nghĩa 2: lý do — vì đã A nên xứng đáng B.', '명사 + 만큼: 가족만큼 중요한 것은 없다.']
            },
            {
                name: '-(으)ㄴ/는 법이다', meaning: 'Đương nhiên / Vốn dĩ là vậy', level: 4,
                theory: ['<b>-(으)ㄴ/는 법이다</b> = đương nhiên là, vốn dĩ là vậy. Diễn tả quy luật chung, chân lý.'],
                examples: [
                    { kr: '계속 노력한다면 개선되<b>는 법이다</b>.', vi: 'Nếu cứ cố gắng thì đương nhiên sẽ cải thiện.' },
                    { kr: '세월이 가면 잊<b>는 법이다</b>.', vi: 'Thời gian trôi thì đương nhiên sẽ quên.' },
                    { kr: '사람은 실수하<b>는 법이다</b>.', vi: 'Con người vốn dĩ phạm sai lầm.' }
                ],
                notes: ['Diễn tả chân lý, quy luật tự nhiên ai cũng chấp nhận.', 'Tương tự -기 마련이다 nhưng -는 법이다 mang tính triết lý hơn.']
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ 모양이다', meaning: 'Có vẻ / Hình như', level: 4,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ 모양이다</b> = có vẻ, hình như. Phỏng đoán dựa trên quan sát bên ngoài.', 'Hiện tại: -는 모양이다. Quá khứ: -(으)ㄴ 모양이다. Tương lai: -(으)ㄹ 모양이다.'],
                examples: [
                    { kr: '비가 오<b>는 모양이에요</b>.', vi: 'Có vẻ trời đang mưa.' },
                    { kr: '많이 아<b>픈 모양이에요</b>.', vi: 'Có vẻ ốm nặng.' },
                    { kr: '회의가 길어질 <b>모양이에요</b>.', vi: 'Có vẻ cuộc họp sẽ kéo dài.' }
                ],
                notes: ['Phỏng đoán qua dấu hiệu bên ngoài (≈ -나 보다).', '-는 모양이다 formal hơn -나 보다, dùng nhiều trong văn viết.']
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ 셈이다', meaning: 'Coi như / Tính ra là', level: 5,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ 셈이다</b> = coi như, tính ra thì, xem như là.'],
                examples: [
                    { kr: '거의 다 한 <b>셈이에요</b>.', vi: 'Coi như gần xong rồi.' },
                    { kr: '매일 운동하는 <b>셈이에요</b>.', vi: 'Tính ra thì ngày nào cũng tập.' },
                    { kr: '어떻게 할 <b>셈이야</b>?', vi: 'Định làm thế nào?' }
                ],
                notes: ['-(으)ㄹ 셈이다 = dự định: 어떻게 할 셈이야? (Định làm gì?).', '-ㄴ 셈치다 = xem như: 없는 셈 치세요 (Coi như không có).']
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ 줄 몰랐다', meaning: 'Không biết / Không ngờ', level: 3,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ 줄 몰랐다</b> = không biết rằng, không ngờ rằng.'],
                examples: [
                    { kr: '공무원 시험에 합격할 <b>줄 몰랐다</b>.', vi: 'Không ngờ đỗ kỳ thi công chức.' },
                    { kr: '이렇게 어려운 <b>줄 몰랐어요</b>.', vi: 'Không biết lại khó thế này.' },
                    { kr: '벌써 도착한 <b>줄 몰랐어요</b>.', vi: 'Không biết đã đến rồi.' }
                ],
                notes: ['So sánh: -(으)ㄹ 줄 알다 = biết cách: 운전할 줄 알아요 (Biết lái xe).', 'Khác nhau: 줄 몰랐다 (không ngờ) vs 줄 모르다 (không biết cách).']
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ 줄 알았다', meaning: 'Tưởng rằng / Cứ nghĩ là', level: 3,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ 줄 알았다</b> = tưởng rằng, cứ nghĩ là (nhưng thực tế khác).'],
                examples: [
                    { kr: '아저씨는 연예인이 된 <b>줄 알았는데</b>.', vi: 'Cứ tưởng chú ấy thành nghệ sĩ rồi.' },
                    { kr: '오늘이 일요일인 <b>줄 알았어요</b>.', vi: 'Tưởng hôm nay là Chủ nhật.' },
                    { kr: '벌써 끝난 <b>줄 알았어요</b>.', vi: 'Tưởng đã xong rồi.' }
                ],
                notes: ['Thường đi với -는데: 줄 알았는데 = tưởng ... nhưng hóa ra không.', 'So sánh: 줄 알았다 (tưởng sai) vs 줄 알다 (biết cách).']
            },
            {
                name: '-(으)나 마나', meaning: 'Có ... cũng vô ích / Dù ... cũng vậy', level: 4,
                theory: ['<b>-(으)나 마나</b> = có làm hay không cũng vậy, làm cũng vô ích. Nhấn mạnh kết quả không thay đổi.'],
                examples: [
                    { kr: '길을 물어보<b>나 마나</b>예요.', vi: 'Hỏi đường cũng vô ích.' },
                    { kr: '말해 봐야 듣<b>나 마나</b>예요.', vi: 'Nói cũng chẳng nghe.' },
                    { kr: '가<b>나 마나</b> 결과는 같아요.', vi: 'Đi hay không kết quả cũng vậy.' }
                ],
                notes: ['Nhấn mạnh sự vô ích — kết quả đã rõ ràng.', 'Tương đương: -아/어 봤자 (dù thử cũng vậy).']
            },
            {
                name: '-(으)ㄹ 리가 없다', meaning: 'Không có lý nào / Không thể nào', level: 4,
                theory: ['<b>-(으)ㄹ 리가 없다</b> = không có lý nào, không thể nào. Phủ nhận mạnh mẽ khả năng.'],
                examples: [
                    { kr: '그 사람이 거짓말할 <b>리가 없어요</b>.', vi: 'Không có lý nào người đó nói dối.' },
                    { kr: '그걸 모를 <b>리가 없어요</b>.', vi: 'Không thể nào không biết điều đó.' },
                    { kr: '돈이 부족할 <b>리가 없어요</b>.', vi: 'Không có lý nào thiếu tiền.' }
                ],
                notes: ['Phủ nhận mạnh mẽ dựa trên logic.', 'Dạng khẳng định -(으)ㄹ 리가 있다 rất hiếm dùng.', 'TOPIK: hay kết hợp với 그럴 리가 없다 (không thể nào như vậy).']
            },
            {
                name: '-(으)ㄹ 만하다', meaning: 'Đáng để / Xứng đáng', level: 4,
                theory: ['<b>-(으)ㄹ 만하다</b> = đáng để, xứng đáng. Hai nghĩa: (1) đáng giá, (2) chấp nhận được.'],
                examples: [
                    { kr: '이 영화는 볼 <b>만해요</b>.', vi: 'Bộ phim này đáng xem.' },
                    { kr: '이 식당은 갈 <b>만해요</b>.', vi: 'Nhà hàng này đáng đi.' },
                    { kr: '참을 <b>만해요</b>.', vi: 'Chịu được (chấp nhận được).' }
                ],
                notes: ['Nghĩa 1: đáng giá — 읽을 만해요 (đáng đọc).', 'Nghĩa 2: chấp nhận được — 아직 먹을 만해요 (vẫn ăn được).', 'TOPIK hay kiểm tra cả 2 nghĩa trong cùng đề.']
            },
            {
                name: '-(으)ㄹ 뻔하다', meaning: 'Suýt nữa thì / Chút nữa thì', level: 3,
                theory: ['<b>-(으)ㄹ 뻔하다</b> = suýt nữa thì, chút nữa thì. Hành động GẦN xảy ra nhưng KHÔNG xảy ra.', 'Luôn dùng quá khứ: -(으)ㄹ 뻔했다.'],
                examples: [
                    { kr: '넘어질 <b>뻔했어요</b>.', vi: 'Suýt nữa thì ngã.' },
                    { kr: '버스를 놓칠 <b>뻔했어요</b>.', vi: 'Suýt nữa thì lỡ xe buýt.' },
                    { kr: '시험에 합격할 <b>뻔했어요</b>.', vi: 'Suýt nữa thì đỗ thi (nhưng trượt).' }
                ],
                notes: ['Dùng CẢ cho tình huống xấu LẪN tốt — không chỉ riêng tình huống xấu.', '합격할 뻔했다 = suýt đỗ (nhưng trượt) — tình huống TỐT suýt xảy ra.', '≠ -(으)ㄹ 게 뻔하다 (rõ ràng sẽ xảy ra).']
            },
            {
                name: '-(으)ㄹ 뿐만 아니라', meaning: 'Không chỉ ... mà còn', level: 4,
                theory: ['<b>-(으)ㄹ 뿐만 아니라</b> = không chỉ ... mà còn.'],
                examples: [
                    { kr: '노래를 잘할 <b>뿐만 아니라</b> 춤도 잘 춰요.', vi: 'Không chỉ hát hay mà còn nhảy giỏi.' },
                    { kr: '그 애기는 걸을 <b>뿐만 아니라</b> 잘 달린다.', vi: 'Em bé không chỉ đi mà còn chạy giỏi.' },
                    { kr: '한국어를 잘할 <b>뿐만 아니라</b> 일본어도 해요.', vi: 'Không chỉ giỏi tiếng Hàn mà còn biết tiếng Nhật.' }
                ],
                notes: ['Danh từ + 뿐만 아니라: 학생뿐만 아니라 선생님도.', 'Tương đương: -(으)ㄹ 뿐 아니라, -을 뿐더러.']
            },
            {
                name: '-(으)ㄹ 뿐이다', meaning: 'Chỉ có thể / Chỉ là', level: 5,
                theory: ['<b>-(으)ㄹ 뿐이다</b> = chỉ, chỉ có thể. Giới hạn, không còn gì khác.'],
                examples: [
                    { kr: '기다릴 <b>뿐이에요</b>.', vi: 'Chỉ có thể chờ thôi.' },
                    { kr: '국적이 다를 <b>뿐이지</b> 같은 인간이에요.', vi: 'Chỉ khác quốc tịch, đều là con người.' },
                    { kr: '바라볼 <b>뿐이에요</b>.', vi: 'Chỉ có thể nhìn thôi.' }
                ],
                notes: ['명사 + 뿐이다: 그것뿐이에요 (chỉ có thế thôi).', '≈ -ㄹ 따름이다 (formal hơn).']
            },
            {
                name: '-(으)ㄹ 수밖에 (없다)', meaning: 'Không thể không / Chỉ có thể', level: 4,
                theory: ['<b>-(으)ㄹ 수밖에 없다</b> = không thể không, chỉ có thể, đành phải. Nhấn mạnh KHÔNG CÒN lựa chọn nào khác.'],
                examples: [
                    { kr: '포기할 <b>수밖에 없었어요</b>.', vi: 'Đành phải bỏ cuộc.' },
                    { kr: '시간이 없으니까 뛰어갈 <b>수밖에 없다</b>.', vi: 'Không có thời gian nên chỉ có thể chạy.' },
                    { kr: '집에 있을 <b>수밖에 없어요</b>.', vi: 'Chỉ có thể ở nhà.' }
                ],
                notes: ['Nhấn mạnh: bị NGOẠI LỰC ép buộc, hoàn toàn không có lựa chọn.', 'So sánh: -지 않을 수 없다 = phủ định kép, mang sắc thái NỘI TÂM, tự mình cũng cưỡng lại không được.', 'Trong đề TOPIK hai cái này xuất hiện riêng biệt với sắc thái khác nhau — KHÔNG thể đổi chỗ hoàn toàn.']
            },
            {
                name: '-(으)ㄹ 정도(로)', meaning: 'Đến mức / Đến nỗi', level: 5,
                theory: ['<b>-(으)ㄹ 정도(로)</b> = đến mức, đến nỗi. Diễn tả mức độ cao.'],
                examples: [
                    { kr: '눈물이 날 <b>정도로</b> 감동했어요.', vi: 'Cảm động đến mức rơi nước mắt.' },
                    { kr: '못 걸을 <b>정도로</b> 다쳤어요.', vi: 'Bị thương đến mức không đi được.' },
                    { kr: '놀라울 <b>정도로</b> 크게 외쳤다.', vi: 'Hét to đến mức đáng kinh ngạc.' }
                ],
                notes: ['명사 + 정도: 죽을 정도로 피곤해요 (mệt muốn chết).', 'Nhấn mạnh mức độ cực đoan.']
            },
            {
                name: '-(으)ㄹ 지경이다', meaning: 'Đến mức / Gần như (cực đoan)', level: 5,
                theory: ['<b>-(으)ㄹ 지경이다</b> = đến mức, gần như. Tình trạng cực kỳ nghiêm trọng/cực đoan.'],
                examples: [
                    { kr: '그녀가 화낼 <b>지경이에요</b>.', vi: 'Cô ấy gần như phát điên.' },
                    { kr: '쓰러질 <b>지경이에요</b>.', vi: 'Gần như ngã quỵ.' },
                    { kr: '미칠 <b>지경이에요</b>.', vi: 'Gần như phát điên.' }
                ],
                notes: ['Mạnh hơn -(으)ㄹ 정도로 — tình trạng CỰC ĐOAN.', 'Thường dùng với tình huống tiêu cực.']
            },
            {
                name: '-(으)ㄹ 테니(까)', meaning: 'Vì tôi sẽ/định ... nên', level: 4,
                theory: ['<b>-(으)ㄹ 테니(까)</b> = vì tôi sẽ/định, nên (hãy ...). Ngôi 1: ý định mạnh. Ngôi 3: phỏng đoán.'],
                examples: [
                    { kr: '제가 할 <b>테니까</b> 걱정하지 마세요.', vi: 'Vì tôi sẽ làm, nên đừng lo.' },
                    { kr: '비가 올 <b>테니까</b> 우산을 가져가세요.', vi: 'Vì chắc sẽ mưa nên hãy mang ô.' },
                    { kr: '빨래를 널 <b>테니까</b> 애기를 봐줘.', vi: 'Tôi sẽ phơi đồ, nên trông hộ em bé nhé.' }
                ],
                notes: ['Ngôi 1 + -(으)ㄹ 테니까 + mệnh lệnh/đề nghị: rất phổ biến.', 'So sánh: -(으)ㄹ 테니까 (ý định + lý do) vs -(으)ㄹ 텐데 (phỏng đoán + lo lắng).']
            },
            {
                name: '-(으)ㄹ 텐데', meaning: 'Sẽ ... nhưng / Chắc ... mà', level: 4,
                theory: ['<b>-(으)ㄹ 텐데</b> = chắc là ... nhưng. Phỏng đoán kèm lo lắng/hối tiếc.'],
                examples: [
                    { kr: '지금쯤 도착했을 <b>텐데</b> 연락이 없네요.', vi: 'Chắc giờ đã đến rồi nhưng không liên lạc.' },
                    { kr: '힘들 <b>텐데</b> 괜찮아요?', vi: 'Chắc vất vả lắm, bạn ổn không?' },
                    { kr: '배고플 <b>텐데</b> 먹을래요?', vi: 'Chắc đói rồi, ăn không?' }
                ],
                notes: ['Thể hiện sự lo lắng, thông cảm, hoặc phỏng đoán kèm cảm xúc.', 'So sánh: -(으)ㄹ 테니까 = ý định + lý do, -(으)ㄹ 텐데 = phỏng đoán + lo lắng.']
            },
            {
                name: '-(으)ㄹ걸 (그랬다)', meaning: 'Lẽ ra nên / Phỏng đoán nhẹ', level: 4,
                theory: ['<b>-(으)ㄹ걸(요)</b> có 2 nghĩa: (1) Phỏng đoán nhẹ: chắc là. (2) Hối tiếc: lẽ ra nên.'],
                examples: [
                    { kr: '내일 비가 올<b>걸요</b>.', vi: 'Chắc ngày mai trời mưa.' },
                    { kr: '더 열심히 공부할<b>걸</b>.', vi: 'Lẽ ra nên học chăm chỉ hơn.' },
                    { kr: '우산 가져올 <b>걸</b>.', vi: 'Lẽ ra nên mang ô.' }
                ],
                notes: ['Phỏng đoán (ngôi 3): 걸요. Hối tiếc (ngôi 1): 걸 (+ 그랬다).', 'Hối tiếc: 걸 그랬어요 = lẽ ra nên ... mới phải.']
            },
            {
                name: '-(으)ㄹ까 말까', meaning: 'Có nên ... hay không', level: 4,
                theory: ['<b>-(으)ㄹ까 말까</b> = phân vân có nên làm hay không. Do dự giữa hai lựa chọn.'],
                examples: [
                    { kr: '길을 건널<b>까 말까</b> 고민했다.', vi: 'Phân vân có nên qua đường hay không.' },
                    { kr: '전화할<b>까 말까</b> 망설이고 있어요.', vi: 'Đắn đo có nên gọi điện hay không.' },
                    { kr: '사<b>ㄹ까 말까</b> 고민 중이에요.', vi: 'Đang phân vân có mua hay không.' }
                ],
                notes: ['Diễn tả sự do dự/phân vân.', 'Thường đi với 고민하다, 망설이다.']
            },
            {
                name: '-(으)ㄹ지(도) 모르다', meaning: 'Có thể / Biết đâu', level: 4,
                theory: ['<b>-(으)ㄹ지(도) 모르다</b> = có thể, biết đâu, không biết chừng. Khả năng không chắc chắn.'],
                examples: [
                    { kr: '비가 올<b>지 몰라요</b>.', vi: 'Biết đâu trời mưa.' },
                    { kr: '늦을<b>지 모르니까</b> 일찍 출발하세요.', vi: 'Có thể sẽ trễ nên hãy xuất phát sớm.' },
                    { kr: '어떻게 편집해야할<b>지 잘 모르겠어요</b>.', vi: 'Không biết nên chỉnh sửa thế nào.' }
                ],
                notes: ['= -(으)ㄹ지도 모르다: 올지도 몰라요.', '-ㄹ지 모르다 nhẹ hơn -(으)ㄹ 것 같다.']
            },
            {
                name: '-(으)면 되다', meaning: 'Chỉ cần ... là được', level: 3,
                theory: ['<b>-(으)면 되다</b> = chỉ cần ... là được, nếu ... thì OK. Nêu điều kiện đủ đơn giản.'],
                examples: [
                    { kr: '웹사이트에서 접수하시<b>면 됩니다</b>.', vi: 'Chỉ cần đăng ký trên website là được.' },
                    { kr: '내일까지 제출하<b>면 돼요</b>.', vi: 'Chỉ cần nộp trước ngày mai là được.' },
                    { kr: '이렇게 하<b>면 돼요</b>?', vi: 'Làm thế này là được chứ?' }
                ],
                notes: ['Rất phổ biến để trả lời hướng dẫn/chỉ cách.', 'Dạng phủ định: -(으)면 안 되다 (không được).']
            },
            {
                name: '-나 보다 / -(으)ㄴ가 보다', meaning: 'Có vẻ / Hình như', level: 3,
                theory: ['<b>-나 보다</b> (động từ) / <b>-(으)ㄴ가 보다</b> (tính từ) = có vẻ, hình như. Phỏng đoán dựa trên quan sát.'],
                examples: [
                    { kr: '비가 오<b>나 봐요</b>.', vi: 'Hình như trời mưa.' },
                    { kr: '많이 피곤한<b>가 봐요</b>.', vi: 'Có vẻ rất mệt.' },
                    { kr: '집에 없<b>나 봐요</b>.', vi: 'Hình như không có ở nhà.' }
                ],
                notes: ['Phỏng đoán dựa trên bằng chứng gián tiếp.', 'Quá khứ: -았/었나 보다.', '≈ -(으)ㄹ 것 같다 nhưng -나 보다 dựa trên quan sát cụ thể hơn.']
            },
            {
                name: '-곤 하다', meaning: 'Thường hay / Vẫn hay', level: 4,
                theory: ['<b>-곤 하다</b> = thường hay, vẫn hay. Hành động lặp lại theo thói quen (thường quá khứ).'],
                examples: [
                    { kr: '우리는 분식점 앞에서 만나<b>곤 했다</b>.', vi: 'Chúng tôi thường gặp nhau trước quán ăn.' },
                    { kr: '학교 끝나면 친구와 놀<b>곤 했어요</b>.', vi: 'Sau giờ học vẫn hay chơi với bạn.' },
                    { kr: '어릴 때 자주 울<b>곤 했어요</b>.', vi: 'Hồi nhỏ hay khóc lắm.' }
                ],
                notes: ['Thường dùng với quá khứ — hồi tưởng thói quen.', 'Nhấn mạnh tính LẶP LẠI hơn -았/었다 đơn thuần.']
            },
            {
                name: '-는 편이다', meaning: 'Thuộc loại / Thiên về', level: 3,
                theory: ['<b>-는 편이다</b> = thuộc loại, thiên về. Nói nhẹ nhàng, tránh tuyệt đối.'],
                examples: [
                    { kr: '저는 키가 <b>큰 편이에요</b>.', vi: 'Tôi thuộc loại cao.' },
                    { kr: '매운 음식을 잘 <b>먹는 편이에요</b>.', vi: 'Tôi thuộc loại ăn cay được.' },
                    { kr: '저는 돈을 아끼<b>는 편이에요</b>.', vi: 'Tôi thuộc loại tiết kiệm.' }
                ],
                notes: ['Dùng để nói nhẹ nhàng (hedging), tránh quá tuyệt đối.', 'Rất phổ biến trong hội thoại Hàn Quốc.']
            },
            {
                name: '-ㄴ/는 척하다', meaning: 'Giả vờ / Giả bộ', level: 3,
                theory: ['<b>-ㄴ/는 척하다</b> = giả vờ, giả bộ. Động từ: -는 척. Tính từ: -(으)ㄴ 척.'],
                examples: [
                    { kr: '자<b>는 척했어요</b>.', vi: 'Giả vờ ngủ.' },
                    { kr: '모르<b>는 척했어요</b>.', vi: 'Giả vờ không biết.' },
                    { kr: '아무렇지 않<b>은 척했어요</b>.', vi: 'Giả bộ không sao.' }
                ],
                notes: ['= -는 체하다 (formal hơn).', 'TOPIK: phân biệt 척하다 (giả vờ) vs 듯이 (giống như).']
            },
            {
                name: '-아/어 보이다', meaning: 'Trông / Có vẻ', level: 3,
                theory: ['<b>-아/어 보이다</b> = trông, có vẻ. Đánh giá dựa trên NGOẠI HÌNH/BỀ NGOÀI.'],
                examples: [
                    { kr: '얼굴표정이 어제보다 밝아 <b>보여요</b>.', vi: 'Trông vẻ mặt sáng hơn hôm qua.' },
                    { kr: '맛있어 <b>보여요</b>.', vi: 'Trông ngon.' },
                    { kr: '젊어 <b>보여요</b>.', vi: 'Trông trẻ.' }
                ],
                notes: ['Dựa trên BỀ NGOÀI (≠ -나 보다 dựa trên suy luận).', 'Chỉ dùng với tính từ.']
            },
            {
                name: '-았/었던 것 같다', meaning: 'Hình như đã / Chắc đã', level: 4,
                theory: ['<b>-았/었던 것 같다</b> = hình như đã, chắc đã. Phỏng đoán về quá khứ xa.'],
                examples: [
                    { kr: '걔는 취업했<b>던 것 같다</b>.', vi: 'Hình như nó đã xin được việc.' },
                    { kr: '여기 와봤<b>던 것 같아요</b>.', vi: 'Hình như tôi đã từng đến đây.' },
                    { kr: '전에 만났<b>던 것 같아요</b>.', vi: 'Hình như trước đây đã gặp.' }
                ],
                notes: ['-았/었던 = ký ức quá khứ xa.', 'So sánh: -ㄴ 것 같다 (quá khứ gần), -았/었던 것 같다 (quá khứ xa/mơ hồ).']
            },
            {
                name: '-았/었으면 하다', meaning: 'Ước gì / Mong rằng', level: 4,
                theory: ['<b>-았/었으면 하다</b> = ước gì, mong rằng. Bày tỏ mong muốn nhẹ nhàng.'],
                examples: [
                    { kr: '점심은 라면이<b>었으면 해</b>.', vi: 'Ước gì bữa trưa là mì ramen.' },
                    { kr: '빨리 나<b>았으면 해요</b>.', vi: 'Mong bạn mau khỏe.' },
                    { kr: '시험에 합격했<b>으면 해요</b>.', vi: 'Mong sao đỗ thi.' }
                ],
                notes: ['Nhẹ nhàng hơn -고 싶다 (muốn).', 'Thường dùng khi mong cho NGƯỜI KHÁC hoặc tình huống chung.']
            }
        ]
    },
    {
        id: 'indirect', icon: '🗣️', title: '간접화법 (Câu gián tiếp)',
        description: 'Cấu trúc truyền đạt lời nói gián tiếp và các biến thể',
        items: [
            {
                name: '-ㄴ/는다고 하다', meaning: 'Nói rằng (trần thuật)', level: 3,
                theory: ['<b>-ㄴ/는다고 하다</b> = nói rằng. Gián tiếp hóa câu trần thuật.', 'ĐT không patchim: -ㄴ다고. Có patchim: -는다고. TT: -다고. DT+이다: -(이)라고.'],
                examples: [
                    { kr: '철수가 내일 간<b>다고 했어요</b>.', vi: 'Cheolsu nói rằng ngày mai sẽ đi.' },
                    { kr: '날씨가 춥<b>다고 했어요</b>.', vi: 'Nói rằng thời tiết lạnh.' },
                    { kr: '의사<b>라고 했어요</b>.', vi: 'Nói rằng là bác sĩ.' }
                ],
                notes: ['Rút gọn: -ㄴ/는대요.', 'Cơ sở cho mọi biến thể gián tiếp: -다고 해도, -다면, -다니...']
            },
            {
                name: '-(으)라고 하다', meaning: 'Bảo rằng (mệnh lệnh)', level: 3,
                theory: ['<b>-(으)라고 하다</b> = bảo rằng hãy. Gián tiếp hóa câu mệnh lệnh.'],
                examples: [
                    { kr: '선생님이 조용히 하<b>라고 했어요</b>.', vi: 'Thầy bảo hãy im lặng.' },
                    { kr: '빨리 오<b>라고 했어요</b>.', vi: 'Bảo đến nhanh.' },
                    { kr: '문을 닫으<b>라고 했어요</b>.', vi: 'Bảo đóng cửa.' }
                ],
                notes: ['Phủ định: -지 말라고 하다 (bảo đừng).', 'Rút gọn: -(으)래요.']
            },
            {
                name: '-냐고 하다 / -(으)냐고 하다', meaning: 'Hỏi rằng', level: 3,
                theory: ['<b>-냐고 하다</b> = hỏi rằng. Gián tiếp hóa câu hỏi.'],
                examples: [
                    { kr: '어디 가<b>냐고 했어요</b>.', vi: 'Hỏi rằng đi đâu.' },
                    { kr: '밥 먹었<b>냐고 했어요</b>.', vi: 'Hỏi rằng ăn cơm chưa.' },
                    { kr: '몇 시<b>냐고 물어봤어요</b>.', vi: 'Hỏi mấy giờ.' }
                ],
                notes: ['Rút gọn: -냬요.', 'TT/이다: -(으)냐고 / -이냐고.']
            },
            {
                name: '-자고 하다', meaning: 'Rủ rằng (đề nghị)', level: 3,
                theory: ['<b>-자고 하다</b> = rủ rằng, đề nghị rằng. Gián tiếp hóa câu đề nghị (-자).'],
                examples: [
                    { kr: '같이 가<b>자고 했어요</b>.', vi: 'Rủ đi cùng.' },
                    { kr: '내일 만나<b>자고 했어요</b>.', vi: 'Đề nghị ngày mai gặp.' },
                    { kr: '밥 먹<b>자고 했어요</b>.', vi: 'Rủ ăn cơm.' }
                ],
                notes: ['Rút gọn: -재요.', 'Chỉ dùng với ĐỘNG TỪ.']
            },
            {
                name: '-ㄴ/는다고(요)', meaning: 'Nói là / Bảo là', level: 4,
                theory: ['<b>-ㄴ/는다고(요)</b> = nhấn mạnh lại điều mình đã nói. Ví dụ: Tôi đã nói là...'],
                examples: [
                    { kr: '간<b>다고요</b>!', vi: 'Nói là sẽ đi mà!' },
                    { kr: '모른<b>다고요</b>.', vi: 'Bảo rồi là không biết mà.' },
                    { kr: '바쁘<b>다고요</b>.', vi: 'Nói rồi là bận mà.' }
                ],
                notes: ['Nhấn mạnh, hơi bực vì phải nói lại.', 'Thường dùng khi người nghe chưa hiểu/chưa tin.']
            },
            {
                name: '-ㄴ/는다거나', meaning: 'Nói rằng ... hay là', level: 5,
                theory: ['<b>-ㄴ/는다거나</b> = nếu nói rằng A hoặc B. Liệt kê giả định.'],
                examples: [
                    { kr: '가격이 비싸<b>다거나</b> 품질이 안 좋다면 안 사요.', vi: 'Nếu giá đắt hay chất lượng kém thì không mua.' },
                    { kr: '시간이 없<b>다거나</b> 바쁘다는 핑계를 대지 마세요.', vi: 'Đừng viện cớ nói không có thời gian hay bận.' },
                    { kr: '춥<b>다거나</b> 덥다거나 불평하지 마세요.', vi: 'Đừng phàn nàn nói lạnh hay nóng.' }
                ],
                notes: ['Liệt kê 2+ lý do/tình huống giả định.', '= -다든지: 비슷한 nghĩa.']
            },
            {
                name: '-ㄴ/는다고 치다', meaning: 'Giả sử / Cho là', level: 5,
                theory: ['<b>-ㄴ/는다고 치다</b> = giả sử rằng, cho là. Đặt giả định để suy luận.'],
                examples: [
                    { kr: '돈이 많<b>다고 치자</b>.', vi: 'Giả sử có nhiều tiền đi.' },
                    { kr: '네 말이 맞<b>다고 쳐도</b> 방법이 없어.', vi: 'Cho là lời bạn đúng đi, cũng không có cách.' },
                    { kr: '합격했<b>다고 치자</b>. 그 다음은?', vi: 'Giả sử đỗ rồi. Tiếp theo là gì?' }
                ],
                notes: ['-다고 치자 = hãy giả sử.', '-다고 쳐도 = cho dù giả sử ... thì cũng.']
            },
            {
                name: '-ㄴ/는다고 해도', meaning: 'Dù nói rằng / Cho dù', level: 4,
                theory: ['<b>-ㄴ/는다고 해도</b> = cho dù, dù có. Nhượng bộ.'],
                examples: [
                    { kr: '바쁘<b>다고 해도</b> 전화는 해야지.', vi: 'Dù bận cũng phải gọi điện chứ.' },
                    { kr: '아무리 어렵<b>다고 해도</b> 포기할 수 없다.', vi: 'Dù có khó đến mấy cũng không thể bỏ cuộc.' },
                    { kr: '돈이 많<b>다고 해도</b> 행복한 건 아니다.', vi: 'Dù có nhiều tiền cũng chưa chắc hạnh phúc.' }
                ],
                notes: ['= -더라도, -(으)ㄹ지라도: nhượng bộ.', 'Nhấn mạnh: dù điều kiện tốt/xấu thế nào thì kết quả giữ nguyên.']
            },
            {
                name: '-ㄴ/는다니', meaning: 'Vì nói là / Nghe nói mà (ngạc nhiên)', level: 4,
                theory: ['<b>-ㄴ/는다니</b> = nghe nói ... mà (ngạc nhiên, khó tin).'],
                examples: [
                    { kr: '합격했<b>다니</b> 축하해요!', vi: 'Nghe nói đỗ rồi à, chúc mừng!' },
                    { kr: '그 사람이 범인이<b>라니</b> 믿을 수 없어.', vi: 'Nói người đó là thủ phạm, không thể tin được.' },
                    { kr: '벌써 퇴근한<b>다니</b> 빨랐네.', vi: 'Nói là đã tan ca rồi à, nhanh thế.' }
                ],
                notes: ['Bày tỏ ngạc nhiên khi nghe thông tin.', '≠ -다니까 (nhấn mạnh lặp lại).']
            },
            {
                name: '-ㄴ/는다니까', meaning: 'Đã nói rồi là / Bảo rồi mà', level: 4,
                theory: ['<b>-ㄴ/는다니까</b> = đã nói rồi là, bảo rồi mà. Nhấn mạnh/lặp lại điều đã nói.'],
                examples: [
                    { kr: '모른<b>다니까요</b>.', vi: 'Bảo rồi là không biết mà.' },
                    { kr: '안 간<b>다니까</b>.', vi: 'Nói rồi là không đi.' },
                    { kr: '바쁘<b>다니까</b> 이따가 해.', vi: 'Bảo rồi là bận, lát nữa hãy làm.' }
                ],
                notes: ['Nhấn mạnh vì người nghe chưa hiểu/chưa chịu nghe.', 'Mạnh hơn -다고요.']
            },
            {
                name: '-ㄴ/는다더니', meaning: 'Nghe nói ... mà rồi', level: 5,
                theory: ['<b>-ㄴ/는다더니</b> = nghe nói ... mà rồi (thực tế khác/đúng vậy).'],
                examples: [
                    { kr: '다이어트 한<b>다더니</b> 또 먹고 있어.', vi: 'Nói là ăn kiêng mà lại ăn nữa.' },
                    { kr: '바쁘<b>다더니</b> 놀고 있네.', vi: 'Bảo bận mà đang chơi kìa.' },
                    { kr: '맛있<b>다더니</b> 정말 맛있네요.', vi: 'Nói ngon và đúng thật ngon.' }
                ],
                notes: ['Vế sau: thực tế trái ngược hoặc xác nhận.', 'Dựa trên thông tin nghe từ người khác.']
            },
            {
                name: '-ㄴ/는다더라', meaning: 'Nghe nói / Người ta bảo', level: 4,
                theory: ['<b>-ㄴ/는다더라</b> = nghe nói, người ta bảo. Truyền đạt thông tin nghe được.'],
                examples: [
                    { kr: '내일 비 온<b>다더라</b>.', vi: 'Nghe nói mai trời mưa.' },
                    { kr: '그 식당 맛있<b>다더라</b>.', vi: 'Nghe bảo nhà hàng đó ngon.' },
                    { kr: '졸업했<b>다더라</b>.', vi: 'Nghe nói tốt nghiệp rồi.' }
                ],
                notes: ['= nghe người khác kể lại (간접 전문).', '해라체 — dùng với bạn bè.']
            },
            {
                name: '-ㄴ/는다던데', meaning: 'Nghe nói ... mà', level: 4,
                theory: ['<b>-ㄴ/는다던데</b> = nghe nói ... mà. Nêu thông tin nghe được làm nền tảng.'],
                examples: [
                    { kr: '내일 비 온<b>다던데</b> 우산 챙겨.', vi: 'Nghe nói mai mưa, mang ô nhé.' },
                    { kr: '맛있<b>다던데</b> 같이 갈래?', vi: 'Nghe nói ngon, đi cùng không?' },
                    { kr: '힘들<b>다던데</b> 괜찮아?', vi: 'Nghe nói vất vả, bạn ổn không?' }
                ],
                notes: ['Vế sau thường là đề nghị, câu hỏi, hoặc ý kiến.', 'Kết hợp -더- (trải nghiệm) + -ㄴ데 (bối cảnh).']
            },
            {
                name: '-ㄴ/는다면', meaning: 'Nếu ... thì', level: 4,
                theory: ['<b>-ㄴ/는다면</b> = nếu (giả định, thường xa thực tế hoặc formal).'],
                examples: [
                    { kr: '내가 새<b>라면</b> 날아갈 텐데.', vi: 'Nếu tôi là chim thì sẽ bay đi.' },
                    { kr: '시간이 있<b>다면</b> 같이 갈게요.', vi: 'Nếu có thời gian thì sẽ đi cùng.' },
                    { kr: '할 수 있<b>다면</b> 도와주세요.', vi: 'Nếu có thể thì hãy giúp.' }
                ],
                notes: ['Formal hơn -(으)면.', 'Thường dùng cho giả định xa thực tế hoặc trong văn viết.']
            },
            {
                name: '-ㄴ/는다면서(요)?', meaning: 'Nghe nói ... phải không?', level: 4,
                theory: ['<b>-ㄴ/는다면서(요)?</b> = nghe nói ... phải không? Xác nhận thông tin đã nghe.'],
                examples: [
                    { kr: '결혼한<b>다면서요</b>?', vi: 'Nghe nói sắp cưới phải không?' },
                    { kr: '이사한<b>다면서요</b>?', vi: 'Nghe nói dọn nhà phải không?' },
                    { kr: '승진한<b>다면서</b> 축하해!', vi: 'Nghe nói thăng chức, chúc mừng!' }
                ],
                notes: ['Dùng để xác nhận tin đã nghe.', 'Sắc thái: tò mò, muốn xác minh.']
            }
        ]
    },
    {
        id: 'passive', icon: '🔄', title: '피동 & 사동 & 활용 (Bị động, Sai khiến & Hoạt dụng)',
        description: 'Cấu trúc bị động, sai khiến, và các mẫu chia động từ/tính từ',
        items: [
            { name: '-게 하다', meaning: 'Khiến cho / Bắt', level: 3, theory: ['<b>-게 하다</b> = khiến, bắt, cho phép. Sai khiến (사동).'], examples: [{ kr: '엄마가 아이에게 공부하<b>게 했어요</b>.', vi: 'Mẹ bắt con học.' }, { kr: '웃<b>게 해줘</b>.', vi: 'Làm tôi cười đi.' }, { kr: '자유롭게 선택하<b>게 해주세요</b>.', vi: 'Cho tôi tự do lựa chọn.' }], notes: ['Sai khiến gián tiếp: chủ ngữ khiến người khác làm.', 'So sánh sai khiến trực tiếp: 이/히/리/기/우/추.'] },
            { name: '-아/어지다', meaning: 'Trở nên / Bị (bị động)', level: 3, theory: ['<b>-아/어지다</b> = trở nên (TT), bị (ĐT bị động).', 'TT + -아/어지다: thay đổi trạng thái. ĐT + -아/어지다: bị động.'], examples: [{ kr: '날씨가 따뜻해<b>졌어요</b>.', vi: 'Thời tiết trở nên ấm.' }, { kr: '유리가 깨<b>졌어요</b>.', vi: 'Kính bị vỡ.' }, { kr: '문제가 해결되<b>어졌어요</b>.', vi: 'Vấn đề đã được giải quyết.' }], notes: ['TT: 예뻐지다 (trở nên đẹp), 더워지다 (trở nên nóng).', 'ĐT bị động: 만들어지다 (được tạo ra).'] },
            { name: '-아/어도', meaning: 'Dù / Cho dù', level: 3, theory: ['<b>-아/어도</b> = dù, cho dù, mặc dù. Nhượng bộ.'], examples: [{ kr: '바빠<b>도</b> 운동해야 해요.', vi: 'Dù bận cũng phải tập.' }, { kr: '비가 와<b>도</b> 갈 거예요.', vi: 'Dù mưa cũng sẽ đi.' }, { kr: '아무리 먹어<b>도</b> 배가 안 불러요.', vi: 'Dù ăn bao nhiêu cũng không no.' }], notes: ['Nhượng bộ cơ bản nhất.', '아무리 + -아/어도 = dù ... bao nhiêu đi nữa.'] },
            { name: '-아/어야', meaning: 'Phải / Có ... mới', level: 3, theory: ['<b>-아/어야</b> = phải, có ... mới. Điều kiện bắt buộc.'], examples: [{ kr: '열심히 공부해<b>야</b> 합격해요.', vi: 'Phải học chăm mới đỗ.' }, { kr: '빨리 가<b>야</b> 해요.', vi: 'Phải đi nhanh.' }, { kr: '건강해<b>야</b> 일할 수 있어요.', vi: 'Phải khỏe mới làm việc được.' }], notes: ['Điều kiện tiên quyết: A mới B.', '-(아/어야지) = phải chứ (kết thúc câu).'] },
            { name: '-아/어서 그런지', meaning: 'Có lẽ vì ... nên', level: 4, theory: ['<b>-아/어서 그런지</b> = có lẽ vì ... nên, chắc tại ... nên. Phỏng đoán nguyên nhân nhẹ.'], examples: [{ kr: '피곤해<b>서 그런지</b> 집중이 안 돼요.', vi: 'Chắc tại mệt nên không tập trung được.' }, { kr: '날씨가 좋아<b>서 그런지</b> 기분이 좋아요.', vi: 'Chắc tại thời tiết đẹp nên tâm trạng vui.' }, { kr: '많이 걸어<b>서 그런지</b> 다리가 아파요.', vi: 'Chắc tại đi nhiều nên đau chân.' }], notes: ['Phỏng đoán nguyên nhân — không chắc chắn 100%.', '그런지 = vì thế (chăng).'] },
            { name: '-았/었더라면', meaning: 'Nếu đã ... thì (giả định quá khứ)', level: 5, theory: ['<b>-았/었더라면</b> = giá mà đã, nếu lúc đó đã ... thì. Giả định ngược quá khứ, hối tiếc.'], examples: [{ kr: '더 열심히 공부했<b>더라면</b> 합격했을 텐데.', vi: 'Giá mà học chăm hơn thì đã đỗ.' }, { kr: '그때 고백했<b>더라면</b> 어떻게 되었을까?', vi: 'Giá lúc đó tỏ tình thì sẽ ra sao?' }, { kr: '일찍 출발했<b>더라면</b> 안 늦었을 거예요.', vi: 'Giá xuất phát sớm thì đã không trễ.' }], notes: ['Giả định NGƯỢC quá khứ — hối tiếc.', 'Vế sau thường: -(으)ㄹ 텐데, -(으)ㄹ 거예요.'] }
        ]
    },
    {
        id: 'advanced', icon: '🚀', title: '고급 연결 (Liên kết nâng cao)',
        description: 'Các đuôi nối câu nâng cao, biểu hiện mức độ cao cấp',
        items: [
            { name: '-(으)ㄴ/는 걸 보니(까)', meaning: 'Nhìn thấy ... nên (suy ra)', level: 4, theory: ['<b>-(으)ㄴ/는 걸 보니(까)</b> = nhìn thấy A nên suy ra B. Phỏng đoán qua bằng chứng.'], examples: [{ kr: '불이 꺼진 <b>걸 보니</b> 외출한 것 같아요.', vi: 'Thấy tắt đèn chắc đi vắng.' }, { kr: '표정이 밝은 <b>걸 보니까</b> 좋은 일이 있나 봐요.', vi: 'Thấy mặt vui chắc có chuyện tốt.' }, { kr: '잘 먹는 <b>걸 보니</b> 입맛에 맞나 봐요.', vi: 'Thấy ăn ngon chắc hợp khẩu vị.' }], notes: ['Bằng chứng (A) → suy luận (B).', 'Vế sau thường: -나 보다, -(으)ㄹ 것 같다.'] },
            { name: '-(으)ㄴ/는들', meaning: 'Dù có ... cũng', level: 5, theory: ['<b>-(으)ㄴ/는들</b> = dù có ... đi nữa cũng. Nhượng bộ mạnh, formal.'], examples: [{ kr: '아무리 노력한<b>들</b> 소용없어요.', vi: 'Dù cố gắng cũng vô ích.' }, { kr: '돈이 많은<b>들</b> 다 뭐하겠어요.', vi: 'Dù nhiều tiền cũng để làm gì.' }, { kr: '이제 와서 후회한<b>들</b> 소용없다.', vi: 'Bây giờ hối hận cũng vô ích.' }], notes: ['Rất formal, mang sắc thái bi quan.', '≈ -아/어도: nhưng -는들 mạnh và bi quan hơn.'] },
            { name: '-(으)ㄹ지라도', meaning: 'Cho dù / Dù có (formal)', level: 5, theory: ['<b>-(으)ㄹ지라도</b> = cho dù, dù có. Nhượng bộ formal.'], examples: [{ kr: '아무리 힘들<b>지라도</b> 포기하지 않겠다.', vi: 'Dù khó khăn đến mấy cũng không bỏ cuộc.' }, { kr: '비가 올<b>지라도</b> 갈 거예요.', vi: 'Dù có mưa cũng sẽ đi.' }, { kr: '실패할<b>지라도</b> 도전해 보세요.', vi: 'Dù có thất bại cũng hãy thử.' }], notes: ['Formal.', '≈ -더라도, -아/어도.'] },
            { name: '-고 보면', meaning: 'Thử ... rồi sẽ thấy', level: 5, theory: ['<b>-고 보면</b> = nếu thử A thì sẽ nhận ra B.'], examples: [{ kr: '알<b>고 보면</b> 착한 사람이에요.', vi: 'Tìm hiểu kỹ thì thật ra là người tốt.' }, { kr: '살<b>고 보면</b> 좋은 동네예요.', vi: 'Sống thử rồi sẽ thấy là khu tốt.' }, { kr: '읽<b>고 보면</b> 재미있어요.', vi: 'Đọc rồi thì thấy hay.' }], notes: ['A-고 보면 = hãy A đi rồi sẽ thấy B.', 'Nhấn mạnh: phải trải nghiệm mới biết.'] },
            { name: '-는 (도)중에', meaning: 'Giữa lúc / Đang trong lúc', level: 4, theory: ['<b>-는 (도)중에</b> = đang giữa lúc, trong khi. Hành động bị gián đoạn.'], examples: [{ kr: '수업 <b>중에</b> 전화가 왔어요.', vi: 'Đang giờ học thì có điện thoại.' }, { kr: '출근하는 <b>도중에</b> 사고가 났어요.', vi: 'Đang đi làm giữa đường thì xảy ra tai nạn.' }, { kr: '운전하는 <b>중에</b> 문자하지 마세요.', vi: 'Đang lái xe thì đừng nhắn tin.' }], notes: ['중 = trong lúc. 도중 = giữa chừng.', '명사 + 중에: 회의 중에 (đang họp).'] },
            { name: '-는 길에', meaning: 'Trên đường', level: 3, theory: ['<b>-는 길에</b> = trên đường (đi/về).'], examples: [{ kr: '집에 가<b>는 길에</b> 마트에 들렀어요.', vi: 'Trên đường về nhà ghé siêu thị.' }, { kr: '출근하<b>는 길에</b> 커피를 샀어요.', vi: 'Trên đường đi làm mua cà phê.' }, { kr: '학교에 오<b>는 길에</b> 친구를 만났어요.', vi: 'Trên đường đến trường gặp bạn.' }], notes: ['Chỉ dùng với 가다/오다 + 는 길에.', '오는 길에 (trên đường đến), 가는 길에 (trên đường đi).'] },
            { name: '-(으)ㄴ/는 대로', meaning: 'Ngay khi / Theo như', level: 4, theory: ['<b>-(으)ㄴ/는 대로</b> = (1) ngay khi, (2) theo như. Hai nghĩa khác nhau.'], examples: [{ kr: '도착하<b>는 대로</b> 연락할게요.', vi: 'Ngay khi đến sẽ liên lạc.' }, { kr: '들은 <b>대로</b> 전하겠습니다.', vi: 'Sẽ truyền đạt đúng như đã nghe.' }, { kr: '알려 준 <b>대로</b> 했어요.', vi: 'Đã làm theo như được chỉ dẫn.' }], notes: ['Nghĩa 1: ngay khi (= -자마자).', 'Nghĩa 2: theo đúng như (= 처럼).'] },
            { name: '-는 사이에', meaning: 'Trong khi / Trong lúc', level: 4, theory: ['<b>-는 사이에</b> = trong khi, trong lúc. Hành động B xảy ra trong khoảng thời gian A.'], examples: [{ kr: '잠을 자<b>는 사이에</b> 눈이 왔어요.', vi: 'Trong lúc ngủ tuyết đã rơi.' }, { kr: '깜빡하<b>는 사이에</b> 시간이 지나갔어요.', vi: 'Trong chớp mắt thời gian đã trôi.' }, { kr: '엄마가 없<b>는 사이에</b> 아이가 울었어요.', vi: 'Trong lúc mẹ đi vắng em bé đã khóc.' }], notes: ['Nhấn mạnh sự kiện bất ngờ trong khoảng thời gian.', '≈ -는 동안: nhưng 사이에 nhấn mạnh bất ngờ hơn.'] },
            { name: '-는 통에', meaning: 'Vì ... nên (hỗn loạn)', level: 5, theory: ['<b>-는 통에</b> = vì (tình huống hỗn loạn/ồn ào) nên. Kết quả tiêu cực.'], examples: [{ kr: '아이들이 떠드<b>는 통에</b> 잠을 못 잤어요.', vi: 'Vì bọn trẻ ồn ào nên không ngủ được.' }, { kr: '전화가 계속 오<b>는 통에</b> 집중을 못 했어요.', vi: 'Vì điện thoại cứ reng nên không tập trung được.' }, { kr: '비가 갑자기 쏟아지<b>는 통에</b> 옷이 다 젖었다.', vi: 'Vì mưa đổ bất ngờ nên ướt hết đồ.' }], notes: ['Tình huống hỗn loạn → kết quả tiêu cực.', '≈ -는 바람에: nhưng 통에 mạnh hơn, hỗn loạn hơn.'] },
            { name: '-는 한', meaning: 'Miễn là / Chừng nào còn', level: 5, theory: ['<b>-(으)ㄴ/는 한</b> = miễn là, chừng nào còn, trong phạm vi.'], examples: [{ kr: '내가 아<b>는 한</b> 그는 정직한 사람이야.', vi: 'Theo tôi biết thì anh ấy là người trung thực.' }, { kr: '노력하<b>는 한</b> 실패하지 않을 거예요.', vi: 'Miễn còn cố gắng thì sẽ không thất bại.' }, { kr: '가능한 <b>한</b> 빨리 연락하겠습니다.', vi: 'Sẽ liên lạc nhanh nhất có thể.' }], notes: ['아는 한 = theo tôi biết.', '가능한 한 = trong phạm vi có thể.'] },
            { name: '-는 한편', meaning: 'Một mặt ... mặt khác', level: 5, theory: ['<b>-는 한편</b> = một mặt, đồng thời, mặt khác. Bổ sung thông tin.'], examples: [{ kr: '공부하<b>는 한편</b> 아르바이트도 해요.', vi: 'Vừa học vừa làm thêm.' }, { kr: '연구를 하<b>는 한편</b> 강의도 합니다.', vi: 'Vừa nghiên cứu vừa giảng dạy.' }, { kr: '관광하<b>는 한편</b> 쇼핑도 했어요.', vi: 'Vừa đi du lịch vừa mua sắm.' }], notes: ['Nêu 2 hoạt động song song.', 'Formal, thường dùng trong văn viết.'] },
            { name: '-다시피', meaning: 'Như đã ... / Như bạn biết', level: 5, theory: ['<b>-다시피</b> = như đã, như bạn thấy/biết. Viện dẫn thông tin đã biết.'], examples: [{ kr: '보<b>다시피</b> 여기 아무도 없어요.', vi: 'Như bạn thấy đấy, đây không có ai.' }, { kr: '알<b>다시피</b> 요즘 경기가 안 좋아요.', vi: 'Như bạn biết, dạo này kinh tế không tốt.' }, { kr: '말했<b>다시피</b> 내일까지 끝내야 해요.', vi: 'Như đã nói, phải xong trước ngày mai.' }], notes: ['보다시피 (như thấy), 알다시피 (như biết) = rất phổ biến.', 'Formal.'] },
            { name: '-고 말다', meaning: 'Kết cục là / Cuối cùng đã', level: 4, theory: ['<b>-고 말다</b> = kết cục là, cuối cùng đã (dù không muốn). Kết quả đáng tiếc.'], examples: [{ kr: '결국 울<b>고 말았어요</b>.', vi: 'Cuối cùng đã khóc.' }, { kr: '비밀을 말하<b>고 말았어요</b>.', vi: 'Rốt cuộc đã lỡ nói bí mật.' }, { kr: '넘어지<b>고 말았어요</b>.', vi: 'Cuối cùng ngã.' }], notes: ['Kết quả KHÔNG MONG MUỐN.', '-(으)ㄹ 거다 + -고 말다: quyết tâm: 해내고 말겠다 (nhất định sẽ làm được).'] },
            { name: '-는 중이다', meaning: 'Đang trong quá trình', level: 3, theory: ['<b>-는 중이다</b> = đang trong quá trình. Hành động đang diễn ra.'], examples: [{ kr: '지금 먹<b>는 중이에요</b>.', vi: 'Đang ăn.' }, { kr: '회의하<b>는 중이에요</b>.', vi: 'Đang họp.' }, { kr: '준비하<b>는 중이에요</b>.', vi: 'Đang chuẩn bị.' }], notes: ['≈ -고 있다: nhưng -는 중이다 formal hơn.', '명사 + 중이다: 회의 중이다.'] },
            { name: '-는/은커녕', meaning: 'Đừng nói đến / Chứ đừng nói', level: 5, theory: ['<b>-는/은커녕</b> = đừng nói đến A, ngay cả B cũng không. Phủ nhận mạnh.'], examples: [{ kr: '밥<b>은커녕</b> 물도 못 마셨어요.', vi: 'Đừng nói cơm, ngay cả nước cũng chưa uống.' }, { kr: '감사<b>는커녕</b> 오히려 화를 냈어요.', vi: 'Đừng nói cảm ơn, ngược lại còn tức giận.' }, { kr: '여행<b>은커녕</b> 외출도 못 했어요.', vi: 'Đừng nói du lịch, ra ngoài cũng không được.' }], notes: ['A은커녕 B도: đừng nói A, ngay B cũng không.', 'Nhấn mạnh tình trạng bi đát.'] },
            { name: '-더라도', meaning: 'Cho dù / Dù có', level: 4, theory: ['<b>-더라도</b> = cho dù, dù có. Nhượng bộ mạnh.'], examples: [{ kr: '비가 오<b>더라도</b> 갈 거예요.', vi: 'Cho dù mưa cũng sẽ đi.' }, { kr: '힘들<b>더라도</b> 참아야 해요.', vi: 'Dù vất vả cũng phải chịu.' }, { kr: '그 사람이 사과하<b>더라도</b> 용서 못 해요.', vi: 'Dù người đó xin lỗi cũng không tha.' }], notes: ['Mạnh hơn -아/어도.', 'Thường đi với 아무리: 아무리 -더라도.'] },
            { name: '-던', meaning: '(Đã từng) / Hồi đó', level: 4, theory: ['<b>-던</b> = quan hệ từ chỉ quá khứ. Hồi ức, hành động dang dở quá khứ.'], examples: [{ kr: '자주 가<b>던</b> 식당이 문 닫았어요.', vi: 'Nhà hàng hay đến hồi đó đóng cửa rồi.' }, { kr: '어릴 때 살<b>던</b> 집이에요.', vi: 'Đây là nhà hồi nhỏ từng ở.' }, { kr: '읽<b>던</b> 책을 다시 펼쳤다.', vi: 'Mở lại cuốn sách đang đọc dở.' }], notes: ['Hồi ức + hành động chưa hoàn thành.', 'So sánh: -(으)ㄴ = đã hoàn thành, -던 = dang dở/hồi ức.'] },
            { name: '-도록', meaning: 'Để / Đến mức', level: 4, theory: ['<b>-도록</b> = (1) để mà, (2) đến mức. Hai nghĩa.'], examples: [{ kr: '늦지 않<b>도록</b> 일찍 출발하세요.', vi: 'Hãy xuất phát sớm để không trễ.' }, { kr: '목이 아프<b>도록</b> 노래했어요.', vi: 'Hát đến mức đau cổ.' }, { kr: '이해할 수 있<b>도록</b> 설명해 주세요.', vi: 'Hãy giải thích để có thể hiểu được.' }], notes: ['Nghĩa 1: mục đích (= -게).', 'Nghĩa 2: mức độ (= -(으)ㄹ 정도로).'] },
            { name: '-든지', meaning: 'Bất kể / Dù gì', level: 4, theory: ['<b>-든지</b> = bất kể, dù gì, hoặc. Không quan trọng lựa chọn nào.'], examples: [{ kr: '뭐<b>든지</b> 잘 먹어요.', vi: 'Ăn gì cũng được.' }, { kr: '어디<b>든지</b> 갈 수 있어요.', vi: 'Đi đâu cũng được.' }, { kr: '비가 오<b>든지</b> 눈이 오<b>든지</b> 갈 거예요.', vi: 'Dù mưa hay tuyết cũng sẽ đi.' }], notes: ['A-든지 B-든지 = dù A hay B.', '뭐든지 (gì cũng), 어디든지 (đâu cũng), 누구든지 (ai cũng).'] },
            { name: '-듯이', meaning: 'Như / Giống như', level: 4, theory: ['<b>-듯이</b> = như, giống như. Ví von, so sánh.'], examples: [{ kr: '물 흐르<b>듯이</b> 자연스러웠어요.', vi: 'Tự nhiên như nước chảy.' }, { kr: '거짓말하<b>듯이</b> 빨리 끝났어요.', vi: 'Kết thúc nhanh như nói dối.' }, { kr: '꿈꾸<b>듯이</b> 행복했어요.', vi: 'Hạnh phúc như mơ.' }], notes: ['= -듯: 하듯 = 하듯이.', 'So sánh: -처럼 (danh từ), -듯이 (động/tính từ).'] },
            { name: '-(으)로 인해(서)', meaning: 'Do / Bởi vì (formal)', level: 5, theory: ['<b>-(으)로 인해(서)</b> = do, bởi vì. Formal, dùng trong văn viết.'], examples: [{ kr: '태풍<b>으로 인해</b> 비행기가 결항됐습니다.', vi: 'Do bão nên chuyến bay bị hủy.' }, { kr: '코로나<b>로 인해</b> 학교가 문을 닫았다.', vi: 'Do corona trường học đóng cửa.' }, { kr: '사고<b>로 인해</b> 도로가 막혔습니다.', vi: 'Do tai nạn đường bị tắc.' }], notes: ['Danh từ + (으)로 인해.', 'Rất formal — tin tức, công văn.'] },
            { name: '-(으)려던 참이다', meaning: 'Đúng lúc định', level: 4, theory: ['<b>-(으)려던 참이다</b> = đúng lúc định, vừa đúng lúc. Trùng hợp may mắn.'], examples: [{ kr: '전화하<b>려던 참이었어요</b>.', vi: 'Tôi cũng đúng lúc định gọi.' }, { kr: '나가<b>려던 참에</b> 비가 왔어요.', vi: 'Đúng lúc định ra ngoài thì trời mưa.' }, { kr: '말하<b>려던 참이에요</b>.', vi: 'Đúng lúc định nói đây.' }], notes: ['참 = đúng lúc, thời điểm.', 'Thường dùng khi có sự trùng hợp.'] },
            { name: '-는 셈 치다', meaning: 'Coi như / Xem như', level: 5, theory: ['<b>-는 셈 치다</b> = coi như, xem như.'], examples: [{ kr: '없<b>는 셈 치세요</b>.', vi: 'Coi như không có đi.' }, { kr: '한 번 용서하<b>는 셈 치자</b>.', vi: 'Coi như tha một lần.' }, { kr: '여행 간 <b>셈 치고</b> 맛있는 거 먹자.', vi: 'Coi như đi du lịch, ăn ngon đi.' }], notes: ['셈 치다 = coi như, giả định.', '셈 치고 = coi như ... rồi (làm gì đó).'] },
            { name: '-는 수(가) 있다', meaning: 'Có thể xảy ra', level: 5, theory: ['<b>-는 수(가) 있다</b> = có thể xảy ra, có khả năng (thường bất ngờ).'], examples: [{ kr: '실수하<b>는 수가 있으니</b> 조심하세요.', vi: 'Có thể sai sót nên hãy cẩn thận.' }, { kr: '지갑을 잃어버리<b>는 수가 있어요</b>.', vi: 'Có thể mất ví.' }, { kr: '넘어지<b>는 수가 있어요</b>.', vi: 'Có thể bị ngã.' }], notes: ['Cảnh báo khả năng bất ngờ.', '≈ -(으)ㄹ 수 있다 nhưng nhấn mạnh bất ngờ hơn.'] },
            { name: '-는 수밖에 (없다)', meaning: 'Chỉ còn cách / Đành phải', level: 5, theory: ['<b>-는 수밖에 없다</b> = chỉ còn cách, đành phải. Không còn lựa chọn khác.'], examples: [{ kr: '참<b>는 수밖에 없어요</b>.', vi: 'Chỉ còn cách chịu.' }, { kr: '기다리<b>는 수밖에 없어요</b>.', vi: 'Đành phải chờ.' }, { kr: '포기하<b>는 수밖에 없었어요</b>.', vi: 'Chỉ còn cách bỏ cuộc.' }], notes: ['≈ -(으)ㄹ 수밖에 없다.', 'Nhấn mạnh bất đắc dĩ.'] }
        ]
    },
    {
        id: 'nominalization', icon: '📎', title: '명사화 & 기타 (Danh từ hóa & Khác)',
        description: 'Danh từ hóa, trợ từ đặc biệt, và các cấu trúc đa dạng',
        items: [
            { name: '-(으)ㄴ/는/(으)ㄹ지', meaning: '(Liệu) có ... không', level: 3, theory: ['<b>-(으)ㄴ/는/(으)ㄹ지</b> = liệu có, (không biết) ... hay không. Dùng trong câu hỏi gián tiếp.'], examples: [{ kr: '뭘 먹을<b>지</b> 정했어요?', vi: 'Quyết định ăn gì chưa?' }, { kr: '누가 올<b>지</b> 몰라요.', vi: 'Không biết ai sẽ đến.' }, { kr: '어디로 갈<b>지</b> 고민이에요.', vi: 'Đang phân vân đi đâu.' }], notes: ['뭐/어디/누구 + -(으)ㄹ지: câu hỏi gián tiếp.', 'A-(으)ㄹ지 B-(으)ㄹ지: phân vân A hay B.'] },
            { name: '-(으)로서', meaning: 'Với tư cách là', level: 5, theory: ['<b>-(으)로서</b> = với tư cách là, trong vai trò. Gắn sau danh từ chỉ vai trò.'], examples: [{ kr: '교수<b>로서</b> 책임감을 가져야 합니다.', vi: 'Với tư cách giáo sư phải có trách nhiệm.' }, { kr: '친구<b>로서</b> 충고하는 거야.', vi: 'Tôi khuyên với tư cách bạn bè.' }, { kr: '학생<b>으로서</b> 최선을 다해야 해요.', vi: 'Với tư cách sinh viên phải cố gắng hết sức.' }], notes: ['-(으)로서 = tư cách (자격). -(으)로써 = phương tiện (수단).', 'TOPIK hay bẫy: 로서 vs 로써.'] },
            { name: '-(이)나 -(이)나 할 것 없이', meaning: 'Bất kể A hay B', level: 5, theory: ['<b>-(이)나 -(이)나 할 것 없이</b> = bất kể A hay B, cả A lẫn B đều.'], examples: [{ kr: '남자<b>나</b> 여자<b>나 할 것 없이</b> 다 참여했어요.', vi: 'Bất kể nam nữ đều tham gia.' }, { kr: '아이<b>나</b> 어른이<b>나 할 것 없이</b> 좋아해요.', vi: 'Cả trẻ con lẫn người lớn đều thích.' }, { kr: '낮이<b>나</b> 밤이<b>나 할 것 없이</b> 일해요.', vi: 'Bất kể ngày đêm đều làm việc.' }], notes: ['Nhấn mạnh: KHÔNG PHÂN BIỆT, tất cả đều như nhau.'] },
            { name: '-기 위해(서)', meaning: 'Để / Vì mục đích', level: 3, theory: ['<b>-기 위해(서)</b> = để, vì mục đích. Nêu mục đích.'], examples: [{ kr: '건강하<b>기 위해서</b> 운동해요.', vi: 'Tập thể dục để khỏe mạnh.' }, { kr: '합격하<b>기 위해</b> 공부해요.', vi: 'Học để đỗ thi.' }, { kr: '돈을 벌<b>기 위해서</b> 일해요.', vi: 'Làm việc để kiếm tiền.' }], notes: ['Formal hơn -(으)려고.', '명사 + 을/를 위해(서): 건강을 위해서.'] },
            { name: '-기 쉽다', meaning: 'Dễ (bị / để)', level: 3, theory: ['<b>-기 쉽다</b> = dễ, dễ bị. Khả năng cao xảy ra.'], examples: [{ kr: '감기에 걸리<b>기 쉬워요</b>.', vi: 'Dễ bị cảm.' }, { kr: '길을 잃<b>기 쉬워요</b>.', vi: 'Dễ bị lạc.' }, { kr: '이 문제는 틀리<b>기 쉬워요</b>.', vi: 'Bài này dễ sai.' }], notes: ['Thường mang nghĩa tiêu cực (dễ bị).', '≠ 쉽게 + V: dễ dàng làm.'] },
            { name: '-기 십상이다', meaning: 'Rất dễ bị / Hay xảy ra', level: 5, theory: ['<b>-기 십상이다</b> = rất dễ bị, hay xảy ra (tiêu cực).'], examples: [{ kr: '무리하면 다치<b>기 십상이에요</b>.', vi: 'Cố quá dễ bị thương.' }, { kr: '서두르면 실수하<b>기 십상이에요</b>.', vi: 'Vội vàng dễ sai lắm.' }, { kr: '비 오면 미끄러지<b>기 십상이에요</b>.', vi: 'Trời mưa dễ bị trượt.' }], notes: ['Mạnh hơn -기 쉽다. Kết quả luôn tiêu cực.'] },
            { name: '-기 어렵다', meaning: 'Khó để', level: 3, theory: ['<b>-기 어렵다</b> = khó để. Đánh giá mức độ khó.'], examples: [{ kr: '용서하<b>기 어려워요</b>.', vi: 'Khó tha thứ.' }, { kr: '이해하<b>기 어려워요</b>.', vi: 'Khó hiểu.' }, { kr: '믿<b>기 어려워요</b>.', vi: 'Khó tin.' }], notes: ['≈ -(으)ㄹ 수 없다: nhưng -기 어렵다 mềm hơn (khó chứ không phải không thể).'] },
            { name: '-기/게 마련이다', meaning: 'Tất yếu / Đương nhiên sẽ', level: 5, theory: ['<b>-기/게 마련이다</b> = tất yếu, bao giờ cũng, đương nhiên sẽ.'], examples: [{ kr: '노력하면 성공하<b>기 마련이에요</b>.', vi: 'Cố gắng thì tất yếu sẽ thành công.' }, { kr: '시간이 지나면 잊<b>기 마련이에요</b>.', vi: 'Qua thời gian tất yếu sẽ quên.' }, { kr: '사람은 누구나 실수하<b>게 마련이에요</b>.', vi: 'Ai cũng tất yếu phải phạm sai lầm.' }], notes: ['Diễn tả quy luật tự nhiên.', '≈ -는 법이다: nhưng -기 마련이다 nhấn mạnh tính tất yếu mạnh hơn.'] },
            { name: '-기는(요)', meaning: 'Có gì đâu / Nói gì', level: 3, theory: ['<b>-기는(요)</b> = có gì đâu, nói gì, đâu có. Khiêm tốn phủ nhận lời khen.'], examples: [{ kr: '예쁘<b>기는요</b>.', vi: 'Đẹp gì đâu.' }, { kr: '잘하<b>기는요</b>. 아직 멀었어요.', vi: 'Giỏi gì đâu, còn xa lắm.' }, { kr: '감사하<b>기는요</b>. 당연한 거예요.', vi: 'Có gì đâu. Đương nhiên thôi mà.' }], notes: ['Khiêm tốn từ chối lời khen — rất phổ biến.', '= 뭘요, 아니에요.'] },
            { name: '-기만 하면 (되다)', meaning: 'Chỉ cần ... là được', level: 4, theory: ['<b>-기만 하면 (되다)</b> = chỉ cần ... là được/đủ.'], examples: [{ kr: '버튼만 누르<b>기만 하면 돼요</b>.', vi: 'Chỉ cần nhấn nút là được.' }, { kr: '신청서를 내<b>기만 하면 됩니다</b>.', vi: 'Chỉ cần nộp đơn là đủ.' }, { kr: '여기 서명하<b>기만 하면 돼요</b>.', vi: 'Chỉ cần ký ở đây là xong.' }], notes: ['Nhấn mạnh sự đơn giản.', '기만 하면 = chỉ cần duy nhất 1 việc.'] },
            { name: '-기에(는)', meaning: 'Để mà / Cho việc', level: 5, theory: ['<b>-기에(는)</b> = để mà, cho việc. Đánh giá tính phù hợp.'], examples: [{ kr: '이 옷은 여름에 입<b>기에</b> 좋아요.', vi: 'Quần áo này tốt cho mùa hè.' }, { kr: '살<b>기에</b> 편한 동네예요.', vi: 'Khu này tiện để sống.' }, { kr: '혼자 하<b>기에는</b> 너무 많아요.', vi: 'Tự làm một mình thì quá nhiều.' }], notes: ['Đánh giá: A-기에(는) tốt/xấu/nhiều/ít.', '= -기에는: thêm 는 nhấn mạnh.'] },
            { name: '-길래', meaning: 'Vì (tôi thấy) ... nên', level: 4, theory: ['<b>-길래</b> = vì (tôi thấy/nghe) ... nên. Lý do dựa trên quan sát → hành động của mình.'], examples: [{ kr: '맛있어 보이<b>길래</b> 사 봤어요.', vi: 'Thấy trông ngon nên mua thử.' }, { kr: '비가 오<b>길래</b> 우산을 가져왔어요.', vi: 'Thấy trời mưa nên mang ô.' }, { kr: '세일한<b>다길래</b> 가 봤어요.', vi: 'Nghe nói giảm giá nên đi xem.' }], notes: ['Ngôi 1 ở vế sau: tôi thấy A nên tôi đã B.', 'Khẩu ngữ, thân mật.'] },
            { name: '-대로', meaning: 'Theo / Như', level: 4, theory: ['<b>-대로</b> = theo, như, đúng như.'], examples: [{ kr: '말한 <b>대로</b> 했어요.', vi: 'Đã làm đúng như nói.' }, { kr: '계획한 <b>대로</b> 진행합시다.', vi: 'Hãy tiến hành theo kế hoạch.' }, { kr: '마음<b>대로</b> 하세요.', vi: 'Làm theo ý bạn đi.' }], notes: ['명사 + 대로: 마음대로, 생각대로.', '동사 + -(으)ㄴ 대로: 들은 대로.'] },
            { name: '(이)라도', meaning: 'Dù chỉ / Ít nhất cũng', level: 4, theory: ['<b>(이)라도</b> = dù chỉ, ít nhất cũng, cho dù là. Chấp nhận lựa chọn không lý tưởng.'], examples: [{ kr: '물<b>이라도</b> 한 잔 마시세요.', vi: 'Ít nhất uống một cốc nước đi.' }, { kr: '전화<b>라도</b> 해 주세요.', vi: 'Ít nhất gọi điện cho tôi.' }, { kr: '커피<b>라도</b> 마실까요?', vi: 'Uống cà phê cũng được chứ?' }], notes: ['Lựa chọn không lý tưởng nhưng chấp nhận được.', '≈ 만이라도: nhấn mạnh hơn.'] },
            { name: '-만 못하다', meaning: 'Không bằng / Thua', level: 4, theory: ['<b>-만 못하다</b> = không bằng, thua. So sánh kém hơn.'], examples: [{ kr: '올해가 작년<b>만 못해요</b>.', vi: 'Năm nay không bằng năm ngoái.' }, { kr: '가짜는 진짜<b>만 못해요</b>.', vi: 'Hàng giả không bằng hàng thật.' }, { kr: '차라리 안 하느니<b>만 못해요</b>.', vi: 'Thà đừng làm còn hơn.' }], notes: ['A가 B만 못하다 = A thua B, A không bằng B.'] }
        ]
    },
    {
        id: 'advanced_master', icon: '👑', title: '고급 표현 (Cao cấp 5-6)',
        description: 'Biểu hiện cao cấp, trợ từ đặc biệt dùng trong TOPIK II cấp 5-6',
        items: [
            { name: '-에 관해(서)', meaning: 'Về / Liên quan đến', level: 5, theory: ['<b>-에 관해(서)</b> = về, liên quan đến. Formal.'], examples: [{ kr: '환경 문제<b>에 관해</b> 논의했습니다.', vi: 'Đã thảo luận về vấn đề môi trường.' }, { kr: '역사<b>에 관한</b> 책이에요.', vi: 'Đây là sách về lịch sử.' }, { kr: '그 사건<b>에 관해서</b> 알고 싶어요.', vi: 'Muốn biết về vụ việc đó.' }], notes: ['= -에 대해(서): gần như tương đương.', '관한 (dạng quan hệ từ): 환경에 관한 문제.'] },
            { name: '-에 대해(서)', meaning: 'Về / Đối với', level: 3, theory: ['<b>-에 대해(서)</b> = về, đối với. Chủ đề quan tâm.'], examples: [{ kr: '한국 문화<b>에 대해</b> 공부해요.', vi: 'Học về văn hóa Hàn Quốc.' }, { kr: '미래<b>에 대해</b> 걱정이에요.', vi: 'Lo lắng về tương lai.' }, { kr: '그 사람<b>에 대해</b> 아는 거 있어요?', vi: 'Biết gì về người đó không?' }], notes: ['Phổ biến nhất để nêu chủ đề.', '대한 (dạng quan hệ từ): 한국에 대한 책.'] },
            { name: '-에 따라(서)', meaning: 'Tùy theo / Theo', level: 4, theory: ['<b>-에 따라(서)</b> = tùy theo, phụ thuộc vào, theo.'], examples: [{ kr: '날씨<b>에 따라</b> 계획이 바뀔 수 있어요.', vi: 'Kế hoạch có thể thay đổi tùy thời tiết.' }, { kr: '상황<b>에 따라</b> 다릅니다.', vi: 'Tùy tình huống mà khác nhau.' }, { kr: '법<b>에 따라</b> 처리합니다.', vi: 'Xử lý theo luật.' }], notes: ['Nghĩa 1: tùy thuộc. Nghĩa 2: theo (tuân theo).', '에 따른 (dạng quan hệ từ): 상황에 따른 변화.'] },
            { name: '-에 의해(서)', meaning: 'Bởi / Do (bị động formal)', level: 5, theory: ['<b>-에 의해(서)</b> = bởi, do. Chỉ tác nhân trong câu bị động formal.'], examples: [{ kr: '이 건물은 유명한 건축가<b>에 의해</b> 설계되었습니다.', vi: 'Tòa nhà này được thiết kế bởi kiến trúc sư nổi tiếng.' }, { kr: '법<b>에 의해</b> 처벌받았습니다.', vi: 'Bị trừng phạt theo luật.' }, { kr: '화재<b>에 의해</b> 건물이 무너졌다.', vi: 'Tòa nhà sụp đổ do hỏa hoạn.' }], notes: ['Câu bị động formal: N + 에 의해(서) + 되다/받다.', 'Rất formal — văn viết, tin tức.'] },
            { name: '-에다(가)', meaning: 'Vào / Ở (thêm vào)', level: 4, theory: ['<b>-에다(가)</b> = vào, ở (nhấn mạnh vị trí/đối tượng thêm vào).'], examples: [{ kr: '벽<b>에다가</b> 그림을 걸었어요.', vi: 'Treo tranh lên tường.' }, { kr: '밥<b>에다</b> 김치를 얹어 먹었어요.', vi: 'Lấy kimchi đặt lên cơm ăn.' }, { kr: '여기<b>에다가</b> 놓으세요.', vi: 'Đặt vào đây.' }], notes: ['Nhấn mạnh vị trí/đối tượng hơn -에 đơn thuần.', 'Khẩu ngữ, thân mật.'] },
            { name: '-을/를 비롯한', meaning: 'Bao gồm / Kể cả', level: 5, theory: ['<b>-을/를 비롯한</b> = bao gồm, kể cả. Liệt kê đại diện.'], examples: [{ kr: '서울<b>을 비롯한</b> 대도시는 인구가 많다.', vi: 'Các thành phố lớn bao gồm Seoul đều đông dân.' }, { kr: '회장<b>을 비롯한</b> 임원들이 참석했다.', vi: 'Các lãnh đạo bao gồm chủ tịch đều tham dự.' }, { kr: '한국<b>을 비롯한</b> 아시아 국가들.', vi: 'Các nước châu Á bao gồm Hàn Quốc.' }], notes: ['A를 비롯한 B = B bao gồm A (đại diện).', 'Formal, văn viết.'] },
            { name: '-을/를 통해(서)', meaning: 'Thông qua / Qua', level: 4, theory: ['<b>-을/를 통해(서)</b> = thông qua, qua. Phương tiện/kênh.'], examples: [{ kr: '인터넷<b>을 통해</b> 정보를 얻었어요.', vi: 'Thu thập thông tin qua internet.' }, { kr: '친구<b>를 통해</b> 소식을 들었어요.', vi: 'Nghe tin qua bạn bè.' }, { kr: '경험<b>을 통해</b> 배웠어요.', vi: 'Học qua trải nghiệm.' }], notes: ['= -을/를 통한 (dạng quan hệ từ).'] },
            { name: '(이)야말로', meaning: 'Chính là / Mới thật sự là', level: 5, theory: ['<b>(이)야말로</b> = chính là, mới thật sự là. Nhấn mạnh tuyệt đối.'], examples: [{ kr: '사랑이<b>야말로</b> 가장 중요해요.', vi: 'Tình yêu chính là điều quan trọng nhất.' }, { kr: '이것이<b>야말로</b> 진짜예요.', vi: 'Đây mới thật sự là hàng thật.' }, { kr: '건강이<b>야말로</b> 최고의 재산이다.', vi: 'Sức khỏe chính là tài sản lớn nhất.' }], notes: ['Nhấn mạnh TUYỆT ĐỐI — chính cái này mới là.', 'Formal, hùng biện.'] },
            { name: '-기는 하지만 / -기는 -지만', meaning: 'Tuy có ... nhưng', level: 4, theory: ['<b>-기는 하지만</b> = tuy có ... nhưng. Thừa nhận một phần nhưng phản bác.'], examples: [{ kr: '맛있<b>기는 하지만</b> 비싸요.', vi: 'Tuy ngon nhưng đắt.' }, { kr: '예쁘<b>기는 하지만</b> 불편해요.', vi: 'Tuy đẹp nhưng bất tiện.' }, { kr: '알<b>기는 하지만</b> 잘 모르겠어요.', vi: 'Tuy biết nhưng không rõ lắm.' }], notes: ['Thừa nhận vế trước nhưng nhấn mạnh vế sau.', '= -기는 -지만 (rút gọn).'] },
            { name: '아무 -(이)나', meaning: 'Bất kỳ ai/gì', level: 3, theory: ['<b>아무 -(이)나</b> = bất kỳ, bất cứ. Không kén chọn.'], examples: [{ kr: '아무 <b>거나</b> 주세요.', vi: 'Cho bất kỳ cái gì cũng được.' }, { kr: '아무 <b>데나</b> 앉으세요.', vi: 'Ngồi đâu cũng được.' }, { kr: '아무<b>나</b> 올 수 있어요.', vi: 'Ai cũng có thể đến.' }], notes: ['아무거나 (cái gì cũng), 아무나 (ai cũng), 아무데나 (đâu cũng).', 'Khẳng định: không kén chọn.'] },
            { name: '아무 -도', meaning: 'Không ai / Không gì', level: 3, theory: ['<b>아무 -도</b> = không ai, không gì cả. Phủ định hoàn toàn.'], examples: [{ kr: '아무<b>도</b> 없었어요.', vi: 'Không có ai.' }, { kr: '아무것<b>도</b> 안 먹었어요.', vi: 'Không ăn gì cả.' }, { kr: '아무 데<b>도</b> 안 갔어요.', vi: 'Không đi đâu cả.' }], notes: ['Luôn đi với PHỦ ĐỊNH (안/못/없다).', 'So sánh: 아무나 (ai cũng = khẳng định), 아무도 (không ai = phủ định).'] },
            { name: '얼마나 -(으)ㄴ/는지', meaning: 'Biết bao / Quá ... đến nỗi', level: 4, theory: ['<b>얼마나 -(으)ㄴ/는지</b> = biết bao, ... đến nỗi. Nhấn mạnh mức độ cực cao.'], examples: [{ kr: '얼마나 기쁜<b>지</b> 몰라요.', vi: 'Vui biết bao không biết.' }, { kr: '얼마나 맛있<b>는지</b> 몰라.', vi: 'Ngon biết bao.' }, { kr: '얼마나 보고 싶었<b>는지</b> 몰라요.', vi: 'Nhớ biết bao nhiêu.' }], notes: ['얼마나 + A + -(으)ㄴ/는지 모르다 = A biết bao, cực kỳ A.'] },
            { name: '치고(는)', meaning: 'So với / Đối với', level: 5, theory: ['<b>치고(는)</b> = so với, đối với. So sánh bất ngờ, vượt/dưới kỳ vọng.'], examples: [{ kr: '나이<b>치고</b> 젊어 보여요.', vi: 'So với tuổi thì trông trẻ.' }, { kr: '초보<b>치고</b> 잘해요.', vi: 'So với người mới thì giỏi.' }, { kr: '가격<b>치고</b> 품질이 좋아요.', vi: 'So với giá thì chất lượng tốt.' }], notes: ['Kết quả thường BẤT NGỜ — vượt hoặc dưới kỳ vọng.', '명사 + 치고(는).'] },
            { name: '마저', meaning: 'Đến cả / Ngay cả (cuối cùng)', level: 5, theory: ['<b>마저</b> = đến cả, ngay cả. Nhấn mạnh thứ cuối cùng cũng bị ảnh hưởng.'], examples: [{ kr: '친구<b>마저</b> 떠났어요.', vi: 'Đến cả bạn bè cũng bỏ đi.' }, { kr: '돈<b>마저</b> 없어졌어요.', vi: 'Đến cả tiền cũng hết.' }, { kr: '희망<b>마저</b> 사라졌어요.', vi: 'Đến cả hy vọng cũng tan biến.' }], notes: ['Tiêu cực: thứ cuối cùng còn sót lại cũng mất.', 'So sánh: 조차 ≈ 마저 nhưng 마저 nhấn mạnh cuối cùng.'] },
            { name: '만큼', meaning: 'Bằng / Ngang', level: 3, theory: ['<b>만큼</b> (trợ từ) = bằng, ngang, chừng đó. So sánh ngang bằng.'], examples: [{ kr: '형<b>만큼</b> 키가 커요.', vi: 'Cao bằng anh.' }, { kr: '노력한 <b>만큼</b> 결과가 나와요.', vi: 'Kết quả ngang với công sức.' }, { kr: '생각<b>만큼</b> 쉽지 않아요.', vi: 'Không dễ như tưởng.' }], notes: ['명사 + 만큼: so sánh ngang bằng.', '동사 + -(으)ㄴ/는 만큼: xem category expressions.'] },
            { name: '조차', meaning: 'Ngay cả / Đến cả', level: 5, theory: ['<b>조차</b> = ngay cả, đến cả. Nhấn mạnh phủ định/tình huống tệ.'], examples: [{ kr: '이름<b>조차</b> 몰라요.', vi: 'Ngay cả tên cũng không biết.' }, { kr: '물 한 모금<b>조차</b> 못 마셨어요.', vi: 'Ngay cả một ngụm nước cũng không uống được.' }, { kr: '가족<b>조차</b> 믿을 수 없어요.', vi: 'Ngay cả gia đình cũng không tin được.' }], notes: ['Luôn đi với phủ định.', '≈ 마저, 까지: nhưng 조차 mạnh nhất, bi đát nhất.'] }
        ]
    }
];
