import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import Notifications from './Notifications'
import StatesLine from './StatesLine'

const Lessons = ({ lessons }) => (
    <div className="wrapper">
        <StatesLine />
        <div className="lessons">
            {lessons.map(lesson => (
                <div key={ lesson.id }>
                    <div className="lesson" >
                        <Card 
                            title={ lesson.title }
                            description={ lesson.description }
                            isNew={ lesson.notifications[ 0 ].property === 'waiting' }
                            img={ lesson.img }
                        />
                        <Notifications
                            notifications={ lesson.notifications }
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

Lessons.propTypes = {
    lessons: PropTypes.object
}

export default Lessons;