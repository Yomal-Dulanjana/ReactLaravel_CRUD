import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowShops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    getAllShops();
  }, []);

  const getAllShops = async () => {
    const response = await axios.get(`${endpoint}/shops`);
    setShops(response.data);
    //console.log(response.data)
  };

  const deleteShop = async (id) => {
    await axios.delete(`${endpoint}/shop/${id}`);
    getAllShops();
  };
  return (
    <div>
      <div className="header d__flex align__items__center pxy__30">
        <div className="navigation pxy__30">
          <ul className="navbar d__flex">
            <a href="/Home">
              <li className="nav__items mx__15">Home</li>
            </a>
            <a href="/create">
              <li className="nav__items mx__15">Create Shop</li>
            </a>
            <a href="/showshop">
              <li className="nav__items mx__15">Show Shop</li>
            </a>
          </ul>
        </div>
      </div>

      <h3 className="home__text sweet pz__10">SHOP LIST</h3>
      <br></br>
      <br></br>

      <table className="table">
        <thead>
          <tr>
            <th>Shop Name</th>
            <th>Shop Address</th>
            <th>Contact Number</th>
            <th>Is Have Fax</th>
            <th>Fax Number</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop) => (
            <tr key={shop.id}>
              <td> {shop.shop_name} </td>
              <td> {shop.shop_address} </td>
              <td> {shop.contact_number} </td>
              <td> {shop.is_have_fax} </td>
              <td> {shop.fax_number} </td>
              <td>
                <Link to={`/edit/${shop.id}`} className="btn btn-info">
                  Edit
                </Link>
                <button
                  onClick={() => deleteShop(shop.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowShops;
