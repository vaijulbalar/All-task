function myform() {

    let flag = true;
    let Nm = document.getElementById('nm').value;
    let Em = document.getElementById('em').value;
    let Mn = document.getElementById('mn').value;
    let St = document.getElementById('st').value;
    let Ct = document.getElementById('ct').value;
    let Add = document.getElementById('add').value;
    let state1 = st.options[st.selectedIndex].text;
    let city1 = ct.options[ct.selectedIndex].text;
    let letter = /^[ a-zA-Z]+$/;
    let Number = /^[0-9]+$/;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let address = /^[a-zA-Z0-9\s,'-]*$/;
    console.log(Nm.match(letter));
    if (Nm == "") {
        document.getElementById('nm1').innerText = "please enter name";

        flag = false;
    }
    else if (Nm.match(letter) == null) {
        document.getElementById('nm1').innerText = "please enter valid name";
        flag = false;
    }
    else {
        document.getElementById('nm1').innerText = "";
        flag = true;

    }
    if (Em == "") {

        document.getElementById('em1').innerText = "please enter  email";
        flag = false;
    }
    else if (Em.match(mailformat) == null) {
        document.getElementById('em1').innerText = "please enter valid email";
        flag = false;
    }
    else {
        document.getElementById('em1').innerText = "";
        flag = true;
    }
    if (Mn == "") {

        document.getElementById('mn1').innerText = "please enter mobile";
        flag = false;
    }
    else if (Mn.match(Number) == null) {
        document.getElementById('mn1').innerText = "please enter valid mobile";
        flag = false;
    }
    else if (Mn.length < 10) {
        document.getElementById('mn1').innerText = "please enter valid mobile";
        flag = false;
    }
    else if (Mn.length > 10) {
        document.getElementById('mn1').innerText = "please enter valid mobile";
        flag = false;
    }
    else {
        document.getElementById('mn1').innerText = "";
        flag = true;
    }
    if (St == "/") {
        document.getElementById('st1').innerText = "please select state";
        flag = false;
    }
    else {
        document.getElementById('st1').innerText = ""
        flag = true;
    }

    if (Ct == "/") {
        document.getElementById('ct1').innerText = "please select city";
        flag = false;
    }
    else {
        document.getElementById('ct1').innerText = ""
        flag = true;
    }
    if (Add == "") {
        document.getElementById('add1').innerText = "please enter address";
        flag = false;
    }
    else if (Add.match(address) == null) {
        document.getElementById('add1').innerText = "please enter valid address";
        flag = false;
    }
    else {
        document.getElementById('add1').innerText = "";
        let data = {
        name: Nm,
        email: Em,
        mob: Mn,
        state: state1,
        city: city1,
        address: Add
    }
    localStorage.setItem(Nm, JSON.stringify(data));
    alert("your data stored sucessfully");
    }

    
    return flag;

}

function fetch() {
    let Nm = document.getElementById('nm').value;
    let Em = document.getElementById('em');
    let Mn = document.getElementById('mn')
    let St = document.getElementById('st')
    let Ct = document.getElementById('ct')
    let Add = document.getElementById('add')
    // let option = document.createElement(option);
    // option.setAttribute('class',)
    // Ct.appendChild(option)

    let key, count = 0;
    if (Nm == "") {
        document.getElementById('nm1').innerText = "please enter name";
    }

    else {
        document.getElementById('nm1').innerText = "";
        for (let i = 0; i < localStorage.length; i++) {
            key = localStorage.key(i);
            if (key == Nm) {
                let data = localStorage.getItem(key)
                let data1 = JSON.parse(data);
                Em.value = data1.email;
                Mn.value = data1.mob;
                St.value = data1.state;
                Ct[0].innerHTML = data1.city;
                Add.value = data1.address;
                count++;
            }
            
        }
        if(count<1)
                alert("no such data is found")
    }
    return false;
}

function select() {

    let Gujarat = ['Ahemedabad', 'Bharuch', 'Rajkot', 'Surat', 'Vadodara']
    let Rajasthan = ['Ajmer', 'Bikaner', 'Kota', 'Jaipur', 'jodhpur']
    let Maharashtra = ['Jalgaon', 'Thane', 'mumbai', 'Pune', 'Nasik']
    let Punjab = ['ludhiana', 'Amritsar', 'jalandar', 'patiala', 'Pathankot']
    let Haryana = ['Faridabad', 'Gurugram', 'Panipat', 'Ambala', 'Rohtak']

    let cityelem = document.getElementById('ct');
    let stateelem = document.getElementById('st').value;

    if (stateelem == "Gujarat") {
        cityelem[1].innerHTML = "Ahemedabad";
        cityelem[2].innerHTML = 'Bharuch';
        cityelem[3].innerHTML = 'Rajkot';
        cityelem[4].innerHTML = 'Surat';
        cityelem[5].innerHTML = 'Vadodara';
        // cityelem[1].setAttribute("value","Ahemedabad")
        
    }
    else if (stateelem == "Rajasthan") {
        cityelem[1].innerHTML = 'Ajmer';
        cityelem[2].innerHTML = 'Bikaner';
        cityelem[3].innerHTML = 'Kota';
        cityelem[4].innerHTML = 'Jaipur';
        cityelem[5].innerHTML = 'jodhpur';
    }
    else if (stateelem == "Haryana") {
        cityelem[1].innerHTML = 'Faridabad';
        cityelem[2].innerHTML = 'Gurugram';
        cityelem[3].innerHTML = 'Panipat';
        cityelem[4].innerHTML = 'Ambala';
        cityelem[5].innerHTML = 'Rohtak';
    }

    else if (stateelem == "Punjab") {
        cityelem[1].innerHTML = 'ludhiana';
        cityelem[2].innerHTML = 'Amritsar';
        cityelem[3].innerHTML = 'jalandar';
        cityelem[4].innerHTML = 'patiala';
        cityelem[5].innerHTML = 'Pathankot';
    }
    else if (stateelem == "Maharashtra") {
        cityelem[1].innerHTML = 'Jalgaon';
        cityelem[2].innerHTML = 'Thane';
        cityelem[3].innerHTML = 'mumbai';
        cityelem[4].innerHTML = 'Pune';
        cityelem[5].innerHTML = 'Nasik';
    }


}