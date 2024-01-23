import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Form({ onAddActivity }) {
    // submit event:
    function HandleSubmit(submission) {
        submission.preventDefault();
        const formData = new FormData(submission.target)
        const data = Object.fromEntries(formData)
        const name = data.name
        const isForGoodWeather = data.isForGoodWeather
        data.isForGoodWeather = formData.has("isForGoodWeather")

        console.log("this is data from the formData:", data, name, isForGoodWeather)

        onAddActivity(data);
        submission.target.reset();
        submission.target.elements.name.focus();
    }

    return (

        <form className="form-addnewactivity" onSubmit={HandleSubmit}>
            <h2 className="title-form">Add New Activity</h2>

            {/* NAME FOR ACTIVITY FIELD  */}
            <label className="label-input-name-activity" htmlFor="input-name-activity">Name</label>
            <input type="text"
                className="input-name-activity"
                id="input-name-activity"
                name="name"

                required
            />

            {/* CHECKBOX for GOOD WEATHER ACTIVITY */}
            <label className="label-for-checkbox" htmlFor="input-checkbox">Good Weather Activity</label>
            <div className="checkbox-wrapper">
                <input type="checkbox"
                    className="input-checkbox"
                    id="input-checkbox"
                    name="isForGoodWeather"
                />
                <label htmlFor="input-checkbox" className='toggle'><span></span></label>
            </div>

            <button type="submit" className="submit-button">Submit
            </button>
        </form >
    )

}