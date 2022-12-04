# React学习笔记

> 视频地址：https://www.bilibili.com/video/BV1wy4y1D7JT?spm_id_from=333.337.search-card.all.click

## 1.React入门

非脚手架环境参考：

```html
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/babel-standalone/7.0.0-beta.3/babel.min.js"></script>
```

### 1.1 虚拟DOM

> + cls + Tab：`console.log();`的快捷键
> + 打断点：`debugger;`

1. 本质上是Object类型的对象（一般对象）
2. 虚拟DOM比较“轻”，真实DOM比较“重”（属性的多少），因为虚拟DOM是React内部使用，无需真实DOM上那么多的属性
3. 虚拟DOM最终会被React转化为真实DOM，呈现在页面上

### 1.2 JSX

1. 全称：JavaScript XML
2. React定义的一种类似于XML的JS扩展语法

> XML：早期用于存储和传输数据，现在用JSON更多

语法规则：

1. 定义虚拟DOM时，不要写引号
2. 标签中混入JS**表达式**时，要用`{}`
3. 样式的类名指定不要用`class`，要用`className`
4. 内联样式要用`style={{key: value }}`的形式去写
5. 只有一个根标签
6. 标签必须闭合
7. 标签首字母：
    1. 若小写字母开头，则将该标签转为html同名元素。若html中无该标签对应的同名元素，则报错
    2. 若大写字母开头，React就去渲染对应的组件。若组件没有定义，则报错

区分**JS语句（代码）**和**JS表达式**：

1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方，下面都是表达式：
    + `a`
    + `a + b`
    + `demo(1)`
    + `arr.map()`
    + `function test() {}`
2. 语句（代码），下面都是语句（代码）：
    + `if () {}`
    + `for () {}`
    + `switch () {}`

### 1.3 模块化和组件化

模块：

1. 向外提供特定功能的JS程序，一般就是一个JS文件
2. 为什么要拆分成模块：随着业务逻辑增加，代码越来越多且复杂
3. 作用：复用JS，简化JS编写，提高JS运行效率

组件：

1. 用来实现局部功能效果的代码和资源的集合（html/css/js/image等等）
2. 为什么要拆分成组件：一个界面功能更复杂
3. 作用：复用编码，简化项目编码，提高运行效率

模块化：当应用的JS都以模块来编写的，这个应用就是一个模块化的应用
组件化：当应用是以多组件的方式实现，这个应用就是一个组件化的应用

## 2.React面向组件编程

### 2.1 基本理解和使用

Factbook提供的开发者调试工具：React Developer Tools

分类：

+ 函数式组件：使用函数创建的组件
+ 类组件：使用类创建的组件

执行过程：

执行了`ReactDOM.render(<MyComponent/>...)`之后，发生了什么？

1. 函数式组件：
    a. React解析组件标签，找到MyComponent组件（没有找到则报错）
    b. 发现组件是使用函数定义的，则调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中
2. 类组件：
    a. React解析组件标签，找到MyComponent组件（没有找到则报错）
    b. 发现组件是使用类定义的，则new出来该类的实例，并通过该实例调用到原型上的render方法
    c. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中

### 2.2 组件三大核心属性：state

初始化状态、读取状态，修改状态：

```js
// 1. 创建组件
class Weather extends React.Component {
    // 构造器调用几次？—— 1次
    constructor(props) {
        super(props);
        // 初始化状态
        this.state = {isHot: false};
        // 解决changeWeather中this指向问题
        this.changeWeather = this.changeWeather.bind(this);
    }

    // render调用几次？—— 1+n次，1是初始化的那次，n是状态更新次数
    render() {
        // 读取状态
        const {isHot} = this.state;
        return <h1 onClick={changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>;
    }

    // changeWeather调用几次？—— 点几次调几次
    changeWeather() {
        // changeWeather放在哪里？—— Weather的原型对象上，供实例使用（补充：在类中定义的属是放到实例中的，定义的方法是放到实例的**原型对象**上的）
        // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
        // 类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined

        // 获取原来的isHot值
        const isHot = this.state.isHot;
        // 严格注意：状态必须通过setState进行更新，且更新是一种合并操作，不是替换
        this.setState({isHot: !isHot});

        // 严格注意：状态（state）不可直接更改，下面的方法是错误的
        // this.state.isHot = !isHot;
    }
}

// 2.渲染组件到页面
ReactDOM.render(<Weather/>, document.getElmentById('test));
```

补充：

+ ES6中类的属性是直接继承的，方法是通过原型链进行继承
+ 类中可直接定义属性，如下:

```js
class Car {
    wheel = 4;
    foo = () => {   // 这样定义的方法（事实上是属性），是直接放到实例对象上的，而不是实例的原型
        console.log(this);
    };

    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(this);
    }
}

const car = new Car('Kerry');
car.run(); 
// Car {wheel: 4, name: 'Kerry', foo: ƒ}
```

精简写法：

```js
class Weather extends React.Component {
    // 初始化状态
    state = {isHot: false};

    render() {
        const {isHot} = this.state;
        return <h1 onClick={changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}</h1>;
    }

    // 自定义方法——要用赋值语句的形式+箭头函数
    changeWeather = () => {
        const isHot = this.state.isHot;
        this.setState({isHot: !isHot});
    };
}
```

总结：

+ state是组件对象最重要的属性，值是对象（可以包含多个key-value的组合）
+ 组件被称为“状态机”，通过更新组件的state来更新对应的页面显示（重新渲染组件）
+ 组件中的render方法中的this为组件实例对象
+ 组件自定义方法中的this为undefined，如何解决？
    - 在构造函数中强制绑定this（通过函数对象的bind方法）
    - 箭头函数
+ 状态数据不能直接修改或更新

### 2.3 组件三大核心属性：props

基本使用：

```js
// 创建组件
class Person extends React.Component {
    render() {
        const {name, sex, age} = this.props;
        return (
            <ul>
                <li>name: {name}</li>
                <li>sex: {sex}</li>
                <li>age: {age}</li>
            </ul>
        );
    }
}
// 渲染组件到页面
ReactDOM.render(<Person name='Tom' sex='male' age='18'/>, document.getElementById('test1'));
ReactDOM.render(<Person name='Jerry' sex='female' age='18'/>, document.getElementById('test1'));
ReactDOM.render(<Person name='David' sex='male' age='18'/>, document.getElementById('test1'));
```

批量传递props：

```js
// 创建组件
class Person extends React.Component {
    render() {
        const {name, sex, age} = this.props;
        return (
            <ul>
                <li>name: {name}</li>
                <li>sex: {sex}</li>
                <li>age: {age}</li>
            </ul>
        );
    }
}
// 渲染组件到页面
const person = {name: 'Tom', sex: 'male', age: 18};
ReactDOM.render(<Person {...person}/>, document.getElementById('test1'));
```

> 注：此处扩展运算符是由React实现的，ES6不支持直接对对象使用扩展运算符

补充扩展运算符的使用：

```js
const person = {name: 'Tom', sex: 'male', age: 18};

// 不能直接放到对象上使用
// console.log(...person); // Uncaught TypeError: Found non-callable @@iterator

// 可以用来复制对象（对属性字面量复制）
const david = {...person, name: 'David'};
console.log(person); // {name: 'Tom', sex: 'male', age: 18}
```

对标签属性进行类型、必要性限制以及默认值的设定：

```js
// 对标签属性进行类型、必要性的限制
Person.propTypes = {
    name: PropTypes.string.isRequired, // 限制name必传且为字符串
    sex: PropTypes.string,
    age: PropTypes.number,
    speak: PropTypes.func // 注意函数制定（避免和关键字冲突）
};

// 指定默认标签属性值
Person.defaultProps = {
    sex: '男',
    age: 18
};
```

> 注：props是只读的

简写：

```js
// 创建组件
class Person extends React.Component {
    // 对标签属性进行类型、必要性的限制
    static propTypes = {
        name: PropTypes.string.isRequired, // 限制name必传且为字符串
        sex: PropTypes.string,
        age: PropTypes.number,
        speak: PropTypes.func // 注意函数制定（避免和关键字冲突）
    };

    // 指定默认标签属性值
    static defaultProps = {
        sex: '男',
        age: 18
    };

    // ...
}
```

补充：

构造器中是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props

函数式组件使用props：

```js
function Person(props) {
    const {name, sex, age} = props;
    return (
        <ul>
            <li>姓名：{name}</li>
            <li>性别：{sex}</li>
            <li>年龄：{age}</li>
        </ul>
    );
}
// 对标签属性进行类型、必要性的限制
Person.propTypes = {
    name: PropTypes.string.isRequired, // 限制name必传且为字符串
    sex: PropTypes.string,
    age: PropTypes.number,
    speak: PropTypes.func // 注意函数制定（避免和关键字冲突）
};

// 指定默认标签属性值
Person.defaultProps = {
    sex: '男',
    age: 18
};
```

