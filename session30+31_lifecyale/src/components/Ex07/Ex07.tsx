import React, { Component } from 'react'

export default class Baitap7 extends Component {
    componentDidMount() {
        document.title = "Hiệp đẹp trai !!!";
    }
    /*
       Khi componentDidMount được gọi, DOM đã được tạo ra và thành phần đã được gắn kết với nó. 
       Điều này cho phép bạn thực hiện các tác vụ như thao tác trên DOM,
        yêu cầu dữ liệu từ API hoặc thiết lập các lắng nghe sự kiện.
    */
    
    render() {
        return (
          <div>
            <h3>Chú ý: Hãy nhìn lên tiêu đề tab</h3>
          </div>
        );
    }
}