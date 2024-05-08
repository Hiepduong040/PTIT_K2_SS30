
import Child from './components/Child'
import React, { Component } from 'react'
import Exersice01 from './components/Ex01/Exersice01'
import Notification from './components/Ex02/Notification'
import Reacts from './components/Ex03/Reacts'
import Ex04 from './components/Ex04/Ex04'
import Ex05 from './components/Ex05/Ex05'
import Ex06 from './components/Ex06/Ex06'
import Ex07 from './components/Ex07/Ex07'
import Ex08 from './components/Ex08/Ex08'
import Clock from './components/Ex09/Clock'
import Counter from './components/Ex10/Counter'
interface Props{

}

interface State{
  name:string,
  age:number,
  count:number,
  isActive:boolean,
}

export default class App extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state={
      name:"minh thu",
      age:20,
      count:0,
      isActive:true
    }
  }

  //phương thức thay đổi state
  //khi muốn thay đổi state đối với class components thì dùng this.setState
//   handleClick=()=>{
//     this.setState({count: this.state.count+1})
//   }
//  componentDidMount():void{
//     console.log("componentDidMount đc gọi");
//     /**
//      * chạy sau khi component render lần đầu tiên
//      * các thành phần của component được gắn vào dom
//      * có thể thực hiện các tươn tác với dom
//      * nơi lý tưởng để callAPI lấy data render ra component
//      */
//   }

//   componentWillMount():void{
//     console.log("componentWillMount đc gọi");
//     //thường làm gì ở đây
//   }


//  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {

  
//    return true

  
//  }

//  componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): void {
//    /*
//     chyaj trước re-render nên thằng này cũng có thể dùng để tính toán lại state hoặc props
//    */
//  }

//  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
//    /**
//     * chạy sau khi re-render
//     * các phần tử của component nó đc gắn kết vào dom cho nên có thể dùng để tương tác với dom
//     * 
//     */
//  }

//  //tạo phuowgn thức remove khỏi đom
//   handleRemove=()=>{
//     this.setState({
//       isActive:!this.state.isActive
//     })
//  }
  render() {
    console.log("component bắt đầu re-render");
    // không được setState ở đây
    // chạy vô hạn tuần hoàn vì khi chạy setState nó sẽ khởi động re-render
    return (
      <div>Bài Tập:
        {
          /**
           * tạo class component
           * life cycle ( vòng đời của 1 component ==> chỉ áp dụng với class)
           * trải qua 4 giai đoạn
           * 1. giai đoạn khởi tạo (initial)
           *    khởi tạo state, props
           * 2. giai đoạn mounting (gắn vào thêm vào)
           *    cung cấp các phương thức mặc định(có sẵn rồi)
           *    sau khi giai đoạn khởi tạo xog thì tiếp đến chạy vào phương thức
           *    componentWillMount()==> component render ==> componentDidmount()
           * 3. giai đoạn update (thay đổi)
           *    sảy ra khi state hoặc props thay đổi thì chạy vào giai đoạn update
           *  1.shouldComponentUpdate
           * ==> bắt buộc phải return true/false
           * ==> nếu không khai báo hàm thì mặc định là true
           *  2.componentWillUpdate()
           *  3.componentDidUpdate()
           * 4. giai đoạn unmouting (gỡ bỏ xóa bỏ)
              xảy ra khi nào?
              khi component bị xóa bỏ khoeir dom
           */
        }
        {/* {this.state.isActive ? <Child></Child>:""}
        <button onClick={this.handleRemove}>remove Child</button>
        <p>giá trị biến count: {this.state.count}</p>
        <button onClick={this.handleClick}>count</button> */}
        <Exersice01></Exersice01>
        <Notification></Notification>
        <h3>Bài 3</h3>  
        <Reacts></Reacts>
        <h3>Bài 4</h3>
        <Ex04></Ex04>
        <h3>Bài 5</h3>
        <Ex05></Ex05>
        <h3>Bài 6</h3>
        <Ex06></Ex06>
        <h3>Bài 7</h3>
        <Ex07></Ex07>
        <h3>Bài 8</h3>
        <Ex08></Ex08>
        <h3>Bài 9</h3>
        <Clock></Clock>
        <h3>Bài 10</h3>
        <Counter></Counter>
      </div>
    )
  }
}
