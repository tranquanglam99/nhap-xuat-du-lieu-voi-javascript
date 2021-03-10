/*  nhập dữ liệu*/
a = prompt(" nhập a ");
b = prompt(" nhập b ");
/* xữ lý */
a = parseInt(a);
b = parseInt(b);
x = -b/a ;
if(a == 0 ){
    if(b == 0){
        document.write(" phương trình vô số nghiệm");
    }else{
        document.write(" phương trình vô nghiệm ");
    }
    
}else {
    document.write(" phương trình có nghiệm x = " + x);
}