### 2.4 组件三大核心属性：refs & 事件处理

1.字符串形式ref（不推荐使用，存在效率问题）：

```js
class Demo extends React.Component {
    // 展示左侧输入框的数据
    showLeftData = () => {
        const {leftInput} = this.refs;
        alert(leftInput.value);
    };
    // 展示右侧输入框的数据
    showRightData = () => {
        const {rightInput} = this.refs;
        alert(rightInput.value);
    };

    render() {
        return (
            <div>
                <input ref="leftInput" type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showLeftData}>点我提示左侧的数据</button>&nbsp;
                <input ref="rightInput" type="text" placeholder="失去焦点提示数据" onBlur={this.showRightData}/>
            </div>
        );
    }
}
```

2.回调形式ref：

```js
class Demo extends React.Component {
    // 展示左侧输入框的数据
    showLeftData = () => alert(this.leftInput.value);
    // 展示右侧输入框的数据
    showRightData = () => alert(this.rightInput.value);

    render() {
        return (
            <div>
                <input ref={c => this.leftInput = c} type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showLeftData}>点我提示左侧的数据</button>&nbsp;
                <input ref={c => this.rightInput = c} type="text" placeholder="失去焦点提示数据" onBlur={this.showRightData}/>
            </div>
        );
    }
}
```

> 注：上述写法：初始化组件时会调用一次回调函数，更新组件时会调用两次回调函数（第一次传入null，第二次传入DOM，祥见：https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs）

只调用一次回调函数的ref：

```js
class Demo extends React.Component {
    // 展示左侧输入框的数据
    showLeftData = () => alert(this.leftInput.value);
    // 展示右侧输入框的数据
    showRightData = () => alert(this.rightInput.value);
    saveInput = c => this.leftInput = c;

    render() {
        return (
            <div>
                <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showLeftData}>点我提示左侧的数据</button>&nbsp;
            </div>
        );
    }
}
```

无论是回调函数定义ref还是class绑定函数定义ref都是无关紧要的

3.crateRef（推荐）：

```js
class Demo extends React.Component {
    // React.crateRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是“专人专用”的
    myRef = React.createRef();
    // 展示左侧输入框的数据
    showData = () => alert(this.myRef.current.value);

    render() {
        return (
            <div>
                <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
                <button onClick={this.showLeftData}>点我提示左侧的数据</button>&nbsp;
            </div>
        );
    }
}
```

事件处理：

1. 通过onXxx属性指定事件处理函数（注意大小写）
    a. React使用的是自定义（合成）事件，而不是使用的原生DOM事件——为了更好的兼容性
    b. React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）——为了更高的处理效率
2. 通过event.target得到发生事件DOM元素对象——不要过度使用ref

### 2.5 收集表单数据（受控组件和非受控组件）

非受控组件（表单数据现取现用）：

```js
// 创建组件
class Login extends React.Component {
    handleSubmit = event => {
        event.preventDefault(); // 阻止表单提交
        const {username, password} = this;
        alert(`你输入的用户名是：${username.value}，密码是：${password.value}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名：<input ref={c => this.username = c} type="text" name="username"/>
                密码：<input ref={c => this.password = c} type="password" name="password"/>
                <button>登录</button>
            </form>
        );
    }
}

// 渲染组件
ReactDOM.render(<Login/>, document.getElementById('#app'));
```

受控组件：

```js
// 创建组件
class Login extends React.Component {
    // 初始化状态
    state = {
        username: '',
        password: ''
    };
    // 保存用户名到状态中
    saveUsername = event => this.setState({username: event.target.value});
    // 保存密码到状态中
    savePassword = event => this.setState({password: event.target.value});

    handleSubmit = event => {
        event.preventDefault(); // 阻止表单提交
        const {username, password} = this.state;
        alert(`你输入的用户名是：${username.value}，密码是：${password.value}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.saveUsername} type="text" name="username"/>
                密码：<input onChange={this.savePassword} type="password" name="password"/>
                <button>登录</button>
            </form>
        );
    }
}

// 渲染组件
ReactDOM.render(<Login/>, document.getElementById('#app'));
```

使用高阶函数和函数的柯里化（当表单输入项特别多时，很适用）：

```js
class Login extends React.Component {
    // 初始化状态
    state = {
        username: '',
        password: ''
    };
    // 保存表单数据到状态中
    saveFormData = type => event => this.setState({[type]: event.target.value});

    handleSubmit = event => {
        event.preventDefault(); // 阻止表单提交
        const {username, password} = this.state;
        alert(`你输入的用户名是：${username.value}，密码是：${password.value}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名：<input onChange={this.saveFormData('username')} type="text" name="username"/>
                密码：<input onChange={this.saveFormData('password')} type="password" name="password"/>
                <button>登录</button>
            </form>
        );
    }
}
```

**高阶函数**：如果一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数

+ 若A函数，接收的参数是一个函数，那么A就可以称之为高阶函数
+ 若A函数，调用的返回值是一个函数，那么A就可以称之为高阶函数

常见的高阶函数：Promise、setTimeout/setInterval、arr.map()等等

**函数柯里化**：通过函数调用继续返回函数的方式，实现多次接收的参数最后统一处理的函数编码形式

当然也可以不用高阶函数和函数柯里化：

```js
class Login extends React.Component {
    // 初始化状态
    state = {
        username: '',
        password: ''
    };
    // 保存表单数据到状态中
    saveFormData = (type, event) => this.setState({[type]: event.target.value});

