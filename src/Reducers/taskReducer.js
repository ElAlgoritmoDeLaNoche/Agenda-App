import { toast } from "react-toastify";

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      toast.success("Contacto nuevo agregado");
      return state;
    }
    case "ADD_TASK_ERR": {
      toast.error("Ah ocurrido un error");
      return state;
    }
    case "REMOVE_TASK": {
      toast.warn("Has eliminado un contacto...");
      return state;
    }
    case "REMOVE_TASK_ERR": {
      toast.error("Oh a ocurrido un error al eliminar un contacto....");
      return state;
    }
    case "TOGGLE_CHECKED": {
      toast.info("Se agrego a favoritos tu contacto...");
      return state;
    }
    case "TOGGLE_CHECKED_ERR": {
      toast.error("No se ha podido agregar a favoritos tu contacto, intentalo de nuevo...");
      return state;
    }
    default:
      return state;
  }
};

export default taskReducer;
