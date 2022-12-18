import * as F from '../../helpers/helper-functions'
import { useNavigate } from 'react-router-dom'

export default function ProfileCard(props) {
  const cred = props.cred
  const navigate = useNavigate()
  async function createRoom() {
    if (props.authId) {
      let data = await F.getReq(`users/room/${props.authId}/${cred.id}`)
      if (data.error || data.message) {
      } else {
        navigate(`/message/room`, { state: { roomId: data } })
      }
    }
  }
  return (
    <div
      className='center cover fade'
      style={{ backgroundColor: '#fff', ...props.styles }}
    >
      <br />
      <div
        style={{
          backgroundImage: `url('${props.url}')`,
        }}
        className='prof-img-container'
      ></div>
      <div className='details'>
        <div className='row' style={{ justifyContent: 'center' }}>
          <h1 style={{ color: 'rgb(57 157 222)' }}>
            {cred.name},{' '}
            <small style={{ color: '#999' }}>{F.getAge(cred.bday)}</small>
          </h1>
        </div>
        {cred.bio != '' && (
          <>
            <h2
              style={{ color: '#999', textAlign: 'center', marginTop: '5px' }}
            >
              {cred.bio}
            </h2>
          </>
        )}
        <br />
        {props.chat && (
          <button onClick={createRoom} className='edit-btn'>
            chat
          </button>
        )}
        <br />
      </div>
    </div>
  )
}
