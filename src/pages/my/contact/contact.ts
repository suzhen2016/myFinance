import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
//typeScript的语法练习
  constructor(public navCtrl: NavController) {
    //1.定义方法
    function f(shouldInitialize: boolean) {
      if (shouldInitialize) {
        var x = 10;
      }
      return x;
    }
    console.log(f(true))

    //2.二维数据求和、
    function sumMatrix(matrix: number[][]) {
      let sum = 0;
      for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
          sum += currentRow[i];
        }
      }

      return sum;
    }
    console.log(sumMatrix([[1,2],[3,4,5]]));

    //3.定义变量
    const person = {
      name:'rsc',
      age:5
    }
    let only = '第一次给赋值';
    only = '第二次给赋值'
    person.name = 'rsc-hl'
    console.log(person,only)

    //4.解构数组,对象
    let arr:number[] = [1,2,3];
    let list:Array<number> = [4,5,6,7];
    let array: any[] = [1, true, "free",{add:'加入'}];
    let x:[number,string] ;
    x = [10,'22']
    enum Color {Red=2, Green, Blue} //枚举类型
    let c: Color = Color.Green;
    let colorName: string = Color[2];
    console.log(arr,list,array,x,c,colorName)
    let [first, second,...rest] = [1, 2, 3, 4,5,6];
    console.log(first,second); // outputs 1
    console.log(rest); // outputs [ 2, 3, 4 ]

    let o = {
        a: "foo",
        b: 12,
        c: "bar",
        e:'继续'
    };
    let { a, b,e } = o;
    // ( {f,g} = {f:'苏',g:'镇'});
    console.log(a,b,e,o)
    class C {
      p = 12;
      m() {
        console.log(this.p)
      }
    }
    let cm = new C();
    cm.m()

    //5.接口
    interface LabelledValue {
      label: string;
    }
    
    function printLabel(labelledObj: LabelledValue) {
      console.log(labelledObj.label);
    }
    let myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
    //6.类
    class Animal {
     public name:string;
     protected sum:string = '我的';//受保护的属性，本子类内可以受用，类外不能访问
     readonly numberOfLegs: number = 8;//设置属性只能读取权限，但必须在构造函数内初始化或直接初始化
      move (bu:number){
        console.log(`我现在走了${bu}步了！`)
      }
      constructor (name:string){
        this.name = name;
      }
    }
    //
    class Dog extends Animal { //继承
      say(){
        console.log('旺旺'+this.sum)
      }
    }
    //类的继承
    class Cat extends Animal{
     private age:number;//私有属性
     
      constructor(name:string,age:number){
        super(name);//构造函数的调用，实现父类的构造函数的某些属性或方法
        this.age = age;
      }
      getAge():number{ //有返回类型值的方法，无返回值时void或不填写
        return this.age;
      }
    }

    let dog = new Dog('旺财');
    dog.move(66)
    dog.say()

    let cat = new Cat('杰瑞',23)
    console.log('cat'+'今年'+cat.getAge()+'岁')

    
  }

}
