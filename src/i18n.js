import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from 'i18next-xhr-backend';
import LanguageDetector from "i18next-browser-languagedetector";

// LEGEND
// o = outside
// i = inside
// small letter followed by T or Title = title in that respective section
// mo = modal for description of inside
// small letter followed by But = button in that respective section
// a = area(umgebung)
// d = directions
// b = booking
// bookMo = booking modal
// login / register / user(user profile) are relatively self explanatory
// c = calendar (bottom section with big calendar)

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          ChangeLng: "Seite auf Deutsch",
          TabTitle: "Holiday apartment on Lake Ossiach with private beach - Book now!",
          MetaDescription: "english description",
          book: "Booking calendar",
          house: "The Apartment",
          sea: "On the Lake",
          area: "In the Area",
          oTitle: "Apartment directly on the lake",
          oSubTitle: "Things to do at Lake Ossiach",
          oT1: "At the house:",
          oT2: "A short walk away:",
          oT3: "A short drive:",
          oT4: "Winter sports:",
          o1: "Beach and swimming area",
          o2: "Large tree-lined beach area",
          o3: "Shallow water for children and non-swimmers",
          o4: "Place for boats",
          o5: "Boat rental, waterskiing, paragliding, windsurfing and sailing",
          o6: "Hiking and cycling (bike path around the lake)",
          o7: "Tennis and mini-golf",
          o8: "Stop for the Lake Ossiach ship tour",
          o9: "Ice cream shop, restaurants and bars",
          o10: "Supermarkets - Billa and Spar",
          o11: "Forest climbing at Lake Ossiach",
          o12: "Hot springs at Bad Kleinkirchheim",
          o13: "Skiing on the Gerlitzen, 25 miles of routes, 15 lifts, free Skibus",
          iTitle: "The Apartment",
          iSubTitle: "At home on the lake",
          iT1: "The House",
          iT2: "The Apartment",
          iT3: "Max. Occupancy",
          iT4: "Location",
          iT5: "Meals",
          iT6: "Including",
          iT7: "Not including",
          iMenu: "More Information",
          i1: "Apartment on the second floor (non-smoking)",
          i2: "410 ft²",
          i3: "3 adults",
          i4: "Private beach on the lakeside, Gerlitzer Alps within a short drive",
          i5: "Cook in the fully-equipped kitchen",
          i6: "Bed linen, washcloths, towels, use of parking, central heating",
          i7: "Please bring you own beach towels!",
          moTitle: "Holiday apartment on Lake Ossiach",
          moT1: "Kitchen",
          moT2: "Bath",
          moT3: "Bedroom",
          moT4: "Dining area",
          moT5: "Balcony",
          moT6: "Other",
          mo1: "Coffee machine, electric espresso machine, refrigerator with freezer, 3 stovetops, toaster, microwave with grill, pots and pans, plates and silverware",
          mo2: "Toilet and bathtub with shower",
          mo3: "Sleeping area with 2 single beds, small bedroom with single bed",
          mo4: "Living room with dining area, large, adjustable-height table with seats for 4 persons (couch and chairs)",
          mo5: "Balcony with view of the lake, dining table, seats for 3 persons, laundry rack, artificial grass carpet",
          mo6: "Television, satellite receiver, radio, sun beds and beach umbrella",
          moBut: "Close",
          aTitle: "Things to Do",
          aSubTitle: "Get to know Carinthia",
          aText1: "In the area there are a number of historical and cultural sites. Villach, with its lovely main square and many small streets is around 10 miles to the west. A little further away, around 23 miles to the east, is Klagenfurt, the capital city of Carinthia with an historical old city, an Italian palace and a number of additional cultural sites.",
          aText2: 'Alt-Ossiach is directly opposite on the other side of the lake and can be reached by car, bicycle or ferry. Located here is the beautiful Stiftung Ossiach, site of the "Carinthian Summer", a series of open-air concerts',
          aText3: "Somewhat further away at the southwest end of the lake is the fortress Castle Landskron. The castle area has been inhabited since the 9th century BC. The castle itself, protected by a double curtain wall with seven towers, was a splendid mansion during the Renaissance. The main building had four stories, a high central tower and a number of defensive towers.",
          aText4: "Click ",
          aText5: "here",
          aText6: " to see our personal recommendations on what's good in the area, including eating out, shopping, sightseeing and other activities.",
          dTitle: "Directions",
          dSubTitle: "How to find us",
          dT1: "By car coming from the north (Salzburg, Germany etc.)",
          dT2: "By car coming from the east (Graz, Vienna etc.)",
          dT3: "By train",
          d1: `Leave the autobahn A10 at the exit Villach-Ossiacher See and turn left at the light at the end of the exit ramp. 
          Follow the road (B94) to Bodensdorf. On the left you will see a BILLA market, on the right a petrol station. 
          Turn right immediately after the petrol station onto Fischerweg and follow Fischerweg for 200 metres, cross the 
          railway line and turn right immediately. Continue 400 metres past the tennis courts, turn left just past a small 
          white building (real estate agency). Proceed 100 metres, turn left and pass the first building (brown/orange) into a parking area. 
          Park in the car park. The building on the left with murals on the end wall is St. Urban Weg 5, where the flat is situated. 
          Go through the metal gates, turn left up the steps to the building entrance. Apartment 16 is on the 1st floor on the left.`,
          d1a: `In the event that there is no space free in the parking lot (which can happen during peak season), you can instead
          park on the other side of the building. To do this you will have to exit, turning right and passing the tennis courts once again.
          Then turn right at the next crossing by the railway line and then once again turn right at the next opportunity. At the end of this 
          short street there is another parking lot, essentially right on the other side of the fence from the one next to the two
          apartment buildings. You can simply pass through the fence gate between the parking lots on foot to reach the building.`,
          d2: `Drive to Feldkirchen in Kärten and leave Feldkirchen on the Ossiacher See Straße (B94). Proceed to Bodensdorf and 
          continue until you see a Spar market on the right. Around 300 metres further, turn left immediately before the petrol 
          station onto Fischerweg and follow Fischerweg for 200 metres, cross the railway line and turn right immediately. Continue 
          400 metres past the tennis courts, turn left just past a small white building (real estate agency). Proceed 100 metres, turn 
          left and pass the first building (brown/orange) into a parking area. Park in the car park. The building on the left with murals 
          on the end wall is St. Urban Weg 5, where the flat is situated. Go through the metal gates, turn left up the steps to the 
          building entrance. Apartment 16 is on the 1st floor on the left.`,
          d2a: `In the event that there is no space free in the parking lot (which can happen during peak season), you can instead
          park on the other side of the building. To do this you will have to exit, turning right and passing the tennis courts once again.
          Then turn right at the next crossing by the railway line and then once again turn right at the next opportunity. At the end of this 
          short street there is another parking lot, essentially right on the other side of the fence from the one next to the two
          apartment buildings. You can simply pass through the fence gate between the parking lots on foot to reach the building.`,
          d3: `Get off the train at the stop "Ossiach-Bodensdorf". From the train station it is a 10-minute walk to the apartment. 
          Turn left when you leave the station and cross the train trcks at the first opportunity. Then immediately turn right and 
          follow the walkway next to the tracks until you pass the tennis club (around 500 metres). On your left you will see a small 
          white building (real estate office); turn left directly thereafter. The road leads to a car park between two buildings. 
          The building on the left with murals on the end wall is St. Urban Weg 5, where the flat is situated. Go through the metal gates, 
          turn left up the steps to the building entrance. Apartment 16 is on the 1st floor on the left.`,
          d3a: `If you would rather call a taxi, there are two nearby options. Travel agency Wernitzig (+43 4243 2249) and Christian Nindler (+43 4243 8775).`,
          imprint: "Imprint",
          b1: "BOOK NOW!",
          b2: "Check availability",
          b3: "Arrival:",
          b4: "Departure:",
          b5: "Guests:",
          b6: "Book!",
          bAlert: "Please select an arrival and departure date!",
          bAlert2: "The minimum stay is five nights, please select a longer stay!",
          bAlert3: "There is an existing booking in the selected time frame!",
          bAlert3sub: "View the booking calendar to see available dates.",
          bAlert3goBut: "Booking calendar", 
          bAlert4: "Please log in to make a booking",
          bAlert5: "Your booking has been made. Thank you!",
          bAlert5a: "Your payment was successful. Thank you!",
          bAlert6: "The selected stay is in the past!",
          bAlert7: "Your date of departure cannot be before your date of arrival!",
          bAlert8: "Please provide a valid date of arrival!",
          bAlert9: "Please provide a valid date of departure!",
          bError: `An error has occurred! Please change one of the selected dates and then reselect your desired date!`,
          bookMoTitle: "Your reservation",
          bookMoDateFunc: "EN",
          bookMo1: "Dates ",
          bookMo2: "days",
          bookMo3: "nights",
          bookMo4: "Total price",
          bookMo4a: "(including 50€ cleaning fee)",
          bookMo5: "Payable upon booking",
          bookMo6: "Remainder due on ",
          bookMo6a: "(30 days before arrival date)",
          bookMo7: "Confirm",
          bookMo8: "Cancel",
          bookMo9: "Length of stay",
          bookMoChoice: "Pay entire cost of booking upfront to avoid having to make a seperate payment for the remainder 30 days before the arrival date.",
          bookMo30: "As the date of arrival is within 30 days of the date of booking, the entire payment is due upon booking.",
          loginAlert1: "Incorrect e-mail or password",
          loginAlert2: "Logged in!",
          login1: "Login",
          login2: "Forgot password",
          login3: "Login",
          login4: "Logout",
          login5: "Password",
          loginModal1:"Your selected dates are available!",
          loginModal2:"Please login or register to continue.",
          registerAlert1: "A user with that email already exists",
          registerAlert2: "Registration successful!",
          registerAlert3: "Please enter a first name",
          registerAlert4: "Please enter a last name",
          registerAlert5: "Please enter an e-mail address",
          registerAlert6: "Please enter a telephone number",
          registerAlert7: "Please enter a password",
          registerAlert8: "Please enter a username",
          registerAlert9: "Please confirm your password",
          registerAlert10: "Passwords do not match",
          registerAlert11: "There was an unexpected error, account could not be created",
          registerAlert12: "Please enter a valid e-mail address",
          registerAlert13: "Please enter a telephone number including a country code and without any spaces or special characters",
          register1: "Create account",
          register2: "Register",
          register3: "First name",
          register4: "Last name",
          register5: "Telephone number (including country code)",
          register6: "E-mail address",
          register7: "Password",
          register8: "Confirm password",
          register9: "Submit",
          pass1: "Reset password",
          pass2: "Please enter your account e-mail",
          pass2but: "Submit",
          pass2butWait: "Sending...  ",
          pass2butSent: "Sent!",
          pass3: "Please enter the code that was sent to the e-mail address entered above",
          pass3Error: "The code entered is wrong!",
          pass3but: "Verify code",
          pass3butSucc: "Code verified!",
          pass4: "Please enter your new password and confirm it",
          pass4but: "Change password",
          pass4Error: "The passwords entered do not match!",
          passError: "There was no account found with the given e-mail address",
          passSent: "An e-mail with your password reset code was sent",
          passUpdated: "Your password was changed, returning to main page...",
          user0: "My Account",
          user1: "Account info",
          user2: "First name",
          user3: "Last name",
          user4: "Telephone number",
          user5: "E-mail address",
          user6: "Your reservations:",
          user6a: "User data:",
          user7: "Arrival date: ",
          user8: "Departure date: ",
          user9: "Guests: ",
          user10: "Total price (including 50€ cleaning fee): ",
          user11: "Paid: ",
          user12: "Outstanding balance: ",
          user13: "Exit",
          user14: "Back to main page",
          cTitle: "Booking",
          cSubTitle: "Check whether your desired dates are available. Feel free to contact us with any questions!",
          c1: "Questions?",
          c2: "Please send any questions via email to heidi(at)tomlittle.org",
          c3: "Guests",
          c4: "Season",
          c4a: "Pre/Post season",
          c4b: "Main season",
          c4c: "Off season",
          // c4d: "Ski",
          c5: "Prices in Euros per night including local taxes, excluding additional €50 cleaning fee.",
          c6: "Conditions",
          c7: "Pre-/Postseason",
          c8: "May-June, September-October",
          c9: "Main Season",
          c10: "July-August",
          c11: "Offseason",
          c12: "November-April",
          // c13: "Ski Season",
          // c14: "November-February",
          c15: "Days marked in gray are available only for arrival/departure",
          c16: "Days marked in black are already booked and not available",
          c17: "Minimum stay is 5 nights",
          c18: "Deposit of 15% is due immediately when booking - not refunded upon cancellation",
          c19: "Balance to be paid at least 30 days before arrival",
          c20: "Check-in from 4 PM on the day of arrival (or as agreed)",
          c21: "Check-out by 10 AM on the day of departure",
          cnew1: "Number of guests",
          cnew2: "No selection",
          cnew3: "Show conditions",
          cnew3a: "Hide conditions",
          cnew4: "Reset selection",
          cnew5a: "Spring",
          cnew5b: "Summer",
          cnew5c: "Autumn",
          cnew6: "Show prices",
          cnew6a: "Hide prices",
          payment1: "Pay",
          payment2: "Outstanding balance payable by",
          payment3: "This booking is fully paid. Thank you!",
          payment4: "Pay balance",
          payment5: "Credit card payment",
          payment5a: "Instant bank transfer",
          payment6: "SEPA direct debit",
          payment7: "Your payment",
          payment8: "Payment method:",
          payment9: "Payable balance:",
          payment10: "Deposit:",
          payment11: "The deposit is 15% of the total price of the booking. It will not be reimbursed should the booking be cancelled.",
          payment12: "Payment:",
          payment13: "Please be aware that due to restrictions set by our payment process provider, we cannot offer instant bank tranfer as a payment option for payments under 100€.",
          paymentFail: "Your payment could not be completed. Please try again.",
          sofortRedirect: "You will be redirected to the main page shortly...",
          imprint1: "Imprint",
          imprint2: "Information required by § 5 TMG",
          imprint3: "Operator:",
          imprint4: "Contact:",
          imprint5: "Telephone: ",
          imprint6: "Limitation of liability:",
          imprint7: "Liability for Content",
          imprint8: `This website was created with great care to ensure the legality of all content. 
          However, we cannot be held liable for the correctness or completeness of the content. 
          As a service provider we are generally responsible for content on these pages which we have 
          created as specified in § 7 Paragraph 1 of the TMG. However, according to §§ 8 to 10 TMG we 
          are not required to monitor data created by others that we may store or transmit, nor are we 
          required to determine whether these data may be violating the law. Our duty to remove or block 
          information as required by other laws remains in effect, but liability in these cases can only 
          be determined after a concrete violation is discovered. In the case of a violation we will remove 
          the offending content immediately.`,
          imprint9: "Liability for Links",
          imprint10: `This website contains ones to external websites operated by third parties. 
          We cannot influence the content of such websites and therefore we cannot be held liable 
          for any such content. The individual operator of a website is responsible for his/her 
          content. When the links were created, the target websites were inspected and it was 
          determined that they contained no illegal content. Continuous monitoring of third-party 
          websites in the absence of evidence of illegal content is not possible. In the case the 
          illegal content is discovered we will remove the offending link immediately.`,
          imprint11: "Copyright",
          imprint12: `The texts and images contained in this website are subject to German copyright 
          law (Urheberrecht). Copying, processing, distribution or any other use of this content which 
          exceeds the limits of copyright law requires the prior written permission of the copyright 
          owner. Downloads and copies of these pages are permitted only for private, non-commercial use. 
          Content which was not created by the operator of this website is used as permitted by copyright 
          law and with full recognition of third-party copyrights. If any content of this website is shown 
          to violate the copyright laws, we will either remove the content or obtain permission for use at once.`,
          imprint13: "Data Protection",
          imprint14: `Use of this website without providing is personal data is generally possible. 
          Should we request personal data (e.g. name, address or email address) you may - but are not 
          required to - provide these data on a voluntary basis. The data will not be made available 
          to third parties without your explicit consent.`,
          imprint15: `Please be aware that the transfer of data via the internet (e.g. per email) 
          is in general not secure. Seamless protection of data is not possible.`,
          imprint16: `The use of the contact information provided in this imprint for third-party purposes 
          of any kind is strictly forbidden. The operator of this website reserves the right to take legal 
          steps should the data be use in any unauthorized fashion.`,
          imprint17: "Google Analytics",
          imprint18: `We partner with Google Analytics to allowing tracking activities through the use of 
          first-party and third-party cookies to e.g. track users’ use of the site, determine the popularity 
          of certain content and better understand online activity. By accessing this site, you consent to the 
          collection and use of your information by Google Analytics. You are encouraged to read their privacy 
          policy and contact them directly for responses to your questions. We do not transfer personal information 
          to Google Analytics.`,
          imprint19: "",
          imprint20: "",
          imprint21: "",
          imprint22: "",
          
          //RECOMMENDATIONS//

          recTitle: 'Our Recommendations',
          recIntro: 'Some text about the page',
          recTab1: 'Eating out',
          recTab2: 'Shopping',
          recTab3: 'Activities',
          recTab4: 'Sightseeing',
            recWeb: 'Visit web site',
          recMap: 'Go to map',
          recCardS: "Activity Card for your Vacation",
          recCardT: "The Erlebnis Card is your gateway to guided tours, courses, hiking routes and many other activities.",
          recBahnS: 'Enjoy the views, visit the Fun Park, hike in summer, ski in winter',
          recBahnT: 'The cable car to the top of the Gerlitzen leaves from Annenheim (around 4 miles from the apartment).',
          recLandskronS: 'Historical castle with a great view of the lake',
          recLandskronT: 'Castle Landskron is on the other side of the lake, about 6 miles from the apartment by car..',
          recOsterwitzS: 'An impressive castle high above the countryside',
          recOsterwitzT: 'A huge castle complex with a lot to see: 14 castle gates, a museum, a Renaissance picture gallery and more. Around 50 minutes by car from the apartment.',
          recTennisS: 'Play tennis or book a trainer',
          recTennisT: 'Look to the left from the apartments balcony and you can see the tennis courts. Book ahead or just go on over.',
          recRoedelS: 'Slide down the mountain with a view of the lake',
          recRoedelT: 'Two parallel slides take you 800 yards down the slope. Whether you race or relax is up to you.',
          recSchiffS: 'Discover the entire lake from the ship',
          recSchiffT: 'The ship arrives/departs from Bodensdorf several times a day and stops at Annenheim, Landskron and Ossiach (among others) before returning.',
          recVillachS: 'A wonderful walking tour of the old city of Villach',
          recVillachT: 'The entire self-guided tour lasts about 3 hours. Villach is around 7 miles from the apartment and can be reached by car or train.',
          recStiftS: 'Beautiful abbey on the lakeshore',
          recStiftT: 'Around 1000 years old, the abbey at Ossiach is still the community church for the town of Ossiach.',
          recUrbaniS: 'Good food in a pleasant garden, a short walk away',
          recUrbaniT: 'The Urbani Wirt offers traditional Austrian dishes including a number of dishes local to Carinthia. Eat in the garden when the weather is good.',
          recSchlosswirtS: '',
          recSchlosswirtT: '',
          recHexenpfandlS: 'Carinthian cooking using a variety of products from the region',
          recHexenpfandlT: 'On the other side of the lake in Ostriach, this modest restaurant serves excellent food!',
          recSeerestaurantS: 'Beautiful location, very good Austrian cuisine',
          recSeerestaurantT: 'Tafelspitz (boiled beef), Wiener Schnitzel, Topfenstrudel (pastry filled with cream cheese) and more right next to the lake. Reserve ahead of time.',
          recPavillionS: 'Coffee and snacks in a lovely location on the lakeshore',
          recPavillionT: 'Choose a spot outdoors on the lakeshore and enjoy coffee and cake or a beer or a glass of wine while the ducks swim past.',
          recSeitnerS: 'Good, comfortable and traditional restaurant',
          recSeitnerT: 'Very good tradtional Austrian food. If the weather is nice, enjoy your meal on the terrace.',
          recBricolaS: 'Pleasant Italian restaurant in the middle of Bodensdorf',
          recBricolaT: "La Bricola is a good choice when you are looking for Italian food that isn't pizza. The restaurant is just 10-minute wlk from the apartment",
          recSeemandlS: '',
          recSeemandlT: '',
          recStofflwirtS: 'Beautiful, sunny terrace with an amazing view',
          recStofflwirtT: 'Eat well for lunch or dinner and during your meal enjoy the view from 850 feet above the lake. Reservation recommended.',
          recBillaS: 'Well-stocked supermarket, a short walk away',
          recBillaT: 'You will find the standard international brands but also a good selection of Austrian products here.',
          recSparS: 'Large selection of fruit and vegetables, a short walk away',
          recSparT: 'Spar is especially noteworthy for its large selection of fresh produce and meats. Standard supermarkt brands cover the rest of your needs.',
          recBillaplusS: 'Large supermarket with a huge selection',
          recBillaplusT: 'Billa Plus is easy to reach on the outskirts of Feldkirchen. It is larger than the markets in Bodensdorf and offers pretty much evrything you might need.',
          recSchiederS: '',
          recSchiederT: '',
          recNockfleischS: 'Small farmer-run butcher shop with superb meat products',
          recNockfleischT: 'You will find various sorts of Speck (smoked meats), Rohwürst and Salami as well as Austrian specialities: Hartwürste, Kräuterlaibchen, Almkräuterschinken etc.',
          recSalitererS: 'Café and bakery with excellent cakes',
          recSalitererT: 'Home-made Reindlinge, Strudel with various fillings (best poppy seed strudel ever!), cakes, pralines and more, to take out or to enjoy with a cup of coffee in the café.',
          recThermeBKkS: 'Sauna and hot baths',
          recThermeBKkT: 'Relax and enjoy the newly remodeled family and health baths. About 25 miles away by car.',
          recKletterS: 'Recreation for all ages and levels of fitness',
          recKletterT: 'More than 150 exercises (several parcour routes, a new "flying-fox" parcours etc.). The Kletterwald is one of the largest adventure parks in Austria.',
          recMinigolfS: 'Comfortable and well-kept, on the lake',
          recMinigolfT: 'You can play minigolf and Pit-Pat here next to the Kurpark and not far from the Pavillion am See.',
          recBooteS: 'Row boats, pedal boats and electric boats',
          recBooteT: 'Here you can rent a boot (row or pedal), an electric boat or a windsurf board. Just 3 walking minutes from the apartment.',
          recFahrradS: 'Bicycles, e-bikes and rickscas',
          recFahrradT: "Rent a bicycle and take a lovely ride around the lake (about 19 miles, not hilly). Leo am See is 5 minutes' walk from the apartment.",
          recSantaluciaS: 'Good food in a pleasant, friendly restaurant',
          recSantaluciaT: 'A very pleasant restuarant with good Italian food. The staff is very friendly and attentive. Santa Lucia is a 10-minute walk from the apartment.',
          recCasamiraS: 'Italian food just 5 minutes away',
          recCasamiraT: 'Lots of varieties of pizza and other Italian dishes. You can sit "half-outside" on the terrace which is screened from the (busy) road in front.',
          }
      },
      de: {
        translations: {
          ChangeLng: "Page in English",
          TabTitle: "Ferienwohnung direkt am Ossiacher See mit privatem Badestrand mieten",
          MetaDescription: "Deutsche Beschreibung",
          book: "Buchungskalender",
          house: "Wohnung",
          sea: "Direkt am See",
          area: "Sehenswürdigkeiten",
          oTitle: "Haus direkt am See",
          oSubTitle: "Spaß um und am Ossiacher See",
          oT1: "direkt am Haus:",
          oT2: "in wenigen Minuten zu Fuß:",
          oT3: "mit kurzer Autofahrt:",
          oT4: "Wintersport:",
          o1: "Badestrand und Badesteg",
          o2: "Große Liegewiese mit Baumbestand",
          o3: "Flacher Kinder- und Nichtschwimmerbereich",
          o4: "Steg für Boote, Ablage für kleine Boote",
          o5: "Bootsmiete, Wassserski, Paragliding, Windsurfen, Segeln",
          o6: "Wandern, Fahrradverleih (Radweg um den See)",
          o7: "Tennis, Mini-Golf",
          o8: "Anlegestelle Ossiacher See Schifffahrt",
          o9: "Eisdiele, Restaurants, Bars",
          o10: "Supermärkte - Billa und Spar",
          o11: "Kletterwald Ossiacher See",
          o12: "Thermalbad Bad Kleinkirchheim",
          o13: "Skifahren auf der Gerlitzen, über 40 km Pisten, 15 Lifte, kostenloser Skibus",
          iTitle: "Die Wohnung",
          iSubTitle: "Direkt am Strand zuhause",
          iT1: "Unterkunft",
          iT2: "Wohnfläche",
          iT3: "Max. Belegung",
          iT4: "Lage",
          iT5: "Mahlzeiten",
          iT6: "Inklusive",
          iT7: "Exklusive",
          iMenu: "Mehr Details...",
          i1: "Ferienwohnung in der 1. Etage Nichtraucherdomizil",
          i2: "38 m²",
          i3: "3 Erwachsene",
          i4: "direkt am privaten Strand, Gerlitzer Alpe wenige Autominuten entfernt",
          i5: "Selbstverpflegung (Küche vorhanden)",
          i6: "Bettwäsche, Hand- und Duschtücher, Parkplatznutzung, Zentralheizung",
          i7: "Strandtücher bitte selbst mitbringen!",
          moTitle: "Ferienwohnung am Ossiacher See",
          moT1: "Küche",
          moT2: "Badezimmer",
          moT3: "Schlafzimmer",
          moT4: "Essgelegenheit",
          moT5: "Balkon",
          moT6: "Sonstiges",
          mo1: "Kaffemaschine, elektrischer Espresso-Maker, Kühlschrank mit Gefrierfach, Ceranfeld mit 3 Kochplatten, Toaster, Mikrowelle mit Grillfunktion, Töpfe und Pfannen, Geschirr und Besteck",
          mo2: "WC und Badewanne mit Dusche",
          mo3: "Schlafnische mit 2 Einzelbetten, kleines Schlafzimmer mit Einzelbett",
          mo4: "Wohnzimmer mit Essgelegenheit, großer höhenverstellbarer Tisch mit Sitzmöglichkeiten für 4 Personen (Couch-Garnitur)",
          mo5: "Balkon mit Seeblick und Eßtisch, Sitzmöglichkeiten für 3 Personen, Aufhängemöglichkeit für Wäsche, Grasteppich",
          mo6: "Fernseher, Satelliten-TV, Radio, Sonnenliegen und Sonnenschirm",
          moBut: "Schließen",
          aTitle: "Sehenswürdigkeiten",
          aSubTitle: "Kärnten kennenlernen",
          aText1: "In der Nähe befinden sich viele historische und kulturelle Sehenswürdigkeiten. Ca. 15 km westlich liegt Villach mit einem schönen Hauptplatz und vielen kleinen Gassen. Etwas weiter weg (ca. 37 km) im Osten ist die Hauptstadt Kärntens, Klagenfurt, mit einer historischen Altstadt, einem italienischen Palais und weiteren Kulturschätzen.",
          aText2: 'Am See direkt gegenüber liegt Alt-Ossiach, erreichbar per Auto, Fahrrad oder Fähre. Hier ist die wunderschöne Stiftung Ossiach, Hauptaustragungsstelle des "Karintischen Sommers", eine Reihe von Konzerten in einer herrlichen Umgebung.',
          aText3: "Ein Stück weiter weg am südwestlichen Ende des Sees befindet sich die Burg Landskron. Landskron war schon im 9. Jahrhundert v. Chr. besiedelt. Das von einer doppelten Ringmauer mit sieben Türmen umgebene ehemalige Schloss war um 1600 ein prunkvoller Herrensitz der Renaissance. Das Hauptgebäude hatte vier Stockwerke, einen hohen Schlossturm und starke Wehrtürme.",
          aText4: "Klicken Sie ",
          aText5: "hier",
          aText6: " um unsere persönlichen Empfehlungen rund um Essen, Einkaufen, Sehenswürdigkeiten und anderen Aktivitäten in der Umgebung zu sehen.",
          dTitle: "Anfahrt",
          dSubTitle: "Wie Sie gut ankommen",
          dT1: "mit dem Auto aus dem Norden (Salzburg, Deutschland etc.)",
          dT2: "mit dem Auto aus dem Osten (Graz, Wien etc.)",
          dT3: "mit der Bahn",          
          d1: `Verlassen Sie die Autobahn A10 an der Ausfahrt Villach-Ossiacher See und biegen Sie 
          am Ende der Ausfahrt links Richtung Ossiacher See ab. Fahren Sie bis zum Ortseingang Bodensdorf 
          (Sie sehen auf der linken Seite einen Billa Markt) und biegen dann rechts nach der Tankstelle 
          in den Fischerweg ab. Überkreuzen Sie den Bahnübergang und biegen Sie sofort danach rechts 
          in den Sankt-Urban-Weg ab. Fahren Sie an dem Tennis-Club vorbei und biegen Sie links nach 
          einem Flachbau (Immobilienbüro) in den Weg zum Haus ab. Am Ende des Wegs finden Sie den Parkplatz 
          (vorbei an den Holzbalkonen vom ersten Haus). Die Wohnung ist in dem Haus Sankt-Urban-Weg 5, 
          links vom Parkplatz, das grüne Haus mit dem Mosaik.`,
          d1a: `Falls dieser keinen freien Platz mehr hat (Hochsaison), kann man auch auf der anderen Seite 
          des Zauns parken. Dazu muss man um den Tennisplatz herum fahren, bzw. nach dem Überqueren des 
          Bahnübergangs geradeaus und dann der Straße nach rechts folgen, am Ende des Parkplatzes kommt 
          man ganz nahe an das Apartment Haus und sieht sogar den Balkon unserer Wohnung. Dort gibt es 
          einen Durchgang in dem Zaun zu dem Parkplatz und dem Haus.`,          
          d2:`Fahren Sie zunächst nach Feldkirchen in Kärten. Verlassen Sie Feldkirchen auf der Ossiacher See Straße (B94). 
          Fahren Sie durch Bodensdorf auf der B94 bis kurz vor dem Ortsausgang. Wenn Sie einen Spar Markt auf der rechten 
          Seite sehen, fahren Sie ca. 300m weiter und biegen dann links vor der Tankstelle in den Fischerweg ab. Überkreuzen 
          Sie den Bahnübergang und biegen sofort danach rechts in den Sankt-Urban-Weg ab. Fahren Sie an dem Tennis-Club vorbei 
          und biegen Sie links nach einem Flachbau (Immobilienbüro) in den Weg zum Haus ab. Am Ende des Wegs finden Sie den 
          Parkplatz (vorbei an den Holzbalkonen vom ersten Haus). Die Wohnung ist in dem Haus Sankt-Urban-Weg 5, links vom 
          Parkplatz, das grüne Haus mit dem Mosaik.`,
          d2a:`Falls dieser keinen freien Platz mehr hat (Hochsaison), kann man auch auf der anderen Seite 
          des Zauns parken. Dazu muss man um den Tennisplatz herum fahren, bzw. nach dem Überqueren des 
          Bahnübergangs geradeaus und dann der Straße nach rechts folgen, am Ende des Parkplatzes kommt 
          man ganz nahe an das Apartment Haus und sieht sogar den Balkon unserer Wohnung. Dort gibt es 
          einen Durchgang in dem Zaun zu dem Parkplatz und dem Haus.`,
          d3: `Steigen Sie am Bahnhof "Ossiach-Bodensdorf" aus. Von hier ist es ca. 10 Gehminuten zum Haus. 
          Gehen Sie sofort links wenn Sie den Bahnhof verlassen und überkreuzen Sie die Bahnschienen bei der 
          ersten Möglichkeit. Danach biegen Sie sofort rechts ab und gehen weiter an dem Tennis-Club vorbei 
          (ca. 500m). Biegen Sie dann links ab (nach einem Immobilienbüro) in den Weg zum Haus. Die Wohnung 
          ist in dem Haus Sankt-Urban-Weg 5, links vom Parkplatz, das grüne Haus mit dem Mosaik.`,
          d3a: `Wenn Sie lieber ein Taxi rufen, gibt es zwei naheliegende Taxi-Anbieter, das 
          Reisebüro Wernitzig (+43 4243 2249) und Christian Nindler (+43 4243 8775).`,
          imprint: "Impressum",
          b1: "JETZT BUCHEN!",
          b2: "Prüfen Sie Ihren Wunschtermin",
          b3: "Anreise:",
          b4: "Abreise:",
          b5: "Gäste:",
          b6: "Buchen!",
          bAlert: "Bitte wählen sie ein An- und Abreisedatum aus!",
          bAlert2: "Der Mindestaufenthalt beträgt fünf Nächte. Bitte wählen Sie einen längeren Aufenthalt aus!",
          bAlert3: "Leider ist der ausgewählte Zeitraum nicht verfügbar!",
          bAlert3sub: "Schauen Sie auf den Buchungskalender, um verfügbare Tage zu sehen.",
          bAlert3goBut: "Zum Buchungskalender",                    
          bAlert4: "Bitte melden sie sich an um zu buchen",
          bAlert5: "Buchung war erfolgreich. Vielen Dank!",
          bAlert5a: "Ihre Zahlung war erfolgreich. Vielen Dank!",
          bAlert6: "Der ausgewählte Zeitraum ist in der Vergangenheit!",
          bAlert7: "Ihr Abreisedatum kann nicht vor Ihrem Anreisedatum sein!",
          bAlert8: "Bitte geben sie ein gültiges Anreisedatum an!",
          bAlert9: "Bitte geben sie ein gültiges Abreisedatum an!",
          bError: `Ein Fehler ist aufgetreten! Bitte ändern Sie die ausgewählten Daten und wählen sie Ihren erwünschten Zeitraum erneut!`,
          bookMoTitle: "Ihre Reservierung",
          bookMoDateFunc: "DE",
          bookMo1: "Ausgewählter Zeitraum",
          bookMo2: "Tage",
          bookMo3: "Nächte",
          bookMo4: "Gesamtpreis",
          bookMo4a: "(inkl. 50€ Reinigungsgebühr)",
          bookMo5: "Bei Buchung fällig",
          bookMo6: "Restpreis fällig am ",
          bookMo6a: "(30 Tage vor Anreisedatum)",
          bookMo7: "Bestätigen",
          bookMo8: "Abbrechen",
          bookMo9: "Aufenthaltsdauer",
          bookMoChoice: "Gesamte Buchungskosten jetzt zahlen, um keine zweite Zahlung für den Restbetrag 30 Tage vor dem Anreisedatum ausführen zu müssen.",
          bookMo30: "Da das Anreisedatum weniger als 30 Tage nach dem Buchungsdatum fällt, ist der Gesamtbetrag bei Buchung fällig.",
          loginAlert1: "Falsches Passwort oder E-Mail",
          loginAlert2: "Erfolgreich angemeldet!",
          login1: "Anmelden",
          login2: "Passwort vergessen",
          login3: "Anmelden",
          login4: "Abmelden",
          login5: "Passwort",
          loginModal1:"Ihr ausgewählter Buchungszeitraum ist verfügbar!",
          loginModal2:"Bitte melden Sie sich an oder legen Sie ein neues Konto an um vortzufahren.",
          registerAlert1: "Ein Nutzer mit dieser E-mail Adresse existiert bereits",
          registerAlert2: "Erfolgreich registriert!",
          registerAlert3: "Bitte geben Sie einen Vornamen an",
          registerAlert4: "Bitte geben Sie einen Nachnamen an",
          registerAlert5: "Bitte geben Sie eine E-mail Adresse an",
          registerAlert6: "Bitte geben Sie eine Telefonnummer an",
          registerAlert7: "Bitte tragen Sie ein Passwort ein",
          registerAlert8: "Bitte tragen Sie einen Benuzternamen ein",
          registerAlert9: "Bitte bestätigen Sie ihr Passwort",
          registerAlert10: "Die angegebenen Passwörter stimmen nich überein",
          registerAlert11: "Unerwarteter Fehler, Konto konnte nicht erstellt werden",
          registerAlert12: "Bitte geben Sie eine gültige E-mail Adresse ein",
          registerAlert13: "Bitte geben Sie eine Telefonnummer mit Ländervorwahl und ohne Leer- und Sonderzeichen ein",
          register1: "Konto anlegen",
          register2: "Registrieren",
          register3: "Vorname",
          register4: "Nachname",
          register5: "Telefonnummer (inkl. Ländervorwahl)",
          register6: "E-Mail Adresse",
          register7: "Passwort",
          register8: "Passwort bestätigen",
          register9: "Registrieren",
          pass1: "Passwort Zurücksetzen",
          pass2: "Bitte geben Sie die E-mail ihres Kontos ein",
          pass2but: "Code anfordern",
          pass2butWait: "Senden...  ",
          pass2butSent: "Versandt!",
          pass3: "Bitte geben Sie den Code ein, der an Ihre E-mail gesendet wurde",
          pass3Error: "Der angegebene Code ist inkorrekt!",
          pass3but: "Code verifizieren",
          pass3butSucc: "Code verifiziert!",
          pass4: "Bitte geben Sie ein neues Passwort ein und bestätigen Sie es",
          pass4but: "Passwort ändern",
          pass4Error: "Die eingegebenen Passwörter stimmen nicht überein!",
          passError: "Es konnte kein Konto mit der angegebenen E-mail Adresse gefunden werden",
          passSent: "Eine E-mail mit Ihrem Passwort Code wurde versandt",
          passUpdated: "Ihr Passwort wurde aktualisiert, Sie werden zur Hauptseite weitergeleitet..",
          user0: "Mein Konto",
          user1: "Nutzerinfo",
          user2: "Vorname",
          user3: "Nachname",
          user4: "Telefonnummer",
          user5: "E-mail Adresse",
          user6: "Ihre Buchungen:",
          user6a: "Nutzerdaten:",
          user7: "Anreise: ",
          user8: "Abreise: ",
          user9: "Personen: ",
          user10: "Gesamtpreis (inkl. 50€ Reinigungsgebühr): ",
          user11: "Bezahlt: ",
          user12: "Austehender Betrag: ",
          user13: "Schließen",
          user14: "Zurück zur Hauptseite",
          cTitle: "Buchen",
          cSubTitle: "Ist Ihr Wunschtermin noch frei? Haben Sie noch Fragen?",
          c1: "Fragen?",
          c2: "Fragen stellen Sie bitte an heidi(at)tomlittle.org",
          c3: "Personen",
          c4: "Saison",
          c4a: "Vor/Nachsaison",
          c4b: "Hauptsaison",
          c4c: "Skisaison",
          // c4d: "Ski",
          c5: "Preise in Euro pro Nacht inklusive Kurtaxe zzgl. 50€ Endreinigung.",
          c6: "Konditionen",
          c7: "Vor-/Nachsaison",
          c8: "Mai-Juni, September-Oktober",
          c9: "Hauptsaison",
          c10: "Juli-August",
          c11: "Skisaison",
          c12: "November-April",
          // c13: "Skisaison",
          // c14: "November-Februar",
          c15: "Tage in grau sind ein An- oder Abreisetag einer existierenden Buchung und können für Ab- bzw. Anreise gebucht werden.",
          c16: "Tage in schwarz sind bereits belegt und können nicht gebucht werden.",
          c17: "Mindestaufenthalt 5 Nächte",
          c18: "15% Anzahlung mit der Buchung - wird bei Stornierung nicht zurückerstattet",
          c19: "Restzahlung fällig 30 Tage vor der Anreise",
          c20: "Ankunft ab 16 Uhr am Anreisetag oder nach Vereinbarung",
          c21: "Abfahrt bis 10 Uhr am Abreisetag",
          cnew1: "Anzahl Gäste",
          cnew2: "Keine Auswahl",
          cnew3: "Konditionen anzeigen",
          cnew3a: "Konditionen ausblenden",
          cnew4: "Auswahl löschen",
          cnew5a: "Frühling",
          cnew5b: "Sommer",
          cnew5c: "Herbst",
          cnew6: "Preise anzeigen",
          cnew6a: "Preise ausblenden",
          payment1: "Zahlen",
          payment2: "Restliche Zahlung fällig am",
          payment3: "Diese Buchung ist vollständig bezahlt. Danke!",
          payment4: "Restbetrag zahlen",
          payment5: "Kreditkartenzahlung",
          payment5a: "Sofortüberweisung",
          payment6: "SEPA-Überweisung",
          payment7: "Ihre Zahlung",
          payment8: "Zahlungsmethode:",
          payment9: "Restzahlung:",
          payment10: "Anzahlung:",
          payment11: "Die Anzahlung beträgt 15% des Gesamtpreises der Buchung. Sie wird im Falle einer Stornierung nicht zurückerstattet.",
          payment12: "Gesamtzahlung:",
          payment13: "Bitte beachten Sie, dass wir wegen Restriktionen unseres Zahlungsanbieters bei Zahlungen unter 100€ Sofortüberweisung nicht als Zahlungsmethode anbieten können.",
          paymentFail: "Ihre Zahlung konnte nicht ausgeführt werden. Bitte versuchen Sie es nochmals.",
          sofortRedirect: "Sie werden gleich zur Hauptseite weitergeleitet...",
          imprint1: "Impressum",
          imprint2: "Angaben gemäß § 5 TMG",
          imprint3: "Betreiber:",
          imprint4: "Kontakt:",
          imprint5: "Telefon: ",
          imprint6: "Haftungsausschluss:",
          imprint7: "Haftung für Inhalte",
          imprint8: `Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
					die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
					jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
					Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
					Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
					Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
					gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
					forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
					Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
					Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
					Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
					Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
					von entsprechenden Rechtsverletzungen werden wir diese Inhalte
					umgehend entfernen.`,
          imprint9: "Haftung für Links",
          imprint10: `Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
					Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
					fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
					verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
					Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
					Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
					Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
					permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
					konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
					Bekanntwerden von Rechtsverletzungen werden wir derartige Links
					umgehend entfernen.`,
          imprint11: "Urheberrecht",
          imprint12: `Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
					Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
					Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
					Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
					jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
					sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
					Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
					wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
					Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
					eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
					entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
					werden wir derartige Inhalte umgehend entfernen.`,
          imprint13: "Datenschutz",
          imprint14: `Die Nutzung unserer Webseite ist in der Regel ohne Angabe
					personenbezogener Daten möglich. Soweit auf unseren Seiten
					personenbezogene Daten (beispielsweise Name, Anschrift oder
					eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
					auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
					Zustimmung nicht an Dritte weitergegeben.`,
          imprint15: `Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
            der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich.`,
          imprint16: `Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
					Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
					angeforderter Werbung und Informationsmaterialien wird hiermit
					ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
					ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
					von Werbeinformationen, etwa durch Spam-Mails, vor.`,
          imprint17: "Google Analytics",
          imprint18: `Diese Website benutzt Google Analytics, einen Webanalysedienst der
					Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'',
					Textdateien, die auf Ihrem Computer gespeichert werden und die eine
					Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
					Cookie erzeugten Informationen über Ihre Benutzung dieser Website
					(einschließlich Ihrer IP-Adresse) wird an einen Server von Google in
					den USA übertragen und dort gespeichert. Google wird diese
					Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
					Reports über die Websiteaktivitäten für die Websitebetreiber
					zusammenzustellen und um weitere mit der Websitenutzung und der
					Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
					Google diese Informationen gegebenenfalls an Dritte übertragen, sofern
					dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im
					Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
					IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie
					können die Installation der Cookies durch eine entsprechende
					Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch
					darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
					Funktionen dieser Website voll umfänglich nutzen können. Durch die
					Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über
					Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und
					Weise und zu dem zuvor benannten Zweck einverstanden.`,
          imprint19: "Impressum von ",
          imprint20: "impressum-generator.de",
          imprint21: " der ",
          imprint22: "Rechtsanwältin Franziska Hasselbach, Bonn",

        //RECOMMENDATIONS//

        recTitle: 'Unsere Empfehlungen',
        recIntro: 'Auch wir verbringen immer wieder ein paar Wochen am Ossiacher See und das seit vielen Jahren. Wir haben hier einige Lieblingsziele gesammelt, die wir empfehlen können.',
        recTab1: 'Essen gehen',
        recTab2: 'Einkaufen',
        recTab3: 'Aktivitäten',
        recTab4: 'Sehenswürdigkeiten',
        recWeb: 'Website besuchen',
        recMap: 'Karte ansehen',
        recCardS: "Erlebniskarte für Ihren Urlaub",
        recCardT: "Genießen Sie ein abwechslungsreiches Wochenprogramm an geführten Touren, Schnupperkursen, Workshops und vielen anderen Freizeitaktivitäten.",
        recBahnS: 'Funpark, Wandern, Skifahren',
        recBahnT: 'Die Gerlitzenkanzelbahn fährt von Annenheim (ca. 6 km von der Wohnung) zum Gipfel der Gerlitzen.',
        recLandskronS: 'Historischer Burg, toller Ausblick',
        recLandskronT: 'Burg Landskron liegt auf der anderen Seite des Ossiacher Sees, etwa 10 km von der Wohnung entfernt.',
        recOsterwitzS: 'Ein wunderschöner Burg hoch auf dem Bergkegel',
        recOsterwitzT: 'Eine sehr weiträumige Anlage mit viel zu sehen: 14 Burgtoren, Museum, Bildersammlung aus der Renaissance und mehr. Etwa 50 Autominuten von der Wohnung.',
        recTennisS: 'Tennis spielen, Trainer buchen',
        recTennisT: 'Vom Balkon der Wohnung aus schauen Sie nach links und Sie sehen den Tennisplatz. Buchen Sie im voraus oder gehen Sie einfach vorbei.',
        recRoedelS: 'Riesenrutsche mit Seeblick',
        recRoedelT: 'Auf 760 Metern Länge gehts auf zwei parallel geführten Bahnen den Hang hinunter. Ob rasant oder ganz gemütlich, entscheidet der Fahrer.',
        recSchiffS: 'Entdecken Sie alle Seiten des Ossiacher Sees mit dem Schiff',
        recSchiffT: 'Der Schiff legt mehrmals am Tag in Bodensdorf an und fährt über Annenheim, Landskron und Ossiach (u.a.) bevor er zurückkehrt.',
        recVillachS: 'Eine schöne Tour durch die Altstadt von Villach',
        recVillachT: 'Eine selbstgeführte Tour zu Fuß dauert bis zu 3 Stunden. Villach ist mit Auto oder Bahn etwa 11km von der Wohnung entfernt.',
        recStiftS: 'Wunderschöner Stift direkt am See',
        recStiftT: 'Etwa 1000 Jahre alt, der Stift Ossiach ist heute noch als Pfarre der Gemeinde Ossiach aktiv.',
        recUrbaniS: 'Toller Garten, gutes Essen, zu Fuß erreichbar',
        recUrbaniT: 'Der Urbani Wirt bietet traditionell österreichische Küche, darunter auch einige Kärntner Schmankerl.',
        recSchlosswirtS: '',
        recSchlosswirtT: '',
        recHexenpfandlS: 'Kärntner Genusswirt, vorwiegend mit regionalen Produkten',
        recHexenpfandlT: 'Auf der anderen Seite des Sees in Ostriach bietet dieses unscheinbare Lokal ein hervorragendes Essen!',
        recSeerestaurantS: 'Wunderschöne Lage, sehr gutes österreichisches Essen',
        recSeerestaurantT: 'Tafelspitz, Wiener Schnitzel, Topfenstrudel und mehr direkt am See genießen. Reservierung empfohlen.',
        recPavillionS: 'Kaffee und kleine Speisen wunderschön direkt am See',
        recPavillionT: 'Setzen Sie sich draußen neben dem See und geniessen Sie Kaffee und Kuchen, ein Bier oder einen Wein während die Enten vorbei schwimmen.',
        recSeitnerS: 'Gutes, gemütliches Lokal der alten Wirtshaustradition',
        recSeitnerT: 'Ein sehr gutes, traditionelles Essen. Bei schönem Wetter ist die Terrasse zu empfehlen.',
        recBricolaS: 'Italianisches Restaurant in der Mitte von Bodensdorf',
        recBricolaT: 'La Bricola ist eine gute Wahl für italianisches Essen, das nicht Pizza ist. Das Restuarant ist nur 10 Gehminuten von der Wohnung entfernt.',
        recSeemandlS: '',
        recSeemandlT: '',
        recStofflwirtS: 'Schöne Sonnenterasse mit herrlichem Ausblick',
        recStofflwirtT: 'Schön Essen zum Mittag oder Abend und dabei 250m über den See alles überblicken. Reservierung empfohlen.',
        recBillaS: 'Gut sortierter Supermarkt, zu Fuß erreichbar',
        recBillaT: 'Hier gibt es neben den üblichen (internationalen) Sachen eine Menge österreichischer Lebensmitteln und Marken.',
        recSparS: 'Große Auswahl an Obst und Gemüse, zu Fuß erreichbar',
        recSparT: 'Spar zeichnet sich durch die Auswahl aus frischen Produkten aus.',
        recBillaplusS: 'Großer Supermarkt, sehr gut sortiert',
        recBillaplusT: 'Billa Plus ist am Rand von Feldkirchen leicht erreichbar. Größer als die beiden Supermärkte in Bodensdorf, hier findet man alles was man braucht.',
        recSchiederS: '',
        recSchiederT: '',
        recNockfleischS: 'Kleiner Bauernladen mit traumhaftem Fleischangebot',
        recNockfleischT: 'Hier gibt es verschiedene Sorten Speck, Rohwürst und Salami sowie diverse Hartwürste und Kräuterlaibchen, Almkräuterschinken, etc.',
        recSalitererS: 'Café/Konditorei mit herrlichen Kuchen',
        recSalitererT: 'Hausgemachte Reindlinge, Strudel mit unterschiedlichen Füllungen (bester Mohnstrudel der Welt!), Torten, Pralinen und mehr, zum mitnehmen oder mit eienm Kaffee gleich essen.',
        recThermeBKkS: 'Sauna und thermische Baden',
        recThermeBKkT: ' Spaß und Entspannung in der neu gestalteten Familien- und Gesundheitstherme. Etwa 40km (Auto) entfernt.',
        recKletterS: 'Freizeitpark für alle Alters- und Könnerstufen',
        recKletterT: 'Über 150 Übungen (mehrere Parcours, neuer Flying-Fox Parcours uvm.). Der Kletterwald ist eine der größten Adventure Parks in Österreich.',
        recMinigolfS: 'Schöne Anlage direkt am See',
        recMinigolfT: 'Minigolf und Pit-Pat spielt man hier neben dem Kurpark und unweit von Pavillion am See.',
        recBooteS: 'Elektroboote, Ruderboote, Tretboote',
        recBooteT: 'Hier gibt es Boote zum selber fahren (rudern, treten), Elektroboote, Windsurfbretter. Nur 3 Minuten zu Fuß von der Wohnung entfernt.',
        recFahrradS: 'Fahrräder, E-Bikes und Rickschas',
        recFahrradT: 'Hier gibt es die Fahräder für eine gemütliche Rundfahrt um den See (rund 29 km, nur moderate Steigerung). Leo am See ist etwa 5 Gehminuten von der Wohnung entfernt.',
        recSantaluciaS: 'Gutes Essen in einem schönen, freundlichen Lokal',
        recSantaluciaT: 'Innen ein schönes Restaurant mit guten italienischen Speisen. Das Personal ist sehr freundlich, der Service aufmerksam. Santa Lucia ist etwa 10 Minuten zu Fuß von der Wohnung entfernt.',
        recCasamiraS: 'Italienisches Essen nur 5 Gehminuten entfernt',
        recCasamiraT: 'Eine große Auswahl an Pizzen und einiges mehr. Hier kann man "halb-draußen" sitzen, auf einer Terrasse die von der Straße abgeschirmt ist.',
        }
      }
    },
    fallbackLng: "de",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;