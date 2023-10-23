import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/Albert_sabstin.jpg'

const UserProfileCard = () => {
  return (
    <div className='upc'>
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={profile_icon} alt="" />
            <div className="profile-title">Albert Sabstine</div>
            <div className="profile-description">
              I am a Software Engeenier in Masai school. Building Masai School | Problem Solver. Restructuring education and helping mould software engineers. We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.
            </div>
            <div className="profile-button"><a href='albertsabstine@gmail.com'>Contact Me</a></div>
        </div>
      
    </div>
  )
}

export default UserProfileCard
