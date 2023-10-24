import IconButton from "@mui/material/IconButton";

import { Tooltip } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Link from "next/link";
import { useRouter } from "next/router";

const Datatable = ({ data, imgtoggler, setimgtoggler, dataid }) => {
    const { locale } = useRouter();

    return (
        <tr className="tablesor" id={data.fields.bus}>
            <td className="text-center py-3 pt-lg-5 pb-lg-4 keprow">
                <img
                    alt={`${data.fields.bus} busz`}
                    onClick={() => {
                        setimgtoggler({ toggler: !imgtoggler.toggler, slide: dataid - 1 });
                    }}
                    className="img img-rounded img-thumbnail z-depth-1 thumbnailkep"
                    style={{ cursor: "pointer" }}
                    src={`https://${data.fields.pictures[0].fields.file.url}?&fm=webp&q=80`}
                />
            </td>
            <td className="text-lg-left middletd py-lg-5">
                <h6 className="font-weight-bold">{data.fields.bus}</h6>
                <p className="mb-1 mt-2">{locale === "en" ? data.fields.enTitle : data.fields.title}</p>
                <p className="" style={{ maxWidth: "100%" }}>
                    {data.fields.desc}
                </p>
                <hr className="mb-2 mt-2 mb-lg-3 mt-lg-3 d-none d-lg-block" />
                <div className="d-flex mx-3 justify-content-center">
                    <Link href={`/bus/${data.fields.id.replaceAll(/\s+/g, "-")}`} legacyBehavior>
                        <Tooltip title={locale === "en" ? "More" : "Bővebben"}>
                            <IconButton className="morebtn">
                                <ControlPointIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>
                </div>
            </td>
            <td className="dijaktext">
                <p className="m-0 pt-lg-5 mt-lg-3">
                    {`${locale === "en" ? "Km charge:" : "Km díj:"} ${data.fields.kmdij.toLocaleString()} ${"Ft / km"}`}
                </p>
                <p className="mb-2">
                    {`${locale === "en" ? "Hourly rate:" : "Óradíj:"} ${data.fields.oradij.toLocaleString()} ${
                        locale === "en" ? "Ft / hour" : "Ft / óra"
                    }`}
                </p>
            </td>
        </tr>
    );
};

export default Datatable;
