import React from 'react';
import { post } from 'axios';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // file: null,
            userName: '',
            pwd: '',
            birthday: '',
            pwd: '',
            fileName: ''
        }
    }

    addCustomer() {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('name', this.state.userName);
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객 추가</h1>
                {/* 프로필 : <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/> */}
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>생년월일:<input type="text" name="pwd" value={this.state.pwd} onChange={this.handleValueChange}/><br/>성별:<input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>직업:<input type="text" name="pwd" value={this.state.pwd} onChange={this.handleValueChange}/><br/><button type='submit'>추가하기</button>
                //file은 변수라 변경 가능 file bite형태의 데이터, fileName 파일명
            </form>
        )
    }
}

export default CustomerAdd;