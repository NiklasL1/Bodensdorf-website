import React from 'react'
import Table from 'react-bootstrap/Table'
import { useTranslation } from "react-i18next";

const TableOutside = () => {
    const { t } = useTranslation();	

    return (
        <Table>                            
            <tbody>
                <tr>
                <td colSpan="6" className="boldIt">{t("oT1")}</td>
                <td colSpan="6">{t("o1")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o2")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o3")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o4")}</td>                                
                </tr>
                <tr>
                <td colSpan="6" className="boldIt">{t("oT2")}</td>
                <td colSpan="6">{t("o5")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o6")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o7")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o8")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o9")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o10")}</td>                                
                </tr>
                <tr>
                <td colSpan="6" className="boldIt">{t("oT3")}</td>
                <td colSpan="6">{t("o11")}</td>                                
                </tr>
                <tr>
                <td colSpan="6"></td>
                <td colSpan="6">{t("o12")}</td>                                
                </tr>
                <tr>
                <td colSpan="6" className="boldIt">{t("oT4")}</td>
                <td colSpan="6">{t("o13")}</td>                                
                </tr>
            </tbody>
        </Table>
    )
}

export default TableOutside
