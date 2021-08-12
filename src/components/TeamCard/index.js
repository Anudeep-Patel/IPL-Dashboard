import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li className="team-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
