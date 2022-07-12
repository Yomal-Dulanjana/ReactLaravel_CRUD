import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api/shop/";

const EditShop = () => {
  const [shop_name, setShop_name] = useState("");
  const [shop_address, setShop_address] = useState("");
  const [contact_number, setContact_number] = useState("");
  const [is_have_fax, setIs_have_fax] = useState("");
  const [fax_number, setFax_number] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      shop_name: shop_name,
      shop_address: shop_address,
      contact_number: contact_number,
      is_have_fax: is_have_fax,
      fax_number: fax_number,
    });
    navigate("/");
  };

  useEffect(() => {
    const getShopById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setShop_name(response.data.shop_name);
      setShop_address(response.data.shop_address);
      setContact_number(response.data.contact_number);
      setIs_have_fax(response.data.is_have_fax);
      setFax_number(response.data.fax_number);
    };
    getShopById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <h3 className="home__text sweet pz__10">EDIT SHOP</h3>
      <br></br>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Shop Name</label>
          <input
            value={shop_name}
            onChange={(e) => setShop_name(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Shop Address</label>
          <input
            value={shop_address}
            onChange={(e) => setShop_address(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            value={contact_number}
            onChange={(e) => setContact_number(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Is Have Fax</label>
          <input
            value={is_have_fax}
            onChange={(e) => setIs_have_fax(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            value={fax_number}
            onChange={(e) => setFax_number(e.target.value)}
            type="number"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <Link to={`/showshop`} className="btn btn-info">
          CANCEL
        </Link>
      </form>
    </div>
  );
};

export default EditShop;
