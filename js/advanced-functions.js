/** Thao tác nâng cao với mảng */

// Clone array
function cloneArr(arr1) {
    var arr2 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
    }

    return arr2;
}

// Ẩn/ hiện section hoán đổi phần tử
getQESE('#hoandoiBtn').onclick = function () {
    getQESE('#hoanDoi').classList.toggle("position-after");
}

// Ẩn hiện section nhập mảng số thực
getQESE('#btnDemSoNguyen').onclick = function () {
    getQESE('#themMangThuc').classList.toggle("position-after");
}


// Đổi chỗ 2 giá trị trong mảng theo vị trí
function changeIndex() {
    // Input
    var index1 = Number(getQESE('#viTriMot').value);
    var index2 = Number(getQESE('#viTriHai').value);

    var arrSub = cloneArr(mainArr);

    // Process
    var tempValue = 0;
    var value1 = 0;
    var value2 = 0;

    // Lấy phần tử muốn đổi vị trí
    for (var i = 0; i < arrSub.length; i++) {
        if (index1 == i) {
            value1 = arrSub[i];
        } else if (index2 == i) {
            value2 = arrSub[i];
        }
    }

    // Hoán đổi giá trị
    tempValue = value1;
    value1 = value2;
    value2 = tempValue;

    // Tiến hành đổi vị trí
    for (var j = 0; j < arrSub.length; j++) {
        if (index1 == j) {
            arrSub[j] = value1;
        } else if (index2 == j) {
            arrSub[j] = value2;
        }
    }

    // Output
    getQESE('#inKetQua').innerHTML = 'Mảng sau khi hoán đổi vị trí ' + index1 + ' và ' + index2 + ' là: ' + '<br>' + arrSub;
}


// Sắp xếp mảng theo thứ tự tăng dần
function lowToHigh() {
    // Clone arr
    var arrSub2 = cloneArr(mainArr);

    // Process
    for (var i = 0; i < arrSub2.length - 1; i++) {
        for (var j = 0; j < arrSub2.length; j++) {
            if (arrSub2[j] > arrSub2[j + 1]) {
                var tempValue = arrSub2[j];
                arrSub2[j] = arrSub2[j + 1];
                arrSub2[j + 1] = tempValue;
            }
        }
    }

    // Output
    getQESE('#inKetQua').innerHTML = 'Mảng sau khi sắp xếp theo thứ tự tăng dần ' + '<br>' + arrSub2;
}


// Function kiểm tra số nguyên tố
function isSNT(number) {
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            checkSNT = false;
            break;
        }
    }

    return checkSNT;
}

// Tìm số nguyên tố đầu tiên trong mảng
function findFirstNum() {
    // Clone array
    var arrSub3 = cloneArr(mainArr);

    // Process
    var countSNT = 0;
    for (var i = 0; i < arrSub3.length; i++) {
        if (isSNT(arrSub3[i]) && arrSub3[i] > 1) {
            countSNT++;
            var firstSNT = arrSub3[i];
            break;
        }
    }

    // Output
    if (countSNT == 0) {
        getQESE('#inKetQua').innerHTML = 'Mảng này không có số nguyên tố nào nên tui trả về -1';
    } else {
        getQESE('#inKetQua').innerHTML = 'Số nguyên tố đầu tiên trong mảng là ' + firstSNT;
    }
}


// Function kiểm tra số thực
function isFloatNum(number) {
    checkFloat = false;
    if (number % 1 != 0 && number > 0) {
        checkFloat = true;
    }

    return checkFloat;
}

// Thêm số thực vào mảng
function addFloatNum() {
    // Input
    var nhapSoThuc = Number(getQESE('#nhapSoThuc').value);

    // Process
    if (nhapSoThuc == '') {
        alert('Ơ kìa nhập số vào đi chứ !');
    } else if (!isFloatNum(nhapSoThuc)) {
        alert('Nhập số thực mà người anh em !');
    } else {
        mainArr.push(nhapSoThuc);
        getQESE('#nhapSoThuc').value = '';
    }

    // Output
    getQESE('#mangThemSoThuc').innerHTML = 'Mảng sau khi thêm số thực vào nó như này nè: ' + '<br>' + mainArr;
}

// Đếm số nguyên trong mảng
function countInt() {
    // Process
    var countInt = 0;
    for (var i = 0; i < mainArr.length; i++) {
        if (!isFloatNum(mainArr[i])) {
            countInt++;
        }
    }

    // Output
    getQESE('#inKetQua').innerHTML = 'Mảng này có ' + countInt + ' số nguyên';
}

// So sánh số lượng số âm và số dương
function compareNums() {
    // Process
    var countAm = 0;
    var countDuong = 0;
    for (var i = 0; i < mainArr.length; i++) {
        if (mainArr[i] < 0) {
            countAm++;
        } else {
            countDuong++;
        }
    }

    // Output
    if (countAm < countDuong) {
        getQESE('#inKetQua').innerHTML = 'Mảng này có ' + countAm + ' số âm và ' + countDuong + ' số dương ' + '<br>' + '=> Số lượng giá trị âm nhỏ hơn số lượng giá trị dương';
    } else if (countAm > countDuong) {
        getQESE('#inKetQua').innerHTML = 'Mảng này có ' + countAm + ' số âm và ' + countDuong + ' số dương ' + '<br>' + '=> Số lượng giá trị âm lớn hơn số lượng giá trị dương ';
    } else {
        getQESE('#inKetQua').innerHTML = 'Mảng này có ' + countAm + ' số âm và ' + countDuong + ' số dương ' + '<br>' + '=> Số lượng giá trị âm bằng với số lượng giá trị dương ';
    }
}