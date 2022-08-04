import { useContext } from "react";
//Services
import AppContext from "../../services/AppContext";
//Style
import style from "./index.module.sass";

export default function AppLoader() {
  let context = useContext(AppContext);
  return (
    context &&
    context.appContext &&
    context.appContext.loader && (
      <div
        style={{ top: window.pageYOffset }}
        className={`${style.app_loader_container} position-absolute h-100 w-100 d-flex justify-content-center align-items-center`}
      >
        <div className={`${style.loader} spinner-border`} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  );
}
