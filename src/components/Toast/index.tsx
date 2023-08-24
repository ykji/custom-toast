import "./index.css";
import { IoIosFlash } from "react-icons/io";
import { Action } from "../../interface/toast";

export interface ToastProps {
  color: string;
  title: string;
  details: string;
  actions: Action[];
}

const Toast = (props: ToastProps) => {
  const { title, details, actions, color } = props;

  return (
    <div className="toast" style={{ backgroundColor: `${color}` }}>
      <IoIosFlash size={22} />
      <div className="toast-content">
        <h4>{title}</h4>
        <p className="toast-details">{details}</p>
        <div className="toast-actions">
          {actions.map(({ name, id, onClick }) => (
            <button className="toast-action" key={id} onClick={onClick}>
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toast;
