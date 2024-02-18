import CustomInput from "../CustomInput"

export default function AddPost({
    id,
    name,
    netid,
    location,
    food,
    hours,
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
            <CustomInput 
                id="post-loc-input"
                labelText="Location"
                placeholderText="Gates Hall"
                type="text"
                value={location}
                onChange={onChange}
                data-key="location"
            />  
            <CustomInput 
                id="post-food-input"
                labelText="Food Description"
                placeholderText="From Taste of Thai"
                type="textarea"
                value={food}
                onChange={onChange}
                data-key="food"
            />  
            <button type="submit"> Submit </button>
        </form>
    );
}