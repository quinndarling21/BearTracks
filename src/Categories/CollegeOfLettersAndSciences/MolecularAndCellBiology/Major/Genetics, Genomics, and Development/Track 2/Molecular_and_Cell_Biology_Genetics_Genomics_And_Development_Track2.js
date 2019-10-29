import courses from '../../../../../../courses.json';
    
    const Molecular_and_Cell_Biology_Genetics_Genomics_And_Development_Track2
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
        "Course": [courses["MCELLBI 104"], courses["MCELLBI 140"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Developmental Biology",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 141"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Laboratory",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 140L"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Electives",
        "Notes": "You must take at least one course from List B",
        "Number of Classes": 2,
        "Minimum Units": 6,
        "Course": ['departmentsubgroup',
    [['List A', [courses['CHEM 113'],
    courses['CHEM 115'],
    courses['CHEM 130B'],
    courses['ESPM C148'],
    courses['ESPM 162'],
    courses['INTEGBI 160'],
    courses['MATH 110'],
    courses['MCELLBI 100B'],
    courses['MCELLBI C103'],
    courses['MCELLBI C112'],
    courses['MCELLBI C114'],
    courses['MCELLBI C116'],
    courses['MCELLBI 130'],
    courses['MCELLBI 135A'],
    courses['MCELLBI 136'],
    courses['MCELLBI 150'],
    courses['MCELLBI 160'],
    courses['MCELLBI 161'],
    courses['MCELLBI 165'],
    courses['MCELLBI 166'],
    courses['NUSCTX C114'],
    courses['PHYSICS 112'],
    courses['PLANTBI 135'],
    courses['PLANTBI 150']]],
    ['List B', [courses['BIO ENG 131'],
    courses['BIO ENG 143'],
    courses['BIO ENG 144'],
    courses['ESPM 108B'],
    courses['INTEGBI 161'],
    courses['INTEGBI 162'],
    courses['INTEGBI 163'],
    courses['MATH 127'],
    courses['MCELLBI 132'],
    courses['MCELLBI 137L'],
    courses['MCELLBI 141'],
    courses['MCELLBI 143'],
    courses['MCELLBI 149'],
    courses['MCELLBI C134'],
    courses['MCELLBI C148'],
    courses['PB HLTH 141'],
    courses['PB HLTH 142'],
    courses['PB HLTH 256'],
    courses['PLANTBI 160'],
    courses['PLANTBI C134'],
    courses['STAT 131A'],
    courses['STAT 134']]]]]
    }
  ]

export default Molecular_and_Cell_Biology_Genetics_Genomics_And_Development_Track2;