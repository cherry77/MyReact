import React, {Component} from 'react'
import axios from 'axios'

const apiEndPoint = 'http://jsonplaceholder.typicode.com/posts';

class HttpApp extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        // promise 是一个装载异步操作的对象，异步操作是计划在将来完成的操作， promise承诺保存异步操作的结果
        // 当我们创建了promise，它就立即进入了pending状态，
        // 当操作完成后，pending状态要么转换为执行成功的resolve状态，或者是执行失败的rejected状态
        // 1.使用then关键字可以得到异步操作的返回值，但是这是老的方法。
        // 2. 新的JavaScript有个关键词await，可以直接await这个promise就可以得到结果了，
        // 不管何时在函数中使用await关键字，都需要以async关键字来修饰这个函数
        const {data: posts} = await axios.get(apiEndPoint);
        this.setState({posts})
    }

    handleAdd = async () => {
        const obj = {title: 'a', body: 'b'};
        const {data: post} = await axios.post(apiEndPoint, obj);
        const posts = [post, ...this.state.posts];
        this.setState({posts});
    };

    handleUpdate = async post => {
        post.title = 'Updated';
        await axios.put(apiEndPoint + '/' + post.id);
        const posts = {...this.state.posts};
        const index = posts.indexOf(post);
        posts[index] = {...post};
        this.setState({posts});
    };

    handleDelete = async post => {
        await axios.delete(apiEndPoint + '/' + post.id);
        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({posts});
    };

    render() {
        return (
            <div className="container">
                <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button className="btn btn-info mr-3"
                                        onClick={() => this.handleUpdate(post)}>
                                    Update
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger"
                                        onClick={() => this.handleDelete(post)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default HttpApp
