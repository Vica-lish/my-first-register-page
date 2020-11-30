function userName() {
    let name = document.getElementById('fullName').value;
    let tooShort = 'The Name have to be at least 2 characters';
    if (name.length < 3) {
        document.getElementById('moreThan').innerHTML = tooShort;
    } else {
        document.getElementById('moreThan').innerHTML = '✔';
    }

    let notEnough = 'Password to short. At least 6 characters';
    let tooLong = 'Password to long. less than 8 characters';
    let length = document.getElementById('howLong').value;
    if (length.length < 6) {
        document.getElementById('changPass').innerHTML = notEnough;
    } else if (length.length > 8) {
        document.getElementById('changPass').innerHTML = tooLong;
    } else {
        document.getElementById('changPass').innerHTML = '✔';
    }

    let match = document.getElementById('same').value;
    let notMatch = 'Passwords must match';
    if (match != length) {
        document.getElementById('notTheSame').innerHTML = notMatch;
    } else if (match.length == 0) {
        document.getElementById('notTheSame').innerHTML = 'write the same password';
    } else {
        document.getElementById('notTheSame').innerHTML = '✔';
    }

    let email = document.getElementById('atSign').value;
    let atSign = 'Email must have @ sign';
    if (email.indexOf('@') == -1) {
        document.getElementById('changMail').innerHTML = atSign;
    } else {
        document.getElementById('changMail').innerHTML = '✔';
    }
}