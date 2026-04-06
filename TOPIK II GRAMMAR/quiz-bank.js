const QUIZ_BANK = {
    // 1. 연결어미 (Vĩ tố liên kết nâng cao)
    "-자마자": [
        {
            q: "Ngữ pháp '-자마자' (Ngay khi) có diễn tả nguyên nhân - kết quả không?",
            options: ["Có. Vì A xảy ra nên B mới xảy ra.", "KHÔNG. Đơn thuần là A vừa mới DỨT XONG thì B lập tức diễn ra LIỀN. Nhấn mạnh sự nối tiếp tức khắc về thời gian.", "Có, nếu dùng cho thì quá khứ.", "Chỉ dùng cho tương lai."],
            ans: 1,
            explain: "Khác với -아/어서 (Vì nên). -자마자 chỉ đơn giản dải đinh thời gian: Việc này VỪA dứt -> Việc kia chọc vào. VD: 집에 도착하자마자 잠이 들었어요 (Vừa lết được về đến nhà là gục cmn mất)."
        },
        {
            q: "LUẬT VÀNG: Quá khứ hay Tương lai thì CHIA THÌ ở vế nào?",
            options: ["Phải chia đều ở cả 2 vế (Ví dụ: -았/었자마자).", "Chỉ được chia THÌ ở động từ CHÍNH VẾ SAU CÙNG. Vế trước giữ nguyên ở thân động từ gốc.", "Luôn dùng hiện tại.", "Tùy hứng."],
            ans: 1,
            explain: "SAI BÉT: 끝났자마자 (Vừa mới kết thúc). PHẢI LÀ: 끝나자마자 밥을 먹었어요. Kể chuyện Tương lai hay Quá khứ thì kệ bạn, cứ Tọng cái Cảm xúc đó vào Động Từ Cuối Câu."
        },
        {
            q: "Nhét '-자마자' vào từ '듣다' (Nghe - ㄷ bất quy tắc):",
            options: ["들자마자", "듣자마자", "들으자마자", "듣어자마자"],
            ans: 1,
            explain: "Chữ ㄷ ngàn thu chỉ sợ Nguyên âm (ㅇ). Chữ 자 bắt đầu bằng chữ ㅈ (Phụ âm). Hù cái gì mà hù! Dữ nguyên gốc: 듣자마자 (Vừa nghe là...)."
        },
        {
            q: "Với ngữ pháp '-자마자', bạn có được phép dùng với câu Mệnh lệnh / Gợi ý (-으세요, -(으)ㅂ시다) không?",
            options: ["Tuyệt đối không.", "CÓ. Sử dụng hoàn toàn bình thường (Vừa đến nơi thì gọi điện cho tôi nhé!).", "Chỉ dùng được với -으세요.", "Chỉ có thể dùng với câu trần thuật."],
            ans: 1,
            explain: "Thoải mái xài: 도착하자마자 전화해 주세요 (Vừa đến là nhớ nhao vô gọi cho tôi nhé)."
        },
        {
            q: "Câu: 'Chồng VỪA VỀ NHÀ là ổng rớt luôn ra giường' (남편이 집에 오___ 잠이 들었어요).",
            options: ["오고", "오면", "오자마자", "왔자마자"],
            ans: 2,
            explain: "Hai người có thể làm động từ khác nhau (Chồng về - Chồng ngủ). Chỉ cần Thời gian là Bóp Cò (Ngay Khi). => 오자마자."
        }
    ],
    "-더니": [
        {
            q: "Bản chất cốt lõi của '-더니' (Thế mà / Rồi thì) là TÍNH CHẤT gì?",
            options: ["Diễn tả lý do chủ quan", "Người NÓI đang NHÌN THẤY HOẶC TRẢI NGHIỆM một sự thật LÀM CHẤN ĐỘNG / THAY ĐỔI giữa Quá Khứ và Hiện Tại.", "Câu mệnh lệnh", "Phủ định quá khứ"],
            ans: 1,
            explain: "Chữ 더 là kí ức. 니 là sự kết nối. Hồi chiều Mắt tôi thấy (Trời mưa), thế mà đùng cái Bây giờ (Trời tạnh). => 아까 비가 오더니 지금은 맑아요."
        },
        {
            q: "ĐIỀU CẤM KỊ của '-더니': Ngôi CHỦ NGỮ CỦA VẾ TRƯỚC VÀ VẾ SAU bắt buộc phải như thế nào?",
            options: ["Có thể khác nhau (người này đấm người kia).", "BẮT BUỘC PHẢI GIỮ NGUYÊN 1 ĐỐI TƯỢNG (Ví dụ: Thằng An hồi nãy khóc thì bây giờ CŨNG VẪN PHẢI LÀ THẰNG AN cười).", "Chỉ dùng Ngôi thứ 1.", "Luôn đổi chủ ngữ."],
            ans: 1,
            explain: "Đã quan sát thì phải bám theo 1 đứa tử tế. 아까는 아이가 울더니 지금은 웃어요 (Hồi nãy Đứa Trẻ khóc, thế mà giờ Đứa Trẻ lại cười)."
        },
        {
            q: "Nếu tôi muốn dùng '-더니' cho BẢN THÂN MÌNH (Ngôi thứ nhất 'Tôi'). Tôi có được viết: '내가 열심히 공부하더니 합격했어요' không?",
            options: ["Hoàn toàn đúng.", "Sai! Ngôi 1 (Tôi) phải chia thành '-았/었더니' (Vì lúc này nó mang nghĩa 'TÔI ĐÃ LÀM THỨ NÀY... nên kết quả xảy ra THẾ CHAI').", "Được nếu là tương lai.", "Chỉ dùng cho người khác."],
            ans: 1,
            explain: "Tôi không THỂ TỰ NHÌN TÔI BẰNG MẮT từ xa. Nên nếu nói VỀ MÌNH => Phải xài 았/었더니. 내가 많이 먹었더니 배가 아파요 (Hồi nãy NHỜ TÔI Đớp Lắm quá Tới mức mà giờ cái bụng Tôi Nó Đau cmnr)."
        },
        {
            q: "Chia '-더니' với '춥다' (Thời tiết Lạnh): Hôm qua Lạnh teo, thế mà hôm nay...",
            options: ["춥더니", "추웠더니", "추우더니", "추더니"],
            ans: 0,
            explain: "더 bắt đầu bằng ㄷ (Phụ âm). Chữ 춥 (Bất quy tắc ㅂ) không thèm sợ! Giữ nguyên: 어제는 춥더니 (Đừng lanh chanh đổi thành 우/워 nhé)."
        },
        {
            q: "Câu nào Sai bét vì phạm lỗi QUAN SÁT (Trải nghiệm cá nhân)?",
            options: ["어제는 비가 오더니 오늘은 안 와요.", "동생이 밥을 많이 먹더니 배가 아프다고 해요.", "제가 노래를 하더니 목이 아파요.", "지민이가 열심히 하더니 1등을 했어요."],
            ans: 2,
            explain: "Cái số 3 (제가 - Tôi). Dám lấy -더니 gán cho Bản Thân là Cấm Kị. Phải sửa thành 했더니 (Tôi Hát Rồi Hậu Quả Để Lại là Tôi Bị Viêm Họng)."
        }
    ],
    "-(으)ㄹ수록": [
        {
            q: "Ý nghĩa của '-(으)ㄹ수록' là gì?",
            options: ["Mặc dù", "CÀNG ... CÀNG (Trạng thái/Hành động càng gia tăng thì Vế sau Càng Biến thiên theo).", "Nếu không", "Trong khi"],
            ans: 1,
            explain: "갈수록 (Càng ngày càng.../ đi càng sâu càng..). 한국어는 공부할수록 재미있어요 (Tiếng Hàn CÀNG học CÀNG cuốn)."
        },
        {
            q: "Để GIA TĂNG SỨC MẠNH CÚ ĐẤM 'Càng... Càng...', người ta hay chốt hạ combo ghép với từ nào đằng trước?",
            options: ["-(으)니까", "-(으)면", "-(으)러", "-자마자"],
            ans: 1,
            explain: "Combo -(으)면 + -(으)ㄹ수록 (Nếu...thì càng). 많으면 많을수록 좋아요 (NẾU càng Nhiều THÌ CÀNG tốt / Càng Nhiều Càng Tốt)."
        },
        {
            q: "Từ '갈수록' là từ cửa miệng mà người Hàn hay xài mang âm hưởng gì?",
            options: ["Càng đi xa", "CÀNG NGÀY CÀNG (Time passes by...)", "Càng khó khăn", "Hướng đi sai lầm"],
            ans: 1,
            explain: "Giống như '점점'. 갈수록 추워요 (Thì Cứ CÀNG LÂU CÀNG (Đi xa hơn về mặt thời gian) lạnh hơn)."
        },
        {
            q: "Chia '-(으)ㄹ수록' với '듣다' (Nghe - ㄷ bất quy tắc):",
            options: ["듣을수록", "들을수록", "듣을록", "들록"],
            ans: 1,
            explain: "Chữ ㄷ đụng NGUYÊN ÂM 으 -> Phọt ra chữ ㄹ. => 들을수록 (Càng nghe càng... chói tai)."
        },
        {
            q: "Chia '-(으)ㄹ수록' với '만들다' (Làm - ㄹ bất quy tắc):",
            options: ["만들을수록", "만들수록", "만든수록", "만드수록"],
            ans: 1,
            explain: "Chung đụng ㄹ. 만들다 đã Xẵng Có ㄹ rồi, thì Khỏi Thêm 으 hay ㄹ Gì Nữa. Tọng Cmn chữ 수록 vào luôn => 만들수록 (Càng Làm Càng Sai)."
        }
    ],
    "-다가": [
        {
            q: "Tuyệt kĩ của '-다가' (Đang... thì) miêu tả khoảnh khắc gì?",
            options: ["Hoàn thành xuất sắc nhiệm vụ", "SỰ GIÁN ĐOẠN ĐỘT NGỘT: Đang phê pha Làm cái Vế 1 thì BỊ CẮT CHÉO BỞI Hành động ở Vế 2.", "Hai hành động chạy song song", "Thói quen lặp lại"],
            ans: 1,
            explain: "밥을 먹다가 전화를 받았어요 (Tay đang lùa cơm, Hành động Chưa Xong, Điện Thoại réo lên, Ngưng Mỏ Lại Bốc máy)."
        },
        {
            q: "QUY TẮC SỐNG CÒN của Ngôi Chủ Ngữ đối với '-다가':",
            options: ["Hai vế PHẢI CÙNG 1 CHỦ THỂ (Hành động bị gãy nhịp Của 1 Thằng Làm).", "Hai vế dùng 2 chủ thể khác nhau.", "Bất kỳ ai làm cũng được.", "Không được dùng danh từ người."],
            ans: 0,
            explain: "Không thể nói: Tôi Đang Ăn Cơm (먹다가) Mẹ tui Đi Về. Chủ ngữ là Tôi (Đang Ăn) tự nhiên nhảy sang Mẹ. Sai Bét. Phải là: Tôi đang ăn cơm (먹다가) thế là Tôi khóc (우어요)."
        },
        {
            q: "Nhìn vào chữ '다 가요' (Đi). Vậy '어디 가다가 왔어요?' dịch sát rạt nghĩa bóng là gì?",
            options: ["Em đi đâu đấy?", "Em ĐANG ĐI TỚI ĐÂU... RỒI LẠI QUAY VỀ Ở ĐÂY vầy?", "Em vừa đi vừa khóc à?", "Em sẽ đi đâu?"],
            ans: 1,
            explain: "Câu hỏi thăm kinh điển của dân Hàn. 가(다가) 왔어요? Ý là Tính Đi Đâu Xong Bị Cắt Cơn Rồi Ghé Lại đây à?"
        },
        {
            q: "Chia với '돕다' (Giúp - ㅂ bất quy tắc): Bạn đang phụ mẹ thì tay Cắt trúng dao.",
            options: ["도우다가", "돕다가", "도와다가", "도워다가"],
            ans: 1,
            explain: "Chữ 다 bắt đầu bằng Phụ Âm (ㄷ). ㅂ Cười hô hô méo sợ. Dữ Nguyên: 돕다가."
        },
        {
            q: "Bẫy Ngang Trái: '-다가' khác biệt với '-고' ở điểm chí mạng nào?",
            options: ["Giống y hệt.", "-고 (Làm xong hết vế 1 rồi làm Vế 2). CÒN -다가 (Vế 1 CHƯA LÀM XONG KẾT THÚC thì Vế 2 Chọc Mõm Nhảy Vào).", "-다가 dùng cho số đếm.", "-고 không dùng hiện tại."],
            ans: 1,
            explain: "숙제를 하고 잤어요 (Làm Xong Hết bài -> Lên Giường Ngủ). 숙제를 하다가 잤어요 (Đang viết bài được Nửa chừng -> Buồn Ngủ Quá Gục Cmn Úp Mặt Xuống Bàn)."
        }
    ],
    "-느라(고)": [
        {
            q: "Chỉ Mặt Lỗi Gây Họa '-느라(고)'. Nó được xưng danh là NGỮ PHÁP TIÊU CỰC VỊ KỶ vì sao?",
            options: ["Diễn giải lợi ích", "Vế 2 LUÔN LÀ KẾT QUẢ XẤU (Biện cớ: CHỈ VÌ TÔI MẢI CÀY RANK... NÊN TÔI TẠCH MÔN VÀ KHÔNG THỂ...).", "Dùng để tỏ tình", "Tương lai tích cực"],
            ans: 1,
            explain: "어젯밤에 게임하느라(고) 숙제를 못 했어요. Đâm đâm mờ mờ Mải Miết vào vế 1 (Chơi game) -> Dẫn đến Vế 2 Hỏng Bét (Không làm bài, đến Muộn, Quên mất)."
        },
        {
            q: "Khi Nối đuôi '-느라(고)', Vế 1 (Nguyên Nhân Mải Miết) có BỊ ÉP SỬ DỤNG VỚI TÍNH TỪ không?",
            options: ["Dùng thoải mái", "TUYỆT ĐỐI KHÔNG! CHỈ ÁP DỤNG VỚI ĐỘNG TỪ. (Vì Mải Bận Rộn Hành Động Gì Đó. Tính từ có mải được đâu).", "Chỉ dùng với Tính Từ dài", "Tùy tâm trang"],
            ans: 1,
            explain: "Không thể nói: 예쁘느라고 늦었어요 (Tại tui xinh quá nên tui đến muộn) -> Ăn Đập Ngay. Phải là 화장하느라고 (Mải Makeup nên tao muộn hehe)."
        },
        {
            q: "Sửa Lỗi Sai To Đùng: Bạn KHÔNG THỂ chia THÌ (Quá khứ / Tương lai) ở phía trước chữ '-느라(고)'. Chân Lý Rất Chân Lý VÌ SAO?",
            options: ["Vì nó không thích", "Vì -느라 đã mặc định là Hành Động Đã Đang Diễn Ra (Mải miết làm) nên CHỈ CỘNG VỚI THÂN TỪ GỐC (Ví dụ: 하느라 - Không bao giờ có 했느라).", "Vì nó là tân ngữ", "Thích thì chia"],
            ans: 1,
            explain: "SAI: 공부했느라고. ĐÚNG: 공부하느라고. Kể lể quá khứ hay không thì Dồn hết Đuôi chia vào chữ Động Từ Cuối Cùng của câu!"
        },
        {
            q: "Câu: 'Vì Bận Rộn / Gấp Gáp Chuẩn Bị (준비하다)' -> Chia thế nào?",
            options: ["준비했느라고", "준비하느라고", "준비하느면", "준비할거라고"],
            ans: 1,
            explain: "Bỏ 다 gắn trực tiếp 느라. Búng tay lẹ: 준비하느라(고)."
        },
        {
            q: "Gài kèo 2 vế. Vế sau '-느라' ĐƯỢC PHÉP dùng câu Thỉnh Dụ/Mệnh Lệnh (-으세요, -자) không?",
            options: ["Có. Vì mải chơi nên hãy ngủ đi.", "KHÔNG!! Lý do biện minh kết quả Xấu (Mình làm sai cái này) nên Cấm Được Sai Khiến Người Khác. Chỉ đi với Dạng Tường Thuật/Phủ định.", "Áp dụng được ở đuôi hỏi.", "Thích dùng gì dùng."],
            ans: 1,
            explain: "Ví dụ: 일하느라고 병원에 가세요. (Tao vì mải kiếm tiền nên mày Bị bệnh vô viện đi) => Ý nghĩa nó Ngáo Chó cực kỳ."
        }
    ],
    "-(으)ㄴ/는 반면(에)": [
        {
            q: "Bản chất ý đồ của '반면' (Phản Diện) - Trái ngược, Mặt khác là gì?",
            options: ["Nối hai điểm tốt.", "ĐANG KHEN Cái Vế Này... Lật mặt cái RẦM CHÊ cái vế bên kia. Hoặc ngược lại (Nêu tính hai mặt / Đối lập của sự kiện).", "Tóm gọn lại vấn đề.", "Nêu lên nguyên lý."],
            ans: 1,
            explain: "이 식당은 맛있는 반면에 너무 비싸요. (Giao diện Ngon Ăn - Phản Diện là Bóp Cổ cái ví TIỀN). Rất sang, hợp viết văn nghị luận TOPIK."
        },
        {
            q: "Ngữ Pháp Nền Tảng đằng trước chữ 반면 CHÍNH LÀ GÌ?",
            options: ["-아/어서", "Rập khuôn y sì ĐỊNH NGỮ (động từ thì -는, tính từ hiện tại thì -(으)ㄴ).", "Danh động từ", "Câu gián tiếp"],
            ans: 1,
            explain: "비싸다 (Tính từ) -> 비싼 반면에. 가다 (Động từ) -> 가는 반면에. Làm đúng định ngữ ghim vô là auto ăn điểm 10."
        },
        {
            q: "Với Tính từ '좋다' (Tốt / Có patchim). Sẽ chia thành:",
            options: ["좋는 반면에", "좋은 반면에", "좋을 반면에", "좋 반면에"],
            ans: 1,
            explain: "Tính từ, Có patchim ㅎ lấy (으)ㄴ => 좋은 반면에."
        },
        {
            q: "Chia động từ '벌다' (Kiếm tiền - Có ㄹ) (Mặt tớ thì Kiếm Tiền... Ngược lại vế kia phá tiền):",
            options: ["벌는 반면에", "법는 반면에", "버는 반면에", "번는 반면에"],
            ans: 2,
            explain: "Bất quy tắc ㄹ muôn thuở. Gặp Định Ngữ '-는' (nhóm ㄴ,ㅂ,ㅅ). Thằng ㄹ bốc hơi chết đuối. => 버는 반면에."
        },
        {
            q: "Có thể rút gọn chữ '에' không?",
            options: ["Không", "CÓ. Có thể nói cọc lốc: ...는 반면 ...", "Phải thêm 서", "Thay bằng 이"],
            ans: 1,
            explain: "맛있는 반면 (vẫn đúng và thường được dùng báo chí cho ngắn)."
        }
    ],
    "-다 보면": [
        {
            q: "Giải ảo triết lý '-다 보면' (Cứ... rồi sẽ). Chữ '보면' ở đây là NHÌN đúng không?",
            options: ["Bạn đang phải dùng mắt Nhìn thẳng vào cái hành động đó liên tục.", "KHÔNG! Nó mang tính trừu tượng: NẾU cậu CỨ KIÊN TRÌ LẶP ĐI LẶP LẠI (다) hành động đó... THÌ CẬU SẼ TỰ NHÌN RA / NHẬN RA / ĐẠT ĐƯỢC một chân lý tự nhiên.", "Chỉ thị nhìn vào sự vật.", "Diễn tả quá khứ"],
            ans: 1,
            explain: "매일 연습하다 보면 잘할 거예요 (NẾU mỗi ngày CỨ CHAY CỐ mà Tập luyện... Thì Trình độ của bạn Sẽ VIP lên ĐÓ LÀ LẼ TỰ NHIÊN)."
        },
        {
            q: "Bởi vì '-다 보면' là Cứ làm NẾU CỨ THẾ. Nó đang giả định về MỘT THỨ CHƯA CHẮC ĐÃ XẢY RA. Vậy vế sau Đuôi Câu Thường Phải Là Gì?",
            options: ["Quá khứ -았/었어요", "TƯƠNG LAI suy đoán (-(으)ㄹ 거예요, -(으)ㄹ 수 있다, -게 되다...) (Tương lai mọc ra).", "Bị động", "Luôn chia thân mật."],
            ans: 1,
            explain: "Đã 'Cứ làm đi...' thì kết quả thường là '... Rồi sẽ thấy được / Sẽ được thui'. VD: 계속 걷다 보면 편의점이 나올 거예요 (Cứ lết đi tiếp đi rồi SẼ lòi ra cái Cửa Hàng Tiện Lợi)."
        },
        {
            q: "Có được phép dùng Tính Từ đằng trước '-다 보면' (예쁘다 보면 - Nếu cứ đẹp thì...) không?",
            options: ["Phổ biến.", "Tuyệt đối CẦM HỎNG! Vì sao? LÃO NÀY CHỈ GHÉP VỚI ĐỘNG TỪ BỞI TÍNH CỐ CHẤP DO CẦN SỰ LẶP LẠI CÚA LÊN LỚP (Hành động). Tính trạng đâu có Lập Lại.", "Chỉ có thể dùng cho sắc màu.", "Dùng nếu viết hoa."],
            ans: 1,
            explain: "Mình không thể nói 'Nếu cậu Cứ liên tục Trở Nên Lạnh Đi...' (춥다 보면). Tính chất là Cố Định. Nên ngữ pháp này KHÔNG CHO CHƠI VỚI TÍNH TỪ GỐC."
        },
        {
            q: "Sự phân biệt kinh điển: Giữa '-다 보면' (A) và '-다 보니까' (B):",
            options: ["Cả 2 là Hàng Fake của nhau.", "A là SỰ CÁ CƯỢC/KHUYÊN BẢO VỀ TƯƠNG LAI. B là CÁI QUẢ NGỌT (HOẶC ĐẮNG) MÀ TA ĐÃ RỚT TRÚNG (QUÁ KHỨ ĐÃ NHẬN RA RỒI).", "A mạnh hơn B.", "A cho người 1, B cho người 2."],
            ans: 1,
            explain: "Vàng chói lõi: 하다 보면 잘하게 될 거야 (Cứ làm sẽ Tốt - Chưa tốt). 하다 보니(까) 잘하게 됐어 (Tao Cứ Làm Nhiều quá Hóa Ra Giờ Tao Pro cmn rồi - Đã Đạt Được)."
        },
        {
            q: "Đục khoét chữ '살다' (Sống): CỨ LĂN LỘN VỚI ĐỜI RỒI CŨNG SẼ CÓ NGÀY TRÚNG MÁNH -> ____ 좋은 날이 올 거예요.",
            options: ["살으다 보면", "살다 보면", "사다 보면", "살러 보면"],
            ans: 1,
            explain: "Chữ 다 Của -다 보면 luôn gắn TRỰC TIẾP CHẮNG CẦN SUY NGHĨ: 살다 + 다 보면 => Dư thừa kệ mẹ: 살다 보면."
        }
    ],
    "-다 보니(까)": [
        {
            q: "Kế thừa triết lý: '-다 보니(까)' mang nghĩa DỒI ÔI! TAO CỨ LÀM MẢI MIẾT CÁI GÌ ĐÓ THÌ CHỢT PHÁT HIỆN RA CHÂN LÝ. Vậy chân lý ở vế sau luôn nằm ở THÌ NÀO?",
            options: ["Tương lai -ㄹ 거예요.", "QUÁ KHỨ (-았/었어요) HOẶC SỰ THẬT HIỂN NHIÊN Ở HIỆN TẠI (Nhận thức được nó).", "Chưa xác định.", "Kêu gọi rủ rê."],
            ans: 1,
            explain: "한국음식을 자주 먹다 보니까 매운 음식을 잘 먹게 되었어요 (Bú đồ Hàn miết... Tự nhiên Tới Bữa Nay Tao Phát Giác ra Tao Ăn Cay Giỏi Được Luôn Rùi - Sự việc ĐÃ RƠI VÀO người mình)."
        },
        {
            q: "Khóa mõm từ Vựng: Ngữ pháp này CÓ CHO TÍNH TỪ VÀO KHÔNG?",
            options: ["Tất nhiên là... CÓ!!!", "TUYỆT ĐỐI KHÔNG!!! Vì nó bắt bạn phải Hành Động miệt mài lòi bảng họng (다) mới Tự thấy (보니까). Làm méo có Tính Từ Liệt Kê Liên Tục.", "Chỉ cho Danh từ.", "Tùy tâm trang."],
            ans: 1,
            explain: "SAI VỚ TOANG BÉ: 맵다 보니까 (Vì cay quá tao nhận ra...). PHẢI LÀ Động Từ lặp đi lặp lại: 먹다 보니까 (Vì nhai hoài tao lòi ra cay)."
        },
        {
            q: "Nhưng Tức cười thay, VẾ TRƯỚC VÀ VẾ SAU CÓ THỂ ĐỔI CHỦ TỪ NHA TRUA VÌ SAO?",
            options: ["Cấm kị! Giống như Tương lai.", "CÓ THỂ VÌ LÝ DO: [Tao] cứ ăn đồ Hàn, bỗng chợt nhận ra [Đồ Hàn] nó Ngon vcl. Chủ ngữ V1=Tao, V2=Đồ Hàn.", "Vẫn Cấm", "Không quan tâm."],
            ans: 1,
            explain: "매일 운동을 하다 보니까 건강이 좋아졌어요 (TÔI tập... SỨC KHỎE TÔI bật dậy). Vẫn được lách luật ngọt nước!"
        },
        {
            q: "Điền chỗ trống: 혼자 한국에 ________ 외로울 때가 많아요 (Sống - 살다). Cứ Lủi thủi Miết ở Hàn thì Nhận Ra Dạo Này Thấy Buồn Quá.",
            options: ["살다 보니까", "사다 보니까", "살으다 보니까", "삽다 보니까"],
            ans: 0,
            explain: "Chữ 다 ghép Thẳng Băng với Từ Nguyên Mẫu: 살다 + 보니까 => 살다 보니까."
        },
        {
            q: "Chữ (까) trong vòng ngoặc có ý nghĩa gì?",
            options: ["Nên lược bỏ để sang chảnh hơn", "LÀ TÙY CHỌN! Gắn hay không gắn đều ĐƯỢC. Đuôi 까 nhấn mạnh âm điệu Rằng Là Vị Vì Thế Đó. (보니까 = 보니).", "Luôn phải có.", "Chỉ dùng cho văn viết."],
            ans: 1,
            explain: "일하다 보니 벌써 저녁이에요 = 일하다 보니까 벌써 저녁이에요. Hai con giáp là MỘT."
        }
    ],
    "-(으)므로": [
        {
            q: "Ngữ pháp Tối Thượng '-(으)므로' (Vì/Bởi Vì) là cái CHẤT XÁM nào mà lại ở TOPIK II Level 5?",
            options: ["Vì nó rất khó viết.", "VÌ NÓ LÀ NGỮ DIỄN CHO VĂN BẢN TRANG TRỌNG CỰC KÌ(BÁO CHÍ, LUẬT, BIỂN CẢNH BÁO, BÀI LUẬN WRITING 54). TUYỆT ĐỐI HÉ MỞ MỎ Ở NGOÀI ĐỜI (-기 때문에, 아/어서).", "Vì nó lặp lại âm vần.", "Chỉ có Vua Chúa xài."],
            ans: 1,
            explain: "Ở sân bay / thông báo: 비행기가 출발하므로... (Vì tàu lượn chuẩn bị bay...). Nó mang sắc thái Rất Lạnh Lùng và Giải Thích Tính Pháp Lý."
        },
        {
            q: "Nếu bạn viết Câu TRẦN THUẬT QUÁ KHỨ (Cái Rạp Chiếu Phim Hồi Trước Tôi CHẾT BẰNG CHỮ ĐÃ ĐÓNG CỬA MẤT TIÊU RỒI)... thì Ngữ pháp 으므로 NÀY CÓ GẮN VÀO THÌ ĐƯỢC KHÔNG?",
            options: ["KHÔNG. Cấm chia Thì ở giữa", "CÓ THỂ GẮN VỚI TẤT CẢ (Quá khứ -았/었으므로, Tương lai/Suy đoán -겠으므로). SIÊU MẠNH!", "Chỉ dùng hiện tại.", "Chỉ tương lai."],
            ans: 1,
            explain: "Ăn tiền ở chỗ này: 이미 출발했으므로 (VÌ NÓ ĐÃ BAY RỒI... nê). 알았으므로 (Vì tao ĐÃ BIẾT KÍN RỒI)."
        },
        {
            q: "Nhét từ '없다' (Không có - Có Patchim ㅂ) VÀO TRONG MÁY XAY 으므로:",
            options: ["없므로", "없음로", "없으므로", "어브므로"],
            ans: 2,
            explain: "Có patchim thì Cố Đút VÀO MÕM 으: 없 + 으므로 => 없으므로 (Chữ ㅅ lên Mũi => Eop-Seu-Meu-Ro)."
        },
        {
            q: "Trong TOPIK Writing (Câu 54), cái ĐUÔI VẾ CUỐI của '-(으)므로' LÀ NGHIÊM CẤM KẾT HỢP VỚI CÁI GÌ?",
            options: ["Tuyệt ĐỐI KIÊNG KỊ ĐUÔI TƯƠNG TÁC XÀM LỜ! NHƯ RỦ RÊ (-자, -ㅂ시다) HAY XIN XỎ (-으세요). Ở NƠI CAO SANG THÌ NÓI MỘT LÀ MỘT (TRẦN THUẬT CAO ĐỘ -ㅂ니다 / -다).", "Cấm dùng Quá Khứ.", "Có Thể Dùng Cho Tất Cả.", "Chỉ đi với Thì Tương Lai."],
            ans: 0,
            explain: "SAI MẤT XÁC: 비가 오므로 우산을 가져가세요 (Xé cmn bài). ĐÚNG: 비가 오므로 우산이 필요하다 (Phát ngôn khoa học - Cần Có Ô Tránh Mưa)."
        },
        {
            q: "Thế đối với DANH TỪ (Với cớ là vì TÔI LÀ Học Sinh). Danh Từ ĐI VỚI 으므로 Ra Làm Sao?",
            options: ["학색므로", "학생이므로", "학생으로", "학생은므로"],
            ans: 1,
            explain: "Danh từ PHẢI CỘNG THÊM 이다 (Là). Vậy: 명사 + (이)므로 => 학생(Có patchim) + 이므로 => 학생이므로 (Vì Bởi Trăng Tao Là Hs)."
        }
    ],
    "-(으)ㄴ/는데도": [
        {
            q: "Khạc Nhổ Lời Khuyên: '-(으)ㄴ/는데도' dịch dân dã ngoài đời là gì?",
            options: ["Trước đó và", "Tuy nhiên thì", "MẶC DÙ ĐÃ... RÀNH RÀNH RA ĐÓ, THẾ MÀ CUỐI CÙNG (Trái ngược Chát Chứa Luôn Đít Mọi Trông Đợi). Cú Quay Cổ 180 Độ.", "Vì thế nên"],
            ans: 2,
            explain: "열심히 공부했는데도 시험에 떨어졌어요 (MÁ NÓ tao Cày Cắm Đầu Cái Mặt Xanh Nanh Mặc Dù Gục cmn Xuống Bàn, THẾ MÀ tao Vẫn Tạch). Nó oán hận và ngạc nhiên hơn -지만 gấp vạn lần."
        },
        {
            q: "Sự phân biệt LỚP CẤU TRÚC (Động/Tính Trong Hiện tại). TÍNH TỪ DÙNG GÌ, ĐỘNG TỪ DÙNG GÌ?",
            options: ["Tính từ: -는데도 Lẫn Động: -는데도", "ĐỘNG TỪ thì chỉa Sóc Nhọn: -는데도. TÍNH TỪ thì Chơi Dứt Điểm ĐỊNH NGỮ (-(으)ㄴ데도). Giống y hệt cấu trúc -(으)ㄴ/는데 (Nhưng nhao thêm 도).", "Ngược lại", "Cứ vứt vào 으데도."],
            ans: 1,
            explain: "Ví dụ: 비싸다 (Tính từ - Mắc thế MÀ) -> 비싼데도 샀어요 (Tao Mua). 먹다 (Động từ - Ăn cật lực MÀ) -> 많이 먹는데도 배가 고파요."
        },
        {
            q: "Bất quy tắc ㄹ. Từ '멀다' (Ngắn Mả Tính Từ - Xa). MẶC DÙ NHÀ THẰNG ĐÓ XA...",
            options: ["멀은데도", "멀는데도", "먼데도", "먼는데도"],
            ans: 2,
            explain: "멀다 (Tính từ). Nghĩ trong đầu nó phải đi với -(으)ㄴ. Gặp Liên Kết (ㄴ). Bà Chằn ㄹ Tự Nhiên Bay cmn Não (Rớt). ㅂCòn chữ 머. Bồi Chữ ㄴ vô Đít => 먼데도."
        },
        {
            q: "Nếu Chơi Phá Quá Khứ (ĐÃ... THẾ MÀ). Đuôi Quá Khứ '-았/었' Thì Phải Cắm Cấu Trúc Nào?",
            options: ["-았/었던데도", "Bất chấp nó là Tính hay Động. Tao đã Chọt chữ 았/었 vào Bụng rùi, Thì đằng Đít LUÔN DÙNG -는데도. (-았/었는데도).", "Không dùng Quá khứ", "Thêm은데도."],
            ans: 1,
            explain: "Nhớ lấy Bí Thuật: 날씨가 추웠는데도 산에 갔어요 (Mặc dù Thời Tiết ĐÃ LẠNH VL... Tao vẫn Đi Leo). Dù 춥다 tính từ, Nhưng Xọt Quá khứ 추웠 Vô Mõm Thì Vứt Quách -ㄴ Hủy diệt, xài -는데도 cho Chắc Bụng."
        },
        {
            q: "Điền Hợp Ngữ: 월급이 _______ 돈이 없어요 (Mặc Dù Lương Nhiều To Tướng... MÀ chả thấy Đáy đâu). 많다: Tính từ Có Patchim.",
            options: ["많는데도", "많은데도", "많을데도", "많아도"],
            ans: 1,
            explain: "많다 (Tính từ Lớn Xác Có Bịch) => -(으)ㄴ데도 => 많은데도."
        }
    ],
    "-(으)ㄹ 뿐만 아니라": [
        {
            q: "Nhóm cấu trúc ghép mang nghĩa KHÔNG CHỈ... MÀ CÒN... (Đã giỏi lại còn đẹp). Lựa chọn ĐÚNG với ngữ pháp này:",
            options: ["-아/어서", "-(으)려고", "-(으)ㄹ 뿐만 아니라", "-(으)ㄹ 수밖에 없다"],
            ans: 2,
            explain: "얼굴이 예쁠 뿐만 아니라 마음도 착해요 (Chẳng những Đẹp Cái Giao Diện, Mà lại còn Ngon Cái Cấu Hình Tâm Hồn). Câu tủ ăn vã điểm 54 Writing."
        },
        {
            q: "Khi đi với Danh Từ, ' 뿐만 아니라' (Không những học sinh mà Giáo viên cũng...) chia thế nào cho oách?",
            options: ["학생일 뿐만 아니라", "학생인 뿐만 아니라", "학생뿐만 아니라", "학생들 뿐만 아니라"],
            ans: 2,
            explain: "Danh từ (Như Học Sinh, Caffe, Xe Hơi). BẠN GẮN TRỰC TIẾP CHỮ '뿐만 아니라' (KHÔNG CẦN CHIA (으)ㄹ GÌ CẢ) => 학생뿐만 아니라. Hoặc nếu muốn lôi thôi thì: 학생일 뿐만 아니라 (Vừa Là Học Sinh... Vừa Là...)."
        },
        {
            q: "Chia '만들다' (Làm - ㄹ) với '-(으)ㄹ 뿐만 아니라': Không chỉ làm giỏi mà còn bán giỏi.",
            options: ["만들 뿐만 아니라", "만들을 뿐만 아니라", "만드 뿐만 아니라", "만든 뿐만 아니라"],
            ans: 0,
            explain: "Thế lực ㄹ không cần vay mượn. 만들 + ㄹ 뿐만 (Đã có ㄹ rồi nên gộp vào luôn) => 만들 뿐만 아니라."
        },
        {
            q: "Câu đố Tương đương của TOPIK II: Cấu trúc nào dưới đây có thể thay thế MỘT CHÍN MỘT MƯỜI với '-(으)ㄹ 뿐만 아니라'?",
            options: ["-(으)ㄴ 반면에", "-는 한편", "-(으)ㄹ 뿐더러", "-기 마련이다"],
            ans: 2,
            explain: "-(으)ㄹ 뿐더러 = -(으)ㄹ 뿐만 아니라. Hai con Rắn Độc Chuyên gia Cắn Nhau trong Đề Thi Tóp Píc câu 1-4."
        },
        {
            q: "VẾ SAU của cấu trúc '-(으)ㄹ 뿐만 아니라' thường được BỂ CHIA THÊM Trợ từ nào để Tăng Chĩa Sức Mạnh của việc KHEN 2 PHÁT (hoặc CHÊ 2 PHÁT)?",
            options: ["은/는", "이/가", "도 (Cũng)", "만 (Chỉ)"],
            ans: 2,
            explain: "Không chỉ Thông minh... Mà CŨNG xinh đẹp nữa (똑똑할 뿐만 아니라 예쁘기도 해요). Trợ từ ĐO (도) là Cặp đôi Hoàn cảnh của Tên Này."
        }
    ],
    "-(으)ㄹ 테니(까)": [
        {
            q: "Hút Não Cấu Trúc '-(으)ㄹ 테니까': Nó mang nghĩa VÌ [SỰ LIỆU TÍNH CỦA ĐỨA TRƯỚC] NÊN MÀY HÃY LÀM ĐIỀU NÀY ĐI. Chia ra NGÔI 1 và NGÔI 3. \nNếu là Ngôi 1 (TÔI SẼ LÀM CÁI TRƯỚC), dịch là gì?",
            options: ["Vì trời chắc sẽ mưa...", "VÌ TÔI TÍNH LÀ TÔI SẼ (Định / Sẽ) Ở VẾ 1. NÊN BẠN HÃY (Gợi ý/Nhờ vả) Ở VẾ 2 nha.", "Tôi từng làm", "Vì mày là bạn tao"],
            ans: 1,
            explain: "내가 도와줄 테니까 걱정하지 마 (VÌ TÍNH RA LÀ TAO SẼ RÚC VÀO GIÚP ĐẤY... NÊN Mày đừng lo)."
        },
        {
            q: "Nếu Chủ ngữ Ngôi thứ 3 (Thằng kia, Hoặc Trời Đất - Đồ Vật). Thì VẾ 1 '-(으)ㄹ 테니까' biến thành nghĩa gì?",
            options: ["Tương lai chắc chắn", "Ý định của tôi", "SỰ PHỎNG ĐOÁN: Vì TÔI ĐOÁN RẰNG THEO LẼ NÓ SẼ NHƯ VẬY DẤY... (Trời Đoán Sẽ Mưa Đấy... Cầm Dù Đi).", "Quá khứ"],
            ans: 2,
            explain: "비가 올 테니까 우산을 가져가세요. (Khong phải TÔI MƯA. Mà là Thiên Hạ SẼ MƯA). Nó là Bằng Chứng Chắc Lịch của Sự Đoán."
        },
        {
            q: "Tuyệt Kĩ Nhắc Nhở: VẾ SAU CỦA '-(으)ㄹ 테니까' GẦN NHƯ 100% PHẢI LÀ GÌ?",
            options: ["Câu Dấu Chấm Hỏi (-어/아요?)", "Câu Hiện Tại Đơn.", "CÂU MỆNH LỆNH / RỦ RÊ (Hãy làm đi, Cùng làm đi -으세요, -자, -(으)ㅂ시다).", "Mô tả tính từ."],
            ans: 2,
            explain: "Mục đích mở mõm dùng -(으)ㄹ 테니까 là BỐ MÀY RÀO TRƯỚC RỒI, MÀY THỰC HIỆN ĐI. 바쁠 테니까 내일 만납시다 (Chắc ông Bận Lắm.. Nên là Thôi Mai Cùng Gặp Nhé)."
        },
        {
            q: "Nhét từ '돕다' (Bất quy tắc ㅂ) VÀO MÁY CHÉM 으ㄹ 테니까:",
            options: ["돕을 테니까", "도우을 테니까", "도울 테니까", "도올 테니까"],
            ans: 2,
            explain: "돕다 -> ㅂ Chết nhát thành 우. 우 Đụng Nguyên Âm Cắt Cái Rẹt -> 도울 테니까."
        },
        {
            q: "Lỗi dập mặt kinh điển: 제 시간에 도착할 테니까 버스를 탑시다. (Vì Đoán Chắc Xe Tới Kịp Thời Gian... Nên Đi Xe Bus Nhé). CÂU NÀY CÓ GÌ VẬP VÁP KHI VÀO ĐỀ TOPIK?",
            options: ["Hoàn toàn đúng, không lỗi.", "Chủ ngữ xe bus phải dịch là Máy Bay.", "Sai vì Ngôi Chủ Thể 3 Phỏng Đoán Quá Hư Cấu. Phải xài -기 때문에.", "Dùng đúng ngữ pháp nhưng Cảm Cúc Dịch Mềm thì Hơi Thô."],
            ans: 0,
            explain: "Câu này đúng hoàn toàn. Cứ phỏng đoán -> Rủ rê đằng sau. Chân lý!"
        }
    ],
    "-기는 하지만 / -기는 -지만": [
        {
            q: "Giải Phẫu Chuyên Sâu Cấu trúc '-기는 하지만': Bạn có 1 ly cà phê đắt vl, Nhưng nó ngon vl... Thế bạn Dùng Giọng Điệu của Nhỏ Thị Phi Mở Miệng Khen Lật Chê Thế Nào?",
            options: ["비싸지만 맛있어요.", "맛있기는 하지만 비싸요. (NGON THÌ CÔNG NHẬN LÀ NÓ CÓ NGON ĐÓ... CƠ MÀ CHỜ THÌ LẤY Ở ĐÂU VÀ NÓ ĐẮT VCL).", "비싼데도 맛있어요.", "맛있는 반면 비싸요."],
            ans: 1,
            explain: "Kiểu nói Thừa Nhận (Nhượng Bộ). Tôi Khen Lấy Kiểu để lấy đường Lui. 읽기는 하지만 이해를 못 해요. (Đọc thì CÓ RÁNG HÁ MỌM ĐỌC ĐÓ.. Nhưng đéo hiểu ccon mẹ gì ka)."
        },
        {
            q: "Người ta có thể RÚT GỌN LẢ QUỚ Bằng cách KHÔNG YÊU CẦU DÙNG TỪ '-하다' mà Dùng LẠI CHÍNH TỪ GỐC ĐÓ Ở VẾ SAU. Đây là công thức -기는 -지만: Dùng '알다' (Biết)!",
            options: ["알기는 알지만...", "알기는 하지만...", "알지만 알기는...", "알고리즘 알지만..."],
            ans: 0,
            explain: "Thay vì 알기는 하지만 (Biết thì có Biết nhưng...). Bạn Lôi Cổ chữ ĐỘNG TỪ GỐC NHÂN ĐÔI Lên: 알기는 알지만 (Kiểu chanh chua lặp từ: Biết, thì tao CÓ BIẾT, nhưng...)."
        },
        {
            q: "Sửa Sai Nhanh: 밥을 많이 먹었기는 먹었지만 배고파요. TẠI SAO NGƯỜI HÀN CHửi BẠN NGU NẾU NÓI CÂU NÀY?",
            options: ["Ăn xong no mới đúng", "VIỆC CHIA THÌ QUÁ KHỨ VÀO THẲNG CHỮ '-기' LÀ ĐIỀU ĐẠI KỴ TỐI CAO. CHỈ CHIA Ở VẾ SAU (Cái đuôi -지만) MÀ THÔI.", "Họ không thích thế.", "Chia hiện tại."],
            ans: 1,
            explain: "SAI LỖI CHẢY NÃO: 먹었기는. ĐÚNG: 먹기는 먹었지만 / 먹기는 했지만 (Ăn thì SỰ THẬT Tao Có Trút Tĩ Tã Vào Bụng Tao RỒI ĐÓ (Tương Cái Cảm Xúc Quá khứ ở Chữ Xong Sau)... Nhưng tao vẫn đói)."
        },
        {
            q: "Dùng với ĐỘNG TỪ '작다' (Nhỏ). Nhà Tôi Bé THÌ CÓ BÉ ĐẤY nhưng Rất Thoải Mái Cực Kì:",
            options: ["작기는 작지만 편해요.", "작기면 하지만 편해요.", "작고 작지만 편해요.", "작더니 작지만 편해요."],
            ans: 0,
            explain: "Nhân đôi nhân từ: 작기는 작지만 (Bé thì Nhà Tao Có Bé Đấy... Nhưng nó Ấm)."
        },
        {
            q: "Trong bài TOPIK Câu 52-53, Nếu Đoạn Tiền Đề cho Thấy Trái Chiều, Nhưng Đã Lỡ Khen Một Cái Gì Đó Trước Thì Có Nên Táng '-기는 하지만' Thay Vì Giới Hạn Cứng Của '-지만'?",
            options: ["Nên. Vì nó nhấn mạnh sự Khẳng Định Một Sự Việc Rồi Mới Đi lật cái Sự Việc kia.", "Không, Nó Dài Mõm Quá.", "Tùy, cái nào khó thì bỏ.", "Dùng -고 싶다 thay."],
            ans: 0,
            explain: "Nếu Đề đã Mở Bằng Một Sự Khẳng định của người khác, Ta Xài '-기는 하지만' nó Tăng Chiều Sâu Lên Lớp 4 (Hơn là Cấu Trúc Topik 1 Cọc Lốc -지만)."
        }
    ],
    "-고서": [
        {
            q: "Tử Chiến Ở Vực Sâu '-고서': Nó là Bằng Cấp Nâng Cấp của Cửa Lò nào trong TOPIK 1?",
            options: ["-아/어서", "-고", "-다가", "-(으)니까"],
            ans: 1,
            explain: "-고서 (Xong Rồi / Kế Tiếp). Nó là Người Mẹ Nâng Cấp Kế Tiếp của -고 (Và / Sau đó). Nhấn Mạnh TRÌNH TỰ VỤ VIỆC. Việc 1 Làm XONG CHÀ LÀ TÂM ĐỊA, Thì Việc 2 Mới Được NỐI VÀO THEO SAU."
        },
        {
            q: "Để sử dụng '-고서', Chủ ngữ Ở Hai Vế (Đứa Làm Vế Đầu và Đứa Làm Vế Đuôi) BẮT BUỘC như thế nào?",
            options: ["Khác nhau cũng được.", "BẮT BUỘC PHẢI KHỚP LÀ 1 NGƯỜI. (Thằng Trước Đã Chó Đẻ Nhảy Xong Ra Rồi... Cũng Chữ Đứa Đó Nước Theo Nhảy Vào Mõm Đứa Khác).", "Có thể là số nhiều.", "Không quan tâm chủ ngữ."],
            ans: 1,
            explain: "Ví dụ: 제가 밥을 먹고서 양치질을 했어요. (Sau Khi Tao Trút Cơm Vào Họng... XONG XUÔI Tao Đánh Răng). CHUYỆN 1 NGƯỜI LÀM TRÌNH TỰ."
        },
        {
            q: "Hành động Ở Vế Trước Của '-고서' Nó Phải Ở TRẠNG THÁI NÀO THÌ MỚI ĐƯỢC CHỊU DĨ ĐẾ VẾ SAU?",
            options: ["Đang dang dở (Như -다가).", "HOÀN TẤT TRIỆT ĐỂ, CHẤM MÚT SẠCH SẼ. KẾT THÚC CỤC TÍNH (Nhận bằng xong -> Đi Làm).", "Mới bắt đầu", "Bị chặn họng"],
            ans: 1,
            explain: "대학교를 졸업하고서 취직했어요 (Đã Đội Mũ Cầm Bằng TRONG TAY RỒI -> XONG XUÔI -> Mới đi kiếm việc xách háng Làm)."
        },
        {
            q: "Sửa Lỗi Khét Lẹt Quá Khứ: '숙제를 했고서 놀았어요' (Nghĩa là: Tôi Làm Bài Tập BỤP Cái Xong Rồi Tôi Đi Chơi Đã Đời). Lỗi nằm ở đâu vậy con giời?",
            options: ["Hoàn Toàn Chuẩn", "Bạn Rắn Độc Ác! Bị Xọc Cấm Kị. CHÂN LÝ GHIM THẲNG NHÃO ÓC: Cấm Chia Thì (Quá Khứ/Tương Lai) Ở Cái Chữ ĐÁNH ĐẦU TRƯỚC -고서. CHỈ LÀ 숙제를 하+고서 thui.", "Chữ '놀았어요' bị sai", "Không được dùng Động từ"],
            ans: 1,
            explain: "Hầu hết các Ngữ Liên Kết (Ngoài trừ mấy đứa Dã Man Chịu Chơi như -지만, -는데도)... Thì đều HÚT Rỗng Thân GỐC. 숙제를 하고서 놀았어요 (Kể lể thì Dồn Cảm Xúc vào cái RÃNH TẬN CÙNG CỦA CÂU CUỐI! 놀았어요 Đã Đảm Trách Chức Đó Rùi)."
        },
        {
            q: "Từ Mở Rộng: -고서 Có Thể Lặp Và Biến Hình Trở Thành Biến Thể Nào Dưới Đây, Nâng Độ Trịnh Trọng Thêm Bực Nữa Của Bậc Level 4 Đại Thần?",
            options: ["-고 나서", "-고 봅니다", "-고서야", "-고자"],
            ans: 2,
            explain: "-고서야 (Đạt được Chân Thể... Mới Cảm Thấu). Chỉ nhấn mạnh Sâu Hơn Việc Xong Hoàn Toàn 1 Điều Gì Kia Mà Thôi."
        }
    ],
    "-든지": [
        {
            q: "Con Ma Sinh Đôi của Tiếng Hàn: '-든지' mang ý nghĩa GÌ KHI CẮM VÀO ĐỘNG TỪ, HOẶC QUA CHỮ LIỆT KÊ LIỆP TIẾP LÀ '든지... 든지'?",
            options: ["Vì... Hoặc là", "Cho Dù CÁI NÀY, HAY Cho Dù CÁI KIA... (BẤT KỂ LÀ). Miễn Là Dẫu Có Chấn Động Xảy Ra Ở Vế Đây, CŨNG Mặc Kệ Quần Hư Vế Khác Luôn Lòi Tới Kết Quả CHỐT NGHĨA CUỐI CÙNG LÀ NHƯ VẬY.", "Tuyệt Đối Không Phải", "Nhưng Mà Lại..."],
            ans: 1,
            explain: "비가 오든지 눈이 오든지 꼭 갈 거예요. (Trời Có Xả Mưa, CÓ Thảiuyết Tuyết Trắng.. Tao CŨNG BẤT KỂ BẤT CHẤP Lết Cái Xác Tới Điểm Hẹn Bằng Được)."
        },
        {
            q: "Sự Liên Minh Kinh Hoàng Của '-든지' với Những Đứa HỎI WH-QUESTION (누구, 어디, 뭐, 언제...). HÓA TRIỂN NHƯ THẾ NÀO?",
            options: ["Rất dở tệ", "CỰC KỲ THẦN THÁNH! BẤT CỨ AI (누구든지), BẤT CỨ Ở ĐÂU (어디든지), BẤT CHẤP CÁI GÌ (뭐든지). Trở Thành Liên Minh Chặn Đứng Mọi Điểm Khoản Nào Chặn Nó.", "Chỉ ghép với 뭐 (Cái gì).", "Không được ghép."],
            ans: 1,
            explain: "뭐든지 다 먹을 수 있어요 (Tao Nhai Cả Thế Giới - Bất kể gì Tao CŨNG XÚT ĐƯỢC CHÉN HẾT). Nước chảy chỗ trũng, Khắc Ngay Đầu: Chữ 든지 BẤT CỨ."
        },
        {
            q: "Điền Nhanh: Bạn Tôi Cãi Lộn Kêu Muốn Làm Gì Nữa Thì Làm Mày Thích Gì Cứ Làm Gì Kệ Bố Mày (네가 _________ 상관없어 - Mày Làm Gì Mặc Bay Ai Thèm Quan Tâm). Động từ '하다' (Làm).",
            options: ["하든지 말든지", "하가든지 안하든지", "하은지 아닌지", "하면하든지"],
            ans: 0,
            explain: "Cấu trúc phản biện Cặp Đôi Đối Kịch: 하든지(Làm) 말든지 (Đừng/ Không Làm). Mày Đi Làm Hay Mày Thụt Lỏm Kệ Mịa Mày -> 하든지 말든지."
        },
        {
            q: "Cú sút Lịch Sử: Có được Dùng Trong Thì QUÁ KHỨ Bất Động Sản Không (Dù Mày KHÓC, HAY hôm qua Mày VUI... TÔI VẪN...)?",
            options: ["Chỉ Hiện Tại", "CÓ. Có thể gắn vào -았/었 (았/었든지). Vô địch!", "Chỉ dùng Thì Tương Lai", "Không cho chữ 든지 đụng thì"],
            ans: 1,
            explain: "우리가 만났든지 안 만났든지 (Dẫu cho Tao Cùng Mày ĐÃ TỪNG Giao Thông Ánh Mắt Đi Gặp Nhau Hay CHƯA... Đều Chẳng Thấy Mối Hệ Hồi Trả Nhau Cả). Được nha mấy chế!"
        },
        {
            q: "Thế CÒN Trái Bưởi Khác: Dùng DANH TỪ ghép với '-든지', Tỉ Dụ như Cà Phê Hay Trà Cũng Chơi Tuốt (커피 ... 차 ...).",
            options: ["커피든지 차든지", "커피이든지 차든지", "커피은지", "커피면"],
            ans: 1,
            explain: "Cảnh Giác: Danh Từ tận Cùng (Có Patchim Nối -> 이든지), Còn Đầu Trọc (Zero Patchim -> 든지 hoặc 이든지 Cho Chắc Cóp Được Tất). 커피든지 (Zero Patchim = Phơi Não Ăn Liền) / 수박이든지 (Có Patchim Ngứa Nhao Nổi = Thêm chữ ㅇ '이' Gắn 든지 Vào)."
        }
    ],
    // END ARRAY CATEGORY 1 (Part 2)
    // -------------
    // Tiếp tục Category 1 (Part 3)
    "-더라도": [
        {
            q: "Nhượng Bộ Tối Đa: '-더라도' mang ý nghĩa 'Dẫu Cho / Cho Dù... Thì Cũng'. Khoan đã, thế nó Tương Đương với Cái Gì Trong Đời Sống Sơ Cấp?",
            options: ["-아/어도", "-지만", "-(으)ㄴ데도", "-고 나서"],
            ans: 0,
            explain: "-더라도 Là Sự Nâng Cấp Tàn Bạo Của -아/어도. Nhấn mạnh Tí Lại: Mặc Dù Khó Rất Rất Khó... Bố cũng sẽ không Bỏ Cuộc (아무리 힘들더라도 포기하지 마세요)."
        },
        {
            q: "Để Kích Đường KÍCH SỐC Sự Nhượng Bộ Lên Mái Nhà, Người ta hay bồi thêm từ nào lên trước Vế của '-더라도'?",
            options: ["정말", "아무리", "아마", "절대"],
            ans: 1,
            explain: "아무리 + V + -더라도: CHO DÙ CÓ ĐẾN MỨC ĐỘ NÀO ĐI NỮA THÌ... Đây Là Cặp Bài Trùng Nhất Quyết Phải Đi Với Nhau."
        },
        {
            q: "Ví Dụ Cực Gắt TOPIK: 피곤하더라도 학교에 꼭 가야 해요 (Dù Vã Lắm Cũng Xác Đít Tới Trường). TÍNH TỪ '피곤하다' Có Thay Đổi Hình Dạng Không?",
            options: ["Phải biến thành 피곤하더라도", "Phải là 피곤해서라도", "DỮ NGUYÊN BẢN CHẤT! Cứ Bốc Gốc Từ Bỏ chữ '다' là Ngàm Ngay chữ '더라도' Vào 1 Phát Mọt Gông (Dù Là Tính Hay Động, Dù Có Batchim Hay Không).", "피곤하다면도"],
            ans: 2,
            explain: "Dễ Như Ăn Kẹo: 먹다 => 먹더라도 / 가다 => 가더라도 / 작다 => 작더라도. Dữ nguyên nguyên bản vứt -다 đi thui!!!"
        },
        {
            q: "Cắm Đầu Vào Đuôi Quá Khứ: NẾU BẠN CHÈN THÌ QUÁ KHỨ VÀO '-더라도' ĐƯỢC KHÔNG?",
            options: ["CÓ THỂ! Bằng cách ghép '-았/었더라도' (Mặc Dù Hồi Đó Đã Từng... Xảy Ra Gì Gì). Được Hết Nấc!", "Tuyệt đối cấm.", "Chỉ có thể dùng Danh Từ.", "Luôn dính liền với Hiện Tại."],
            ans: 0,
            explain: "어제 많이 먹었더라도... (Dẫu Cho Hôm Qua Mày Có Trút Ăn Như Heo đi Nữa...). Chỉ cần Nhét 았/었 vào."
        },
        {
            q: "Biến Hình DANH TỪ: Cậu Ta Dẩu Có Là THẦY GIÁO TRẺ TRÂU Đi Nữa... Thì Trẻ Trâu Tên Là선생님! Gắn Thể Loại Này Thành Thế Nào?",
            options: ["선생님이라도", "선생님더라도", "선생님이더라도", "선생님이여도"],
            ans: 2,
            explain: "Quy luật Danh từ: Có Patchim thêm 이 + 더라도 => 선생님이더라도! (Nếu Không Patchim Thì Kéo Cẳng Cổ 이 Hoặc Đuôi Trọc đếu Được => 친구이더라도)."
        }
    ],
    "-다가는": [
        {
            q: "Tử Giác Cảnh Báo '-다가는'. Hãy hiểu Nghĩa Bóng Tiếng Việt Chuẩn Xác Của Nó:",
            options: ["Là Đi Rồi Về", "Nếu Mà Mày CỨ TIẾP TỤC Cái Tình Trạng Ở Vế 1 Hoài Như Thế Ấy Nhá... Giỡn Mặt Hạ... Thì KẾT QUẢ SẼ LÀ MỘT SỰ SAI TRÁI CHẤN ĐỘNG / HẬU QUẢ TOANG.", "Là Trong Lúc", "Bất Kể"],
            ans: 1,
            explain: "그렇게 먹다가는 살이 찔 거예요. Tống cơm Lắm Thế, Mày CỨ Tục Tống Vậy Là Nát Cái Cân Bây Giờ. Chỉ dùng Để Dọa / Cảnh báo Mức Độ Xấu."
        },
        {
            q: "VẾ SAU CỦA '-다가는' SẼ KHÔNG CÓ CỬA CHƠI VỚI LOẠI CÂU NÀO?",
            options: ["Tương lai phỏng đoán", "KẾT QUẢ TỐT ĐẸP. (Vô Lý!! Đã Dọa Rằng 'Mày Cứ Làm Thế Nữa Đi...' Lại Đem Ra Tặng Quà Bênh? KHÔNG THỀ VÀ KHÔNG BAO GIỜ). Vế sau 100% Là Phỏng Đoán Sự Rủi Ro Tương Lai.", "Không có đuôi kết", "Phủ định"],
            ans: 1,
            explain: "SAI NÈ: 매일 공부하다가는 시험에 합격할 거예요 (Học Hành Tiếp Đi Mày, Thế Rồi Mày Đỗ Thôi) -> Điếc Lòi Não. Lão -다가는 Dùng Để Dọa Thôi."
        },
        {
            q: "Tín hiệu Phát Sóng: Vế 2 Của '-다가는' RẤT HAY ĐI CHUNG HUYẾT NHỤC VỚI VĨ TỐ NÀO?",
            options: ["-아/어요 (Hiện tại đơn)", "-(으)ㄹ 거예요, -(으)ㄹ 텐데 (Cái Sự Tương Lai Chắc Chắn Hoặc Cái Hậu Quả Ám Khí).", "-자마자", "-습니다"],
            ans: 1,
            explain: "게임만 하다가는 시험에 떨어질 거예요 (Trượt Chắc Cái Đầu Mày Ra). Hoặc: 감기에 걸릴 텐데 (Chắc Lành Nhiễm Bệnh Đây Nè)."
        },
        {
            q: "Nhỏ To với ĐỐI TƯỢNG ĐẶC BIỆT: ' Tính từ ' Có Dùng Được Khum?",
            options: ["KHÔNG. Đã BẢO HÀNH ĐỘNG CỨ TỤC HÔN NỮA ĐI (Lặp Lại) Thì Chỉ CHơi ĐỘNG TỪ MÀ CẮM MÕM(Bỏ 다 thêm 다가는).", "Đương nhiên có", "Danh từ mới xài", "Tính từ ngắn thì được"],
            ans: 0,
            explain: "Tính từ Rụng. Nhưng Có 1 Thể Ngoại Lệ: Nó Có Thể Lách Bằng Cách Biến Dạng Nhờ Đuôi Trạng (-아/어지다 - Trở Nên). VD: 추워지다가는 (Trở Nên Lạnh Mãi Thế Này Thì...)."
        },
        {
            q: "Câu So Sánh Thần Thánh: Khác Mẽ Nhau Giữa [-다가] (Tơ lơ mờ gián đoạn) và [-다가는] (Tử giác Cảnh Báo) Là Chữ Gì?",
            options: ["Dấu chấm câu", "Trợ Từ 는 Nằm Đằng Đuôi. Chữ 는 chính Là Con Rồng Thơm Mỏ Nhấn Mạnh: [Nếu Cái Chuyện Phía Trước Đạt Tới Ngưỡng Đó] Thì Chuyện Đuôi Này mới Có Khả năng.", "Cả hai bằng nhau", "Bỏ qua Nhau"],
            ans: 1,
            explain: "비가 오다가 말았어요 (Mưa giữa chừng -> Tịt. Đơn Thuần Tưởng thuật). 비가 오다가는 홍수가 나겠어요 (Mưa Kiểu Tiếp Thế Này Nước Ngập Chết! Cảnh Báo)."
        }
    ],
    "-았/었더라면": [
        {
            q: "Cú Hối Tiếc Thời Trần: '-았/었더라면' Dịnh Ra Sát Sạt Nghĩa Đen LÀ GÌ?",
            options: ["Nếu Giờ Tao Là Mày...", "NẾU MÀ CHI HỒI ĐÓ BỐ MÀY... ĐÃ LÀM THẾ... THÌ KẾT QUẢ ĐÃ... (Nhưng Mà Bố Mày Hồi Đó ĐÉÒ LÀM ĐƯỢC - Giả định Trái Lại Hoàn Toàn Với Qúa khứ Rớt Đáy Mắt).", "Sẽ Rõ Làng", "Khóc Thì Vẫn Khóc"],
            ans: 1,
            explain: "일찍 출발했더라면 늦지 않았을 텐데 (NẾU MÀ MẸ NÓ TAO ĐÃ ĐI SỚM... Thì Đã KHông Trễ! THỰC TẾ LÀ TAO CÓ ĐI ĐÂU -> Muộn Lòi)."
        },
        {
            q: "Để Tạo Được '-았/었더라면'. Ta phải ghép Cảm Xúc Gì Thế Nào?",
            options: ["Chia GỐC LỚN RA. Gắn '-았/었' Để Chốt Thì Quá Khứ (Rằng Trái Cấm Xảy Ra Chưa Tới), RỒI Thêm Chữ 더라면 Vào Nhấn Mãnh Nghĩa Câu NẾU.", "Cắm Trực Tiếp với Thân", "Thêm 지만", "Không thêm 아/어"],
            ans: 0,
            explain: "가다 -> 갔(Đã Đi) -> 갔더라면 (Giá Như Chuyện Tao Đi). 먹다 -> 먹었(Đã Ăn) -> 먹었더라면 (Giá Như Đã Ăn)."
        },
        {
            q: "Tại Vế Đuôi (Kết Quả Do Giả Định Xạo Mà Có). Cái Đuôi Giả Tưởng Này BẮT MẶT CỘC PHẢI DÙNG KẾT THÚC CÂU NÀO THÌ MỚI Bật Xúc Cảm Tiếc Nuối Da Diết?",
            options: ["-아/어요", "-(으)ㄹ 텐데 (Thì Đã Có Lẽ Rằng Là...), HOẶC -(으)ㄹ 거예요, -(으)ㄹ 뻔했다! (Chỉ Sự Đổ Vỡ Kèm Ánh Nhìn Đã Rớt/ Phỏng Đoán Ở Thời Gian Trước ĐÃ Phải Khác Đi)!", "-습니다", "Tính từ ngắn dọn"],
            ans: 1,
            explain: "Học Y Chan 1 Nùi Công Thức Hóa Thạch Đi Kèm. Mới Có Sự Tiếc Nuối: 더 공부했더라면 100점을 받았을 텐데 (Giá Học Nữa Là Được Mẹ 100 ĐIểm Giả Sử Rùi)."
        },
        {
            q: "Điền Gấp: 내가 돈이 많________ 그 차를 샀을 거야. (NẾU HỒI ĐÓ BẢN NĂNG TAO ĐÃ PHÚT GIỮ CÓ LÒI NHIỀU TIỀN... Đã Có Thể Mua Xe Đó). (많다)",
            options: ["많다면", "많았더라면", "많으면", "만았더라면"],
            ans: 1,
            explain: "Bất Mãn Quá Khứ + 많(Có Patchim) + 았 => 많았 + 더라면 => 많았더라면! Nước Chảy Ra Biển Rất Trơn Tru!"
        },
        {
            q: "Nếu Bạn Rớt Đề Phải Câu 52-53 Trong Quá Trình Viết. Nó Khảo Sát Bằng Kiểu Thỉnh Dụ: '네가 나였더라면 어떻게 __?' (Nếu Rằng Mày LÀ Tao.. Đổi Cái Chức Danh. Mày Đã Sẽ Làm Gì Mày?). Dấu chấm hỏi Trả lời LÀ GÌ?",
            options: ["할 거야?", "할 거예요?", "했을까?(Hoặc 했을 것 같아?) -> Vì nó Là Phỏng Đoán Lên Hành Trình CỦa Quá Khứ (ĐÃ Phải Làm Gì Vãi Lol).", "했아?"],
            ans: 2,
            explain: "Sự việc Nó Nói Tớ Là Nó Xảy Ra Rùi... Giờ Tôi Hỏi Bạn (Giá Sự Giả Định CỦa Quả Sự) -> Thì Đuôi của sự Lắng Hỏi Đó CŨng Phải Mang Cái Sự Tiết Trạc -(으)ㄹ 텐데, Nhưng Đây là Câu Hỏi Nên Sài -았/었을까? Làm Khớp Lí Lẽ."
        }
    ],
    "-(으)ㄴ 채(로)": [
        {
            q: "Chiêu Thức Đóng Băng Thần Tốc: '-(으)ㄴ 채(로)' Dùng Khi Nào Dễ Hình Dung Sang Thế Kỷ?",
            options: ["Bất cứ hành động nào", "Bạn ĐÓNG CỨNG Trạng Thái Của Vế 1 (Đi giày Vẫn Đi, Bật Đèn Vẫn Bật)... VÀ TRONG CHIẾC TRẠNG THÁI HIỆN NGUYÊN HÌNH ĐÓ... BẠN LẤN LUÔN VÀO LÀM VẾ 2 (Bước Vào Nhà).", "Lặp Lại nhiều lần", "Sáng nắng chiều râm"],
            ans: 1,
            explain: "신발을 신은 채로 들어갔어요 (Đôi Giày Ở Hình Dáng Xọc Vào Chân. Giữ Y Nguyen Cái Độ Cứng Đó. Mày Lết Nhảy Tới Vế 2 Đi Vô Nhà tao. Hư Cmn Dơ Nhà Tao Mẹ Rồi)."
        },
        {
            q: "Do Nó Chặn Họng TRẠNG THÁI (Kết quả đã Hoàn Tất XOng RỒi Trùm Ra Đóng Lại). Cho Nên BẠN HẢY LINH TƯỞNG Việc Gắn '-(으)ㄴ/는' Vào Sẽ ÁP DỤNG Hình Thái Nào?",
            options: ["Hình Thái -는 (Đang Ngay)", "HÌNH THÁI ĐỊNH NGỮ QUÁ KHỨ (-(으)ㄴ): Mày Phải Hoàn Xong Cái Thao Tác Đó Lên Người/Đồ... Chốt Đơn. TỨC Có Patchim Thêm -은, Không Có Sút Liền -ㄴ.", "Hình Thái Tư Lê ㄹ", "Bất chấp"],
            ans: 1,
            explain: "Ví dụ: 창문을 열다 (Mở - ㄹ). Kéo Cái Rẹt Cửa Ra Xong Bị Khựng Ở Cửa -> Cắm Bất Phân Từ -(으)ㄴ... Nhưng do Bà Chằn ㄹ Nó Không Đỡ -> Bắn Lủng Nồi Lũ Rắn -> 연 채로 (Bức Tử Để Cửa Mở Nguyên Đó Mà Ngủ)."
        },
        {
            q: "Nhưng Nó Có Cặp Tốt Không Hợp Với Đuôi '채로' (Cho Những Việc Tự Nhiên Không Làm Nổi). VÍ DỤ NÀO SAI Ở LƯỚI TOPIK II?",
            options: ["안경을 쓴 채로 잔다 (Đeo kính nguyên đi ngủ).", "서 있는 채로 (Đứng nguyên mà...).", "밥을 지은 채로 먹다 (Nấu XONG thì ăn Chớ Sao Ăn ĐƯỢC CHĂN TRONG LÚC ĐÃ NẤU CỨNG? Vô Lý Trạng Thái!!! Nó Có Tính CHUỖI).", "눈을 감은 채 걷다 (Nhắm mắt đi bộ)."],
            ans: 2,
            explain: "-은 채로 Nó phải Là 1 TRẠNG THÁI TREO LƠ LỬNG GÂY ĐƯỢC LẠI KÊ BIÊN (Mở Cửa Xong Nó Treo Cửa Ở Đó Rồi Mày Làm Việc A-B). Áp cái việc NẤU CƠM -> Thì Nấu CHín Có Treo mẹ Gì Đâu Nó Phân Cực Thể Loại Mối Quan Hệ Gián Tiếp! => Xài -고 나서."
        },
        {
            q: "Điền Nhanh Cảm Xúc Hóa Chết '켜다' (Bật Bóng Điện): Tối qua Say Rượu Đã Mọc Đi Ngủ TRONG TRẠNG THÁI BẤT TV LÊN.",
            options: ["켠 채로", "켜은 채로", "켜는 채로", "켯 채로"],
            ans: 0,
            explain: "켜다. Bỏ 다. Méo có đít Patchim. Tra tay Gồng Liền -ㄴ -> 켠. Cắm Mõm chữ 채로 vào: 켠 채로 잤어."
        },
        {
            q: "Cặp Thú Tương Đồng TRONG ĐỀ THI ĐIỀN CHỖ TRỐNG KHẮC MẠNG VỚI '-아/어 놓다' NÀO NHẤT?",
            options: ["-아/어 두다", "-아/어 보리다", "GIÓNG LUÔN -아/어 놓은 채로 HOẶC -아/어 둔 채로. Bị Động Kết Hợp: Để Mở Như Vậy Ở Trạng Thái Bảo Luu Băng Đóng. (열어 놓은 채로).", "모든 채"],
            ans: 2,
            explain: "Thánh Tổ Dựng Mật Mã: Đã Bật Lên Lỗ Hỗng -> 켜 놓다. Rồi Giữ Lỗ ĐÓ Đóng Thành Khuân Nhúng Xuống Nóng Lạnh (-ㄴ 채로) => 켜 놓은 채로 (Duy Trì Độ Nguyên Rắn)."
        }
    ],
    "-는 한편": [
        {
            q: "Ý Nghĩa Quý Tộc Của '-는 한편' LÀ GÌ MÀ ĐƯỢC ƯU ÁI TRONG TIN TỨC VÀ LEVEL CAO CẤP?",
            options: ["Diễn Khảo Sắc", "Diễn Báo Hai Tình Hướng Xảy Ra Trạng Thái Đồng THời(TRONG KHI MẶT NÀY..., MẶT KHÁC CŨNG...). Việc Này Vừa Sòng Sọc Làm, Việc Kìa CŨng Không Kém Cạnh Chạy Nốt. Rất Formal Đứa Con Của Báo Lỗi.", "Tương đối rảnh", "Trừ Họa"],
            ans: 1,
            explain: "경제가 성장하는 한편 환경 문제도 심각해지고 있어요. (Thằng Báo Tái Chế Kiểu 1 Thằng Giàu Lên... Thì 1 Thằng Rơi Theo Sực Thệ Nhức Nách Môi Trường Ô Nhiễm Phát Triển Đồng Chỗ!)."
        },
        {
            q: "Có Thể Sử Dụng '-는 한편' Để NỐI 2 TÍNH TỪ VỚI NHAU VÀ CÓ CẦN THÍCH ỨNG THEO LỐI ĐỊNH NGỮ KHÔNG?",
            options: ["TUYỆT ĐỐI HỮU ÍCH! Tính Từ Vãn Đi Vào Công Thức Của Định Ngữ (-(으)ㄴ 한편). Ví Dụ: 이 약은 좋은 한편 부작용도 있어요 (Thơm Ngon Đây! Nhưng Sâu Bệnh Có Tác Dụng Phụ Tê Sắt Cạnh Sườn).", "Cấm dùng Tính Từ.", "Dùng Thoải Mái Bỏ -는", "Chỉ Vận Động Múa"],
            ans: 0,
            explain: "Nhớ 1 Nguyên Lý: Đã Gặp Bọn Đuôi Chữ Có Tách Rời Một Quãng Hở Thế Tên DANH TỪ(Như 한편, 셈). Thì Ở Mặt Trận Thằng Đằng Tước... PHẢI VẼ SANG LỐI BÀI TOÁN ĐỊNH NGỮ LIỀN."
        },
        {
            q: "Câu So Cân Mức Phân: '-(으)며' Có Thể Sử Dụng THay Thế Nghĩa ĐỒNG THỜI KHÔNG?",
            options: ["ĐƯỢC. -(으)며 Cũng Là Và ĐỒNG THỜI CAO CẤP. Nhưng -는 한편 Nhấn Trọng ĐỘ LỆCH PHA CỦA 2 MẶT CÂN BẰNG TÍNH CHẤT TRONG TIN TỨC NHIỀU HƠN(CÓ Sự ĐỐI Cân Hoặc Lấy Vốn Nhau).", "Không Rất Lả Hỏng.", "Hoàn Toà Trái Nhau", "Cưa Đôi Bỏ Khái"],
            ans: 0,
            explain: "Ví Dụ (Đổi Ngôi) : 그 배우는 연기를 잘 하는 한편(하며) 노래도 엄청 잘한다. (Tròn Triển Cả 2 Nghĩa Đều Quý Tộc Sang Trọng Mà Múa Cho Điểm Rất Đắt)."
        },
        {
            q: "Nếu Ném DanH TỪ Vô Mặt Trận Của Mớ Dày '한편' (Ví Dụ: LÀ HỌC SINH MÀ BẢN LIỆT 1 MẶT...), Ta Xài Gì Cho Cắt Đứt?",
            options: ["인 한편", "인 편안", "학생면서", "Thẳng Mặt Cắt Nhớt: DANH TỪ CỌC Thêm '인 한편'. VD: 그 사람은 학자인 한편 정치가이기도 하다 (Thằng Đó Móc Là Học Giả Phái Trước... MÀ Song Song Là Còn Đội Lốt Chính Trị Gia Ra Tiền!)."],
            ans: 3,
            explain: "Danh Từ -> Là Lính Vệ -> (이다). Biến DẠNG Điểm Đuôi ĐỊNH NGữ Của -이다 -> Luôn Gấp Dĩ -(인). => 학자인 한편."
        },
        {
            q: "Khi Nhòi Quá Khứ '-았/었' Thì Phía Trước Thằng Cục Súc Này Nó Biến Thế Nào?",
            options: ["-았/었던 한편", "Căm Sót Lại Cấu Trúc Quá Khứ Thì Tục Luôn Là -았/었던 한편 (Cái Tích Lũy Mà Một Mặt Hồi Xưa Nhớ Cho Chấn).", "Nó Vẫn Là -는 ", "Cấm Được Xỉn Quá Khứ"],
            ans: 1,
            explain: "Nhưng Cứ Chú Giác: Cái Chi Trôi Bào Thấy Cắn Mà Vấp Khó Viết (Dễ Toang). CHÚNG MÌNH HẠN CHẾ SỚ QUA QUÁ KHỨ CHO CÁC VÕ ĐÀI DANH TẾ NÀY NHA! CHỈ CẮM LỜI Báo Chí Hiện Tại Hoặc Kể Khảo Ở Hiện Tại Rủi Ro! (-는 한편)."
        }
    ],
    // END ARRAY CATEGORY 1 (Part 3)
    // -------------
    // 2. 종결어미 (Vĩ tố kết thúc câu nâng cao)
    "-거든요": [
        {
            q: "Tuyệt đỉnh cuối câu! '-거든요' mang ý nghĩa RẤT CỤ THỂ nào sau đây?",
            options: ["Dùng để ra lệnh", "GIẢI THÍCH LÝ DO VÀ BÁO TIN CHO ĐỐI PHƯƠNG... MÀ NGƯỜI NGHE ĐÉO HỀ BIẾT TRƯỚC ĐÓ. (Dịch là: Vì / Do... Đấy Nhá).", "Nhắc lại chuyện cũ", "Từ chối thẳng thừng"],
            ans: 1,
            explain: "Hỏi: Sao bạn lại đến trễ dở? Đáp: 차가 막혔거든요 (Vì xe kẹt Sấp Mặt... CÒN ĐÓ LÀ lý do TUI cho BẠN BIẾT Bấy Bờ)."
        },
        {
            q: "Nếu NGƯỜI NGHE ĐÃ BIẾT RÕ SỰ THẬT ĐÓ RỒI, mà bạn rống móng '-거든요' thì người Hàn CẢM GIÁC THẾ NÀO?",
            options: ["Họ thấy bình thường", "CỰC KỲ KHÓ CHỊU VÀ XÚC PHẠM. Vì nó giống như MÀY ĐANG DẠY ĐỜI TAO MỘT ĐIỀU TAO ĐÃ RÀNH. (Lúc này phải dùng -잖아요 thay thế).", "Họ sẽ khen bạn", "Họ sẽ hiểu nhầm"],
            ans: 1,
            explain: "Thằng A đứng kế bên Cửa Sổ Nhìn Cơn Mưa Tầm Tã, Thằng B Rống Mồm Báo Cáo: 비가 오거든요 (Mưa Kìa Bởi Vì Trời Đang Mưa). Thằng A sẽ đấm thằng B ngay!"
        },
        {
            q: "Tương thích THÌ QUÁ KHỨ VÀ TƯƠNG LAI CỦA '-거든요':",
            options: ["Cấm kị.", "VÔ ĐỊCH HẾT YẾT. Ghép thoải mái với 았/었 (았거든요 - Vì đã...) VÀ -(으)ㄹ 거 (ㄹ 거거든요 - Vì Dự Là SẼ...).", "Chỉ Hiện Tại", "Chỉ chia với tính từ"],
            ans: 1,
            explain: "Ví dụ: 제가 다 먹었거든요 (Bởi vì tui Đúp Trọn Ổ Rùi Nhao). 제가 갈 거거든요 (Vì Tui Đi Bây Giờ Đó Nhao)."
        },
        {
            q: "Một Biến Thể Bóng Đêm Của '-거든요': KHI BẠN KHÔNG TRẢ LỜI LÝ DO MÀ LẠI MỞ LỜI ĐỂ TẠO SỰ CHÚ Ý, NÓ MANG Ý NGHĨA GÌ?",
            options: ["Là Dạng Câu Hỏi", "CÂU RÀO ĐẦU TRƯỚC: Mày Nghe Nè... Nghe Tao Nói Nè... (Để dẫn chuyện trước khi xả).", "Phủ định điều vừa nói", "Câu Kết Luận Cứng Nhắc"],
            ans: 1,
            explain: "내가 어제 시장에 갔거든요. 그런데... (Mày à... Hôm qua Tao Lượn Dạ Chợ NÈ... Và thế là...)."
        },
        {
            q: "Lắp ráp Danh Từ vào vòng xoáy '-거든요' (VÌ BỞI TÔI LÀ...):",
            options: ["학생이거든요", "학생거든요", "학생은거든요", "학생이거든요 / 학생이거던요 thì sai"],
            ans: 0,
            explain: "Bạn Nhỏ Danh Từ Lại Đi Học Cấu Trúc ĐUÔI CÂU: -이다 + 거든요 => (이)거든요. Có patchim -> 학생이거든요 (Bởi Tui Là HS đó nhoa)."
        }
    ],
    "-잖아요": [
        {
            q: "Trái Cà Chua của -거든요 CHÍNH LÀ '-잖아요'. NÓ LÀ BIỂU TƯỢNG CỦA CẢM XÚC GÌ?",
            options: ["Cảnh báo", "TRÁCH YÊU / KHẲNG ĐỊNH LẠI: Nè má, CÁI ĐIỀU NÀY MÁ BIẾT, TUI CŨNG BIẾT... Nên TUI NHẮC LẠI CHO MÁ NHỚ ĐÓ (Như bạn biết đó...!).", "Cảm Thán Cực Chất", "Lý do vì chưa biết"],
            ans: 1,
            explain: "오늘 일요일이잖아요 (Nè bồ! Nay Là SUNDAY ĐÓ BỒ BIẾT CHỨ Ư? Ai CŨNG Ràng Cơ Mà). Không dùng cho Việc BÍ MẬT Nhé."
        },
        {
            q: "Với Tính từ '예쁘다' (Đẹp), bạn Lắp Ráp Ra Sao?",
            options: ["예쁜잖아요", "예쁘잖아요", "예쁠잖아요", "예쁘은잖아요"],
            ans: 1,
            explain: "Nó ĐỂU Ở CHỖ, Tính Từ Hay Động Từ GÌ THÌ CŨNG RỚT CHỮ 다 RỒI NHÉT Thẳng -잖아요 Vào. => 예쁘잖아요 (Thấy Chụy Xinh Không Nè, Ai cũng Rành Rành)."
        },
        {
            q: "Vậy Khi Bùng Cảm Xúc Quá Khứ (ĐÃ CHỚ... CÒN GÌ! Mày quên à?). Bạn chia MÓC THEO '-았/었' Như THế Nào?",
            options: ["Vứt qua Đuôi: 잖았어요", "Ghi Cặp Vào Thân Gốc: -았/었잖아요 (내가 어제 말했잖아요! - TÔI ĐÃ NÓI ngày hôm qua RỒI ĐÓ NHÁ... MÀY TỰ BIẾT ĐI!).", "Cấm dùng Quá khứ", "Lột trần chữ 요"],
            ans: 1,
            explain: "Đồng hồ sinh tử: Chia Thì phải chia ở ngay cái Ruột Lòng Của Từ -> 먹었잖아(요)."
        },
        {
            q: "Thế Còn Danh Từ? Cấu Vị: LÀ BẠN CỦA NHAU KHÁCH SÁO LÀM GÌ!",
            options: ["친구잖아요", "친구이잖아요", "친구은잖아요", "친구는잖아요"],
            ans: 0,
            explain: "Quy luật Môn Thần Danh Từ: (이)잖아요. Có Patchim Nhét '이', Rụng Tóc KhÔNG có Bát Chim thì TÁNG Trực Diện -잖아요. => 친구잖아요."
        },
        {
            q: "Câu Trắc Nghiệm: Đang đi Vấp Cục Đá Té Cái ĐÙNG. Điếng Hồn Quay Sang Người Lạ Nói '아프잖아요' (Biết Gì Đâu Mà Đau VĐ). NGƯỜI LẠ BỨC XÚC ĐỊNH SÚT VÀO MÕM BẠN. TẠI SAO?",
            options: ["Vì -잖아요 Không Dành Cho Giọng Trầm", "SỰ VẠ MIỆNG NGÚ NGỐC BẬC THẦY: Ở ĐÂY NỔ RA BIẾN MỚI CÁO (CHỈ BẠN CẢM) Cháy Cmn Nhận Thức Chứ NGƯỜI LẠ LÀM GÌ TRẢI QUA MÀ KÊU (-BẠN Biết Đấy). => SAI SÁT NHẰM! Xài -거든요 / -아/어요 Thôi.", "Từ 아프다 bị sai Hư Không", "Chữ a là sai"],
            ans: 1,
            explain: "Dùng -잖아요 với chuyện NHƯ TRỜI RỚT XUỐNG KHIẾN NGƯỜI LẠ ỨC CHẾ Vì Cảm Thấy Mày Buộc tội Tội Nắm Góp thông tin. Chỉ xài Khi Kẻ Khác Cũng Cùng SỰ Việc RÀNH RỌI."
        }
    ],
    "-더라고요": [
        {
            q: "Quân Cờ Của Cảnh Sát 'Trải Nghiệm Trực Tiếp': '-더라고요' Sử dụng KHI NÀO?",
            options: ["Nghe đồn", "TÔI ĐÃ Trực Tiếp TAI NGHE MẮT THẤY (Hoặc Kinh Qua) CHUYỆN ĐÓ TRONG QUÁ KHỨ (Và Giờ Mỏ Tôi Báo Lại Cho Bạn Về Chút Cảm Xúc Sáng Nảy Đó). Dịch Là: Tôi Thấy Rằng Ạ...", "Vì Rằng Là", "Dự Cảm Tương lai"],
            ans: 1,
            explain: "마크 씨가 한국 음식을 잘 먹더라고요 (Tui Trực Tiếp Trố Mắt Thấy Thằng Mark Nhai Đồ Hàn Siêu Đỉnh Luôn É... Nhắc Lại Thấy Kinh Điển)."
        },
        {
            q: "CHÚC MỪNG BẠN CHỌC GẬY BÁNH XE. BẠN CÓ ĐƯỢC CHIA '-더라고요' CHO HÀNH ĐỘNG CỦA CHÍNH BẢN THÂN MÌNH Ngôi Thứ Nhất KHÔNG? (Ví Dụ: Tôi ĐÃ Rửa Mặt)",
            options: ["CÓ! Thích Sao Làm Vậy.", "BỊ TUÝT CÒI CẤM SỬ DỤNG. Vì Bộ Phận Não Bạn Không Thể Thoát Xác Đi Nhìn Cảnh BẠN HÀNH ĐỘNG. (Ví Dụ: 제가 세수를 하더라고요 -> MA NHÌN CHỚ KHÔNG AI NHÌN).", "Dùng Khi Mệtỏi", "Không chia cho ngôi 3"],
            ans: 1,
            explain: "Cấu Phạt Chấn Động Não: Bạn chỉ có thể NHÌN Người Khác Bằng 2 Con Mắt. Ai Đi Tự Nhanh Cái Đuôi Mắt Tách Ra Nhìn Về Trước Nhìn Mình. CẤM XÀI '제가 -더라고요' ĐỐI VỚI HÀNH ĐỘNG."
        },
        {
            q: "LỖ CHUI NGOẠI LỆ: Có Lỗ Hổng Nào Để CHO ĐƯỢC NGÔI Thứ Nhất (TÔI) Đi Với '-더라고요' KHÔNG?",
            options: ["Không! Cấm Là Cấm.", "CÓ!! NẾU ĐÓ LÀ TỪ CHỈ [CẢM XÚC - TÂM LÝ BỀ MẶT BÊN TRONG CỦA BẢN THÂN). Tức là Bạn NHÌN VÀO THÂM TÂM CỦA MÌNH (Ví Dụ: Tao Tự TẠO TẬNG ĐƯỢC Rằng Hôm Qua Tao Đau Buồn Thay -> 내가 슬프더라고요).", "Nếu Trốn Tù.", "Rút Gon Phía Ngang"],
            ans: 1,
            explain: "Thú Vị Quỷ Sự Của Tiếng Hàn: Tôi chạy (Hàng Động) -> CẤM. / Tôi Vui, Tôi Buồn (Tâm Lý) -> Tự Tôi Rờ Đụng Cảm Tâm Nên Vất Vả THẤY LÀ ĐƯỢC CHO PHÉP (제가 좋더라고요)."
        },
        {
            q: "Gắn Quá Khứ NHƯ THẾ NÀO Nếu Mắt Tôi Thấy MỘT VIỆC NÓ ĐÃ KẾT LÚC ĐÃ XONG MỌC TỪ LÚC ĐÓ? (Dùng Tự Tạo '결혼하다' Kết Hôn Xong Cmnr - Và Tôi Đi ĐÁm Cưới Thấy Vấy).",
            options: ["결혼하더라고요", "결혼했더라고요 (Họ Thì Cưới Xong Mẹ Rồi, Tôi Thì MỚI Tới Chứng Giám Lại Cục Đã Xong Kia).", "결혼할더라고요", "결혼하다더라고요"],
            ans: 1,
            explain: "Đưa Cặp Mắt Về Quá Khứ Rọi Nhìn HỐ XỈ ĐÃ HOÀN TẤT. -> Sẽ Chia -았/었더라고요."
        },
        {
            q: "Tử Giác 4 Hướng Phân Biệt: '-다고요' và '-더라고요' Khác Nhau Dữ Lắm Nhé:",
            options: ["Như nhau", "-다고요 (Là Truyền Trích Lời Đứa Khác (Nghe Đồn) Lên Đây)... CÒN '-더라고요' (LÀ TỰ ĐI LÀM ĐIỂP VIÊN ĐÁNH HƠI CẢM XÚC THẬT BẰNG MẮT MÌNH).", "Ngược lại", "Qúa Khứ Của Nhau"],
            ans: 1,
            explain: "Nghe bạn đồn Nhà X Mắc -> (비싸다고요). Tự Rúc Vô Mõm Mua Tô Phở 50k Bức Tử Khóc Trả Tiền Cảm Nhận Phở X Mắc -> (비싸더라고요)."
        }
    ],
    "-(으)ㄹ 텐데": [
        {
            q: "Giao Dây Rốn Với Tương Lai/Ngụy Biện: '-(으)ㄹ 텐데' Được Chia Vào MỤC ĐÍCH GÌ Để Rồi Mở Mỏ Vế 2?",
            options: ["Vế 1 Là Lệnh Cự Tuyệt.", "Vế 1 Là [SỰ PHỎNG ĐOÁN] Nặn óC CỦA MÌNH VỀ KHẢ NĂNG/ TÌNH TRẠNG LÚC NÀY NAY MAI... Thế Rồi Vế 2 Bồi Thêm Cảm Xúc Tiếc Nuối / Lo Lắng Hoặc Lời Khuyên Gợi Ý Vô Đoạn Nhãn.", "Phủ định Gí trị Trong Túi Phải Cất Giấu Đi", "Lời Mời Trực Quyết"],
            ans: 1,
            explain: "피곤할 텐데 쉬세요 (Tao Đoán Thấy Nhõ Mày Trông Óc Ngải Nhũn Bủn - CHẮC LÀ MÀY SẼ MỆT - Thế Là Quất Thêm Vế Rủ Rê... MÀY NGHĨ ĐI!)."
        },
        {
            q: "CHIA '덥다' (Nóng Tính Từ b Patchim) Cho '-ㄹ 텐데':",
            options: ["덥을 텐데", "더울 텐데", "더울 덴데", "덥을 텔데"],
            ans: 1,
            explain: "ㅂ + Nguyên Âm 으 -> 우 -> Ghép Cột Trụ Hình Chữ ㄹ -> 더울 텐데 (CHẮC TRỜI SẼ NÓNG NÊN LÀ...)."
        },
        {
            q: "Câu Cửa Miệng ĐỈNH HẬU: Nếu Tôi CHỈ NÓI CUỐI CÂU BỢ LÊN LƠ LỬNG (Thường Kéo Đuôi Nói Than Rên Trong Bản Tin Thảm):",
            options: ["-(으)ㄹ 텐데?", "-(으)ㄹ 텐데요. (Trời mưa to thế mà Nó Vẫn Đi... ĐOÁN CÙ CHẮC NÓ ƯỚT CẢ QUẦN ÁO MẤT THÔI... - 젖을 텐데요...).", "-(으)ㄹ 터이다.", "-(으)ㄹ 텐디."],
            ans: 1,
            explain: "Nó là Một Trong Tứ Đại Ngôn Ngữ Dìm Buồn (Bỏ lửng). Dịch Mượt Là: ... Chắc sẽ... Vậy mà...."
        },
        {
            q: "Vào Kỳ Thi TOPIK VIẾT 54. Bạn Muốn Chia SỰ THẬT QUÁ KHỨ BỎ QUÊN [LẼ RA ĐÃ CÓ THỂ LÀM NẾU] Thì '-았/었을 텐데' Đồng Hành Với Anh ĐẠI TÊN LÀ GÌ ĐẰNG TRƯỚC?",
            options: ["아무리", "만약에", "-았/었더라면 (NẾU MÀ CHI TÔI ĐÃ KIẾM NHIỀU TIỀN HƠI... THÌ ĐÃ CÓ VÉ LÀ TÔI MUA SH RÙI). Vế Này Bắt Khớp Quá Khứ Giả Định Hình Thái.", "따라서"],
            ans: 2,
            explain: "Trùng tu Cặp Khắn Khít Nhất Dải Ngân Hà: NẾU ĐÃ (-았/었더라면) ----- THÌ CHẮC LÀ ĐÃ CÓ THỂ CÙ LAO BỚ ĐƯỢC KIỂU (-았/었을 텐데)."
        },
        {
            q: "Bất Quy Tắc ㄹ. Chữ '살다' Lắp Kèo ㄹ 텐데 Vào?",
            options: ["살을 텐데", "살을 턴데", "살을텐디", "살 텐데"],
            ans: 3,
            explain: "Bà Chằn ㄹ Muôn Thấy Chữ Nguời Ta CÓ Chút ㄹ Sẵn Thì Gọn Luôn Chứ Lòi Ra Gì Nữa => 살 텐데! Nhớ Khoán Điểm Đừng Lòi."
        }
    ],
    "-다니": [
        {
            q: "Siêu Siêu Sốc Bất Thình Lình: '-다니' Mang Sắc Thái Cảm Xúc Hướng Về Thể Gì?",
            options: ["Việc Thường Tình Trôi Trảy.", "RÚT GỌN CỦA Đuôi Tường Thuật (-다) + 니... MANG Ý NGHĨA KINH HỒI BẠT VÍA KHI NGHE MẮT THẤY TAI NGHE CÁI ĐIỀU LẠ LÙNG. (Diễn: THẬT LÀ... / CÁI VIỆC MÀ... ĐÓ THẬT KHÓ TIN ĐỤ K).", "Luôn Kết Lại Bằng Dấu Phấy", "Không Dùng Hiện Tại"],
            ans: 1,
            explain: "그가 1등을 하다니 놀라워요 (CÁI VỤ ĐỘC BÍ RẰNG NÓ ĐỨNG NHẤT ẤY NHÁ... MÓA NÓ SỐC GHÊ RỢN). Trạng Thái Phi Điểm Tin Tưởng."
        },
        {
            q: "Về Căn Bản Nó Là Rút Gọn Của Đoạn Đuôi Tường Thuật/Gián Tiếp Trích Dẫn. Cho Nên Bạn Bắt Buộc Phải CHIA CÁI ĐỘNG TỪ BÌNH THƯỜNG [동사] THÀNH CÁC HÌNH THÁI Ở HIỆN TẠI LÀ GÌ?",
            options: ["Cứ Nguyên Đó MÀ 다니.", "-는다니/ ㄴ다니. Nghĩa là Gắn Nó Vào Cứ Theo Lật Mặt ĐUÔI VĂN BẢN (Ví Dụ: 가다 -> 간다니... / 먹다 -> 먹는다니... ). Rất Dễ Sai Sát Chỗ Này! Nhớ! Lỗi Là Bay Mất Não.", "-지 않다니", "Tính Từ Giống Y Dong Từ"],
            ans: 1,
            explain: "Sự việc ập đến Nó Yêu Cầu Chút Dính Liếu Vĩ Tố Tường Thuật Gián Tiếp! 혼자 밥을 다 먹는다니 (CÁI VIỆC TÁP CƠM... THẬT...)."
        },
        {
            q: "Cùng Lối Tư Duy Đó. TÍNH TỪ Sẽ Bị Gậy Hình Phạt Như Thế Nào Khi Gắn -다니?",
            options: ["Phải Thêm -은/는", "Phấn Lõ Bò Lết Nó Là Bọn Chỉ Định TÍNH CHẤT NÊN KHÔNG ĐƯỢC CHIAㄴ/는 NHƯ ĐỘNG TỪ. NÓ CHỈ VIỆC BỐC -다니 VÀO THẰNG BẢN SẮC MÀ THÔI! (Ví Dụ: 많다 -> 많다니 / 예쁘다 -> 예쁘다니).", "Ghép -(으)ㄹ다니", "Không Đi Với TÍNH ĐỘNG"],
            ans: 1,
            explain: "Khảo Sát Khắc Nghiệt (Nhớ Rằng Gián Tiếp Của Tính Từ LÀ -다고 하다 Đó Chơ Rìa). Cho Nên 춥다 -> 추다니 CẮt Cổ => 춥다니 (Thật Là Lạnh Rúng Run)."
        },
        {
            q: "BÓP CỔ DANH TỪ. Thằng Chó Rẻ Này Mà LÀ CẢNH SÁT TRẬT TỰ Ư?? Thật Sốc Chết Não!! Từ 경찰 (Cảnh Sát) Đi Điền Mặc Cuộn Tả:",
            options: ["경찰이다니", "경찰라니 / 경찰이라니. Gắn 이라니 (Có Patchim) Hay 라니 (Không). Độc Trị Khác Biết!", "경찰느라고", "경찰이더러니"],
            ans: 1,
            explain: "Danh từ Mang Khác Biệt Quý Tổ (-치다 Rút). Ghi Nhớ Cứ Đẩy Cổ -(이)라니 Nước Kênh => 경찰이라니 (Trời Nó Mà LÀ Cảnh... Cạn Thảo)."
        },
        {
            q: "Chức Vụ Đuôi Môi Miệng Mở Tiếng '-다니요?'. Bắn Câu Này Ngang Họng Thằng Khác Có Ngầm Ý Gì?",
            options: ["Chào Đón Xả Giao", "DỘI NGƯỢC XỔ LẠI CÂU NÓI CHẤN ĐỘNG CỦA ĐỐI TÁC TRỰC DIỆN! VÀ ĐẶT TRẠNG THÁI HIỂU LẦM TỨC GIẬN Lên Điểm Gốc! Lấy Trại Cưỡng Câu Lão Nhuế. (Gì Cở? Mày Nói Thằng Đó Chết Rùi Thật Hí?).", "Cấm Người Ta Mở Mõm", "Không Ngầm Nghĩa"],
            ans: 1,
            explain: "Tao Kết Hôn Hôm Qua Rồi... -> Đứa Bạn (Đút Đầu Choáng): 결혼을 하다니요? (GÌ? NÓI CÁI Đ... GÌ? KẾT HÔN RỒI Á?)."
        }
    ],
    "-(으)ㄹ걸(요)": [
        {
            q: "Nhân Phân Tâm Kế '-ㄹ걸(요)': NẾU DÙNG ĐỂ CHỈ HÀNH ĐỘNG CỦA BẢN THÂN TRONG QUÁ KHỨ ('-았/었을걸'), Nó Diễn Đạt Gì?",
            options: ["Tự Hào Cực Độ", "SỰ KIẾN TRỌNG TIẾC NUỐI BẬC CAO! ĐÁNG LẼ RA TÔI NÊN LÀM/ NÊN KHÔNG LÀM (Nhưng Mà Đã Phọt Ra Trái Sự Thật Rùi). Dịch Là: BIẾT VẬY TRƯỚC ĐÂY TÔI ĐÃ...", "Tương Lai Gần", "Lệnh Ngầm"],
            ans: 1,
            explain: "택시를 탈걸 그랬어요! (BIẾT THẾ TAO BẮT CẢ BÀ TAXI CHO RỒI, KHỔ THÂN CHƯA ĐI ĐỘ BỘ)! Tiếc Đứt Ruột!"
        },
        {
            q: "Nhưng NẾU TRỎ VÀO CHỦ THỂ NGÔI THỨ BA (TRỜI, NGƯỜI KHÁC) BẰNG ĐUÔI '-(으)ㄹ걸요', NÓ LẬI CÓ Ý NGHĨA KHÁC LÀ GÌ?",
            options: ["Là Rủ Rê Thuyết Phục", "PHỎNG ĐOÁN THEO NHỮNG GÌ MÌNH SUY TƯỞNG (CHẮC LÀ... ĐẤY Ạ). Câu Trả Lời Biện Kháng Lại Lời Người Nhận Định Trái Hướng.", "Cự Tuyệt Giao Rắn", "Đóng Sầm Mắt"],
            ans: 1,
            explain: "Hỏi: Jihyo Đến Chưa? -> Đáp: 지효는 아직 안 왔을걸요 (Tao ĐOÁN CHẮC LÀ Nhỏ Kia Chưa Lết Cẳng Tới Đâu)."
        },
        {
            q: "Tử Giáp Vỡ Cấu Hình Của Thí Sinh: Tại Sao TOPIK Hay Cho Gài Cái Cụm '-(으)ㄹ걸 그랬다' Mà Không Phải '(으)ㄹ걸'?",
            options: ["Vì Chữ Gài Kè Mới Sang", "BỞI CHỮ 그렇다 (Làm NHư Thế) DẶM VÀO ĐỂ NHẤN MẠNH MỨC CAO HƠN CỦA SỰ HỐI HẬN! Đáng Lẽ Nên Làm NHƯ VẬY (그랬다).", "Rút Ngắn Viết Cho Điệu", "Tính Chất Bằng Thi"],
            ans: 1,
            explain: "Ăn Cho Cực Thấm: 공부할걸 그랬다. (GIÁ MÀ CHI MÀ TỚ CỨ HỌC [NHƯ VẬY CÓ PHẢI NGON RÙI KHÔNG])."
        },
        {
            q: "Ghép Rán Nhóm Ngữ '-다' (Sống Là 살다): BiẾT THẾ TÔI ĐÃ KHÔNG SỐNG Ở ĐÓ...",
            options: ["살을걸...", "살할걸", "살걸...", "살럴걸"],
            ans: 2,
            explain: "ㄹ Bắt Cột. Có Chữ ㄹ Sẵn Đỉnh Ruồi Bịch Thức Gọn Nhảy Vô: 살다 -> 살 + 걸 => 살걸."
        },
        {
            q: "Khóa Buộc Hoàn Mỹ Giữa Việc Tiếc Nuối Nào Có Hành Trình: 'ĐÁNG LẼ TÔI KHÔNG NÊN MUA' - Chọn Sửa Đúng:",
            options: ["사지 않걸...", "사지 말걸 (그랬어). Công Thức Kiêng Cấm Phải Dùng '-지 말다' Để Cắm Cành Tiếc Nuối Ngược! Đừng Nhai '사지 않다'.", "안 살을걸", "Các Khảo"],
            ans: 1,
            explain: "Không nên làm GÌ (Thói Khuyên Quyết Vô Dụng Hiện Tại) Phải Biện Phân Bằng -지 말다 => 사지 말걸 (Biết Xưa Tao Đé Mua). Câu Hay Ra Đề Quỷ Dập."
        }
    ],
    "-다면서(요)?": [
        {
            q: "Lưỡi Dao Của Nhỏ Nhiều Chuyện: '-다면서(요)?' Bản Chất LÀ GÌ?",
            options: ["Vửa Đi Vừa Nói", "Lấy Lời TRÍCH DẪN GIÁN TIẾP CỦA THIÊN HẠ HOẶC NGƯỜI ĐỐI DIỆN Vừa Mớ Tỏ... VẬN LẠI THÀNH CÂU HỎI ĐỂ XÁC NHẬN! (NGHE ĐỒN LÀ CẬU... PHẢI KHÔNG Ạ?).", "Dĩ An Lắm Gì", "Vì Trích Đoạn Của Bản Bè"],
            ans: 1,
            explain: "그 사람이 부자라면서요? (Nhỏ Bạn Báo Nhỏ Kia Nghèo - Thế Là Tao Chọi Lọt Cái Mic VÀO HỌNG NÓ: NGHE XẠO BẢO THẰNG ĐÓ LÀ TỈ PHÚ PHẢI KHỒNG? Xác Nhận Lại)."
        },
        {
            q: "Vì Là Con Đẻ Của GIÁN TIẾP. CẮM ĐỘNG TỪ Hiện Tại Sẽ Trở Thành Thế Nào?",
            options: ["Gài Đồ Như Tính Từ", "Theo Đúng Nguyên Mặc Của Viết (Động Từ + 는다/ㄴ다... rồi Tọng Cục 면서요? Vào).", "Chịu Chết Hiện Tại", "Hoàn Toản"],
            ans: 1,
            explain: "Ví Dụ (Động TỪ) 매운 음식을 잘 먹는다면서요? (Thiên Hạ Gỉ Tai Nhau Nghe Đồn Bồ Cắn Ớt Ác Liệt Lắm Phải K Cơ?). Rải chữ -는."
        },
        {
            q: "TÍNH TỪ + 다면서(요)? Cắm Vào Vấp Á Cực Độ: Nó Sẽ Vứt Đi Đuôi -는. Chỉ Cần Thêm Gì Bạt Mã?",
            options: ["예쁜다면서", "예쁘다면서요? Tính Từ Bỏ 다 Thêm Nguyên Hình Khối да면서 VỚi.", "예쁠다면서", "예쁘면면서"],
            ans: 1,
            explain: "Rã Địch Trực Diên: Tính từ Không Có Âm Lượng Nhảy. 예르다 -> 예쁘다면서? (Tụi Bảo Cái Áo Mới Này ĐẸP LẮM CHỚ GÌ?)."
        },
        {
            q: "ÉP DÀNH TỪ (Mày Nghe Giả Chạy Kia LÀ BÁC SĨ Ư???)",
            options: ["의사라면서요?", "의사이면다면서", "의사다면서요", "Danh Từ Cần Móc Khóa 1 Lớp Nửa Ơi! (이)라면서요. Nối Cán Sự Việc Là Chót. (Bác Sĩ Cương Nghĩ Trọc -> 의사라면서요?)."],
            ans: 3,
            explain: "Thánh Thượng Tượng Danh Từ! Tông (이다 - Là). Trích Dẫn Là Thì Biến 랴 -> Mổ xẻ Có Batchim Thêm 이라면서. Không Có 라면서요."
        },
        {
            q: "Dùng Cho NGÔi Thứ Nhất Thì Thú Gì Xảy Ra? (TÔI NGHE TÔI NÓI LÀ TÔI SẼ BỊ BỆNH À???)",
            options: ["Nên Xài Giả Bộ Dễ Thương", "Đại Hiểm Cấm Chỉ: HỎI LẠI TRÍCH DẪN NHƯ ĐỒN LÀ DÀNH CHO CON NGƯỜI TA, ÁP VÀO BẢN THÂN NHƯ NGƯỜI TÂM THẦN LIỆT LẢ.", "Rất Được Áp Chơi", "Vẫn Tính Làm Khít"],
            ans: 1,
            explain: "Ai Gặp Lâu Hỏi Lại: Tôi Nghe Bạn Nói TÔI LÀ THẰNG ĐẸP TRAI NÈ? Mày Có BỊ BIÊN Không? Tự Khẳng Định Mình Không Phải LÀ Cái Rốn Bão."
        }
    ],
    "-(으)ㄴ/는 셈이다": [
        {
            q: "Móc Nối Khái Niệm Phân Cách: '-(으)ㄴ/는 셈이다' Đại Diện Cho Lực Lượng Mảng Nghĩa Gì?",
            options: ["Chuẩn Xác 100 Tỉ % Số Liệu Đo Được", "XẤP XỈ GẦN BẰNG NHAU (COI NHƯ LÀ/ XEM NHƯ LÀ). Có Thể Nó Chẳng Là Số Bằng Chắn Gì Đó, Nhưng XÉT TỔNG THỂ KẾT QUẢ THÌ CHẢ KHÁC NHAU LÀ MẤY MẢNG.", "Rất Cụ Thể Lượng", "Sự Tính Toán Sổ Sách Cạn"],
            ans: 1,
            explain: "10 명 중 9명이 반대했으니 거의 모두가 반대한 셈이다 (10 Đi 9 Đứng Biểu Tình Ngược. Tính Mỏng Ra XEM NHƯ CẢ ĐÁM BỊ Tẩy Chạy Sạch). Câu Ăn Vạ Tiêu Biểu Điền Sổ Điểm Kí Nghệ Khít!"
        },
        {
            q: "Khi Nối Về SỰ VIỆC ĐÃ HOÀN TẤT QUA TAY Ở QUÁ KHỨ (Coi Như Ta ĐÃ Mua Được...). Bạn Chọn Thế Nào?",
            options: ["Múc Cái Đuôi HIỆN TẠI -(는)", "Múc Ngay Cấu Trúc ĐỊNH NGỮ QUÁ KHỨ -(으)ㄴ 셈이다. Bày Tác Kịp Đã Hoàn Trọn. (Ví Dụ: 산 셈이다 - Bỏ Tiền Thì Coi Như Mua Xong Rùi).", "Danh Dụng Cọc Mặc Lặng", "Rất Biển Thái Quá Khăng"],
            ans: 1,
            explain: "Chia Hiện Tại (-는) Dùng Mùa Màng Có Sự Hành Động Tuôn Đổ: 배달을 자주 하니, 매일 시켜 먹는 셈이다 (Do Tạp Tạp Thường Nên XEM NHƯ MỞ Mắt LÀ GỌI Điểm Cặp Ăn Nhé!). Đã Đóng Băng Là (-ㄴ)."
        },
        {
            q: "Từ Vựng Đối Thủ Đánh Úp Bất Cấu Bằng Nghĩa Nhất Của '-(으)ㄴ/는 셈이다' Trong TOPIK Câu 3-4 Là Vĩ Thú Nào?",
            options: ["-기 마련이다", "-아/어 놓다", "-(으)나 마나", "-(으)ㄹ 지경이다 / -마찬가지이다. Đặc Biệt Từ 마찬가지이다 (Cũng Y Vậy - Không Khác Đi Cả Lả). Là Sự Phóng Cực Đối Xứng Tỉ Trọng."],
            ans: 3,
            explain: "A-B Bằng Trọng Hạng: 거의 다 본 셈이다 = 마찬가지이다 (Như Nhau Thấy Mẹ Cả). Đừng Đẻ Rơi Trí Cặp Câu Hợp Nghĩa Này."
        },
        {
            q: "Điền Nhanh '만들다' (Tính Đạo XEM NHƯ ĐÃ CHẾ TẠO XONG - Quá Khứ):",
            options: ["만들은 셈이다", "만들는 셈이다", "만든 셈이다. Bất Quy Tắc ㄹ Đụng Cặp Chữ ㄴ (Trong Vĩ Tổ -(으)ㄴ ĐỊnh Ngữ Quá Khứ). Ảo Thuật Biến Mất Cặp Cắt Mút: 자 -> 만든 셈이다.", "만느은 셈이다"],
            ans: 2,
            explain: "Bà Chằn ㄹ Muôn Đời Đè Mệt Gánh ㄴ Là Ngủ Nghẻo -> 만들 -> 만든 셈이다."
        },
        {
            q: "Đối Kháng Kĩ Năng Tức Cười Giữa [-는 셈이다] và [-는 척하다]. Điểm Khác Biệt Giết Chóc?",
            options: ["Ngược Tương Tác", "셈 (Coi Như Kết Quả Tròn Trĩn). Còn 척 (LÀ SỰ GIẢ TUẾ ĐỘC ÁC! AI ĐÓ ĐANG ĐÓNG KỊCH GIẢ VỜ CÁI GÌ ĐÓ). (아는 척하다 - Giả Bộ Tao Đây Rành Lắm Á). Khác 1 Trời 1 Vực.", "Hoàn Toản Bằng Một Giao", "Rút Ra Chung Khố"],
            ans: 1,
            explain: "Cắn Khít Bí Thuật: 셈 = Xem Như / 척 = Giả Trân Đóng Cảnh Kí Điệu Đểu! Đừng Dịch Chữ Giả Bộ Vào 셈 Nát Đề Thi."
        }
    ],
    "-(으)ㄹ래(요)": [
        {
            q: "Bóp Hàm Tương Lai '-ㄹ래요'. Chia Ra Hai Lực Liều Cho Ngôi 1 (TÔI) Và Ngôi 2 (MÀY). NẾU TÔI NÓI '제기 갈래요' Nó Mang Mầm Nghĩa Rắn Chắc Gì?",
            options: ["Tao Đi Hả Cứu?", "TÔI SẼ ĐI MẸ ĐÓ NHÁ! Thể Hiện SỰ CHỦ Ý CỰC KỲ CHIẾN CƯƠNG VÀ MUỐN LÀM. Không Cần Care Ý Nguyện Cổ Hủ Bất Kì Ai (Ý Chí Rất Cứng Của Khẩu Khẩn).", "Hãy Cho Tao Cầu", "Tôi Nên Lả Đi"],
            ans: 1,
            explain: "Tôi Sẽ Ăn Nè Mày Keme! -> 제가 먹을래요! Rất Hay Dùng Để Chiếm Hữu Kèo Chấp Ở Tụ Hội."
        },
        {
            q: "Nếu Ném Này Sang Chĩa Vuốt Ngôi Thứ Hai CÂU HỎI '커피 마실래요?'. Bạn Ngầm Nghĩa Đổi Thể Dạng Sang Dạng Quý Gì?",
            options: ["Mày Sẽ Uống À Căng Đấy", "MÀY CÓ MUỐN LÚC NÀY NÁC CỐC CÀ PHÊ VỚI BỐ KHÔNG? Sự Đề Nghị Hỏi Hanh Tâm Lý (Được Hoặc Không Đều Tự Dốc).", "Uống Cho Chảy Lòng Mày Xứ", "Có Phân Biệt Sắc Khuất"],
            ans: 1,
            explain: "Chỉ Dùng Tròng Của Nó: Đề Nghị Nhanh Mức Hỏi Thường Ngày, Nhẹ Lòng Hơn Chút '-겠어요?' Cổ Hủ."
        },
        {
            q: "CẶP KÉO TỬ MỆNH: TRONG MÔI TRƯỜNG KÍNH NGỮ NẶNG NỀ HOẶC CẤP TRÊN, Bạn CÓ ĐƯỢC CHỞ CÁI MO '-ㄹ래요' TRONG PHONG THÁI HỎI NGƯỜI ĐỐI DIỆN KHÔNG?",
            options: ["Cho Sút Thoải Rèn.", "TUYỆT ĐỐI HÕM CẤM KIÊNG! Vì Chữ RÊ Rủ Của (ㄹ래요) Nó Chọc Thằng Nhỏ Năng Lực Trịch Thượng Nhỏ Con. Gặp Giám Đốc Mở Buộc Trắc (사장님, 커피 마실래요?) LÀ BỊ KHỦNG BỐ DIỆN CHÚC BẬC TỨC. => Phải Dịch 드시겠어요?", "Cứ Nhét (시) Là Được", "Không Có Vấn"],
            ans: 1,
            explain: "Ăn Điểm Thi TOPIK Bị Phạt Liệt Ngữ Kính Cảnh: Chỉ Dùng Cho Bầu Bạn Hoặc Vãi Tiếng Thấp Thể Nhẹ Chuyện. Còn Giữa Đám Sếp: Vang Gọng -으시겠습니까/으실까요? Lên Cao Lên."
        },
        {
            q: "Khoanh Từ Bí Đao: Bạn Chọn Tích Lũy Rút Gọn Nào KHI GHÉP '하다' SẼ TẠO THÀNH COMBO SỐ TẮC KHI GẶP NHAU Nhắn Tin Lại CỦa Giới Trẻ?",
            options: ["할라우?", "할래(요)", "하래(요)", "하우래(요)"],
            ans: 1,
            explain: "Giới trẻ lướt não: 밥 먹을래? 영화 볼래? 같이 할래? (Tao Cùng Mày Đua Kèo K). Câu Chốt Yêu."
        },
        {
            q: "CHIA MỘT PHONG THÁI SIÊU LIỆT BẤT QUY TẮC CỦA CHỮ Bước Bộ (걷다 -> ㄷ):",
            options: ["걷을래요", "거들래요", "걸을래요. Có ㄷ Gặp Bờ Mộng Nguyên Âm (으) Mọc Cái Lưỡi Vua Trọng Phẩm Thành ㄹ! -> 걸 + 을래요 -> 걸을래요?", "거르래"],
            ans: 2,
            explain: "Chân Lý Không Bao Giờ Thừa Của Dòng ㄷ: 걸을래요? (Vi hành Chứ Này Phố Mây Đợi Lòng Khớp!)."
        }
    ],
    "-(으)ㄹ 뻔하다": [
        {
            q: "Tiết Tấu Bót Báo Nguy Hiểm: '-(으)ㄹ 뻔하다' Có Bóng Đèn Lửa Cháy Nghĩa Dịch Như Mây Phút Nào?",
            options: ["Kiểu Đó Nên Rành Đội", "SUÝT CHÚT NỮA THÌ (CHẾT RÔI, GÃY MỒM... Vv...). Biểu Hiện Sự Rớt Bóng Tại Khoảnh Khắc Lỗi Ảo Tưởng Phút Sảy Đó Và CUỐI CÙNG MAY MẮN THOÁT KHỎI THỰC TẾ CHỐT!(Trái Ngược).", "Hên Thì Rơi Vào Rùi", "Xui Xẻo Thì Chỉ Cách Đi 2 Mức Trống Kệ"],
            ans: 1,
            explain: "넘어질 뻔했어요 (Sẩy Cái Chân Suýt Trôi Hàng... May Sao Vớ Được Quả Cọc Trụ! K Rớt Vỡ Đầu Đâu)."
        },
        {
            q: "LUẬT VUA LUẬT THẦN: VÌ CÁI SỰ ĐÁ PHẢI RỒI MÀ NÓ ÉO DIỄN BỊ MÓT (Khép Vào Túi Khí). Nên Đuôi '뻔하다' LUÔN LUÔN BỊ KHỐNG CHẾ TRONG KÍN CỬNG Ở DẠNG THÌ ĐÓ NÀO DUY NHẤT?",
            options: ["Tương Lai Họa Bất (뻔할 거다)", "QUÁ KHỨ (-뻔했다). Nhét Ghim Đầu Đi Cái Vì Gì Cũng Suýt MỘT Xảy Ra LÀ CÂU CHUYỆN QUÁ KHỨ (Trải Đời Xong Qua Lại Lời). Không Nặn Ở Hiện Tại Nhé!", "Đuôi Lỏng Đâm Thỏng Hiện", "Sóng Cảm Chắn Xích"],
            ans: 1,
            explain: "늦을 뻔해요!!! (Sai Tông Mã!). 늦을 뻔했어요!!! (ĐÚNG TUYỆT PHÁT - Suýt Mẹ Muộn Trừ Vớt Lên Tới Bờ Giờ)."
        },
        {
            q: "Bộ Cạp Đôi Huỷ Diệt Hay Được Xách Làm Trụ Chặn Kĩ Ở Vế Trước Của Bộ Suýt Chết Này Là Từ Gì Cân Vế?",
            options: ["아마도 (Chắc Lành)", "하마터면 (Tít Mắt/ Suýt Tí Chút Nữa). Nếu Chén Cái Rễ Từ Này Ra... Auto Điền Lắp 뻔했다 Móc Liền Đuôi Chắc Liều Khắc Tổ.", "오히려", "비록"],
            ans: 1,
            explain: "하마터면 + ㄹ 뻔했다: (Bú Cắn Đôi Sinh Đôi Nghỉ Chơi Nhậu Toi Lũ Địch Hại Não Nhất)."
        },
        {
            q: "Sóng Âm Chia Mạch Với Cấu TRúc Giả Định Hối Tiếc Trước Đó: 'NẾU BÁC TÀI KHÔNG LẾT QUA CÚ RẼ... THÌ SUÝT CHÍT CÓ MÌNH TAO RÙI'. Chọn Nghép Nối Cho Phù Chót:",
            options: ["-(으)면", "-았/었더라면 ... -(으)ㄹ 뻔했다! (Vòng Tỏa Quá Khứ Chéo... NẾU CHI Lúc Đó Cứa Sai Lệch... THÌ SUÝT ĂN Trái Mỏ Sắc Rừng Khá!).", "-(으)니까 ... -뻔하다", "Các Tích Ngắt Khoang"],
            ans: 1,
            explain: "안전벨트를 매지 않았더라면, 다칠 뻔했어요 (Cái Họa Trì Khố Đời Thực: Vô Tình Giả Sử QUÁ KHỨ Khéo Dây Dây Lại K Rắn! Nhũn Óc!)."
        },
        {
            q: "Ngồi Chọn Tử Mãn Với '잊다' (Quên). Chống Câu 'Trời Mẹ... Tớ SUÝT TỊT Não Mất Luôn Số Mày Ở Đâu Đất!':",
            options: ["잊을 뻔했어", "잊을 뻐냈어", "잊을 껄했어", "이을 뻔했어"],
            ans: 0,
            explain: "잊다 (Có Batchim). Chọn Ghút Cỏ (으) => 잊을 뻔했다."
        }
    ],
    "-아/어 놓다/두다": [
        { q: "Chọn câu ĐÚNG sử dụng -아/어 놓다/두다:", options: ["문을 열어 놓았어요.", "문을 열어 둔 편이에요.", "문을 여는 척했어요.", "문을 열기 마련이에요."], ans: 0, explain: "-아/어 놓다/두다: Duy trì trạng thái sau khi hành động. (Mở cửa sẵn để đó)." },
        { q: "Câu nào sai ngữ pháp?", options: ["숙제를 해 두었어요.", "음식을 많이 만들어 놓았습니다.", "방을 청소하는 중이야 놓았어요.", "표를 예매해 두는 게 좋아요."], ans: 2, explain: "-아/어 놓다 gắn với động từ chỉ hành động tạo trạng thái duy trì, 청소하는 중이야 놓았어요 là kết hợp sai hoàn toàn." },
        { q: "Điền vào chỗ trống: 손님이 오시기 전에 청소를 ______.", options: ["해 두세요", "해 버렸어요", "할 수밖에 없어요", "할 따름이에요"], ans: 0, explain: "Làm sẵn việc gì đó chờ điều kiện tương lai thì dùng -아/어 두다/놓다." },
        { q: "Ý nghĩa của câu: 에어컨을 켜 놓았어요.", options: ["Tôi đang bật điều hòa.", "Tôi vừa bật điều hòa xong.", "Tôi đã bật điều hòa và nó vẫn đang bật.", "Tôi định bật điều hòa."], ans: 2, explain: "켜 놓았어요 nghĩa là đã bật và VẪN GIỮ TRẠNG THÁI đó tới hiện tại." },
        { q: "Phân biệt -아/어 있다 và -아/어 놓다/두다. Câu đúng là:", options: ["문이 열어 있어요.", "문이 열려 놓았어요.", "문을 열어 놓았어요.", "문을 여어 있어요."], ans: 2, explain: "-아/어 있다 kết hợp với nội động từ/bị động (열리다). -아/어 놓다/두다 kết hợp với ngoại động từ (열다 + 을/를)." }
    ],
    "-(으)ㄴ/는 편이다": [
        { q: "Chọn câu ĐÚNG:", options: ["저는 키가 큰 편입니다.", "저는 키가 크는 편입니다.", "한국어는 어려운 편을 합니다.", "이 옷은 비싼 편이 아닙니다."], ans: 0, explain: "Tính từ dùng -(으)ㄴ 편이다 (크다 -> 큰). Động từ dùng -는 편이다." },
        { q: "Điền vào chỗ trống: 동생은 밥을 많이 ______.", options: ["먹은 편이에요", "먹는 편이에요", "먹을 편이에요", "먹던 편이에요"], ans: 1, explain: "Động từ (먹다) + -는 편이다 (thuộc diện, thường hay)." },
        { q: "Hỏi độ thường xuyên: 자주 운동해요?", options: ["네, 자주 하는 편이에요.", "네, 자주 할 편이에요.", "네, 자주 한 편이에요.", "네, 운동을 한 척해요."], ans: 0, explain: "Động từ 하다 + 는 편이다 diễn tả tần suất tương đối thường xuyên." },
        { q: "Tìm lỗi sai:", options: ["성격이 조용한 편이다.", "말을 잘 하는 편이다.", "옷이 예쁜 편이다.", "가방이 비싸는 편이다."], ans: 3, explain: "비싸다 là tính từ, phải là 비싼 편이다, không dùng -는 편이다." },
        { q: "Tình huống: Học sinh này thi luôn đạt 80-90 điểm. Nói thế nào?", options: ["공부를 잘 하는 편이에요.", "공부를 잘할 수밖에 없어요.", "공부를 잘하는 척해요.", "공부를 잘할 리가 없어요."], ans: 0, explain: "Thuộc diện học giỏi (trên mức trung bình khá)." }
    ],
    "-(으)ㄹ 만하다": [
        { q: "Ý nghĩa của -ㄹ 만하다:", options: ["Sắp làm gì", "Đáng để làm gì / Đủ khả năng", "Vừa mới làm gì", "Đành phải làm gì"], ans: 1, explain: "-(으)ㄹ 만하다 có 2 nghĩa: Đáng để làm, hoặc Đủ sức làm/Có thể chịu đựng." },
        { q: "Câu đúng: 이 책은 ______.", options: ["읽을 만해요", "읽을 편이에요", "읽는 척해요", "읽을 수밖에 없어요"], ans: 0, explain: "Quyển sách này ĐÁNG ĐỂ ĐỌC." },
        { q: "Điền từ: 한국 음식 중에서 불고기가 ______.", options: ["먹은 편이다", "먹을 만하다", "먹는 바람에", "먹는 통에"], ans: 1, explain: "불고기가 먹을 만하다 = Bulgogi ngon, đáng để ăn thử." },
        { q: "Hợp lý nhất:", options: ["죽을 만하다", "볼 만하다", "잘 만하다", "자랄 만하다"], ans: 1, explain: "볼 만하다 (Đáng xem) là cụm rất phổ biến." },
        { q: "Phân biệt: 볼 만하다 vs 본 척하다", options: ["볼 만하다 = Đáng xem, 본 척하다 = Giả vờ đã xem", "볼 만하다 = Sắp xem, 본 척하다 = Chỉ xem", " 볼 만하다 = Muốn xem, 본 척하다 = Cứ xem", "Không khác nhau"], ans: 0, explain: "만하다: xứng đáng. 척하다: giả vờ." }
    ],
    "-는 바람에": [
        { q: "Đặc điểm CỐT LÕI của -는 바람에 là gì?", options: ["Vế sau luôn tích cực", "Lý do bắt buộc vế sau tích cực", "Lý do ĐỘT NGỘT dẫn đến kết quả TIÊU CỰC", "Phải chia thì quá khứ ở trước"], ans: 2, explain: "-는 바람에 (Do, vì... đột ngột) bắt buộc vế sau gây ảnh hưởng Tiêu cực, thường ở Quá Khứ." },
        { q: "Chọn câu ĐÚNG:", options: ["오빠가 도와주는 바람에 숙제를 빨리 끝냈어요.", "비가 오는 바람에 옷이 다 젖었어요.", "열심히 공부하는 바람에 시험에 합격했어요.", "돈을 버는 바람에 부자가 되었어요."], ans: 1, explain: "Chỉ B là kết quả bị động/tiêu cực hợp lý nhất." },
        { q: "Chia động từ: 버스를 (놓치다) ______ 지각했어요.", options: ["놓치는 바람에", "놓친 바람에", "놓칠 바람에", "놓쳤는 바람에"], ans: 0, explain: "-는 바람에 LUÔN dùng hiện tại (는) cho hành động nguyên nhân." },
        { q: "Câu Tệ nhất:", options: ["넘어지는 바람에 다쳤어요.", "친구가 갑자기 오는 바람에 약속을 취소했어요.", "잠을 자는 바람에 전화를 못 받았어요.", "좋은 사람을 만나는 바람에 행복해요."], ans: 3, explain: "행복해요 là tích cực, KHÔNG ĐƯỢC dùng -는 바람에." },
        { q: "Phân biệt: -는 바람에 vs -는 탓에", options: ["Khác nhau hoàn toàn", "바람에 có tính đột xuất/bất ngờ hơn", "탓에 chỉ dùng cho động vật", "바람에 đi với kết quả Tốt"], ans: 1, explain: "Cả 2 đều do/vì tiêu cực, nhưng 바람에 (cơn gió) mang sắc thái đột ngột." }
    ],
    "-는 김에": [
        { q: "Ý nghĩa của -는 김에:", options: ["Nhân tiện, tiện thể", "Do vì", "Để mà", "Thà rằng"], ans: 0, explain: "Tiện thể (Đang tiến hành A thì làm B luôn do tiện đường/hoàn cảnh)." },
        { q: "Chọn câu ĐÚNG:", options: ["도서관에 가는 김에 책을 빌려요.", "공부하는 김에 잤어요.", "자는 김에 죽었어요.", "먹는 김에 토했어요."], ans: 0, explain: "Tiện đi thư viện thì mượn sách luôn." },
        { q: "Chia từ (과거): 백화점에 (가다) ______ 옷도 샀다.", options: ["가는 김에", "간 김에", "갈 김에", "간 길이"], ans: 1, explain: "Hành động đi đến đó đã xong/kết thúc nên dùng -(으)ㄴ 김에 (간 김에)." },
        { q: "(Hiện tại / Tương lai) 백화점에 (가다) ______ 옷도 살 거예요.", options: ["가는 김에", "간 김에", "가던 김에", "갈 김에"], ans: 0, explain: "Hành động đang trên đường thực hiện/hoặc ý định thực hiện thì dùng -는 김에." },
        { q: "So sánh -는 길에 vs -는 김에:", options: ["-는 길에 bắt buộc phải có động từ Ý định/Hướng tính (가다/오다)", "-는 김에 chỉ dùng quá khứ", "Hoàn toàn giống hệt nhau", "-는 길에 tiêu cực hơn"], ans: 0, explain: "길에 (Trên ĐƯỜNG đi) giới hạn trong các động từ di chuyển. 김에 mở rộng hơn." }
    ],
    "-는 척하다": [
        { q: "Ý nghĩa của -는 척하다:", options: ["Bắt buộc phải làm", "Giả vờ làm gì đó", "Làm cho quen", "Do làm quá đà"], ans: 1, explain: "Giả vờ, làm bộ (척하다 = 체하다)." },
        { q: "Điền vào chỗ: 아는 ______ 마세요.", options: ["척하지", "편하지", "수밖에 없지", "리 만무하지"], ans: 0, explain: "아는 척하지 마세요 = Đừng có giả vờ hiểu biết." },
        { q: "Chia với Tính từ: 돈이 (많다)", options: ["많은 척하다", "많는 척하다", "많을 척하다", "많았던 척하다"], ans: 0, explain: "Tính từ -> -(으)ㄴ 척하다: 많은 척하다 (Giả vờ nhiều tiền)." },
        { q: "Câu Tương tự: 자는 척했다", options: ["자는 체했다", "자는 편이다", "자는 셈이다", "자는 탓이다"], ans: 0, explain: "척하다 = 체하다." },
        { q: "Câu SAI:", options: ["안 본 척했어요.", "예쁜 척했어요.", "밥을 먹는 척했어요.", "집이 멀는 척했어요."], ans: 3, explain: "멀다 (xa) là tính từ bất quy tắc ㄹ -> 먼 척하다 (đúng)." }
    ],
    "-(으)ㄹ 수밖에 없다": [
        { q: "Ý nghĩa của -(으)ㄹ 수밖에 없다:", options: ["Không có khả năng", "Ngoài cách đó ra thì không còn cách nào khác (Đành phải)", "Khoảng chừng", "Không đáng để"], ans: 1, explain: "수 (cách) + 밖에 (ngoài) + 없다 (không) = Không còn cách nào khác." },
        { q: "Điền từ: 지하철이 끊겨서 택시를 ______.", options: ["탈 만해요", "타는 척해요", "탈 수밖에 없어요", "탈 탓이에요"], ans: 2, explain: "Hết tàu điện nên HẾT CÁCH TRÁNH khỏi việc ngồi taxi." },
        { q: "Mang nghĩa tất nhiên: 열심히 안 했으니까 시험에 ______.", options: ["떨어질 수밖에 없지", "떨어지는 바람에", "떨어지는 척했지", "떨어질 정도로"], ans: 0, explain: "Chắc chắn rớt, rớt là hệ quả tất yếu không thể tránh." },
        { q: "Câu SAI:", options: ["인기가 많을 수밖에 없어요.", "비가 올 수밖에 없었어요.", "너를 사랑할 수밖에 없어.", "공부할 수밖에 안 없다."], ans: 3, explain: "Phủ định kép phi lý (밖에 안 없다)." },
        { q: "Phân tích: 바빠서 못 갈 수밖에 없어요.", options: ["Câu này rất chuẩn", "Phải dùng 못 갈 리가 없어요", "Thường không ghép với phủ định 못 bên trong nó", "Chỉ dùng với quá khứ"], ans: 2, explain: "Đành phải KHÔNG đi nghe gượng. Thường nói 갈 수 없어요 cho tự nhiên." }
    ],
    "-나 보다 / -(으)ㄴ가 보다": [
        { q: "Sự khác biệt giữa -나 보다 và -(으)ㄴ가 보다 theo ngữ pháp chuẩn:", options: ["-나 보다 dùng cho Động từ, -(으)ㄴ가 보다 dùng cho Tính từ", "Chẳng khác gì", "나 보다 dùng cho tương lai", "가 보다 chỉ dùng cho quá khứ"], ans: 0, explain: "Theo chuẩn: Động từ + -나 보다. Tính từ + -(으)ㄴ가 보다. Hiện nay khẩu ngữ mọi người hay dùng chung -나 보다." },
        { q: "Chia đúng: 학생이 (많다) ______.", options: ["많나 보다", "많은가 보다", "많는가 보다", "A và B đều được, nhưng B chuẩn hơn"], ans: 3, explain: "많다 (Tính từ) -> 많은가 보다 (chuẩn). 많나 보다 (khẩu ngữ) đều chấp nhận." },
        { q: "Điền từ: 밖에 비가 ______.", options: ["오는가 보다", "오나 보다", "올까 봐", "올 리가 없다"], ans: 1, explain: "오다 (Động từ) -> 오나 보다." },
        { q: "Với đuôi Quá khứ: 어제 친구를 ______.", options: ["만났던가 보다", "만났나 보다", "만났을까 보다", "만나는가 보다"], ans: 1, explain: "Quá khứ: Thêm -았/었- + 나 보다." },
        { q: "Điểm CỐT YẾU của -나 보다 so với -(으)ㄹ 것 같다:", options: ["-나 보다 phải có CĂN CỨ (nhìn thấy, nghe thấy).", "-(으)ㄹ 것 같다 bắt buộc có căn cứ.", "Chỉ khác nhau độ dài.", "-나 보다 dùng trong văn bản nhà nước."], ans: 0, explain: "Phỏng đoán của -나 보다 luôn phải dựa trên CƠ SỞ quan sát trực tiếp." }
    ],
    "-(으)ㄹ 리가 없다": [
        { q: "Ý nghĩa của -(으)ㄹ 리가 없다:", options: ["Chắc chắn", "Không có lý nào, Làm gì có chuyện đó", "Không có gì làm", "Chỉ có thể"], ans: 1, explain: "Tuyệt đối phủ nhận một sự việc. (Không đời nào xảy ra)." },
        { q: "Điền từ: 그 착한 사람이 거짓말을 ______.", options: ["할 리가 없어요", "할 수밖에 없어요", "할 성싶어요", "하는 법이에요"], ans: 0, explain: "Không đời nào cái người hiền lành đó lại đi nói dối." },
        { q: "Ở dạng câu hỏi -(으)ㄹ 리가 있어요?", options: ["Làm sao mà vậy được? = -(으)ㄹ 리가 없다", "Hỏi đường", "Hỏi nguyên nhân", "Hỏi điều kiện"], ans: 0, explain: "할 리가 있어요? (Làm gì có chuyện đó hả?) = 할 리가 없어요." },
        { q: "Quá khứ: ______.", options: ["했을 리가 없어요", "할 리가 없어요", "했던 리가 없어요", "하는 리가 없었어"], ans: 0, explain: "Cho vào gốc động từ: -았/었을 리가 없다 (Không có lý nào lại ĐÃ làm thế)." },
        { q: "Phân biệt -(으)ㄹ 리가 없다 và -(으)ㄹ 수 없다:", options: ["Giống nhau", "리가 없다 = Phủ định phỏng đoán. 수 없다 = Không có Năng lực/Khả năng.", "리가 없다 là văn viết", "수 없다 là tiếng Hán"], ans: 1, explain: "수 없다 (Không thể làm vì không biết). 리가 없다 (Không có lý nào dám làm thế)." }
    ],
    "-(으)ㄴ/는 대로": [
        { q: "Ý nghĩa thứ nhất: 너가 생각하______ 말해라.", options: ["는 척", "는 대로", "는 바람에", "ㄹ 만하게"], ans: 1, explain: "Theo như -> Cứ phát biểu THEO NHƯ bạn nghĩ." },
        { q: "Ý nghĩa thứ hai: 집에 (도착하다) ______ 전화할게.", options: ["도착하는 대로", "도착한 대로", "도착할 대로", "도착할 뿐"], ans: 0, explain: "Ngay khi làm việc A thì làm B. (Ngay khi về đến nhà sẽ gọi cho)." },
        { q: "Điền từ: 엄마가 가르쳐 ______ 요리를 했다.", options: ["주는 대로", "준 대로", "줄 대로", "주던 대로"], ans: 1, explain: "Đã dạy xong trong quá khứ -> 가르쳐 준 대로 (Theo như mẹ ĐÃ dạy)." },
        { q: "Câu SAI:", options: ["마음대로 해!", "도착하는 대로 연락할게요.", "약속대로 왔다.", "내일 비가 오는 대로 안 간다."], ans: 3, explain: "오는 대로 (Ngay sau khi) không kết hợp với vế sau phủ định kiểu điều kiện như thế này. Phải dùng 비가 오면." },
        { q: "Kết hợp danh từ: 법 + 대로 = ?", options: ["법인 대로", "법대로", "법나는 대로", "법은 대로"], ans: 1, explain: "Danh từ gắn trực tiếp: N + 대로 (Theo như)." }
    ],
    "-(으)ㄹ 정도로": [
        { q: "Ý nghĩa của -(으)ㄹ 정도로:", options: ["Chỉ khoảng chừng", "Đến mức, Tới khoảng", "Không đáng để", "Sắp sửa"], ans: 1, explain: "Đến mức độ nào đó (thể hiện ranh giới mức độ)." },
        { q: "Chọn câu ĐÚNG:", options: ["쓰러질 정도로 피곤해요.", "쓰러진 정도로 피곤해요.", "쓰러지는 정도로 피곤해요.", "쓰러지게 정도로 피곤해요."], ans: 0, explain: "Động từ + -(으)ㄹ 정도로 (Đến mức sẽ ngất đi vì mệt)." },
        { q: "Cấu trúc tương đương:", options: ["-(으)ㄹ 만하다", "-다시피", "-(으)ㄹ 지경이다", "-는 척하다"], ans: 2, explain: "Cùng nghĩa 'đến mức độ': -(으)ㄹ 지경이다 (thường dùng tiêu cực/thái quá) ≈ -(으)ㄹ 정도로." },
        { q: "Điền từ: 눈물이 ______ 웃었어요.", options: ["나는 정도로", "날 정도로", "날 지경이다", "난 정도로"], ans: 1, explain: "나다 + ㄹ 정도로 = 날 정도로 (Cười đến mức chảy nước mắt)." },
        { q: "Sử dụng với N (Danh từ):", options: ["기절할 정도이다", "한국인 정도 한국어를 잘한다", "한국 사람일 정도로", "Cả A và B đúng"], ans: 0, explain: "Danh từ kết hợp trực tiếp: N 정도 (Mức độ N). Ví dụ: 한국인 정도." }
    ],
    "-기 마련이다": [
        { q: "Ý nghĩa của -기 마련이다:", options: ["Quyết định làm gì", "Chuẩn bị làm gì", "Tất nhiên là, Vốn dĩ là", "Đành phải"], ans: 2, explain: "Thể hiện một chân lý, quy luật tự nhiên, điều hiển nhiên." },
        { q: "Chọn câu có ý nghĩa tương đương với: 사람은 누구나 죽기 마련이다.", options: ["사람은 죽는 법이다.", "사람은 죽을 수밖에 없다.", "사람은 죽을 뿐이다.", "사람은 죽을 나위가 없다."], ans: 0, explain: "-기 마련이다 = -는 법이다 (Vốn dĩ là thế, quy luật tất yếu)." },
        { q: "Điền vào chỗ trống: 겨울이 가면 봄이 ______.", options: ["오기 마련이에요", "올 리가 없어요", "오려나 봐요", "오기 십상이에요"], ans: 0, explain: "Đông qua thì xuân tới là quy luật tự nhiên -> 오기 마련이다." },
        { q: "Câu nào SAI?", options: ["시간이 지나면 잊혀지기 마련이다.", "열심히 하면 성공하기 마련이다.", "내일 비가 오기 마련이다.", "어려운 일도 지나가기 마련이다."], ans: 2, explain: "-기 마련이다 chỉ dùng cho QUY LUẬT hiển nhiên, không dùng cho sự thật phỏng đoán tương lai cụ thể như 'ngày mai mưa'." },
        { q: "Phân biệt -기 마련이다 và -기 일쑤이다:", options: ["Giống hệt nhau", "-기 마련이다 (Quy luật tự nhiên chung). -기 일쑤이다 (Thói quen cá nhân thường xuyên xảy ra).", "일쑤이다 chỉ dùng kết quả tốt", "마련이다 là quá khứ"], ans: 1, explain: "일쑤이다 thường dùng cho thói quen nhỏ hay mắc lỗi (hay quên đồ). 마련이다 là chân lý sống." }
    ],
    "-(으)ㄴ/는 모양이다": [
        { q: "Ý nghĩa của -(으)ㄴ/는 모양이다:", options: ["Có hình dáng giống", "Phong cách", "Có vẻ như, Chắc là (Phỏng đoán)", "Chỉ là giả vờ"], ans: 2, explain: "Phỏng đoán DỰA TRÊN cơ sở nghe nhìn trực tiếp (= -나 보다)." },
        { q: "Chọn câu ĐÚNG (với Tính từ):", options: ["맛있는 모양이에요.", "맛있은 모양이에요.", "맛있을 모양이에요.", "맛인 모양이에요."], ans: 0, explain: "있다/없다 kết hợp với -는 모양이다 -> 맛있는 모양이다." },
        { q: "Quá khứ đối với Động từ (비가 오다):", options: ["비가 올 모양이에요", "비가 오는 모양이에요", "비가 온 모양이에요", "비가 았던 모양이에요"], ans: 2, explain: "Việc đã xảy ra -> -(으)ㄴ 모양이다 (온 모양이다 = có vẻ trời đã mưa)." },
        { q: "Ngữ pháp thay thế được cho: 저 사람들은 부부인 모양이에요.", options: ["부부일 리가 없어요.", "부부인가 봐요.", "부부일 수밖에 없어요.", "부부인 척해요."], ans: 1, explain: "-(으)ㄴ/는 모양이다 dùng thay thế được cho -나 보다 / -(으)ㄴ가 보다." },
        { q: "Câu nào bị cấm dùng với 모양이다?", options: ["바쁜 모양이에요.", "제가 어제 밥을 먹은 모양이에요.", "회의를 하는 모양이에요.", "길이 막히는 모양이에요."], ans: 1, explain: "Sự phỏng đoán không bao giờ chia cho ý thức chủ quan ngôi thứ 1 (Tôi có vẻ đã ăn cơm -> Ma làm?)." }
    ],
    "-다시피": [
        { q: "Ý nghĩa của -다시피:", options: ["Để mà (mục đích)", "Như bạn đã thấy/biết, Gần như", "Mọi lúc", "Vừa mới"], ans: 1, explain: "-다시피 có 2 nghĩa: 1. Như (bạn đã biết/thấy) = -는 바와 같이. 2. Gần như, hầu như (làm hành động)." },
        { q: "Chọn câu ĐÚNG nghĩa 'Như bạn đã thấy':", options: ["너도 알다시피 오늘 바빠.", "너도 안다시피 오늘 바빠.", "너도 알을 다시피 오늘 바빠.", "너도 알아다시피 오늘 바빠."], ans: 0, explain: "알다 + 다시피 -> 알다시피 (Như bạn biết đấy)." },
        { q: "Điền từ (nghĩa 'Gần như/Hầu như'): 매일 도서관에서 (살다) ______ 해요.", options: ["살다시피", "사는 다시피", "산 다시피", "살을 다시피"], ans: 0, explain: "살다시피 해요 (Tôi hầu như sống luôn ở thư viện)." },
        { q: "Câu sai ngữ pháp:", options: ["보시다시피 비가 옵니다.", "배우다시피 했어요.", "들으시다시피 시끄러워요.", "굶다시피 다이어트를 해요."], ans: 1, explain: "배우다시피 했어요 (Hầu như đã học) ít dùng. Thường dùng với các động từ sinh hoạt: 굶다, 먹다, 살다, 날다." },
        { q: "Phân biệt -다시피 và -는 척하다:", options: ["Giống nhau", "-다시피 (Hành động gần như là thế thật). -는 척하다 (Hoàn toàn không làm nhưng giả bộ).", "척하다 là tốt", "다시피 là tiêu cực"], ans: 1, explain: "다시피 mang tính cường điệu sự thật đang diễn ra. 척하다 là lừa đảo/diễn kịch." }
    ],
    "-아/어 버리다": [
        { q: "Ý nghĩa của -아/어 버리다:", options: ["Vứt bỏ đồ vật", "Làm xong triệt để (Nuối tiếc hoặc Nhẹ nhõm)", "Hành động liên tục", "Giữ nguyên trạng thái"], ans: 1, explain: "Nhấn mạnh sự kết thúc hoàn toàn của hành động. Mang cảm xúc tiếc nuối hoặc trút được gánh nặng." },
        { q: "Chia động từ đúng (잊다):", options: ["잊어 버렸어요", "잊을 버렸어요", "잊는 버렸어요", "잊어 두었어요"], ans: 0, explain: "잊어버리다 (Quên béng luôn)." },
        { q: "Biểu hiện cảm xúc NHẸ NHÕM:", options: ["드디어 숙제를 다 해 버렸어요!", "지갑을 잃어버렸어요.", "친구가 가 버렸어요.", "버스가 떠나 버렸어요."], ans: 0, explain: "Cảm giác sung sướng/nhẹ nhõm khi xong việc nặng nhọc (Làm xong phắc bài tập rồi)." },
        { q: "Cấu trúc tương đồng nhưng mạnh hơn về mặt TIẾC NUỐI ngoài ý muốn:", options: ["-고 말다", "-아/어 대다", "-아/어 놓다", "-(으)ㄹ 리가 없다"], ans: 0, explain: "-고 말다 (rốt cuộc thì đã) mang tính luyến tiếc mãnh liệt hơn so với 버리다." },
        { q: "Câu SAI:", options: ["다 먹어 버렸어.", "울어 버렸다.", "예뻐 버렸다.", "사 버렸어요."], ans: 2, explain: "버리다 KHÔNG đi với Tính từ trực tiếp. Phải đợi thành Động từ: 예뻐져 버렸다 (Trở nên xinh đẹp luôn rồi)." }
    ],
    "-고 말다": [
        { q: "Ý nghĩa của -고 말다:", options: ["Triệt để kết thúc", "Rốt cuộc thì đã, Cuối cùng thì (Nghĩa tiêu cực/cố gắng bất thành)", "Đừng làm thế", "Lời khuyên"], ans: 1, explain: "Rốt cuộc thì sự việc không mong muốn đã xảy ra (sau khi cố kềm chế/phấn đấu)." },
        { q: "Điền vào chỗ trống: 참으려고 했는데 결국 ______.", options: ["울고 말았어요", "울어 버렸어요", "울기 마련이에요", "울 수밖에 없어요"], ans: 0, explain: "결국 (Rốt cuộc) hay đi với -고 말았다 (Rốt cuộc thì đã khóc)." },
        { q: "Ở dạng hiện tại biểu ý Chí quyết tâm mạnh mẽ: 꼭 ______.", options: ["해내고 말겠다", "해내어 버리겠다", "해내나 보다", "해낼 나위가 없다"], ans: 0, explain: "-고 말겠다 = Kì quyết, bằng mọi giá sẽ đả thông/làm được (Sẽ thi đậu bằng được!)." },
        { q: "Phân biệt -아/어 버리다 và -고 말다:", options: ["Giống nhau 100%", "-아/어 버리다 có thể mang ý nhẹ nhõm. -고 말다 thường thuần túy tiếc nuối do kết quả đi ngược nỗ lực.", "말다 là bỏ cuộc", "버리다 là văn viết"], ans: 1, explain: "Giải xong bài tập -> 다 해 버렸다 (Vui). 다 하고 말았다 (Nghe u sầu/hơi cấn trừ khi ráng sức căng mới xong)." },
        { q: "Câu CẤM kỵ:", options: ["지각을 하고 말았어요.", "시험에 떨어지고 말았어요.", "밥을 먹고 말았어요.", "날씨가 춥고 말았어요."], ans: 3, explain: "-고 말다 chỉ kết hợp với ĐỘNG TỪ, không chia trực tiếp cho TÍNH TỪ (춥다)." }
    ],
    "-기는커녕": [
        { q: "Ý nghĩa của -기는커녕 / 은/는커녕:", options: ["Chẳng những ... mà còn", "Đừng nói tới A, ngay cả B cũng không (Phủ định trầm trọng hơn)", "Chắc chắn là", "Từ từ đã"], ans: 1, explain: "A thì đừng hòng nhắc tới, B (cái tồi tệ/dễ đàng hơn) mà còn chả xong." },
        { q: "Điền từ: 칭찬을 ______ 야단만 맞았다.", options: ["받기는커녕", "받을 뿐만 아니라", "받고서도", "받는 대신에"], ans: 0, explain: "Đừng nói tới nhận Lời khen, Ngược lại bị chửi te tua." },
        { q: "Kết hợp Danh Từ: 물 ( ) 주스도 없다.", options: ["은커녕", "는커녕", "이커녕", "가커녕"], ans: 0, explain: "Danh từ có patchim: 물 -> 은커녕 (Nước còn chả có nói chi nước trái cây)." },
        { q: "Câu tương đương với -기는커녕:", options: ["-기는 고사하고", "-는 바람에", "-다시피", "-(으)메도 불구하고"], ans: 0, explain: "-기는 고사하고 có nghĩa hoàn toàn y hệt (Trợ từ 고사하다)." },
        { q: "Vế sau -기는커녕 thường là:", options: ["Một điều tốt đẹp hơn", "Một điều hiển nhiên", "Phủ định (안/못/없다) hoặc Từ mang nghĩa tiêu cực (야단을 맞다)", "Mệnh lệnh (하세요)"], ans: 2, explain: "Đừng nói tới chuyện giàu có, ngày ăn 3 bữa còn không xong." }
    ],
    "-는 통에": [
        { q: "Ý nghĩa của -는 통에:", options: ["Vì (lý do tốt)", "Do/Vì (Lý do mang tính tiêu cực do môi trường ồn ào/hỗn loạn/rối ren)", "Trong khi đang", "Xuyên qua"], ans: 1, explain: "Do cái mớ hỗn độn ồn ào đó gây ra kết quả xấu." },
        { q: "Hoàn cảnh BẮT BUỘC để xài -는 통에 là:", options: ["Khi trời mưa", "Xảy ra do một tình huống lộn xộn, mất trật tự khách quan (Ồn, đánh nhau, chen lấn...)", "Lý do nội tại của bản thân", "Khi buồn ngủ"], ans: 1, explain: "통 có nghĩa là cái thùng gõ boong boong, ý chỉ sự rầy rà lộn xộn tác động." },
        { q: "Chọn câu ĐÚNG:", options: ["아기가 우는 통에 잠을 깼어요.", "친구가 도와주는 통에 상을 받았어요.", "비가 오는 통에 기분이 좋아요.", "열심히 공부하는 통에 합격했어요."], ans: 0, explain: "Chỉ có A (Vì đứa bé khóc rống ồn ào điếc tai) mới hợp mác -는 통에." },
        { q: "Cấu trúc có thể THAY THẾ (Dù giảm sắc thái ồn ào):", options: ["-는 척하는", "-는 바람에", "-(으)ㄴ 탓에", "Cả B và C đều hợp lý thay thế."], ans: 3, explain: "Cả 바람에 (bất ngờ) và 탓에 (tại vì) đều dùng cho kết quả tiêu cực. Nhưng 통에 mang thêm sắc thái ồn ào." },
        { q: "Câu kết hợp SAI:", options: ["사람들이 떠드는 통에...", "비가 쏟아지는 통에...", "제가 아픈 통에...", "옆집이 공사하는 통에..."], ans: 2, explain: "아픈 통에 (Vì tôi ốm) -> Sai bét. Sự ốm đau là nội tại không tạo ra ngoại cảnh lộn xộn. (Phải dùng 아픈 바람에/탓에)." }
    ],
    "-는 중이다": [
        { q: "Ý nghĩa của -는 중이다 / 중이다:", options: ["Giữa chừng", "Đang trong quá trình tiến hành", "Trọng tâm", "Sắp sửa kết thúc"], ans: 1, explain: "중 (Trung) = Trong khi. Đang. (= -고 있다)." },
        { q: "Danh từ kết hợp: 공사 ( )", options: ["중이다", "는 중이다", "인 중이다", "하는 중이다"], ans: 0, explain: "Danh Từ gốc Hán + 중이다 (공사 중이다 = Đang thi công)." },
        { q: "Động từ kết hợp: 버스를 (기다리다)", options: ["기다리는 중이에요", "기다린 중이에요", "기다릴 중이에요", "기다림 중이에요"], ans: 0, explain: "Động Từ + -는 중이다 (기다리는 중이다)." },
        { q: "Tại sao nói (회의하는 중이다) nghe văn minh hơn (회의하고 있다) ở chốn công sở?", options: ["Dài hơn", "-는 중이다 mang âm hưởng trịnh trọng / trạng thái đang ráo riết làm, -고 있다 mang tính khẩu ngữ đơn thuần.", "Vì là chữ Hán", "Do sếp thích"], ans: 1, explain: "Các từ báo cáo tình huống hay dùng -중이다 (공사 중, 영업 중, 통화 중)." },
        { q: "Cấm kỵ sử dụng:", options: ["운동하는 중이다", "사는 중이다", "생각하는 중이다", "예쁜 중이다"], ans: 3, explain: "Tính từ (예쁘다) tuyệt đối không kết hợp với trạng thái tiến hành." }
    ],
    "-(으)ㄹ 뿐이다": [
        { q: "Ý nghĩa của -(으)ㄹ 뿐이다:", options: ["Ngoài ra không", "Chỉ (Duy nhất hành động đó, không có gì khác)", "Cũng là", "Thậm chí là"], ans: 1, explain: "Chỉ (Only). Chẳng qua chỉ là... thôi." },
        { q: "Chọn câu ĐÚNG:", options: ["저는 구경만 할 뿐이에요.", "저는 구경할 뿐만 아니에요.", "저는 구경할 뿐도 같아요.", "저는 구경할 수 뿐이에요."], ans: 0, explain: "Tôi chỉ đang xem thôi (Không mua đâu)." },
        { q: "Tương đương với Danh Từ:", options: ["N 밖에 없다", "N 만", "N 을 뿐이다", "Cả A và B đều mang dáng dấp 'Chỉ'"], ans: 3, explain: "Chỉ là mồ hôi thôi -> 땀일 뿐이다 ≈ 땀밖에 아니다." },
        { q: "Câu kết hợp Quá khứ: 그냥 조금 ______.", options: ["피곤했을 뿐이야", "피곤할 뿐이었어", "피곤했던 뿐이야", "피곤하는 뿐이야"], ans: 0, explain: "Góc từ + -았/었을 뿐이다 (Chỉ là TRƯỚC ĐÓ tôi hơi mệt thôi)." },
        { q: "So Sánh -(으)ㄹ 뿐이다 và -(으)ㄹ 따름이다:", options: ["Đều có nghĩa là 'Chỉ', 따름이다 trịnh trọng và văn viết hơn.", "Khác biệt hoàn toàn", "따름이다 là tương lai", "뿐이다 dùng cho danh từ"], ans: 0, explain: "따름이다 thường dùng trên tin tức hoặc trang trọng (그저 감사할 따름입니다 = Lòng chỉ biết biết ơn ngập tràn)." }
    ],
    "-기 나름이다": [
        { q: "Ý nghĩa của -기 나름이다:", options: ["Chỉ là quá khứ", "Phụ thuộc vào, Tùy vào (hành động)", "Đành phải", "Có thể là"], ans: 1, explain: "Sự diễn biến của sự việc PHỤ THUỘC VÀO kết quả/cách thức của hành động phía trước (Tùy thuộc vào việc...)." },
        { q: "Điền vào chỗ: 성공은 스스로 ______.", options: ["노력할 따름이다", "노력하기 나름이다", "노력할 리가 없다", "노력할 정도로"], ans: 1, explain: "Thành công TÙY THUỘC VÀO sự nỗ lực." },
        { q: "Với Danh Từ, kết hợp như thế nào? (Tùy thuộc vào cái tâm):", options: ["마음이다 나름이다", "마음에 나름이다", "마음 나름이다", "마음하기 나름이다"], ans: 2, explain: "Với Danh từ có thể kết hợp trực tiếp: 명사 + 나름이다 (마음 나름 = Tùy tâm)." },
        { q: "Câu tương đương với: 사람을 어떻게 대하느냐에 달려 있다.", options: ["사람을 대하기 마련이다.", "사람을 대하기 십상이다.", "사람을 대하기 나름이다.", "사람을 대할 따름이다."], ans: 2, explain: "에 달려 있다 (phụ thuộc vào) = -기 나름이다." },
        { q: "Câu SAI:", options: ["생각하기 나름입니다.", "노력하기 나름이에요.", "어제 가기 나름이었어요.", "어떻게 설명하기 나름이야."], ans: 2, explain: "-기 나름 thường mang tính chân lý ở hiện tại/tương lai, không dùng quá khứ theo kiểu 'Tùy vào việc hôm qua đã đi'." }
    ],
    "-(으)ㄹ 따름이다": [
        { q: "Ý nghĩa của -(으)ㄹ 따름이다:", options: ["Chỉ là (rất trang trọng)", "Nên là", "Chẳng hạn như", "Tuyệt đối không"], ans: 0, explain: "Mang nghĩa 'Chỉ là' (= -(으)ㄹ 뿐이다) nhưng dùng trong tin tức, phát biểu trang trọng." },
        { q: "Khách hàng ca ngợi, bạn khiêm tốn trả lời:", options: ["당연할 따름입니다.", "그저 감사할 따름입니다.", "감사하기 나름입니다.", "감사할 리가 없습니다."], ans: 1, explain: "제가 할 일을 했고, 칭찬해주시니 그저 감사할 따름입니다 (Chỉ biết lấy làm vinh hạnh/biết ơn)." },
        { q: "Điền từ: 제가 이룬 성공은 ______.", options: ["운이 좋았을 뿐만 아니라", "운이 좋았을 따름입니다", "운이 좋기 마련입니다", "운이 좋을 정도로"], ans: 1, explain: "May mắn mà thôi (Tôi chẳng tài giỏi gì -> 운이 좋았을 따름이다)." },
        { q: "Cấu trúc đồng nghĩa:", options: ["-(으)ㄹ 뿐이다", "-(으)나 마나", "-(으)ㄹ 바에야", "-거들랑"], ans: 0, explain: "뿐이다 (khẩu ngữ/đời thường). 따름이다 (phát thanh/báo chí)." },
        { q: "Chọn câu xài sai ngữ cảnh:", options: ["죄송할 따름입니다.", "부끄러울 따름입니다.", "놀라울 따름입니다.", "저 개는 귀여울 따름이야!"], ans: 3, explain: "따름이다 không dùng để diễn tả nhận định đời sống hàng ngày tùy tiện (Con chó kia chỉ dễ thương thôi). Lỗi do bối cảnh quá Informal." }
    ],
    "-아/어 가다/오다": [
        { q: "Ý nghĩa của -아/어 가다 (Go) và 오다 (Come):", options: ["Sử dụng phương tiện giao thông", "Hành động liên tục kéo dài về Tương Lai (가다) hoặc từ Quá Khứ tới Hiện Tại (오다)", "Đi và về", "Mang cái gì đó đi"], ans: 1, explain: "가다 (Từ hiện tại làm rốn tới tương lai). 오다 (Từ quá khứ ròng rã làm tới Hiện tại)." },
        { q: "Suốt 10 năm qua tôi đã học tiếng Hàn: 10년 동안 한국어를 ______.", options: ["공부해 갔어요", "공부해 왔어요", "공부해 두었어요", "공부해 버렸어요"], ans: 1, explain: "Từ quá khứ -> hiện tại: -아/어 오다 (해 왔다)." },
        { q: "Từ bây giờ, tôi sẽ sống chăm chỉ hơn! (Hiện tại -> Tương lai):", options: ["열심히 살아 갈 거예요.", "열심히 살아 올 거예요.", "열심히 살아 둘 거예요.", "열심히 살아 버릴 거예요."], ans: 0, explain: "Tiếp tục tiến về tương lai -> 살아 가다." },
        { q: "Khi nói về sự việc đang hoàn tất: 음식이 다 ______.", options: ["되어 왔어요", "되어 가요", "되어 버렸어요", "되어 놨어요"], ans: 1, explain: "되어 가다 (Đang dần xong rồi / Đang tiến lại gần tới điểm hoàn tất)." },
        { q: "Câu SAI:", options: ["할아버지는 늙어 가신다.", "전통을 잘 지켜 와야 합니다.", "지금까지 잘 견뎌 왔어요.", "앞으로도 노력해 가겠습니다."], ans: 1, explain: "잘 지켜 와야 합니다 là SAI. 지키다 từ giờ về tương lai thì phải là 지켜 가야 합니다." }
    ],
    "-아/어 대다": [
        { q: "Ý nghĩa của -아/어 대다:", options: ["Làm việc chu đáo", "Làm một hành động lặp đi lặp lại liên tục, dữ dội, dồn dập (thường mang ý tiêu cực)", "Hỗ trợ ai đó", "Không chịu làm"], ans: 1, explain: "Diễn tả sự liên tục, dai dẳng ở diện tiêu cực. (Khóc mãi, ăn mãi không ngừng)." },
        { q: "Điền từ: 아이가 밤새도록 ______.", options: ["울어 버렸어요", "울기 나름이에요", "울어 댔어요", "울어 두었어요"], ans: 2, explain: "Khóc rống lên dai dẳng dứt ruột -> 울어 대다." },
        { q: "Câu ĐÚNG nhất (phù hợp sắc thái):", options: ["선생님께서 잘 가르쳐 대십니다.", "비가 너무 많이 쏟아져 대서 홍수가 났다.", "바람이 예쁘게 불어 댑니다.", "밥을 맛있게 먹어 대요."], ans: 1, explain: "-대다 mang sắc thái phiền toái, dồn dập, bực mình. 쏟아져 대다 (mưa xối xả liên tục)." },
        { q: "Hành động ăn quá nhiều cách tiêu cực: ______ 살이 엄청 쪘다.", options: ["먹어 대려니", "먹어 대는 통에", "먹어 댈 수밖에", "먹어 대는 바람에"], ans: 3, explain: "Ăn liên mồm như lợn -> 먹어 대는 바람에/탓에 (Vì ăn dồn ăn vập nên mập)." },
        { q: "Không thể kết hợp trực tiếp với:", options: ["웃다", "놀다", "예쁘다", "울다"], ans: 2, explain: "-아/어 대다 CHỈ kết hợp với ĐỘNG TỪ (hành động lặp đi lặp lại), không kết hợp với Tính từ." }
    ],
    "-다고 하다": [
        { q: "Ý nghĩa của -다고 하다:", options: ["Yêu cầu mệnh lệnh", "Tường thuật gián tiếp CÂU KỂ (Trần thuật)", "Câu hỏi gián tiếp", "Rủ rê"], ans: 1, explain: "Trích dẫn lại một câu nói trần thuật của người khác. (Ai đó nói là...)." },
        { q: "Khi chuyển '나는 바빠요 (Tính từ)' sang gián tiếp (다고 하다):", options: ["바쁘다고 해요.", "바쁜다고 해요.", "바빠다고 해요.", "바쁠다고 해요."], ans: 0, explain: "TÍNH TỪ giữ nguyên gốc chữ: 바쁘다 -> 바쁘다고 하다." },
        { q: "Khi chuyển '영화가 재미있어요' sang gián tiếp:", options: ["재미있다고 했어요.", "재미있는다고 했어요.", "재미있어다고 했어요.", "재미있게다고 했어요."], ans: 0, explain: "있다/없다 đóng vai trò như TÍNH TỪ -> 재미있다고." },
        { q: "Khi chuyển ĐỘNG TỪ '밥을 먹어요' sang gián tiếp Hiện Tại:", options: ["먹다고 해요.", "먹는다고 해요.", "먹이다고 해요.", "먹신다고 해요."], ans: 1, explain: "ĐỘNG TỪ BẮT BUỘC dùng -ㄴ/는다고 하다. Có patchim: 먹는다고." },
        { q: "Động từ gốc Không patchim '가다':", options: ["가다고 해요", "가는다고 해요", "간다고 해요", "가셨다고 해요"], ans: 2, explain: "Không có patchim -> ㄴ다고 -> 간다고 하다." }
    ],
    "-(으)라고 하다": [
        { q: "Ý nghĩa của -(으)라고 하다:", options: ["Trần thuật", "Tường thuật câu MỆNH LỆNH / YÊU CẦU (Bảo là hãy...)", "Rủ rê", "Hỏi thăm"], ans: 1, explain: "Gián tiếp của câu cầu khiến (Hãy làm đi / V/으세요)." },
        { q: "Gián tiếp của: '창문을 여세요' (Mở cửa ra):", options: ["창문을 연다고 했어요.", "창문을 열라고 했어요.", "창문을 여느라고 했어요.", "창문을 여자고 했어요."], ans: 1, explain: "열다 (có ㄹ bị lược bỏ đi chung) -> 열라고 하다." },
        { q: "Gián tiếp của phủ định Mệnh lệnh '잊지 마세요' (Đừng quên):", options: ["잊지 말라고 했어요.", "잊지 마라고 했어요.", "잊지 마으라고 했어요.", "잊지 못한다고 했어요."], ans: 0, explain: "-지 마세요 -> -지 말라고 하다 (Bảo là đừng...)." },
        { q: "Với câu Xin xỏ '(나에게) 책을 주세요' khi trích dẫn với Vị Ngữ là Cầu Khẩn cho MÌNH:", options: ["주라고 했어요.", "달라고 했어요.", "달라고 줬어요.", "주라고 줬어요."], ans: 1, explain: "Tuyệt đối lưu ý: Nếu người nói yêu cầu TẶNG CHO BẢN THÂN NGƯỜI ĐÓ -> 달라고 하다." },
        { q: "Chuyển câu: 엄마가 동생에게 '동생 밥을 줘!'", options: ["동생에게 밥을 주라고 했어요.", "동생에게 밥을 달라고 했어요.", "동생에게 밥을 먹으라고 했어요.", "밥을 줬다고 했어요."], ans: 0, explain: "Cấp dưỡng cho NGƯỜI THỨ BA -> 주라고 하다 (Mẹ bảo hãy đưa cơm cho em)." }
    ],
    "-(으)냐고 하다 / -냐고 하다": [
        { q: "Ý nghĩa của -냐고 하다:", options: ["Mệnh lệnh", "Cầu khiến", "Tường thuật CÂU HỎI (Hỏi là... có phải / làm gì không?)", "Khuyên nhủ"], ans: 2, explain: "Câu gián tiếp chuyên dùng để Trích dẫn Câu Hỏi (Question)." },
        { q: "Gián tiếp của câu '어디에 가요?' (Hỏi động từ):", options: ["어디에 가냐고 물었어요.", "어디에 간다고 물었어요.", "어디에 가라고 물었어요.", "어디에 가자고 물었어요."], ans: 0, explain: "Động từ + -냐고 / -(느)냐고 물어보다 (가냐고 / 가느냐고)." },
        { q: "Gián tiếp Tính từ '진짜 바빠요?':", options: ["바쁘는냐고 했어요.", "바쁘냐고 했어요.", "바빠냐고 했어요.", "바쁜냐고 했어요."], ans: 1, explain: "Tính từ + -(으)냐고 / -냐고. 바쁘다 -> 바쁘냐고 (Hỏi là có thật là bận không)." },
        { q: "Câu chia SAI:", options: ["밥을 먹었냐고 물었다.", "한국 사람이냐고 물었다.", "숙제가 많냐고 물었다.", "학생하냐고 물었다."], ans: 3, explain: "Danh từ (학생) -> 이냐고/냐고. Phải là 학생이냐고 물어봤다 (Hỏi là phải học sinh không)." },
        { q: "Với động từ 살다 (Sống) trong '어디에서 살아요?':", options: ["살냐고 물었다", "사냐고 물었다", "살으냐고 물었다", "사는냐고 물었다"], ans: 1, explain: "Bất quy tắc ㄹ (살다) rụng ㄹ -> 사냐고 물었다 / 사느냐고." }
    ],
    "-자고 하다": [
        { q: "Ý nghĩa của -자고 하다:", options: ["Tường thuật RỦ RÊ (Đề nghị hãy cùng..., Let's)", "Tường thuật Yêu cầu một chiều", "Đe dọa", "Hứa hẹn"], ans: 0, explain: "Trích dẫn lời rủ rê, cùng nhau làm gì đó (-ㅂ시다 / -자)." },
        { q: "Gián tiếp của '같이 영화를 봅시다':", options: ["영화 보자고 했어요.", "영화 볼라고 했어요.", "영화 본다고 했어요.", "영화 보냐고 했어요."], ans: 0, explain: "봅시다 -> 보자고 하다 (Rủ là hãy đi xem chung)." },
        { q: "Gián tiếp '가지 맙시다' (Đừng đi):", options: ["가지 나자고 했어요.", "가지 말자고 했어요.", "가지 안자고 했어요.", "가지 무자고 했어요."], ans: 1, explain: "Phủ định kép Rủ rê (Let's not) -> -지 말자고 하다." },
        { q: "Kết hợp chia quá khứ (Đã rủ...):", options: ["밥을 먹었자고 했다.", "밥을 먹자고 했다.", "밥을 먹을자고 했다.", "밥을 먹자고 했었다."], ans: 1, explain: "Bản thân cấu trúc rủ rê (자고) không chia thì bên trong nó. Thể hiện quá khứ ở động từ chính (했다). -> 밥을 먹자고 했다." },
        { q: "Phân biệt -라고 하다 và -자고 하다. Trong câu '선생님이 조용히 하___ 하셨다' (Thầy bảo TẤT CẢ hãy im lặng). Điền từ gì khi thầy KHÔNG có trong đó?", options: ["라고", "자고", "냐고", "다고"], ans: 0, explain: "Thầy bảo học sinh im lặng (Ra lệnh) = 하라고. Không phải cùng nhau im lặng (하자고)." }
    ],
    "Dạng rút gọn: -대/래/냬/재": [
        { q: "Đây là dạng câu gì?", options: ["Từ lóng", "Dạng RÚT GỌN của 4 câu Gián Tiếp trong giao tiếp MẢI MƯỚT", "Câu cầu khiến trực tiếp", "Ngữ pháp cũ"], ans: 1, explain: "Trong khẩu ngữ, người Hàn gom chặt 4 câu Gián tiếp thành vĩ tố rút gọn này." },
        { q: "Phân tích 1: -대 (대요) là rút gọn của dòng nào?", options: ["-다고 해(요)", "-(으)라고 해(요)", "-냐고 해(요)", "-자고 해(요)"], ans: 0, explain: "(Khẳng định/Trần thuật) 다고 하다 -> 대요." },
        { q: "Phân tích 2: -래 (래요) là rút gọn của?", options: ["-다고 해요", "-(으)라고 해요", "-냐고 해요", "-자고 해요"], ans: 1, explain: "(Mệnh lệnh) 내일 오라고 하다 -> 내일 올해(요) / 내일 오래요 (Bảo là mai đến đi)." },
        { q: "Điền đúng đuôi rút gọn RỦ RÊ (자고 해요): 내일 같이 밥 ______.", options: ["먹대요", "먹래요", "먹재요", "먹냬요"], ans: 2, explain: "자고 -> 재요. (먹재요 = Nó rủ là ăn chung)." },
        { q: "Điền đúng đuôi HỎI 냐고 해요: 엄마가 너 빨리 ______.", options: ["오대요", "올래요", "오냬요", "오재요"], ans: 2, explain: "오냐고 -> 오냬요 (Mẹ có hỏi là mày có định về hay không)." }
    ],
    "피동 (이/히/리/기)": [
        { q: "Ý nghĩa của 피동 (Bị động):", options: ["Tự mình làm", "Bị động (Bị tác động bởi ngoại lực, ĐƯỢC/BỊ)", "Sai người khác làm", "Làm cho người khác"], ans: 1, explain: "Chuyển Động từ chủ động sang Bị động. (Nhìn -> Bị nhìn thấy, Mở -> Bị mở ra)." },
        { q: "Bị động của 보다 (Nhìn):", options: ["보이다", "보히다", "보리다", "보기다"], ans: 0, explain: "보이다 (Bị nhìn thấy / Lọt vào mắt)." },
        { q: "Bị động của 놓다 (Đặt, để):", options: ["놓히다", "놓이다", "놓리다", "놓기다"], ans: 1, explain: "책이 책상 위에 놓여 있다 (Sách đang ĐƯỢC ĐẶT trên bàn = 놓이다)." },
        { q: "Bị động của 열다 (Mở):", options: ["열이다", "열히다", "열리다", "열기다"], ans: 2, explain: "열리다 (Cửa ĐƯỢC MỞ = 문이 열리다)." },
        { q: "Bị động của 읽다 (Đọc):", options: ["읽이다", "읽히다", "읽리다", "읽기다"], ans: 1, explain: "책이 잘 읽힌다 (Sách được đọc trơn tru / dễ đọc)." }
    ],
    "-아/어지다 (bị động)": [
        { q: "Khi dùng -아/어지다 cho ĐỘNG TỪ, nó mang nghĩa gì?", options: ["Sự thay đổi trạng thái (Trở nên...)", "Bị động (Bị / Được làm gì đó)", "Mệnh lệnh", "Chắc chắn là"], ans: 1, explain: "Khi gắn với TÍNH TỪ (예뻐지다) thì là 'Trở nên'. Khi gắn với ĐỘNG TỪ (만들다 -> 만들어지다) thì là Bị Động (Được tạo ra)." },
        { q: "Cấu trúc Bị động đúng của '정하다' (Định, Quyết định):", options: ["정해지다 (Được quyết định)", "정히다", "정리다", "정시기다"], ans: 0, explain: "Các động từ 하다 thì chuyển thành bị động là -해지다 (정해지다)." },
        { q: "Bị động của '주어지다':", options: ["기회가 주어지다 (Cơ hội ĐƯỢC trao cho)", "주히다", "줄리다", "주기다"], ans: 0, explain: "주다 -> 주어지다 (Được trao/ Được ban cho)." },
        { q: "Câu SAI:", options: ["글씨가 잘 지워져요.", "비밀이 밝혀졌어요.", "시계가 고쳐진다.", "시계가 고친다."], ans: 3, explain: "고치다 (Sửa) -> Bị động phải là 고쳐지다 (Đồng hồ ĐƯỢC sửa)." },
        { q: "Tại sao nói '쓰여지다' là cách dùng không chuẩn?", options: ["Vì là thì quá khứ", "Vì nó là BỊ ĐỘNG KÉP (쓰다 + 이 + 어지다)", "Vì nó là từ mượn", "Vì quá ngắn"], ans: 1, explain: "쓰다 (Viết). Bị động đúng là 쓰이다 (Được viết). Nếu nói 쓰여지다 (쓰이다 + 어지다) là Bị động kép, ngữ pháp chuẩn không khuyến khích dù đời sống có dùng." }
    ],
    "사동 (이/히/리/기/우/추)": [
        { q: "Ý nghĩa của 사동 (Sai khiến):", options: ["Tự mình làm", "Làm cho (người khác/vật khác) làm một hành động (Cho ăn, Bắt mặc, Kéo dài...)", "Bị người ta đánh", "Mong muốn"], ans: 1, explain: "Sai khiến, bắt buộc hoặc khiến cho đối tượng khác có trạng thái/hành động đó." },
        { q: "Sai khiến của 먹다 (Cho ăn):", options: ["먹이다", "먹히다", "먹우다", "먹기다"], ans: 0, explain: "아이에게 밥을 먹이다 (Cho đứa trẻ ăn)." },
        { q: "Sai khiến của 넓다 (Mở rộng, làm cho rộng):", options: ["넓히다", "넓기다", "넓추다", "넓이다"], ans: 0, explain: "도로를 넓히다 (Làm cho đường rộng ra / Mở rộng đường)." },
        { q: "Sai khiến của 깨다 (Đánh thức, làm cho tỉnh / thức giấc):", options: ["깨우다", "깨히다", "깨리다", "깨이다"], ans: 0, explain: "아기를 깨우다 (Đánh thức đứa bé)." },
        { q: "Sai khiến của 낮다 (Làm cho thấp xuống / Hạ thấp):", options: ["낮추다", "낮이다", "낮히다", "낮우다"], ans: 0, explain: "온도를 낮추다 (Hạ nhiệt độ)." }
    ],
    "-게 하다": [
        { q: "Ý nghĩa của -게 하다:", options: ["Gây ra, Làm cho (Ai đó làm gì / Ai đó trở nên thế nào)", "Nếu làm vậy", "Cho tới khi", "Phỏng đoán"], ans: 0, explain: "Cấu trúc Sai khiến dài (Khiến cho/Làm cho/Bắt phải/Để cho)." },
        { q: "Điền vào chỗ trống: 엄마가 아이에게 방을 청소하______.", options: ["게 하셨어요", "는 한", "기 마련이에요", "는 김에"], ans: 0, explain: "Mẹ đã BẮT/KÊU đứa con dọn phòng (청소하게 하다)." },
        { q: "Phân biệt -게 하다 và dạng Sai khiến ngắn (-이/히...): 엄마가 아이에게 옷을 입히다 vs 옷을 입게 하다.", options: ["Không khác gì", "입히다 (Mẹ tự tay mặc đồ cho con). 입게 하다 (Mẹ bắt/bảo con hãy tự mặc đồ đi).", "입히다 là cho người lớn", "입게 하다 là thụ động"], ans: 1, explain: "Sai khiến ngắn mang ý nghĩa Trực tiếp thò tay làm giúp. Sai khiến dài (-게 하다) mang ý Gián tiếp (chỉ đạo bằng mồm)." },
        { q: "Làm cho tâm trạng tốt: 음악은 나를 기분 좋______.", options: ["게 한다", "는다면 좋겠다", "게 마련이다", "기 일쑤다"], ans: 0, explain: "Âm nhạc làm cho con tim tôi vui -> 기분 좋게 한다." },
        { q: "Câu SAI:", options: ["동생을 울게 했어.", "친구를 기다리게 했어.", "내가 비를 오게 했어.", "환자를 편안하게 해 주세요."], ans: 2, explain: "Tôi BẮT/KHIẾN trời mưa -> Sai về mặt tự nhiên (Trừ khi là thần thánh). -게 하다 thường dùng cho con người/tâm lý." }
    ],
    "-기에": [
        { q: "Ý nghĩa của -기에:", options: ["Chỉ là", "Vì (rằng/bởi lẽ) / Để mà (khi nói về sự phán đoán)", "Nhưng", "Trong lúc"], ans: 1, explain: "Có 2 nghĩa chính: 1. Nguyên nhân (Vì). 2. Để (Nói về hoàn cảnh thích hợp làm gì: 살기에 좋다)." },
        { q: "Dùng để đánh giá mức độ: 아이가 먹______ 너무 맵다.", options: ["을 뿐더러", "기에", "는 법이라서", "는 척해서"], ans: 1, explain: "A이가 먹기에 (Để cho bọn trẻ ăn thì cay quá)." },
        { q: "Dùng làm NGUYÊN NHÂN (thường đi với các câu hỏi hoài nghi): 너가 도대체 누구______ 나한테 명령을 해?", options: ["라서", "기 위해", "기에", "기커녕"], ans: 2, explain: "누구기에 (Mày rốt cuộc là cái thá gì MÀ (VÌ MÀ) mày ra lệnh cho tao?). Rất hay xuất hiện trong phim Hàn." },
        { q: "Mẫu câu quen thuộc đánh giá địa điểm: 이 동네는 조용해서 살______.", options: ["기 마련이에요", "기 나름이에요", "기에 좋아요", "길래 좋아요"], ans: 2, explain: "살기에 좋다 = Tốt cho việc sống (Rất đáng sống)." },
        { q: "Sự khác biệt với -기 때문에:", options: ["Giống hệch", "-기에 mang tính đánh giá, phán đoán cá nhân chủ quan nhiều hơn; ít dùng trong báo cáo khách quan.", "-기에 là cấp thấp", "-때문에 dùng cho động vật"], ans: 1, explain: "기에 thường mang tính chủ quan cảm tính (Ví dụ: Vì thấy nó tội tội nên tôi nhường = 아프기에 양보했다)." }
    ],
    "-길래": [
        { q: "Ý nghĩa của -길래:", options: ["Hướng đi", "Tại vì (Dùng trong văn nói/khẩu ngữ)", "Mặc dù", "Để"], ans: 1, explain: "Là dạng khẩu ngữ cực kỳ phổ biến của -기에 (Vì thấy/ Vì rằng gốc là...)." },
        { q: "Cấu trúc điển hình: Vì thấy trời mua (nên tôi đã mang dù). 비가 오______ 우산을 가져왔어.", options: ["기에", "길래", "기 때문에", "Cả A và B đều đúng. (Nhưng B tự nhiên hơn trong giao tiếp)"], ans: 3, explain: "기에 thiên về viết, 길래 100% khẩu ngữ giao tiếp hằng ngày (Vì ngó thấy mưa nên tui xách dù đi)." },
        { q: "Điền vào chỗ hỏi cung: 대체 왜 그______ 안 오는 걸까?", options: ["길래", "기만 하면", "는 편이라서", "는 바람에"], ans: 0, explain: "왜 그렇길래 (Bị cái giống ôn gì MÀ lại không đến nhỉ?)." },
        { q: "Luật ngầm của -길래 (Nguyên nhân): Đầu vào là gì và đầu ra thế nào?", options: ["Đầu vào là hành động ngôi thứ 3/Ngoại cảnh. Đầu ra phải là hành động PHẢN ỨNG CỦA BẢN THÂN NGƯỜI NÓI (Ngôi 1).", "Thích dùng sao dùng", "Chỉ dùng cho tương lai", "Chỉ dùng cho câu mệnh lệnh"], ans: 0, explain: "Vế 1 là lý do mình quan sát thấy (Nó khóc, Trời mưa, Đồ rẻ). Vế 2 là BẢN THÂN mình mới phản ứng (Nên tao dỗ, Tao lấy ô, Tao mua)." },
        { q: "Vì lý do đó, câu nào SAI KHIẾP ĐẢM?", options: ["세일하길래 제가 많이 샀어요.", "배가 고프길래 밥을 먹었어요. (Tự quan sát bản thân đói cũng okee)", "친구가 가길래 나도 갔어.", "내가 많이 먹길래 배가 아팠어."], ans: 3, explain: "내가 많이 먹길래 (Vì tao thấy TAO ăn nhiều) -> Chứ không lẽ MÀY không biết thân xác mày ăn nhiêu? Rất phi cú pháp phân thân. Tự nhiên nhất là 내가 많이 밥을 먹어서." }
    ],
    "-(으)ㄴ/는 이상": [
        { q: "Ý nghĩa của -(으)ㄴ/는 이상:", options: ["Cao cấp", "Một khi đã... thì (Sự đã rồi, kéo theo một điều kiện tất yếu)", "Trái ngược", "Cho dù"], ans: 1, explain: "-이상 (Dĩ Thượng = Một khi đã lên thớt/ Một khi đã quyết)." },
        { q: "Điền từ: 약속을 (하다) ______ 지켜야지.", options: ["하는 이상", "한 이상", "할 이상", "하자마자"], ans: 1, explain: "약속을 한 이상 (Một khi đã hứa rồi thì... phải giữ lấy)." },
        { q: "Hàm ý theo sau -이상 thường là:", options: ["Tâm trạng vui vẻ", "Mệnh lệnh, Nghĩa vụ, Quyết tâm (Phải làm gì, Sẽ làm gì)", "Cảm giác sốc", "Câu hỏi nghi vấn"], ans: 1, explain: "Một khi đã bắt đầu thì PHẢI LÀM TỚI CÙNG (끝까지 해야 한다)." },
        { q: "Đây là ngữ pháp tương đương Đỉnh cao nhất của -이상:", options: ["-는 동안", "-(으)ㄴ/는 바에야", "-는 바람에", "-(으)ㄴ/는 탓에"], ans: 1, explain: "한 이상 = 한 바에야 (Một khi đã trót/đã cất công làm)." },
        { q: "Câu chứa -이상 SAI logic:", options: ["도착한 이상 쉴 수밖에 없다.", "시작한 이상 끝을 봐야 한다.", "취직한 이상 지각을 해서는 안 된다.", "제가 한국인인 이상 영어를 못 합니다."], ans: 3, explain: "Tôi là người Hàn một khi đã vậy thì tôi không giỏi Tiếng Anh -> Phi logic và sượng. 이상 nói về sự đã Trót nhận trách nhiệm/hoàn cảnh có xu thế nỗ lực." }
    ],
    "-(으)ㄴ/는 한": [
        { q: "Ý nghĩa của -(으)ㄴ/는 한:", options: ["Hàn Quốc", "Chỉ một lần", "Chừng nào mà... thì (Giới hạn/Điều kiện)", "Mặc dù"], ans: 2, explain: "한 (Hạn = Giới hạn). Chừng nào việc phía trước còn duy trì, thì phía sau vẫn tiếp diễn." },
        { q: "Điền từ: 포기하지 않______ 희망은 있다.", options: ["아도", "는 한", "는 이상", "는 대신에"], ans: 1, explain: "포기하지 않는 한 (Chừng nào mà bạn chưa từ bỏ, thì hi vọng chừng đó vẫn còn)." },
        { q: "Cách hiểu ĐÚNG cho: 내가 살아 있는 한 널 지켜줄게.", options: ["Tao mà sống tao sẽ giết mày.", "Chừng nào cái mạng tao còn sống, tao sẽ bảo vệ mày.", "Thà tao sống.", "Vì tao sống."], ans: 1, explain: "살아 있는 한 = As long as I am alive." },
        { q: "Dùng để bày tỏ khả năng cao nhất có thể: 제가 (알다) ______ 한...", options: ["알은 한", "알는 한", "아는 한", "알던 한"], ans: 2, explain: "Bất quy tắc ㄹ (알다 -> 아는 한: Theo như GIỚI HẠN những gì tôi biết thì...)." },
        { q: "Phân biệt -(으)ㄴ/는 이상 và -(으)ㄴ/는 한:", options: ["Hoàn toàn giống nhau", "-이상 (Sự việc ĐÃ/CHẮC CHẮN xảy ra, một khi cất bước). -한 (Chỉ là GIẢ ĐỊNH giới hạn).", "이상 là quá khứ", "한 là tích cực"], ans: 1, explain: "결정한 이상 (Một khi ĐÓNG MỘC quyết rồi). 내가 여기 있는 한 (Chừng nào tao giả sử còn ở đây tao sẽ gánh mày)." }
    ],
    "-(으)ㄹ지라도": [
        { q: "Ý nghĩa của -(으)ㄹ지라도:", options: ["Mong muốn", "Cho dẫu, Bất chấp, Dù cho (Cực kỳ nặng đô)", "Khoảng độ", "Sau khi"], ans: 1, explain: "Biểu hiện tương đương với -아/어도 nhưng mang tính Tuyên Ngôn mạnh bạo, thường dùng trong Văn Viết / Giải trình." },
        { q: "Câu ví dụ: 실패______ 다시 도전할 것이다.", options: ["할지라도", "하는 이상", "하는 한", "할 바에야"], ans: 0, explain: "실패할지라도 (Cho dù có ngã sấp mặt vấp ngã thất bại thì... tao vẫn chiến tiếp!)." },
        { q: "Thay thế tương đương cho -(으)ㄹ지라도:", options: ["-(으)ㄹ망정 / -더라도", "-아/어서는", "-(으)나 마나", "-기 십상이다"], ans: 0, explain: "할지라도 = 하더라도 = 할망정. Đều thuộc gia phả 'Cho Dù' cứng cựa!" },
        { q: "Với Tính từ (가난하다): ______ 정직하게 살겠다.", options: ["가난할지라도", "가난하는 이상", "가난할 김에", "가난한가 하면"], ans: 0, explain: "가난할지라도 (Cho chẫu tột cùng nghèo túng... tao vẫn sống sạch)." },
        { q: "Đặc điểm của Vế 2 sau -(으)ㄹ지라도:", options: ["Phải là Quá khứ", "Thường mang Ý chí, Quyết tâm tột độ (Sẽ, Phải) hoặc Hành động đảo ngược hoàn toàn logic thông thường.", "Cấm dùng Mệnh lệnh", "Chỉ dùng khi kể khổ"], ans: 1, explain: "Đã 'Cho dẫu' thì phải tung Cước Ý Chí (나는 포기하지 않겠다!)." }
    ],
    "-는가 하면": [
        { q: "Ý nghĩa của -는가 하면:", options: ["Phỏng đoán", "Nếu muốn", "Không những... mặt khác lại có Vấn đề Trái Ngược/Thêm vào", "Thỉnh thoảng"], ans: 2, explain: "Có A... thì cùng lúc đó mặt khác lại có B. Tương đương [한편으로 / 또 한편으로]." },
        { q: "Thường dùng trong liệt kê các TÍNH CHẤT TRÁI NGƯỢC trong cùng 1 chủ thể/tập thế: 교실에서 공부하는 학생이 ______ 잠을 자는 학생도 있다.", options: ["있는가 하면", "있을지라도", "있기 나름이라서", "있는 탓에"], ans: 0, explain: "Bên trong lớp học: CÓ đứa thì học sấp mặt (-는가 하면) mặt khác CÓ đứa thì nướng khét lẹt." },
        { q: "Có mang tính Bổ sung tích lũy không? (Ví dụ: Chồng tôi kiếm tiền giỏi NỮA MẶT LẠI làm nấu ăn siêu).", options: ["Chỉ biểu thị trái ngược", "Có, nó dùng để CHẤT ĐỐNG sự kiện (= മാത്രമല്ല/ -을 뿐만 아니라).", "Tuyệt đối không", "Chỉ dùng cho động vật"], ans: 1, explain: "그는 돈을 잘 버는가 하면, 집안일도 잘한다 (Vừa giỏi kiếm tiền, VỪA LẠI giỏi cả việc nhà)." },
        { q: "Kết hợp với Quá khứ: 눈이 (오다) ______ 비가 오기도 했다.", options: ["왔는가 하면", "올가 하면", "오는가 하면", "왔던가 하면"], ans: 0, explain: "Hoàn toàn thêm -았/었 được: 왔는가 하면 (Lúc thì có tuyết rơi, mặt khác cũng nhè nhẹ mưa)." },
        { q: "Phân biệt -는가 하면 vs -(으)면서:", options: ["Giống khuân", "면서 (Vừa Vừa - 1 cá nhân làm 2 hành động Cùng 1 Thời Điểm Vật Lý). -는가 하면 (Nhìn 2 Mặt Lập Trường / Xu hướng trong 1 chủ thể).", "하면 là điều kiện tốt", "하면서 nghèo nàn hơn"], ans: 1, explain: "밥을 먹으면서 티비를 본다 (Miệng nhai, mắt xem tivi Cùng 1 Giây). 착한가 하면, 무섭기도 하다 (Bản chất con người, lúc thiện lúc ác - tính xu thế đa diện)." }
    ],
    "-(으)ㄹ 바에(야)": [
        { q: "Ý nghĩa của -(으)ㄹ 바에야:", options: ["Khoảng chừng độ đó", "Để làm việc đó", "Thà... còn hơn (Nếu bắt phải làm cái A gớm ghiếc, thì THÀ làm cái B còn đỡ hơn!)", "Ngay sau khi"], ans: 2, explain: "Vế 1 (Bất mãn vô cùng, chê). Vế 2 (Đề xuất giải pháp Thà chết còn hơn, hoặc Cái biện pháp đỡ ớn hơn)." },
        { q: "Điền câu 'Thà đi bộ còn hơn đi cái đồ xe buýt ếch ộp đó': 그 버스를 ______ 차라리 걸어가겠어.", options: ["탈 바에야", "타는 한", "타는 이상", "타기 나름이라서"], ans: 0, explain: "탈 바에야 (Nếu mà phải đu xe buýt đo -> Thà đi bộ)." },
        { q: "Từ bổ trợ quyền lực LUÔN LUÔN theo cặp với -(으)ㄹ 바에야:", options: ["비록", "차라리 (Thà rằng/Tốt hơn hết)", "아무리", "오히려"], ans: 1, explain: "Combo hủy diệt thi TOPIK II: [ -ㄹ 바에야 ...... 차라리 ...겠다 ]." },
        { q: "Tương đương với cấu trúc nào?", options: ["-느니 차라리", "-다시피", "-(으)ㄴ 탓에", "-(으)ㄹ 정도로"], ans: 0, explain: "Cùng gia phả 'THÀ ...' là 느니 차라리." },
        { q: "Câu thể hiện sự 'Bất lực' nhưng quyết đoán mãnh liệt: 이왕 (đã trót) ______ 제대로 해야지.", options: ["할 바에야", "할 뿐만 아니라", "할 리가 없다", "하는 통에"], ans: 0, explain: "이왕 할 바에야 최선을 다합시다 (Một khi Đã trót/Thà vấy tay làm con mẹ nó rồi thì làm cho Tới bến đi!)." }
    ],
    "-고 보니": [
        { q: "Ý nghĩa của -고 보니:", options: ["Kết luận", "Sau khi làm (thử) hành động A, thì nhận ra/phát hiện ra sự thật B", "Mặc dù", "Cố tình"], ans: 1, explain: "Làm xong mới biết/nhận ra sự thật bất ngờ." },
        { q: "Điền từ: 직접 말을 (하다) ______ 참 좋은 사람이었다.", options: ["하고 보니", "할지 모르다", "하느니 차라리", "하기 십상이다"], ans: 0, explain: "하고 보니 (Thử nói chuyện tiếp xúc XONG MỚI BIẾT nó là ngừi tốt)." },
        { q: "Vế 2 sau -고 보니 thường là gì?", options: ["Phủ định", "Mệnh lệnh (하세요)", "Nội dung nhận thức/sự thật được khám phá (알게 되다, 였다...)", "Rủ rê"], ans: 2, explain: "Đã 'nhận ra/khám phá' thì vế 2 phải là sự nhận thức (-였어요, -알게 되었어요...)." },
        { q: "Tương đương với cấu trúc nào?", options: ["-아/어 보니까", "-(으)ㄴ/는 대신에", "-고도", "-길래"], ans: 0, explain: "-고 보니 và -아/어 보니까 đều có nghĩa là 'Làm A trải nghiệm rồi thì thấy B'." },
        { q: "Câu chứa -고 보니 SAI:", options: ["알고 보니 그 친구가 도둑이었다.", "살고 보니 인생이 짧다.", "먹고 보니 맛이 없다.", "공부하고 보니 빨리 자세요."], ans: 3, explain: "Vế sau không thể là câu Mệnh lệnh/Cầu khiến (Hãy đi ngủ nha)." }
    ],
    "-고자": [
        { q: "Ý nghĩa của -고자:", options: ["Nguồn gốc", "Để / Cố ý (Thể hiện mục đích, dự định) cực kỳ trang trọng", "Do đó", "Tuy nhiên"], ans: 1, explain: "Chuyên xài trong Diễn văn/Viết lách/Phát biểu. Nghĩa là 'ĐỂ' (= -(으)려고)." },
        { q: "Điền câu: 오늘 이 회의를 ______ 개최했습니다.", options: ["시작할 바에야", "시작하고자", "시작할 겸", "시작하는 통에"], ans: 1, explain: "시작하고자 (Để bắt đầu/ Nhằm mục đích khởi động)." },
        { q: "Biến thể đuôi câu của -고자 (Mục đích của tôi là để...):", options: ["-고자 합니다", "-고자 해요", "-고자 마련이에요", "Cả A và B đúng, nhưng A phổ biến hơn"], ans: 3, explain: "Mẫu câu siêu kinh điển ở vòng phỏng vấn: -하고자 합니다 (Định/Dự định/Nhằm)." },
        { q: "Quy tắc CẤM KỴ đối với -고자:", options: ["Chỉ dùng hiện tại", "Không dùng chung với Mệnh lệnh / Cầu khiến ở vế Cố ý", "Tuyệt đối K H O N G T C chia Quá Khứ / Tương Lai ở vế sau", "Tuyệt đối không chia CÁC THÌ ở cái động từ có gắn -고자 (VD: 샀고자 -> SAI Lòi Kèn)."], ans: 3, explain: "-고자 chỉ gắn vào nguyên gốc động từ. (사고자, 가고자)." },
        { q: "Tương đương kém lịch sự hơn:", options: ["-(으)려고", "-(으)ㄹ 지경이다", "-(으)라고", "-(으)ㄹ 바에야"], ans: 0, explain: "하려고 (Tôi định làm) -> Bạn bè. 하고자 (Tôi chủ trương nhằm làm) -> Đối tác/Hội thảo." }
    ],
    "-(으)ㄹ지 모르다": [
        { q: "Ý nghĩa của -(으)ㄹ지 모르다:", options: ["Biết đâu chừng / Không biết chừng sẽ (Nói về điều không chắc chắn)", "Không biết làm cách nào", "Chắc chắn là không", "Tại sao không"], ans: 0, explain: "Dự đoán xác suất/khả năng không lường trước được (Biết đâu hôm nay mưa)." },
        { q: "Chia tính từ: 내일 날씨가 비가 (오다) ______ 우산을 챙기자.", options: ["올지 몰라서", "올 뿐만 아니라", "올 나위가 없어서", "올 통에"], ans: 0, explain: "올지 몰라서 (Vì không biết chừng ngày mai có mưa hay không, nên hãy đem ô)." },
        { q: "Kết hợp thường xuyên với:", options: ["만약", "혹시라도 / 혹시", "절대로", "결코"], ans: 1, explain: "혹시 (비가 올지 몰라서) ... (Cứ đem theo phòng xa LỠ NHƯ / BIẾT ĐÂU LÀ sự việc A xảy ra)." },
        { q: "Nếu dùng -(으)ㄹ지 알다 ở vị trí tương đương thì ra nghĩa gì?", options: ["Giống nhau", "Tôi có ngờ đâu / Tôi đã biết sẽ... (Tôi cứ tưởng...)", "Không có cấu trúc 알다", "Dùng cho động vật"], ans: 1, explain: "합격할 줄 알았어 (Tao CỨ NGỠ LÀ dậu rồi / Tao biết thế đéo nào cũng đậu)." },
        { q: "Cách nói Quá khứ cho -(으)ㄹ지 모르다:", options: ["-았던지 모르다", "-았/었을지 모르다", "-을지 않았어 모르다", "Không chia quá khứ"], ans: 1, explain: "동생이 방을 이미 청소했을지 모르니까 내가 안 할 거야 (Biết đâu chừng thằng em ĐÃ dọn nát cái phòng rồi nên tao ếu làm đâu)." }
    ],
    "-는가/나 싶다": [
        { q: "Ý nghĩa của -는가/나 싶다:", options: ["Chắc là, Có vẻ như (Sự phỏng đoán dè dặt, lo âu từ trong thâm tâm)", "Chính xác là 100%", "Muốn làm", "Tại sao muốn"], ans: 0, explain: "싶다 (Ngoài nghĩa = Muốn khi đi với 고), thì khi đứng 1 mình nó mang nghĩa phỏng đoán mềm mỏng (Có vẻ chăng)." },
        { q: "Điền tính từ: 비가 ______.", options: ["오는가 싶다 (Có vẻ trời đang mưa)", "올래 싶다", "올 지경 싶다", "오는 통에 싶다"], ans: 0, explain: "비가 오는가 싶다 (Cứ có cảm giác hình như trời đang tụ mây đi mưa chăng)." },
        { q: "Cảm giác e dè lo lắng: 이렇게 해도 ______.", options: ["되는가 싶다", "되는 바람에", "되는 이상", "되느니 차라리"], ans: 0, explain: "Cảm thấy áy náy sợ sai (Làm thế này không biết có ổn không ta...)." },
        { q: "Điểm LIÊN QUAN chặt chẽ với -(으)ㄹ까 보다:", options: ["Khác biệt", "Cả hai đều chứa cảm giác Lo xa/ Sợ sệt/ Phỏng đoán rụt rè.", "Một cái tốt 1 cái xấu", "Cái sau là Văn viết"], ans: 1, explain: "비가 올까 봐 걱정이다 ≈ 비가 올까 싶어 걱정이다." },
        { q: "Phân biệt Tính/Động từ:", options: ["Đều dùng chung hết", "Tính từ (-ㄴ/은가 싶다). Động từ (-는가 싶다 / -나 싶다).", "Muốn dùng nào dùng", "Chỉ động từ mới đi với 싶다"], ans: 1, explain: "어려운가 싶다 (Tính từ). / 비가 오나 싶다 (Động từ)." }
    ],
    "-고도": [
        { q: "Ý nghĩa của -고도:", options: ["Mặc dù đã ... (Nhấn mạnh sự mâu thuẫn bất ngờ, chê trách)", "Và cũng", "Nhưng cũng", "Muốn có"], ans: 0, explain: "Câu dèm pha cực dính. Mặc kệ sự việc A, làm trái khoáy ra sự nghiệp B." },
        { q: "Chọn ví dụ đỉnh cao của -고도:", options: ["보고도 모른 척했다 (Thấy rành rành MÀ CÒN giả bộ không biết).", "먹고도 굶었다.", "자고도 일했다.", "울고도 웃었다."], ans: 0, explain: "보고도 모른 척했다. Cực kỳ trách móc sự tệ bạc (Sự thật hiển nhiên nhưng éo thèm thay đổi)." },
        { q: "Điền từ: 큰 실수를 ______ 사과하지 않았다.", options: ["하고도", "할지라도", "하는 이상", "할 겸"], ans: 0, explain: "Làm sai tổ chảng VẬY MÀ CŨNG (MÀ CÒN Đ.É.O) đi xin lỗi." },
        { q: "Có thể thay thế nhẹ hơn bằng:", options: ["-아/어 봐야", "-는데도", "-길래", "-(으)ㄴ 탓에"], ans: 1, explain: "실수를 했는데도 (Đã phạm sai lầm rồi vậy mà... vẫn không xin lỗi)." },
        { q: "Bổ trợ Quá Khứ của -고도 nằm ở đâu?", options: ["Ở đầu", "Ở cuối", "Không dùng Quá khứ", "Luôn nằm ở cái Động từ đuôi chốt câu. Cấm gắn -았/었- vào trước -고도."], ans: 3, explain: "많이 먹었고도 (SAI bét) -> 많이 먹고도 배가 고팠다 (Gắn quá khứ ở cuối)." }
    ],
    "-(으)ㄹ 게 뻔하다": [
        { q: "Ý nghĩa của -(으)ㄹ 게 뻔하다:", options: ["Đáng để", "Biết chắc chắn mười mươi sẽ / Rõ rành rành ra đó (Dự đoán một kết quả xấu/tiêu cực trơ trẽn ra)", "Chắc là", "Phải làm"], ans: 1, explain: "뻔하다 = trơ mặt rành rành. (Biết chắc chắn sẽ thế nào)." },
        { q: "Câu dự đoán hiển nhiên xấu tí: 안 봐도 ______.", options: ["뻔하다", "나위가 없다", "바에야", "마련이다"], ans: 0, explain: "안 봐도 뻔하다 = Chả cần nhìn cũng BÍT THỪA." },
        { q: "Điền từ: 공부를 안 했으니 시험에 ______.", options: ["떨어질 게 뻔하다", "떨어질 리가 없다", "떨어질 통에", "떨어질 바에야"], ans: 0, explain: "Rớt là RÕ RÀNG / TRẮNG MẮT ra đó (không trượt đi đâu được)." },
        { q: "Tương đương nhẹ hơn nhưng đồng dạng phỏng đoán CHẮC NỊCH:", options: ["-(으)ㄹ 텐데", "-(으)ㄹ 지경이다", "-(으)ㄹ 바에야", "-(으)ㄹ 리 만무하다"], ans: 0, explain: "-ㄹ 게 뻔하다 ≈ (분명히 / 틀림없이) -ㄹ 것이다." },
        { q: "Câu này ĐÚNG hay SAI: 로또에 당첨될 게 뻔하다.", options: ["Đúng", "SAI, vì -ㄹ 게 뻔하다 dùng cho việc rành rành, trúng số là kỳ tích vạn phần ngẫu nhiên, không thể dùng 뻔하다 nhìn xuyên thấu kiểu đó trừ khi là tiên tri dỏm.", "Phải dùng Quá khứ", "Nói gì cũng được"], ans: 1, explain: "뻔하다 thường đi với những hệ quả tất yếu do hành vi (Không học -> rớt, Lười -> nghèo), không dùng cho xác suất đỏ đen." }
    ],
    "-기 / -(으)ㅁ": [
        { q: "Ý nghĩa của Danh từ hóa -기 / -(으)ㅁ:", options: ["Giới từ", "Biến Động Từ / Tính Từ thành Danh Từ hoàn chỉnh. (Sự..., Việc...)", "Quá khứ", "Hiện tại phân từ"], ans: 1, explain: "Viết lách, thông báo, ghi chú, TOPIK Viết Câu 51." },
        { q: "Khi nào xài -기, khi nào xài -(으)ㅁ?", options: ["Muốn xài nào xài", "-기 (Thường dùng cho thói quen, kế hoạch tương lai, danh sách làm việc, hoặc làm thành phần câu). -(으)ㅁ (Chuyên dùng để báo cáo sự thật, kết luận 1 đoạn văn viết mộc mạc, biển báo thông báo).", "기 là văn viết", "ㅁ là trẻ trâu"], ans: 1, explain: "Bảng thông báo hay dùng -기 (안내하기), Kết luận báo cáo dùng -ㅁ (발견되었음)." },
        { q: "Đổi 살다 sang dạng -(으)ㅁ (Bất quy tắc ㄹ):", options: ["살음", "살음이", "삶", "사음"], ans: 2, explain: "살다 rụng tà thành chữ 삶 (Cuộc sống)." },
        { q: "Tuyệt đỉnh kết thúc Câu 51 TOPIK II: Nếu câu hỏi cho form: ... 감사드립니__.", options: ["기", "다", "까", "다 / 까?"], ans: 1, explain: "Câu 51 TOPIK II kết câu theo formal nhưng nếu có -기로 하거나 / -기 바랍니다... thì phải cẩn thận." },
        { q: "Thông báo cấm mở cửa (열다) viết ngắn trên biển hiệu dùng -기:", options: ["여기 금지", "열음 금지", "열기 금지", "열지 마 금지"], ans: 2, explain: "열기 금지 (Việc mở: CẤM)." }
    ],
    "-(으)ㄴ/는 덕분에": [
        { q: "Ý nghĩa của -(으)ㄴ/는 덕분에:", options: ["Tại vì (tiêu cực)", "Nhờ có, Nhờ ơn (Vì một nguyên nhân mà dẫn đến Kết quả TỐT)", "Sau khi", "Mặc dù"], ans: 1, explain: "Chỉ và LUÔN dùng cho KẾT QUẢ TÍCH CỰC (Thanks to)." },
        { q: "Điền từ: 선생님이 도와주신 ______ 합격했어요.", options: ["바람에", "탓에", "덕분에", "통에"], ans: 2, explain: "Nhờ cô gánh nên em pass -> 덕분에." },
        { q: "Với Danh Từ (선생님):", options: ["선생님인 덕분에", "선생님 덕분에", "선생님의 덕분에", "선생님 덕분이다"], ans: 1, explain: "Danh Từ gắn thẳng trực tiếp 'N + 덕분에'." },
        { q: "Câu bị LIỆT NGỮ PHÁP (Toang điểm):", options: ["친구 덕분에 돈을 벌었다.", "늦잠을 자는 덕분에 지각을 했다.", "한국어 덕분에 취업했다.", "약 덕분에 병이 나았다."], ans: 1, explain: "Đi trễ (지각) là chuyện buồn/phạt, không bao giờ đem 'Nhờ có' ra cợt nhả vụ trễ giờ! (Trừ khi khiêu khích)." },
        { q: "Thay thế tương đương cho -(으)ㄴ/는 덕분에:", options: ["-(으)ㄴ 은혜로", "-(으)ㄴ/는 바람에", "-(으)ㄴ 탓에", "-아/어서"], ans: 3, explain: "-아/어서 (Vì...nên) dùng trung lập kết quả tích lận tiêu cực nên có thể thay thế dễ nhất." }
    ],
    "-(으)ㄴ/는 탓에": [
        { q: "Ý nghĩa của -(으)ㄴ/는 탓에:", options: ["Nhờ có", "Tại vì (Lỗi, đổ lỗi cho nguyên nhân gây ra kết quả TIÊU CỰC trầm trọng)", "Thành ra", "Hơn nữa"], ans: 1, explain: "Chuyên môn xé vé phạt (Tại lỗi của mày...)." },
        { q: "Điền từ: 눈이 많이 ______ 길이 막힌다.", options: ["온 탓에", "오 탓에", "오는 탓에", "오기 탓에"], ans: 0, explain: "온 탓에 (Vì trận tuyết khốn kiếp mà kẹt xe cứng ngắc). *Dùng -(으)ㄴ 탓에 cho quá khứ." },
        { q: "Tính chất So Tánh: 탓에 vs 바람에:", options: ["Đều chung mục đích Đổ lỗi cho Kết quả Xấu. Nhưng 바람에 thiên về sự Đột Ngột Khách Quan. 탓에 thiên về Lỗi lầm bản nguyên.", "Khác xa nhau", "탓에 là tốt", "바람에 tích cực"], ans: 0, explain: "내 탓이다 (Do tội tôi). 비가 오는 바람에 (Do cơn mưa rào cản mũi)." },
        { q: "Kết hợp Danh từ: 스트레스 ( )", options: ["인 탓에", "탓에", "의 탓에", "하는 탓에"], ans: 1, explain: "Danh từ (스트레스 탓에 병이 났다)." },
        { q: "Câu SAI HOÀN TOÀN:", options: ["열심히 공부한 탓에 시험에 합격했다.", "잠을 못 잔 탓에 피곤하다.", "과음한 탓에 속이 뒤집힌다.", "추운 날씨 탓에 감기에 걸렸다."], ans: 0, explain: "Học sấp mặt thì HỢP LÝ / PASS KỲ THI. Cấm dùng 탓에 (Đổ lỗi vạ lây) cho chuyện đậu đại học!" }
    ],
    "-(으)ㄴ/는 대신에": [
        { q: "Ý nghĩa của -(으)ㄴ/는 대신에:", options: ["Tại, Vì", "Thay vì (Thay cho, Trái lại, Đổi lại mang tính chất bù trừ)", "Không bằng", "Trong khi (trung lập)"], ans: 1, explain: "Đổi chác, thay vì làm A thì tôi đập sang bù đắp bằng việc B." },
        { q: "Điền từ: 이 식당은 값이 비싼 ______ 맛이 아주 훌륭하다.", options: ["대신에", "탓에", "바람에", "통에"], ans: 0, explain: "Đắt (nhược điểm) BÙ LẠI / THAY VÀO ĐÓ (Đổi chác) Ngon cực đỉnh." },
        { q: "Hành động bù trừ: 제가 요리를 ______ 설거지를 해 주실래요?", options: ["하는 대신에", "한 대신에", "할 대신에", "하게 대신에"], ans: 0, explain: "Động từ luôn dùng Hiện tại -는 thay cho hành động sẽ bù trừ (요리하는 대신에)." },
        { q: "Với Danh Tự: 컴퓨터 ______ 책을 샀다.", options: ["대신에", "인 대신에", "하는 대신에", "은 대신에"], ans: 0, explain: "N + 대신에 (Thay vì mua máy tính, tôi mua sách)." },
        { q: "Phân biệt -는 반면(에) và -는 대신(에):", options: ["Chả khác gì", "반면에 (Phản diện: Nghiên về trái ngược rành rành 2 bề mặt). 대신에 (Nghiêng về BÙ TRỪ có giá trị trao đổi/thỏa hiệp/thay thế hành động).", "반면 là tích cực", "대신 là quá khứ"], ans: 1, explain: "나는 일하는 대신에 돈을 번다 (Tao cày -> đổi lại được Tiền). Hợp lý. Dùng 반면에 ngang xương ở đây thì rất dỏm." }
    ],
    "-(으)ㄴ/는 만큼": [
        { q: "Ý nghĩa của -(으)ㄴ/는 만큼:", options: ["Khoảng chừng độ", "Tới mức mà (So sánh tương đương) / Đúng với mức độ, Bằng cái lượng (As much as, Bằng với)", "Sau khi", "Trước khi"], ans: 1, explain: "Mức độ ngang cúp (Bạn nỗ lực BAO NHIÊU thì nhận BAO NHIÊU)." },
        { q: "Câu chân lý: 노력한 ______ 대가를 받을 것입니다.", options: ["만큼", "탓에", "통에", "길래"], ans: 0, explain: "노력한 만큼 (Làm bao nhiêu ăn nhiêu)." },
        { q: "Cho Danh từ '너' (Mày):", options: ["너인 만큼", "너 만큼", "너만큼", "너 하는 만큼"], ans: 2, explain: "Danh từ Gắn Không Cách (Trợ từ N만큼). (Tôi yêu bạn bằng như tôi yêu tôi -> 나만큼 너를 사랑해)." },
        { q: "Nghĩa thứ 2 mở rộng (Nhấn mạnh RẰNG LÀ... NÊN):", options: ["비가 많이 오는 만큼 운전을 조심하세요 (Do lượng mưa đang to tới cỡ MỨC KIA KÌA... nên hãy chạy siêu chậm lại nha).", "비가 오는 만큼 좋다", "밥을 먹는 만큼 아프다", "돈이 많은 만큼 춥다"], ans: 0, explain: "Lấy mức độ vế 1 làm Cơ Sở yêu cầu mức độ vế 2 tương ứng." },
        { q: "Cấm dùng khi nào?", options: ["Khi xài Tính từ ở Tương lai (-ㄹ 만큼)", "Khi vế sau không tương xứng cái khối lượng/trị giá đo đếm của Vế 1", "Với mệnh lệnh", "Với câu hỏi"], ans: 1, explain: "만큼 phải có sự CÂN BẰNG tương ứng giữa A và B (A ngang B)." }
    ],
    "-(으)ㄴ/는 데(에)": [
        { q: "Phân biệt Ý NGHĨA TRỌNG TÂM của 데 so với -는 데 (nối câu):", options: ["Đều giống nhau (Nhưng)", "-(으)ㄴ/는 데(에): Chỗ 에 chứng minh chữ 데 ở đây là DANH TỪ PHỤ THUỘC (Mang nghĩa Nơi Chốn, Trường Hợp, Việc/Tình huống).", "Nhưng cũng", "Nếu thế thì"], ans: 1, explain: "비가 오는 데 어딜 가? (Mưa thế kìa MÀ đi đâu?). Còn đây là: 옷을 빠는 데(에) 써 (Sử dụng VÀO VIỆC giặt áo)." },
        { q: "Điền câu 'Vào việc giải tỏa căng thẳng thì hát là nhất': 스트레스 푸는 ______ 최고예요.", options: ["데(에)", "탓에", "만큼에", "마련에"], ans: 0, explain: "푸는 데 (Vào việc/ Trong tình huống muốn giải tỏa)." },
        { q: "Động từ hay đi cặp với 데(에):", options: ["시간이 들다 (Tốn thời gian) / 돈이 들다 (Tốn tiền) / 좋다 / 나쁘다 / 도움이 되다.", "먹다 / 마시다", "가다 / 오다", "자다 / 걷다"], ans: 0, explain: "이 책은 돈 버는 데(에) 도움이 된다 (Sách cày tiền có ích VÀO VIỆC gì?)." },
        { q: "Chia quá khứ cho -(으)ㄴ/는 데(에):", options: ["-은/는 데", "-았던 데", "Thường chỉ xài Hiện tại (-는 데 에) đối với Động Từ do nói về một HOÀN CẢNH/CÔNG DỤNG chung chung.", "-(으)ㄹ 데"], ans: 2, explain: "Phân làm gì, Cứ dùng để bổ nghĩa 'Cho CÁI VIỆC NÀO ĐÓ' (살 빼는 데 - cho việc giảm cân)." },
        { q: "Phân biệt với Nơi chốn vật lý (장소):", options: ["에 đi với cả hai, Đều có nghĩa là VIỆC và NƠI. (아픈 데가 없어요? - Hỏi Nơi đau vật lý. 살 빼는 데는 운동이 최고! - Hỏi Tình huống/Vấn đề).", "Khác", "Không khác", "데 là tiếng Hán"], ans: 0, explain: "Chữ 데 nó ảo diệu tột độ, cân cả Nghĩa Đen (Nơi/Chỗ) và Nghĩa Bóng (Việc/Tình Cảnh)." }
    ],
    "-(으)ㄹ 겸": [
        { q: "Ý nghĩa của -(으)ㄹ 겸 (겸사겸사):", options: ["Chưa bao giờ", "Sẵn tiện, Tiện thể làm A thì làm luôn bề B (Kiêm nhiệm 2 mục đích)", "Cố định", "Tuyệt đối không"], ans: 1, explain: "Một cớ hai việc. Vừa để làm A, mặt khác cũng vừa để làm B." },
        { q: "Điền câu 'Sẵn tiện dạo phố nên tôi cũng tập thể dục luôn': 산책도 ______ 운동도 했다.", options: ["한 편인데", "할 겸해서", "하는 김에", "Cả B và C đều có nghĩa 'Sẵn tiện/Nhân tiện'"], ans: 3, explain: "할 겸해서 (Thường hay ghép với 명사 cũng xài được N 겸 N). 는 김에 cũng na ná nhưng 김에 là tình huống bất chợt phát sinh, 겸 là dự tính 2 cớ từ đầu." },
        { q: "Cách kết hợp 2 động từ: 한국어도 (배우다) 한국 친구도 (사귀다) 한국에 왔어요.", options: ["배울 겸 사귈 겸", "배우는 겸 사귀는 겸", "배웠을 겸 사귀었을 겸", "배운 겸 사귄 겸"], ans: 0, explain: "-(으)ㄹ 겸 -(으)ㄹ 겸 (Vừa X Vừa Y)." },
        { q: "Sử dụng với Danh từ để ghép vai trò chung: 아침밥 ______ 점심밥을 먹었다.", options: ["겸", "겸해서", "겸의", "겸인"], ans: 0, explain: "Danh Từ + 겸 (아침 겸 점심 = Bữa ăn Brunch/Sáng gộp trưa)." },
        { q: "Từ bổ trợ MẠNH MẼ thường đi với -(으)ㄹ 겸:", options: ["도 (Cũng: 친구도 만날 겸)", "가 / 이", "조차", "마저"], ans: 0, explain: "Vì là 2 mục đích nên thường đi với trợ từ 도 để nhấn mạnh sự bao gồm Vừ có A mà cũng có B (바람도 쐴 겸...)." }
    ],
    "-(으)ㅁ에도 불구하고": [
        { q: "Ý nghĩa của -(으)ㅁ에도 불구하고:", options: ["Chỉ là", "Mặc dù đã ... VẬY MÀ / VẬY NÊN (Trái ngược hoàn toàn mong đợi)", "Rất có thể", "Hãy làm vậy"], ans: 1, explain: "Mặc cho trở ngại, bất chấp nghịch cảnh (Xảy ra kết quả trái lọi). Mang tính rất trịnh trọng so với -아/어도." },
        { q: "Điền từ: 날씨가 ______ 불구하고 운동하러 나갔다.", options: ["추운데도", "추웠음에도", "춥게", "추워하는"], ans: 1, explain: "춥다 -> 추움에도 불구하고 (Bất chấp Tình trạng Thời tiết giá rét)." },
        { q: "Nối Danh Từ: 규칙 ( ) 불구하고...", options: ["규칙에도", "규칙임에도", "규칙하는", "Cả A và B đều được dùng (có 은/는 hoặc không)"], ans: 3, explain: "N + (임)에도 불구하고 (Mặc dù ĐÓ LÀ Luật)." },
        { q: "Câu văn viết TOPIK cực chuẩn:", options: ["밥을 많이 먹음에도 불구하고 배가 고프다고 해요.", "돈이 많음에도 불구하고 그는 불행을 느낀다.", "시간이 없음에도 불구하고 빨리 자세요.", "둘 다 A và B đều đúng. Nhưng B là văn phong báo chí sắc sảo nhất."], ans: 3, explain: "Đây là ngữ pháp Đỉnh Cao của Viết Lý Luận. Bất luận giàu có, hắn ta vẫn vô phúc." },
        { q: "Thay thế tương đương:", options: ["-는데도", "-길래", "-는 바람에", "-(으)ㄴ 탓에"], ans: 0, explain: "-는데도 (Mặc dù thế, VẬY MÀ -> nhưng là bản Khẩu ngữ / informal hơn)." }
    ],
    "-는 법이다": [
        { q: "Ý nghĩa của -는 법이다:", options: ["Pháp luật quy định", "Vốn dĩ là, Tất yếu là (Sự thật hiển nhiên không gì chối cãi / Quy luật)", "Ngoại lệ là", "Sắp sửa"], ans: 1, explain: "Sự thật mang tính chân lý toàn nhân loại/Đạo lý. Đồng nghĩa với -기 마련이다." },
        { q: "Điền từ: 노력하는 사람에게 결국 성공이 ______.", options: ["오는 법이다", "올 법하다", "왔던 법이다", "오는 바람이다"], ans: 0, explain: "Thành công VỐN DĨ là sẽ tìm đến với người nỗ lực (Quy luật nhân quả)." },
        { q: "Trong câu: 밤이 깊으면 새벽이 (    ).", options: ["오는 법이에요", "올 리가 없어요", "오기 십상이에요", "올 바에야"], ans: 0, explain: "오는 법이에요 (Đêm sâu rồi Bình minh ắt VỐN DĨ sẽ lên)." },
        { q: "Phân biệt -는 법이다 vs -(으)ㄹ 법하다:", options: ["-기 마련이다", "법이다 (Quy luật 100%). 법하다 (Có lẽ/ Có vẻ sẽ xảy ra khoảng 80%).", "Chỉ dùng cho tương lai", "Chỉ dùng cho quá khứ"], ans: 1, explain: "비가 올 법하다 (Biết đâu có lẽ sẽ mưa). 비가 오면 땅이 젖는 법이다 (Mưa thì luật là đất nhão)." },
        { q: "Tính Từ kết hợp thế nào?", options: ["-은/ㄴ 법이다", "-는 법이다", "-을 법이다", "Khống kết hợp tính từ"], ans: 0, explain: "Tính từ: 높은 산은 오르기 힘든 법이다 (Núi cao vốn dĩ KHÓ lội - 힘든 법이다)." }
    ],
    "-(이)야말로": [
        { q: "Ý nghĩa của -(이)야말로:", options: ["Bổ nghĩa", "ĐÚNG LÀ / CHÍNH LÀ (Nhấn mạnh một cái N nào đó là Xịn nhất/Đúng đỉnh nhất/Cốt lõi nhất)", "Không phải là", "Cũng là"], ans: 1, explain: "The very (one). Chính cái này đây mới là đỉnh chóp (loại trừ mọi cái khác)." },
        { q: "Điền từ: 이 책이야말로 ____ 최고다.", options: ["내가 찾던", "내가 샀을", "내가 보낸", "내가 아는"], ans: 0, explain: "Cuốn sách NÀY ĐÂY mới CHÍNH LÀ Chân ái tao tìm kiếm bấy lâu!" },
        { q: "Ghép Danh Từ có Patchim (가족):", options: ["가족야말로", "가족이야말로", "가족은야말로", "가족이은야말로"], ans: 1, explain: "Patchim -> 이야말로 (가족이야말로 나의 힘이다 = Chính Gia đình mới là sức mạnh của tuôi)." },
        { q: "Phân biệt -(이)야말로 với 은/는:", options: ["Như nhau", "은/는 chỉ chủ thể bình thường, 야말로 hất tung mọi đối tượng khác để tôn CÁI NÀY LÀ SỐ 1 ĐỘC TÔN.", "야말로 nói về tương lai", "은/는 trịnh trọng hơn"], ans: 1, explain: "한국의 수도는 서울이다 (Chủ ngữ bình yên). 한국이야말로 여행하기 좋은 곳이다 (Hàn Quốc CHÍNH LÀ CÁI RỐN du lịch đỉnh cao nhất quả đất)." },
        { q: "Biến thể rút gọn trong Khẩu Ngữ giao tiếp:", options: ["-(이)야말로 / -(이)지", "-(이)라니!", "N(이)야말로 có thể giản lược thành N(이)야말로 (Không có biến thể khác, vì bản thân 야말로 đã đóng chốt nhấn mạnh).", "N이야"], ans: 2, explain: "야말로 thường kết hợp với các từ mang tính Tuyệt đối phía sau (가장, 최고, 제일)." }
    ],
    "-기만 하다": [
        { q: "Ý nghĩa của -기만 하다:", options: ["Duy nhất/ Chỉ việc làm một hành động (Không làm gì khác)", "Chỉ cần", "Đã từng", "Mỗi khi"], ans: 0, explain: "Cái hành động NÀY là chiếm hết 100% tỷ trọng (Chỉ có nằm cả ngày)." },
        { q: "Điền từ: 주말에 밖에 안 나가고 잠을 ______.", options: ["자기만 했어요", "자야 해요", "잘 바에야", "잔 통에"], ans: 0, explain: "자기만 했다 (Tui CHỈ CẦN ngủ / Tui CHỈ ĐÃ ngủ)." },
        { q: "Tính Từ kết hợp thế nào? (방이 넓다):", options: ["넓기만 해요", "넓게 해요", "넓을 뿐이에요", "Cả A và C (Nhưng A nhấn mạnh duy nhất trạng thái trần trụi độc tôn)."], ans: 3, explain: "방이 넓기만 하고 깨끗하지 않아요 (Cái phòng chỉ được mỗi cái To Ngoài ra dơ bỏ xừ)." },
        { q: "Phân biệt -기만 하다 và -(으)ㄹ 뿐이다:", options: ["Chả khác xíu nào", "기만 하다 (Thường ngụ ý có một cái gì bị thiếu sót). 뿐이다 (Nhấn mạnh Sự chốt sổ Không Có Ngoài Ra nữa).", "Cả 2 là Danh từ", "뿐이다 dùng cho Tính từ"], ans: 1, explain: "밥만 먹을 뿐이다 = Tao chỉ ăn xong là dông rẽ. 밥을 먹기만 한다 = Nó chỉ biết cắm mặt hốc cơm chả biết nói mẹ gì." },
        { q: "Cấu trúc Điều Kiện 'Chỉ cần ... là Đủ':", options: ["-기만 하면 (되다)", "-기나 하면", "-기로 하면", "-기에 하면"], ans: 0, explain: "너만 오기만 하면 돼 (Chỉ cần BẠN bước tới là mọi việc Xong xuôi Mĩ Mãn)." }
    ],
    "-기 십상이다": [
        { q: "Ý nghĩa của -기 십상이다:", options: ["Tốt nhất là", "Dễ dàng (bị / bị rơi vào kết quả XẤU), Rất có khả năng sẽ (Dễ như chơi)", "Khó mà", "Hiếm khi"], ans: 1, explain: "10 phần thì 8-9 phần là rớt vào Trạng thái Tối Tăm Tiêu Cực (Dễ té, dễ bể, dễ mập)." },
        { q: "Câu Cảnh báo: 서두르면 실수하______.", options: ["기 마련이다", "기 십상이다", "는 척하다", "ㄹ 바에야"], ans: 1, explain: "기 십상이다 (Vội là DỄ BỊ LỖI LẮM đó nghen)." },
        { q: "Vế 2 sau 십상이다 phải là:", options: ["Tích cực (합격하다)", "Tiêu cực (다치다, 실패하다, 오해하다, 까먹다)", "Động từ bất kỳ", "Danh từ"], ans: 1, explain: "Đặc sản của 십상이다 là gắn với Toang, Rớt, Quên, Bể, Trễ." },
        { q: "Tương đương thay thế:", options: ["-기 쉽다 / -기 일쑤이다", "-(으)ㄹ 리가 없다", "-(으)느니 차라리", "-는가 하면"], ans: 0, explain: "-기 쉽다 (Dễ bị). -기 일쑤이다 (Cũng là thói quen xấu Dễ bị)." },
        { q: "Được dùng với Quá Khứ (실패했기 십상이다) hay Tương Lai?", options: ["Quá khứ", "Hiện tại chỉ xu hướng/Tương lai dự báo: Thường CHỈ gắn với Động từ gốc không chia độ thì (-기 십상이다).", "Mọi thì", "Chưa biết"], ans: 1, explain: "밤에 먹으면 살찌기 십상이야 (Ăn đêm dễ mập thù lù ra đó)." }
    ],
    "-(으)ㄹ 지경이다": [
        { q: "Ý nghĩa của -(으)ㄹ 지경이다:", options: ["Gần như", "Đến mức độ/ Tới Cảnh Giới Đỉnh Điểm (Sắp sửa bùng nổ, Chết tới nơi)", "Bên cạnh", "Xong việc"], ans: 1, explain: "Biểu cảm lố lăng thái quá về sự chịu đựng. (Mệt Tới mức chết lâm sàng luôn / Đói tới mức Lả đi)." },
        { q: "Điền kết phù hợp: 일주일 내내 야근해서 ______.", options: ["기뻐할 지경입니다", "죽을 지경입니다", "도망갈 바에야", "먹을 정도입니다"], ans: 1, explain: "죽을 지경이다 (Cmn kiệt sức TỚI ĐỘ muốn băng hà)." },
        { q: "So sánh với -(으)ㄹ 정도로:", options: ["Như nhau 100%", "정도로 (dùng chung cho mọi mức độ Tốt/xấu từ Cười Mỉm tới Khóc La). 지경이다 (ĐỘC QUYỀN xài cho cảm xúc Tiêu cực Cực Hạn - Sắp Nổ tung, Đứt thở).", "정도로 là quá khứ", "Linh tinh"], ans: 1, explain: "배가 고파서 죽을 지경이야 (Đói bạt lả gục tới nơi)." },
        { q: "Có đuôi nào dùng được cho Đáng yêu/Xinh đẹp chết đi sống lại không?", options: ["귀여울 지경이다 / 예쁠 지경이다 (Giao tiếp khẩu ngữ ĐƯỢC CHẤP NHẬN trong sự lố lăng genZ, nhưng Ngữ pháp Học thuật Không Chuẩn Mực).", "Tuyệt đối không", "Ai nói bắt bỏ tù Hàn Quốc", "Dùng cho mọi cái"], ans: 0, explain: "Ngữ pháp gốc: Mọi cái 지경 đều là Khốn Đốn. (Dù bọn teen Hàn có thể nói 'Giai kia đẹp trai tới mức đau tym chết đi sống lại 죽을 지경이야')." },
        { q: "Cấu trúc Danh Từ:", options: ["명사 + 지경이다 (포기 지경이다)", "명사에 지경이다", "명사이 지경이다", "명사와 지경이다"], ans: 0, explain: "N + 지경이다 (파산 지경이다 = Rơi vào CHỐN/BỜ VỰC Phá sản)." }
    ],
    "-(으)ㄹ 나위가 없다": [
        { q: "Ý nghĩa của -(으)ㄹ 나위가 없다:", options: ["Không có tác dụng", "Không CÒN CHỖ NÀO ĐỂ BÀN / Miễn Chê / Tốt tới đáy ngọn sóng", "Hết lý do", "Tuyệt vọng"], ans: 1, explain: "Tốt/ Hoàn hảo / Trọn vẹn tới mức Éo thể thêm bot 1 chữ nào vào được (Đỉnh cao của Khen ngợi)." },
        { q: "Điền câu 'Tuyệt vời tới mức KHÔNG CÒN GÌ TỐT HƠN / CHÊ ĐƯỢC NỮA': 더 이상 ______.", options: ["좋을 나위가 없다 / 더할 나위가 없다", "나쁠 나위가 없다", "추울 나위가 없다", "슬플 나위가 없다"], ans: 0, explain: "더할 나위(가) 없이 좋다 (Tốt tới mức KHÔNG CẦN ADD thêm gì vô nữa -> Đỉnh cấp độ Tuyệt Sắc)." },
        { q: "Với Tính / Động từ: 설명이 완벽해서 더 ______.", options: ["설명할 나위가 없다 (Không cần giải thích thêm 1 tiếng nào nữa).", "설명하기 나름이다", "설명할 수밖에 없다", "설명할 통에 없다"], ans: 0, explain: "Bài giảng max Option, hỏi thêm bị phang ghế." },
        { q: "Tính chất của 나위:", options: ["Thường dùng trong báo cáo đánh giá Năng lực (Rất Trang Trọng) Lời Khen ngợi cực mạnh.", "Thường dùng để chửi rủa.", "Thường dùng trong quán nhậu", "Là cấu trúc Sai khiến"], ans: 0, explain: "이 계획은 나무랄 데가 없다 = 불평할 나위가 없다 (Vô khuyết/Không vết xước)." },
        { q: "Thay thế tương lai của -(으)ㄹ 나위가 없다:", options: ["-기로서니", "-(으)ㄹ 필요가 없을 정도로 완벽하다 / 더 이상 ~할 수 없다", "-(으)느니 차라리", "-는가 하면"], ans: 1, explain: "Tốt tới mức không cần thiết phải thêm bớt." }
    ],
    "-느니 차라리": [
        { q: "Ý nghĩa của -느니 차라리:", options: ["Muốn đi ăn không", "Nếu Vế 1 (Tù) THÀ ĐẢO Vế 2 (Đau tim / Trái khoáy cực đỉnh) Bất đắc dĩ", "Không muốn", "Hay là"], ans: 1, explain: "Nếu bắt/ép tôi làm Vế 1 (ghẻ lạnh tởm lợm) thì Thà Khốn Khổ Chết luôn tao chọn Vế 2 (Cái đỡ tởm hơn)." },
        { q: "Tương đương tuyệt đối với cấu trúc Khét Tiếng nào ở Category 6?", options: ["-(으)ㄹ 바에야", "-는 김에", "-(으)ㄹ 따름이다", "-(으)ㄹ 지경이다"], ans: 0, explain: "-ㄹ 바에야 (Nếu mày ép tao uống nước đó tao THÀ uống nọc độc)." },
        { q: "Điền câu: 친구를 (배신하다) ______ 차라리 죽음을 택하겠다.", options: ["배신할 바에야", "배신하느니", "Cả A và B đều đỉnh chóp (A phổ biến hơn, B Văn Ngôn hơn)", "배신하는 이상"], ans: 2, explain: "배신하느니 차라리 죽는 게 낫다 (If I have to betray my friend, I'd rather die!)." },
        { q: "Cấu trúc Bắt Buộc thường đi kèm phía sau vế B của 느니 차라리 là đuôi từ gì?", options: ["-겠다 / -는 게 낫다 (Bày tỏ sẽ làm / Sự lựa chọn Vế 2 đỡ thúi hơn).", "-아/어도", "-는 법이다", "-길래"], ans: 0, explain: "포기하느니 차라리 끝까지 해 보겠습니다 (Ngập trong bài tập mà bảo Bỏ Cuộc, tui thà gào lên LÀM TỚI CÙNG)." },
        { q: "Sự KHÁC BIỆT giữa 느니 và 다른 (ví dụ 느니 vs -는 대신에):", options: ["대신에 là Đổi chác Bình đẳng/Nhẹ nhàng/Có qua có lại. 느니 là Sự Giằng xé Bất Bất đắc dĩ / Tình thế khốn cùng phải nhắm mắt chọn Ngõ Cụt Đỡ Cụt Hơn.", "Như nhao", "Không cái nào", "Chỉ là 1"], ans: 0, explain: "Đây là Ngữ pháp Đấu tranh tâm lý (TOPIK II Đọc Hiểu Câu 40-50)." }
    ],
    "-(으)ㄹ 성싶다": [
        { q: "Ý nghĩa của -(으)ㄹ 성싶다:", options: ["Chắc là thế / Cảm giác là như thế (Nhận định phán đoán về khả năng xảy ra của một việc DỰA TRÊN linh cảm)", "Rõ ràng là", "Xin vui lòng", "Có lẽ không"], ans: 0, explain: "Ngữ điệu 'Tui nghi là ... Có lẽ chăng / Dường như'." },
        { q: "Tương đương và là anh em Sinh Đôi với kết cấu nào?", options: ["-(으)ㄹ 듯하다 / -나 보다 / -는가 싶다", "-(으)ㄹ 바에야", "-기 나름이다", "-(으)ㄹ 따름이다"], ans: 0, explain: "비가 올 성싶다 (형) ≈ 비가 올 듯하다 / 비가 올 것 같다 (Biết không chừng chắc nó sẽ mưa đó bây)." },
        { q: "Chia với Tính từ (Món ăn này chắc cay khét quá): 매울 ______.", options: ["성싶다", "지경이다", "바에야", "나위가 없다"], ans: 0, explain: "매울 성싶다 (Ngó cái màu đỏ lườm kia Chắc là cay nhức nách)." },
        { q: "Ngữ pháp TRÁI NGƯỢC (Tôi đéo tin nó sẽ xảy ra): Có cái cc (Lí nào lại.../ Không thể nào):", options: ["-(으)ㄹ 리가 없다 / -(으)ㄹ 리 만무하다", "-(으)ㄹ 성싶다", "-는 법이다", "-기 십상이다"], ans: 0, explain: "-ㄹ 리가 없다 là Bác Cỏ Phủ Quyết. -ㄹ 성싶다 là Nghi Vấn Bán Tín Bán Nghi Gật Gù." },
        { q: "Câu văn Phong Thái Cổ Điển Thâm Thúy nhất: 우리 팀이 우승을 차지____.", options: ["할 성싶다 (Dường như tui có linh cảm ngai vàng trong tay team ta).", "할 리가 없다", "하는 바람에", "하는 통에"], ans: 0, explain: "성싶다 cực kỳ hay dùng trong Viết Thư/ Bày tỏ suy nghĩ Phỏng đoán với độ chín muồi / Không hớt hải (Giồng ông già ngồi nhấm trà bấm quẻ)." }
    ]
};
