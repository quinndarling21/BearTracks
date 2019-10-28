import courses from '../../../../courses.json';
    
    const Physics_Major_Requirements = [
    {
      "Division": "Lower Division",
      "Requirement": "Physics I",
      "Number of Classes": 1,
      "Minimum Units": 4,
      "Course": [courses["PHYSICS 7A"], courses['PHYSICS 5A']]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Physics II",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["PHYSICS 7B"], [courses['PHYSICS 5B'], courses['PHYSICS 5BL']]]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Physics III",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["PHYSICS 7C"], [courses['PHYSICS 5C'], courses['PHYSICS 5CL']]]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Calculus I",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MATH 1A"]]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Calculus II",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MATH 1B"]]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Multivariable Calculus",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MATH 53"]]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Mathematical Physics",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["PHYSICS 89"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Analytic Mechanics",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["PHYSICS 105"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Electromagnetism and Optics",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["PHYSICS 110A"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Laboratory",
        "Number of Classes": 2,
        "Minimum Units": 6,
        "Course": [courses["PHYSICS 111A"], courses["PHYSICS 111B"]]
    }, 
    {
        "Division": "Upper Division",
        "Requirement": "Statistical and Thermal Physics",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["PHYSICS 112"]]
    }, 
    {
        "Division": "Upper Division",
        "Requirement": "Quantum Mechanics",
        "Number of Classes": 2,
        "Minimum Units": 8,
        "Course": [courses["PHYSICS 137A"], courses["PHYSICS 137B"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Physics Elective",
        "Number of Classes": 1,
        "Minimum Units": 3,
        "Course": [courses['PHYSICS 110B'],
        courses['PHYSICS 129'],
        courses['PHYSICS 130'],
        courses['PHYSICS 138'],
        courses['PHYSICS 139'],
        courses['PHYSICS 141A'],
        courses['PHYSICS 141B'],
        courses['PHYSICS 142'],
        courses['PHYSICS 151'],
        courses['PHYSICS C161'],
        courses['PHYSICS 177'],
        courses['PHYSICS C191']]
    }
    
  ]

export default Physics_Major_Requirements;