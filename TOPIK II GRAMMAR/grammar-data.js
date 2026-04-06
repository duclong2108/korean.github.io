const GRAMMAR_DATA = [
    {
        id: 'category_0', icon: '📚', title: 'Danh sách ngữ pháp PDF (Phần 1)',
        description: 'Ngữ pháp TOPIK II từ file PDF chuẩn',
        items: [
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
                name: '-(으)ㄴ/는 걸 보니(까)', meaning: 'since~', level: 4,
                theory: ['<b>-(으)ㄴ/는 걸 보니(까)</b> = since~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '돈을 많이 쓰는 걸 보니 부자인가 봐.', vi: 'He must be rich since he is using a lot of money.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는 김에', meaning: 'On the way~', level: 4,
                theory: ['<b>-(으)ㄴ/는 김에</b> = On the way~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '마트에 가는 김에 친정에도 갔다.', vi: 'On the way to the supermarket, I visited my parent\'s house.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는 만큼', meaning: 'as much as (doing sth.)', level: 4,
                theory: ['<b>-(으)ㄴ/는 만큼</b> = as much as (doing sth.)', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '웃는 만큼 인생은 행복해진다.', vi: 'Life becomes more fun as much as you laugh.' }
                ],
                notes: []
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
                name: '-(으)ㄴ/는 법이다', meaning: '(It) will~', level: 4,
                theory: ['<b>-(으)ㄴ/는 법이다</b> = (It) will~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '계속 노력한다면 개선되는 법이다.', vi: 'If you keep making an effort, you will get better.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는 탓에', meaning: 'Because~ (negative)', level: 4,
                theory: ['<b>-(으)ㄴ/는 탓에</b> = Because~ (negative)', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '운동 안 한 탓에 살이 많이 쪘어요.', vi: 'Because I did not work out, I gained a lot of weight.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ 모양이다', meaning: 'seems like~', level: 4,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ 모양이다</b> = seems like~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '비가 오는 모양이다.', vi: 'It seems like it is raining.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ 셈이다', meaning: 'going to do~', level: 4,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ 셈이다</b> = going to do~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '어떻게 할 셈이야?', vi: 'What are you going to do?' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ 줄 몰랐다', meaning: 'did not know~', level: 4,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ 줄 몰랐다</b> = did not know~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '공무원 시험에 합격할 줄 몰랐다.', vi: 'I did not know that I passed the civil servant examination.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ 줄 알았다', meaning: 'thought~', level: 4,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ 줄 알았다</b> = thought~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '아저씨는 연예인이 된 줄 알았는데.', vi: 'I thought he became a celebrity.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는/(으)ㄹ지', meaning: 'what/who/where~', level: 4,
                theory: ['<b>-(으)ㄴ/는/(으)ㄹ지</b> = what/who/where~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '지갑을 어디서 잃어버렸는지 모르겠다.', vi: 'I don\'t know where I lost my wallet.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는걸(요)', meaning: '~ though.', level: 4,
                theory: ['<b>-(으)ㄴ/는걸(요)</b> = ~ though.', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '아직 졸린걸요.', vi: 'I am still sleepy though.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는데(요)', meaning: 'But ~', level: 4,
                theory: ['<b>-(으)ㄴ/는데(요)</b> = But ~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '이 요리는 생각보다 맛있는데요.', vi: 'But this dish is more delicious than I thought.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ/는들', meaning: 'Even if~', level: 4,
                theory: ['<b>-(으)ㄴ/는들</b> = Even if~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '내가 간들 소용없다.', vi: 'Even if I go, it won\'t help much.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ가 보다', meaning: 'assume ~', level: 4,
                theory: ['<b>-(으)ㄴ가 보다</b> = assume ~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '그 사람은 선생님인가 봐요.', vi: 'I assume he is a teacher.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄴ가(요)?', meaning: 'Is ~?', level: 4,
                theory: ['<b>-(으)ㄴ가(요)?</b> = Is ~?', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '여자 친구는 예쁜가요?', vi: 'Is your girlfriend pretty?' }
                ],
                notes: []
            },
            {
                name: '-(으)나 마나', meaning: 'no use to-', level: 4,
                theory: ['<b>-(으)나 마나</b> = no use to-', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '길을 물어보나 마나예요.', vi: 'It is no use to ask him the direction.' }
                ],
                notes: []
            },
            {
                name: '-(으)니까(요)', meaning: 'Because~ (neutral)', level: 4,
                theory: ['<b>-(으)니까(요)</b> = Because~ (neutral)', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '열심히 공부하니까 성적이 우수하다.', vi: 'Because he studies hard, his grades are excellent.' }
                ],
                notes: []
            },
            {
                name: '-(으)니만큼', meaning: 'As~', level: 4,
                theory: ['<b>-(으)니만큼</b> = As~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '노력하니만큼 결과가 기대된다.', vi: 'As I tried hard, I am looking forward to the result.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄹ 겸  (해서)', meaning: 'And also', level: 4,
                theory: ['<b>-(으)ㄹ 겸  (해서)</b> = And also', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '그에게 사과할 겸 해서 편지를 썼어요.', vi: 'I wrote a letter and also apologize.' }
                ],
                notes: []
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
                name: '-(으)ㄹ 뻔하다', meaning: 'Suýt nữa thì / Gần như', level: 3,
                theory: ['<b>-(으)ㄹ 뻔하다</b> = suýt nữa thì, chút nữa thì. Hành động gần xảy ra nhưng không xảy ra.'],
                examples: [
                    { kr: '넘어질 <b>뻔했어요</b>.', vi: 'Suýt nữa thì ngã.' },
                    { kr: '버스를 놓칠 <b>뻔했어요</b>.', vi: 'Suýt nữa thì lỡ xe buýt.' },
                    { kr: '비밀을 말할 <b>뻔했어요</b>.', vi: 'Suýt nữa thì nói ra bí mật.' }
                ],
                notes: ['Luôn dùng quá khứ: -(으)ㄹ 뻔했다.', '⚠️ Dùng được cho cả tình huống XẤU lẫn TỐT: 넘어질 뻔했어요 (suýt ngã - xấu) / 합격할 뻔했어요 (suýt đỗ nhưng không đỗ - tiếc). Không giới hạn chỉ là "may mắn thoát".', 'Nhấn mạnh: sự việc RẤT GẦN xảy ra nhưng cuối cùng KHÔNG xảy ra.']
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
                name: '-(으)ㄹ 뿐이다', meaning: 'just~', level: 4,
                theory: ['<b>-(으)ㄹ 뿐이다</b> = just~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '국적이 다를 뿐이지 같은 인간이에요.', vi: 'We just have different nationalities, but we\'re the same human beings.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄹ 수밖에 없다', meaning: 'Không thể không / Chỉ có thể', level: 4,
                theory: ['<b>-(으)ㄹ 수밖에 없다</b> = không thể không, chỉ có thể, đành phải.'],
                examples: [
                    { kr: '포기할 <b>수밖에 없었어요</b>.', vi: 'Đành phải bỏ cuộc.' },
                    { kr: '집에 있을 <b>수밖에 없어요</b>.', vi: 'Không thể không ở nhà (chỉ có thể ở nhà).' }
                ],
                notes: ['Nhấn mạnh không có lựa chọn nào khác — bị hoàn cảnh/ngoại lực ép buộc.', '⚠️ KHÔNG đồng nhất với -지 않을 수 없다: 갈 수밖에 없다 = hoàn toàn không có lựa chọn (ngoại lực). 가지 않을 수 없다 = phủ định kép, sắc thái "cưỡng lại cũng không được" (nội tâm hơn). Hai cái xuất hiện riêng biệt trong đề TOPIK.', 'Thường đi kèm lý do: 시간이 없으니까/어쩔 수 없이... 수밖에 없다.']
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
                name: '-(으)ㄹ 지경이다', meaning: 'almost~', level: 4,
                theory: ['<b>-(으)ㄹ 지경이다</b> = almost~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '그녀가 화낼 지경이에요.', vi: 'She\'s almost mad.' }
                ],
                notes: []
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
                name: '-(으)ㄹ 텐데', meaning: 'Sẽ ... nhưng / Chắc ... mà', level: 4,
                theory: ['<b>-(으)ㄹ 텐데</b> = chắc là ... nhưng. Phỏng đoán + lo lắng/hối tiếc.'],
                examples: [
                    { kr: '지금쯤 도착했을 <b>텐데</b> 연락이 없네요.', vi: 'Chắc giờ đã đến rồi nhưng không liên lạc.' },
                    { kr: '힘들 <b>텐데</b> 괜찮아요?', vi: 'Chắc vất vả lắm, bạn ổn không?' }
                ],
                notes: ['Thể hiện sự lo lắng, thông cảm, hoặc phỏng đoán với cảm xúc.']
            },
            {
                name: '-(으)ㄹ걸 (그랬다)', meaning: 'should have~', level: 4,
                theory: ['<b>-(으)ㄹ걸 (그랬다)</b> = should have~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '우산 가져올 걸.', vi: 'I should have brought an umbrella.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄹ까 말까', meaning: 'whether~ or not', level: 4,
                theory: ['<b>-(으)ㄹ까 말까</b> = whether~ or not', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '길을 건널까 말까 고민했다.', vi: 'I wondered whether I should cross the street or not.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄹ수록', meaning: 'Càng ... càng', level: 3,
                theory: ['<b>-(으)ㄹ수록</b> = càng ... càng. Mức độ tăng theo.', 'Thường đi với 더: -(으)ㄹ수록 더.', 'Cấu trúc nhấn mạnh: -(으)면 -(으)ㄹ수록.'],
                examples: [
                    { kr: '한국어는 공부하<b>면 할수록</b> 재미있어요.', vi: 'Tiếng Hàn càng học càng thú vị.' },
                    { kr: '생각하<b>면 할수록</b> 어려워요.', vi: 'Càng nghĩ càng thấy khó.' },
                    { kr: '갈<b>수록</b> 더 추워져요.', vi: 'Ngày càng lạnh hơn.' }
                ],
                notes: ['Cấu trúc mạnh: A-(으)면 A-(으)ㄹ수록 = càng A thì càng.']
            },
            {
                name: '-(으)ㄹ지(도) 모르다', meaning: 'don\'t know~', level: 4,
                theory: ['<b>-(으)ㄹ지(도) 모르다</b> = don\'t know~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '어떻게 편집해야할지 잘 모르겠어요.', vi: 'I don\'t know how I should edit it.' }
                ],
                notes: []
            },
            {
                name: '-(으)ㄹ지라도', meaning: 'no matter~', level: 4,
                theory: ['<b>-(으)ㄹ지라도</b> = no matter~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '아무리 어려울지라도 저는 해냅니다.', vi: 'No matter how tough it is, I will complete it.' }
                ],
                notes: []
            },
            {
                name: '-(으)라고 하다', meaning: 'told me to~', level: 4,
                theory: ['<b>-(으)라고 하다</b> = told me to~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '아버지가 빨리 손을 씻으라고 했어요.', vi: 'Dad told me to wash my hands quickly.' }
                ],
                notes: []
            },
            {
                name: '-(으)려다가', meaning: 'is about to~', level: 4,
                theory: ['<b>-(으)려다가</b> = is about to~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '외출하려다가 누나가 찾아왔다.', vi: 'When I was about to go out, my sister came in.' }
                ],
                notes: []
            },
            {
                name: '-(으)려던 참이다', meaning: 'is about to', level: 4,
                theory: ['<b>-(으)려던 참이다</b> = is about to', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '학교에 가려던 참이에요.', vi: 'I was about to go to school.' }
                ],
                notes: []
            },
            {
                name: '-(으)려면', meaning: 'in order to~', level: 4,
                theory: ['<b>-(으)려면</b> = in order to~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '기념사진을 찍으려면 배경은 아름다워야한다.', vi: 'In order to take a memorial picture, the background has to be beautiful.' }
                ],
                notes: []
            },
            {
                name: '-(으)로 인해(서)', meaning: 'due to~', level: 4,
                theory: ['<b>-(으)로 인해(서)</b> = due to~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '그 이야기는 인터넷으로 인해 확산되었다.', vi: 'The story is widespread due to the Internet.' }
                ],
                notes: []
            },
            {
                name: '-(으)로서', meaning: 'as a~', level: 4,
                theory: ['<b>-(으)로서</b> = as a~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '선배로서 충고 하나 할게.', vi: 'Let me give you some advice as a senior.' }
                ],
                notes: []
            },
            {
                name: '-(으)며', meaning: 'and~', level: 4,
                theory: ['<b>-(으)며</b> = and~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '내 남자친구는 피아노도 잘 치며 노래도 잘한다.', vi: 'My boyfriend is good at playing piano and singing.' }
                ],
                notes: []
            },
            {
                name: '-(으)면 되다', meaning: 'should be okay~', level: 4,
                theory: ['<b>-(으)면 되다</b> = should be okay~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '웹사이트에서 접수하시면 됩니다.', vi: 'It should be okay if you apply on the website.' }
                ],
                notes: []
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
                name: '-(이)나 -(이)나 할 것 없이', meaning: 'regardless of~', level: 4,
                theory: ['<b>-(이)나 -(이)나 할 것 없이</b> = regardless of~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '아이나 어른이나 할 것 없이 건강은 중요하다.', vi: 'Regardless of whether you are a child or an adult, health is important.' }
                ],
                notes: []
            },
            {
                name: '-거든', meaning: 'because', level: 4,
                theory: ['<b>-거든</b> = because', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '어려보여도 제가 상사거든요.', vi: 'Because I am your boss even though I look young.' }
                ],
                notes: []
            },
            {
                name: '-게 하다', meaning: 'makes~', level: 4,
                theory: ['<b>-게 하다</b> = makes~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '동생은 나를 짜증나게 한다.', vi: 'My younger brother makes me annoyed.' }
                ],
                notes: []
            },
            {
                name: '-고 나니(까)', meaning: 'after~', level: 4,
                theory: ['<b>-고 나니(까)</b> = after~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '푹 쉬고 나니 열이 내려갔어요.', vi: 'After resting well, the fever got better.' }
                ],
                notes: []
            },
            {
                name: '-고 나면', meaning: 'after~', level: 4,
                theory: ['<b>-고 나면</b> = after~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '청소하고 나면 기분이 상쾌해진다.', vi: 'After cleaning the house, I feel refreshed.' }
                ],
                notes: []
            }
        ]
    },
    {
        id: 'category_1', icon: '📚', title: 'Danh sách ngữ pháp PDF (Phần 2)',
        description: 'Ngữ pháp TOPIK II từ file PDF chuẩn',
        items: [
            {
                name: '-고 나서', meaning: 'after~', level: 4,
                theory: ['<b>-고 나서</b> = after~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '이메일 먼저 확인하고 나서 연락드릴게요.', vi: 'After checking the e-mail first, I will contact with you.' }
                ],
                notes: []
            },
            {
                name: '-고 말고(요)', meaning: 'of course~', level: 4,
                theory: ['<b>-고 말고(요)</b> = of course~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '한국여행은 재미있고 말고요.', vi: 'Of course, traveling to Korea is fun.' }
                ],
                notes: []
            },
            {
                name: '-고 말다', meaning: 'ended up~', level: 4,
                theory: ['<b>-고 말다</b> = ended up~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '밤늦게까지 게임하고 말았어요.', vi: 'I ended up playing a game until late at night.' }
                ],
                notes: []
            },
            {
                name: '-고 보면', meaning: 'actually~ once~', level: 4,
                theory: ['<b>-고 보면</b> = actually~ once~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '배우고 보면 한국어는 쉬워요.', vi: 'Korean is actually easy to learn once you start learning.' }
                ],
                notes: []
            },
            {
                name: '-곤 하다', meaning: 'used to often~', level: 4,
                theory: ['<b>-곤 하다</b> = used to often~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '우리는 분식점 앞에서 만나곤 했다.', vi: 'We used to meet often in front of the cafeteria.' }
                ],
                notes: []
            },
            {
                name: '-기 쉽다', meaning: 'easy to~', level: 4,
                theory: ['<b>-기 쉽다</b> = easy to~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '저 선생님의 수업은 이해하기 쉬워요.', vi: 'That teacher\'s class is easy to understand.' }
                ],
                notes: []
            },
            {
                name: '-기 십상이다', meaning: 'tend to~', level: 4,
                theory: ['<b>-기 십상이다</b> = tend to~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '젊은 운전자는 실수하기 십상이다.', vi: 'Young drivers tend to make mistakes.' }
                ],
                notes: []
            },
            {
                name: '-기 어렵다', meaning: 'difficult to~', level: 4,
                theory: ['<b>-기 어렵다</b> = difficult to~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '작은 신발로는 걷기 어렵다.', vi: 'It is difficult to walk in small shoes.' }
                ],
                notes: []
            },
            {
                name: '-기 위해(서)', meaning: 'to~', level: 4,
                theory: ['<b>-기 위해(서)</b> = to~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '문제를 해결하기 위해서 다같이 모였다.', vi: 'We gathered together to resolve the issue.' }
                ],
                notes: []
            },
            {
                name: '-기/게 마련이다', meaning: 'will~', level: 4,
                theory: ['<b>-기/게 마련이다</b> = will~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '준비 안 하면 후회하기 마련이다.', vi: 'If you don\'t prepare, you will regret it.' }
                ],
                notes: []
            },
            {
                name: '-기는 하지만', meaning: 'but~', level: 4,
                theory: ['<b>-기는 하지만</b> = but~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '한국어는 어렵기는 하지만 재미도 있어요.', vi: 'Korean is difficult but fun to learn.' }
                ],
                notes: []
            },
            {
                name: '-기는(요)', meaning: 'no need to~', level: 4,
                theory: ['<b>-기는(요)</b> = no need to~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '고맙기는요. 별말씀을요.', vi: 'No need to thank me. (No problem.)' }
                ],
                notes: []
            },
            {
                name: '-기만 하면 (되다)', meaning: 'as long as~', level: 4,
                theory: ['<b>-기만 하면 (되다)</b> = as long as~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '단어를 외우기만 하면 100점이다.', vi: 'As long as you memorize the vocabulary, you will get a full score.' }
                ],
                notes: []
            },
            {
                name: '-기에(는)', meaning: 'not good for~', level: 4,
                theory: ['<b>-기에(는)</b> = not good for~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '축구하기에는 날씨가 안 좋아요.', vi: 'The weather is not good for playing soccer.' }
                ],
                notes: []
            },
            {
                name: '-길래', meaning: 'since~', level: 4,
                theory: ['<b>-길래</b> = since~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '남편이 레스토랑에 안 오길래 난 바람맞은 줄 알았다.', vi: 'Since my husband did not come to a restaurant, I thought he cancel the plan at the last minute.' }
                ],
                notes: []
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
                name: '-ㄴ/는다', meaning: 'is~', level: 4,
                theory: ['<b>-ㄴ/는다</b> = is~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '후식에 딸기를 먹는다.', vi: 'I am eating strawberries for dessert.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다거나', meaning: 'or~', level: 4,
                theory: ['<b>-ㄴ/는다거나</b> = or~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '독서한다거나 영화를 보러 간다.', vi: 'I read some books or go watch a movie.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다고 치다', meaning: 'if~', level: 4,
                theory: ['<b>-ㄴ/는다고 치다</b> = if~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '일본에 간다고 치면 어디로 갈까요?', vi: 'If I go to Japan, where should I visit?' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다고 하다', meaning: 'say~', level: 4,
                theory: ['<b>-ㄴ/는다고 하다</b> = say~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '제 친구는 병원에 안 다닌다고 했어요.', vi: 'My friend said that he didn\'t go to the hospital.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다고 해도', meaning: 'even if~', level: 4,
                theory: ['<b>-ㄴ/는다고 해도</b> = even if~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '금연한다고 해도 잘 안 된다.', vi: 'Even if I am trying to quit smoking, it is difficult.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다고(요)', meaning: 'seems like~', level: 4,
                theory: ['<b>-ㄴ/는다고(요)</b> = seems like~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '내일은 비가 온다고 해요.', vi: 'It seems like tomorrow is going to rain.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다니', meaning: 'that~', level: 4,
                theory: ['<b>-ㄴ/는다니</b> = that~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '5개국어를 한다니 대단합니다.', vi: 'It\'s amazing that you can speak 5 languages.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다니까', meaning: 'I\'m telling you~', level: 4,
                theory: ['<b>-ㄴ/는다니까</b> = I\'m telling you~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '아무리 이유를 설명해도 화를 낸다니까.', vi: 'I\'m telling you no matter how many times I explain the reason, he is still angry.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다더니', meaning: 'but~', level: 4,
                theory: ['<b>-ㄴ/는다더니</b> = but~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '우리 남편은 일찍 돌아온다더니 아직도 집에 안 왔다.', vi: 'My husband said he will be back soon, but he was still not home.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다더라', meaning: 'seems like~', level: 4,
                theory: ['<b>-ㄴ/는다더라</b> = seems like~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '내일은 눈이 온다더라.', vi: 'It seems like tomorrow is going to snow.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다던데', meaning: 'heard~', level: 4,
                theory: ['<b>-ㄴ/는다던데</b> = heard~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '잘 생겼다던데 정말이야?', vi: 'I heard he is handsome, is that true?' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다면', meaning: 'if~', level: 4,
                theory: ['<b>-ㄴ/는다면</b> = if~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '운동선수가 되고 싶다면 전문학원에 등록해야 돼.', vi: 'If you want to be an athlete, you need to register for a professional academy.' }
                ],
                notes: []
            },
            {
                name: '-ㄴ/는다면서(요)?', meaning: 'heard~', level: 4,
                theory: ['<b>-ㄴ/는다면서(요)?</b> = heard~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '너 영어 잘한다면서?', vi: 'I heard you are good at English?' }
                ],
                notes: []
            },
            {
                name: '-나 보다', meaning: 'seem to~', level: 4,
                theory: ['<b>-나 보다</b> = seem to~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '둘이 사귀나 보다.', vi: 'They seem to be dating.' }
                ],
                notes: []
            },
            {
                name: '-나(요)?', meaning: 'is it?', level: 4,
                theory: ['<b>-나(요)?</b> = is it?', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '여기서 타면 되나?', vi: 'Is it here where we ride?' }
                ],
                notes: []
            },
            {
                name: '-냐고 하다', meaning: 'ask', level: 4,
                theory: ['<b>-냐고 하다</b> = ask', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '엄마가 시험은 언제냐고 저한테 물어봤어요.', vi: 'My mom asked me when the exam was.' }
                ],
                notes: []
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
                name: '-는 (도)중에', meaning: 'in the middle of~', level: 4,
                theory: ['<b>-는 (도)중에</b> = in the middle of~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '연기하는 중에 기침해버렸다.', vi: 'I accidentally coughed when I was in the middle of acting.' }
                ],
                notes: []
            },
            {
                name: '-는 길에', meaning: 'on the way~', level: 4,
                theory: ['<b>-는 길에</b> = on the way~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '집에 가는 길에 빵을 사 왔어요.', vi: 'I bought bread on my way home.' }
                ],
                notes: []
            },
            {
                name: '-는 대로', meaning: 'as~', level: 4,
                theory: ['<b>-는 대로</b> = as~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '바라는 대로 이루어진다.', vi: 'You can become as you wish.' }
                ],
                notes: []
            },
            {
                name: '-는 대신(에)', meaning: 'instead of~', level: 4,
                theory: ['<b>-는 대신(에)</b> = instead of~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '술을 마시는 대신에 녹차를 마시자.', vi: 'Let\'s drink green tea instead of alcohol.' }
                ],
                notes: []
            },
            {
                name: '-는 덕분에', meaning: 'thanks to~', level: 4,
                theory: ['<b>-는 덕분에</b> = thanks to~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '버스가 늦게 온 덕분에 탈 수 있었다.', vi: 'I was able to ride the bus thanks to the fact that it was delayed.' }
                ],
                notes: []
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
                name: '-는 사이에', meaning: 'when~', level: 4,
                theory: ['<b>-는 사이에</b> = when~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '제가 없는 사이에 택배가 오면 받아주세요.', vi: 'If the delivery comes when I am not home, please take it for me.' }
                ],
                notes: []
            },
            {
                name: '-는 셈 치다', meaning: 'considering~', level: 4,
                theory: ['<b>-는 셈 치다</b> = considering~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '연습하는 셈 치고 오디션에 간다.', vi: 'I take auditions considering them as practices.' }
                ],
                notes: []
            },
            {
                name: '-는 수(가) 있다', meaning: 'can~', level: 4,
                theory: ['<b>-는 수(가) 있다</b> = can~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '전문가라고 해도 실패하는 수가 있어요.', vi: 'Even an expert can fail.' }
                ],
                notes: []
            },
            {
                name: '-는 수밖에 (없다)', meaning: 'no other choice than~', level: 4,
                theory: ['<b>-는 수밖에 (없다)</b> = no other choice than~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '가족으로부터 돈을 빌리는 수밖에 없다.', vi: 'There is no other choice than to borrow money from my family.' }
                ],
                notes: []
            },
            {
                name: '-는 중이다', meaning: 'on the way~', level: 4,
                theory: ['<b>-는 중이다</b> = on the way~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '지금 직장에 가는 중이에요.', vi: 'I am on the way going to my office.' }
                ],
                notes: []
            },
            {
                name: '-는 통에', meaning: 'because~', level: 4,
                theory: ['<b>-는 통에</b> = because~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '아이들이 떠드는 통에 집중할 수 없었어요.', vi: 'I was not able to concentrate because the children were too noisy.' }
                ],
                notes: []
            },
            {
                name: '-는 편이다', meaning: 'tend to~', level: 4,
                theory: ['<b>-는 편이다</b> = tend to~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '저는 돈을 아끼는 편이에요.', vi: 'I tend to save money.' }
                ],
                notes: []
            },
            {
                name: '-는 한', meaning: 'as far as~', level: 4,
                theory: ['<b>-는 한</b> = as far as~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '내가 아는 한 그것은 사실이에요.', vi: 'As far as I know, it is true.' }
                ],
                notes: []
            },
            {
                name: '-는 한편', meaning: 'Trong khi đó / Một mặt', level: 5,
                theory: ['<b>-는 한편</b> = trong khi đó, một mặt, đồng thời. Hai hành động song song.'],
                examples: [
                    { kr: '회사에 다니<b>는 한편</b> 대학원에서 공부하고 있어요.', vi: 'Vừa đi làm đồng thời học thạc sĩ.' },
                    { kr: '경제가 성장하<b>는 한편</b> 환경 문제도 심각해지고 있어요.', vi: 'Kinh tế tăng trưởng, đồng thời vấn đề môi trường cũng nghiêm trọng.' }
                ],
                notes: ['Formal, thường dùng trong văn viết/tin tức.']
            },
            {
                name: '-는/은커녕', meaning: 'even~', level: 4,
                theory: ['<b>-는/은커녕</b> = even~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '술은커녕 차도 못 마셨어요.', vi: 'I could not drink alcohol, not even tea.' }
                ],
                notes: []
            },
            {
                name: '-는구나', meaning: 'I see~', level: 4,
                theory: ['<b>-는구나</b> = I see~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '이 애기는 벌써 걷는구나.', vi: 'The baby is already walking.' }
                ],
                notes: []
            }
        ]
    },
    {
        id: 'category_2', icon: '📚', title: 'Danh sách ngữ pháp PDF (Phần 3)',
        description: 'Ngữ pháp TOPIK II từ file PDF chuẩn',
        items: [
            {
                name: '-니/냐?', meaning: 'do you~?', level: 4,
                theory: ['<b>-니/냐?</b> = do you~?', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '기분 나쁘니?', vi: 'Do you feel uncomfortable?' }
                ],
                notes: []
            },
            {
                name: '-다(가) 보니(까)', meaning: 'while focusing~ already~', level: 4,
                theory: ['<b>-다(가) 보니(까)</b> = while focusing~ already~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '작업하다 보니까 새벽이 됐어요.', vi: 'While I was focusing on my work, it was already morning.' }
                ],
                notes: []
            },
            {
                name: '-다(가) 보면', meaning: 'when focusing~', level: 4,
                theory: ['<b>-다(가) 보면</b> = when focusing~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '심호흡하다 보면 마음이 차분해집니다.', vi: 'When you focus on breathing deeply, you will feel calmer.' }
                ],
                notes: []
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
                name: '-다시피', meaning: 'as~', level: 4,
                theory: ['<b>-다시피</b> = as~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '보다시피 요즘 직장인들은 바빠요.', vi: 'As you can see, employees these days are busy.' }
                ],
                notes: []
            },
            {
                name: '-대로', meaning: 'as~', level: 4,
                theory: ['<b>-대로</b> = as~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '교수님의 말씀대로 하자.', vi: 'Let\'s do as the professor told us.' }
                ],
                notes: []
            },
            {
                name: '-더군(요)', meaning: 'I heard~', level: 4,
                theory: ['<b>-더군(요)</b> = I heard~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '따님에게 귀여운 이름을 지었더군요.', vi: 'I heard that you have given your daughter a very cute name.' }
                ],
                notes: []
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
                name: '-더라', meaning: 'I heard~', level: 4,
                theory: ['<b>-더라</b> = I heard~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '그 남자는 경찰에 잡혔더라.', vi: 'I heard the guy was caught by the police.' }
                ],
                notes: []
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
                name: '-더라도', meaning: 'Cho dù / Dù cho', level: 4,
                theory: ['<b>-더라도</b> = cho dù, dù cho. Nhượng bộ, kết quả không thay đổi.'],
                examples: [
                    { kr: '아무리 힘들<b>더라도</b> 포기하지 마세요.', vi: 'Cho dù khó đến đâu cũng đừng bỏ cuộc.' },
                    { kr: '비가 오<b>더라도</b> 갈 거예요.', vi: 'Cho dù trời mưa tôi cũng sẽ đi.' }
                ],
                notes: ['Mạnh hơn -아/어도.', 'Thường đi với 아무리.']
            },
            {
                name: '-던', meaning: 'used to~', level: 4,
                theory: ['<b>-던</b> = used to~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '내가 다니던 중학교는 지금은 없어요.', vi: 'The middle school I used to go to is not there anymore.' }
                ],
                notes: []
            },
            {
                name: '-던가(요)?', meaning: 'Is~?', level: 4,
                theory: ['<b>-던가(요)?</b> = Is~?', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '오늘 결혼기념일이던가?', vi: 'Is today our wedding anniversary?' }
                ],
                notes: []
            },
            {
                name: '-던데', meaning: 'I found (that)', level: 4,
                theory: ['<b>-던데</b> = I found (that)', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '길이 막히던데 사고라도 났나?', vi: 'I found a traffic jam. Was there an accident?' }
                ],
                notes: []
            },
            {
                name: '-도록', meaning: 'so that~', level: 4,
                theory: ['<b>-도록</b> = so that~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '이 은혜를 갚도록 항상 최선을 다하겠습니다.', vi: 'I will try my best to return this favor.' }
                ],
                notes: []
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
                name: '-듯이', meaning: 'like~', level: 4,
                theory: ['<b>-듯이</b> = like~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '미친 듯이 춤췄다.', vi: 'I danced like a crazy person.' }
                ],
                notes: []
            },
            {
                name: '(이)라도', meaning: 'rather~', level: 4,
                theory: ['<b>(이)라도</b> = rather~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '이 문제지라도 풀어볼래요?', vi: 'Would you like to rather solve this problem?' }
                ],
                notes: []
            },
            {
                name: '-만 못하다', meaning: 'not as~', level: 4,
                theory: ['<b>-만 못하다</b> = not as~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '중고는 신제품만 못해요.', vi: 'Second-hand is not as good as a new product.' }
                ],
                notes: []
            },
            {
                name: '-아/어 보이다', meaning: 'seem~', level: 4,
                theory: ['<b>-아/어 보이다</b> = seem~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '얼굴표정이 어제보다 밝아 보여요.', vi: 'You seem to feel better than yesterday.' }
                ],
                notes: []
            },
            {
                name: '-아/어서 그런지', meaning: 'probably becase~', level: 4,
                theory: ['<b>-아/어서 그런지</b> = probably becase~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '나이가 들어서 그런지 몸이 예전같지 않다.', vi: 'I feel not as strong as before probably because I am getting old.' }
                ],
                notes: []
            },
            {
                name: '-아/어도', meaning: 'even~', level: 4,
                theory: ['<b>-아/어도</b> = even~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '설명 들어도 이해 못 하겠어요.', vi: 'I can\'t understand even after listening to the explanation.' }
                ],
                notes: []
            },
            {
                name: '-아/어라', meaning: 'please~', level: 4,
                theory: ['<b>-아/어라</b> = please~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '공을 던져라.', vi: 'Please throw the ball.' }
                ],
                notes: []
            },
            {
                name: '-아/어야', meaning: 'when~', level: 4,
                theory: ['<b>-아/어야</b> = when~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '술자리에는 친한 친구가 있어야 재미있다.', vi: 'Drinking is fun when you have a close friend.' }
                ],
                notes: []
            },
            {
                name: '-아/어야지', meaning: 'should~', level: 4,
                theory: ['<b>-아/어야지</b> = should~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '일찍 결혼해야지.', vi: 'You should marry quickly.' }
                ],
                notes: []
            },
            {
                name: '-아/어지다', meaning: 'becoming~', level: 4,
                theory: ['<b>-아/어지다</b> = becoming~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '인터넷으로 세계는 가까워지고 있어요.', vi: 'The world is becoming closer through the Internet.' }
                ],
                notes: []
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
                name: '-았/었던 것 같다', meaning: 'think~', level: 4,
                theory: ['<b>-았/었던 것 같다</b> = think~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '걔는 취업했던 것 같다.', vi: 'I think he got a job.' }
                ],
                notes: []
            },
            {
                name: '-았/었으면 하다', meaning: 'wish~', level: 4,
                theory: ['<b>-았/었으면 하다</b> = wish~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '점심은 라면이었으면 해.', vi: 'I wish the lunch menu is ramen.' }
                ],
                notes: []
            },
            {
                name: '(이)야말로', meaning: 'the~', level: 4,
                theory: ['<b>(이)야말로</b> = the~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '지금이야말로 역사적인 순간입니다.', vi: 'This is the historical moment.' }
                ],
                notes: []
            },
            {
                name: '-에 관해(서)', meaning: 'about~', level: 4,
                theory: ['<b>-에 관해(서)</b> = about~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '인기 가수에 관해서 새로운 뉴스가 나왔어요.', vi: 'The latest news about a famous singer got released.' }
                ],
                notes: []
            },
            {
                name: '-에 대해(서)', meaning: 'to~', level: 4,
                theory: ['<b>-에 대해(서)</b> = to~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '부부는 서로에 대해서 배려해야 한다.', vi: 'Married couples have to show respect to each other.' }
                ],
                notes: []
            },
            {
                name: '-에 따라(서)', meaning: 'depending on~', level: 4,
                theory: ['<b>-에 따라(서)</b> = depending on~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '예산에 따라 여행일정도 달라져요.', vi: 'The travel plan changes depending on the budget.' }
                ],
                notes: []
            },
            {
                name: '-에 의해(서)', meaning: 'by~', level: 4,
                theory: ['<b>-에 의해(서)</b> = by~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '역경은 희망에 의해서 극복할 수 있다.', vi: 'Hardship can be overcome by hope.' }
                ],
                notes: []
            },
            {
                name: '-에다(가)', meaning: 'in(to)~ / at~', level: 4,
                theory: ['<b>-에다(가)</b> = in(to)~ / at~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '우유는 냉장고에다가 넣었어요.', vi: 'I put milk into the refrigerator.' }
                ],
                notes: []
            },
            {
                name: '-을/를 비롯한', meaning: 'including~', level: 4,
                theory: ['<b>-을/를 비롯한</b> = including~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '나를 비롯한 모든 사람들이 그 아이디어에 찬성한다.', vi: 'Everybody including me agreed on the idea.' }
                ],
                notes: []
            },
            {
                name: '-을/를 통해(서)', meaning: 'from~', level: 4,
                theory: ['<b>-을/를 통해(서)</b> = from~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '그 배우는 드라마를 통해서 알게 되었어요.', vi: 'I got to know that actor from a TV series.' }
                ],
                notes: []
            },
            {
                name: '-자', meaning: 'let\'s', level: 4,
                theory: ['<b>-자</b> = let\'s', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '이제 문 닫자.', vi: 'Let\'s close the door.' }
                ],
                notes: []
            },
            {
                name: '-자고 하다', meaning: '(He/she) said to~', level: 4,
                theory: ['<b>-자고 하다</b> = (He/she) said to~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '동료가 포기하지 말자고 했다.', vi: 'My colleague said not to give up.' }
                ],
                notes: []
            },
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
                name: '-잖아요', meaning: 'Mà / Đã nói rồi mà', level: 3,
                theory: ['<b>-잖아요</b> = mà, rõ ràng mà. Nhắc lại điều cả hai đã biết.'],
                examples: [
                    { kr: '제가 말했<b>잖아요</b>.', vi: 'Tôi đã nói rồi mà.' },
                    { kr: '오늘 일요일이<b>잖아요</b>.', vi: 'Hôm nay Chủ nhật mà (bạn biết rồi mà).' }
                ],
                notes: ['Hơi trách móc nhẹ: "bạn đã biết mà sao còn hỏi/làm vậy".', '⚠️ KHÔNG nhầm với -지 않아요 (phủ định đơn thuần): 가지 않아요 = Tôi không đi. -잖아요 nhắc điều đã biết, hoàn toàn khác: 갔잖아요 = Đã đi rồi mà!', 'Dùng để xác nhận, giải thích, hoặc nhắc nhở điều cả hai bên đều biết.']
            },
            {
                name: '마저', meaning: 'even~', level: 4,
                theory: ['<b>마저</b> = even~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '숙제가 많은 데다가 시간마저 부족하다.', vi: 'I have a lot of homework, but even the time is running out.' }
                ],
                notes: []
            },
            {
                name: '만큼', meaning: 'as~', level: 4,
                theory: ['<b>만큼</b> = as~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '가족만큼 중요한 것은 없다.', vi: 'There is nothing as important as family.' }
                ],
                notes: []
            },
            {
                name: '아무 -(이)나', meaning: 'any~', level: 4,
                theory: ['<b>아무 -(이)나</b> = any~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '아무 옷이나 가져오세요.', vi: 'Bring any kind of clothes.' }
                ],
                notes: []
            },
            {
                name: '아무 -도', meaning: 'no~', level: 4,
                theory: ['<b>아무 -도</b> = no~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '아무 걱정도 없어요.', vi: 'I have no worries at all.' }
                ],
                notes: []
            },
            {
                name: '얼마나 -(으)ㄴ/는지', meaning: 'how~', level: 4,
                theory: ['<b>얼마나 -(으)ㄴ/는지</b> = how~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '그 당시에는 얼마나 가난했는지 몰라요.', vi: 'You can\'t imagine how poor we were at the time.' }
                ],
                notes: []
            },
            {
                name: '조차', meaning: 'even~', level: 4,
                theory: ['<b>조차</b> = even~', 'Từ danh sách TOPIK II PDF'],
                examples: [
                    { kr: '기다림조차 설렙니다.', vi: 'Even the waiting time is exciting for me.' }
                ],
                notes: []
            },
            {
                name: '치고(는)', meaning: 'for~', level: 4,
                theory: ['<b>치고(는)</b> = for~', 'Bổ sung từ PDF TOPIK II Grammar'],
                examples: [
                    { kr: '아이돌치고는 나이가 많다.', vi: 'He is old for an idol.' }
                ],
                notes: []
            }
        ]
    }
];
