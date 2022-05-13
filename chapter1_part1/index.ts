// 문자열 타입 지정
let first_name :string = 'ahn';

// array 타입 지정
let my_name :string[] = ['huiwon', 'uzin', 'sanghyun'];

//ojbect 타입 지정
let ohter_name :{ name : string } = { name : 'ahn'}

// object 타입 key가 옵션(포함이 미확실 할때)
let second_name :{ name? :string} = {  }

// 다양한 타입 지정
let third_name :string | number = 123;

// 타입을 변수에 할당할 때, 앞글자를 대문자로 적어 차별점을 둔다
type My_type = string[] | number[]

// 함수 파라미터와 return에 타입 지정
function my_func( x :number) :number{
    return x * 2
}

my_func(3)

// array에 쓸 수 있는 tuple type
type Member_type = [number, boolean];
let edison :Member_type = [123, false];

// object에 타입 지정해야할 속성이 너무 많을때
type Member_obj = {
    [key :string] : string // 글자로 된 모든 object 속성의 타입은 string
}

let alexis :Member_obj = { name : '123' }

// class 문법에 type 추가
class user_class{
    name :string;
    constructor(name :string){
        this.name = name;
    }
}