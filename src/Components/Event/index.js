import React , {Component} from 'react';
import axios from 'axios'
import {EventSection , EventTitle , EventPart , Icon , PartTitle , Line , PartDesc} from './style.js'

class Event extends Component {
   state = {
     event : []
   }

   componentDidMount(){
     axios.get('js/data.json').then(res => {this.setState({event : res.data.event})})
   }


render(){

    const {event} = this.state ;

    const eventList = event.map( (eventItem) =>{
      return(
                      <EventPart first={eventItem.id} key={eventItem.id}>
                      <Icon className={eventItem.icon_name}></Icon>
                      <PartTitle>{eventItem.title}</PartTitle>
                      <Line/>
                      <PartDesc>
                          {eventItem.body}
                      </PartDesc>
                     </EventPart>
      )
    })

    return (
      <EventSection>
              <div className="container">
                  <EventTitle>Attended Event</EventTitle>
                  {eventList}
              </div>
          </EventSection>
  
    )
   }
  

}

export default Event;
