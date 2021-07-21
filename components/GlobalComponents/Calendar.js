/* import { MDBModal, MDBCard, MDBModalHeader, MDBBtn, MDBModalBody, MDBCardFooter, MDBCardBody } from "mdbreact";

import FullCalendar from "@fullcalendar/react";
import listplugin from "@fullcalendar/list";
import huLocale from "@fullcalendar/core/locales/hu";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";

import ReactGA from "react-ga";
import { useRouter } from "next/router";

const Calendar = ({ setcalendaropen, calendaropen }) => {
    const { locale } = useRouter();

    return (
        <MDBModal
            fade
            isOpen={calendaropen}
            toggle={() => {
                setcalendaropen(!calendaropen);
                ReactGA.pageview(window.location.pathname);
            }}
            size="lg"
            className="rounded"
        >
            <MDBModalHeader
                className="rounded calendar"
                titleClass="heading lead font-weight-bolder"
                toggle={() => {
                    setcalendaropen(!calendaropen);
                    ReactGA.pageview(window.location.pathname);
                }}
            >
                {locale === "en" ? "Calendar" : "Naptár"}
            </MDBModalHeader>
            <MDBModalBody className="p-0">
                <div className="p-0 container">
                    <div className="p-0 row">
                        <div className="col">
                            <MDBCard>
                                <MDBCardBody className="px-4">
                                    <FullCalendar
                                        plugins={[dayGridPlugin, listplugin, googleCalendarPlugin]}
                                        headerToolbar={{
                                            left: "prev,next today",
                                            center: "title",
                                            right: "dayGridMonth,listMonth",
                                        }}
                                        selectable={true}
                                        dayMaxEvents={true}
                                        contentHeight="auto"
                                        eventClick={(arg) => {
                                            arg.jsEvent.preventDefault();
                                            window.open(arg.event.url, "_blank", "width=700,height=600");
                                        }}
                                        initialView="listMonth"
                                        googleCalendarApiKey={process.env.NEXT_PUBLIC_GOOGLE_CALENDARKEY}
                                        locale={locale === "en" ? null : huLocale}
                                        eventSources={[
                                            {
                                                googleCalendarId: process.env.NEXT_PUBLIC_GOOGLE_CALENDARID_CONTIBUS,
                                                className: "contibus-calendar",
                                                color: "#fb3",
                                                textColor: "black",
                                                displayEventTime: true,
                                            },
                                            {
                                                googleCalendarId: process.env.NEXT_PUBLIC_GOOGLE_CALENDARID_UNNEPNAPOK,
                                                className: "Ünnapnapok",
                                                color: "#ff4545",
                                                displayEventTime: false,
                                            },
                                        ]}
                                    />
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </div>
                </div>
            </MDBModalBody>
            <MDBCard className="rounded">
                <MDBCardFooter>
                    <MDBBtn
                        color="dark"
                        outline
                        className="float-right roundedbtn"
                        onClick={() => {
                            setcalendaropen(!calendaropen);
                            ReactGA.pageview(window.location.pathname);
                        }}
                    >
                        {locale === "en" ? "Close" : "Bezárás"}
                    </MDBBtn>
                </MDBCardFooter>
            </MDBCard>
        </MDBModal>
    );
};

export default Calendar;
 */
