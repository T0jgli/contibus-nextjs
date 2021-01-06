import { MDBCard, MDBCardBody, MDBCol } from 'mdbreact'
import { getEquipmentList } from '../../lib/getEquipmentList'
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const EquipmentList = ({ desc }) => {
    return (
        <MDBCol>
            <div className="text-center mt-5 pt-3">
                <h4>Felszereltsége</h4>
                <div className="equipment__div">
                    {getEquipmentList(desc).map((e, i, array) => {
                        console.log((array.length / 2).toFixed() == (i + 1))
                        return (
                            <>
                                <MDBCard className="m-lg-4 m-3">
                                    <MDBCardBody>
                                        <AirportShuttleIcon className="pb-1" style={{ opacity: "0.8" }} />
                                        <br />
                                        <p className="">{e}</p>
                                    </MDBCardBody>
                                </MDBCard>
                                {(array.length / 2).toFixed() == (i + 1) && (
                                    <div className="break" />
                                )}
                            </>
                        )
                    })}
                </div>
            </div>
        </MDBCol>

    )
}

export default EquipmentList
