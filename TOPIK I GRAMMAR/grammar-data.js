// TOPIK I Grammar Data - Part 1: Particles & Endings & Tense
const GRAMMAR_DATA = [
    {
        id: 'particles', icon: '🔤', title: '조사 (Trợ từ / Particles)',
        description: 'Các trợ từ đánh dấu vai trò của danh từ trong câu',
        items: [
            {
                name: '은/는', meaning: 'Trợ từ chủ đề', level: 1,
                theory: ['<b>은/는</b> là trợ từ chủ đề (topic marker), dùng để đánh dấu chủ đề chính của câu.', 'Gắn sau danh từ: có patchim → <b>은</b>, không patchim → <b>는</b>.', 'Dùng để giới thiệu, so sánh hoặc nhấn mạnh chủ đề.'],
                conjugation: [['Có patchim (받침)', '명사 + 은', '학생<b>은</b>'], ['Không patchim', '명사 + 는', '나<b>는</b>']],
                conjugationCols: ['Điều kiện', 'Công thức', 'Ví dụ'],
                examples: [
                    { kr: '저<b>는</b> 학생이에요.', vi: 'Tôi là học sinh.' },
                    { kr: '한국 음식<b>은</b> 맛있어요.', vi: 'Đồ ăn Hàn Quốc thì ngon.' },
                    { kr: '저<b>는</b> 베트남 사람이에요.', vi: 'Tôi là người Việt Nam.' }
                ],
                notes: ['은/는 dùng để so sánh: 커피<b>는</b> 좋아하지만 차<b>는</b> 안 좋아해요.', 'Khi muốn nhấn mạnh chủ ngữ cụ thể, dùng 이/가 thay vì 은/는.'],
                special: ['Trong câu phủ định, 은/는 thường được dùng để tạo sự tương phản: 이것<b>은</b> 맛있지만 저것<b>은</b> 맛없어요.'],
                comparison: '<b>은/는 vs 이/가</b>: 은/는 đánh dấu chủ đề (thông tin đã biết), 이/가 đánh dấu chủ ngữ (thông tin mới). Ví dụ: 날씨<b>가</b> 좋아요 (thời tiết đẹp - thông tin mới) vs 날씨<b>는</b> 좋아요 (thời tiết thì đẹp - so sánh).'
            },
            {
                name: '이/가', meaning: 'Trợ từ chủ ngữ', level: 1,
                theory: ['<b>이/가</b> là trợ từ chủ ngữ (subject marker), đánh dấu chủ ngữ thực hiện hành động.', 'Có patchim → <b>이</b>, không patchim → <b>가</b>.', 'Thường dùng khi đưa ra thông tin mới hoặc trả lời câu hỏi "ai/cái gì".'],
                conjugation: [['Có patchim', '명사 + 이', '선생님<b>이</b>'], ['Không patchim', '명사 + 가', '제<b>가</b>']],
                conjugationCols: ['Điều kiện', 'Công thức', 'Ví dụ'],
                examples: [
                    { kr: '비<b>가</b> 와요.', vi: 'Trời mưa. (Mưa đến)' },
                    { kr: '누<b>가</b> 했어요? - 제<b>가</b> 했어요.', vi: 'Ai đã làm? - Tôi đã làm.' },
                    { kr: '날씨<b>가</b> 좋아요.', vi: 'Thời tiết đẹp.' }
                ],
                notes: ['저 → 제가 (tôi + 가), 나 → 내가 (tớ + 가): biến đổi đặc biệt.', '이/가 bắt buộc dùng với 있다/없다, 아니다: 시간<b>이</b> 없어요.'],
                special: ['Với 되다 (trở thành): luôn dùng 이/가: 의사<b>가</b> 되고 싶어요.', 'Trong mệnh đề phụ, chủ ngữ luôn dùng 이/가: 제<b>가</b> 좋아하는 음식.']
            },
            {
                name: '을/를', meaning: 'Trợ từ tân ngữ', level: 1,
                theory: ['<b>을/를</b> là trợ từ tân ngữ (object marker), đánh dấu đối tượng chịu tác động của hành động.', 'Có patchim → <b>을</b>, không patchim → <b>를</b>.'],
                conjugation: [['Có patchim', '명사 + 을', '밥<b>을</b>'], ['Không patchim', '명사 + 를', '커피<b>를</b>']],
                conjugationCols: ['Điều kiện', 'Công thức', 'Ví dụ'],
                examples: [
                    { kr: '저는 한국어<b>를</b> 공부해요.', vi: 'Tôi học tiếng Hàn.' },
                    { kr: '아침<b>을</b> 먹었어요.', vi: 'Tôi đã ăn sáng.' },
                    { kr: '음악<b>을</b> 들어요.', vi: 'Tôi nghe nhạc.' }
                ],
                notes: ['Trong hội thoại thường ngày, 을/를 thường bị lược bỏ: 밥 먹었어? (đã ăn cơm chưa?)', '을/를 cũng dùng với các động từ chỉ phương hướng: 길<b>을</b> 건너다 (băng qua đường).'],
                special: ['Một số động từ đặc biệt dùng 을/를 thay vì trợ từ khác: 버스<b>를</b> 타다 (đi xe buýt), 학교<b>를</b> 졸업하다 (tốt nghiệp).']
            },
            {
                name: '에', meaning: 'Trợ từ vị trí / thời gian', level: 1,
                theory: ['<b>에</b> đánh dấu nơi chốn (tĩnh), thời gian, hoặc điểm đến.', 'Dùng với: 있다/없다 (ở/không ở), 가다/오다 (đi/đến), thời gian cụ thể.'],
                examples: [
                    { kr: '학교<b>에</b> 가요.', vi: 'Tôi đi đến trường.' },
                    { kr: '집<b>에</b> 있어요.', vi: 'Tôi ở nhà.' },
                    { kr: '9시<b>에</b> 만나요.', vi: 'Gặp nhau lúc 9 giờ.' },
                    { kr: '주말<b>에</b> 뭐 해요?', vi: 'Cuối tuần bạn làm gì?' }
                ],
                notes: ['Không dùng 에 với 오늘, 어제, 내일, 지금, 언제: 오늘 학교에 가요 (✓), 오늘<b>에</b> 학교에 가요 (✗).', '에 chỉ nơi tĩnh, 에서 chỉ nơi hành động diễn ra.'],
                special: ['에 còn dùng để chỉ đơn vị/giá: 하나<b>에</b> 천 원이에요 (Một cái giá 1000 won).']
            },
            {
                name: '에서', meaning: 'Trợ từ nơi hành động', level: 1,
                theory: ['<b>에서</b> đánh dấu nơi hành động diễn ra (location of action).', 'Dùng với các động từ hành động: 공부하다, 일하다, 먹다, v.v.'],
                examples: [
                    { kr: '도서관<b>에서</b> 공부해요.', vi: 'Tôi học ở thư viện.' },
                    { kr: '회사<b>에서</b> 일해요.', vi: 'Tôi làm việc ở công ty.' },
                    { kr: '식당<b>에서</b> 밥을 먹었어요.', vi: 'Tôi đã ăn cơm ở nhà hàng.' }
                ],
                notes: ['에 vs 에서: 집<b>에</b> 있어요 (ở nhà - trạng thái), 집<b>에서</b> 공부해요 (học ở nhà - hành động).'],
                comparison: '<b>에 vs 에서</b>: 에 = vị trí tĩnh (있다, 없다) + điểm đến (가다, 오다). 에서 = nơi hành động xảy ra (공부하다, 먹다, 일하다).',
                special: ['에서 còn có nghĩa "từ" (xuất phát điểm): 서울<b>에서</b> 부산까지 (từ Seoul đến Busan).']
            },
            {
                name: '(으)로', meaning: 'Phương hướng / Phương tiện', level: 1,
                theory: ['<b>(으)로</b> chỉ hướng, phương tiện, chất liệu, hoặc lý do.', 'Có patchim (trừ ㄹ) → <b>으로</b>, không patchim hoặc ㄹ → <b>로</b>.'],
                conjugation: [['Không patchim / patchim ㄹ', '명사 + 로', '지하철<b>로</b>, 연필<b>로</b>, 버스<b>로</b>'], ['Có patchim (≠ ㄹ)', '명사 + 으로', '왼쪽<b>으로</b>, 동쪽<b>으로</b>, 부엌<b>으로</b>']],
                conjugationCols: ['Điều kiện', 'Công thức', 'Ví dụ'],
                examples: [
                    { kr: '지하철<b>로</b> 가요.', vi: 'Đi bằng tàu điện ngầm.' },
                    { kr: '왼쪽<b>으로</b> 가세요.', vi: 'Hãy đi sang bên trái.' },
                    { kr: '나무<b>로</b> 만들었어요.', vi: 'Được làm bằng gỗ.' }
                ],
                notes: ['ㄹ patchim + 로 (không thêm 으): 연필<b>로</b> 쓰세요.', '(으)로 chỉ hướng ≠ 에 chỉ điểm đến: 오른쪽<b>으로</b> (về phía phải) vs 학교<b>에</b> (đến trường).']
            },
            {
                name: '와/과, 하고, (이)랑', meaning: 'Và / Với', level: 1,
                theory: ['Cả ba đều có nghĩa "và" hoặc "với", nối hai danh từ.', '<b>와/과</b>: văn viết. Không patchim → 와, có patchim → 과.', '<b>하고</b>: dùng mọi trường hợp, phổ biến nhất.', '<b>(이)랑</b>: khẩu ngữ. Có patchim → 이랑, không patchim → 랑.'],
                examples: [
                    { kr: '커피<b>와</b> 빵을 먹었어요.', vi: 'Tôi đã uống cà phê và ăn bánh mì.' },
                    { kr: '친구<b>하고</b> 같이 갔어요.', vi: 'Tôi đã đi cùng bạn.' },
                    { kr: '사과<b>랑</b> 바나나 주세요.', vi: 'Cho tôi táo và chuối.' }
                ],
                notes: ['와/과 formal/văn viết, 하고 trung tính, (이)랑 thân mật/khẩu ngữ.']
            },
            {
                name: '도', meaning: 'Cũng / Cũng vậy', level: 1,
                theory: ['<b>도</b> gắn sau danh từ, nghĩa là "cũng, cũng vậy".', 'Thay thế 은/는, 이/가, 을/를 khi cần thêm nghĩa "cũng".'],
                examples: [
                    { kr: '저<b>도</b> 학생이에요.', vi: 'Tôi cũng là học sinh.' },
                    { kr: '이것<b>도</b> 주세요.', vi: 'Cho tôi cái này nữa.' },
                    { kr: '한국어<b>도</b> 할 수 있어요.', vi: 'Tôi cũng có thể nói tiếng Hàn.' }
                ],
                notes: ['도 thay thế các trợ từ 은/는, 이/가, 을/를: 나<b>는</b> → 나<b>도</b>. Nhưng giữ nguyên 에, 에서: 학교에<b>도</b> 가요.']
            },
            {
                name: '부터 ~ 까지', meaning: 'Từ ~ Đến', level: 1,
                theory: ['<b>부터</b> = từ (điểm bắt đầu), <b>까지</b> = đến (điểm kết thúc).', 'Dùng cho cả thời gian và địa điểm.'],
                examples: [
                    { kr: '9시<b>부터</b> 6시<b>까지</b> 일해요.', vi: 'Tôi làm việc từ 9 giờ đến 6 giờ.' },
                    { kr: '서울<b>부터</b> 부산<b>까지</b> 얼마나 걸려요?', vi: 'Từ Seoul đến Busan mất bao lâu?' },
                    { kr: '월요일<b>부터</b> 금요일<b>까지</b> 수업이 있어요.', vi: 'Tôi có lớp từ thứ Hai đến thứ Sáu.' }
                ],
                notes: ['까지 có thể dùng một mình: 5시<b>까지</b> 오세요 (Hãy đến trước 5 giờ).', '부터 thường đi với 에서 khi chỉ nơi chốn: 여기<b>에서부터</b>. Khi chỉ địa điểm, 서울에서 부산까지 và 서울부터 부산까지 đều đúng nhưng 에서까지 nhấn mạnh điểm xuất phát cụ thể hơn.']
            },
            {
                name: '의', meaning: 'Của (sở hữu)', level: 1,
                theory: ['<b>의</b> là trợ từ sở hữu, tương đương "của" trong tiếng Việt.', 'Phát âm: [에] trong hội thoại.'],
                examples: [
                    { kr: '한국<b>의</b> 문화', vi: 'Văn hóa của Hàn Quốc' },
                    { kr: '저<b>의</b> 가방이에요.', vi: 'Đây là cặp của tôi.' },
                    { kr: '선생님<b>의</b> 책', vi: 'Sách của thầy/cô' }
                ],
                notes: ['Trong hội thoại thường lược bỏ 의: 우리 학교 (trường của chúng ta) thay vì 우리의 학교.', '저의 → 제, 나의 → 내 (dạng rút gọn thường dùng).']
            },
            {
                name: '에게/한테', meaning: 'Cho ai / Đối với ai', level: 1,
                theory: ['<b>에게</b> (văn viết) / <b>한테</b> (khẩu ngữ): chỉ đối tượng nhận hành động (cho ai, với ai).', 'Chỉ dùng với người/động vật.'],
                examples: [
                    { kr: '친구<b>에게</b> 선물을 줬어요.', vi: 'Tôi đã tặng quà cho bạn.' },
                    { kr: '동생<b>한테</b> 전화했어요.', vi: 'Tôi đã gọi điện cho em.' }
                ],
                notes: ['에게서/한테서 = từ (ai đó): 친구<b>한테서</b> 들었어요 (Tôi nghe từ bạn).', 'Kính ngữ: 에게 → <b>께</b>: 선생님<b>께</b> 드렸어요.']
            },
            {
                name: '보다', meaning: 'Hơn (so sánh)', level: 2,
                theory: ['<b>보다</b> gắn sau danh từ, dùng để so sánh: "hơn".'],
                examples: [
                    { kr: '여름<b>보다</b> 겨울이 좋아요.', vi: 'Tôi thích mùa đông hơn mùa hè.' },
                    { kr: '버스<b>보다</b> 지하철이 빨라요.', vi: 'Tàu điện ngầm nhanh hơn xe buýt.' }
                ],
                notes: ['Thường đi với 더 (more): 커피<b>보다</b> 차를 <b>더</b> 좋아해요.']
            },
            {
                name: '처럼', meaning: 'Như / Giống như', level: 1,
                theory: ['<b>처럼</b> gắn sau danh từ, nghĩa là "như, giống như, tương tự như".', 'Dùng để so sánh hai đối tượng có tính chất giống nhau.'],
                examples: [
                    { kr: '배우<b>처럼</b> 생겼어요.', vi: 'Trông giống diễn viên.' },
                    { kr: '친구<b>처럼</b> 편해요.', vi: 'Thoải mái như bạn bè.' },
                    { kr: '눈<b>처럼</b> 하얘요.', vi: 'Trắng như tuyết.' }
                ],
                notes: ['처럼 ≈ 같이 khi diễn đạt sự tương đồng: 친구처럼 = 친구같이 (như người bạn). Lưu ý: (이)랑 같이 = "cùng với ai đó" (together with), hoàn toàn khác nghĩa với 처럼.', 'Dùng với động/tính từ: -는 것처럼, -(으)ㄴ 것처럼.']
            },
            {
                name: '만', meaning: 'Chỉ / Chỉ có', level: 1,
                theory: ['<b>만</b> = chỉ, chỉ có. Thay thế 은/는, 이/가, 을/를.'],
                examples: [
                    { kr: '물<b>만</b> 주세요.', vi: 'Cho tôi nước thôi.' },
                    { kr: '주말에<b>만</b> 시간이 있어요.', vi: 'Tôi chỉ có thời gian vào cuối tuần.' }
                ],
                notes: ['만 thay 은/는, 이/가, 을/를 nhưng kết hợp với 에, 에서: 집에서<b>만</b> 공부해요.']
            },
            {
                name: '마다', meaning: 'Mỗi / Mọi', level: 2,
                theory: ['<b>마다</b> = mỗi, mọi, tất cả. Gắn sau danh từ.'],
                examples: [
                    { kr: '날<b>마다</b> 운동해요.', vi: 'Mỗi ngày tôi tập thể dục.' },
                    { kr: '주말<b>마다</b> 등산을 가요.', vi: 'Mỗi cuối tuần tôi đi leo núi.' }
                ],
                notes: ['날마다 = 매일, 해마다 = 매년. 마다 ≈ 매~.']
            },
            {
                name: '밖에', meaning: 'Chỉ có / Ngoài ra không', level: 2,
                theory: ['<b>밖에</b> = chỉ có, ngoài ra không. Luôn đi với phủ định.'],
                examples: [
                    { kr: '돈이 천 원<b>밖에</b> 없어요.', vi: 'Chỉ có 1000 won thôi.' },
                    { kr: '한국어<b>밖에</b> 못 해요.', vi: 'Chỉ biết tiếng Hàn thôi.' }
                ],
                notes: ['Luôn đi với 없다, 못, 안: 밖에 + phủ định.', '만 ≈ 밖에 nhưng 만 không cần phủ định: 물만 주세요 = 물밖에 안 마셔요.']
            },
            {
                name: '(이)나', meaning: 'Hoặc / Hay là / Tận', level: 1,
                theory: ['<b>(이)나</b> có 3 nghĩa: (1) Hoặc: 커피나 차. (2) Khoảng/tận (số lượng lớn): 세 시간이나. (3) Đại loại: 영화나 봅시다.'],
                examples: [
                    { kr: '커피<b>나</b> 차 드세요.', vi: 'Uống cà phê hoặc trà nhé.' },
                    { kr: '세 시간<b>이나</b> 기다렸어요.', vi: 'Đã chờ tận 3 tiếng.' },
                    { kr: '영화<b>나</b> 봅시다.', vi: 'Xem phim hay gì đi.' }
                ],
                notes: ['Có patchim → 이나, không patchim → 나.', 'Nghĩa "tận" nhấn mạnh số lượng nhiều/lâu hơn kỳ vọng.']
            },
            {
                name: '이다 / 아니다', meaning: 'Là / Không phải là', level: 1,
                theory: ['<b>이다</b> = là. <b>아니다</b> = không phải là.', '이다: có patchim → 이에요, không patchim → 예요. Formal: 입니다.', '아니다: 아니에요 / 아닙니다.'],
                examples: [
                    { kr: '저는 학생<b>이에요</b>.', vi: 'Tôi là học sinh.' },
                    { kr: '의사가 <b>아니에요</b>.', vi: 'Không phải là bác sĩ.' },
                    { kr: '이것은 책<b>이 아닙니다</b>.', vi: 'Đây không phải là sách.' }
                ],
                notes: ['이다 là copula (서술격조사), gắn trực tiếp vào danh từ để tạo vị ngữ — khác với trợ từ thông thường.', 'Quá khứ: 이었어요/였어요. 아니었어요.', 'Câu hỏi: 학생이에요? (có phải học sinh không?)']
            },
            {
                name: '께 / 께서', meaning: 'Cho (ai) / Chủ ngữ (kính ngữ)', level: 1,
                theory: ['<b>께</b> là dạng kính ngữ của 에게/한테 (cho ai/đối với ai).', '<b>께서</b> là dạng kính ngữ của 이/가 (trợ từ chủ ngữ).'],
                examples: [
                    { kr: '선생님<b>께</b> 전화를 드렸어요.', vi: 'Tôi đã gọi điện cho thầy giáo.' },
                    { kr: '할머니<b>께서</b> 주무십니다.', vi: 'Bà đang ngủ.' }
                ],
                notes: ['Dùng với người lớn tuổi, chức vụ cao.', 'Thường kết hợp với động từ kính ngữ (주무시다, 드시다, 주시다).']
            },
            {
                name: '에게서 / 한테서', meaning: 'Từ (ai đó)', level: 1,
                theory: ['<b>에게서 / 한테서</b> có nghĩa "từ ai đó", chỉ hành động xuất phát từ người/động vật.', '에게서 dùng trong văn viết/trang trọng, 한테서 dùng trong văn nói/thân mật.'],
                examples: [
                    { kr: '친구<b>한테서</b> 선물을 받았어요.', vi: 'Tôi nhận được quà từ bạn.' },
                    { kr: '선생님<b>에게서</b> 한국어를 배웠어요.', vi: 'Tôi đã học tiếng Hàn từ giáo viên.' }
                ],
                notes: ['Chỉ dùng cho người/động vật. Nơi chốn phải dùng 에서: 도서관에서 (✓) 도서관한테서 (✗).']
            }
        ]
    },
    {
        id: 'endings', icon: '📝', title: '종결어미 (Vĩ tố kết thúc câu)',
        description: 'Các đuôi câu thể hiện mức độ lịch sự và ý nghĩa',
        items: [
            {
                name: '-아/어요', meaning: 'Thể lịch sự thông thường', level: 1,
                theory: ['<b>-아/어요</b> là đuôi câu lịch sự thông thường (해요체), dùng trong hội thoại hàng ngày.', 'Nguyên âm cuối thân từ là ㅏ,ㅗ → <b>-아요</b>. Nguyên âm khác → <b>-어요</b>. 하다 → <b>해요</b>.'],
                conjugation: [
                    ['Thân từ có ㅏ,ㅗ', '-아요', '가다 → 가 + 아요 → <b>가요</b>'],
                    ['Thân từ có nguyên âm khác', '-어요', '먹다 → 먹 + 어요 → <b>먹어요</b>'],
                    ['하다 동사', '-해요', '공부하다 → <b>공부해요</b>'],
                    ['Kết thúc bằng ㅣ', '-여요/어요', '마시다 → <b>마셔요</b>']
                ],
                conjugationCols: ['Điều kiện', 'Đuôi', 'Ví dụ'],
                examples: [
                    { kr: '어디에 <b>가요</b>?', vi: 'Bạn đi đâu?' },
                    { kr: '한국어를 <b>공부해요</b>.', vi: 'Tôi học tiếng Hàn.' },
                    { kr: '이 음식이 <b>맛있어요</b>.', vi: 'Món ăn này ngon.' }
                ],
                notes: ['Rút gọn nguyên âm: 가 + 아요 → 가요 (không viết 가아요), 서 + 어요 → 서요.', '오다 → 와요 (ㅗ+ㅏ=ㅘ), 배우다 → 배워요 (ㅜ+ㅓ=ㅝ), 쓰다 → 써요 (ㅡ bỏ).']
            },
            {
                name: '-ㅂ니다/습니다', meaning: 'Thể trang trọng', level: 1,
                theory: ['<b>-ㅂ니다/습니다</b> là đuôi câu trang trọng (합니다체), dùng trong ngữ cảnh formal.', 'Không patchim → <b>-ㅂ니다</b>, có patchim → <b>-습니다</b>.', 'Câu hỏi: -ㅂ니까?/습니까?'],
                conjugation: [
                    ['Không patchim', '-ㅂ니다', '가다 → <b>갑니다</b>'],
                    ['Có patchim', '-습니다', '먹다 → <b>먹습니다</b>'],
                    ['ㄹ patchim', 'bỏ ㄹ + ㅂ니다', '살다 → <b>삽니다</b>']
                ],
                conjugationCols: ['Điều kiện', 'Đuôi', 'Ví dụ'],
                examples: [
                    { kr: '감사<b>합니다</b>.', vi: 'Xin cảm ơn.' },
                    { kr: '저는 학생<b>입니다</b>.', vi: 'Tôi là học sinh.' },
                    { kr: '어디에 <b>갑니까</b>?', vi: 'Bạn đi đâu ạ?' }
                ],
                notes: ['ㄹ patchim bị bỏ: 알다 → 압니다, 만들다 → 만듭니다.', 'Dùng trong: tin tức, phát biểu, quân đội, phỏng vấn, lần gặp đầu.']
            },
            {
                name: '-(으)세요', meaning: 'Kính ngữ / Mệnh lệnh lịch sự', level: 1,
                theory: ['<b>-(으)세요</b> là đuôi kính ngữ, dùng khi nói về/với người lớn tuổi hơn.', 'Cũng dùng làm câu mệnh lệnh lịch sự.', 'Không patchim → <b>-세요</b>, có patchim → <b>-으세요</b>.'],
                examples: [
                    { kr: '어머니가 요리하<b>세요</b>.', vi: 'Mẹ nấu ăn. (kính ngữ)' },
                    { kr: '여기 앉<b>으세요</b>.', vi: 'Xin hãy ngồi đây.' },
                    { kr: '안녕히 가<b>세요</b>.', vi: 'Tạm biệt. (với người đi)' }
                ],
                notes: ['ㄹ patchim bỏ ㄹ + 세요: 살다 → 사세요, 알다 → 아세요.', '드시다 thay 먹다, 주무시다 thay 자다 khi dùng kính ngữ.']
            },
            {
                name: '-(으)ㄹ까요?', meaning: 'Chúng ta ... nhé? / Có ... không nhỉ?', level: 2,
                theory: ['<b>-(으)ㄹ까요?</b> dùng để đề xuất, rủ rê hoặc hỏi ý kiến.', 'Không patchim → <b>-ㄹ까요</b>, có patchim → <b>-을까요</b>.'],
                examples: [
                    { kr: '같이 <b>갈까요</b>?', vi: 'Chúng ta cùng đi nhé?' },
                    { kr: '뭐 <b>먹을까요</b>?', vi: 'Chúng ta ăn gì nhỉ?' },
                    { kr: '창문을 <b>열까요</b>?', vi: 'Tôi mở cửa sổ nhé?' }
                ],
                notes: ['Ngôi thứ 1 + -(으)ㄹ까요 = xin phép: 제가 할까요? (Tôi làm nhé?)', 'Khác với -(으)ㅂ시다: -(으)ㄹ까요 hỏi ý kiến, -(으)ㅂ시다 đề nghị trực tiếp.']
            },
            {
                name: '-(으)ㅂ시다', meaning: 'Chúng ta hãy...', level: 1,
                theory: ['<b>-(으)ㅂ시다</b> dùng để rủ, đề nghị cùng làm gì đó (let\'s).', 'Không patchim → <b>-ㅂ시다</b>, có patchim → <b>-읍시다</b>.'],
                examples: [
                    { kr: '같이 <b>갑시다</b>.', vi: 'Chúng ta cùng đi nào.' },
                    { kr: '점심을 <b>먹읍시다</b>.', vi: 'Chúng ta ăn trưa nào.' }
                ],
                notes: ['Thể trang trọng. Thể thông thường dùng -아/어요 với ngữ điệu rủ rê, hoặc -(으)ㄹ까요.']
            },
            {
                name: '-지 마세요', meaning: 'Xin đừng...', level: 1,
                theory: ['<b>-지 마세요</b> = xin đừng làm gì. Gắn vào thân động từ.', 'Thể 반말: -지 마.'],
                examples: [
                    { kr: '여기서 사진을 찍<b>지 마세요</b>.', vi: 'Xin đừng chụp ảnh ở đây.' },
                    { kr: '걱정하<b>지 마세요</b>.', vi: 'Xin đừng lo lắng.' },
                    { kr: '늦<b>지 마세요</b>.', vi: 'Xin đừng đến muộn.' }
                ],
                notes: ['Chỉ dùng với động từ, không dùng với tính từ.', 'Thể formal: -지 마십시오.']
            },
            {
                name: '-(으)ㄹ게요', meaning: 'Tôi sẽ... (hứa)', level: 2,
                theory: ['<b>-(으)ㄹ게요</b> diễn tả ý định, lời hứa của người nói (ngôi 1).', 'Không patchim → <b>-ㄹ게요</b>, có patchim → <b>-을게요</b>.'],
                examples: [
                    { kr: '내일 <b>갈게요</b>.', vi: 'Ngày mai tôi sẽ đi (hứa).' },
                    { kr: '제가 <b>할게요</b>.', vi: 'Tôi sẽ làm (để tôi làm).' },
                    { kr: '전화 <b>할게요</b>.', vi: 'Tôi sẽ gọi điện nhé.' }
                ],
                notes: ['Chỉ dùng ngôi thứ 1 (저/나).', '-(으)ㄹ게요 vs -(으)ㄹ 거예요: -(으)ㄹ게요 = hứa/phản ứng theo người nghe, -(으)ㄹ 거예요 = kế hoạch cá nhân.'],
                comparison: '<b>-(으)ㄹ게요 vs -(으)ㄹ 거예요</b>: "비가 와요" → 우산을 가져<b>갈게요</b> (phản ứng lời bạn). 내일 여행을 <b>갈 거예요</b> (kế hoạch từ trước).'
            },
            {
                name: '-네요', meaning: '... nhỉ (ngạc nhiên)', level: 2,
                theory: ['<b>-네요</b> diễn tả sự ngạc nhiên, cảm thán khi nhận ra điều gì mới.', 'Gắn trực tiếp vào thân từ (동사/형용사).'],
                examples: [
                    { kr: '날씨가 좋<b>네요</b>.', vi: 'Thời tiết đẹp nhỉ.' },
                    { kr: '한국어를 잘하시<b>네요</b>.', vi: 'Bạn giỏi tiếng Hàn nhỉ.' },
                    { kr: '이 음식이 맛있<b>네요</b>.', vi: 'Món này ngon nhỉ.' }
                ],
                notes: ['Dùng khi nói về trải nghiệm trực tiếp, cảm nhận tại thời điểm nói.', 'Quá khứ: -았/었네요. Danh từ: 명사+(이)네요.']
            },
            {
                name: '-군요 / -구나', meaning: 'À ra vậy / Ồ thế à (nhận ra)', level: 2,
                theory: ['<b>-군요</b> diễn tả sự nhận ra, ngạc nhiên về điều vừa biết.', '-군요 (lịch sự), -구나 (thân mật). Gắn vào thân từ (동사/형용사).'],
                examples: [
                    { kr: '병원에 가려면 이 길로 쭉 가면 되는<b>군요</b>.', vi: 'À ra là cứ đi thẳng đường này để đến bệnh viện.' },
                    { kr: '한국 사람이<b>군요</b>.', vi: 'Ồ, hóa ra là người Hàn Quốc.' },
                    { kr: '오늘 쉬는<b>군요</b>.', vi: 'À hôm nay nghỉ à.' }
                ],
                notes: ['-군요 ≈ -네요: cùng diễn tả nhận ra, nhưng -군요 nhấn mạnh sự bất ngờ hơn.', '이다: (이)군요: 의사이군요 (ra là bác sĩ).', 'Quá khứ: -았/었군요.']
            },
            {
                name: '-(으)ㄹ래요', meaning: 'Tôi sẽ... / Bạn có muốn...?', level: 2,
                theory: ['<b>-(으)ㄹ래요</b> diễn tả ý chí/ý định của ngôi 1, hoặc hỏi ý kiến ngôi 2.', 'Không patchim → <b>-ㄹ래요</b>, có patchim → <b>-을래요</b>.'],
                conjugation: [['Không patchim', '-ㄹ래요', '가다 → <b>갈래요</b>'], ['Có patchim', '-을래요', '먹다 → <b>먹을래요</b>']],
                conjugationCols: ['Điều kiện', 'Đuôi', 'Ví dụ'],
                examples: [
                    { kr: '저는 이걸로 <b>할래요</b>.', vi: 'Tôi sẽ chọn cái này.' },
                    { kr: '같이 <b>갈래요</b>?', vi: 'Bạn có muốn đi cùng không?' },
                    { kr: '이걸로 계산하실<b>래요</b>?', vi: 'Anh/chị muốn thanh toán bằng cái này không?' }
                ],
                notes: ['-(으)ㄹ래요 (ngôi 1) = ý định chủ quan. -(으)ㄹ래요? (ngôi 2) = hỏi ý kiến thân mật hơn -(으)ㄹ까요?.', 'Chỉ dùng với động từ.']
            },
            {
                name: '-(으)십시오', meaning: 'Xin hãy... (trang trọng)', level: 2,
                theory: ['<b>-(으)십시오</b> là thể mệnh lệnh trang trọng nhất, dùng trong văn bản, thông báo, phục vụ khách hàng.', 'Không patchim → <b>-십시오</b>, có patchim → <b>-으십시오</b>.'],
                examples: [
                    { kr: '또 놀러 오<b>십시오</b>.', vi: 'Xin hãy ghé lại chơi.' },
                    { kr: '안으로 들어오<b>십시오</b>.', vi: 'Xin mời vào trong.' },
                    { kr: '잠시 기다려 주<b>십시오</b>.', vi: 'Xin vui lòng chờ một chút.' }
                ],
                notes: ['Mức độ lịch sự: -(으)십시오 > -(으)세요 > -(으)ㅂ시다 > -아/어요.', 'Thường gặp trong thông báo, khách sạn, nhà hàng, phục vụ.']
            },
            {
                name: '-(이)지요? / -(이)죠?', meaning: 'Phải không? / Đúng không?', level: 2,
                theory: ['<b>-(이)지요?</b> (rút gọn: -죠?) dùng để xác nhận điều người nói đã biết/đoán, tương đương tag question.', 'Gắn vào thân từ (동사/형용사/이다).'],
                examples: [
                    { kr: '카드로 계산 되<b>지요</b>?', vi: 'Có thể thanh toán bằng thẻ phải không?' },
                    { kr: '오늘 날씨 좋<b>죠</b>?', vi: 'Hôm nay thời tiết đẹp nhỉ?' },
                    { kr: '한국 사람이<b>지요</b>?', vi: 'Bạn là người Hàn Quốc đúng không?' }
                ],
                notes: ['-지요? = -죠? (dạng rút gọn phổ biến hơn trong hội thoại).', 'Khác với -네요 (nhận ra), -지요? tìm kiếm sự đồng ý từ người nghe.']
            }
        ]
    },
    {
        id: 'tense', icon: '⏰', title: '시제 (Thì / Thời)',
        description: 'Cách chia động từ/tính từ theo thời gian',
        items: [
            {
                name: '-았/었- (과거)', meaning: 'Thì quá khứ', level: 1,
                theory: ['<b>-았/었-</b> đánh dấu hành động/trạng thái đã xảy ra trong quá khứ.', 'ㅏ,ㅗ → <b>-았-</b>, nguyên âm khác → <b>-었-</b>, 하다 → <b>했-</b>.'],
                conjugation: [
                    ['ㅏ,ㅗ', '-았-', '가다 → <b>갔어요</b>'],
                    ['Nguyên âm khác', '-었-', '먹다 → <b>먹었어요</b>'],
                    ['하다', '했-', '공부하다 → <b>공부했어요</b>']
                ],
                conjugationCols: ['Điều kiện', 'Đuôi', 'Ví dụ'],
                examples: [
                    { kr: '어제 영화를 <b>봤어요</b>.', vi: 'Hôm qua tôi đã xem phim.' },
                    { kr: '아침을 <b>먹었어요</b>.', vi: 'Tôi đã ăn sáng.' },
                    { kr: '작년에 한국에 <b>갔어요</b>.', vi: 'Năm ngoái tôi đã đi Hàn Quốc.' }
                ],
                notes: ['Rút gọn tương tự -아/어요: 오다 → 왔어요, 마시다 → 마셨어요, 쓰다 → 썼어요.', '이다 (là) → 이었어요/였어요: 학생이었어요 (đã là học sinh).']
            },
            {
                name: '-(으)ㄹ 거예요', meaning: 'Thì tương lai (kế hoạch)', level: 1,
                theory: ['<b>-(으)ㄹ 거예요</b> diễn tả kế hoạch, dự định hoặc phỏng đoán tương lai.', 'Không patchim → <b>-ㄹ 거예요</b>, có patchim → <b>-을 거예요</b>.'],
                conjugation: [
                    ['Không patchim', '-ㄹ 거예요', '가다 → <b>갈 거예요</b>'],
                    ['Có patchim', '-을 거예요', '먹다 → <b>먹을 거예요</b>'],
                    ['ㄹ patchim', '-ㄹ 거예요', '만들다 → <b>만들 거예요</b>']
                ],
                conjugationCols: ['Điều kiện', 'Đuôi', 'Ví dụ'],
                examples: [
                    { kr: '내일 친구를 <b>만날 거예요</b>.', vi: 'Ngày mai tôi sẽ gặp bạn.' },
                    { kr: '주말에 뭐 <b>할 거예요</b>?', vi: 'Cuối tuần bạn sẽ làm gì?' },
                    { kr: '내년에 한국에 <b>갈 거예요</b>.', vi: 'Năm sau tôi sẽ đi Hàn Quốc.' }
                ],
                notes: ['Ngôi 1: kế hoạch. Ngôi 2/3: phỏng đoán.', 'Formal: -(으)ㄹ 겁니다.']
            },
            {
                name: '-겠-', meaning: 'Sẽ / Chắc là (phỏng đoán)', level: 2,
                theory: ['<b>-겠-</b> diễn tả ý chí mạnh mẽ (ngôi 1) hoặc phỏng đoán (ngôi 2/3).', 'Gắn trực tiếp vào thân từ: 동사/형용사 + 겠 + 어요/습니다.'],
                examples: [
                    { kr: '알<b>겠</b>습니다.', vi: 'Tôi hiểu rồi ạ.' },
                    { kr: '내일 비가 오<b>겠</b>어요.', vi: 'Chắc ngày mai trời sẽ mưa.' },
                    { kr: '맛있<b>겠</b>어요!', vi: 'Chắc là ngon lắm!' },
                    { kr: '피곤하시<b>겠</b>어요.', vi: 'Chắc anh/chị mệt lắm.' }
                ],
                notes: ['-겠- mang tính phỏng đoán chủ quan, -(으)ㄹ 거예요 mang tính kế hoạch/dự đoán khách quan hơn.', 'Các cụm cố định: 알겠습니다 (tôi hiểu), 모르겠어요 (tôi không biết).']
            },
            {
                name: '-고 있다', meaning: 'Đang làm (tiến hành)', level: 1,
                theory: ['<b>-고 있다</b> diễn tả hành động đang diễn ra (progressive/continuous).', 'Gắn vào thân động từ: 동사 + 고 있다.'],
                examples: [
                    { kr: '지금 밥을 <b>먹고 있어요</b>.', vi: 'Bây giờ tôi đang ăn cơm.' },
                    { kr: '음악을 <b>듣고 있어요</b>.', vi: 'Tôi đang nghe nhạc.' },
                    { kr: '친구를 <b>기다리고 있어요</b>.', vi: 'Tôi đang chờ bạn.' }
                ],
                notes: ['Chỉ dùng với động từ, không dùng với tính từ.', 'Với 입다, 쓰다, 신다 (mặc, đội, đi giày): -고 있다 = trạng thái đang mặc/đội/đi.', 'Quá khứ: -고 있었어요 (đã đang làm).'],
                special: ['모자를 쓰고 있어요 = đang đội mũ (trạng thái), KHÔNG phải hành động đang đội.']
            }
        ]
    },
    {
        id: 'connectors', icon: '🔗', title: '연결어미 (Vĩ tố liên kết)',
        description: 'Các đuôi nối hai mệnh đề/câu lại với nhau',
        items: [
            {
                name: '-고', meaning: 'Và / Rồi (liệt kê, nối tiếp)', level: 1,
                theory: ['<b>-고</b> nối hai hành động/trạng thái, nghĩa "và" hoặc "rồi".', 'Gắn trực tiếp vào thân từ. Không chia theo nguyên âm.'],
                examples: [
                    { kr: '아침을 <b>먹고</b> 학교에 가요.', vi: 'Tôi ăn sáng rồi đi học.' },
                    { kr: '이 방은 <b>크고</b> 밝아요.', vi: 'Phòng này rộng và sáng.' },
                    { kr: '음악을 <b>듣고</b> 책을 읽어요.', vi: 'Tôi nghe nhạc và đọc sách.' }
                ],
                notes: ['-고 không thay đổi theo thì. Thì được chia ở vế sau: 밥을 먹고 갔어요.', 'Liệt kê (và): 크고 예뻐요. Nối tiếp (rồi): 씻고 자요.'],
                comparison: '<b>-고 vs -아/어서</b>: -고 đơn thuần liệt kê/nối tiếp. -아/어서 có quan hệ nhân quả hoặc trình tự bắt buộc.'
            },
            {
                name: '-지만', meaning: 'Nhưng / Tuy nhưng', level: 1,
                theory: ['<b>-지만</b> = nhưng, mặc dù. Nối hai vế đối lập.', 'Gắn trực tiếp vào thân từ.'],
                examples: [
                    { kr: '비싸<b>지만</b> 맛있어요.', vi: 'Đắt nhưng ngon.' },
                    { kr: '한국어는 어렵<b>지만</b> 재미있어요.', vi: 'Tiếng Hàn khó nhưng thú vị.' },
                    { kr: '열심히 공부했<b>지만</b> 시험에 떨어졌어요.', vi: 'Đã học chăm chỉ nhưng trượt thi.' }
                ],
                notes: ['Có thể chia thì ở vế trước: 갔지만, 먹었지만.', 'Tương đương: 그렇지만, 하지만 (liên từ đầu câu).']
            },
            {
                name: '-(으)면', meaning: 'Nếu / Khi (điều kiện)', level: 1,
                theory: ['<b>-(으)면</b> = nếu, khi. Diễn tả điều kiện hoặc giả định.', 'Không patchim → <b>-면</b>, có patchim → <b>-으면</b>.'],
                examples: [
                    { kr: '시간이 있<b>으면</b> 같이 가요.', vi: 'Nếu có thời gian thì đi cùng nhé.' },
                    { kr: '비가 오<b>면</b> 집에 있을 거예요.', vi: 'Nếu trời mưa thì tôi sẽ ở nhà.' },
                    { kr: '열심히 공부하<b>면</b> 잘할 수 있어요.', vi: 'Nếu học chăm chỉ thì có thể làm tốt.' }
                ],
                notes: ['Không dùng -았/었- ở vế trước (trừ trường hợp đặc biệt): 봄이 오면 (✓), 봄이 왔으면 (= ước gì).', 'ㄹ patchim bỏ ㄹ + 면: 살다 → 살면, 알다 → 알면.'],
                special: ['-(으)면 되다 = chỉ cần ... là được: 내일까지 하면 돼요.', '-(으)면 좋겠다 = ước gì/giá mà: 비가 안 오면 좋겠어요.']
            },
            {
                name: '-아/어서', meaning: 'Vì / Nên / Rồi', level: 1,
                theory: ['<b>-아/어서</b> có 2 nghĩa: (1) Nguyên nhân/lý do "vì, nên". (2) Trình tự "rồi, sau đó".', 'Chia theo nguyên âm: ㅏ,ㅗ → -아서, khác → -어서, 하다 → 해서.'],
                examples: [
                    { kr: '배가 아파<b>서</b> 병원에 갔어요.', vi: 'Vì đau bụng nên đã đi bệnh viện.' },
                    { kr: '만나<b>서</b> 반갑습니다.', vi: 'Rất vui được gặp bạn.' },
                    { kr: '시장에 가<b>서</b> 과일을 샀어요.', vi: 'Tôi đi chợ rồi mua trái cây.' }
                ],
                notes: ['KHÔNG chia thì ở vế -아/어서: 아파서 갔어요 (✓), 아팠어서 갔어요 (✗).', 'KHÔNG dùng với mệnh lệnh/đề nghị khi chỉ lý do (dùng -(으)니까 thay).'],
                comparison: '<b>-아/어서 vs -(으)니까</b>: -아/어서 không dùng với mệnh lệnh/đề nghị. -(으)니까 dùng được: 비가 오니까 우산을 가져가세요 (✓), 비가 와서 우산을 가져가세요 (✗).'
            },
            {
                name: '-(으)니까', meaning: 'Vì (lý do mạnh)', level: 2,
                theory: ['<b>-(으)니까</b> = vì, bởi vì. Nhấn mạnh lý do, dùng được với mệnh lệnh/đề nghị.', 'Không patchim → <b>-니까</b>, có patchim → <b>-으니까</b>.'],
                examples: [
                    { kr: '비가 오<b>니까</b> 우산을 가져가세요.', vi: 'Vì trời mưa nên hãy mang ô.' },
                    { kr: '시간이 없<b>으니까</b> 빨리 가요.', vi: 'Vì không có thời gian nên đi nhanh.' },
                    { kr: '맛있<b>으니까</b> 많이 드세요.', vi: 'Vì ngon nên hãy ăn nhiều nhé.' }
                ],
                notes: ['Có thể chia thì: 먹었으니까, 갔으니까.', 'Dùng khi vế sau là mệnh lệnh, đề nghị, rủ rê.']
            },
            {
                name: '-(으)ㄹ 때', meaning: 'Khi / Lúc', level: 1,
                theory: ['<b>-(으)ㄹ 때</b> = khi, lúc. Chỉ thời điểm.', 'Không patchim → <b>-ㄹ 때</b>, có patchim → <b>-을 때</b>.'],
                examples: [
                    { kr: '시간이 있<b>을 때</b> 운동해요.', vi: 'Khi có thời gian tôi tập thể dục.' },
                    { kr: '어렸<b>을 때</b> 한국에 살았어요.', vi: 'Lúc nhỏ tôi đã sống ở Hàn Quốc.' },
                    { kr: '밥을 먹<b>을 때</b> 전화가 왔어요.', vi: 'Lúc đang ăn cơm thì có điện thoại đến.' }
                ],
                notes: ['Quá khứ ở vế trước: -았/었을 때: 어렸을 때 (khi còn nhỏ).', 'Hiện tại: -ㄹ 때 / 과거: -았/었을 때.']
            },
            {
                name: '-기 전에', meaning: 'Trước khi', level: 1,
                theory: ['<b>-기 전에</b> = trước khi. Gắn vào thân động từ.'],
                examples: [
                    { kr: '자<b>기 전에</b> 이를 닦아요.', vi: 'Trước khi ngủ tôi đánh răng.' },
                    { kr: '수업이 시작하<b>기 전에</b> 왔어요.', vi: 'Tôi đã đến trước khi lớp bắt đầu.' }
                ],
                notes: ['Không chia thì ở vế -기 전에. Thì chia ở vế sau.']
            },
            {
                name: '-(으)ㄴ 후에', meaning: 'Sau khi', level: 1,
                theory: ['<b>-(으)ㄴ 후에</b> = sau khi. 에 có thể lược bỏ.', 'Không patchim → <b>-ㄴ 후에</b>, có patchim → <b>-은 후에</b>.'],
                examples: [
                    { kr: '밥을 먹<b>은 후에</b> 커피를 마셔요.', vi: 'Sau khi ăn cơm tôi uống cà phê.' },
                    { kr: '졸업<b>한 후에</b> 뭐 할 거예요?', vi: 'Sau khi tốt nghiệp bạn sẽ làm gì?' }
                ],
                notes: ['Tương đương: -고 나서 (sau khi ... xong): 먹고 나서 갔어요.']
            },
            {
                name: '-는데/-(으)ㄴ데', meaning: 'Nhưng / Mà / Bối cảnh', level: 2,
                theory: ['<b>-는데/-(으)ㄴ데</b> nối hai vế, cung cấp bối cảnh, hoặc chuyển ý nhẹ nhàng.', 'Động từ → <b>-는데</b>. Tính từ: không patchim → -ㄴ데, có patchim → -은데. 이다 → 인데.'],
                conjugation: [
                    ['Động từ', '-는데', '먹다 → 먹<b>는데</b>'],
                    ['Tính từ (không patchim)', '-ㄴ데', '크다 → 큰데'],
                    ['Tính từ (có patchim)', '-은데', '작다 → 작<b>은데</b>'],
                    ['이다', '-인데', '학생<b>인데</b>']
                ],
                conjugationCols: ['Loại từ', 'Đuôi', 'Ví dụ'],
                examples: [
                    { kr: '배가 고픈<b>데</b> 같이 밥 먹을까요?', vi: 'Tôi đói bụng, ăn cơm cùng nhé?' },
                    { kr: '한국에 가고 싶<b>은데</b> 돈이 없어요.', vi: 'Tôi muốn đi Hàn Quốc nhưng không có tiền.' },
                    { kr: '저는 베트남 사람<b>인데</b> 한국어를 공부해요.', vi: 'Tôi là người Việt Nam, tôi học tiếng Hàn.' }
                ],
                notes: ['-는데 rất đa năng: bối cảnh, nhưng, giới thiệu, chuyển ý. Nghĩa phụ thuộc ngữ cảnh.', 'Quá khứ: -았/었는데.']
            },
            {
                name: '-(으)려고', meaning: 'Để / Định (mục đích)', level: 2,
                theory: ['<b>-(으)려고</b> = để, nhằm, định. Chỉ mục đích, ý định.', 'Không patchim → <b>-려고</b>, có patchim → <b>-으려고</b>.'],
                examples: [
                    { kr: '한국어를 배우<b>려고</b> 한국에 왔어요.', vi: 'Tôi đến Hàn Quốc để học tiếng Hàn.' },
                    { kr: '선물을 사<b>려고</b> 백화점에 갔어요.', vi: 'Tôi đi trung tâm thương mại để mua quà.' }
                ],
                notes: ['Chủ ngữ hai vế phải giống nhau.', 'Không dùng với mệnh lệnh/đề nghị ở vế sau (dùng -(으)러 thay).']
            },
            {
                name: '-(으)면서', meaning: 'Trong khi / Vừa ... vừa', level: 2,
                theory: ['<b>-(으)면서</b> = trong khi, vừa ... vừa. Hai hành động xảy ra đồng thời.', 'Không patchim → <b>-면서</b>, có patchim → <b>-으면서</b>.'],
                examples: [
                    { kr: '음악을 들<b>으면서</b> 공부해요.', vi: 'Tôi vừa nghe nhạc vừa học.' },
                    { kr: '밥을 먹<b>으면서</b> 이야기해요.', vi: 'Vừa ăn cơm vừa nói chuyện.' }
                ],
                notes: ['Chủ ngữ hai vế phải giống nhau.', 'Chỉ dùng với động từ.']
            },
            {
                name: '-거나', meaning: 'Hoặc / Hay là', level: 2,
                theory: ['<b>-거나</b> = hoặc, hay là. Liệt kê các lựa chọn.'],
                examples: [
                    { kr: '주말에 영화를 보<b>거나</b> 운동해요.', vi: 'Cuối tuần tôi xem phim hoặc tập thể dục.' },
                    { kr: '버스를 타<b>거나</b> 지하철을 타요.', vi: 'Tôi đi xe buýt hoặc tàu điện.' }
                ],
                notes: ['Có thể liệt kê 3+ vế: A-거나 B-거나 C해요.']
            },
            {
                name: '-아/어도', meaning: 'Dù / Mặc dù / Cho dù', level: 2,
                theory: ['<b>-아/어도</b> = dù, mặc dù, cho dù. Kết quả không bị ảnh hưởng bởi điều kiện.', '모음 ㅏ,ㅗ → -아도. Khác → -어도. 하다 → 해도.'],
                examples: [
                    { kr: '비가 와<b>도</b> 갈 거예요.', vi: 'Dù trời mưa tôi cũng sẽ đi.' },
                    { kr: '바빠<b>도</b> 운동해요.', vi: 'Dù bận tôi vẫn tập thể dục.' },
                    { kr: '많이 먹어<b>도</b> 안 살쪄요.', vi: 'Dù ăn nhiều cũng không béo.' }
                ],
                notes: ['아무리 + -아/어도: dù ... đến đâu: 아무리 바빠도 (dù bận đến đâu).', '≈ -지만 nhưng -아/어도 nhấn mạnh "dù thế vẫn..." hơn.']
            },
            {
                name: '-(으)러', meaning: 'Đi để (mục đích)', level: 1,
                theory: ['<b>-(으)러</b> = đi để, đến để. Dùng với 가다, 오다, 다니다.', 'Không patchim → -러, có patchim → -으러.'],
                examples: [
                    { kr: '밥 먹<b>으러</b> 가요.', vi: 'Đi ăn cơm.' },
                    { kr: '친구를 만나<b>러</b> 가요.', vi: 'Đi gặp bạn.' },
                    { kr: '한국어를 배우<b>러</b> 왔어요.', vi: 'Tôi đến để học tiếng Hàn.' }
                ],
                notes: ['Chỉ dùng với 가다/오다/다니다.', '≠ -(으)려고: -(으)러 + 이동, -(으)려고 + mọi động từ.']
            }
        ]
    },
    {
        id: 'expressions', icon: '💬', title: '표현 (Biểu hiện / Cấu trúc)',
        description: 'Các cấu trúc ngữ pháp diễn tả ý nghĩa đặc biệt',
        items: [
            {
                name: '-고 싶다', meaning: 'Muốn làm gì', level: 1,
                theory: ['<b>-고 싶다</b> = muốn (làm gì đó). Gắn vào thân động từ.', 'Ngôi 3: -고 싶어하다.'],
                examples: [
                    { kr: '한국에 가<b>고 싶어요</b>.', vi: 'Tôi muốn đi Hàn Quốc.' },
                    { kr: '뭐 먹<b>고 싶어요</b>?', vi: 'Bạn muốn ăn gì?' },
                    { kr: '친구가 만나<b>고 싶어해요</b>.', vi: 'Bạn ấy muốn gặp (ai đó).' }
                ],
                notes: ['Ngôi 1,2: -고 싶다. Ngôi 3: -고 싶어하다.', 'Phủ định: -고 싶지 않다: 가고 싶지 않아요.', 'Quá khứ: -고 싶었다: 가고 싶었어요 (đã muốn đi).']
            },
            {
                name: '-(으)ㄹ 수 있다/없다', meaning: 'Có thể / Không thể', level: 1,
                theory: ['<b>-(으)ㄹ 수 있다</b> = có thể. <b>-(으)ㄹ 수 없다</b> = không thể.', 'Không patchim → -ㄹ 수, có patchim → -을 수.'],
                examples: [
                    { kr: '한국어를 할 <b>수 있어요</b>.', vi: 'Tôi có thể nói tiếng Hàn.' },
                    { kr: '수영할 <b>수 없어요</b>.', vi: 'Tôi không thể bơi.' },
                    { kr: '내일 올 <b>수 있어요</b>?', vi: 'Ngày mai bạn có thể đến không?' }
                ],
                notes: ['= 못 + 동사: 할 수 없어요 = 못 해요.']
            },
            {
                name: '-아/어야 하다/되다', meaning: 'Phải làm gì', level: 2,
                theory: ['<b>-아/어야 하다</b> = phải, cần phải.', 'Chia -아/어 theo nguyên âm + 야 하다/되다.'],
                examples: [
                    { kr: '내일 일찍 일어나<b>야 해요</b>.', vi: 'Ngày mai phải dậy sớm.' },
                    { kr: '숙제를 해<b>야 돼요</b>.', vi: 'Phải làm bài tập.' },
                    { kr: '약을 먹어<b>야 해요</b>.', vi: 'Phải uống thuốc.' }
                ],
                notes: ['-아/어야 하다 = -아/어야 되다 (nghĩa giống nhau, 되다 thông dụng hơn trong khẩu ngữ).', 'Phủ định: 안 -아/어도 되다 = không cần: 안 가도 돼요.']
            },
            {
                name: '-(으)면 안 되다', meaning: 'Không được / Cấm', level: 2,
                theory: ['<b>-(으)면 안 되다</b> = không được phép, cấm.'],
                examples: [
                    { kr: '여기서 담배를 피우<b>면 안 돼요</b>.', vi: 'Không được hút thuốc ở đây.' },
                    { kr: '늦<b>으면 안 돼요</b>.', vi: 'Không được đến muộn.' }
                ],
                notes: ['Cho phép: -(으)면 되다 = được, chỉ cần: 내일 오면 돼요.', 'Xin phép: -아/어도 되다 = có được không: 들어가도 돼요?']
            },
            {
                name: '-아/어 주다', meaning: 'Làm cho ai', level: 1,
                theory: ['<b>-아/어 주다</b> = làm cho ai, giúp ai làm gì.', 'Yêu cầu lịch sự: -아/어 주세요.'],
                examples: [
                    { kr: '사진을 찍<b>어 주세요</b>.', vi: 'Xin hãy chụp ảnh (cho tôi).' },
                    { kr: '한국어를 가르쳐 <b>주세요</b>.', vi: 'Xin hãy dạy tiếng Hàn cho tôi.' },
                    { kr: '친구가 도와<b>줬어요</b>.', vi: 'Bạn đã giúp tôi.' }
                ],
                notes: ['주다 = cho/giúp. 아/어 주세요 = "xin hãy ... giúp".', 'Kính ngữ: -아/어 드리다: 도와 드릴까요? (Tôi giúp anh/chị nhé?)']
            },
            {
                name: '-아/어 보다', meaning: 'Thử làm', level: 2,
                theory: ['<b>-아/어 보다</b> = thử (làm gì đó).'],
                examples: [
                    { kr: '한번 먹<b>어 보세요</b>.', vi: 'Hãy thử ăn một lần.' },
                    { kr: '이 옷을 입<b>어 봐도</b> 돼요?', vi: 'Tôi thử mặc áo này được không?' },
                    { kr: '한국에 가 <b>봤어요</b>.', vi: 'Tôi đã từng đi Hàn Quốc.' }
                ],
                notes: ['Quá khứ -아/어 봤다 = đã từng: 먹어 봤어요 (đã từng ăn).', 'Liên quan: -(으)ㄴ 적이 있다/없다.']
            },
            {
                name: '-(으)ㄴ 적이 있다/없다', meaning: 'Đã từng / Chưa từng', level: 2,
                theory: ['<b>-(으)ㄴ 적이 있다</b> = đã từng. <b>-(으)ㄴ 적이 없다</b> = chưa từng.'],
                examples: [
                    { kr: '한국에 간 <b>적이 있어요</b>.', vi: 'Tôi đã từng đi Hàn Quốc.' },
                    { kr: '김치를 먹은 <b>적이 없어요</b>.', vi: 'Tôi chưa từng ăn kimchi.' }
                ],
                notes: ['= -아/어 본 적이 있다/없다: 가 본 적이 있어요.', 'Dùng -(으)ㄴ (quá khứ modifier) + 적.']
            },
            {
                name: '-(으)ㄹ 것 같다', meaning: 'Có vẻ / Hình như', level: 2,
                theory: ['<b>-(으)ㄹ 것 같다</b> = có vẻ, hình như, chắc là (phỏng đoán).', 'Hiện tại: -는 것 같다. Quá khứ: -(으)ㄴ 것 같다. Tương lai: -(으)ㄹ 것 같다.'],
                examples: [
                    { kr: '비가 올 <b>것 같아요</b>.', vi: 'Hình như sắp mưa.' },
                    { kr: '이 음식이 맛있는 <b>것 같아요</b>.', vi: 'Có vẻ món này ngon.' },
                    { kr: '어제 많이 먹은 <b>것 같아요</b>.', vi: 'Có vẻ hôm qua ăn nhiều.' }
                ],
                notes: ['Rất thông dụng để nói một cách nhẹ nhàng, không chắc chắn.']
            },
            {
                name: '-기로 하다', meaning: 'Quyết định làm gì', level: 2,
                theory: ['<b>-기로 하다</b> = quyết định (sẽ làm gì).'],
                examples: [
                    { kr: '내일 만나<b>기로 했어요</b>.', vi: 'Chúng tôi đã quyết định gặp nhau ngày mai.' },
                    { kr: '한국어를 배우<b>기로 했어요</b>.', vi: 'Tôi đã quyết định học tiếng Hàn.' }
                ],
                notes: ['Thường dùng ở quá khứ: -기로 했다 (đã quyết định).']
            },
            {
                name: '-(으)ㄴ 지', meaning: 'Đã bao lâu rồi (kể từ khi)', level: 2,
                theory: ['<b>-(으)ㄴ 지</b> diễn tả khoảng thời gian đã trôi qua kể từ khi một sự việc xảy ra.', 'Cấu trúc: 동사 + -(으)ㄴ 지 + thời gian + 되다/지나다.', 'Không patchim → <b>-ㄴ 지</b>, có patchim → <b>-은 지</b>.'],
                examples: [
                    { kr: '한국에 온 <b>지</b> 3일이 지났습니다.', vi: 'Đã 3 ngày kể từ khi tôi đến Hàn Quốc.' },
                    { kr: '이 가게가 생긴 <b>지</b> 얼마나 됐어요?', vi: 'Quán này mở được bao lâu rồi?' },
                    { kr: '한국어를 공부한 <b>지</b> 1년이 됐어요.', vi: 'Tôi đã học tiếng Hàn được 1 năm rồi.' }
                ],
                notes: ['Cấu trúc đầy đủ: -(으)ㄴ 지 + [thời gian] + 됐어요/지났어요.', '-(으)ㄴ 지 얼마나 됐어요? = Đã bao lâu rồi?']
            },
            {
                name: '-(으)ㄹ까 봐', meaning: 'Lo rằng / Sợ rằng', level: 2,
                theory: ['<b>-(으)ㄹ까 봐</b> = lo sợ rằng điều gì đó có thể xảy ra.', 'Không patchim → <b>-ㄹ까 봐</b>, có patchim → <b>-을까 봐</b>.'],
                examples: [
                    { kr: '늦을<b>까 봐</b> 빨리 왔어요.', vi: 'Sợ muộn nên đến sớm.' },
                    { kr: '현금이 모자랄<b>까 봐</b> 걱정했어요.', vi: 'Lo rằng tiền mặt không đủ.' },
                    { kr: '비가 올<b>까 봐</b> 우산을 가져왔어요.', vi: 'Sợ trời mưa nên mang ô.' }
                ],
                notes: ['Cấu trúc: -(으)ㄹ까 봐 + hành động đề phòng hoặc cảm xúc lo lắng.', '≠ -(으)ㄹ까 하다 (đang nghĩ sẽ làm).']
            },
            {
                name: '-게 (trạng từ)', meaning: 'Làm cho... / Một cách... (trạng từ tính từ)', level: 2,
                theory: ['<b>-게</b> gắn vào thân tính từ, biến thành trạng từ bổ nghĩa động từ hoặc dùng với 하다 nghĩa "làm cho".', 'Tương đương "-ly" trong tiếng Anh hoặc "một cách ..." trong tiếng Việt.'],
                examples: [
                    { kr: '싸<b>게</b> 해 주세요.', vi: 'Xin hãy làm rẻ hơn / Bớt cho tôi.' },
                    { kr: '빠르<b>게</b> 걸어요.', vi: 'Đi bộ nhanh.' },
                    { kr: '예쁘<b>게</b> 포장해 주세요.', vi: 'Xin hãy gói đẹp cho tôi.' }
                ],
                notes: ['-게 하다 = khiến/làm cho: 웃<b>게</b> 해요 (làm cho cười).', '-게 되다 = trở nên (đã học riêng).', 'ㄹ bỏ: 멀다 → 멀<b>게</b> (không bỏ ㄹ vì gặp -게, không phải ㄴ/ㅂ/ㅅ).']
            },
            {
                name: '-는 게 좋겠다', meaning: 'Nên làm gì / Tốt hơn là', level: 2,
                theory: ['<b>-는 게 좋겠다</b> = nên, tốt hơn nên. Đưa ra lời khuyên hoặc đề nghị.', 'Cấu trúc: 동사 + -는 게 좋겠어요.'],
                examples: [
                    { kr: '빨리 가<b>는 게 좋겠어요</b>.', vi: 'Tốt hơn nên đi nhanh thôi.' },
                    { kr: '병원에 가<b>는 게 좋겠어요</b>.', vi: 'Bạn nên đi bệnh viện.' },
                    { kr: '지금 출발하<b>는 게 좋겠어요</b>.', vi: 'Tốt nhất là xuất phát ngay bây giờ.' }
                ],
                notes: ['≈ -는 게 좋아요 (nhẹ hơn) vs -는 게 좋겠어요 (nhấn mạnh đề xuất hơn).', 'Dạng câu hỏi: 가는 게 좋을까요? (Tôi nên đi không nhỉ?)']
            },
            {
                name: '-았/었으면 좋겠다', meaning: 'Ước gì / Giá mà', level: 2,
                theory: ['<b>-았/었으면 좋겠다</b> diễn tả mong muốn, ước nguyện về điều chưa xảy ra.', 'ㅏ,ㅗ → -았으면 좋겠다. Khác → -었으면 좋겠다. 하다 → 했으면 좋겠다.'],
                examples: [
                    { kr: '빨리 배달이 왔<b>으면 좋겠어요</b>.', vi: 'Ước gì hàng giao đến sớm.' },
                    { kr: '날씨가 좋<b>았으면 좋겠어요</b>.', vi: 'Giá mà thời tiết đẹp.' },
                    { kr: '한국어를 잘 할 수 있<b>었으면 좋겠어요</b>.', vi: 'Ước gì có thể nói tiếng Hàn giỏi.' }
                ],
                notes: ['Về cơ bản dùng quá khứ để diễn tả điều kiện trái với thực tế.', '-(으)면 좋겠다 (hiện tại/tương lai) cũng thông dụng: 비가 안 오면 좋겠어요.']
            },
            {
                name: '-게 되다', meaning: 'Trở nên / Đến lúc phải', level: 2,
                theory: ['<b>-게 되다</b> = trở nên, đến lúc, đi đến chỗ. Sự thay đổi tự nhiên hoặc ngoài ý muốn.'],
                examples: [
                    { kr: '한국어를 잘하<b>게 됐어요</b>.', vi: 'Tôi đã trở nên giỏi tiếng Hàn.' },
                    { kr: '한국에 가<b>게 됐어요</b>.', vi: 'Tôi sẽ đi Hàn Quốc (hoàn cảnh dẫn đến).' },
                    { kr: '그 사람을 알<b>게 됐어요</b>.', vi: 'Tôi đã biết người đó (tình cờ).' }
                ],
                notes: ['Nhấn mạnh sự thay đổi không chủ đích.', 'Quá khứ: -게 됐다 (đã trở nên). Tương lai: -게 될 거예요.']
            },
            {
                name: '-기 때문에', meaning: 'Vì / Bởi vì', level: 2,
                theory: ['<b>-기 때문에</b> = vì, bởi vì. Nhấn mạnh nguyên nhân.', 'Formal hơn -아/어서, -(으)니까.'],
                examples: [
                    { kr: '바쁘<b>기 때문에</b> 못 갔어요.', vi: 'Vì bận nên không đi được.' },
                    { kr: '비가 오<b>기 때문에</b> 길이 막혀요.', vi: 'Vì trời mưa nên đường bị tắc.' }
                ],
                notes: ['명사 + 때문에: 비 때문에, 너 때문에.', 'Có thể chia thì: 바빴기 때문에 (vì đã bận).']
            },
            {
                name: '-(으)ㄹ까 하다', meaning: 'Đang nghĩ sẽ / Định sẽ', level: 2,
                theory: ['<b>-(으)ㄹ까 하다</b> = đang nghĩ sẽ, định sẽ. Kế hoạch chưa chắc chắn.'],
                examples: [
                    { kr: '내일 쉴<b>까 해요</b>.', vi: 'Tôi đang nghĩ ngày mai sẽ nghỉ.' },
                    { kr: '한국어를 공부할<b>까 해요</b>.', vi: 'Tôi đang nghĩ sẽ học tiếng Hàn.' }
                ],
                notes: ['Chỉ ngôi 1.', 'Ít chắc chắn hơn -(으)려고 하다.']
            },
            {
                name: '-(으)ㄹ 줄 알다/모르다', meaning: 'Biết/Không biết cách', level: 2,
                theory: ['<b>-(으)ㄹ 줄 알다</b> = biết cách, biết làm.', '<b>-(으)ㄹ 줄 모르다</b> = không biết cách.'],
                examples: [
                    { kr: '수영할 <b>줄 알아요</b>.', vi: 'Tôi biết bơi.' },
                    { kr: '운전할 <b>줄 몰라요</b>.', vi: 'Tôi không biết lái xe.' },
                    { kr: '한국어를 읽을 <b>줄 알아요</b>?', vi: 'Bạn biết đọc tiếng Hàn không?' }
                ],
                notes: ['Nghĩa 2: -(으)ㄴ/는 줄 알다 = tưởng rằng, biết rằng: 올 줄 알았어요 (tôi tưởng bạn đến).']
            },
            {
                name: '-기 위해(서)', meaning: 'Để / Nhằm mục đích', level: 2,
                theory: ['<b>-기 위해(서)</b> = để, nhằm mục đích. Formal hơn -(으)려고.'],
                examples: [
                    { kr: '건강하<b>기 위해서</b> 운동해요.', vi: 'Để khỏe mạnh nên tập thể dục.' },
                    { kr: '시험에 합격하<b>기 위해</b> 열심히 공부해요.', vi: 'Để đỗ thi nên học chăm chỉ.' }
                ],
                notes: ['명사 + 을/를 위해서: 건강을 위해서.', 'Formal, dùng trong văn viết và nói.']
            },
            {
                name: '-곤 하다', meaning: 'Thường / Hay (thói quen)', level: 2,
                theory: ['<b>-곤 하다</b> = thường, hay. Thói quen lặp đi lặp lại.'],
                examples: [
                    { kr: '주말에 등산을 하<b>곤 해요</b>.', vi: 'Cuối tuần tôi thường đi leo núi.' },
                    { kr: '어렸을 때 이 공원에서 놀<b>곤 했어요</b>.', vi: 'Hồi nhỏ tôi thường chơi ở công viên này.' }
                ],
                notes: ['= -곤 했다 (quá khứ): thói quen trong quá khứ.']
            }
        ]
    },
    {
        id: 'modifiers', icon: '✏️', title: '관형형 (Định ngữ / Modifier)',
        description: 'Biến đổi động/tính từ thành dạng bổ nghĩa cho danh từ',
        items: [
            {
                name: '-(으)ㄴ (tính từ/quá khứ)', meaning: 'Định ngữ hiện tại (tính từ) / quá khứ (động từ)', level: 2,
                theory: ['<b>Tính từ + -(으)ㄴ + 명사</b>: bổ nghĩa danh từ (hiện tại).', '<b>Động từ + -(으)ㄴ + 명사</b>: bổ nghĩa danh từ (quá khứ).', 'Không patchim → <b>-ㄴ</b>, có patchim → <b>-은</b>.'],
                examples: [
                    { kr: '<b>예쁜</b> 꽃', vi: 'Bông hoa đẹp (tính từ)' },
                    { kr: '<b>작은</b> 가방', vi: 'Cái túi nhỏ (tính từ)' },
                    { kr: '어제 <b>만난</b> 사람', vi: 'Người đã gặp hôm qua (động từ quá khứ)' },
                    { kr: '제가 <b>읽은</b> 책', vi: 'Cuốn sách tôi đã đọc' }
                ],
                notes: ['Tính từ: hiện tại dùng -(으)ㄴ. Động từ: quá khứ dùng -(으)ㄴ.', 'ㄹ patchim: bỏ ㄹ + ㄴ: 길다 → 긴, 멀다 → 먼.', 'ㅂ 불규칙: 춥다 → 추운, 덥다 → 더운.']
            },
            {
                name: '-는 (động từ hiện tại)', meaning: 'Định ngữ hiện tại (động từ)', level: 2,
                theory: ['<b>Động từ + -는 + 명사</b>: bổ nghĩa danh từ, diễn tả hành động đang/thường xảy ra.', 'Gắn trực tiếp vào thân từ. ㄹ patchim bỏ ㄹ.'],
                examples: [
                    { kr: '지금 <b>먹는</b> 음식', vi: 'Đồ ăn đang ăn bây giờ' },
                    { kr: '제가 <b>좋아하는</b> 노래', vi: 'Bài hát tôi thích' },
                    { kr: '한국에 <b>사는</b> 친구', vi: 'Bạn sống ở Hàn Quốc' }
                ],
                notes: ['Chỉ dùng với động từ, KHÔNG dùng với tính từ.', 'ㄹ patchim bỏ ㄹ: 살다 → 사는, 만들다 → 만드는.']
            },
            {
                name: '-(으)ㄹ (tương lai)', meaning: 'Định ngữ tương lai', level: 2,
                theory: ['<b>동사/형용사 + -(으)ㄹ + 명사</b>: bổ nghĩa danh từ, diễn tả tương lai/dự định.', 'Không patchim → <b>-ㄹ</b>, có patchim → <b>-을</b>.'],
                examples: [
                    { kr: '내일 <b>할</b> 일이 많아요.', vi: 'Có nhiều việc phải làm ngày mai.' },
                    { kr: '<b>마실</b> 것 주세요.', vi: 'Cho tôi đồ uống (thứ để uống).' },
                    { kr: '<b>갈</b> 곳이 없어요.', vi: 'Không có nơi nào để đi.' }
                ],
                notes: ['Thường dùng với 것, 곳, 때, 사람, 일...', 'ㄹ patchim giữ nguyên: 만들다 → 만들 것.']
            }
        ]
    },
    {
        id: 'negation', icon: '🚫', title: '부정 (Phủ định)',
        description: 'Các cách phủ định trong tiếng Hàn',
        items: [
            {
                name: '안 / -지 않다', meaning: 'Không (phủ định thường)', level: 1,
                theory: ['<b>안</b> đặt trước động/tính từ: phủ định ngắn.', '<b>-지 않다</b> gắn vào thân từ: phủ định dài.', 'Cả hai nghĩa giống nhau, -지 않다 formal hơn.'],
                examples: [
                    { kr: '<b>안</b> 가요.', vi: 'Tôi không đi.' },
                    { kr: '가<b>지 않아요</b>.', vi: 'Tôi không đi. (dài)' },
                    { kr: '<b>안</b> 예뻐요.', vi: 'Không đẹp.' },
                    { kr: '맛있<b>지 않아요</b>.', vi: 'Không ngon.' }
                ],
                notes: ['Với 하다 동사: 공부 안 해요 (✓), 안 공부해요 (✗). Tách 명사 và 하다.', '안 không dùng với 이다/아니다. Dùng 아니다 để phủ định 이다.'],
                special: ['아니다: 학생이 <b>아니에요</b> (không phải là học sinh) - phủ định danh từ.']
            },
            {
                name: '못 / -지 못하다', meaning: 'Không thể (bất khả năng)', level: 1,
                theory: ['<b>못</b> = không thể (do khả năng/hoàn cảnh).', '<b>-지 못하다</b> = dạng dài, formal hơn.'],
                examples: [
                    { kr: '오늘 <b>못</b> 가요.', vi: 'Hôm nay tôi không thể đi.' },
                    { kr: '수영하<b>지 못해요</b>.', vi: 'Tôi không biết bơi.' },
                    { kr: '매운 음식을 <b>못</b> 먹어요.', vi: 'Tôi không ăn được đồ cay.' }
                ],
                notes: ['Với 하다 동사: 운동 못 해요 (✓), 못 운동해요 (✗).', '못 = bất khả năng. 안 = lựa chọn không làm.'],
                comparison: '<b>안 vs 못</b>: 안 가요 = tôi không đi (lựa chọn). 못 가요 = tôi không thể đi (hoàn cảnh/khả năng).'
            }
        ]
    },
    {
        id: 'irregular', icon: '⚡', title: '불규칙 (Bất quy tắc)',
        description: 'Các dạng chia bất quy tắc thường gặp trong TOPIK I',
        items: [
            {
                name: 'ㅂ 불규칙', meaning: 'Bất quy tắc ㅂ', level: 1,
                theory: ['Tính từ/động từ có patchim <b>ㅂ</b>, khi gặp nguyên âm (-아/어, -으) → <b>ㅂ biến thành 우</b>.', 'Áp dụng: 춥다, 덥다, 어렵다, 쉽다, 맵다, 아름답다, 무겁다, 가볍다, 가깝다, 고맙다...'],
                conjugation: [
                    ['춥다 (lạnh)', '추워요', '추운'],
                    ['덥다 (nóng)', '더워요', '더운'],
                    ['어렵다 (khó)', '어려워요', '어려운'],
                    ['쉽다 (dễ)', '쉬워요', '쉬운'],
                    ['맵다 (cay)', '매워요', '매운']
                ],
                conjugationCols: ['Gốc', '아/어요', '-(으)ㄴ'],
                examples: [
                    { kr: '오늘 날씨가 <b>추워요</b>.', vi: 'Hôm nay thời tiết lạnh.' },
                    { kr: '이 문제가 <b>어려워요</b>.', vi: 'Bài toán này khó.' }
                ],
                notes: ['Ngoại lệ (quy tắc): 입다→입어요, 잡다→잡아요, 좁다→좁아요, 씹다→씹어요.', '돕다, 곱다 → 도와요, 고와요 (ㅂ → 오, không phải 우).']
            },
            {
                name: 'ㄷ 불규칙', meaning: 'Bất quy tắc ㄷ', level: 2,
                theory: ['Một số động từ có patchim <b>ㄷ</b>, khi gặp nguyên âm → <b>ㄷ biến thành ㄹ</b>.', 'Áp dụng: 듣다, 걷다, 묻다 (hỏi), 싣다, 깨닫다...'],
                conjugation: [
                    ['듣다 (nghe)', '들어요', '들은'],
                    ['걷다 (đi bộ)', '걸어요', '걸은'],
                    ['묻다 (hỏi)', '물어요', '물은']
                ],
                conjugationCols: ['Gốc', '아/어요', '-(으)ㄴ'],
                examples: [
                    { kr: '음악을 <b>들어요</b>.', vi: 'Tôi nghe nhạc.' },
                    { kr: '공원에서 <b>걸어요</b>.', vi: 'Tôi đi dạo trong công viên.' }
                ],
                notes: ['Ngoại lệ (quy tắc): 받다→받아요, 닫다→닫아요, 믿다→믿어요.', '묻다 (chôn) là quy tắc: 묻어요. 묻다 (hỏi) là bất quy tắc: 물어요.']
            },
            {
                name: 'ㅡ 불규칙', meaning: 'Bất quy tắc ㅡ', level: 1,
                theory: ['Thân từ kết thúc bằng <b>ㅡ</b>, khi gặp -아/어 → <b>bỏ ㅡ</b>, nhìn nguyên âm trước đó.', 'Nguyên âm trước là ㅏ,ㅗ → 아. Khác hoặc không có → 어.'],
                conjugation: [
                    ['쓰다 (viết/dùng)', '써요', '(ㅡ bỏ, không nguyên âm trước → 어)'],
                    ['크다 (lớn)', '커요', '(ㅡ bỏ → 어)'],
                    ['바쁘다 (bận)', '바빠요', '(ㅡ bỏ, trước là ㅏ → 아)'],
                    ['예쁘다 (đẹp)', '예뻐요', '(ㅡ bỏ → 어)'],
                    ['슬프다 (buồn)', '슬퍼요', '(ㅡ bỏ → 어)']
                ],
                conjugationCols: ['Gốc', '아/어요', 'Giải thích'],
                examples: [
                    { kr: '편지를 <b>써요</b>.', vi: 'Tôi viết thư.' },
                    { kr: '오늘 <b>바빠요</b>.', vi: 'Hôm nay bận.' }
                ],
                notes: ['Luôn xảy ra khi ㅡ gặp -아/어. Không có ngoại lệ.']
            },
            {
                name: 'ㄹ 불규칙', meaning: 'Bất quy tắc ㄹ', level: 1,
                theory: ['Thân từ có patchim <b>ㄹ</b>, khi gặp <b>ㄴ, ㅂ, ㅅ</b> → <b>bỏ ㄹ</b>.', 'Áp dụng: 살다, 알다, 만들다, 팔다, 놀다, 열다, 울다...'],
                conjugation: [
                    ['살다 (sống)', '-ㅂ니다 → 삽니다', '-는 → 사는'],
                    ['알다 (biết)', '-ㅂ니다 → 압니다', '-는 → 아는'],
                    ['만들다 (làm)', '-세요 → 만드세요', '-ㄴ → 만든']
                ],
                conjugationCols: ['Gốc', 'Ví dụ 1', 'Ví dụ 2'],
                examples: [
                    { kr: '서울에 <b>삽니다</b>.', vi: 'Tôi sống ở Seoul.' },
                    { kr: '이 노래를 <b>아는</b> 사람?', vi: 'Người biết bài hát này?' }
                ],
                notes: ['ㄹ bỏ trước ㄴ,ㅂ,ㅅ. Giữ nguyên trước các phụ âm khác: 알고, 알지만, 알면.', 'Đây là quy tắc âm vị chứ không phải bất quy tắc hoàn toàn.']
            },
            {
                name: '르 불규칙', meaning: 'Bất quy tắc 르', level: 2,
                theory: ['Thân từ kết thúc bằng <b>르</b>, khi gặp -아/어 → <b>르 → ㄹㄹ</b>.', 'Áp dụng: 모르다, 빠르다, 다르다, 부르다, 자르다...'],
                conjugation: [
                    ['모르다 (không biết)', '몰라요', ''],
                    ['빠르다 (nhanh)', '빨라요', ''],
                    ['다르다 (khác)', '달라요', ''],
                    ['부르다 (gọi/hát)', '불러요', '']
                ],
                conjugationCols: ['Gốc', '아/어요', ''],
                examples: [
                    { kr: '이름을 <b>몰라요</b>.', vi: 'Tôi không biết tên.' },
                    { kr: '지하철이 <b>빨라요</b>.', vi: 'Tàu điện ngầm nhanh.' }
                ],
                notes: ['르 trước ㅏ,ㅗ → ㄹ라, khác → ㄹ러: 부르다 → 불러요.']
            },
            {
                name: 'ㅎ 불규칙', meaning: 'Bất quy tắc ㅎ', level: 2,
                theory: ['Một số tính từ có patchim <b>ㅎ</b>, khi gặp nguyên âm → <b>bỏ ㅎ</b>.', 'Gặp -(으)ㄴ/ㄹ → thêm ㄴ/ㄹ trực tiếp. Gặp -아/어 → ㅎ+아=애, ㅎ+어=에.'],
                conjugation: [
                    ['노랗다 (vàng)', '노래요', '노란'],
                    ['빨갛다 (đỏ)', '빨개요', '빨간'],
                    ['하얗다 (trắng)', '하얘요', '하얀'],
                    ['까맣다 (đen)', '까매요', '까만']
                ],
                conjugationCols: ['Gốc', '아/어요', '-(으)ㄴ'],
                examples: [
                    { kr: '하늘이 <b>파래요</b>.', vi: 'Bầu trời xanh.' },
                    { kr: '<b>하얀</b> 눈이 와요.', vi: 'Tuyết trắng rơi.' }
                ],
                notes: ['Chỉ áp dụng với tính từ chỉ màu sắc và một số khác: 그렇다→그래요, 어떻다→어때요.', 'Ngoại lệ (quy tắc): 좋다→좋아요, 많다→많아요, 넣다→넣어요.']
            }
        ]
    },
    {
        id: 'honorific', icon: '👑', title: '존경어 & 기타 (Kính ngữ & Khác)',
        description: 'Kính ngữ, số đếm, và các quy tắc khác',
        items: [
            {
                name: '존경어 (Kính ngữ)', meaning: 'Hệ thống kính ngữ tiếng Hàn', level: 1,
                theory: ['Tiếng Hàn có hệ thống kính ngữ phức tạp, bao gồm:', '<b>주체 높임</b> (nâng chủ ngữ): thêm -(으)시- vào thân từ.', '<b>객체 높임</b> (nâng đối tượng): thay từ vựng (드리다 thay 주다).', '<b>상대 높임</b> (nâng người nghe): dùng -ㅂ니다, -아/어요, 반말.'],
                examples: [
                    { kr: '선생님이 오<b>셨</b>어요.', vi: 'Thầy/cô đã đến. (kính ngữ)' },
                    { kr: '할머니가 주무<b>세요</b>.', vi: 'Bà đang ngủ. (kính ngữ)' },
                    { kr: '어머니<b>께</b> 선물을 <b>드렸</b>어요.', vi: 'Tôi đã tặng quà cho mẹ. (kính ngữ)' }
                ],
                notes: ['Từ vựng kính ngữ quan trọng: 먹다→드시다/잡수시다, 자다→주무시다, 있다→계시다, 말하다→말씀하시다, 주다→드리다, 이름→성함, 나이→연세, 집→댁, 밥→진지.', 'ㄹ patchim bỏ ㄹ trước 시: 살다 → 사세요, 알다 → 아세요.'],
                special: ['Kính ngữ với 이다: -이에요 → -(이)시에요 / -(이)십니다.', '께서 thay 이/가 cho chủ ngữ kính trọng: 선생님<b>께서</b> 오셨어요.']
            },
            {
                name: '숫자 (Số đếm)', meaning: 'Hệ thống số Hàn-Hán', level: 1,
                theory: ['Tiếng Hàn có <b>2 hệ thống số</b>:', '<b>한자어 수 (Số Hán)</b>: 일,이,삼,사,오,육,칠,팔,구,십... Dùng cho: ngày tháng, tiền, số điện thoại, phút, tầng.', '<b>고유어 수 (Số thuần Hàn)</b>: 하나,둘,셋,넷,다섯,여섯,일곱,여덟,아홉,열... Dùng cho: giờ, tuổi (살), đơn vị đếm (개,명,마리...).'],
                examples: [
                    { kr: '<b>세</b> 시 <b>삼십</b> 분', vi: '3 giờ 30 phút (thuần Hàn + Hán)' },
                    { kr: '사과 <b>두</b> 개 주세요.', vi: 'Cho tôi 2 quả táo.' },
                    { kr: '<b>오</b>천 원이에요.', vi: '5000 won.' }
                ],
                notes: ['Số thuần Hàn đổi dạng trước đơn vị: 하나→한, 둘→두, 셋→세, 넷→네, 스물→스무.', 'Tuổi: 순 한국어 + 살: 스물한 살 (21 tuổi). Formal: 한자어 + 세: 이십일 세.']
            },
            {
                name: '단위명사 (Loại từ)', meaning: 'Các từ đếm/đơn vị', level: 1,
                theory: ['Tiếng Hàn dùng <b>loại từ (단위명사)</b> khi đếm, tương tự "con, cái, quyển" trong tiếng Việt.', 'Cấu trúc: 명사 + 숫자 + 단위명사.'],
                conjugation: [
                    ['개', 'Đồ vật chung', '사과 두 <b>개</b>'],
                    ['명/분', 'Người (분=kính ngữ)', '학생 세 <b>명</b>'],
                    ['마리', 'Động vật', '고양이 한 <b>마리</b>'],
                    ['권', 'Sách', '책 다섯 <b>권</b>'],
                    ['잔', 'Ly/tách', '커피 한 <b>잔</b>'],
                    ['병', 'Chai', '맥주 두 <b>병</b>'],
                    ['장', 'Tờ/tấm', '종이 세 <b>장</b>'],
                    ['켤레', 'Đôi (giày)', '신발 한 <b>켤레</b>'],
                    ['벌', 'Bộ (quần áo)', '옷 한 <b>벌</b>'],
                    ['대', 'Xe/máy', '차 한 <b>대</b>']
                ],
                conjugationCols: ['Loại từ', 'Dùng cho', 'Ví dụ'],
                examples: [
                    { kr: '커피 <b>두 잔</b> 주세요.', vi: 'Cho tôi 2 tách cà phê.' },
                    { kr: '학생이 <b>다섯 명</b> 있어요.', vi: 'Có 5 học sinh.' }
                ],
                notes: ['Loại từ dùng với số thuần Hàn: 한,두,세,네,다섯...', '번 (lần): 한 번, 두 번. 번째 (thứ tự): 첫 번째, 두 번째.']
            }
        ]
    }
];
