
// 문자 or 숫자가 들어올 수 있는 type (Union Type)
let first_member :(number | string) = '123';

// 믄자 or 숫자가 가능한 array type
let second_member :(number | string)[] = [1,'2',3];

// 문자 or 숫자가 가능한 object type
let third_member :{ key : string | number } = { key : 123 }

// any type (모든 자료형 허용) -> 타입실드 해제문법(최대한 사용하지말것)
let fourth_member :any;
fourth_member = 123;
fourth_member = true;

// unknown type -> any와 달리 type이 다르다면 경고
let fifth_member : unknown;

// union type은 +, - 연산도 불가능
let sixth_member :number; // let sixth_member :string | number; 는 에러를 발생함

sixth_member + 1;

// unknown도 마찬가지로 연산이 불가능
let member_age :unknown = 1;
//age - 1; 에러 출력

// 문제
let user :string = 'kim';
let age :undefined | number = undefined;
let married :boolean = false;
let human :(string | number | undefined | boolean)[] = [user, age, married]

// 문제
type School_type = {
    score : (number | boolean)[],
    teacher :string,
    friend : string | string[]
}

let school :School_type = {
    score : [100, 97, 84],
    teacher : 'phil',
    friend : 'john'
}

school.score[4] = false;
school.friend = ['lee', school.teacher];