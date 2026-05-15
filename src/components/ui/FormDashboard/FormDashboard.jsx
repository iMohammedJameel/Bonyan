import { useOutletContext } from "react-router-dom";

function FormDashboard({ title, fields }) {
  const { setIsDirty } = useOutletContext();

  return (
    <div className="container">
      {title && <h4 className="mb-3">{title}</h4>}
      <form>
        {fields.map((field, i) => (
          <div className="mb-3" key={i}>
            <label htmlFor={field.id} className="form-label">{field.label}</label>
            <input
              type={field.type}
              className="form-control"
              id={field.id}
              placeholder={field.placeholder || ""}
              onChange={(e) => setIsDirty(e.target.value.trim() !== "")}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormDashboard;
