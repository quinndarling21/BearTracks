import courses from '../../../../../courses.json';
    
    const Molecular_and_Cell_Biology_Neurobiology_Track
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
        "Course": [courses["CHEM 1A"], courses['CHEM 1AL']]
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
        "Requirement": "Biochemistry and Molecular Biology",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 102"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Genetics",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 104"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Neurobiology",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 160"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Neuroscience",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 161"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Laboratory",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 160L"], courses['MCELLBI 163L']]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Electives",
        "Number of Classes": 1,
        "Minimum Units": 3,
        "Course": ['departmentsubgroup',
        [['BIO ENG', [courses['BIO ENG 121']]],
         ['COG SCI/PSYCH', [courses['COG SCI/PSYCH C127']]],
         ['INTEGBI',
          [courses['INTEGBI 139'],
           courses['INTEGBI C143A/PSYCH C113'],
           courses['INTEGBI C143B/PSYCH C116'],
           courses['INTEGBI C144/ESPM C126']]],
         ['MATH',
          [courses['MATH 110'],
           courses['MATH 127'],
           courses['MATH 128A'],
           courses['MATH 128B']]],
         ['MCELLBI',
          [courses['MCELLBI 130'],
           courses['MCELLBI 132'],
           courses['MCELLBI 135A'],
           courses['MCELLBI 136'],
           courses['MCELLBI 137L'],
           courses['MCELLBI 141'],
           courses['MCELLBI 150'],
           courses['MCELLBI 160L'],
           courses['MCELLBI 163L'],
           courses['MCELLBI 165'],
           courses['MCELLBI 166']]],
         ['PB HLTH', [courses['PB HLTH 141'], courses['PB HLTH 142']]],
         ['PHYSICS', [courses['PHYSICS 112']]],
         ['PSYCH', [courses['PSYCH 117']]],
         ['STAT', [courses['STAT 131A']]]]]
    }
  ]

export default Molecular_and_Cell_Biology_Neurobiology_Track;