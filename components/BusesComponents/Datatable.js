import React from 'react'

import IconButton from '@material-ui/core/IconButton';

import { Tooltip } from '@material-ui/core';
import NumberFormat from 'react-number-format';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Datatable = ({ data, imgtoggler, setimgtoggler, dataid }) => {
    const { locale } = useRouter()

    return (
        <tr className="tablesor" id={data.fields.bus}>
            <td className="text-center py-3 pt-lg-5 pb-lg-4 keprow">
                <img alt={`${data.fields.bus} busz`} onClick={() => { setimgtoggler({ toggler: !imgtoggler.toggler, slide: dataid - 1 }) }}
                    className="img img-rounded img-thumbnail z-depth-1 thumbnailkep"
                    style={{ cursor: "pointer" }} src={`https://${data.fields.pictures[0].fields.file.url}?&fm=webp&q=80`} />
            </td>
            <td className="text-lg-left middletd py-lg-5">
                <h6 className="font-weight-bold">
                    {data.fields.bus}
                </h6>
                <p className="mb-1 mt-2">
                    {data.fields.title}
                </p>
                <p className="" style={{ maxWidth: "100%" }}>
                    {data.fields.desc}
                </p>
                <hr className="mb-2 mt-2 mb-lg-3 mt-lg-3 d-none d-lg-block" />
                <div className="d-flex mx-3 justify-content-center">

                    <Link href={`/bus/${data.fields.id.replaceAll(/\s+/g, "-")}`}>
                        <Tooltip title={locale === "en" ? ("More") : ("Bővebben")}>
                            <IconButton id="morebtn">
                                <ControlPointIcon />
                            </IconButton>
                        </Tooltip>
                    </Link>

                    {/*                     <MDBBtn color="warning" size="sm" className="roundedbtn black-text mt-3 muzeumbtn"
                        onClick={() => { history.push(`/bus/${data.fields.id.replaceAll(/\s+/g, "-")}`) }}>
                        {locale === "en" ? ("More »") : ("Bővebben »")}
                    </MDBBtn>
 */}
                    {/* <Tooltip title={locale === "en" ? ("Pictures") : ("Képek")}>
                        <IconButton onClick={() => {
                            let newarr = [...toggler];
                            newarr[dataid - 1].pict = !newarr[dataid - 1].pict;
                            settoggler(newarr)
                            ReactGA.modalview(`/images/${data.fields.bus.replaceAll(/\s+/g, "-")}`)
                        }} aria-label="pictures">
                            <PhotoLibraryIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={locale === "en" ? ("Seat positions") : ("Ülésrend")}>
                        <IconButton aria-label="seats" onClick={() => window.open(`https:${data.fields.seats.fields.file.url}`, "_blank")}>
                            <AirlineSeatReclineNormalIcon />
                        </IconButton>
                    </Tooltip> */}

                </div>
            </td>
            <td className="dijaktext">
                <p className='m-0 pt-lg-5 mt-lg-3'>
                    <NumberFormat suffix=" Ft / km" prefix={locale === "en" ? ("Km charge: ") : ("Km díj: ")} value={data.fields.kmdij} displayType="text" />
                </p>
                <p className='mb-2'>
                    <NumberFormat suffix={locale === "en" ? (" Ft / hour") : (" Ft / óra")} prefix={locale === "en" ? ("Hourly rate: ") : ("Óradíj: ")}
                        thousandSeparator=" " value={data.fields.oradij} displayType="text" />
                </p>
            </td>
        </tr >
    )
}

export default Datatable
