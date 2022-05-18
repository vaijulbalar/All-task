

function fill() {
    var flag = true;
    // let lin=document.createElement("a")
    // var fg=document.getElementsByClassName("err")
    // for(let i=0;i<fg.length;i++){
    //     fg[i].innerHTML=lin;
    // }

    // file Number.........
    
    
    if (document.getElementById("file").value == "") {
        
        document.getElementById("file1").innerHTML = "0.please enter file number";
        flag = false;
    }
    else {
        
        document.getElementById("file1").innerHTML = "";
        var f=document.getElementById("file").value;
        if(f.length<12){
        document.getElementById('file11').innerText="0.1 please enter 12 digit";
        }
        else if(f.length>12){
            document.getElementById('file11').innerText="0.1 please enter 12 digit";  
        }
        else if(f.length==12){
            document.getElementById('file11').innerText="";
            // special(f); 
            fialphanumeric(f);
            my(f);
            Idate(f);
            
        }
        flag = true;
    }
    
    function Idate(f){
        var td=new Date();
        td.setDate(td.getDate()-10);
        var Y=td.getFullYear();
        var y=Y.toString();
        
        if(f[10]==y[2] && f[11]==y[3]){
            document.getElementById('filea').innerText="";
        }
        else{
            document.getElementById('filea').innerText="enter valid file number";
        }
        
        
        
    }
    function fialphanumeric(inputtxt)
    {
        
  var letterNumber = /^[0-9A-Z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('file1111').innerText="";
      return true;
  }
  else{
       document.getElementById('file1111').innerText="Special and small caps not allowed";
       return false;
  }
}
    // function special(f){
        
    //     var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
        
    //     for(var i=0; i < f.length; i++){
    //         if(iChars.indexOf(f.charAt(i)) != -1){
    //            document.getElementById('file1111').innerText="0.2 Not allowed special character";
    //            return false;
    //         }

    //         else{
    //             document.getElementById('file1111').innerText=""; 
    //         }
    //     }}
    function my(f){
    var count=0;
    for(var i=0;i<3;i++){
        if(f[i]<='9'&& f[i]>='0'){
           count++;
        }
        if(count>0){
            document.getElementById('file111').innerText="0.3 Not starting with number"; 
        }
        else{
            document.getElementById('file111').innerText=""; 
        }
    }}
    
    

    // 1.1...........  
    if (document.querySelector('input[name="choice"]:checked') == null) {
        //if(document.getElementsByClassName('hh').checked==false){
        document.getElementById("ra1").innerHTML = (" 1.1 please select any one");
        flag = false;
    }
    else {
        document.getElementById("ra1").innerHTML = "";
        flag = true;
    }
    //upload photo.....
    var Up=document.getElementById("up").value;
    if (document.getElementById("up").value == "") {
        document.getElementById("up1").innerHTML = ("Please upload your photo");
        flag = false;
    }
    else {
        document.getElementById("up1").innerHTML = "";
        flag = true;
        var allowedExtensions = 
                    /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
                   if(!allowedExtensions.exec(Up)){
                    document.getElementById("up11").innerText="not allowed zip file " ;
                   }
                   else{
                    document.getElementById("up11").innerText=""; 
                   }
    }


    //upload signature.....
    var Us=document.getElementById("us").value;
    if (document.getElementById("us").value == "") {
        document.getElementById("us1").innerHTML = ("Please upload your signature");
        flag = false;
    }
    else {
        document.getElementById("us1").innerHTML = "";
        var sallowedExtensions = 
        /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
       if(!sallowedExtensions.exec(Us)){
        document.getElementById("us11").innerText="not allowed zip file " ;
       }
       else{
        document.getElementById("us11").innerText=""; 
       }

        flag = true;
    }

    

    // 1.2..............
    var check=document.getElementById('ch1').checked;
    // console.log(check);
    
    if(check == true){

    if (document.querySelector('input[name="reason"]:checked') == null) {
        document.getElementById('ra2').innerHTML = ("1.2 please select reason");
        flag = false;

    }
    else {
        document.getElementById('ra2').innerHTML = "";
        flag = true;
    }
}
// else{
//     document.getElementById('ra2').innerHTML = "";
// }
// var Ch=document.getElementById('ch').checked;
//    if(Ch==true){
//     document.getElementById('ra2').innerHTML = "";
//    }
    // 1.3..............
    var C5=document.getElementById('c5').checked;
    
    var checked=0;
    var tbl_sr=document.getElementById('srea');
    var chec=document.getElementsByTagName("input");

    for(var i=0;i<chec.length;i++){
        if(chec[i].checked){
            checked++;
        }
        
    }
    // console.log(checked);
    if(C5==true){
      if(checked < 1){
        document.getElementById('ra3').innerHTML = ("1.3 please specify reason");
        flag=false;
       }
       else{
        document.getElementById('ra3').innerHTML = "";
        flag=true;
         }
         var R9=document.getElementById('r9').checked;
         if(R9==true){
            document.getElementById('sp2').innerHTML = ("1.3 please enter reason"); 
         }
         else{
            document.getElementById('sp2').innerHTML = ""; 
         }
                

    //     if (document.querySelector('input[name="reason1"]:checked') == null) {
    //     document.getElementById('ra3').innerHTML = ("1.3 please specify reason");
    //     flag = false;

    // }
    //   else {
    //     document.getElementById('ra3').innerHTML = "";
    //     flag = true;
    // }


    // if (document.getElementById("sp").value == "") {
    //     document.getElementById("sp2").innerHTML = ("1.3.1please enter reason 1");
    //     flag = false;
    // }
    // else {
    //     document.getElementById("sp2").innerHTML = "";
    //     flag = true;
    // }

    // if (document.getElementById("sp1").value == "") {
    //     document.getElementById("sp3").innerHTML = ("1.3.2please enter reason 2");
    //     flag = false;
    // }
    // else {
    //     document.getElementById("sp3").innerHTML = "";
    //     flag = true;
    // }
        }
    else{
        document.getElementById("sp3").innerHTML = "";
        document.getElementById("sp2").innerHTML = "";
        document.getElementById('ra3').innerHTML = "";
    }
    // 1.4.........
    if (document.querySelector('input[name="app"]:checked') == null) {
        document.getElementById('app').innerHTML = ("1.4 please select any one");
        flag = false;
    }
    else {
        document.getElementById('app').innerHTML = "";
        flag = true;
    }
    // 1.5.........
    if (document.querySelector('input[name="pas"]:checked') == null) {
        document.getElementById('pas').innerHTML = ("1.5 please select types of application");
        flag = false;
    }
    else {
        document.getElementById('pas').innerHTML = "";
        flag = true;
    }
    // 1.6.........
    
    if (document.querySelector('input[name="val"]:checked') == null) {
        document.getElementById('val').innerHTML = ("1.6 please select passport booklet");
        flag = false;
    }
    else {
        document.getElementById('val').innerHTML = "";
        flag = true;
    }
    //2.1..........
    var A=document.getElementById("anm").value;
    if (document.getElementById("anm").value == "") {
        document.getElementById("anm1").innerHTML = ("2.1 Enter your name");
        flag = false;
    }
    else {
        document.getElementById("anm1").innerHTML = "";
        Aspecial(A);
        An(A);
        flag = true;
    }
    function Aspecial(a){
        
        var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
        console.log(a);
        
        for(var i=0; i < a.length; i++){
            if(iChars.indexOf(a.charAt(i)) != -1){
               document.getElementById('anm11').innerText="2.1  Special character not allowed";
               return false;
            }

            else{
                document.getElementById('anm11').innerText=""; 
            }
        }}

    function An(a){
    var count=0;
    for(var i=0;i<a.length;i++){
        if(a[i]<='9'&& a[i]>='0'){
           count++;
        }
        if(count>0){
            document.getElementById('anm111').innerText="2.1 Number is not allowed"; 
        }
        else{
            document.getElementById('anm111').innerText=""; 
        }
    }}

    //2.1.1............
    var N=document.getElementById('snm').value;
    if(document.getElementById('snm').value==""){
        document.getElementById('snm1').innerHTML=("2.1.1 Enter your surname");
        flag=false;
    }
    else{
        document.getElementById('snm1').innerHTML="";
        Sspecial(N);
        Sn(N);
        flag=true;
    }
    
    function Sspecial(N){
        
        var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
        console.log(N);
        
        for(var i=0; i < N.length; i++){
            if(iChars.indexOf(N.charAt(i)) != -1){
               document.getElementById('snm11').innerText="2.1.3  Special character not allowed";
               return false;
            }

            else{
                document.getElementById('snm11').innerText=""; 
            }
        }}

    function Sn(N){
    var count=0;
    for(var i=0;i<N.length;i++){
        if(N[i]<='9'&& N[i]>='0'){
           count++;
        }
        if(count>0){
            document.getElementById('snm111').innerText="2.1.4 Number is not allowed"; 
        }
        else{
            document.getElementById('snm111').innerText=""; 
        }
    }}
    
    //2.2........
    // var CO=document.querySelector('input[name="alias"]:checked');
    // console.log(CO);
    if (document.querySelector('input[name="alias"]:checked') == null) {
        document.getElementById('ali1').innerHTML = ("2.2 please select any one");
        flag = false;
    }
    else {
        document.getElementById('ali1').innerHTML = "";
        flag = true;
    }
    //2.3........
    if (document.querySelector('input[name="cname"]:checked') == null) {
        document.getElementById('cnm').innerHTML = ("2.3 please select any one");
        flag = false;
    }
    else {
        document.getElementById('cnm').innerHTML = "";
        flag = true;
    }
    //2.4........
   
    
     var Bd=document.getElementById('db').value; 
    if (document.getElementById("db").value == "") {
        document.getElementById("db1").innerHTML = "2.4 Enter your  Birthdate ";
        flag = false;
    }
    else {
        document.getElementById("db1").innerHTML = "";
        var cdate=Bd;
    cdate=new Date(cdate);
    
    const ONE_MONTHS_AGO = new Date();
    ONE_MONTHS_AGO.setMonth(ONE_MONTHS_AGO.getMonth() - 1)
    
    if(ONE_MONTHS_AGO < cdate){
        document.getElementById("nn").innerText = "Applicant age must be 1 month"; 
    }
    else{
        document.getElementById("nn").innerText = ""; 
    }
    const YEARS_AGO = new Date();
    YEARS_AGO.setFullYear(YEARS_AGO.getFullYear() - 18)
    console.log(YEARS_AGO);
    console.log(cdate);

    if(YEARS_AGO < cdate){
        document.getElementById("fpn").disabled=false;
        document.getElementById("fnt").disabled=false;
        document.getElementById("mpn").disabled=false;
        document.getElementById("mnt").disabled=false;
    }
    else{
        document.getElementById("fpn").disabled=true;
        document.getElementById("fnt").disabled=true;
        document.getElementById("mpn").disabled=true;
        document.getElementById("mnt").disabled=true;
    }
    
        flag = true;
    }
    

    
   
    //2.5.........
    var Pb=document.getElementById('pb').value;
    if (document.getElementById("pb").value == "") {
        document.getElementById("pb1").innerHTML = ("2.5 Enter place of birth");
        flag = false;
    }
    else {
        document.getElementById("pb1").innerHTML = "";
        Pspecial(Pb);
        Pn(Pb)
        flag = true;
    }
    function Pspecial(a){
        
        var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
        console.log(a);
        
        for(var i=0; i < a.length; i++){
            if(iChars.indexOf(a.charAt(i)) != -1){
               document.getElementById('pb11').innerText="2.5 Special character not allowed";
               return false;
            }

            else{
                document.getElementById('pb11').innerText=""; 
            }
        }}

    function Pn(a){
    var count=0;
    for(var i=0;i<a.length;i++){
        if(a[i]<='9'&& a[i]>='0'){
           count++;
        }
        if(count>0){
            document.getElementById('pb111').innerText="2.5 Number is not allowed"; 
        }
        else{
            document.getElementById('pb111').innerText=""; 
        }
    }}
    var Ds=document.getElementById("dst").value;
    if (document.getElementById("dst").value == "") {
        document.getElementById("dst1").innerHTML = ("2.5.1 Enter district name");
        flag = false;
    }
    else {
        document.getElementById("dst1").innerHTML = "";
        flag = true;
    }
    var St=document.getElementById("st").value;
    if (document.getElementById("st").value == "") {
        document.getElementById("st1").innerHTML = ("2.5.2 Enter state name");
        flag = false;
    }
    else {
        document.getElementById("st1").innerHTML = "";
        flag = true;
    }
    var Rg=document.getElementById("reg").value;
    if (document.getElementById("reg").value == "") {
        document.getElementById("reg1").innerHTML = ("2.5.3 Enter region name");
        flag = false;
    }
    else {
        document.getElementById("reg1").innerHTML = "";
        flag = true;
    }
     var count=0;
    for(var i=0;i<Ds.length;i++){
        
        if(Ds[i]==St[i]){
            count++;
        }
        if(count>4){
            document.getElementById('ds').innerText="district and state name must be different";
            
        }
        else{
            document.getElementById('ds').innerText="";
            
        }
        
    }
    var count=0;
    for(var i=0;i<St.length;i++){
        
        if(St[i]==Rg[i]){
            count++;
        }
        // console.log(count);
        if(count>4){
            document.getElementById('sr').innerText=" state and region name must be different";
            
        }
        else{
            document.getElementById('sr').innerText="";
            
        }
        
    }
    //2.6.........
    if (document.querySelector('input[name="gender"]:checked') == null) {
        document.getElementById('gen').innerHTML = ("2.6 please select gender");
        flag = false;
    }
    else {
        document.getElementById('gen').innerHTML = "";
        flag = true;
    }
    //2.7........
    if (document.querySelector('input[name="mstatus"]:checked') == null) {
        document.getElementById('mst').innerHTML = ("2.7 please select marital status");
        flag = false;
    }
    else {
        document.getElementById('mst').innerHTML = "";
        flag = true;
    }
    //2.8.......
    if (document.querySelector('input[name="citizen"]:checked') == null) {
        document.getElementById('ctn').innerHTML = ("2.8 please select your citizenship ");
        flag = false;
    }
    else {
        document.getElementById('ctn').innerHTML = "";
        flag = true;
    }
    //2.9........
    var Pa=document.getElementById("pan").value ;
    if (document.getElementById("pan").value == "") {
        document.getElementById("pan1").innerHTML = ("2.9 Enter pan num");
        flag = false;
    }
    else {
        document.getElementById("pan1").innerHTML = "";
        palphanumeric(Pa);
        flag = true;
    }
    function palphanumeric(inputtxt)
    {
        
  var letterNumber = /^[0-9A-Z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('pan11').innerText="";
      return true;
  }
  else{
       document.getElementById('pan11').innerText="Special and small caps not allowed";
       return false;
  }
}
    //2.10.......
    var Vi=document.getElementById('vid').value;
    if (document.getElementById("vid").value == "") {
        document.getElementById("vid1").innerHTML = ("2.10 Enter voter id ");
        flag = false;
    }
    else {
        document.getElementById("vid1").innerHTML = "";
        valphanumeric(Vi);
        flag = true;
    }
    function valphanumeric(inputtxt)
    {
        
  var letterNumber = /^[0-9A-Z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('vid11').innerText="";
      return true;
  }
  else{
       document.getElementById('vid11').innerText="Special and small caps not allowed";
       return false;
  }
}
  
    
    //2.11..........
    if (document.querySelector('input[name="emp"]:checked') == null) {
        document.getElementById('emp').innerHTML = ("2.11 please select type of employee ");
        flag = false;
    }
    else {
        document.getElementById('emp').innerHTML = "";
        flag = true;
    }
    //2.12...........
    var On=document.getElementById('org').value;
    if (document.getElementById("org").value == "") {
        document.getElementById("org1").innerHTML = (" 2.12 Enter organization name ");
        flag = false;
    }
    else {
        document.getElementById("org1").innerHTML = "";
        if(On.length>60){
            document.getElementById('org111').innerText="2.12 Enter less than 60 word";
            }
        Ospecial(On);
        flag = true;
    }
    function Ospecial(a){
        
        var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
        
        
        for(var i=0; i < a.length; i++){
            if(iChars.indexOf(a.charAt(i)) != -1){
               document.getElementById('org11').innerText="2.12  Special character not allowed";
               return false;
            }

            else{
                document.getElementById('org11').innerText=""; 
            }
        }}

    //2.13...........
    if (document.querySelector('input[name="parent"]:checked') == null) {
        document.getElementById('par').innerHTML = ("2.13 please select any one ");
        flag = false;
    }
    else {
        document.getElementById('par').innerHTML = "";
        flag = true;
    }
    //2.14.........
    if (document.querySelector('input[name="edu"]:checked') == null) {
        document.getElementById('edu').innerHTML = ("2.14 please select any one ");
        flag = false;
    }
    else {
        document.getElementById('edu').innerHTML = "";
        flag = true;
    }
     //2.15.........
     if (document.querySelector('input[name="category"]:checked') == null) {
        document.getElementById('cat').innerHTML = ("2.15 please select your category ");
        flag = false;
    }
    else {
        document.getElementById('cat').innerHTML = "";
        flag = true;
    }
    //2.16.........
    var Se=document.getElementById('Vd').value;
    if(Se=='none'){
        document.getElementById("vdm1").innerHTML = "  ";

    }
    else{
        if(document.getElementById("vm").value==""){
        document.getElementById("vdm1").innerHTML = "2.16 Enter your mark description ";}
        else{
            document.getElementById("vdm1").innerHTML = "";
        }
    }
    console.log(Se);
    // if (document.getElementById("vdm").value == "") {
    //     document.getElementById("vdm1").innerHTML = (" 2.16 Enter your mark  ");
    //     flag = false;
    // }
    // else {
    //     document.getElementById("vdm1").innerHTML = "";
    //     flag = true;
    // }
    //2.17.........
    var Aa=document.getElementById('an').value;
    if (document.getElementById("an").value == "") {
        document.getElementById("an1").innerHTML = ("2.17 Enter your adhar number ");
        flag = false;
    }
    else {
        document.getElementById("an1").innerHTML = "";
        if(Aa.length>12){
            document.getElementById('an11').innerText="2.17 Please enter 12 digit";
        }
        else if(Aa.length<12){
            document.getElementById('an11').innerText="2.17 Please enter 12 digit";
        }
        else if(Aa.length==12){
            document.getElementById('an11').innerText="";
            alphanumeric(Aa);
        }
        flag = true;
    }
    function alphanumeric(inputtxt)
     {
   var letterNumber = /^[0-9]+$/;
   if(inputtxt.match(letterNumber)){
    document.getElementById('an111').innerText="";
       return true;
   }
   else{
        document.getElementById('an111').innerText="Special and caps not allowed";
        return false;
   }
}
    // function Aspecial(a){
        
    //     var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
        
        
    //     for(var i=0; i < a.length; i++){
    //         if(iChars.indexOf(a.charAt(i)) != -1){
    //            document.getElementById('an111').innerText="2.17  Special character not allowed";
    //            return false;
    //         }

    //         else{
    //             document.getElementById('an111').innerText=""; 
    //         }
    //     }}

    //3.1.........
    var Fn=document.getElementById("fnm").value;
    if (document.getElementById("fnm").value == "") {
        document.getElementById("fnm1").innerHTML = ("3.1 Enter your father name ");
        flag = false;
    }
    else {
        document.getElementById("fnm1").innerHTML = "";
        if(Fn.length>500) 
         {
            document.getElementById('fnm111').innerText="Plese enter less than 500 word";
        }
        falphanumeric(Fn);
        flag = true;
    }
    function falphanumeric(inputtxt)
     {
   var letterNumber = /^[a-z A-Z]*$/;
   if(inputtxt.match(letterNumber)){
    document.getElementById('fnm11').innerText="";
       return true;
   }
   else{
        document.getElementById('fnm11').innerText="3.1Special caps and number not allowed";
        return false;
   }
}
  //3.1.1...............
    var Fs=document.getElementById("fsnm").value;
    if (document.getElementById("fsnm").value == "") {
        document.getElementById("fsnm1").innerHTML = ("3.1.1 Enter your father surname ");
        flag = false;
    }
    else {
        document.getElementById("fsnm1").innerHTML = "";
        if(Fs.length>500){
            document.getElementById('fsnm111').innerText="Plese enter less than 500 word";
        }
        fsalphanumeric(Fs);
        flag = true;
    }
    function fsalphanumeric(inputtxt)
     {
   var letterNumber = /^[a-z A-Z]*$/;
   if(inputtxt.match(letterNumber)){
    document.getElementById('fsnm11').innerText="";
       return true;
   }
   else{
        document.getElementById('fsnm11').innerText="3.1.1 Special caps and number not allowed";
        return false;
   }
}
    //3.2.........
    var Mn=document.getElementById("mnm").value;
    if (document.getElementById("mnm").value == "") {
        document.getElementById("mnm1").innerHTML = ("3.2 Enter your mother name  ");
        flag = false;
    }
    else {
        document.getElementById("mnm1").innerHTML = "";
        if(Mn.length>500){
            document.getElementById('mnm111').innerText="Plese enter less than 500 word";
        }
        malphanumeric(Mn);
        flag = true;
    }
    function malphanumeric(inputtxt)
     {
   var letterNumber = /^[a-z A-Z]*$/;
   if(inputtxt.match(letterNumber)){
    document.getElementById('mnm11').innerText="";
       return true;
   }
   else{
        document.getElementById('mnm11').innerText="3.2 Special caps and number not allowed";
        return false;
   }
}
    //3.2.1..................
    var Ms=document.getElementById("msnm").value;
    if (document.getElementById("msnm").value == "") {
        document.getElementById("msnm1").innerHTML = ("3.2.1 Enter your mother surname ");
        flag = false;
    }
    else {
        document.getElementById("msnm1").innerHTML = "";
        if(Ms.length>500){
            document.getElementById('msnm111').innerText="Plese enter less than 500 word";
        }
        msalphanumeric(Ms);
        flag = true;
    }
    function msalphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('msnm11').innerText="";
      return true;
  }
  else{
       document.getElementById('msnm11').innerText="3.2.1 Special caps and number not allowed";
       return false;
  }
}
    //3.3.........
    var Ln=document.getElementById("lnm").value;
    if (document.getElementById("lnm").value == "") {
        document.getElementById("lnm1").innerHTML = ("3.3 Enter your gurdian name  ");
        flag = false;
    }
    else {
        document.getElementById("lnm1").innerHTML = "";
        if(Ln.length>500){
            document.getElementById('lnm111').innerText="Plese enter less than 500 word";
        }
        lalphanumeric(Ln);
        flag = true;
    }
    function lalphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('lnm11').innerText="";
      return true;
  }
  else{
       document.getElementById('lnm11').innerText="3.3 Special caps and number not allowed";
       return false;
  }
} 
//3.3.1................
    var Ls=document.getElementById("lsnm").value;
    if (document.getElementById("lsnm").value == "") {
        document.getElementById("lsnm1").innerHTML = ("3.3.1 Enter your gurdian surname ");
        flag = false;
    }
    else {
        document.getElementById("lsnm1").innerHTML = "";
        if(Ls.length>500){
            document.getElementById('lsnm111').innerText="Plese enter less than 500 word";
        }
        lsalphanumeric(Ls);
        flag = true;
    }
    function lsalphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('lsnm11').innerText="";
      return true;
  }
  else{
       document.getElementById('lsnm11').innerText="3.3.1 Special caps and number not allowed";
       return false;
  }
}
    //3.4.........
    var Sn=document.getElementById("ssnm").value;
    if (document.getElementById("ssnm").value == "") {
        document.getElementById("ssnm1").innerHTML = ("3.4 Enter your spouse name ");
        flag = false;
    }
    else {
        document.getElementById("ssnm1").innerHTML = "";
        if(Sn.length>500){
            document.getElementById('ssnm111').innerText="Plese enter less than 500 word";
        }
        Salphanumeric(Sn);
        flag = true;
    }
    function Salphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('ssnm11').innerText="";
      return true;
  }
  else{
       document.getElementById('ssnm11').innerText="3.4 Special caps and number not allowed";
       return false;
  }
}
//3.4.1.............
    var Ss=document.getElementById("ssnma").value;
    if (document.getElementById("ssnma").value == "") {
        document.getElementById("ssnma1").innerHTML = ("3.4.1 Enter your spouse surname  ");
        flag = false;
    }
    else {
        document.getElementById("ssnma1").innerHTML = "";
        if(Ss.length>500){
            document.getElementById('ssnma111').innerText="Plese enter less than 500 word";
        }
        ssalphanumeric(Ss);
        flag = true;
    }
    function ssalphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('ssnma11').innerText="";
      return true;
  }
  else{
       document.getElementById('ssnma11').innerText="3.4.1 Special caps and number not allowed";
       return false;
  }
}
    //3.5.........
    var Fp=document.getElementById("fpn").value;
    if (document.getElementById("fpn").value == "") {
        document.getElementById("fpn1").innerHTML = ("3.5 Enter father passport number");
        flag = false;
    }
    else {
        document.getElementById("fpn1").innerHTML = "";
        if(Fp.length>8){
            document.getElementById('fpn11').innerText="Not allowed more than 8 num";
        }
        else if(Fp.length<8){
            document.getElementById('fpn11').innerText="Not allowed less than 8 num";
        }
        else if(Fp.length==8){
            document.getElementById('fpn11').innerText="";
            fpalphanumeric(Fp);
        } 
        flag = true;
    }
    function fpalphanumeric(inputtxt){
        var letterNumber = /^[a-z0-9A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('fpn111').innerText="";
      return true;
  }
  else{
       document.getElementById('fpn111').innerText="3.5 Special caps and empty space not allowed";
       return false;
  }
    }
    //3.5.1...................
    var Mp=document.getElementById("mpn").value;
    if (document.getElementById("mpn").value == "") {
        document.getElementById("mpn1").innerHTML = ("3.5.1 Enter mother passport number");
        flag = false;
    }
    else {
        document.getElementById("mpn1").innerHTML = "";
        if(Mp.length>8){
            document.getElementById('mpn11').innerText="Not allowed more than 8 num";
        }
        else if(Mp.length<8){
            document.getElementById('mpn11').innerText="Not allowed less than 8 num";
        }
        else if(Mp.length==8){
            document.getElementById('mpn11').innerText="";
            mpalphanumeric(Mp);
        } 
        flag = true;
    }
    function mpalphanumeric(inputtxt){
        var letterNumber = /^[a-z0-9A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('mpn111').innerText="";
      return true;
  }
  else{
       document.getElementById('mpn111').innerText="3.5.1 Special caps and empty space not allowed";
       return false;
  }}
  //3.5.2.................
    if (document.getElementById("fnt").value == "") {
        document.getElementById("fnt1").innerHTML = ("3.5.2 Enter father nationality");
        flag = false;
    }
    else {
        document.getElementById("fnt1").innerHTML = "";
        flag = true;
    }
    if (document.getElementById("mnt").value == "") {
        document.getElementById("mnt1").innerHTML = ("3.5.3 Enter mother nationality");
        flag = false;
    }
    else {
        document.getElementById("mnt1").innerHTML = "";
        flag = true;
    }
    //4.1..........
    var Hn=document.getElementById("hn").value;
    if (document.getElementById("hn").value == "") {
        document.getElementById("hn1").innerHTML = ("4.1 Enter house no and street name ");
        flag = false;
    }
    else {
        document.getElementById("hn1").innerHTML = "";
        if(Hn.length<10){
            document.getElementById('hn11').innerText="Atleast 10 word is required";
        }
        else if(Hn.length>500){
            document.getElementById('hn11').innerText="Not allowed more than 500 word";
        }
        else{
            document.getElementById('hn11').innerText=" ";
         halphanumeric(Hn);
        flag = true;   
        }
        
    }
    function halphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z ,&-0-9A-Z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('hn111').innerText="";
      return true;
  }
  else{
       document.getElementById('hn111').innerText="4.1 Special caps not allowed";
       return false;
  }
}
//4.1.1..................
    var Vtc=document.getElementById('vtc').value;
    if (document.getElementById("vtc").value == "") {
        document.getElementById("vtc1").innerHTML = ("4.1.1 Enter your city ");
        flag = false;
    }
    else {
        document.getElementById("vtc1").innerHTML = "";
        calphanumeric(Vtc);
        flag = true;
    }
    function calphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('vtc11').innerText="";
      return true;
  }
  else{
       document.getElementById('vtc11').innerText="4.1.1 Special caps and number not allowed";
       return false;
  }
}
//4.1.2................
    var Ds=document.getElementById('dt').value;
    if (document.getElementById("dt").value == "") {
        document.getElementById("dt1").innerHTML = ("4.1.2 Enter district name ");
        flag = false;
    }
    else {
        document.getElementById("dt1").innerHTML = "";
        dsalphanumeric(Ds);
        flag = true;
    }
    function dsalphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('dt11').innerText="";
      return true;
  }
  else{
       document.getElementById('dt11').innerText="4.1.2 Special caps and number not allowed";
       return false;
  }
}
//4.1.3..................
    var Ps=document.getElementById("pst").value;
    if (document.getElementById("pst").value == "") {
        document.getElementById("pst1").innerHTML = ("4.1.3 Enter police station ");
        flag = false;
    }
    else {
        document.getElementById("pst1").innerHTML = "";
        psalphanumeric(Ps);
        flag = true;
    }
    function psalphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('pst11').innerText="";
      return true;
  }
  else{
       document.getElementById('pst11').innerText="4.1.3 Special caps and number not allowed";
       return false;
  }
}
//4.1.4.....................
    var Ut=document.getElementById("ut").value;
    if (document.getElementById("ut").value == "") {
        document.getElementById("ut1").innerHTML = ("4.1.4 Enter state");
        flag = false;
    }
    else {
        document.getElementById("ut1").innerHTML = "";
        ualphanumeric(Ut);
        flag = true;
    }
    function ualphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('ut11').innerText="";
      return true;
  }
  else{
       document.getElementById('ut11').innerText="4.1.4 Special caps and number not allowed";
       return false;
  }
}
//4.1.5...............
    var Pi=document.getElementById("pin").value;
    if (document.getElementById("pin").value == "") {
        document.getElementById("pin1").innerHTML = ("4.1.5 Enter pin no ");
        flag = false;
    }
    else {
        document.getElementById("pin1").innerHTML = "";
        if(Pi.length>6){
            document.getElementById('pin11').innerText="Not allowed more than 6 num";
        }
        else if(Pi.length<6){
            document.getElementById('pin11').innerText="Not allowed less than 6 num";
        }
        else if(Pi.length==6){
            document.getElementById('pin11').innerText="";
            pialphanumeric(Pi);
        }
        
        flag = true;
    }
    function pialphanumeric(inputtxt)
    {
  var letterNumber = /^[0-9]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('pin111').innerText="";
      return true;
  }
  else{
       document.getElementById('pin111').innerText="4.1.5 Special caps and alphabet not allowed";
       return false;
  }
}
//4.1.6....................
    var Mn=document.getElementById("mn").value;
    if (document.getElementById("mn").value == "") {
        document.getElementById("mn1").innerHTML = ("4.1.6 Enter mobile no ");
        flag = false;
    }
    else {
        document.getElementById("mn1").innerHTML = "";
        if(Mn.length>10){
            document.getElementById('mn11').innerText="Not allowed more than 10 num";
        }
        else if(Mn.length<10){
            document.getElementById('mn11').innerText="Not allowed less than 10 num";
        }
        else if(Mn.length==10){
            document.getElementById('mn11').innerText="";
            mnalphanumeric(Mn);
        }
        flag = true;
    }
    function mnalphanumeric(inputtxt)
    {
  var letterNumber = /^[0-9]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('mn111').innerText="";
      return true;
  }
  else{
       document.getElementById('mn111').innerText="4.1.6 Special caps and alphabet not allowed";
       return false;
  }
}
//4.1.7................
    var Tn=document.getElementById("tn").value;
    if (document.getElementById("tn").value == "") {
        document.getElementById("tn1").innerHTML = ("4.1.7 Enter telephone no ");
        flag = false;
    }
    else {
        document.getElementById("tn1").innerHTML = "";
        if(Tn.length>10){
            document.getElementById('tn11').innerText="Not allowed more than 10 num";
        }
        else if(Tn.length<10){
            document.getElementById('tn11').innerText="Not allowed less than 10 num";
        }
        else if(Tn.length==10){
            document.getElementById('tn11').innerText="";
            tnalphanumeric(Tn);
        }
        flag = true;
    }
    function tnalphanumeric(inputtxt)
    {
  var letterNumber = /^[0-9]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('tn111').innerText="";
      return true;
  }
  else{
       document.getElementById('tn111').innerText="4.1.7 Special caps and alphabet not allowed";
       return false;
  }
}
//4.1.8.....................
    var Em=document.getElementById("em").value;
    if (document.getElementById("em").value == "") {
        document.getElementById("em1").innerHTML = ("4.1.8 Enter email ");
        flag = false;
    }
    else {
        document.getElementById("em1").innerHTML = "";
       vemail(Em);
        flag = true;
    }
    function vemail(a){
        
        var iChars = "@.";
         var count=0;
        
        for(var i=0; i < a.length; i++){
           
            if(iChars.indexOf(a.charAt(i)) != -1){
               count++;}}
            
            console.log(count);
            if(count==2){ document.getElementById('em111').innerText="";
                    
                            return true;}
               
            else{
                document.getElementById('em111').innerText="enter valid email"; 
                return false;
            }
        }
    // function vemail(Em){
    //  var count=0;
    // for(var i=0;i<Em.length;i++){
        
    //     if(Em.length[i]=="@"){
    //         count++;
    //     }
    //     if(count==1){
    //         document.getElementById('em111').innerText="";
    //         console.log(count);
    //     }
    //     else{
    //         document.getElementById('em111').innerText="Please Enter valid email"; 
           
    //     }
    // }}
