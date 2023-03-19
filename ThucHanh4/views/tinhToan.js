exports.tinhToan = function(a = 0,b = 0,phepTinh=''){
    var soA = parseInt(a);
    var soB = parseInt(b);
    switch(phepTinh){
        case 'cong':{
            return soA + soB;
        }
        case 'tru':{
            return a - b;
        }
        case 'nhan':{
            return a * b;
        }
        case 'chia':{
            return a / b;
        }
        default:
            return 0;
    }
}