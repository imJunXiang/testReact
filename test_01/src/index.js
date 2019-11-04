import React from 'react';
import ReactDOM from 'react-dom';

// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };

// const element = getGreeting(user)
// const element = (
// <div>
//     <h1>Hello!</h1>
//     <h1>Good to see you here.</h1>
// </div>
// );

// const element = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello world!'
// );


// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// function getGreeting(user) {
//     if (user) {
//         return <h1>Hello, {formatName(user)}!</h1>;
//     }
//     return <h1>Hello, Stranger.</h1>;
// }

// function tick() {
//     const element = (
//         <div>
//             <h1>Hello world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element,document.getElementById('root'));
// }

// setInterval(tick, 1000);
// ReactDOM.render 貌似是一个渲染函数（x,y）
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>
// }

// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }

// function App() {
//     return (
//         <div>
//             <Welcome name="haha"></Welcome>
//             <Welcome></Welcome>
//             <Welcome name="heihei"></Welcome>
//         </div>
//     );
// }

// const element = <App></App>

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h1>It is {props.date.toLocaleTimeString()}</h1>
//         </div>
//     );
// }

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date:new Date()};
//         this.tick = this.tick.bind(this)
//     }

//     componentDidMount() {
//         // 挂载
//         this.timerID = setInterval(this.tick, 1000);
//     }

//     componentWillUnmount() {
//         // 卸载
//         clearInterval(this.timerID);
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <hi>Hello, world!</hi>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         );
//     }
// }

// function App() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     );
// }

// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }));
//     }

//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? "ON":"OFF"}
//             </button>
//         );
//     }
// }

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if(isLoggedIn) {
//         return <UserGreeting></UserGreeting>;
//     }

//     return <GuestGreeting/>
// }

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>login</button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>Logout</button>
//     );
// }

// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handelLogoutClick = this.handelLogoutClick.bind(this)
//         this.state = {isLoggedIn:false};
//     }

//     handleLoginClick() {
//         this.setState({isLoggedIn:true});
//     }

//     handelLogoutClick() {
//         this.setState({isLoggedIn:false});
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handelLogoutClick}/>
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick}/>
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn}/>
//                 {button}
//             </div>
//         )
//     }
// }

// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {
//                 unreadMessages.length > 0 && 
//                 <h2>You have {unreadMessages.length} unread messages.</h2> 
//             }
//         </div>
//     );
// }

// const messages = ['React','Re: React','Re:Re: React'];

// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }

//     return (
//         <div className="warning">
//             Warning!
//         </div>
//     );
// }

// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showWarning: true};
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }

//     handleToggleClick() {
//         this.setState(state => ({
//             showWarning: !state.showWarning
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning}/>
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         );
//     }
// }

// const numbers = [1,2,3,4,5];

// function ListItem(props) {
//     return <li>{props.value}</li>;
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number)=>
//         <ListItem key={number.toString()} value={number}></ListItem> 
//     );

//     return (
//     <ul>{
//         numbers.map((number)=>
//             <ListItem key={number.toString} value={number}/>
//         )
//     }</ul>
//     );
// }

// input 

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('提交的名字: ' + this.state.value);
//         event.preventDefault(); 
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     名字:
//                     <input type="text" value={this.state.value} onChange={this.handleChange}></input>
//                 </label>
//                 <input type="submit" value="提交" />  
//             </form>
//         );
//     }
// }

// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
//         };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('提交的文章: ' + this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               选择你喜欢的风味:
//               <select value={this.state.value} onChange={this.handleChange}>
//                 <option value="grapefruit">葡萄柚</option>
//                 <option value="lime">酸橙</option>
//                 <option value="coconut">椰子</option>
//                 <option value="mango">芒果</option>
//               </select>
//             </label>
//             <input type="submit" value="提交" />
//           </form>
//         );
//       }
// }

// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }

// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         // this.setState({temperature: e.target.value});
//         this.props.onTemperatureChange(e.target.value)
//     }

//     render() {
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                 <input value={temperature}
//                     onChange={this.handleChange}></input>
//             </fieldset>
//         );
//     }
// }

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>
//     }

//     return <p>The water would not boil.</p>
// }

// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = { temperature: '', scale: 'c' };
//     }

//     handleCelsiusChange(temperature) {
//         this.setState({ scale: 'c', temperature });
//     }

//     handleFahrenheitChange(temperature) {
//         this.setState({ scale: 'f', temperature });
//     }

//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//         return (
//             <div>
//                 <TemperatureInput
//                     scale="c"
//                     temperature={celsius}
//                     onTemperatureChange={this.handleCelsiusChange} />

//                 <TemperatureInput
//                     scale="f"
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleFahrenheitChange} />

//                 <BoilingVerdict
//                     celsius={parseFloat(celsius)} />

//             </div>
//         );
//     }
// }

// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }

// function WelcomeDialog() {
//     return (
//         <FancyBorder color='blue'>
//             <h1 className="Dialog-title">Welcome</h1>
//             <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
//         </FancyBorder>
//     );
// }

const ThemeContext = React.createContext('light')

class App extends React.Component {
    render() {
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        );
    }
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <button theme={this.context} />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

