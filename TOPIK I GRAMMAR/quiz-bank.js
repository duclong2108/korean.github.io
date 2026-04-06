const QUIZ_BANK = {
    "이/가": [
        {
            q: "Điền trợ từ thích hợp vào chỗ trống:<br>비___ 옵니다.",
            options: ["가", "이", "는", "를"],
            ans: 0,
            explain: "비 (mưa) kết thúc bằng nguyên âm (không có patchim) nên đi với 가. Đây là hiện tượng tự nhiên nên dùng 이/가 thay vì 은/는."
        },
        {
            q: "Chọn câu viết đúng ngữ pháp:",
            options: ["동생가 학생입니다.", "동생이 학생입니다.", "동생를 학생입니다.", "동생은 학생가 입니다."],
            ans: 1,
            explain: "동생 có patchim (ㅇ) nên phải dùng 이. Đuôi câu là 입니다 nên học sinh (학생) gắn trực tiếp vào 입니다, không dùng thêm trợ từ."
        },
        {
            q: "Câu nào sau đây dùng sai trợ từ '이/가'?",
            options: ["날씨가 좋습니다.", "시간이 없습니다.", "내이 갈 거예요.", "친구가 많습니다."],
            ans: 2,
            explain: "내 (tôi) khi cộng với 가 sẽ biến thành 내가 chứ không phải 내이. Các trường hợp biến đổi đặc biệt: 나+가=내가, 저+가=제가, 너+가=네가, 누구+가=누가가(x) -> 누가."
        },
        {
            q: "Điền vào chỗ trống:<br>저___ 김민수입니다.",
            options: ["가", "이", "는", "를"],
            ans: 2,
            explain: "Câu giới thiệu bản thân thông thường dùng 저는 (저 + 는). 저는 김민수입니다 = Tôi là Kim Min Su. Mặc dù 제가 (저 + 가) đúng ngữ pháp, nhưng 이/가 mang sắc thái nhấn mạnh chủ ngữ, không phù hợp cho câu tự giới thiệu bình thường. Người Hàn 99% dùng 저는 trong trường hợp này."
        },
        {
            q: "Điền vào chỗ trống:<br>이름이 _____입니까?",
            options: ["누가", "무엇가", "무엇이", "무엇"],
            ans: 3,
            explain: "Cấu trúc đúng là 이름이 무엇입니까? (Tên là gì?). 무엇 (cái gì) đứng làm vị ngữ sau 이다 → 무엇입니까. Không cần thêm 이/가 vào 무엇 ở đây vì 무엇 đã là phần vị ngữ (무엇 + 입니까). Lưu ý: 무엇이 (무엇 + 이/가) dùng khi 무엇 là chủ ngữ, ví dụ: 무엇이 필요해요? (Cần cái gì?)"
        },
        {
            q: "Chọn cặp từ đúng để điền vào:<br>형___ 크고 동생___ 작아요.",
            options: ["가 - 은", "은 - 이", "이 - 이", "가 - 이"],
            ans: 2,
            explain: "형 có patchim (ㅇ) -> 형이. 동생 có patchim (ㅇ) -> 동생이. Lưu ý: 형은 크고 동생은 작아요 cũng đúng khi muốn nhấn mạnh sự so sánh/đối chiếu hai người. Dùng 이/가 khi đơn thuần nêu sự kiện mới, dùng 은/는 khi muốn đối chiếu rõ ràng hơn."
        },
        {
            q: "Khi chủ ngữ là đại từ nghi vấn '누구' (ai), ta kết hợp với '가' thành:",
            options: ["누구가", "누가", "누이", "누기"],
            ans: 1,
            explain: "Đây là trường hợp đặc biệt bắt buộc phải nhớ: 누구 + 가 = 누가."
        },
        {
            q: "Điền trợ từ:<br>연필___ 지우개___ 있습니다.",
            options: ["가 / 이", "이 / 가", "이 / 과", "과 / 이"],
            ans: 1,
            explain: "연필 (bút chì) có patchim ㄹ -> 이. 지우개 (cục tẩy) không có patchim -> 가."
        },
        {
            q: "Câu nào sau đây nhấn mạnh chủ thể hành động hơn?",
            options: ["저는 학생입니다.", "제가 학생입니다.", "저 학생입니다.", "나 학생입니다."],
            ans: 1,
            explain: "이/가 dùng để nhấn mạnh CHỦ NGỮ cụ thể (Chính TÔI là học sinh, không phải ai khác). Trong khi 은/는 nhấn mạnh vào phần vị ngữ phía sau."
        },
        {
            q: "Câu bẫy: Cấu trúc nào sau đây là CHUẨN khi so sánh?",
            options: ["저는 사과는 좋아하지만 수박가 안 좋아해요.", "제가 사과가 좋아하지만 수박가 안 좋아해요.", "저는 사과는 좋아하지만 수박은 안 좋아해요.", "제가 사과는 좋아하지만 수박이 안 좋아해요."],
            ans: 2,
            explain: "Khi SO SÁNH hoặc ĐỐI CHIẾU, bắt buộc phải dùng trợ từ 은/는 chứ không dùng 이/가. (Tôi thích táo NHƯNG không thích dưa hấu)."
        }
    ],
    "은/는": [
        {
            q: "Chức năng chính của 은/는 là gì?",
            options: ["Nhấn mạnh chủ ngữ mới.", "Đánh dấu chủ đề chung của câu hỏi hoặc so sánh/nhấn mạnh vế sau.", "Chỉ định địa điểm của hành động.", "Làm tân ngữ chịu tác động của hành động."],
            ans: 1,
            explain: "은/는 là trợ từ chủ đề. Chức năng chính là nêu lên chủ đề đang được nói đến, hoặc dùng để so sánh/đối chiếu hai sự vật."
        },
        {
            q: "Điền trợ từ:<br>선생님___ 한국 사람입니다.",
            options: ["는", "은", "이", "가"],
            ans: 1,
            explain: "선생님 (giáo viên) có patchim (ㅁ) nên đi với 은 thành 선생님은. (Giới thiệu thông tin: Giáo viên là người Hàn)."
        },
        {
            q: "Trong câu giới thiệu bản thân thông thường: 'Tôi là Nam', ta dùng cấu trúc nào?",
            options: ["내가 남입니다.", "내은 남입니다.", "제가 남입니다.", "저는 남입니다."],
            ans: 3,
            explain: "Khi tự giới thiệu 'Tôi là...', người Hàn thường dùng '저는... 입니다' thay vì '제가...'. (Dùng 은/는 để đưa bản thân làm chủ đề câu chuyện nhẹ nhàng)."
        },
        {
            q: "Điền và tìm lỗi bẫy:<br>커피___ 마시지만 차___ 안 마셔요.",
            options: ["를 / 를", "는 / 는", "가 / 가", "는 / 이"],
            ans: 1,
            explain: "Mặc dù cà phê và trà là TÂN NGỮ (bình thường đi với 을/를), nhưng vì trong câu có ý nghĩa SO SÁNH/ĐỐI LẬP (uống cà phê, nhưng không uống trà), ta PHẢI thay 을/를 bằng 은/는 để nhấn mạnh sự tương phản. -> 커피는 마시지만 차는 안 마셔요."
        },
        {
            q: "Từ '저' khi đi chung với '는' sẽ viết như thế nào?",
            options: ["제가", "저는", "제는", "저은"],
            ans: 1,
            explain: "저 + 는 = 저는 (Đại từ 저 (Tôi - kính trọng) không bị biến đổi khi kết hợp với 은/는, chỉ biến đổi khi kết hợp với 가)."
        },
        {
            q: "Cách chia nào sau đây SAI ngữ pháp?",
            options: ["책상는", "엄마는", "동생은", "오늘은"],
            ans: 0,
            explain: "책상 (cái bàn) có patchim (ㅇ), do đó phải đi với 은 -> 책상은 (chứ không phải 책상는)."
        },
        {
            q: "Đọc đoạn hội thoại sau:<br>A: 이름이 뭐예요? (Tên bạn là gì?)<br>B: 제 이름___ 린다입니다.<br>Điền từ phù hợp:",
            options: ["은", "는", "이", "가"],
            ans: 0,
            explain: "제 이름 (Tên của tôi). 이름 có patchim (ㅁ) nên đi với 은 -> 제 이름은."
        },
        {
            q: "Sự khác biệt rõ nhất giữa '은/는' và '이/가' trong câu miêu tả thời tiết là gì?",
            options: ["'비는 와요' biểu hiện thời tiết chung chung, '비가 와요' nhấn mạnh trời đang mưa ngay lúc này.", "Thời tiết bắt buộc phải dùng 은/는.", "Thời tiết bắt buộc phải dùng 이/가.", "Không có sự khác biệt nào."],
            ans: 0,
            explain: "Khi miêu tả một sự vật hiện tượng đang xảy ra trực tiếp trước mắt (ví dụ: Ai đó bất chợt nhìn ra cửa sổ thấy trời mưa), người Hàn dùng 이/가 -> 비가 옵니다/눈이 옵니다. Dùng 은/는 trong trường hợp này giống như đang so sánh (Mưa thì rơi, còn tuyết thì không rơi)."
        },
        {
            q: "Trong câu: '이것___ 연필입니다. 저것___ 볼펜입니다.' Chọn trợ từ đúng:",
            options: ["이 / 가", "은 / 은", "이 / 은", "는 / 는"],
            ans: 1,
            explain: "이것 (cái này), 저것 (cái kia) đều có patchim (ㅅ). Hơn nữa đây là câu so sánh đối chiếu hai vật, nên dùng 은/는. 이것은 ... 저것은..."
        },
        {
            q: "Chọn câu CÓ LỖI SAI:",
            options: ["오늘은 월요일입니다.", "저는 베트남 사람입니다.", "내 이름는 수진입니다.", "형은 대학생입니다."],
            ans: 2,
            explain: "내 이름 (tên tôi) => 이름 có patchim nên phải đi với 은 chứ không phải 는. Câu đúng là: 내 이름은 수진입니다."
        }
    ],
    "을/를": [
        {
            q: "Điền trợ từ thích hợp:<br>저는 한국어___ 공부해요.",
            options: ["가", "를", "는", "을"],
            ans: 1,
            explain: "한국어 (tiếng Hàn) kết thúc bằng nguyên âm 어 (không có patchim) -> dùng 를. Đây là tân ngữ chịu tác động của động từ 공부하다."
        },
        {
            q: "Chọn câu đúng ngữ pháp:",
            options: ["음악을 들어요.", "음악를 들어요.", "음악가 들어요.", "음악은 들어요."],
            ans: 0,
            explain: "음악 (âm nhạc) có patchim (ㄱ) -> dùng 을. Đây là hành động nghe nhạc."
        },
        {
            q: "Từ nào sau đây LUÔN BẮT BUỘC dùng chung với 을/를?",
            options: ["있다 / 없다", "가다 / 오다", "좋아하다 / 싫어하다", "춥다 / 덥다"],
            ans: 2,
            explain: "좋아하다 (thích), 싫어하다 (ghét) là động từ, bắt buộc đi với tân ngữ 을/를 (Ví dụ: 빵을 좋아해요). Lưu ý: 좋다/싫다 là tính từ nên đi với 이/가."
        },
        {
            q: "Trường hợp ngoại lệ: Câu nào sau đây DÙNG ĐÚNG tân ngữ 을/를?",
            options: ["버스를 타다", "버스에 타다", "버스가 타다", "버스로 타다"],
            ans: 0,
            explain: "Động từ 타다 (lên xe, đi xe) là động từ đặc biệt, danh từ phương tiện giao thông phía trước sẽ đi với 을/를. Ví dụ: 버스를 타다."
        },
        {
            q: "Điền vào chỗ trống:<br>동생이 밥___ 먹어요.",
            options: ["가", "이", "은", "을"],
            ans: 3,
            explain: "밥 có patchim -> 밥을. Câu này nghĩa là: Em trai đang ăn cơm."
        }
    ],
    "에": [
        {
            q: "Trợ từ '에' KHÔNG ĐƯỢC dùng sau từ chỉ thời gian nào dưới đây?",
            options: ["주말", "아침", "오늘", "내년"],
            ans: 2,
            explain: "Không dùng 에 sau các từ chỉ thời gian đặc biệt như: 오늘 (hôm nay), 어제 (hôm qua), 내일 (ngày mai), 지금 (bây giờ), 언제 (khi nào)."
        },
        {
            q: "Điền vào chỗ trống:<br>우리 9시___ 만나요.",
            options: ["에서", "에", "까지", "로"],
            ans: 1,
            explain: "Khi chỉ điểm thời gian xảy ra hành động (lúc 9 giờ), ta dùng 에."
        },
        {
            q: "Chọn câu viết đúng:",
            options: ["집에 밥을 먹어요.", "집에서 가요.", "집에 있어요.", "집에서 있어요."],
            ans: 2,
            explain: "에 dùng với các động từ chỉ sự tồn tại chân tay (있다, 없다, 많다, 적다) và phương hướng di chuyển (가다, 오다). Ở đây '있어요' phải đi với 에."
        },
        {
            q: "Điền vào chỗ trống chỉ phương hướng:<br>내일 한국___ 갑니다.",
            options: ["을", "를", "에서", "에"],
            ans: 3,
            explain: "Khi đi tới một điểm đến, ta dùng danh từ + 에 가다 (đi đến Hàn Quốc: 한국에 갑니다)."
        },
        {
            q: "Ngoài nghĩa thời gian và địa điểm, '에' trong câu '사과 한 개___ 천 원이에요' mang nghĩa gì?",
            options: ["Thời gian", "Đơn vị (cho mỗi)", "Điểm đến", "Sở hữu"],
            ans: 1,
            explain: "Trong cấu trúc chỉ giá cả, tỷ lệ, thì 에 có nghĩa là 'cho mỗi'. 한 개에 천 원 = 1000 won cho mỗi 1 cái."
        }
    ],
    "에서": [
        {
            q: "Sự khác biệt chính giữa '에' và '에서' khi đi với địa điểm là gì?",
            options: ["에 là nơi tĩnh, 에서 là nơi có hành động động xảy ra.", "Không có khác biệt.", "에 dùng cho quốc gia, 에서 dùng cho phòng ốc.", "에서 chỉ đi với động từ 가다/오다."],
            ans: 0,
            explain: "에서 đánh dấu địa điểm nhưng PHẢI có một hành động diễn ra tại đó (ví dụ: 공부하다, 먹다, 일하다). 에 chỉ sự tồn tại (있다/없다) hoặc điểm đến."
        },
        {
            q: "Điền vào chỗ trống:<br>식당___ 밥을 먹어요.",
            options: ["은", "에서", "에", "를"],
            ans: 1,
            explain: "'Ăn cơm' là một hành động động (밥을 먹다), nên địa điểm 식당 phải đi kèm 에서."
        },
        {
            q: "Câu nào sau đây bẫy dùng SAI ngữ pháp?",
            options: ["도서관에서 책을 읽어요.", "공원에서 산책해요.", "집에서 있어요.", "한국에서 한국어를 배워요."],
            ans: 2,
            explain: "집에서 있어요 dùng sai ngữ pháp vì 있다 (tồn tại/ở) luôn đi với 에 (nơi tĩnh), không đi với 에서. Câu đúng phải là: 집에 있어요. Ghi nhớ: 에서 đi kèm hành động động (공부하다, 먹다, 산책하다), còn 있다/없다 luôn cần 에."
        },
        {
            q: "Trong câu tính khoảng cách 'A에서 B까지', từ '에서' mang ý nghĩa gì?",
            options: ["Nơi hành động", "Từ (điểm xuất phát)", "Tại (thời điểm)", "Cho (đối tượng)"],
            ans: 1,
            explain: "Khi đi kèm với 까지 (đến), thì 에서 đóng vai trò là 'Từ' (chỉ điểm xuất phát về không gian). Ví dụ: 서울에서 부산까지 (Từ Seoul đến Busan)."
        },
        {
            q: "Chọn cặp trợ từ phù hợp:<br>어디___ 왔어요? - 베트남___ 왔어요.",
            options: ["에 / 에서", "에서 / 에서", "에 / 에", "까지 / 부터"],
            ans: 1,
            explain: "Đây là mẫu câu hỏi quê quán quen thuộc. 오다 có thể đi với 에 (đến đâu) và 에서 (đến TỪ đâu). '어디에서 왔어요?' = Bạn ĐẾN TỪ đâu?"
        }
    ],
    "(으)로": [
        {
            q: "Trợ từ '(으)로' KHÔNG có nghĩa nào sau đây?",
            options: ["Phương tiện (bằng, bằng cách)", "Chất liệu (làm bằng)", "Thời gian (vào lúc)", "Phương hướng (về phía)"],
            ans: 2,
            explain: "(으)로 chỉ phương tiện (bằng xe buýt), chất liệu (bằng gỗ), phương hướng (về phía trường). Thời gian phải dùng 에."
        },
        {
            q: "Điền vào chỗ trống (Lưu ý bẫy patchim):<br>연필___ 쓰세요.",
            options: ["로", "으로", "을", "에"],
            ans: 0,
            explain: "연필 (bút chì) kết thúc bằng patchim ㄹ. ĐÂY LÀ TRƯỜNG HỢP NGOẠI LỆ TRỌNG TÂM: Với patchim ㄹ thì dùng ngay 로, không cần 으. Đán án là 연필로."
        },
        {
            q: "Chọn câu đúng khi nói 'Tôi đi bằng tàu điện ngầm':",
            options: ["지하철로 가요.", "지하철으로 가요.", "지하철를 가요.", "지하철가 가요."],
            ans: 0,
            explain: "지하철 kết thúc bằng ㄹ -> cũng chia giống 연필, cộng thẳng 로 => 지하철로."
        },
        {
            q: "Điền trợ từ chỉ phương hướng:<br>오른쪽___ 가세요.",
            options: ["으로", "에", "로", "을"],
            ans: 0,
            explain: "오른쪽 (bên phải) có patchim ㄱ -> cộng 으로 => 오른쪽으로 가세요 (Hãy đi về phía bên phải)."
        },
        {
            q: "Trong câu '나무로 만들었어요' (Được làm bằng gỗ), '(으)로' mang ý nghĩa gì?",
            options: ["Lý do", "Chất liệu sản xuất", "Phương tiện giao thông", "Phương hướng"],
            ans: 1,
            explain: "나무로 = Bằng cây/gỗ. Từ để diễn tả chất liệu nguyên liệu cấu tạo nên một vật."
        }
    ],
    "와/과, 하고, (이)랑": [
        {
            q: "Cặp danh từ nào kết nối ĐÚNG bằng '와/과'?",
            options: ["사과과 배", "연필와 지우개", "빵과 우유", "커피과 차"],
            ans: 2,
            explain: "빵 có patchim (ㅇ) -> dùng 과. Cấu trúc là: Có patchim + 과, Không patchim + 와. Sẽ là 빵과 우유."
        },
        {
            q: "Đóng vai trò nối 'và/với', trợ từ nào thường được dùng trong KHẨU NGỮ, thân mật nhất?",
            options: ["와/과", "하고", "그리고", "(이)랑"],
            ans: 3,
            explain: "(이)랑 mang sắc thái gần gũi, nói chuyện tự nhiên nhất. 와/과 là trang trọng, văn viết. 하고 là trung tính."
        },
        {
            q: "Chia đúng '(이)랑' vào câu sau:<br>동생___ 같이 갑니다.",
            options: ["랑", "이랑", "와", "하고"],
            ans: 1,
            explain: "동생 có patchim (ㅇ) -> dùng 이랑 (Động sinh đi cùng). Nếu muốn dùng 랑 thì phải là không có patchim (như 친구랑)."
        },
        {
            q: "Điền trợ từ '하고':<br>책상___ 의자가 있습니다.",
            options: ["이랑", "하고", "와", "과"],
            ans: 1,
            explain: "하고 rất dễ sử dụng vì nó cắm đằng sau danh từ bất chấp có patchim hay không. 책상하고 = Bàn và..."
        },
        {
            q: "Đặc điểm khác nhau giữa '그리고' và '와/과/하고/(이)랑' là gì?",
            options: ["Không có khác biệt", "그리고 dùng để nối hai DANH TỪ, các từ còn lại nối Câu.", "그리고 đứng độc lập nối hai CÂU, các từ kia nối trực tiếp hai CỤM DANH TỪ.", "그리고 chỉ dùng trong văn nói."],
            ans: 2,
            explain: "그리고 là LIÊN TỪ thường đứng ở đầu câu (Ví dụ: 저는 빵을 먹어요. 그리고 우유를 마셔요). Còn 와/과 nối danh từ (빵과 우유)."
        }
    ],
    "도": [
        {
            q: "Điền trợ từ thích hợp vào chỗ trống:<br>저___ 한국어 학생입니다.",
            options: ["은", "가", "도", "를"],
            ans: 2,
            explain: "Trong bối cảnh có người khác là học sinh tiếng Hàn, và mình CŨNG là học sinh, ta dùng trợ từ 도 (Cũng). 저도 (Tôi cũng...)"
        },
        {
            q: "Trợ từ '도' sẽ THAY THẾ hoàn toàn các trợ từ nào khi gắn vào danh từ?",
            options: ["에 / 에서", "은/는, 이/가, 을/를", "(으)로 / 까지", "와/과 / 하고"],
            ans: 1,
            explain: "Khi dùng 도, ta phải xóa bỏ các trợ từ chủ ngữ (은/는, 이/가) và phụ ngữ (을/를). Ví dụ: 사과를 좋아해요 -> 사과도 좋아해요 (Sai: 사과를도 좋아해요)."
        },
        {
            q: "Trường hợp nào sau đây KHÔNG bị thay thế mà phải ĐỨNG CẠNH trợ từ 도?",
            options: ["을/를", "은/는", "이/가", "에 / 에서 (Ví dụ: 학교에도)"],
            ans: 3,
            explain: "Với các trợ từ chỉ phương hướng, thời gian, địa điểm như 에, 에서, 에게... ta phải giữ nguyên và cộng '도' vào TỰA SAU. Ví dụ: 집에 도 (x) -> 집에도 (✓)."
        },
        {
            q: "Dịch câu sau: 'Tôi uống cà phê. Tôi cũng ăn bánh mì.'",
            options: ["저는 커피를 마셔요. 빵가 먹어요.", "저는 커피를 마셔요. 빵도 먹어요.", "저도 커피를 마셔요. 빵만 먹어요.", "저는 커피도 마셔요. 빵을 먹어요."],
            ans: 1,
            explain: "빵도 먹어요 = Ăn cả bánh mì nữa. (Thay thế 을 bằng 도)."
        },
        {
            q: "Điền vào chỗ trống:<br>동생이 옵니다. 형___ 옵니다.",
            options: ["은", "가", "도", "를"],
            ans: 2,
            explain: "Đã có người phía trước làm hành động đến (옵니다). Vậy người sau cũng đến thì dùng 형도 (Anh trai cũng đến)."
        }
    ],
    "부터 ~ 까지": [
        {
            q: "Cấu trúc 'A부터 B까지' mang ý nghĩa gì?",
            options: ["Cho A đến B", "Từ A đến B", "Tại A và B", "Ở A sang B"],
            ans: 1,
            explain: "부터 (Từ: điểm bắt đầu) ~ 까지 (Đến: điểm kết thúc). Dùng được cho cả thời gian và địa điểm."
        },
        {
            q: "Điền vào chỗ trống:<br>오전 9시___ 오후 6시___ 일해요.",
            options: ["에 / 에", "부터 / 까지", "에서 / 까지", "부터 / 에서"],
            ans: 1,
            explain: "Chỉ mốc thời gian bắt đầu (9시부터) và kết thúc (6시까지)."
        },
        {
            q: "Chọn câu viết sai ngữ pháp:",
            options: ["월요일부터 금요일까지 학교에 가요.", "서울에서부터 부산까지 KTX를 타요.", "내일부터 다이어트를 해요.", "아침까지 저녁부터 일했어요."],
            ans: 3,
            explain: "아침까지 (đến sáng) 저녁부터 (từ tối) là một trật tự ngược và sai logic. Phải là: 저녁부터 아침까지 (từ tối cho đến sáng)."
        },
        {
            q: "Với khái niệm KHÔNG GIAN (địa lý), thay vì dùng '부터' đứng một mình, người Hàn thường kết hợp với trợ từ nào tạo thành cụm 'Từ đâu đến đâu'?",
            options: ["에부터", "까지부터", "에서 (hoặc 에서부터)", "로투터"],
            ans: 2,
            explain: "Với không gian/địa lý, người Hàn thường dùng A에서 B까지 hoặc dài hơn là A에서부터 B까지. Ví dụ: 집에서 회사까지."
        },
        {
            q: "Dịch: 'Hãy đợi tôi ĐẾN 5 giờ nhé.'",
            options: ["5시부터 기다리세요.", "5시에 기다리세요.", "5시에서 기다리세요.", "5시까지 기다려 주세요."],
            ans: 3,
            explain: "Từ 까지 (đến) hoàn toàn CÓ THỂ ĐỨNG MỘT MÌNH để thiết lập một mốc deadline. 5시까지 = Cho đến khi tới 5 giờ."
        }
    ],
    "의": [
        {
            q: "Trợ từ '의' biểu hiện ý nghĩa gì?",
            options: ["Phương hướng", "Hành động", "Sở hữu (Của)", "So sánh"],
            ans: 2,
            explain: "의 là trợ từ sở hữu (Của). Đứng sau danh từ chỉ chủ sở hữu: A의 B (B của A)."
        },
        {
            q: "Trong đoạn hội thoại thực tế đời sống, từ '의' thường được phát âm như thế nào?",
            options: ["[으]", "[이]", "[의]", "[에]"],
            ans: 3,
            explain: "Khi 의 đóng vai trò là TRỢ TỪ SỞ HỮU, nó luôn được phát âm là [에] cho dễ đọc. Ví dụ: 우리의 -> [우리에]."
        },
        {
            q: "Điền trợ từ:<br>선생님___ 책입니다.",
            options: ["가", "의", "를", "는"],
            ans: 1,
            explain: "선생님의 책 = Cuốn sách CỦA giáo viên."
        },
        {
            q: "Đại từ '저' (Tôi) khi kết hợp với '의' sẽ tạo thành từ KHÔNG VIẾT TẮT và VIẾT TẮT nào?",
            options: ["저의 -> 제", "저의 -> 내", "나의 -> 제", "너의 -> 네"],
            ans: 0,
            explain: "저의 viết tắt thành 제 (của tôi - khiêm nhường). 나의 viết tắt thành 내 (của tôi - thân mật)."
        },
        {
            q: "Khi nào trợ từ '의' thường BỊ LƯỢC BỎ trong giao tiếp?",
            options: ["Tên quốc gia", "Danh từ chỉ người thân, tổ chức tập thể như 우리 (chúng tôi), 나라 (đất nước)", "Tên món ăn", "Chỉ thời gian"],
            ans: 1,
            explain: "Người Hàn rất coi trọng tính cộng đồng, nên các từ như 우리 (chúng ta/chúng tôi) thay vì viết '우리의 엄마' họ chỉ nói ngắn gọn là '우리 엄마' (mẹ của chúng tôi -> hàm ý mẹ tôi)."
        }
    ],
    "에게/한테": [
        {
            q: "'에게' và '한테' đều có nghĩa 'cho/đối với ai đó'. Đặc điểm chung trịnh trọng của chúng là:",
            options: ["Chỉ được dùng cho ĐỒ VẬT.", "Chỉ được dùng với NGƯỜI hoặc ĐỘNG VẬT.", "Chỉ dùng cho ĐỊA ĐIỂM.", "Dùng với mọi danh từ."],
            ans: 1,
            explain: "에게/한테 là trợ từ hướng đối tượng tiếp nhận hành động, BẮT BUỘC chỉ dùng cho Người hoặc Con vật (sự vật có ý thức). Nếu là Đồ vật/Nơi chốn, ta phải dùng 에."
        },
        {
            q: "Sự khác biệt sắc thái giữa '에게' và '한테'?",
            options: ["에게 là văn nói, 한테 là văn viết.", "에게 là văn viết/trang trọng, 한테 dùng trong giao tiếp hàng ngày/thân mật.", "Không có khác biệt.", "에게 dùng cho số nhiều."],
            ans: 1,
            explain: "한테 được dùng cực kỳ phổ biến trong lời nói hàng ngày (Ví dụ: 친구한테 전화했어요). 에게 thường dùng trong văn bản, email, thư từ."
        },
        {
            q: "Khi áp dụng KÍNH NGỮ (nói với bề trên: ông bà, giáo viên, sếp), biến thể của '에게/한테' là gì?",
            options: ["께서", "께", "님", "고"],
            ans: 1,
            explain: "에게/한테 đổi thành 께 (Cho tôn kính). Ví dụ: 선생님께 선물을 드렸어요."
        },
        {
            q: "Chọn câu SAI:",
            options: ["동생한테 용돈을 줬어요.", "강아지한테 밥을 줬어요.", "꽃한테 물을 줬어요.", "친구에게 이메일을 썼어요."],
            ans: 2,
            explain: "꽃 (Bông hoa) là Thực vật (không phải người/động vật), do đó KHÔNG được dùng 한테/에게. Câu đúng phải là: 꽃에 물을 줬어요."
        },
        {
            q: "Để diễn đạt 'Nhận một cái gì đó TỪ ai đó', ta thêm đuôi gì vào sau 에게/한테?",
            options: ["~로", "~서 (thành 에게서/한테서)", "~고", "~는"],
            ans: 1,
            explain: "Thêm 서 vào sau để chỉ nguồn gốc/điểm xuất발 phát. 친구한테서 선물을 받았어요 = Nhận quà (từ) bạn."
        }
    ],
    "보다": [
        {
            q: "Trợ từ '보다' có chức năng gì trong câu?",
            options: ["Chỉ điểm đến", "Diễn tả sự so sánh (Hơn/Kém so với...)", "Chỉ lượng thời gian", "Đưa ra lời khuyên"],
            ans: 1,
            explain: "A보다 B가... = B thì ... hơn so với A. Nơi gắn 보다 vào chính là ĐỐI TƯỢNG BỊ ĐEM RA SO SÁNH (làm mốc)."
        },
        {
            q: "Dịch câu sau sang tiếng Hàn: 'Mùa hè thì nóng hơn mùa đông.'",
            options: ["여름보다 겨울이 더워요.", "여름이 겨울보다 더워요.", "여름에 겨울보다 더워요.", "겨울은 여름보다 추워요."],
            ans: 1,
            explain: "여름 (mùa hè) ĐÓNG VAI TRÒ LÀ CHỦ NGỮ -> 여름이. 겨울 (mùa đông) là điểm mốc so sánh -> 겨울보다 (so với mùa đông). 더워요 (nóng)."
        },
        {
            q: "Từ '보다' thường đi kèm nhất với phó từ nào?",
            options: ["아주 (Rất)", "더 (Hơn nữa/Thêm)", "보통 (Thường)", "일찍 (Sớm)"],
            ans: 1,
            explain: "더 (more) là bạn đồng hành của 보다. Ví dụ: 사과보다 딸기가 <b>더</b> 비싸요. (Dâu đắt HƠN táo)."
        },
        {
            q: "Điền vào chỗ trống: 지하철이 버스___ 빠릅니다.",
            options: ["가", "은", "보다", "에"],
            ans: 2,
            explain: "지하철이 (Tàu điện ngầm - chủ đề) - 빠릅니다 (Nhanh). Rõ ràng đang so sánh tốc độ với Xe buýt -> 버스보다."
        },
        {
            q: "Bẫy: Câu nào sau đây DÙNG ĐÚNG trợ từ khi có 보다?",
            options: ["커피보다 차가 마셔요.", "커피보다 차를 좋아해요.", "커피보다 차에 맛있어요.", "커피보다 차는 맛없어요."],
            ans: 1,
            explain: "Môt vế của câu so sánh bắt buộc phải chuẩn ngữ pháp cơ bản. Động từ 좋아하다 (Thích) bắt buộc cần tân ngữ 을/를 -> 차를 좋아해요."
        }
    ],
    "만": [
        {
            q: "Trợ từ '만' mang ý nghĩa gì?",
            options: ["Chỉ, chỉ có", "Đến tận", "Cũng", "Và/Với"],
            ans: 0,
            explain: "만 có nghĩa là CHỈ (only). Dùng để giới hạn sự việc chỉ nằm trong đối tượng đó, loại trừ mọi thứ khác."
        },
        {
            q: "Điền vào chỗ trống:<br>저는 물___ 마십니다.",
            options: ["가", "은", "는", "만"],
            ans: 3,
            explain: "Trong bối cảnh kiêng khen đồ ngọt hoặc rượu bia, người ta sẽ dùng 물만 마십니다 (Tôi CHỈ uống nước)."
        },
        {
            q: "Khác với '도', khi dùng '만' kết hợp với '에' hoặc '에서', thứ tự đứng như thế nào là chuẩn?",
            options: ["만에 / 만에서", "에만 / 에서만", "Cả 2 đều đúng", "Không kết hợp được"],
            ans: 1,
            explain: " 만 đứng SAU các trợ từ 에/에서. Ví dụ: 주말에만 (chỉ vào cuối tuần), 집에서만 (chỉ ở nhà)."
        },
        {
            q: "Dịch: 'Xin hãy cho CHỈ tôi biết.'",
            options: ["제만 알려 주세요.", "저에게만 알려 주세요.", "나만 알려 주세요.", "저에게 알려 주세요."],
            ans: 1,
            explain: "에게 (cho ai đó) + 만 (chỉ). Đi với 저 (tôi) tạo thành -> 저에게만 (Chỉ đối với tôi)."
        },
        {
            q: "Tương tự như '도', trợ từ '만' THAY THẾ các trợ từ nào?",
            options: ["에 / 에서", "은/는, 이/가, 을/를", "(으)로", "Không thay thế trợ từ nào."],
            ans: 1,
            explain: "만 sẽ lấn át và thay thế hoàn toàn nhóm chủ ngữ (은/는, 이/가) và tân ngữ (을/를). Ví dụ: 밥을 먹어요 -> 밥만 먹어요."
        }
    ],
    "마다": [
        {
            q: "Trợ từ '마다' đi kèm với danh từ mang ý nghĩa gì?",
            options: ["Toàn bộ", "Mỗi, mọi", "Khoảng", "Một vài"],
            ans: 1,
            explain: "마다 = Mỗi/Mọi. Chỉ sự lặp đi lặp lại hoặc bao quát từng cái một. (Ví dụ: 사람마다 = Mỗi người)."
        },
        {
            q: "Từ '날마다' (Mỗi ngày) CÓ THỂ thay thế bằng một từ duy nhất nào?",
            options: ["모든", "자주", "매일", "항상"],
            ans: 2,
            explain: "날마다 (ngày + mỗi) đồng nghĩa hoàn toàn với từ Hán Hàn 매일 (Mỗi Nhật = Mỗi ngày)."
        },
        {
            q: "Điền vào chỗ trống:<br>주말___ 영화를 봐요.",
            options: ["만", "마다", "도", "까지"],
            ans: 1,
            explain: "주말마다 영화를 봐요 = Cứ đến mỗi cuối tuần là tao lại xem phim (thể hiện thói quen đều đặn)."
        },
        {
            q: "Nếu dùng cho thời gian, '5분마다' dịch là gì?",
            options: ["Trong vòng 5 phút", "Sau 5 phút nữa", "Cứ mỗi 5 phút (lại lặp lại)", "Cho đến phút thứ 5"],
            ans: 2,
            explain: "VD: 버스가 5분마다 와요 (Cứ mỗi 5 phút là có xe buýt đến)."
        },
        {
            q: "Chọn câu viết sai:",
            options: ["아침마다 커피를 마셔요.", "토요일마다 등산해요.", "오늘마다 학교에 가요.", "집마다 차가 있어요."],
            ans: 2,
            explain: "오늘 (hôm nay) là tính từ chỉ đúng 1 mốc cố định, không có tính lặp lại như 주말, 아침, 방학, 집... do đó thay vì 오늘마다 phải là 매일 (mỗi ngày)."
        }
    ],
    "밖에": [
        {
            q: "Đóng vai trò NGỮ PHÁP, '밖에' nghĩa là BÊN NGOÀI hay ý nghĩa gì khác?",
            options: ["Bên trong", "Bên ngoài", "Chỉ, ngoài ra không có", "Thêm vào đó"],
            ans: 2,
            explain: "Khi đứng SAU DANH TỪ không có khoảng trắng (명사밖에), nó nghĩa là 'Chỉ có cái này, ngoài ra không có cái khác'. (Đừng nhầm với 밖 (bên ngoài) + 에 (ở) -> 밖에: ở bên ngoài)."
        },
        {
            q: "Quy tắc ngữ pháp QUAN TRỌNG NHẤT của '밖에' là gì?",
            options: ["Luôn đi kèm với động từ nguyên thể", "Luôn kết hợp với thể PHỦ ĐỊNH (안, 못, 없다, 모르다)", "Luôn đứng trước chủ ngữ", "Luôn có dấu chấm hỏi"],
            ans: 1,
            explain: "Ngoài ra thì KHÔNG CÓ => Bắt buộc đuôi câu phải phủ định: 돈밖에 없어요 (Chỉ có tiền). 한국어밖에 못해요 (Chỉ nói được tiếng Hàn)."
        },
        {
            q: "Giữa '만' và '밖에' cùng dịch là CHỈ, sự khác biệt là:",
            options: ["Ngược nhau hoàn toàn.", "만 dùng phủ định, 밖에 dùng khẳng định.", "만 dùng khẳng định/phủ định tự do, 밖에 ÉP BUỘC ĐUÔI CÂU phải chia phủ định.", "Không có khác biệt."],
            ans: 2,
            explain: "물만 있어요 = 물밖에 없어요 (Chỉ có nước thôi). Đều dịch giống nhau nhưng 밖에 kèm biểu cảm tiếc nuối hơn một chút."
        },
        {
            q: "Chọn câu CHUẨN ngữ pháp nhất trong 4 câu dưới đây:",
            options: ["시간이 5분밖에 있습니다.", "시간이 5분만 없습니다.", "시간이 5분밖에 안 남았습니다.", "시간이 5분 안 남았습니다 밖에."],
            ans: 2,
            explain: "5분밖에 + 안 남다 (5 phút + chỉ còn/không còn hơn) -> Chỉ còn lại đúng 5 phút. Rất chuẩn xác cả ngữ cảnh lẫn ngữ pháp."
        },
        {
            q: "Dịch: 'Trong ví tôi CHỈ CÓ 10.000 won.' (Dùng 밖에)",
            options: ["지갑에 만 원밖에 있어요.", "지갑에 만 원밖에 없어요.", "지갑에 만 원만 없어요.", "지갑에서 만 원밖에 없어요."],
            ans: 1,
            explain: "지갑 (ví) + 에 (ở) = Ở trong ví. 만 원 (10k won) + 밖에 + 없다 (không có) => Chỉ có ngoài 10k won ra thì chả có đồng nào."
        }
    ],
    "(이)나": [
        {
            q: "Trợ từ '(이)나' có MỘT trong những nghĩa nào sau đây?",
            options: ["Và (Nối song song hai thứ bắt buộc)", "Bằng với (So sánh)", "Hoặc / Hay là (Sự lựa chọn)", "Sẽ (Thì tương lai)"],
            ans: 2,
            explain: "(이)나 nghĩa thứ nhất là Hoặc. Dùng để chọn 1 trong 2 danh từ. Ví dụ: 주말에 영화나 드라마를 봐요."
        },
        {
            q: "Nghĩa thứ 2 của '(이)나' khi CHỈ SỐ LƯỢNG là gì?",
            options: ["Một chút xíu", "Khoảng tầm", "Đến mức TẬN / LÊN ĐẾN (nhấn mạnh số lượng lớn ngoài sức tưởng tượng)", "Ít hơn kỳ vọng"],
            ans: 2,
            explain: "Sắc thái Nhấn mạnh sự ngạc nhiên: 밥을 5그릇이나 먹었어요? = Ăn tận 5 bát cơm lận á?"
        },
        {
            q: "Nghĩa thứ 3 của '(이)나' thường dùng trong văn biểu cảm (Ví dụ: 자나 씁시다) là gì?",
            options: ["Nhấn mạnh mục tiêu số 1", "Đưa ra một lựa chọn tạm thời, 'Đại loại cái gì đó / hay là...'", "Chắc chắn phải làm", "Không có nghĩa này."],
            ans: 1,
            explain: "Khi không có lựa chọn nào tốt hơn, người ta chọn đại: 영화나 보자 (Xem phim hay làm gì đi). "
        },
        {
            q: "Chia '(이)나' vào câu: 아침에 빵___ 밥을 먹어요.",
            options: ["나", "이나", "랑", "도"],
            ans: 1,
            explain: "빵 (bánh mì) có patchim ㅇ -> cộng 이나. Sáng ra thì ăn Bánh mì hoặc Cơm."
        },
        {
            q: "Chọn câu cảm thán đúng thể hiện sự chờ đợi LÂU:",
            options: ["세 시간이나 기다렸어요.", "세 시간만 기다렸어요.", "세 시간밖에 기다렸어요.", "세 시간도 기다렸어요."],
            ans: 0,
            explain: "세 시간이나! (Tận 3 tiếng đồng hồ!). Ngược lại, nếu chờ 3 tiếng mà thấy quá ngắn, người ta sẽ dùng: 세 시간밖에 안 기다렸어요 (Mới đợi có 3 tiếng)."
        }
    ],
    "이다 / 아니다": [
        {
            q: "'이다' mang nghĩa cơ bản trong tiếng Việt là:",
            options: ["Làm", "Có", "Là", "Đi"],
            ans: 2,
            explain: "이다 = Là. Bắt buộc gắn liền sau Danh từ, dùng để định nghĩa, khẳng định thân phận, chức danh, quốc tịch."
        },
        {
            q: "Dạng chia đuôi câu lịch sự thông thường (-아/어요) của '이다' khi DANH TỪ CÓ PATCHIM là?",
            options: ["이에요", "예요", "입니다", "이어요"],
            ans: 0,
            explain: "Danh từ có patchim + 이에요 (학생이에요). Danh từ KHÔNG có patchim + 예요 (의사예요)."
        },
        {
            q: "Thể phủ định của '이다' (Là) là '아니다' (Không phải là). Cấu trúc đúng khi sử dụng 아니다 là gì?",
            options: ["명사 + 아니다", "명사은/는 아니다", "명사이/가 아니다", "아니다 + 명사"],
            ans: 2,
            explain: "Quy tắc sống còn: Phải luôn thêm trợ từ 이/가 vào trước 아니다. 학생이 아닙니다 (Không phải là học sinh)."
        },
        {
            q: "Chia đuôi câu sai trong lựa chọn sau:",
            options: ["저는 학생입니다.", "저것은 시계예요.", "저는 미국 사람이 아닙니다.", "이것은 의자이에요."],
            ans: 3,
            explain: "의자 (cái ghế) kết thúc bằng nguyên âm ㅏ (không patchim) -> Do đó phải đi với 예요 (의자예요) thay vì 의자이에요."
        },
        {
            q: "Dạng quá khứ của '이다' với danh từ KHÔNG có patchim là gì? (Ví dụ: Đã từng là ca sĩ - 가수...)",
            options: ["가수이었습니다", "가수였어요", "가수이었어요", "가수이었네요"],
            ans: 1,
            explain: "Có patchim -> 이었어요 (학생이었어요). KHÔNG patchim -> 였어요 (가수였어요)."
        }
    ],
    "-아/어요": [
        {
            q: "Quy tắc cơ bản TỐI QUAN TRỌNG nhất khi chia đuôi '-아/어요' là gì?",
            options: ["Dựa vào chữ cái kết thúc có patchim hay không.", "Dựa vào nguyên âm cuối cùng của THÂN TỪ (다).", "Dựa vào nghĩa của từ (động từ hay tính từ).", "Theo sau luôn là -어요."],
            ans: 1,
            explain: "Đúng! Cốt lõi của ngữ pháp này là xét xem NGUYÊN ÂM cuối của thân từ là gì. Nếu là ㅏ,ㅗ thì đi với 아요. Các nguyên âm khác đi với 어요."
        },
        {
            q: "Chia từ '가르치다' (dạy học) sang thì hiện tại -아요/어요:",
            options: ["가르치아요", "가르처요", "가르쳐요", "가르치어요"],
            ans: 2,
            explain: "가르치다 (Bỏ 다) -> 가르치. Kết thúc bằng nguyên âm ㅣ, cộng 어요 => ㅣ+어 = ㅕ -> 가르쳐요."
        },
        {
            q: "Từ nào ĐÃ BỊ CHIA SAI?",
            options: ["오다 -> 와요", "바쁘다 -> 바뻐요", "기다리다 -> 기다려요", "배우다 -> 배워요"],
            ans: 1,
            explain: "바쁘다 (Bận). Kết thúc nguyên âm ㅡ. Bỏ ㅡ, nhìn ngược lên chữ cái kế trước (바) có nguyên âm ㅏ -> phải đi với 아요 => 바빠요."
        },
        {
            q: "Chọn câu viết đúng:",
            options: ["저는 한국어 공부해요.", "저는 한국어 가르쳐요.", "저는 한국 음식이 만들어요.", "어제 영화 바요."],
            ans: 1,
            explain: "Câu 1 thiếu 을. Câu 3 sai trợ từ (phải là 음식을). Câu 4 sai vì보다 chia 아/어요 là 봐요, vả lại '어제' phải chia quá khứ 봤어요."
        },
        {
            q: "Với nhóm động từ có đuôi -하다 (như 공부하다, 수영하다), khi chuyển sang đuôi lịch sự thông thường, nó biến thành:",
            options: ["하아요", "해요", "해어요", "하요"],
            ans: 1,
            explain: "하다 luôn luôn biến đổi trực tiếp thành 해요."
        }
    ],
    "-ㅂ니다/습니다": [
        {
            q: "Đuôi câu -ㅂ니다/습니다 khác với đuôi -아/어요 ở điểm nào?",
            options: ["Trang trọng, khách sáo và lịch sự hơn.", "Chỉ dùng cho người lớn tuổi.", "Chỉ dùng khi viết.", "Thường dùng trong thân mật."],
            ans: 0,
            explain: "Thể -ㅂ니다/습니다 (Thể Hấp Nhĩ Đa) gọi là thể Cực kì Tôn kính Formal, dùng trong môi trường công sở, quân đội, bản tin, bài thuyết trình hoặc gặp người lạ lần đầu."
        },
        {
            q: "Điền vào chỗ trống: 처음 ____________. (Lần đầu tiên được gặp bạn)",
            options: ["뵙겠습니다", "보겠습니다", "만났습니다", "인사합니다"],
            ans: 0,
            explain: "처음 뵙겠습니다 (Rất hân hạnh được gặp mặt lần đầu). Đây là câu chào form chuẩn cửa miệng của người Hàn. 뵙다 (khiêm nhường của 보다) + 겠습니다."
        },
        {
            q: "Chia động từ '만들다' (Làm, chế tạo) với đuôi -ㅂ/습니다:",
            options: ["만들습니다", "만듭니다", "만듬니다", "만들입니다"],
            ans: 1,
            explain: "BẪY PATCHIM ㄹ: Khi thân từ kết thúc bằng patchim ㄹ, nó sẽ bị rơi rụng (biến mất) trước ㅂ/습니다. 만들다 -> 만듭니다."
        },
        {
            q: "Câu CẢM THÁN 'Trời lạnh quá đi mất!' nói ở dạng trang trọng:",
            options: ["날씨가 너무 줍습니다!", "날씨가 너무 춥니다!", "날씨가 너무 춥습니다!", "날씨가 너무 추워요!"],
            ans: 2,
            explain: "춥다 (Lạnh) có patchim (ㅂ). Đối với đuôi -ㅂ/습니다 thì không áp dụng bất quy tắc của ㅂ, cứ thế mà cộng thêm 습니다 => 춥습니다."
        },
        {
            q: "Khi đặt CÂU HỎI với thể này, phần đuôi -다 biến đổi thế nào?",
            options: ["Thành -까?", "Giữ nguyên -다?", "Thành -냐?", "Thành -요?"],
            ans: 0,
            explain: "Thay chữ 다 bằng chữ 까 là biến ngay thành câu hỏi trang trọng. 합니다 -> 합니까?"
        }
    ],
    "-(으)세요": [
        {
            q: "'(으)세요' đóng hai vai trò trong tiếng Hàn. Một là Mệnh Lệnh (Hãy...), hai là gì?",
            options: ["Cảm thán", "Mô tả Tôn kính người lớn thao tác hành động", "Phủ định", "Khuyên nhủ bản thân"],
            ans: 1,
            explain: "Ngoài nghĩa ra lệnh (Hãy đọc sách đi!), nó còn là đuôi câu KÍNH NGỮ của -아/어요 (Ví dụ: Thầy giáo đọc sách -> 선생님이 책을 읽으세요)."
        },
        {
            q: "Chia dạng tôn kính cho động từ '자다' (Ngủ), biết rằng đây là từ đặc biệt:",
            options: ["자세요", "주무세요", "드세요", "계세요"],
            ans: 1,
            explain: " 자다 (ngủ) là động từ đặc biệt, phải sử dụng toàn bộ từ kính ngữ là 주무시다. Chia hệ -(으)세요 => 주무세요."
        },
        {
            q: "Phân biệt 안녕히 가세요 (Tạm biệt - đi) và 안녕히 계세요 (Tạm biệt - ở lại): Đuôi '계세요' xuất phát từ động từ nào?",
            options: ["가다 (đi)", "기다리다 (đợi)", "있다 (có, ở)", "살다 (sống)"],
            ans: 2,
            explain: "있다 (tồn tại, ở) -> Kính ngữ là 계시다 -> chia ra là 계세요. (Chúc người ở lại Tồn tại - Ở lại bình an)."
        },
        {
            q: "Chia '살다' (Sống) thành mệnh lệnh: 'Xin hãy sống ở đây.'",
            options: ["여기에 살으세요", "여기에 사세요", "여기에 살아세요", "여기에 사르세요"],
            ans: 1,
            explain: "Lại là BẪY PATCHIM ㄹ. Với nhóm (으)세요, ㄹ gặp ㅅ sẽ bị rụng. 살다 -> 사세요."
        },
        {
            q: "Chọn câu CÓ LỖI SAI khi dùng với người lớn (như ông bà):",
            options: ["할아버지가 밥을 드세요.", "할머니가 전화를 하세요.", "할아버지가 집에 있으세요.", "할머니가 운동하세요."],
            ans: 2,
            explain: "Dù nói 있다 -> 있으세요 là có vẻ đúng ngữ pháp với các từ khác, NHƯNG 있다 có kính ngữ đặc biệt là 계시다 -> 할아버지가 집에 계세요 mới là chuẩn mực."
        }
    ],
    "-(으)ㄹ까요?": [
        {
            q: "Mẫu câu '우리 같이 영화 _________________?' (Chúng ta đi xem phim cùng nhau nhé?) Điền gì?",
            options: ["볼까요", "보을까요", "봐요", "보지마요"],
            ans: 0,
            explain: "보다 (Xem) + ㄹ까요? = 볼까요? (Bày tỏ ý định rủ rê, hỏi ý kiến đối phương)."
        },
        {
            q: "Khi chủ ngữ là 'Tôi' (제가), ý nghĩa của '-(으)ㄹ까요?' thay đổi như thế nào?",
            options: ["Rủ đối phương cùng làm", "Hỏi xin phép, xin ý kiến (Tôi làm cái này nhé?)", "Phỏng đoán ý của người khác", "Tự độc thoại"],
            ans: 1,
            explain: "제가 문을 닫을까요? = Có cần TÔI đóng cửa sổ giúp bạn không? (Hỏi xem suy nghĩ của người nghe)."
        },
        {
            q: "Hỏi: 'Khi nào chúng ta gặp nhau nhỉ?' Chọn tiếng Hàn chuẩn:",
            options: ["언제 만납시다?", "언제 볼까요?", "우리 언제 만날까요?", "어디 만날까요?"],
            ans: 2,
            explain: "만나다 (Gặp) + -ㄹ까요 = 만날까요? (Chúng ta gặp nhau khi nào nhỉ?)."
        },
        {
            q: "Ngữ pháp '(으)ㄹ까요' còn được dùng ở TOPIK 2 với ý nghĩa thứ 3 là gì?",
            options: ["Hỏi lại câu mệnh lệnh", "Hối hận quá khứ", "Phỏng đoán, phán đoán (Không biết... có ~ hay không nhỉ?)", "Hứa với người khác"],
            ans: 2,
            explain: "내일 비가 올까요? (Không biết liệu ngày mai trời có mưa không nhỉ?). Ở ý nghĩa này không dùng được với 우리 nữa."
        },
        {
            q: "Động từ '듣다' (Nghe) chia theo '-(으)ㄹ까요?' thành:",
            options: ["듣을까요", "들을까요", "들까요", "듣을게요"],
            ans: 1,
            explain: "Quy tắc Động từ bất quy tắc ㄷ. Gặp nguyên âm (을), ㄷ sẽ bị biến thành ㄹ => 들 + 을까요 => 들을까요."
        }
    ],
    "-(으)ㅂ시다": [
        {
            q: "Mang nghĩa y chang câu rủ rê tiếng Anh là 'Let\\'s (Do sth)', đuôi câu nào tương ứng?",
            options: ["-아/어요", "-(으)세요", "-(으)ㅂ시다", "-지 마세요"],
            ans: 2,
            explain: "-(으)ㅂ시다 dùng để đề nghị thẳng đối phương cùng tham gia hành động với mình ở thì hiện tại/tương lai gần (trang trọng)."
        },
        {
            q: "Chia động từ '가다' (Đi) theo cấu trúc này:",
            options: ["가읍시다", "갑시다", "가시다", "가습니다"],
            ans: 1,
            explain: "가다 (không có patchim) -> Thêm ㅂ vào dưới + 시다 -> 갑시다 (Let's go!)."
        },
        {
            q: "Câu RỦ RÊ tương đương '우리 밥을 먹읍시다' ở TÔN KÍNH THÂN MẬT (존댓말) thường ngày là:",
            options: ["우리 밥을 먹어요.", "우리 밥을 먹으세요.", "우리 밥 먹으러 갈까요.", "밥을 드세요."],
            ans: 0,
            explain: "Đuôi câu -아/어요 có 3 sức mạnh: Miêu tả, Mệnh lệnh (đọc xuống giọng), và Rủ rê (우리 먹어요 = Mình cùng ăn đi)."
        },
        {
            q: "Chọn câu SAI LOẠI BỎ NGỮ PHÁP:",
            options: ["같이 영화를 봅니다.", "조용히 합시다.", "한국에 같이 갑시다.", "불고기를 먹읍시다."],
            ans: 0,
            explain: "봅니다 là câu khẳng định trần thuật bình thường (Tôi đang xem phim). Không hề có ý rủ rê. Các câu khác đều tận cùng bằng -ㅂ시다 là chuẩn."
        },
        {
            q: "Tuyệt đối KHÔNG sử dụng '-(으)ㅂ시다' với đối tượng nào?",
            options: ["Đồng nghiệp nhỏ tuổi", "Bạn bè", "Người lạ", "Người lớn tuổi hơn/Cấp trên"],
            ans: 3,
            explain: "Tuy mang tiếng là 'Lịch sự/Trang trọng', nhưng mang sắc thái ra lệnh/điều phối đội nhóm. Rủ Sếp bằng '갑시다' là rất thất lễ. Nên dùng: 가실까요? hoặc 같이 가면 어떨까요?"
        }
    ],
    "-지 마세요": [
        {
            q: "Nếu '(으)세요' là Mệnh lệnh Khẳng Định (Hãy...), thì Mệnh lệnh Phủ Định (Đừng...) là gì?",
            options: ["안 ~ (으)세요", "못 ~ (으)세요", "~지 않으세요", "~지 마세요"],
            ans: 3,
            explain: "Cách khuyên răn/ngăn cản tốt nhất là thêm đuôi 지 마세요 trực tiếp vào gốc động từ."
        },
        {
            q: "Điền vào chỗ trống: 술을 _____________. (Đừng có uống rượu.)",
            options: ["마시지 마세요", "먹지 마세요", "드지 마세요", "안 마시세요"],
            ans: 0,
            explain: "마시다 (uống) -> bỏ 다 + 지 마세요 = 마시지 마세요."
        },
        {
            q: "Đối với câu thân mật với hậu bối/bạn bè (Banmal), ta vứt cái gì đi của từ '-지 마세요'?",
            options: ["세", "세요", "마세요", "지 마"],
            ans: 1,
            explain: "지 마세요 (Lịch sự) -> 지 마 (Banmal, thân mật). 하지 마! (Đừng có làm!)."
        },
        {
            q: "Trong quá trình kết hợp, '-지 마세요' có áp dụng luật CHIA BẤT QUY TẮC của tiếng Hàn không?",
            options: ["Có, phải chia bất quy tắc.", "Tuỳ từng từ vựng.", "Chỉ chia với đuôi ㅂ.", "Ngữ pháp bắt đầu bằng '자 âm'(지) nên KHÔNG CHIA bất quy tắc."],
            ans: 3,
            explain: "Vì kết nối bằng phụ âm 'ㅈ', các hiện tượng bất quy tắc ㄷ, ㅂ, ㅅ KHÔNG BỊ KÍCH HOẠT. Ví dụ: 듣다 -> 듣지 마세요 (Không phải '들지 마세요')."
        },
        {
            q: "Hỏi cực khó: Hình thức KÍNH NGỮ CAO NHẤT (cực trang trọng) của 'Đừng làm' là gì?",
            options: ["-지 마십시오", "-지 마셔요", "-지 않으십니다", "-지 마시겠어요"],
            ans: 0,
            explain: "-(으)십시오 là thể siêu trang trọng (dùng trên máy bay, đài phát thanh...). Nên 지 마세요 -> 지 마십시오 (Xin quý khách vui lòng không...)."
        }
    ],
    "-(으)ㄹ게요": [
        {
            q: "Đuôi '-(으)ㄹ게요' dùng để làm gì?",
            options: ["So sánh", "Khen ngợi/cảm thán", "Miêu tả hiện tượng thiên nhiên", "Thể hiện ý định, LỜI HỨA của chính TÔI (Ngôi 1)"],
            ans: 3,
            explain: "Chỉ được dùng cho Chủ ngữ là Ngôi số 1 (저/나). Đưa ra tuyên bố/cam kết/sẽ làm việc gì đó ngay sau khi phản ứng với tình huống."
        },
        {
            q: "Câu nào dùng SAI chủ ngữ với cấu trúc -(으)ㄹ게요?",
            options: ["제가 이메일을 보낼게요.", "내일 일찍 올게요.", "친구가 돈을 낼게요.", "제가 연락할게요."],
            ans: 2,
            explain: "Bạn tôi (친구) là Ngôi thứ 3. Không thể dùng -(으)ㄹ게요 cho suy nghĩ/tương lai người khác. Nên dùng 을/를 거예요 hoặc 것 같아요."
        },
        {
            q: "Sự khác biệt tế nhị giữa '제가 할 거예요' và '제가 할게요'?",
            options: ["Không có. 2 câu giống hệt nhau.", "예 (Sẽ) chỉ quá khứ. 게요 (sẽ) tương lai.", "거예요 = Lên kế hoạch TRƯỚC từ lâu. 게요 = Quyết định NGAY LẬP TỨC để phản hồi lại đối phương.", "거예요 dùng cho số đông."],
            ans: 2,
            explain: "Bạn rủ: Đứa nào rửa bát? => Tôi đáp: 제가 할게요! (Tớ rửa cho! - Rất tự nhiên). Nếu đáp 할 거예요 (Tôi ĐÃ định rửa bát rồi - nghe kiêu và cộc lốc hơn)."
        },
        {
            q: "Về mặt viết và phát âm, dạng đuôi chuẩn là '게요' hay '께요'?",
            options: ["Viết: 께요 / Phát âm: 게요", "Viết: 게요 / Phát âm: 께요", "Viết: 께요 / Phát âm: 께요", "Cả 2 đều sai"],
            ans: 1,
            explain: "Chữ viết CHUẨN là -(으)ㄹ게요. Nhưng khi đọc do gặp 'ㄹ' phía trước nên chữ 'ㄱ' bị căng âm => đọc là [께요] (gge-yo). Các bạn mới học thường viết sai thành 께요."
        },
        {
            q: "Điền vào chỗ trống:<br>동생아, 과자 좀 사와라. <br>- 네, 금방 ____.",
            options: ["갔어요", "가요", "다녀올게요", "사오세요"],
            ans: 2,
            explain: "다녀오다 (Đi rồi báo cáo về). Chia cam kết với người nói lớn hơn mình: Vâng, em sẽ đi nhanh về nhanh liền -> 다녀올게요."
        }
    ],
    "-네요": [
        {
            q: "Khi bạn bất ngờ nhìn thấy một ai đó ăn rất nhiều, cảm xúc trào dâng, bạn sẽ xài ngữ pháp gì?",
            options: ["-아/어요", "-(으)세요", "-네요", "-지 마세요"],
            ans: 2,
            explain: "-네요 (Cảm thán/Ngạc nhiên: Ôi ... CHƯA KÌA, Ồ ... THẾ NHỈ!). Ví dụ: 정말 많이 먹네요! (Ăn nhiều dễ sợ!)."
        },
        {
            q: "Cấu trúc kết hợp với từ loại nào?",
            options: ["Chỉ Động từ", "Chỉ Tính từ", "Chỉ Danh từ", "Cả Động từ và Tính từ tùy thích"],
            ans: 3,
            explain: "Cấu trúc này SIÊU DỄ do nó Cắm Trực Tiếp vào Mọi Vỏ Của thân từ (Tính từ lẩn Động từ) mà chả cần quan tâm mâm từ bất quy tắc."
        },
        {
            q: "Sự việc gì KHÔNG phù hợp để dùng '-네요'?",
            options: ["Nghe người bạn nói một tin sốc", "Trực tiếp nếm thử món ăn ngon", "Kể lại một sự thật LỊCH SỬ mà ai cũng biết (Thế chiến thứ 2)", "Thấy thời tiết sương mù dày đặc lạ thường"],
            ans: 2,
            explain: "-네요 chỉ áp dụng cho KINH NGHIỆM hoặc TRẢI NGHIỆM TRỰC TIẾP LẦN ĐẦU TIÊN TẠI THỜI ĐIỂM NÓI. Sự thật hiển nhiên không dùng cảm thán mới mẻ này."
        },
        {
            q: "Bẫy ngầm: Với Pachim ㄹ + 네요 (Ví dụ: 멀다 - Xa). Kết quả đúng là:",
            options: ["멀네요", "머네요", "머르네요", "멀으네요"],
            ans: 1,
            explain: "ㄹ lại chạm mặt ㄴ! Trong quy tắc (ㄹ gặp ㅅ/ㄴ/ㅂ, ㄹ sẽ khóc thét và bỏ đi nhảy xuống mương). 멀다 -> 머 + 네요 => 머네요 (Xa nhỉ!)."
        },
        {
            q: "Câu quá khứ: Hôm qua gặp cậu thì mình nhận ra cậu hát RẤT HAY NHỈ. (Cảm thán chuyện quá khứ trực tiếp trải nghiệm).",
            options: ["노래를 잘 하네요.", "노래를 잘 하았네요.", "노래를 잘 했네요.", "노래를 잘 했어요."],
            ans: 2,
            explain: "Cắm 았/었 vào trước để nói về trải nghiệm sốc ở quá khứ. 노래를 잘 하(하다) + 였/했 + 네요 => 잘 했네요."
        }
    ],
    "-았/었- (과거)": [
        {
            q: "Từ '공부하다' chia thì QUÁ KHỨ với đuôi câu lịch sự sẽ thành gì?",
            options: ["공부하았어요", "공부핬어요", "공부했어요", "공부해었어요"],
            ans: 2,
            explain: "Tất cả các động/tính từ kết thúc bằng -하다 đều chuyển thành -했- khi ở thì quá khứ. (공부했어요 = Đã học)."
        },
        {
            q: "Chia từ '가다' (Đi) sang quá khứ:",
            options: ["가았어요", "갔어요", "가었어요", "갔습니다"],
            ans: 1,
            explain: "가다 (kết thúc bằng ㅏ) -> 가 + 았어요 -> Rút gọn 2 chữ ㅏ lại thành 갔어요."
        },
        {
            q: "Từ '배우다' (Học) chia quá khứ BẤT QUY TẮC nào sẽ đúng?",
            options: ["배우았어요", "배웠어요", "배우었어요", "배와요"],
            ans: 1,
            explain: "배우다 kết thúc bằng ㅜ -> đi với 었어요. ㅜ + 어 = ㅝ => 배웠어요."
        },
        {
            q: "Với danh từ dùng đuôi '이다', quá khứ của từ '학생' (có patchim) là gì?",
            options: ["학생이었습니다", "학생이었어요", "학생이었네요", "Cả 1 và 2 đều đúng"],
            ans: 3,
            explain: "Danh từ có patchim + 이었어요 (hoặc thân mật hơn là 이었습니다). 학생이었습니다 và 학생이었어요 đều là ĐÃ LÀ HỌC SINH."
        },
        {
            q: "Điền vào chỗ trống:<br>어제 친구를 ____________.",
            options: ["만나요", "만납니다", "만날 거예요", "만났어요"],
            ans: 3,
            explain: "Có trạng từ thì quá khứ 어제 (hôm qua) -> Phải dùng thì quá khứ 만나다 + 았어요 = 만났어요."
        }
    ],
    "-(으)ㄹ 거예요": [
        {
            q: "Đuôi '-(으)ㄹ 거예요' biểu hiện ý nghĩa gì?",
            options: ["Câu hỏi", "Tương lai, dự định", "Quá khứ hoàn thành", "Mệnh lệnh"],
            ans: 1,
            explain: "Dùng để diễn tả một KẾ HOẠCH, DỰ ĐỊNH sẽ làm trong tương lai (Sẽ...)."
        },
        {
            q: "Chia thì tương lai cho '읽다' (Đọc):",
            options: ["읽을 거예요", "읽을거에요", "읽거예요", "읽을 거에요"],
            ans: 0,
            explain: "읽다 có patchim -> 읽을. Về MẶT CHÍNH TẢ chuẩn thì phải cách ra và viết là 거예요 => 읽을 거예요."
        },
        {
            q: "BẪY PATCHIM ㄹ: Từ '살다' (Sống) chia tương lai sẽ là:",
            options: ["살으을 거예요", "살을 거예요", "살 거예요", "사을 거예요"],
            ans: 2,
            explain: "Trường hợp đặc biệt: Đối với các từ có sẵn patchim ㄹ dưới đáy, ta chỉ việc cộng thẳng 거예요 vào luôn. 살다 -> 살 거예요."
        },
        {
            q: "Chức năng số 2 của '-(으)ㄹ 거예요' khi CHỦ NGỮ LÀ NGÔI THỨ BA (Anh ấy, Bạn đó, Thời tiết...) là gì?",
            options: ["Khuyên nhủ", "Dự đoán, phỏng đoán", "Ép buộc", "Hối hận"],
            ans: 1,
            explain: "내일 비가 올 거예요 (Tôi ĐOÁN ngày mai trời sẽ mưa). Khi ngôi số 3 không thể tự lên kế hoạch, thì câu mang nghĩa người nói đang dự đoán."
        },
        {
            q: "Dạng Tôn kính cực kỳ trang trọng (Formal) của '(으)ㄹ 거예요' là gì?",
            options: ["(으)ㄹ 것입니다", "-(으)ㄹ 겁니다", "-(으)ㄹ 습니다", "Cả 1 và 2"],
            ans: 3,
            explain: "-(으)ㄹ 것입니다 nói tắt lại sẽ chính là -(으)ㄹ 겁니다. Ví dụ: 내일 갈 겁니다 (Ngày mai tôi sẽ đi ạ)."
        }
    ],
    "-겠-": [
        {
            q: "-겠- và -(으)ㄹ 거예요 đều dịch là SẼ. Điểm cốt lõi KHÁC BIỆT khi dùng để nói Lời Hứa/Quyết Tâm của bản thân (Ngôi số 1) là gì?",
            options: ["-겠- chỉ dùng cho Vua chúa.", "(으)ㄹ 거예요 bày tỏ quyết tâm mạnh mẽ hơn.", "-겠- thể hiện một ý chí, quyết tâm ĐANH THÉP, cực kỳ mạnh mẽ.", "Không có khác biệt."],
            ans: 2,
            explain: "Ví dụ '다이어트를 하겠어요' (Tôi NHẤT ĐỊNH SẼ giảm cân!). -겠- mang tính tuyên thệ, ý chí quyết tâm cao độ so với kế hoạch mường tượng bình thường."
        },
        {
            q: "Câu mà người Hàn Quốc ngày nào nghe điện thoại hoặc được giao việc cũng nói là:",
            options: ["알았습니다", "알아요", "알겠습니다", "알 거예요"],
            ans: 2,
            explain: "알겠습니다 (Tôi ĐÃ HIỂU RÕ RỒI Ạ). Dùng -겠- để thể hiện ý chí tuân thủ, tiếp thu thông tin. Rất chuẩn mực trong đời sống."
        },
        {
            q: "Chức năng số 2 của -겠- là để PHỎNG ĐOÁN một sự việc ngay trước mắt (Chắc là...). Chọn câu biểu cảm ĐÚNG khi dọn ra một mâm cơm ngon:",
            options: ["맛있네요", "맛있을 거예요", "맛있겠어요", "맛있었어요"],
            ans: 2,
            explain: "맛있겠다 / 맛있겠어요! = Nhìn NGON QUÁ! (Bạn chưa ăn vào mồm, nên bạn nhìn và phỏng đoán mãnh liệt là 'chắc chắn nón sẽ ngon')."
        },
        {
            q: "Điền vào chỗ trống: 처음 ___________. (Rất vui được gặp anh lần đầu tiên).",
            options: ["보겠습니다", "만나겠습니다", "뵙겠습니다", "인사하겠어요"],
            ans: 2,
            explain: "처음 뵙겠습니다 = Rất hân hạnh được diện kiến (khiêm nhường). Lại áp dụng -겠- để tỏ ý chí trân trọng cuộc gặp."
        },
        {
            q: "So sánh -겠- và -(으)ㄹ 거예요 khi dùng để dự đoán. Câu nào có CĂN CỨ VỮNG CHẮC HƠN (như nghe mây đen sấm chớp rồi mới đoán)?",
            options: ["내일 비가 오겠어요.", "비가 올 거예요.", "Cả hai bằng nhau.", "Không cái nào có căn cứ."],
            ans: 1,
            explain: "-(으)ㄹ 거예요 thiên về dự đoán khách quan DỰA TRÊN CHỨNG CỨ/SỐ LIỆU (Xem dự báo thời tiết). Còn -겠- thiên về Dự đoán Cảm TÍNH chủ quan của người nói."
        }
    ],
    "-고 있다": [
        {
            q: "Cấu trúc '-고 있다' mang ý nghĩa gì?",
            options: ["Đã làm xong việc gì đó", "Đang tiến hành, đang làm một hành động dở dang", "Mới vừa làm xong", "Đã từng làm"],
            ans: 1,
            explain: "Giống như thì Hiện Tại Tiếp Diễn đuôi '-ing' trong tiếng Anh. 저는 밥을 먹고 있어요 = I am eating rice."
        },
        {
            q: "Lỗi sai KINH ĐIỂN: '-고 있다' CÓ THỂ gắn vào TÍNH TỪ được không?",
            options: ["Có, rất phổ biến", "Chỉ với các tính từ chỉ cảm xúc", "Tuyệt đối không", "Gắn thoải mái"],
            ans: 2,
            explain: "VÔ LÝ: Bạn KHÔNG THỂ nói 'Tôi đang đẹp' (예쁘고 있어요 - SAI). Phải đổi sang cấu trúc trở nên. -고 있다 CHỈ dùng cho ĐỘNG TỪ."
        },
        {
            q: "Hỏi MẸO: '모자를 쓰고 있어요' dịch là gì chuẩn nhất?",
            options: ["Tôi ĐANG lấy cái mũ đội lên đầu.", "Tôi MẶC DẪN cài mũ.", "Tôi ĐANG TRONG TRẠNG THÁI là có đội mũ trên đầu.", "Tôi sẽ lấy mũ."],
            ans: 2,
            explain: "Với động từ Mặc/Đội/Đi giày (입다, 쓰다, 신다...), khi gắn -고 있다 thì nó TRỞ THÀNH TRẠNG THÁI LƯU GIỮ kết quả. Dịch là 'đang mang/đang mặc trên người'. Khác biệt lớn so với tiếng Việt!"
        },
        {
            q: "Chia sang thể QUÁ KHỨ cho hành động 'Tối qua tôi ĐÃ ĐANG xem phim thì mất điện':",
            options: ["보고 잤어요", "봤고 있어요", "보고 있었어요", "봤어요"],
            ans: 2,
            explain: "Giữ nguyên -고, chỉ CHIA QUÁ KHỨ CHO CHỮ '있다' => -고 있었어요 (Đã đang làm gì đó trong quá khứ)."
        },
        {
            q: "Với người lớn tuổi, hình thức BẬC CAO KÍNH NGỮ của '-고 있다' là gì?",
            options: ["-고 있으세요", "고 계시다", "-고 주무시다", "-고 드시다"],
            ans: 1,
            explain: "있다 đứng cuối sẽ biến thành '계시다'. Nên câu 'Ông nội đang ngủ' sẽ là: 할아버지가 주무시고 계세요."
        }
    ],
    "-고": [
        {
            q: "Đuôi câu liên kết '-고' mang chức năng Liệt kê (Và) và Nối tiếp thời gian (Rồi). Đặc biệt khi kết nối hai tính từ, nó có nghĩa là:",
            options: ["Nhưng", "Hoặc", "Vừa ... Vừa (Và)", "Cho nên"],
            ans: 2,
            explain: "Hai tính từ nối với nhau (Ví dụ: 크고 싸요) mang nghĩa Liệt kê đặc điểm: Vừa To VÀ Vừa Rẻ (To và Rẻ)."
        },
        {
            q: "Quy tắc ngữ pháp siêu dễ của '-고' là gì?",
            options: ["Patchim ㅇ thêm 고, ㄱ thêm 으고", "Tất cả đều cộng trực tiếp -고 vào thân từ", "Áp dụng bất quy tắc ㄹ", "Biến đổi giống -아/어요"],
            ans: 1,
            explain: "Đây là ngữ pháp dễ nhất hệ mặt trời. Mọi động tính từ cứ vứt '다' đi rồi nhét '고' vào là xong. Không cần xét patchim hay nguyên âm: 먹고, 자고, 알고, 듣고."
        },
        {
            q: "Khi nối CÂU QUÁ KHỨ: 'Hôm qua tôi ĐÃ học bài RỒI ĐÃ đi ngủ', cách chia nào là CHUẨN người Hàn hay dùng nhất?",
            options: ["공부했고 잤어요.", "공부하고 잤어요.", "공부하았고 잤어요.", "공부하고 자요."],
            ans: 1,
            explain: "Lưu ý quan trọng: Với đuôi câu liên kết, người Hàn thường chỉ CHIA THÌ QUÁ KHỨ/TƯƠNG LAI Ở ĐỘNG TỪ CUỐI CÙNG thay vì chia cho từng vế. (공부하고 잤어요 tiết kiệm và tự nhiên hơn 공부했고 잤어요)."
        },
        {
            q: "Dịch: 'Bên ngoài trời mưa VÀ gió thổi.'",
            options: ["밖에 비가 왔고 바람이 불어요.", "밖에 비가 오고 바람이 불어요.", "밖에 비가 오지만 바람이 불어요.", "밖에 비가 오면 바람이 불어요."],
            ans: 1,
            explain: "비가 오다 (Mưa rơi) + 고 + 바람이 불다 (Gió thổi) -> 비가 오고 바람이 불어요."
        },
        {
            q: "Trong TOPIK, '-고' thường có từ đồng nghĩa nào đứng Ở ĐẦU CÂU THỨ HAI?",
            options: ["그래서 (Vì vậy)", "그러나 (Tuy nhiên)", "그리고 (Và/Sau đó)", "그러면 (Nếu vậy thì)"],
            ans: 2,
            explain: "A고 B = A. 그리고 B. Ví dụ: 저는 학생이고 그는 의사입니다 = 저는 학생입니다. 그리고 그는 의사입니다."
        }
    ],
    "-지만": [
        {
            q: "Trái ngược với -고, đuôi '-지만' mang ý nghĩa gì?",
            options: ["Vì", "Nếu", "Nhưng (Đối lập)", "Và"],
            ans: 2,
            explain: "Từ Vựng quan trọng! -지만 (= Nhưng). Nối hai vế có tính chất đối lập nhau (Tuy nhỏ NHƯNG có võ)."
        },
        {
            q: "Kết nối đúng: 'Tiếng Hàn khó nhưng thú vị'.",
            options: ["한국어는 어렵고 재미있어요.", "한국어는 어려워서 재미있어요.", "한국어는 어렵지만 재미있어요.", "한국어는 어려우면 재미있어요."],
            ans: 2,
            explain: "Khó (어렵다) >< Thú vị. => 어렵다 + 지만 = 어렵지만."
        },
        {
            q: "Khác với '-고', khi muốn nói quá khứ 'ĐÃ... nhưng...', việc CHIA THÌ VÀO TRƯỚC '-지만' (Ví dụ: 갔지만) là đúng hay sai?",
            options: ["Sai, không bao giờ được chia.", "Đúng, hoàn toàn có thể chia thì trước -지만.", "Chỉ chia được thì tương lai.", "Chỉ danh từ mới chia được."],
            ans: 1,
            explain: "-지만 cho phép chia Thì Quá Khứ ngay trước nó để nhấn mạnh. Ví dụ: 약을 먹었지만 계속 아파요 (Đã uống thuốc rồi nhưng vẫn đau)."
        },
        {
            q: "Từ '이다' (Là) khi gắn -지만 sẽ biến thành chữ gì (Lưu ý danh từ 학생 CÓ PATCHIM)?",
            options: ["학생이지만", "학생지만", "학생합니다", "학생고"],
            ans: 0,
            explain: "CÓ patchim -> 이지만 (학생이지만 - Tuy là học sinh). KHÔNG patchim -> 지만 (의사지만 - Tuy là bác sĩ)."
        },
        {
            q: "Từ nối (Liên từ) hay đứng ĐẦU CÂU đồng nghĩa với đuôi câu '-지만' là gì?",
            options: ["그리고", "그래서", "그렇지만 / 하지만", "그러면"],
            ans: 2,
            explain: "A지만 B = A. 하지만 B. / A. 그렇지만 B."
        }
    ],
    "-(으)면": [
        {
            q: "Câu điều kiện: 'NẾU bạn mệt THÌ hãy nghỉ ngôi đi.' Dùng ngữ pháp gì?",
            options: ["-아/어서", "-(으)면", "-(으)니까", "-(으)러"],
            ans: 1,
            explain: "-(으)면 dùng để thiết lập ĐIỀU KIỆN (Giả định NẾU... THÌ...)."
        },
        {
            q: "MẸO CHIA TIỀN TỆ: Khi đi kèm với động từ có Patchim ㄹ như '살다' (Sống), hoặc '길다' (Dài), chia -(으)면 thế nào?",
            options: ["살으면", "사면", "살면", "사르면"],
            ans: 2,
            explain: "ĐÂY LÀ ĐẶC QUYỀN CỦA ㄹ! Bất quy tắc ㄹ khi gặp -(으)면 sẽ RỤNG chữ (으) và gắn trực tiếp: 살다 -> 살면. 길다 -> 길면. (Nhớ câu 'ㄹ gặp ư thì ư mất')."
        },
        {
            q: "Trong TOPIK có một bẫy hay ra: KHÔNG ĐƯỢC DÙNG thì quá khứ '-았/었-' ở vế trước '-(으)면'. Lý do là gì?",
            options: ["Vì nó là tương lai.", "Vì 'Nếu' là giả định sự việc chưa xảy ra, quá khứ đã xảy ra rồi không thể 'nếu' kiểu thường được.", "Vì người Hàn không thích.", "Vì nó sai chính tả."],
            ans: 1,
            explain: "Chỉ khi nói về SỰ TIẾC NUỐI, ƯỚC GÌ CỦA QUÁ KHỨ ta mới xài: ~았/었으면 좋겠다 (Ước gì TÔI ĐÃ đi Hàn). Còn điều kiện thông thường: 봄이 오면 (Nếu xuân đến - ✓), 봄이 왔으면 (✗)."
        },
        {
            q: "Chia bất quy tắc ㅂ cho từ '덥다' (Nóng) ở cấu trúc -(으)면:",
            options: ["덥으면", "더으면", "더우면", "더우으면"],
            ans: 2,
            explain: "Bất quy tắc ㅂ: ㅂ gặp nguyên âm (으) sẽ biến thành 우. Do đó 덥다 => 더우 + 면 = 더우면 (Nếu trời nóng)."
        },
        {
            q: "Chia bất quy tắc ㄷ cho từ '듣다' (Nghe):",
            options: ["듣으면", "들으면", "듣면", "들면"],
            ans: 1,
            explain: "Bất quy tắc ㄷ: ㄷ gặp nguyên âm (으) => biến thành ㄹ. 듣다 => 들으면."
        }
    ],
    "-아/어서": [
        {
            q: "Cấu trúc '-아/어서' có 2 lớp nghĩa. Nghĩa thứ nhất là gì?",
            options: ["Mục đích (Để)", "Lý do (Vì... nên)", "Điều kiện (Nếu)", "Nhượng bộ (Dù)"],
            ans: 1,
            explain: "Nghĩa A: Nguyên nhân, lý do. Ví dụ: 배가 아파서 병원에 가요 (VÌ đau bụng NÊN đi bệnh viện)."
        },
        {
            q: "Nghĩa thứ hai của '-아/어서' là TRÌNH TỰ THỜI GIAN (Làm A RỒI làm B). Đặc điểm nào chứng minh vế A và vế B có liên kết chặt chẽ?",
            options: ["Hai vế chẳng liên quan gì nhau.", "Tân ngữ/đối tượng ở vế A sẽ Dính Dáng Chặt Chẽ vào hành động ở vế B.", "Vế A xảy ra ở quá khứ, vế B ở tương lai.", "Cả 2 vế đều mang nghĩa xấu."],
            ans: 1,
            explain: "Ví dụ: 시장에 가서 사과를 샀어요 = Đi chợ RỒI mua táo (Mua táo Ở CHỢ). Nó khác với -고 (đi chợ, rồi VÀ mua táo không rõ mua ở đâu)."
        },
        {
            q: "ĐIỂM CẤM KỴ TUYỆT ĐỐI 1: Có được chia thì Quá Khứ/Tương Lai VÀO TRƯỚC -아/어서 không?",
            options: ["Được, tôi vẫn chia suốt.", "Chỉ chia tương lai.", "TUYỆT ĐỐI KHÔNG BAO GIỜ (VD: 아팠어서 là SAI).", "Chỉ được chia ở nghĩa số 2."],
            ans: 2,
            explain: "Đây là ngữ pháp cấm kị chia thì. Luôn để VẾ TRƯỚC ở dạng HIỆN TẠI GỐC (아파서), cho dù toàn bộ câu kể về ngày hôm qua (아파서 병원에 갔어요)."
        },
        {
            q: "ĐIỂM CẤM KỴ TUYỆT ĐỐI 2: Khi dùng -아/어서 mang nghĩa VÌ / NÊN, đuôi câu BẮT BUỘC KHÔNG ĐƯỢC dùng các thể loại nào?",
            options: ["Trần thuật (습니다)", "Mệnh lệnh (Hãy... -(으)세요), Đề nghị (-ㅂ시다, -ㄹ까요)", "Nghi vấn (Câu hỏi)", "Quá khứ"],
            ans: 1,
            explain: "Mẹo chốt TOPIK I: Thấy vế cuối kết bằng ~(으)세요, ~ㅂ시다... thì vế đầu KHÔNG được dùng ~어서/아서 (bắt buộc phải thay bằng ~니까)."
        },
        {
            q: "Câu chào 'Rất vui vì được gặp bạn' sử dụng cấu trúc này là?",
            options: ["만나고 반갑습니다.", "만나서 반갑습니다.", "만나면 반갑습니다.", "만나지만 반갑습니다."],
            ans: 1,
            explain: "만나서 반갑습니다 là cụm vô cùng nổi tiếng. Phân tích ngữ pháp: VÌ (gặp gỡ) NÊN (Rất hân hạnh)."
        },
        {
            q: "Câu 'Vì khó nên tôi không học đâu' — bất quy tắc ㅂ ở đây chia thế nào?",
            options: ["어려워서 안 배울 거예요.", "어려우서 안 배울 거예요.", "어렵어서 안 배울 거예요.", "어렵아서 안 배울 거예요."],
            ans: 0,
            explain: "어렵다 (Khó) + 어서: Bất quy tắc ㅂ → ㅂ gặp nguyên âm biến thành 워 => 어려워서. Đây là bẫy bất quy tắc thường gặp trong TOPIK I."
        },
        {
            q: "Khi muốn diễn tả 'Vì LÀ...' với danh từ có patchim (như 학생). Chia thế nào?",
            options: ["학생아서", "학생어서", "학생이어서 (hoặc 학생이라서)", "학생서"],
            ans: 2,
            explain: "이다 + 아/어서 = 이어서. Danh từ có patchim: 이어서. Cụm '이라서' cũng rất hay dùng thay thế trong giao tiếp hàng ngày."
        }
    ],
    "-(으)니까": [
        {
            q: "Ngữ pháp đập tan giới hạn của '-아/어서' khi cùng nói về nguyên nhân 'VÌ / NÊN' là gì?",
            options: ["-지만", "-(으)면서", "-(으)니까", "-고"],
            ans: 2,
            explain: "-(으)니까 cũng mang nghĩa VÌ/NÊN nhưng mang tính LÝ DO CHỦ QUAN MẠNH MẼ HƠN (-아서 là lý do khách quan)."
        },
        {
            q: "Quyền năng lớn nhất của '-(으)니까' mà '-아/어서' ĐÁO ĐỂ XÁCH DÉP không bằng là gì?",
            options: ["Không chia được quá khứ.", "Chỉ liệt kê.", "Cho phép đi với ĐUÔI CÂU MỆNH LỆNH / ĐỀ NGHỊ (하세요, ㅂ시다, ㄹ까요) một cách thoải mái.", "Kết hợp được với danh từ."],
            ans: 2,
            explain: "비가 오니까 우산을 가져가세요 (Vì trời mưa NÊN HÃY mang ô đi theo). Câu này mà dùng 비가 와서 우산을 가져가세요 là SAI hoàn toàn."
        },
        {
            q: "Ngoại lệ nhỏ nhoi: Với BẤT QUY TẮC ㄹ, từ '만들다' cộng với 니까 ra từ gì?",
            options: ["만들으니까", "만드니까", "만들니까", "만들으니"],
            ans: 1,
            explain: "Bất quy tắc ㄹ (Lại là chữ L rụng rốn). Gặp 'ㄴ' là chữ ㄹ biến mất, chắp lại thêm trực tiếp 니까 => 만드니까."
        },
        {
            q: "Quyền năng số 3: '-(으)니까' ĐƯỢC PHÉP CHIA quá khứ / tương lai phía trước nó (điều cấm kị của -아/어서). Ví dụ:",
            options: ["밥을 먹었으니까 (Vì tôi ĐÃ ăn cơm rồi)", "밥을 먹었어서", "밥을 먹고서", "밥을 자니까"],
            ans: 0,
            explain: "먹다 + 었지 + 으니까 = 먹었으니까 (Bởi vì đã xơi no rồi...). Rất linh hoạt và quyền lực!"
        },
        {
            q: "Ý nghĩa BẤT NGỜ số 2 của '-(으)니까' (Thường xuất hiện nhiều ở TOPIK 2):",
            options: ["Sau khi", "Phát hiện/Nhận ra một kết quả sau khi làm hành động A (Sau khi... thì TÔI NHẬN THẤY)", "Trong khi", "Để"],
            ans: 1,
            explain: "집에 가니까 동생이 자고 있었어요 = Về đến nhà (thì tôi tò mò nhận ra/phát hiện ra) em đang ngủ. Lúc này CẤM dùng mệnh lệnh đuôi câu nha."
        }
    ],
    "-(으)ㄹ 때": [
        {
            q: "Đuôi '-(으)ㄹ 때' dịch ra tiếng Việt có nghĩa là gì?",
            options: ["Nếu như", "Trước khi", "Tại (địa điểm)", "Tại lúc / Trong khi / Khi (Thời điểm hành động)"],
            ans: 3,
            explain: "Diễn tả THỜI ĐIỂM mà một sự việc nào đó xảy ra."
        },
        {
            q: "Dịch nhanh: 'LÚC KHI ăn cơm thì bạn đến'.",
            options: ["밥 먹으면서 와요.", "밥을 먹고 와요.", "밥을 먹을 때 왔어요.", "밥을 먹으면 와요."],
            ans: 2,
            explain: "밥을 먹다 (Ăn cơm - có patchim) + 을 때 => 먹을 때 (Khi ăn cơm)."
        },
        {
            q: "Tương ứng với 'Khi còn nhỏ' (lúc nhỏ), người Hàn chia như thế nào với từ 어리다 (còn nhỏ)?",
            options: ["어릴 때", "어렸을 때", "어른 때", "Cả 1 và 2"],
            ans: 3,
            explain: "어릴 때 (nhấn mảnh trạng thái nhỏ) và 어렸을 때 (nhấn mạnh sự việc ở thời quá khứ). Cả hai đều dùng rất nhiều: 어렸을 때 한국에 살았어요."
        },
        {
            q: "Bất quy tắc ㅂ đối với từ 덥다 (Nóng). 'Khi thời tiết nóng...' chia thành:",
            options: ["덥을 때", "더울 때", "더울을 때", "덥을을 때"],
            ans: 1,
            explain: "ㅂ gặp 을 sẽ biến thành 울 => 더울 때. Đây là từ hay thi dạng nối câu trong môn Đọc TOPIK I."
        },
        {
            q: "Với DANH TỪ, ta không thể dùng (으)ㄹ, mà chỉ cộng thẳng thứ gì?",
            options: ["때", "을 때", "를 때", "이다 때"],
            ans: 0,
            explain: "Danh từ thời gian/sự kiện chỉ cần bỏ 때 vào sau: 방학 때 (Khi kỳ nghỉ), 점심 때 (Lúc ăn trưa)."
        }
    ],
    "-기 전에": [
        {
            q: "Cụm '-기 전에' dịch chính xác là gì?",
            options: ["Sau khi", "Trước khi", "Trong lúc", "Vào khi"],
            ans: 1,
            explain: "-기 biến động từ thành Danh từ. 전 = Trước, 에 = Vào sự... => Gộp lại là Trước khi làm gì đó. (Xảy ra sau thời điểm của vế chính)."
        },
        {
            q: "Đánh giá câu sau: '밥을 먹기 전에 손을 닦으세요' (Hãy rửa tay TRƯỚC KHI ăn cơm). Đúng hay Sai, Vì sao?",
            options: ["Sai, phải là 먹기 후", "Sai, phải chia thì", "Đúng hoàn toàn. Cứ lấy Động từ gốc Xóa '다' nối '기 전에'.", "Sai vì có patchim."],
            ans: 2,
            explain: "Cấu trúc 'Bất cần đạo lý': Động từ vứt 다 là gắn thẳng. Cực kỳ dễ! 자다 -> 자기 전에. 씻다 -> 씻기 전에."
        },
        {
            q: "Luật ngầm quan trọng: MỆNH ĐỀ ĐI VỚI '-기 전에' luôn KHÔNG ĐƯỢC CHIA THÌ QUÁ KHỨ/TƯƠNG LAI. Muốn chia thì phải chia ở đâu?",
            options: ["Chia ở đầu câu", "Chia ở vế thứ 2 (Vế cuối câu)", "Luôn luôn chia ở giữa", "Không được chia"],
            ans: 1,
            explain: "한국에 오기 전에 한국어를 공부했어요 (Tôi ĐÃ HỌC trước khi ĐẾN). Vế 'đến' giữ nguyên 현재 오기. Vế 'học' đuôi câu mới chia 공부했어요."
        },
        {
            q: "Với DANH TỪ (như 식사 - Bữa ăn), ta có cần thêm '-기' không?",
            options: ["Có, 식사기 전에", "Không, chỉ cần thêm 전에 (식사 전에)", "Phải thêm 를 전에", "Biển thành 식사하전에"],
            ans: 1,
            explain: "Đã mang sẵn mác Danh Từ thì không cần -기 nữa. Chỉ việc nhét thẳng 전에 sau nó. 식사 전에 (Trước bữa ăn), 회의 전에 (Trước cuộc họp)."
        },
        {
            q: "Để nhớ lâu, '전' trong '기 전에' là gốc Hán Việt gì?",
            options: ["Trí", "Tiền (Phía trước)", "Truyền", "Toàn"],
            ans: 1,
            explain: "전 (Tiền = Trước). Hậu (후 = Sau). Cứ nhớ Ngọ Tiền (오전), Ngọ Hậu (오후)."
        }
    ],
    "-(으)ㄴ 후에": [
        {
            q: "Đối ngược lập trường hoàn toàn với '-기 전에' là ngữ pháp nào mang nghĩa SAU KHI?",
            options: ["-(으)러", "-(으)면서", "-(으)ㄴ 후에", "-아/어서"],
            ans: 2,
            explain: "-(으)ㄴ 후에 hoặc -(으)ㄴ 뒤에/다음에 đều tề tựu chung mang ý nghĩa 'Sau khi VẤP phải cái việc này'."
        },
        {
            q: "Quy tắc chia -(으)ㄴ 후에 DỄ GÂY NHẦM LẪN. Đối với Động từ CÓ PATCHIM (như 먹다) thì chia thế nào?",
            options: ["먹은 후에", "먹는 후에", "먹고 후에", "먹은 전에"],
            ans: 0,
            explain: "Đây là cấu trúc dùng định ngữ Quá khứ, nên Động Từ Patchim -> 은. Không patchim -> ㄴ. 먹다 -> 먹은 후에."
        },
        {
            q: "Trường hợp Động từ KHÔNG PATCHIM (như 자다 - ngủ), ta biến đổi làm sao?",
            options: ["자은 후에", "잔 후에", "자고 후에", "자는 후에"],
            ans: 1,
            explain: "Không có patchim -> Chắp chữ ㄴ làm patchim lót tót vô dưới chữ 그 자 => 잔 후에 (Sau khi ngủ)."
        },
        {
            q: "Dịch: 'SAU KHI tốt nghiệp, tôi sẽ về quê.'",
            options: ["졸업하기 전에 고향에 갈 거예요.", "졸업하고 고향에 갈 거예요.", "졸업한 후에 고향에 갈 거예요.", "졸업하서 고향에 갈 거예요."],
            ans: 2,
            explain: "졸업하다 -> 졸업한 후에 (Sau khi...). Kèm thêm cái 갈 거예요 của tương lai phía sau là Max điểm 10."
        },
        {
            q: "Giống như '전에', với DANH TỪ thì '후에' dùng như thế nào?",
            options: ["Danh từ + 이 후에", "Danh từ + 은 후에", "Danh từ + 후에 (직접)", "Danh từ + 서 후에"],
            ans: 2,
            explain: "Gắn trực tiếp không suy nghĩ. 식사 (Bữa ăn) -> 식사 후에 (Sau bữa ăn). 회의 후에 (Sau cuộc họp)."
        }
    ],
    "-는데/-(으)ㄴ데": [
        {
            q: "Ngữ pháp '-는데/-(으)ㄴ데' có hai công dụng chính yếu nào trong giao tiếp hằng ngày?",
            options: ["Yêu cầu và Từ chối", "Liệt kê và Nguyên nhân", "Chỉ thời gian và Mệnh lệnh", "Đưa ra bối cảnh (Mào đầu) VÀ Nối ý tương phản (Nhưng)"],
            ans: 3,
            explain: "Hai nghĩa mạnh nhất: 1. Đưa thông tin mào đầu để câu sau hỏi tiếp (Tôi đói bụng, đi ăn không?). 2. Chỉ sự tương phản (Khó NHƯNG vui)."
        },
        {
            q: "Cách phân biệt cách chia ĐỘNG TỪ và TÍNH TỪ với ngữ pháp này là gì?",
            options: ["Giống nhau, đều dùng 는데.", "Động từ luôn dùng -는데. Tính từ dùng -(으)ㄴ데.", "Chỉ có tính từ mới dùng được.", "Tùy patchim mà dùng linh hoạt."],
            ans: 1,
            explain: "LUẬT THÉP: Động Từ CỨ MẶC ĐỊNH LÀ 는데 (먹는데, 가는데). Tính Từ thì Xét Patchim: Có patchim -> 은데 (작은데), Không patchim -> ㄴ데 (큰데)."
        },
        {
            q: "Chia '-는데/-(으)ㄴ데' cho cụm 'Mát mẻ ghê nhưng mà...' (시원하다 - Tính từ):",
            options: ["시원하는데", "시원하은데", "시원한데", "시원는은데"],
            ans: 2,
            explain: "Tính từ 시원하다 không có patchim ở chữ 하 -> Ghép chữ ㄴ xuống dưới đáy -> 시원한데."
        },
        {
            q: "Câu 'Tôi là sinh viên, vậy ở đây có được giảm giá không?' dùng ngữ pháp với từ '학생이다' (Là học sinh) thế nào?",
            options: ["학생인데...", "학생는데...", "학생은데...", "학생하는데..."],
            ans: 0,
            explain: "Với DANH TỪ + 이다 thì mặc định chia thành 인데 (Dù có patchim hay không). 학생인데, 의사인데."
        },
        {
            q: "Bẫy BẤT QUY TẮC Rụng Chữ L: Từ '살다' (Sống - Động từ) chia với 는데 ra chữ gì?",
            options: ["살는데", "사는은데", "산데", "사는데"],
            ans: 3,
            explain: "Động từ thì đáng lý cộng 는데 (살는데). Tuy nhiên do ㄹ gặp ㄴ nên ㄹ bị chết đuối. 살다 => 사 + 는데 = 사는데 (Tôi sống ở đây nhưng...)."
        }
    ],
    "-(으)려고": [
        {
            q: "Đuôi '-(으)려고' thể hiện ý nghĩa gì?",
            options: ["Bởi vì", "Cho dù", "Để / Định (Mục đích)", "Và"],
            ans: 2,
            explain: "Sử dụng khi đứng trước hành động để chỉ rõ MỤC ĐÍCH: Làm cái này ĐỂ ĐẠT ĐƯỢC cái kia."
        },
        {
            q: "Dịch nhanh: 'Tôi đi thư viện ĐỂ MƯỢN SÁCH'.",
            options: ["책을 빌리러 도서관에 가요.", "책을 빌리려고 도서관에 가요.", "책을 빌려서 도서관에 가요.", "Cả 1 và 2 đều đúng, vì (으)려고 cũng dùng cho câu động từ di chuyển được."],
            ans: 3,
            explain: "Mặc dù (으)러 chuyên môn dùng với các động từ di chuyển 가다/오다... Nhưng -(으)려고 là CHÚA TỂ CỦA MỤC ĐÍCH, nó CÂN ĐƯỢC MỌI TỪ, bao gồm luôn cả động từ di chuyển."
        },
        {
            q: "ĐIỂM CẤM KỴ TO NHẤT củA -(으)려고: Vế đằng sau tuyệt đối KHÔNG ĐƯỢC dùng dạng nào?",
            options: ["-아/어요", "Quá khứ", "-ㅂ시다, -(으)세요 (Đề nghị/Mệnh lệnh)", "Danh từ"],
            ans: 2,
            explain: "Bạn không thể nói: Về nhà ĐỂ ngủ THÌ HÃY ĐI ĐI. -(으)려고 rất kị rủ rê mệnh lệnh. Nếu muốn rủ rê, phải thay bằng -(으)러 đi với động từ di chuyển."
        },
        {
            q: "Chia (으)려고 với từ '만들다' (Làm, chế tạo - Có patchim ㄹ):",
            options: ["만들으려고", "만들려고", "만드려고", "만으려고"],
            ans: 1,
            explain: "Tuy 만들다 có patchim, nhưng quy tắc chữ L lại ưu ái kết hợp thẳng luôn với đuôi bắt đầu bằng ㄹ => 만들 + 려고 = 만들려고 (Để làm)."
        },
        {
            q: "Khi '-(으)려고' đứng ở vị trí CUỐI CÂU và kết hợp với '하다' (-(으)려고 하다) thì câu mang nghĩa gì?",
            options: ["Tôi định...", "Tôi bắt buộc...", "Tôi hoàn thành...", "Tôi chán..."],
            ans: 0,
            explain: "내일 친구를 만나려고 해요 (Ngày mai tôi ĐỊNH ĐI gặp bạn). Thể hiện một dự định cá nhân rõ ràng trong đầu (plan)."
        }
    ],
    "-(으)면서": [
        {
            q: "Cấu trúc '-(으)면서' dùng diễn tả hành động như thế nào?",
            options: ["Hai hành động xảy ra ngẫu nhiên.", "Hai hành động do 2 người khác nhau làm.", "Một hành động xong rồi mới tới hành động kia.", "Hai hành động XẢY RA ĐỒNG THỜI do cùng MỘT người thực hiện (Vừa... Vừa...)."],
            ans: 3,
            explain: "Ví dụ: 음악을 들으면서 공부해요 (MỘT MÌNH TÔI: Vừa nghe nhạc, vừa học bài)."
        },
        {
            q: "Có thể đổi người thực hiện (Chủ ngữ) ở cấu trúc -(으)면서 không? (VD: Mẹ hát trong khi Bố rửa bát)",
            options: ["Được, rất bình thường.", "Tuyệt đối không được, chủ ngữ 2 vế PHẢI LÀ MỘT.", "Nếu đổi thì phải chia quá khứ.", "Nếu thêm 은/는 thì được."],
            ans: 1,
            explain: "BẮT BUỘC Chủ ngữ 2 vế phải thống nhất. (엄마가 노래하면서 아빠가 설거지해요 -> CÂU NÀY BỊ SAI NGỮ PHÁP). Chữa lại: 엄마가 노래하면서 설거지해요 (Mẹ vừa hát vừa rửa bát - Tự làm tự chịu)."
        },
        {
            q: "Chia từ '울다' (Khóc) với -(으)면서: Vừa khóc vừa...",
            options: ["울으면서", "울으면서", "울면서", "우면서"],
            ans: 2,
            explain: "Bất quy tắc ㄹ + -(으)면서: Coi như KHÔNG CÓ PATCHIM và cộng thẳng 면서 => 울면서. 울면서 말해요 (Cậu ấy vừa khóc vừa nói). "
        },
        {
            q: "Chia bất quy tắc ㄷ với '듣다' (Nghe):",
            options: ["듣면서", "듣으면서", "들으면서", "들면서"],
            ans: 2,
            explain: "듣 gặp (으) bị biến thành 들 + 으면서 => 들으면서 (Vừa nghe)."
        },
        {
            q: "Trong 2 hành động kết nối bằng -(으)면서, hành động nào là hành động TRỌNG TÂM, QUAN TRỌNG HƠN?",
            options: ["Hành động ĐẦU", "Hành động SAU (Vế sau)", "Giống nhau", "Tuỳ thuộc vào cách nhấn giọng"],
            ans: 1,
            explain: "Âm nhạc chỉ là nền, Đọc sách mới là chính. => 음악을 들으면서 책을 읽어요 (Vế VẼ SAU 책을 읽어요 là Focus chính của não bộ lúc đó)."
        }
    ],
    "-거나": [
        {
            q: "Bạn dùng '-거나' khi nào?",
            options: ["So sánh", "Dự đoán", "Liệt kê các SỰ LỰA CHỌN (Hoặc, Hay là)", "Phủ định"],
            ans: 2,
            explain: "Chuyên trị đứng giữa 2 Động từ / Tính từ. 주말에 영화를 보거나 운동해요 (Tôi xem phim hoặc tập thể thao - làm cái nào cũng được)."
        },
        {
            q: "Điểm cộng LỚN NHẤT của '-거나' là gì đối với người học?",
            options: ["Chẳng có bất quy tắc chết tiệt nào, CỨ GẮN THẲNG '거나' VÀO SAU BẤT KẺ TỪ NÀO.", "Chia theo nguyên âm ㅏ,ㅗ.", "Bắt buộc học thuộc lòng.", "Có ý nghĩa sang trọng."],
            ans: 0,
            explain: "Nó bắt đầu bằng phụ âm '거' (Cờ) => Không có hiện tượng va chạm nguyên âm. 먹다 -> 먹거나. 살다 -> 살거나. 덥다 -> 덥거나. Ngữ pháp THIÊN THẦN."
        },
        {
            q: "Nếu với Danh Từ, ta không dùng '-거나' thì ta nối từ 'Hoặc' bằng gì?",
            options: ["-(이)거나", "-(이)나", "Nối chung với 거나", "Cũng được dùng 거나 luôn"],
            ans: 1,
            explain: "Động Từ: 보거나 (Hoặc Xem). Danh Từ: 사과나 바나나 (Táo hoặc Chuối). Với danh từ, ta dùng Danh từ + (이)나."
        },
        {
            q: "Có được đính LỚN HƠN 2 lựa chọn (VD: Học bài, Chơi game HOẶC ngủ) dùng -거나 không?",
            options: ["Chỉ duy nhất 2", "Ngữ pháp bắt buộc 2", "Được phép nối thành chuỗi A거나 B거나 C한다...", "Không."],
            ans: 2,
            explain: "노래를 하거나 춤을 추거나 게임을 해요. Liệt kê đống lựa chọn vô tư."
        },
        {
            q: "Khi thêm Thì Quá Khứ vào '-거나' thì thế nào?",
            options: ["Chỉ chia ở từ cuối cùng: 보거나 먹었어요.", "Cả 2 cách: 보거나 먹었어요 VÀ 봤거나 먹었어요 đều ĐÚNG.", "Tuyệt đối không chia.", "Phải dùng chữ 았거나."],
            ans: 1,
            explain: "-거나 chấp nhận việc bạn có thể thêm Quá khứ ở trước nó (봤거나 먹었어요) HOẶC để gọn gàng hơn là chỉ chia ở vế cuối. Cả 2 cách đều đúng chuẩn 100%."
        }
    ],
    "-아/어도": [
        {
            q: "Kết cấu ngữ pháp '-아/어도' có sức mạnh dịch là gì?",
            options: ["Vì... Nắm", "Dù... Cũng (Cho dù làm A thì kết quả vẫn là B, không đổi)", "Vừa... Vừa...", "Sau khi... Mới"],
            ans: 1,
            explain: "약은 단비처럼 내리는 비 맞아도 아파요 = Thuốc dẫu có là mưa xuống cũng đau... Cấu trúc thể hiện sự NHƯỢNG BỘ, kết quả không phai mờ dẫu có điều kiện khác xảy tới."
        },
        {
            q: "Câu 'Dù ốm, anh ấy vẫn đi làm' dùng từ '아프다' (Ốm):",
            options: ["아프어도 회사에 가요.", "아파도 회사에 가요.", "아프도 회사에 가요.", "아피도 회사에 가요."],
            ans: 1,
            explain: "Bất quy tắc ㅡ: 아프다 + 아/어도 => 아파도 (Vì bỏ ㅡ đi, chữ P phơ trơ trội, nhìn lên chữ A phía trước thấy ㅏ nên cộng 아도 => 아파도)."
        },
        {
            q: "Từ '아무리' (Dù... Đến đâu) thường được kết giao chặt chẽ tạo thành cặp bài trùng (Combo) với ngữ pháp nào?",
            options: ["-아/어서", "-고", "-아/어도", "-거나"],
            ans: 2,
            explain: "Combo bất khả chiến bại: 아무리 ~ 아/어도. Ví dụ: 아무리 바빠도 전화하세요 (Dù có bận TƠÍ CỠ NÀO ĐI NỮA thì cũng hãy gọi điện nhé)."
        },
        {
            q: "Với Tính từ '어렵다' (Khó) + 아/어도:",
            options: ["어려워도", "어렵어도", "어려오도", "어렵아도"],
            ans: 0,
            explain: "Bất quy tắc ㅂ. ㅂ gặp Nguyên âm (어) => biến thành 워 => 어려워도."
        },
        {
            q: "Với Danh từ '학생이다' (Là học sinh) + Cho dù là:",
            options: ["학생아도", "학생어/아도", "학생이어도 (hoặc 학생라도)", "Cả 3 sai"],
            ans: 2,
            explain: "이다 chia 아/어요 là 이에요/예요. -> Vậy chia với 아/어도 là 이어도 / 여도. Ví dụ: 겨울이어도 아이스크림을 먹어요 (Dù là mùa đông nhưng tôi vẫn xơi kem)."
        }
    ],
    "-(으)러": [
        {
            q: "Cấu trúc '-(으)러' DÀNH RIÊNG và KẾT ĐÔI MẠNH NHẤT cho nhóm động từ nào ở vế phía sau?",
            options: ["Nhóm Cảm xúc", "Nhóm Mệnh lệnh", "Nhóm Từ mô tả thời tiết", "Nhóm ĐỘNG TỪ CHỈ SỰ DI CHUYỂN (가다, 오다, 다니다, 내려가다...)"],
            ans: 3,
            explain: "Ý nghĩa của nó là ĐI ĐẾN ĐÂU ĐỂ LÀM GÌ ĐÓ. Bắt buộc động từ ở vế cuối phải dính tới việc cất bước giò di chuyển: 친구를 만나러 집에 왔어요 (Đi đến nhà để... gặp bạn)."
        },
        {
            q: "Dịch: Đi đến siêu thị ĐỂ mua thịt (고기).",
            options: ["고기를 사며 마트에 가요.", "고기를 사러 마트에 가요.", "고기를 사고 마트에 가요.", "고기를 살 때 마트에 가요."],
            ans: 1,
            explain: "사다 (Mua) + 러 => 사러 + Đi siêu thị (마트에 가다) = 사러 마트에 가요."
        },
        {
            q: "Chia từ '운동하다' (Tập thể dục) với '-(으)러':",
            options: ["운동하으러", "운동하로", "운동하러", "운동해서"],
            ans: 2,
            explain: "하다 (Không patchim) -> Cộng 러 => 운동하러 (가요) = (Đi) tập thể thao đây!"
        },
        {
            q: "Tuyệt đối không dùng -(으)러 khi Vế kết thúc bằng cái gì (Đã nhắc ở phần giải thích)?",
            options: ["Câu có đuôi 가다 (đi)", "Câu có đuôi 오다 (đến)", "Không phải là động từ di chuyển (như 먹다, 읽다...)", "Chia tương lai"],
            ans: 2,
            explain: "SAI LẦM PHỔ BIẾN: 한국어를 공부하러 책을 샀어요. (Tôi mua cuốn sách ĐỂ học tiếng Hàn). SAI ngữ pháp TOÀN TẬP do 샀다 (mua) KHÔNG phải là một bước đi di chuyển. Bắt buộc phải thay chữ 하러 thành 하려고."
        },
        {
            q: "Trường hợp Patchim ㄹ: '만들다' (Làm) + Đi để thay tạo:",
            options: ["만들러", "만들으러", "만드러", "만들러여"],
            ans: 0,
            explain: "Bất quy tắc ㄹ: Đi với 러 thì coi nó như con ruột (coi như không có patchim), cộng thẳng 러 => 만들러 (가요). "
        }
    ],
    "-고 싶다": [
        {
            q: "Ngữ pháp '-고 싶다' dùng để diễn tả điều gì?",
            options: ["Dự định làm gì", "Sự hối hận", "Mong muốn, ước muốn (Muốn...)", "Đang làm gì"],
            ans: 2,
            explain: "Diễn tả hy vọng/mong ước muốn thực hiện một hành động nào đó. 저는 여행을 가고 싶어요 (Tôi MUỐN đi du lịch)."
        },
        {
            q: "Điểm siêu lợi hại của '-고 싶다' khi chia là gì?",
            options: ["Phải xét patchim.", "Cứ gắp thẳng '고 싶다' dính vào thân động từ (vứt 다 đi), không cần quan tâm bất quy tắc.", "Chỉ dùng với tính từ.", "Chỉ đi với nguyên âm ㅏ, ㅗ."],
            ans: 1,
            explain: "Cực dễ chia: 먹다 -> 먹고 싶다. 살다 -> 살고 싶다. 듣다 -> 듣고 싶다. KHÔNG có bất quy tắc nào ở đây cả!"
        },
        {
            q: "CẠM BẪY LỚN: Khi chủ ngữ thay đổi từ 'Tôi' sang 'Ngôi thứ 3' (Ngôi thứ 3 là Anh ấy, Bố mẹ, Các bạn, Cậu ta...) thì chia như thế nào?",
            options: ["Vẫn dùng -고 싶다.", "-고 싶어하다", "-고 싫어요", "-고 싶네요"],
            ans: 1,
            explain: "RẤT QUAN TRỌNG: Ngôi số 1/2 thì dùng -고 싶다. NHƯNG ngôi số 3 BẮT BUỘC dùng -고 싶어하다. (VD: 동생이 케이크를 먹고 싶어해요 = Em tôi nó muốn ăn bánh kem)."
        },
        {
            q: "Dịch: 'Tôi đã từng RẤT MUỐN đi Hàn Quốc' (Nhấn mạnh mong muốn xảy ra trong quá khứ).",
            options: ["한국에 가고 싶었어요.", "한국에 가고 싶을 거예요.", "한국에 가고 싶네요.", "한국에 가서 싶어요."],
            ans: 0,
            explain: "고 + 싶다 (Quá khứ: 싶었어요). Hành động muốn nằm ở thì quá khứ. 가고 싶었어요 (Ngày xưa tôi đã khao khát/đã muốn đi)."
        },
        {
            q: "Phủ định của '-고 싶다' (Không muốn) viết thế nào cho tự nhiên nhất?",
            options: ["안 -고 싶다 (안 먹고 싶어요)", "-고 싶지 않다 (먹고 싶지 않아요)", "Cả 1 và 2 đều dùng rất đúng và phổ biến.", "Chỉ cách 2 mới đúng."],
            ans: 2,
            explain: "Cả hai cách đều dùng nhiều. 안 먹고 싶어요 (Văn nói thân thiện). 먹고 싶지 않아요 (Văn viết trang trọng hơn tí)."
        }
    ],
    "-(으)ㄹ 수 있다/없다": [
        {
            q: "Cấu trúc '-(으)ㄹ 수 있다' tương đương với từ nào trong tiếng Anh?",
            options: ["Must", "Can", "Will", "Should"],
            ans: 1,
            explain: "Khả năng: Can. Tôi CÓ THỂ làm gì đó (한국어를 할 수 있어요 - Tôi có thể nói tiếng Hàn)."
        },
        {
            q: "Tương ứng, nếu không thể làm gì thì dùng: -(으)ㄹ 수 없다. Nó đồng nghĩa với phó từ nào hay đặt trước động từ?",
            options: ["안", "늘", "못", "참"],
            ans: 2,
            explain: "못 (Không thể) đứng trước gốc từ = 안 năng lực. 할 수 없어요 = 못 해요. (Tôi bó tay/bất lực/không thể làm được)."
        },
        {
            q: "Bất quy tắc ㄹ tiếp tục ra tay. Cộng '-(으)ㄹ 수 있다' vào chữ '만들다' (Làm):",
            options: ["만들 수 있어요", "만드을 수 있어요", "만들을 수 있어요", "만드수 있어요"],
            ans: 0,
            explain: "TỪ KẾT THÚC BẰNG Patchim ㄹ thì KHÔNG thêm (으), KHÔNG thêm ㄹ, mà CHẤM MÚT THẲNG: 만들 + 수 있다 => 만들 수 있어요."
        },
        {
            q: "Dịch nhanh: 'Cuối tuần này bạn CÓ THỂ ĐẾN không?'",
            options: ["주말에 가요?", "주말에 올 거예요?", "이번 주말에 올 수 있어요?", "이번 주말에 왔어요?"],
            ans: 2,
            explain: "Hỏi về khả năng/xác nhận lịch trình: Bạn có thể...? -> 오다 (đến) + ㄹ 수 있어요? => 올 수 있어요?"
        },
        {
            q: "Với từ '듣다' (Nghe - có patchim ㄷ). Chia với -(으)ㄹ 수 있다:",
            options: ["듣을 수 있다", "들을 수 있다", "듣수 있다", "들수 있다"],
            ans: 1,
            explain: "ㄷ chạm trán nguyên âm 으. Lập tức ㄷ biến thành ㄹ => 들 + 을 수 있다 => 들을 수 있어요."
        }
    ],
    "-아/어야 하다/되다": [
        {
            q: "Mang nặng âm hưởng cưỡng chế, '-아/어야 하다' dịch sang tiếng Việt là gì?",
            options: ["Muốn", "Phải", "Nên", "Được phép"],
            ans: 1,
            explain: "Must/Have to. Diễn tả sự bắt buộc, luân lý, nghĩa vụ. (숙제를 해야 해요 - Phải làm bài tập)."
        },
        {
            q: "Sự khác nhau giữa '-아/어야 하다' và '-아/어야 되다' là gì?",
            options: ["Nghĩa khác biệt hoàn toàn.", "하다 dùng cho quá khứ, 되다 hiện tại.", "Nghĩa giống nhau 100%. 되다 thường thấy trong KIỂU KHẨU NGỮ ĐỜI THƯỜNG (văn nói) nhiều hơn 하다.", "되다 chỉ dùng cho sếp."],
            ans: 2,
            explain: "Hai cụm này nhét nhau vào chảo xào chung nghĩa 'Phải'. Nhưng 되다 khi chia -아/어요 thành 돼요 nên rất mượt mồm trong tiếng lóng/khẩu ngữ hàng ngày. (가야 돼요 = 가야 해요 = Phải đi)."
        },
        {
            q: "Tuy có vẻ dễ, nhưng từ 'Phải' yêu cầu quy tắc chia CÂN NÃO nào?",
            options: ["Tuỳ chữ cái", "Chia Bất quy tắc 100%", "Chia hệt như kết cấu -아/어요 (Nguyên âm ㅏ, ㅗ thì kết hợp 아야, các nguyên âm còn lại đi với 어야...)", "Gắn thẳng trực tiếp"],
            ans: 2,
            explain: "Luật chơi này y hệt -아/어요 huyền thoại. Xem thân từ chứa âm gì mới chơi tiếp. 먹다 -> 먹어야 하다. 가다 -> 가야 하다. 하다 -> 해야 하다."
        },
        {
            q: "Đóng gói thì Quá khứ cho cụm từ 'Hôm qua TÔI ĐÃ PHẢI làm bài tập' (Mọi chuyện trôi qua rồi).",
            options: ["숙제를 헸어야 해요.", "숙제를 해야 했어요.", "숙제를 하았어야 했어요.", "숙제를 하고 해야 해요."],
            ans: 1,
            explain: "Chia thì ở cái đuôi cuối cùng. 하다 / 되다 => 했어요 / 됐어요. (숙제를 해야 했어요 = Đã phải cắm đầu làm)."
        },
        {
            q: "Từ đồng nghĩa ngược của 'Phải làm' là 'Không cần phải làm'. Tiếng Hàn dùng câu nào để diễn đạt '안 가도 돼요'?",
            options: ["Không phải là không đi nha.", "Đừng đi (Mệnh lệnh).", "Không đi CŨNG ĐƯỢC (Tức là KHÔNG CẦN PHẢI đi).", "Đã không đi."],
            ans: 2,
            explain: "안 ~ 아/어도 되다 (Không làm... cũng ok / Không cần phải làm). Đây là cặp bài trùng về sự bắt buộc vs nới lỏng."
        }
    ],
    "-(으)면 안 되다": [
        {
            q: "Phía trên học '-(으)면되다' là (Làm... là ĐƯỢC/Oki). Vậy '-(으)면 안 되다' có sức sát thương như thế nào?",
            options: ["Đừng có làm nha mày", "Sẽ không làm đâu", "Dùng để ra tối hậu thư CẤM ĐOÁN hoàn toàn (Không được..., Làm vậy KHÔNG ĐƯỢC).", "Chỉ sự nhờ vả"],
            ans: 2,
            explain: "안 되다 (Không được sự đồng ý/Cho phép). NẾU BẠN LÀM A... LÀ KHÔNG ĐƯỢC! => Tuyệt đối không được/Cấm được làm."
        },
        {
            q: "Dịch sang tiếng Hàn văn phong bệnh viện: 'Ở đây KHÔNG ĐƯỢC HÚT THUỐC!'",
            options: ["여기서 담배를 피우지 마세요.", "여기서 담배를 피울 수 없어요.", "여기서 담배를 피우면 안 돼요.", "여기서 담배를 안 피워요."],
            ans: 2,
            explain: "담배를 피우다 (Hút thuốc) + 면 안 돼요 (Nếu hút là bị bắt đó nha => Cấm hút/Không được phép hút)."
        },
        {
            q: "Khi đi với Tính Từ có patchim như '늦다' (Trễ, muộn). Ghép sao cho chuẩn 'Tuyệt đối không được đi muộn nha'?",
            options: ["늦면 안 돼요", "늦으면 안 돼요", "늦지 안 돼요", "늦을 수 안 돼요"],
            ans: 1,
            explain: "Có patchim + 으면 => 늦으면 안 돼요."
        },
        {
            q: "Câu hỏi Ngược (Dùng để cầu xin lạy lục): 'Làm gì đó... CÓ ĐƯỢC KHÔNG?' (-(으)면 안 돼요?). Khi bạn nói 지각하면 안 돼요? thì nghĩa là gì?",
            options: ["Tôi cấm bạn đến muộn.", "Tụi mình đừng đến muộn.", "TÔI LÀM ƠN... đến muộn được không? (Nếu đến muộn thì KHÔNG ĐƯỢC đúng không?)", "Đừng trễ nha."],
            ans: 2,
            explain: "Khi lên giọng ở cuối thành CÂU HỎI ? thì nó mang hàm ý LÈO NHÈO NÀN NỈ: 'Làm xíu không được sao/Năn nỉ mà?'. Rất hay dùng bằng khẩu ngữ."
        },
        {
            q: "Trường hợp patchim 'ㄹ': 팔다 (Bán). 'Không được bán cái xe này'.",
            options: ["팔으면 안 돼요", "팔면 안 돼요", "파면 안 돼요", "팔러 안 돼요"],
            ans: 1,
            explain: "Gặp ㄹ thì luôn luôn gắn thẳng: 살면, 팔면, 놀면 => 팔면 안 돼요."
        }
    ],
    "-아/어 주다": [
        {
            q: "Tính năng nổi trội của '-아/어 주다' là mang sắc thái nào trong giao tiếp?",
            options: ["Cãi nhau", "Nhờ vả, Yêu cầu NHẸ NHÀNG hoặc Mô tả việc ai đó 'LÀM GIÚP' cho người khác.", "Dự đoán thời gian", "So sánh"],
            ans: 1,
            explain: "주다 nghĩa gốc là CHO. Động từ + (Làm) Cho. 문을 닫아 주세요 (Xin làm ơn hãy Đóng Cửa CHO tôi với)."
        },
        {
            q: "Với người lớn tuối hoặc cấp trên, MÀ BẠN MUỐN ĐỀ NGHỊ MÌNH LÀM GIÚP CHO HỌ. Bạn không dùng 주다 mà dùng ĐỘNG TỪ KHIÊM NHƯỜNG nào?",
            options: ["-아/어 계시다", "-아/어 드리다", "-아/어 뵙다", "-아/어 하시다"],
            ans: 1,
            explain: "드리다 là khiêm nhường (Dâng, bẩm). 제가 도와 드릴까요? (Em làm ơn MANG TỚI/DÂNG TỚI sự giúp đỡ cho sếp nhé? = Em giúp sếp nhé?)"
        },
        {
            q: "Chia từ '가르치다' (Dạy học) cho câu: 'Nhờ vả dạy tiếng Hàn GÌM TÔI VỚI'.",
            options: ["가르치어 주세요", "가르쳐 주세요", "가르처 주세요", "가르쳐 줘요"],
            ans: 1,
            explain: "가르치다 -> 가르치 + 어 = 가르쳐 => 가르쳐 주세요!. Các bé fan K-pop thì hay xài 가르쳐 줘."
        },
        {
            q: "Còn khi bạn đang khoe mẽ: 'Bố tôi đã làm CƠM NẮM CHO TÔI ĐÓ'. Bạn chia đuôi cuối thế nào?",
            options: ["만들어 주세요", "만들어 주었어요 (만들어 줬어요)", "만들어 줄 거예요", "만들어 드리겠어요"],
            ans: 1,
            explain: "Hành động có người khác ĐÃ RA TAY GIÚP ĐỠ mình rồi => Chia quá khứ ở đuôi 주다 => 줬어요. 아빠가 김밥을 만들어 줬어요."
        },
        {
            q: "Câu 'Đọc một chút GIÚP TÔI VỚI' -> 읽다 (Đọc) chia thế nào?",
            options: ["읽어 주세요", "읽아 주세요", "읽은 주세요", "읽기 주세요"],
            ans: 0,
            explain: "읽 (Nguyên âm ㅣ) + 어 => 읽어 주세요."
        }
    ],
    "-아/어 보다": [
        {
            q: "Kinh nghiệm trải qua, hay sự mạo hiểm: 'THỬ ĐI!, NẾM THỬ CHÚT ĐI!'. Ngữ pháp '-아/어 보다' thực chất nghĩa là gì?",
            options: ["Hành động bằng Mắt (Nhìn chằm chằm)", "Làm một hành động để MỞ RỘNG TẦM MẮT (Làm cái gì đó THỬ XEM CẢM GIÁC THẾ NÀO)", "Chơi trốn tìm", "Ra lệnh mạnh"],
            ans: 1,
            explain: "보다 là (Xem/Nhìn). Động từ + 아/어 보다 => Làm hành động này XONG NHÌN XEM KẾT QUẢ/CHƠI THỬ XEM SAO. (Ăn Xem, Mặc Xem, Coi Xem)."
        },
        {
            q: "Ghép vào: Cậu MẶC THỬ cái áo (옷) này xem! (입다 = Mặc).",
            options: ["옷을 입아 보세요.", "옷을 입어 보세요.", "옷을 입고 보세요.", "옷을 입의 보세요."],
            ans: 1,
            explain: "입 (Nguyên âm ㅣ) + 어 + 보다 => 입어 보세요."
        },
        {
            q: "Đặc sản của '-아/어 보다' là khi dùng ở THÌ QUÁ KHỨ (-아/어 봤어요). Nó sẽ mang một lớp áo ý nghĩa hoàn toàn mới là gì?",
            options: ["Giận hờn dỗi bóng.", "Khoe khoang KINH NGHIỆM SỐNG đã trãi qua sự việc đó rồi (TÔI ĐÃ TỪNG...).", "Thất hứa.", "Buồn bã."],
            ans: 1,
            explain: "한국에 가 봤어요 = Tôi đã đi (tới) Hàn Quốc XONG VÀ NGẮM NHÌN (Thử/trải qua nó) rổi. Dịch siêu mượt là 'Tôi ĐÃ TỪNG đi HQ'."
        },
        {
            q: "Hỏi trải nghiệm: 'Cậu ĐÃ TỪNG xem bộ phim này chưa?'",
            options: ["비빔밥을 먹어 봅니까?", "이 영화를 봐요?", "이 영화를 봐 봤어요?", "이 영화를 봤어요?"],
            ans: 2,
            explain: "보다 (Xem) + 아/어 봤다 => 보 + 아 봤다 => 봐 봤어요? (Nghe có vẻ lặp chữ nhưng nó lại siêu đúng luật 100%)."
        },
        {
            q: "Rủ rê người khác Thử nghiệm một thứ mới: 'Cuối tuần này chúng mình ĂN THỬ món ăn Hàn Quốc không?'",
            options: ["한국 음식을 먹을래요?", "한국 음식을 먹읍시다.", "한국 음식을 먹어 볼까요?", "한국 음식을 먹고 있어요."],
            ans: 2,
            explain: "Combo tuyệt đỉnh: ~아/어 보다 + ~(으)ㄹ까요? => ~아/어 볼까요? (Thử làm cái này với tôi nha? / Đi thử ha?)."
        }
    ],
    "-(으)ㄴ 적이 있다/없다": [
        {
            q: "Để diễn tả 'TÔI ĐÃ TỪNG...' thay vì dùng '-아/어 봤다' (Đã thử nghiệm qua). Bạn có thể dùng một cấu trúc chuyên xưng hô trải nghiệm đó là:",
            options: ["-(으)ㄹ 지경이다", "-(으)ㄴ 적이 있다/없다", "-아/어도 되다", "-(으)면 좋다"],
            ans: 1,
            explain: "-(으)ㄴ 적이 있다 = Tôi CÓ CÁI TÍCH/CÁI KÝ ỨC (적) ĐÓ. Nghĩa là ĐÃ TỪNG LÀM GÌ ĐÓ TRONG QUÁ KHỨ."
        },
        {
            q: "Sự phân phối ngữ pháp khôn lường: Vì nói về TÍCH/TRẢI NGHIỆM ĐÃ QUA trong quá khứ, vế trước của NÓ BẮT BUỘC chỉ được dùng Định ngữ nào?",
            options: ["Định ngữ hiện tại -(는)", "Định ngữ tương lai -(으)ㄹ", "Định ngữ Quá khứ -(으)ㄴ", "Không dùng định ngữ"],
            ans: 2,
            explain: "-(으)ㄴ đứng trước danh từ 적 (Tích) để tạo ra: CÁI NGÀY MÀ TÔI ĐÃ LÀM VẤN ĐỀ NÀY... (간 기억/간 적 = Ký ức ĐÃ đi)."
        },
        {
            q: "Dịch: 'Tôi CHƯA TỪNG gặp con người đó (그 사람)'.",
            options: ["그 사람을 만난 적이 있어요.", "그 사람을 만나는 적이 없어요.", "그 사람을 만난 적이 없어요.", "그 사람을 만날 적이 없어요."],
            ans: 2,
            explain: "만나다 (không patchim) -> 만난 (đã gặp) + 적이 없다 (chưa từng có tích = chưa từng gặp) => 만난 적이 없어요."
        },
        {
            q: "Câu TRỘN 2 NGỮ PHÁP HAY NHẤT TOPIK (Vừa nhắc Thử, Vừa bảo Đã từng): 'Tôi ĐÃ TỪNG ĂN THỬ Kimchi.'",
            options: ["김치를 먹은 적이 봤어요.", "김치를 먹어 본 적이 있어요.", "김치를 먹은 본 적이 없어요.", "김치를 먹은 본 적이 있어요."],
            ans: 1,
            explain: "Ăn Thử (먹어 보다) -> Quăng vô Đã từng (-(으)ㄴ 적이 있다) => 보다 không patchim + ㄴ => 먹어 본 적이 있어요 (Level max)."
        },
        {
            q: "Bất quy tắc ㄷ: 'Đã từng NGHE nhạc Hàn Quốc'. 듣다 -> Điền gì?",
            options: ["듣은 적이 있다", "들는 적이 있다", "들은 적이 있다", "들운 적이 있다"],
            ans: 2,
            explain: "듣 gặp (으) -> biến âm thành ㄹ => 들은 적이 있다 (Đã từng nghe lọt lỗ tai)."
        }
    ],
    "-(으)ㄹ 것 같다": [
        {
            q: "Ngữ pháp thần thánh của sự DỰ ĐOÁN, NÉ TRÁNH TRÁCH NHIỆM và NÓI GIẢM NÓI TRÁNH. Nó dịch là:",
            options: ["Chắc chắn là vậy", "Làm sao mà biết được", "Hình như... / Chắc là... / Có vẻ như...", "Tuyệt đối không"],
            ans: 2,
            explain: "비가 올 것 같아요! Hình như trời SẼ MƯA thì phải! (Người nói lật bài ngửa về phỏng đoán bản thân, lỡ trời không mưa thì... tại mình bảo CHỈ CÓ VẺ thôi mà)."
        },
        {
            q: "Tuy cấu trúc cơ bản là Phỏng đoán tương lai: -(으)ㄹ 것 같다. Nhưng khi phỏng đoán chuyện ĐANG SỜ SỜ xảy ra Ở HIỆN TẠI (Ví dụ: Hình như Đồ ăn NÀY RẤT NGON -> ngon ngay bây giờ), bạn chia TÍNH TỪ thế nào?",
            options: ["맛있을 것 같아요.", "맛있는 것 같아요.", "맛있은 것 같아요.", "맛있던 것 같아요."],
            ans: 1,
            explain: "Định ngữ Tính Từ đi thẳng với 명사 (것) => 맛있는 것 같아요 (HÌNH NHƯ... bây giờ đang ngon). Phân biệt: 맛있을 것 같아요 (Chắc LÁT NỮA sẽ ngon - Tương lai)."
        },
        {
            q: "Dịch phỏng đoán Quá khứ: 'Hình như hôm qua TÔI ĂN NHIỀU QUÁ rổi.'",
            options: ["어제 너무 많이 먹을 것 같아요.", "어제 너무 많이 먹는 것 같아요.", "어제 너무 많이 먹은 것 같아요.", "어제 너무 많이 먹고 같아요."],
            ans: 2,
            explain: "Chuyện ĐÃ ăn rổi, giờ mới CÓ VẺ hình như -> Dùng định ngữ Quá khứ -(으)ㄴ + 것 같다 => 먹은 것 같아요."
        },
        {
            q: "Bất quy tắc ㄹ. Từ '멀다' (Xa). Hình như nhà tôi và nhà cậu RẤT XA NHAU.",
            options: ["집이 멀은 것 같아요.", "집이 머는 것 같아요.", "집이 먼 것 같아요.", "집이 물은 것 같아요."],
            ans: 2,
            explain: "Từ 멀다 là Tính Từ. Điểm mặt chia Hiện Tại: Tính từ + (으)ㄴ. ㄹ gặp ㄴ -> Rụng ㄹ -> 먼 것 같아요."
        },
        {
            q: "Câu Phủ định của -(으)ㄹ 것 같다 (Hình như không...):",
            options: ["비가 안 올 것 같아요.", "비가 올 것 같지 않아요.", "Cả 2 cách trên đều đúng.", "Nó không có thể phủ định."],
            ans: 2,
            explain: "Cả 2 dạng đều quá xịn. 안 đứng trước Động từ (안 올 것 같다). Hoặc 지 않다 nằm trong lòng (올 것 같지 않아요) -> Cùng là Chắc trời chẳng mưa đâu!"
        }
    ],
    "-기로 하다": [
        {
            q: "Ngữ pháp '-기로 하다' dùng khi bạn muốn thông báo điều gì?",
            options: ["Dự đoán", "Mục đích", "QUYẾT ĐỊNH làm một hành động nào đó", "Sự thay đổi"],
            ans: 2,
            explain: "Diễn tả việc TÔI ĐÃ QUYẾT ĐỊNH thế này rồi (hẹn hò, hứa hẹn, chốt kèo)."
        },
        {
            q: "Vì luôn là nói về 'KÈO ĐÃ ĐƯỢC CHỐT', nên người Hàn hầu như 99% luôn dùng cấu trúc này ở thì nào?",
            options: ["Hiện tại (-기로 해요)", "Tương lai (-기로 할 거예요)", "Quá khứ (-기로 했어요)", "Mệnh lệnh (-기로 하세요)"],
            ans: 2,
            explain: "Chốt xong rồi mới kể ra, nên luôn chia là: -기로 했어요 (Tôi ĐÃ quyết định rằng... / Chúng tôi đã chốt là...)."
        },
        {
            q: "Dịch: 'Chúng tôi CHỐT SẼ gặp nhau vào ngày mai.'",
            options: ["내일 만나려고 했어요.", "내일 만나러 가요.", "내일 만나기로 했어요.", "내일 만난 것 같아요."],
            ans: 2,
            explain: "만나다 + 기로 하다 (Quá khứ: 했어요) => 만나기로 했어요."
        },
        {
            q: "Ưu điểm của '-기로 하다' về cách chia động từ là gì?",
            options: ["Chỉ dành cho Động từ KHÔNG patchim", "Phải áp dụng bất quy tắc ㄹ và ㄷ", "Không cần quan tâm patchim, cứ nhắm mắt MÚT THẲNG '기로 하다'", "Chia theo nhóm từ"],
            ans: 2,
            explain: "먹다 -> 먹기로 했어요. 살다 -> 살기로 했어요. 듣다 -> 듣기로 했어요 (Trường hợp siêu hiếm là 듣다 không bị biến thành 들 vì đây là -기). Bất di bất dịch!"
        },
        {
            q: "Phủ định của cụm này rất thú vị: 'Tôi quyết định KHÔNG học tiếng Hàn nữa'. Bạn để chữ '안' (Không) ở đâu?",
            options: ["안 배우기로 했어요.", "배우기로 안 했어요.", "안 배운기로 했어요.", "배우지 않기로 하다."],
            ans: 0,
            explain: "안 đặt trước động từ (안 배우기로 했어요). Hoặc dùng dạng đầy đủ: 배우지 않기로 했어요 (Đã quyết định rằng là sẽ KHÔNG HỌC)."
        }
    ],
    "-게 되다": [
        {
            q: "Cụm '-게 되다' (Trở nên / Bị / Được dẫn đến kết quả) KHÁC BIỆT với nguyện vọng/dự định cá nhân ở điểm nào?",
            options: ["Nó do Chủ ngữ quyết định.", "Nó diễn tả sự thay đổi BỊ ĐỘNG do Hoàn Cảnh Khách Quan đưa đẩy (Kiểu như 'đưa đẩy rổi TRỞ THÀNH ra thế này...').", "Nó nhấn mạnh sức mạnh cơ bắp.", "Chỉ dùng cho thời tiết."],
            ans: 1,
            explain: "Câu Tuyên Thệ: 한국에 가게 됐어요 (Do trúng số / do công ty bắt đi... nên hoàn cảnh đẩy tôi đến việc PHẢI ĐI HÀN - Mình bị động)."
        },
        {
            q: "Điền vào chỗ trống khoe tiến bộ: 한국어를 잘하__________________ (Giờ đây tôi ĐÃ trở nên giỏi tiếng Hàn rồi).",
            options: ["게 됐어요", "기로 했어요", "고 싶어요", "지 않아요"],
            ans: 0,
            explain: "잘하다 + 게 되다 (Quá khứ) => 잘하게 됐어요 (Xưa dốt nhưng do luyện cuốc nhiều nên 'Lúc này đã Đạt Được Kết Quả trở nên Giỏi')."
        },
        {
            q: "Chia '-게 되다' với từ có patchim như '먹다' (Ăn - VD: Xưa ghét ăn rau, giờ đã tập ăn được rau):",
            options: ["먹은게 됐어요", "먹게 됐어요", "먹으게 됐어요", "먹고 됐어요"],
            ans: 1,
            explain: "Trời độ! Ngữ pháp này CŨNG KHÔNG có bất quy tắc. Chỉ găm chữ -게 vào. 먹다 -> 먹게 되다 (먹게 됐어요)."
        },
        {
            q: "So sánh ĐỘ LỊCH SỰ/KHIÊM TỐN: Khi sếp hỏi 'Sao cậu làm được cái này?', đáp án nào tạo cảm giác 'Nhờ ơn sếp chỉ dạy nên em mới HỌC ĐƯỢC Ạ'?",
            options: ["제가 배웠어요.", "제가 배울 수 있어요.", "배우게 됐어요.", "배우고 싶어요."],
            ans: 2,
            explain: "배우게 됐어요 mang sắc thái KHIÊM NHƯỜNG 200%. Nghĩa là 'Do may mắn/ân huệ/hoàn cảnh giúp đỡ nên em mới biết đến nó ạ'. Người Hàn thích dùng câu này thay cho 'Tôi đã tự học'."
        },
        {
            q: "Dịch: Mấy hôm nay do bị đau mắt nên TÔI KHÔNG THỂ XEM TIVI ĐƯỢC NỮA RỒI (Hoàn cảnh ép buộc)",
            options: ["TV를 안 봤어요.", "TV를 보지 않기로 했어요.", "TV를 못 보게 됐어요.", "TV를 볼 수 없었어요."],
            ans: 2,
            explain: "못 보다 (Không thể coi) + 게 되다 (Bị trở nên) => 못 보게 됐어요 (Lâm vào hoàn cảnh chẳng coi được)."
        }
    ],
    "-기 때문에": [
        {
            q: "Cụm '-기 때문에' (Vì / Bởi vì) mang sắc thái KHÁC VỚI '-아서/어서' và '-(으)니까' ở chỗ nào?",
            options: ["Cái này dùng cho phủ định.", "Cái này KHÔNG dùng được trong quá khứ.", "Rất TRANG TRỌNG, THƯỜNG DÙNG TRONG VĂN VIẾT/TIN TỨC hoặc muốn Nhấn Mạnh Lý Do một cách Đanh Thép rõ ràng.", "Hay dùng cho Rủ rê."],
            ans: 2,
            explain: "Do vì dính tới chữ 때문 (Đại Môn / Cớ / Lý Do). Nên nó cực kì Trang Trọng và nhấn mạnh chữ VÌ BỞI TẠI SAO. Không dùng cho Đề Nghị/Mệnh lệnh."
        },
        {
            q: "Một RÀO CẢN của '-기 때문에': Vế đằng sau có được xài (-(으)세요, -(으)ㅂ시다...) không?",
            options: [
                "Có, dùng bình thường với mọi vế",
                "TUYỆT ĐỐI CẤM — Giống hệt -아/어서",
                "Chỉ cấm khi dùng với 합니다체",
                "Không cấm, nhưng rất hiếm gặp"
            ],
            ans: 1,
            explain: "Cũng cấm xài rủ rê, sai bảo. 바쁘기 때문에 도와주세요 (Vì bận NÊN ĐỪNG GIÚP NỮA ✗ SAI RỒI). Phải dùng 니까 (바쁘니까 도와주세요 ✓)."
        },
        {
            q: "ĐIỂM ĂN TIỀN so với -아/어서: '-기 때문에' CÓ THỂ CHIA THÌ TƯƠNG LAI/QUÁ KHỨ CỰC MƯỢT Ở MỆNH ĐỀ TRƯỚC. Câu 'Bởi vì HÔM QUA TRỜI ĐÃ MƯA RẤT TO...':",
            options: ["비가 오기 때문에...", "비가 많이 왔기 때문에...", "비가 왔어서...", "비가 많이 오는 중이기 때문에..."],
            ans: 1,
            explain: "왔다 (Đã mưa) + 기 때문에 => 왔기 때문에. -아/어서 phải gạt nước mắt vì không bao giờ chia Vế 1 được."
        },
        {
            q: "Nếu KHÔNG dùng với Động/Tính Từ, mà dùng trực tiếp với DANH TỪ (Ví dụ: Vì Tiền - 돈). Bạn gắn thế nào?",
            options: ["돈기 때문에", "돈하기 때문에", "돈 때문에", "돈이기 때문에"],
            ans: 2,
            explain: "Đây là cách chửi rất xịn: 너 때문에 (TẤT CẢ LÀ TẠI MÀY!). Cứ Danh Từ đứng chơ vơ thì Cộng trực tiếp thẳng 때문에."
        },
        {
            q: "Hỏi MẸO: Vì Danh từ đi với 이다 (Là). Chẳng hạn: Vì tao LÀ HỌC SINH nên Tao hết tiền. Thì ghép chữ '학생 + 이다' ra sao?",
            options: ["학생 때문에", "학생하기 때문에", "학생이기 때문에", "학생기 때문에"],
            ans: 2,
            explain: "학생 (Học sinh) + 이다 (Là) + 기 때문에 => 학생이기 때문에. Nếu là 학생 때문에 thì hiểu thành (Vì cái thằng học sinh kia mà tao hết tiền!)."
        }
    ],
    "-(으)ㄹ까 하다": [
        {
            q: "Cuối câu dùng '-(으)ㄹ까 하다' mang cảm giác gì?",
            options: ["Xin lỗi gắt gao", "Lên lịch chắc nịch 100%", "Kế hoạch PHÂN VÂN, TÍNH TOÁN, CHƯA CHẮC CHẮN LẮM (Tôi TÍNH SẼ... / Tôi ĐANG SUY NGHĨ XEM NHƯ THẾ NÀO...).", "Hối tiếc"],
            ans: 2,
            explain: "내일 쉴까 해요 = (Não bộ: Có nên nghỉ ngày mai không ta? Thôi chắc ĐANG ĐỊNH là NGHỈ ĐÓ). 50-50, không chắc cốp."
        },
        {
            q: "Chia đuôi cho Động Từ CÓ PATCHIM '읽다' (Đọc). 'Tớ đang ĐỊNH là sẽ cày bộ sách này'.",
            options: ["읽을까 해요", "읽까 해요", "읽을까 했어요", "읽어까 해요"],
            ans: 0,
            explain: "Động từ đọc (읽다) có patchim -> 읽을까 해요. Nhấn mạnh sự lưỡng lự (Bày vẽ thế nhưng chưa chắc chiều rớ vào đọc)."
        },
        {
            q: "Bất quy tắc ㅂ. Tính từ/Động từ '돕다' (Giúp đỡ). Tớ TÍNH LÀ sẽ đi phụ bà ta một phen.",
            options: ["돕을까 해요", "도울까 해요", "도우까 해요", "도오까 해요"],
            ans: 1,
            explain: "ㅂ + (으)ㄹ => 울 => 도울까 해요."
        },
        {
            q: "CẤM KỊ của '-(으)ㄹ까 하다' là gì?",
            options: ["Cấm dùng trong hiện tại", "Không dùng được ở dạng câu HỎI, không dùng ở dạng TƯƠNG LAI (-할까 할 거예요 ✗).", "Không dùng cho bản thân", "Không được viết tắt"],
            ans: 1,
            explain: "Ví dụ bạn không thể hỏi đối phương là: MÀY CÓ ĐANG LƯỠNG LỰ QUYẾT ĐỊNH là nghỉ không? (너는 내일 쉴까 해요? -> SAI! Ngữ pháp này chỉ dùng xưng Ngôi Thứ Nhất 1 (Tôi/Mình) cho bản thân thôi)."
        },
        {
            q: "So sánh mức độ CHẮC CHẮN (Tỉ lệ % thực hiện hành động) theo thứ tự từ CAO đến THẤP:",
            options: [" -(으)ㄹ까 하다 < -(으)려고 하다 < -(으)ㄹ 거예요", "-(으)ㄹ 거예요 > -(으)려고 하다 > -(으)ㄹ까 하다", "-(으)려고 하다 > -(으)ㄹ 거예요 > -(으)ㄹ까 하다", "Bằng nhau hết."],
            ans: 1,
            explain: "(으)ㄹ 거예요 (Chốt lịch cứng 90%) > ~(으)려고 하다 (Định trong đầu 70%) > ~(으)ㄹ까 하다 (Phân vân, định thế thôi mâm xôi thì chịu 50%)."
        }
    ],
    "-(으)ㄹ 줄 알다/모르다": [
        {
            q: "Cụm '-(으)ㄹ 줄 알다/모르다' sinh ra để thể hiện NĂNG LỰC bản thân, nó tương đương với:",
            options: [" -(으)려고 하다", "-아/어 보다", "-(으)ㄹ 수 있다/없다", "-고 싶다"],
            ans: 2,
            explain: "Mày có BIẾT bơi không? = Mày CÓ THỂ bơi không? Cực kì giống Can/Can't."
        },
        {
            q: "Tuy nhiên, điểm siêu NHỎ NHẶT để PHÂN BIỆT giữa '수 있다/없다' và '줄 알다/모르다' là gì?",
            options: ["Làm gì có.", "수 있다 (Chỉ Khả năng nói chung hoặc Ngoại cảnh cho phép). 줄 알다 (Chuyên trị nói về Phương Pháp/Kỹ năng/Biết CÁCH LÀM việc gì đó).", "수 있다 chuyên cho thú vật.", "줄 알다 cao cấp hơn."],
            ans: 1,
            explain: "Tôi biết lái xe (Kỹ năng thi bằng còng lưng) -> 운전할 줄 알아요. Nhưng: Cái xe bị cháy cmnr, tôi KHÔNG THỂ lại gần -> 갈 수 없어요. Tuyệt vời chưa?"
        },
        {
            q: "Bất quy tắc ㄹ (Lại là chữ L rụng rốn). '만들다' (Làm món ăn). Bạn có BIẾT CÁCH NẤU món Hàn Quốc không?",
            options: ["만들 줄 알아요?", "만들을 줄 알아요?", "만드을 줄 알아요?", "만드수 알아요?"],
            ans: 0,
            explain: "Patchim ㄹ chạm mặt đuôi bắt đầu bằng ㄹ => Không thêm 으, nối thẳng -> 한국 음식을 만들 줄 알아요?"
        },
        {
            q: "Khi ghép '나는 수영할 줄 몰라요' thì có nghĩa là?",
            options: ["Tôi lười bơi.", "Tôi CÓ THỂ bơi nhưng đang bệnh.", "Tôi thực sự KHÔNG BIẾT CÁCH bơi (Mù tịt kĩ năng dưới nước).", "Tôi đã quên cách bơi."],
            ans: 2,
            explain: "줄 몰라요 = ĐIẾC KĨ NĂNG (I don't know how to swim)."
        },
        {
            q: "Ở TOPIK 2, -(으)ㄹ 줄 알다 bị BẺ LÁI sang một Nghĩa Thứ Hai Rất Gắt (Dùng Thì Hiện Tại Tưởng Tượng). Bạn dịch câu '비가 올 줄 알았어요' là gì?",
            options: ["Tôi biết cách làm mưa.", "Tôi TƯỞNG RẰNG là trời sẽ mưa! (Nhưng sự thật không phải vậy).", "Tôi đi về vì trời mưa.", "Tôi thích trời mưa."],
            ans: 1,
            explain: "Dịch: 줄 = Rằng. 알았어요 = ĐÃ TƯỞNG NHẦM. (Tôi Đã Tưởng Rằng... nhưng hoá ra méo phải!). Rất bất ngờ phải không?"
        }
    ],
    "-기 위해(서)": [
        {
            q: "-기 위해(서) dịch là Nhằm/Để/Phục vụ vì mục đích gì đó. Nó được sinh ra để... DẬP CHẾT ngữ pháp nào về độ TRANG TRỌNG TRONG VĂN VIẾT?",
            options: ["-아서/어서", "-(으)려고", "-지만", "-(으)면"],
            ans: 1,
            explain: "Nghĩa Y HỆT -(으)려고. Nhưng (으)려고 dùng hàng ngày (Để vay tiền mua trà sữa). Còn 기 위해서 dùng trong văn Viết Tiều Luận/Bản tin (Nhằm phục vụ cho Tầm nhìn Quốc gia...)."
        },
        {
            q: "Khi đi với một DANH TỪ (Ví dụ: Vì tương lai - 미래). Ta xài 어떻게?",
            options: ["미래기 위해서", "미래를 위해서", "미래위해서", "미래하기 위해서"],
            ans: 1,
            explain: "Danh từ (không cần biến thân기) nhưng BẮT BUỘC chèn TÂN NGỮ TRỢ TỪ 을/를 vào giữa => 미래를 위해서 (Nhằm/Vì tương lai). "
        },
        {
            q: "Bóp nghẹt đối thủ: '-(으)려고' có cho phép đi kèm MỆNH LỆNH/RỦ RÊ VẾ SAU không? Câu trả lời là KHÔNG. Vậy '-기 위해(서)' CÓ ĐƯỢC PHÉP đi kèm rủ rê không?",
            options: ["Cũng không luôn", "CÓ thưa chủ tịch! (Ví dụ: Để đỗ đại học, hãy CỐ GẮNG QUYẾT TÂM LÊN -(으)십시오!).", "Chỉ Rủ rê", "Chỉ Mệnh lệnh nhẹ"],
            ans: 1,
            explain: "-(으)려고 CHẾT VẤP phần Rủ rê. Nhưng -기 위해(서) lại ĐƯỢC PHÉP dùng Mệnh Lệnh Thỉnh Dụ vế sau (합격하기 위해서 열심히 노력하십시오). Vỗ tay cho sự linh hoạt!"
        },
        {
            q: "Chia câu: TÔI ĐI KIẾM TIỀN 'ĐẾN CHỚT' BẰNG CÁCH DẠY TIẾNG HÀN ĐỂ MUA NHÀ Ở SEOUL. (돈을 벌다 - Kiếm tiền)",
            options: ["돈을 벌려고...", "돈을 벌기 위해서...", "돈을 벌으기 위해서...", "Cả 1 và 2 đều đúng, 2 thì trang trọng hơn."],
            ans: 3,
            explain: "법 + 기 위해서 = 벌기 위해서 (Không có trò rụng patchim ㄹ ở trước 기 nhé)."
        },
        {
            q: "Chữ (서) cuối cùng Cáo buộc điều gì?",
            options: ["Không có nó câu bị sai.", "Có thể dùng ĐỂ TRANG TRÍ (서) vào thì câu sẽ dài ra xíu. HOÀN TOÀN CÓ THỂ LƯỢC BỎ MÀ KHÔNG ẢNH HƯỞNG NGHĨA.", "Là trợ từ địa điểm.", "Là chữ 서 trong 서서 (đứng)."],
            ans: 1,
            explain: "Bạn có thể nói 건강을 위해서 (Vì sức khoẻ) HOẶC 건강을 위해 (Cho sức khoẻ) đều okila 100%."
        }
    ],
    "-곤 하다": [
        {
            q: "Ngữ pháp '-곤 하다' đặc tả một hành động kiểu gì?",
            options: ["Làm một lần duy nhất", "Ép buộc", "MỘT THÓI QUEN LẶP ĐI LẶP LẠI (Thường xuyên, Hay...).", "Khao khát"],
            ans: 2,
            explain: "주말에 등산을 하곤 해요 (Cuối tuần tôi HAY ĐI / THƯỜNG đi leo núi). Ở nhà hay ăn cơm chan canh."
        },
        {
            q: "Vậy nếu hành động kia mà xảy ra TỪ ĐỜI TÁM HOÁNH trong quá khứ XONG GIỜ BỎ LUÔN RỒI (Thói quen trong QUÁ KHỨ) thì dùng thì gì?",
            options: ["-곤 해요", "-곤 했어요", "-곤 할 거예요", "-곤 했으면 해요"],
            ans: 1,
            explain: "Bạn chỉ việc dí đuôi QUÁ KHỨ VÀO chữ '하다'. 어렸을 때 공원에서 놀곤 했어요 (Hồi Nhỏ tôi ĐÃ THƯỜNG CHƠI Ở công viên này - Giờ thì thôi rồi rảnh đâu mà chơi)."
        },
        {
            q: "Dịch: Cứ mỗi khi Căng Thẳng (스트레스를 받다) tôi LẠI THƯỜNG ăn cay.",
            options: ["스트레스를 받을 때 매운 음식을 먹곤 해요.", "스트레스를 받을 때 매운 음식을 먹어요.", "스트레스를 받을 때 매운 음식을 먹고 있어요.", "스트레스를 받을 때 매운 음식을 먹으려고 해요."],
            ans: 0,
            explain: "Cứ nhận (받을 때) Căng thẳng -> Thói quen kích hoạt (먹곤 해요)."
        },
        {
            q: "Nhét '-곤 하다' vào chữ 듣다 (Nghe nhạc - Bất quy tắc ㄷ):",
            options: ["듣곤 해요", "들곤 해요", "듣으곤 해요", "들으곤 해요"],
            ans: 0,
            explain: "Đây là ngữ pháp bắt đầu bằng CHỮ CÁI PHỤ ÂM ㄱ. Mà ㄷ (Nghe) chỉ sợ biến mất khi gặp NGUYÊN ÂM (ㅇ). Vậy nên yên tâm CỨ ĐỂ NGUYÊN NGHE: 듣곤 해요. Rất lừa tình nha!"
        },
        {
            q: "Nhét '-곤 하다' vào chữ 살다 (Sống - Có patchim ㄹ):",
            options: ["살곤 해요", "사곤 해요", "살으곤 해요", "산곤 해요"],
            ans: 0,
            explain: "Lạy trời phù hộ! ㄹ cũng KHÔNG SỢ ㄱ. Giữ nguyên đội hình: 살곤 해요."
        }
    ],
    "-(으)ㄴ (tính từ/quá khứ)": [
        {
            q: "KHI ĐI VỚI TÍNH TỪ: Ngữ pháp '-(으)ㄴ' có chức năng thần thánh gì?",
            options: ["Chia quá khứ", "Biến Tính Từ thành ĐỊNH NGỮ bổ nghĩa cho Danh Từ đứng MÀ SÁT NGAY PHÍA SAU NÓ (VD: Cái túi NHỎ).", "Biến Tính từ thành Động từ", "Nối hai vâu"],
            ans: 1,
            explain: "작다 (Nhỏ) -> 작은 가방 (Cái túi nhỏ). 작다 đóng vai trò cung cấp ĐỊNH NGHĨA (Định ngữ) cho Cái túi."
        },
        {
            q: "Vẫn KHI ĐI VỚI TÍNH TỪ: Nếu Tính từ mang patchim ㅂ (như 쉽다 - Dễ), thì chia thế nào?",
            options: ["쉽은", "쉬은", "쉬운", "쉽는"],
            ans: 2,
            explain: "ㅂ bất quy tắc, gặp 은 -> biến thành 운. => 쉬운 문제 (Câu hỏi dễ)."
        },
        {
            q: "Nhưng KHI ĐI VỚI ĐỘNG TỪ, chữ '-(으)ㄴ' bỗng nhiên biến thành thì gì?",
            options: ["Hiện tại", "Tương lai", "THÌ QUÁ KHỨ (Hành động ĐÃ XẢY RA với Danh từ).", "Đang tiếp diễn"],
            ans: 2,
            explain: "Với Động từ: 가다 (Đi) -> 간 곳 (Nơi ĐÃ ĐI TỚI). 읽다 (Đọc) -> 읽은 책 (Sách ĐÃ ĐỌC). Ăn tiền nhất là điểm này!"
        },
        {
            q: "Ghép câu: Đây là cái ÁO ĐÃ MẶC HÔM QUA (입다 - Mặc).",
            options: ["어제 입는 옷", "어제 입을 옷", "어제 입은 옷", "어제 입 옷"],
            ans: 2,
            explain: "Hôm qua (quá khứ) -> Mặc (Động từ) => Dùng -(으)ㄴ để chia quá khứ => 입은 옷."
        },
        {
            q: "Bất quy tắc ㄹ KHÉT LẸT: Động từ '만들다' (Làm, chế tạo). Chia thành 'Món ăn MÀ MẸ ĐÃ LÀM':",
            options: [
                "엄마가 만들은 음식",
                "엄마가 만든 음식",
                "엄마가 만드는 음식",
                "엄마가 만들 음식"
            ],
            ans: 1,
            explain: "만들다 + 은. Chữ ㄹ gặp chữ 은 => Bà chằn ㄹ lập tức xoá sổ chữ 은, NHƯNG chữ ㄹ cũng phải bay màu NHƯỜNG CHỖ cho chữ ㄴ chọc xuống đáy. (만들다 -> 탈락 ㄹ -> 만 + ㄴ = 만든). Lần đầu tiên bạn thấy cảnh này phải không?"
        }
    ],
    "-는 (động từ hiện tại)": [
        {
            q: "Định ngữ '-는' chuyên môn đi sửa mông đi kèm với ĐỘNG TỪ ở thì nào?",
            options: ["Quá khứ", "Hiện tại (Đang làm/Thường Xuyên làm).", "Tương lai", "Không quan tâm thì"],
            ans: 1,
            explain: "내가 먹는 음식 = Món tớ ĐANG ĂN. 내가 좋아하는 사람 = Người (mà) tớ ĐANG THÍCH."
        },
        {
            q: "LUẬT THÉP: Định ngữ '-는' có bao giờ đi với Tính Từ (Ví dụ: 크는 집) không?",
            options: ["Tuyệt đối KHÔNG BAO GIỜ (Tính từ chỉ dùng 은/ㄴ).", "Có.", "Tùy lúc.", "Chỉ đi với tính từ dài."],
            ans: 0,
            explain: "Không bao giờ có 예쁘는 꽃 hay 크는 집 nha!! -는 chỉ đi với Động từ đang chạy thôi (먹는, 가는, 자는...)."
        },
        {
            q: "Việc chia '-는' có cần quan tâm Động Từ có Patchim hay không có Patchim không?",
            options: ["Phải để ý kĩ", "KHÔNG. Cứ vứt 다 và cộng THẲNG chữ -는 vào đít.", "Có", "Tùy nguyên âm"],
            ans: 1,
            explain: "먹다 -> 먹는. 가다 -> 가는. 자다 -> 자는. 찾다 -> 찾는. Đỉnh của dễ."
        },
        {
            q: "Ngoại lệ duy nhất (Kẻ hủy diệt): Từ có patchim ㄹ như 살다 (Sống). Nơi mà tôi đang sống thì gọi là gì?",
            options: ["살는 곳", "사는 곳", "산는 곳", "사는은 곳"],
            ans: 1,
            explain: "살다 gặp -는 => ㄹ chạm mặt ㄴ => ㄹ RƠI. => 사는 곳. (Bán vé số Đang Sống = 사는 곳)."
        },
        {
            q: "Câu 'Vì là CÔNG VIỆC BẮT ĐẦU VÀO NGÀY MAI...' -> 내일 시작하______ 일이기 때문에…",
            options: ["시작할", "시작한", "시작하는", "시작하"],
            ans: 2,
            explain: "Dù nói là ngày mai (tương lai), nhưng đây là 1 Động từ mang tính Đã lên lịch, Bàn bạc/Tiếp diễn thường nhật (Việc (phải) bắt đầu vào ngày mai) -> Vẫn hay gắn -는 để gọi tên loại danh từ đó."
        }
    ],
    "-(으)ㄹ (tương lai)": [
        {
            q: "Tương lai vẫy gọi: '-(으)ㄹ' dùng để tạo Định Ngữ ám chỉ điều gì?",
            options: ["Chuyện xui xẻo", "SỰ VIỆC SẮP XẢY RA / DỰ ĐỊNH XẢY RA phía trước mặt.", "Quá khứ gần", "Trợ từ Tân ngữ"],
            ans: 1,
            explain: "내일 만날 사람 = Người (mà SẼ) gặp vào ngày mai. 마실 물 = Nước (để sắp) uống."
        },
        {
            q: "Lưu ý Siêu Kế Thừa: '-(으)ㄹ' có áp dụng được CHO CẢ Tính Từ và Động Từ không?",
            options: ["Chỉ Động từ.", "Cả Động từ và Tính từ (VD: 좋을 것같아 - Có vẻ SẼ tốt).", "Chỉ Danh từ.", "Không có cái nào."],
            ans: 1,
            explain: "Khác với chữ -는 lười biếng. Chữ -(으)ㄹ xài cho Động Từ (갈 곳 = Nơi Sẽ Đi) LẪN Tính Từ (행복할 텐데 = (Sẽ) Hạnh phúc mà...)."
        },
        {
            q: "Dịch: Cho tôi chút GÌ ĐÓ ĐỂ UỐNG (Thứ Sẽ Uống). 마시다 = uống.",
            options: ["마시는 것 주세요.", "마신 것 주세요.", "마실 것 주세요.", "마실이 것 주세요."],
            ans: 2,
            explain: "마시다 (Không patchim) -> 마실 + 것 (Nguyên Cấu Trúc Huyền Thoại: 마실 것 - Đồ uống)."
        },
        {
            q: "Với từ '듣다' (Nghe - Bất quy tắc ㄷ). Bài hát MÀ TÔI SẼ NGHE NGÀY MAI:",
            options: ["내일 듣을 노래", "내일 들을 노래", "내일 들 노래", "내일 든 노래"],
            ans: 1,
            explain: "ㄷ + 을 => 들을. 들을 노래."
        },
        {
            q: "Với chữ ㄹ: '만들다' (Làm). Thức ăn SẼ LÀM vào chiều nay.",
            options: ["만들을 음식", "만들 음식", "만든 음식", "만드는 음식"],
            ans: 1,
            explain: "Trời mẹ! Vốn dĩ 만들다 đã chứa sẵn chữ ㄹ chình ình rồi, nên KHÔNG THÊM GÌ NỮA HẾT MÀ COI NHƯ ĐÃ CỘNG ㄹ: 만들 + 음식 => 만들 음식. Đỉnh Của Chóp!"
        }
    ],
    "안 / -지 않다": [
        {
            q: "Phó từ '안' được dùng để phủ định hành động mang sắc thái gì?",
            options: ["Không có thời gian làm.", "Không thể làm (do khả năng).", "CHỦ ĐỘNG KHÔNG LÀM (Sự phủ nhận 100% bằng ý chí cá nhân).", "Đã quên làm."],
            ans: 2,
            explain: "안 가요 (TÔI CHỦ ĐỘNG KHÔNG ĐI! / TÔI CỐ TÌNH CHỌN KHÔNG ĐI). 안 thể hiện sự phủ định tự nguyện hoặc phủ định tính chất của Tính từ (안 예뻐요 - Không đẹp)."
        },
        {
            q: "Cách phân biệt cách dùng '안' và '-지 않다'?",
            options: ["안 đứng sau động từ.", "Hai chữ này mang nghĩa hoàn toàn khác nhau.", "Nghĩa Y HỆT NHAU. Nhưng 안 (Ngắn gọn, để khẩu ngữ đời thường). Còn -지 않다 (Dài hơn, dùng cho Văn viết/Lịch sự/Trang trọng).", "Chỉ -지 않다 mới đi được với tính từ."],
            ans: 2,
            explain: "안 먹어요 = 먹지 않아요 (Tuyệt đối giống nhau về ý nghĩa. Sống tự đo chọn lựa văn phong dài hay ngắn)."
        },
        {
            q: "Bẫy Siêu Kinh Điển: Khi dùng '안' với động từ cụm [Danh Từ + 하다] (VD: 공부하다). Đâu là cách viết đúng?",
            options: ["안 공부해요", "공부 안 해요", "공부해 안 요", "안에 공부해요"],
            ans: 1,
            explain: "Với động từ bắt nguồn từ Danh từ + 하다 (공부+하다, 운동+하다), bạn BẮT BUỘC PHẢI TÁCH CHÚNG RA, ĐỂ CHỮ '안' chen vào giữa. => 공부 안 해요. Trừ 1 số động từ nguyên khối như 좋아하다 -> 안 좋아하다."
        },
        {
            q: "Nhưng với Tính Từ dài như '피곤하다' (Mệt mỏi), ta có chèn '안' vào giữa thành 피곤 안 해요 không?",
            options: ["Có. Quy tắc giống động từ.", "Không! Tính từ KHÔNG ĐƯỢC TÁCH đôi ra. Áp dụng thẳng: 안 피곤해요.", "Phải dùng 피곤하지 않아요.", "Tính từ không có phủ định."],
            ans: 1,
            explain: "Tính từ dù có đuôi 하다 (như 피곤하다, 행복하다, 깨끗하다) thì TỰ do KHÔNG THỂ BỊ BẺ ĐÔI. Phải để 안 ra đầu: 안 피곤해요, 안 행복해요."
        },
        {
            q: "Có phải chữ 이다 (Là) bưng thêm chữ 안 ra phía trước để thành 'Không phải LÀ' (안 이다) không?",
            options: ["Đúng vậy.", "Không! 이다 có 1 tử thù riêng biệt để phủ định nó, đó là: 아니다 (nghĩa là KHÔNG PHẢI).", "Có thể dùng cả 2.", "Chỉ dùng -지 않다."],
            ans: 1,
            explain: "Một sự thật phũ phàng: 이다 (Là) phủ định thành 아니다 (Không phải). Ví dụ: 학생이 아닙니다 (Là học sinh => Không phải là học sinh). Không ai nói 학생 안 이다 hay 학생 안 해요."
        }
    ],
    "못 / -지 못하다": [
        {
            q: "Bản chất của chữ '못' dịch sang tiếng Việt là gì?",
            options: ["Không", "Có thể", "Tuyệt đối không", "KHÔNG THỂ (Bất Khả Năng)"],
            ans: 3,
            explain: "Phân biệt cốt lõi: 안 = Don't (Không thèm làm). 못 = Can't (Không thể làm vì NGU hoặc vì HOÀN CẢNH ÉP THẾ). 오늘 학교에 못 가요 (Hôm nay Mị đổ bệnh nên KHÔNG THỂ đến trường)."
        },
        {
            q: "Tính chất ĐẶC BIỆT: '못' CÓ BAO GIỜ được đem đi đặt trước một TÍNH TỪ không? (VD: Cười nhạo đứa khác: 못 예뻐요 - Mày không thể đẹp).",
            options: ["Có, rất phổ biến.", "Tuyệt đối KHÔNG. Bạn không thể có 'Năng Lực Xấu Hơn' hay 'Khả năng Đẹp lên'. 못 TUYỆT ĐỐI CHỈ đi với ĐỘNG TỪ.", "Tùy ngoại cảnh.", "Thích thì dùng."],
            ans: 1,
            explain: "못 예뻐요 (Bạn không thể đẹp) hay 못 바빠요 (Tôi không thể bận) -> SAI HOÀN TOÀN TRONG TIẾNG HÀN. Chỉ có 안 예뻐요 (Nó không Đẹp), 안 바빠요 (Không bận). Đã nói 못 là đi với kĩ năng thi hành!"
        },
        {
            q: "Giống như chữ '안'. Với các động từ nhép (Hada Verb) như '수영하다' (Bơi), bạn xài chữ '못' thế nào?",
            options: ["못 수영해요", "수영하지 못해요", "수영 못 해요", "수영은 못 해요"],
            ans: 2,
            explain: "Phải chặt đôi động từ ra và tọng chữ 못 vào giữa Danh Từ + 하다. 수영 (Bơi) 못 (Không thể) 해요 (Làm) => 수영 못 해요."
        },
        {
            q: "Nếu bạn muốn phủ định lịch sự và trang trọng hơn (Văn viết). Bạn dùng từ tương ứng nào thay cho 못?",
            options: ["-지 않다", "-(으)ㄹ 줄 모르다", "-지 못하다", "-기가 어렵다"],
            ans: 2,
            explain: "Câu: 술을 못 마셔요 = 술을 마시지 못해요. (Kĩ năng: Tôi KHÔNG ĐỠ NỔI rượu tẹo nào)."
        },
        {
            q: "Dịch nhanh 2 câu: 'Tôi 안 먹어요' vs 'Tôi 못 먹어요'. Cách hiểu nào dưới đây là Chuẩn Không Cần Chỉnh?",
            options: ["Giống y sì đúc.", "안 먹어요 (Món đó ôi thiu tôi TẨY CHAY TÔI KHÔNG THÈM ĂN). 못 먹어요 (Món tôm đó chà bá TÔI BỊ DỊ ỨNG NÊN MUỐN CŨNG KHÔNG THỂ NHAI NỔI).", "안 mạnh hơn 못.", "못 ăn nhiều hơn 안."],
            ans: 1,
            explain: "Một bên là DO Ý CHÍ (Chủ động KHÔNG ĂN). Một bên là DO HOÀN CẢNH / NĂNG LỰC (Không thể xới miếng nào vô họng)."
        }
    ],
    "ㅂ 불규칙": [
        {
            q: "Luật cơ bản của Bất quy tắc 'ㅂ' là gì?",
            options: ["Mất đi mãi mãi", "ㅂ biến thành 원", "ㅂ bốc hơi và mọc ra chữ 워 (hoặc 우) khi đi với NGUYÊN ÂM", "ㅂ biến thành ㅂㅂ"],
            ans: 2,
            explain: "Khi Tính từ/Động từ mang đuôi ㅂ (như 쉽다, 춥다) Gặp Nguyên Âm (như 아/어), thì ㅂ sẽ bay mất và thế thân bằng 우/워. VD: 쉽다 (Dễ) -> 쉬워요."
        },
        {
            q: "Nếu theo nguyên tắc này, '맵다' (Cay) ghép với Đuôi Hiện tại -아/어요 sẽ thành chữ gì?",
            options: ["맵어요", "매어요", "매워요", "맵아도"],
            ans: 2,
            explain: "맵 + (nguyên âm 어) => ㅂ rớt, đẻ ra 워 => 매워요."
        },
        {
            q: "TRÙM CUỐI: Khi chia ĐỊNH NGỮ (đứng trước danh từ). Tính từ '춥다' (Lạnh) đi với Thời Tiết (날씨). Bạn sẽ viết: 'Thời tiết lạnh' như thế nào?",
            options: ["춥은 날씨", "추운 날씨", "추은 날씨", "추는 날씨"],
            ans: 1,
            explain: "Định ngữ dùng (으)ㄴ. 춥다 + 은. ㅂ rớt ra 우. 우 ghép với ㄴ của định ngữ => 운. Chốt hạ: 추운 날씨."
        },
        {
            q: "Những Đứa Con Ngoại Lệ ngoan cố: Những ĐT/TT nào DÙ CÓ ㅂ VẪN CHIA BÌNH THƯỜNG (không tuân theo luật)?",
            options: ["입다 (Mặc), 잡다 (Bắt), 좁다 (Hẹp), 씹다 (Nhai)", "춥다 (Lạnh), 덥다 (Nóng), 무겁다 (Nặng)", "쉬다 (Nghỉ), 자다 (Ngủ)", "Tất cả đều bất quy tắc"],
            ans: 0,
            explain: "Lưu ý thần tài: Mặc áo (입다) -> 입어요. Rất hẹp (좁다) -> 좁아요. Bọn này cứng đầu không chịu rớt chữ ㅂ."
        },
        {
            q: "Riêng Tính từ/Động từ '돕다' (Giúp) và '곱다' (Đẹp), ㅂ KHÔNG rớt ra chữ 우 mà rớt ra chữ gì?",
            options: ["워", "와", "여", "오"],
            ans: 3,
            explain: "Trường hợp hiếm hoi ㅂ rớt ra 오. Đứng trước -아요 => 도와요 (Giúp đỡ). Đây là ngoại lệ bậc 2."
        }
    ],
    "ㄷ 불규칙": [
        {
            q: "Luật cơ bản của Bất quy tắc 'ㄷ':",
            options: ["ㄷ biến thành ㅅ", "ㄷ biến thành ㅇ", "ㄷ biến thành ㄹ (khi gặp nguyên âm)", "ㄷ biến thành ㄴ"],
            ans: 2,
            explain: "Chữ ㄷ (như trong 듣다 - Nghe) hễ gặp MẶT NGUYÊN ÂM là SỢ ĐẾN MỨC TỰ BIẾN THÀNH CHỮ ㄹ => 듣다 + 어요 = 들어요."
        },
        {
            q: "Chia câu: Bạn ĐÃ HỎI ai vậy? (묻다 - Hỏi).",
            options: ["누구에게 묻었어요?", "누구에게 무렀어요?", "누구에게 묻았어요?", "누구에게 물었어요?"],
            ans: 3,
            explain: "묻다 (Hỏi) + 었어요 (Quá khứ / Bắt đầu từ nguyên âm 어) => ㄷ biến ㄹ => 물었어요."
        },
        {
            q: "Nhưng nếu tôi CỘNG VỚI PHỤ ÂM. Ví dụ tôi nói 'Nghe bài hát RỒI ĐI NGỦ' (듣 + 고 - Vĩ tố liên kết BẮT ĐẦU TỪ PHỤ ÂM ㄱ). Việc gì sẽ xảy ra?",
            options: ["듣고 자요. (Không biến đổi gì cả).", "들고 자요.", "둘고 자요.", "듣고 자아요."],
            ans: 0,
            explain: "ㄷ CHỈ SỢ MỖI NGUYÊN ÂM (ㅇ). Còn gặp PHỤ ÂM khác thì NÓ GIỮ NGUYÊN MẶT MŨI. => 음악을 듣고 자요."
        },
        {
            q: "Ngoại lệ Ngoan Cố: Từ nào dưới đây CÓ CHỮ ㄷ nhưng LẠI CHIA BÌNH THƯỜNG (ㄷ KHÔNG BIẾN THÀNH ㄹ)?",
            options: ["걷다 (Đi dạo)", "깨닫다 (Nhận ra)", "닫다 (Đóng cửa), 받다 (Nhận)", "싣다 (Chất lên xe)"],
            ans: 2,
            explain: "Đóng cửa (문을 닫아요). Nhận quà (선물을 받아요). Mấy từ này được xài nhiều quá nên người ta lười biến đổi, cho giữ nguyên mặt."
        },
        {
            q: "Sự thâm hiểm của từ MULD-DA (묻다): Khi nó mang nghĩa là HỎI nó là Bất Quy Tắc (물어요). Nhưng RỦI THAY nó mang nghĩa khác là CHÔN/DÍNH thì sao?",
            options: ["Nó cũng biến thành 물어요", "Nó trở thành CÓ QUY TẮC và chia thành 묻어요", "Nó biến thành 무어요", "Không chia được"],
            ans: 1,
            explain: "Cùng một mặt chữ BỤNG ㄷ. Nếu tao HỎI chuyện (Mày sẽ hoảng loạn ㄷ -> ㄹ -> 물어요). Nếu tao CHÔN mày xuống đất (Mày cứng ngắc ㄷ -> ㄷ -> 묻어요). (VD: Vết dơ dính (묻어요) trên áo)."
        }
    ],
    "ㅡ 불규칙": [
        {
            q: "Luật cơ bản của Bất quy tắc 'ㅡ':",
            options: ["ㅡ Không bao giờ đổi", "Chỉ rớt khi đứng 1 mình", "Đuôi 'ㅡ' GẶP MẶT nhóm Vĩ tố NGUYÊN ÂM (아/어) là TỰ TỰ LĂN ĐÙNG RA CHẾT (Rớt luôm chữ ㅡ).", "Biến thành 으"],
            ans: 2,
            explain: "Cứ tính từ/động từ nào chứa chữ ㅡ (như 바쁘다, 예쁘다). Gặp đuôi -아/어요 là chữ ㅡ LẬP TỨC BAY MÀU (bỏ chữ ㅡ luôn)."
        },
        {
            q: "Vậy khi Bỏ Chữ 'ㅡ' đi rồi, ta biết là NÊN CỘNG VỚI '아요' hay '어요'?",
            options: ["Luôn cộng 아요.", "Luôn cộng 어요.", "Lúc nào cũng dựa dẫm vào THẰNG ĐỨNG ĐẰNG TRƯỚC NÓ. Nếu nguyên âm của chữ đằng trước là ㅏ,ㅗ => Cộng 아요. Khác => Cộng 어요.", "Đoán mò"],
            ans: 2,
            explain: "VD: 바쁘다 (Bận). 쁘 Cụt vội chữ ㅡ. Nhìn lên bụng chữ 바 (thấy có nguyên âm ㅏ). Á à! Vậy chữ ㅃ bơ vơ kia BẮT BUỘC PHẢI ghép với 아 => 바빠요."
        },
        {
            q: "Thế lỡ NHƯ CHỮ 'ㅡ' mồ côi (tức là TỪ CHỈ CÓ ĐÚNG 1 CHỮ CÁI chứa ㅡ, VD như chữ '쓰다' - Viết/Dắng) thì tựa vào ai?",
            options: ["Tựa vào 아", "Không có ai để nương tựa, LUÔN LUÔN CỘNG VỚI 어요.", "Giữ nguyên 쓰아요", "Tồn tại như cũ"],
            ans: 1,
            explain: "쓰다 (Viết). Bỏ ㅡ còn chữ ㅆ còi cọc. Do éo có thằng đằng trước, mặc định phang 어요 vào => 써요 (Tôi viết)."
        },
        {
            q: "Ghép tính từ '예쁘다' (Đẹp) với đuôi Quá khứ '았/었어요' (Hồi đó ẻm ĐẸP GÁI LẮM CƠ):",
            options: ["예쁘었어요", "예빠요", "예뻤어요", "예파요"],
            ans: 2,
            explain: "예쁘다 -> 쁘 rụng ㅡ. Nhìn lên chữ 예, ồ méo phải ㅏ hay ㅗ rồi, vậy tao cộng 어요 nha mày. => ㅃ + 었 => 뻤 => 예뻤어요."
        },
        {
            q: "Bạn có chia Bất quy tắc với từ '배고프다' (Đói bụng) khi đi với '고 싶다' (Tôi ĐANG MUỐN ĐÓI) không?",
            options: ["Phải vứt ㅡ", "Không vứt ㅡ", "Tất nhiên là KHÔNG VỨT ㅡ SAO ĐÁNG!? (Vì chữ -고 đâu có bắt đầu bằng Nguyên âm (ㅇ)). Nó bắt đầu bằng Phụ âm ㄱ mà!", "Quy tắc ㅡ rụng bất cứ giá nào"],
            ans: 2,
            explain: "Nhớ kỹ: CÁC THỂ LOẠI TÍNH CÁCH BẤT QUY TẮC PHẦN LỚN ĐỀU CHỈ SỢ NGUYÊN ÂM (ㅇ). Gặp phụ âm là nó Nhơn Nhơn ra mặt. => 배고프고 싶어요."
        }
    ],
    "ㄹ 불규칙": [
        {
            q: "Đây là tên Bất quy tắc KIÊU NGẠO NHẤT tiếng Hàn: 'Bất Quy Tắc ㄹ'. Nó chuyên đi BẮT NẠT, ĐÀN ÁP 3 chữ cái nào?",
            options: ["ㄱ, ㄷ, ㅂ", "N, B, S (ㄴ, ㅂ, ㅅ: Nói Bậy/Nịnh Bợ Thế!)", "ㅇ, ㅁ, ㄱ", "ㅏ, ㅑ, ㅓ"],
            ans: 1,
            explain: "Thánh chỉ ㄹ! Cớ mỗi lần từ chứa đuôi ㄹ (Ví dụ: 살다) CHẠM TRÁN MẶT các vĩ tố NGỮ PHÁP có chữ chứa đầu bắt nguồn là 1 trong 3 nhóm: ㄴ(neun), ㅂ(bnida), ㅅ(se-yo)... THÌ TỰ THẰNG ㄹ SẼ BỊ CHẾT ĐUỐI (RỚT)."
        },
        {
            q: "Chia câu: 'Bố TÔI ĐANG SỐNG Ở SEOUL ạ' (살다 + ㅂ니다)",
            options: ["살습니다", "사습니다", "삽니다", "사는니다"],
            ans: 2,
            explain: "살 + ㅂ니다. Trời ơi chữ ㅂ kìa! Ngay lập tức ㄹ trên bụng bỏ trốn. 살 => 사. Phụ Âm ㅂ có chỗ trống chọc luôn đít => 삽니다."
        },
        {
            q: "Chia câu kính ngữ với sếp: SẾP XÀI CHIẾC DAO NÀY ĐI Ạ (만들다 + (으)세요 - Hãy chế tạo/Làm):",
            options: ["만들으세요", "만드세요", "만드르세요", "만들러요"],
            ans: 1,
            explain: "만들 gặp đuôi (ㅅ) trong 세요. Gặp ㅅ chướng mắt vứt ㄹ luôm => 만드. Do mất patchim nên không dùng 으세요 nữa mà dùng 세요 => 만드세요."
        },
        {
            q: "Lưu ý thần sầu: Vậy khi CÓ THẰNG Cản Mũi là '으' đệm giữa (VD. khi ㄹ ĐI VỚI NGỮ PHÁP -(으)니까, -(으)러...). Thì 으 bị HỦY DIỆT NHƯỜNG CHỖ CHO ㄹ không?",
            options: ["ㄹ Rụng trước", "Cả 2 Rụng", "ĐÚNG!!! Thằng ㄹ MẬP MẠP ẴM TRỌN cái chỗ. NÓ NUỐT CHỮ '으' VÀ KẾT DUYÊN THẲNG MẶT", "Không chia được"],
            ans: 2,
            explain: "Siêu hack não: 살다 + -(으)니까 (Vì ở...). Chữ ㄹ không thèm rụng mà NUỐT luôm chữ 으 (Do ㄹ ngứa mắt 으). Xong ㄹ gặp ㄴ (니까). Má ơi ㄹ lại bị RỤNG tiếp => Tóm lại chỉ còn 사니까. Nhớ kỹ Mánh Khoé Này!"
        },
        {
            q: "Dịch: Người ĐÃ biết câu chuyện này là ai? (알다 + Định ngữ -(으)ㄴ):",
            options: ["알은 사람", "아는 사람", "안 사람", "알는 사람"],
            ans: 2,
            explain: "알다 (Biết - ㄹ) + (으)ㄴ. ㄹ Nuốt 으. Xong lại rớt chữ ㄹ trước chữ ㄴ => Hậu quả: 안 + 사람 => 안 사람."
        }
    ],
    "르 불규칙": [
        {
            q: "Luật cơ bản của Bất quy tắc '르':",
            options: ["Bỏ 르", "Biến 르 thành ㄹㄹ KHI GẶP ĐUÔI -아/어", "Giữ nguyên 르", "Thay thế bằng 브"],
            ans: 1,
            explain: "Chữ 르 cực kỳ đanh đá. Nó CHẺ ĐÔI BẢN THÂN RA THÀNH 2 CHỮ ㄹ (Một chữ ㄴ bám vào Patchim Đằng Trước, Chữ ㄹ còn Lại đính cùng 아/어). VD: 모<b>르</b>다 -> 몰<b>라</b>요."
        },
        {
            q: "Dịch: CHIẾC TÀU NÀY CHẠY RẤT NHANH (빠르다 - Nhanh):",
            options: ["빠르요", "빠러요", "빨라요", "빨러요"],
            ans: 2,
            explain: "빠르다. Bứt 르 ra thành ㄹ+ㄹ. Chữ ㄹ đầu đính lên: 빨. ㄹ sau đúc vào chữ kế: 라. 빠 có nguyên âm ㅏ nên đính 라요 => 빨라요."
        },
        {
            q: "Làm sao biết được cái chữ ㄹ thứ hai ĐÍNH VỚI 아 (Thành 라) HAY 어 (Thành 러)?",
            options: ["Nhìn vào nguyên âm của chữ ĐỨNG TRƯỚC NÓ y như Bất quy tắc ㅡ.", "Học vẹt thuộc lòng.", "Luôn đính với 라.", "Luôn đính với 러."],
            ans: 0,
            explain: "모르다 (Phía trước 모 là chữ ㅗ) => Đính 아 => 몰라요. 부르다 (Phía trước 부 là chữ ㅜ - Tức là Khác) => Đính 어 => 불러요 (Hát/Gọi)."
        },
        {
            q: "Chia động từ '다르다' (Khác biệt) ở đuôi Quá khứ: XƯA CHÚNG MÌNH KHÁC NHAU NHIỀU LẮM.",
            options: ["다르었어요", "달랐어요", "달렀어요", "달래서요"],
            ans: 1,
            explain: "다르다. Trước 르 là 바 (chữ ㅏ). Chẻ 르 ra làm 2 ㄹ. 단 + ㄹ => 단, ㄹ thêm 았 => 랐. => 달랐어요."
        },
        {
            q: "Vì 르 rất giống ㅡ (Khác mỗi Phụ âm ㄹ ở dưới). Thế có Từ Nào CÓ ĐUÔI 르 MÀ CHIA THEO QUY TẮC ㅡ (Tức là chỉ rụng ㅡ mà không chẻ ㄹㄹ) không?",
            options: ["Không có", "Có từ 치르다 (Trả tiền), 따르다 (Theo sau). Mấy Con Phản Động Này CHIA THÀNH 치러요, 따라요.", "Chia đại đều được.", "Có từ 고르다."],
            ans: 1,
            explain: "Bẫy hiểm: 따르다 (Cậu Theoo tớ nha) => 따라요 (Rụng ㅡ, đính 아 do trước có 따). Không bị chẻ 르 vì Tụi Nó Nằm Ngoại Tộc. Nhưng Tỉ lệ xuất hiện ít."
        }
    ],
    "ㅎ 불규칙": [
        {
            q: "Luật cơ bản của Bất quy tắc Tính từ 'ㅎ':",
            options: ["ㄱ,ㄷ,ㅂ biến đổi", "Chữ ㅎ RỚT MẤT TÍCH KHI GẶP NGUYÊN ÂM.", "Nó rất ổn định", "ㅎ đẻ trứng đẻ rận"],
            ans: 1,
            explain: "Tính từ chứa ㅎ (như 파랗다 - Xanh). Nghĩa là MÀU SẮC, TRẠNG THÁI (어떻다). Khi chạm mặt Nguyên âm (như -아/어 hoặc -(으)ㄴ) là Lập tức TRẦN TRUỒNG - Bay Màu chữ ㅎ."
        },
        {
            q: "NHƯNG MẤT ĐI MÀ KHÔNG ĐỂ LẠI GÌ SAO? Khi chia với '-아/어요', chữ ㅎ bốc hơi thì để lại DI CẢN GÌ CHO TỪ TÍNH TỪ ĐÓ?",
            options: ["Chỉ mất ㅎ thôi.", "Nó ĐI NGẦM TRONG BÓNG TỐI HÒA TAN MỌI LỚP NGUYÊN ÂM (THƯỜNG BIẾN THÀNH -애/-얘).", "Biến thành 워.", "Nó sẽ nối lại."],
            ans: 1,
            explain: "빨갛다 (Đỏ) + 아요 => ㅎ rụng. Nhưng chữ 아 CŨNG BỊ NHIỄM ĐỘC rụng lây, biến nguyên cụm ㅏ+ㅏ(아) thành chữ [H] => 빨개요. (Màu Vàng: 노랗다 -> 노래요)."
        },
        {
            q: "Gắn định ngữ (-(으)ㄴ): Quả táo MÀU ĐỎ (빨갛다 + 사과):",
            options: ["빨갛은 사과", "빨강 사과", "빨가은 사과", "빨간 사과"],
            ans: 3,
            explain: "빨갛다 + (으)ㄴ. ㅎ rụng trước -(으)ㄴ, ĐỂ LẠI MỘT KHOẢNG CHỐNG TRƠ TRỌI. Chữ ㄴ chọt đít chữ 빨가 => 빨간 사과."
        },
        {
            q: "Hỏi: 'Thời tiết Cảm giác thế nào bạn mình ơi?' (어떻다 - Thế nào).",
            options: ["날씨가 어떻어요?", "날씨가 어때요?", "날씨가 어떰?", "날씨가 어때어요?"],
            ans: 1,
            explain: "어떻다 + 아/어요 => 어떻 rụng ㅎ, ㅓ+ㅓ(어) => 매. Dị dạng tạo nên huyền thoại: 어때요? (Cậu thấy sao / Có muốn tao bao?)."
        },
        {
            q: "Kẻ Ngáng Đường: Từ Động Từ / Tính Từ nào VÂN GIỮ NGUYÊN BỌN 'ㅎ' (KHÔNG CHIẾT KHẤU GÌ CẢ)?",
            options: ["Màu sắc", "그렇다, 어떻다", "좋다 (Tốt), 많다 (Nhiều), 넣다 (Bỏ vào)", "Không có"],
            ans: 2,
            explain: "Đây là 3 từ quốc dân: Thích (좋아요), Nhiều vl (많아요), Bỏ rau vô nồi đi (넣으세요). Bọn nó Không Tuân Theo Số Phận rớt ㅎ. Lưu danh sử sách!"
        }
    ],
    "존경어 (Kính ngữ)": [
        {
            q: "Để tôn kính Chủ Ngữ (Ví dụ: Giám đốc, Bố Mẹ, Thầy Cô). Mình sẽ gắn 'Bảo Bối' nào ngay sau Thân Động Từ / Tính Từ?",
            options: ["-아/어요", "-ㅂ/습니다", "-(으)시-", "-겠-"],
            ans: 2,
            explain: "Thần chú Tôn Kính Chủ Ngữ: Nâng họ lên Mây bằng cách gắn -(으)시- vào gốc từ (오다 -> 오시다. 읽다 -> 읽으시다)."
        },
        {
            q: "Khi đem chữ bảo bối '-(으)시-' đi chia ở thì HIỆN TẠI đuôi thân mật -아/어요. Trạng thái ĐÚNG NHẤT của nó là gì?",
            options: ["-(으)시어요", "-(으)세요", "-(으)셔요", "Cả 3 đều chấp nhận, nhưng -(으)세요 là xài mòn môi nhất trong đời thực."],
            ans: 3,
            explain: "Về lý thuyết: 시 + 어요 => 시어요 (Viết dài) -> 셔요 (Rút gọn). ĐƯỢC CHẤP NHẬN. NHƯNG ở ngoài đời 99% người Hàn dùng Đuôi Bất Quy Tắc Của Kính Ngữ: -(으)세요."
        },
        {
            q: "Từ Vựng MÀ ĐÃ ĐƯỢC CẤP THẺ KÍNH NGỮ VIP: Thay vì nói 'Giám đốc BỊ ĐAU (아프다)', người Hàn dùng từ nào?",
            options: ["아프세요", "편찮으시다", "돌아가시다", "주무시다"],
            ans: 1,
            explain: "Có 1 tệp từ vựng VIP được thiết kế riêng cho người lớn: Đau ốm = 편찮으시다 (아프다). Ngủ = 주무시다 (자다). Ăn = 드시다/잡수시다 (먹다). Chết = 돌아가시다 (죽다)."
        },
        {
            q: "Trợ từ Tân Tiến: Thay vì xài '이/가' (chỉ định Chủ Ngữ). Tích hợp Kính Ngữ để gọi 'Bố Chồng (아버님)' ta dùng trợ từ gì?",
            options: ["아버님은", "아버님이", "아버님께서", "아버님께"],
            ans: 2,
            explain: "Gặp Trưởng Bối thì '이/가' biến thành '께서'. Hễ thấy '께서' là tự động động từ phía sau phải chia Kính Ngữ: 아버님께서 오십니다 (Bố chồng Đang tới kìa!)."
        },
        {
            q: "Khi NÂNG ĐỐI TƯỢNG (Ví dụ: Mình đưa quà CHO BÀ). Không ai đi chia Hành Động Nâng Lên của chính mình. Mà ta sẽ THAY THẾ bằng Động Tiền Đặc Biệt. Tặng Quà cho Bà thì Động từ cho (주다) biến thành?",
            options: ["주시다", "주시겠어요", "드리다", "바치다"],
            ans: 2,
            explain: "Đây là 객체 높임 (Nâng đối tượng nhận). Tôi (thấp) => ĐƯA CHO => Cấp trên (Cao). Động từ '주다' (Cho) BIẾN THÀNH '드리다' (Dâng / Biếu / Tặng). Kèm trợ từ 께 (Cho/Tới): 할머니께 선물을 드려요."
        }
    ],
    "숫자 (Số đếm)": [
        {
            q: "Tiếng Hàn có Cố Tật chia tay làm 2 phe Số: Hán Hàn (일, 이, 삼...) và Thuần Hàn (하나, 둘, 셋...). Phe nào CHUYÊN MÔN DÙNG ĐỂ ĐẾM (Đồ vật, Tuổi, Giờ)?",
            options: ["Phe Hán Hàn", "Phe Thuần Hàn", "Trộn lẫn", "KhÔNG PHÂN BIỆT"],
            ans: 1,
            explain: "Lý do Thuần Hàn khó thuộc là vì tụi nó RẤT MANH ĐỘNG. Chuyên đi kèm đơn vị ĐẾM: 1 cái (한 개), 2 con (두 마리), 3 tuổi (세 살)..."
        },
        {
            q: "Đội hình Bất Quy Tắc Huyền Thoại của số THUẦN HÀN khi đứng trước Đơn Vị Đếm. Số 1 (하나), 2 (둘), 3 (셋), 4 (넷), 20 (스물) THAY ĐỔI TRẠNG THÁI như thế nào?",
            options: ["Giữ nguyên", "Gắn thêm patchim ㅇ", "Cụt đuôi -> 한, 두, 세, 네, 스무.", "Sử dụng Hán Hàn thay"],
            ans: 2,
            explain: "Đếm táo: 사과 하나. NHƯNG 1 quả táo -> 한 개 (Không phải 하나 개). Tương tự: 두 잔, 세 권, 네 명, 스무 살. Sau 20 thì từ 21 trở đi lại giữ nguyên lẻ (스물한 살)."
        },
        {
            q: "Hãy nói: 'Bây giờ là 4 GIỜ 30 PHÚT'. Công thức THỜI GIAN chuẩn của HQ là gì?",
            options: ["사 시 삽십 분", "네 시 반", "넷 시 삼십 분", "네 시간 삼십 분"],
            ans: 1,
            explain: "GIỜ dùng THUẦN HÀN (네 시 - Cụt đuôi 넷). PHÚT / GIÂY dùng HÁN HÀN (삼십 분 / 반(Nửa)=30 phút). => 네 시 반."
        },
        {
            q: "Khi NÓI VỀ ĐỒ TIỀN, ĐIỆN THOẠI, NGÀY THÁNG, SỐ NHÀ, TẦNG NHÀ. Bạn BẮT BUỘC dùng hệ Số nào?",
            options: ["Thuần Hàn toàn bộ", "Hán Hàn toàn bộ (일, 이, 삼...)", "Số La Mã", "Trộn lẫn"],
            ans: 1,
            explain: "Rất logic: Tiền, Lịch, Số điện thoại (Chung quy là cái gì mang tính TƯ DUY KHOA HỌC/Trật tự dài) => Dùng HẢN HÀN cho nhanh. Tháng 1 = 일월, Tầng 3 = 삼 층."
        },
        {
            q: "Dịch nhanh câu Kính Nghữ + Số: CỤ ÔNG NĂM NAY 80 TUỔI (Tuổi của Trưởng Bối VIP).",
            options: ["할아버지는 올해 팔십 살입니다.", "할아버지께서 올해 연세가 여든이십니다.", "할아버지께서 올해 팔십 세 살이십니다.", "할아버지가 나이가 많습니다."],
            ans: 1,
            explain: "Tuổi (나이) kính ngữ của Kẻ trên thành (연세). Từ 80 Thuần Hàn khó è cổ là (여든). Kèm thêm Kính Ngữ Chủ ngữ -(이)시다. ĐÁNH DẤU CHẤM HẾT MỌI NGỮ PHÁP TOPIK 1 = Hal-a-beo-ji KKe-seo / Ol-hae / Yeon-se-ga / Yeo-deun I-sim-ni-da!"
        }
    ],
    "단위명사 (Loại từ)": [
        {
            q: "Trong tiếng Hàn, thứ tự sắp xếp MỘT CỤM TỪ ĐẾM (Ví dụ: 2 Quả Táo) là gì?",
            options: ["Số đếm + Loại từ + Danh từ (두 개 사과)", "Danh từ + Loại từ + Số đếm (사과 개 두)", "Danh từ + Số đếm + Loại từ (사과 두 개)", "Loại từ + Số đếm + Danh từ (개 두 사과)"],
            ans: 2,
            explain: "Luật đếm ngầm: Đưa cái mình cần đếm ra đằng trước. Kẹp con số theo sau và chốt đuôi bằng Đơn vị (Loại từ). VD: 책 세 권 (Sách 3 cuốn)."
        },
        {
            q: "Lưu ý thần tài: Loại Từ (단위명사) thường được bắt cặp kết duyên với Hệ Số Đếm nào?",
            options: ["Số Hán Hàn (일, 이, 삼...)", "Số Thuần Hàn (하나, 둘, 셋... - Sẽ bị cụt đuôi thành 한, 두, 세, 네)", "Cả 2 xài sao cũng được", "Số Ả Rập"],
            ans: 1,
            explain: "Đã đếm Đồ Đạc bằng Đơn Vị thì 99% xài Thuần Hàn (Han, Tu, Se, Ne). VD: 커피 두 잔, 학생 네 명."
        },
        {
            q: "Nối đúng Đơn vị Đếm: Xe Ô TÔ (자동차) đếm bằng gì?",
            options: ["개", "마리", "장", "대"],
            ans: 3,
            explain: "개: Cái/Trái chung chung. 마리: Con vật. 장: Tấm mỏng (Giấy/Ảnh). 대: Xe cộ/Máy móc. => 자동차 두 대 (2 Chiếc xe)."
        },
        {
            q: "Nối đúng Đơn vị Đếm: Đếm NGƯỜI (사람) dùng đơn vị nào? (Lịch sự và Bình Thường)",
            options: ["분 / 명", "마리 / 마리", "권 / 장", "켤레 / 벌"],
            ans: 0,
            explain: "Bình thường: 학생 세 명 (3 đứa học sinh). Lịch sự (Kính ngữ): 손님 두 분 (2 vị khách). Đôi giày: 신발 두 켤레."
        },
        {
            q: "Số 20 (스물) của Thuần Hàn khi đụng độ Đơn Vị Đếm như TUỔI (살). Sẽ thay hình đổi dạng ra sao?",
            options: ["스물 살", "이십 살", "스무 살", "숨 살"],
            ans: 2,
            explain: "1,2,3,4 và 20 là những KẺ BIẾN HÌNH MANG TÍNH HUYỀN THOẠI. 스물 + 살 => Bị cụt đuôi ㄹ => 스무 살. Qua 21 thì lại bình thường: 스물한 살."
        }
    ],
    "처럼": [
        {
            q: "Trợ từ '처럼' có nghĩa là gì?",
            options: ["Chỉ có", "Như, giống như", "Hơn", "Cũng"],
            ans: 1,
            explain: "처럼 = Như, tương tự như, giống như. Dùng để so sánh hai đối tượng có điểm giống nhau. Ví dụ: 배우처럼 생겼어요 (Trông giống diễn viên)."
        },
        {
            q: "Điền vào chỗ trống:<br>눈___ 하얀 피부네요.",
            options: ["보다", "처럼", "만큼", "에게"],
            ans: 1,
            explain: "눈처럼 하얀 피부 = Làn da trắng như tuyết. 처럼 gắn sau danh từ để so sánh."
        },
        {
            q: "처럼 và 같이 (nghĩa 'như'): Sự khác biệt chính là gì?",
            options: ["Không có khác biệt, dùng thay nhau hoàn toàn được.", "처럼 chỉ có nghĩa 'như/giống như'. 같이 có thêm nghĩa 'cùng nhau' nên phải cẩn thận theo ngữ cảnh.", "처럼 là văn viết, 같이 là khẩu ngữ.", "같이 dùng với tính từ, 처럼 dùng với động từ."],
            ans: 1,
            explain: "친구처럼 = 친구같이 (như bạn bè - nghĩa như nhau). NHƯNG 같이 đi chơi = đi cùng nhau (không phải 'như'). 처럼 không bao giờ có nghĩa 'cùng nhau'."
        },
        {
            q: "Khi muốn dùng 처럼 với một CỤM ĐỘNG TỪ (Ví dụ: như đang ngủ), ta cần cấu trúc nào?",
            options: ["동사 + 처럼", "동사 + 는 것처럼", "동사 + (으)ㄴ처럼", "Không dùng được với động từ."],
            ans: 1,
            explain: "처럼 chỉ gắn sau DANH TỪ. Với động từ phải chuyển thành danh từ hóa: 자는 것처럼 (như đang ngủ), 운동하는 것처럼 (như đang tập thể dục)."
        },
        {
            q: "Câu nào dùng ĐÚNG trợ từ 처럼?",
            options: ["빠르처럼 달려요.", "선수처럼 달려요.", "선수에처럼 달려요.", "선수가처럼 달려요."],
            ans: 1,
            explain: "처럼 gắn trực tiếp sau danh từ, không cần thêm trợ từ khác. 선수처럼 달려요 = Chạy như vận động viên chuyên nghiệp."
        }
    ],
    "-군요 / -구나": [
        {
            q: "'-군요' thể hiện tâm trạng gì của người nói?",
            options: ["Ra lệnh, yêu cầu", "Nhận ra / Ồ thế à / À ra vậy (phát hiện điều mới)", "Phủ định", "Hứa hẹn"],
            ans: 1,
            explain: "-군요 diễn tả khoảnh khắc 'À RA VẬY!' - khi vừa nhận ra hoặc hiểu ra một điều gì đó (thường là bất ngờ nhẹ). Ví dụ: 한국 사람이군요! (Ồ, ra là người Hàn Quốc!)"
        },
        {
            q: "Sự khác biệt về mức độ LỊCH SỰ giữa -군요 và -구나 là gì?",
            options: ["Không có khác biệt.", "-군요: lịch sự (존댓말). -구나: thân mật (반말).", "-구나: lịch sự. -군요: thân mật.", "-군요 chỉ dùng trong văn viết."],
            ans: 1,
            explain: "Cặp đôi hoàn hảo: 선생님께 -> 그렇군요! (군요 - kính trọng). Nói với bạn bè -> 그렇구나! (구나 - thân mật)."
        },
        {
            q: "Chia -군요 với danh từ: '의사' (bác sĩ - KHÔNG có patchim). Kết quả đúng là gì?",
            options: ["의사이군요", "의사군요", "의사는군요", "의사가군요"],
            ans: 1,
            explain: "Quy tắc với 이다: Danh từ CÓ patchim + 이군요 (학생이군요). Danh từ KHÔNG patchim + 군요 (의사군요). ĐỪNG thêm 이 thừa vào!"
        },
        {
            q: "So sánh -군요 và -네요: Câu nào MÔ TẢ ĐÚNG sự khác biệt?",
            options: ["Hoàn toàn giống nhau, dùng thay nhau.", "-군요 nhấn mạnh sự BẤT NGỜ mạnh hơn. -네요 diễn tả nhận ra bình thường, trực tiếp.", "-네요 dùng khi nghe tin, -군요 khi nhìn thấy.", "-군요 chỉ dùng với quá khứ."],
            ans: 1,
            explain: "Cả hai đều diễn tả 'nhận ra'. Nhưng -군요 thường mang sắc thái bất ngờ/thú vị hơn một chút. Tuy nhiên trong thực tế, nhiều người dùng hoán đổi khá thoải mái."
        },
        {
            q: "Chia đúng -군요 với quá khứ: 'Hóa ra bạn đã đến rồi à' (오다).",
            options: ["오군요", "왔군요", "오겠군요", "오는군요"],
            ans: 1,
            explain: "Quá khứ + -군요 = -았/었군요. 오다 quá khứ -> 왔 + 군요 = 왔군요 (À ra là đã đến rồi)."
        }
    ],
    "-(으)ㄹ래요": [
        {
            q: "'-(으)ㄹ래요' mang ý nghĩa gì khi NGÔI 1 dùng nó?",
            options: ["Ra lệnh cho người khác", "Thể hiện Ý ĐỊNH / Ý CHÍ của bản thân (Tôi sẽ...)", "Phỏng đoán tương lai", "Hỏi về quá khứ"],
            ans: 1,
            explain: "Khi tôi (ngôi 1) dùng -(으)ㄹ래요, đó là tuyên bố ý định chủ quan của bản thân: 저는 이걸로 할래요 (Tôi sẽ chọn cái này - theo ý tôi)."
        },
        {
            q: "Khi dùng '-(으)ㄹ래요?' ở dạng CÂU HỎI với NGÔI 2, nó mang ý nghĩa gì?",
            options: ["Ra lệnh", "Hỏi ý kiến / Muốn biết ý định của đối phương (Bạn có muốn...?)", "Phỏng đoán", "Cảm thán"],
            ans: 1,
            explain: "같이 갈래요? = Bạn có muốn đi cùng không? Sắc thái thân mật hơn 가실래요? (lịch sự hơn) và -(으)ㄹ까요? (hỏi ý kiến trung tính hơn)."
        },
        {
            q: "Chia đúng: 먹다 (ăn) + -(으)ㄹ래요",
            options: ["먹ㄹ래요", "먹을래요", "먹래요", "먹으ㄹ래요"],
            ans: 1,
            explain: "먹다 có patchim ㄱ -> dùng -을래요: 먹을래요 (Tôi sẽ ăn / Bạn có muốn ăn không?)."
        },
        {
            q: "So sánh 갈래요 và 갈까요?. Câu nào MÔ TẢ ĐÚNG?",
            options: ["Hoàn toàn giống nhau.", "갈래요? hỏi ý định trực tiếp, thân mật hơn. 갈까요? hỏi ý kiến trung tính hơn, phù hợp cả lịch sự.", "갈래요 là quá khứ.", "갈까요 chỉ dùng với 우리."],
            ans: 1,
            explain: "갈래요? (Bạn muốn đi không? - hỏi thẳng ý định). 갈까요? (Chúng ta đi nhé? / Có nên đi không nhỉ? - hỏi ý kiến rộng hơn). -(으)ㄹ래요? thân mật hơn một chút."
        },
        {
            q: "Câu nào KHÔNG thể dùng -(으)ㄹ래요?",
            options: ["저는 커피를 마실래요.", "같이 영화 볼래요?", "내일 비가 올래요.", "이 옷을 입을래요."],
            ans: 2,
            explain: "내일 비가 올래요 - SAI! -(으)ㄹ래요 chỉ dùng cho Ý CHÍ/Ý ĐỊNH của người. Thời tiết (비) không có ý chí. Phải dùng -(으)ㄹ 것 같다 hoặc -겠다: 내일 비가 올 것 같아요."
        }
    ],
    "-(으)십시오": [
        {
            q: "-(으)십시오 là thể lịch sự ở mức độ nào?",
            options: ["Thân mật (반말)", "Lịch sự thông thường (해요체)", "Trang trọng siêu lịch sự (극존칭)", "Trung tính"],
            ans: 2,
            explain: "Thứ bậc: 반말 < 해요체 (-아/어요) < 합쇼체 (-(으)십시오). Đây là đỉnh cao của thể lịch sự, thường dùng trong thông báo công cộng, máy bay, khách sạn, dịch vụ."
        },
        {
            q: "Chia đúng '앉다' (ngồi) với -(으)십시오:",
            options: ["앉십시오", "앉으십시오", "앉아십시오", "앉으세요"],
            ans: 1,
            explain: "앉다 có patchim ㄷ -> thêm -으십시오 => 앉으십시오 (Xin hãy ngồi - rất trang trọng)."
        },
        {
            q: "Ngữ cảnh nào KHÔNG phù hợp khi dùng -(으)십시오?",
            options: ["Thông báo trên máy bay", "Bảng hướng dẫn trong bảo tàng", "Nhắn tin cho bạn thân", "Quảng cáo dịch vụ chuyên nghiệp"],
            ans: 2,
            explain: "-(으)십시오 quá trang trọng và cứng nhắc cho nhắn tin với bạn thân. Ngữ cảnh phù hợp: thông báo công cộng, văn bản hành chính, phục vụ khách hàng chuyên nghiệp."
        },
        {
            q: "Chia '오다' (đến) với -(으)십시오:",
            options: ["오으십시오", "오십시오", "오세요", "오겠십시오"],
            ans: 1,
            explain: "오다 không có patchim -> thêm -십시오 => 오십시오 (Xin hãy đến / Xin mời đến - rất lịch sự)."
        },
        {
            q: "-(으)십시오 với patchim ㄹ: Chia '살다' (sống)?",
            options: ["살으십시오", "살십시오", "사십시오", "사으십시오"],
            ans: 2,
            explain: "BẪY ㄹ QUEN THUỘC: ㄹ gặp phụ âm 시(ㅅ) → ㄹ bị rụng. 살다 -> 살 + 십시오 -> ㄹ rụng = 사십시오 (Xin hãy sống - dùng trong câu chúc phúc 오래 사십시오)."
        }
    ],
    "-(이)지요? / -(이)죠?": [
        {
            q: "'카드로 계산 되지요?' mang nghĩa gì?",
            options: ["Mệnh lệnh: Hãy thanh toán bằng thẻ.", "Xác nhận / Hỏi đúng không: Thanh toán bằng thẻ được phải không?", "Phủ định: Không thanh toán bằng thẻ.", "Yêu cầu: Hãy trả lời tôi."],
            ans: 1,
            explain: "-(이)지요? là TAG QUESTION - hỏi xác nhận điều mình đã biết/đoán và muốn người kia đồng ý. 되지요? = Được phải không? / Đúng không?"
        },
        {
            q: "죠 là dạng rút gọn của gì?",
            options: ["지마요", "지요", "지않아요", "죠 là từ độc lập"],
            ans: 1,
            explain: "지요 (đọc trong hội thoại) => rút gọn thành 죠. Hoàn toàn đồng nghĩa. 그렇지요? = 그렇죠? (Đúng không?)."
        },
        {
            q: "Chia -(이)지요? với danh từ: '학생이지요?' nghĩa là gì?",
            options: ["Bạn không phải là học sinh phải không?", "Bạn là học sinh đúng không?", "Bạn có muốn là học sinh không?", "Bạn đã là học sinh rồi phải không?"],
            ans: 1,
            explain: "학생이지요? = 학생이죠? = Bạn là học sinh đúng không? Người hỏi đã biết hoặc đoán trước câu trả lời là 'có'."
        },
        {
            q: "So sánh -네요 và -지요?. Điều nào đúng?",
            options: ["Hoàn toàn giống nhau.", "-네요: Người nói TỰ MÌNH nhận ra bất ngờ. -지요?: Người nói muốn NGƯỜI NGHE XÁC NHẬN điều mình biết.", "-지요? chỉ dùng trong câu phủ định.", "-네요 dùng cho tương lai."],
            ans: 1,
            explain: "날씨 좋네요! = Thời tiết đẹp nhỉ! (Tôi vừa nhận ra). 날씨 좋지요? = Thời tiết đẹp phải không? (Tôi muốn bạn đồng ý với tôi)."
        },
        {
            q: "Câu nào dùng ĐÚNG -(이)지요?:",
            options: ["내일 오지요세요?", "한국어를 배우지요?", "빨리 가지요!", "공부하지요마세요?"],
            ans: 1,
            explain: "한국어를 배우지요? = Bạn học tiếng Hàn đúng không? Gắn -지요? vào thân động từ. Câu 1 sai cú pháp, câu 3 là câu khẳng định không phải hỏi, câu 4 vô nghĩa."
        }
    ],
    "-(으)ㄴ 지": [
        {
            q: "Cấu trúc '-(으)ㄴ 지' dùng để diễn tả điều gì?",
            options: ["Mục đích (để làm gì)", "Khoảng thời gian đã trôi qua KỂ TỪ KHI một sự việc xảy ra", "Điều kiện giả định", "Sự tiếc nuối"],
            ans: 1,
            explain: "-(으)ㄴ 지 = 'kể từ khi'. Cấu trúc hoàn chỉnh: 동사 + -(으)ㄴ 지 + [thời gian] + 됐어요/지났어요. Ví dụ: 한국에 온 지 3년이 됐어요 (Đã 3 năm kể từ khi tôi đến Hàn)."
        },
        {
            q: "Điền vào chỗ trống: 한국어를 공부한 ___ 얼마나 됐어요?",
            options: ["후에", "전에", "지", "때"],
            ans: 2,
            explain: "한국어를 공부한 지 얼마나 됐어요? = Bạn học tiếng Hàn được bao lâu rồi? -(으)ㄴ 지 + 얼마나 됐어요? là cụm hỏi thời gian quen thuộc."
        },
        {
            q: "Cấu trúc '-(으)ㄴ 지 [시간] 됐어요' và '-(으)ㄴ 지 [시간] 지났어요'. Nghĩa có khác nhau không?",
            options: ["Khác nhau hoàn toàn.", "Gần như giống nhau, cả hai đều chỉ thời gian đã trôi qua. 됐어요 tự nhiên hơn trong hội thoại.", "됐어요 là quá khứ xa, 지났어요 là quá khứ gần.", "Chỉ 지났어요 mới đúng ngữ pháp."],
            ans: 1,
            explain: "Cả hai đều đúng. 한국에 온 지 3년이 됐어요 = 3년이 지났어요 (Đã 3 năm). 됐어요 thông dụng hơn trong khẩu ngữ."
        },
        {
            q: "Chia '모르다' (không biết) theo -(으)ㄴ 지: '이름을 모른 지 오래됐어요'?",
            options: ["모른 지 (ĐÚNG)", "모른 지 (SAI, phải là 모르은 지)", "모른 지 (SAI, phải là 모르ㄴ 지)", "모른 지 (SAI, phải là 몰른 지)"],
            ans: 0,
            explain: "모르다 (르 불규칙): 모르 + (으)ㄴ = 모른. Đây là -(으)ㄴ thông thường. Chú ý 모르다 chia 아/어 thì là 몰라요 (르 bất quy tắc), nhưng với -(으)ㄴ thì là 모른. Câu hoàn chỉnh: 이름을 모른 지 오래됐어요."
        },
        {
            q: "Dịch: 'Tôi đã học tiếng Hàn được 2 năm rồi.'",
            options: ["한국어를 공부하기 전에 2년이에요.", "한국어를 공부한 지 2년이 됐어요.", "한국어를 공부한 후에 2년이에요.", "한국어 공부를 2년 동안 해요."],
            ans: 1,
            explain: "한국어를 공부한 지 2년이 됐어요 - Chuẩn nhất. Câu 4 (2년 동안 해요) cũng có thể dùng nhưng nhấn mạnh khoảng thời gian đang tiếp diễn hơn là 'đã được... rồi'."
        }
    ],
    "-(으)ㄹ까 봐": [
        {
            q: "'늦을까 봐 빨리 왔어요'. Trạng thái tâm lý được diễn tả là:",
            options: ["Hy vọng việc tốt xảy ra", "Lo sợ điều XẤU có thể xảy ra, nên hành động đề phòng", "Hứa hẹn", "Ngạc nhiên"],
            ans: 1,
            explain: "-(으)ㄹ까 봐 = Sợ rằng... / Lo rằng... Người nói LO SỢ khả năng xảy ra điều không mong muốn, nên đã hành động để đề phòng."
        },
        {
            q: "Điền vào chỗ trống: 감기에 걸___ 봐서 마스크를 썼어요.",
            options: ["리까", "릴까", "릴까 봐", "릴까 하"],
            ans: 2,
            explain: "걸리다 (bị mắc) + -(으)ㄹ까 봐: 걸릴까 봐 (Sợ bị mắc cảm). 걸리 + ㄹ까 봐 = 걸릴까 봐서. Câu: Đeo khẩu trang vì sợ bị cảm."
        },
        {
            q: "Phân biệt '-(으)ㄹ까 봐' và '-(으)ㄹ까 하다':",
            options: ["Giống nhau.", "-(으)ㄹ까 봐: LO SỢ điều xấu xảy ra. -(으)ㄹ까 하다: ĐANG NGHĨ SẼ làm gì (kế hoạch chưa chắc).", "-(으)ㄹ까 하다 là phủ định.", "-(으)ㄹ까 봐 dùng cho tương lai, -(으)ㄹ까 하다 cho quá khứ."],
            ans: 1,
            explain: "내일 쉴까 해요 (Tôi đang nghĩ ngày mai sẽ nghỉ - kế hoạch). 내일 비가 올까 봐 우산을 가져왔어요 (Sợ trời mưa nên mang ô - lo lắng). Hoàn toàn khác nhau về sắc thái!"
        },
        {
            q: "Câu nào dùng ĐÚNG -(으)ㄹ까 봐?",
            options: ["시험에 합격할까 봐 열심히 공부해요.", "시험에 떨어질까 봐 열심히 공부해요.", "한국어를 잘 할까 봐 걱정했어요.", "날씨가 좋을까 봐 우산을 가져왔어요."],
            ans: 1,
            explain: "떨어질까 봐 (Sợ trượt thi) → nên mới cố gắng học. -(으)ㄹ까 봐 phải đi với điều TIÊU CỰC mà người nói không muốn xảy ra. Câu 1 vô lý (Sợ đỗ thi?). Câu 3 không hợp lý. Câu 4 mâu thuẫn (Nếu sợ trời đẹp thì không mang ô)."
        },
        {
            q: "Câu bẫy patchim: '먹다' (ăn) + -(으)ㄹ까 봐 = ?",
            options: ["먹까 봐", "먹을까 봐", "먹ㄹ까 봐", "먹으까 봐"],
            ans: 1,
            explain: "먹다 có patchim ㄱ -> dùng -을까 봐: 먹을까 봐 (Sợ sẽ ăn - Ví dụ: 많이 먹을까 봐 조금만 시켰어요 - Sợ ăn nhiều quá nên chỉ gọi ít thôi)."
        }
    ],
    "-게 (trạng từ)": [
        {
            q: "Chức năng của '-게' khi gắn vào tính từ là gì?",
            options: ["Tạo danh từ", "Tạo TRẠNG TỪ (biến tính từ thành trạng từ bổ nghĩa cho động từ)", "Tạo câu hỏi", "Phủ định tính từ"],
            ans: 1,
            explain: "-게 là hậu tố biến TÍNH TỪ thành TRẠNG TỪ. 빠르다(nhanh) → 빠르게(một cách nhanh). 예쁘다(đẹp) → 예쁘게(một cách đẹp). Tương đương '-ly' trong tiếng Anh."
        },
        {
            q: "Điền vào câu: '물건을 _____ 해 주세요.' (Xin làm cho rẻ / Bớt cho tôi)",
            options: ["싸", "싸게", "싼", "쌀"],
            ans: 1,
            explain: "싸다(rẻ) + 게 = 싸게. 싸게 해 주세요 = Làm cho rẻ thôi / Bớt cho tôi. Đây là cấu trúc hay gặp khi mặc cả."
        },
        {
            q: "Phân biệt '-게 되다' và '-게 + 동사':",
            options: ["Giống nhau.", "-게 되다: Sự thay đổi/chuyển biến tự nhiên. -게 + 동사: Trạng từ mô tả cách thức hành động.", "-게 되다 là quá khứ, -게 + 동사 là hiện tại.", "Cả hai đều là thể phủ định."],
            ans: 1,
            explain: "빠르게 달려요 (Chạy một cách nhanh - trạng từ). 한국어를 잘하게 됐어요 (Đã trở nên giỏi tiếng Hàn - sự thay đổi). Hoàn toàn khác nhau!"
        },
        {
            q: "Chia '-게' với 멀다 (xa - có patchim ㄹ). Kết quả là:",
            options: ["머게", "멀게", "멀으게", "머르게"],
            ans: 1,
            explain: "ㄹ chỉ bị rụng trước ㄴ, ㅂ, ㅅ. Gặp -게 (bắt đầu bằng ㄱ) → ㄹ ĐƯỢC GIỮ NGUYÊN. 멀다 → 멀게 (ở cách xa / một cách xa). Đừng nhầm với 머세요, 멉니다 (ở đó ㄹ mới rụng)."
        },
        {
            q: "'-게 하다' có nghĩa là gì?",
            options: ["Tự mình làm", "KHIẾN / LÀM CHO ai đó làm gì hoặc trở nên như thế nào", "Không thể làm", "Muốn làm"],
            ans: 1,
            explain: "아이를 웃게 해요 = Làm cho đứa trẻ cười. 방을 깨끗하게 해요 = Làm cho phòng sạch. -게 하다 là cấu trúc sai khiến/khiến cho."
        }
    ],
    "-는 게 좋겠다": [
        {
            q: "'-는 게 좋겠다'/'-(으)ㄴ 게 좋겠다' dùng để làm gì?",
            options: ["Khen ngợi", "ĐƯA RA LỜI KHUYÊN / ĐỀ NGHỊ (Nên làm gì đó)", "Phủ định", "Hỏi ý kiến"],
            ans: 1,
            explain: "빨리 가는 게 좋겠어요 = Tốt hơn nên đi nhanh thôi. Đây là cấu trúc đưa ra lời khuyên nhẹ nhàng, thể hiện sự quan tâm của người nói."
        },
        {
            q: "So sánh '-는 게 좋겠다' và '-는 게 좋다': Cái nào nhấn mạnh lời khuyên HƠN?",
            options: ["Giống nhau hoàn toàn.", "-는 게 좋겠다 nhấn mạnh hơn vì -겠- thể hiện ý nghĩ/phán đoán của người nói.", "-는 게 좋다 nhấn mạnh hơn.", "Không thể so sánh."],
            ans: 1,
            explain: "약을 먹는 게 좋아요 (Nên uống thuốc - bình thường). 약을 먹는 게 좋겠어요 (Tôi nghĩ bạn nên uống thuốc - lời khuyên có phần quan trọng hơn, có cân nhắc của người nói)."
        },
        {
            q: "Điền vào chỗ trống: '시간이 없으니까 빨리 ___________.'",
            options: ["가는 게 좋겠어요", "가는 게 좋았어요", "갈 게 좋겠어요", "가는 게 나빠요"],
            ans: 0,
            explain: "가는 게 좋겠어요 = Tốt hơn nên đi nhanh. Vế trước có -(으)니까 (vì) nên vế sau tự nhiên là lời khuyên. Đây là pattern quen thuộc trong TOPIK."
        },
        {
            q: "Với tính từ (Ví dụ: 조용하다 - yên tĩnh), cấu trúc thay đổi thế nào?",
            options: ["조용하는 게 좋겠어요", "조용한 게 좋겠어요", "조용할 게 좋겠어요", "조용히 게 좋겠어요"],
            ans: 1,
            explain: "Với TÍNH TỪ: -(으)ㄴ 게 좋겠어요. 조용하다 → 조용한 게 좋겠어요 (Nên yên tĩnh hơn). Với ĐỘNG TỪ: -는 게 좋겠어요. Đây là điểm phân biệt quan trọng!"
        },
        {
            q: "Cách dùng nào KHÔNG phù hợp với '-는 게 좋겠다'?",
            options: ["Khuyên bạn đi khám bệnh", "Đề xuất họp sớm hơn", "Mô tả thời tiết hôm qua", "Đề nghị ai đó mang ô"],
            ans: 2,
            explain: "Mô tả thời tiết hôm qua là chức năng của thì quá khứ (비가 왔어요). '-는 게 좋겠다' chỉ dùng để đưa ra lời khuyên/đề nghị về hiện tại/tương lai."
        }
    ],
    "-았/었으면 좋겠다": [
        {
            q: "'-았/었으면 좋겠다' diễn tả điều gì?",
            options: ["Điều đã thực sự xảy ra", "ƯỚC GÌ / MONG RẰNG điều chưa xảy ra hoặc trái với thực tế", "Ra lệnh", "Phỏng đoán"],
            ans: 1,
            explain: "날씨가 좋았으면 좋겠어요 = Ước gì thời tiết đẹp (Thực tế là thời tiết không đẹp). Đây là cách diễn đạt ước mong đặc trưng của tiếng Hàn."
        },
        {
            q: "Chia '오다' (đến) với '-았/었으면 좋겠다': 'Ước gì trời mưa'?",
            options: ["오면 좋겠어요", "왔으면 좋겠어요", "올면 좋겠어요", "오았으면 좋겠어요"],
            ans: 1,
            explain: "오다 (kết thúc nguyên âm ㅗ) -> 았어요 -> 와요. Quá khứ: 왔 + 으면 좋겠어요 = 왔으면 좋겠어요 (Ước gì trời mưa / Ước gì đã mưa)."
        },
        {
            q: "So sánh '-(으)면 좋겠다' và '-았/었으면 좋겠다': Sự khác biệt là gì?",
            options: ["Hoàn toàn giống nhau.", "-(으)면 좋겠다: mong điều có thể xảy ra. -았/었으면 좋겠다: ước điều TRÁI VỚI THỰC TẾ hoặc khó xảy ra hơn.", "-았/었으면 좋겠다 là quá khứ hoàn thành.", "-(으)면 좋겠다 chỉ dùng với ngôi 1."],
            ans: 1,
            explain: "내일 날씨가 좋으면 좋겠어요 (Mong ngày mai trời đẹp - có thể xảy ra). 지금 방학이었으면 좋겠어요 (Ước gì bây giờ là kỳ nghỉ - trái thực tế hiện tại). Sắc thái khác nhau, nhưng trong thực tế người Hàn thường dùng hoán đổi."
        },
        {
            q: "Điền vào chỗ trống: '빨리 배달이 ___________ 좋겠어요.'",
            options: ["오면", "왔으면", "올까 봐", "오겠어요"],
            ans: 1,
            explain: "왔으면 좋겠어요 = Ước gì hàng đã/sẽ được giao đến (ước mong, có sắc thái nóng lòng chờ đợi). Đây là ví dụ chuẩn trong PDF TOPIK I."
        },
        {
            q: "Câu nào diễn đạt ĐÚNG ý 'Ước gì tôi giỏi tiếng Hàn'?",
            options: ["한국어를 잘했으면 좋겠어요.", "한국어를 잘하면 좋겠어요.", "Cả hai đều đúng nhưng sắc thái khác nhau.", "Không câu nào đúng."],
            ans: 2,
            explain: "Cả hai đều ĐÚNG: 잘하면 좋겠어요 (Mong rằng sẽ giỏi - nhìn về tương lai). 잘했으면 좋겠어요 (Ước gì mình giỏi - cảm giác tiếc nuối, khó hơn thực tế). Trong đề TOPIK, cả hai đều xuất hiện."
        }
    ],
    "께 / 께서": [
        {
            q: "Trợ từ '께' là dạng KÍNH NGỮ của trợ từ nào?",
            options: ["은/는", "이/가", "에게/한테", "을/를"],
            ans: 2,
            explain: "께 là dạng kính ngữ của 에게/한테 (cho ai/đối với ai). Dùng khi nói về đối tượng đáng kính: 선생님께 드렸어요 (Tôi đã tặng cho thầy/cô)."
        },
        {
            q: "Trợ từ '께서' là dạng KÍNH NGỮ của trợ từ nào?",
            options: ["은/는", "이/가", "을/를", "에서"],
            ans: 1,
            explain: "께서 là dạng kính ngữ của 이/가 (trợ từ chủ ngữ). Dùng khi CHỦ NGỮ là người đáng kính: 선생님께서 오셨어요 (Thầy/cô đã đến). Bắt buộc đi kèm đuôi kính ngữ -(으)시-."
        },
        {
            q: "Chọn câu đúng ngữ pháp kính ngữ:",
            options: ["할머니가 주무세요.", "할머니께서 주무세요.", "할머니께서 자세요.", "할머니이/가 주무세요."],
            ans: 1,
            explain: "할머니께서 (bà - chủ ngữ kính ngữ) + 주무세요 (ngủ - kính ngữ của 자다). Câu 1 sai vì dùng 가 thường thay vì 께서. Câu 3 sai vì 자다 chưa kính ngữ hóa."
        },
        {
            q: "Dịch câu: 'Tôi đã gọi điện cho thầy giáo.'",
            options: ["선생님에게 전화했어요.", "선생님께 전화 드렸어요.", "선생님한테 전화 줬어요.", "선생님께서 전화했어요."],
            ans: 1,
            explain: "선생님께 (cho thầy = kính ngữ của 에게) + 드리다 (kính ngữ của 주다/하다 khi đối tượng là bề trên). 드렸어요 = đã thực hiện (kính ngữ). Câu 1 dùng 에게 thường - thiếu kính ngữ."
        },
        {
            q: "Câu nào SAI về cách dùng 께서?",
            options: ["부모님께서 한국에 사세요.", "사장님께서 회의를 시작하셨어요.", "친구께서 학교에 왔어요.", "할아버지께서 진지를 드세요."],
            ans: 2,
            explain: "께서 chỉ dùng với người có thứ bậc/tuổi tác cao hơn người nói. 친구 (bạn bè) không phải đối tượng kính ngữ → dùng 친구가 학교에 왔어요 mới đúng. Dùng 께서 với bạn bè nghe rất lạ và không tự nhiên."
        }
    ],
    "에게서 / 한테서": [
        {
            q: "'에게서' và '한테서' mang nghĩa gì?",
            options: ["Cho ai đó (hướng đến)", "Từ ai đó (xuất phát từ người/động vật)", "Ở đâu đó (địa điểm)", "Với ai đó (cùng nhau)"],
            ans: 1,
            explain: "에게서/한테서 = 'từ' (ai đó), chỉ nguồn gốc/xuất phát từ người hoặc động vật. 친구한테서 선물을 받았어요 = Tôi nhận quà TỪ bạn. Ngược lại với 에게/한테 (hướng đến)."
        },
        {
            q: "Sự khác biệt sắc thái giữa '에게서' và '한테서' là gì?",
            options: ["에게서 là văn nói, 한테서 là văn viết.", "에게서 là văn viết/trang trọng, 한테서 là khẩu ngữ thân mật.", "Chỉ 한테서 mới đúng ngữ pháp.", "Không có khác biệt gì."],
            ans: 1,
            explain: "Giống như cặp 에게/한테: 에게서 dùng trong văn bản, thư từ, trang trọng. 한테서 dùng trong hội thoại hàng ngày, thân mật hơn."
        },
        {
            q: "Điền trợ từ: '호텔 직원___ 정보를 받았어요.'",
            options: ["에게", "한테서", "께서", "에서"],
            ans: 1,
            explain: "호텔 직원 (nhân viên khách sạn) là người → dùng 한테서 hoặc 에게서. 받다 (nhận) = nhận TỪ ai → cần 에게서/한테서 (không phải 에게/한테 vì đó là hướng đến). 한테서 phù hợp khẩu ngữ nhất."
        },
        {
            q: "Câu nào dùng ĐÚNG 에게서/한테서?",
            options: ["저는 선생님한테서 배웠어요.", "저는 도서관한테서 책을 빌렸어요.", "저는 회사한테서 일을 받았어요.", "저는 하늘한테서 비가 와요."],
            ans: 0,
            explain: "에게서/한테서 chỉ dùng với NGƯỜI hoặc ĐỘNG VẬT. 도서관 (thư viện), 회사 (công ty), 하늘 (bầu trời) là đồ vật/nơi chốn → không dùng 한테서. Câu đúng: 도서관에서, 회사에서, 하늘에서."
        },
        {
            q: "Câu kính ngữ: 'Tôi đã nghe điều đó từ thầy giáo.' Dùng trợ từ nào?",
            options: ["선생님에게서 들었어요.", "선생님한테서 들었어요.", "선생님께서 들었어요.", "선생님께(서)부터 들었어요."],
            ans: 0,
            explain: "Dạng kính ngữ của 에게서 thực tế KHÔNG có biến thể riêng — người ta thường dùng 에게서 ngay cả với người lớn tuổi. Câu 3 sai vì 께서 là trợ từ chủ ngữ (불어 họ là chủ thể nói), không phải nguồn nhận tin. Câu đúng nhất trong thực tế: 선생님에게서 / 선생님께 들었어요."
        }
    ]
};
