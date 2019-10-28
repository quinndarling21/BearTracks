import loadJSON from 'p5';

export default function callAPI(course_id) {

    const apiData = {
        url: 'https://berkeleytime.com/api/catalog_json/course_box/?course_id=',
        id: course_id,
    }

    const {url, id} = apiData

    const apiUrl = `${url}${id}`

    const data = loadJSON(apiUrl);
    console.log(data);
    
    // temp = data['course']
    // currentData = {"course": {"units": "4.0", "description": null, "title": "Elementary Chichewa", "prerequisites": "", "abbreviation": "AFRICAM",
    // "enrolled_percentage": -1.0, "department": "African American Studies", "enrolled_max": -1, "waitlisted": -1, "enrolled": -1, "grade_average": -1.0,
    // "course_number": "C30A", "id": 105, "letter_average": ""}, "marketplace": {}, "last_enrollment_update": null, "requirements": null, "favorited": false,
    // "ongoing": true, "cover_photo": "GENERIC", "sections": [], "ongoing_sections": []}
    // desiredForm = {"course": {"Course": null, "Title": null, "Units": 1, "Terms": null, "Desc": null, "Pres": null}}
    // courseNum = temp['abbreviaion'] + ' ' + temp['course_number']
    // courseTitle = temp['title']
    // courseUnits = temp['units'] 
    // courseTerms = extractTerms(temp['requirements']);
    // courseDesc = temp['description'];
    // coursePres = temp['prerequisites'];
    // return {[courseNum]: {"Course": courseNum, "Title": courseTitle, "Units": courseUnits, "Terms": courseTerms, "Desc": courseDesc, "Pres": coursePres}}

}

function extractTerms(reqs) {
    var terms = [];
    for (var i = 0; i < reqs.length; i++) {
        let curr = reqs[i];
        if (curr.slice(0,4) == 'Fall' || curr.slice(0,5) == 'Spring' || curr.slice(0,6) == 'Summer') {
            terms.push(curr);
        }
    }
    return terms;
}