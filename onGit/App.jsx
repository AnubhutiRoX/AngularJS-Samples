import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			header : "header property",
			data : [
				{
					id: "1",
					name:"Anubhuti",
					age:"28"
				},
				{
					id: "1",
					name:"Ashish",
					age:"27"
				},
				{
					id: "1",
					name:"Anusha",
					age:"25"
				},
				{
					id: "1",
					name:"Vineeta",
					age:"26"
				}
			],
			otherData : [
			
			],
			num : 0,
			val : "Initial Value"
		}
		this.setStateHandler = this.setStateHandler.bind(this);
		this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
		this.changeNodeColor = this.changeNodeColor.bind(this);
		this.updateCounter = this.updateCounter.bind(this);
	}
	setStateHandler(){
		var myStateDate = "stateData ! ";
		var myArray = this.state.otherData;
		myArray.push(myStateDate);
		this.setState({otherData : myArray});
	}
	forceUpdateHandler(){
		this.forceUpdate();
	}
	changeNodeColor(){
		var item = document.getElementById('nodeId');
		ReactDOM.findDOMNode(item).style.color = 'green';
	}
	updateCounter(){
		this.setState({num : this.state.num + 1});
	}
	render() {
      return (
         <div>
			<Header inputVal={this.state.val} headerProp={this.state.header}/>
			<h4>{this.props.item1}</h4>
			<table>
				<tbody>
					{
						this.state.data.map(function(person,i) {
							return (<Content key={i} data={person}/>);
						})
					}
				</tbody>
			</table>
			<h1>Array : {this.props.propArray}</h1>
			<h1>Boolean : {this.props.propBoolean}</h1>
			<button onClick={this.setStateHandler}>Click Me</button>
			<span>{this.state.otherData}</span>
			<button onClick={this.forceUpdateHandler}>Click Me</button>
			<span>{Math.random()}</span>
			<button onClick={this.changeNodeColor}>Change Node Color</button>
			<span id="nodeId">Node Item</span>
			<button onClick={this.updateCounter}>Increment By One</button>
			<Increment number = {this.state.num}/>
		</div>
      );
	}
}
App.propTypes = {
	propArray : React.PropTypes.array.isRequired,
	propBoolean : React.PropTypes.bool.isRequired
}
App.defaultProps={
	item1:"test item",
	//propArray : [1,2,3,4,5],
	propBoolean : true
}
class Increment extends React.Component{
	componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   updateState(e){
	   this.setState({val : e.target.value});
   }
	render(){
		return(
			<span>{this.props.number}</span>
		);
	}
}
class Header extends React.Component{
	render(){
		var styleElem = {
			color : 'green',
			fontSize : 100
		}
		return (
			<div>
				<h1 style={styleElem}>This is Heading. Property = {this.props.headerProp}</h1>
					{/*Some comments*/}
				<input type="text" defaultValue={this.props.inputVal} value={this.props.inputVal} onChange={this.updateState}/>
				<span>{this.props.inputVal}</span>
			</div>
		);
	}
}
class Content extends React.Component{
	render(){
		return (
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		);
	}
}

export default App;