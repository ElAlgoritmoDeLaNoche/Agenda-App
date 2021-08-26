import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({ tasks }) => {
  return (
    <>
      <table
        className="table table-dark container"
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="text-info">
            <th scope="col">Nombre y numero</th>
            <th scope="col">Añadido el día</th>
            <th scope="col">Favoritos</th>
            <th scope="col">Eliminar contacto</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.map((task) => <Task task={task} key={task.id} className="montserrat"/>)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const tasks = state.firestore.ordered.contact;
  return {
    tasks: tasks,
    uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "contact",
      where: ["authorId", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
  ])
)(Tasks);
