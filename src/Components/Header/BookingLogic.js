const bodensdorf = {
    cleaningFee: 40,
    currency: "EUR",
    // minimumDaysDiscount: 6,
    // daysDiscount: 5, // %
    preSeasonPrice: 45,
    mainSeasonPrice: 63,
    afterSeasonPrice: 50,
    offSeasonPrice: 40,
    preSeasonRange: [3, 6],
    mainSeasonRange: [7, 8],
    aftSeasonRange: [9, 10],
    offSeasonRange: [11, 2],
    extraPerson: false,
    extraPersonMultiplier: 1.25,
    // repeatCustomerDiscount: 10 // %
}

function calculateTotalCost(arrayOfDates) {
    const b = bodensdorf;    
    let startOff = b.offSeasonRange[0]
    let endOff = b.offSeasonRange[1]
    let startMain = b.mainSeasonRange[0]
    let endMain = b.mainSeasonRange[1]
    let startPre = b.preSeasonRange[0]
    let endPre = b.preSeasonRange[1]
    let startAft = b.aftSeasonRange[0]
    let endAft = b.aftSeasonRange[1]


    const offSeason = (date) => {
        if (b.offSeasonRange[0] < b.offSeasonRange[1]) {
            if (getMonth(date) >= startOff && getMonth(date) <= endOff) {
                let totalBookingCost = b.offSeasonPrice * arrayOfDates.length + b.cleaningFee
            }            
        } else if (b.offSeasonRange[0] > b.offSeasonRange[1]) {
            if (getMonth(date) >= startOff && getMonth(date) <= 12 || getMonth(date) >= 1 && getMonth(date) <= endOff) {
                let totalBookingCost = b.offSeasonPrice * arrayOfDates.length + b.cleaningFee
            } 
        }
    }

    const preSeason = (date) => {
        if (b.preSeasonRange[0] < b.preSeasonRange[1]) {
            if (getMonth(date) >= startPre && getMonth(date) <= endPre) {
                let totalBookingCost = b.preSeasonPrice * arrayOfDates.length + b.cleaningFee
            }            
        } else if (b.preSeasonRange[0] > b.preSeasonRange[1]) {
            if (getMonth(date) >= startPre && getMonth(date) <= 12 || getMonth(date) >= 1 && getMonth(date) <= endPre) {
                let totalBookingCost = b.preSeasonPrice * arrayOfDates.length + b.cleaningFee
            } 
        }
    }

    const mainSeason = (date) => {
        if (b.mainSeasonRange[0] < b.mainSeasonRange[1]) {
            if (getMonth(date) >= startMain && getMonth(date) <= endMain) {
                let totalBookingCost = b.mainSeasonPrice * arrayOfDates.length + b.cleaningFee
            }            
        } else if (b.mainSeasonRange[0] > b.mainSeasonRange[1]) {
            if (getMonth(date) >= startMain && getMonth(date) <= 12 || getMonth(date) >= 1 && getMonth(date) <= endMain) {
                let totalBookingCost = b.mainSeasonPrice * arrayOfDates.length + b.cleaningFee
            } 
        }
    }

    const aftSeason = (date) => {
        if (b.aftSeasonRange[0] < b.aftSeasonRange[1]) {
            if (getMonth(date) >= startAft && getMonth(date) <= endAft) {
                let totalBookingCost = b.aftSeasonPrice * arrayOfDates.length + b.cleaningFee
            }            
        } else if (b.aftSeasonRange[0] > b.aftSeasonRange[1]) {
            if (getMonth(date) >= startAft && getMonth(date) <= 12 || getMonth(date) >= 1 && getMonth(date) <= endAft) {
                let totalBookingCost = b.aftSeasonPrice * arrayOfDates.length + b.cleaningFee
            } 
        }
    }

    // initial individiual daily calculation
    arrayOfDates.forEach(date => {        
        offSeason(date)
        preSeason(date)
        mainSeason(date)
        aftSeason(date)
    })
    
    // cleaningFee
}