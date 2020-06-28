import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {addCat} from '../services/Myser';
export class Addcat extends Component {
    state={cname:'',imagePath:'',errMsg:''}
    handler=(event)=>
    {
   this.setState({cname:event.target.value})
    }
    attach=(event)=>
    {
        if(event.target.files.length>0)
        {
            let attachdata=event.target.files[0];
            this.setState({imagePath:attachdata});
            console.log(attachdata)
        }
    }
    addcat=(event)=>
    {
       event.preventDefault();
       if(this.state.imagePath!="")//check file 
       {
           //restrict only images upload
           if(this.state.imagePath.type==="image/png" || this.state.imagePath.type==="image/jpg" || this.state.imagePath.type==="image/jpeg")
           {
    let formData=new FormData();
    formData.append("cname",this.state.cname);
    formData.append("attach",this.state.imagePath);
    addCat(formData)
    .then(res=>
        {
            if(res.data.err==0)
            {
                alert(res.data.msg);
        this.props.history.push("/dashboard/category")
            }
            if(res.data.err==1)
            {
                alert(res.data.msg);
            }
        })
           }
           else 
           {
            this.setState({errMsg:'Only Jpg and Png file supported'})         
           }
       }
       else 
       {
          this.setState({errMsg:'Plz select a image'})
       }
    }
    render() {
        return (
            <div>
                <main>
                    <header>
                        <Header {...this.props}/>
                    </header>
                    <br/>
                    <section className="row container">
                        <aside className="col-sm-3">
                    <Sidebar/>
                        </aside>
                        <aside className="col-sm-9">
    {this.state.errMsg!=""?<div className="alert alert-danger">
        {this.state.errMsg}
    </div>:""}
                    <h1>Add category</h1>
                    <form onSubmit={this.addcat}>
            <div className="form-group">
                <label>Cname</label>
                <input type="text" name="cname" className="form-control" onChange={this.handler}/>
            </div>
            <div className="form-group">
                <label>Image</label>
                <input type="file" name="att" className="form-control" onChange={this.attach}/>
            </div>
            
            <input type="submit" value="Submit" class="btn btn-success"/>

                    </form>

                        </aside>
                    </section>
                </main>
            </div>
        )
    }
}

export default Addcat
