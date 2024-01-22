// eslint-disable-next-line react/prop-types
export default function Form({ onAddActivity }) {

    // submit event:
    function HandleSubmit(submission) {
        submission.preventDefault();
        const formData = new FormData(submission.target)
        const data = Object.fromEntries(formData)
        console.log("this is data from the formData:", data)
        onAddActivity(newActivity);
    }

    return (
        <>
            <form className="form-addnewactivity" onSubmit={HandleSubmit}>
                <h2 className="title-form">Add New Activity:</h2>

                {/* NAME FOR ACTIVITY FIELD  */}
                <label className="label-input-name-activity" htmlFor="input-name-activity">Name:</label>
                <input type="text"
                    className="input-name-activity"
                    id="input-name-activity"
                    name="input-name-activity" />

                {/* CHECKBOX for GOOD WEATHER ACTIVITY */}
                <label className="label-for-checkbox" htmlFor="input-checkbox">Name:</label>
                <input type="checkbox"
                    className="input-checkbox"
                    id="input-checkbox"
                    name="input-checkbox" />

                <button className="submit-button">
                    <input type="submit"
                        value="Submit" />
                </button>
            </form>
        </>)

}