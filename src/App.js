import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      iv:'',
    tasks:
    [
    {
      inputvalue:'',
      id:0
    }
  ],
  home:true,
  mylist:false,
}
}
  render() {
    return (

      <div className="nav">
        <div style={{ height: 10 + "vh", backgroundColor: "grey" }}>
          <a className="nav-link" href="#" value='Home' onClick={this.chngeview}>Home</a>
          <a className="nav-link" href="#" value='Mylist' onClick={this.chngeview1}>Mylist</a>
        </div>
        { this.state.home &&
        <div className="todolist" style={{ marginTop: "20vh", marginLeft: "50%", transform: "translate(-50%)" }}>
          <div style={{textAlign:'center'}}>
            <input onChange={this.tasktodo} value={this.state.iv} style={{ fontSize: "1.5rem"}} placeholder="Enter your task" /><br></br>
            <button onClick={this.updatelist} style={{fontSize: "1rem", marginTop: "0.5rem"}}>Add Task</button>
          <br></br>
          <ol className='list'>
            {this.state.tasks.map((item)=>{
              if(item.id===0)
              return
              else
              return <li className='home-listitem' key={item.id}>{item.inputvalue}{console.log('list',item.inputvalue)}
              <button style={{borderRadius:'50%'}} onClick={()=>this.deletetask(item.id)}><img height='30px' width='25px' alt='delete' src='https://image.flaticon.com/icons/png/512/3096/3096687.png'/></button></li>
            })}
          </ol> 
          {/* <List props={list} deletetask={this.deletetask}/> */}
          </div>
        </div>
        }
        { this.state.mylist &&
        <div>
          <ol>
            {this.state.tasks.map((item)=>{
              if(item.id===0)
              return
              else
              return <li className='mylist-listitem' key={item.id}>{item.inputvalue}{console.log('list',item.inputvalue)}
              <button style={{borderRadius:'50%',float:'right',marginRight:'2%'}} onClick={()=>this.deletetask(item.id)}><img height='50px' width='40px' alt='delete' src='https://image.flaticon.com/icons/png/512/3096/3096687.png'/></button></li>
            })}
          </ol>
          </div>
        }
      </div>
    );
  }
  chngeview=()=>{
      this.setState({home:true,mylist:false});
  }
  chngeview1=()=>{
    this.setState({home:false,mylist:true});
  }
  deletetask=(id)=>{
    console.log(this.state.tasks.filter((item)=>item.id!=id));
    const newlist=this.state.tasks.filter((item)=>item.id!=id);
    this.setState({tasks:newlist});

  }
  updatelist = () => {
    const{iv}=this.state;
    const { item,id1 } = this.state.tasks;
    console.log('updateitem',item);
    id++;
    console.log(item);
    // if(this.state.tasks.length===1 && iv){
    //   this.setState({tasks:[{inputvalue:iv,id }],iv:''});
    //   return
    // }
    var done=false;
    var iv1=iv.toUpperCase();
    if (iv===''){
      alert('ENTER INPUT FIRST!');
      return;
    }
    this.state.tasks.map((item)=>{
      if(item.inputvalue===iv1){
      done=true;
      this.setState({iv:''})
      alert('ALREADY ADDED');
    }
    })
    if (iv && !done) {
      this.setState({tasks:[{inputvalue:iv1,id },...this.state.tasks],iv:''});
    }
    console.log('update',this.state);
  }
  tasktodo = (event) => {
    var a = event.target.value;
    this.setState({
      iv: a
    });
    
  }
}
var id=0;


export default App;
