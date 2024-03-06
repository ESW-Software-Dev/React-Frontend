import CustomInput from "../CustomInput"


export default function AddPost({
    id,
    name,
    netid,
    restaurant,
    org,
    location,
    date,
    time,
    description,
    onChange,
    onSubmit
}) {
    return (

        <div className="add-post-container" style={{ backgroundColor: 'rgba(255, 0, 0, 0.3)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '20px' }}>
            <div className="Touchdown" style={{ marginLeft: '20px', marginTop: '20px' }}>
                <img src="src/components/Posts/Touchdown.png" alt="Touchdown" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <form
                id={id}
                className="add-post"
                data-array-name="posts"
                onSubmit={onSubmit}>

                <div className="section-container">
                    <div className="section-column">
                        <CustomInput
                            id="post-restaurant-input"
                            labelText="Restaurant"
                            placeholderText="Taste of Thai"
                            type="text"
                            value={restaurant}
                            onChange={onChange}
                            data-key="restaurant"
                        />
                        <CustomInput
                            id="post-org-input"
                            labelText="Organization"
                            placeholderText="ESW"
                            type="text"
                            value={org}
                            onChange={onChange}
                            data-key="org"
                        />
                        <CustomInput
                            id="post-location-input"
                            labelText="Location"
                            placeholderText="Hollister B14"
                            type="text"
                            value={location}
                            onChange={onChange}
                            data-key="location"
                        />
                        <CustomInput
                            id="post-date-input"
                            labelText="Date"
                            placeholderText="2/23/24"
                            type="date"
                            value={date}
                            onChange={onChange}
                            data-key="date"
                        />
                    </div>

                    <div className="section-column">
                        <CustomInput
                            id="post-time-input"
                            labelText="Time"
                            placeholderText=""
                            type="time"
                            value={time}
                            onChange={onChange}
                            data-key="time"
                        />
                        <CustomInput
                            id="post-description-input"
                            labelText="Description"
                            placeholderText="Spring Rolls"
                            type="text-area"
                            value={description}
                            onChange={onChange}
                            data-key="description"
                        />
                        <CustomInput
                            id="post-name-input"
                            labelText="Owner Name"
                            placeholderText="Ethan"
                            type="text"
                            value={name}
                            onChange={onChange}
                            data-key="name"
                        />
                        <CustomInput
                            id="post-netid-input"
                            labelText="Owner netid"
                            placeholderText="eyl45"
                            type="text"
                            value={netid}
                            onChange={onChange}
                            data-key="netid"
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
