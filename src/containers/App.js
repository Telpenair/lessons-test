import React, { Component } from 'react';
import Lessons from '../components/Lessons';
import { loadDataRequest } from '../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * Основной контейнер.
 * Здесь у меня было много сомнений по тому как лучше организовать компненты.
 * Компонент Lesson кажется лишним, но я в этом не уверен. 
 * Если подключить его к стору, то он станет независимым и может в нём будет больше смысла.
 */
class App extends Component {

    componentDidMount(){
        this.props.loadDataRequestAction();
    }

    render() {
        const { isLoading, data, error } = this.props.dataLoad;
        return (
            <div>
                {isLoading && <div className="loading">Загрузка...</div>}
                {data.lessons && <Lessons lessons = { data.lessons }/> }
                {error && 
                <div className="error">
                    <div>{error.userMessage}</div>
                    <div>{error.serverMessage}</div>
                </div>}
                
            </div>
        )
    }
}

App.propTypes = {
    dataLoad: PropTypes.shape({
        isLoading: PropTypes.bool,
        data: PropTypes.object,
        error: PropTypes.shape({
            userMessage: PropTypes.string,
            serverMessage: PropTypes.string
        })
    }),
    loadDataRequestAction: PropTypes.func
}

const mapStateToProps = ({ dataLoad }) => ({
    dataLoad
});

const mapDispatchToProps = dispatch => ({
    loadDataRequestAction: () => dispatch(loadDataRequest()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
