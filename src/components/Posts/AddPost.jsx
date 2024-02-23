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
}){
    return (
        <form
            id={id}
            className="add-post"
            data-array-name="posts"
            onSubmit={onSubmit}>
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
                placeholderText="6:30 PM"
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

            <button type="submit"> Submit </button>
        </form>
    );
}