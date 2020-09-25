import React, {useState, useContext, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './BookingCalendar.css';
import { BookingsContext } from "../../Context/BookingsContext";
// import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import { getDefaultLocale } from  "react-datepicker";

const BookingCalendar3 = () => {
    const { list } = useContext(BookingsContext)
    const [preSeason, setPreSeason] = useState()
    const [mainSeason, setMainSeason] = useState()
    const [aftSeason, setAftSeason] = useState()
    const [offSeason, setOffSeason] = useState()
    const [unavailableDates, setUnavailableDates] = useState()
    const [arriveDepartDates, setArriveDepartDates] = useState()

    const [startDate, setStartDate] = useState(new Date());
    
    const preSeasonArray = []
    const mainSeasonArray = []
    const aftSeasonArray = []
    const offSeasonArray = []
    
    const determinePreSeason = () => {
        //2020d
        for (let i = 1583020800000; i < 1593561600000; i = i + 86400000) {
            preSeasonArray.push(new Date(i))
        }
        //2021
        for (let i = 1614556800000; i < 1625097600000; i = i + 86400000) {
            preSeasonArray.push(new Date(i))
        }
        //2022
        for (let i = (1646092800000); i < 1656633600000; i = i + 86400000) {
            preSeasonArray.push(new Date(i))
        }
        //2023
        for (let i = 1677628800000; i < 1688169600000; i = i + 86400000) {
            preSeasonArray.push(new Date(i))
        }
        //2024
        for (let i = 1709251200000; i < 1719792000000; i = i + 86400000) {
            preSeasonArray.push(new Date(i))
        }
        //2025
        for (let i = 1740787200000; i < 1751328000000; i = i + 86400000) {
            preSeasonArray.push(new Date(i))
        }        
        setPreSeason(preSeasonArray)        
    }

    const determineMainSeason = () => {
        //2020d
        for (let i = 1593561600000; i < 1598918400000; i = i + 86400000) {
            mainSeasonArray.push(new Date(i))
        }
        //2021
        for (let i = 1625097600000; i < 1630454400000; i = i + 86400000) {
            mainSeasonArray.push(new Date(i))
        }
        //2022
        for (let i = 1656633600000; i < 1661990400000; i = i + 86400000) {
            mainSeasonArray.push(new Date(i))
        }
        //2023
        for (let i = 1688169600000; i < 1693526400000; i = i + 86400000) {
            mainSeasonArray.push(new Date(i))
        }
        //2024
        for (let i = 1719792000000; i < 1725148800000; i = i + 86400000) {
            mainSeasonArray.push(new Date(i))
        }
        //2025
        for (let i = 1751328000000; i < 1756684800000; i = i + 86400000) {
            mainSeasonArray.push(new Date(i))
        }        
        setMainSeason(mainSeasonArray)      
    }

    const determineAftSeason = () => {
        //2020
        for (let i = 1598918400000; i < 1604188800000; i = i + 86400000) {
            aftSeasonArray.push(new Date(i))
        }
        //2021
        for (let i = 1630454400000; i < 1635724800000; i = i + 86400000) {
            aftSeasonArray.push(new Date(i))
        }
        //2022
        for (let i = 1661990400000; i < 1667260800000; i = i + 86400000) {
            aftSeasonArray.push(new Date(i))
        }
        //2023
        for (let i = 1693526400000; i < 1698796800000; i = i + 86400000) {
            aftSeasonArray.push(new Date(i))
        }
        //2024
        for (let i = 1725148800000; i < 1730419200000; i = i + 86400000) {
            aftSeasonArray.push(new Date(i))
        }
        //2025
        for (let i = 1756684800000; i < 1761955200000; i = i + 86400000) {
            aftSeasonArray.push(new Date(i))
        }        
        setAftSeason(aftSeasonArray)      
    }

    const determineOffSeason = () => {
        //2020
        for (let i = 1604188800000; i < 1614556800000; i = i + 86400000) {
            offSeasonArray.push(new Date(i))
        }
        //2021
        for (let i = 1635724800000; i < 1646092800000; i = i + 86400000) {
            offSeasonArray.push(new Date(i))
        }
        //2022
        for (let i = 1667260800000; i < 1677628800000; i = i + 86400000) {
            offSeasonArray.push(new Date(i))
        }
        //2023
        for (let i = 1698796800000; i < 1709251200000; i = i + 86400000) {
            offSeasonArray.push(new Date(i))
        }
        //2024
        for (let i = 1730419200000; i < 1740787200000; i = i + 86400000) {
            offSeasonArray.push(new Date(i))
        }
        //2025
        for (let i = 1761955200000; i < 1772323200000; i = i + 86400000) {
            offSeasonArray.push(new Date(i))
        }        
        setOffSeason(offSeasonArray)      
    }
    
    useEffect(() => {
        determinePreSeason()
        determineMainSeason()
        determineAftSeason()
        determineOffSeason()
    }, [])

    const unavailableArray = []
    const arriveDepartArray = []

    const checkAvailability = () => {        
        list.forEach(element => {            
            for(let i = element.arriveEpoch+ 86400000; i < element.departEpoch; i = i + 86400000) {
                unavailableArray.push(new Date(i));
                // console.log("hey")    
            }
            setUnavailableDates(unavailableArray)
           
            arriveDepartArray.push(element.arriveEpoch);
            arriveDepartArray.push(element.departEpoch);
               
            setArriveDepartDates(arriveDepartArray)
        });
    }
    
    useEffect(() => {
        checkAvailability()
    }, [list])
    
    const highlightWithRanges = [        
        {
            "react-datepicker__day--highlighted-custom-pre": preSeason ? preSeason : [
                new Date(1583020800000)
            ]
        },
        {
            "react-datepicker__day--highlighted-custom-main": mainSeason ? mainSeason : [
                new Date(1593561600000)
            ]
        },
        {
            "react-datepicker__day--highlighted-custom-aft": aftSeason ? aftSeason : [
                new Date(1598918400000)                
            ]
        },
        {
            "react-datepicker__day--highlighted-custom-off": offSeason ? offSeason : [
                new Date(1604188800000)   
            ]
        },
        {
            "react-datepicker__day--highlighted-custom-unavailable": unavailableDates ? unavailableDates : [
              addDays(new Date(), 2)
            ]
        },
        {
            "react-datepicker__day--highlighted-custom-arrivedepart": arriveDepartDates ? arriveDepartDates : [
              addDays(new Date(), 1)
            ]
        }
    ];


    return (
    <>        
        <DatePicker
            locale= {getDefaultLocale()}
            selected={startDate}
            onChange={date => setStartDate(date)}
            // excludeDates={excludeArray}
            highlightDates={highlightWithRanges}        
            inline
            className="bigCalendar"
        />
    </>
    );
}

export default BookingCalendar3
