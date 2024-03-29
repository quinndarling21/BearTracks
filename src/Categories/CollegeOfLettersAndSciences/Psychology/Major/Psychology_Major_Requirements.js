import courses from '../../../../courses.json';
    
    const Psychology_Major_Requirements = [
    {
      "Division": "Lower Division",
      "Requirement": "General Psychology",
      "Number of Classes": 1,
      "Minimum Units": 4,
      "Course": [courses["PSYCH 1"]]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Biological Science",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["ANTHRO 1"], courses['BIOLOGY 1A'], courses['INTEGBI 31'], courses['MCELLBI 32']]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Neuropsychology",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["PSYCH C61"], courses['PSYCH 110']]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Social Science",
        "Number of Classes": 2,
        "Notes": "Students must take two courses from two different departments.",
        "Minimum Units": 6,
        "Course": ['departmentsubgroup',
        [['ANTHROPOLOGY', [courses["ANTHRO 3"], courses['ANTHRO 3AC']]]
        ['SOCIOLOGY', [courses['SOCIOL 1'], courses['SOCIOL 3'], courses['SOCIOL 3AC']]],
        ['LINGUISTICS', [courses['LINGUIS 5']]],
        ['PHILOSOPHY', [courses['PHILOS 3'], courses['PHILOS 4'], courses['PHILOS 5'], courses['PHILOS 12A'], courses['PHILOS 25B']]],
        ['POLITICAL SCIENCE', [courses['POL SCI 1'], courses['POL SCI 2'], courses['POL SCI 4']]]]]
    },
    {
        "Division": "Lower Division",
        "Requirement": "Quantitative",
        "Number of Classes": 2,
        "Notes": "Students must take at least one course outside of Stat 2, 20 or 21.",
        "Minimum Units": 8,
        "Course": [courses["MATH 10A"], courses["MATH 10B"], courses["MATH 1A"], courses["MATH 1B"], courses["MATH 54"], courses["MATH 55"], courses["STAT 2"], courses["STAT 20"], courses["STAT 21"], courses["STAT C8"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Psychology Research & Data",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["PSYCH 101"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Survey",
        "Number of Classes": 5,
        "Notes": "Students must take five total courses with at least one course from each subdivision.",
        "Minimum Units": 15,
        "Course": ['departmentsubgroup',
    [['BIOLOGICAL', [courses["PSYCH 114"], courses["PSYCH 117"], courses["PSYCH 125"], courses["PSYCH C127"]]],
    ['COGNITIVE & DEVELOPMENT', [courses["PSYCH 120"], courses["PSYCH 126"], courses["PSYCH 140"], courses["PSYCH C143"], courses["PSYCH 147"]]],
    ['SOCIAL/PERSONALITY', [courses["PSYCH 150"],courses["PSYCH 156"],courses["PSYCH 160"],courses["PSYCH 166AC"], courses["PSYCH 180"]]],
    ['CLINICAL', [courses["PSYCH 130"], courses["PSYCH 131"], courses["PSYCH 134"], courses["PSYCH 135"]]]]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Electives",
        "Number of Classes": 3,
        "Notes": "Students must take at least one elective through the Psychology department.",
        "Minimum Units": 9,
        "Course": ['departmentsubgroup',
        [['PSYCHOLOGY', [courses['PSYCH 106'],
        courses['PSYCH 107'],
        courses['PSYCH N107'],
        courses['PSYCH N108'],
        courses['PSYCH 109'],
        courses['PSYCH 110'],
        courses['PSYCH N110'],
        courses['PSYCH 111'],
        courses['PSYCH C113'],
        courses['PSYCH 114'],
        courses['PSYCH 115'],
        courses['PSYCH C116'],
        courses['PSYCH 117'],
        courses['PSYCH N117'],
        courses['PSYCH 118'],
        courses['PSYCH C120'],
        courses['PSYCH N120'],
        courses['PSYCH 121'],
        courses['PSYCH 122'],
        courses['PSYCH N122'],
        courses['PSYCH C123'],
        courses['PSYCH 124'],
        courses['PSYCH 125'],
        courses['PSYCH C126'],
        courses['PSYCH C127'],
        courses['PSYCH 128'],
        courses['PSYCH C129'],
        courses['PSYCH 130'],
        courses['PSYCH N130'],
        courses['PSYCH 131'],
        courses['PSYCH 132'],
        courses['PSYCH 133'],
        courses['PSYCH N133'],
        courses['PSYCH 134'],
        courses['PSYCH N134'],
        courses['PSYCH 135'],
        courses['PSYCH N135'],
        courses['PSYCH 136'],
        courses['PSYCH 137'],
        courses['PSYCH 138'],
        courses['PSYCH 139'],
        courses['PSYCH 140'],
        courses['PSYCH N140'],
        courses['PSYCH 141'],
        courses['PSYCH 142'],
        courses['PSYCH C143'],
        courses['PSYCH 144'],
        courses['PSYCH 145'],
        courses['PSYCH 146'],
        courses['PSYCH 147'],
        courses['PSYCH 148'],
        courses['PSYCH 149'],
        courses['PSYCH 149A'],
        courses['PSYCH 149B'],
        courses['PSYCH 149C'],
        courses['PSYCH 149D'],
        courses['PSYCH 150'],
        courses['PSYCH N150'],
        courses['PSYCH 156'],
        courses['PSYCH 160'],
        courses['PSYCH N160'],
        courses['PSYCH 162'],
        courses['PSYCH C162'],
        courses['PSYCH N162'],
        courses['PSYCH 164'],
        courses['PSYCH 165'],
        courses['PSYCH 166AC'],
        courses['PSYCH 167AC'],
        courses['PSYCH 168'],
        courses['PSYCH 169'],
        courses['PSYCH 180'],
        courses['PSYCH N180']]],
        ['ANTHROPOLOGY', [courses['ANTHRO 106'], courses['ANTHRO 149']]],
        ['COGNITIVE SCIENCE', [courses['COG SCI C124']]],
        ['COMPUTER SCIENCE', [courses['COMPSCI 188']]],
        ['ECONOMICS', [courses['ECON 119']]],
        ['INTEGRATIVE BIOLOGY', [courses['INTEGBI 139'], courses['INTEGBI C144']]],
        ['LEGAL STUDIES', [courses['LEGALST 180'], courses['LEGALST 181'], courses['LEGALST 183']]],
        ['MOLECULAR CELL BIOLOGY', [courses['MCELLBI 160'], courses['MCELLBI 165']]],
        ['POLITICAL SCIENCE', [courses['POL SCI 164A']]],
        ['PUBLIC HEALTH', [courses['PUB HLTH 129']]],
        ['SOCIAL WELFARE', [courses['SOC WEL 181']]],
        ['UNDERGRADUATE BUSINESS ADMINISTRATION', [courses['UGBA 160']]]]]
    }
    
  ]

export default Psychology_Major_Requirements;