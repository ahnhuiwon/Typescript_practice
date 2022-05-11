// 문자 or 숫자가 들어올 수 있는 type (Union Type)
var first_member = '123';
// 믄자 or 숫자가 가능한 array type
var second_member = [1, '2', 3];
// 문자 or 숫자가 가능한 object type
var third_member = { key: 123 };
// any type (모든 자료형 허용) -> 타입실드 해제문법(최대한 사용하지말것)
var fourth_member;
fourth_member = 123;
fourth_member = true;
// unknown type -> any와 달리 type이 다르다면 경고
var fifth_member;
// union type은 +, - 연산도 불가능
var sixth_member; // let sixth_member :string | number; 는 에러를 발생함
sixth_member + 1;
// unknown도 마찬가지로 연산이 불가능
var member_age = 1;
//age - 1; 에러 출력
// 문제
var user = 'kim';
var age = undefined;
var married = false;
var human = [user, age, married];
var school = {
    score: [100, 97, 84],
    teacher: 'phil',
    friend: 'john'
};
school.score[4] = false;
school.friend = ['lee', school.teacher];
