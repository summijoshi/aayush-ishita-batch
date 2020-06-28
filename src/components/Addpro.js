import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {getCat,addPro} from '../services/Myser';
export class Addpro extends Component {
    state={catdata:[],imagePath:'',cname:'',pname:'',price:'',quantity:'',features:'',errMsg:''}
    handler=(event)=>
    {
        const {name,value}=event.target;
   this.setState({[name]:value})
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
    componentDidMount()
    {
        getCat()
        .then(res=>
            {
                if(res.data.err==0)
                {
                    this.setState({catdata:res.data.cdata})
                }
            })
    }
    addpro=(event)=>
    {
       event.preventDefault();
       if(this.state.imagePath!="")//check file 
       {
           //restrict only images upload
           if(this.state.imagePath.type==="image/png" || this.state.imagePath.type==="image/jpg" || this.state.imagePath.type==="image/jpeg")
           {
    let formData=new FormData();
    formData.append("cname",this.state.cname);
    formData.append("pname",this.state.pname);
    formData.append("price",this.state.price);
    formData.append("quantity",this.state.quantity);
    formData.append("features",this.state.features);
    formData.append("attach",this.state.imagePath);
    addPro(formData)
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
          {this.state.errMsg!=""?
          <div className="alert alert-danger">
              {this.state.err}
          </div>:""}
                    <h1>Add Product</h1>
                    <form onSubmit={this.addpro}>
            <div className="form-group">
                <label>Cname</label>
                <select name="cname" className="form-control" onChange={this.handler}>
                    <option>Select Category</option>
                {this.state.catdata.map(data=>
                    <option value={data.category}>{data.category}</option>
                )}
                </select>
            </div>
            <div className="form-group">
                <label>Pname</label>
                <input type="text" name="pname" className="form-control" onChange={this.handler}/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="text" name="price" className="form-control" onChange={this.handler}/>
            </div>
            <div className="form-group">
                <label>Quantity</label>
                <input type="text" name="quantity" className="form-control" onChange={this.handler}/>
            </div>
            <div className="form-group">
                <label>Features</label>
                <input type="text" name="features" className="form-control" onChange={this.handler}/>
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

export default Addpro
