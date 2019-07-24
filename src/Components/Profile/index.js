import React , {useState , useEffect} from 'react';
import {ProfileSection , ProfileTitle , ProfileList , ProfileItem , ImageRapper , Image , Overlay , OverlaySpan} from './style.js'
import axios from 'axios'


const Profile = () => {
  
    const [ images , setimages] = useState([])

     useEffect (() =>{
      axios.get('js/data.json').then(res => {setimages(res.data.profile)})

     },[])
    
     const ProfileImages = images.map((imageItem) => {
       return (
        <ImageRapper key = {imageItem.id}>
        <Image src={imageItem.image} alt=""/>
        <Overlay>
            <OverlaySpan>
                Show details
            </OverlaySpan>
        </Overlay>
        </ImageRapper>
       )
     })

  return (
    <ProfileSection>
            <ProfileTitle>Events</ProfileTitle>
            <ProfileList>
                <ProfileItem active>All</ProfileItem>
                <ProfileItem>Business</ProfileItem>
                <ProfileItem>Technology</ProfileItem>
                <ProfileItem>Conference</ProfileItem>
                <ProfileItem>Presentation</ProfileItem>
            </ProfileList>
            
            <div className="box">
                {ProfileImages}
            </div>
            
        </ProfileSection>

  )
}

export default Profile;
