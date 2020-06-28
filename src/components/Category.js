import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom';
import {getCat,delCategory} from '../services/Myser';
import {URL} from '../config/path';
export class Category extends Component {
    state={cdata:[]};
    componentDidMount()
    {
        getCat()
        .then(res=>
            {
                if(res.data.err==0)
                {
            this.setState({cdata:res.data.cdata})
                }
            })
    }
    editCat=(cid)=>
    {
        this.props.history.push("/dashboard/editcat/"+cid);
    }
    delCat=(cid,cimage)=>
    {
        if(window.confirm("Do u want to delete?"))
        {
       delCategory(cid,cimage)
       .then(res=>
        {
             if(res.data.err==0)
             {
                 alert(res.data.msg);
        getCat()
        .then(res=>
            {
                if(res.data.err==0)
                {
            this.setState({cdata:res.data.cdata})
                }
            })
             }
             if(res.data.err==1)
             {
                 alert(res.data.msg)
             }
        })
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
                            <h1>Category</h1>
            <table className="table">
                <tr> <td colspan={5} className="text-center">
                    <Link to="/dashboard/addcat" className="btn btn-danger">Add category</Link></td></tr>
                <tr>
                    <td>S.no</td>
                    <td>Cname</td>
                    <td>Image</td>
                    <td>Date</td>
                    <td>Action</td>
                </tr>
        {this.state.cdata.map((cat,ind)=>
                        <tr>
                        <td>{ind+1}</td>
                        <td>{cat.category}</td>
                        <td>
        <img src={`${URL}${cat.image}`} width={50} height={50}/>
                        </td>
                        <td>{cat.created_at}</td>
                        <td>
                        <button className="alert alert-info" onClick={()=> this.editCat(cat._id)}>Edit</button> 
                    <button className="alert alert-danger" onClick={()=> this.delCat(cat._id,cat.image)}>Delete</button></td>
                    </tr>
            )}


            </table>
                        </aside>
                    </section>
                </main>
            </div>
        )
    }
}

export default Category
