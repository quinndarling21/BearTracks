
import DataScience_Major_Requirements from './Categories/CollegeOfLettersAndSciences/DataScience/Major/DataScience_Major_Requirements.js';
import Statistics_Major_Requirements from './Categories/CollegeOfLettersAndSciences/Statistics/Major/Statistics_Major_Requirements.js'
import EnergyEngineering_Minor_Courses from './Categories/CollegeOfEngineering/EnergyEngineering/Minor/EnergyEngineering_Minor_Courses.js';
import EnergyEngineering_Minor_Requirements from './Categories/CollegeOfEngineering/EnergyEngineering/Minor/EnergyEngineering_Minor_Requirements';
import Mathematics_Minor_Requirements from './Categories/CollegeOfLettersAndSciences/Mathematics/Minor/Mathematics_Minor_Requirements';
import Letters_And_Sciences_Requirements from './Categories/CollegeOfLettersAndSciences/CollegeRequirements/L&SRequirements.js'
import Molecular_and_Cell_Biology_Biochemisty_and_Molecular_Biology_Track1 from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Biochemistry and Molecular Biology/Track 1/Molecular_and_Cell_Biology_Biochemisty_and_Molecular_Biology_Track1.js'
import Molecular_and_Cell_Biology_Biochemisty_and_Molecular_Biology_Track2 from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Biochemistry and Molecular Biology/Track 2/Molecular_and_Cell_Biology_Biochemisty_and_Molecular_Biology_Track2.js'
import Molecular_and_Cell_Biology_Cell_and_Developmental_Biology_Track1 from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Cell and Developmental Biology/Track 1/Molecular_and_Cell_Biology_Cell_and_Developmental_Biology_Track1'
import Molecular_and_Cell_Biology_Cell_and_Developmental_Biology_Track2 from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Cell and Developmental Biology/Track 2/Molecular_and_Cell_Biology_Cell_and_Developmental_Biology_Track2'
import Molecular_and_Cell_Biology_Genetics_Genomics_And_Development_Track1 from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Genetics, Genomics, and Development/Track 1/Molecular_and_Cell_Biology_Genetics_Genomics_And_Development_Track1'
import Molecular_and_Cell_Biology_Genetics_Genomics_And_Development_Track2 from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Genetics, Genomics, and Development/Track 2/Molecular_and_Cell_Biology_Genetics_Genomics_And_Development_Track2'
import Molecular_and_Cell_Biology_Immunology_And_Pathogenesis_Track1 from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Immunology and Pathogenesis/Track 1/Molecular_and_Cell_Biology_Immunology_And_Pathogenesis_Track1'
import Molecular_and_Cell_Biology_Immunology_And_Pathogenesis_Track2 from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Immunology and Pathogenesis/Track 2/Molecular_and_Cell_Biology_Immunology_And_Pathogenesis_Track2'
import Molecular_and_Cell_Biology_Neurobiology_Track from './Categories/CollegeOfLettersAndSciences/MolecularAndCellBiology/Major/Neurobiology/Molecular_and_Cell_Biology_Neurobiology_Track'
import Physics_Major_Requirements from './Categories/CollegeOfLettersAndSciences/Physics/Major/Physics_Major_Requirements'
import PoliticalScience_Major_Requirements from './Categories/CollegeOfLettersAndSciences/PoliticalScience/Major/PoliticalScience_Major_Requirements'
import Psychology_Major_Requirements from './Categories/CollegeOfLettersAndSciences/Psychology/Major/Psychology_Major_Requirements'
import University_Courses from './Categories/University/universityCourses'
import University_Requirements from './Categories/University/universityRequirements.json'
import BusinessAdministration_Major_Requirements from './Categories/Haas/Business Administration/Major/BusinessAdministration_Major_Requirements.js';
import Haas_Requirements from './Categories/Haas/CollegeRequirements/HaasRequirements.js';