    handleSubmit = event => {
        event.preventDefault(); // 阻止表单提交
        const {username, password} = this.state;
        alert(`你输入的用户名是：${username.value}，密码是：${password.value}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                用户名：<input onChange={e => this.saveFormData('username', e)} type="text" name="username"/>
                密码：<input onChange={e => this.saveFormData('password', e)} type="password" name="password"/>
                <button>登录</button>
            </form>
        );
    }
}
```

### 2.6 生命周期

> 其它叫法：生命周期回调函数、生命周期钩子函数 <=> 生命周期函数 <=> 生命周期钩子

```js
class Life extends React.Component {
    state = {opacity: 1};
    // 卸载组件
    death = () => ReactDOM.unmountComponentAtNode(document.getElementById('test'));

    // 组件挂载完毕
    componentDidMount() {
        this.timer = setInterval(() => {
            let {opacity} = this.state;
            opacity -= 0.1;
            if (opacity <= 0) opacity = 0;
            this.setState({opacity});
        }, 200);
    }

    // 初始化渲染，状态更新之后
    render() {
        return (
            <div>
                <h2 style={{opacity: this.state.opacity}}>React学不会怎么办？</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        );
    }

    // 组件将要卸载
    componentWillUnmount() {
        clearInterval(this.timer);
    }
}
```

旧生命周期：

![](https://img2022.cnblogs.com/blog/1622292/202204/1622292-20220426150015917-660500003.png)

和Vue不同的是：

+ `shouldComponentUpdate`：控制组件更新的“阀门”，返回true or false
+ `componentWillUpdate`：组件将要更新的钩子
+ `componentDidUpdate`：组件更新完毕的钩子
+ `this.forceUpdate();`强制更新组件
+ `componentWillReceiveProps(props)`：组件将要接收新的props的钩子(初始化不会调用)

新生命周期：

![](https://img2022.cnblogs.com/blog/1622292/202204/1622292-20220426164207086-2040055558.png)

新旧生命周期概述：

1. 对于componentWillMount、componentWillReceiveProps、componentWillUpdate在17.x版本之后若要使用需要添加UNSAFE_前缀，此处前缀并不表示这三个钩子函数在后续版本中更有可能出现bug，不建议使用
2. 添加了两个钩子函数getDerivedStateFromProps、getSnapshotBeforeUpdate

[static getDerivedStateFromProps](https://zh-hans.reactjs.org/docs/react-component.html#static-getderivedstatefromprops)：此方法适用于罕见的用例，即 state 的值在任何时候都取决于 props（返回的对象会和state合并）

[getSnapshotBeforeUpdate(prevProps, prevState)](https://zh-hans.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate)：在更新之前获取快照，此用法并不常见，但它可能出现在 UI 处理中，如需要以特殊方式处理滚动位置的聊天线程等（需要返回一个快照值，在componentDidUpdate中接收使用）

```js
class Demo extends React.Component {
    add = () => this.setState({count: this.state.count + 1});
    death = () => ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    static getDerivedStateFromProps(props, state) {
        console.log('Demo---getDerivedStateFromProps', props, state);
        return props;
    }

    constructor(props) {
        console.log('Demo---constructor');
        super(props);
        this.state = {count: 0};
    }

    render() {
        console.log('Demo---render')
        return (
            <div>
                <h2>当前值：{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.death}>卸载组件</button>
                <button onClick={() => this.forceUpdate()}>强制更新</button>
            </div>
        );
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Demo---getSnapshotBeforeUpdate', prevProps, prevState);
        return '123';
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Demo---componentDidUpdate', prevProps, prevState, snapshot)
    }

    componentDidMount() {
        console.log('Demo---componentDidMount');
    }
}
```

总结：

1. 重要的钩子：
    a. `render`：初始化渲染或更新渲染调用
    b. `componentDidMount`：开启监听，发送ajax请求
    c. `componentWillUnmoun`t：做一些收尾工作，如清除定时器
2. 即将废弃的钩子：`componentWillMount`、`componentWillReceiveProps`、`componentWillUpdate`

> 即将废弃的钩子现在使用会出现警告，17.x版本以后需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用

### 2.7 DOM的Diffing算法

演示：

```js
class Time extends React.Component {
    state = {time: new Date()};
    
    componentDidMount() {
        this.timer = setInterval(() => this.setState({time: new Date()}), 1000);
    }

    render() {
        return (
            <div>
                <h2>Diff算法</h2>
                <input type="text"/>
                <span>
                    当前时间：{this.state.time.toLocaleString()}
                    <input type="text"/>
                </span>
            </div>
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
}
```

在案例中，span中时间会不断刷新，但是其它内容不会改变（输入框的内容不会丢失）

**经典面试题**，问法不同意思相同：

1. react/vue中的key有什么作用？（key的内部原理是什么？）
2. 为什么遍历列表时，key最好不要用index？

结论：

1. 虚拟DOM中key的作用：
    a. 简单的说：key是虚拟DOM对象的标识，在更新显示时key起着极其重要的作用
    b. 详细的说：当状态中的数据发生变化时，react会根据【新数据】生成【新的虚拟DOM】，随后React进行【新虚拟DOM】与【旧虚拟DOM】的diff比较，比较规则如下：
        i. 旧虚拟DOM中找到了与新虚拟DOM相同的key：
            (1). 若虚拟DOM中内容没变，则使用之前的真实DOM
            (2). 若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM
        ii. 旧虚拟DOM中未找到与新虚拟DOM相同的key
            (1). 根据数据创建新的真实DOM，随后渲染到页面
2. 用index作为key可能会引发的问题：
    a. 若对数据进行：逆序添加、逆序删除等破坏顺序操作：
        i. 会产生没有必要的真实DOM更新 ==> 界面效果没问题，但效率低
    b. 如果结构中还包含输入类的DOM：
        i. 会产生错误DOM更新 ==> 界面有问题
    c. 注意！如果不存在对数据的逆序添加、逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的
3. 开发中如何选择key？
    a. 最好使用每条数据的唯一标识作为key，比如id、手机号、身份证号、学号等唯一值
    b. 如果确定只是简单的展示数据，用index也是可以的

```js
 // 创建组件
class Person extends React.Component {
    state = {
        friends: [
            {id: 1, name: '张三', age: 18},
            {id: 2, name: '李四', age: 19}
        ]
    };
    
    // 添加王五
    addWangwu = () => {
        const {friends} = this.state;
        const wangwu = {id: 3, name: '王五', age: 20}
        this.setState({friends: [wangwu, ...friends]});
    };

    render() {
        return (
            <div>
                <button onClick={this.addWangwu}>添加王五</button>
                <ul>
                    {
                        this.state.friends.map((friend, index) => {
                            return (
                                <li key={index}>
                                    {friend.name} -- {friend.age}
                                    <input type="text"/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
```

慢动作回放---使用index索引值作为key：
初始数据：

+ `{id: 1, name: '张三', age: 18}`
+ `{id: 2, name: '李四', age: 19}`

初始的虚拟DOM：

+ `<li key=0>张三 -- 18 <input type="text"/></li>`
+ `<li key=1>李四 -- 19 <input type="text"/></li>`

更新后的数据：

+ `{id: 3, name: '王五', age: 20}`
+ `{id: 1, name: '张三', age: 18}`
+ `{id: 2, name: '李四', age: 19}`

更新数据后的虚拟DOM：

+ `<li key=0>王五 -- 20 <input type="text"/></li>`
+ `<li key=1>张三 -- 18 <input type="text"/></li>`
+ `<li key=2>李四 -- 19 <input type="text"/></li>`

此时，根据上述结论，会额外创建两次真实DOM并渲染并且输入框输入的数据会错乱

## 3.React应用（基于React脚手架）

### 3.1 使用create-react-app创建react应用

#### 3.1.1 react脚手架

1. xxx脚手架：用来帮助程序员快速创建一个基于xxx库的模板项目
    a. 包含了所有需要的配置（语法检查，jsx编译、devServer...)
    b. 下载好了所有相关的依赖
    c. 可以直接运行一个简单效果
2. react提供了一个基于创建react项目的脚手库：create-react-app
3. 项目的整体架构为：react + webpack + es6 + eslint
4. 使用脚手架开发的项目特点：模块化、组件化、工程化

#### 3.1.2 创建项目并启动

1. 全局安装：`npm i -g create-react-app`
2. 切换到想创项目的目录，使用命令：`create-react-app hello-react`
3. 进入项目文件夹：`cd hello-react`
4. 启动项目：`npm start`

补充常用命令：

```sh
# 启动项目
npm start
# or: npm run start

# 暴露项目配置(不可撤回)
npm run eject
```

#### 3.1.3 目录介绍

+ public：静态资源存放目录
    - **index.html**：渲染的主页面，注解如下：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <!-- %PUBLIC_URL%代表public文件夹的路径 -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 开启理想视口，用于做移动端网页的适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 用于配置浏览器页签+地址栏的颜色（仅支持安卓手机浏览器） -->
    <meta name="theme-color" content="#000000" />
    <!-- 网站介绍，SEO相关 -->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- 用于制定网页添加到苹果手机主屏幕后的图标 -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
        manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!-- 应用加壳时的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>
  </head>
  <body>
    <!-- 若浏览器不支持JS则展示标签中的内容 -->
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

    - robots.txt：对爬虫相关的限制
+ src：代码存放目录
    - App.css：根组件样式
    - **App.js**：根组件
    - App.test.js：根组件单测
    - index.css：通用样式
    - index.js：项目入口
        * `React.StrictMode`：外层代码检测组件（语法是否过时）
    - reportWebVitals.js：记录页面性能
    - setupTests.js：单测相关文件

### 3.2 基本使用

#### 3.2.1 样式模块化

需要满足如下条件：

1. css文件命名：filename.module.css
2. 引入css方式：`import styles from filename.module.css;`
3. 导入使用方式: `<h1 className={styles.demo}>Hello, React!</h1>`

结果就是使用了css module，默认生成的类名：组件名_类名_hash

#### 3.2.2 VSCode安装React插件

插件名：ES7+ React/Redux/React-Native snippets
作者：dsznajder
快速创建代码缩略语：https://github.com/dsznajder/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md

### 3.3 父子组件通信

1. 父传子：通过给子组件传递props
2. 子传父：通过给子组件传递回调函数（也是props，只不过传入的是一个函数）

> 生成唯一id的库：uuid，更小功能差不多的库：nanoid

案例位置：[TodoList组件](https://gitee.com/haveadate/react_demo/tree/master/src/components/TodoList)
案例总结：

1. 父子组件通信，见上
2. “状态在哪里，操作状态的方法就在哪里”
3. `<input type="checkbox"/>`中，`defaultChecked`属性只在初始化时有效，若需要动态响应则使用`checked`属性

## 4.React网络请求

说明：React本身只关注界面，并不包含ajax请求的代码，需要使用第三方库进行请求，以下使用axios进行请求

### 4.1 代理配置

通常发送请求都会产生跨域（能请求，但是不能接收），在React可以进行配置

![代理](https://img2022.cnblogs.com/blog/1622292/202205/1622292-20220505120718471-25872179.png)

**方式一**：在package.json中添加如下配置：

```json
"proxy": "http://localhost:8000/"
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀
2. 缺点：不能配置多个代理
3. 工作方式：上述方式配置代理，当请求了3000端口号不存在的资源时，那么该请求会转发给5000端口号（优先匹配前端资源）

**方式二**：在src目录下添加setupProxy.js文件配置代理：

```js
const {createProxyMiddleware: proxy} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api1', {    // api1是需要转发的请求（所有带/api1前缀的请求都会转发给5000）
            target: 'http://localhost:8000', // 配置转发目标地址（能返回数据的服务器地址）
            changeOrigin: true, // 控制服务器收到的请求头中host字段的值
            /*
                changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:8000
                changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
                changeOrigin默认值为false，但我们一般将其设为true
            */
           pathRewrite: {'^/api1': ''}  // 去除请求前缀，保证交给后台服务器的请求是正常请求地址（必须配置）
        }),
        proxy('/api2', {
            target: 'http://localhost:8080',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    );
};
```

说明：

1. 优点：可以配置多个代理，可以灵活地控制请求是否走代理
2. 缺点：配置繁琐，前端请求资源时必须加前缀

### 4.2 GithubSearch案例

github请求用户信息接口：https://api.github.com/search/users?q=xxx

### 4.3 消息订阅-发布机制

通过第三方库：[PubSubJS](https://github.com/mroderick/PubSubJS)

```js
// 安装命令
// npm i pubsub-js -S
import PubSub from 'pubsub-js';

// 发布消息
PubSub.publish('消息名', data);

// 订阅消息
const token = PubSub.subscribe('消息名', (msg, data) => {   // 回调函数参数：消息名，传递的数据
    // ...
})

// 取消订阅
Pubsub.unsubscribe(token);
```

案例位置：[PubSubDemo组件](https://gitee.com/haveadate/react_demo/tree/master/src/components/PubSubDemo)

### 4.4 扩展：fetch —— 新的网络请求方式

当前异步网络请求：

1. XHR（XMLHttpRequest），使用比较繁琐，以下两个库对其进行了封装：
    + jQuery
    + axios
2. fetch

fetch 文档：
    + https://github.github.io/fetch/
    + https://segmentfault.com/a/1190000003810652

> vscode中可以使用#region和#endregion折叠注释

```js
try {
    // 第一步：和服务器是否取得联系
    const response = await fetch(`/api/search/users?q=${username}`);
    // 第二步：获取数据
    const data = await response.json();
    PubSub.publish('users', {isLoading: false, users: data.items});
}
catch (err) {
    PubSub.publish('users', {isLoading: false, err});
}
```

案例位置：[FetchDemo组件](https://gitee.com/haveadate/react_demo/tree/master/src/components/FetchDemo)

**fetch总结：**

1. 原生函数，不再使用XMLHttpRequest对象提交ajax请求
2. 老版本浏览器可能不支持，存在兼容性问题

## 5.React路由

### 5.1 相关概念

#### 5.1.1 SPA

1. 单页Web应用（single page web application, SPA）
2. 整个应用只有一个完整的页面
3. 点击页面中的连接不会刷新页面，只会做页面的局部刷新
4. 数据都需要通过ajax请求获取，并在前端异步展现

#### 5.1.2 路由

什么是路由？

1. 一个路由就是一个映射关系（key: value）
2. key为路径，value可能是function（后端路由）或component（前端路由）

路由分类：

1. 后端路由：
    a. 理解：value是function，用来处理客户端提交的请求
    b. 注册路由：router.get(path, function(req, res))
    c. 工作过程：当node收到一个请求时，根据请求路径找到匹配的路由，调用路由中的函数处理请求，返回响应的数据
2. 前端路由：
    a. 浏览器端路由，value是component，用于展示页面内容
    b. 注册路由`<Router path="/test" component={Test}>`
    c. 工作过程：当浏览器的path变为/test时，当前路由组件就会变成Test组件

#### 5.1.3 工作原理

基于H5提出的history来实现前端路由（history有一个库就叫history）

前端路由有两种模式：

+ hash模式：没有借助h5提出的history，而是采用锚点，兼容性较好。体现路径：`index.html#/test`
+ history模式：老版本浏览器可能不支持。体现路径：`/test`

#### 5.1.4 react-router的理解

分为：

+ web
+ native
+ anywhere

以下主要介绍web中的库，react-router-dom：

1. react的一个插件库
2. 专门用来实现一个SPA应用
3. 基于react的项目基本都会用到此库

### 5.2 react-router-dom（5.x版本）

#### 5.2.1 安装和使用

安装：

```shell
npm i react-router-dom@5 -S
```

使用：

```js
// RouterCase
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './index.css';

export default class RouterCase extends Component {
    render() {
        return (
            <div className="container">
                <h2>React Router Demo</h2>
                <div className="main">
                    <nav>
                        {/* 编写路由链接 */}
                        <Link className="link" to="/home">Home</Link>
                        <Link className="link" to="/about">About</Link>
                    </nav>
                    {/* 注册路由 */}
                    <Route path="/home" component={Home} className="content"/>
                    <Route path="/about" component={About} className="content"/>
                </div>
            </div>
        );
    }
};

// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<BrowserRouter><App/></BrowserRouter>);
```

执行过程：

1. 通过Link组件修改页面路由
2. 通过Route组件监听路由变化修改页面对应展示的组件

所有的路由需要在路由器（BrowserRouter/HashRouter）下进行操作

#### 5.2.2 路由组件和一般组件

1. 写法不同：
    + 一般组件：`<Demo/>`
    + 路由组件：`<Route path="/demo" component={Demo}/>`
2. 存放位置不同：
    + 一般组件：components
    + 路由组件：pages
3. 接收到的props不同：
    + 一般组件：写组件标签时，传递了什么就能收到什么
    + 路由组件：接收到三个固定的属性（主要信息如下）：

```text
history:
    go: ƒ go(n)
    goBack: ƒ goBack()
    goForward: ƒ goForward()
    push: ƒ push(path, state)
    replace: ƒ replace(path, state)
location:
    pathname: "/home"
    search: ""
    state: undefined
match:
    params: {}
    path: "/home"
    url: "/home"
```

#### 5.2.3 NavLink组件

作用：在Link组件的基础上，可以设置activeClassName属性，指定点击该组件后添加的类名

封装NavLink成MyNavLink组件：

```js
// 封装组件
export default class MyNavLink extends Component {
    render() {
        return (
            <NavLink className="link" activeClassName="active" {...this.props}/>
        );
    }
};

// 使用组件
<MyNavLink to="/home">Home</MyNavLink>
```

注意：

1. MyNavLink组件中的内容（Home）在组件内是通过this.props.children存放的
2. 自闭和标签可以通过指定children属性指定其内容

以下等价：

```js
<MyComponent children="Component comtent"/>

<MyComponent>Component content</MyComponent>
```

#### 5.2.4 Switch组件

通常情况下，一个路由对应展示一个组件。如果一个路由对应两个或多个组件时，那么所有对应的组件都会渲染：

```js
<Route path="/home" component={Home} className="content"/>
<Route path="/about" component={About} className="content"/>
<Route path="/about" component={Test} className="content"/>
```

当页面路由为`/about`时，会同时展示About组件和Test组件

为避免上述情况，可在注册路由外套Switch组件，当路由为`/about`时，只会渲染第一个匹配该路由的组件

#### 5.2.5 解决样式可能丢失的问题

复现：在public目录下的index.html通过相对路径引入css文件，在多级路由（/test/abc）下刷新页面导致样式丢失

原理：多级路由下刷新页面会重新请求css文件，但是页面路由并不是最初的而是存在路由，那么相对路径下的css文件是不存在的。在React中若路径对应的资源不存在，默认会返回index.html文件

解决方案：

1. 通过绝对路径引入css文件
2. 通过`%PUBLIC_URL%`符进行引入
3. 通过HashRouter组件囊括，而不是使用BrowserRouter（因为路径中#后的内容会被认为是锚点，而不是路径）

#### 5.2.6 路由的模糊匹配和严格匹配

默认匹配方式：

1. 默认使用的是模糊匹配（简单记：**输入的路径**必须包含要**匹配的路径**，且顺序要一致
2. 开启严格匹配：`<Route extact path="/test" component={Test}/>
3. 严格匹配不要随便开启，需要时再开，有些时候开启会导致无法匹配二级路由

#### 5.2.7 Redirect组件（重定向）

1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2. 具体编码：

```js
<Switch>
    <Route path="/home" component={Home} className="content"/>
    <Route path="/about" component={About} className="content"/>
    <Redirect to="/home"/>
</Switch>
```

#### 5.2.8 嵌套路由

1. 注册子路由时要写上父路由的path值
2. 路由的匹配时按照注册路由的顺序进行的

示例代码如下：

```js
<div className="home">
    <h3>我是About的内容</h3>
    <nav className="nav-container">
        {/* 编写路由链接 */}
        <MyNavLink to="/about/news" className="nav-item">News</MyNavLink>
        <MyNavLink to="/about/message" className="nav-item">Message</MyNavLink>
    </nav>
    {/* 注册路由 */}
    <Switch>
        <Route path="/about/news" component={News}/>
        <Route path="/about/message" component={Message}/>
        <Redirect to="/about/news"/>
    </Switch>
</div>
```

#### 5.2.9 向路由传递参数

1. 传递params参数
   1. 路由链接（携带参数）：`<Link to="/demo/test/tom/18"}>详情</Link>`
   2. 注册路由（声明接收）：`<Route path="/demo/test/:name/:age" component={Test}/>`
   3. 路由组件接收参数：`const {name, age} = this.props.match.params`
2. 传递search参数
   1. 路由链接（携带参数）：`<Link to="/demo/test?name=tom&age=18"}>详情</Link>`
   2. 注册路由（无需声明接收，正常注册即可）：`<Route path="/demo/test" component={Test}/>`
   3. 路由组件接收参数：`const {search} = this.props.location`
   4. 注：获取到的search是urlencoded编码字符串，需要借助querystring解析
3. 传递state参数
   1. 路由链接（携带参数）：`<Link to={pathname: '/demo/test', state={name: 'tom', age: 18}}>详情</Link>`
   2. 注册路由（无需声明接收，正常注册即可）：`<Route path="/demo/test" component={Test}/>`
   3. 路由组件接收参数：`const {name, age} = this.props.location.state`
   4. 注：刷新也可以保留携带的参数（通过浏览器history保存）

> 传递params/search参数时，在路由链接中，to属性值也可以是对象，例如：`<Link to={pathname: '/demo/test/tom/18'}}>详情</Link>`，不过没有直接写字符串更简便

#### 5.2.10 push和replace模式

1. push模式，即每次跳转链接都会将记录压入栈中
2. replace模式，是将此次跳转替换栈顶元素

开启repalce模式方式：**路由链接**处添加replace属性

#### 5.2.11 编程式路由导航

通过路由组件`this.props.history`下的方法进行跳转：

+ `go: ƒ go(n)`
+ `goBack: ƒ goBack()`
+ `goForward: ƒ goForward()`
+ `push: ƒ push(path, state)`
+ `replace: ƒ replace(path, state)`

#### 5.2.12 withRouter函数

withRouter可以加工一般组件，让一般组件具备路由组件所特有的API，其返回值是一个新组件

```js
import { withRouter } from 'react-router-dom';

class RouterCase extends Component {
    // ...
}

export default withRouter(RouterCase);
```

#### 5.2.13 BrowserRouter和HashRouter的区别

1. 底层原理不一样：
   1. BrowserRouter使用的是H5的history API，不兼容IE9以下版本
   2. HashRouter使用的是URL的哈希值（锚点）
2. url表现形式不一样
   1. BrowserRouter的路径没有#，例如：`localhost:3000/demo/test`
   2. HashRouter的路径包含#，例如：`localhost:3000/#/demo/test`
3. 刷新后对路由state参数的影响
   1. BrowserRouter没有任何影响，因为state保存在history对象中
   2. HashRouter刷新后会导致路由state相关参数的丢失
4. 备注：HashRouter可以用于解决一些路径错误相关的问题

## 5.React UI组件库

1. Material UI：https://mui.com/
2. Ant Design：https://ant.design/index-cn

### 5.1 基本使用

```js
import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Button type="primary">test</Button>
                <DatePicker/>
            </div>
        );
    }
};
```

### 5.2 按需引入组件

不需要通过`npm run eject`命令暴露配置文件，通过以下进行配置：

操作文档：https://3x.ant.design/docs/react/use-with-create-react-app-cn#%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE

> 注：3.x文档更加详细

### 5.3 自定义主题

操作文档：https://3x.ant.design/docs/react/use-with-create-react-app-cn#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98

注：暂时存在问题，还未解决

## 6.Redux

### 6.1 redux理解

学习文档：

+ 英文文档：https://redux.js.org/
+ 中文文档：http://cn.redux.js.org/
+ github：https://github.com/reduxjs/redux

redux是什么？

1. redux是一个专门用于做状态管理的JS库（不是react库）
2. 它可以用在react、angular、vue等项目中，但基本与react配合使用
3. 作用：集中式管理react应用中多个组件共享的状态

什么情况下需要使用redux？

1. 某个组件的状态需要与其它组件随时拿到（共享）
2. 一个组件需要改变另外一个组件的状态（通信）
3. 总体原则：能不用就不用，如果不用比较吃力才考虑使用

### 6.2 redux工作流程

![](https://img2022.cnblogs.com/blog/1622292/202205/1622292-20220508114806157-1421601264.png)

### 6.3 redux的三个核心概念

**action**：

1. 动作的对象
2. 包含两个属性
   1. type：标识属性，值为字符串，唯一，必要性
   2. data：数据属性，值类型任意，可选属性
3. 例子：`{type: 'ADD_STUDENT', data: {name: 'Tom, age: 18}}`

**reducer**：

1. 用于初始化状态、加工状态
2. 加工时，根据旧的state和action，产生新的state的**纯函数**

**store**：

1. 将state、action、reducer联系在一起的对象
2. 如何得到此对象？
   1. `import {createStore} from 'redux'`
   2. `import reducer from './reducers'`
   3. `const store = createStore(reducer)`
3. 此对象的功能？
   1. getState()：得到state
   2. dispatch(action)：分发action，触发reducer调用，产生新的state
   3. subscribe(listener)：注册监听，当产生了新的state时，自动调用

### 6.4 求和案例_redux精简版

1. 去除Count组件自身的状态（自身可以保留其它状态）
2. src下建立：
   1. redux
      1. store.js
      2. countReducer.js
3. store.js
   1. 引入redux中的createStore函数，创建一个store
   2. createStore调用时要传入一个为其服务的reducer
   3. 记得暴露store对象
4. countReducer.js
   1. reducer的本质是一个函数，接收preState, action，返回加工后的状态
   2. reducer有两个作用：初始化状态，加工状态
   3. reducer被第一次调用时，是store自动触发的
      1. 传递的preState是undefined
      2. 传递的action是`{type: '@@redux/INITk.8.t.4.d.6'}`
5. 在index.js中检测store中的状态改变，一旦发生改变，重新渲染`<App/>`（注：redux只负责管理状态，至于状态的改变驱动页面的展示，需要自己动手写）

案例位置：[P100_求和案例_redux精简版](https://gitee.com/haveadate/react_demo/tree/master/P100_%E6%B1%82%E5%92%8C%E6%A1%88%E4%BE%8B_redux%E7%B2%BE%E7%AE%80%E7%89%88)

### 6.5 求和案例_redux完整版

新增文件：

1. countAction.js：专门用于创建action对象
2. constant.js：放置容易写错的type值

案例位置：[P101_求和案例_redux完整版](https://gitee.com/haveadate/react_demo/tree/master/P101_%E6%B1%82%E5%92%8C%E6%A1%88%E4%BE%8B_redux%E5%AE%8C%E6%95%B4%E7%89%88)

### 6.6 求和案例_异步action版

1. 明确：延迟的动作不想交给组件本身，想交给action
2. 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
3. 具体编码：
   1. `npm i redux-thunk -S`，并配置在store中：`export default createStore(countReducer, applyMiddleware(thunk))`
   2. 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
   3. 异步任务有结果后，分发一个同步的action去真正操作数据
4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action

案例位置：[P102_求和案例_异步action版](https://gitee.com/haveadate/react_demo/tree/master/P102_%E6%B1%82%E5%92%8C%E6%A1%88%E4%BE%8B_%E5%BC%82%E6%AD%A5action%E7%89%88)

### 6.7 react-redux基本使用

工作原理：

![](https://img2022.cnblogs.com/blog/1622292/202205/1622292-20220508165359604-879331370.png)

1. 明确两个概念
   1. UI组件：不能使用任何redux的api，只负责页面的呈现、交互等
   2. 容器组件：负责和redux通信，将结果交给UI组件
2. 如何创建一个容器组件——靠react-redux的connect函数
   + connect(mapStateToProps, mapDispatchToProps)(UI组件)
     + mapStateToProps：映射状态，返回值是一个对象
     + mapDispatchToProps：映射操作状态的方法，返回值是一个对象
3. 备注：容器组件中的store是靠props穿进去的，而不是在容器组件中直接引入

案例位置：[P105_求和案例_react-redux基本使用](https://gitee.com/haveadate/react_demo/tree/master/P105_%E6%B1%82%E5%92%8C%E6%A1%88%E4%BE%8B_react-redux%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)

### 6.8 简写mapDispatchToProps

```js
// path: src/container/ReduxDemo/index.jsx

// 引入ReduxDemo的UI组件
import ReduxDemo from '../../components/ReduxDemo';
// 引入connnect用于连接UI组件与redux
import { connect } from 'react-redux';
// 引入定义的actions
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/countAction';

// 使用connect()()创建并暴露一个RedexDemo的容器组件
export default connect(
    // mapStateToProps
    state => ({count: state}),

    // mapDispatchToProps的一般写法(函数)
    // dispatch => ({
    //     increment: num => dispatch(createIncrementAction(num)),
    //     decrement: num => dispatch(createDecrementAction(num)),
    //     incrementAsync: (num, time) => dispatch(createIncrementAsyncAction(num, time))
    // })

    // mapDispatchToProps的简写(对象，react-redux会自动进行分发(dispatch))
    {
        increment: createIncrementAction,
        decrement: createDecrementAction,
        incrementAsync: createIncrementAsyncAction
    }
)(ReduxDemo);
```

### 6.9 Provider组件

1. 使用react-redux组件以后，就不用再监听redux中状态的变化，react-redux会帮我们进行处理
2. 通过react-redux中的Provider组件传递store可以使页面中所有容器接受store

代码如下：

```js
// 原版本
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// 检测redux中状态的变化，若redux的状态发生了改变，那么重新渲染App组件
store.subscribe(() => root.render(<App/>));


// 新版本
import React from "react";
import ReactDOM from 'react-dom/client';  
import { Provider } from "react-redux";
import App from "./App";
import store from './redux/store';

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
```

### 6.10 优化总结

1. 容器组件和UI组件整合成一个文件
2. 无需自己给容器组件传递store，给`<App/>`包裹一个`<Provider store={store}`即可
3. 使用了react-redux后也不用再自己检测redux中状态的改变了，容器组件可以自动完成这个工作
4. mapDispatchToProps也可以简单写成一个对象
5. 一个组件要和redux“打交道”要经过哪几步？
   1. 定义好UI组件——不暴露
   2. 引入connect生成一个容器组件，并暴露，写法如下：
   3. connect(state => ({key：value}), {key: xxxAction})(UI组件)（前后分别映射状态、映射操作状态的方法）
   4. 在UI组件中通过this.props.xxx读取和操作状态

### 6.11 求和案例_react-redux数据共享版

1. 定义一个Person组件，和Count组件通过redux共享数据
2. 为Person组件编写：reduce、action，配置constant常量
3. 重点：Person的reducer和Count的reducer要是用combineReducers进行合并，合并后的总状态是一个对象！！！
4. 交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”

案例位置：[P111_求和案例_react-redux数据共享版](https://gitee.com/haveadate/react_demo/tree/master/P111_%E6%B1%82%E5%92%8C%E6%A1%88%E4%BE%8B_react_redux%E6%95%B0%E6%8D%AE%E5%85%B1%E4%BA%AB%E7%89%88)

### 6.12 纯函数

1. 一般类别的函数：只要是同样的输入（实参），必定得到同样的输出（返回值）
2. 必须遵守以下一些约束
   1. 不得改写参数数据
   2. 不会产生任何副作用，例如网络请求、输入和输出设备
   3. 不能调用Date.now()或者Math.random()等不纯的方法
3. redux的reducer函数必须是一个纯函数

### 6.13 redux开发者工具

Redux DevTools：https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=zh-CN

需要结合一定代码使用：

1. 安装：`npm i redux-devtools-extension`
2. store中进行配置
   1. `import { composeWithDevTools } from 'redux-devtools-extension'`
   2. `const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))`

案例位置：[P113_求和案例_redux开发者工具](https://gitee.com/haveadate/react_demo/tree/master/P113_%E6%B1%82%E5%92%8C%E6%A1%88%E4%BE%8B_redux%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7)

### 6.14 求和案例_react-redux最终版

1. 所有变量名要规范，尽量触发对象的简写形式
2. reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer

案例位置：[P114_求和案例_react-redux最终版](https://gitee.com/haveadate/react_demo/tree/master/P114_%E6%B1%82%E5%92%8C%E6%A1%88%E4%BE%8B_react-redux%E6%9C%80%E7%BB%88%E7%89%88)

## 7. 项目打包

1. 打包项目：`npm run build`
2. 安装serve运行静态页面：`npm i serve -g`
3. 运行打包后的项目：`serve bulild`（此处build是指打包后存放的目录）

## 8. 扩展

以下章节案例位置：react_extension

### 8.1 通过yarn安装react应用

1. 安装yarn: `npm i yarn -g`
2. 安装react：`yarn create react-app react_extension`

### 8.2 setState

```js
increment = () => {
    // 1.对象式的setState
    // const {count} = this.state;
    // this.setState({count: count + 1}, () => console.log('通过回调函数形式获取', this.state.count));
    // console.log('直接获取', this.state.count)

    // 2.函数式的setState
    this.setState(
        (state, props) => ({count: state.count + 1}),
        () => console.log('通过回调函数形式获取', this.state.count)
    );
    console.log('直接获取', this.state.count);
};
```

1. `setState(stateChang, [callback])` —— 对象式的setState
   1. stateChange为状态改变对象（该对象可以体现出状态的更改）
   2. callback是可选的回调函数，它在状态更新完毕、界面也更新后（render调用后）才被调用
   3. 注：setState更新状态是异步的
2. `setState(updater, [callback])` —— 函数式setState
   1. updater为返回stateChang对象的函数
   2. updater可以接收到state和props
   3. callback是可选的回调函数，它在状态更新、界面也更新后（render调用后）才被调用

总结：

1. 对象式的setState是函数式的setState的简写方式（语法糖）
2. 使用原则：
   1. 如果新状态不依赖原状态 => 使用对象方式
   2. 如果新状态以来原状态 => 使用函数方式
   3. 如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取

案例位置：[components/1_setState](https://gitee.com/haveadate/react_extension/blob/master/src/components/1_setState)

## 8.3 路由懒加载(lazyLoad)

使用yarn安装react-router-dom：`yarn add react-router-dom`

```js
import React, { Component, Suspense, lazy } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import './index.css';

// 通过React的lazy函数配合import()函数动态加载路由组件 => 路由组件代码会被分开打包
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

// ...

{/* 通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面 */}
<Suspense fallback={<h2>Loading...</h2>}>
    <Switch>
        <Route path="/home" component={Home} className="content"/>
        <Route path="/about" component={About} className="content"/>
    </Switch>
</Suspense>
```

案例位置：[components/2_lazyLoad](https://gitee.com/haveadate/react_extension/tree/master/src/components/2_lazyLoad)

## 8.4 React Hooks

### 8.4.1 Ract Hook/Hooks是什么？

1. Hook是React 16.8.0版本增加的新特性/新语法
2. 可以让你在函数组件中使用state以及其它React特性

### 8.4.2 三个常用的Hook

1. State Hook: `React.useState()`
2. Effect Hook: `React.useEffect()`
3. Ref Hook: `React.useRef()`

### 8.4.3 State Hook

1. State Hook让函数式组件也可以有state状态，并进行状态数据的读写操作
2. 语法：`const [xxx, setXxx] = React.useState(initValue)`，例如：`const [name, setName] = React.useState('Tom')`
3. useState()说明：
   1. 参数：第一次初始化指定的值在内部做缓存
   2. 返回值：包含2个元素的数组，第1个为内部当前状态值，第2个为更新状态值的函数
4. setXxx()的2种写法：
   1. setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
   2. setXxx(value => newValue)：参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原本的状态值

案例位置：[components/3_state_hook](https://gitee.com/haveadate/react_extension/tree/master/src/components/3_state_hook)

### 8.4.4 Effect Hook

1. Effect Hook 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）
2. React中的副作用操作：
   1. 发ajax请求获取数据
   2. 设置订阅 / 启动定时器
   3. 手动修改真实DOM
3. 语法和说明：

```js
useEffect(() => {
    // 在此可以执行任何副作用操作
    return () => { // 在组件卸载前执行
        // 在此做一些收尾工作，比如清除定时器/取消订阅等
    };
}, [stateValue]);   // 如果指定的是[]，回调函数只会在第一次render()后执行
```

4. 可以把useEffect Hook看作如下三个函数的组合
   1. componentDidMount()
   2. componentDidUpdate()
   3. componentWillUnmount()

总结 useEffect(() => {/.../}, [])：

1. 若第二个参数不传，则表示检测所有状态变化
   1. 回调函数函数体：在初始化，状态改变前都会执行
   2. 回调函数返回的函数：在状态更新、卸载组件时调用
2. 若第二个参数传`[]`，则只会在初始化时执行回调函数的内容，卸载组件时执行返回的函数体内容
3. 若第二个参数传关注的状态
   1. 回调函数函数体：初始化或关注的状态发生改变时调用
   2. 回调函数返回的函数：组件卸载或关注的状态发生改变时调用

案例位置：[components/4_effect_hook](https://gitee.com/haveadate/react_extension/tree/master/src/components/4_effect_hook)

### 8.4.5 Ref Hook

1. Ref Hook可以用在函数组件中存储/查找组件内的标签或任意其它数据
2. 语法：`const refContainer = React.useRef()`
3. 作用：保存标签对象，功能与React.createRef()一样

```js
function Demo() {
    const inputRef = React.useRef();
    const printInput = () => console.log(inputRef.current.value);

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={printInput}>点击打印输入的内容</button>
        </div>
    );
}
```

案例位置：[components/5_ref_hook](https://gitee.com/haveadate/react_extension/tree/master/src/components/5_ref_hook)

### 8.4.6 Fragment

使用：

```html
<Fragment></Fragment>
<></>
```

作用：可以不用必须有一个真实的DOM根标签了（防止层级不必要太深）

区别：`<Fragment></Fragment>`可以传递key和children属性，而`<></>`不能接收任何属性

```js
// MyFragment组件
export default class MyFragment extends Component {
    render() {
        return (
            <Fragment>
                <span>今天天气不错</span>
            </Fragment>
        );
    }
}

// App.jsx
export default class App extends Component {
    render() {
        return (
            <MyFragment/>
        );
    }
};
```

生成的html结构：

```html
<div id="root">
    <span>今天天气不错</span>
</div>
```

案例位置：[components/6_Fragment](https://gitee.com/haveadate/react_extension/tree/master/src/components/6_Fragment)

### 8.4.7 Context

理解：一种组件间通信方式，常用于【祖组件】与【后代组件】间通信
使用：

```js
// 1. 创建Context容器对象
const XxxContext = React.createContext();

// 2. 渲染子组件时，外面包裹XxxContext.Provider，通过value属性给后代组件传递数据
<XxxContext.Provier value={数据}>
    子组件
</XxxContext.Provider>

// 3. 后代组件读取数据
// 第一种方式：仅适用于类组件
static contextType = XxxContext;    // 声明接收Context
this.context;   // 读取context中的value数据

// 第二种方式：适用于函数组件和类组件
<XxxContext.Consumer>
{
    value => {  // value就是XxxContext中传递的value数据
        // 要显示的内容
    }
}
</XxxContext.Consumer>
```

注：在应用开发中一般不用context，一般都用它封装的react插件

案例位置：[components/7_Context](https://gitee.com/haveadate/react_extension/tree/master/src/components/7_Context)

### 8.4.8 组件优化

React.Component的两个问题：

1. 只要执行setState()，即使不改变状态数据，组件也会重新render => 效率低
2. 当组件重新render，就会自动更新render子组件，纵使子组件没有用到父组件的任何数据 => 效率低

效率高的做法：只有当组件的state或props数据发生改变时才重新render

原因：Component中的shouldComponentUpdate()总是返回true

解决：

1. 方法一：重写shouldComponentUpdate()方法，比较新旧state或props数据，如果有变化才返回true，如果没有则返回false
2. 方法二：使用PureComponent
   1. PureComponent重写了shouldComponentUpdate()，只有state或props数据有变化才返回true
   2. 注意：
      1. 只是进行state和props数据浅比较，如果只是数据对象内部数据变了，返回false
      2. 不要直接修改state数据，而是要产生新数据

注：项目中一般使用PureComponent来优化

案例位置：[components/8_optimization](https://gitee.com/haveadate/react_extension/tree/master/src/components/8_optimization)

### 8.4.9 render props

如何向组件内部动态传入带内容的结构（标签）？

1. Vue中：使用slot技术，也就是通过组件标签体传入结构`<A><B/></A>`
2. React中：
   1. 使用children props：通过组件标签体传入结构
   2. 使用render props：通过组件标签属性传入结构，而且可以携带数据，一般用render函数属性

children props：

```html
<A>
    <B>xxx</B>
</A>
<!-- A组件获取B组件：{this.props.children} -->
<!-- 问题：如果B组件需要A组件内的数据 ==> 做不到 -->
```

render props：

```html
<A render={data => <B data={data}>xxx</B>}></A>
<!-- A组件：{this.props.render(内部state数据)} -->
<!-- B组件：读取A组件传入的数据{this.props.data} -->
```

案例位置：[components/9_render_props](https://gitee.com/haveadate/react_extension/tree/master/src/components/9_render_props)

### 8.4.10 错误边界

错误边界（Error boundary）：用来捕获后代组件错误，渲染出备用页面

特点：只能捕获**后代生命周期**产生的错误，不能捕获自己组件产生的错误和其它组件在合成事件、定时器中产生的错误

使用方式：getDerivedStateFromError配合componentDidCatch

```js
// 生命周期函数：一旦后台数据报错就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {hasError: true};
}

// 统计页面的错误，发送请求到后台去
componentDisCatch(error, info) {
    console.log(error, info);
}
```

案例位置：[components/10_ErrorBoundary](https://gitee.com/haveadate/react_extension/tree/master/src/components/10_ErrorBoundary)

### 8.4.11 组件通信方式总结

组件间的关系：

+ 父子组件
+ 兄弟组件（非嵌套组件）
+ 祖孙组件（跨级组件）

几种通信方式：

1. props：
   1. children props
   2. render props
2. 消息订阅——发布：pub-sub、event等等
3. 集中式管理：redux、dva等等
4. context：生产者——消费者模式

比较好的搭配方式：

1. 父子组件：props
2. 兄弟组件：消息订阅——发布、集中式管理
3. 祖孙组件：消息订阅——发布、集中式管理、context（开发用的少，封装插件用的多）

## 8.5 React Router 6

### 8.5.1 概述

1. React Router三个不同的包发布到npm上，它们分别为：
   1. react-router：路由的核心库，提供了很多的组件、钩子
   2. react-router-dom：包含react-router所有内容，并添加一些专门用于DOM的组件，例如<BrowserRouter>等
   3. react-router-native：包括react-router所有内容，并添加一些专门用于ReactNative的API，例如<NativeRouter>等
2. 与React Router 5.x 版本相比，改变了什么？
   1. 内置组件的变化：移除`Switch`，新增`Routes`等
   2. 语法的变化：`component={About}`变为`element={About}`等
   3. 新增多个hook：useParams、useNavigate、useMatch等
   4. 官方明确推荐函数式组件了！！！
   ……

### 8.5.2 Component

#### 1.`<BrowserRouter>`

1. 说明：BrowserRouter用于包裹整个应用
2. 实例代码：

```js
import React from "react";
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

ReactDOM
    .createRoot(document.getElementById('root'));
    .render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
```

#### 2.`<HashRouter>`

1. 说明：作用与BrowserRouter一样，但HashRouter修改的是地址栏的hash值
2. 备注：6.x版本中HashRouter、BrowserRouter的用法与5.x相同

#### 3.`<Routes>`和`<Route>`

1. 6.x版本移除了5.x版本的Switch，引入了新的替代者：Routes
2. Routes和Route要配合使用，且必须用Routes包裹Route
3. Route（属性名变更component => element）相当于一个if语句，如果其路径与当前URL匹配，则呈现其对应的组件
4. `<Route caseSensitive>`属性用于指定：匹配时是否区分大小写（默认为false）
5. 当URL发生变化时，Routes都会查看其所有子Route元素，以找到最佳匹配组件并呈现
6. Route也可以嵌套使用，并可配合useRoutes配置“路由表”，但需要通过Outlet组件来渲染其子路由

示例代码：

```js
<Routes>
    {/* path属性用于定义路径，element属性用于定义当前路径所对应的组件 */}
    <Route path="/login" element={<Login/>}/>

    {/* 用于定义嵌套路由，home是一级路由，对应路径/home */}
    <Route path="/home" element={<Home/>}>
        {/* test1和test2是二级路由，对应的路径是/home/test1、/home/test2 */}
        <Route path='test1' element={<Test1/>}/>
        <Route path='test2' element={<Test2/>}/>
    </Route>

    {/* Route也可以不写element属性，这时就是用于展现嵌套的路由，所对应的路径是/user/xxx */}
    <Route path="/user">
        <Route path="xxx" element={<Demo/>}/>
    </Route>
</Routes>
```

#### 4.`<Link>`

1. 作用：修改URL，且不发送网络请求（路由链接）
2. 注意：外侧需要用BrowserRouter或HashRouter包裹
3. 实例代码：

```js
<Link to="路径">查看详情</Link>

{/* 传递state参数 */}
<Link to="detail" state={{id: msg.id, title: msg.title}}>
    <span>{msg.title}</span>
</Link>
```

#### 5.`<NavLink>`

1. 作用与Link组件类似，且可实现导航的**高亮**效果
2. 示例代码：

```js
{/* 注意：NavLink默认类名是active，下面是指定自定义的class */}

{/* 自定义样式 */}
<NavLink
    to="/login"
    className={({isActive}) => {
        console.log('home', isActive);
        return isActive ? 'base active_component' : 'base';
    }}
>Login</NavLink>

{/* 
    默认情况下，当Home的子组件匹配成功，Home的导航也会高亮
    当NavLink上添加了end属性后，若Home的子组件匹配成功，则Home的导航没有高亮效果
*/}
<NavLink to="/home" end>Home</NavLink>
```

#### 6.`<Navigate/>`

1. 作用：只要Navigate组件被渲染，就会修改路径，切换视图
2. replace属性用于控制跳转模式（push或replace，默认是push)
3. 实例代码：

```js
import React, {useState} from 'react';
import {Navigate} from 'react-router-dom';

export default function Home() {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h3>我是Home组件的内容</h3>
            {/* 根据count的值决定是否切换视图 */}
            {count === 1 ? <h4>count的值为{count}</h4>} : <Navigate to="/about" replace/>}
            <button onClick={() => setCount(2)}>点我将count变为2</button>
        </div>
    );
};
```

#### 7.`<Outlet/>`

1. 当Route产生嵌套时，渲染其对应的后续子路由
2. 示例代码：

```js
// 根据路由表生成对应的路由规划
const element = useRoutes([
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>,
        children: [
            {
                path: '',
                element: <Navigate to="news"/>
            },
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>
            }
        ]
    }
]);

// About.js
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

export default function About() {
    return (
        <div>
            <span>我是About组件的内容</span>
            <nav className="nav-container">
                {/* 编写路由链接 */}
                <NavLink to="news" className="nav-item">News</NavLink>
                <NavLink to="message" className="nav-item">Message</NavLink>
            </nav>
            {/* 注册路由 */}
            <Outlet/>
        </div>
    );
};
```

### 8.5.3 Hooks

#### 1. `useRoutes()`

1. 作用：根据路由表，动态创建`<Routes>`和`<Route>`
2. 实例代码：

```js
// routes/index.js
const element = useRoutes([
    {
        path: '/',
        element: <Navigate to="/home"/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>,
        children: [
            {
                path: '',
                element: <Navigate to="news"/>
            },
            {
                path: 'news',
                element: <News/>
            },
            {
                path: 'message',
                element: <Message/>
            }
        ]
    }
]);

// index.js
import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom';
import {routes} from './routes';
import './index.css';

export default function RouteDemo() {
    const computedClassName = ({isActive}) => isActive ? 'link active' : 'link';
    const element = useRoutes(routes);

    return (
        <div className="container">
            <h2>React Router Demo</h2>
            <div className="main">
                <nav>
                    {/* 路由链接 */}
                    <NavLink to="/home" className={computedClassName}>Home</NavLink>
                    <NavLink to="/about" className={computedClassName} end>About</NavLink>
                </nav>
                {/* 注册路由 */}
                {element}
            </div>
        </div>
    );
};
```

#### 2. `useNavigate()`

1. 作用：返回一个函数来实现编程式导航
2. 示例代码：

```js
import React from 'react';
import {useNavigate} from 'react-router-dom'

export default function Demo() {
    const navigate = useNavigate();
    const handle = () => {
        // 第一种使用方式：指定具体的路径
        navigate('/login', {
            replace: false,
            state: {a: 1, b: 2}
        });

        // 第二种使用方式，传入数值进行前进或后退，类似于5.x中的history.go()方法
        navigate(-1);
    };

    return (
        <div>
            <button onClick={handle}>按钮</button>
        </div>
    );
};
```

#### 3. `useParams()`

1. 作用：返回当前匹配路由的params参数，类似于5.x中的`match.params`
2. 示例代码：

```js
import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
    // 获取URL中携带过来的params参数
    cosnt {id} = useParmas();
    // ...
}

function App() {
    return (
        <Routes>
            <Route path="users/:id" element={<User/>}/>
        </Routes>
    );
}
```

#### 4. `useSearchParams()`

1. 作用：用于读取和修改当前位置的URL中的查询字符串
2. 返回一个包含两个值的数组，内容分别为：当前的search参数、更新search的函数
3. 示例代码：

```js
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const messages = [
    {id: '001', content: '消息1的内容'},
    {id: '002', content: '消息2的内容'},
    {id: '003', content: '消息3的内容'}
];

export default function Detail() {
    // 接收search参数
    const [search, setSearch] = useSearchParams();
    const id = search.get('id');
    const title = search.get('title');

    // 接收state参数
    const {state: {id, title}} = useLocation();

    const {content} = messages.find(msg => msg.id === id);
    return (
        <ul style={{marginTop: '25px', paddingLeft: '25px', paddingTop: '15px', borderTop: '1px solid #dedede'}}>
            <li>ID: {id}</li>
            <li>TITLE: {title}</li>
            <li>CONTENT: {content}</li>

            {/* 修改search参数 */}
            <button onClick={() => setSearch('id=002&title=消息002')}>change search</button>
        </ul>
    );
}
```

#### 5. `useLocation()`

1. 作用：获取当前location信息，对标5.x中路由组件的location属性
2. 示例代码：

```js
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Detail() {
    // 获取this.props.location
    const location = useLocation();
    console.log(location);
    // {
    //     "pathname": "/about/message/detail",
    //     "search": "",
    //     "hash": "",
    //     "state": {
    //         "id": "001",
    //         "title": "message001"
    //     },
    //     "key": "0tenwvpv"
    // }

    // ...

    return (
        <ul style={{marginTop: '25px', paddingLeft: '25px', paddingTop: '15px', borderTop: '1px solid #dedede'}}>
            <li>ID: {id}</li>
            <li>TITLE: {title}</li>
            <li>CONTENT: {content}</li>
        </ul>
    );
}
```

#### 6. `useMatch()`

1. 作用：返回当前匹配信息，对标5.x中路由组件的match属性
2. 示例代码：

```js
<Route path="/login/:page/:pageSize" element={<Login/>}/>
<NavLink to="/login/1/10">登录</NavLink>

export default function Login() {
    // 对应位置的匹配符可以修改
    const match = useMatch('/login/:x/:y');
    console.log(mathc)
    /*
        {
            params: {x: '1', y: '10'},
            pathname: "/login/1/10",
            pathnameBase: "/login/1/10",
            pattern: {
                path: '/login/:x/:y',
                caseSensitive: false,
                end: false
            }
        }
    */

   return (
       <div>
            <h1>Login</h1>
       </div>
   );
};
```

#### 7. `useInRouterContext()`

作用：如果组件在`<Router>`的上下文呈现，则`useInRouterContext()`钩子返回`true`，否则返回`false`

#### 8. `useNavigationType()`

1. 作用：返回当前的导航类型（用户是如何来到当前页面的）
2. 返回值：`POP`、`PUSH`、`REPLACE`
3. 备注：`POP`是指在浏览器中直接打开了这个路由组件（刷新页面）以及回退到这个页面

#### 9. `useOutlet()`

1. 作用：用来呈现当前组件中要渲染的嵌套路由
2. 示例代码：

```js
const result = useOutlet();
console.log(result);
// 如果嵌套路由没有挂载，则result为null
// 如果嵌套路由已经挂载，则展示嵌套的路由对象
```

#### 10. `useResolvedPath()`

作用：给定一个URL值，解析其中的：path、search、hash值

### 8.5.4 相关案例位置

+ [components/11_一级路由](https://gitee.com/haveadate/react_extension/tree/master/src/components/11_%E4%B8%80%E7%BA%A7%E8%B7%AF%E7%94%B1)
+ [components/12_Navigate](https://gitee.com/haveadate/react_extension/tree/master/src/components/12_Navigate)
+ [components/13_高亮NavLink](https://gitee.com/haveadate/react_extension/tree/master/src/components/13_%E9%AB%98%E4%BA%AENavLink)
+ [components/14_useRoutes路由表](https://gitee.com/haveadate/react_extension/tree/master/src/components/14_useRoutes%E8%B7%AF%E7%94%B1%E8%A1%A8)
+ [components/15_嵌套路由](https://gitee.com/haveadate/react_extension/tree/master/src/components/15_%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1)
+ [components/16_路由的参数传递](https://gitee.com/haveadate/react_extension/tree/master/src/components/16_%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92)
