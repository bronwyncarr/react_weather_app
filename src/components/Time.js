import moment from 'moment'

function Time({location}) {
  const {localtime} = location
  const formattedTime = moment(localtime).format('MMMM Do YYYY, h:mm:ss a');

  // If formattedTime is not defined this line will log a notification.
  if(!formattedTime) {
    return null
  }

  // If formattedTime is not null.
  return(
    <p>Observed at: {formattedTime}</p>
  )
}

export default Time
