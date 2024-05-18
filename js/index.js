
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const vam = document.querySelector.bind(document);
const vams = document.querySelectorAll.bind(document);

/* #c661412b2 */
vam('#c661412b2-iframe_click').addEventListener('click', () => {
    vam('.c661412b2-background_click').setAttribute('style', 'display:flex')
    vam('.c661412b2-iframe_click').setAttribute('style', 'display:flex')
    var c661412b2Iframe = `<iframe  class="c661412b2-iframe" src="https://drive.google.com/file/d/1tfMlBjup692cFrsEFpX_x0Ehb0Fi7wAO/preview" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    vam('.c661412b2-iframe_click').innerHTML = c661412b2Iframe
    vam('.c661412b2-background_click').addEventListener('click', () => {
        vam('.c661412b2-background_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe_click').setAttribute('style', 'display:none')
        vam('.c661412b2-iframe').remove()
    })
})

document.querySelectorAll('.dieukien_bottom button').forEach((t) => {
    t.onclick = () => {
        vam('#popup').setAttribute('style', 'display:block')
        vam('.background').onclick = () => {
            vam('#popup').setAttribute('style', 'display:none')
        }
    }
})

window.addEventListener("scroll", function (event) {

    var scroll_y = this.scrollY;
    this.document.querySelector('#intro').setAttribute('style', `top:${scroll_y / 3}px`)
    if (scroll_y > 600) {
        document.querySelector('#header1412a1').setAttribute('style', `height: max-content;
        position: sticky;`)
        document.querySelector('#header_logo').src = 'https://lh3.googleusercontent.com/d/1UsHT-SsPNDizafj3sBICKJZXpvyY5zCm'
        document.querySelector('.header1412a1-list').setAttribute('style', 'color:var(--color-text)')


    } else {
        document.querySelector('#header1412a1').setAttribute('style', `height: 0;
        position: relative;`)
        document.querySelector('#header_logo').src = 'https://lh3.googleusercontent.com/d/1PE-EtRbgsb7dBK3iPHG6INK8GPE4r1AZ'
        document.querySelector('.header1412a1-list').setAttribute('style', 'color:white')
    }
});

window.onscroll = () => {
    var scroll = document.querySelector('#timeline').getClientRects()[0];
    console.log()
    if (scroll.top < -80) {
        document.querySelectorAll('.dot>div').forEach((t) => {
            t.classList.add('start')
        })
    }
};

let w = screen.width


fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'header',
    })
    .then((rows) => {
        document.querySelector('#header_logo').src = rows[0]['logo']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'intro',
    })
    .then((rows) => {
        document.querySelector('#intro_content').innerText = rows[0]['Nội dung']
        document.querySelector('#intro_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#intro_background').src = rows[0]['background']
        document.querySelector('#intro_link').src = rows[0]['Link tham gia']
        // document.querySelector('#intro_img').src = rows[0]['img']
        document.querySelector('#intro_logo').src = rows[0]['logo']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'introduce',
    })
    .then((rows) => {
        // document.querySelector('#introduce_img').src = rows[0]['Hình']
        //document.querySelector('#introduce_title').innerText = rows[0]['Tiêu đề']
        // document.querySelector('#introduce_content').innerText = rows[0]['Nội dung']
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'DoiTuongThamGia',
    })
    .then((rows) => {
        document.querySelectorAll('.object_wrapimg>img')[0].src = rows[0]['Hình ảnh']
        document.querySelectorAll('.object_wrapimg>img')[1].src = rows[1]['Hình ảnh']
        document.querySelectorAll('.object_wrapimg>img')[2].src = rows[2]['Hình ảnh']
        document.querySelector('#object_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#object_title1').innerText = rows[0]['Tiêu đề bảng']
        document.querySelector('#object_content1').innerText = rows[0]['Nội dung bảng']
        document.querySelector('#object_title2').innerText = rows[1]['Tiêu đề bảng']
        document.querySelector('#object_content2').innerText = rows[1]['Nội dung bảng']
        document.querySelector('#object_title3').innerText = rows[2]['Tiêu đề bảng']
        document.querySelector('#object_content3').innerText = rows[2]['Nội dung bảng']
        //   document.querySelector('#object_title4').innerText = rows[3]['Tiêu đề bảng']
        //    document.querySelector('#object_content4').innerText = rows[3]['Nội dung bảng']

        //   document.querySelectorAll('.object_wrapimg>img')[3].src = rows[3]['Hình ảnh']
    });


jQuery(document).ready(function ($) {
    $(".slider-img").on("click", function () {
        $(".slider-img").removeClass("active");
        $(this).addClass("active");
    });
});
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'ThoiGianConLai',
    })
    .then((rows) => {
        let r = ''
        const targetDate = new Date(`${rows[0]['Thời gian hết hạn']}T23:59:59`).getTime();

        // Update the countdown every second
        const countdown = setInterval(() => {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the remaining time
            const distance = targetDate - now;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the countdown
            document.querySelector('#days').innerText = days
            document.querySelector('#hours').innerText = hours
            document.querySelector('#minutes').innerText = minutes
            document.querySelector('#seconds').innerText = seconds

            // If the countdown is over, stop updating
            if (distance < 0) {
                clearInterval(countdown);
                document.getElementById("countdown").innerHTML = "EXPIRED";
            }
        }, 1000);
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'question',
    })
    .then((rows) => {
        let r = ''
        let i = 0
        rows.forEach((t) => {
            r +=
                `<div class="question_div" index="${i}">
                    <p class="vam_content">${t['Câu hỏi']}</p>
                    <i class="bi bi-arrow-up-circle-fill"></i>
                </div>
                <div class="question_load" index="${i}">
                    <p class="vam_content">${t['Câu trả lời']}</p>
                </div>`
            i++
        })
        document.querySelector('#question_load').innerHTML += r
        document.querySelectorAll('.question_div').forEach((c) => {
            c.onclick = () => {
                let i = c.getAttribute('index')
                document.querySelector(`.question_load[index="${i}"]`).classList.toggle('hide')
                document.querySelector(`.question_div[index="${i}"]>i`).classList.toggle('hide')
            }
        })
    });
fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'Giaithuong',
    })
    .then((rows) => {
        document.querySelector('#prize_titleup').innerHTML = rows[0]['Tiêu đề']
        document.querySelector('#prize_title').innerHTML = rows[0]['Tiêu đề']
        rows.forEach((t) => {
            if (t['Vòng sơ loại'] != '') {

            }
        })
        rows.forEach((t) => {
            if (t['Vòng chung kết'] != '') {

            }
        })
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'HinhThucToChuc',
    })
    .then((rows) => {
        document.querySelector('#organizational_titleup').innerText = rows[0]['Tiêu đề']
        document.querySelector('#organizational_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#organizational_titlep').innerText = rows[0]['Tiêu đề phụ']
        let r = ''
        rows.forEach((t) => {
            r += `<p style="text-indent: 10%;" class="vam_content">${t['Nội dung']}</p>`
        })
        document.querySelector('#organizational_img1>img').src = rows[0]['Hình ảnh']
        document.querySelector('#organizational_content1').innerHTML += r
    });

fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'partner',
    })
    .then((rows) => {
        let r = ''
        let t = ''
        let y = ''
        let u = ''
        let i = ''
        rows.forEach((tab) => {
            if (tab['Hình ảnh logo đơn vị chỉ đạo'] != '') {
                r +=
                    `<div class="donvi_load-wrap">
                    <img style="width:80%" src="${tab['Hình ảnh logo đơn vị chỉ đạo']}"/>
                </div>`
            }
            if (tab['Hình ảnh logo đơn vị đồng hành'] != '') {
                t +=
                    `<div class="donvi_load-wrap">
                    <img style="width:80%" src="${tab['Hình ảnh logo đơn vị đồng hành']}"/>
                </div>`
            }
            if (tab['Hình ảnh logo đơn vị đồng tổ chức'] != '') {
                y +=
                    `<div class="donvi_load-wrap">
                    <img style="width:80%" src="${tab['Hình ảnh logo đơn vị đồng tổ chức']}"/>
                </div>`
            }
            if (tab['Hình ảnh logo đơn vị truyền thông'] != '') {
                u +=
                    `<div class="donvi_load-wrap">
                    <img style="width:60%" src="${tab['Hình ảnh logo đơn vị truyền thông']}"/>
                </div>`
            }

        })
        document.querySelector('#chidao_load').innerHTML += r
        document.querySelector('#donghanh_load').innerHTML += t
        document.querySelector('#tochuc_load').innerHTML += y
        document.querySelector('#truyenthong_load').innerHTML += u
        document.querySelector('#tochucc_load').innerHTML += i
    });


fetchSheet
    .fetch({
        gSheetId: '1w0ZWTWCwLovFMRhTHiYAS9yst4qptwjLRcI2GncXUjI',
        wSheetName: 'intro',
    })
    .then((rows) => {
        document.querySelector('#load_about').innerHTml += rows[0]['Về chúng tôi']
        document.querySelector('#intro_title').innerText = rows[0]['Tiêu đề']
        document.querySelector('#intro_background').src = rows[0]['background']
        document.querySelector('#intro_link').src = rows[0]['Link tham gia']
        document.querySelector('#intro_img').src = rows[0]['img']
        document.querySelector('#intro_logo').src = rows[0]['logo']
    });

/* test */
