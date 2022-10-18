import React from 'react'

function Moderator() {
  const navigate = useNavigate();
  const handleAccept = async (data)=>{
    const res = await fetch(SERVER_URL + '/api/articles')
  }

  return (
    <div>Moderator</div>
  )
}

export default Moderator