import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router, { useRouter } from "next/router";
// Actions de redux
import {
  addCurrentUser,
  addUserSuccess,
  addUserError,
} from "../../redux/actions/currentUserActions";
import useUserInfo from "../../hooks/useUserInfo";

import { deliveryTo } from "../../public/statics/delivery";

// const INITIAL_STATE = {
//   name: '',
//   dirType: 'casa',
//   province: 'colon',
//   zone: '',
//   street: '',
//   house: '',
//   phone: '',
//   email: '',
//   dirDetails: '',
// }

const CheckoutBuyerInfo = ({ usuario, firebase }) => {
  const [userEmail, setUserEmail] = useState("nada");
  // Estado local para manejar informacion del formulario de checkout
  const [currentUserInfo, setCurrentUserInfo] = useState({
    saveInfo: false,
    deliveryPrice: 2,
  });
  const [disabled, setDisabled] = useState({
    dirType: false,
    province: false,
    zone: false,
    street: false,
    house: false,
    phone: false,
    dirDetails: false,
  });

  const dispatch = useDispatch();

  const router = useRouter();

  const { userInfo } = useUserInfo(userEmail);

  useEffect(() => {
    if (usuario) {
      setUserEmail(usuario.email);
      setCurrentUserInfo({
        ...currentUserInfo,
        name: usuario.displayName,
        email: usuario.email,
      });
    }
  }, [usuario]);

  // verificar si hay un usuario loggeado y
  // traer su informacion para agregar al estado currentUserInfo
  useEffect(() => {
    if (usuario) {
      if (Object.keys(userInfo).length > 0) {
        setCurrentUserInfo({
          ...userInfo,
        });
        setDisabled({
          dirType: true,
          province: true,
          zone: true,
          street: true,
          house: true,
          phone: true,
          dirDetails: true,
        });
      }
    }
  }, [userInfo]);

  // Función que guarda datos en estado userCurrentInfo
  // conforme el usuario va llenando el formulario
  const handleChange = (e) => {
    setCurrentUserInfo({
      ...currentUserInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    const optionPrice = e.target.options[e.target.selectedIndex].dataset.precio;
    setCurrentUserInfo({
      ...currentUserInfo,
      [e.target.name]: e.target.value,
      deliveryPrice: optionPrice,
    });
  };

  const handleCheck = (e) => {
    setCurrentUserInfo({
      ...currentUserInfo,
      [e.target.id]: e.target.checked,
    });
    if (!e.target.checked) {
      setCurrentUserInfo({
        ...currentUserInfo,
        [e.target.id]: false,
      });
      setDisabled({
        dirType: false,
        province: false,
        zone: false,
        street: false,
        house: false,
        phone: false,
        dirDetails: false,
      });
    }
  };

  const forgetUserInfo = () => {
    firebase.db
      .collection("usersInfo")
      .doc(userInfo.id)
      .delete()
      .then(() => router.reload())
      .catch((error) => {
        console.log("Error obteniendo el documento", error);
      });
  };

  useEffect(() => {
    dispatch(addUserSuccess(currentUserInfo));
  }, [currentUserInfo]);

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Billing Details</h4>
        {Object.keys(userInfo).length > 0 &&
          (currentUserInfo.saveInfo ? (
            <span className="btn" onClick={() => forgetUserInfo()}>
              Olvidar datos de Entrega
            </span>
          ) : (
            <span className="btn" onClick={() => router.reload()}>
              Usar datos predeterminados
            </span>
          ))}
        {usuario && (
          <div className="custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="saveInfo"
              checked={currentUserInfo.saveInfo}
              onChange={handleCheck}
            />
            <label className="custom-control-label" htmlFor="saveInfo">
              {Object.keys(userInfo).length > 0
                ? !currentUserInfo.saveInfo
                  ? "Recordar datos de entrega"
                  : "Usar otros datos de entrega"
                : "Recordar datos de entrega"}
            </label>
          </div>
        )}
      </div>
      <div className="row">
        <div className="form-group col-xl-6">
          <label>
            Nombre <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder={usuario ? usuario.displayName : "First Name"}
            name="name"
            className="form-control"
            onChange={handleChange}
            required
            disabled={usuario ? true : false}
          />
        </div>
        <div className="form-group col-xl-6">
          <label>
            Tipo de dirección <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            name="dirType"
            onChange={handleChange}
            disabled={disabled.dirType ? true : false}
          >
            {userInfo.dirType && (
              <option defaultValue={userInfo.dirType} selected>
                {capitalize(userInfo.dirType)}
              </option>
            )}
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="otroLugar">Otro Lugar</option>
          </select>
        </div>
        <div className="form-group col-xl-6">
          <label>
            Provincia <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            name="province"
            onChange={handleChange}
            disabled={disabled.province ? true : false}
          >
            {userInfo.province && (
              <option defaultValue={userInfo.province} selected>
                {capitalize(userInfo.province)}
              </option>
            )}
            <option defaultValue="colon">Colón</option>
          </select>
        </div>
        <div className="form-group col-xl-6">
          <label>
            Zona <span className="text-danger">*</span>
          </label>
          <select
            className="form-control"
            name="zone"
            onChange={handleSelectChange}
            disabled={disabled.zone ? true : false}
          >
            {userInfo.zone && (
              <option defaultValue={userInfo.zone} selected>
                {deliveryTo[userInfo.zone].name}
              </option>
            )}
            <option value="" hidden>
              Seleccionar
            </option>

            {Object.keys(deliveryTo)
              .sort()
              .map((location, i) => {
                const data = deliveryTo[location];
                return (
                  <option key={i} data-precio={data.precio} value={location}>
                    {data.name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="form-group col-xl-6">
          <label>
            Calle <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder={userInfo.street ? userInfo.street : "Calle b"}
            name="street"
            className="form-control"
            onChange={handleChange}
            disabled={disabled.street ? true : false}
            required
          />
        </div>
        <div className="form-group col-xl-6">
          <label>
            Casa <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder={userInfo.house ? userInfo.house : "Casa 12"}
            name="house"
            className="form-control"
            onChange={handleChange}
            disabled={disabled.house ? true : false}
            required
          />
        </div>
        <div className="form-group col-xl-6">
          <label>
            Telefono <span className="text-danger">*</span>
          </label>
          <input
            type="text"
            placeholder={userInfo.phone ? userInfo.phone : "6123-4567"}
            name="phone"
            className="form-control"
            onChange={handleChange}
            disabled={disabled.phone ? true : false}
            required
          />
        </div>
        <div className="form-group col-xl-6">
          <label>
            Correo Electronico <span className="text-danger">*</span>
          </label>
          <input
            type="email"
            placeholder={usuario ? usuario.email : "ejemplo@correo.com"}
            name="email"
            className="form-control"
            onChange={handleChange}
            required
            disabled={usuario ? true : false}
          />
        </div>
        <div className="form-group col-xl-12 mb-0">
          <label>Detalles de referencia</label>
          <textarea
            name="dirDetails"
            rows="5"
            className="form-control"
            onChange={handleChange}
            placeholder={
              userInfo.dirDetails
                ? userInfo.dirDetails
                : "Más detalles de la dirección (Opcional)"
            }
            disabled={disabled.dirDetails ? true : false}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default CheckoutBuyerInfo;
