import courses from '../../../../../../courses.json';
    
    const Molecular_and_Cell_Biology_Biochemisty_and_Molecular_Biology_Track2
     = [
        {
            "Division": "Lower Division",
            "Requirement": "Calculus",
            "Number of Classes": 2,
            "Minimum Units": 8,
            "Course": [courses["MATH 10A"], courses["MATH 10B"]]
          },
    {
        "Division": "Lower Division",
        "Requirement": "General Chemistry",
        "Number of Classes": 2,
        "Minimum Units": 5,
        "Course": [courses["CHEM 1A"], courses['CHEM 1AL'], courses['CHEM 1B']]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Chemical Structure and Reactivity",
        "Number of Classes": 4,
        "Minimum Units": 10,
        "Course": [courses["CHEM 3A"], courses['CHEM 3AL'], courses['CHEM 3B'], courses['CHEM 3BL']]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Organic Chemistry",
        "Number of Classes": 2,
        "Minimum Units": 10,
        "Course": [courses["CHEM 12A"], courses['CHEM 12B']]
    },
    {
        "Division": "Lower Division",
        "Requirement": "General Biology",
        "Number of Classes": 3,
        "Minimum Units": 9,
        "Course": [courses["BIOLOGY 1A"], [courses['BIOLOGY 1AL'], courses['BIOLOGY 1B']]]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Introductory Physics",
        "Number of Classes": 2,
        "Minimum Units": 8,
        "Course": [courses["PHYSICS 8A"], courses["PHYSICS 8B"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Biophysical Chemistry",
        "Number of Classes": 2,
        "Minimum Units": 7,
        "Course": [courses["MCELLBI C100A"], courses["CHEM 130B"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Chemical Biology",
        "Number of Classes": 1,
        "Minimum Units": 3,
        "Course": [courses["CHEM 135"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Cell and Systmes Biology / Genetics",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 130"], courses["MCELLBI 140"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Laboratory",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI C110L"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Elective",
        "Number of Classes": 1,
        "Minimum Units": 3,
        "Course": ['departmentsubgroup', 
        [['CHEM',
        [courses['CHEM 113'], courses['CHEM 115'], courses['CHEM 130B']]],
       ['ESPM', [courses['ESPM C148']]],
       ['MATH', [courses['MATH 110'], courses['MATH 127']]],
       ['MCELLBI',
        [courses['MCELLBI 130'],
         courses['MCELLBI 132'],
         courses['MCELLBI 135A'],
         courses['MCELLBI 136'],
         courses['MCELLBI 137L'],
         courses['MCELLBI 141'],
         courses['MCELLBI 143'],
         courses['MCELLBI 149'],
         courses['MCELLBI 150'],
         courses['MCELLBI 160'],
         courses['MCELLBI 161'],
         courses['MCELLBI 165'],
         courses['MCELLBI 166'],
         courses['MCELLBI C103'],
         courses['MCELLBI C112'],
         courses['MCELLBI C114'],
         courses['MCELLBI C116'],
         courses['MCELLBI C134'],
         courses['MCELLBI C148']]],
       ['PB HLTH',
        [courses['PB HLTH 141'],
         courses['PB HLTH 142'],
         courses['PB HLTH W142']]],
       ['PHYSICS', [courses['PHYSICS 112'], courses['PHYSICS 177']]],
       ['PLANTBI',
        [courses['PLANTBI 135'],
         courses['PLANTBI 150'],
         courses['PLANTBI 160']]],
       ['STAT', [courses['STAT 131A']]]]]
    }
  ]

export default Molecular_and_Cell_Biology_Biochemisty_and_Molecular_Biology_Track2;