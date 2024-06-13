// Vào giao diện quản lý lớp học
function ManagerClass(dataClass, dataStudent) {
    let className = dataClass[0]['NameClass']
    let avt = dataClass[0]['avt']
    let quantity = dataStudent.length - 1
    let id = dataClass[0]['ID']
    vam('#class-nav>.nav-title').innerText = `Lớp ${className}`
    // Chuyển Cảnh
    SetAttribute('#class-content', 'style', 'animation: nextV .5s linear forwards;');
    vam('#class-nav').innerHTML += nav_back
    setTimeout(() => { SetAttribute('#manager-class-content', 'style', 'animation: OpenV .5s linear forwards;display:block') }, 300)
    // Quay lại 
    ManagerClassBack()
    // Load trạng thái khóa học
    fetchSheet
        .fetch({
            gSheetId: id,
            wSheetName: className,
        }).then((data) => {
            let ind = 0
            let q_course = [];
            for (let key in data[0]) {
                if (data[0][key] == 1) {
                    q_course.push(key);
                }
            }
            for (i = 0; i < q_course.length; i++) {
                ind++
            }

            vam('#Class-detail_course_listWrap>p').innerText = `${ind} Khóa học đã hoàn thành`
        })
    /* Load nội dung trang quản lý */
    // Load hình bìa 
    vam('#Class-detail_detailClass-avt').innerHTML = `<img src="${avt}">`
    vam('#Class-detail_detailClass_content').innerHTML =
        `<h1 class="detailclass_title" > Thông tin chi tiết lớp học</h1>
        <div class="detailclass_tt"><h1>Tên lớp: 24PR001</h1></div>
        <div class="detailclass_tt"><h1>Khóa học đang học: FZ</h1></div>
        <div class="detailclass_tt"><h1>Tiến độ học: 24PR001</h1></div>`
    // Load số lượng học sinh
    vam('#Class-detail_allStudent_listWrap>p').innerText = quantity + ' học sinh'
    /* Chuyển trang danh sách học sinh*/
    vam('#Class-detail_allStudent_listWrap').onclick = () => ManagerClass_Student(dataClass, dataStudent)
}

// Thực hiện quay lại 
function ManagerClassBack() {
    vam('.nav-back').onclick = () => {
        SetAttribute('#class-content', 'style', 'animation: backV .5s linear forwards;')
        vam('.nav-back').remove()
        SetAttribute('#manager-class-content', 'style', 'animation: ClouseV .5s linear forwards;display:none')
    }
}
function ManagerClass_StudentBack(dataClass, dataStudent) {
    vam('.nav-back').remove()
    SetAttribute('#Class-student', 'style', 'display:none')
    ManagerClass(dataClass, dataStudent)
}

// Trang danh sách học sinh
function ManagerClass_Student(dataClass, dataStudent) {
    let items = ''
    let quantity = dataStudent.length - 1
    SetAttribute('#Class-student', 'style', 'display:block')
    let className = dataClass[0]['NameClass']
    let idStudent = dataClass[0]['ID']
    SetAttribute('#manager-class-content', 'style', '')
    vam('#Class-student').innerHTML =
        `<div>
            <div id="Class_student-nav">
                <div>
                    <h1>Danh sách học sinh (${quantity})</h1>
                    <i id="add_Student" class="bi bi-person-fill-add"></i>
                </div>
                <div class="search-wrap">
                        <input type="search" class="">
                        <button id="search" class="">
                            <i class="bi bi-search"></i>
                        </button>
                        <p><i class="bi bi-x-lg"></i></p>
                </div>
            </div>
            <div class="dot"></div>
            <div id="Class_student-wrap"></div>
        </div>`
    vam('#class-nav>.nav-title').innerText = `Học sinh lớp ${className}`
    vam('.nav-back').onclick = () => {
        ManagerClass_StudentBack(dataClass, dataStudent)
    }
    vam('#search').addEventListener('click', () => {
        vam('.search-wrap>input').classList.add('hide')
        vam('.search-wrap>button').classList.add('hiden')
        vam('.search-wrap>input').value = ''
        vam('.search-wrap p').addEventListener('click', () => {
            vam('.search-wrap>input').classList.remove('hide')
            vam('.search-wrap>button').classList.remove('hiden')
            vam('.search-wrap>input').value = ''
        })
    })
    dataStudent.forEach((stu) => {
        items +=
            `<div class="Class_student" data-id="${stu.Detail}">
                <div>
                    <img src='${stu.avt}'>
                </div>
                <p>${stu['ID']}</p>
                <p>${stu['Name']}</p>
            </div>`
    })
    vam('#Class_student-wrap').innerHTML = items

    vams('.Class_student').forEach((detail) => {
        detail.onclick = () => {
            let id = detail.getAttribute('data-id')
            console.log(id);
            fetchSheet
                .fetch({
                    gSheetId: id,
                    wSheetName: idStudent,
                }).then((data) => {
                    console.log(data);
                })
        }
    })
    // thêm học sinh mới
    vam('#add_Student').onclick = () => {
        SetAttribute('#popup', 'style', 'display:block')
        SetAttribute('.popup_main', 'style', 'width:600px')
        vam('.popup_background').onclick = () => {
            vam('#popup').setAttribute('style', 'display:none')
        }
        vam('.popup_main').innerHTML =
            `<div id="addStudent" style="display:flex;flex-direction: column;">
                <p>Thêm học sinh</p>
                            <input type="text" class="ip_addStudent" name="name" placeholder="Tên học sinh">
                            <input type="text" class="ip_addStudent" name="bd" placeholder="Ngày sinh">
                            <input type="text" class="ip_addStudent" name="nameparent" placeholder="Tên phụ huynh">
                            <input type="text" class="ip_addStudent" name="phone" placeholder="Điện thoại phụ huynh">
                            <input type="text" class="ip_addStudent" name="address" placeholder="Địa chỉ">
                            <input type="text" class="ip_addStudent" name="statusPay" placeholder="Trạng thái đóng học phí (0: chưa đóng, 1: đã đóng)">
                            <button id="bt_addStudent">Thêm học sinh</button>
                        </div>`
        vam('#bt_addStudent').onclick = () => {
            SetAttribute('.load', 'style', 'display:block')
            let name = vam('.ip_addStudent[name="name"]').value
            let bd = vam('.ip_addStudent[name="bd"]').value
            let phone = vam('.ip_addStudent[name="phone"]').value
            let nameparent = vam('.ip_addStudent[name="nameparent"]').value
            let address = vam('.ip_addStudent[name="address"]').value
            let statusPay = vam('.ip_addStudent[name="statusPay"]').value
            let urlnew = urlBackend + "?" + `name=${name}&bd=${bd}&classN=${className}&nameParent=${nameparent}&phone=${phone}&address=${address}&statusPay=${statusPay}&action=addStudent`;
            fetch(urlnew, {
                method: 'GET'
            }).then((data) => {
                SetAttribute('.load', 'style', 'display:none')
            }).catch(error => alert('Lỗi: ' + error));
        }
    }
}