var catalog =  {'Colleges': {
                        "College of Letters and Sciences": 
                            {
                            "College Requirements": {
                                "Requirements": Letters_And_Sciences_Requirements,
                                "Link": 'http://guide.berkeley.edu/undergraduate/colleges-schools/letters-science/#collegerequirementstext'
                            }, 
                            "Majors": {
                                "Physics": {
                                    "Requirements": Physics_Major_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/physics/#majorrequirementstext'
                                },
                                "Political Science": {
                                    "Requirements": PoliticalScience_Major_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/political-science/#majorrequirementstext'
                                },
                                "Psychology": {
                                    "Requirements": Psychology_Major_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/psychology/#majorrequirementstext'
                                },
                                "Data Science": {
                                    "Requirements": DataScience_Major_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/data-science/#majorrequirementstext'
                                },
                                "Statistics": {
                                    "Requirements": Statistics_Major_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/statistics/#majorrequirementstext'
                                },
                                "Molecular and Cell Biology--Biochemistry and Molecular Biology (Track 1)": {
                                    "Requirements": Molecular_and_Cell_Biology_Biochemisty_and_Molecular_Biology_Track1,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                },
                                "Molecular and Cell Biology--Biochemistry and Molecular Biology (Track 2)": {
                                    "Requirements": Molecular_and_Cell_Biology_Biochemisty_and_Molecular_Biology_Track2,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                },
                                "Molecular and Cell Biology--Cell and Developmental Biology (Track 1)": {
                                    "Requirements": Molecular_and_Cell_Biology_Cell_and_Developmental_Biology_Track1,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                },
                                "Molecular and Cell Biology--Cell and Developmental Biology (Track 2)": {
                                    "Requirements": Molecular_and_Cell_Biology_Cell_and_Developmental_Biology_Track2,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                },
                                "Molecular and Cell Biology--Genetics, Genomics and Development (Track 1)": {
                                    "Requirements": Molecular_and_Cell_Biology_Genetics_Genomics_And_Development_Track1,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                },
                                "Molecular and Cell Biology--Genetics, Genomics and Development (Track 2)": {
                                    "Requirements": Molecular_and_Cell_Biology_Genetics_Genomics_And_Development_Track2,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                },
                                "Molecular and Cell Biology--Immunology and Pathogenesis (Track 1)": {
                                    "Requirements": Molecular_and_Cell_Biology_Immunology_And_Pathogenesis_Track1,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                },
                                "Molecular and Cell Biology--Immunology and Pathogenesis (Track 2)": {
                                    "Requirements": Molecular_and_Cell_Biology_Immunology_And_Pathogenesis_Track2,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                },
                                "Molecular and Cell Biology--Neurobiology": {
                                    "Requirements": Molecular_and_Cell_Biology_Neurobiology_Track,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/molecular-cell-biology/#majorrequirementstext',
                                    "ShortenedName": "Molecular and Cell Biology"
                                }
                            }, 
                            "Minors": {
                                "Mathematics": {
                                    "Requirements": Mathematics_Minor_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/mathematics/#minorrequirementstext'
                                }
                            }
                        },
                        "College of Engineering": 
                            {
                            "College Requirements": {
                                "Requirements": DataScience_Major_Requirements,
                                "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/data-science/#majorrequirementstext'
                            },
                            "Minors": {
                                "Energy Engineering": {
                                    "Requirements": DataScience_Major_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/data-science/#majorrequirementstext'
                                }
                            },
                            "Majors": {
                                "Energy Engineering": {
                                    "Requirements": DataScience_Major_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/data-science/#majorrequirementstext'
                                }
                            }
                        },
                        "Haas School of Business":
                            {
                            "College Requirements": {
                                "Requirements": Haas_Requirements,
                                "Link": 'http://guide.berkeley.edu/undergraduate/colleges-schools/haas-business/#collegerequirementstext'
                            },
                            "Majors": {
                                "Business Administration": {
                                    "Requirements": BusinessAdministration_Major_Requirements,
                                    "Link": 'http://guide.berkeley.edu/undergraduate/degree-programs/business-administration/#majorrequirementstext'
                                }
                            }
                            }

                    }}

export default catalog;