//     function Validatemail(Einput)
//    {
//       var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if(inputText.value.match(mailformat)){
//             document.getElementById('em111').innerText="";
//             return true;
// }                                  
//             else{
//                 document.getElementById('em111').innerText="Please Enter valid email";
//             return false;
//             } 
// }
    //4.2...........
    if(document.querySelector('input[name="padd"]:checked')==null){
        document.getElementById('padd').innerHTML= "4.2 please select any one";
        flag=false; 

    }
    else{
        document.getElementById('padd').innerHTML="";
        flag=true;
    }
    //5...........
    var D1=document.getElementById('da').checked;
    var Ea=document.getElementById("ena").value;
    if(D1==true){
    if (document.getElementById("ena").value == "") {
        document.getElementById("ena1").innerHTML = "5. Enter your address ";
        flag = false;
    }
    else {
        document.getElementById("ena1").innerHTML = "";
        if(Ea.length<10){
            document.getElementById('ena11').innerText="Atleast 10 word is required";
        }
        else if(Ea.length>500){
            document.getElementById('ena11').innerText="Not allowed more than 500 word";
        }
        else{
            document.getElementById('ena11').innerText="";
        }
        enalphanumeric(Ea);
        flag = true;
    }
    function enalphanumeric(inputtxt)
    {
  var letterNumber = /^[a-z ,&-0-9A-Z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('ena111').innerText="";
      return true;
  }
  else{
       document.getElementById('ena111').innerText="5. Special caps not allowed";
       return false;
  }}
//5.1.....................
  var Emn=document.getElementById("emn").value;
    if (document.getElementById("emn").value == "") {
        document.getElementById("emn1").innerHTML = "5.1 Enter your emergency number ";
        flag = false;
    }
    else {
        document.getElementById("emn1").innerHTML = "";
        if(Emn.length>10){
            document.getElementById('emn11').innerText="Not allowed more than 10 num";
        }
        else if(Emn.length<10){
            document.getElementById('emn11').innerText="Not allowed less than 10 num";
        }
        else if(Emn.length==10){
            document.getElementById('emn11').innerText="";
            emnalphanumeric(Emn);
        }
        flag = true;
    }
    function emnalphanumeric(inputtxt)
    {
  var letterNumber = /^[0-9]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('emn111').innerText="";
      return true;
  }
  else{
       document.getElementById('emn111').innerText="5.1 Special caps and alphabet not allowed";
       return false;
  }
}
//5.2...............
    var Etn=document.getElementById("etn").value;
    if (document.getElementById("etn").value == "") {
        document.getElementById("etn1").innerHTML = "5.2 Enter your emergency telephone ";
        flag = false;
    }
    else {
        document.getElementById("etn1").innerHTML = "";
        if(Etn.length>10){
            document.getElementById('etn11').innerText="Not allowed more than 10 num";
        }
        else if(Etn.length<10){
            document.getElementById('etn11').innerText="Not allowed less than 10 num";
        }
        else if(Etn.length==10){
            document.getElementById('etn11').innerText="";
            etnalphanumeric(Etn);
        }
        flag = true;
    }
    function etnalphanumeric(inputtxt)
    {
  var letterNumber = /^[0-9]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('etn111').innerText="";
      return true;
  }
  else{
       document.getElementById('etn111').innerText="5.2 Special caps and alphabet not allowed";
       return false;
  }
}
//5.3...................
    var Eem=document.getElementById("eem").value;
    if (document.getElementById("eem").value == "") {
        document.getElementById("eem1").innerHTML = "5.3 Enter your emergency email ";
        flag = false;
    }
    else {
        document.getElementById("eem1").innerHTML = "";
        eemail(Eem);
        flag = true;
    }
    function eemail(aa){
        
        var iChars = "@.";
        var count=0;
        
        for(var i=0; i < aa.length; i++){
            if(iChars.indexOf(aa.charAt(i)) != -1){
               count++;
            }}
            if(count==2){ document.getElementById('eem11').innerText="";
                            return true;}
               
            else{
                document.getElementById('eem11').innerText="enter valid email"; 
                return false;
            }
        }

}
    // else{
    //     document.getElementById("eem1").innerHTML = ""; 
    //     document.getElementById("etn1").innerHTML = "";
    //     document.getElementById("emn1").innerHTML = "";
    //     document.getElementById("ena1").innerHTML = "";
    // }
    //6.1..........
    var check=document.getElementById('ch1').checked;
    // console.log(check);
    var In=document.getElementById('inm').value;
    if(check == true){
    if (document.getElementById("inm").value == "") {
        document.getElementById("inm1").innerHTML = "6.1 Enter your identity certificate ";
        flag = false;
    }
    else {
        document.getElementById("inm1").innerHTML = "";
        if(In.length>8){
            document.getElementById('inm11').innerText="Not allowed more than 8 num";
        }
        else if(In.length<8){
            document.getElementById('inm11').innerText="Not allowed less than 8 num";
        }
        else if(In.length==8){
            document.getElementById('inm11').innerText="";
            inalphanumeric(In);
        } 
        flag = true;
    }
    function inalphanumeric(inputtxt){
        var letterNumber = /^[a-z0-9A-Z]*$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('inm111').innerText="";
      return true;
  }
  else{
       document.getElementById('inm111').innerText="6.1 Special caps and empty space not allowed";
       return false;
  }
    }
    //6.1.1.................
    var Di=document.getElementById("di").value ;
    if (document.getElementById("di").value == "") {
        document.getElementById("di1").innerHTML = "6.1.1 Enter issue date ";
        flag = false;
    }
    else {
        document.getElementById("di1").innerHTML = "";
        var givendate=Di;
        var cudate=new Date();
        givendate=new Date(givendate);
        if(givendate>cudate){
            document.getElementById("di11").innerText="Future date is not allowed";
        }
        else{
            document.getElementById("di11").innerText="";
        }
        flag = true;
    }
    //6.1.2.................
    var De=document.getElementById("de").value;
    if (document.getElementById("de").value == "") {
        document.getElementById("de1").innerHTML = "6.1.2 Enter Expiry date ";
        flag = false;
    }
    else {
        document.getElementById("de1").innerHTML = "";
        
        var sdate=De;
        sdate=new Date(sdate);
        
        console.log(givendate);
        if(givendate>sdate){
            document.getElementById("de11").innerText="Expiry date must greater than issue date";
        }
        else{
            document.getElementById("de11").innerText="";
        }
        flag = true;
    }
    if (document.getElementById("pi").value == "") {
        document.getElementById("pi1").innerHTML = "6.1.3 Enter place of issue ";
        flag = false;
    }
    else {
        document.getElementById("pi1").innerHTML = "";
        flag = true;
    }
    //6.2...........
    if(document.querySelector('input[name="apas"]:checked')==null){
        document.getElementById('apas').innerHTML= "6.2 please select any one";
        flag=false; 

    }
    else{
        document.getElementById('apas').innerHTML="";
        flag=true;
    }} 
    
    var check1=document.getElementById('y1').checked;
    if(check1==true){
    if (document.getElementById("fnu").value == "") {
        document.getElementById("fnu1").innerHTML = "6.2.1 Enter file numbere ";
        flag = false;
    }
    else {
        document.getElementById("fnu1").innerHTML = "";
        var Ef=document.getElementById("fnu").value;
        if(Ef.length<12){
        document.getElementById('fnu11').innerText="6.2.1 please enter 12 digit";
        }
        else if(Ef.length>12){
            document.getElementById('fnu11').innerText="6.2.1 please enter 12 digit";  
        }
        else if(Ef.length==12){
            document.getElementById('fnu11').innerText="";
            especial(Ef); 
            emy(Ef);
            eIdate(Ef);
            
        }
        flag = true;
    }
    function eIdate(f){
        // var Di=document.getElementById("di").value ;

        var td=new Date(Di);
        console.log(td);
        // td.setDate(td.getDate()-10);
        // console.log(td);
        var Y=td.getFullYear();
        var y=Y.toString();
        
        if(f[10]==y[2] && f[11]==y[3]){
            document.getElementById('fnua').innerText="";
        }
        else{
            document.getElementById('fnua').innerText="enter valid file number";
        }
        
        
        
    }
    function especial(f){
        
        var iChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";
        
        for(var i=0; i < f.length; i++){
            if(iChars.indexOf(f.charAt(i)) != -1){
               document.getElementById('fnu1111').innerText="0.2 Not allowed special character";
               return false;
            }

            else{
                document.getElementById('fnu1111').innerText=""; 
            }
        }}
    function emy(f){
    var count=0;
    for(var i=0;i<3;i++){
        if(f[i]<='9'&& f[i]>='0'){
           count++;
        }
        if(count>0){
            document.getElementById('fnu111').innerText="0.3 Not starting with number"; 
        }
        else{
            document.getElementById('fnu111').innerText=""; 
        }
    }}

    //6.2...........
    if (document.getElementById("nid").value == "") {
        document.getElementById("nid1").innerHTML = "6.2.2 Enter date of passport ";
        flag = false;
    }
    else {
        document.getElementById("nid1").innerHTML = "";
        flag = true;
    }
    //6.2.3...........
    var Anp=document.getElementById("npo").value;
    if (document.getElementById("npo").value == "") {
        document.getElementById("npo1").innerHTML = "6.2.3 Enter name of place";
        flag = false;
    }
    else {
        document.getElementById("npo1").innerHTML = "";
        anpalphanumeric(Anp);
        flag = true;
    }
    function anpalphanumeric(inputtxt)
    {
        
  var letterNumber = /^[A-Z a-z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('npo11').innerText="";
      return true;
  }
  else{
       document.getElementById('npo11').innerText="Special and number not allowed";
       return false;
  }
}  
}

