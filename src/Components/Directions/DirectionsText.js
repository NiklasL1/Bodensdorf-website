import React from 'react'
import { useTranslation } from "react-i18next";
import './Grid4.css'

const TableOutside = () => {
    const { t } = useTranslation();	   

    return (
        <div>
            <h5 className="boldIt">{t("dT1")}</h5>
            <p>{t("d1")}</p>
            <h5 className="boldIt">{t("dT2")}</h5>
            <p>{t("d2")}</p>
            <h5 className="boldIt">{t("dT3")}</h5>
            <p>{t("d3")}</p>
        </div>
    )
}

export default TableOutside
