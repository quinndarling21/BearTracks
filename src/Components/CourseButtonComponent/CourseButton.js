import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import { Card, Collapse } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';
// // import { Accordion, AccordionToggle, AccordionCollapse } from 'react-bootstrap';
// import callAPI from '../../pages/apiCall';
 
const courseButtonSource = {
    beginDrag(props) {
        var course = props.Course;
        return {'Course': course};
        /* returns course in the form of: {'Course': { 'Course': COMPSCI C100,
                                                        'Units': ...,
                                                        'Title: ...,
                                                        'Desc': ... }}]*/
    },

    endDrag(props, monitor, component) {
        return props.handleDrop();
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(), 
    }
}

// function callAPI() {
//     const fetch = require("node-fetch");
//     const apiData = {
//     url: 'https://berkeleytime.com/api/catalog_json/course_box/?course_id=',
//     id: 6426,
// }

// const {url, id} = apiData

// const apiUrl = `${url}${id}`

// fetch(apiUrl)
//         .then(data => {
//             if(data.ok){
                
//             return data.text()
//             }
//             throw new Error('Oops! Something went wrong.'); 
//         })
//         .then((text)=>text.length? JSON.parse(text) : {})
//         .catch( error => console.error('Error:', error))
//         .then(courseBox => getCourseDescription(courseBox))

//         const getCourseDescription = (data) => {
//             console.log(data.course)
//         }
//     }

class CourseButton extends Component {
    render() {
        const { isDragging, hovered, connectDragSource, Course } = this.props;
        const opacity = isDragging ? {opacity: .5} : {};
        // const course = callAPI(this.props.Course);
        return (
            <Card className="CourseButton" border='primary'
                ref={instance => {
                const node = findDOMNode(instance);
                connectDragSource(node);
                }}
                onClick = {()=> this.props.handleClick()}>
                <Card.Header  className="CourseButtonHeader" >
                    {this.props.Course['Course']}: {this.props.Course['Title']} ({this.props.Course['Units']} units)
                    {(this.props.overlapping.length > 0) &&
                    <img className = 'OverlapAlertIcon' src={require("../../Images/overlapAlert.png")} height="20" width="20"/>}
                </Card.Header>
                <Collapse in={this.props.isSelected}>
                <Card.Body className='CourseDescription'>
                    <div>
                    {this.props.Course['Desc'] && 
                    <div className = "DescDiv">
                    <h1 className = 'DescHeader'> DESCRIPTION </h1>
                    <p className='CourseDescBody'>
                        {this.props.Course['Desc']}
                     </p>
                     </div>
                    }
                    {this.props.Course['Terms'] && 
                    <div className = "TermDiv">
                    <h1 className = 'TermHeader'>TERMS OFFERED</h1>
                    <p className = 'CourseTerms'> {Course['Terms']} </p>
                    </div>
                    }
                    {this.props.Course['Pres'] && 
                    <div className = "PresDiv">
                    <h1 className = 'PresHeader'> PREREQUISITES </h1>
                    <p className = 'CoursePres'> {Course['Pres']} </p>
                    </div>
                    }
                    {(this.props.overlapping.length > 0) &&
                    <div className = "OverlapDiv">
                    <h1 className = 'OverlapHeader'>OTHER REQUIREMENTS SATISFIED</h1>
                    {this.props.overlapping.map((requirment, index) => 
                    <p className = 'OverlappingReqs'>{requirment}</p>)}
                    </div>}
                    </div>
                </Card.Body>
                </Collapse>
            </Card>
        )
    }
}

    export default DragSource("Course", courseButtonSource, collect)(CourseButton);