//7.1.1.........
if(document.querySelector('input[name="a1"]:checked')==null){
    document.getElementById('h1').innerHTML= "7.1.1 please select any one";
    flag=false; 

}
else{
    document.getElementById('h1').innerHTML="";
    flag=true;
}
//7.1.2.........
if(document.querySelector('input[name="b1"]:checked')==null){
    document.getElementById('h2').innerHTML= "7.1.2 please select any one";
    flag=false; 

}
else{
    document.getElementById('h2').innerHTML="";
    flag=true;
}
//7.1.3.........
if(document.querySelector('input[name="c1"]:checked')==null){
    document.getElementById('h3').innerHTML= "7.1.3 please select any one";
    flag=false; 

}
else{
    document.getElementById('h3').innerHTML="";
    flag=true;
}
//7.1.4.........
if(document.querySelector('input[name="d1"]:checked')==null){
    document.getElementById('h4').innerHTML= "7.1.4 please select any one";
    flag=false; 

}
else{
    document.getElementById('h4').innerHTML="";
    flag=true;
}
//7.2.1.........
if(document.querySelector('input[name="e1"]:checked')==null){
    document.getElementById('h5').innerHTML= "7.2.1 please select any one";
    flag=false; 

}
else{
    document.getElementById('h5').innerHTML="";
    flag=true;
}
//7.3.1.........
if(document.querySelector('input[name="f1"]:checked')==null){
    document.getElementById('h6').innerHTML= "7.3.1 please select any one";
    flag=false; 

}
else{
    document.getElementById('h6').innerHTML="";
    flag=true;
}
//7.3.2.........
if(document.querySelector('input[name="g1"]:checked')==null){
    document.getElementById('h7').innerHTML= "7.3.2 please select any one";
    flag=false; 

}
else{
    document.getElementById('h7').innerHTML="";
    flag=true;
}
//7.3.3.........
if(document.querySelector('input[name="h1"]:checked')==null){
    document.getElementById('h8').innerHTML= "7.3.3 please select any one";
    flag=false; 

}
else{
    document.getElementById('h8').innerHTML="";
    flag=true;
}
//7.4.1.........
if(document.querySelector('input[name="i1"]:checked')==null){
    document.getElementById('h9').innerHTML= "7.4.1 please select any one";
    flag=false; 

}
else{
    document.getElementById('h9').innerHTML="";
    flag=true;
}
//7.4.2.........
if(document.querySelector('input[name="j1"]:checked')==null){
    document.getElementById('h10').innerHTML= "7.4.2 please select any one";
    flag=false; 

}
else{
    document.getElementById('h10').innerHTML="";
    flag=true;
}
//7.4.3.........
if(document.querySelector('input[name="k1"]:checked')==null){
    document.getElementById('h11').innerHTML= "7.4.3 please select any one";
    flag=false; 

}
else{
    document.getElementById('h11').innerHTML="";
    flag=true;
}
//7.4.4.........
if(document.querySelector('input[name="l1"]:checked')==null){
    document.getElementById('h12').innerHTML= "7.4.4 please select any one";
    flag=false; 

}
else{
    document.getElementById('h12').innerHTML="";
    flag=true;
}
//7.5.1.........
if(document.querySelector('input[name="m1"]:checked')==null){
    document.getElementById('h13').innerHTML= "7.5.1 please select any one";
    flag=false; 

}
else{
    document.getElementById('h13').innerHTML="";
    flag=true;
}
//7.5.2.........
if(document.querySelector('input[name="n1"]:checked')==null){
    document.getElementById('h14').innerHTML= "7.5.2 please select any one";
    flag=false; 

}
else{
    document.getElementById('h14').innerHTML="";
    flag=true;
}
//7.5.3.........
if(document.querySelector('input[name="o1"]:checked')==null){
    document.getElementById('h15').innerHTML= "7.5.3 please select any one";
    flag=false; 

}
else{
    document.getElementById('h15').innerHTML="";
    flag=true;
}
//8.1..........
var Fe=document.getElementById("fea").value;
if (document.getElementById("fea").value == "") {
    document.getElementById("fea1").innerHTML = "8.1 Enter fee amount ";
    flag = false;
}
else {
    document.getElementById("fea1").innerHTML = "";
    fealphanumeric(Fe);
    flag = true;
}
function fealphanumeric(inputtxt){
    var letterNumber = /^[0-9.]*$/;
if(inputtxt.match(letterNumber)){
document.getElementById('fea11').innerText="";
  return true;
}
else{
   document.getElementById('fea11').innerText="8.1 Special and alphabet not allowed";
   return false;
}
}
//8.2..........
var Dd=document.getElementById("dd").value;
if (document.getElementById("dd").value == "") {
    document.getElementById("dd1").innerHTML = "8.2 Enter DD num ";
    flag = false;
}
else {
    document.getElementById("dd1").innerHTML = "";
    ddalphanumeric(Dd);
    flag = true;
}
function ddalphanumeric(inputtxt){
    var letterNumber = /^[0-9]*$/;
if(inputtxt.match(letterNumber)){
document.getElementById('dd11').innerText="";
  return true;
}
else{
   document.getElementById('dd11').innerText="8.1.1 Special and alphabet not allowed";
   return false;
}
}
//8.2.1..........
var Ba=document.getElementById("bnm").value;
if (document.getElementById("bnm").value == "") {
    document.getElementById("bnm1").innerHTML = "8.2.1 Enter bank name ";
    flag = false;
}
else {
    document.getElementById("bnm1").innerHTML = "";
    balphanumeric(Ba);
    flag = true;
}
function balphanumeric(inputtxt)
    {
        
  var letterNumber = /^[A-Z a-z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('bnm11').innerText="";
      return true;
  }
  else{
       document.getElementById('bnm11').innerText="Special and number not allowed";
       return false;
  }
}
//8.2.2...........
var Br=document.getElementById("brnm").value;
if (document.getElementById("brnm").value == "") {
    document.getElementById("brnm1").innerHTML = "8.2.2 Enter branch name ";
    flag = false;
}
else {
    document.getElementById("brnm1").innerHTML = "";
    bralphanumeric(Br);
    flag = true;
}
function bralphanumeric(inputtxt)
    {
        
  var letterNumber = /^[A-Z a-z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('brnm11').innerText="";
      return true;
  }
  else{
       document.getElementById('brnm11').innerText="Special and number not allowed";
       return false;
  }
}
//8.2.3..........
if (document.getElementById("dded").value == "") {
    document.getElementById("dded1").innerHTML = "8.2.3 Enter expiry date ";
    flag = false;
}
else {
    document.getElementById("dded1").innerHTML = "";
    flag = true;
}
//8.2.4..........
if (document.getElementById("ddid").value == "") {
    document.getElementById("ddid1").innerHTML = "8.2.4 Enter issue date ";
    flag = false;
}
else {
    document.getElementById("ddid1").innerHTML = "";
    flag = true;
}
//9............
let EC=document.getElementById("ec1").value;
if (document.getElementById("ec1").value == "") {
    document.getElementById("ec11").innerHTML = "9.please fill enclosure ";
    flag = false;
}
else {
    document.getElementById("ec11").innerHTML = "";
    flag = true;
    encalphanumeric(EC);
}

