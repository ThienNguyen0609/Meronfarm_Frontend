const AddressForm = (props) => {
  return (
    <>
      <div className="row align-items-center">
        <label htmlFor="address" className="col-3">
          Địa chỉ
        </label>
        <div className="meron-form-controll col-9">
          <input
            placeholder="Ví dụ: 49 Trần Thị Nghỉ"
            className="meron-form-input"
            type="text"
            name="address"
            id="address"
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default AddressForm;
