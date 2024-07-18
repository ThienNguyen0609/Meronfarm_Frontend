const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validatePhone = (phone) => {
    return String(phone)
        .match(
            /^[0-9]{3}[0-9]{3}[0-9]{4}$/
        );
}

const checkValidateLogin = (eopn, pw, setVEOPn, setVPw) => {
    if (eopn.length === 0) {
        setVEOPn("Vui lòng nhập Email hoặc SĐT")
        return 0;
    }
    else if (!validatePhone(eopn) && !validateEmail(eopn)) {
        setVEOPn("Email hoặc SĐT không hợp lệ")
        return 0;
    }
    else if(pw.length === 0) {
        setVPw("Vui lòng nhập Mật khẩu")
        setVEOPn("")
        return 0;
    }
    else if(pw.length < 8) {
        setVPw("Mật khẩu dài hơn 8 ký tự")
        setVEOPn("")
        return 0;
    }
    setVPw("")
    setVEOPn("")
    return 1;
}

const checkValidateRegister = (name, un, pw, cpw, setVN, setVUn, setVPw, setVCPw) => {
    if(name.length === 0) {
        setVN("Vui lòng nhập Họ và tên")
        return 0;
    }
    else if(un.length === 0) {
        setVUn("Vui lòng nhập Username")
        setVN("")
        return 0;
    }
    else if(pw.length === 0) {
        setVPw("Vui lòng nhập Mật khẩu")
        setVUn("")
        return 0;
    }
    else if(pw.length < 8) {
        setVPw("Mật khẩu dài hơn 8 ký tự")
        return 0;
    }
    else if(cpw !== pw) {
        setVCPw("Mật khẩu không khớp, vui long nhập lại")
        setVPw("")
        return 0;
    }
    return 1;
}

const handleProceed = (em, pn, setValPhone, setValEmail) => {
    if (pn.length === 0) {
        setValPhone("Vui lòng nhập SĐT")
        return 0;
    }
    else if (!validatePhone(pn)) {
        setValPhone("SĐT không hợp lệ");
        return 0;
    }
    else if (em.length === 0) {
        setValEmail("Vui lòng nhập Email")
        setValPhone("")
        return 0;
    }
    else if (!validateEmail(em)) {
        setValEmail("Email không hợp lệ")
        setValPhone("")
        return 0;
    }
    return 1;
}
export {
    validateEmail,
    validatePhone,
    handleProceed,
    checkValidateRegister,
    checkValidateLogin
}