function encalphanumeric(inputtxt)
{
var letterNumber = /^[a-z ,&-0-9A-Z]+$/;
if(inputtxt.match(letterNumber)){
document.getElementById('ec111').innerText="";
  return true;
}
else{
   document.getElementById('ec111').innerText="9 Special caps not allowed";
   return false;
}
}
//9.1............
let EC1=document.getElementById("ec2").value;
if (document.getElementById("ec2").value == "") {
    document.getElementById("ec21").innerHTML = "9.1 please fill enclosure ";
    flag = false;
}
else {
    document.getElementById("ec21").innerHTML = "";
    enccalphanumeric(EC1)
    flag = true;
}
function enccalphanumeric(inputtxt)
{
var letterNumber = /^[a-z ,&-0-9A-Z]+$/;
if(inputtxt.match(letterNumber)){
document.getElementById('ec211').innerText="";
  return true;
}
else{
   document.getElementById('ec211').innerText="9.1 Special caps not allowed";
   return false;
}
}
//10.............
var Spl=document.getElementById("spl").value;
if (document.getElementById("spl").value == "") {
    document.getElementById("spl1").innerHTML = "10. please enter place  ";
    flag = false;
}
else {
    document.getElementById("spl1").innerHTML = "";
    splalphanumeric(Spl);
    flag = true;
}
function splalphanumeric(inputtxt)
    {
        
  var letterNumber = /^[A-Z a-z]+$/;
  if(inputtxt.match(letterNumber)){
   document.getElementById('spl11').innerText="";
      return true;
  }
  else{
       document.getElementById('spl11').innerText="Special and number not allowed";
       return false;
  }
}
//10.1............
if (document.getElementById("sd").value == "") {
    document.getElementById("sd1").innerHTML = "10.1 please enter date ";
    flag = false;
}
else {
    document.getElementById("sd1").innerHTML = "";
    flag = true;
}
//10.2............
var Sus=document.getElementById("sus").value ;
if (document.getElementById("sus").value == "") {
    document.getElementById("sus1").innerHTML = "10.2 please upload signature ";
    flag = false;
}
else {
    document.getElementById("sus1").innerHTML = "";
    var suallowedExtensions = 
    /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
   if(!suallowedExtensions.exec(Sus)){
    document.getElementById("sus11").innerText="not allowed zip file " ;
   }
   else{
    document.getElementById("sus11").innerText=""; 
   }

    flag =false;
}


    
    
    



    return flag;

}

