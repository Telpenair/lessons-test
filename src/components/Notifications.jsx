import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import assets from '../assets'

/**
 * Здесь хотелось сделать сообщение по условию, но испугался что будет слишком массивный компонент
 */
const Notifications = ({ notifications }) => {
    return (
        <div className="notification">
            {notifications.map(notification => {
                const notificationClass = classNames( 'notification__block', {
                    'notification__succeed': notification.property === 'succeed',
                    'notification__checking': notification.property === 'checking',
                    'notification__rework': notification.property === 'rework',
                    'notification__waiting': notification.property === 'waiting',
                })
                return (
                    <div key={ notification.id } className={ notificationClass }>
                        <img className="notification__icon" src={ assets.icons[ notification.property ] } alt="property icon"/>
                        <div className="notification__text">{notification.description}</div>
                    </div>)}
            )}
        </div>
    )
}

Notifications.propTypes = {
    notifications: PropTypes.array
}

export default Notifications;