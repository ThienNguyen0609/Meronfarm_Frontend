import OrderManageDisplay from "./OMDisplay/OMDisplay"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"

const OrderManage = () => {
    const [searchParams] = useSearchParams();
    const [value, setValue] = useState("")
    const [searchString, setSearchString] = useState("");

    const page = searchParams.get("Page");
    return (
        <>
        <div className="manage__wrapper">
            <div className="manage__inner">
                <div className="manage__search">
                    <div className="manage__search-input">
                        <input 
                            className="search-controll" type="text" 
                            name="order" id="order" 
                            placeholder="search order" 
                            value={value} onChange={(e) => setValue(e.target.value)}
                        />
                        <div className="search-icon" onClick={() => setSearchString(value)}>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                    </div>
                </div>
                <OrderManageDisplay 
                    page={page === null ? 1 : page} 
                    searchString={value.length > 0 ? value : 0}
                />
            </div>
        </div>
        </>
    )
}

export default OrderManage