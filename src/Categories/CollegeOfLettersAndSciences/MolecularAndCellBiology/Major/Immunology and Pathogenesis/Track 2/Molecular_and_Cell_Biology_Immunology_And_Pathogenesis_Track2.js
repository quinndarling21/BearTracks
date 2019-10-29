import courses from '../../../../../../courses.json';
    
    const Molecular_and_Cell_Biology_Immunology_And_Pathogenesis_Track1
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
        "Requirement": "Molecular Immunology",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 150"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Laboratory",
        "Number of Classes": 1,
        "Minimum Units": 4,
        "Course": [courses["MCELLBI 150L"]]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Electives I",
        "Number of Classes": 1,
        "Minimum Units": 3,
        "Course": [courses['MCELLBI C103'],courses['MCELLBI C112'],courses['MCELLBI C114']]
    },
    {
        "Division": "Upper Division",
        "Requirement": "Electives II",
        "Number of Classes": 1,
        "Minimum Units": 3,
        "Course": [courses['MCELLBI 130'],
        courses['MCELLBI 132'],
        courses['MCELLBI C134'],
        courses['MCELLBI 135A'],
        courses['MCELLBI 136'],
        courses['MCELLBI 141'],
        courses['MCELLBI 143'],
        courses['MCELLBI 149'],
        courses['MCELLBI 160'],
        courses['MCELLBI 161'],
        courses['MCELLBI 250']]
    }
  ]

export default Molecular_and_Cell_Biology_Immunology_And_Pathogenesis_Track1;