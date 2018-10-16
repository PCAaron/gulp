/**
 * descriptions:通用z方法逻辑的封装
 * author:aaron<1021048274@qq.com>
 * **/

const definedCommon={
    baseHost:'',
    formatTime:(time,splitType)=>{
        var date;

        if (time){
            date=new Date(time)
        }else{
            date=new Date()
        }

        //var date=new Date(time)

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        if(splitType){
            return year+''+splitType+''+month+''+splitType+''+day;
        }
        else{
            return year + '-' + month + '-'  + day;
        }
    },
    validatePhone:function(val){
        const phoneReg = /^\d{6,}$/;
        /*const phoneReg=/^(5[1-6,9]|6[0-9]|9[0-8])\d{6}$/;*/
        //const phoneReg=/^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-8])|(18[0-9])|166|189|198|199|(147))\d{8}/;
        return phoneReg.test(val)
    },
    validateEmail:function (val) {
        const emailReg=/^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(?:\.[0-9A-Za-z]+)+$/;
        return emailReg.test(val)
    }
}

