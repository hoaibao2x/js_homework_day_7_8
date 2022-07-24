/** Thao tác cơ bản với mảng */
var mainArr = [];

// query rút gọn
function getQESE(id) {
    return document.querySelector(id);
}

// Function lọc số nguyên dương
function posFilter(arrMain) {
    var subArr = [];
    for (var z = 0; z < arrMain.length; z++) {
        if (arrMain[z] > 0) {
            subArr.push(arrMain[z]);
        }        
    }

    return subArr;
}

// Thêm số vào mảng
function addItem() {
    // Input
    var nhapSo = Number(getQESE('#nhapSo').value);
    // Process
    if (getQESE('#nhapSo').value == '') {
        alert('Nhập số đi chứ !');
    } else {
        mainArr.push(nhapSo);
    }
    // Output
    getQESE('#arrNow').innerHTML = 'Mảng hiện tại: ' + '<br>' + mainArr;
    getQESE('#nhapSo').value = '';
}


// Tính tổng các số dương
function sumPosNum() {
    var sum = 0;
    for (var i = 0; i < mainArr.length; i++) {
        if (mainArr[i] > 0) {
            sum += mainArr[i];
        }
    }
    getQESE('#inKetQua').innerHTML = 'Tổng các số dương có trong mảng là: ' + sum;
}


// Đếm số dương trong mảng
function countPosNum() {
    var count = 0;
    for (var i = 0; i < mainArr.length; i++) {
        if (mainArr[i] > 0) {
            count++;
        }
    }
    getQESE('#inKetQua').innerHTML = 'Các số dương có trong mảng là: ' + count + ' số';
}


// Tìm số nhỏ nhất trong mảng
function findMinNum() {
    var minNum = mainArr[0];
    for (var i = 1; i <= mainArr.length; i++) {
        if (mainArr[i] < minNum) {
            minNum = mainArr[i];
        }
    }
    getQESE('#inKetQua').innerHTML = 'Số nhỏ nhất có trong mảng là: ' + minNum;
}


// Tìm số dương nhỏ nhất trong mảng
function findMinPos() {
    // Gọi hàm lọc số nguyên dương
    var cloneArr = posFilter(mainArr);

    // Xử lý vấn đề
    var minPosNum = cloneArr[0];
    for (var k = 1; k <= cloneArr.length; k++) {
        if (cloneArr[k] < minPosNum) {
            minPosNum = cloneArr[k];
        }
    }
    getQESE('#inKetQua').innerHTML = 'Số dương nhỏ nhất có trong mảng là: ' + minPosNum;
}


// Tìm số chẵn cuối cùng trong mảng
function findLastPos() {
    // Gọi hàm lọc số nguyên dương
    var cloneArr = posFilter(mainArr);

    // Xử lý
    var lastPosNum = cloneArr[0];
    for (var k = 1; k <= cloneArr.length; k++) {
        if (cloneArr[k] % 2 == 0) {
            lastPosNum = cloneArr[k];
        }
    }

    if (lastPosNum % 2 != 0) {
        getQESE('#inKetQua').innerHTML = 'Mảng này không có số chẵn nên trả về -1 nha';
    } else {
        getQESE('#inKetQua').innerHTML = 'Số chắn cuối cùng có trong mảng là ' + lastPosNum;
    }

}