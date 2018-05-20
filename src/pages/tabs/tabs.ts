//引入组件模块
import { Component } from '@angular/core';
//按格式引入自定义的模块
import { ContactPage } from '../my/contact/contact';
import { HomePage } from '../home/home/home';

//该组件的模板html页面，路径；
@Component({
  templateUrl: 'tabs.html'
})
//创建类，
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = ContactPage;
  //方法构造器
  constructor() {

  }
}
