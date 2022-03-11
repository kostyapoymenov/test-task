import React, {useState, useEffect} from "react";
import PostCard from "../components/PostCard";
import Button from '../components/Button';

export const Profile = ({}) => {

    const [profile, setProfile] = useState([]);
    const [selectProfile, setSelectProfile] = useState(1);
  
    const fetchData = (url) => {
      fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            data.map(item => {
              if(item.id === 1) 
                item.active = true;
              else 
                item.active = false;
            });
            setProfile(data)
        })
    }

    const deleteProfile = (id) => {
      let updateArr = profile.filter(item => {
        return item.active === false;
      });
  
      setProfile(updateArr);
    }

    const selectItem = (id) => {
      let updateArr = [];
      profile.forEach(item => {
        if(item.id === id){
          item.active = true;
          setSelectProfile(item.id);
        } else 
          item.active = false;
        
        updateArr = [...updateArr, item];
      });
      setProfile(updateArr);
    }
  
    useEffect(() => {
        fetchData("http://localhost:3000/profile");
    }, []);

    return <div>
        <h1>Profile страница.</h1>
        <Button textBtn="Delete Profile" deleteProfile={deleteProfile} selectId={selectProfile} />
      {
        profile.map(item => {
          return (
            <PostCard 
                className={item.active ? 'active' : ''} 
                key={item.id} 
                author={item.name} 
                id={item.id}
                selectItem={selectItem}
            />
          )
        })
      }
    </div>;
}