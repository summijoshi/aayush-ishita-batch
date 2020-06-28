import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom';
import {getCat,delCategory} from '../services/Myser';
import {URL} from '../config/path';
export class Product extends Component {
   
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
                            <h1>Products</h1>
            <table className="table">
                <tr> <td colspan={8} className="text-center">
                    <Link to="/dashboard/addpro" className="btn btn-danger">Add Product</Link></td></tr>
                <tr>
                    <td>S.no</td>
                    <td>Cname</td>
                    <td>Pname</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Image</td>
                    <td>Features</td>
                    <td>Action</td>
                </tr>
     


            </table>
                        </aside>
                    </section>
                </main>
            </div>
        )
    }
}

export default Product
