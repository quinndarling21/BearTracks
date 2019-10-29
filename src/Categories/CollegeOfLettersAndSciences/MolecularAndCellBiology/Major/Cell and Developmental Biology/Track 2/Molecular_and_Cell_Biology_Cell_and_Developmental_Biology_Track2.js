import courses from '../../../../../../courses.json';
    
    const Molecular_and_Cell_Biology_Cell_and_Developmental_Biology_Track2
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
        "Requirement": "Genetics, Genomics and Cell Biology",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 104"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Physiology",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 136"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Laboratory",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 133L"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Electives",
        "Number of Classes": 2,
        "Minimum Units": 6,
        "Course": ['departmentsubgroup',[['INTEGBI',
        [courses['INTEGBI 103LF'],
         courses['INTEGBI 104LF'],
         [courses['INTEGBI 117'], courses['INTEGBI 117LF']],
         courses['INTEGBI 123AL'],
         courses['INTEGBI 131'],
         courses['INTEGBI 137'],
         courses['INTEGBI 140'],
         courses['INTEGBI 148'],
         courses['INTEGBI C143A'],
         courses['INTEGBI C143B']]],
       ['MCELLBI',
        [courses['MCELLBI 130'],
         courses['MCELLBI 132'],
         courses['MCELLBI 135A'],
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
       ['NUSCTX',
        [courses['NUSCTX 103'],
         courses['NUSCTX 108A'],
         courses['NUSCTX 110'],
         courses['NUSCTX 160'],
         courses['NUSCTX 161A']]],
       ['PB HLTH',
        [courses['PB HLTH 141'],
         courses['PB HLTH 142'],
         courses['PB HLTH 150B'],
         courses['PB HLTH 162A']]],
       ['PLANTBI',
        [courses['PLANTBI 135'],
         courses['PLANTBI 150'],
         courses['PLANTBI 160']]],
       ['PSYCH',
        [courses['PSYCH 110'], courses['PSYCH C113'], courses['PSYCH C116']]],
       ['STAT', [courses['STAT 131A']]]]]
    }
  ]

export default Molecular_and_Cell_Biology_Cell_and_Developmental_Biology_Track2;