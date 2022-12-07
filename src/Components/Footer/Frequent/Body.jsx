function Body() {
    return (
        <div className="questions-container">
            <br/> <br/>
            <h1 id="question-title">Frequent Questions</h1>
            <div className='info-container1'>
                <input className='input-hamburger' type="checkbox" id="menu-hamburger1" />
                <label for="menu-hamburger1">What is the priority for the company?</label>
                <ul id="ul1">
                    <li>Provide a quality service to the users of the program in order to generate a good impression and prestige as a result of a good operation in the generation of trips.</li>
                </ul>
            </div>
            <div className='info-container2'>
                <input className='input-hamburger' type="checkbox" id="menu-hamburger2" />
                <label for="menu-hamburger2">What can be done on the page?</label>
                <ul id="ul2">
                    <li>Reservations for different types of travel are made to available destinations through an exhaustive and automatic selection of available seats.</li>
                </ul>
            </div>
            <div className='info-container3'>
                <input className='input-hamburger' type="checkbox" id="menu-hamburger3" />
                <label for="menu-hamburger3">How can I correct my trip?</label>
                <ul id="ul3">
                    <li>Your data is very important to us, so the names, surnames and document number of the passengers must be filled out as they appear on the travel document, Citizenship Card or Passport.</li>
                </ul>
            </div>
            <div className='info-container4'>
                <input className='input-hamburger' type="checkbox" id="menu-hamburger4" />
                <label for="menu-hamburger4">How can I get support about my purchase?</label>
                <ul id="ul4">
                    <li>For support during your purchase process or attention to customer service requests, you can contact us through:
*Our chat on schedule
11:30 a.m. to 8:30 p.m. from Monday to Saturday and from 11 a.m. to 5 p.m. to 7:00 p.m. on Sundays and holidays.</li>
                </ul>
            </div>
            <div className='info-container5'>
                <input className='input-hamburger' type="checkbox" id="menu-hamburger5" />
                <label for="menu-hamburger5">Where can I receive advice on my trip?</label>
                <ul id="ul5">
                    <li>We have a network of 50 points of sale nationwide, where we can provide you with more information about your travel needs. If you have already bought a trip with us, you can write to Contact us or through our chat where one of our advisors will help you with your concerns.</li>
                </ul>
            </div>
        </div>
    );
}

export default Body;