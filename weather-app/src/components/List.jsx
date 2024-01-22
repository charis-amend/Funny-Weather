/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function List({ activities, instructions }) {

    return (
        <>
            <h3 className="instructions-list">{instructions}</h3>
            <ul className="activity-list">
                {activities.map((activity) => (
                    <li key={activity.id} className="list-item">
                        {activity.name}
                    </li>
                ))
                }
            </ul>
        </>
    )
}