// 함수에 타입 지정하는 법
function my_func(data) {
    return data * 2;
}
my_func(2);
// 파라미터가 옵션일 경우
function my_func2(data) {
}
/* 왜 오류가 나는가?
function my_func3(data :number | string) :void{
    console.log(data + 3)
}

my_func(2)*/
// typescript는 엄격하기 때문에 union type은 연산을 할 수가 없다.
// 문제 1 - 이름을 함수의 파라미터로 입력하면 콘솔창에 '안녕하세요 홍길동'을 출력,
// 아무것도 파라미터로 받지 않는다면 '이름이 없습니다.'를 출력
function text_func(param) {
    if (!param) {
        console.log('이름이 없습니다.');
    }
    else {
        console.log(`안녕하세요 ${param}`);
    }
}
text_func('홍길동');
// 문제 2 - 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력하는 함수
// 단 숫자 또는 문자 이외의 자료가 들어오면 안된다.
function text_func2(param) {
    const temp_data = param.toString();
    return temp_data.length;
}
text_func2(124);
// 문제 3 - 결혼 가능 확률 함수 구현
// 1. 함수의 파라미터로 월소득, 집보유 여부, 매력점수('상', '중', '하')를 입력
// 2. 월 소득은 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 상만 100점
// 총 점수가 600점 이상일시 '결혼 가능'을 return, 그외에는 아무것도 return 하지 않음
function text_func3(money, home, pretty) {
    let temp_home;
    let temp_pretty;
    home ? temp_home = 500 : temp_home = 0;
    pretty === '상' ? temp_pretty = 100 : temp_pretty = 0;
    if (money + temp_home + temp_pretty >= 600) {
        return '결혼가능';
    }
}
text_func3(700, false, '중');
// type이 아직 하나로 확정되지 않을 경우 Type Narrowing 사용
// union type 등 어떤 변수의 타입이 아직 불확실하다면 if문 등으로 Narrowing 해줘야 사용 가능
function my_func4(x) {
    if (typeof x === 'string') {
        return x + '1';
    }
    else {
        return x + 1;
    }
}
my_func4(123);
function my_func5(x) {
    let array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
}
// assertion 문법 -> 타입을 덮어씌우는 문법
// as문법의 용도는 1. Narrowing, 2. 무슨 타입이 들어올지 확실할때, 3.
function my_func6(x) {
    let array = [];
    array[0] = x;
}
// 문제 1. array 요소 중 문자 타입을 숫자로 변환해 출력
function change_func(x) {
    let array = [];
    x.map((data, index) => {
        if (typeof data === 'string') {
            array.push(Number(data));
        }
        else {
            array.push(data);
        }
    });
}
change_func([1, 2, '3']);
// 문제 2. 마지막 과목 출력
function change_func2(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return '값 없음';
    }
}
console.log(change_func2({ subject: ['english', 'art'] }));
