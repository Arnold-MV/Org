import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
  //Estado - hooks
  //useState
  //const [nombreVariable, fncionActualizar] = useState(valorInicial)

  //   const [mostrar, actualizarMostrar] = useState(true);
  //   const manejarClick = () => {
  //     actualizarMostrar(!mostrar);
  //   };

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.combiarMostrar} />
    </section>
  );
};

export default MiOrg;
