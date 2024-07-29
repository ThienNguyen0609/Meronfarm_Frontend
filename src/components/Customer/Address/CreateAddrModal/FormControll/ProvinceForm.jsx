import "./Option.scss";

import { useState, useEffect } from "react";
import { getProvinces } from "../../../../../services/VNAPI";
import FormModal from "../FormModal/FormModal";
import _ from "lodash";

const ProvinceForm = (props) => {
  const [showOption, setShowOption] = useState(false);
  const [provinces, setProvinces] = useState([]);

  const handleAction = (provinceId, provinceName) => {
    props.setValue(provinceName)
    props.setProvinceId(provinceId)
    setShowOption(!showOption)
  }

  useEffect(() => {
    const handleGetProvinces = async () => {
      const response = await getProvinces();
      setProvinces(response);
    };

    handleGetProvinces();
  }, []);
  return (
    <>
      <FormModal
        setShowOption={setShowOption}
        showOption={showOption}
        value={props.value}
        setValue={props.setValue}
        labelTitle="Tỉnh thành"
        placeHolder="Ví dụ: TP Hồ Chí Minh"
        idFor="province"
      >
        {showOption && provinces && !_.isEmpty(provinces) && (
          <div className="form-group-option">
            {provinces.map((province) => {
              return (
                <div
                  key={province.province_id}
                  className="meron-form-option"
                  onClick={() => handleAction(province.province_id, province.province_name)}
                >
                  {province.province_name}
                </div>
              );
            })}
          </div>
        )}
      </FormModal>
    </>
  );
};

export default ProvinceForm;
