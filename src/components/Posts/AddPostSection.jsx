import DisplayForm from '../DisplayForm';
import AddPost from './AddPost';
import { useState } from 'react'
import './AddPostSection.css'
export default function AddPostSection (props) {
    const [postInfo, setPostInfo] = useState({});
    const isOpen = props.isOpen ? "open" : "closed";
    function handlePostInfoChange (e){
        const {key} = e.target.dataset;
        setPostInfo({...postInfo, [key]: e.target.value})
      }
      
      function handlePostSubmit (e) {
        props.AddPost(postInfo);
        e.preventDefault();
      }
    return (
        <div className={isOpen}>
            <div className='section-container'>
                <DisplayForm 
                    formTitle="Add Post"
                    id="post"
                    onChange={handlePostInfoChange}
                    onSubmit= {handlePostSubmit}
                    FormComponent={AddPost}
                />
            </div>
        </div>
    )
}