// type alias
type Animal_type = string | number | undefined;

let animal :Animal_type = 'monkey';

// object alias
type Animal_two = { name : string, age : number };
let animal_two :Animal_two;

// const는 등호로 재할당만 막는 역할, object는 자유롭게 수정 가능
const country = { region : 'seoul' };
country.region = 'busan';

// typescript를 사용하면 object 자료 수정도 막을 수 있다.
type Girl_friend = {
    readonly name : string // 수정하면 에러 출력
}

const girl_freind :Girl_friend = {
    name : 'jisun'
}

// 다만 타입스크립트 에러는 에디터 or 터미널에서만 존재한다.

// type 변수는 union type으로 합치기가 가능하다.
type Name = string;
type Age = number;
type Person = Name | Age;

// & 연산자로 object 타입 합치기
type Position_x = { x : number };
type Position_y = { y : number };

type New_type = Position_x  & Position_y;

// 문제1
// 1. 이 타입은 object 자료형
// 2. 이 타입은 color라는 속성을 가질 수도 있으며 항상 문자
// 3. 이 타입은 size라는 속성이 있어야하며 항상 숫자
// 4. 이 타입은 position이라는 변경 불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료
type Test_type = {
    color? : string,
    size : number,
    readonly position : number[]
}

let my_type : Test_type;

// 문제2
//1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
//2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
//3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
type Test_type2 = {
    name : string,
    phone : number,
    email : string
}

let my_type2 : Test_type2 = {
    name : 'ahn',
    phone : 1234,
    email : 'abc@gmail.com'
}

//(숙제4). 다음을 만족하는 type alias를 만들어보십시오.
//1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
//2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 

type Test_type3 = {
    name : string,
    tel : number,
    email : string,
    adult : boolean,
}

let my_type3 : Test_type3 = {
    name : 'ahn',
    tel : 1234,
    email : 'abc@gmail.com',
    adult : true
}