//1.1......................
function ru(){
    
        document.getElementById('c1').disabled=true;
        document.getElementById('c2').disabled=true;
            document.getElementById('c3').disabled=true;
            document.getElementById('c4').disabled=true;
            document.getElementById('c5').disabled=true;
            document.getElementById('c6').disabled=true;
            document.getElementById('inm').disabled=true;
            document.getElementById('di').disabled=true;
            document.getElementById('de').disabled=true;
            document.getElementById('pi').disabled=true;
            document.getElementById('fnu').disabled=true;
            document.getElementById('nid').disabled=true;
            document.getElementById('npo').disabled=true;
            document.getElementById('y1').disabled=true;
            document.getElementById('n1').disabled=true;
            var clel=document.getElementsByClassName("ce");
            for(var i=0;i<clel.length;i++){
                clel[i].disabled=true;

            }
        
        
   
}
function dis(){
    document.getElementById('c1').disabled=false;
        document.getElementById('c2').disabled=false;
        document.getElementById('c3').disabled=false;
        document.getElementById('c4').disabled=false;
        document.getElementById('c5').disabled=false;
        document.getElementById('c6').disabled=false;
        document.getElementById('inm').disabled=false;
        document.getElementById('di').disabled=false;
        document.getElementById('de').disabled=false;
        document.getElementById('pi').disabled=false;
        document.getElementById('fnu').disabled=false;
        document.getElementById('nid').disabled=false;
        document.getElementById('npo').disabled=false;
        document.getElementById('y1').disabled=false;
        document.getElementById('n1').disabled=false;

        

}
//1.3 checkbox unable
function ece(){
    var clel=document.getElementsByClassName("ce");
            for(var i=0;i<clel.length;i++){
                clel[i].disabled=false;

            }

}
//disable checkbox
function dce(){
    var clel=document.getElementsByClassName("ce");
            for(var i=0;i<clel.length;i++){
                clel[i].disabled=true;

            }

}
//6.2.....................
function dis1(){
    document.getElementById('fnu').disabled=true;
    document.getElementById('nid').disabled=true;
    document.getElementById('npo').disabled=true;
}
function ru1(){
    document.getElementById('fnu').disabled=false;
    document.getElementById('nid').disabled=false;
    document.getElementById('npo').disabled=false;
}
//2.1................
function alia(){
    var a="<input type='text' class='size'>";
    document.getElementById('ali').innerHTML=a;
}
function dalias(){
    
    document.getElementById('ali').innerHTML="";
}
//2.2.........
function cnm(){
    var b="<input type='text' class='size'>";
    document.getElementById('cname').innerHTML=b;
}
function dcnm(){
    
    document.getElementById('cname').innerHTML="";
}
//4.2...........
function dadr(){
    
    document.getElementById('add').innerHTML="";
    document.getElementById('ena').disabled=true;
    document.getElementById('emn').disabled=true;
    document.getElementById('etn').disabled=true;
    document.getElementById('eem').disabled=true;


}
function hello(){
    alert("hi")
    var c="<input type='text' class='size'>";
    document.getElementById('add').innerHTML=c;
    document.getElementById('ena').disabled=false;
    document.getElementById('emn').disabled=false;
    document.getElementById('etn').disabled=false;
    document.getElementById('eem').disabled=false;
}
//2.17........
function change(){
    var b="<input type='text' id='vm' class='size'>";
    document.getElementById('vdm').innerHTML=b;
    // document.getElementById('vdm1').innerText="specify your mark";
}

//1.3............
function srea(){
    var r="<input type='text' class='size'>";
    document.getElementById('i9').innerHTML=r;
}
//for number..........
// function Number(evt)
// {
//    var charCode = evt.keyCode;
// //    console.log(charCode);
//    if (charCode<48 || charCode>57)
//       return false;

//    return true;  
// }
//for capitalization..........
// function Capital(evt)
// {
//    var charCode = evt.keyCode;
//    console.log(charCode);
//    if ((charCode<48 || charCode>57) ||(charCode<65 || charCode>97))
//       return false;

//    return true;
// }
// function len(){
//     document.getElementById("file").maxLength=9;
//     document.getElementById("an").maxLength=12;
//     document.getElementById('mn').maxLength=10;
//     document.getElementById('pin').maxLength=6;
//     document.getElementById('tn').maxLength=10;
//     document.getElementById('etn').maxLength=10;
//     document.getElementById('emn').maxLength=10;
     
    
// }