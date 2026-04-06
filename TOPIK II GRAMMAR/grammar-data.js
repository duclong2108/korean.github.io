// TOPIK II Grammar Data - Comprehensive
const GRAMMAR_DATA = [
    {
        id: 'connectors', icon: '🔗', title: '연결어미 (Vĩ tố liên kết nâng cao)',
        description: 'Các đuôi nối câu trung-cao cấp thường gặp trong TOPIK II',
        items: [
            {
                name: '-자마자', meaning: 'Ngay khi / Vừa ... liền', level: 3,
                theory: ['<b>-자마자</b> = ngay khi, vừa ... liền. Hành động vế sau xảy ra ngay lập tức sau vế trước.', 'Gắn trực tiếp vào thân động từ.'],
                examples: [
                    { kr: '집에 도착하<b>자마자</b> 잠이 들었어요.', vi: 'Vừa đến nhà liền ngủ thiếp đi.' },
                    { kr: '수업이 끝나<b>자마자</b> 집에 갔어요.', vi: 'Vừa hết lớp liền về nhà.' }
                ],
                notes: ['Chỉ dùng với động từ.', 'Không dùng với mệnh lệnh/đề nghị ở vế sau.', 'Chủ ngữ hai vế có thể khác nhau.']
            },
            {
                name: '-더니', meaning: 'Trước đó ... nay / Rồi thì', level: 4,
                theory: ['<b>-더니</b> diễn tả sự thay đổi hoặc kết quả sau khi quan sát.', 'Ngôi 3: A-더니 B (anh ấy trước ... nay ...). Ngôi 1: chỉ dùng quá khứ -았/었더니.'],
                examples: [
                    { kr: '아까 비가 오<b>더니</b> 지금은 맑아요.', vi: 'Lúc nãy mưa, giờ thì trời trong.' },
                    { kr: '열심히 공부하<b>더니</b> 시험에 합격했어요.', vi: 'Đã học chăm chỉ rồi đỗ kỳ thi.' },
                    { kr: '많이 먹<b>었더니</b> 배가 아파요.', vi: 'Ăn nhiều nên đau bụng.' }
                ],
                notes: ['Ngôi 3 + -더니: quan sát người khác. Ngôi 1 + -았/었더니: hành động của mình, kết quả bất ngờ.', 'Vế trước là thông tin đã biết/quan sát, vế sau là kết quả.']
            },
            {
                name: '-(으)ㄹ수록', meaning: 'Càng ... càng', level: 3,
                theory: ['<b>-(으)ㄹ수록</b> = càng ... càng. Mức độ tăng theo.', 'Thường đi với 더: -(으)ㄹ수록 더.', 'Cấu trúc nhấn mạnh: -(으)면 -(으)ㄹ수록.'],
                examples: [
                    { kr: '한국어는 공부하<b>면 할수록</b> 재미있어요.', vi: 'Tiếng Hàn càng học càng thú vị.' },
                    { kr: '생각하<b>면 할수록</b> 어려워요.', vi: 'Càng nghĩ càng thấy khó.' },
                    { kr: '갈<b>수록</b> 더 추워져요.', vi: 'Càng đi càng lạnh hơn.' }
                ],
                notes: ['Cấu trúc mạnh: A-(으)면 A-(으)ㄹ수록 = càng A thì càng.']
            },
            {
                name: '-다가', meaning: 'Đang làm ... thì / Giữa chừng', level: 3,
                theory: ['<b>-다가</b> = đang làm gì đó thì chuyển sang hành động khác.', 'Gắn vào thân động từ. Nhấn mạnh sự gián đoạn hoặc chuyển đổi.'],
                examples: [
                    { kr: '공부하<b>다가</b> 잠이 들었어요.', vi: 'Đang học thì ngủ thiếp đi.' },
                    { kr: '걸어가<b>다가</b> 넘어졌어요.', vi: 'Đang đi bộ thì bị ngã.' },
                    { kr: '밥을 먹<b>다가</b> 전화를 받았어요.', vi: 'Đang ăn cơm thì nhận điện thoại.' }
                ],
                notes: ['Chủ ngữ hai vế phải giống nhau.', 'Khác với -고: -다가 nhấn mạnh gián đoạn, -고 đơn thuần liệt kê.']
            },
            {
                name: '-느라(고)', meaning: 'Vì bận / Do mải', level: 4,
                theory: ['<b>-느라(고)</b> = vì mải, do bận (làm gì). Lý do tiêu cực.', 'Chủ ngữ hai vế phải giống nhau. Vế sau thường là kết quả tiêu cực.'],
                examples: [
                    { kr: '일하<b>느라고</b> 못 갔어요.', vi: 'Vì mải làm việc nên không đi được.' },
                    { kr: '공부하<b>느라고</b> 밤을 새웠어요.', vi: 'Vì mải học nên đã thức trắng đêm.' },
                    { kr: '준비하<b>느라고</b> 바빴어요.', vi: 'Vì mải chuẩn bị nên bận.' }
                ],
                notes: ['Chỉ dùng với động từ. KHÔNG dùng với tính từ.', 'Vế sau KHÔNG dùng mệnh lệnh/đề nghị.', 'Vế trước KHÔNG chia thì (không -았/었-).']
            },
            {
                name: '-(으)ㄴ/는 반면(에)', meaning: 'Ngược lại / Trái lại', level: 4,
                theory: ['<b>-(으)ㄴ/는 반면(에)</b> = ngược lại, trái lại, mặt khác.', 'Động từ: -는 반면. Tính từ: -(으)ㄴ 반면.'],
                examples: [
                    { kr: '형은 키가 큰 <b>반면에</b> 동생은 작아요.', vi: 'Anh thì cao, ngược lại em thì thấp.' },
                    { kr: '이 식당은 맛있는 <b>반면에</b> 비싸요.', vi: 'Nhà hàng này ngon nhưng ngược lại thì đắt.' }
                ],
                notes: ['Nhấn mạnh sự tương phản giữa hai vế.', 'Formal hơn -지만.']
            },
            {
                name: '-다 보면', meaning: 'Nếu cứ tiếp tục ... thì', level: 4,
                theory: ['<b>-다 보면</b> = nếu cứ tiếp tục làm thì (sẽ xảy ra). Kết quả tự nhiên theo thời gian.'],
                examples: [
                    { kr: '연습하<b>다 보면</b> 잘할 수 있을 거예요.', vi: 'Nếu cứ luyện tập thì sẽ giỏi được.' },
                    { kr: '살<b>다 보면</b> 좋은 날도 있을 거예요.', vi: 'Cứ sống rồi sẽ có ngày tốt đẹp.' }
                ],
                notes: ['Vế sau thường là kết quả tích cực hoặc tự nhiên.', 'Khác -다 보니까: -다 보면 giả định tương lai, -다 보니까 kết quả đã xảy ra.']
            },
            {
                name: '-다 보니(까)', meaning: 'Khi cứ làm ... thì nhận ra', level: 4,
                theory: ['<b>-다 보니(까)</b> = sau khi cứ tiếp tục làm thì (đã nhận ra/xảy ra). Kết quả quá khứ.'],
                examples: [
                    { kr: '한국에서 살<b>다 보니까</b> 한국어가 늘었어요.', vi: 'Sống ở Hàn Quốc rồi thì tiếng Hàn tăng lên.' },
                    { kr: '일하<b>다 보니</b> 벌써 저녁이에요.', vi: 'Mải làm việc thì đã tối rồi.' }
                ],
                notes: ['Kết quả đã xảy ra (≠ -다 보면 = giả định).']
            },
            {
                name: '-(으)므로', meaning: 'Vì / Cho nên (formal)', level: 5,
                theory: ['<b>-(으)므로</b> = vì, cho nên. Dạng formal/văn viết của -아/어서, -(으)니까.', 'Không patchim → <b>-므로</b>, có patchim → <b>-으므로</b>.'],
                examples: [
                    { kr: '내일은 공휴일이<b>므로</b> 은행이 문을 닫습니다.', vi: 'Vì ngày mai là ngày lễ nên ngân hàng đóng cửa.' },
                    { kr: '시간이 없<b>으므로</b> 빨리 시작합시다.', vi: 'Vì không có thời gian nên hãy bắt đầu nhanh.' }
                ],
                notes: ['Rất formal, dùng trong văn bản, thông báo, luật.', 'Tương đương: -기 때문에, -(으)니까, -아/어서.']
            },
            {
                name: '-(으)ㄴ/는데도', meaning: 'Mặc dù / Dù rằng', level: 3,
                theory: ['<b>-(으)ㄴ/는데도</b> = mặc dù, dù rằng. Kết quả trái ngược với kỳ vọng.', 'Động từ: -는데도. Tính từ: -(으)ㄴ데도.'],
                examples: [
                    { kr: '열심히 공부했<b>는데도</b> 시험에 떨어졌어요.', vi: 'Mặc dù đã học chăm chỉ nhưng vẫn trượt thi.' },
                    { kr: '비가 오<b>는데도</b> 산에 갔어요.', vi: 'Mặc dù trời mưa nhưng vẫn đi leo núi.' }
                ],
                notes: ['Nhấn mạnh kết quả bất ngờ/trái ngược hơn -지만.', '= -었/았는데도 (quá khứ).']
            },
            {
                name: '-(으)ㄹ 뿐만 아니라', meaning: 'Không chỉ ... mà còn', level: 4,
                theory: ['<b>-(으)ㄹ 뿐만 아니라</b> = không chỉ ... mà còn.'],
                examples: [
                    { kr: '노래를 잘할 <b>뿐만 아니라</b> 춤도 잘 춰요.', vi: 'Không chỉ hát hay mà còn nhảy giỏi.' },
                    { kr: '한국어를 잘할 <b>뿐만 아니라</b> 일본어도 해요.', vi: 'Không chỉ giỏi tiếng Hàn mà còn biết tiếng Nhật.' }
                ],
                notes: ['Danh từ + 뿐만 아니라: 학생뿐만 아니라 선생님도.', 'Tương đương: -(으)ㄹ 뿐 아니라, -을 뿐더러.']
            },
            {
                name: '-(으)ㄹ 테니(까)', meaning: 'Vì tôi sẽ/định ... nên', level: 4,
                theory: ['<b>-(으)ㄹ 테니(까)</b> = vì tôi sẽ/định, nên (hãy ...).', 'Ngôi 1: ý định mạnh. Ngôi 3: phỏng đoán.'],
                examples: [
                    { kr: '제가 할 <b>테니까</b> 걱정하지 마세요.', vi: 'Vì tôi sẽ làm, nên đừng lo.' },
                    { kr: '비가 올 <b>테니까</b> 우산을 가져가세요.', vi: 'Vì chắc sẽ mưa nên hãy mang ô.' }
                ],
                notes: ['Ngôi 1 + -(으)ㄹ 테니까 + mệnh lệnh/đề nghị: rất phổ biến.']
            },
            {
                name: '-기는 하지만 / -기는 -지만', meaning: 'Thì có ... nhưng', level: 4,
                theory: ['<b>-기는 하지만</b> = thì có ... nhưng. Thừa nhận rồi chuyển ý.', 'Rút gọn: -기는 -지만 (lặp động từ).'],
                examples: [
                    { kr: '맛있<b>기는 하지만</b> 너무 비싸요.', vi: 'Ngon thì có ngon nhưng đắt quá.' },
                    { kr: '알<b>기는 알지만</b> 설명하기 어려워요.', vi: 'Biết thì có biết nhưng khó giải thích.' }
                ],
                notes: ['Nhấn mạnh sự thừa nhận trước khi phản bác.']
            },
            {
                name: '-고서', meaning: 'Sau khi làm xong ... rồi', level: 4,
                theory: ['<b>-고서</b> = sau khi (hoàn thành hành động trước). Nhấn mạnh trình tự hơn -고.'],
                examples: [
                    { kr: '손을 씻<b>고서</b> 밥을 먹었어요.', vi: 'Rửa tay xong rồi ăn cơm.' },
                    { kr: '졸업하<b>고서</b> 취직했어요.', vi: 'Tốt nghiệp xong rồi đi làm.' }
                ],
                notes: ['Nhấn mạnh hoàn thành hơn -고 đơn thuần.', 'Chủ ngữ hai vế giống nhau.']
            },
            {
                name: '-든지', meaning: 'Dù / Bất kể', level: 4,
                theory: ['<b>-든지</b> = dù, bất kể. Thường đi theo cặp: A-든지 B-든지.'],
                examples: [
                    { kr: '비가 오<b>든지</b> 눈이 오<b>든지</b> 갈 거예요.', vi: 'Dù mưa hay tuyết tôi cũng sẽ đi.' },
                    { kr: '뭐<b>든지</b> 다 먹을 수 있어요.', vi: 'Bất kể gì cũng ăn được.' }
                ],
                notes: ['뭐든지 (bất kể gì), 누구든지 (bất kể ai), 어디든지 (bất kể đâu), 언제든지 (bất kể khi nào).']
            },
            {
                name: '-더라도', meaning: 'Cho dù / Dù cho', level: 4,
                theory: ['<b>-더라도</b> = cho dù, dù cho. Nhượng bộ, kết quả không thay đổi.'],
                examples: [
                    { kr: '아무리 힘들<b>더라도</b> 포기하지 마세요.', vi: 'Cho dù khó đến đâu cũng đừng bỏ cuộc.' },
                    { kr: '비가 오<b>더라도</b> 갈 거예요.', vi: 'Cho dù trời mưa tôi cũng sẽ đi.' }
                ],
                notes: ['Mạnh hơn -아/어도.', 'Thường đi với 아무리.']
            },
            {
                name: '-다가는', meaning: 'Nếu cứ tiếp tục ... thì (hậu quả xấu)', level: 4,
                theory: ['<b>-다가는</b> = nếu cứ tiếp tục thì (kết quả xấu). Cảnh báo.'],
                examples: [
                    { kr: '그렇게 먹<b>다가는</b> 살이 찔 거예요.', vi: 'Nếu cứ ăn thế thì sẽ béo đấy.' },
                    { kr: '이렇게 하<b>다가는</b> 실패할 거예요.', vi: 'Nếu cứ làm thế này thì sẽ thất bại.' }
                ],
                notes: ['Vế sau luôn tiêu cực. Dùng để cảnh báo.', '≠ -다 보면 (kết quả tự nhiên/tích cực).']
            },
            {
                name: '-았/었더라면', meaning: 'Nếu đã ... thì (giả định quá khứ)', level: 5,
                theory: ['<b>-았/었더라면</b> = nếu đã (làm gì) thì. Giả định ngược quá khứ (contrary-to-fact).'],
                examples: [
                    { kr: '더 열심히 공부<b>했더라면</b> 합격했을 텐데.', vi: 'Nếu đã học chăm hơn thì đã đỗ rồi.' },
                    { kr: '일찍 출발<b>했더라면</b> 늦지 않았을 거예요.', vi: 'Nếu đã xuất phát sớm thì đã không trễ.' }
                ],
                notes: ['Vế sau thường dùng -(으)ㄹ 텐데, -(으)ㄹ 거예요.', 'Diễn tả hối tiếc, tiếc nuối.']
            },
            {
                name: '-(으)ㄴ 채(로)', meaning: 'Trong trạng thái / Nguyên vẹn', level: 4,
                theory: ['<b>-(으)ㄴ 채(로)</b> = trong trạng thái, giữ nguyên. Duy trì trạng thái khi làm việc khác.'],
                examples: [
                    { kr: '신발을 신<b>은 채로</b> 들어갔어요.', vi: 'Đi giày nguyên vào nhà.' },
                    { kr: '불을 켜 놓<b>은 채</b> 잠들었어요.', vi: 'Bật đèn nguyên rồi ngủ.' },
                    { kr: '눈을 감<b>은 채</b> 음악을 들었어요.', vi: 'Nhắm mắt nghe nhạc.' }
                ],
                notes: ['Nhấn mạnh trạng thái giữ nguyên không thay đổi.', 'Chỉ dùng với động từ.']
            },
            {
                name: '-는 한편', meaning: 'Trong khi đó / Một mặt', level: 5,
                theory: ['<b>-는 한편</b> = trong khi đó, một mặt, đồng thời. Hai hành động song song.'],
                examples: [
                    { kr: '회사에 다니<b>는 한편</b> 대학원에서 공부하고 있어요.', vi: 'Vừa đi làm đồng thời học thạc sĩ.' },
                    { kr: '경제가 성장하<b>는 한편</b> 환경 문제도 심각해지고 있어요.', vi: 'Kinh tế tăng trưởng, đồng thời vấn đề môi trường cũng nghiêm trọng.' }
                ],
                notes: ['Formal, thường dùng trong văn viết/tin tức.']
            }
        ]
    },
    {
        id: 'endings', icon: '📝', title: '종결어미 (Vĩ tố kết thúc câu nâng cao)',
        description: 'Các đuôi câu trung-cao cấp',
        items: [
            {
                name: '-거든요', meaning: 'Vì / Bởi vì (giải thích)', level: 3,
                theory: ['<b>-거든요</b> = vì, bởi vì. Đưa ra lý do/giải thích mà người nghe chưa biết.', 'Gắn trực tiếp vào thân từ.'],
                examples: [
                    { kr: '오늘 못 가요. 바쁘<b>거든요</b>.', vi: 'Hôm nay không đi được. Vì bận.' },
                    { kr: '한국어를 잘해요. 한국에서 살았<b>거든요</b>.', vi: 'Tôi giỏi tiếng Hàn. Vì đã từng sống ở Hàn.' }
                ],
                notes: ['Dùng khi cung cấp thông tin/lý do mới cho người nghe.', 'Thường đứng ở câu thứ 2 (sau kết quả, giải thích lý do).']
            },
            {
                name: '-잖아요', meaning: 'Mà / Đã nói rồi mà', level: 3,
                theory: ['<b>-잖아요</b> = mà, rõ ràng mà. Nhắc lại điều cả hai đã biết.'],
                examples: [
                    { kr: '제가 말했<b>잖아요</b>.', vi: 'Tôi đã nói rồi mà.' },
                    { kr: '오늘 일요일이<b>잖아요</b>.', vi: 'Hôm nay Chủ nhật mà (bạn biết rồi mà).' }
                ],
                notes: ['Hơi trách móc nhẹ: "bạn đã biết mà sao còn hỏi/làm vậy".', '= -지 않아요 rút gọn.']
            },
            {
                name: '-더라고요', meaning: 'Tôi thấy / Tôi nhận ra', level: 4,
                theory: ['<b>-더라고요</b> = tôi thấy, tôi nhận ra (kể lại trải nghiệm/quan sát cá nhân).', 'Dựa trên trải nghiệm trực tiếp của người nói.'],
                examples: [
                    { kr: '한국 음식이 맛있<b>더라고요</b>.', vi: 'Tôi thấy đồ ăn Hàn Quốc ngon.' },
                    { kr: '그 영화가 재미있<b>더라고요</b>.', vi: 'Tôi thấy bộ phim đó hay.' },
                    { kr: '서울이 생각보다 크<b>더라고요</b>.', vi: 'Tôi thấy Seoul lớn hơn tưởng tượng.' }
                ],
                notes: ['Chỉ dùng với trải nghiệm đã qua (không phải ý kiến chung chung).', 'KHÔNG dùng về bản thân ở hiện tại: 저 예쁘더라고요 (✗).']
            },
            {
                name: '-(으)ㄹ 텐데', meaning: 'Sẽ ... nhưng / Chắc ... mà', level: 4,
                theory: ['<b>-(으)ㄹ 텐데</b> = chắc là ... nhưng. Phỏng đoán + lo lắng/hối tiếc.'],
                examples: [
                    { kr: '지금쯤 도착했을 <b>텐데</b> 연락이 없네요.', vi: 'Chắc giờ đã đến rồi nhưng không liên lạc.' },
                    { kr: '힘들 <b>텐데</b> 괜찮아요?', vi: 'Chắc vất vả lắm, bạn ổn không?' }
                ],
                notes: ['Thể hiện sự lo lắng, thông cảm, hoặc phỏng đoán với cảm xúc.']
            },
            {
                name: '-다니', meaning: 'Không ngờ / Thật sự sao', level: 4,
                theory: ['<b>-다니</b> = không ngờ, thật sao. Ngạc nhiên, khó tin.'],
                examples: [
                    { kr: '시험에 떨어졌<b>다니</b> 믿을 수 없어요.', vi: 'Trượt thi ư, không thể tin được.' },
                    { kr: '그렇게 비싸<b>다니</b>!', vi: 'Đắt thế cơ á!' }
                ],
                notes: ['= -다니요 (lịch sự hơn): 그게 진짜라<b>니요</b>?']
            },
            {
                name: '-(으)ㄹ걸(요)', meaning: 'Chắc là / Lẽ ra nên', level: 4,
                theory: ['<b>-(으)ㄹ걸(요)</b> có 2 nghĩa: (1) Phỏng đoán nhẹ "chắc là". (2) Hối tiếc "lẽ ra nên".'],
                examples: [
                    { kr: '내일 비가 올<b>걸요</b>.', vi: 'Chắc ngày mai trời mưa.' },
                    { kr: '더 열심히 공부할<b>걸</b>.', vi: 'Lẽ ra nên học chăm chỉ hơn.' },
                    { kr: '그때 말할<b>걸</b> 그랬어요.', vi: 'Lẽ ra lúc đó nên nói.' }
                ],
                notes: ['Phỏng đoán (ngôi 3): 걸요. Hối tiếc (ngôi 1): 걸 (+ 그랬다).']
            },
            {
                name: '-다면서(요)?', meaning: 'Nghe nói ... phải không?', level: 4,
                theory: ['<b>-다면서(요)?</b> = nghe nói ... phải không? Xác nhận thông tin đã nghe.'],
                examples: [
                    { kr: '내일 이사한<b>다면서요</b>?', vi: 'Nghe nói ngày mai bạn chuyển nhà?' },
                    { kr: '한국에 간<b>다면서요</b>?', vi: 'Nghe nói bạn đi Hàn Quốc?' }
                ],
                notes: ['Mệnh lệnh: -(으)라면서요. Câu hỏi: -냐면서요.']
            },
            {
                name: '-(으)ㄴ/는 셈이다', meaning: 'Coi như / Tính ra là', level: 5,
                theory: ['<b>-(으)ㄴ/는 셈이다</b> = coi như, tính ra thì, xem như là.'],
                examples: [
                    { kr: '거의 다 한 <b>셈이에요</b>.', vi: 'Coi như gần xong rồi.' },
                    { kr: '매일 운동하는 <b>셈이에요</b>.', vi: 'Tính ra thì mỗi ngày đều tập thể dục.' }
                ],
                notes: ['-ㄴ 셈치다 = xem như, coi như: 없는 셈 치세요 (coi như không có).']
            },
            {
                name: '-(으)ㄹ래(요)', meaning: 'Tôi muốn / Bạn có muốn?', level: 3,
                theory: ['<b>-(으)ㄹ래(요)</b> = muốn (ngôi 1), bạn muốn không? (ngôi 2).', 'Thân mật hơn -(으)ㄹ 거예요.'],
                examples: [
                    { kr: '저는 이거 먹을<b>래요</b>.', vi: 'Tôi muốn ăn cái này.' },
                    { kr: '같이 갈<b>래요</b>?', vi: 'Bạn muốn đi cùng không?' },
                    { kr: '커피 마실<b>래요</b>?', vi: 'Bạn muốn uống cà phê không?' }
                ],
                notes: ['Thân mật, khẩu ngữ. Formal hơn dùng -(으)시겠어요?', 'Chỉ dùng ngôi 1, 2.']
            }
        ]
    },
    {
        id: 'expressions', icon: '💬', title: '표현 (Biểu hiện / Cấu trúc nâng cao)',
        description: 'Các cấu trúc ngữ pháp trung-cao cấp diễn tả ý nghĩa phức tạp',
        items: [
            {
                name: '-(으)ㄹ 뻔하다', meaning: 'Suýt nữa thì / Gần như', level: 3,
                theory: ['<b>-(으)ㄹ 뻔하다</b> = suýt nữa thì, chút nữa thì. Hành động gần xảy ra nhưng không xảy ra.'],
                examples: [
                    { kr: '넘어질 <b>뻔했어요</b>.', vi: 'Suýt nữa thì ngã.' },
                    { kr: '버스를 놓칠 <b>뻔했어요</b>.', vi: 'Suýt nữa thì lỡ xe buýt.' },
                    { kr: '비밀을 말할 <b>뻔했어요</b>.', vi: 'Suýt nữa thì nói ra bí mật.' }
                ],
                notes: ['Luôn dùng quá khứ: -(으)ㄹ 뻔했다.', 'Thường dùng khi may mắn thoát khỏi tình huống xấu.']
            },
            {
                name: '-아/어 놓다/두다', meaning: 'Làm sẵn / Để đó', level: 3,
                theory: ['<b>-아/어 놓다</b> = làm xong rồi để đó (duy trì trạng thái).', '<b>-아/어 두다</b> = làm sẵn, chuẩn bị trước.'],
                examples: [
                    { kr: '문을 열어 <b>놓았어요</b>.', vi: 'Tôi đã mở cửa (và để mở).' },
                    { kr: '표를 예매해 <b>뒀어요</b>.', vi: 'Tôi đã đặt vé trước rồi.' },
                    { kr: '음식을 만들어 <b>놨어요</b>.', vi: 'Tôi đã nấu ăn sẵn rồi.' }
                ],
                notes: ['놓다: nhấn mạnh giữ trạng thái. 두다: nhấn mạnh chuẩn bị cho tương lai.', '놨어요 = 놓았어요, 뒀어요 = 두었어요 (rút gọn).']
            },
            {
                name: '-(으)ㄴ/는 편이다', meaning: 'Thiên về / Thuộc loại', level: 3,
                theory: ['<b>-(으)ㄴ/는 편이다</b> = khá, thuộc loại, thiên về. Nói một cách nhẹ nhàng.', 'Tính từ: -(으)ㄴ 편이다. Động từ: -는 편이다.'],
                examples: [
                    { kr: '저는 키가 <b>큰 편이에요</b>.', vi: 'Tôi thuộc loại cao.' },
                    { kr: '매운 음식을 잘 <b>먹는 편이에요</b>.', vi: 'Tôi thuộc loại ăn cay giỏi.' },
                    { kr: '한국어를 <b>잘하는 편이에요</b>.', vi: 'Tôi thuộc loại giỏi tiếng Hàn.' }
                ],
                notes: ['Dùng để nói nhẹ nhàng (hedging), tránh quá tuyệt đối.']
            },
            {
                name: '-(으)ㄹ 만하다', meaning: 'Đáng để / Xứng đáng', level: 4,
                theory: ['<b>-(으)ㄹ 만하다</b> = đáng để, xứng đáng. Đánh giá giá trị.'],
                examples: [
                    { kr: '이 영화는 볼 <b>만해요</b>.', vi: 'Bộ phim này đáng xem.' },
                    { kr: '이 식당은 갈 <b>만해요</b>.', vi: 'Nhà hàng này đáng đi.' },
                    { kr: '참을 <b>만해요</b>.', vi: 'Chịu được (chấp nhận được).' }
                ],
                notes: ['Cũng có nghĩa "có thể chịu được": 아직 먹을 만해요 (vẫn ăn được).']
            },
            {
                name: '-는 바람에', meaning: 'Vì / Do (nguyên nhân bất ngờ)', level: 4,
                theory: ['<b>-는 바람에</b> = vì, do. Nguyên nhân bất ngờ dẫn đến kết quả tiêu cực.'],
                examples: [
                    { kr: '비가 오<b>는 바람에</b> 소풍을 못 갔어요.', vi: 'Vì trời mưa nên không đi picnic được.' },
                    { kr: '늦게 일어나<b>는 바람에</b> 지각했어요.', vi: 'Vì dậy muộn nên đi trễ.' }
                ],
                notes: ['Chỉ dùng với động từ.', 'Kết quả thường tiêu cực (≠ -덕분에 tích cực).', 'KHÔNG chia thì ở vế trước.']
            },
            {
                name: '-는 김에', meaning: 'Nhân tiện / Tiện thể', level: 4,
                theory: ['<b>-는 김에</b> = nhân tiện, tiện thể. Làm thêm việc khác khi đang làm gì.'],
                examples: [
                    { kr: '마트에 가<b>는 김에</b> 우유도 사 와요.', vi: 'Nhân tiện đi siêu thị mua luôn sữa.' },
                    { kr: '청소하<b>는 김에</b> 빨래도 했어요.', vi: 'Nhân tiện dọn dẹp thì giặt đồ luôn.' }
                ],
                notes: ['Hành động thêm là phụ, không phải mục đích chính.']
            },
            {
                name: '-는 척하다', meaning: 'Giả vờ / Làm bộ', level: 3,
                theory: ['<b>-는 척하다</b> = giả vờ, giả bộ. Động từ: -는 척. Tính từ: -(으)ㄴ 척.'],
                examples: [
                    { kr: '자<b>는 척했어요</b>.', vi: 'Tôi giả vờ ngủ.' },
                    { kr: '모르<b>는 척했어요</b>.', vi: 'Tôi giả vờ không biết.' },
                    { kr: '아무렇지 않<b>은 척했어요</b>.', vi: 'Tôi giả bộ không sao.' }
                ],
                notes: ['= -는 체하다 (formal hơn): 모르는 체했어요.']
            },
            {
                name: '-(으)ㄹ 수밖에 없다', meaning: 'Không thể không / Chỉ có thể', level: 4,
                theory: ['<b>-(으)ㄹ 수밖에 없다</b> = không thể không, chỉ có thể, đành phải.'],
                examples: [
                    { kr: '포기할 <b>수밖에 없었어요</b>.', vi: 'Đành phải bỏ cuộc.' },
                    { kr: '집에 있을 <b>수밖에 없어요</b>.', vi: 'Không thể không ở nhà (chỉ có thể ở nhà).' }
                ],
                notes: ['Nhấn mạnh không có lựa chọn nào khác.', '= -지 않을 수 없다: 갈 수밖에 없다 = 가지 않을 수 없다.']
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
                name: '-(으)ㄹ 리가 없다', meaning: 'Không có lý nào / Không thể nào', level: 4,
                theory: ['<b>-(으)ㄹ 리가 없다</b> = không có lý nào, không thể nào. Phủ nhận mạnh.'],
                examples: [
                    { kr: '그 사람이 거짓말할 <b>리가 없어요</b>.', vi: 'Không có lý nào người đó nói dối.' },
                    { kr: '그걸 모를 <b>리가 없어요</b>.', vi: 'Không thể nào không biết điều đó.' }
                ],
                notes: ['Khẳng định: -(으)ㄹ 리가 있다 hiếm dùng, thường chỉ dùng phủ định.']
            },
            {
                name: '-(으)ㄴ/는 대로', meaning: 'Theo / Đúng như / Ngay khi', level: 4,
                theory: ['<b>-(으)ㄴ/는 대로</b> có 2 nghĩa: (1) Theo, đúng như. (2) Ngay khi.'],
                examples: [
                    { kr: '선생님이 말씀하시<b>는 대로</b> 했어요.', vi: 'Tôi đã làm đúng như thầy/cô nói.' },
                    { kr: '도착하<b>는 대로</b> 연락할게요.', vi: 'Ngay khi đến tôi sẽ liên lạc.' },
                    { kr: '계획<b>대로</b> 진행합시다.', vi: 'Hãy tiến hành theo kế hoạch.' }
                ],
                notes: ['명사 + 대로: 계획대로, 예상대로.', 'Nghĩa "ngay khi" ≈ -자마자.']
            },
            {
                name: '-(으)ㄹ 정도로', meaning: 'Đến mức / Đến nỗi', level: 5,
                theory: ['<b>-(으)ㄹ 정도로</b> = đến mức, đến nỗi. Diễn tả mức độ.'],
                examples: [
                    { kr: '눈물이 날 <b>정도로</b> 감동했어요.', vi: 'Cảm động đến mức rơi nước mắt.' },
                    { kr: '못 걸을 <b>정도로</b> 다쳤어요.', vi: 'Bị thương đến mức không đi được.' }
                ],
                notes: ['명사 + 정도: 죽을 정도로 피곤해요 (mệt muốn chết).']
            },
            {
                name: '-기 마련이다', important: true, meaning: 'Đương nhiên / Tất yếu', level: 5,
                theory: ['<b>-기 마련이다</b> = đương nhiên, tất yếu, chắc chắn sẽ. Quy luật tự nhiên.'],
                examples: [
                    { kr: '열심히 하<b>면 성공하기 마련이에요</b>.', vi: 'Nếu cố gắng thì đương nhiên sẽ thành công.' },
                    { kr: '시간이 지나<b>면 잊기 마련이에요</b>.', vi: 'Thời gian trôi qua thì tất nhiên sẽ quên.' }
                ],
                notes: ['Diễn tả điều hiển nhiên, quy luật chung.']
            },
            {
                name: '-(으)ㄴ/는 모양이다', meaning: 'Có vẻ / Hình như (dựa trên quan sát)', level: 4,
                theory: ['<b>-(으)ㄴ/는 모양이다</b> = có vẻ, hình như. Phỏng đoán dựa trên quan sát bên ngoài.'],
                examples: [
                    { kr: '비가 오<b>는 모양이에요</b>.', vi: 'Có vẻ trời đang mưa.' },
                    { kr: '많이 아<b>픈 모양이에요</b>.', vi: 'Có vẻ ốm nặng.' }
                ],
                notes: ['≈ -나 보다, nhưng -는 모양이다 formal/văn viết hơn.']
            },
            {
                name: '-다시피', meaning: 'Như (bạn) biết/thấy', level: 5,
                theory: ['<b>-다시피</b> = như, giống như. Dùng với 알다, 보다: như bạn biết/thấy.'],
                examples: [
                    { kr: '아시<b>다시피</b> 내일은 시험이에요.', vi: 'Như bạn biết, ngày mai là kỳ thi.' },
                    { kr: '보시<b>다시피</b> 여기는 아주 아름다워요.', vi: 'Như bạn thấy, nơi đây rất đẹp.' }
                ],
                notes: ['Thường chỉ dùng với: 알다시피, 보다시피, 듣다시피.']
            },
            {
                name: '-아/어 버리다', meaning: 'Làm xong hẳn / Mất rồi', level: 3,
                theory: ['<b>-아/어 버리다</b> = làm xong hẳn, (đã) mất rồi. Nhấn mạnh hoàn thành + cảm xúc (tiếc nuối hoặc nhẹ nhõm).'],
                examples: [
                    { kr: '숙제를 다 해 <b>버렸어요</b>.', vi: 'Tôi đã làm xong hẳn bài tập rồi (nhẹ nhõm).' },
                    { kr: '지갑을 잃어 <b>버렸어요</b>.', vi: 'Tôi đã bị mất ví rồi (tiếc nuối).' },
                    { kr: '다 먹어 <b>버렸어요</b>.', vi: 'Tôi đã ăn hết sạch rồi.' }
                ],
                notes: ['Cảm xúc tích cực (nhẹ nhõm): 끝내 버렸다! Hoặc tiêu cực (tiếc nuối): 잊어 버렸다.']
            },
            {
                name: '-고 말다', meaning: 'Rốt cuộc đã / Cuối cùng đã', level: 4,
                theory: ['<b>-고 말다</b> = rốt cuộc đã, cuối cùng đã. Kết quả không mong muốn xảy ra.'],
                examples: [
                    { kr: '결국 울<b>고 말았어요</b>.', vi: 'Rốt cuộc đã khóc.' },
                    { kr: '비밀을 말하<b>고 말았어요</b>.', vi: 'Rốt cuộc đã nói ra bí mật.' }
                ],
                notes: ['Thường dùng với kết quả tiêu cực/không mong muốn.', 'Quyết tâm: -고 말겠다 = nhất định sẽ: 합격하고 말겠다!']
            },
            {
                name: '-기는커녕', meaning: 'Đừng nói đến / Huống chi', level: 4,
                theory: ['<b>-기는커녕</b> = đừng nói đến, huống chi, chẳng những ... mà còn.'],
                examples: [
                    { kr: '여행<b>은커녕</b> 쉬지도 못했어요.', vi: 'Đừng nói đi du lịch, nghỉ ngơi cũng không được.' },
                    { kr: '도와주<b>기는커녕</b> 방해만 했어요.', vi: 'Chẳng những không giúp đỡ mà còn cản trở.' }
                ],
                notes: ['Danh từ + 은/는커녕 cũng dùng được: 밥은커녕 물도 못 마셨어요.']
            },
            {
                name: '-는 통에', meaning: 'Vì / Do mà (bất ngờ, tiêu cực)', level: 5,
                theory: ['<b>-는 통에</b> = vì, do mà. Nguyên nhân bất ngờ, không kiểm soát, kết quả tiêu cực.'],
                examples: [
                    { kr: '아이가 우<b>는 통에</b> 잠을 못 잤어요.', vi: 'Vì trẻ khóc nên không ngủ được.' },
                    { kr: '전화가 오<b>는 통에</b> 집중을 못 했어요.', vi: 'Vì điện thoại cứ đến nên không tập trung được.' }
                ],
                notes: ['Chỉ dùng với động từ.', 'Tiêu cực + bất ngờ (≠ -는 바람에 tương tự nhưng ít nhấn mạnh sự lặp lại).']
            },
            {
                name: '-는 중이다', meaning: 'Đang trong quá trình', level: 3,
                theory: ['<b>-는 중이다</b> = đang trong quá trình, đang giữa chừng.'],
                examples: [
                    { kr: '지금 회의하<b>는 중이에요</b>.', vi: 'Đang trong cuộc họp.' },
                    { kr: '식사하<b>는 중이에요</b>.', vi: 'Đang ăn cơm.' },
                    { kr: '준비하<b>는 중입니다</b>.', vi: 'Đang trong quá trình chuẩn bị.' }
                ],
                notes: ['= -고 있다 nhưng -는 중이다 formal hơn.', '명사 + 중이다: 회의 중이에요 (đang họp).']
            },
            {
                name: '-(으)ㄹ 뿐이다', meaning: 'Chỉ có thể / Chỉ là', level: 5,
                theory: ['<b>-(으)ㄹ 뿐이다</b> = chỉ, chỉ có thể. Giới hạn.'],
                examples: [
                    { kr: '기다릴 <b>뿐이에요</b>.', vi: 'Chỉ có thể chờ thôi.' },
                    { kr: '바라볼 <b>뿐이에요</b>.', vi: 'Chỉ có thể nhìn thôi.' }
                ],
                notes: ['명사 + 뿐이다: 그것뿐이에요 (chỉ có thế thôi).', '≈ -ㄹ 따름이다 (formal hơn).']
            },
            {
                name: '-기 나름이다', meaning: 'Tùy thuộc vào / Tùy cách', level: 5,
                theory: ['<b>-기 나름이다</b> = tùy thuộc vào cách, kết quả phụ thuộc vào hành động.'],
                examples: [
                    { kr: '생각하<b>기 나름이에요</b>.', vi: 'Tùy cách nghĩ.' },
                    { kr: '노력하<b>기 나름이에요</b>.', vi: 'Tùy vào mức độ cố gắng.' }
                ],
                notes: ['명사 + 나름이다: 사람 나름이에요 (tùy người).']
            },
            {
                name: '-(으)ㄹ 따름이다', meaning: 'Chỉ có thể (formal)', level: 6,
                theory: ['<b>-(으)ㄹ 따름이다</b> = chỉ có thể, chỉ biết. Formal, văn viết.'],
                examples: [
                    { kr: '감사할 <b>따름입니다</b>.', vi: 'Chỉ biết cảm ơn.' },
                    { kr: '놀라울 <b>따름이에요</b>.', vi: 'Chỉ có thể kinh ngạc.' }
                ],
                notes: ['Rất formal. ≈ -(으)ㄹ 뿐이다.']
            },
            {
                name: '-아/어 가다/오다', meaning: 'Dần dần (tiếp tục)', level: 3,
                theory: ['<b>-아/어 가다</b> = dần dần (tiếp tục đi, rời xa).', '<b>-아/어 오다</b> = dần dần (tiếp tục đến, đến gần).'],
                examples: [
                    { kr: '날씨가 추워져 <b>가요</b>.', vi: 'Thời tiết dần dần lạnh đi.' },
                    { kr: '한국어가 좋아져 <b>왔어요</b>.', vi: 'Tiếng Hàn dần dần tốt lên (đến nay).' },
                    { kr: '살아 <b>가고</b> 있어요.', vi: 'Đang sống tiếp.' }
                ],
                notes: ['-아/어 가다: xa dần, tiếp tục đi (tương lai).', '-아/어 오다: đến gần, đã tiếp tục (quá khứ→hiện tại).']
            },
            {
                name: '-아/어 대다', meaning: 'Cứ liên tục / Không ngừng', level: 5,
                theory: ['<b>-아/어 대다</b> = cứ liên tục, không ngừng, liên tục (tiêu cực/khó chịu).'],
                examples: [
                    { kr: '아이가 울어 <b>대요</b>.', vi: 'Đứa trẻ cứ khóc không ngừng.' },
                    { kr: '친구가 떠들어 <b>대요</b>.', vi: 'Bạn cứ nói liên tục.' }
                ],
                notes: ['Có sắc thái tiêu cực, phàn nàn.']
            }
        ]
    },
    {
        id: 'indirect', icon: '🗣️', title: '간접화법 (Câu gián tiếp)',
        description: 'Cách thuật lại lời nói của người khác',
        items: [
            {
                name: '-다고 하다', meaning: 'Nói rằng (trần thuật)', level: 3,
                theory: ['<b>-다고 하다</b> = nói rằng. Thuật lại câu trần thuật.', 'Động từ: -ㄴ/는다고. Tính từ: -다고. 이다: -(이)라고. 과거: -았/었다고.'],
                conjugation: [
                    ['Động từ (hiện tại)', '-ㄴ/는다고', '간다고 해요, 먹는다고 해요'],
                    ['Tính từ', '-다고', '예쁘다고 해요, 좋다고 해요'],
                    ['이다', '-(이)라고', '학생이라고 해요'],
                    ['Quá khứ', '-았/었다고', '갔다고 해요, 먹었다고 해요'],
                    ['Tương lai', '-ㄹ 거라고', '갈 거라고 해요']
                ],
                conjugationCols: ['Loại', 'Cấu trúc', 'Ví dụ'],
                examples: [
                    { kr: '민수 씨가 내일 온<b>다고 했어요</b>.', vi: 'Anh Minsu nói rằng ngày mai sẽ đến.' },
                    { kr: '이 음식이 맛있<b>다고 했어요</b>.', vi: 'Nói rằng món này ngon.' }
                ],
                notes: ['Rút gọn: -다고 하다 → -대(요): 온대요 (nghe nói đến).', '하다 có thể thay bằng: 말하다, 이야기하다, 전하다.']
            },
            {
                name: '-(으)라고 하다', meaning: 'Bảo rằng (mệnh lệnh)', level: 3,
                theory: ['<b>-(으)라고 하다</b> = bảo rằng, yêu cầu rằng. Thuật lại câu mệnh lệnh.'],
                examples: [
                    { kr: '선생님이 조용히 하<b>라고 했어요</b>.', vi: 'Thầy/cô bảo hãy yên lặng.' },
                    { kr: '의사가 약을 먹<b>으라고 했어요</b>.', vi: 'Bác sĩ bảo uống thuốc.' }
                ],
                notes: ['Rút gọn: -(으)라고 하다 → -(으)래(요): 먹으래요 (bảo ăn).', 'Phủ định: -지 말라고 하다: 가지 말라고 했어요.']
            },
            {
                name: '-(으)냐고 하다 / -냐고 하다', meaning: 'Hỏi rằng (câu hỏi)', level: 3,
                theory: ['<b>-(으)냐고 / -느냐고 하다</b> = hỏi rằng. Thuật lại câu hỏi.'],
                examples: [
                    { kr: '어디에 가<b>냐고 했어요</b>.', vi: 'Hỏi rằng đi đâu.' },
                    { kr: '이름이 뭐<b>냐고 했어요</b>.', vi: 'Hỏi rằng tên là gì.' },
                    { kr: '학생이<b>냐고 물었어요</b>.', vi: 'Hỏi rằng có phải học sinh không.' }
                ],
                notes: ['Rút gọn: -냐고 하다 → -냬(요): 뭐 먹냬요 (hỏi ăn gì).']
            },
            {
                name: '-자고 하다', meaning: 'Rủ rằng / Đề nghị rằng', level: 3,
                theory: ['<b>-자고 하다</b> = rủ rằng, đề nghị rằng. Thuật lại câu đề nghị.'],
                examples: [
                    { kr: '친구가 같이 가<b>자고 했어요</b>.', vi: 'Bạn rủ đi cùng.' },
                    { kr: '내일 만나<b>자고 했어요</b>.', vi: 'Nói rằng ngày mai gặp nhau nhé.' }
                ],
                notes: ['Rút gọn: -자고 하다 → -재(요): 같이 가재요 (rủ đi cùng).']
            },
            {
                name: 'Dạng rút gọn: -대/래/냬/재', meaning: 'Rút gọn gián tiếp', level: 3,
                theory: ['Các dạng rút gọn của gián tiếp rất phổ biến trong hội thoại:', '<b>-대(요)</b> = -다고 해요 (nghe nói rằng).', '<b>-(으)래(요)</b> = -(으)라고 해요 (bảo rằng).', '<b>-냬(요)</b> = -냐고 해요 (hỏi rằng).', '<b>-재(요)</b> = -자고 해요 (rủ rằng).'],
                examples: [
                    { kr: '민수 씨가 내일 온<b>대요</b>.', vi: 'Anh Minsu nói ngày mai đến.' },
                    { kr: '선생님이 앉<b>으래요</b>.', vi: 'Thầy/cô bảo ngồi.' },
                    { kr: '이름이 뭐<b>냬요</b>.', vi: 'Hỏi tên là gì.' },
                    { kr: '같이 밥 먹<b>재요</b>.', vi: 'Rủ ăn cơm cùng.' }
                ],
                notes: ['Rất phổ biến trong hội thoại. TOPIK II thường kiểm tra dạng này.']
            }
        ]
    },
    {
        id: 'passive', icon: '🔄', title: '피동 & 사동 (Bị động & Sai khiến)',
        description: 'Câu bị động và câu sai khiến trong tiếng Hàn',
        items: [
            {
                name: '피동 (이/히/리/기)', meaning: 'Bị động bằng tiếp vĩ ngữ', level: 4,
                theory: ['Tiếng Hàn tạo bị động bằng cách thêm <b>이/히/리/기</b> vào thân động từ.', 'Không có quy tắc cố định, phải học thuộc từng từ.'],
                conjugation: [
                    ['이', '보다→보<b>이</b>다', '쓰다→쓰<b>이</b>다, 놓다→놓<b>이</b>다'],
                    ['히', '잡다→잡<b>히</b>다', '막다→막<b>히</b>다, 읽다→읽<b>히</b>다'],
                    ['리', '듣다→들<b>리</b>다', '열다→열<b>리</b>다, 풀다→풀<b>리</b>다'],
                    ['기', '끊다→끊<b>기</b>다', '안다→안<b>기</b>다, 쫓다→쫓<b>기</b>다']
                ],
                conjugationCols: ['Tiếp vĩ ngữ', 'Ví dụ 1', 'Thêm ví dụ'],
                examples: [
                    { kr: '문이 <b>열렸어요</b>.', vi: 'Cửa được mở. (열다→열리다)' },
                    { kr: '앞이 잘 <b>보여요</b>.', vi: 'Phía trước nhìn rõ. (보다→보이다)' },
                    { kr: '도둑이 경찰한테 <b>잡혔어요</b>.', vi: 'Tên trộm bị cảnh sát bắt. (잡다→잡히다)' }
                ],
                notes: ['Chủ ngữ bị động đánh dấu bằng 이/가.', 'Tác nhân đánh dấu bằng 에게/한테/에 의해.', 'Phải học thuộc: không có quy tắc nào để biết dùng 이/히/리/기.']
            },
            {
                name: '-아/어지다 (bị động)', meaning: 'Trở nên / Được (bị động)', level: 3,
                theory: ['<b>-아/어지다</b> gắn vào tính từ = trở nên. Gắn vào động từ = bị động.'],
                examples: [
                    { kr: '날씨가 <b>추워졌어요</b>.', vi: 'Thời tiết trở nên lạnh.' },
                    { kr: '문제가 <b>해결됐어요</b>.', vi: 'Vấn đề được giải quyết. (해결되다)' },
                    { kr: '건물이 <b>지어졌어요</b>.', vi: 'Tòa nhà được xây. (짓다→지어지다)' }
                ],
                notes: ['Tính từ + -아/어지다 = trở nên: 예뻐지다, 커지다, 좋아지다.', 'Từ Hán + 되다 cũng tạo bị động: 발견되다 (được phát hiện).']
            },
            {
                name: '사동 (이/히/리/기/우/추)', meaning: 'Sai khiến bằng tiếp vĩ ngữ', level: 4,
                theory: ['Sai khiến = khiến ai làm gì. Thêm <b>이/히/리/기/우/추</b> vào thân từ.'],
                conjugation: [
                    ['이', '먹다→먹<b>이</b>다', '보다→보<b>이</b>다 (cho xem)'],
                    ['히', '읽다→읽<b>히</b>다', '앉다→앉<b>히</b>다 (cho ngồi)'],
                    ['리', '알다→알<b>리</b>다', '울다→울<b>리</b>다 (làm khóc)'],
                    ['기', '웃다→웃<b>기</b>다', '숨다→숨<b>기</b>다 (giấu)'],
                    ['우', '자다→재<b>우</b>다', '깨다→깨<b>우</b>다 (đánh thức)'],
                    ['추', '늦다→늦<b>추</b>다', '맞다→맞<b>추</b>다 (khớp)']
                ],
                conjugationCols: ['Tiếp vĩ ngữ', 'Ví dụ 1', 'Ví dụ 2'],
                examples: [
                    { kr: '아이에게 밥을 <b>먹였어요</b>.', vi: 'Cho trẻ ăn. (먹이다)' },
                    { kr: '아이를 <b>재웠어요</b>.', vi: 'Cho trẻ ngủ. (재우다)' },
                    { kr: '친구를 <b>웃겼어요</b>.', vi: 'Làm bạn cười. (웃기다)' }
                ],
                notes: ['Cấu trúc: A가 B에게/를 V사동.', 'Phải học thuộc từng từ.']
            },
            {
                name: '-게 하다', meaning: 'Khiến cho / Bắt / Cho phép', level: 3,
                theory: ['<b>-게 하다</b> = khiến cho, bắt, cho phép ai làm gì.', 'Dạng sai khiến phổ biến, dùng được với mọi động từ.'],
                examples: [
                    { kr: '선생님이 학생들을 공부하<b>게 했어요</b>.', vi: 'Thầy/cô bắt học sinh học.' },
                    { kr: '부모님이 저를 유학 가<b>게 해 주셨어요</b>.', vi: 'Bố mẹ cho tôi đi du học.' },
                    { kr: '웃<b>게 하지</b> 마세요.', vi: 'Đừng làm tôi cười.' }
                ],
                notes: ['-게 하다 linh hoạt hơn sai khiến tiếp vĩ ngữ, dùng được với mọi động từ.', 'Nghĩa: bắt (ép buộc), cho phép, hoặc khiến (cause) tùy ngữ cảnh.']
            }
        ]
    },
    {
        id: 'advanced', icon: '🚀', title: '고급 연결 (Liên kết nâng cao)',
        description: 'Các cấu trúc liên kết cao cấp (cấp 5-6)',
        items: [
            {
                name: '-기에', meaning: 'Vì / Bởi vì (formal)', level: 5,
                theory: ['<b>-기에</b> = vì, bởi vì. Dạng formal, nhấn mạnh lý do khách quan.'],
                examples: [
                    { kr: '날씨가 좋<b>기에</b> 산책을 했어요.', vi: 'Vì thời tiết đẹp nên đã đi dạo.' },
                    { kr: '가격이 싸<b>기에</b> 샀어요.', vi: 'Vì giá rẻ nên đã mua.' }
                ],
                notes: ['Formal, văn viết. Tương đương -아/어서, -(으)니까.', '= -길래 (khẩu ngữ).']
            },
            {
                name: '-길래', meaning: 'Vì (nên tôi đã ...)', level: 4,
                theory: ['<b>-길래</b> = vì (phát hiện ra nên đã làm). Khẩu ngữ của -기에.'],
                examples: [
                    { kr: '맛있어 보이<b>길래</b> 먹어 봤어요.', vi: 'Vì trông ngon nên đã thử ăn.' },
                    { kr: '사람이 많<b>길래</b> 다른 데로 갔어요.', vi: 'Vì đông người nên đi chỗ khác.' }
                ],
                notes: ['Chủ ngữ vế trước: ngôi 3. Chủ ngữ vế sau: ngôi 1.', 'Khẩu ngữ, thân mật.']
            },
            {
                name: '-(으)ㄴ/는 이상', meaning: 'Đã ... thì / Vì đã', level: 5,
                theory: ['<b>-(으)ㄴ/는 이상</b> = đã ... thì, vì đã. Nhấn mạnh trách nhiệm/cam kết.'],
                examples: [
                    { kr: '약속을 한 <b>이상</b> 지켜야 해요.', vi: 'Đã hứa thì phải giữ.' },
                    { kr: '시작한 <b>이상</b> 끝까지 해야 해요.', vi: 'Đã bắt đầu thì phải làm đến cùng.' }
                ],
                notes: ['Vế sau thường là trách nhiệm, cam kết, quyết tâm.']
            },
            {
                name: '-(으)ㄴ/는 한', meaning: 'Với điều kiện / Miễn là', level: 5,
                theory: ['<b>-(으)ㄴ/는 한</b> = với điều kiện, miễn là, hễ mà.'],
                examples: [
                    { kr: '건강한 <b>한</b> 계속 일할 거예요.', vi: 'Miễn là khỏe mạnh thì sẽ tiếp tục làm việc.' },
                    { kr: '노력하<b>는 한</b> 성공할 수 있어요.', vi: 'Miễn là cố gắng thì có thể thành công.' }
                ],
                notes: ['Nhấn mạnh điều kiện tiên quyết.']
            },
            {
                name: '-(으)ㄹ지라도', meaning: 'Dù cho / Cho dù', level: 5,
                theory: ['<b>-(으)ㄹ지라도</b> = dù cho, cho dù. Nhượng bộ mạnh.'],
                examples: [
                    { kr: '아무리 힘들<b>지라도</b> 포기하지 않겠어요.', vi: 'Dù cho khó đến đâu cũng không bỏ cuộc.' },
                    { kr: '실패할<b>지라도</b> 도전해 볼 거예요.', vi: 'Cho dù thất bại cũng sẽ thử thách.' }
                ],
                notes: ['Formal. Tương đương: -아/어도, -더라도 nhưng mạnh hơn.']
            },
            {
                name: '-는가 하면', meaning: 'Vừa ... vừa / Có khi ... có khi', level: 5,
                theory: ['<b>-는가 하면</b> = có khi ... có khi, vừa ... vừa. Nêu hai mặt đối lập.'],
                examples: [
                    { kr: '우<b>는가 하면</b> 웃기도 해요.', vi: 'Có khi khóc, có khi lại cười.' },
                    { kr: '바쁜 날이 있<b>는가 하면</b> 한가한 날도 있어요.', vi: 'Có ngày bận, có ngày rảnh.' }
                ],
                notes: ['Diễn tả sự đa dạng, tương phản trong cùng một chủ thể.']
            },
            {
                name: '-(으)ㄹ 바에(야)', meaning: 'Thà ... còn hơn', level: 5,
                theory: ['<b>-(으)ㄹ 바에(야)</b> = thà ... còn hơn, nếu phải ... thì chi bằng.'],
                examples: [
                    { kr: '이렇게 살 <b>바에야</b> 차라리 떠나겠어요.', vi: 'Thà rời đi còn hơn sống thế này.' },
                    { kr: '후회할 <b>바에</b> 지금 해 보세요.', vi: 'Nếu rồi sẽ hối hận thì hãy thử ngay bây giờ.' }
                ],
                notes: ['Nhấn mạnh sự lựa chọn tốt hơn so với tình huống không mong muốn.']
            },
            {
                name: '-고 보니', meaning: 'Sau khi làm thì nhận ra', level: 4,
                theory: ['<b>-고 보니</b> = sau khi (làm xong) thì nhận ra rằng.'],
                examples: [
                    { kr: '알<b>고 보니</b> 우리는 같은 학교 출신이었어요.', vi: 'Tìm hiểu mới biết chúng tôi cùng trường.' },
                    { kr: '만나<b>고 보니</b> 좋은 사람이었어요.', vi: 'Gặp rồi mới biết là người tốt.' }
                ],
                notes: ['Nhấn mạnh phát hiện mới sau khi đã trải nghiệm.']
            },
            {
                name: '-고자', important: true, meaning: 'Với mong muốn / Nhằm (formal)', level: 5,
                theory: ['<b>-고자</b> = với mong muốn, nhằm. Mục đích, rất formal.'],
                examples: [
                    { kr: '한국어를 배우<b>고자</b> 한국에 왔습니다.', vi: 'Tôi đến Hàn Quốc với mong muốn học tiếng Hàn.' },
                    { kr: '성공하<b>고자</b> 노력하고 있습니다.', vi: 'Đang cố gắng nhằm mục đích thành công.' }
                ],
                notes: ['Rất formal, dùng trong bài phát biểu, văn bản chính thức.', '≈ -(으)려고 (informal).']
            },
            {
                name: '-(으)ㄹ지 모르다', meaning: 'Có thể / Biết đâu', level: 4,
                theory: ['<b>-(으)ㄹ지 모르다</b> = có thể, biết đâu, không biết chừng.'],
                examples: [
                    { kr: '비가 올<b>지 몰라요</b>.', vi: 'Biết đâu trời mưa.' },
                    { kr: '늦을<b>지 모르니까</b> 일찍 출발하세요.', vi: 'Vì có thể sẽ trễ nên hãy xuất phát sớm.' }
                ],
                notes: ['= -(으)ㄹ지도 모르다: 올지도 몰라요 (biết đâu sẽ đến).']
            },
            {
                name: '-는가/나 싶다', meaning: 'Tự hỏi / Nghĩ rằng', level: 5,
                theory: ['<b>-는가/나 싶다</b> = tự hỏi, nghĩ rằng, cảm thấy. Suy nghĩ nội tâm.'],
                examples: [
                    { kr: '이게 맞<b>나 싶어요</b>.', vi: 'Tôi tự hỏi cái này có đúng không.' },
                    { kr: '뭘 하고 있<b>는가 싶었어요</b>.', vi: 'Tôi tự hỏi mình đang làm gì.' }
                ],
                notes: ['Diễn tả sự nghi ngờ, suy nghĩ bên trong.']
            },
            {
                name: '-고도', meaning: 'Dù đã ... mà vẫn', level: 5,
                theory: ['<b>-고도</b> = dù đã, mặc dù đã. Kết quả trái ngược sau hành động.'],
                examples: [
                    { kr: '알<b>고도</b> 모르는 척했어요.', vi: 'Dù đã biết mà vẫn giả vờ không biết.' },
                    { kr: '많이 먹<b>고도</b> 배가 고파요.', vi: 'Dù đã ăn nhiều mà vẫn đói.' }
                ],
                notes: ['Nhấn mạnh kết quả bất ngờ/trái ngược.']
            },
            {
                name: '-(으)ㄹ 게 뻔하다', meaning: 'Rõ ràng sẽ / Chắc chắn sẽ', level: 5,
                theory: ['<b>-(으)ㄹ 게 뻔하다</b> = rõ ràng sẽ, chắc chắn sẽ (tiêu cực).'],
                examples: [
                    { kr: '지금 가면 늦을 게 <b>뻔해요</b>.', vi: 'Nếu đi bây giờ chắc chắn sẽ trễ.' },
                    { kr: '물어봐도 안 알려줄 게 <b>뻔해요</b>.', vi: 'Dù hỏi cũng chắc chắn không nói cho.' }
                ],
                notes: ['Thường dùng với kết quả tiêu cực.', '≠ -(으)ㄹ 뻔하다 (suýt nữa thì).']
            }
        ]
    },
    {
        id: 'nominalization', icon: '📎', title: '명사화 & 기타 (Danh từ hóa & Khác)',
        description: 'Danh từ hóa, nguyên nhân-kết quả, và các cấu trúc khác',
        items: [
            {
                name: '-기 / -(으)ㅁ', meaning: 'Danh từ hóa', level: 3,
                theory: ['<b>-기</b> và <b>-(으)ㅁ</b> biến động/tính từ thành danh từ.', '<b>-기</b>: phổ biến hơn, dùng với nhiều cấu trúc.', '<b>-(으)ㅁ</b>: formal, văn viết.'],
                examples: [
                    { kr: '수영하<b>기</b>를 좋아해요.', vi: 'Tôi thích bơi.' },
                    { kr: '한국어 배우<b>기</b>가 어려워요.', vi: 'Học tiếng Hàn thì khó.' },
                    { kr: '그가 떠났<b>음</b>을 알았어요.', vi: 'Tôi biết rằng anh ấy đã rời đi. (formal)' }
                ],
                notes: ['-기: dùng với 좋아하다, 싫어하다, 어렵다, 쉽다, -기 때문에, -기 위해서...', '-(으)ㅁ: formal, -에 따르면, -(으)ㅁ에도 불구하고...']
            },
            {
                name: '-(으)ㄴ/는 덕분에', meaning: 'Nhờ vào / Nhờ có', level: 3,
                theory: ['<b>-(으)ㄴ/는 덕분에</b> = nhờ vào, nhờ có. Kết quả tích cực.'],
                examples: [
                    { kr: '선생님 <b>덕분에</b> 합격했어요.', vi: 'Nhờ thầy/cô mà tôi đỗ.' },
                    { kr: '열심히 공부한 <b>덕분에</b> 좋은 성적을 받았어요.', vi: 'Nhờ học chăm chỉ mà đạt điểm cao.' }
                ],
                notes: ['Kết quả tích cực (≠ 탓에 tiêu cực).', '명사 + 덕분에: 친구 덕분에.']
            },
            {
                name: '-(으)ㄴ/는 탓에', meaning: 'Vì / Tại vì (đổ lỗi)', level: 4,
                theory: ['<b>-(으)ㄴ/는 탓에</b> = tại vì, do lỗi. Kết quả tiêu cực, đổ lỗi.'],
                examples: [
                    { kr: '비가 온 <b>탓에</b> 소풍을 못 갔어요.', vi: 'Tại trời mưa nên không đi picnic được.' },
                    { kr: '늦게 일어난 <b>탓에</b> 지각했어요.', vi: 'Tại dậy muộn nên đi trễ.' }
                ],
                notes: ['Kết quả tiêu cực (≠ 덕분에 tích cực).', '명사 + 탓에: 날씨 탓에.']
            },
            {
                name: '-(으)ㄴ/는 대신에', meaning: 'Thay vì / Bù lại', level: 3,
                theory: ['<b>-(으)ㄴ/는 대신에</b> có 2 nghĩa: (1) Thay vì. (2) Bù lại.'],
                examples: [
                    { kr: '택시를 타<b>는 대신에</b> 걸어갔어요.', vi: 'Thay vì đi taxi, tôi đã đi bộ.' },
                    { kr: '이 식당은 비싼 <b>대신에</b> 맛있어요.', vi: 'Nhà hàng này đắt nhưng bù lại ngon.' }
                ],
                notes: ['명사 + 대신에: 저 대신에 가 주세요 (đi thay tôi).']
            },
            {
                name: '-(으)ㄴ/는 만큼', meaning: 'Bằng mức / Vì', level: 4,
                theory: ['<b>-(으)ㄴ/는 만큼</b> có 2 nghĩa: (1) Bằng mức, nhiều bằng. (2) Vì (lý do).'],
                examples: [
                    { kr: '노력한 <b>만큼</b> 결과가 좋을 거예요.', vi: 'Kết quả sẽ tốt bằng mức cố gắng.' },
                    { kr: '제가 아<b>는 만큼</b> 말해 볼게요.', vi: 'Tôi sẽ nói bằng những gì tôi biết.' }
                ],
                notes: ['명사 + 만큼: 나만큼 (bằng tôi).']
            },
            {
                name: '-(으)ㄴ/는 데(에)', meaning: 'Khi / Trong việc / Ở chỗ', level: 4,
                theory: ['<b>-(으)ㄴ/는 데(에)</b> = khi, trong việc, ở chỗ mà. Rất đa năng.'],
                examples: [
                    { kr: '한국어를 배우<b>는 데</b> 시간이 많이 걸려요.', vi: 'Việc học tiếng Hàn tốn nhiều thời gian.' },
                    { kr: '요리하<b>는 데</b> 필요한 재료가 뭐예요?', vi: 'Nguyên liệu cần cho việc nấu ăn là gì?' }
                ],
                notes: ['Viết tách: -는 데 (≠ 그런데 = nhưng mà).', 'Rất phổ biến trong TOPIK II.']
            },
            {
                name: '-(으)ㄹ 겸', meaning: 'Nhân tiện / Vừa ... vừa', level: 4,
                theory: ['<b>-(으)ㄹ 겸</b> = nhân tiện, vừa ... vừa. Kết hợp nhiều mục đích.', 'Thường: A-(으)ㄹ 겸 B-(으)ㄹ 겸.'],
                examples: [
                    { kr: '운동할 <b>겸</b> 산책할 <b>겸</b> 나갔어요.', vi: 'Vừa muốn tập thể dục vừa muốn đi dạo nên ra ngoài.' },
                    { kr: '구경할 <b>겸</b> 쇼핑할 <b>겸</b> 시내에 갔어요.', vi: 'Nhân tiện ngắm cảnh và mua sắm mà đi vào trung tâm.' }
                ],
                notes: ['Thường dùng 2 lần: A겸 B겸.']
            },
            {
                name: '-(으)ㅁ에도 불구하고', meaning: 'Bất chấp / Mặc dù', level: 5,
                theory: ['<b>-(으)ㅁ에도 불구하고</b> = bất chấp, mặc dù. Rất formal.'],
                examples: [
                    { kr: '노력했<b>음에도 불구하고</b> 실패했어요.', vi: 'Bất chấp đã cố gắng nhưng vẫn thất bại.' },
                    { kr: '어려<b>움에도 불구하고</b> 끝까지 했어요.', vi: 'Mặc dù khó khăn nhưng đã làm đến cùng.' }
                ],
                notes: ['Rất formal, văn viết.', '명사 + 에도 불구하고: 비에도 불구하고 (bất chấp mưa).']
            },
            {
                name: '-는 법이다', meaning: 'Thường / Là lẽ tự nhiên', level: 5,
                theory: ['<b>-는 법이다</b> = là lẽ tự nhiên, thường là vậy. Quy luật chung.'],
                examples: [
                    { kr: '시간이 지나면 잊<b>는 법이에요</b>.', vi: 'Thời gian trôi qua thì thường sẽ quên.' },
                    { kr: '노력하면 결과가 나오<b>는 법이에요</b>.', vi: 'Nếu cố gắng thì đương nhiên sẽ có kết quả.' }
                ],
                notes: ['≈ -기 마련이다 nhưng -는 법이다 hơi nhẹ hơn.']
            },
            {
                name: '-(이)야말로', meaning: 'Chính là / Đích thực là', level: 5,
                theory: ['<b>-(이)야말로</b> = chính là, đích thực là. Nhấn mạnh mạnh.'],
                examples: [
                    { kr: '이것<b>이야말로</b> 진짜 한국 음식이에요.', vi: 'Đây mới chính là đồ ăn Hàn Quốc thật sự.' },
                    { kr: '당신<b>이야말로</b> 최고예요.', vi: 'Chính bạn mới là giỏi nhất.' }
                ],
                notes: ['Nhấn mạnh hơn 이/가.']
            },
            {
                name: '-기만 하다', meaning: 'Chỉ có / Chỉ toàn', level: 4,
                theory: ['<b>-기만 하다</b> = chỉ có, chỉ toàn. Nhấn mạnh chỉ có một hành động duy nhất.'],
                examples: [
                    { kr: '울<b>기만 해요</b>.', vi: 'Chỉ khóc thôi.' },
                    { kr: '먹<b>기만 하고</b> 운동을 안 해요.', vi: 'Chỉ toàn ăn mà không tập thể dục.' }
                ],
                notes: ['Thường có sắc thái phàn nàn.']
            },
            {
                name: '-기 십상이다', meaning: 'Dễ xảy ra / Rất có thể', level: 6,
                theory: ['<b>-기 십상이다</b> = dễ xảy ra, rất có khả năng (thường tiêu cực).'],
                examples: [
                    { kr: '그렇게 하면 실패하<b>기 십상이에요</b>.', vi: 'Nếu làm thế thì rất dễ thất bại.' },
                    { kr: '비가 오면 미끄러지<b>기 십상이에요</b>.', vi: 'Nếu trời mưa thì rất dễ trượt.' }
                ],
                notes: ['Thường dùng với kết quả tiêu cực.', '= -기 쉽다 nhưng -기 십상이다 mạnh hơn.']
            }
        ]
        },
    {
        id: 'advanced_master',
        icon: '👑',
        title: '고급 완성 (Cao cấp 5-6)',
        description: 'Các cấu trúc ngữ pháp nâng cao, thường gặp trong bài Đọc/Viết câu 53-54',
        items: [
            {
                name: '-(으)ㄹ 지경이다',
                meaning: 'Đến mức (sắp) / Tới mức',
                level: 5,
                theory: [
                    '<b>-(으)ㄹ 지경이다</b> có nghĩa là TỚI MỨC, ĐẾN MỨC (thường mang ý tiêu cực hoặc cực đoan).',
                    'Biểu hiện mức độ của một trạng thái hoặc sự việc quá giới hạn.'
                ],
                examples: [
                    { kr: '너무 피곤해서 쓰러질 지경이에요.', vi: 'Vì quá mệt nên mệt đến mức muốn ngất xỉu.' },
                    { kr: '스트레스 때문에 폭발할 지경이다.', vi: 'Vì stress nên đến mức như sắp bùng nổ.' }
                ],
                notes: ['Thường đi cùng các động từ chỉ sự suy kiệt (쓰러지다, 미치다, 죽다...)'],
                important: true
            },
            {
                name: '-(으)ㄹ 나위가 없다',
                meaning: 'Không còn chỗ nào để chê / Hoàn hảo',
                level: 5,
                theory: [
                    '<b>-(으)ㄹ 나위 (가) 없다</b> có nghĩa KHÔNG CÒN GÌ ĐỂ CHÊ, MIỄN CHÊ, vô cùng hoàn hảo.'
                ],
                examples: [
                    { kr: '이 식당의 음식은 더할 나위 없이 맛있다.', vi: 'Thức ăn ở nhà hàng này ngon không chê vào đâu được.' },
                    { kr: '그의 준비성은 나무랄 나위가 없었다.', vi: 'Sự chuẩn bị của cậu ấy hoàn hảo không có chỗ nào để trách cả.' }
                ],
                notes: ['Cụm cố định hay gặp: 더할 나위 없이 (không gì bằng).'],
                important: true
            },
            {
                name: '-느니 차라리',
                meaning: 'Thà... còn hơn',
                level: 5,
                theory: [
                    '<b>-느니 차라리</b> diễn tả ý: Hành động A tồi tệ đến mức "thà làm việc B còn hơn làm việc A".'
                ],
                examples: [
                    { kr: '이런 끔찍한 음식을 먹느니 차라리 굶겠어.', vi: 'Thà nhịn đói còn hơn là ăn món ăn kinh khủng này.' }
                ],
                notes: ['Trọng tâm đặt ở vế sau (sự lựa chọn B).'],
                important: true
            },
            {
                name: '-(으)ㄹ 성싶다',
                meaning: 'Có vẻ như là...',
                level: 6,
                theory: [
                    '<b>-(으)ㄹ 성싶다</b> diễn tả sự phỏng đoán cẩn thận (hơi trang trọng/văn viết).'
                ],
                examples: [
                    { kr: '오늘 밤에는 눈이 올 성싶다.', vi: 'Có vẻ đêm nay trời sẽ có tuyết.' }
                ],
                notes: ['Tương đương: -(으)ㄹ 것 같다 ở dạng trang trọng.'],
                important: true
            }
        ]
    }
];
