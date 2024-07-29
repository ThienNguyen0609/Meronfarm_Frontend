import "./Option.scss";

import { useState, useEffect } from "react";
import { getDistricts } from "../../../../../services/VNAPI";
import FormModal from "../FormModal/FormModal";
import _ from "lodash";

const DistrictForm = (props) => {
  const [showOption, setShowOption] = useState(false);
  const [districts, setDistricts] = useState([]);

  const handleAction = (districtId, districtName) => {
    props.setValue(districtName)
    props.setDistrictId(districtId)
    setShowOption(!showOption)
  }

  useEffect(() => {
    const handleGetDistricts = async (provinceId) => {
      const response = await getDistricts(provinceId);
      setDistricts(response);
    };
    if (props.provinceId !== 0) {
      handleGetDistricts(props.provinceId);
    }
  }, [props.provinceId]);
  return (
    <>
      <FormModal
        setShowOption={setShowOption}
        showOption={showOption}
        value={props.value}
        setValue={props.setValue}
        labelTitle="Quận huyện"
        placeHolder="Ví dụ: Quận Tân Bình"
        idFor="district"
      >
        {showOption && districts && !_.isEmpty(districts) && (
          <div className="form-group-option">
            {districts.map((district) => {
              return (
                <div
                  key={district.district_id}
                  className="meron-form-option"
                  onClick={() => handleAction(district.district_id, district.district_name)}
                >
                  {district.district_name}
                </div>
              );
            })}
          </div>
        )}
      </FormModal>
    </>
  );
};

export default DistrictForm;
