// 문자열 타입 지정
var first_name = 'ahn';
// array 타입 지정
var my_name = ['huiwon', 'uzin', 'sanghyun'];
//ojbect 타입 지정
var ohter_name = { name: 'ahn' };
// object 타입 key가 옵션(포함이 미확실 할때)
var second_name = {};
// 다양한 타입 지정
var third_name = 123;
// 함수 파라미터와 return에 타입 지정
function my_func(x) {
    return x * 2;
}
my_func(3);
var edison = [123, false];
var alexis = { name: '123' };
// class 문법에 type 추가
var user_class = /** @class */ (function () {
    function user_class(name) {
        this.name = name;
    }
    return user_class;
}());
