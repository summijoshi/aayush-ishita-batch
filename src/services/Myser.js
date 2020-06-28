import Axios from 'axios';
import {URL} from '../config/path'; 
export function adminLogin(data)
{
    return Axios.post(`${URL}adminlogin`,data);
}
export function changePass(data)
{
    return Axios.post(`${URL}changepassword`,data);
}
export function addCat(data)
{
    return Axios.post(`${URL}addcategory`,data);
}
export function addPro(data)
{
    return Axios.post(`${URL}addproduct`,data);
}
export function editCatWithImage(data)
{
    return Axios.post(`${URL}editcategorywithimage`,data);
}
export function editCatWithoutImage(data)
{
    return Axios.post(`${URL}editcategorywithoutimage`,data);
}
export function getCat()
{
    return Axios.get(`${URL}getcategory`);
}
export function getCatByid(cid)
{
    return Axios.get(`${URL}getcategory/${cid}`);
}
export function delCategory(cid,image)
{
    return Axios.get(`${URL}delcategory/${cid}/${image}`);
}





