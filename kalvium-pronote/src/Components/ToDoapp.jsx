import React from "react";
import './ToDoapp.css'
export default class ToDoapp extends React.Component{
    constructor(){    //we use constructor to get the state
        super();   // to take all the properties from the parent componets to the child component
        this.state = {
            textValue:"",
            todolist:[]
        }
    }
    render(){
        // gather the state by using destructuring
        let {textValue,todolist}= this.state;
        // taking the value
        let handleChange = (event)=>{
            console.log(event.target.value)
                this.setState({textValue:event.target.value})
        }
        // create
        let handleClick = ()=>{
            this.setState({todolist:[...todolist,textValue]})
            this.setState({textValue:""})
        }
        // update
        let handelUpdate = (index)=>{
            let newValue = prompt("give new value")
            let updatedArr = todolist.map((el,i)=>{
                if(i==index){
                    return newValue
                }
                return el;
            })
            console.log(updatedArr,todolist)
            this.setState({todolist:updatedArr});
        }
        let handleDelete = (index)=>{
            let deletedArr = todolist.filter((el,i)=>i!==index)
            console.log(deletedArr)
            this.setState({todolist:deletedArr})
        }
        return(
            <>
          <div className="main">
            <div className="Addtodo">
                <input type="text"  value={textValue} onChange={handleChange} placeholder="Type Here"  className="inputText"/>
                <button onClick={handleClick} className="add">ADD</button>
            </div>
                {/* read */}
              <div className="inMain">
               {todolist.map((el,i)=>(
                  <div className="in" key={i}>
                    <p>{el}</p>
                    <button onClick={()=>handelUpdate(i)} className="btnsU">Update</button>
                    <button onClick={()=>handleDelete(i)} className="btnsD">Delete</button>
                  </div>
               ))}
              </div>
         </div> 
            </>
        )
    }
}


// import React from "react";
// export default class ToDoapp extends React.Component{
// render(){
//     return(
//         <>
//         </>
//     )
// }
// }
//   this is boilerplate for class function