import "./Option.scss";

import { useState, useEffect } from "react";
import { getWards } from "../../../../../services/VNAPI";
import FormModal from "../FormModal/FormModal";
import _ from "lodash";

const WardForm = (props) => {
  const [showOption, setShowOption] = useState(false);
  const [wards, setWards] = useState([]);

  const handleAction = (wardName) => {
    props.setValue(wardName)
    setShowOption(!showOption)
  }

  useEffect(() => {
    const handleGetDistricts = async (districtId) => {
      const response = await getWards(districtId);
      setWards(response);
    };
    if (props.districtId !== 0) {
      handleGetDistricts(props.districtId);
    }
  }, [props.districtId]);
  return (
    <>
      <FormModal
        setShowOption={setShowOption}
        showOption={showOption}
        value={props.value}
        setValue={props.setValue}
        labelTitle="Xã phường"
        placeHolder="Ví dụ: Phường Tân Quý"
        idFor="ward"
      >
        {showOption && wards && !_.isEmpty(wards) && (
          <div className="form-group-option">
            {wards.map((ward) => {
              return (
                <div key={ward.ward_id} className="meron-form-option" onClick={() => handleAction(ward.ward_name)}>
                  {ward.ward_name}
                </div>
              );
            })}
          </div>
        )}
      </FormModal>
    </>
  );
};

export default WardForm;
